/* ===========================================
   初中高频考点单词 - 背单词应用核心逻辑
   功能: 单词本 / 闪卡 / 选择题 / 拼写 / 统计
   =========================================== */

(function () {
  'use strict';

  // 合并初中和高中两个词库
  const ALL_WORDS = [].concat(
    (typeof WORDS_JUNIOR !== 'undefined') ? WORDS_JUNIOR : [],
    (typeof WORDS_SENIOR !== 'undefined') ? WORDS_SENIOR : []
  );

  // ===== 语音发音功能 =====
  const synth = window.speechSynthesis || null;
  let voices = [];
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices();
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }
  function speakWord(text) {
    if (!synth) { toast('当前浏览器不支持语音', 'error'); return; }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.85;
    u.pitch = 1;
    const enVoice = voices.find(v => v.lang && v.lang.indexOf('en') === 0 && v.localService);
    if (enVoice) u.voice = enVoice;
    synth.speak(u);
  }

  // ===== 状态管理 =====
  const STORAGE_KEY = 'vocab_app_state_v1';
  const state = {
    grade: 'all',          // 当前筛选年级
    search: '',            // 搜索关键词
    view: 'list',          // 当前视图
    progress: {},          // 单词进度 { wordKey: { learned: bool, mastered: bool } }
    history: []            // 学习记录
  };

  // 当前学习数据
  let currentList = [];     // 经筛选后的单词列表
  let flashQueue = [];      // 闪卡队列
  let flashIdx = 0;
  let flashFlipped = false;
  let quizQueue = [];
  let quizIdx = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let spellQueue = [];
  let spellIdx = 0;
  let spellScore = 0;
  let spellAnswered = false;
  let spellHintsUsed = 0;

  // ===== 工具函数 =====
  function wordKey(w) {
    return w.grade + ':' + w.word;
  }

  function getGradeName(grade) {
    return { 'junior': '初中', 'senior': '高中' }[grade] || '';
  }

  function getGradeClass(grade) {
    return 'grade-' + grade;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        progress: state.progress,
        history: state.history
      }));
    } catch (e) { /* localStorage 不可用时静默 */ }
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        state.progress = data.progress || {};
        state.history = data.history || [];
      }
    } catch (e) {}
  }

  function toast(msg, type) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      el.className = 'toast';
    }, 1800);
  }

  // 标记单词已学
  function markLearned(w) {
    const k = wordKey(w);
    if (!state.progress[k]) state.progress[k] = {};
    state.progress[k].learned = true;
    save();
  }

  function markMastered(w) {
    const k = wordKey(w);
    if (!state.progress[k]) state.progress[k] = {};
    state.progress[k].learned = true;
    state.progress[k].mastered = true;
    save();
  }

  function isLearned(w) {
    const p = state.progress[wordKey(w)];
    return p && p.learned;
  }

  function isMastered(w) {
    const p = state.progress[wordKey(w)];
    return p && p.mastered;
  }

  // 筛选单词
  function getFilteredWords() {
    return ALL_WORDS.filter(w => {
      if (state.grade !== 'all' && String(w.grade) !== String(state.grade)) return false;
      if (state.search) {
        const q = state.search.toLowerCase();
        if (w.word.toLowerCase().indexOf(q) === -1 &&
            w.meaning.indexOf(state.search) === -1) return false;
      }
      return true;
    });
  }

  // ===== 视图切换 =====
  function switchView(view) {
    state.view = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + view).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === view);
    });
    if (view === 'list') renderList();
    if (view === 'stats') renderStats();
  }

  // ===== 渲染头部统计 =====
  function renderHeaderStats() {
    const total = ALL_WORDS.length;
    let learned = 0, mastered = 0;
    ALL_WORDS.forEach(w => {
      if (isLearned(w)) learned++;
      if (isMastered(w)) mastered++;
    });
    document.getElementById('totalCount').textContent = total;
    document.getElementById('learnedCount').textContent = learned;
    document.getElementById('masteredCount').textContent = mastered;
  }

  // ===== 单词列表渲染 =====
  function renderList() {
    const grid = document.getElementById('wordGrid');
    const list = getFilteredWords();
    currentList = list;
    document.getElementById('resultCount').textContent = '共 ' + list.length + ' 个单词';

    if (list.length === 0) {
      grid.innerHTML = '<div style="text-align:center;color:#94a3b8;padding:60px 20px;grid-column:1/-1;">没有找到匹配的单词</div>';
      return;
    }

    grid.innerHTML = list.map((w, i) => {
      const learned = isLearned(w);
      const mastered = isMastered(w);
      const cardClass = 'word-card' + (mastered ? ' mastered' : (learned ? ' learned' : ''));
      const status = mastered
        ? '<span class="status-badge badge-mastered">已掌握</span>'
        : (learned ? '<span class="status-badge badge-learned">已学</span>' : '');
      return `
        <div class="${cardClass}" data-idx="${i}">
          <div class="card-top">
            <span class="card-en">${w.word}</span>
            <span class="card-grade-tag ${getGradeClass(w.grade)}">${getGradeName(w.grade)}</span>
          </div>
          <div class="card-phonetic">${w.phonetic}</div>
          <div class="card-pos">${w.pos}</div>
          <div class="card-cn">${w.meaning}</div>
          <div class="card-status">${status}</div>
        </div>`;
    }).join('');

    // 绑定点击
    grid.querySelectorAll('.word-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.idx, 10);
        openWordModal(currentList[idx]);
      });
    });

    renderHeaderStats();
  }

  // ===== 单词详情弹窗 =====
  function openWordModal(w) {
    const learned = isLearned(w);
    const mastered = isMastered(w);
    const body = document.getElementById('modalBody');
    body.innerHTML = `
      <div class="modal-word-row">
        <div class="modal-word">${w.word}</div>
        <button class="speak-btn" id="modalSpeak" title="朗读单词">🔊</button>
      </div>
      <div class="modal-phonetic">${w.phonetic} <span style="color:var(--primary);">${w.pos}</span>
        <span class="card-grade-tag ${getGradeClass(w.grade)}" style="margin-left:8px;">${getGradeName(w.grade)}</span>
      </div>
      <div class="modal-meaning">${w.meaning}</div>
      ${w.example ? `
      <div class="modal-example-box">
        <div class="modal-example-en">${w.example}</div>
        <div class="modal-example-cn">${w.trans || ''}</div>
      </div>` : ''}
      <div class="modal-tags">
        ${(w.tags || []).map(t => '<span class="tag-chip">' + t + '</span>').join('')}
      </div>
      <div class="modal-actions">
        ${mastered
          ? '<button class="btn-outline" id="modalUnmark">取消标记</button>'
          : (learned
            ? '<button class="btn-primary" id="modalMaster">标记为已掌握</button><button class="btn-outline" id="modalUnmark">取消已学</button>'
            : '<button class="btn-primary" id="modalLearn">标记为已学</button>')}
      </div>`;
    document.getElementById('wordModal').classList.add('show');

    const speakBtn = document.getElementById('modalSpeak');
    if (speakBtn) speakBtn.onclick = () => speakWord(w.word);
    const learnBtn = document.getElementById('modalLearn');
    const masterBtn = document.getElementById('modalMaster');
    const unmarkBtn = document.getElementById('modalUnmark');
    if (learnBtn) learnBtn.onclick = () => { markLearned(w); toast('已标记为已学', 'success'); closeModal(); renderList(); };
    if (masterBtn) masterBtn.onclick = () => { markMastered(w); toast('已掌握！继续保持', 'success'); closeModal(); renderList(); };
    if (unmarkBtn) unmarkBtn.onclick = () => {
      delete state.progress[wordKey(w)];
      save();
      toast('已取消标记');
      closeModal();
      renderList();
    };
  }

  function closeModal() {
    document.getElementById('wordModal').classList.remove('show');
  }

  // ===== 闪卡模式 =====
  function initFlashcard(onlyUnlearned) {
    let base = getFilteredWords();
    if (onlyUnlearned) {
      base = base.filter(w => !isLearned(w));
    }
    if (base.length === 0) {
      toast('没有可学习的单词', 'error');
      return;
    }
    flashQueue = shuffle(base);
    flashIdx = 0;
    flashFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (flashIdx >= flashQueue.length) {
      toast('全部单词学完！', 'success');
      flashIdx = 0;
    }
    const w = flashQueue[flashIdx];
    document.getElementById('flashIndex').textContent = flashIdx + 1;
    document.getElementById('flashTotal').textContent = flashQueue.length;
    document.getElementById('flashGrade').textContent = getGradeName(w.grade);
    document.getElementById('flashGrade').className = 'card-grade ' + getGradeClass(w.grade);
    document.getElementById('flashWord').textContent = w.word;
    document.getElementById('flashPhonetic').textContent = w.phonetic;
    document.getElementById('flashPos').textContent = w.pos;
    document.getElementById('flashWordBack').textContent = w.word;
    document.getElementById('flashMeaning').textContent = w.meaning;
    const exampleBox = document.querySelector('.flashcard-back .card-example');
    if (w.example) {
      exampleBox.style.display = '';
      document.getElementById('flashExample').textContent = w.example;
      document.getElementById('flashTrans').textContent = w.trans || '';
    } else {
      exampleBox.style.display = 'none';
      document.getElementById('flashExample').textContent = '';
      document.getElementById('flashTrans').textContent = '';
    }
    document.getElementById('flashTags').innerHTML =
      (w.tags || []).map(t => '<span class="tag-chip">' + t + '</span>').join('');
    // 绑定闪卡朗读按钮（阻止冒泡，避免触发翻卡）
    const speakFront = document.getElementById('flashSpeakFront');
    const speakBack = document.getElementById('flashSpeakBack');
    if (speakFront) speakFront.onclick = (e) => { e.stopPropagation(); speakWord(w.word); };
    if (speakBack) speakBack.onclick = (e) => { e.stopPropagation(); speakWord(w.word); };
    flashFlipped = false;
    document.getElementById('flashcard').classList.remove('flipped');
  }

  function flipCard() {
    flashFlipped = !flashFlipped;
    document.getElementById('flashcard').classList.toggle('flipped', flashFlipped);
  }

  function flashNext() {
    if (flashIdx < flashQueue.length - 1) {
      flashIdx++;
      renderFlashcard();
    } else {
      toast('已经是最后一个', 'success');
    }
  }

  function flashPrev() {
    if (flashIdx > 0) {
      flashIdx--;
      renderFlashcard();
    } else {
      toast('已经是第一个');
    }
  }

  function flashKnown() {
    markMastered(flashQueue[flashIdx]);
    toast('已标记为掌握', 'success');
    flashNext();
  }

  function flashUnfamiliar() {
    markLearned(flashQueue[flashIdx]);
    toast('已标记为已学，需复习');
    flashNext();
  }

  // ===== 选择题测验 =====
  function startQuiz() {
    let base = getFilteredWords();
    if (base.length < 4) {
      toast('当前词库少于4个单词，无法测验', 'error');
      return;
    }
    quizQueue = shuffle(base).slice(0, Math.min(10, base.length));
    quizIdx = 0;
    quizScore = 0;
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizBody').style.display = 'block';
    document.getElementById('quizTotal').textContent = quizQueue.length;
    renderQuiz();
  }

  function renderQuiz() {
    if (quizIdx >= quizQueue.length) {
      finishQuiz();
      return;
    }
    const w = quizQueue[quizIdx];
    quizAnswered = false;
    document.getElementById('quizIndex').textContent = quizIdx + 1;
    document.getElementById('quizScore').textContent = quizScore;
    document.getElementById('quizWord').textContent = w.word;
    document.getElementById('quizPhonetic').textContent = w.phonetic;

    // 生成选项: 正确答案 + 3个干扰项
    const distractors = shuffle(ALL_WORDS.filter(x => x.meaning !== w.meaning)).slice(0, 3);
    const options = shuffle([w, ...distractors]);

    const optsEl = document.getElementById('quizOptions');
    optsEl.innerHTML = options.map((o, i) =>
      `<button class="quiz-option" data-meaning="${o.meaning.replace(/"/g, '&quot;')}" data-correct="${o.meaning === w.meaning}">${String.fromCharCode(65 + i)}. ${o.meaning}</button>`
    ).join('');

    optsEl.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizAnswered) return;
        quizAnswered = true;
        const isCorrect = btn.dataset.correct === 'true';
        optsEl.querySelectorAll('.quiz-option').forEach(b => {
          b.classList.add('disabled');
          if (b.dataset.correct === 'true') b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
        });
        const fb = document.getElementById('quizFeedback');
        if (isCorrect) {
          quizScore++;
          fb.textContent = '✓ 回答正确！';
          fb.className = 'quiz-feedback show feedback-correct';
          markLearned(w);
        } else {
          fb.textContent = '✗ 正确答案：' + w.meaning;
          fb.className = 'quiz-feedback show feedback-wrong';
        }
        document.getElementById('quizNextBtn').style.display = 'inline-block';
      });
    });

    document.getElementById('quizFeedback').className = 'quiz-feedback';
    document.getElementById('quizNextBtn').style.display = 'none';
  }

  function quizNext() {
    quizIdx++;
    renderQuiz();
  }

  function finishQuiz() {
    document.getElementById('quizBody').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    const pct = Math.round(quizScore / quizQueue.length * 100);
    document.getElementById('resultScore').textContent = quizScore + ' / ' + quizQueue.length + ' (' + pct + '%)';
    let comment = '';
    if (pct === 100) comment = '太棒了！全部正确！🏆';
    else if (pct >= 80) comment = '做得很好，继续加油！';
    else if (pct >= 60) comment = '不错的成绩，再练练会更好！';
    else comment = '需要多复习哦，加油！';
    document.getElementById('resultComment').textContent = comment;

    // 记录历史
    addHistory('选择题', quizScore + '/' + quizQueue.length);
    renderHeaderStats();
  }

  // ===== 拼写测试 =====
  function startSpell() {
    let base = getFilteredWords();
    if (base.length < 1) {
      toast('当前没有可拼写的单词', 'error');
      return;
    }
    spellQueue = shuffle(base).slice(0, Math.min(10, base.length));
    spellIdx = 0;
    spellScore = 0;
    spellHintsUsed = 0;
    document.getElementById('spellStart').style.display = 'none';
    document.getElementById('spellResult').style.display = 'none';
    document.getElementById('spellBody').style.display = 'block';
    document.getElementById('spellTotal').textContent = spellQueue.length;
    renderSpell();
  }

  function renderSpell() {
    if (spellIdx >= spellQueue.length) {
      finishSpell();
      return;
    }
    const w = spellQueue[spellIdx];
    spellAnswered = false;
    document.getElementById('spellIndex').textContent = spellIdx + 1;
    document.getElementById('spellScore').textContent = spellScore;
    document.getElementById('spellMeaning').textContent = w.meaning;
    document.getElementById('spellPos').textContent = w.pos;
    // 提示: 首字母 + 下划线
    const hint = w.word[0] + '_'.repeat(w.word.length - 1);
    document.getElementById('spellHint').textContent = '提示：' + hint + ' (' + w.word.length + '字母)';
    document.getElementById('spellHint').style.display = 'none';
    const input = document.getElementById('spellInput');
    input.value = '';
    input.style.display = 'block';
    input.focus();
    document.getElementById('spellFeedback').className = 'spell-feedback';
    document.getElementById('spellSubmitBtn').style.display = 'inline-block';
    document.getElementById('spellHintBtn').style.display = 'inline-block';
    document.getElementById('spellNextBtn').style.display = 'none';
  }

  function submitSpell() {
    if (spellAnswered) return;
    const w = spellQueue[spellIdx];
    const input = document.getElementById('spellInput');
    const ans = input.value.trim().toLowerCase();
    if (!ans) {
      toast('请输入单词');
      return;
    }
    spellAnswered = true;
    const fb = document.getElementById('spellFeedback');
    if (ans === w.word.toLowerCase()) {
      spellScore++;
      fb.textContent = '✓ 拼写正确！' + w.word + ' — ' + w.meaning;
      fb.className = 'spell-feedback show feedback-correct';
      markLearned(w);
    } else {
      fb.textContent = '✗ 正确拼写：' + w.word + ' (你写的是 ' + ans + ')';
      fb.className = 'spell-feedback show feedback-wrong';
    }
    document.getElementById('spellSubmitBtn').style.display = 'none';
    document.getElementById('spellHintBtn').style.display = 'none';
    document.getElementById('spellNextBtn').style.display = 'inline-block';
    document.getElementById('spellNextBtn').focus();
  }

  function spellHint() {
    const w = spellQueue[spellIdx];
    document.getElementById('spellHint').style.display = 'block';
    spellHintsUsed++;
  }

  function spellNext() {
    spellIdx++;
    renderSpell();
  }

  function finishSpell() {
    document.getElementById('spellBody').style.display = 'none';
    document.getElementById('spellResult').style.display = 'block';
    const pct = Math.round(spellScore / spellQueue.length * 100);
    document.getElementById('spellResultScore').textContent = spellScore + ' / ' + spellQueue.length + ' (' + pct + '%)';
    let comment = '';
    if (pct === 100) comment = '完美！拼写全对！🏆';
    else if (pct >= 80) comment = '拼写很扎实！';
    else if (pct >= 60) comment = '还不错，多练拼写更熟练！';
    else comment = '拼写需要加强，加油！';
    document.getElementById('spellResultComment').textContent = comment;

    addHistory('拼写', spellScore + '/' + spellQueue.length);
    renderHeaderStats();
  }

  // ===== 学习记录 =====
  function addHistory(type, score) {
    const now = new Date();
    const time = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');
    state.history.unshift({ type, score, time });
    if (state.history.length > 30) state.history.length = 30;
    save();
  }

  // ===== 统计视图 =====
  function renderStats() {
    renderHeaderStats();
    const total = ALL_WORDS.length;
    let learned = 0, mastered = 0;
    ALL_WORDS.forEach(w => {
      if (isLearned(w)) learned++;
      if (isMastered(w)) mastered++;
    });
    const pct = total ? Math.round(learned / total * 100) : 0;
    const masterPct = total ? Math.round(mastered / total * 100) : 0;

    const cards = [
      { num: total, label: '总词数', cls: '' },
      { num: learned, label: '已学 (' + pct + '%)', cls: 'warning' },
      { num: mastered, label: '已掌握 (' + masterPct + '%)', cls: 'success' },
      { num: state.history.length, label: '练习次数', cls: '' }
    ];
    document.getElementById('statsCards').innerHTML = cards.map(c =>
      `<div class="stats-card ${c.cls}"><span class="num">${c.num}</span><div class="label">${c.label}</div></div>`
    ).join('');

    // 各年级进度
    const grades = ['junior', 'senior'];
    document.getElementById('gradeProgress').innerHTML = grades.map(g => {
      const words = ALL_WORDS.filter(w => w.grade === g);
      const l = words.filter(w => isLearned(w)).length;
      const p = words.length ? Math.round(l / words.length * 100) : 0;
      return `
        <div class="grade-bar">
          <div class="grade-bar-head">
            <span class="grade-bar-name">${getGradeName(g)} (${l}/${words.length})</span>
            <span class="grade-bar-pct">${p}%</span>
          </div>
          <div class="grade-bar-track">
            <div class="grade-bar-fill" style="width:${p}%"></div>
          </div>
        </div>`;
    }).join('');

    // 历史记录
    const log = document.getElementById('historyLog');
    if (state.history.length === 0) {
      log.innerHTML = '<div class="history-empty">还没有学习记录，开始练习吧！</div>';
    } else {
      log.innerHTML = state.history.map(h =>
        `<div class="history-item">
          <span class="history-type">${h.type}</span>
          <span class="history-score">${h.score}</span>
          <span class="history-time">${h.time}</span>
        </div>`
      ).join('');
    }
  }

  // ===== 事件绑定 =====
  function bindEvents() {
    // 导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // 年级筛选
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.grade = btn.dataset.grade;
        if (state.view === 'list') renderList();
      });
    });

    // 搜索
    document.getElementById('searchInput').addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      if (state.view === 'list') renderList();
    });

    // 列表操作
    document.getElementById('markAllLearnedBtn').addEventListener('click', () => {
      currentList.forEach(w => markLearned(w));
      toast('已将当前列表全部标记为已学', 'success');
      renderList();
    });
    document.getElementById('resetLearnedBtn').addEventListener('click', () => {
      if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
        state.progress = {};
        state.history = [];
        save();
        toast('进度已重置');
        renderList();
        renderHeaderStats();
      }
    });

    // 闪卡
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('flashFlip').addEventListener('click', (e) => { e.stopPropagation(); flipCard(); });
    document.getElementById('flashNext').addEventListener('click', (e) => { e.stopPropagation(); flashNext(); });
    document.getElementById('flashPrev').addEventListener('click', (e) => { e.stopPropagation(); flashPrev(); });
    document.getElementById('flashKnown').addEventListener('click', (e) => { e.stopPropagation(); flashKnown(); });
    document.getElementById('flashUnfamiliar').addEventListener('click', (e) => { e.stopPropagation(); flashUnfamiliar(); });
    document.getElementById('flashStartLearned').addEventListener('click', () => initFlashcard(true));
    document.getElementById('flashShuffle').addEventListener('click', () => initFlashcard(false));

    // 测验
    document.getElementById('quizStartBtn').addEventListener('click', startQuiz);
    document.getElementById('quizNextBtn').addEventListener('click', quizNext);
    document.getElementById('quizRestartBtn').addEventListener('click', () => {
      document.getElementById('quizResult').style.display = 'none';
      document.getElementById('quizStart').style.display = 'block';
    });

    // 拼写
    document.getElementById('spellStartBtn').addEventListener('click', startSpell);
    document.getElementById('spellSubmitBtn').addEventListener('click', submitSpell);
    document.getElementById('spellHintBtn').addEventListener('click', spellHint);
    document.getElementById('spellNextBtn').addEventListener('click', spellNext);
    document.getElementById('spellRestartBtn').addEventListener('click', () => {
      document.getElementById('spellResult').style.display = 'none';
      document.getElementById('spellStart').style.display = 'block';
    });
    document.getElementById('spellInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (spellAnswered) spellNext();
        else submitSpell();
      }
    });

    // 弹窗
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('wordModal').addEventListener('click', (e) => {
      if (e.target.id === 'wordModal') closeModal();
    });

    // 键盘快捷键(闪卡)
    document.addEventListener('keydown', (e) => {
      if (state.view !== 'flashcard') return;
      if (e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') flashNext();
      else if (e.key === 'ArrowLeft') flashPrev();
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
      else if (e.key === '1') flashUnfamiliar();
      else if (e.key === '2') flashKnown();
    });
  }

  // ===== 初始化 =====
  function init() {
    load();
    bindEvents();
    renderHeaderStats();
    renderList();
    // 默认初始化闪卡队列(全部)
    initFlashcard(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
