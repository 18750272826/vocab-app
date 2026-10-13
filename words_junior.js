const WORDS_JUNIOR = [
  { word: "single", phonetic: "/ˈsɪŋɡl/", pos: "adj.", meaning: "单个的", grade: "junior", example: "I want a single room.", trans: "我要单人间。", tags: ["基础"], related: [] },
  { word: "more", phonetic: "/mɔː(r)/", pos: "adj.", meaning: "更多的", grade: "junior", example: "I want more.", trans: "我要更多。", tags: ["比较级", "短语more and more"], related: [] },
  { word: "vehicle", phonetic: "/ˈviːəkl/", pos: "n.", meaning: "车辆", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "swim", phonetic: "/swɪm/", pos: "v.", meaning: "游泳", grade: "junior", example: "I can swim.", trans: "我会游泳。", tags: ["过去式swam", "过去分词swum"], related: [
    { type: "过去式", word: "swam" },
    { type: "过去分词", word: "swum" }
  ] },
  { word: "cream", phonetic: "/kriːm/", pos: "n.", meaning: "奶油", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "early", phonetic: "/ˈɜːli/", pos: "adv.", meaning: "早地", grade: "junior", example: "I get up early.", trans: "我起得早。", tags: ["比较级earlier"], related: [
    { type: "比较级", word: "earlier" }
  ] },
  { word: "bread", phonetic: "/bred/", pos: "n.", meaning: "面包", grade: "junior", example: "I eat bread for breakfast.", trans: "我早餐吃面包。", tags: ["不可数"], related: [] },
  { word: "pain", phonetic: "/peɪn/", pos: "n.", meaning: "疼痛", grade: "junior", example: "I feel pain in my arm.", trans: "我胳膊疼。", tags: ["形容词painful"], related: [] },
  { word: "amendment", phonetic: "/əˈmendmənt/", pos: "n.", meaning: "修正案", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gene", phonetic: "/dʒiːn/", pos: "n.", meaning: "基因", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "postcard", phonetic: "/ˈpəʊstkɑːd/", pos: "n.", meaning: "明信片", grade: "junior", example: "Send me a postcard.", trans: "给我寄明信片。", tags: ["基础"], related: [] },
  { word: "campaign", phonetic: "/kæmˈpeɪn/", pos: "n.", meaning: "运动", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "concern", phonetic: "/kənˈsɜːn/", pos: "v./n.", meaning: "关心", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "goal", phonetic: "/ɡəʊl/", pos: "n.", meaning: "目标；球门", grade: "junior", example: "Score a goal!", trans: "进球！", tags: ["高频"], related: [] },
  { word: "together", phonetic: "/təˈɡeðə(r)/", pos: "adv.", meaning: "一起", grade: "junior", example: "Let us go together.", trans: "我们一起去。", tags: ["基础"], related: [] },
  { word: "prove", phonetic: "/pruːv/", pos: "v.", meaning: "证明", grade: "junior", example: "Prove your point.", trans: "证明你的观点。", tags: ["高频"], related: [] },
  { word: "concept", phonetic: "/ˈkɒnsept/", pos: "n.", meaning: "概念", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "export", phonetic: "/ˈekspɔːt/", pos: "v.", meaning: "出口", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "feed", phonetic: "/fiːd/", pos: "v.", meaning: "喂", grade: "junior", example: "Feed the dog.", trans: "喂狗。", tags: ["过去式fed"], related: [
    { type: "过去式", word: "fed" }
  ] },
  { word: "ocean", phonetic: "/ˈəʊʃn/", pos: "n.", meaning: "海洋", grade: "junior", example: "The ocean is vast.", trans: "海洋广阔。", tags: ["基础"], related: [] },
  { word: "business", phonetic: "/ˈbɪznəs/", pos: "n.", meaning: "生意；业务", grade: "junior", example: "He has his own business.", trans: "他有自己的生意。", tags: ["高频"], related: [] },
  { word: "park", phonetic: "/pɑːk/", pos: "n.", meaning: "公园", grade: "junior", example: "Let us go to the park.", trans: "我们去公园吧。", tags: ["基础"], related: [] },
  { word: "hotel", phonetic: "/həʊˈtel/", pos: "n.", meaning: "酒店", grade: "junior", example: "We stayed at a hotel.", trans: "我们住在酒店。", tags: ["基础"], related: [] },
  { word: "fox", phonetic: "/fɒks/", pos: "n.", meaning: "狐狸", grade: "junior", example: "The fox is clever.", trans: "狐狸很聪明。", tags: ["基础"], related: [] },
  { word: "honor", phonetic: "/ˈɒnə(r)/", pos: "n.", meaning: "荣誉", grade: "junior", example: "It is an honor to meet you.", trans: "见到你很荣幸。", tags: ["英式honour"], related: [] },
  { word: "firm", phonetic: "/fɜːm/", pos: "adj.", meaning: "坚定的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boot", phonetic: "/buːt/", pos: "n.", meaning: "靴子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "anyway", phonetic: "/ˈeniweɪ/", pos: "adv.", meaning: "无论如何", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "flag", phonetic: "/flæɡ/", pos: "n.", meaning: "旗帜", grade: "junior", example: "The flag is red.", trans: "旗帜是红色的。", tags: ["基础"], related: [] },
  { word: "gold", phonetic: "/ɡəʊld/", pos: "n.", meaning: "金子", grade: "junior", example: "He found gold.", trans: "他发现了金子。", tags: ["不可数"], related: [] },
  { word: "jacket", phonetic: "/ˈdʒækɪt/", pos: "n.", meaning: "夹克", grade: "junior", example: "Put on your jacket.", trans: "穿上夹克。", tags: ["基础"], related: [] },
  { word: "walk", phonetic: "/wɔːk/", pos: "v.", meaning: "走", grade: "junior", example: "I walk to school.", trans: "我走路上学。", tags: ["基础"], related: [] },
  { word: "beyond", phonetic: "/bɪˈjɒnd/", pos: "prep.", meaning: "超出；在……那边", grade: "junior", example: "The town is beyond the hill.", trans: "小镇在山那边。", tags: ["高频"], related: [] },
  { word: "hat", phonetic: "/hæt/", pos: "n.", meaning: "帽子", grade: "junior", example: "She wears a hat.", trans: "她戴着帽子。", tags: ["基础"], related: [] },
  { word: "meet", phonetic: "/miːt/", pos: "v.", meaning: "见面；遇见", grade: "junior", example: "Nice to meet you.", trans: "很高兴见到你。", tags: ["过去式met", "同音meat"], related: [
    { type: "过去式", word: "met" },
    { type: "同音词", word: "meat" }
  ] },
  { word: "hello", phonetic: "/həˈləʊ/", pos: "int.", meaning: "你好", grade: "junior", example: "Hello, how are you?", trans: "你好，你好吗？", tags: ["基础"], related: [] },
  { word: "modern", phonetic: "/ˈmɒdn/", pos: "adj.", meaning: "现代的", grade: "junior", example: "This is a modern city.", trans: "这是现代城市。", tags: ["高频"], related: [] },
  { word: "personal", phonetic: "/ˈpɜːsənl/", pos: "adj.", meaning: "个人的", grade: "junior", example: "This is personal.", trans: "这是个人的。", tags: ["名词person"], related: [
    { type: "名词形式", word: "person" }
  ] },
  { word: "duty", phonetic: "/ˈdjuːti/", pos: "n.", meaning: "责任；值日", grade: "junior", example: "It is my duty to help.", trans: "帮助是我的责任。", tags: ["短语on duty"], related: [] },
  { word: "unlike", phonetic: "/ˌʌnˈlaɪk/", pos: "prep.", meaning: "不像", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "birth", phonetic: "/bɜːθ/", pos: "n.", meaning: "出生", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fish", phonetic: "/fɪʃ/", pos: "n.", meaning: "鱼", grade: "junior", example: "I caught a fish.", trans: "我钓到一条鱼。", tags: ["单复数同形"], related: [] },
  { word: "freedom", phonetic: "/ˈfriːdəm/", pos: "n.", meaning: "自由", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wisdom", phonetic: "/ˈwɪzdəm/", pos: "n.", meaning: "智慧", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "evening", phonetic: "/ˈiːvnɪŋ/", pos: "n.", meaning: "晚上", grade: "junior", example: "Good evening!", trans: "晚上好！", tags: ["基础"], related: [] },
  { word: "flash", phonetic: "/flæʃ/", pos: "v.", meaning: "闪光", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "constant", phonetic: "/ˈkɒnstənt/", pos: "adj.", meaning: "不断的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "technology", phonetic: "/tekˈnɒlədʒi/", pos: "n.", meaning: "技术", grade: "junior", example: "Technology changes fast.", trans: "技术变化快。", tags: ["高频"], related: [] },
  { word: "policy", phonetic: "/ˈpɒləsi/", pos: "n.", meaning: "政策", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "committee", phonetic: "/kəˈmɪti/", pos: "n.", meaning: "委员会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "amateur", phonetic: "/ˈæmətə(r)/", pos: "n.", meaning: "业余爱好者", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "master", phonetic: "/ˈmɑːstə(r)/", pos: "n.", meaning: "主人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "grass", phonetic: "/ɡrɑːs/", pos: "n.", meaning: "草", grade: "junior", example: "Do not walk on the grass.", trans: "不要在草地上走。", tags: ["不可数"], related: [] },
  { word: "cock", phonetic: "/kɒk/", pos: "n.", meaning: "公鸡", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "table", phonetic: "/ˈteɪbl/", pos: "n.", meaning: "桌子", grade: "junior", example: "Put it on the table.", trans: "放在桌上。", tags: ["基础"], related: [] },
  { word: "spring", phonetic: "/sprɪŋ/", pos: "n.", meaning: "春天", grade: "junior", example: "Spring is beautiful.", trans: "春天很美。", tags: ["基础"], related: [] },
  { word: "encourage", phonetic: "/ɪnˈkʌrɪdʒ/", pos: "v.", meaning: "鼓励", grade: "junior", example: "My teacher encourages me.", trans: "老师鼓励我。", tags: ["短语encourage sb to do"], related: [] },
  { word: "site", phonetic: "/saɪt/", pos: "n.", meaning: "地点", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "grandfather", phonetic: "/ˈɡrænfɑːðə(r)/", pos: "n.", meaning: "祖父", grade: "junior", example: "My grandfather is old.", trans: "我爷爷年纪大了。", tags: ["基础"], related: [] },
  { word: "study", phonetic: "/ˈstʌdi/", pos: "v.", meaning: "学习", grade: "junior", example: "I study English.", trans: "我学英语。", tags: ["过去式studied"], related: [
    { type: "过去式", word: "studied" }
  ] },
  { word: "fantasy", phonetic: "/ˈfæntəsi/", pos: "n.", meaning: "幻想", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "spot", phonetic: "/spɒt/", pos: "n.", meaning: "斑点", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "museum", phonetic: "/mjuˈziːəm/", pos: "n.", meaning: "博物馆", grade: "junior", example: "We visited the museum.", trans: "我们参观了博物馆。", tags: ["基础"], related: [] },
  { word: "science", phonetic: "/ˈsaɪəns/", pos: "n.", meaning: "科学", grade: "junior", example: "I like science.", trans: "我喜欢科学。", tags: ["基础"], related: [] },
  { word: "sandwich", phonetic: "/ˈsænwɪtʃ/", pos: "n.", meaning: "三明治", grade: "junior", example: "I had a sandwich.", trans: "我吃了个三明治。", tags: ["复数sandwiches"], related: [
    { type: "复数", word: "sandwiches" }
  ] },
  { word: "pilot", phonetic: "/ˈpaɪlət/", pos: "n.", meaning: "飞行员", grade: "junior", example: "He is a pilot.", trans: "他是飞行员。", tags: ["基础"], related: [] },
  { word: "west", phonetic: "/west/", pos: "n.", meaning: "西", grade: "junior", example: "The west is beautiful.", trans: "西方很美。", tags: ["基础"], related: [] },
  { word: "mention", phonetic: "/ˈmenʃn/", pos: "v.", meaning: "提及", grade: "junior", example: "Do not mention it.", trans: "不客气。", tags: ["高频"], related: [] },
  { word: "report", phonetic: "/rɪˈpɔːt/", pos: "n./v.", meaning: "报告", grade: "junior", example: "Write a report.", trans: "写报告。", tags: ["基础"], related: [] },
  { word: "box", phonetic: "/bɒks/", pos: "n.", meaning: "盒子", grade: "junior", example: "Open the box.", trans: "打开盒子。", tags: ["复数boxes"], related: [
    { type: "复数", word: "boxes" }
  ] },
  { word: "interior", phonetic: "/ɪnˈtɪəriə(r)/", pos: "n.", meaning: "内部", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "audio", phonetic: "/ˈɔːdiəʊ/", pos: "n.", meaning: "音频", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "identify", phonetic: "/aɪˈdentɪfaɪ/", pos: "v.", meaning: "识别", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tool", phonetic: "/tuːl/", pos: "n.", meaning: "工具", grade: "junior", example: "Use the right tool.", trans: "用合适的工具。", tags: ["基础"], related: [] },
  { word: "behavior", phonetic: "/bɪˈheɪvjə(r)/", pos: "n.", meaning: "行为", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chest", phonetic: "/tʃest/", pos: "n.", meaning: "胸部", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "grey", phonetic: "/ɡreɪ/", pos: "adj.", meaning: "灰色的", grade: "junior", example: "It is a grey day.", trans: "今天是阴天。", tags: ["美式gray"], related: [] },
  { word: "lung", phonetic: "/lʌŋ/", pos: "n.", meaning: "肺", grade: "junior", example: "Smoking harms your lungs.", trans: "吸烟伤害肺。", tags: ["基础"], related: [] },
  { word: "water", phonetic: "/ˈwɔːtə(r)/", pos: "n.", meaning: "水", grade: "junior", example: "Drink water.", trans: "喝水。", tags: ["不可数"], related: [] },
  { word: "military", phonetic: "/ˈmɪlətri/", pos: "adj.", meaning: "军事的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "evidence", phonetic: "/ˈevɪdəns/", pos: "n.", meaning: "证据", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "because", phonetic: "/bɪˈkɒz/", pos: "conj.", meaning: "因为", grade: "junior", example: "I stayed home because it rained.", trans: "因为下雨我待在家。", tags: ["基础", "易混because of"], related: [
    { type: "易混词", word: "because of" }
  ] },
  { word: "league", phonetic: "/liːɡ/", pos: "n.", meaning: "联盟", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "useful", phonetic: "/ˈjuːsfl/", pos: "adj.", meaning: "有用的", grade: "junior", example: "This is useful.", trans: "这很有用。", tags: ["名词use"], related: [
    { type: "名词形式", word: "use" }
  ] },
  { word: "activity", phonetic: "/ækˈtɪvəti/", pos: "n.", meaning: "活动", grade: "junior", example: "We have many school activities.", trans: "我们有很多学校活动。", tags: ["复数activities"], related: [
    { type: "复数", word: "activities" }
  ] },
  { word: "indicate", phonetic: "/ˈɪndɪkeɪt/", pos: "v.", meaning: "表明", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bill", phonetic: "/bɪl/", pos: "n.", meaning: "账单；钞票", grade: "junior", example: "Pay the bill, please.", trans: "请付账。", tags: ["高频"], related: [] },
  { word: "each", phonetic: "/iːtʃ/", pos: "pron.", meaning: "每个", grade: "junior", example: "Each student has a book.", trans: "每个学生都有一本书。", tags: ["短语each other"], related: [] },
  { word: "cash", phonetic: "/kæʃ/", pos: "n.", meaning: "现金", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fetch", phonetic: "/fetʃ/", pos: "v.", meaning: "去取来", grade: "junior", example: "Fetch me a glass of water.", trans: "给我拿杯水来。", tags: ["易混bring/take"], related: [
    { type: "易混词", word: "bring/take" }
  ] },
  { word: "road", phonetic: "/rəʊd/", pos: "n.", meaning: "路", grade: "junior", example: "Walk on the road.", trans: "走在路上。", tags: ["基础"], related: [] },
  { word: "anniversary", phonetic: "/ˌænɪˈvɜːsəri/", pos: "n.", meaning: "周年纪念", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "technical", phonetic: "/ˈteknɪkl/", pos: "adj.", meaning: "技术的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "constitution", phonetic: "/ˌkɒnstɪˈtjuːʃn/", pos: "n.", meaning: "宪法", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "day", phonetic: "/deɪ/", pos: "n.", meaning: "天；白天", grade: "junior", example: "Have a nice day!", trans: "祝你有美好的一天！", tags: ["基础"], related: [] },
  { word: "field", phonetic: "/fiːld/", pos: "n.", meaning: "田野；领域", grade: "junior", example: "Cows are in the field.", trans: "牛在田野里。", tags: ["基础"], related: [] },
  { word: "person", phonetic: "/ˈpɜːsn/", pos: "n.", meaning: "人", grade: "junior", example: "He is a kind person.", trans: "他是个善良的人。", tags: ["复数people/persons"], related: [
    { type: "复数", word: "people/persons" }
  ] },
  { word: "hill", phonetic: "/hɪl/", pos: "n.", meaning: "小山", grade: "junior", example: "We climbed the hill.", trans: "我们爬了小山。", tags: ["基础"], related: [] },
  { word: "general", phonetic: "/ˈdʒenrəl/", pos: "adj.", meaning: "一般的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "set", phonetic: "/set/", pos: "v.", meaning: "放置", grade: "junior", example: "Set the table.", trans: "摆桌子。", tags: ["过去式set"], related: [
    { type: "过去式", word: "set" }
  ] },
  { word: "football", phonetic: "/ˈfʊtbɔːl/", pos: "n.", meaning: "足球", grade: "junior", example: "I play football.", trans: "我踢足球。", tags: ["基础", "美语soccer"], related: [] },
  { word: "cool", phonetic: "/kuːl/", pos: "adj.", meaning: "凉爽的；酷的", grade: "junior", example: "It is cool in autumn.", trans: "秋天很凉爽。", tags: ["基础"], related: [] },
  { word: "countryside", phonetic: "/ˈkʌntrisaɪd/", pos: "n.", meaning: "农村", grade: "junior", example: "I live in the countryside.", trans: "我住在农村。", tags: ["基础"], related: [] },
  { word: "sport", phonetic: "/spɔːt/", pos: "n.", meaning: "运动", grade: "junior", example: "I love sports.", trans: "我喜欢运动。", tags: ["基础"], related: [] },
  { word: "print", phonetic: "/prɪnt/", pos: "v.", meaning: "打印", grade: "junior", example: "Print the document.", trans: "打印文件。", tags: ["基础"], related: [] },
  { word: "alternate", phonetic: "/ɔːlˈtɜːnət/", pos: "v.", meaning: "交替", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rescue", phonetic: "/ˈreskjuː/", pos: "v.", meaning: "营救", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fight", phonetic: "/faɪt/", pos: "v.", meaning: "打架；战斗", grade: "junior", example: "Do not fight with others.", trans: "不要和别人打架。", tags: ["过去式fought"], related: [
    { type: "过去式", word: "fought" }
  ] },
  { word: "collect", phonetic: "/kəˈlekt/", pos: "v.", meaning: "收集", grade: "junior", example: "I collect stamps.", trans: "我集邮。", tags: ["名词collection"], related: [
    { type: "名词形式", word: "collection" }
  ] },
  { word: "state", phonetic: "/steɪt/", pos: "n.", meaning: "州；状态", grade: "junior", example: "This is a state.", trans: "这是一个州。", tags: ["基础"], related: [] },
  { word: "nut", phonetic: "/nʌt/", pos: "n.", meaning: "坚果", grade: "junior", example: "I like nuts.", trans: "我喜欢坚果。", tags: ["基础"], related: [] },
  { word: "lock", phonetic: "/lɒk/", pos: "v.", meaning: "锁", grade: "junior", example: "Lock the door.", trans: "锁门。", tags: ["基础"], related: [] },
  { word: "think", phonetic: "/θɪŋk/", pos: "v.", meaning: "想；认为", grade: "junior", example: "I think you are right.", trans: "我认为你是对的。", tags: ["过去式thought"], related: [
    { type: "过去式", word: "thought" }
  ] },
  { word: "household", phonetic: "/ˈhaʊshəʊld/", pos: "n.", meaning: "家庭", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "extra", phonetic: "/ˈekstrə/", pos: "adj.", meaning: "额外的", grade: "junior", example: "I need extra time.", trans: "我需要额外的时间。", tags: ["高频"], related: [] },
  { word: "score", phonetic: "/skɔː(r)/", pos: "n.", meaning: "分数", grade: "junior", example: "What is your score?", trans: "你得了多少分？", tags: ["基础"], related: [] },
  { word: "scale", phonetic: "/skeɪl/", pos: "n.", meaning: "规模", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "justice", phonetic: "/ˈdʒʌstɪs/", pos: "n.", meaning: "正义", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "angle", phonetic: "/ˈæŋɡl/", pos: "n.", meaning: "角度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "there", phonetic: "/ðeə(r)/", pos: "adv.", meaning: "那里", grade: "junior", example: "Go there.", trans: "去那里。", tags: ["基础", "反义词here"], related: [
    { type: "反义词", word: "here" }
  ] },
  { word: "reach", phonetic: "/riːtʃ/", pos: "v.", meaning: "到达", grade: "junior", example: "We reached the top.", trans: "我们到达了顶部。", tags: ["基础"], related: [] },
  { word: "training", phonetic: "/ˈtreɪnɪŋ/", pos: "n.", meaning: "训练", grade: "junior", example: "We need training.", trans: "我们需要训练。", tags: ["不可数"], related: [] },
  { word: "abstract", phonetic: "/ˈæbstrækt/", pos: "adj.", meaning: "抽象的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "diagnosis", phonetic: "/ˌdaɪəɡˈnəʊsɪs/", pos: "n.", meaning: "诊断", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wing", phonetic: "/wɪŋ/", pos: "n.", meaning: "翅膀", grade: "junior", example: "The bird has wings.", trans: "鸟有翅膀。", tags: ["基础"], related: [] },
  { word: "checkout", phonetic: "/ˈtʃekaʊt/", pos: "n.", meaning: "结账", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pink", phonetic: "/pɪŋk/", pos: "adj.", meaning: "粉色的", grade: "junior", example: "Her dress is pink.", trans: "她的裙子是粉色的。", tags: ["基础"], related: [] },
  { word: "algorithm", phonetic: "/ˈælɡərɪðəm/", pos: "n.", meaning: "算法", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "carefully", phonetic: "/ˈkeəfəli/", pos: "adv.", meaning: "小心地", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "brother", phonetic: "/ˈbrʌðə(r)/", pos: "n.", meaning: "兄弟", grade: "junior", example: "My brother is older than me.", trans: "我哥哥比我大。", tags: ["基础"], related: [] },
  { word: "keep", phonetic: "/kiːp/", pos: "v.", meaning: "保持；保留", grade: "junior", example: "Keep quiet.", trans: "保持安静。", tags: ["过去式kept", "后接doing"], related: [
    { type: "过去式", word: "kept" }
  ] },
  { word: "brand", phonetic: "/brænd/", pos: "n.", meaning: "品牌", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "youth", phonetic: "/juːθ/", pos: "n.", meaning: "青春；青年", grade: "junior", example: "Youth is beautiful.", trans: "青春美好。", tags: ["不可数"], related: [] },
  { word: "point", phonetic: "/pɔɪnt/", pos: "n.", meaning: "点；分数", grade: "junior", example: "What is the point?", trans: "重点是什么？", tags: ["短语point at"], related: [] },
  { word: "touch", phonetic: "/tʌtʃ/", pos: "v.", meaning: "触摸", grade: "junior", example: "Do not touch.", trans: "不要碰。", tags: ["基础"], related: [] },
  { word: "subject", phonetic: "/ˈsʌbdʒɪkt/", pos: "n.", meaning: "科目", grade: "junior", example: "What is your favorite subject?", trans: "你最喜欢的科目是什么？", tags: ["基础"], related: [] },
  { word: "animal", phonetic: "/ˈænɪml/", pos: "n.", meaning: "动物", grade: "junior", example: "My favorite animal is the panda.", trans: "我最喜欢的动物是熊猫。", tags: ["基础"], related: [] },
  { word: "aid", phonetic: "/eɪd/", pos: "n.", meaning: "援助", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "release", phonetic: "/rɪˈliːs/", pos: "v.", meaning: "释放", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "canon", phonetic: "/ˈkænən/", pos: "n.", meaning: "准则", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "star", phonetic: "/stɑː(r)/", pos: "n.", meaning: "星星；明星", grade: "junior", example: "The stars shine.", trans: "星星闪烁。", tags: ["基础"], related: [] },
  { word: "tremble", phonetic: "/ˈtrembl/", pos: "v.", meaning: "颤抖", grade: "junior", example: "He trembled with fear.", trans: "他害怕得发抖。", tags: ["基础"], related: [] },
  { word: "east", phonetic: "/iːst/", pos: "n.", meaning: "东；东方", grade: "junior", example: "The sun rises in the east.", trans: "太阳从东方升起。", tags: ["基础"], related: [] },
  { word: "disease", phonetic: "/dɪˈziːz/", pos: "n.", meaning: "疾病", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "confuse", phonetic: "/kənˈfjuːz/", pos: "v.", meaning: "使困惑", grade: "junior", example: "You confuse me.", trans: "你把我弄糊涂了。", tags: ["形容词confused"], related: [] },
  { word: "loss", phonetic: "/lɒs/", pos: "n.", meaning: "损失", grade: "junior", example: "The company suffered a loss.", trans: "公司遭受了损失。", tags: ["基础"], related: [] },
  { word: "vision", phonetic: "/ˈvɪʒn/", pos: "n.", meaning: "视力", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "great", phonetic: "/ɡreɪt/", pos: "adj.", meaning: "伟大的；极好的", grade: "junior", example: "That is great!", trans: "太好了！", tags: ["基础"], related: [] },
  { word: "smart", phonetic: "/smɑːt/", pos: "adj.", meaning: "聪明的", grade: "junior", example: "He is smart.", trans: "他很聪明。", tags: ["基础"], related: [] },
  { word: "turn", phonetic: "/tɜːn/", pos: "v.", meaning: "转动；变成", grade: "junior", example: "Turn left.", trans: "左转。", tags: ["短语turn on"], related: [] },
  { word: "affect", phonetic: "/əˈfekt/", pos: "v.", meaning: "影响", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "face", phonetic: "/feɪs/", pos: "n.", meaning: "脸", grade: "junior", example: "Wash your face.", trans: "洗脸。", tags: ["基础"], related: [] },
  { word: "index", phonetic: "/ˈɪndeks/", pos: "n.", meaning: "索引", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bed", phonetic: "/bed/", pos: "n.", meaning: "床", grade: "junior", example: "Go to bed early.", trans: "早点睡觉。", tags: ["基础", "短语go to bed"], related: [] },
  { word: "rural", phonetic: "/ˈrʊərəl/", pos: "adj.", meaning: "农村的", grade: "junior", example: "He lives in a rural area.", trans: "他住在农村。", tags: ["反义词urban"], related: [
    { type: "反义词", word: "urban" }
  ] },
  { word: "ability", phonetic: "/əˈbɪləti/", pos: "n.", meaning: "能力；才能", grade: "junior", example: "He has the ability to learn fast.", trans: "他有快速学习的能力。", tags: ["高频", "可数"], related: [] },
  { word: "does", phonetic: "/dʌz/", pos: "v.", meaning: "做(第三人称)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "term", phonetic: "/tɜːm/", pos: "n.", meaning: "学期；术语", grade: "junior", example: "This term is short.", trans: "这学期短。", tags: ["基础"], related: [] },
  { word: "own", phonetic: "/əʊn/", pos: "adj.", meaning: "自己的", grade: "junior", example: "I have my own room.", trans: "我有自己的房间。", tags: ["基础"], related: [] },
  { word: "door", phonetic: "/dɔː(r)/", pos: "n.", meaning: "门", grade: "junior", example: "Open the door.", trans: "开门。", tags: ["基础"], related: [] },
  { word: "edit", phonetic: "/ˈedɪt/", pos: "v.", meaning: "编辑", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "office", phonetic: "/ˈɒfɪs/", pos: "n.", meaning: "办公室", grade: "junior", example: "He is in the office.", trans: "他在办公室。", tags: ["基础"], related: [] },
  { word: "bike", phonetic: "/baɪk/", pos: "n.", meaning: "自行车", grade: "junior", example: "I ride my bike to school.", trans: "我骑自行车上学。", tags: ["基础"], related: [] },
  { word: "Chinese", phonetic: "/ˌtʃaɪˈniːz/", pos: "n./adj.", meaning: "中国人；汉语", grade: "junior", example: "I am Chinese.", trans: "我是中国人。", tags: ["基础"], related: [] },
  { word: "station", phonetic: "/ˈsteɪʃn/", pos: "n.", meaning: "车站", grade: "junior", example: "Meet at the station.", trans: "在车站见。", tags: ["基础"], related: [] },
  { word: "photo", phonetic: "/ˈfəʊtəʊ/", pos: "n.", meaning: "照片", grade: "junior", example: "Take a photo.", trans: "拍照。", tags: ["复数photos", "全称photograph"], related: [
    { type: "复数", word: "photos" }
  ] },
  { word: "forever", phonetic: "/fərˈevə(r)/", pos: "adv.", meaning: "永远", grade: "junior", example: "Friends forever.", trans: "永远的朋友。", tags: ["基础"], related: [] },
  { word: "speed", phonetic: "/spiːd/", pos: "n.", meaning: "速度", grade: "junior", example: "The speed is high.", trans: "速度很快。", tags: ["基础"], related: [] },
  { word: "town", phonetic: "/taʊn/", pos: "n.", meaning: "城镇", grade: "junior", example: "I live in a small town.", trans: "我住在小镇。", tags: ["基础"], related: [] },
  { word: "surprise", phonetic: "/səˈpraɪz/", pos: "n./v.", meaning: "惊讶", grade: "junior", example: "What a surprise!", trans: "真令人惊讶！", tags: ["短语be surprised at"], related: [] },
  { word: "shout", phonetic: "/ʃaʊt/", pos: "v.", meaning: "喊", grade: "junior", example: "Do not shout.", trans: "不要喊。", tags: ["基础"], related: [] },
  { word: "writer", phonetic: "/ˈraɪtə(r)/", pos: "n.", meaning: "作家", grade: "junior", example: "He is a writer.", trans: "他是作家。", tags: ["基础"], related: [] },
  { word: "verify", phonetic: "/ˈverɪfaɪ/", pos: "v.", meaning: "核实", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cloud", phonetic: "/klaʊd/", pos: "n.", meaning: "云", grade: "junior", example: "There are many clouds in the sky.", trans: "天上有很多云。", tags: ["基础"], related: [] },
  { word: "capture", phonetic: "/ˈkæptʃə(r)/", pos: "v.", meaning: "捕获", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "venture", phonetic: "/ˈventʃə(r)/", pos: "n.", meaning: "冒险", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "import", phonetic: "/ˈɪmpɔːt/", pos: "v.", meaning: "进口", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cook", phonetic: "/kʊk/", pos: "v.", meaning: "做饭", grade: "junior", example: "My mother cooks dinner.", trans: "我妈妈做晚饭。", tags: ["基础"], related: [] },
  { word: "format", phonetic: "/ˈfɔːmæt/", pos: "n.", meaning: "格式", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mission", phonetic: "/ˈmɪʃn/", pos: "n.", meaning: "任务", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bankruptcy", phonetic: "/ˈbæŋkrʌptsi/", pos: "n.", meaning: "破产", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wonder", phonetic: "/ˈwʌndə(r)/", pos: "v.", meaning: "想知道", grade: "junior", example: "I wonder why.", trans: "我想知道为什么。", tags: ["基础"], related: [] },
  { word: "ton", phonetic: "/tʌn/", pos: "n.", meaning: "吨", grade: "junior", example: "It weighs a ton.", trans: "它重一吨。", tags: ["基础"], related: [] },
  { word: "idea", phonetic: "/aɪˈdɪə/", pos: "n.", meaning: "主意", grade: "junior", example: "That is a good idea.", trans: "好主意。", tags: ["基础"], related: [] },
  { word: "opera", phonetic: "/ˈɒprə/", pos: "n.", meaning: "歌剧", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "apart", phonetic: "/əˈpɑːt/", pos: "adv.", meaning: "分开", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "classical", phonetic: "/ˈklæsɪkl/", pos: "adj.", meaning: "古典的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "serve", phonetic: "/sɜːv/", pos: "v.", meaning: "服务", grade: "junior", example: "They serve good food.", trans: "他们提供好食物。", tags: ["名词service"], related: [
    { type: "名词形式", word: "service" }
  ] },
  { word: "ugly", phonetic: "/ˈʌɡli/", pos: "adj.", meaning: "丑陋的", grade: "junior", example: "The dog is ugly.", trans: "这狗很丑。", tags: ["比较级uglier", "反义词beautiful"], related: [
    { type: "比较级", word: "uglier" },
    { type: "反义词", word: "beautiful" }
  ] },
  { word: "especially", phonetic: "/ɪˈspeʃəli/", pos: "adv.", meaning: "特别；尤其", grade: "junior", example: "I love music, especially pop.", trans: "我喜欢音乐，尤其是流行音乐。", tags: ["高频"], related: [] },
  { word: "campus", phonetic: "/ˈkæmpəs/", pos: "n.", meaning: "校园", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "refer", phonetic: "/rɪˈfɜː(r)/", pos: "v.", meaning: "参考；提及", grade: "junior", example: "Refer to the book.", trans: "参考这本书。", tags: ["短语refer to"], related: [] },
  { word: "apartment", phonetic: "/əˈpɑːtmənt/", pos: "n.", meaning: "公寓", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "front", phonetic: "/frʌnt/", pos: "n.", meaning: "前面", grade: "junior", example: "Sit in the front.", trans: "坐前面。", tags: ["短语in front of"], related: [] },
  { word: "bound", phonetic: "/baʊnd/", pos: "adj.", meaning: "一定的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "register", phonetic: "/ˈredʒɪstə(r)/", pos: "v.", meaning: "登记", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "go", phonetic: "/ɡəʊ/", pos: "v.", meaning: "去", grade: "junior", example: "Let us go home.", trans: "我们回家吧。", tags: ["过去式went", "过去分词gone"], related: [
    { type: "过去式", word: "went" },
    { type: "过去分词", word: "gone" }
  ] },
  { word: "way", phonetic: "/weɪ/", pos: "n.", meaning: "路；方式", grade: "junior", example: "This is the way.", trans: "这是路。", tags: ["基础", "短语on the way"], related: [] },
  { word: "discount", phonetic: "/ˈdɪskaʊnt/", pos: "n.", meaning: "折扣", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "attack", phonetic: "/əˈtæk/", pos: "v./n.", meaning: "攻击；袭击", grade: "junior", example: "The dog attacked the cat.", trans: "狗袭击了猫。", tags: ["高频"], related: [] },
  { word: "duck", phonetic: "/dʌk/", pos: "n.", meaning: "鸭子", grade: "junior", example: "The duck is swimming.", trans: "鸭子在游泳。", tags: ["基础"], related: [] },
  { word: "diverse", phonetic: "/daɪˈvɜːs/", pos: "adj.", meaning: "多样的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "silence", phonetic: "/ˈsaɪləns/", pos: "n.", meaning: "沉默", grade: "junior", example: "Silence, please.", trans: "请安静。", tags: ["不可数", "形容词silent"], related: [] },
  { word: "speak", phonetic: "/spiːk/", pos: "v.", meaning: "说", grade: "junior", example: "Speak English.", trans: "说英语。", tags: ["过去式spoke", "过去分词spoken"], related: [
    { type: "过去式", word: "spoke" },
    { type: "过去分词", word: "spoken" }
  ] },
  { word: "steal", phonetic: "/stiːl/", pos: "v.", meaning: "偷", grade: "junior", example: "Do not steal.", trans: "不要偷。", tags: ["过去式stole"], related: [
    { type: "过去式", word: "stole" }
  ] },
  { word: "money", phonetic: "/ˈmʌni/", pos: "n.", meaning: "钱", grade: "junior", example: "I need some money.", trans: "我需要些钱。", tags: ["不可数"], related: [] },
  { word: "rat", phonetic: "/ræt/", pos: "n.", meaning: "老鼠", grade: "junior", example: "I hate rats.", trans: "我讨厌老鼠。", tags: ["基础"], related: [] },
  { word: "fiber", phonetic: "/ˈfaɪbə(r)/", pos: "n.", meaning: "纤维", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "property", phonetic: "/ˈprɒpəti/", pos: "n.", meaning: "财产", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "crazy", phonetic: "/ˈkreɪzi/", pos: "adj.", meaning: "疯狂的", grade: "junior", example: "He is crazy about football.", trans: "他对足球很着迷。", tags: ["短语be crazy about"], related: [] },
  { word: "mental", phonetic: "/ˈmentl/", pos: "adj.", meaning: "精神的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "session", phonetic: "/ˈseʃn/", pos: "n.", meaning: "会议", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shore", phonetic: "/ʃɔː(r)/", pos: "n.", meaning: "岸", grade: "junior", example: "Walk along the shore.", trans: "沿着岸走。", tags: ["基础"], related: [] },
  { word: "begin", phonetic: "/bɪˈɡɪn/", pos: "v.", meaning: "开始", grade: "junior", example: "The film begins at eight.", trans: "电影八点开始。", tags: ["过去式began", "短语begin with"], related: [
    { type: "过去式", word: "began" }
  ] },
  { word: "interview", phonetic: "/ˈɪntəvjuː/", pos: "n./v.", meaning: "面试；采访", grade: "junior", example: "I have a job interview.", trans: "我有个工作面试。", tags: ["高频"], related: [] },
  { word: "issue", phonetic: "/ˈɪʃuː/", pos: "n.", meaning: "问题；发行", grade: "junior", example: "This is a serious issue.", trans: "这是个严重问题。", tags: ["高频"], related: [] },
  { word: "gear", phonetic: "/ɡɪə(r)/", pos: "n.", meaning: "齿轮", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "step", phonetic: "/step/", pos: "n.", meaning: "步", grade: "junior", example: "Take a step.", trans: "走一步。", tags: ["基础"], related: [] },
  { word: "neighbor", phonetic: "/ˈneɪbə(r)/", pos: "n.", meaning: "邻居", grade: "junior", example: "My neighbor is friendly.", trans: "邻居很友好。", tags: ["英式neighbour"], related: [] },
  { word: "last", phonetic: "/lɑːst/", pos: "adj.", meaning: "最后的", grade: "junior", example: "This is the last day.", trans: "这是最后一天。", tags: ["基础", "短语at last"], related: [] },
  { word: "awful", phonetic: "/ˈɔːfl/", pos: "adj.", meaning: "糟糕的；可怕的", grade: "junior", example: "The weather is awful today.", trans: "今天天气糟透了。", tags: ["高频"], related: [
    { type: "副词", word: "awfully" }
  ] },
  { word: "account", phonetic: "/əˈkaʊnt/", pos: "n.", meaning: "账户", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "substance", phonetic: "/ˈsʌbstəns/", pos: "n.", meaning: "物质", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "forecast", phonetic: "/ˈfɔːkɑːst/", pos: "n.", meaning: "预报", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "date", phonetic: "/deɪt/", pos: "n.", meaning: "日期；约会", grade: "junior", example: "What is the date today?", trans: "今天几号？", tags: ["基础"], related: [] },
  { word: "census", phonetic: "/ˈsensəs/", pos: "n.", meaning: "人口普查", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "match", phonetic: "/mætʃ/", pos: "n.", meaning: "比赛；火柴", grade: "junior", example: "Watch the match.", trans: "看比赛。", tags: ["复数matches"], related: [
    { type: "复数", word: "matches" }
  ] },
  { word: "magic", phonetic: "/ˈmædʒɪk/", pos: "n.", meaning: "魔法", grade: "junior", example: "The show was magic.", trans: "表演很神奇。", tags: ["基础"], related: [] },
  { word: "broker", phonetic: "/ˈbrəʊkə(r)/", pos: "n.", meaning: "经纪人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "awesome", phonetic: "/ˈɔːsəm/", pos: "adj.", meaning: "令人敬畏的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "reality", phonetic: "/riˈæləti/", pos: "n.", meaning: "现实", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "territory", phonetic: "/ˈterətri/", pos: "n.", meaning: "领土", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "beer", phonetic: "/bɪə(r)/", pos: "n.", meaning: "啤酒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "deck", phonetic: "/dek/", pos: "n.", meaning: "甲板", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "passenger", phonetic: "/ˈpæsɪndʒə(r)/", pos: "n.", meaning: "乘客", grade: "junior", example: "There are many passengers.", trans: "有很多乘客。", tags: ["基础"], related: [] },
  { word: "income", phonetic: "/ˈɪnkʌm/", pos: "n.", meaning: "收入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gentleman", phonetic: "/ˈdʒentlmən/", pos: "n.", meaning: "绅士", grade: "junior", example: "He is a gentleman.", trans: "他是个绅士。", tags: ["复数gentlemen"], related: [
    { type: "复数", word: "gentlemen" }
  ] },
  { word: "medicine", phonetic: "/ˈmedsn/", pos: "n.", meaning: "药", grade: "junior", example: "Take the medicine.", trans: "吃药。", tags: ["不可数"], related: [] },
  { word: "fashion", phonetic: "/ˈfæʃn/", pos: "n.", meaning: "时尚", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "golf", phonetic: "/ɡɒlf/", pos: "n.", meaning: "高尔夫", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "talk", phonetic: "/tɔːk/", pos: "v.", meaning: "谈话", grade: "junior", example: "Talk to me.", trans: "跟我说话。", tags: ["短语talk about"], related: [] },
  { word: "tie", phonetic: "/taɪ/", pos: "v.", meaning: "系", grade: "junior", example: "Tie your shoes.", trans: "系鞋带。", tags: ["基础"], related: [] },
  { word: "pat", phonetic: "/pæt/", pos: "v.", meaning: "轻拍", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "quiet", phonetic: "/ˈkwaɪət/", pos: "adj.", meaning: "安静的", grade: "junior", example: "Be quiet.", trans: "安静。", tags: ["反义词noisy"], related: [
    { type: "反义词", word: "noisy" }
  ] },
  { word: "theory", phonetic: "/ˈθɪəri/", pos: "n.", meaning: "理论", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "butter", phonetic: "/ˈbʌtə(r)/", pos: "n.", meaning: "黄油", grade: "junior", example: "Put some butter on the bread.", trans: "在面包上抹点黄油。", tags: ["不可数"], related: [] },
  { word: "brown", phonetic: "/braʊn/", pos: "adj.", meaning: "棕色的", grade: "junior", example: "She has brown eyes.", trans: "她有棕色的眼睛。", tags: ["基础"], related: [] },
  { word: "time", phonetic: "/taɪm/", pos: "n.", meaning: "时间", grade: "junior", example: "What time is it?", trans: "几点了？", tags: ["基础"], related: [] },
  { word: "spray", phonetic: "/spreɪ/", pos: "v.", meaning: "喷", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chapter", phonetic: "/ˈtʃæptə(r)/", pos: "n.", meaning: "章节", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "even", phonetic: "/ˈiːvn/", pos: "adv.", meaning: "甚至", grade: "junior", example: "He even forgot his name.", trans: "他甚至忘了自己的名字。", tags: ["高频"], related: [] },
  { word: "gun", phonetic: "/ɡʌn/", pos: "n.", meaning: "枪", grade: "junior", example: "He has a toy gun.", trans: "他有一把玩具枪。", tags: ["基础"], related: [] },
  { word: "north", phonetic: "/nɔːθ/", pos: "n.", meaning: "北", grade: "junior", example: "The north is cold.", trans: "北方很冷。", tags: ["基础"], related: [] },
  { word: "pension", phonetic: "/ˈpenʃn/", pos: "n.", meaning: "养老金", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pill", phonetic: "/pɪl/", pos: "n.", meaning: "药丸", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "solid", phonetic: "/ˈsɒlɪd/", pos: "adj.", meaning: "固体的", grade: "junior", example: "Ice is solid water.", trans: "冰是固态水。", tags: ["基础"], related: [] },
  { word: "glad", phonetic: "/ɡlæd/", pos: "adj.", meaning: "高兴的", grade: "junior", example: "I am glad to see you.", trans: "很高兴见到你。", tags: ["基础"], related: [] },
  { word: "green", phonetic: "/ɡriːn/", pos: "adj.", meaning: "绿色的", grade: "junior", example: "The leaves are green.", trans: "叶子是绿色的。", tags: ["基础"], related: [] },
  { word: "got", phonetic: "/ɡɒt/", pos: "v.", meaning: "得到(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wealth", phonetic: "/welθ/", pos: "n.", meaning: "财富", grade: "junior", example: "Health is wealth.", trans: "健康就是财富。", tags: ["不可数", "形容词wealthy"], related: [] },
  { word: "less", phonetic: "/les/", pos: "adj.", meaning: "更少的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "practical", phonetic: "/ˈpræktɪkl/", pos: "adj.", meaning: "实际的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "forward", phonetic: "/ˈfɔːwəd/", pos: "adv.", meaning: "向前", grade: "junior", example: "Move forward.", trans: "向前走。", tags: ["短语look forward to"], related: [] },
  { word: "prison", phonetic: "/ˈprɪzn/", pos: "n.", meaning: "监狱", grade: "junior", example: "He is in prison.", trans: "他在监狱。", tags: ["基础"], related: [] },
  { word: "contest", phonetic: "/ˈkɒntest/", pos: "n.", meaning: "比赛", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "temple", phonetic: "/ˈtempl/", pos: "n.", meaning: "寺庙", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "journal", phonetic: "/ˈdʒɜːnl/", pos: "n.", meaning: "期刊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "alcohol", phonetic: "/ˈælkəhɒl/", pos: "n.", meaning: "酒精", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "standard", phonetic: "/ˈstændəd/", pos: "n.", meaning: "标准", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "absence", phonetic: "/ˈæbsəns/", pos: "n.", meaning: "缺席；不在", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "domestic", phonetic: "/dəˈmestɪk/", pos: "adj.", meaning: "国内的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "surround", phonetic: "/səˈraʊnd/", pos: "v.", meaning: "围绕", grade: "junior", example: "Trees surround the house.", trans: "树围绕着房子。", tags: ["基础"], related: [] },
  { word: "attribute", phonetic: "/əˈtrɪbjuːt/", pos: "v.", meaning: "归因于", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "red", phonetic: "/red/", pos: "adj.", meaning: "红色的", grade: "junior", example: "The apple is red.", trans: "苹果是红的。", tags: ["基础"], related: [] },
  { word: "beginning", phonetic: "/bɪˈɡɪnɪŋ/", pos: "n.", meaning: "开始", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "smell", phonetic: "/smel/", pos: "v.", meaning: "闻", grade: "junior", example: "It smells good.", trans: "闻起来很香。", tags: ["过去式smelled/smelt"], related: [
    { type: "过去式", word: "smelled" },
    { type: "过去式", word: "smelt" }
  ] },
  { word: "smile", phonetic: "/smaɪl/", pos: "v.", meaning: "微笑", grade: "junior", example: "She smiles at me.", trans: "她对我微笑。", tags: ["基础"], related: [] },
  { word: "jump", phonetic: "/dʒʌmp/", pos: "v.", meaning: "跳", grade: "junior", example: "Jump high!", trans: "跳高！", tags: ["基础"], related: [] },
  { word: "limit", phonetic: "/ˈlɪmɪt/", pos: "n.", meaning: "限制", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fundamental", phonetic: "/ˌfʌndəˈmentl/", pos: "adj.", meaning: "基本的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pay", phonetic: "/peɪ/", pos: "v.", meaning: "支付", grade: "junior", example: "Pay the bill.", trans: "付账。", tags: ["过去式paid", "短语pay for"], related: [
    { type: "过去式", word: "paid" }
  ] },
  { word: "toe", phonetic: "/təʊ/", pos: "n.", meaning: "脚趾", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rail", phonetic: "/reɪl/", pos: "n.", meaning: "栏杆", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "outside", phonetic: "/ˌaʊtˈsaɪd/", pos: "prep.", meaning: "在……外面", grade: "junior", example: "Play outside.", trans: "在外面玩。", tags: ["反义词inside"], related: [
    { type: "反义词", word: "inside" }
  ] },
  { word: "generator", phonetic: "/ˈdʒenəreɪtə(r)/", pos: "n.", meaning: "发电机", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "glove", phonetic: "/ɡlʌv/", pos: "n.", meaning: "手套", grade: "junior", example: "Wear gloves in winter.", trans: "冬天戴手套。", tags: ["基础"], related: [] },
  { word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", pos: "n.", meaning: "优点；优势", grade: "junior", example: "What is the advantage?", trans: "优势是什么？", tags: ["反义词disadvantage"], related: [
    { type: "反义词", word: "disadvantage" }
  ] },
  { word: "case", phonetic: "/keɪs/", pos: "n.", meaning: "情况；案例", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "confirm", phonetic: "/kənˈfɜːm/", pos: "v.", meaning: "确认", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "try", phonetic: "/traɪ/", pos: "v.", meaning: "尝试", grade: "junior", example: "Try again.", trans: "再试一次。", tags: ["后接to do/doing"], related: [] },
  { word: "blank", phonetic: "/blæŋk/", pos: "adj.", meaning: "空白的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "illegal", phonetic: "/ɪˈliːɡl/", pos: "adj.", meaning: "非法的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "prepare", phonetic: "/prɪˈpeə(r)/", pos: "v.", meaning: "准备", grade: "junior", example: "Prepare for the exam.", trans: "准备考试。", tags: ["短语prepare for"], related: [] },
  { word: "chess", phonetic: "/tʃes/", pos: "n.", meaning: "国际象棋", grade: "junior", example: "Let us play chess.", trans: "我们下棋吧。", tags: ["基础"], related: [] },
  { word: "value", phonetic: "/ˈvæljuː/", pos: "n.", meaning: "价值", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "full", phonetic: "/fʊl/", pos: "adj.", meaning: "满的", grade: "junior", example: "The glass is full.", trans: "杯子满了。", tags: ["反义词empty"], related: [
    { type: "反义词", word: "empty" }
  ] },
  { word: "heart", phonetic: "/hɑːt/", pos: "n.", meaning: "心脏；心", grade: "junior", example: "My heart beats fast.", trans: "我心跳很快。", tags: ["基础"], related: [] },
  { word: "pleasure", phonetic: "/ˈpleʒə(r)/", pos: "n.", meaning: "愉快", grade: "junior", example: "It is my pleasure.", trans: "不客气。", tags: ["基础"], related: [] },
  { word: "specific", phonetic: "/spəˈsɪfɪk/", pos: "adj.", meaning: "具体的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "seem", phonetic: "/siːm/", pos: "v.", meaning: "似乎", grade: "junior", example: "It seems fine.", trans: "似乎没事。", tags: ["基础"], related: [] },
  { word: "track", phonetic: "/træk/", pos: "n.", meaning: "轨道；足迹", grade: "junior", example: "Run on the track.", trans: "在跑道上跑。", tags: ["基础"], related: [] },
  { word: "pity", phonetic: "/ˈpɪti/", pos: "n.", meaning: "遗憾", grade: "junior", example: "What a pity!", trans: "真遗憾！", tags: ["基础"], related: [] },
  { word: "build", phonetic: "/bɪld/", pos: "v.", meaning: "建造", grade: "junior", example: "They built a new house.", trans: "他们建了一座新房子。", tags: ["过去式built"], related: [
    { type: "过去式", word: "built" }
  ] },
  { word: "further", phonetic: "/ˈfɜːðə(r)/", pos: "adv.", meaning: "进一步", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "channel", phonetic: "/ˈtʃænl/", pos: "n.", meaning: "频道；海峡", grade: "junior", example: "Change the channel.", trans: "换频道。", tags: ["高频"], related: [] },
  { word: "supreme", phonetic: "/suːˈpriːm/", pos: "adj.", meaning: "最高的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "facility", phonetic: "/fəˈsɪləti/", pos: "n.", meaning: "设施", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bottom", phonetic: "/ˈbɒtəm/", pos: "n.", meaning: "底部", grade: "junior", example: "The bottom of the sea is dark.", trans: "海底很暗。", tags: ["反义词top"], related: [
    { type: "反义词", word: "top" }
  ] },
  { word: "very", phonetic: "/ˈveri/", pos: "adv.", meaning: "非常", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "opposite", phonetic: "/ˈɒpəzɪt/", pos: "adj.", meaning: "相反的", grade: "junior", example: "The opposite side.", trans: "对面。", tags: ["基础"], related: [] },
  { word: "flow", phonetic: "/fləʊ/", pos: "v.", meaning: "流动", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "from", phonetic: "/frɒm/", pos: "prep.", meaning: "从", grade: "junior", example: "I am from China.", trans: "我来自中国。", tags: ["基础", "短语from...to..."], related: [] },
  { word: "never", phonetic: "/ˈnevə(r)/", pos: "adv.", meaning: "从不", grade: "junior", example: "I never lie.", trans: "我从不说谎。", tags: ["基础", "频率副词"], related: [] },
  { word: "company", phonetic: "/ˈkʌmpəni/", pos: "n.", meaning: "公司", grade: "junior", example: "He works in a big company.", trans: "他在一家大公司工作。", tags: ["复数companies"], related: [
    { type: "复数", word: "companies" }
  ] },
  { word: "exit", phonetic: "/ˈeksɪt/", pos: "n.", meaning: "出口", grade: "junior", example: "Find the exit.", trans: "找到出口。", tags: ["基础"], related: [] },
  { word: "automatic", phonetic: "/ˌɔːtəˈmætɪk/", pos: "adj.", meaning: "自动的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "auto", phonetic: "/ˈɔːtəʊ/", pos: "n.", meaning: "汽车", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cover", phonetic: "/ˈkʌvə(r)/", pos: "v.", meaning: "覆盖", grade: "junior", example: "Cover the food.", trans: "把食物盖上。", tags: ["短语be covered with"], related: [] },
  { word: "bowl", phonetic: "/bəʊl/", pos: "n.", meaning: "碗", grade: "junior", example: "A bowl of rice, please.", trans: "请来一碗米饭。", tags: ["基础"], related: [] },
  { word: "ill", phonetic: "/ɪl/", pos: "adj.", meaning: "生病的", grade: "junior", example: "He is ill today.", trans: "他今天生病了。", tags: ["易混sick"], related: [
    { type: "易混词", word: "sick" }
  ] },
  { word: "planet", phonetic: "/ˈplænɪt/", pos: "n.", meaning: "行星", grade: "junior", example: "Earth is a planet.", trans: "地球是行星。", tags: ["基础"], related: [] },
  { word: "street", phonetic: "/striːt/", pos: "n.", meaning: "街道", grade: "junior", example: "Walk on the street.", trans: "走在街上。", tags: ["基础"], related: [] },
  { word: "nature", phonetic: "/ˈneɪtʃə(r)/", pos: "n.", meaning: "自然", grade: "junior", example: "I love nature.", trans: "我热爱自然。", tags: ["形容词natural"], related: [] },
  { word: "fort", phonetic: "/fɔːt/", pos: "n.", meaning: "堡垒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cold", phonetic: "/kəʊld/", pos: "adj.", meaning: "冷的", grade: "junior", example: "It is very cold today.", trans: "今天很冷。", tags: ["基础", "反义词hot"], related: [
    { type: "反义词", word: "hot" }
  ] },
  { word: "chocolate", phonetic: "/ˈtʃɒklət/", pos: "n.", meaning: "巧克力", grade: "junior", example: "I love chocolate.", trans: "我喜欢巧克力。", tags: ["不可数"], related: [] },
  { word: "beef", phonetic: "/biːf/", pos: "n.", meaning: "牛肉", grade: "junior", example: "I had beef for dinner.", trans: "我晚饭吃了牛肉。", tags: ["不可数"], related: [] },
  { word: "reply", phonetic: "/rɪˈplaɪ/", pos: "v.", meaning: "回复", grade: "junior", example: "Please reply soon.", trans: "请尽快回复。", tags: ["基础"], related: [] },
  { word: "cheese", phonetic: "/tʃiːz/", pos: "n.", meaning: "奶酪", grade: "junior", example: "I like cheese on bread.", trans: "我喜欢面包上涂奶酪。", tags: ["不可数"], related: [] },
  { word: "competition", phonetic: "/ˌkɒmpəˈtɪʃn/", pos: "n.", meaning: "比赛；竞争", grade: "junior", example: "She won the competition.", trans: "她赢得了比赛。", tags: ["高频"], related: [] },
  { word: "spell", phonetic: "/spel/", pos: "v.", meaning: "拼写", grade: "junior", example: "Spell the word.", trans: "拼写这个词。", tags: ["过去式spelled/spelt"], related: [
    { type: "过去式", word: "spelled" },
    { type: "过去式", word: "spelt" }
  ] },
  { word: "ghost", phonetic: "/ɡəʊst/", pos: "n.", meaning: "鬼", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "celebrate", phonetic: "/ˈselɪbreɪt/", pos: "v.", meaning: "庆祝", grade: "junior", example: "We celebrate the New Year.", trans: "我们庆祝新年。", tags: ["名词celebration"], related: [
    { type: "名词形式", word: "celebration" }
  ] },
  { word: "funeral", phonetic: "/ˈfjuːnərəl/", pos: "n.", meaning: "葬礼", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "worry", phonetic: "/ˈwʌri/", pos: "v.", meaning: "担心", grade: "junior", example: "Do not worry.", trans: "别担心。", tags: ["过去式worried"], related: [
    { type: "过去式", word: "worried" }
  ] },
  { word: "nutrition", phonetic: "/njuˈtrɪʃn/", pos: "n.", meaning: "营养", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "invent", phonetic: "/ɪnˈvent/", pos: "v.", meaning: "发明", grade: "junior", example: "Edison invented the light bulb.", trans: "爱迪生发明了灯泡。", tags: ["名词invention"], related: [
    { type: "名词形式", word: "invention" }
  ] },
  { word: "hunt", phonetic: "/hʌnt/", pos: "v.", meaning: "打猎", grade: "junior", example: "They hunt deer.", trans: "他们猎鹿。", tags: ["基础"], related: [] },
  { word: "regard", phonetic: "/rɪˈɡɑːd/", pos: "v.", meaning: "认为", grade: "junior", example: "I regard him as a friend.", trans: "我把他当朋友。", tags: ["短语regard as"], related: [] },
  { word: "dining", phonetic: "/ˈdaɪnɪŋ/", pos: "n.", meaning: "进餐", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "left", phonetic: "/left/", pos: "n./adj.", meaning: "左边", grade: "junior", example: "Turn left.", trans: "左转。", tags: ["基础", "反义词right"], related: [
    { type: "反义词", word: "right" }
  ] },
  { word: "resume", phonetic: "/rɪˈzjuːm/", pos: "v.", meaning: "恢复", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "symbol", phonetic: "/ˈsɪmbl/", pos: "n.", meaning: "象征", grade: "junior", example: "It is a symbol of love.", trans: "这是爱的象征。", tags: ["基础"], related: [] },
  { word: "within", phonetic: "/wɪˈðɪn/", pos: "prep.", meaning: "在……内", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "behalf", phonetic: "/bɪˈhɑːf/", pos: "n.", meaning: "代表", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gap", phonetic: "/ɡæp/", pos: "n.", meaning: "差距", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "juice", phonetic: "/dʒuːs/", pos: "n.", meaning: "果汁", grade: "junior", example: "I want some juice.", trans: "我想要些果汁。", tags: ["不可数"], related: [] },
  { word: "mind", phonetic: "/maɪnd/", pos: "n./v.", meaning: "头脑；介意", grade: "junior", example: "Do you mind?", trans: "你介意吗？", tags: ["短语never mind"], related: [] },
  { word: "grove", phonetic: "/ɡrəʊv/", pos: "n.", meaning: "小树林", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "divorce", phonetic: "/dɪˈvɔːs/", pos: "n.", meaning: "离婚", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sentence", phonetic: "/ˈsentəns/", pos: "n.", meaning: "句子", grade: "junior", example: "Make a sentence.", trans: "造个句子。", tags: ["基础"], related: [] },
  { word: "sail", phonetic: "/seɪl/", pos: "v.", meaning: "航行", grade: "junior", example: "We sailed across the sea.", trans: "我们航行过海。", tags: ["基础"], related: [] },
  { word: "amount", phonetic: "/əˈmaʊnt/", pos: "n.", meaning: "数量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "drink", phonetic: "/drɪŋk/", pos: "v.", meaning: "喝", grade: "junior", example: "Drink some water.", trans: "喝点水。", tags: ["过去式drank", "过去分词drunk"], related: [
    { type: "过去式", word: "drank" },
    { type: "过去分词", word: "drunk" }
  ] },
  { word: "move", phonetic: "/muːv/", pos: "v.", meaning: "移动", grade: "junior", example: "Move the chair.", trans: "搬椅子。", tags: ["名词movement"], related: [
    { type: "名词形式", word: "movement" }
  ] },
  { word: "grace", phonetic: "/ɡreɪs/", pos: "n.", meaning: "优雅", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "talent", phonetic: "/ˈtælənt/", pos: "n.", meaning: "天赋", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fabric", phonetic: "/ˈfæbrɪk/", pos: "n.", meaning: "织物", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stable", phonetic: "/ˈsteɪbl/", pos: "adj.", meaning: "稳定的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "silk", phonetic: "/sɪlk/", pos: "n.", meaning: "丝绸", grade: "junior", example: "This is silk.", trans: "这是丝绸的。", tags: ["不可数"], related: [] },
  { word: "manner", phonetic: "/ˈmænə(r)/", pos: "n.", meaning: "方式", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "brave", phonetic: "/breɪv/", pos: "adj.", meaning: "勇敢的", grade: "junior", example: "He is a brave soldier.", trans: "他是一名勇敢的士兵。", tags: ["名词bravery"], related: [
    { type: "名词形式", word: "bravery" }
  ] },
  { word: "decide", phonetic: "/dɪˈsaɪd/", pos: "v.", meaning: "决定", grade: "junior", example: "I decide to study hard.", trans: "我决定努力学习。", tags: ["名词decision"], related: [
    { type: "名词形式", word: "decision" }
  ] },
  { word: "column", phonetic: "/ˈkɒləm/", pos: "n.", meaning: "栏；列", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "homework", phonetic: "/ˈhəʊmwɜːk/", pos: "n.", meaning: "家庭作业", grade: "junior", example: "Do your homework.", trans: "做作业。", tags: ["不可数"], related: [] },
  { word: "measure", phonetic: "/ˈmeʒə(r)/", pos: "v.", meaning: "测量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "copper", phonetic: "/ˈkɒpə(r)/", pos: "n.", meaning: "铜", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "song", phonetic: "/sɒŋ/", pos: "n.", meaning: "歌曲", grade: "junior", example: "Sing a song.", trans: "唱首歌。", tags: ["基础"], related: [] },
  { word: "dealing", phonetic: "/ˈdiːlɪŋ/", pos: "n.", meaning: "交易", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "soul", phonetic: "/səʊl/", pos: "n.", meaning: "灵魂", grade: "junior", example: "He has a kind soul.", trans: "他有善良的灵魂。", tags: ["基础"], related: [] },
  { word: "civil", phonetic: "/ˈsɪvl/", pos: "adj.", meaning: "公民的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "desire", phonetic: "/dɪˈzaɪə(r)/", pos: "v.", meaning: "渴望", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bid", phonetic: "/bɪd/", pos: "v.", meaning: "出价", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mystery", phonetic: "/ˈmɪstri/", pos: "n.", meaning: "谜", grade: "junior", example: "It is a mystery.", trans: "这是个谜。", tags: ["复数mysteries"], related: [
    { type: "复数", word: "mysteries" }
  ] },
  { word: "ground", phonetic: "/ɡraʊnd/", pos: "n.", meaning: "地面", grade: "junior", example: "Sit on the ground.", trans: "坐在地上。", tags: ["基础"], related: [] },
  { word: "determine", phonetic: "/dɪˈtɜːmɪn/", pos: "v.", meaning: "决定", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "attention", phonetic: "/əˈtenʃn/", pos: "n.", meaning: "注意；关注", grade: "junior", example: "Pay attention to the teacher.", trans: "注意听老师讲。", tags: ["高频", "短语pay attention to"], related: [] },
  { word: "half", phonetic: "/hɑːf/", pos: "n.", meaning: "一半", grade: "junior", example: "Half of the cake is mine.", trans: "一半蛋糕是我的。", tags: ["复数halves"], related: [
    { type: "复数", word: "halves" }
  ] },
  { word: "teenager", phonetic: "/ˈtiːneɪdʒə(r)/", pos: "n.", meaning: "青少年", grade: "junior", example: "I am a teenager.", trans: "我是青少年。", tags: ["基础"], related: [] },
  { word: "prime", phonetic: "/praɪm/", pos: "adj.", meaning: "主要的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hi", phonetic: "/haɪ/", pos: "int.", meaning: "嗨", grade: "junior", example: "Hi, everyone!", trans: "大家好！", tags: ["基础"], related: [] },
  { word: "flat", phonetic: "/flæt/", pos: "adj.", meaning: "平的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sum", phonetic: "/sʌm/", pos: "n.", meaning: "总数", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mad", phonetic: "/mæd/", pos: "adj.", meaning: "发疯的", grade: "junior", example: "He is mad at me.", trans: "他生我的气。", tags: ["比较级madder"], related: [
    { type: "比较级", word: "madder" }
  ] },
  { word: "minimum", phonetic: "/ˈmɪnɪməm/", pos: "n.", meaning: "最小值", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "scan", phonetic: "/skæn/", pos: "v.", meaning: "扫描", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "little", phonetic: "/ˈlɪtl/", pos: "adj.", meaning: "小的；少的", grade: "junior", example: "A little boy is crying.", trans: "一个小男孩在哭。", tags: ["比较级less"], related: [
    { type: "比较级", word: "less" }
  ] },
  { word: "relation", phonetic: "/rɪˈleɪʃn/", pos: "n.", meaning: "关系", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "below", phonetic: "/bɪˈləʊ/", pos: "prep.", meaning: "在……下面", grade: "junior", example: "The temperature is below zero.", trans: "温度在零度以下。", tags: ["反义词above"], related: [
    { type: "反义词", word: "above" }
  ] },
  { word: "marriage", phonetic: "/ˈmærɪdʒ/", pos: "n.", meaning: "婚姻", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "spy", phonetic: "/spaɪ/", pos: "n.", meaning: "间谍", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "alone", phonetic: "/əˈləʊn/", pos: "adj.", meaning: "单独的", grade: "junior", example: "She lives alone.", trans: "她独自生活。", tags: ["易混lonely"], related: [
    { type: "易混词", word: "lonely" }
  ] },
  { word: "happy", phonetic: "/ˈhæpi/", pos: "adj.", meaning: "高兴的", grade: "junior", example: "I am happy today.", trans: "我今天很高兴。", tags: ["比较级happier", "名词happiness"], related: [
    { type: "比较级", word: "happier" },
    { type: "名词形式", word: "happiness" }
  ] },
  { word: "creek", phonetic: "/kriːk/", pos: "n.", meaning: "小溪", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "logic", phonetic: "/ˈlɒdʒɪk/", pos: "n.", meaning: "逻辑", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "diet", phonetic: "/ˈdaɪət/", pos: "n.", meaning: "饮食", grade: "junior", example: "A balanced diet is important.", trans: "均衡饮食很重要。", tags: ["高频"], related: [] },
  { word: "puzzle", phonetic: "/ˈpʌzl/", pos: "n.", meaning: "谜", grade: "junior", example: "It is a puzzle.", trans: "这是个谜。", tags: ["基础"], related: [] },
  { word: "carbon", phonetic: "/ˈkɑːbən/", pos: "n.", meaning: "碳", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "consent", phonetic: "/kənˈsent/", pos: "n.", meaning: "同意", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lonely", phonetic: "/ˈləʊnli/", pos: "adj.", meaning: "孤独的", grade: "junior", example: "He feels lonely.", trans: "他感到孤独。", tags: ["易混alone"], related: [
    { type: "易混词", word: "alone" }
  ] },
  { word: "greet", phonetic: "/ɡriːt/", pos: "v.", meaning: "问候", grade: "junior", example: "Greet your teacher.", trans: "向老师问好。", tags: ["基础"], related: [] },
  { word: "president", phonetic: "/ˈprezɪdənt/", pos: "n.", meaning: "总统", grade: "junior", example: "He is the president.", trans: "他是总统。", tags: ["高频"], related: [] },
  { word: "silly", phonetic: "/ˈsɪli/", pos: "adj.", meaning: "傻的", grade: "junior", example: "Do not be silly.", trans: "别傻了。", tags: ["比较级sillier"], related: [
    { type: "比较级", word: "sillier" }
  ] },
  { word: "task", phonetic: "/tɑːsk/", pos: "n.", meaning: "任务", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "evolution", phonetic: "/ˌiːvəˈluːʃn/", pos: "n.", meaning: "进化", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "american", phonetic: "/əˈmerɪkən/", pos: "adj.", meaning: "美国的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "restaurant", phonetic: "/ˈrestrɒnt/", pos: "n.", meaning: "餐馆", grade: "junior", example: "Eat at a restaurant.", trans: "在餐馆吃饭。", tags: ["基础"], related: [] },
  { word: "host", phonetic: "/həʊst/", pos: "n.", meaning: "主人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "harbor", phonetic: "/ˈhɑːbə(r)/", pos: "n.", meaning: "港口", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "truth", phonetic: "/truːθ/", pos: "n.", meaning: "真相", grade: "junior", example: "Tell the truth.", trans: "说实话。", tags: ["不可数", "形容词true"], related: [] },
  { word: "appointment", phonetic: "/əˈpɔɪntmənt/", pos: "n.", meaning: "约会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "antique", phonetic: "/ænˈtiːk/", pos: "n.", meaning: "古董", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "emergency", phonetic: "/ɪˈmɜːdʒənsi/", pos: "n.", meaning: "紧急情况", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "normal", phonetic: "/ˈnɔːml/", pos: "adj.", meaning: "正常的", grade: "junior", example: "It is normal to be nervous.", trans: "紧张是正常的。", tags: ["反义词abnormal"], related: [
    { type: "反义词", word: "abnormal" }
  ] },
  { word: "knife", phonetic: "/naɪf/", pos: "n.", meaning: "刀", grade: "junior", example: "Use a knife to cut.", trans: "用刀切。", tags: ["复数knives"], related: [
    { type: "复数", word: "knives" }
  ] },
  { word: "boundary", phonetic: "/ˈbaʊndri/", pos: "n.", meaning: "边界", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "revolution", phonetic: "/ˌrevəˈluːʃn/", pos: "n.", meaning: "革命", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gather", phonetic: "/ˈɡæðə(r)/", pos: "v.", meaning: "聚集", grade: "junior", example: "Gather around.", trans: "围过来。", tags: ["高频"], related: [] },
  { word: "fool", phonetic: "/fuːl/", pos: "n.", meaning: "傻瓜", grade: "junior", example: "Do not be a fool.", trans: "别傻了。", tags: ["基础"], related: [] },
  { word: "backup", phonetic: "/ˈbækʌp/", pos: "n.", meaning: "备份", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rabbit", phonetic: "/ˈræbɪt/", pos: "n.", meaning: "兔子", grade: "junior", example: "The rabbit is cute.", trans: "兔子很可爱。", tags: ["基础"], related: [] },
  { word: "pot", phonetic: "/pɒt/", pos: "n.", meaning: "壶", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lake", phonetic: "/leɪk/", pos: "n.", meaning: "湖", grade: "junior", example: "The lake is beautiful.", trans: "湖很美。", tags: ["基础"], related: [] },
  { word: "mayor", phonetic: "/ˈmeɪə(r)/", pos: "n.", meaning: "市长", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clip", phonetic: "/klɪp/", pos: "n.", meaning: "夹子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bet", phonetic: "/bet/", pos: "v.", meaning: "打赌", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "information", phonetic: "/ˌɪnfəˈmeɪʃn/", pos: "n.", meaning: "信息", grade: "junior", example: "I need more information.", trans: "我需要更多信息。", tags: ["不可数"], related: [] },
  { word: "thread", phonetic: "/θred/", pos: "n.", meaning: "线", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "husband", phonetic: "/ˈhʌzbənd/", pos: "n.", meaning: "丈夫", grade: "junior", example: "Her husband is kind.", trans: "她丈夫很善良。", tags: ["基础"], related: [] },
  { word: "upstairs", phonetic: "/ˌʌpˈsteəz/", pos: "adv.", meaning: "在楼上", grade: "junior", example: "He went upstairs.", trans: "他上楼了。", tags: ["反义词downstairs"], related: [
    { type: "反义词", word: "downstairs" }
  ] },
  { word: "sofa", phonetic: "/ˈsəʊfə/", pos: "n.", meaning: "沙发", grade: "junior", example: "Sit on the sofa.", trans: "坐沙发。", tags: ["基础"], related: [] },
  { word: "bye", phonetic: "/baɪ/", pos: "int.", meaning: "再见", grade: "junior", example: "Bye! See you tomorrow.", trans: "再见！明天见。", tags: ["基础"], related: [] },
  { word: "apple", phonetic: "/ˈæpl/", pos: "n.", meaning: "苹果", grade: "junior", example: "I eat an apple every day.", trans: "我每天吃一个苹果。", tags: ["基础"], related: [] },
  { word: "smooth", phonetic: "/smuːð/", pos: "adj.", meaning: "光滑的", grade: "junior", example: "The surface is smooth.", trans: "表面光滑。", tags: ["基础"], related: [] },
  { word: "physics", phonetic: "/ˈfɪzɪks/", pos: "n.", meaning: "物理", grade: "junior", example: "I study physics.", trans: "我学物理。", tags: ["基础"], related: [] },
  { word: "chip", phonetic: "/tʃɪp/", pos: "n.", meaning: "芯片", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "warm", phonetic: "/wɔːm/", pos: "adj.", meaning: "温暖的", grade: "junior", example: "It is warm today.", trans: "今天暖和。", tags: ["基础"], related: [] },
  { word: "pour", phonetic: "/pɔː(r)/", pos: "v.", meaning: "倒", grade: "junior", example: "Pour some water.", trans: "倒些水。", tags: ["基础"], related: [] },
  { word: "foundation", phonetic: "/faʊnˈdeɪʃn/", pos: "n.", meaning: "基础", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "past", phonetic: "/pɑːst/", pos: "n.", meaning: "过去", grade: "junior", example: "In the past, life was hard.", trans: "过去生活很苦。", tags: ["基础"], related: [] },
  { word: "bank", phonetic: "/bæŋk/", pos: "n.", meaning: "银行；河岸", grade: "junior", example: "I need to go to the bank.", trans: "我需要去银行。", tags: ["基础"], related: [] },
  { word: "tiny", phonetic: "/ˈtaɪni/", pos: "adj.", meaning: "微小的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hometown", phonetic: "/ˈhəʊmtaʊn/", pos: "n.", meaning: "家乡", grade: "junior", example: "I miss my hometown.", trans: "我想念家乡。", tags: ["基础"], related: [] },
  { word: "consistent", phonetic: "/kənˈsɪstənt/", pos: "adj.", meaning: "一致的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cloudy", phonetic: "/ˈklaʊdi/", pos: "adj.", meaning: "多云的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "professor", phonetic: "/prəˈfesə(r)/", pos: "n.", meaning: "教授", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "flexible", phonetic: "/ˈfleksəbl/", pos: "adj.", meaning: "灵活的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "technique", phonetic: "/tekˈniːk/", pos: "n.", meaning: "技术", grade: "junior", example: "Learn new techniques.", trans: "学新技术。", tags: ["基础"], related: [] },
  { word: "band", phonetic: "/bænd/", pos: "n.", meaning: "乐队；带子", grade: "junior", example: "The band is playing well.", trans: "乐队演奏得很好。", tags: ["高频"], related: [] },
  { word: "bird", phonetic: "/bɜːd/", pos: "n.", meaning: "鸟", grade: "junior", example: "The bird can fly high.", trans: "鸟能飞得很高。", tags: ["基础"], related: [] },
  { word: "musical", phonetic: "/ˈmjuːzɪkl/", pos: "adj.", meaning: "音乐的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "respond", phonetic: "/rɪˈspɒnd/", pos: "v.", meaning: "回应", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "murder", phonetic: "/ˈmɜːdə(r)/", pos: "v.", meaning: "谋杀", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pardon", phonetic: "/ˈpɑːdn/", pos: "v.", meaning: "原谅", grade: "junior", example: "Pardon me.", trans: "对不起。", tags: ["基础"], related: [] },
  { word: "introduce", phonetic: "/ˌɪntrəˈdjuːs/", pos: "v.", meaning: "介绍", grade: "junior", example: "Let me introduce myself.", trans: "让我自我介绍。", tags: ["名词introduction"], related: [
    { type: "名词形式", word: "introduction" }
  ] },
  { word: "cart", phonetic: "/kɑːt/", pos: "n.", meaning: "手推车", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "amazing", phonetic: "/əˈmeɪzɪŋ/", pos: "adj.", meaning: "惊人的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cache", phonetic: "/kæʃ/", pos: "n.", meaning: "储藏", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lie", phonetic: "/laɪ/", pos: "v.", meaning: "躺；说谎", grade: "junior", example: "Lie down and rest.", trans: "躺下休息。", tags: ["过去式lay/lied"], related: [
    { type: "过去式", word: "lay" },
    { type: "过去式", word: "lied" }
  ] },
  { word: "lay", phonetic: "/leɪ/", pos: "v.", meaning: "放置", grade: "junior", example: "Lay the book on the table.", trans: "把书放在桌上。", tags: ["过去式laid"], related: [
    { type: "过去式", word: "laid" }
  ] },
  { word: "counsel", phonetic: "/ˈkaʊnsl/", pos: "v.", meaning: "劝告", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "thirsty", phonetic: "/ˈθɜːsti/", pos: "adj.", meaning: "口渴的", grade: "junior", example: "I am thirsty.", trans: "我渴了。", tags: ["名词thirst"], related: [
    { type: "名词形式", word: "thirst" }
  ] },
  { word: "function", phonetic: "/ˈfʌŋkʃn/", pos: "n.", meaning: "功能", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "glasses", phonetic: "/ˈɡlɑːsɪz/", pos: "n.", meaning: "眼镜", grade: "junior", example: "He wears glasses.", trans: "他戴眼镜。", tags: ["只有复数"], related: [] },
  { word: "classroom", phonetic: "/ˈklɑːsruːm/", pos: "n.", meaning: "教室", grade: "junior", example: "The classroom is clean.", trans: "教室很干净。", tags: ["基础"], related: [] },
  { word: "giraffe", phonetic: "/dʒəˈrɑːf/", pos: "n.", meaning: "长颈鹿", grade: "junior", example: "The giraffe is tall.", trans: "长颈鹿很高。", tags: ["基础"], related: [] },
  { word: "suppose", phonetic: "/səˈpəʊz/", pos: "v.", meaning: "假设", grade: "junior", example: "Suppose it rains.", trans: "假如下雨。", tags: ["基础"], related: [] },
  { word: "query", phonetic: "/ˈkwɪəri/", pos: "n.", meaning: "疑问", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lend", phonetic: "/lend/", pos: "v.", meaning: "借出", grade: "junior", example: "Can you lend me money?", trans: "你能借我钱吗？", tags: ["过去式lent", "反义词borrow"], related: [
    { type: "过去式", word: "lent" },
    { type: "反义词", word: "borrow" }
  ] },
  { word: "graphics", phonetic: "/ˈɡræfɪks/", pos: "n.", meaning: "图形", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "felt", phonetic: "/felt/", pos: "n.", meaning: "毛毡", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "strong", phonetic: "/strɒŋ/", pos: "adj.", meaning: "强壮的", grade: "junior", example: "He is strong.", trans: "他很强壮。", tags: ["比较级stronger"], related: [
    { type: "比较级", word: "stronger" }
  ] },
  { word: "trial", phonetic: "/ˈtraɪəl/", pos: "n.", meaning: "审判", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "insert", phonetic: "/ɪnˈsɜːt/", pos: "v.", meaning: "插入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hair", phonetic: "/heə(r)/", pos: "n.", meaning: "头发", grade: "junior", example: "She has long hair.", trans: "她有长头发。", tags: ["不可数"], related: [] },
  { word: "new", phonetic: "/njuː/", pos: "adj.", meaning: "新的", grade: "junior", example: "I have a new bike.", trans: "我有新自行车。", tags: ["反义词old"], related: [
    { type: "反义词", word: "old" }
  ] },
  { word: "common", phonetic: "/ˈkɒmən/", pos: "adj.", meaning: "普通的；共同的", grade: "junior", example: "This is a common mistake.", trans: "这是一个常见错误。", tags: ["高频", "短语in common"], related: [] },
  { word: "man", phonetic: "/mæn/", pos: "n.", meaning: "男人", grade: "junior", example: "The man is tall.", trans: "那个男人很高。", tags: ["复数men"], related: [
    { type: "复数", word: "men" }
  ] },
  { word: "proud", phonetic: "/praʊd/", pos: "adj.", meaning: "骄傲的", grade: "junior", example: "I am proud of you.", trans: "我为你骄傲。", tags: ["短语be proud of"], related: [] },
  { word: "permit", phonetic: "/pəˈmɪt/", pos: "v.", meaning: "允许", grade: "junior", example: "Smoking is not permitted.", trans: "禁止吸烟。", tags: ["名词permission"], related: [
    { type: "名词形式", word: "permission" }
  ] },
  { word: "fifth", phonetic: "/fɪfθ/", pos: "num.", meaning: "第五", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cow", phonetic: "/kaʊ/", pos: "n.", meaning: "奶牛", grade: "junior", example: "The cow gives milk.", trans: "奶牛产奶。", tags: ["基础"], related: [] },
  { word: "return", phonetic: "/rɪˈtɜːn/", pos: "v.", meaning: "返回；归还", grade: "junior", example: "Return the book.", trans: "归还书。", tags: ["基础"], related: [] },
  { word: "strawberry", phonetic: "/ˈstrɔːbəri/", pos: "n.", meaning: "草莓", grade: "junior", example: "I love strawberries.", trans: "我喜欢草莓。", tags: ["复数strawberries"], related: [
    { type: "复数", word: "strawberries" }
  ] },
  { word: "expect", phonetic: "/ɪkˈspekt/", pos: "v.", meaning: "期望", grade: "junior", example: "I expect you to come.", trans: "我期望你来。", tags: ["短语expect to do"], related: [] },
  { word: "pull", phonetic: "/pʊl/", pos: "v.", meaning: "拉", grade: "junior", example: "Pull the door.", trans: "拉门。", tags: ["反义词push"], related: [
    { type: "反义词", word: "push" }
  ] },
  { word: "shirt", phonetic: "/ʃɜːt/", pos: "n.", meaning: "衬衫", grade: "junior", example: "Wear a shirt.", trans: "穿衬衫。", tags: ["基础"], related: [] },
  { word: "cap", phonetic: "/kæp/", pos: "n.", meaning: "帽子", grade: "junior", example: "He wears a cap.", trans: "他戴着一顶帽子。", tags: ["基础"], related: [] },
  { word: "potato", phonetic: "/pəˈteɪtəʊ/", pos: "n.", meaning: "土豆", grade: "junior", example: "I like potatoes.", trans: "我喜欢土豆。", tags: ["复数potatoes"], related: [
    { type: "复数", word: "potatoes" }
  ] },
  { word: "team", phonetic: "/tiːm/", pos: "n.", meaning: "队；组", grade: "junior", example: "We are a team.", trans: "我们是一队。", tags: ["基础"], related: [] },
  { word: "worth", phonetic: "/wɜːθ/", pos: "adj.", meaning: "值得的", grade: "junior", example: "It is worth it.", trans: "值得。", tags: ["短语be worth doing"], related: [] },
  { word: "morning", phonetic: "/ˈmɔːnɪŋ/", pos: "n.", meaning: "早晨", grade: "junior", example: "Good morning!", trans: "早上好！", tags: ["基础"], related: [] },
  { word: "invite", phonetic: "/ɪnˈvaɪt/", pos: "v.", meaning: "邀请", grade: "junior", example: "I invite you to my party.", trans: "我邀请你参加我的聚会。", tags: ["名词invitation"], related: [
    { type: "名词形式", word: "invitation" }
  ] },
  { word: "next", phonetic: "/nekst/", pos: "adj.", meaning: "下一个", grade: "junior", example: "See you next week.", trans: "下周见。", tags: ["基础"], related: [] },
  { word: "formal", phonetic: "/ˈfɔːml/", pos: "adj.", meaning: "正式的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "liberty", phonetic: "/ˈlɪbəti/", pos: "n.", meaning: "自由", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "buyer", phonetic: "/ˈbaɪə(r)/", pos: "n.", meaning: "买家", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "math", phonetic: "/mæθ/", pos: "n.", meaning: "数学", grade: "junior", example: "I am good at math.", trans: "我数学好。", tags: ["全称mathematics"], related: [] },
  { word: "toy", phonetic: "/tɔɪ/", pos: "n.", meaning: "玩具", grade: "junior", example: "The boy has many toys.", trans: "男孩有很多玩具。", tags: ["复数toys"], related: [
    { type: "复数", word: "toys" }
  ] },
  { word: "fail", phonetic: "/feɪl/", pos: "v.", meaning: "失败", grade: "junior", example: "Do not fail again.", trans: "不要再失败了。", tags: ["名词failure", "反义词succeed"], related: [
    { type: "名词形式", word: "failure" },
    { type: "反义词", word: "succeed" }
  ] },
  { word: "insurance", phonetic: "/ɪnˈʃʊərəns/", pos: "n.", meaning: "保险", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "scheme", phonetic: "/skiːm/", pos: "n.", meaning: "计划", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ever", phonetic: "/ˈevə(r)/", pos: "adv.", meaning: "曾经", grade: "junior", example: "Have you ever been to Beijing?", trans: "你去过北京吗？", tags: ["基础", "常用于完成时"], related: [] },
  { word: "space", phonetic: "/speɪs/", pos: "n.", meaning: "空间；太空", grade: "junior", example: "I need more space.", trans: "我需要更多空间。", tags: ["基础"], related: [] },
  { word: "race", phonetic: "/reɪs/", pos: "n.", meaning: "比赛", grade: "junior", example: "Watch the race.", trans: "看比赛。", tags: ["基础"], related: [] },
  { word: "attend", phonetic: "/əˈtend/", pos: "v.", meaning: "出席；参加", grade: "junior", example: "I will attend the meeting.", trans: "我将出席会议。", tags: ["短语attend school"], related: [] },
  { word: "leader", phonetic: "/ˈliːdə(r)/", pos: "n.", meaning: "领导者", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "excuse", phonetic: "/ɪkˈskjuːz/", pos: "v.", meaning: "原谅", grade: "junior", example: "Excuse me.", trans: "打扰一下。", tags: ["基础", "短语excuse me"], related: [] },
  { word: "material", phonetic: "/məˈtɪəriəl/", pos: "n.", meaning: "材料", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "picnic", phonetic: "/ˈpɪknɪk/", pos: "n.", meaning: "野餐", grade: "junior", example: "Let us have a picnic.", trans: "我们野餐吧。", tags: ["基础"], related: [] },
  { word: "generic", phonetic: "/dʒəˈnerɪk/", pos: "adj.", meaning: "通用的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "found", phonetic: "/faʊnd/", pos: "v.", meaning: "建立", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hour", phonetic: "/ˈaʊə(r)/", pos: "n.", meaning: "小时", grade: "junior", example: "An hour has 60 minutes.", trans: "一小时有60分钟。", tags: ["h不发音"], related: [] },
  { word: "teacher", phonetic: "/ˈtiːtʃə(r)/", pos: "n.", meaning: "老师", grade: "junior", example: "My teacher is kind.", trans: "老师很善良。", tags: ["基础"], related: [] },
  { word: "sea", phonetic: "/siː/", pos: "n.", meaning: "海", grade: "junior", example: "The sea is blue.", trans: "海是蓝的。", tags: ["基础", "同音see"], related: [
    { type: "同音词", word: "see" }
  ] },
  { word: "appropriate", phonetic: "/əˈprəʊpriət/", pos: "adj.", meaning: "适当的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fault", phonetic: "/fɔːlt/", pos: "n.", meaning: "过错", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "grand", phonetic: "/ɡrænd/", pos: "adj.", meaning: "宏大的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "complaint", phonetic: "/kəmˈpleɪnt/", pos: "n.", meaning: "抱怨", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "academic", phonetic: "/ˌækəˈdemɪk/", pos: "adj.", meaning: "学术的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "born", phonetic: "/bɔːn/", pos: "adj.", meaning: "出生的", grade: "junior", example: "I was born in 2010.", trans: "我出生于2010年。", tags: ["短语be born"], related: [] },
  { word: "young", phonetic: "/jʌŋ/", pos: "adj.", meaning: "年轻的", grade: "junior", example: "He is young.", trans: "他很年轻。", tags: ["反义词old"], related: [
    { type: "反义词", word: "old" }
  ] },
  { word: "athletic", phonetic: "/æθˈletɪk/", pos: "adj.", meaning: "运动的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "submit", phonetic: "/səbˈmɪt/", pos: "v.", meaning: "提交", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bug", phonetic: "/bʌɡ/", pos: "n.", meaning: "虫子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "forgot", phonetic: "/fəˈɡɒt/", pos: "v.", meaning: "忘记(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "thus", phonetic: "/ðʌs/", pos: "adv.", meaning: "因此", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "transport", phonetic: "/ˈtrænspɔːt/", pos: "n.", meaning: "运输", grade: "junior", example: "Public transport.", trans: "公共交通。", tags: ["基础"], related: [] },
  { word: "connect", phonetic: "/kəˈnekt/", pos: "v.", meaning: "连接", grade: "junior", example: "Connect the two wires.", trans: "把两根线连起来。", tags: ["短语connect to"], related: [] },
  { word: "question", phonetic: "/ˈkwestʃən/", pos: "n.", meaning: "问题", grade: "junior", example: "Answer the question.", trans: "回答问题。", tags: ["基础"], related: [] },
  { word: "window", phonetic: "/ˈwɪndəʊ/", pos: "n.", meaning: "窗户", grade: "junior", example: "Open the window.", trans: "开窗。", tags: ["基础"], related: [] },
  { word: "hurt", phonetic: "/hɜːt/", pos: "v.", meaning: "受伤；伤害", grade: "junior", example: "My leg hurts.", trans: "我腿疼。", tags: ["过去式hurt"], related: [
    { type: "过去式", word: "hurt" }
  ] },
  { word: "chat", phonetic: "/tʃæt/", pos: "v.", meaning: "聊天", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", pos: "n.", meaning: "操场", grade: "junior", example: "We play on the playground.", trans: "我们在操场玩。", tags: ["基础"], related: [] },
  { word: "television", phonetic: "/ˈtelɪvɪʒn/", pos: "n.", meaning: "电视", grade: "junior", example: "Watch television.", trans: "看电视。", tags: ["基础", "缩写TV"], related: [] },
  { word: "rapid", phonetic: "/ˈræpɪd/", pos: "adj.", meaning: "迅速的", grade: "junior", example: "He made rapid progress.", trans: "他进步很快。", tags: ["高频"], related: [] },
  { word: "button", phonetic: "/ˈbʌtn/", pos: "n.", meaning: "按钮", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "story", phonetic: "/ˈstɔːri/", pos: "n.", meaning: "故事", grade: "junior", example: "Tell me a story.", trans: "给我讲个故事。", tags: ["复数stories"], related: [
    { type: "复数", word: "stories" }
  ] },
  { word: "aware", phonetic: "/əˈweə(r)/", pos: "adj.", meaning: "意识到的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tax", phonetic: "/tæks/", pos: "n.", meaning: "税", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "giant", phonetic: "/ˈdʒaɪənt/", pos: "n.", meaning: "巨人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "capacity", phonetic: "/kəˈpæsəti/", pos: "n.", meaning: "容量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "access", phonetic: "/ˈækses/", pos: "n./v.", meaning: "通道；进入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "interest", phonetic: "/ˈɪntrəst/", pos: "n.", meaning: "兴趣", grade: "junior", example: "I have interest in music.", trans: "我对音乐有兴趣。", tags: ["短语be interested in"], related: [] },
  { word: "architecture", phonetic: "/ˈɑːkɪtektʃə(r)/", pos: "n.", meaning: "建筑学", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hip", phonetic: "/hɪp/", pos: "n.", meaning: "臀部", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "soap", phonetic: "/səʊp/", pos: "n.", meaning: "肥皂", grade: "junior", example: "Wash with soap.", trans: "用肥皂洗。", tags: ["不可数"], related: [] },
  { word: "pocket", phonetic: "/ˈpɒkɪt/", pos: "n.", meaning: "口袋", grade: "junior", example: "Put it in your pocket.", trans: "放进口袋。", tags: ["基础"], related: [] },
  { word: "newspaper", phonetic: "/ˈnjuːzpeɪpə(r)/", pos: "n.", meaning: "报纸", grade: "junior", example: "Read the newspaper.", trans: "看报纸。", tags: ["基础"], related: [] },
  { word: "launch", phonetic: "/lɔːntʃ/", pos: "v.", meaning: "发射", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "route", phonetic: "/ruːt/", pos: "n.", meaning: "路线", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "budget", phonetic: "/ˈbʌdʒɪt/", pos: "n.", meaning: "预算", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cellular", phonetic: "/ˈseljələ(r)/", pos: "adj.", meaning: "细胞的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "digital", phonetic: "/ˈdɪdʒɪtl/", pos: "adj.", meaning: "数字的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "climb", phonetic: "/klaɪm/", pos: "v.", meaning: "爬；攀登", grade: "junior", example: "Do not climb the tree.", trans: "不要爬树。", tags: ["基础"], related: [] },
  { word: "color", phonetic: "/ˈkʌlə(r)/", pos: "n.", meaning: "颜色", grade: "junior", example: "What color do you like?", trans: "你喜欢什么颜色？", tags: ["基础", "英式colour"], related: [] },
  { word: "examine", phonetic: "/ɪɡˈzæmɪn/", pos: "v.", meaning: "检查", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "electric", phonetic: "/ɪˈlektrɪk/", pos: "adj.", meaning: "电的", grade: "junior", example: "This is an electric car.", trans: "这是一辆电动汽车。", tags: ["高频"], related: [] },
  { word: "album", phonetic: "/ˈælbəm/", pos: "n.", meaning: "相册", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "agency", phonetic: "/ˈeɪdʒənsi/", pos: "n.", meaning: "代理机构", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "official", phonetic: "/əˈfɪʃl/", pos: "n.", meaning: "官员", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clever", phonetic: "/ˈklevə(r)/", pos: "adj.", meaning: "聪明的", grade: "junior", example: "She is a clever girl.", trans: "她是个聪明的女孩。", tags: ["反义词stupid"], related: [
    { type: "反义词", word: "stupid" }
  ] },
  { word: "laugh", phonetic: "/lɑːf/", pos: "v.", meaning: "笑", grade: "junior", example: "Do not laugh at me.", trans: "不要笑我。", tags: ["短语laugh at"], related: [] },
  { word: "nose", phonetic: "/nəʊz/", pos: "n.", meaning: "鼻子", grade: "junior", example: "My nose is running.", trans: "我流鼻涕。", tags: ["基础"], related: [] },
  { word: "dose", phonetic: "/dəʊs/", pos: "n.", meaning: "剂量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "say", phonetic: "/seɪ/", pos: "v.", meaning: "说", grade: "junior", example: "What did you say?", trans: "你说什么？", tags: ["过去式said"], related: [
    { type: "过去式", word: "said" }
  ] },
  { word: "sweet", phonetic: "/swiːt/", pos: "adj.", meaning: "甜的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "application", phonetic: "/ˌæplɪˈkeɪʃn/", pos: "n.", meaning: "申请；应用", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "culture", phonetic: "/ˈkʌltʃə(r)/", pos: "n.", meaning: "文化", grade: "junior", example: "Chinese culture is rich.", trans: "中国文化丰富多彩。", tags: ["高频"], related: [] },
  { word: "game", phonetic: "/ɡeɪm/", pos: "n.", meaning: "游戏；比赛", grade: "junior", example: "Let us play a game.", trans: "我们玩个游戏吧。", tags: ["基础"], related: [] },
  { word: "spin", phonetic: "/spɪn/", pos: "v.", meaning: "旋转", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "literature", phonetic: "/ˈlɪtrətʃə(r)/", pos: "n.", meaning: "文学", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "damage", phonetic: "/ˈdæmɪdʒ/", pos: "n./v.", meaning: "损害", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "windy", phonetic: "/ˈwɪndi/", pos: "adj.", meaning: "有风的", grade: "junior", example: "It is windy today.", trans: "今天有风。", tags: ["基础"], related: [] },
  { word: "guitar", phonetic: "/ɡɪˈtɑː(r)/", pos: "n.", meaning: "吉他", grade: "junior", example: "He plays the guitar.", trans: "他弹吉他。", tags: ["基础"], related: [] },
  { word: "bass", phonetic: "/beɪs/", pos: "n.", meaning: "低音", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "really", phonetic: "/ˈriːəli/", pos: "adv.", meaning: "真地", grade: "junior", example: "I really like it.", trans: "我真的喜欢。", tags: ["基础"], related: [
    { type: "形容词", word: "real" }
  ] },
  { word: "coach", phonetic: "/kəʊtʃ/", pos: "n.", meaning: "教练；长途车", grade: "junior", example: "The coach trained us well.", trans: "教练把我们训练得很好。", tags: ["高频"], related: [] },
  { word: "surgery", phonetic: "/ˈsɜːdʒəri/", pos: "n.", meaning: "手术", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shift", phonetic: "/ʃɪft/", pos: "v.", meaning: "转移", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dean", phonetic: "/diːn/", pos: "n.", meaning: "院长", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "slow", phonetic: "/sləʊ/", pos: "adj.", meaning: "慢的", grade: "junior", example: "He walks slow.", trans: "他走得慢。", tags: ["反义词fast"], related: [
    { type: "反义词", word: "fast" }
  ] },
  { word: "taste", phonetic: "/teɪst/", pos: "v.", meaning: "品尝", grade: "junior", example: "Taste the soup.", trans: "尝尝汤。", tags: ["基础"], related: [] },
  { word: "supermarket", phonetic: "/ˈsuːpəmɑːkɪt/", pos: "n.", meaning: "超市", grade: "junior", example: "Shop at the supermarket.", trans: "在超市购物。", tags: ["基础"], related: [] },
  { word: "spend", phonetic: "/spend/", pos: "v.", meaning: "花费", grade: "junior", example: "I spend time reading.", trans: "我花时间读书。", tags: ["过去式spent"], related: [
    { type: "过去式", word: "spent" }
  ] },
  { word: "could", phonetic: "/kʊd/", pos: "aux.", meaning: "能够（can过去式）", grade: "junior", example: "Could you help me?", trans: "你能帮我吗？", tags: ["基础", "表委婉请求"], related: [] },
  { word: "plot", phonetic: "/plɒt/", pos: "n.", meaning: "情节", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rob", phonetic: "/rɒb/", pos: "v.", meaning: "抢劫", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "light", phonetic: "/laɪt/", pos: "n./adj.", meaning: "光；轻的", grade: "junior", example: "Turn on the light.", trans: "开灯。", tags: ["过去式lit/lighted"], related: [
    { type: "过去式", word: "lit" },
    { type: "过去式", word: "lighted" }
  ] },
  { word: "march", phonetic: "/mɑːtʃ/", pos: "v.", meaning: "行军", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "connection", phonetic: "/kəˈnekʃn/", pos: "n.", meaning: "联系", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "aunt", phonetic: "/ɑːnt/", pos: "n.", meaning: "阿姨；姑姑", grade: "junior", example: "My aunt lives in Beijing.", trans: "我姑姑住在北京。", tags: ["基础"], related: [] },
  { word: "package", phonetic: "/ˈpækɪdʒ/", pos: "n.", meaning: "包裹", grade: "junior", example: "I received a package.", trans: "我收到一个包裹。", tags: ["基础"], related: [] },
  { word: "daughter", phonetic: "/ˈdɔːtə(r)/", pos: "n.", meaning: "女儿", grade: "junior", example: "His daughter is five.", trans: "他的女儿五岁。", tags: ["基础"], related: [] },
  { word: "guidance", phonetic: "/ˈɡaɪdns/", pos: "n.", meaning: "指导", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "decision", phonetic: "/dɪˈsɪʒn/", pos: "n.", meaning: "决定", grade: "junior", example: "Make a decision now.", trans: "现在做决定。", tags: ["动词decide"], related: [
    { type: "动词形式", word: "decide" }
  ] },
  { word: "accommodation", phonetic: "/əˌkɒməˈdeɪʃn/", pos: "n.", meaning: "住宿", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "van", phonetic: "/væn/", pos: "n.", meaning: "货车", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "frame", phonetic: "/freɪm/", pos: "n.", meaning: "框架", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dismiss", phonetic: "/dɪsˈmɪs/", pos: "v.", meaning: "解散；解雇", grade: "junior", example: "The teacher dismissed the class.", trans: "老师解散了班级。", tags: ["高频"], related: [] },
  { word: "advertise", phonetic: "/ˈædvətaɪz/", pos: "v.", meaning: "做广告", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "nation", phonetic: "/ˈneɪʃn/", pos: "n.", meaning: "国家；民族", grade: "junior", example: "China is a great nation.", trans: "中国是伟大的国家。", tags: ["形容词national"], related: [] },
  { word: "faculty", phonetic: "/ˈfæklti/", pos: "n.", meaning: "全体教员", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "particular", phonetic: "/pəˈtɪkjələ(r)/", pos: "adj.", meaning: "特别的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dependent", phonetic: "/dɪˈpendənt/", pos: "adj.", meaning: "依赖的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "yet", phonetic: "/jet/", pos: "adv.", meaning: "还；仍", grade: "junior", example: "Not yet.", trans: "还没有。", tags: ["基础", "常用于完成时"], related: [] },
  { word: "cousin", phonetic: "/ˈkʌzn/", pos: "n.", meaning: "表兄弟姐妹", grade: "junior", example: "My cousin is coming.", trans: "我的表兄要来。", tags: ["基础"], related: [] },
  { word: "safe", phonetic: "/seɪf/", pos: "adj.", meaning: "安全的", grade: "junior", example: "It is safe here.", trans: "这里安全。", tags: ["名词safety", "反义词dangerous"], related: [
    { type: "名词形式", word: "safety" },
    { type: "反义词", word: "dangerous" }
  ] },
  { word: "apparently", phonetic: "/əˈpærəntli/", pos: "adv.", meaning: "显然", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wet", phonetic: "/wet/", pos: "adj.", meaning: "湿的", grade: "junior", example: "The ground is wet.", trans: "地面是湿的。", tags: ["反义词dry"], related: [
    { type: "反义词", word: "dry" }
  ] },
  { word: "fat", phonetic: "/fæt/", pos: "adj.", meaning: "胖的", grade: "junior", example: "He is getting fat.", trans: "他变胖了。", tags: ["反义词thin"], related: [
    { type: "反义词", word: "thin" }
  ] },
  { word: "any", phonetic: "/ˈeni/", pos: "adj.", meaning: "任何的；一些", grade: "junior", example: "Is there any water left?", trans: "还有水吗？", tags: ["基础", "否定/疑问句"], related: [] },
  { word: "project", phonetic: "/ˈprɒdʒekt/", pos: "n.", meaning: "项目", grade: "junior", example: "This is a big project.", trans: "这是个大项目。", tags: ["高频"], related: [] },
  { word: "nearly", phonetic: "/ˈnɪəli/", pos: "adv.", meaning: "几乎", grade: "junior", example: "I nearly forgot.", trans: "我差点忘了。", tags: ["高频"], related: [] },
  { word: "on", phonetic: "/ɒn/", pos: "prep.", meaning: "在……上面", grade: "junior", example: "The book is on the desk.", trans: "书在桌上。", tags: ["基础", "反义词off"], related: [
    { type: "反义词", word: "off" }
  ] },
  { word: "minute", phonetic: "/ˈmɪnɪt/", pos: "n.", meaning: "分钟", grade: "junior", example: "Wait a minute.", trans: "等一下。", tags: ["基础"], related: [] },
  { word: "seat", phonetic: "/siːt/", pos: "n.", meaning: "座位", grade: "junior", example: "Take a seat.", trans: "请坐。", tags: ["基础"], related: [] },
  { word: "daily", phonetic: "/ˈdeɪli/", pos: "adj.", meaning: "每日的", grade: "junior", example: "This is my daily routine.", trans: "这是我的日常。", tags: ["高频"], related: [] },
  { word: "software", phonetic: "/ˈsɒftweə(r)/", pos: "n.", meaning: "软件", grade: "junior", example: "Install the software.", trans: "安装软件。", tags: ["不可数"], related: [] },
  { word: "define", phonetic: "/dɪˈfaɪn/", pos: "v.", meaning: "定义", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "grow", phonetic: "/ɡrəʊ/", pos: "v.", meaning: "生长；成长", grade: "junior", example: "Plants grow fast.", trans: "植物长得快。", tags: ["过去式grew", "短语grow up"], related: [
    { type: "过去式", word: "grew" }
  ] },
  { word: "gym", phonetic: "/dʒɪm/", pos: "n.", meaning: "体育馆", grade: "junior", example: "We play basketball in the gym.", trans: "我们在体育馆打篮球。", tags: ["基础", "全称gymnasium"], related: [] },
  { word: "deaf", phonetic: "/def/", pos: "adj.", meaning: "聋的", grade: "junior", example: "The old man is deaf.", trans: "那位老人耳聋。", tags: ["基础"], related: [] },
  { word: "previous", phonetic: "/ˈpriːviəs/", pos: "adj.", meaning: "以前的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "perform", phonetic: "/pəˈfɔːm/", pos: "v.", meaning: "表演；执行", grade: "junior", example: "They performed a play.", trans: "他们演了一出戏。", tags: ["名词performance"], related: [
    { type: "名词形式", word: "performance" }
  ] },
  { word: "injury", phonetic: "/ˈɪndʒəri/", pos: "n.", meaning: "伤害", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "vacation", phonetic: "/vəˈkeɪʃn/", pos: "n.", meaning: "假期", grade: "junior", example: "We had a great vacation.", trans: "我们假期很愉快。", tags: ["基础", "英式holiday"], related: [] },
  { word: "block", phonetic: "/blɒk/", pos: "n./v.", meaning: "街区；阻挡", grade: "junior", example: "Walk two blocks.", trans: "走两个街区。", tags: ["高频"], related: [] },
  { word: "bond", phonetic: "/bɒnd/", pos: "n.", meaning: "纽带", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "present", phonetic: "/ˈpreznt/", pos: "n./adj.", meaning: "礼物；现在的", grade: "junior", example: "I got a present.", trans: "我收到礼物。", tags: ["基础"], related: [] },
  { word: "pass", phonetic: "/pɑːs/", pos: "v.", meaning: "通过；传递", grade: "junior", example: "Pass me the salt.", trans: "把盐递给我。", tags: ["过去式passed"], related: [
    { type: "过去式", word: "passed" }
  ] },
  { word: "survey", phonetic: "/ˈsɜːveɪ/", pos: "n.", meaning: "调查", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sign", phonetic: "/saɪn/", pos: "n.", meaning: "标志", grade: "junior", example: "Read the sign.", trans: "看标志。", tags: ["基础"], related: [] },
  { word: "underground", phonetic: "/ˌʌndəˈɡraʊnd/", pos: "adj.", meaning: "地下的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ball", phonetic: "/bɔːl/", pos: "n.", meaning: "球", grade: "junior", example: "Throw the ball to me.", trans: "把球扔给我。", tags: ["基础"], related: [] },
  { word: "alert", phonetic: "/əˈlɜːt/", pos: "adj.", meaning: "警觉的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wire", phonetic: "/ˈwaɪə(r)/", pos: "n.", meaning: "电线", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "monitor", phonetic: "/ˈmɒnɪtə(r)/", pos: "n.", meaning: "班长", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tank", phonetic: "/tæŋk/", pos: "n.", meaning: "坦克", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bang", phonetic: "/bæŋ/", pos: "n.", meaning: "巨响", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "weight", phonetic: "/weɪt/", pos: "n.", meaning: "重量", grade: "junior", example: "What is your weight?", trans: "你体重多少？", tags: ["动词weigh"], related: [
    { type: "动词形式", word: "weigh" }
  ] },
  { word: "direction", phonetic: "/dəˈrekʃn/", pos: "n.", meaning: "方向", grade: "junior", example: "Which direction is north?", trans: "哪个方向是北？", tags: ["高频"], related: [] },
  { word: "admission", phonetic: "/ədˈmɪʃn/", pos: "n.", meaning: "准许进入；承认", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "disaster", phonetic: "/dɪˈzɑːstə(r)/", pos: "n.", meaning: "灾难", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "medical", phonetic: "/ˈmedɪkl/", pos: "adj.", meaning: "医学的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "strategy", phonetic: "/ˈstrætədʒi/", pos: "n.", meaning: "策略", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "buffalo", phonetic: "/ˈbʌfələʊ/", pos: "n.", meaning: "水牛", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "federal", phonetic: "/ˈfedərəl/", pos: "adj.", meaning: "联邦的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "citizen", phonetic: "/ˈsɪtɪzn/", pos: "n.", meaning: "公民", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "draft", phonetic: "/drɑːft/", pos: "n.", meaning: "草稿", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "description", phonetic: "/dɪˈskrɪpʃn/", pos: "n.", meaning: "描述", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sight", phonetic: "/saɪt/", pos: "n.", meaning: "视力；景象", grade: "junior", example: "The sight is beautiful.", trans: "景色很美。", tags: ["基础"], related: [] },
  { word: "semester", phonetic: "/sɪˈmestə(r)/", pos: "n.", meaning: "学期", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mother", phonetic: "/ˈmʌðə(r)/", pos: "n.", meaning: "母亲", grade: "junior", example: "My mother is kind.", trans: "我妈妈很善良。", tags: ["基础"], related: [] },
  { word: "collection", phonetic: "/kəˈlekʃn/", pos: "n.", meaning: "收集", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "produce", phonetic: "/prəˈdjuːs/", pos: "v.", meaning: "生产", grade: "junior", example: "The factory produces cars.", trans: "工厂生产汽车。", tags: ["名词production"], related: [
    { type: "名词形式", word: "production" }
  ] },
  { word: "announcement", phonetic: "/əˈnaʊnsmənt/", pos: "n.", meaning: "公告", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "guest", phonetic: "/ɡest/", pos: "n.", meaning: "客人", grade: "junior", example: "We have a guest today.", trans: "今天我们有客人。", tags: ["基础"], related: [] },
  { word: "district", phonetic: "/ˈdɪstrɪkt/", pos: "n.", meaning: "区域", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pattern", phonetic: "/ˈpætn/", pos: "n.", meaning: "模式", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "middle", phonetic: "/ˈmɪdl/", pos: "n.", meaning: "中间", grade: "junior", example: "Stand in the middle.", trans: "站中间。", tags: ["基础"], related: [] },
  { word: "flood", phonetic: "/flʌd/", pos: "n.", meaning: "洪水", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sequence", phonetic: "/ˈsiːkwəns/", pos: "n.", meaning: "顺序", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "corn", phonetic: "/kɔːn/", pos: "n.", meaning: "玉米", grade: "junior", example: "I love corn.", trans: "我喜欢玉米。", tags: ["不可数"], related: [] },
  { word: "shot", phonetic: "/ʃɒt/", pos: "n.", meaning: "射击", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "note", phonetic: "/nəʊt/", pos: "n.", meaning: "笔记；便条", grade: "junior", example: "Take notes in class.", trans: "上课做笔记。", tags: ["基础"], related: [] },
  { word: "ice", phonetic: "/aɪs/", pos: "n.", meaning: "冰", grade: "junior", example: "The lake is covered with ice.", trans: "湖面上结了冰。", tags: ["不可数"], related: [] },
  { word: "fiction", phonetic: "/ˈfɪkʃn/", pos: "n.", meaning: "小说", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bargain", phonetic: "/ˈbɑːɡən/", pos: "v.", meaning: "讨价还价", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "above", phonetic: "/əˈbʌv/", pos: "prep.", meaning: "在……上方", grade: "junior", example: "The picture is above the desk.", trans: "画在桌子上方。", tags: ["介词", "反义词below"], related: [
    { type: "反义词", word: "below" }
  ] },
  { word: "bear", phonetic: "/beə(r)/", pos: "n.", meaning: "熊", grade: "junior", example: "The bear is sleeping.", trans: "熊在睡觉。", tags: ["基础"], related: [] },
  { word: "meal", phonetic: "/miːl/", pos: "n.", meaning: "一餐", grade: "junior", example: "We have three meals a day.", trans: "我们一天吃三餐。", tags: ["基础"], related: [] },
  { word: "brief", phonetic: "/briːf/", pos: "adj.", meaning: "简短的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [
    { type: "副词", word: "briefly" }
  ] },
  { word: "procedure", phonetic: "/prəˈsiːdʒə(r)/", pos: "n.", meaning: "程序", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boost", phonetic: "/buːst/", pos: "v.", meaning: "促进", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "traffic", phonetic: "/ˈtræfɪk/", pos: "n.", meaning: "交通", grade: "junior", example: "The traffic is heavy.", trans: "交通拥挤。", tags: ["不可数"], related: [] },
  { word: "instrument", phonetic: "/ˈɪnstrəmənt/", pos: "n.", meaning: "乐器；仪器", grade: "junior", example: "Piano is a musical instrument.", trans: "钢琴是乐器。", tags: ["高频"], related: [] },
  { word: "dust", phonetic: "/dʌst/", pos: "n.", meaning: "灰尘", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "catch", phonetic: "/kætʃ/", pos: "v.", meaning: "抓住；赶上", grade: "junior", example: "Catch the ball!", trans: "接住球！", tags: ["过去式caught", "短语catch up with"], related: [
    { type: "过去式", word: "caught" }
  ] },
  { word: "partner", phonetic: "/ˈpɑːtnə(r)/", pos: "n.", meaning: "伙伴", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stick", phonetic: "/stɪk/", pos: "n.", meaning: "棍子", grade: "junior", example: "Pick up a stick.", trans: "捡根棍子。", tags: ["基础"], related: [] },
  { word: "replace", phonetic: "/rɪˈpleɪs/", pos: "v.", meaning: "替换", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "outdoor", phonetic: "/ˈaʊtdɔː(r)/", pos: "adj.", meaning: "户外的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cause", phonetic: "/kɔːz/", pos: "v./n.", meaning: "引起；原因", grade: "junior", example: "What caused the fire?", trans: "什么引起了火灾？", tags: ["高频"], related: [] },
  { word: "pencil", phonetic: "/ˈpensl/", pos: "n.", meaning: "铅笔", grade: "junior", example: "Use a pencil.", trans: "用铅笔。", tags: ["基础"], related: [] },
  { word: "classic", phonetic: "/ˈklæsɪk/", pos: "adj.", meaning: "经典的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "association", phonetic: "/əˌsəʊsiˈeɪʃn/", pos: "n.", meaning: "协会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "role", phonetic: "/rəʊl/", pos: "n.", meaning: "角色；作用", grade: "junior", example: "Play a role.", trans: "扮演角色。", tags: ["短语play a role in"], related: [] },
  { word: "casual", phonetic: "/ˈkæʒuəl/", pos: "adj.", meaning: "随意的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [
    { type: "副词", word: "casually" }
  ] },
  { word: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", pos: "n.", meaning: "展览", grade: "junior", example: "We visited an exhibition.", trans: "我们参观了一个展览。", tags: ["高频"], related: [] },
  { word: "tall", phonetic: "/tɔːl/", pos: "adj.", meaning: "高的", grade: "junior", example: "He is tall.", trans: "他很高。", tags: ["反义词short"], related: [
    { type: "反义词", word: "short" }
  ] },
  { word: "contrast", phonetic: "/ˈkɒntrɑːst/", pos: "n.", meaning: "对比", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "profit", phonetic: "/ˈprɒfɪt/", pos: "n.", meaning: "利润", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "like", phonetic: "/laɪk/", pos: "v.", meaning: "喜欢", grade: "junior", example: "I like music.", trans: "我喜欢音乐。", tags: ["基础", "后接doing/to do"], related: [] },
  { word: "across", phonetic: "/əˈkrɒs/", pos: "prep.", meaning: "穿过；横过", grade: "junior", example: "Walk across the bridge.", trans: "走过桥去。", tags: ["介词", "易混through"], related: [
    { type: "易混词", word: "through" }
  ] },
  { word: "fact", phonetic: "/fækt/", pos: "n.", meaning: "事实", grade: "junior", example: "It is a fact.", trans: "这是事实。", tags: ["高频", "短语in fact"], related: [] },
  { word: "umbrella", phonetic: "/ʌmˈbrelə/", pos: "n.", meaning: "雨伞", grade: "junior", example: "Take an umbrella.", trans: "带伞。", tags: ["基础"], related: [] },
  { word: "diabetes", phonetic: "/ˌdaɪəˈbiːtiːz/", pos: "n.", meaning: "糖尿病", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "close", phonetic: "/kləʊz/", pos: "v.", meaning: "关闭", grade: "junior", example: "Close the door.", trans: "关门。", tags: ["反义词open"], related: [
    { type: "反义词", word: "open" }
  ] },
  { word: "hang", phonetic: "/hæŋ/", pos: "v.", meaning: "悬挂", grade: "junior", example: "Hang the picture on the wall.", trans: "把画挂在墙上。", tags: ["过去式hung"], related: [
    { type: "过去式", word: "hung" }
  ] },
  { word: "potential", phonetic: "/pəˈtenʃl/", pos: "adj.", meaning: "潜在的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "negative", phonetic: "/ˈneɡətɪv/", pos: "adj.", meaning: "消极的", grade: "junior", example: "Do not be negative.", trans: "不要消极。", tags: ["反义词positive"], related: [
    { type: "反义词", word: "positive" }
  ] },
  { word: "such", phonetic: "/sʌtʃ/", pos: "adj.", meaning: "这样的", grade: "junior", example: "Such a nice day!", trans: "多好的一天！", tags: ["短语such as"], related: [] },
  { word: "soup", phonetic: "/suːp/", pos: "n.", meaning: "汤", grade: "junior", example: "I had soup.", trans: "我喝了汤。", tags: ["不可数"], related: [] },
  { word: "repair", phonetic: "/rɪˈpeə(r)/", pos: "v.", meaning: "修理", grade: "junior", example: "Repair the bike.", trans: "修自行车。", tags: ["基础"], related: [] },
  { word: "fresh", phonetic: "/freʃ/", pos: "adj.", meaning: "新鲜的", grade: "junior", example: "The bread is fresh.", trans: "面包很新鲜。", tags: ["基础"], related: [] },
  { word: "player", phonetic: "/ˈpleɪə(r)/", pos: "n.", meaning: "运动员；播放器", grade: "junior", example: "He is a good player.", trans: "他是好运动员。", tags: ["基础"], related: [] },
  { word: "strike", phonetic: "/straɪk/", pos: "v.", meaning: "罢工", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "away", phonetic: "/əˈweɪ/", pos: "adv.", meaning: "离开；远离", grade: "junior", example: "Go away!", trans: "走开！", tags: ["基础", "短语run away"], related: [] },
  { word: "whether", phonetic: "/ˈweðə(r)/", pos: "conj.", meaning: "是否", grade: "junior", example: "I do not know whether to go.", trans: "我不知道是否去。", tags: ["易混weather"], related: [
    { type: "易混词", word: "weather" }
  ] },
  { word: "size", phonetic: "/saɪz/", pos: "n.", meaning: "尺寸", grade: "junior", example: "What size do you want?", trans: "你要什么尺寸？", tags: ["基础"], related: [] },
  { word: "jewelry", phonetic: "/ˈdʒuːəlri/", pos: "n.", meaning: "珠宝", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "still", phonetic: "/stɪl/", pos: "adv.", meaning: "仍然", grade: "junior", example: "I am still here.", trans: "我还在这。", tags: ["基础"], related: [] },
  { word: "bonus", phonetic: "/ˈbəʊnəs/", pos: "n.", meaning: "奖金", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "alarm", phonetic: "/əˈlɑːm/", pos: "n.", meaning: "警报", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ratio", phonetic: "/ˈreɪʃiəʊ/", pos: "n.", meaning: "比率", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "participate", phonetic: "/pɑːˈtɪsɪpeɪt/", pos: "v.", meaning: "参与", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "magazine", phonetic: "/ˌmæɡəˈziːn/", pos: "n.", meaning: "杂志", grade: "junior", example: "I read magazines.", trans: "我读杂志。", tags: ["基础"], related: [] },
  { word: "poverty", phonetic: "/ˈpɒvəti/", pos: "n.", meaning: "贫穷", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "career", phonetic: "/kəˈrɪə(r)/", pos: "n.", meaning: "职业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mistake", phonetic: "/mɪˈsteɪk/", pos: "n.", meaning: "错误", grade: "junior", example: "I made a mistake.", trans: "我犯了个错。", tags: ["复数mistakes"], related: [
    { type: "复数", word: "mistakes" }
  ] },
  { word: "tip", phonetic: "/tɪp/", pos: "n.", meaning: "提示", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "kilometer", phonetic: "/ˈkɪləmiːtə(r)/", pos: "n.", meaning: "千米", grade: "junior", example: "The road is 5 kilometers long.", trans: "这条路5公里长。", tags: ["基础"], related: [] },
  { word: "scarf", phonetic: "/skɑːf/", pos: "n.", meaning: "围巾", grade: "junior", example: "Wear a scarf.", trans: "戴围巾。", tags: ["复数scarves"], related: [
    { type: "复数", word: "scarves" }
  ] },
  { word: "baker", phonetic: "/ˈbeɪkə(r)/", pos: "n.", meaning: "面包师", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dinner", phonetic: "/ˈdɪnə(r)/", pos: "n.", meaning: "晚餐", grade: "junior", example: "We have dinner at six.", trans: "我们六点吃晚饭。", tags: ["基础"], related: [] },
  { word: "caught", phonetic: "/kɔːt/", pos: "v.", meaning: "抓住", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chance", phonetic: "/tʃɑːns/", pos: "n.", meaning: "机会", grade: "junior", example: "This is a good chance.", trans: "这是个好机会。", tags: ["高频", "短语by chance"], related: [] },
  { word: "province", phonetic: "/ˈprɒvɪns/", pos: "n.", meaning: "省", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "apologize", phonetic: "/əˈpɒlədʒaɪz/", pos: "v.", meaning: "道歉", grade: "junior", example: "I apologize for being late.", trans: "我为迟到道歉。", tags: ["名词apology"], related: [
    { type: "名词形式", word: "apology" }
  ] },
  { word: "ward", phonetic: "/wɔːd/", pos: "n.", meaning: "病房", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "banner", phonetic: "/ˈbænə(r)/", pos: "n.", meaning: "横幅", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "assume", phonetic: "/əˈsjuːm/", pos: "v.", meaning: "假设", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "separate", phonetic: "/ˈseprət/", pos: "adj.", meaning: "分开的", grade: "junior", example: "We have separate rooms.", trans: "我们有分开的房间。", tags: ["短语separate from"], related: [] },
  { word: "ticket", phonetic: "/ˈtɪkɪt/", pos: "n.", meaning: "票", grade: "junior", example: "Buy a ticket.", trans: "买票。", tags: ["基础"], related: [] },
  { word: "dig", phonetic: "/dɪɡ/", pos: "v.", meaning: "挖", grade: "junior", example: "Dig a hole.", trans: "挖一个洞。", tags: ["过去式dug"], related: [
    { type: "过去式", word: "dug" }
  ] },
  { word: "spread", phonetic: "/spred/", pos: "v.", meaning: "传播", grade: "junior", example: "The news spread fast.", trans: "消息传得快。", tags: ["过去式spread"], related: [
    { type: "过去式", word: "spread" }
  ] },
  { word: "device", phonetic: "/dɪˈvaɪs/", pos: "n.", meaning: "设备", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ease", phonetic: "/iːz/", pos: "v.", meaning: "缓解", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "origin", phonetic: "/ˈɒrɪdʒɪn/", pos: "n.", meaning: "起源", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chemical", phonetic: "/ˈkemɪkl/", pos: "adj.", meaning: "化学的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "short", phonetic: "/ʃɔːt/", pos: "adj.", meaning: "短的；矮的", grade: "junior", example: "He is short.", trans: "他个子矮。", tags: ["反义词long/tall"], related: [
    { type: "反义词", word: "long/tall" }
  ] },
  { word: "designer", phonetic: "/dɪˈzaɪnə(r)/", pos: "n.", meaning: "设计师", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cent", phonetic: "/sent/", pos: "n.", meaning: "分", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gender", phonetic: "/ˈdʒendə(r)/", pos: "n.", meaning: "性别", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sort", phonetic: "/sɔːt/", pos: "n.", meaning: "种类", grade: "junior", example: "What sort of music?", trans: "哪种音乐？", tags: ["基础"], related: [] },
  { word: "sound", phonetic: "/saʊnd/", pos: "n./v.", meaning: "声音；听起来", grade: "junior", example: "It sounds good.", trans: "听起来不错。", tags: ["基础"], related: [] },
  { word: "core", phonetic: "/kɔː(r)/", pos: "n.", meaning: "核心", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "century", phonetic: "/ˈsentʃəri/", pos: "n.", meaning: "世纪", grade: "junior", example: "It was built a century ago.", trans: "它建于一个世纪前。", tags: ["高频"], related: [] },
  { word: "paper", phonetic: "/ˈpeɪpə(r)/", pos: "n.", meaning: "纸", grade: "junior", example: "Write on the paper.", trans: "写在纸上。", tags: ["不可数"], related: [] },
  { word: "mix", phonetic: "/mɪks/", pos: "v.", meaning: "混合", grade: "junior", example: "Mix the ingredients.", trans: "混合原料。", tags: ["基础"], related: [] },
  { word: "suddenly", phonetic: "/ˈsʌdənli/", pos: "adv.", meaning: "突然", grade: "junior", example: "It suddenly rained.", trans: "突然下雨了。", tags: ["基础"], related: [
    { type: "形容词", word: "sudden" }
  ] },
  { word: "computer", phonetic: "/kəmˈpjuːtə(r)/", pos: "n.", meaning: "电脑", grade: "junior", example: "I use a computer every day.", trans: "我每天用电脑。", tags: ["基础"], related: [] },
  { word: "truck", phonetic: "/trʌk/", pos: "n.", meaning: "卡车", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mean", phonetic: "/miːn/", pos: "v.", meaning: "意思是", grade: "junior", example: "What does this word mean?", trans: "这个词什么意思？", tags: ["过去式meant", "名词meaning"], related: [
    { type: "过去式", word: "meant" },
    { type: "名词形式", word: "meaning" }
  ] },
  { word: "popular", phonetic: "/ˈpɒpjələ(r)/", pos: "adj.", meaning: "受欢迎的", grade: "junior", example: "He is popular.", trans: "他很受欢迎。", tags: ["短语be popular with"], related: [] },
  { word: "basket", phonetic: "/ˈbɑːskɪt/", pos: "n.", meaning: "篮子", grade: "junior", example: "Put the fruit in the basket.", trans: "把水果放进篮子里。", tags: ["基础"], related: [] },
  { word: "stuff", phonetic: "/stʌf/", pos: "n.", meaning: "东西", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "church", phonetic: "/tʃɜːtʃ/", pos: "n.", meaning: "教堂", grade: "junior", example: "They go to church on Sunday.", trans: "他们周日去教堂。", tags: ["基础"], related: [] },
  { word: "position", phonetic: "/pəˈzɪʃn/", pos: "n.", meaning: "位置；职位", grade: "junior", example: "What is your position?", trans: "你的职位是什么？", tags: ["高频"], related: [] },
  { word: "upgrade", phonetic: "/ˌʌpˈɡreɪd/", pos: "v.", meaning: "升级", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "listen", phonetic: "/ˈlɪsn/", pos: "v.", meaning: "听", grade: "junior", example: "Listen to the teacher.", trans: "听老师讲。", tags: ["短语listen to"], related: [] },
  { word: "exhibit", phonetic: "/ɪɡˈzɪbɪt/", pos: "v.", meaning: "展示", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "member", phonetic: "/ˈmembə(r)/", pos: "n.", meaning: "成员", grade: "junior", example: "He is a member.", trans: "他是成员。", tags: ["基础"], related: [] },
  { word: "alive", phonetic: "/əˈlaɪv/", pos: "adj.", meaning: "活着的", grade: "junior", example: "The fish is still alive.", trans: "鱼还活着。", tags: ["表语形容词", "反义词dead"], related: [
    { type: "反义词", word: "dead" }
  ] },
  { word: "moment", phonetic: "/ˈməʊmənt/", pos: "n.", meaning: "时刻", grade: "junior", example: "Wait a moment.", trans: "等一下。", tags: ["短语at the moment"], related: [] },
  { word: "average", phonetic: "/ˈævərɪdʒ/", pos: "adj.", meaning: "平均的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boil", phonetic: "/bɔɪl/", pos: "v.", meaning: "煮沸", grade: "junior", example: "Boil the water first.", trans: "先把水烧开。", tags: ["高频"], related: [] },
  { word: "fan", phonetic: "/fæn/", pos: "n.", meaning: "扇子；粉丝", grade: "junior", example: "I am a fan of his.", trans: "我是他的粉丝。", tags: ["基础"], related: [] },
  { word: "kill", phonetic: "/kɪl/", pos: "v.", meaning: "杀死", grade: "junior", example: "Do not kill animals.", trans: "不要杀动物。", tags: ["基础"], related: [] },
  { word: "junior", phonetic: "/ˈdʒuːniə(r)/", pos: "adj.", meaning: "初级的", grade: "junior", example: "I am in junior high.", trans: "我上初中。", tags: ["基础"], related: [] },
  { word: "demonstrate", phonetic: "/ˈdemənstreɪt/", pos: "v.", meaning: "证明", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stream", phonetic: "/striːm/", pos: "n.", meaning: "小溪", grade: "junior", example: "The stream is clear.", trans: "小溪清澈。", tags: ["基础"], related: [] },
  { word: "poem", phonetic: "/ˈpəʊɪm/", pos: "n.", meaning: "诗", grade: "junior", example: "I wrote a poem.", trans: "我写了一首诗。", tags: ["基础"], related: [] },
  { word: "raise", phonetic: "/reɪz/", pos: "v.", meaning: "举起；筹集", grade: "junior", example: "Raise your hand.", trans: "举手。", tags: ["短语raise money"], related: [] },
  { word: "biography", phonetic: "/baɪˈɒɡrəfi/", pos: "n.", meaning: "传记", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "breast", phonetic: "/brest/", pos: "n.", meaning: "胸部", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "convention", phonetic: "/kənˈvenʃn/", pos: "n.", meaning: "大会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "learn", phonetic: "/lɜːn/", pos: "v.", meaning: "学习", grade: "junior", example: "I learn English every day.", trans: "我每天学英语。", tags: ["短语learn from"], related: [] },
  { word: "conference", phonetic: "/ˈkɒnfərəns/", pos: "n.", meaning: "会议", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "house", phonetic: "/haʊs/", pos: "n.", meaning: "房子", grade: "junior", example: "I live in a big house.", trans: "我住在大房子里。", tags: ["基础"], related: [] },
  { word: "outstanding", phonetic: "/aʊtˈstændɪŋ/", pos: "adj.", meaning: "杰出的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boat", phonetic: "/bəʊt/", pos: "n.", meaning: "船", grade: "junior", example: "We went fishing by boat.", trans: "我们坐船去钓鱼。", tags: ["基础"], related: [] },
  { word: "mobile", phonetic: "/ˈməʊbaɪl/", pos: "adj.", meaning: "移动的", grade: "junior", example: "I have a mobile phone.", trans: "我有手机。", tags: ["基础"], related: [] },
  { word: "log", phonetic: "/lɒɡ/", pos: "n.", meaning: "原木", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "catalog", phonetic: "/ˈkætəlɒɡ/", pos: "n.", meaning: "目录", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "number", phonetic: "/ˈnʌmbə(r)/", pos: "n.", meaning: "数字；号码", grade: "junior", example: "What is your number?", trans: "你的号码是多少？", tags: ["基础"], related: [] },
  { word: "chart", phonetic: "/tʃɑːt/", pos: "n.", meaning: "图表", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "safety", phonetic: "/ˈseɪfti/", pos: "n.", meaning: "安全", grade: "junior", example: "Safety first.", trans: "安全第一。", tags: ["不可数", "形容词safe"], related: [] },
  { word: "instead", phonetic: "/ɪnˈsted/", pos: "adv.", meaning: "代替", grade: "junior", example: "Use this instead.", trans: "用这个代替。", tags: ["短语instead of"], related: [] },
  { word: "tooth", phonetic: "/tuːθ/", pos: "n.", meaning: "牙齿", grade: "junior", example: "Brush your teeth.", trans: "刷牙。", tags: ["复数teeth"], related: [
    { type: "复数", word: "teeth" }
  ] },
  { word: "head", phonetic: "/hed/", pos: "n.", meaning: "头", grade: "junior", example: "My head hurts.", trans: "我头疼。", tags: ["基础"], related: [] },
  { word: "physical", phonetic: "/ˈfɪzɪkl/", pos: "adj.", meaning: "身体的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "edge", phonetic: "/edʒ/", pos: "n.", meaning: "边缘", grade: "junior", example: "Be careful at the edge.", trans: "在边缘要小心。", tags: ["基础"], related: [] },
  { word: "radar", phonetic: "/ˈreɪdɑː(r)/", pos: "n.", meaning: "雷达", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "national", phonetic: "/ˈnæʃnəl/", pos: "adj.", meaning: "国家的", grade: "junior", example: "This is a national park.", trans: "这是国家公园。", tags: ["名词nation"], related: [
    { type: "名词形式", word: "nation" }
  ] },
  { word: "far", phonetic: "/fɑː(r)/", pos: "adj.", meaning: "远的", grade: "junior", example: "It is not far from here.", trans: "离这里不远。", tags: ["比较级farther/further"], related: [
    { type: "比较级", word: "farther/further" }
  ] },
  { word: "understand", phonetic: "/ˌʌndəˈstænd/", pos: "v.", meaning: "理解", grade: "junior", example: "I understand you.", trans: "我理解你。", tags: ["过去式understood"], related: [
    { type: "过去式", word: "understood" }
  ] },
  { word: "energy", phonetic: "/ˈenədʒi/", pos: "n.", meaning: "能量；精力", grade: "junior", example: "I have no energy today.", trans: "我今天没精力。", tags: ["不可数"], related: [] },
  { word: "gourmet", phonetic: "/ˈɡʊəmeɪ/", pos: "n.", meaning: "美食家", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hot", phonetic: "/hɒt/", pos: "adj.", meaning: "热的", grade: "junior", example: "It is hot today.", trans: "今天很热。", tags: ["比较级hotter"], related: [
    { type: "比较级", word: "hotter" }
  ] },
  { word: "cabinet", phonetic: "/ˈkæbɪnət/", pos: "n.", meaning: "内阁；橱柜", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shell", phonetic: "/ʃel/", pos: "n.", meaning: "壳", grade: "junior", example: "The shell is hard.", trans: "壳很硬。", tags: ["基础"], related: [] },
  { word: "waste", phonetic: "/weɪst/", pos: "v.", meaning: "浪费", grade: "junior", example: "Do not waste time.", trans: "不要浪费时间。", tags: ["基础"], related: [] },
  { word: "follow", phonetic: "/ˈfɒləʊ/", pos: "v.", meaning: "跟随", grade: "junior", example: "Follow me.", trans: "跟我来。", tags: ["高频"], related: [] },
  { word: "honest", phonetic: "/ˈɒnɪst/", pos: "adj.", meaning: "诚实的", grade: "junior", example: "He is an honest man.", trans: "他是个诚实的人。", tags: ["名词honesty"], related: [
    { type: "名词形式", word: "honesty" }
  ] },
  { word: "want", phonetic: "/wɒnt/", pos: "v.", meaning: "想要", grade: "junior", example: "I want water.", trans: "我想要水。", tags: ["后接to do"], related: [] },
  { word: "super", phonetic: "/ˈsuːpə(r)/", pos: "adj.", meaning: "超级的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "positive", phonetic: "/ˈpɒzətɪv/", pos: "adj.", meaning: "积极的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "desert", phonetic: "/ˈdezət/", pos: "n.", meaning: "沙漠", grade: "junior", example: "The desert is very dry.", trans: "沙漠很干燥。", tags: ["基础"], related: [] },
  { word: "million", phonetic: "/ˈmɪljən/", pos: "num.", meaning: "百万", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "come", phonetic: "/kʌm/", pos: "v.", meaning: "来", grade: "junior", example: "Come here, please.", trans: "请到这里来。", tags: ["过去式came", "短语come from"], related: [
    { type: "过去式", word: "came" }
  ] },
  { word: "free", phonetic: "/friː/", pos: "adj.", meaning: "自由的；免费的", grade: "junior", example: "The drink is free.", trans: "饮料免费。", tags: ["基础"], related: [] },
  { word: "slip", phonetic: "/slɪp/", pos: "v.", meaning: "滑", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "proof", phonetic: "/pruːf/", pos: "n.", meaning: "证据", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "village", phonetic: "/ˈvɪlɪdʒ/", pos: "n.", meaning: "村庄", grade: "junior", example: "I live in a village.", trans: "我住在村庄。", tags: ["基础"], related: [] },
  { word: "message", phonetic: "/ˈmesɪdʒ/", pos: "n.", meaning: "消息", grade: "junior", example: "I got your message.", trans: "我收到你的消息了。", tags: ["短语leave a message"], related: [] },
  { word: "join", phonetic: "/dʒɔɪn/", pos: "v.", meaning: "加入", grade: "junior", example: "Join our club.", trans: "加入我们的俱乐部。", tags: ["短语join in"], related: [] },
  { word: "anonymous", phonetic: "/əˈnɒnɪməs/", pos: "adj.", meaning: "匿名的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "month", phonetic: "/mʌnθ/", pos: "n.", meaning: "月", grade: "junior", example: "There are 12 months.", trans: "有12个月。", tags: ["基础"], related: [] },
  { word: "joy", phonetic: "/dʒɔɪ/", pos: "n.", meaning: "快乐", grade: "junior", example: "She is full of joy.", trans: "她充满快乐。", tags: ["不可数"], related: [] },
  { word: "online", phonetic: "/ˌɒnˈlaɪn/", pos: "adj.", meaning: "在线的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "outcome", phonetic: "/ˈaʊtkʌm/", pos: "n.", meaning: "结果", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pleasant", phonetic: "/ˈpleznt/", pos: "adj.", meaning: "令人愉快的", grade: "junior", example: "It is a pleasant day.", trans: "这是愉快的一天。", tags: ["基础"], related: [] },
  { word: "bathroom", phonetic: "/ˈbɑːθruːm/", pos: "n.", meaning: "浴室；洗手间", grade: "junior", example: "The bathroom is over there.", trans: "浴室在那边。", tags: ["基础"], related: [] },
  { word: "pool", phonetic: "/puːl/", pos: "n.", meaning: "池塘；泳池", grade: "junior", example: "Swim in the pool.", trans: "在泳池游泳。", tags: ["基础"], related: [] },
  { word: "supper", phonetic: "/ˈsʌpə(r)/", pos: "n.", meaning: "晚饭", grade: "junior", example: "Have supper.", trans: "吃晚饭。", tags: ["基础"], related: [] },
  { word: "soldier", phonetic: "/ˈsəʊldʒə(r)/", pos: "n.", meaning: "士兵", grade: "junior", example: "He is a brave soldier.", trans: "他是勇敢的士兵。", tags: ["基础"], related: [] },
  { word: "federation", phonetic: "/ˌfedəˈreɪʃn/", pos: "n.", meaning: "联邦", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pretty", phonetic: "/ˈprɪti/", pos: "adj.", meaning: "漂亮的", grade: "junior", example: "She is pretty.", trans: "她很漂亮。", tags: ["比较级prettier"], related: [
    { type: "比较级", word: "prettier" }
  ] },
  { word: "human", phonetic: "/ˈhjuːmən/", pos: "n.", meaning: "人类", grade: "junior", example: "Humans are clever.", trans: "人类很聪明。", tags: ["高频"], related: [] },
  { word: "health", phonetic: "/helθ/", pos: "n.", meaning: "健康", grade: "junior", example: "Health is wealth.", trans: "健康就是财富。", tags: ["不可数", "形容词healthy"], related: [] },
  { word: "see", phonetic: "/siː/", pos: "v.", meaning: "看见", grade: "junior", example: "I see a bird.", trans: "我看见一只鸟。", tags: ["过去式saw", "过去分词seen"], related: [
    { type: "过去式", word: "saw" },
    { type: "过去分词", word: "seen" }
  ] },
  { word: "sorry", phonetic: "/ˈsɒri/", pos: "adj.", meaning: "抱歉的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stupid", phonetic: "/ˈstjuːpɪd/", pos: "adj.", meaning: "愚蠢的", grade: "junior", example: "Do not be stupid.", trans: "别傻了。", tags: ["反义词clever"], related: [
    { type: "反义词", word: "clever" }
  ] },
  { word: "pork", phonetic: "/pɔːk/", pos: "n.", meaning: "猪肉", grade: "junior", example: "I had pork for dinner.", trans: "我晚饭吃了猪肉。", tags: ["不可数"], related: [] },
  { word: "both", phonetic: "/bəʊθ/", pos: "adj.", meaning: "两者都", grade: "junior", example: "Both of us are students.", trans: "我们俩都是学生。", tags: ["短语both...and..."], related: [] },
  { word: "delete", phonetic: "/dɪˈliːt/", pos: "v.", meaning: "删除", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "exciting", phonetic: "/ɪkˈsaɪtɪŋ/", pos: "adj.", meaning: "令人兴奋的", grade: "junior", example: "The game is exciting.", trans: "比赛很刺激。", tags: ["易混excited"], related: [
    { type: "易混词", word: "excited" }
  ] },
  { word: "universe", phonetic: "/ˈjuːnɪvɜːs/", pos: "n.", meaning: "宇宙", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "paragraph", phonetic: "/ˈpærəɡrɑːf/", pos: "n.", meaning: "段落", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "combat", phonetic: "/ˈkɒmbæt/", pos: "v.", meaning: "战斗", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "service", phonetic: "/ˈsɜːvɪs/", pos: "n.", meaning: "服务", grade: "junior", example: "The service is good.", trans: "服务很好。", tags: ["动词serve"], related: [
    { type: "动词形式", word: "serve" }
  ] },
  { word: "christian", phonetic: "/ˈkrɪstʃən/", pos: "n.", meaning: "基督徒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "salad", phonetic: "/ˈsæləd/", pos: "n.", meaning: "沙拉", grade: "junior", example: "I had salad for lunch.", trans: "我午饭吃了沙拉。", tags: ["基础"], related: [] },
  { word: "strength", phonetic: "/streŋθ/", pos: "n.", meaning: "力量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "primary", phonetic: "/ˈpraɪməri/", pos: "adj.", meaning: "主要的；初级的", grade: "junior", example: "I am in primary school.", trans: "我上小学。", tags: ["基础"], related: [] },
  { word: "thank", phonetic: "/θæŋk/", pos: "v.", meaning: "感谢", grade: "junior", example: "Thank you.", trans: "谢谢你。", tags: ["基础"], related: [] },
  { word: "record", phonetic: "/ˈrekɔːd/", pos: "n./v.", meaning: "记录；唱片", grade: "junior", example: "Set a record.", trans: "创纪录。", tags: ["高频"], related: [] },
  { word: "whole", phonetic: "/həʊl/", pos: "adj.", meaning: "整个的", grade: "junior", example: "The whole day.", trans: "一整天。", tags: ["基础"], related: [] },
  { word: "director", phonetic: "/dəˈrektə(r)/", pos: "n.", meaning: "导演；主任", grade: "junior", example: "He is a film director.", trans: "他是电影导演。", tags: ["高频"], related: [] },
  { word: "tired", phonetic: "/ˈtaɪəd/", pos: "adj.", meaning: "疲倦的", grade: "junior", example: "I am tired.", trans: "我累了。", tags: ["基础"], related: [] },
  { word: "audit", phonetic: "/ˈɔːdɪt/", pos: "v.", meaning: "审计", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "spare", phonetic: "/speə(r)/", pos: "adj.", meaning: "空闲的", grade: "junior", example: "Do you have spare time?", trans: "你有空吗？", tags: ["基础"], related: [] },
  { word: "senior", phonetic: "/ˈsiːniə(r)/", pos: "adj.", meaning: "高级的", grade: "junior", example: "I am in senior high.", trans: "我上高中。", tags: ["基础"], related: [] },
  { word: "dentist", phonetic: "/ˈdentɪst/", pos: "n.", meaning: "牙医", grade: "junior", example: "I have a dentist appointment.", trans: "我约了牙医。", tags: ["基础"], related: [] },
  { word: "nice", phonetic: "/naɪs/", pos: "adj.", meaning: "好的；友善的", grade: "junior", example: "Nice to meet you.", trans: "很高兴见到你。", tags: ["基础"], related: [] },
  { word: "romantic", phonetic: "/rəʊˈmæntɪk/", pos: "adj.", meaning: "浪漫的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chamber", phonetic: "/ˈtʃeɪmbə(r)/", pos: "n.", meaning: "房间", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "add", phonetic: "/æd/", pos: "v.", meaning: "添加；增加", grade: "junior", example: "Add some sugar to the tea.", trans: "给茶加点糖。", tags: ["短语add to"], related: [] },
  { word: "describe", phonetic: "/dɪˈskraɪb/", pos: "v.", meaning: "描述", grade: "junior", example: "Describe the picture.", trans: "描述这张图片。", tags: ["名词description"], related: [
    { type: "名词形式", word: "description" }
  ] },
  { word: "square", phonetic: "/skweə(r)/", pos: "n.", meaning: "广场；正方形", grade: "junior", example: "Meet at the square.", trans: "在广场见。", tags: ["基础"], related: [] },
  { word: "exist", phonetic: "/ɪɡˈzɪst/", pos: "v.", meaning: "存在", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mouse", phonetic: "/maʊs/", pos: "n.", meaning: "老鼠", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "line", phonetic: "/laɪn/", pos: "n.", meaning: "线；排", grade: "junior", example: "Wait in line.", trans: "排队等。", tags: ["基础"], related: [] },
  { word: "rack", phonetic: "/ræk/", pos: "n.", meaning: "架子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "by", phonetic: "/baɪ/", pos: "prep.", meaning: "乘；通过", grade: "junior", example: "I go to school by bike.", trans: "我骑自行车上学。", tags: ["基础", "短语by the way"], related: [] },
  { word: "mud", phonetic: "/mʌd/", pos: "n.", meaning: "泥", grade: "junior", example: "The road is full of mud.", trans: "路上满是泥。", tags: ["不可数"], related: [] },
  { word: "test", phonetic: "/test/", pos: "n.", meaning: "测试", grade: "junior", example: "We have a test today.", trans: "今天有测试。", tags: ["基础"], related: [] },
  { word: "journey", phonetic: "/ˈdʒɜːni/", pos: "n.", meaning: "旅程", grade: "junior", example: "Have a safe journey.", trans: "旅途平安。", tags: ["高频"], related: [] },
  { word: "steel", phonetic: "/stiːl/", pos: "n.", meaning: "钢", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clay", phonetic: "/kleɪ/", pos: "n.", meaning: "黏土", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "region", phonetic: "/ˈriːdʒən/", pos: "n.", meaning: "地区", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "black", phonetic: "/blæk/", pos: "adj.", meaning: "黑色的", grade: "junior", example: "I have a black cat.", trans: "我有一只黑猫。", tags: ["基础"], related: [] },
  { word: "wooden", phonetic: "/ˈwʊdn/", pos: "adj.", meaning: "木制的", grade: "junior", example: "A wooden chair.", trans: "木椅。", tags: ["基础"], related: [] },
  { word: "female", phonetic: "/ˈfiːmeɪl/", pos: "adj.", meaning: "女性的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "drug", phonetic: "/drʌɡ/", pos: "n.", meaning: "药；毒品", grade: "junior", example: "Take the drug after meals.", trans: "饭后吃药。", tags: ["高频"], related: [] },
  { word: "air", phonetic: "/eə(r)/", pos: "n.", meaning: "空气；天空", grade: "junior", example: "Fresh air is good for us.", trans: "新鲜空气对我们有益。", tags: ["基础"], related: [] },
  { word: "domain", phonetic: "/dəˈmeɪn/", pos: "n.", meaning: "领域", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "spoon", phonetic: "/spuːn/", pos: "n.", meaning: "勺", grade: "junior", example: "Use a spoon.", trans: "用勺子。", tags: ["基础"], related: [] },
  { word: "welfare", phonetic: "/ˈwelfeə(r)/", pos: "n.", meaning: "福利", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "feeling", phonetic: "/ˈfiːlɪŋ/", pos: "n.", meaning: "感觉", grade: "junior", example: "I have a good feeling.", trans: "我有好的预感。", tags: ["基础"], related: [] },
  { word: "true", phonetic: "/truː/", pos: "adj.", meaning: "真实的", grade: "junior", example: "It is true.", trans: "是真的。", tags: ["名词truth", "反义词false"], related: [
    { type: "名词形式", word: "truth" },
    { type: "反义词", word: "false" }
  ] },
  { word: "forget", phonetic: "/fəˈɡet/", pos: "v.", meaning: "忘记", grade: "junior", example: "Do not forget to call.", trans: "别忘了打电话。", tags: ["过去式forgot", "反义词remember"], related: [
    { type: "过去式", word: "forgot" },
    { type: "反义词", word: "remember" }
  ] },
  { word: "centre", phonetic: "/ˈsentə(r)/", pos: "n.", meaning: "中心", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "take", phonetic: "/teɪk/", pos: "v.", meaning: "拿；乘坐", grade: "junior", example: "Take the bus.", trans: "坐公交车。", tags: ["过去式took", "过去分词taken"], related: [
    { type: "过去式", word: "took" },
    { type: "过去分词", word: "taken" }
  ] },
  { word: "baseball", phonetic: "/ˈbeɪsbɔːl/", pos: "n.", meaning: "棒球", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "guide", phonetic: "/ɡaɪd/", pos: "v./n.", meaning: "引导；导游", grade: "junior", example: "The guide showed us around.", trans: "导游带我们参观。", tags: ["高频"], related: [] },
  { word: "dad", phonetic: "/dæd/", pos: "n.", meaning: "爸爸", grade: "junior", example: "Dad is reading the newspaper.", trans: "爸爸在看报纸。", tags: ["基础"], related: [] },
  { word: "regret", phonetic: "/rɪˈɡret/", pos: "v.", meaning: "后悔", grade: "junior", example: "I regret saying that.", trans: "我后悔说了那话。", tags: ["后接doing"], related: [] },
  { word: "design", phonetic: "/dɪˈzaɪn/", pos: "v./n.", meaning: "设计", grade: "junior", example: "She designs clothes.", trans: "她设计服装。", tags: ["高频"], related: [] },
  { word: "praise", phonetic: "/preɪz/", pos: "v.", meaning: "表扬", grade: "junior", example: "The teacher praised me.", trans: "老师表扬了我。", tags: ["基础"], related: [] },
  { word: "hen", phonetic: "/hen/", pos: "n.", meaning: "母鸡", grade: "junior", example: "The hen lays eggs.", trans: "母鸡下蛋。", tags: ["基础"], related: [] },
  { word: "orange", phonetic: "/ˈɒrɪndʒ/", pos: "n.", meaning: "橙子；橙色", grade: "junior", example: "I like oranges.", trans: "我喜欢橙子。", tags: ["基础"], related: [] },
  { word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", pos: "n.", meaning: "教育", grade: "junior", example: "Education is important.", trans: "教育很重要。", tags: ["高频"], related: [] },
  { word: "law", phonetic: "/lɔː/", pos: "n.", meaning: "法律", grade: "junior", example: "Obey the law.", trans: "遵守法律。", tags: ["基础"], related: [] },
  { word: "insist", phonetic: "/ɪnˈsɪst/", pos: "v.", meaning: "坚持", grade: "junior", example: "He insists on going.", trans: "他坚持要去。", tags: ["短语insist on doing"], related: [] },
  { word: "frequency", phonetic: "/ˈfriːkwənsi/", pos: "n.", meaning: "频率", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "obvious", phonetic: "/ˈɒbviəs/", pos: "adj.", meaning: "明显的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "quarter", phonetic: "/ˈkwɔːtə(r)/", pos: "n.", meaning: "四分之一；一刻钟", grade: "junior", example: "A quarter past three.", trans: "三点一刻。", tags: ["基础"], related: [] },
  { word: "complex", phonetic: "/ˈkɒmpleks/", pos: "adj.", meaning: "复杂的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "contemporary", phonetic: "/kənˈtemprəri/", pos: "adj.", meaning: "当代的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "calculator", phonetic: "/ˈkælkjuleɪtə(r)/", pos: "n.", meaning: "计算器", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "purse", phonetic: "/pɜːs/", pos: "n.", meaning: "钱包", grade: "junior", example: "She lost her purse.", trans: "她丢了钱包。", tags: ["基础"], related: [] },
  { word: "original", phonetic: "/əˈrɪdʒənl/", pos: "adj.", meaning: "原始的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "divide", phonetic: "/dɪˈvaɪd/", pos: "v.", meaning: "分开；除", grade: "junior", example: "Divide the cake into four.", trans: "把蛋糕分成四份。", tags: ["短语divide into"], related: [] },
  { word: "extend", phonetic: "/ɪkˈstend/", pos: "v.", meaning: "延伸", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "round", phonetic: "/raʊnd/", pos: "adj.", meaning: "圆的", grade: "junior", example: "The moon is round.", trans: "月亮是圆的。", tags: ["基础"], related: [] },
  { word: "vote", phonetic: "/vəʊt/", pos: "v.", meaning: "投票", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "web", phonetic: "/web/", pos: "n.", meaning: "网", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "item", phonetic: "/ˈaɪtəm/", pos: "n.", meaning: "项目", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fruit", phonetic: "/fruːt/", pos: "n.", meaning: "水果", grade: "junior", example: "I eat fruit every day.", trans: "我每天吃水果。", tags: ["不可数"], related: [] },
  { word: "mall", phonetic: "/mɔːl/", pos: "n.", meaning: "商场", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "public", phonetic: "/ˈpʌblɪk/", pos: "adj.", meaning: "公共的", grade: "junior", example: "This is a public park.", trans: "这是公园。", tags: ["反义词private"], related: [
    { type: "反义词", word: "private" }
  ] },
  { word: "call", phonetic: "/kɔːl/", pos: "v.", meaning: "打电话；叫", grade: "junior", example: "Call me later.", trans: "稍后给我打电话。", tags: ["高频", "短语call up"], related: [] },
  { word: "strip", phonetic: "/strɪp/", pos: "v.", meaning: "剥", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "student", phonetic: "/ˈstjuːdnt/", pos: "n.", meaning: "学生", grade: "junior", example: "I am a student.", trans: "我是学生。", tags: ["基础"], related: [] },
  { word: "install", phonetic: "/ɪnˈstɔːl/", pos: "v.", meaning: "安装", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "available", phonetic: "/əˈveɪləbl/", pos: "adj.", meaning: "可获得的；有空的", grade: "junior", example: "Are you available tonight?", trans: "你今晚有空吗？", tags: ["高频"], related: [] },
  { word: "development", phonetic: "/dɪˈveləpmənt/", pos: "n.", meaning: "发展", grade: "junior", example: "Economic development is important.", trans: "经济发展很重要。", tags: ["动词develop"], related: [
    { type: "动词形式", word: "develop" }
  ] },
  { word: "pale", phonetic: "/peɪl/", pos: "adj.", meaning: "苍白的", grade: "junior", example: "You look pale.", trans: "你看起来很苍白。", tags: ["基础"], related: [] },
  { word: "evil", phonetic: "/ˈiːvl/", pos: "adj.", meaning: "邪恶的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "welcome", phonetic: "/ˈwelkəm/", pos: "v.", meaning: "欢迎", grade: "junior", example: "Welcome to China.", trans: "欢迎来中国。", tags: ["基础"], related: [] },
  { word: "friendship", phonetic: "/ˈfrendʃɪp/", pos: "n.", meaning: "友谊", grade: "junior", example: "Our friendship is strong.", trans: "我们的友谊很牢固。", tags: ["基础"], related: [] },
  { word: "self", phonetic: "/self/", pos: "n.", meaning: "自己", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "trend", phonetic: "/trend/", pos: "n.", meaning: "趋势", grade: "junior", example: "This is a new trend.", trans: "这是新趋势。", tags: ["高频"], related: [] },
  { word: "represent", phonetic: "/ˌreprɪˈzent/", pos: "v.", meaning: "代表", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "enemy", phonetic: "/ˈenəmi/", pos: "n.", meaning: "敌人", grade: "junior", example: "He has no enemies.", trans: "他没有敌人。", tags: ["复数enemies"], related: [
    { type: "复数", word: "enemies" }
  ] },
  { word: "switch", phonetic: "/swɪtʃ/", pos: "v.", meaning: "切换", grade: "junior", example: "Switch on the light.", trans: "开灯。", tags: ["基础"], related: [] },
  { word: "farmer", phonetic: "/ˈfɑːmə(r)/", pos: "n.", meaning: "农民", grade: "junior", example: "The farmer grows rice.", trans: "农民种水稻。", tags: ["基础"], related: [] },
  { word: "experiment", phonetic: "/ɪkˈsperɪmənt/", pos: "n.", meaning: "实验", grade: "junior", example: "We did a science experiment.", trans: "我们做了一个科学实验。", tags: ["高频"], related: [] },
  { word: "debate", phonetic: "/dɪˈbeɪt/", pos: "n./v.", meaning: "辩论", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "digest", phonetic: "/daɪˈdʒest/", pos: "v.", meaning: "消化", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "beside", phonetic: "/bɪˈsaɪd/", pos: "prep.", meaning: "在……旁边", grade: "junior", example: "Sit beside me.", trans: "坐在我旁边。", tags: ["介词", "易混besides"], related: [
    { type: "易混词", word: "besides" }
  ] },
  { word: "mars", phonetic: "/mɑːz/", pos: "n.", meaning: "火星", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "episode", phonetic: "/ˈepɪsəʊd/", pos: "n.", meaning: "插曲", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "enhance", phonetic: "/ɪnˈhɑːns/", pos: "v.", meaning: "提高", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clothes", phonetic: "/kləʊðz/", pos: "n.", meaning: "衣服", grade: "junior", example: "Wash your clothes.", trans: "洗衣服。", tags: ["只有复数形式"], related: [] },
  { word: "corporation", phonetic: "/ˌkɔːpəˈreɪʃn/", pos: "n.", meaning: "公司", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "operate", phonetic: "/ˈɒpəreɪt/", pos: "v.", meaning: "操作", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "phrase", phonetic: "/freɪz/", pos: "n.", meaning: "短语", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "notice", phonetic: "/ˈnəʊtɪs/", pos: "v./n.", meaning: "注意；通知", grade: "junior", example: "Did you notice?", trans: "你注意到了吗？", tags: ["高频"], related: [] },
  { word: "cancel", phonetic: "/ˈkænsl/", pos: "v.", meaning: "取消", grade: "junior", example: "The meeting was canceled.", trans: "会议取消了。", tags: ["高频"], related: [] },
  { word: "request", phonetic: "/rɪˈkwest/", pos: "v.", meaning: "请求", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "nod", phonetic: "/nɒd/", pos: "v.", meaning: "点头", grade: "junior", example: "He nodded in agreement.", trans: "他点头同意。", tags: ["基础"], related: [] },
  { word: "conversation", phonetic: "/ˌkɒnvəˈseɪʃn/", pos: "n.", meaning: "对话", grade: "junior", example: "We had a long conversation.", trans: "我们进行了长谈。", tags: ["高频"], related: [] },
  { word: "range", phonetic: "/reɪndʒ/", pos: "n.", meaning: "范围", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hell", phonetic: "/hel/", pos: "n.", meaning: "地狱", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gang", phonetic: "/ɡæŋ/", pos: "n.", meaning: "帮派", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "figure", phonetic: "/ˈfɪɡə(r)/", pos: "n.", meaning: "数字", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "quite", phonetic: "/kwaɪt/", pos: "adv.", meaning: "相当", grade: "junior", example: "It is quite good.", trans: "相当好。", tags: ["易混quiet"], related: [
    { type: "易混词", word: "quiet" }
  ] },
  { word: "sale", phonetic: "/seɪl/", pos: "n.", meaning: "出售", grade: "junior", example: "The shoes are on sale.", trans: "鞋子在打折。", tags: ["基础"], related: [] },
  { word: "bee", phonetic: "/biː/", pos: "n.", meaning: "蜜蜂", grade: "junior", example: "The bee is making honey.", trans: "蜜蜂在酿蜜。", tags: ["基础"], related: [] },
  { word: "candy", phonetic: "/ˈkændi/", pos: "n.", meaning: "糖果", grade: "junior", example: "Children love candy.", trans: "孩子们喜欢糖果。", tags: ["复数candies"], related: [
    { type: "复数", word: "candies" }
  ] },
  { word: "exact", phonetic: "/ɪɡˈzækt/", pos: "adj.", meaning: "精确的", grade: "junior", example: "What is the exact time?", trans: "确切时间是几点？", tags: ["高频"], related: [] },
  { word: "care", phonetic: "/keə(r)/", pos: "v./n.", meaning: "关心；照顾", grade: "junior", example: "Take care of yourself.", trans: "照顾好自己。", tags: ["高频", "短语take care of"], related: [] },
  { word: "hand", phonetic: "/hænd/", pos: "n.", meaning: "手", grade: "junior", example: "Wash your hands.", trans: "洗手。", tags: ["基础"], related: [] },
  { word: "applicant", phonetic: "/ˈæplɪkənt/", pos: "n.", meaning: "申请人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "let", phonetic: "/let/", pos: "v.", meaning: "让", grade: "junior", example: "Let me help you.", trans: "让我帮你。", tags: ["过去式let", "后接动词原形"], related: [
    { type: "过去式", word: "let" }
  ] },
  { word: "sharp", phonetic: "/ʃɑːp/", pos: "adj.", meaning: "锋利的", grade: "junior", example: "The knife is sharp.", trans: "刀很锋利。", tags: ["基础"], related: [] },
  { word: "instance", phonetic: "/ˈɪnstəns/", pos: "n.", meaning: "例子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "liquid", phonetic: "/ˈlɪkwɪd/", pos: "n.", meaning: "液体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wide", phonetic: "/waɪd/", pos: "adj.", meaning: "宽的", grade: "junior", example: "The road is wide.", trans: "路很宽。", tags: ["反义词narrow"], related: [
    { type: "反义词", word: "narrow" }
  ] },
  { word: "quest", phonetic: "/kwest/", pos: "n.", meaning: "探索", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "attempt", phonetic: "/əˈtempt/", pos: "v./n.", meaning: "尝试", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "level", phonetic: "/ˈlevl/", pos: "n.", meaning: "水平", grade: "junior", example: "My English level is good.", trans: "我的英语水平不错。", tags: ["高频"], related: [] },
  { word: "folk", phonetic: "/fəʊk/", pos: "n.", meaning: "人们", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ridge", phonetic: "/rɪdʒ/", pos: "n.", meaning: "山脊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lip", phonetic: "/lɪp/", pos: "n.", meaning: "嘴唇", grade: "junior", example: "Her lips are red.", trans: "她的嘴唇很红。", tags: ["基础"], related: [] },
  { word: "bulk", phonetic: "/bʌlk/", pos: "n.", meaning: "大部分", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "capability", phonetic: "/ˌkeɪpəˈbɪləti/", pos: "n.", meaning: "能力", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "nurse", phonetic: "/nɜːs/", pos: "n.", meaning: "护士", grade: "junior", example: "The nurse is kind.", trans: "护士很善良。", tags: ["基础"], related: [] },
  { word: "Christ", phonetic: "/kraɪst/", pos: "n.", meaning: "基督", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "auction", phonetic: "/ˈɔːkʃn/", pos: "n.", meaning: "拍卖", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wedding", phonetic: "/ˈwedɪŋ/", pos: "n.", meaning: "婚礼", grade: "junior", example: "We went to a wedding.", trans: "我们参加了婚礼。", tags: ["基础"], related: [] },
  { word: "king", phonetic: "/kɪŋ/", pos: "n.", meaning: "国王", grade: "junior", example: "The king ruled the country.", trans: "国王统治国家。", tags: ["基础"], related: [] },
  { word: "society", phonetic: "/səˈsaɪəti/", pos: "n.", meaning: "社会", grade: "junior", example: "We live in society.", trans: "我们生活在社会中。", tags: ["复数societies"], related: [
    { type: "复数", word: "societies" }
  ] },
  { word: "appearance", phonetic: "/əˈpɪərəns/", pos: "n.", meaning: "外观", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "familiar", phonetic: "/fəˈmɪliə(r)/", pos: "adj.", meaning: "熟悉的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "feel", phonetic: "/fiːl/", pos: "v.", meaning: "感觉", grade: "junior", example: "I feel happy.", trans: "我感觉开心。", tags: ["过去式felt"], related: [
    { type: "过去式", word: "felt" }
  ] },
  { word: "version", phonetic: "/ˈvɜːʃn/", pos: "n.", meaning: "版本", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "atom", phonetic: "/ˈætəm/", pos: "n.", meaning: "原子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "congress", phonetic: "/ˈkɒŋɡres/", pos: "n.", meaning: "国会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "guy", phonetic: "/ɡaɪ/", pos: "n.", meaning: "家伙", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "disability", phonetic: "/ˌdɪsəˈbɪləti/", pos: "n.", meaning: "残疾", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lazy", phonetic: "/ˈleɪzi/", pos: "adj.", meaning: "懒惰的", grade: "junior", example: "He is a lazy boy.", trans: "他是个懒孩子。", tags: ["比较级lazier"], related: [
    { type: "比较级", word: "lazier" }
  ] },
  { word: "finance", phonetic: "/ˈfaɪnæns/", pos: "n.", meaning: "金融", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "partly", phonetic: "/ˈpɑːtli/", pos: "adv.", meaning: "部分地", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "population", phonetic: "/ˌpɒpjuˈleɪʃn/", pos: "n.", meaning: "人口", grade: "junior", example: "China has a large population.", trans: "中国人口众多。", tags: ["高频"], related: [] },
  { word: "net", phonetic: "/net/", pos: "n.", meaning: "网", grade: "junior", example: "The fish is in the net.", trans: "鱼在网里。", tags: ["基础"], related: [] },
  { word: "recipe", phonetic: "/ˈresəpi/", pos: "n.", meaning: "食谱", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "die", phonetic: "/daɪ/", pos: "v.", meaning: "死", grade: "junior", example: "The flowers will die without water.", trans: "花没有水会死。", tags: ["短语die of", "名词death"], related: [
    { type: "名词形式", word: "death" }
  ] },
  { word: "grid", phonetic: "/ɡrɪd/", pos: "n.", meaning: "网格", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "enterprise", phonetic: "/ˈentəpraɪz/", pos: "n.", meaning: "企业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "count", phonetic: "/kaʊnt/", pos: "v.", meaning: "数；计算", grade: "junior", example: "Count the students.", trans: "数一下学生。", tags: ["基础"], related: [] },
  { word: "action", phonetic: "/ˈækʃn/", pos: "n.", meaning: "行动；行为", grade: "junior", example: "Take action right now.", trans: "立刻采取行动。", tags: ["短语take action"], related: [] },
  { word: "chair", phonetic: "/tʃeə(r)/", pos: "n.", meaning: "椅子", grade: "junior", example: "Sit on the chair.", trans: "坐在椅子上。", tags: ["基础"], related: [] },
  { word: "novel", phonetic: "/ˈnɒvl/", pos: "n.", meaning: "小说", grade: "junior", example: "I am reading a novel.", trans: "我在读小说。", tags: ["基础"], related: [] },
  { word: "chairman", phonetic: "/ˈtʃeəmən/", pos: "n.", meaning: "主席", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "against", phonetic: "/əˈɡenst/", pos: "prep.", meaning: "反对；靠着", grade: "junior", example: "I am against the plan.", trans: "我反对这个计划。", tags: ["介词"], related: [] },
  { word: "fit", phonetic: "/fɪt/", pos: "adj.", meaning: "健康的；合适的", grade: "junior", example: "The shoes fit me well.", trans: "这鞋很合脚。", tags: ["短语keep fit"], related: [] },
  { word: "dear", phonetic: "/dɪə(r)/", pos: "adj.", meaning: "亲爱的", grade: "junior", example: "Dear Mom,", trans: "亲爱的妈妈：", tags: ["基础"], related: [] },
  { word: "reasonable", phonetic: "/ˈriːznəbl/", pos: "adj.", meaning: "合理的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "capital", phonetic: "/ˈkæpɪtl/", pos: "n.", meaning: "首都；资本", grade: "junior", example: "Beijing is the capital of China.", trans: "北京是中国的首都。", tags: ["高频"], related: [] },
  { word: "show", phonetic: "/ʃəʊ/", pos: "v.", meaning: "展示", grade: "junior", example: "Show me the way.", trans: "给我指路。", tags: ["过去式showed"], related: [
    { type: "过去式", word: "showed" }
  ] },
  { word: "illness", phonetic: "/ˈɪlnəs/", pos: "n.", meaning: "疾病", grade: "junior", example: "He is recovering from illness.", trans: "他正在从疾病中恢复。", tags: ["不可数"], related: [] },
  { word: "county", phonetic: "/ˈkaʊnti/", pos: "n.", meaning: "郡", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "entrance", phonetic: "/ˈentrəns/", pos: "n.", meaning: "入口", grade: "junior", example: "The entrance is over there.", trans: "入口在那边。", tags: ["基础"], related: [] },
  { word: "console", phonetic: "/kənˈsəʊl/", pos: "v.", meaning: "安慰", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "expensive", phonetic: "/ɪkˈspensɪv/", pos: "adj.", meaning: "昂贵的", grade: "junior", example: "This car is expensive.", trans: "这辆车很贵。", tags: ["反义词cheap"], related: [
    { type: "反义词", word: "cheap" }
  ] },
  { word: "different", phonetic: "/ˈdɪfrənt/", pos: "adj.", meaning: "不同的", grade: "junior", example: "We have different ideas.", trans: "我们有不同的想法。", tags: ["短语be different from"], related: [] },
  { word: "studio", phonetic: "/ˈstjuːdiəʊ/", pos: "n.", meaning: "工作室", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chain", phonetic: "/tʃeɪn/", pos: "n.", meaning: "链", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "home", phonetic: "/həʊm/", pos: "n.", meaning: "家", grade: "junior", example: "I am at home.", trans: "我在家。", tags: ["基础", "短语go home"], related: [] },
  { word: "drama", phonetic: "/ˈdrɑːmə/", pos: "n.", meaning: "戏剧", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "convenient", phonetic: "/kənˈviːniənt/", pos: "adj.", meaning: "方便的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "goodbye", phonetic: "/ˌɡʊdˈbaɪ/", pos: "int.", meaning: "再见", grade: "junior", example: "Goodbye, see you.", trans: "再见，回头见。", tags: ["基础"], related: [] },
  { word: "mountain", phonetic: "/ˈmaʊntən/", pos: "n.", meaning: "山", grade: "junior", example: "We climbed the mountain.", trans: "我们爬了山。", tags: ["基础"], related: [] },
  { word: "ready", phonetic: "/ˈredi/", pos: "adj.", meaning: "准备好的", grade: "junior", example: "Are you ready?", trans: "你准备好了吗？", tags: ["短语be ready for"], related: [] },
  { word: "biological", phonetic: "/ˌbaɪəˈlɒdʒɪkl/", pos: "adj.", meaning: "生物学的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "vary", phonetic: "/ˈveəri/", pos: "v.", meaning: "变化", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "job", phonetic: "/dʒɒb/", pos: "n.", meaning: "工作", grade: "junior", example: "I have a new job.", trans: "我有新工作。", tags: ["基础"], related: [] },
  { word: "link", phonetic: "/lɪŋk/", pos: "n.", meaning: "链接", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fall", phonetic: "/fɔːl/", pos: "v.", meaning: "落下；跌倒", grade: "junior", example: "Leaves fall in autumn.", trans: "秋天树叶落下。", tags: ["过去式fell", "美语秋天"], related: [
    { type: "过去式", word: "fell" }
  ] },
  { word: "weather", phonetic: "/ˈweðə(r)/", pos: "n.", meaning: "天气", grade: "junior", example: "The weather is nice.", trans: "天气很好。", tags: ["不可数", "易混whether"], related: [
    { type: "易混词", word: "whether" }
  ] },
  { word: "commission", phonetic: "/kəˈmɪʃn/", pos: "n.", meaning: "委员会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "garage", phonetic: "/ˈɡærɑːʒ/", pos: "n.", meaning: "车库", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cartridge", phonetic: "/ˈkɑːtrɪdʒ/", pos: "n.", meaning: "墨盒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "vital", phonetic: "/ˈvaɪtl/", pos: "adj.", meaning: "至关重要的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "reserve", phonetic: "/rɪˈzɜːv/", pos: "v.", meaning: "保留", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "awareness", phonetic: "/əˈweənəs/", pos: "n.", meaning: "意识", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sheep", phonetic: "/ʃiːp/", pos: "n.", meaning: "羊", grade: "junior", example: "There are many sheep.", trans: "有很多羊。", tags: ["单复数同形"], related: [] },
  { word: "brought", phonetic: "/brɔːt/", pos: "v.", meaning: "带来(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "conduct", phonetic: "/kənˈdʌkt/", pos: "v.", meaning: "进行", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "knock", phonetic: "/nɒk/", pos: "v.", meaning: "敲", grade: "junior", example: "Knock on the door.", trans: "敲门。", tags: ["短语knock at"], related: [] },
  { word: "receive", phonetic: "/rɪˈsiːv/", pos: "v.", meaning: "收到", grade: "junior", example: "I received a letter.", trans: "我收到一封信。", tags: ["名词reception"], related: [
    { type: "名词形式", word: "reception" }
  ] },
  { word: "contribute", phonetic: "/kənˈtrɪbjuːt/", pos: "v.", meaning: "贡献", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "applicable", phonetic: "/əˈplɪkəbl/", pos: "adj.", meaning: "适用的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "depth", phonetic: "/depθ/", pos: "n.", meaning: "深度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "brass", phonetic: "/brɑːs/", pos: "n.", meaning: "黄铜", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pump", phonetic: "/pʌmp/", pos: "n.", meaning: "泵", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "period", phonetic: "/ˈpɪəriəd/", pos: "n.", meaning: "时期；一节课", grade: "junior", example: "We have four periods.", trans: "我们有四节课。", tags: ["高频"], related: [] },
  { word: "secure", phonetic: "/sɪˈkjʊə(r)/", pos: "adj.", meaning: "安全的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "custom", phonetic: "/ˈkʌstəm/", pos: "n.", meaning: "习俗", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cross", phonetic: "/krɒs/", pos: "v.", meaning: "穿过", grade: "junior", example: "Cross the street carefully.", trans: "小心过马路。", tags: ["短语cross out"], related: [] },
  { word: "confident", phonetic: "/ˈkɒnfɪdənt/", pos: "adj.", meaning: "自信的", grade: "junior", example: "Be confident in yourself.", trans: "要对自己有信心。", tags: ["名词confidence"], related: [
    { type: "名词形式", word: "confidence" }
  ] },
  { word: "marry", phonetic: "/ˈmæri/", pos: "v.", meaning: "结婚", grade: "junior", example: "They will marry next year.", trans: "他们明年结婚。", tags: ["短语marry sb"], related: [] },
  { word: "bag", phonetic: "/bæɡ/", pos: "n.", meaning: "包；袋", grade: "junior", example: "Put the book in your bag.", trans: "把书放进包里。", tags: ["基础"], related: [] },
  { word: "criminal", phonetic: "/ˈkrɪmɪnl/", pos: "n.", meaning: "罪犯", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "history", phonetic: "/ˈhɪstri/", pos: "n.", meaning: "历史", grade: "junior", example: "I like Chinese history.", trans: "我喜欢中国历史。", tags: ["基础"], related: [] },
  { word: "sister", phonetic: "/ˈsɪstə(r)/", pos: "n.", meaning: "姐妹", grade: "junior", example: "She is my sister.", trans: "她是我姐姐。", tags: ["基础"], related: [] },
  { word: "express", phonetic: "/ɪkˈspres/", pos: "v.", meaning: "表达", grade: "junior", example: "Express your feelings.", trans: "表达你的感受。", tags: ["名词expression"], related: [
    { type: "名词形式", word: "expression" }
  ] },
  { word: "club", phonetic: "/klʌb/", pos: "n.", meaning: "俱乐部", grade: "junior", example: "I joined the chess club.", trans: "我加入了象棋俱乐部。", tags: ["基础"], related: [] },
  { word: "resource", phonetic: "/rɪˈsɔːs/", pos: "n.", meaning: "资源", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ring", phonetic: "/rɪŋ/", pos: "v.", meaning: "响；打电话", grade: "junior", example: "The phone is ringing.", trans: "电话在响。", tags: ["过去式rang"], related: [
    { type: "过去式", word: "rang" }
  ] },
  { word: "duration", phonetic: "/djuˈreɪʃn/", pos: "n.", meaning: "持续", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "series", phonetic: "/ˈsɪəriːz/", pos: "n.", meaning: "系列", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "scissors", phonetic: "/ˈsɪzəz/", pos: "n.", meaning: "剪刀", grade: "junior", example: "Use scissors to cut.", trans: "用剪刀剪。", tags: ["只有复数"], related: [] },
  { word: "jet", phonetic: "/dʒet/", pos: "n.", meaning: "喷气式飞机", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "maximum", phonetic: "/ˈmæksɪməm/", pos: "n.", meaning: "最大值", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "benefit", phonetic: "/ˈbenɪfɪt/", pos: "n./v.", meaning: "利益；受益", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "serious", phonetic: "/ˈsɪəriəs/", pos: "adj.", meaning: "严肃的", grade: "junior", example: "He is serious.", trans: "他很严肃。", tags: ["副词seriously"], related: [] },
  { word: "trousers", phonetic: "/ˈtraʊzəz/", pos: "n.", meaning: "裤子", grade: "junior", example: "Wear trousers.", trans: "穿裤子。", tags: ["只有复数"], related: [] },
  { word: "chosen", phonetic: "/ˈtʃəʊzn/", pos: "v.", meaning: "选择(过去分词)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "farm", phonetic: "/fɑːm/", pos: "n.", meaning: "农场", grade: "junior", example: "My grandfather has a farm.", trans: "我爷爷有个农场。", tags: ["基础"], related: [] },
  { word: "some", phonetic: "/sʌm/", pos: "adj.", meaning: "一些", grade: "junior", example: "I have some money.", trans: "我有一些钱。", tags: ["基础"], related: [] },
  { word: "engine", phonetic: "/ˈendʒɪn/", pos: "n.", meaning: "发动机", grade: "junior", example: "The engine is broken.", trans: "发动机坏了。", tags: ["基础"], related: [] },
  { word: "zone", phonetic: "/zəʊn/", pos: "n.", meaning: "区域", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "jazz", phonetic: "/dʒæz/", pos: "n.", meaning: "爵士乐", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lively", phonetic: "/ˈlaɪvli/", pos: "adj.", meaning: "活泼的", grade: "junior", example: "She is a lively girl.", trans: "她是个活泼的女孩。", tags: ["基础"], related: [] },
  { word: "love", phonetic: "/lʌv/", pos: "v.", meaning: "爱", grade: "junior", example: "I love my family.", trans: "我爱我的家人。", tags: ["基础"], related: [] },
  { word: "discuss", phonetic: "/dɪˈskʌs/", pos: "v.", meaning: "讨论", grade: "junior", example: "Let us discuss the plan.", trans: "我们讨论一下计划。", tags: ["名词discussion"], related: [
    { type: "名词形式", word: "discussion" }
  ] },
  { word: "pizza", phonetic: "/ˈpiːtsə/", pos: "n.", meaning: "披萨", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "write", phonetic: "/raɪt/", pos: "v.", meaning: "写", grade: "junior", example: "I write a letter.", trans: "我写信。", tags: ["过去式wrote", "过去分词written"], related: [
    { type: "过去式", word: "wrote" },
    { type: "过去分词", word: "written" }
  ] },
  { word: "hobby", phonetic: "/ˈhɒbi/", pos: "n.", meaning: "爱好", grade: "junior", example: "My hobby is reading.", trans: "我的爱好是阅读。", tags: ["复数hobbies"], related: [
    { type: "复数", word: "hobbies" }
  ] },
  { word: "essential", phonetic: "/ɪˈsenʃl/", pos: "adj.", meaning: "必要的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "twin", phonetic: "/twɪn/", pos: "n.", meaning: "双胞胎", grade: "junior", example: "They are twins.", trans: "他们是双胞胎。", tags: ["基础"], related: [] },
  { word: "before", phonetic: "/bɪˈfɔː(r)/", pos: "prep.", meaning: "在……之前", grade: "junior", example: "Wash your hands before eating.", trans: "吃饭前洗手。", tags: ["基础", "反义词after"], related: [
    { type: "反义词", word: "after" }
  ] },
  { word: "every", phonetic: "/ˈevri/", pos: "adj.", meaning: "每个的", grade: "junior", example: "Every student is here.", trans: "每个学生都在。", tags: ["基础"], related: [] },
  { word: "cherry", phonetic: "/ˈtʃeri/", pos: "n.", meaning: "樱桃", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "port", phonetic: "/pɔːt/", pos: "n.", meaning: "港口", grade: "junior", example: "The ship is in port.", trans: "船在港口。", tags: ["基础"], related: [] },
  { word: "industry", phonetic: "/ˈɪndəstri/", pos: "n.", meaning: "工业；行业", grade: "junior", example: "The car industry is large.", trans: "汽车工业很大。", tags: ["复数industries"], related: [
    { type: "复数", word: "industries" }
  ] },
  { word: "ski", phonetic: "/skiː/", pos: "v.", meaning: "滑雪", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "threat", phonetic: "/θret/", pos: "n.", meaning: "威胁", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "been", phonetic: "/bɪn/", pos: "v.", meaning: "是(过去分词)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "indoor", phonetic: "/ˈɪndɔː(r)/", pos: "adj.", meaning: "室内的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "belt", phonetic: "/belt/", pos: "n.", meaning: "腰带", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "used", phonetic: "/juːst/", pos: "adj.", meaning: "习惯于", grade: "junior", example: "I am used to it.", trans: "我习惯了。", tags: ["短语used to do"], related: [] },
  { word: "snake", phonetic: "/sneɪk/", pos: "n.", meaning: "蛇", grade: "junior", example: "I am afraid of snakes.", trans: "我怕蛇。", tags: ["基础"], related: [] },
  { word: "stair", phonetic: "/steə(r)/", pos: "n.", meaning: "楼梯", grade: "junior", example: "Walk up the stairs.", trans: "上楼梯。", tags: ["常用复数stairs"], related: [] },
  { word: "poetry", phonetic: "/ˈpəʊətri/", pos: "n.", meaning: "诗歌", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bible", phonetic: "/ˈbaɪbl/", pos: "n.", meaning: "圣经", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "drop", phonetic: "/drɒp/", pos: "v.", meaning: "落下；放弃", grade: "junior", example: "Drop the ball.", trans: "把球放下。", tags: ["短语drop in"], related: [] },
  { word: "discussion", phonetic: "/dɪˈskʌʃn/", pos: "n.", meaning: "讨论", grade: "junior", example: "We had a good discussion.", trans: "我们进行了愉快的讨论。", tags: ["动词discuss"], related: [
    { type: "动词形式", word: "discuss" }
  ] },
  { word: "split", phonetic: "/splɪt/", pos: "v.", meaning: "分裂", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "built", phonetic: "/bɪlt/", pos: "v.", meaning: "建造(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "independence", phonetic: "/ˌɪndɪˈpendəns/", pos: "n.", meaning: "独立", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dress", phonetic: "/dres/", pos: "n.", meaning: "连衣裙", grade: "junior", example: "She wears a red dress.", trans: "她穿着红色连衣裙。", tags: ["基础"], related: [] },
  { word: "okay", phonetic: "/ˌəʊˈkeɪ/", pos: "adj.", meaning: "好的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dot", phonetic: "/dɒt/", pos: "n.", meaning: "点", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "borrow", phonetic: "/ˈbɒrəʊ/", pos: "v.", meaning: "借（入）", grade: "junior", example: "Can I borrow your pen?", trans: "我能借你的笔吗？", tags: ["反义词lend"], related: [
    { type: "反义词", word: "lend" }
  ] },
  { word: "bone", phonetic: "/bəʊn/", pos: "n.", meaning: "骨头", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "will", phonetic: "/wɪl/", pos: "aux.", meaning: "将", grade: "junior", example: "I will help.", trans: "我会帮忙。", tags: ["基础", "过去式would"], related: [
    { type: "过去式", word: "would" }
  ] },
  { word: "section", phonetic: "/ˈsekʃn/", pos: "n.", meaning: "部分", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "beach", phonetic: "/biːtʃ/", pos: "n.", meaning: "海滩", grade: "junior", example: "We went to the beach.", trans: "我们去了海滩。", tags: ["高频", "易混bitch"], related: [
    { type: "易混词", word: "bitch" }
  ] },
  { word: "be", phonetic: "/biː/", pos: "v.", meaning: "是；存在", grade: "junior", example: "I am a student.", trans: "我是一名学生。", tags: ["基础", "am/is/are"], related: [] },
  { word: "feedback", phonetic: "/ˈfiːdbæk/", pos: "n.", meaning: "反馈", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clinical", phonetic: "/ˈklɪnɪkl/", pos: "adj.", meaning: "临床的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "post", phonetic: "/pəʊst/", pos: "n.", meaning: "邮政；帖子", grade: "junior", example: "Send it by post.", trans: "邮寄。", tags: ["基础"], related: [] },
  { word: "heat", phonetic: "/hiːt/", pos: "n.", meaning: "热", grade: "junior", example: "The heat is unbearable.", trans: "热得受不了。", tags: ["不可数"], related: [] },
  { word: "country", phonetic: "/ˈkʌntri/", pos: "n.", meaning: "国家；乡村", grade: "junior", example: "China is a big country.", trans: "中国是个大国。", tags: ["复数countries"], related: [
    { type: "复数", word: "countries" }
  ] },
  { word: "body", phonetic: "/ˈbɒdi/", pos: "n.", meaning: "身体", grade: "junior", example: "Exercise is good for the body.", trans: "运动对身体有益。", tags: ["基础"], related: [] },
  { word: "email", phonetic: "/ˈiːmeɪl/", pos: "n.", meaning: "电子邮件", grade: "junior", example: "Send me an email.", trans: "给我发邮件。", tags: ["高频"], related: [] },
  { word: "attachment", phonetic: "/əˈtætʃmənt/", pos: "n.", meaning: "附件", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "machine", phonetic: "/məˈʃiːn/", pos: "n.", meaning: "机器", grade: "junior", example: "The machine is broken.", trans: "机器坏了。", tags: ["高频"], related: [] },
  { word: "eraser", phonetic: "/ɪˈreɪzə(r)/", pos: "n.", meaning: "橡皮擦", grade: "junior", example: "Use the eraser.", trans: "用橡皮擦。", tags: ["基础", "美式rubber"], related: [] },
  { word: "watermelon", phonetic: "/ˈwɔːtəmelən/", pos: "n.", meaning: "西瓜", grade: "junior", example: "I love watermelon.", trans: "我喜欢西瓜。", tags: ["基础"], related: [] },
  { word: "carrier", phonetic: "/ˈkæriə(r)/", pos: "n.", meaning: "载体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "winter", phonetic: "/ˈwɪntə(r)/", pos: "n.", meaning: "冬天", grade: "junior", example: "Winter is cold.", trans: "冬天很冷。", tags: ["基础"], related: [] },
  { word: "blood", phonetic: "/blʌd/", pos: "n.", meaning: "血", grade: "junior", example: "He lost a lot of blood.", trans: "他流了很多血。", tags: ["不可数"], related: [] },
  { word: "unusual", phonetic: "/ʌnˈjuːʒuəl/", pos: "adj.", meaning: "不寻常的", grade: "junior", example: "This is unusual.", trans: "这不寻常。", tags: ["反义词usual"], related: [
    { type: "反义词", word: "usual" }
  ] },
  { word: "adventure", phonetic: "/ədˈventʃə(r)/", pos: "n.", meaning: "冒险", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boy", phonetic: "/bɔɪ/", pos: "n.", meaning: "男孩", grade: "junior", example: "The boy is playing football.", trans: "男孩在踢足球。", tags: ["基础"], related: [] },
  { word: "revenue", phonetic: "/ˈrevənjuː/", pos: "n.", meaning: "收入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tale", phonetic: "/teɪl/", pos: "n.", meaning: "故事", grade: "junior", example: "Tell me a tale.", trans: "给我讲个故事。", tags: ["基础"], related: [] },
  { word: "kilo", phonetic: "/ˈkiːləʊ/", pos: "n.", meaning: "千克", grade: "junior", example: "A kilo of apples.", trans: "一千克苹果。", tags: ["全称kilogram"], related: [] },
  { word: "charge", phonetic: "/tʃɑːdʒ/", pos: "v./n.", meaning: "收费；指控", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "suit", phonetic: "/suːt/", pos: "n.", meaning: "套装", grade: "junior", example: "He wears a suit.", trans: "他穿套装。", tags: ["基础"], related: [] },
  { word: "download", phonetic: "/ˌdaʊnˈləʊd/", pos: "v.", meaning: "下载", grade: "junior", example: "Download the file.", trans: "下载文件。", tags: ["高频"], related: [] },
  { word: "grade", phonetic: "/ɡreɪd/", pos: "n.", meaning: "年级；分数", grade: "junior", example: "I am in Grade 7.", trans: "我上七年级。", tags: ["基础"], related: [] },
  { word: "nuclear", phonetic: "/ˈnjuːkliə(r)/", pos: "adj.", meaning: "核的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "difficulty", phonetic: "/ˈdɪfɪkəlti/", pos: "n.", meaning: "困难", grade: "junior", example: "He has difficulty walking.", trans: "他走路有困难。", tags: ["短语have difficulty doing"], related: [] },
  { word: "america", phonetic: "/əˈmerɪkə/", pos: "n.", meaning: "美国", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", pos: "n.", meaning: "环境", grade: "junior", example: "Protect the environment.", trans: "保护环境。", tags: ["高频"], related: [] },
  { word: "kit", phonetic: "/kɪt/", pos: "n.", meaning: "工具包", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "out", phonetic: "/aʊt/", pos: "adv.", meaning: "出去", grade: "junior", example: "Go out and play.", trans: "出去玩。", tags: ["基础", "反义词in"], related: [
    { type: "反义词", word: "in" }
  ] },
  { word: "bath", phonetic: "/bɑːθ/", pos: "n.", meaning: "洗澡；浴缸", grade: "junior", example: "I take a bath every night.", trans: "我每晚洗澡。", tags: ["基础"], related: [] },
  { word: "translate", phonetic: "/trænsˈleɪt/", pos: "v.", meaning: "翻译", grade: "junior", example: "Translate this sentence.", trans: "翻译这个句子。", tags: ["名词translation"], related: [
    { type: "名词形式", word: "translation" }
  ] },
  { word: "pipe", phonetic: "/paɪp/", pos: "n.", meaning: "管子", grade: "junior", example: "The pipe is broken.", trans: "管子坏了。", tags: ["基础"], related: [] },
  { word: "calculate", phonetic: "/ˈkælkjuleɪt/", pos: "v.", meaning: "计算", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dodge", phonetic: "/dɒdʒ/", pos: "v.", meaning: "躲闪", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "diesel", phonetic: "/ˈdiːzl/", pos: "n.", meaning: "柴油", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "social", phonetic: "/ˈsəʊʃl/", pos: "adj.", meaning: "社会的", grade: "junior", example: "This is a social problem.", trans: "这是社会问题。", tags: ["名词society"], related: [
    { type: "名词形式", word: "society" }
  ] },
  { word: "help", phonetic: "/help/", pos: "v.", meaning: "帮助", grade: "junior", example: "Can you help me?", trans: "你能帮我吗？", tags: ["基础", "短语help sb with sth"], related: [] },
  { word: "buy", phonetic: "/baɪ/", pos: "v.", meaning: "买", grade: "junior", example: "I want to buy a new phone.", trans: "我想买部新手机。", tags: ["过去式bought", "反义词sell"], related: [
    { type: "过去式", word: "bought" },
    { type: "反义词", word: "sell" }
  ] },
  { word: "butt", phonetic: "/bʌt/", pos: "n.", meaning: "屁股", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "internet", phonetic: "/ˈɪntənet/", pos: "n.", meaning: "互联网", grade: "junior", example: "I use the Internet every day.", trans: "我每天上网。", tags: ["高频"], related: [] },
  { word: "wave", phonetic: "/weɪv/", pos: "v.", meaning: "挥手", grade: "junior", example: "Wave goodbye.", trans: "挥手告别。", tags: ["基础"], related: [] },
  { word: "hold", phonetic: "/həʊld/", pos: "v.", meaning: "握住；举行", grade: "junior", example: "Hold my hand.", trans: "握住我的手。", tags: ["过去式held"], related: [
    { type: "过去式", word: "held" }
  ] },
  { word: "hall", phonetic: "/hɔːl/", pos: "n.", meaning: "大厅", grade: "junior", example: "Meet in the hall.", trans: "在大厅见面。", tags: ["基础"], related: [] },
  { word: "broken", phonetic: "/ˈbrəʊkən/", pos: "adj.", meaning: "破碎的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lose", phonetic: "/luːz/", pos: "v.", meaning: "丢失", grade: "junior", example: "I lost my keys.", trans: "我丢了钥匙。", tags: ["过去式lost", "反义词find"], related: [
    { type: "过去式", word: "lost" },
    { type: "反义词", word: "find" }
  ] },
  { word: "rule", phonetic: "/ruːl/", pos: "n.", meaning: "规则", grade: "junior", example: "Follow the rules.", trans: "遵守规则。", tags: ["基础"], related: [] },
  { word: "sugar", phonetic: "/ˈʃʊɡə(r)/", pos: "n.", meaning: "糖", grade: "junior", example: "Add some sugar.", trans: "加点糖。", tags: ["不可数"], related: [] },
  { word: "danger", phonetic: "/ˈdeɪndʒə(r)/", pos: "n.", meaning: "危险", grade: "junior", example: "Watch out for danger.", trans: "当心危险。", tags: ["形容词dangerous"], related: [] },
  { word: "fraud", phonetic: "/frɔːd/", pos: "n.", meaning: "欺诈", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "open", phonetic: "/ˈəʊpən/", pos: "v.", meaning: "打开", grade: "junior", example: "Open the window.", trans: "开窗。", tags: ["反义词close"], related: [
    { type: "反义词", word: "close" }
  ] },
  { word: "reporter", phonetic: "/rɪˈpɔːtə(r)/", pos: "n.", meaning: "记者", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "break", phonetic: "/breɪk/", pos: "v.", meaning: "打破；休息", grade: "junior", example: "Break the glass.", trans: "打碎玻璃。", tags: ["过去式broke", "短语take a break"], related: [
    { type: "过去式", word: "broke" }
  ] },
  { word: "fear", phonetic: "/fɪə(r)/", pos: "n.", meaning: "害怕", grade: "junior", example: "Do not show fear.", trans: "不要表现出害怕。", tags: ["基础"], related: [] },
  { word: "blind", phonetic: "/blaɪnd/", pos: "adj.", meaning: "盲的；瞎的", grade: "junior", example: "The blind man needs help.", trans: "那位盲人需要帮助。", tags: ["高频"], related: [] },
  { word: "white", phonetic: "/waɪt/", pos: "adj.", meaning: "白色的", grade: "junior", example: "The snow is white.", trans: "雪是白的。", tags: ["基础"], related: [] },
  { word: "depression", phonetic: "/dɪˈpreʃn/", pos: "n.", meaning: "抑郁", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "army", phonetic: "/ˈɑːmi/", pos: "n.", meaning: "军队", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "valley", phonetic: "/ˈvæli/", pos: "n.", meaning: "山谷", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "special", phonetic: "/ˈspeʃl/", pos: "adj.", meaning: "特别的", grade: "junior", example: "This is special.", trans: "这很特别。", tags: ["副词specially"], related: [] },
  { word: "thought", phonetic: "/θɔːt/", pos: "n.", meaning: "想法", grade: "junior", example: "I have a thought.", trans: "我有个想法。", tags: ["基础"], related: [] },
  { word: "contain", phonetic: "/kənˈteɪn/", pos: "v.", meaning: "包含", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tell", phonetic: "/tel/", pos: "v.", meaning: "告诉", grade: "junior", example: "Tell me the truth.", trans: "告诉我真相。", tags: ["过去式told"], related: [
    { type: "过去式", word: "told" }
  ] },
  { word: "weak", phonetic: "/wiːk/", pos: "adj.", meaning: "虚弱的", grade: "junior", example: "He is weak.", trans: "他很虚弱。", tags: ["反义词strong"], related: [
    { type: "反义词", word: "strong" }
  ] },
  { word: "assembly", phonetic: "/əˈsembli/", pos: "n.", meaning: "集会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "purple", phonetic: "/ˈpɜːpl/", pos: "adj.", meaning: "紫色的", grade: "junior", example: "I like purple.", trans: "我喜欢紫色。", tags: ["基础"], related: [] },
  { word: "autumn", phonetic: "/ˈɔːtəm/", pos: "n.", meaning: "秋天", grade: "junior", example: "Leaves fall in autumn.", trans: "秋天树叶落下。", tags: ["基础", "美语fall"], related: [] },
  { word: "sock", phonetic: "/sɒk/", pos: "n.", meaning: "袜子", grade: "junior", example: "Wear socks.", trans: "穿袜子。", tags: ["常用复数"], related: [] },
  { word: "lift", phonetic: "/lɪft/", pos: "v.", meaning: "举起", grade: "junior", example: "Lift the box.", trans: "举起箱子。", tags: ["基础"], related: [] },
  { word: "broad", phonetic: "/brɔːd/", pos: "adj.", meaning: "宽的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [
    { type: "副词", word: "broadly" }
  ] },
  { word: "principle", phonetic: "/ˈprɪnsəpl/", pos: "n.", meaning: "原则", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "late", phonetic: "/leɪt/", pos: "adj.", meaning: "迟的", grade: "junior", example: "Do not be late.", trans: "不要迟到。", tags: ["比较级later"], related: [
    { type: "比较级", word: "later" }
  ] },
  { word: "increase", phonetic: "/ɪnˈkriːs/", pos: "v.", meaning: "增加", grade: "junior", example: "Prices increase every year.", trans: "价格每年都涨。", tags: ["反义词decrease"], related: [
    { type: "反义词", word: "decrease" }
  ] },
  { word: "plate", phonetic: "/pleɪt/", pos: "n.", meaning: "盘子", grade: "junior", example: "Put it on the plate.", trans: "放在盘子上。", tags: ["基础"], related: [] },
  { word: "legal", phonetic: "/ˈliːɡl/", pos: "adj.", meaning: "合法的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "deal", phonetic: "/diːl/", pos: "v.", meaning: "处理；交易", grade: "junior", example: "Deal with the problem.", trans: "处理这个问题。", tags: ["短语deal with"], related: [] },
  { word: "source", phonetic: "/sɔːs/", pos: "n.", meaning: "来源", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fast", phonetic: "/fɑːst/", pos: "adj.", meaning: "快的", grade: "junior", example: "He runs fast.", trans: "他跑得快。", tags: ["反义词slow"], related: [
    { type: "反义词", word: "slow" }
  ] },
  { word: "interesting", phonetic: "/ˈɪntrəstɪŋ/", pos: "adj.", meaning: "有趣的", grade: "junior", example: "The book is interesting.", trans: "这本书很有趣。", tags: ["易混interested"], related: [
    { type: "易混词", word: "interested" }
  ] },
  { word: "certainly", phonetic: "/ˈsɜːtnli/", pos: "adv.", meaning: "当然", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sir", phonetic: "/sɜː(r)/", pos: "n.", meaning: "先生", grade: "junior", example: "Yes, sir.", trans: "是的，先生。", tags: ["基础"], related: [] },
  { word: "pressure", phonetic: "/ˈpreʃə(r)/", pos: "n.", meaning: "压力", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fitness", phonetic: "/ˈfɪtnəs/", pos: "n.", meaning: "健康", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lord", phonetic: "/lɔːd/", pos: "n.", meaning: "主", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "again", phonetic: "/əˈɡen/", pos: "adv.", meaning: "又；再", grade: "junior", example: "Say it again, please.", trans: "请再说一遍。", tags: ["基础"], related: [] },
  { word: "unique", phonetic: "/juˈniːk/", pos: "adj.", meaning: "独特的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "Italian", phonetic: "/ɪˈtæliən/", pos: "adj.", meaning: "意大利的", grade: "junior", example: "I love Italian food.", trans: "我喜欢意大利食物。", tags: ["基础"], related: [] },
  { word: "trouble", phonetic: "/ˈtrʌbl/", pos: "n.", meaning: "麻烦", grade: "junior", example: "I am in trouble.", trans: "我有麻烦了。", tags: ["短语be in trouble"], related: [] },
  { word: "complain", phonetic: "/kəmˈpleɪn/", pos: "v.", meaning: "抱怨", grade: "junior", example: "Do not complain all the time.", trans: "不要总是抱怨。", tags: ["名词complaint"], related: [
    { type: "名词形式", word: "complaint" }
  ] },
  { word: "classmate", phonetic: "/ˈklɑːsmeɪt/", pos: "n.", meaning: "同班同学", grade: "junior", example: "He is my classmate.", trans: "他是我的同班同学。", tags: ["基础"], related: [] },
  { word: "hardly", phonetic: "/ˈhɑːdli/", pos: "adv.", meaning: "几乎不", grade: "junior", example: "I can hardly see.", trans: "我几乎看不见。", tags: ["易混hard"], related: [
    { type: "易混词", word: "hard" }
  ] },
  { word: "camping", phonetic: "/ˈkæmpɪŋ/", pos: "n.", meaning: "露营", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "basketball", phonetic: "/ˈbɑːskɪtbɔːl/", pos: "n.", meaning: "篮球", grade: "junior", example: "I play basketball after school.", trans: "我放学后打篮球。", tags: ["基础"], related: [] },
  { word: "client", phonetic: "/ˈklaɪənt/", pos: "n.", meaning: "客户", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "south", phonetic: "/saʊθ/", pos: "n.", meaning: "南", grade: "junior", example: "The south is warm.", trans: "南方温暖。", tags: ["基础"], related: [] },
  { word: "anti", phonetic: "/ˈænti/", pos: "prep.", meaning: "反对", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "extremely", phonetic: "/ɪkˈstriːmli/", pos: "adv.", meaning: "极其", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pregnant", phonetic: "/ˈpreɡnənt/", pos: "adj.", meaning: "怀孕的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "scientist", phonetic: "/ˈsaɪəntɪst/", pos: "n.", meaning: "科学家", grade: "junior", example: "He is a scientist.", trans: "他是科学家。", tags: ["基础"], related: [] },
  { word: "stranger", phonetic: "/ˈstreɪndʒə(r)/", pos: "n.", meaning: "陌生人", grade: "junior", example: "Do not talk to strangers.", trans: "不要和陌生人说话。", tags: ["基础"], related: [] },
  { word: "warehouse", phonetic: "/ˈweəhaʊs/", pos: "n.", meaning: "仓库", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "snow", phonetic: "/snəʊ/", pos: "n./v.", meaning: "雪；下雪", grade: "junior", example: "It is snowing.", trans: "在下雪。", tags: ["形容词snowy"], related: [] },
  { word: "towel", phonetic: "/ˈtaʊəl/", pos: "n.", meaning: "毛巾", grade: "junior", example: "Use the towel.", trans: "用毛巾。", tags: ["基础"], related: [] },
  { word: "radio", phonetic: "/ˈreɪdiəʊ/", pos: "n.", meaning: "收音机", grade: "junior", example: "Listen to the radio.", trans: "听收音机。", tags: ["复数radios"], related: [
    { type: "复数", word: "radios" }
  ] },
  { word: "dental", phonetic: "/ˈdentl/", pos: "adj.", meaning: "牙科的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "knee", phonetic: "/niː/", pos: "n.", meaning: "膝盖", grade: "junior", example: "I hurt my knee.", trans: "我伤了膝盖。", tags: ["基础"], related: [] },
  { word: "broadcast", phonetic: "/ˈbrɔːdkɑːst/", pos: "v.", meaning: "广播", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "instruction", phonetic: "/ɪnˈstrʌkʃn/", pos: "n.", meaning: "指令；说明", grade: "junior", example: "Follow the instructions.", trans: "按照说明做。", tags: ["复数instructions"], related: [
    { type: "复数", word: "instructions" }
  ] },
  { word: "division", phonetic: "/dɪˈvɪʒn/", pos: "n.", meaning: "分割", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "kite", phonetic: "/kaɪt/", pos: "n.", meaning: "风筝", grade: "junior", example: "Let us fly a kite.", trans: "我们放风筝吧。", tags: ["基础"], related: [] },
  { word: "judgment", phonetic: "/ˈdʒʌdʒmənt/", pos: "n.", meaning: "判断", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "family", phonetic: "/ˈfæməli/", pos: "n.", meaning: "家庭", grade: "junior", example: "I love my family.", trans: "我爱我的家。", tags: ["基础"], related: [] },
  { word: "camera", phonetic: "/ˈkæmərə/", pos: "n.", meaning: "照相机", grade: "junior", example: "Bring your camera.", trans: "带上你的相机。", tags: ["基础"], related: [] },
  { word: "worst", phonetic: "/wɜːst/", pos: "adj.", meaning: "最坏的", grade: "junior", example: "This is the worst.", trans: "这是最糟的。", tags: ["bad的最高级"], related: [] },
  { word: "agree", phonetic: "/əˈɡriː/", pos: "v.", meaning: "同意；赞成", grade: "junior", example: "I agree with you.", trans: "我同意你的看法。", tags: ["高频", "短语agree with"], related: [] },
  { word: "purchase", phonetic: "/ˈpɜːtʃəs/", pos: "v.", meaning: "购买", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "put", phonetic: "/pʊt/", pos: "v.", meaning: "放", grade: "junior", example: "Put the book here.", trans: "把书放这。", tags: ["过去式put", "短语put on"], related: [
    { type: "过去式", word: "put" }
  ] },
  { word: "stage", phonetic: "/steɪdʒ/", pos: "n.", meaning: "舞台", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "minister", phonetic: "/ˈmɪnɪstə(r)/", pos: "n.", meaning: "部长", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "onion", phonetic: "/ˈʌnjən/", pos: "n.", meaning: "洋葱", grade: "junior", example: "Onions make me cry.", trans: "洋葱让我流泪。", tags: ["基础"], related: [] },
  { word: "plus", phonetic: "/plʌs/", pos: "prep.", meaning: "加", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "age", phonetic: "/eɪdʒ/", pos: "n.", meaning: "年龄", grade: "junior", example: "What is your age?", trans: "你多大了？", tags: ["基础", "短语at the age of"], related: [] },
  { word: "formula", phonetic: "/ˈfɔːmjələ/", pos: "n.", meaning: "公式", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "housing", phonetic: "/ˈhaʊzɪŋ/", pos: "n.", meaning: "住房", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "however", phonetic: "/haʊˈevə(r)/", pos: "adv.", meaning: "然而", grade: "junior", example: "It is cold. However, I like it.", trans: "很冷，然而我喜欢。", tags: ["高频"], related: [] },
  { word: "group", phonetic: "/ɡruːp/", pos: "n.", meaning: "组；群", grade: "junior", example: "Work in groups.", trans: "分组工作。", tags: ["基础"], related: [] },
  { word: "top", phonetic: "/tɒp/", pos: "n.", meaning: "顶部", grade: "junior", example: "At the top of the hill.", trans: "在山顶。", tags: ["反义词bottom"], related: [
    { type: "反义词", word: "bottom" }
  ] },
  { word: "tight", phonetic: "/taɪt/", pos: "adj.", meaning: "紧的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "glory", phonetic: "/ˈɡlɔːri/", pos: "n.", meaning: "荣耀", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "appear", phonetic: "/əˈpɪə(r)/", pos: "v.", meaning: "出现", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "compliance", phonetic: "/kəmˈplaɪəns/", pos: "n.", meaning: "遵从", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "woman", phonetic: "/ˈwʊmən/", pos: "n.", meaning: "女人", grade: "junior", example: "The woman is kind.", trans: "那个女人很善良。", tags: ["复数women"], related: [
    { type: "复数", word: "women" }
  ] },
  { word: "difficult", phonetic: "/ˈdɪfɪkəlt/", pos: "adj.", meaning: "困难的", grade: "junior", example: "This problem is difficult.", trans: "这个问题很难。", tags: ["反义词easy"], related: [
    { type: "反义词", word: "easy" }
  ] },
  { word: "bought", phonetic: "/bɔːt/", pos: "v.", meaning: "买(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "angel", phonetic: "/ˈeɪndʒl/", pos: "n.", meaning: "天使", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "right", phonetic: "/raɪt/", pos: "adj.", meaning: "正确的；右边的", grade: "junior", example: "You are right.", trans: "你是对的。", tags: ["基础", "反义词wrong/left"], related: [
    { type: "反义词", word: "wrong/left" }
  ] },
  { word: "sick", phonetic: "/sɪk/", pos: "adj.", meaning: "生病的", grade: "junior", example: "I feel sick.", trans: "我觉得不舒服。", tags: ["易混ill"], related: [
    { type: "易混词", word: "ill" }
  ] },
  { word: "wash", phonetic: "/wɒʃ/", pos: "v.", meaning: "洗", grade: "junior", example: "Wash your hands.", trans: "洗手。", tags: ["基础"], related: [] },
  { word: "art", phonetic: "/ɑːt/", pos: "n.", meaning: "艺术；美术", grade: "junior", example: "She is good at art.", trans: "她擅长美术。", tags: ["基础"], related: [] },
  { word: "attendance", phonetic: "/əˈtendəns/", pos: "n.", meaning: "出席", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "zoo", phonetic: "/zuː/", pos: "n.", meaning: "动物园", grade: "junior", example: "Let us go to the zoo.", trans: "我们去动物园吧。", tags: ["基础"], related: [] },
  { word: "bedroom", phonetic: "/ˈbedruːm/", pos: "n.", meaning: "卧室", grade: "junior", example: "My bedroom is small.", trans: "我的卧室很小。", tags: ["基础"], related: [] },
  { word: "ink", phonetic: "/ɪŋk/", pos: "n.", meaning: "墨水", grade: "junior", example: "The pen is out of ink.", trans: "钢笔没墨水了。", tags: ["不可数"], related: [] },
  { word: "sure", phonetic: "/ʃʊə(r)/", pos: "adj.", meaning: "确定的", grade: "junior", example: "I am sure.", trans: "我确定。", tags: ["基础"], related: [] },
  { word: "arrival", phonetic: "/əˈraɪvl/", pos: "n.", meaning: "到达", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clock", phonetic: "/klɒk/", pos: "n.", meaning: "钟", grade: "junior", example: "Look at the clock.", trans: "看钟。", tags: ["基础"], related: [] },
  { word: "taxi", phonetic: "/ˈtæksi/", pos: "n.", meaning: "出租车", grade: "junior", example: "Take a taxi.", trans: "坐出租车。", tags: ["基础"], related: [] },
  { word: "arm", phonetic: "/ɑːm/", pos: "n.", meaning: "手臂", grade: "junior", example: "He has strong arms.", trans: "他有强壮的手臂。", tags: ["基础"], related: [] },
  { word: "shine", phonetic: "/ʃaɪn/", pos: "v.", meaning: "发光", grade: "junior", example: "The sun shines.", trans: "太阳发光。", tags: ["过去式shone"], related: [
    { type: "过去式", word: "shone" }
  ] },
  { word: "spirit", phonetic: "/ˈspɪrɪt/", pos: "n.", meaning: "精神", grade: "junior", example: "He has a strong spirit.", trans: "他有坚强的精神。", tags: ["基础"], related: [] },
  { word: "dead", phonetic: "/ded/", pos: "adj.", meaning: "死的", grade: "junior", example: "The plant is dead.", trans: "这棵植物死了。", tags: ["动词die"], related: [
    { type: "动词形式", word: "die" },
    { type: "副词", word: "deadly" }
  ] },
  { word: "season", phonetic: "/ˈsiːzn/", pos: "n.", meaning: "季节", grade: "junior", example: "Spring is my favorite season.", trans: "春天是我最喜欢的季节。", tags: ["基础"], related: [] },
  { word: "pride", phonetic: "/praɪd/", pos: "n.", meaning: "骄傲", grade: "junior", example: "Take pride in your work.", trans: "为你的工作自豪。", tags: ["形容词proud"], related: [] },
  { word: "dumpling", phonetic: "/ˈdʌmplɪŋ/", pos: "n.", meaning: "饺子", grade: "junior", example: "We eat dumplings at Spring Festival.", trans: "我们春节吃饺子。", tags: ["复数dumplings"], related: [
    { type: "复数", word: "dumplings" }
  ] },
  { word: "summer", phonetic: "/ˈsʌmə(r)/", pos: "n.", meaning: "夏天", grade: "junior", example: "Summer is hot.", trans: "夏天很热。", tags: ["基础"], related: [] },
  { word: "cape", phonetic: "/keɪp/", pos: "n.", meaning: "海角", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "inch", phonetic: "/ɪntʃ/", pos: "n.", meaning: "英寸", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "secret", phonetic: "/ˈsiːkrət/", pos: "n.", meaning: "秘密", grade: "junior", example: "It is a secret.", trans: "这是秘密。", tags: ["基础"], related: [] },
  { word: "up", phonetic: "/ʌp/", pos: "adv.", meaning: "向上", grade: "junior", example: "Stand up.", trans: "起立。", tags: ["基础", "反义词down"], related: [
    { type: "反义词", word: "down" }
  ] },
  { word: "have", phonetic: "/hæv/", pos: "v.", meaning: "有", grade: "junior", example: "I have a dog.", trans: "我有一只狗。", tags: ["过去式had", "短语have to"], related: [
    { type: "过去式", word: "had" }
  ] },
  { word: "narrow", phonetic: "/ˈnærəʊ/", pos: "adj.", meaning: "窄的", grade: "junior", example: "The road is narrow.", trans: "路很窄。", tags: ["反义词wide"], related: [
    { type: "反义词", word: "wide" }
  ] },
  { word: "place", phonetic: "/pleɪs/", pos: "n.", meaning: "地方", grade: "junior", example: "This is a nice place.", trans: "这是个好地方。", tags: ["基础"], related: [] },
  { word: "void", phonetic: "/vɔɪd/", pos: "adj.", meaning: "空的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "offer", phonetic: "/ˈɒfə(r)/", pos: "v.", meaning: "提供", grade: "junior", example: "He offered help.", trans: "他提供了帮助。", tags: ["短语offer to do"], related: [] },
  { word: "weigh", phonetic: "/weɪ/", pos: "v.", meaning: "称重", grade: "junior", example: "How much do you weigh?", trans: "你多重？", tags: ["名词weight"], related: [
    { type: "名词形式", word: "weight" }
  ] },
  { word: "always", phonetic: "/ˈɔːlweɪz/", pos: "adv.", meaning: "总是；一直", grade: "junior", example: "She always gets up early.", trans: "她总是早起。", tags: ["基础", "频率副词"], related: [] },
  { word: "legend", phonetic: "/ˈledʒənd/", pos: "n.", meaning: "传说", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "select", phonetic: "/sɪˈlekt/", pos: "v.", meaning: "选择", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "visual", phonetic: "/ˈvɪʒuəl/", pos: "adj.", meaning: "视觉的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "night", phonetic: "/naɪt/", pos: "n.", meaning: "夜晚", grade: "junior", example: "Good night!", trans: "晚安！", tags: ["基础", "反义词day"], related: [
    { type: "反义词", word: "day" }
  ] },
  { word: "pioneer", phonetic: "/ˌpaɪəˈnɪə(r)/", pos: "n.", meaning: "先锋", grade: "junior", example: "He is a pioneer.", trans: "他是先锋。", tags: ["基础"], related: [] },
  { word: "car", phonetic: "/kɑː(r)/", pos: "n.", meaning: "汽车", grade: "junior", example: "My father has a new car.", trans: "我爸爸有一辆新车。", tags: ["基础"], related: [] },
  { word: "bottle", phonetic: "/ˈbɒtl/", pos: "n.", meaning: "瓶子", grade: "junior", example: "A bottle of water, please.", trans: "请给我一瓶水。", tags: ["基础"], related: [] },
  { word: "postage", phonetic: "/ˈpəʊstɪdʒ/", pos: "n.", meaning: "邮资", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "plant", phonetic: "/plɑːnt/", pos: "n./v.", meaning: "植物；种植", grade: "junior", example: "Plant a tree.", trans: "种一棵树。", tags: ["基础"], related: [] },
  { word: "speech", phonetic: "/spiːtʃ/", pos: "n.", meaning: "演讲", grade: "junior", example: "Give a speech.", trans: "做演讲。", tags: ["复数speeches"], related: [
    { type: "复数", word: "speeches" }
  ] },
  { word: "rank", phonetic: "/ræŋk/", pos: "n.", meaning: "等级", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "future", phonetic: "/ˈfjuːtʃə(r)/", pos: "n.", meaning: "未来", grade: "junior", example: "What is your future plan?", trans: "你未来的计划是什么？", tags: ["高频", "短语in the future"], related: [] },
  { word: "mutual", phonetic: "/ˈmjuːtʃuəl/", pos: "adj.", meaning: "相互的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "knowledge", phonetic: "/ˈnɒlɪdʒ/", pos: "n.", meaning: "知识", grade: "junior", example: "Knowledge is power.", trans: "知识就是力量。", tags: ["不可数"], related: [] },
  { word: "donate", phonetic: "/dəʊˈneɪt/", pos: "v.", meaning: "捐赠", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "TV", phonetic: "/ˌtiːˈviː/", pos: "n.", meaning: "电视", grade: "junior", example: "Watch TV.", trans: "看电视。", tags: ["基础", "全称television"], related: [] },
  { word: "calm", phonetic: "/kɑːm/", pos: "adj.", meaning: "平静的", grade: "junior", example: "Stay calm.", trans: "保持冷静。", tags: ["高频"], related: [
    { type: "副词", word: "calmly" }
  ] },
  { word: "dollar", phonetic: "/ˈdɒlə(r)/", pos: "n.", meaning: "美元", grade: "junior", example: "It costs 10 dollars.", trans: "它值10美元。", tags: ["基础"], related: [] },
  { word: "candle", phonetic: "/ˈkændl/", pos: "n.", meaning: "蜡烛", grade: "junior", example: "Light the candle.", trans: "点燃蜡烛。", tags: ["基础"], related: [] },
  { word: "tend", phonetic: "/tend/", pos: "v.", meaning: "倾向", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "off", phonetic: "/ɒf/", pos: "adv.", meaning: "离开；关", grade: "junior", example: "Turn off the light.", trans: "关灯。", tags: ["基础", "反义词on"], related: [
    { type: "反义词", word: "on" }
  ] },
  { word: "main", phonetic: "/meɪn/", pos: "adj.", meaning: "主要的", grade: "junior", example: "This is the main road.", trans: "这是主干道。", tags: ["副词mainly"], related: [] },
  { word: "these", phonetic: "/ðiːz/", pos: "pron.", meaning: "这些", grade: "junior", example: "These are mine.", trans: "这些是我的。", tags: ["单数this"], related: [] },
  { word: "dish", phonetic: "/dɪʃ/", pos: "n.", meaning: "盘子；菜肴", grade: "junior", example: "Wash the dishes.", trans: "洗碗。", tags: ["复数dishes"], related: [
    { type: "复数", word: "dishes" }
  ] },
  { word: "camp", phonetic: "/kæmp/", pos: "n./v.", meaning: "露营", grade: "junior", example: "We went camping last week.", trans: "我们上周去露营了。", tags: ["高频"], related: [] },
  { word: "poet", phonetic: "/ˈpəʊɪt/", pos: "n.", meaning: "诗人", grade: "junior", example: "He is a famous poet.", trans: "他是著名诗人。", tags: ["基础"], related: [] },
  { word: "sing", phonetic: "/sɪŋ/", pos: "v.", meaning: "唱歌", grade: "junior", example: "She sings well.", trans: "她唱得好。", tags: ["过去式sang", "过去分词sung"], related: [
    { type: "过去式", word: "sang" },
    { type: "过去分词", word: "sung" }
  ] },
  { word: "boots", phonetic: "/buːts/", pos: "n.", meaning: "靴子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "analysis", phonetic: "/əˈnæləsɪs/", pos: "n.", meaning: "分析", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shoe", phonetic: "/ʃuː/", pos: "n.", meaning: "鞋", grade: "junior", example: "I bought new shoes.", trans: "我买了新鞋。", tags: ["常用复数"], related: [] },
  { word: "trade", phonetic: "/treɪd/", pos: "n./v.", meaning: "贸易；交易", grade: "junior", example: "International trade.", trans: "国际贸易。", tags: ["基础"], related: [] },
  { word: "empty", phonetic: "/ˈempti/", pos: "adj.", meaning: "空的", grade: "junior", example: "The glass is empty.", trans: "杯子是空的。", tags: ["反义词full"], related: [
    { type: "反义词", word: "full" }
  ] },
  { word: "method", phonetic: "/ˈmeθəd/", pos: "n.", meaning: "方法", grade: "junior", example: "This is a good method.", trans: "这是个好方法。", tags: ["高频"], related: [] },
  { word: "ancient", phonetic: "/ˈeɪnʃənt/", pos: "adj.", meaning: "古代的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "annual", phonetic: "/ˈænjuəl/", pos: "adj.", meaning: "每年的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [
    { type: "副词", word: "annually" }
  ] },
  { word: "careful", phonetic: "/ˈkeəfl/", pos: "adj.", meaning: "小心的", grade: "junior", example: "Be careful with the glass.", trans: "小心玻璃。", tags: ["反义词careless"], related: [
    { type: "反义词", word: "careless" },
    { type: "副词", word: "carefully" }
  ] },
  { word: "cheap", phonetic: "/tʃiːp/", pos: "adj.", meaning: "便宜的", grade: "junior", example: "This shirt is cheap.", trans: "这件衬衫很便宜。", tags: ["反义词expensive"], related: [
    { type: "反义词", word: "expensive" },
    { type: "副词", word: "cheaply" }
  ] },
  { word: "den", phonetic: "/den/", pos: "n.", meaning: "兽穴", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "low", phonetic: "/ləʊ/", pos: "adj.", meaning: "低的", grade: "junior", example: "The price is low.", trans: "价格低。", tags: ["反义词high"], related: [
    { type: "反义词", word: "high" }
  ] },
  { word: "Japanese", phonetic: "/ˌdʒæpəˈniːz/", pos: "adj.", meaning: "日本的", grade: "junior", example: "I love Japanese food.", trans: "我喜欢日本食物。", tags: ["基础"], related: [] },
  { word: "beauty", phonetic: "/ˈbjuːti/", pos: "n.", meaning: "美", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "instant", phonetic: "/ˈɪnstənt/", pos: "adj.", meaning: "立即的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cake", phonetic: "/keɪk/", pos: "n.", meaning: "蛋糕", grade: "junior", example: "I made a birthday cake.", trans: "我做了一个生日蛋糕。", tags: ["基础"], related: [] },
  { word: "wish", phonetic: "/wɪʃ/", pos: "v.", meaning: "希望", grade: "junior", example: "I wish you success.", trans: "祝你成功。", tags: ["基础"], related: [] },
  { word: "palm", phonetic: "/pɑːm/", pos: "n.", meaning: "手掌", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "trust", phonetic: "/trʌst/", pos: "v.", meaning: "信任", grade: "junior", example: "I trust you.", trans: "我信任你。", tags: ["基础"], related: [] },
  { word: "pick", phonetic: "/pɪk/", pos: "v.", meaning: "挑选；摘", grade: "junior", example: "Pick a flower.", trans: "摘一朵花。", tags: ["短语pick up"], related: [] },
  { word: "compatible", phonetic: "/kəmˈpætəbl/", pos: "adj.", meaning: "兼容的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "agenda", phonetic: "/əˈdʒendə/", pos: "n.", meaning: "议程", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "desk", phonetic: "/desk/", pos: "n.", meaning: "书桌", grade: "junior", example: "Put the book on the desk.", trans: "把书放在书桌上。", tags: ["基础"], related: [] },
  { word: "location", phonetic: "/ləʊˈkeɪʃn/", pos: "n.", meaning: "位置", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "valid", phonetic: "/ˈvælɪd/", pos: "adj.", meaning: "有效的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "naked", phonetic: "/ˈneɪkɪd/", pos: "adj.", meaning: "裸体的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "course", phonetic: "/kɔːs/", pos: "n.", meaning: "课程；当然", grade: "junior", example: "Of course I will help.", trans: "我当然会帮忙。", tags: ["短语of course"], related: [] },
  { word: "eye", phonetic: "/aɪ/", pos: "n.", meaning: "眼睛", grade: "junior", example: "She has big eyes.", trans: "她有大眼睛。", tags: ["基础"], related: [] },
  { word: "burn", phonetic: "/bɜːn/", pos: "v.", meaning: "燃烧", grade: "junior", example: "The fire burns brightly.", trans: "火燃烧得很旺。", tags: ["过去式burned/burnt"], related: [
    { type: "过去式", word: "burned" },
    { type: "过去式", word: "burnt" }
  ] },
  { word: "virtual", phonetic: "/ˈvɜːtʃuəl/", pos: "adj.", meaning: "虚拟的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lion", phonetic: "/ˈlaɪən/", pos: "n.", meaning: "狮子", grade: "junior", example: "The lion is the king.", trans: "狮子是王。", tags: ["基础"], related: [] },
  { word: "quality", phonetic: "/ˈkwɒləti/", pos: "n.", meaning: "质量", grade: "junior", example: "The quality is good.", trans: "质量很好。", tags: ["高频"], related: [] },
  { word: "file", phonetic: "/faɪl/", pos: "n.", meaning: "文件", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "example", phonetic: "/ɪɡˈzɑːmpl/", pos: "n.", meaning: "例子", grade: "junior", example: "For example,", trans: "例如，", tags: ["基础", "短语for example"], related: [] },
  { word: "create", phonetic: "/kriˈeɪt/", pos: "v.", meaning: "创造", grade: "junior", example: "God created the world.", trans: "上帝创造了世界。", tags: ["名词creation"], related: [
    { type: "名词形式", word: "creation" }
  ] },
  { word: "experience", phonetic: "/ɪkˈspɪəriəns/", pos: "n.", meaning: "经验；经历", grade: "junior", example: "He has much experience.", trans: "他有很多经验。", tags: ["作经验不可数"], related: [] },
  { word: "platform", phonetic: "/ˈplætfɔːm/", pos: "n.", meaning: "平台", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "balance", phonetic: "/ˈbæləns/", pos: "n./v.", meaning: "平衡", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dirty", phonetic: "/ˈdɜːti/", pos: "adj.", meaning: "脏的", grade: "junior", example: "Your hands are dirty.", trans: "你的手脏了。", tags: ["反义词clean"], related: [
    { type: "反义词", word: "clean" }
  ] },
  { word: "aviation", phonetic: "/ˌeɪviˈeɪʃn/", pos: "n.", meaning: "航空", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "eagle", phonetic: "/ˈiːɡl/", pos: "n.", meaning: "鹰", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hamburger", phonetic: "/ˈhæmbɜːɡə(r)/", pos: "n.", meaning: "汉堡包", grade: "junior", example: "I had a hamburger for lunch.", trans: "我午饭吃了汉堡。", tags: ["基础"], related: [] },
  { word: "soccer", phonetic: "/ˈsɒkə(r)/", pos: "n.", meaning: "足球", grade: "junior", example: "I play soccer.", trans: "我踢足球。", tags: ["美式football"], related: [] },
  { word: "upper", phonetic: "/ˈʌpə(r)/", pos: "adj.", meaning: "上面的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lot", phonetic: "/lɒt/", pos: "n.", meaning: "很多", grade: "junior", example: "A lot of people came.", trans: "很多人来了。", tags: ["短语a lot of"], related: [] },
  { word: "copyright", phonetic: "/ˈkɒpiraɪt/", pos: "n.", meaning: "版权", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "monkey", phonetic: "/ˈmʌŋki/", pos: "n.", meaning: "猴子", grade: "junior", example: "The monkey is funny.", trans: "猴子很有趣。", tags: ["基础"], related: [] },
  { word: "gray", phonetic: "/ɡreɪ/", pos: "adj.", meaning: "灰色的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "coat", phonetic: "/kəʊt/", pos: "n.", meaning: "外套", grade: "junior", example: "Put on your coat.", trans: "穿上外套。", tags: ["基础"], related: [] },
  { word: "garden", phonetic: "/ˈɡɑːdn/", pos: "n.", meaning: "花园", grade: "junior", example: "There are flowers in the garden.", trans: "花园里有花。", tags: ["基础"], related: [] },
  { word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", pos: "v.", meaning: "交流", grade: "junior", example: "We communicate by email.", trans: "我们通过电子邮件交流。", tags: ["名词communication"], related: [
    { type: "名词形式", word: "communication" }
  ] },
  { word: "police", phonetic: "/pəˈliːs/", pos: "n.", meaning: "警察", grade: "junior", example: "Call the police.", trans: "报警。", tags: ["集合名词"], related: [] },
  { word: "know", phonetic: "/nəʊ/", pos: "v.", meaning: "知道", grade: "junior", example: "I know the answer.", trans: "我知道答案。", tags: ["过去式knew", "过去分词known"], related: [
    { type: "过去式", word: "knew" },
    { type: "过去分词", word: "known" }
  ] },
  { word: "treasure", phonetic: "/ˈtreʒə(r)/", pos: "n.", meaning: "财宝", grade: "junior", example: "They found treasure.", trans: "他们发现了财宝。", tags: ["基础"], related: [] },
  { word: "cancer", phonetic: "/ˈkænsə(r)/", pos: "n.", meaning: "癌症", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "through", phonetic: "/θruː/", pos: "prep.", meaning: "穿过", grade: "junior", example: "Walk through the forest.", trans: "穿过森林。", tags: ["易混across"], related: [
    { type: "易混词", word: "across" }
  ] },
  { word: "island", phonetic: "/ˈaɪlənd/", pos: "n.", meaning: "岛", grade: "junior", example: "We visited a small island.", trans: "我们参观了一个小岛。", tags: ["基础"], related: [] },
  { word: "stock", phonetic: "/stɒk/", pos: "n.", meaning: "库存", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "agriculture", phonetic: "/ˈæɡrɪkʌltʃə(r)/", pos: "n.", meaning: "农业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gift", phonetic: "/ɡɪft/", pos: "n.", meaning: "礼物", grade: "junior", example: "I got a gift.", trans: "我收到了礼物。", tags: ["基础"], related: [] },
  { word: "context", phonetic: "/ˈkɒntekst/", pos: "n.", meaning: "上下文", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "extreme", phonetic: "/ɪkˈstriːm/", pos: "adj.", meaning: "极端的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [
    { type: "副词", word: "extremely" }
  ] },
  { word: "comic", phonetic: "/ˈkɒmɪk/", pos: "adj.", meaning: "滑稽的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "news", phonetic: "/njuːz/", pos: "n.", meaning: "新闻", grade: "junior", example: "Watch the news.", trans: "看新闻。", tags: ["不可数"], related: [] },
  { word: "forum", phonetic: "/ˈfɔːrəm/", pos: "n.", meaning: "论坛", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "judge", phonetic: "/dʒʌdʒ/", pos: "n.", meaning: "法官", grade: "junior", example: "The judge made a decision.", trans: "法官做出了判决。", tags: ["高频"], related: [] },
  { word: "other", phonetic: "/ˈʌðə(r)/", pos: "adj.", meaning: "其他的", grade: "junior", example: "Ask other people.", trans: "问问别人。", tags: ["基础"], related: [] },
  { word: "page", phonetic: "/peɪdʒ/", pos: "n.", meaning: "页", grade: "junior", example: "Turn to page 5.", trans: "翻到第5页。", tags: ["基础"], related: [] },
  { word: "become", phonetic: "/bɪˈkʌm/", pos: "v.", meaning: "成为；变成", grade: "junior", example: "She wants to become a doctor.", trans: "她想成为一名医生。", tags: ["过去式became"], related: [
    { type: "过去式", word: "became" }
  ] },
  { word: "lamp", phonetic: "/læmp/", pos: "n.", meaning: "灯", grade: "junior", example: "Turn on the lamp.", trans: "开灯。", tags: ["基础"], related: [] },
  { word: "skill", phonetic: "/skɪl/", pos: "n.", meaning: "技能", grade: "junior", example: "He has good skills.", trans: "他技能好。", tags: ["基础"], related: [] },
  { word: "choose", phonetic: "/tʃuːz/", pos: "v.", meaning: "选择", grade: "junior", example: "Choose the right answer.", trans: "选择正确答案。", tags: ["过去式chose", "名词choice"], related: [
    { type: "过去式", word: "chose" },
    { type: "名词形式", word: "choice" }
  ] },
  { word: "component", phonetic: "/kəmˈpəʊnənt/", pos: "n.", meaning: "成分", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cup", phonetic: "/kʌp/", pos: "n.", meaning: "杯子", grade: "junior", example: "A cup of tea, please.", trans: "请来一杯茶。", tags: ["基础"], related: [] },
  { word: "gross", phonetic: "/ɡrəʊs/", pos: "adj.", meaning: "总的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sad", phonetic: "/sæd/", pos: "adj.", meaning: "悲伤的", grade: "junior", example: "I feel sad.", trans: "我感到悲伤。", tags: ["比较级sadder"], related: [
    { type: "比较级", word: "sadder" }
  ] },
  { word: "either", phonetic: "/ˈaɪðə(r)/", pos: "pron.", meaning: "（两者中）任一", grade: "junior", example: "Either you or he is wrong.", trans: "不是你错就是他错。", tags: ["短语either...or..."], related: [] },
  { word: "order", phonetic: "/ˈɔːdə(r)/", pos: "n./v.", meaning: "命令；点菜", grade: "junior", example: "Order food.", trans: "点菜。", tags: ["基础"], related: [] },
  { word: "dry", phonetic: "/draɪ/", pos: "adj.", meaning: "干的", grade: "junior", example: "The clothes are dry.", trans: "衣服干了。", tags: ["反义词wet"], related: [
    { type: "反义词", word: "wet" }
  ] },
  { word: "hear", phonetic: "/hɪə(r)/", pos: "v.", meaning: "听见", grade: "junior", example: "I hear a sound.", trans: "我听到声音。", tags: ["过去式heard", "易混listen"], related: [
    { type: "过去式", word: "heard" },
    { type: "易混词", word: "listen" }
  ] },
  { word: "grandmother", phonetic: "/ˈɡrænmʌðə(r)/", pos: "n.", meaning: "祖母", grade: "junior", example: "My grandmother cooks well.", trans: "我奶奶做饭很好。", tags: ["基础"], related: [] },
  { word: "solve", phonetic: "/sɒlv/", pos: "v.", meaning: "解决", grade: "junior", example: "Solve the problem.", trans: "解决问题。", tags: ["名词solution"], related: [
    { type: "名词形式", word: "solution" }
  ] },
  { word: "awake", phonetic: "/əˈweɪk/", pos: "adj.", meaning: "醒着的", grade: "junior", example: "Is he awake yet?", trans: "他醒了吗？", tags: ["表语形容词", "反义词asleep"], related: [
    { type: "反义词", word: "asleep" }
  ] },
  { word: "label", phonetic: "/ˈleɪbl/", pos: "n.", meaning: "标签", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "relevant", phonetic: "/ˈreləvənt/", pos: "adj.", meaning: "相关的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "calling", phonetic: "/ˈkɔːlɪŋ/", pos: "n.", meaning: "职业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "moon", phonetic: "/muːn/", pos: "n.", meaning: "月亮", grade: "junior", example: "The moon is bright.", trans: "月亮很亮。", tags: ["基础"], related: [] },
  { word: "pound", phonetic: "/paʊnd/", pos: "n.", meaning: "磅；英镑", grade: "junior", example: "It costs 5 pounds.", trans: "5英镑。", tags: ["基础"], related: [] },
  { word: "combination", phonetic: "/ˌkɒmbɪˈneɪʃn/", pos: "n.", meaning: "组合", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "share", phonetic: "/ʃeə(r)/", pos: "v.", meaning: "分享", grade: "junior", example: "Share with others.", trans: "与他人分享。", tags: ["基础"], related: [] },
  { word: "panel", phonetic: "/ˈpænl/", pos: "n.", meaning: "面板", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "broadband", phonetic: "/ˈbrɔːdbænd/", pos: "n.", meaning: "宽带", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "captain", phonetic: "/ˈkæptɪn/", pos: "n.", meaning: "队长；船长", grade: "junior", example: "He is the captain of the team.", trans: "他是队长。", tags: ["高频"], related: [] },
  { word: "cycle", phonetic: "/ˈsaɪkl/", pos: "n.", meaning: "循环", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "certificate", phonetic: "/səˈtɪfɪkət/", pos: "n.", meaning: "证书", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "direct", phonetic: "/dəˈrekt/", pos: "adj.", meaning: "直接的", grade: "junior", example: "Give me a direct answer.", trans: "给我一个直接的答案。", tags: ["副词directly"], related: [] },
  { word: "labor", phonetic: "/ˈleɪbə(r)/", pos: "n.", meaning: "劳动", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boring", phonetic: "/ˈbɔːrɪŋ/", pos: "adj.", meaning: "无聊的", grade: "junior", example: "The movie is boring.", trans: "这部电影很无聊。", tags: ["易混bored"], related: [
    { type: "易混词", word: "bored" }
  ] },
  { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", pos: "adv.", meaning: "有时", grade: "junior", example: "I sometimes walk to school.", trans: "我有时走路上学。", tags: ["频率副词"], related: [] },
  { word: "unknown", phonetic: "/ˌʌnˈnəʊn/", pos: "adj.", meaning: "未知的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "charger", phonetic: "/ˈtʃɑːdʒə(r)/", pos: "n.", meaning: "充电器", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "model", phonetic: "/ˈmɒdl/", pos: "n.", meaning: "模型；模特", grade: "junior", example: "She is a model.", trans: "她是模特。", tags: ["基础"], related: [] },
  { word: "press", phonetic: "/pres/", pos: "v.", meaning: "按；压", grade: "junior", example: "Press the button.", trans: "按按钮。", tags: ["基础"], related: [] },
  { word: "command", phonetic: "/kəˈmɑːnd/", pos: "v.", meaning: "命令", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "doubt", phonetic: "/daʊt/", pos: "v./n.", meaning: "怀疑", grade: "junior", example: "I doubt his words.", trans: "我怀疑他的话。", tags: ["短语without doubt"], related: [] },
  { word: "curriculum", phonetic: "/kəˈrɪkjələm/", pos: "n.", meaning: "课程", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "opportunity", phonetic: "/ˌɒpəˈtjuːnəti/", pos: "n.", meaning: "机会", grade: "junior", example: "This is a good opportunity.", trans: "这是个好机会。", tags: ["复数opportunities"], related: [
    { type: "复数", word: "opportunities" }
  ] },
  { word: "else", phonetic: "/els/", pos: "adv.", meaning: "其他；另外", grade: "junior", example: "What else do you want?", trans: "你还想要什么？", tags: ["基础"], related: [] },
  { word: "patch", phonetic: "/pætʃ/", pos: "n.", meaning: "补丁", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "visit", phonetic: "/ˈvɪzɪt/", pos: "v.", meaning: "参观；拜访", grade: "junior", example: "Visit your grandma.", trans: "去看奶奶。", tags: ["基础"], related: [] },
  { word: "category", phonetic: "/ˈkætəɡəri/", pos: "n.", meaning: "类别", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "adequate", phonetic: "/ˈædɪkwət/", pos: "adj.", meaning: "足够的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bake", phonetic: "/beɪk/", pos: "v.", meaning: "烘烤", grade: "junior", example: "She bakes bread every morning.", trans: "她每天早上烤面包。", tags: ["短语bake a cake"], related: [] },
  { word: "rent", phonetic: "/rent/", pos: "n.", meaning: "租金", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "blue", phonetic: "/bluː/", pos: "adj.", meaning: "蓝色的", grade: "junior", example: "The sky is blue.", trans: "天空是蓝色的。", tags: ["基础"], related: [] },
  { word: "include", phonetic: "/ɪnˈkluːd/", pos: "v.", meaning: "包括", grade: "junior", example: "The price includes tax.", trans: "价格包括税。", tags: ["高频"], related: [] },
  { word: "uniform", phonetic: "/ˈjuːnɪfɔːm/", pos: "n.", meaning: "制服", grade: "junior", example: "We wear uniforms.", trans: "我们穿制服。", tags: ["基础"], related: [] },
  { word: "supply", phonetic: "/səˈplaɪ/", pos: "v.", meaning: "供应", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "large", phonetic: "/lɑːdʒ/", pos: "adj.", meaning: "大的", grade: "junior", example: "This is a large room.", trans: "这是一个大房间。", tags: ["反义词small"], related: [
    { type: "反义词", word: "small" }
  ] },
  { word: "event", phonetic: "/ɪˈvent/", pos: "n.", meaning: "事件；活动", grade: "junior", example: "What happened at the event?", trans: "活动上发生了什么？", tags: ["高频"], related: [] },
  { word: "everyday", phonetic: "/ˈevrideɪ/", pos: "adj.", meaning: "日常的", grade: "junior", example: "This is my everyday life.", trans: "这是我的日常生活。", tags: ["易混every day"], related: [
    { type: "易混词", word: "every day" }
  ] },
  { word: "send", phonetic: "/send/", pos: "v.", meaning: "发送", grade: "junior", example: "Send me an email.", trans: "给我发邮件。", tags: ["过去式sent"], related: [
    { type: "过去式", word: "sent" }
  ] },
  { word: "delicious", phonetic: "/dɪˈlɪʃəs/", pos: "adj.", meaning: "美味的", grade: "junior", example: "The food is delicious.", trans: "食物很美味。", tags: ["基础"], related: [] },
  { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", pos: "n.", meaning: "厨房", grade: "junior", example: "Mom is in the kitchen.", trans: "妈妈在厨房。", tags: ["基础"], related: [] },
  { word: "defence", phonetic: "/dɪˈfens/", pos: "n.", meaning: "防御", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wind", phonetic: "/wɪnd/", pos: "n.", meaning: "风", grade: "junior", example: "The wind is strong.", trans: "风很大。", tags: ["基础"], related: [] },
  { word: "wolf", phonetic: "/wʊlf/", pos: "n.", meaning: "狼", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "approach", phonetic: "/əˈprəʊtʃ/", pos: "v./n.", meaning: "接近；方法", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "soil", phonetic: "/sɔɪl/", pos: "n.", meaning: "土壤", grade: "junior", example: "The soil is rich.", trans: "土壤肥沃。", tags: ["不可数"], related: [] },
  { word: "exceed", phonetic: "/ɪkˈsiːd/", pos: "v.", meaning: "超过", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shoot", phonetic: "/ʃuːt/", pos: "v.", meaning: "射击", grade: "junior", example: "Shoot the target.", trans: "射击目标。", tags: ["过去式shot"], related: [
    { type: "过去式", word: "shot" }
  ] },
  { word: "award", phonetic: "/əˈwɔːd/", pos: "n.", meaning: "奖", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "soft", phonetic: "/sɒft/", pos: "adj.", meaning: "柔软的", grade: "junior", example: "The bed is soft.", trans: "床很软。", tags: ["反义词hard"], related: [
    { type: "反义词", word: "hard" }
  ] },
  { word: "noise", phonetic: "/nɔɪz/", pos: "n.", meaning: "噪音", grade: "junior", example: "The noise is loud.", trans: "噪音很大。", tags: ["不可数", "形容词noisy"], related: [] },
  { word: "finish", phonetic: "/ˈfɪnɪʃ/", pos: "v.", meaning: "完成", grade: "junior", example: "Finish your homework.", trans: "完成作业。", tags: ["后接doing"], related: [] },
  { word: "flight", phonetic: "/flaɪt/", pos: "n.", meaning: "航班", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "telephone", phonetic: "/ˈtelɪfəʊn/", pos: "n.", meaning: "电话", grade: "junior", example: "Answer the telephone.", trans: "接电话。", tags: ["基础"], related: [] },
  { word: "council", phonetic: "/ˈkaʊnsl/", pos: "n.", meaning: "委员会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "warn", phonetic: "/wɔːn/", pos: "v.", meaning: "警告", grade: "junior", example: "I warn you.", trans: "我警告你。", tags: ["基础"], related: [] },
  { word: "skip", phonetic: "/skɪp/", pos: "v.", meaning: "跳过", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mirror", phonetic: "/ˈmɪrə(r)/", pos: "n.", meaning: "镜子", grade: "junior", example: "Look in the mirror.", trans: "照镜子。", tags: ["基础"], related: [] },
  { word: "staff", phonetic: "/stɑːf/", pos: "n.", meaning: "员工", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "give", phonetic: "/ɡɪv/", pos: "v.", meaning: "给", grade: "junior", example: "Give me the book.", trans: "把书给我。", tags: ["过去式gave", "短语give up"], related: [
    { type: "过去式", word: "gave" }
  ] },
  { word: "circle", phonetic: "/ˈsɜːkl/", pos: "n.", meaning: "圆；圈子", grade: "junior", example: "Draw a circle.", trans: "画一个圆。", tags: ["基础"], related: [] },
  { word: "code", phonetic: "/kəʊd/", pos: "n.", meaning: "代码", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cut", phonetic: "/kʌt/", pos: "v.", meaning: "切；剪", grade: "junior", example: "Cut the apple into pieces.", trans: "把苹果切成块。", tags: ["过去式cut", "短语cut down"], related: [
    { type: "过去式", word: "cut" }
  ] },
  { word: "bring", phonetic: "/brɪŋ/", pos: "v.", meaning: "带来", grade: "junior", example: "Bring your book tomorrow.", trans: "明天把书带来。", tags: ["过去式brought", "反义词take"], related: [
    { type: "过去式", word: "brought" },
    { type: "反义词", word: "take" }
  ] },
  { word: "baby", phonetic: "/ˈbeɪbi/", pos: "n.", meaning: "婴儿", grade: "junior", example: "The baby is sleeping.", trans: "婴儿在睡觉。", tags: ["复数babies"], related: [
    { type: "复数", word: "babies" }
  ] },
  { word: "asset", phonetic: "/ˈæset/", pos: "n.", meaning: "资产", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chronic", phonetic: "/ˈkrɒnɪk/", pos: "adj.", meaning: "慢性的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "castle", phonetic: "/ˈkɑːsl/", pos: "n.", meaning: "城堡", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "banking", phonetic: "/ˈbæŋkɪŋ/", pos: "n.", meaning: "银行业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "price", phonetic: "/praɪs/", pos: "n.", meaning: "价格", grade: "junior", example: "What is the price?", trans: "价格是多少？", tags: ["基础"], related: [] },
  { word: "utility", phonetic: "/juːˈtɪləti/", pos: "n.", meaning: "效用", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "alliance", phonetic: "/əˈlaɪəns/", pos: "n.", meaning: "联盟", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "need", phonetic: "/niːd/", pos: "v.", meaning: "需要", grade: "junior", example: "I need help.", trans: "我需要帮助。", tags: ["基础", "后接to do"], related: [] },
  { word: "moral", phonetic: "/ˈmɒrəl/", pos: "adj.", meaning: "道德的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "heavy", phonetic: "/ˈhevi/", pos: "adj.", meaning: "重的", grade: "junior", example: "This bag is heavy.", trans: "这个包很重。", tags: ["比较级heavier"], related: [
    { type: "比较级", word: "heavier" }
  ] },
  { word: "war", phonetic: "/wɔː(r)/", pos: "n.", meaning: "战争", grade: "junior", example: "We hate war.", trans: "我们讨厌战争。", tags: ["基础"], related: [] },
  { word: "earth", phonetic: "/ɜːθ/", pos: "n.", meaning: "地球；土地", grade: "junior", example: "The earth goes around the sun.", trans: "地球绕着太阳转。", tags: ["基础"], related: [] },
  { word: "tent", phonetic: "/tent/", pos: "n.", meaning: "帐篷", grade: "junior", example: "We slept in a tent.", trans: "我们睡在帐篷里。", tags: ["基础"], related: [] },
  { word: "milk", phonetic: "/mɪlk/", pos: "n.", meaning: "牛奶", grade: "junior", example: "I drink milk every morning.", trans: "我每天早上喝牛奶。", tags: ["不可数"], related: [] },
  { word: "strange", phonetic: "/streɪndʒ/", pos: "adj.", meaning: "奇怪的", grade: "junior", example: "That is strange.", trans: "真奇怪。", tags: ["名词stranger"], related: [
    { type: "名词形式", word: "stranger" }
  ] },
  { word: "tourist", phonetic: "/ˈtʊərɪst/", pos: "n.", meaning: "游客", grade: "junior", example: "Many tourists come here.", trans: "很多游客来这里。", tags: ["基础"], related: [] },
  { word: "peak", phonetic: "/piːk/", pos: "n.", meaning: "山峰", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "growth", phonetic: "/ɡrəʊθ/", pos: "n.", meaning: "增长", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "please", phonetic: "/pliːz/", pos: "adv.", meaning: "请", grade: "junior", example: "Please sit down.", trans: "请坐。", tags: ["基础"], related: [] },
  { word: "refuse", phonetic: "/rɪˈfjuːz/", pos: "v.", meaning: "拒绝", grade: "junior", example: "He refused my offer.", trans: "他拒绝了我的提议。", tags: ["反义词accept"], related: [
    { type: "反义词", word: "accept" }
  ] },
  { word: "motor", phonetic: "/ˈməʊtə(r)/", pos: "n.", meaning: "发动机", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "horror", phonetic: "/ˈhɒrə(r)/", pos: "n.", meaning: "恐怖", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "betting", phonetic: "/ˈbetɪŋ/", pos: "n.", meaning: "赌博", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "adult", phonetic: "/ˈædʌlt/", pos: "n.", meaning: "成年人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "make", phonetic: "/meɪk/", pos: "v.", meaning: "制作；使", grade: "junior", example: "I make cakes.", trans: "我做蛋糕。", tags: ["过去式made", "短语make up"], related: [
    { type: "过去式", word: "made" }
  ] },
  { word: "phase", phonetic: "/feɪz/", pos: "n.", meaning: "阶段", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "credit", phonetic: "/ˈkredɪt/", pos: "n.", meaning: "信用", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "down", phonetic: "/daʊn/", pos: "adv.", meaning: "向下", grade: "junior", example: "Sit down, please.", trans: "请坐下。", tags: ["基础", "反义词up"], related: [
    { type: "反义词", word: "up" }
  ] },
  { word: "basis", phonetic: "/ˈbeɪsɪs/", pos: "n.", meaning: "基础", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "excellent", phonetic: "/ˈeksələnt/", pos: "adj.", meaning: "优秀的", grade: "junior", example: "Excellent work!", trans: "做得好！", tags: ["高频"], related: [] },
  { word: "certain", phonetic: "/ˈsɜːtn/", pos: "adj.", meaning: "确定的", grade: "junior", example: "I am certain he will come.", trans: "我确定他会来。", tags: ["短语be certain of"], related: [
    { type: "副词", word: "certainly" }
  ] },
  { word: "shock", phonetic: "/ʃɒk/", pos: "n.", meaning: "震惊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "meat", phonetic: "/miːt/", pos: "n.", meaning: "肉", grade: "junior", example: "I do not eat meat.", trans: "我不吃肉。", tags: ["不可数", "同音meet"], related: [
    { type: "同音词", word: "meet" }
  ] },
  { word: "pepper", phonetic: "/ˈpepə(r)/", pos: "n.", meaning: "胡椒", grade: "junior", example: "Add some pepper.", trans: "加点胡椒。", tags: ["不可数"], related: [] },
  { word: "habit", phonetic: "/ˈhæbɪt/", pos: "n.", meaning: "习惯", grade: "junior", example: "I have a good habit.", trans: "我有一个好习惯。", tags: ["高频", "短语form a habit"], related: [] },
  { word: "background", phonetic: "/ˈbækɡraʊnd/", pos: "n.", meaning: "背景", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "menu", phonetic: "/ˈmenjuː/", pos: "n.", meaning: "菜单", grade: "junior", example: "Look at the menu.", trans: "看菜单。", tags: ["基础"], related: [] },
  { word: "perfect", phonetic: "/ˈpɜːfɪkt/", pos: "adj.", meaning: "完美的", grade: "junior", example: "This is perfect.", trans: "这太完美了。", tags: ["名词perfection"], related: [
    { type: "名词形式", word: "perfection" }
  ] },
  { word: "path", phonetic: "/pɑːθ/", pos: "n.", meaning: "小路", grade: "junior", example: "Walk on the path.", trans: "走小路。", tags: ["复数paths"], related: [
    { type: "复数", word: "paths" }
  ] },
  { word: "choice", phonetic: "/tʃɔɪs/", pos: "n.", meaning: "选择", grade: "junior", example: "Make your choice.", trans: "做出你的选择。", tags: ["动词choose"], related: [
    { type: "动词形式", word: "choose" }
  ] },
  { word: "authority", phonetic: "/ɔːˈθɒrəti/", pos: "n.", meaning: "权威", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "structure", phonetic: "/ˈstrʌktʃə(r)/", pos: "n.", meaning: "结构", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "apparel", phonetic: "/əˈpærəl/", pos: "n.", meaning: "衣服", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shelf", phonetic: "/ʃelf/", pos: "n.", meaning: "架子", grade: "junior", example: "Put it on the shelf.", trans: "放架子上。", tags: ["复数shelves"], related: [
    { type: "复数", word: "shelves" }
  ] },
  { word: "wait", phonetic: "/weɪt/", pos: "v.", meaning: "等待", grade: "junior", example: "Wait for me.", trans: "等我。", tags: ["短语wait for"], related: [] },
  { word: "seek", phonetic: "/siːk/", pos: "v.", meaning: "寻找", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "resort", phonetic: "/rɪˈzɔːt/", pos: "n.", meaning: "度假胜地", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "similar", phonetic: "/ˈsɪmələ(r)/", pos: "adj.", meaning: "相似的", grade: "junior", example: "They are similar.", trans: "他们很相似。", tags: ["短语be similar to"], related: [] },
  { word: "risk", phonetic: "/rɪsk/", pos: "n.", meaning: "风险", grade: "junior", example: "Take a risk.", trans: "冒险。", tags: ["基础"], related: [] },
  { word: "address", phonetic: "/əˈdres/", pos: "n.", meaning: "地址；演讲", grade: "junior", example: "What is your address?", trans: "你的地址是什么？", tags: ["双音节词"], related: [] },
  { word: "can", phonetic: "/kæn/", pos: "aux.", meaning: "能；可以", grade: "junior", example: "I can swim.", trans: "我会游泳。", tags: ["基础", "过去式could"], related: [
    { type: "过去式", word: "could" }
  ] },
  { word: "small", phonetic: "/smɔːl/", pos: "adj.", meaning: "小的", grade: "junior", example: "I have a small dog.", trans: "我有一只小狗。", tags: ["反义词big"], related: [
    { type: "反义词", word: "big" }
  ] },
  { word: "search", phonetic: "/sɜːtʃ/", pos: "v.", meaning: "搜索", grade: "junior", example: "Search the Internet.", trans: "搜索互联网。", tags: ["基础"], related: [] },
  { word: "imagine", phonetic: "/ɪˈmædʒɪn/", pos: "v.", meaning: "想象", grade: "junior", example: "Imagine you are rich.", trans: "想象你很有钱。", tags: ["后接doing"], related: [] },
  { word: "final", phonetic: "/ˈfaɪnl/", pos: "adj.", meaning: "最终的", grade: "junior", example: "This is the final answer.", trans: "这是最终答案。", tags: ["副词finally"], related: [
    { type: "副词", word: "finally" }
  ] },
  { word: "database", phonetic: "/ˈdeɪtəbeɪs/", pos: "n.", meaning: "数据库", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "temporary", phonetic: "/ˈtemprəri/", pos: "adj.", meaning: "临时的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "graph", phonetic: "/ɡrɑːf/", pos: "n.", meaning: "图表", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "accuracy", phonetic: "/ˈækjərəsi/", pos: "n.", meaning: "精确", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "destination", phonetic: "/ˌdestɪˈneɪʃn/", pos: "n.", meaning: "目的地", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cotton", phonetic: "/ˈkɒtn/", pos: "n.", meaning: "棉花", grade: "junior", example: "This shirt is made of cotton.", trans: "这件衬衫是棉的。", tags: ["不可数"], related: [] },
  { word: "brain", phonetic: "/breɪn/", pos: "n.", meaning: "大脑", grade: "junior", example: "Use your brain.", trans: "动动你的脑子。", tags: ["高频"], related: [] },
  { word: "fork", phonetic: "/fɔːk/", pos: "n.", meaning: "叉", grade: "junior", example: "Use a fork to eat.", trans: "用叉子吃。", tags: ["基础"], related: [] },
  { word: "coastal", phonetic: "/ˈkəʊstl/", pos: "adj.", meaning: "沿海的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "accurate", phonetic: "/ˈækjərət/", pos: "adj.", meaning: "精确的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tone", phonetic: "/təʊn/", pos: "n.", meaning: "语气", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "accept", phonetic: "/əkˈsept/", pos: "v.", meaning: "接受；同意", grade: "junior", example: "I accept your apology.", trans: "我接受你的道歉。", tags: ["高频", "反义词refuse"], related: [
    { type: "反义词", word: "refuse" }
  ] },
  { word: "escape", phonetic: "/ɪˈskeɪp/", pos: "v.", meaning: "逃跑", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "began", phonetic: "/bɪˈɡæn/", pos: "v.", meaning: "开始(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dream", phonetic: "/driːm/", pos: "n./v.", meaning: "梦；梦想", grade: "junior", example: "I have a dream.", trans: "我有一个梦想。", tags: ["过去式dreamed/dreamt"], related: [
    { type: "过去式", word: "dreamed" },
    { type: "过去式", word: "dreamt" }
  ] },
  { word: "complete", phonetic: "/kəmˈpliːt/", pos: "v.", meaning: "完成", grade: "junior", example: "Complete the form.", trans: "填完表格。", tags: ["短语complete doing"], related: [] },
  { word: "inquiry", phonetic: "/ɪnˈkwaɪəri/", pos: "n.", meaning: "调查", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "everywhere", phonetic: "/ˈevriweə(r)/", pos: "adv.", meaning: "到处", grade: "junior", example: "I looked everywhere.", trans: "我到处都找了。", tags: ["基础"], related: [] },
  { word: "therefore", phonetic: "/ˈðeəfɔː(r)/", pos: "adv.", meaning: "因此", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "painting", phonetic: "/ˈpeɪntɪŋ/", pos: "n.", meaning: "绘画", grade: "junior", example: "This is a beautiful painting.", trans: "这是一幅美丽的画。", tags: ["基础"], related: [] },
  { word: "bell", phonetic: "/bel/", pos: "n.", meaning: "铃；钟", grade: "junior", example: "The bell is ringing.", trans: "铃响了。", tags: ["基础"], related: [] },
  { word: "concert", phonetic: "/ˈkɒnsət/", pos: "n.", meaning: "音乐会", grade: "junior", example: "We went to a concert.", trans: "我们去听了音乐会。", tags: ["高频"], related: [] },
  { word: "treat", phonetic: "/triːt/", pos: "v.", meaning: "对待；治疗", grade: "junior", example: "Treat others well.", trans: "善待他人。", tags: ["基础"], related: [] },
  { word: "cast", phonetic: "/kɑːst/", pos: "v.", meaning: "投；掷", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pet", phonetic: "/pet/", pos: "n.", meaning: "宠物", grade: "junior", example: "I have a pet cat.", trans: "我有一只宠物猫。", tags: ["基础"], related: [] },
  { word: "ride", phonetic: "/raɪd/", pos: "v.", meaning: "骑", grade: "junior", example: "I ride a bike.", trans: "我骑自行车。", tags: ["过去式rode", "过去分词ridden"], related: [
    { type: "过去式", word: "rode" },
    { type: "过去分词", word: "ridden" }
  ] },
  { word: "anywhere", phonetic: "/ˈeniweə(r)/", pos: "adv.", meaning: "任何地方", grade: "junior", example: "I cannot find it anywhere.", trans: "我到处都找不到。", tags: ["基础"], related: [] },
  { word: "patient", phonetic: "/ˈpeɪʃnt/", pos: "n./adj.", meaning: "病人；耐心的", grade: "junior", example: "Be patient.", trans: "要有耐心。", tags: ["名词patience"], related: [
    { type: "名词形式", word: "patience" }
  ] },
  { word: "dangerous", phonetic: "/ˈdeɪndʒərəs/", pos: "adj.", meaning: "危险的", grade: "junior", example: "It is dangerous to swim here.", trans: "在这里游泳很危险。", tags: ["名词danger"], related: [
    { type: "名词形式", word: "danger" }
  ] },
  { word: "equal", phonetic: "/ˈiːkwəl/", pos: "adj.", meaning: "平等的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "its", phonetic: "/ɪts/", pos: "pron.", meaning: "它的", grade: "junior", example: "The dog wagged its tail.", trans: "狗摇着尾巴。", tags: ["易混its"], related: [
    { type: "易混词", word: "its" }
  ] },
  { word: "ask", phonetic: "/ɑːsk/", pos: "v.", meaning: "问；要求", grade: "junior", example: "May I ask you a question?", trans: "我能问你个问题吗？", tags: ["基础", "反义词answer"], related: [
    { type: "反义词", word: "answer" }
  ] },
  { word: "minor", phonetic: "/ˈmaɪnə(r)/", pos: "adj.", meaning: "次要的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "luck", phonetic: "/lʌk/", pos: "n.", meaning: "运气", grade: "junior", example: "Good luck!", trans: "好运！", tags: ["不可数", "形容词lucky"], related: [] },
  { word: "muscle", phonetic: "/ˈmʌsl/", pos: "n.", meaning: "肌肉", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "skirt", phonetic: "/skɜːt/", pos: "n.", meaning: "裙子", grade: "junior", example: "She wears a skirt.", trans: "她穿裙子。", tags: ["基础"], related: [] },
  { word: "traditional", phonetic: "/trəˈdɪʃənl/", pos: "adj.", meaning: "传统的", grade: "junior", example: "This is traditional food.", trans: "这是传统食物。", tags: ["名词tradition"], related: [
    { type: "名词形式", word: "tradition" }
  ] },
  { word: "few", phonetic: "/fjuː/", pos: "adj.", meaning: "少数的", grade: "junior", example: "I have few friends.", trans: "我朋友很少。", tags: ["易混a few", "修饰可数"], related: [
    { type: "易混词", word: "a few" }
  ] },
  { word: "fellow", phonetic: "/ˈfeləʊ/", pos: "n.", meaning: "家伙", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "double", phonetic: "/ˈdʌbl/", pos: "adj.", meaning: "双倍的", grade: "junior", example: "I want a double room.", trans: "我想要双人房。", tags: ["基础"], related: [] },
  { word: "look", phonetic: "/lʊk/", pos: "v.", meaning: "看", grade: "junior", example: "Look at the picture.", trans: "看这幅画。", tags: ["基础", "短语look for"], related: [] },
  { word: "dog", phonetic: "/dɒɡ/", pos: "n.", meaning: "狗", grade: "junior", example: "I have a pet dog.", trans: "我有一只宠物狗。", tags: ["基础"], related: [] },
  { word: "tidy", phonetic: "/ˈtaɪdi/", pos: "adj.", meaning: "整洁的", grade: "junior", example: "Keep your room tidy.", trans: "保持房间整洁。", tags: ["比较级tidier"], related: [
    { type: "比较级", word: "tidier" }
  ] },
  { word: "neck", phonetic: "/nek/", pos: "n.", meaning: "脖子", grade: "junior", example: "She has a long neck.", trans: "她脖子长。", tags: ["基础"], related: [] },
  { word: "girl", phonetic: "/ɡɜːl/", pos: "n.", meaning: "女孩", grade: "junior", example: "The girl is singing.", trans: "女孩在唱歌。", tags: ["基础"], related: [] },
  { word: "concrete", phonetic: "/ˈkɒŋkriːt/", pos: "adj.", meaning: "具体的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "picture", phonetic: "/ˈpɪktʃə(r)/", pos: "n.", meaning: "图画；照片", grade: "junior", example: "Draw a picture.", trans: "画一幅画。", tags: ["基础"], related: [] },
  { word: "university", phonetic: "/ˌjuːnɪˈvɜːsəti/", pos: "n.", meaning: "大学", grade: "junior", example: "I go to university.", trans: "我上大学。", tags: ["复数universities"], related: [
    { type: "复数", word: "universities" }
  ] },
  { word: "guardian", phonetic: "/ˈɡɑːdiən/", pos: "n.", meaning: "监护人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "disappear", phonetic: "/ˌdɪsəˈpɪə(r)/", pos: "v.", meaning: "消失", grade: "junior", example: "The sun disappeared behind the clouds.", trans: "太阳消失在云后。", tags: ["反义词appear"], related: [
    { type: "反义词", word: "appear" }
  ] },
  { word: "delay", phonetic: "/dɪˈleɪ/", pos: "v.", meaning: "延迟", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "root", phonetic: "/ruːt/", pos: "n.", meaning: "根", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shake", phonetic: "/ʃeɪk/", pos: "v.", meaning: "摇动", grade: "junior", example: "Shake the bottle.", trans: "摇瓶子。", tags: ["过去式shook"], related: [
    { type: "过去式", word: "shook" }
  ] },
  { word: "roof", phonetic: "/ruːf/", pos: "n.", meaning: "屋顶", grade: "junior", example: "The roof is red.", trans: "屋顶是红的。", tags: ["复数roofs"], related: [
    { type: "复数", word: "roofs" }
  ] },
  { word: "suitable", phonetic: "/ˈsuːtəbl/", pos: "adj.", meaning: "合适的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "booty", phonetic: "/ˈbuːti/", pos: "n.", meaning: "战利品", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "oxygen", phonetic: "/ˈɒksɪdʒən/", pos: "n.", meaning: "氧气", grade: "junior", example: "We need oxygen.", trans: "我们需要氧气。", tags: ["不可数"], related: [] },
  { word: "reform", phonetic: "/rɪˈfɔːm/", pos: "v.", meaning: "改革", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "believe", phonetic: "/bɪˈliːv/", pos: "v.", meaning: "相信；认为", grade: "junior", example: "I believe you.", trans: "我相信你。", tags: ["高频", "短语believe in"], related: [] },
  { word: "lady", phonetic: "/ˈleɪdi/", pos: "n.", meaning: "女士", grade: "junior", example: "The lady is kind.", trans: "那位女士很善良。", tags: ["基础"], related: [] },
  { word: "shoulder", phonetic: "/ˈʃəʊldə(r)/", pos: "n.", meaning: "肩膀", grade: "junior", example: "My shoulder hurts.", trans: "我肩膀疼。", tags: ["基础"], related: [] },
  { word: "style", phonetic: "/staɪl/", pos: "n.", meaning: "风格", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "center", phonetic: "/ˈsentə(r)/", pos: "n.", meaning: "中心", grade: "junior", example: "The city center is busy.", trans: "市中心很繁忙。", tags: ["美式拼法", "英式centre"], related: [] },
  { word: "status", phonetic: "/ˈsteɪtəs/", pos: "n.", meaning: "地位", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "important", phonetic: "/ɪmˈpɔːtnt/", pos: "adj.", meaning: "重要的", grade: "junior", example: "This is very important.", trans: "这很重要。", tags: ["名词importance"], related: [
    { type: "名词形式", word: "importance" }
  ] },
  { word: "dragon", phonetic: "/ˈdræɡən/", pos: "n.", meaning: "龙", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "necessary", phonetic: "/ˈnesəsəri/", pos: "adj.", meaning: "必要的", grade: "junior", example: "It is necessary to study.", trans: "学习是必要的。", tags: ["高频"], related: [] },
  { word: "tea", phonetic: "/tiː/", pos: "n.", meaning: "茶", grade: "junior", example: "I drink tea.", trans: "我喝茶。", tags: ["不可数"], related: [] },
  { word: "blonde", phonetic: "/blɒnd/", pos: "adj.", meaning: "金发的", grade: "junior", example: "She has blonde hair.", trans: "她有金色的头发。", tags: ["基础"], related: [] },
  { word: "buffer", phonetic: "/ˈbʌfə(r)/", pos: "n.", meaning: "缓冲", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "eat", phonetic: "/iːt/", pos: "v.", meaning: "吃", grade: "junior", example: "I eat an apple a day.", trans: "我一天吃一个苹果。", tags: ["过去式ate", "过去分词eaten"], related: [
    { type: "过去式", word: "ate" },
    { type: "过去分词", word: "eaten" }
  ] },
  { word: "develop", phonetic: "/dɪˈveləp/", pos: "v.", meaning: "发展；开发", grade: "junior", example: "China develops fast.", trans: "中国发展迅速。", tags: ["名词development"], related: [
    { type: "名词形式", word: "development" }
  ] },
  { word: "beast", phonetic: "/biːst/", pos: "n.", meaning: "野兽", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bookmark", phonetic: "/ˈbʊkmɑːk/", pos: "n.", meaning: "书签", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "probably", phonetic: "/ˈprɒbəbli/", pos: "adv.", meaning: "可能", grade: "junior", example: "It will probably rain.", trans: "可能会下雨。", tags: ["高频"], related: [] },
  { word: "edition", phonetic: "/ɪˈdɪʃn/", pos: "n.", meaning: "版本", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "inside", phonetic: "/ˌɪnˈsaɪd/", pos: "prep.", meaning: "在……里面", grade: "junior", example: "The cat is inside the box.", trans: "猫在盒子里。", tags: ["反义词outside"], related: [
    { type: "反义词", word: "outside" }
  ] },
  { word: "avenue", phonetic: "/ˈævənjuː/", pos: "n.", meaning: "大道", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "smoke", phonetic: "/sməʊk/", pos: "n./v.", meaning: "烟；吸烟", grade: "junior", example: "Do not smoke.", trans: "不要吸烟。", tags: ["基础"], related: [] },
  { word: "English", phonetic: "/ˈɪŋɡlɪʃ/", pos: "n.", meaning: "英语", grade: "junior", example: "I study English.", trans: "我学英语。", tags: ["基础"], related: [] },
  { word: "title", phonetic: "/ˈtaɪtl/", pos: "n.", meaning: "标题", grade: "junior", example: "What is the title?", trans: "标题是什么？", tags: ["基础"], related: [] },
  { word: "key", phonetic: "/kiː/", pos: "n.", meaning: "钥匙", grade: "junior", example: "Where is my key?", trans: "我的钥匙在哪？", tags: ["基础"], related: [] },
  { word: "river", phonetic: "/ˈrɪvə(r)/", pos: "n.", meaning: "河", grade: "junior", example: "The river is long.", trans: "这条河很长。", tags: ["基础"], related: [] },
  { word: "bar", phonetic: "/bɑː(r)/", pos: "n.", meaning: "酒吧；条", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", pos: "adj.", meaning: "美丽的", grade: "junior", example: "What a beautiful flower!", trans: "多美的花啊！", tags: ["基础", "反义词ugly"], related: [
    { type: "反义词", word: "ugly" }
  ] },
  { word: "goat", phonetic: "/ɡəʊt/", pos: "n.", meaning: "山羊", grade: "junior", example: "The goat is eating grass.", trans: "山羊在吃草。", tags: ["基础"], related: [] },
  { word: "locate", phonetic: "/ləʊˈkeɪt/", pos: "v.", meaning: "定位", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "save", phonetic: "/seɪv/", pos: "v.", meaning: "救；节省", grade: "junior", example: "Save the water.", trans: "节约用水。", tags: ["基础"], related: [] },
  { word: "prevent", phonetic: "/prɪˈvent/", pos: "v.", meaning: "阻止", grade: "junior", example: "Prevent the fire.", trans: "阻止火灾。", tags: ["短语prevent from"], related: [] },
  { word: "rubber", phonetic: "/ˈrʌbə(r)/", pos: "n.", meaning: "橡皮；橡胶", grade: "junior", example: "Use a rubber.", trans: "用橡皮。", tags: ["英式eraser"], related: [] },
  { word: "travel", phonetic: "/ˈtrævl/", pos: "v.", meaning: "旅行", grade: "junior", example: "I love to travel.", trans: "我喜欢旅行。", tags: ["基础"], related: [] },
  { word: "throw", phonetic: "/θrəʊ/", pos: "v.", meaning: "扔", grade: "junior", example: "Throw the ball.", trans: "扔球。", tags: ["过去式threw", "过去分词thrown"], related: [
    { type: "过去式", word: "threw" },
    { type: "过去分词", word: "thrown" }
  ] },
  { word: "currency", phonetic: "/ˈkʌrənsi/", pos: "n.", meaning: "货币", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "directory", phonetic: "/dəˈrektəri/", pos: "n.", meaning: "目录", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bush", phonetic: "/bʊʃ/", pos: "n.", meaning: "灌木", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "archive", phonetic: "/ˈɑːkaɪv/", pos: "n.", meaning: "档案", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "craft", phonetic: "/krɑːft/", pos: "n.", meaning: "手艺", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "better", phonetic: "/ˈbetə(r)/", pos: "adj.", meaning: "更好的", grade: "junior", example: "This one is better.", trans: "这个更好。", tags: ["good的比较级", "短语had better"], related: [] },
  { word: "cam", phonetic: "/kæm/", pos: "n.", meaning: "凸轮", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "luxury", phonetic: "/ˈlʌkʃəri/", pos: "n.", meaning: "奢侈", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "get", phonetic: "/ɡet/", pos: "v.", meaning: "得到；到达", grade: "junior", example: "Get up early.", trans: "早起。", tags: ["过去式got", "短语get along with"], related: [
    { type: "过去式", word: "got" }
  ] },
  { word: "run", phonetic: "/rʌn/", pos: "v.", meaning: "跑", grade: "junior", example: "I run every morning.", trans: "我每天早上跑步。", tags: ["过去式ran", "过去分词run"], related: [
    { type: "过去式", word: "ran" },
    { type: "过去分词", word: "run" }
  ] },
  { word: "attorney", phonetic: "/əˈtɜːni/", pos: "n.", meaning: "律师", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "X-ray", phonetic: "/ˈeks reɪ/", pos: "n.", meaning: "X光", grade: "junior", example: "Take an X-ray.", trans: "拍X光。", tags: ["基础"], related: [] },
  { word: "assessment", phonetic: "/əˈsesmənt/", pos: "n.", meaning: "评估", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "billion", phonetic: "/ˈbɪljən/", pos: "num.", meaning: "十亿", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rainy", phonetic: "/ˈreɪni/", pos: "adj.", meaning: "下雨的", grade: "junior", example: "It is a rainy day.", trans: "今天是雨天。", tags: ["基础"], related: [] },
  { word: "situation", phonetic: "/ˌsɪtʃuˈeɪʃn/", pos: "n.", meaning: "情况", grade: "junior", example: "The situation is serious.", trans: "情况严重。", tags: ["高频"], related: [] },
  { word: "olive", phonetic: "/ˈɒlɪv/", pos: "n.", meaning: "橄榄", grade: "junior", example: "I like olive oil.", trans: "我喜欢橄榄油。", tags: ["基础"], related: [] },
  { word: "same", phonetic: "/seɪm/", pos: "adj.", meaning: "相同的", grade: "junior", example: "We are the same age.", trans: "我们同岁。", tags: ["短语the same as"], related: [] },
  { word: "ram", phonetic: "/ræm/", pos: "n.", meaning: "公羊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pin", phonetic: "/pɪn/", pos: "n.", meaning: "别针", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "deposit", phonetic: "/dɪˈpɒzɪt/", pos: "n./v.", meaning: "存款", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "private", phonetic: "/ˈpraɪvət/", pos: "adj.", meaning: "私人的", grade: "junior", example: "This is private.", trans: "这是私人的。", tags: ["反义词public"], related: [
    { type: "反义词", word: "public" }
  ] },
  { word: "tin", phonetic: "/tɪn/", pos: "n.", meaning: "罐头", grade: "junior", example: "A tin of beans.", trans: "一罐豆子。", tags: ["基础"], related: [] },
  { word: "absolute", phonetic: "/ˈæbsəluːt/", pos: "adj.", meaning: "绝对的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hate", phonetic: "/heɪt/", pos: "v.", meaning: "讨厌", grade: "junior", example: "I hate rainy days.", trans: "我讨厌下雨天。", tags: ["反义词love"], related: [
    { type: "反义词", word: "love" }
  ] },
  { word: "character", phonetic: "/ˈkærəktə(r)/", pos: "n.", meaning: "性格；角色", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "straight", phonetic: "/streɪt/", pos: "adj.", meaning: "直的", grade: "junior", example: "Walk straight.", trans: "直走。", tags: ["基础"], related: [] },
  { word: "exercise", phonetic: "/ˈeksəsaɪz/", pos: "n./v.", meaning: "锻炼；练习", grade: "junior", example: "Do exercise every day.", trans: "每天锻炼。", tags: ["高频"], related: [] },
  { word: "officer", phonetic: "/ˈɒfɪsə(r)/", pos: "n.", meaning: "军官；官员", grade: "junior", example: "The officer is strict.", trans: "军官很严格。", tags: ["基础"], related: [] },
  { word: "parent", phonetic: "/ˈpeərənt/", pos: "n.", meaning: "父母", grade: "junior", example: "My parents love me.", trans: "父母爱我。", tags: ["基础"], related: [] },
  { word: "terrible", phonetic: "/ˈterəbl/", pos: "adj.", meaning: "可怕的", grade: "junior", example: "That is terrible!", trans: "太可怕了！", tags: ["基础"], related: [] },
  { word: "wild", phonetic: "/waɪld/", pos: "adj.", meaning: "野生的", grade: "junior", example: "Wild animals.", trans: "野生动物。", tags: ["基础"], related: [] },
  { word: "hurry", phonetic: "/ˈhʌri/", pos: "v.", meaning: "匆忙", grade: "junior", example: "Hurry up!", trans: "快点！", tags: ["短语hurry up"], related: [] },
  { word: "review", phonetic: "/rɪˈvjuː/", pos: "v.", meaning: "复习", grade: "junior", example: "Review the lesson.", trans: "复习功课。", tags: ["基础"], related: [] },
  { word: "prefer", phonetic: "/prɪˈfɜː(r)/", pos: "v.", meaning: "更喜欢", grade: "junior", example: "I prefer tea to coffee.", trans: "我喜欢茶胜过咖啡。", tags: ["短语prefer to do"], related: [] },
  { word: "practice", phonetic: "/ˈpræktɪs/", pos: "n./v.", meaning: "练习", grade: "junior", example: "Practice makes perfect.", trans: "熟能生巧。", tags: ["美式practise"], related: [] },
  { word: "institution", phonetic: "/ˌɪnstɪˈtjuːʃn/", pos: "n.", meaning: "制度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "data", phonetic: "/ˈdeɪtə/", pos: "n.", meaning: "数据", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "economy", phonetic: "/ɪˈkɒnəmi/", pos: "n.", meaning: "经济", grade: "junior", example: "The economy is growing.", trans: "经济在增长。", tags: ["高频"], related: [] },
  { word: "board", phonetic: "/bɔːd/", pos: "n.", meaning: "木板；董事会", grade: "junior", example: "Write it on the board.", trans: "把它写在板上。", tags: ["高频"], related: [] },
  { word: "comfort", phonetic: "/ˈkʌmfət/", pos: "n.", meaning: "舒适", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "week", phonetic: "/wiːk/", pos: "n.", meaning: "星期；周", grade: "junior", example: "A week has seven days.", trans: "一周有七天。", tags: ["基础"], related: [] },
  { word: "load", phonetic: "/ləʊd/", pos: "n.", meaning: "负载", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "assignment", phonetic: "/əˈsaɪnmənt/", pos: "n.", meaning: "任务", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "world", phonetic: "/wɜːld/", pos: "n.", meaning: "世界", grade: "junior", example: "The world is big.", trans: "世界很大。", tags: ["基础"], related: [] },
  { word: "Japan", phonetic: "/dʒəˈpæn/", pos: "n.", meaning: "日本", grade: "junior", example: "I want to visit Japan.", trans: "我想去日本。", tags: ["基础"], related: [] },
  { word: "crash", phonetic: "/kræʃ/", pos: "v.", meaning: "坠毁", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "except", phonetic: "/ɪkˈsept/", pos: "prep.", meaning: "除……之外", grade: "junior", example: "Everyone came except Tom.", trans: "除了汤姆大家都来了。", tags: ["易混besides"], related: [
    { type: "易混词", word: "besides" }
  ] },
  { word: "wood", phonetic: "/wʊd/", pos: "n.", meaning: "木头", grade: "junior", example: "The table is wood.", trans: "桌子是木头的。", tags: ["不可数"], related: [] },
  { word: "city", phonetic: "/ˈsɪti/", pos: "n.", meaning: "城市", grade: "junior", example: "Beijing is a big city.", trans: "北京是大城市。", tags: ["复数cities"], related: [
    { type: "复数", word: "cities" }
  ] },
  { word: "false", phonetic: "/fɔːls/", pos: "adj.", meaning: "错误的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "back", phonetic: "/bæk/", pos: "n./adv.", meaning: "背部；回来", grade: "junior", example: "Come back soon.", trans: "早点回来。", tags: ["基础", "短语come back"], related: [] },
  { word: "satellite", phonetic: "/ˈsætəlaɪt/", pos: "n.", meaning: "卫星", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "crown", phonetic: "/kraʊn/", pos: "n.", meaning: "王冠", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mercury", phonetic: "/ˈmɜːkjəri/", pos: "n.", meaning: "水星", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "remain", phonetic: "/rɪˈmeɪn/", pos: "v.", meaning: "保持；剩余", grade: "junior", example: "Remain calm.", trans: "保持冷静。", tags: ["高频"], related: [] },
  { word: "filing", phonetic: "/ˈfaɪlɪŋ/", pos: "n.", meaning: "归档", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "comfortable", phonetic: "/ˈkʌmftəbl/", pos: "adj.", meaning: "舒适的", grade: "junior", example: "This chair is comfortable.", trans: "这把椅子很舒服。", tags: ["高频"], related: [] },
  { word: "virus", phonetic: "/ˈvaɪrəs/", pos: "n.", meaning: "病毒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "volleyball", phonetic: "/ˈvɒlibɔːl/", pos: "n.", meaning: "排球", grade: "junior", example: "I play volleyball.", trans: "我打排球。", tags: ["基础"], related: [] },
  { word: "wheel", phonetic: "/wiːl/", pos: "n.", meaning: "轮子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "often", phonetic: "/ˈɒfn/", pos: "adv.", meaning: "经常", grade: "junior", example: "I often read books.", trans: "我经常读书。", tags: ["频率副词"], related: [] },
  { word: "as", phonetic: "/æz/", pos: "conj.", meaning: "当……时；作为", grade: "junior", example: "Do as I say.", trans: "照我说的做。", tags: ["基础", "短语as soon as"], related: [] },
  { word: "stone", phonetic: "/stəʊn/", pos: "n.", meaning: "石头", grade: "junior", example: "Throw a stone.", trans: "扔石头。", tags: ["基础"], related: [] },
  { word: "problem", phonetic: "/ˈprɒbləm/", pos: "n.", meaning: "问题", grade: "junior", example: "I have a problem.", trans: "我有个问题。", tags: ["基础"], related: [] },
  { word: "eventually", phonetic: "/ɪˈventʃuəli/", pos: "adv.", meaning: "最终", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "native", phonetic: "/ˈneɪtɪv/", pos: "adj.", meaning: "本地的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "steam", phonetic: "/stiːm/", pos: "n.", meaning: "蒸汽", grade: "junior", example: "The steam is hot.", trans: "蒸汽很热。", tags: ["不可数"], related: [] },
  { word: "pop", phonetic: "/pɒp/", pos: "n.", meaning: "流行音乐", grade: "junior", example: "I like pop music.", trans: "我喜欢流行音乐。", tags: ["基础"], related: [] },
  { word: "type", phonetic: "/taɪp/", pos: "n.", meaning: "类型", grade: "junior", example: "What type is it?", trans: "什么类型？", tags: ["基础"], related: [] },
  { word: "builder", phonetic: "/ˈbɪldə(r)/", pos: "n.", meaning: "建筑工人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "estimate", phonetic: "/ˈestɪmət/", pos: "v.", meaning: "估计", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gas", phonetic: "/ɡæs/", pos: "n.", meaning: "气体；汽油", grade: "junior", example: "The car needs gas.", trans: "车需要加油。", tags: ["不可数"], related: [] },
  { word: "voice", phonetic: "/vɔɪs/", pos: "n.", meaning: "声音", grade: "junior", example: "Her voice is sweet.", trans: "她声音甜美。", tags: ["基础"], related: [] },
  { word: "much", phonetic: "/mʌtʃ/", pos: "adj.", meaning: "许多", grade: "junior", example: "Thank you very much.", trans: "非常感谢。", tags: ["修饰不可数"], related: [] },
  { word: "generate", phonetic: "/ˈdʒenəreɪt/", pos: "v.", meaning: "产生", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "critical", phonetic: "/ˈkrɪtɪkl/", pos: "adj.", meaning: "批判的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "customer", phonetic: "/ˈkʌstəmə(r)/", pos: "n.", meaning: "顾客", grade: "junior", example: "The customer is always right.", trans: "顾客永远是对的。", tags: ["高频"], related: [] },
  { word: "use", phonetic: "/juːz/", pos: "v.", meaning: "使用", grade: "junior", example: "Use a pen.", trans: "用笔。", tags: ["基础"], related: [] },
  { word: "cry", phonetic: "/kraɪ/", pos: "v.", meaning: "哭；叫喊", grade: "junior", example: "The baby is crying.", trans: "宝宝在哭。", tags: ["过去式cried"], related: [
    { type: "过去式", word: "cried" }
  ] },
  { word: "cafe", phonetic: "/ˈkæfeɪ/", pos: "n.", meaning: "咖啡馆", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "diamond", phonetic: "/ˈdaɪəmənd/", pos: "n.", meaning: "钻石", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "school", phonetic: "/skuːl/", pos: "n.", meaning: "学校", grade: "junior", example: "I go to school.", trans: "我上学。", tags: ["基础"], related: [] },
  { word: "cluster", phonetic: "/ˈklʌstə(r)/", pos: "n.", meaning: "簇", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cough", phonetic: "/kɒf/", pos: "v./n.", meaning: "咳嗽", grade: "junior", example: "He has a bad cough.", trans: "他咳嗽得很厉害。", tags: ["基础"], related: [] },
  { word: "sand", phonetic: "/sænd/", pos: "n.", meaning: "沙子", grade: "junior", example: "The sand is hot.", trans: "沙子很热。", tags: ["不可数"], related: [] },
  { word: "consumer", phonetic: "/kənˈsjuːmə(r)/", pos: "n.", meaning: "消费者", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "twice", phonetic: "/twaɪs/", pos: "adv.", meaning: "两次", grade: "junior", example: "I go there twice a week.", trans: "我一周去两次。", tags: ["基础"], related: [] },
  { word: "empire", phonetic: "/ˈempaɪə(r)/", pos: "n.", meaning: "帝国", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bus", phonetic: "/bʌs/", pos: "n.", meaning: "公共汽车", grade: "junior", example: "I take the bus to school.", trans: "我乘公交车上学。", tags: ["基础"], related: [] },
  { word: "son", phonetic: "/sʌn/", pos: "n.", meaning: "儿子", grade: "junior", example: "He is my son.", trans: "他是我儿子。", tags: ["基础", "同音sun"], related: [
    { type: "同音词", word: "sun" }
  ] },
  { word: "majority", phonetic: "/məˈdʒɒrəti/", pos: "n.", meaning: "多数", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lesson", phonetic: "/ˈlesn/", pos: "n.", meaning: "课；教训", grade: "junior", example: "This is Lesson 1.", trans: "这是第一课。", tags: ["基础"], related: [] },
  { word: "subsequent", phonetic: "/ˈsʌbsɪkwənt/", pos: "adj.", meaning: "随后的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fell", phonetic: "/fel/", pos: "v.", meaning: "砍倒", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "solution", phonetic: "/səˈluːʃn/", pos: "n.", meaning: "解决方案", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "somewhere", phonetic: "/ˈsʌmweə(r)/", pos: "adv.", meaning: "某处", grade: "junior", example: "I left it somewhere.", trans: "我把它落在某处了。", tags: ["基础"], related: [] },
  { word: "remember", phonetic: "/rɪˈmembə(r)/", pos: "v.", meaning: "记得", grade: "junior", example: "Remember to call.", trans: "记得打电话。", tags: ["反义词forget", "后接to do/doing"], related: [
    { type: "反义词", word: "forget" }
  ] },
  { word: "expand", phonetic: "/ɪkˈspænd/", pos: "v.", meaning: "扩展", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "joke", phonetic: "/dʒəʊk/", pos: "n.", meaning: "笑话", grade: "junior", example: "Tell me a joke.", trans: "给我讲个笑话。", tags: ["基础"], related: [] },
  { word: "answer", phonetic: "/ˈɑːnsə(r)/", pos: "v./n.", meaning: "回答；答案", grade: "junior", example: "Can you answer the question?", trans: "你能回答这个问题吗？", tags: ["基础", "反义词ask"], related: [
    { type: "反义词", word: "ask" }
  ] },
  { word: "freeze", phonetic: "/friːz/", pos: "v.", meaning: "结冰；冻住", grade: "junior", example: "Water freezes at 0°C.", trans: "水在零度结冰。", tags: ["过去式froze"], related: [
    { type: "过去式", word: "froze" }
  ] },
  { word: "commerce", phonetic: "/ˈkɒmɜːs/", pos: "n.", meaning: "商业", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "this", phonetic: "/ðɪs/", pos: "pron.", meaning: "这个", grade: "junior", example: "This is my book.", trans: "这是我的书。", tags: ["复数these"], related: [
    { type: "复数", word: "these" }
  ] },
  { word: "once", phonetic: "/wʌns/", pos: "adv.", meaning: "一次", grade: "junior", example: "Once a week.", trans: "一周一次。", tags: ["短语at once"], related: [] },
  { word: "pig", phonetic: "/pɪɡ/", pos: "n.", meaning: "猪", grade: "junior", example: "The pig is pink.", trans: "猪是粉色的。", tags: ["基础"], related: [] },
  { word: "deputy", phonetic: "/ˈdepjuti/", pos: "n.", meaning: "副手", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hit", phonetic: "/hɪt/", pos: "v.", meaning: "打；击中", grade: "junior", example: "He hit the ball.", trans: "他击中了球。", tags: ["过去式hit"], related: [
    { type: "过去式", word: "hit" }
  ] },
  { word: "clinic", phonetic: "/ˈklɪnɪk/", pos: "n.", meaning: "诊所", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "frog", phonetic: "/frɒɡ/", pos: "n.", meaning: "青蛙", grade: "junior", example: "The frog jumped.", trans: "青蛙跳了。", tags: ["基础"], related: [] },
  { word: "piano", phonetic: "/piˈænəʊ/", pos: "n.", meaning: "钢琴", grade: "junior", example: "She plays the piano.", trans: "她弹钢琴。", tags: ["基础"], related: [] },
  { word: "density", phonetic: "/ˈdensəti/", pos: "n.", meaning: "密度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "since", phonetic: "/sɪns/", pos: "prep.", meaning: "自从", grade: "junior", example: "I have lived here since 2010.", trans: "我自2010年住在这里。", tags: ["常用于完成时"], related: [] },
  { word: "local", phonetic: "/ˈləʊkl/", pos: "adj.", meaning: "当地的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hope", phonetic: "/həʊp/", pos: "v.", meaning: "希望", grade: "junior", example: "I hope you can come.", trans: "我希望你能来。", tags: ["基础", "短语hope to do"], related: [] },
  { word: "biology", phonetic: "/baɪˈɒlədʒi/", pos: "n.", meaning: "生物学", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wake", phonetic: "/weɪk/", pos: "v.", meaning: "醒来", grade: "junior", example: "I wake at seven.", trans: "我七点醒。", tags: ["过去式woke", "短语wake up"], related: [
    { type: "过去式", word: "woke" }
  ] },
  { word: "summit", phonetic: "/ˈsʌmɪt/", pos: "n.", meaning: "峰会", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "foot", phonetic: "/fʊt/", pos: "n.", meaning: "脚", grade: "junior", example: "I hurt my foot.", trans: "我伤了脚。", tags: ["复数feet"], related: [
    { type: "复数", word: "feet" }
  ] },
  { word: "pine", phonetic: "/paɪn/", pos: "n.", meaning: "松树", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "purpose", phonetic: "/ˈpɜːpəs/", pos: "n.", meaning: "目的", grade: "junior", example: "What is your purpose?", trans: "你的目的是什么？", tags: ["高频", "短语on purpose"], related: [] },
  { word: "finally", phonetic: "/ˈfaɪnəli/", pos: "adv.", meaning: "最后", grade: "junior", example: "Finally, we won.", trans: "最后我们赢了。", tags: ["基础"], related: [
    { type: "形容词", word: "final" }
  ] },
  { word: "court", phonetic: "/kɔːt/", pos: "n.", meaning: "法院", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "huge", phonetic: "/hjuːdʒ/", pos: "adj.", meaning: "巨大的", grade: "junior", example: "This is a huge building.", trans: "这是一座巨大的建筑。", tags: ["高频"], related: [] },
  { word: "shape", phonetic: "/ʃeɪp/", pos: "n.", meaning: "形状", grade: "junior", example: "What shape is it?", trans: "什么形状？", tags: ["基础"], related: [] },
  { word: "China", phonetic: "/ˈtʃaɪnə/", pos: "n.", meaning: "中国", grade: "junior", example: "I love China.", trans: "我爱中国。", tags: ["基础"], related: [] },
  { word: "card", phonetic: "/kɑːd/", pos: "n.", meaning: "卡片", grade: "junior", example: "Send me a postcard.", trans: "给我寄张明信片。", tags: ["基础"], related: [] },
  { word: "ahead", phonetic: "/əˈhed/", pos: "adv.", meaning: "向前", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pen", phonetic: "/pen/", pos: "n.", meaning: "钢笔", grade: "junior", example: "I have a pen.", trans: "我有一支钢笔。", tags: ["基础"], related: [] },
  { word: "weekend", phonetic: "/ˌwiːkˈend/", pos: "n.", meaning: "周末", grade: "junior", example: "Have a nice weekend.", trans: "周末愉快。", tags: ["基础"], related: [] },
  { word: "keyboard", phonetic: "/ˈkiːbɔːd/", pos: "n.", meaning: "键盘", grade: "junior", example: "Use the keyboard.", trans: "使用键盘。", tags: ["基础"], related: [] },
  { word: "crack", phonetic: "/kræk/", pos: "v.", meaning: "裂开", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "artist", phonetic: "/ˈɑːtɪst/", pos: "n.", meaning: "艺术家", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "slide", phonetic: "/slaɪd/", pos: "v.", meaning: "滑动", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "option", phonetic: "/ˈɒpʃn/", pos: "n.", meaning: "选择", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "avoid", phonetic: "/əˈvɔɪd/", pos: "v.", meaning: "避免", grade: "junior", example: "Try to avoid mistakes.", trans: "尽量避免错误。", tags: ["高频", "后接doing"], related: [] },
  { word: "becoming", phonetic: "/bɪˈkʌmɪŋ/", pos: "adj.", meaning: "合适的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "recent", phonetic: "/ˈriːsnt/", pos: "adj.", meaning: "最近的", grade: "junior", example: "In recent years.", trans: "近年来。", tags: ["副词recently"], related: [] },
  { word: "combine", phonetic: "/kəmˈbaɪn/", pos: "v.", meaning: "结合", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "provide", phonetic: "/prəˈvaɪd/", pos: "v.", meaning: "提供", grade: "junior", example: "They provide food.", trans: "他们提供食物。", tags: ["短语provide with"], related: [] },
  { word: "distance", phonetic: "/ˈdɪstəns/", pos: "n.", meaning: "距离", grade: "junior", example: "What is the distance?", trans: "距离是多少？", tags: ["短语in the distance"], related: [] },
  { word: "party", phonetic: "/ˈpɑːti/", pos: "n.", meaning: "聚会", grade: "junior", example: "Come to my party.", trans: "来参加我的聚会。", tags: ["复数parties"], related: [
    { type: "复数", word: "parties" }
  ] },
  { word: "breathe", phonetic: "/briːð/", pos: "v.", meaning: "呼吸", grade: "junior", example: "Breathe deeply.", trans: "深呼吸。", tags: ["名词breath"], related: [
    { type: "名词形式", word: "breath" }
  ] },
  { word: "fluid", phonetic: "/ˈfluːɪd/", pos: "n.", meaning: "液体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "banana", phonetic: "/bəˈnɑːnə/", pos: "n.", meaning: "香蕉", grade: "junior", example: "Monkeys like bananas.", trans: "猴子喜欢香蕉。", tags: ["基础"], related: [] },
  { word: "do", phonetic: "/duː/", pos: "v.", meaning: "做", grade: "junior", example: "What do you do?", trans: "你是做什么的？", tags: ["过去式did", "过去分词done"], related: [
    { type: "过去式", word: "did" },
    { type: "过去分词", word: "done" }
  ] },
  { word: "tonight", phonetic: "/təˈnaɪt/", pos: "n.", meaning: "今晚", grade: "junior", example: "See you tonight.", trans: "今晚见。", tags: ["基础"], related: [] },
  { word: "reduce", phonetic: "/rɪˈdjuːs/", pos: "v.", meaning: "减少", grade: "junior", example: "Reduce the price.", trans: "降价。", tags: ["反义词increase"], related: [
    { type: "反义词", word: "increase" }
  ] },
  { word: "string", phonetic: "/strɪŋ/", pos: "n.", meaning: "线", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "palace", phonetic: "/ˈpæləs/", pos: "n.", meaning: "宫殿", grade: "junior", example: "The palace is huge.", trans: "宫殿很大。", tags: ["基础"], related: [] },
  { word: "plain", phonetic: "/pleɪn/", pos: "adj.", meaning: "平原的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cruise", phonetic: "/kruːz/", pos: "n.", meaning: "巡航", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "seed", phonetic: "/siːd/", pos: "n.", meaning: "种子", grade: "junior", example: "Plant the seeds.", trans: "播种。", tags: ["基础"], related: [] },
  { word: "foreign", phonetic: "/ˈfɒrən/", pos: "adj.", meaning: "外国的", grade: "junior", example: "She speaks a foreign language.", trans: "她会说外语。", tags: ["高频"], related: [] },
  { word: "secretary", phonetic: "/ˈsekrətri/", pos: "n.", meaning: "秘书", grade: "junior", example: "She is a secretary.", trans: "她是秘书。", tags: ["基础"], related: [] },
  { word: "immediate", phonetic: "/ɪˈmiːdiət/", pos: "adj.", meaning: "立即的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "list", phonetic: "/lɪst/", pos: "n.", meaning: "清单", grade: "junior", example: "Make a shopping list.", trans: "列购物清单。", tags: ["基础"], related: [] },
  { word: "rush", phonetic: "/rʌʃ/", pos: "v.", meaning: "冲", grade: "junior", example: "Do not rush.", trans: "不要急。", tags: ["基础"], related: [] },
  { word: "real", phonetic: "/ˈriːəl/", pos: "adj.", meaning: "真实的", grade: "junior", example: "Is it real?", trans: "是真的吗？", tags: ["副词really"], related: [
    { type: "副词", word: "really" }
  ] },
  { word: "best", phonetic: "/best/", pos: "adj.", meaning: "最好的", grade: "junior", example: "This is the best day ever.", trans: "这是最好的一天。", tags: ["good的最高级"], related: [] },
  { word: "sheet", phonetic: "/ʃiːt/", pos: "n.", meaning: "床单", grade: "junior", example: "Change the sheet.", trans: "换床单。", tags: ["基础"], related: [] },
  { word: "geography", phonetic: "/dʒiˈɒɡrəfi/", pos: "n.", meaning: "地理", grade: "junior", example: "I like geography.", trans: "我喜欢地理。", tags: ["基础"], related: [] },
  { word: "dimension", phonetic: "/daɪˈmenʃn/", pos: "n.", meaning: "维度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "click", phonetic: "/klɪk/", pos: "v.", meaning: "点击", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "calendar", phonetic: "/ˈkælɪndə(r)/", pos: "n.", meaning: "日历", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "saint", phonetic: "/seɪnt/", pos: "n.", meaning: "圣人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "excite", phonetic: "/ɪkˈsaɪt/", pos: "v.", meaning: "使兴奋", grade: "junior", example: "The news excites me.", trans: "这消息让我兴奋。", tags: ["形容词excited/exciting"], related: [] },
  { word: "map", phonetic: "/mæp/", pos: "n.", meaning: "地图", grade: "junior", example: "Look at the map.", trans: "看地图。", tags: ["基础"], related: [] },
  { word: "high", phonetic: "/haɪ/", pos: "adj.", meaning: "高的", grade: "junior", example: "The mountain is high.", trans: "山很高。", tags: ["名词height"], related: [
    { type: "名词形式", word: "height" }
  ] },
  { word: "check", phonetic: "/tʃek/", pos: "v.", meaning: "检查", grade: "junior", example: "Check your answers.", trans: "检查你的答案。", tags: ["高频"], related: [] },
  { word: "corner", phonetic: "/ˈkɔːnə(r)/", pos: "n.", meaning: "角落", grade: "junior", example: "The box is in the corner.", trans: "盒子在角落里。", tags: ["基础"], related: [] },
  { word: "sit", phonetic: "/sɪt/", pos: "v.", meaning: "坐", grade: "junior", example: "Sit down.", trans: "坐下。", tags: ["过去式sat"], related: [
    { type: "过去式", word: "sat" }
  ] },
  { word: "external", phonetic: "/ɪkˈstɜːnl/", pos: "adj.", meaning: "外部的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "dance", phonetic: "/dɑːns/", pos: "v.", meaning: "跳舞", grade: "junior", example: "She dances well.", trans: "她舞跳得好。", tags: ["基础"], related: [] },
  { word: "leather", phonetic: "/ˈleðə(r)/", pos: "n.", meaning: "皮革", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "remote", phonetic: "/rɪˈməʊt/", pos: "adj.", meaning: "遥远的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "target", phonetic: "/ˈtɑːɡɪt/", pos: "n.", meaning: "目标", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "policeman", phonetic: "/pəˈliːsmən/", pos: "n.", meaning: "男警察", grade: "junior", example: "The policeman helped me.", trans: "警察帮了我。", tags: ["复数policemen"], related: [
    { type: "复数", word: "policemen" }
  ] },
  { word: "usual", phonetic: "/ˈjuːʒuəl/", pos: "adj.", meaning: "通常的", grade: "junior", example: "This is usual.", trans: "这很平常。", tags: ["反义词unusual"], related: [
    { type: "反义词", word: "unusual" },
    { type: "副词", word: "usually" }
  ] },
  { word: "yard", phonetic: "/jɑːd/", pos: "n.", meaning: "院子", grade: "junior", example: "Play in the yard.", trans: "在院子里玩。", tags: ["基础"], related: [] },
  { word: "raw", phonetic: "/rɔː/", pos: "adj.", meaning: "生的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "highway", phonetic: "/ˈhaɪweɪ/", pos: "n.", meaning: "公路", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rock", phonetic: "/rɒk/", pos: "n.", meaning: "岩石", grade: "junior", example: "Throw a rock.", trans: "扔石头。", tags: ["基础"], related: [] },
  { word: "train", phonetic: "/treɪn/", pos: "n.", meaning: "火车", grade: "junior", example: "Take the train.", trans: "坐火车。", tags: ["基础"], related: [] },
  { word: "favorite", phonetic: "/ˈfeɪvərɪt/", pos: "adj.", meaning: "最喜欢的", grade: "junior", example: "Blue is my favorite color.", trans: "蓝色是我最喜欢的颜色。", tags: ["基础"], related: [] },
  { word: "pollution", phonetic: "/pəˈluːʃn/", pos: "n.", meaning: "污染", grade: "junior", example: "Air pollution is bad.", trans: "空气污染很严重。", tags: ["不可数", "动词pollute"], related: [
    { type: "动词形式", word: "pollute" }
  ] },
  { word: "advice", phonetic: "/ədˈvaɪs/", pos: "n.", meaning: "建议；忠告", grade: "junior", example: "Can you give me some advice?", trans: "你能给我些建议吗？", tags: ["高频", "不可数", "易混advise"], related: [
    { type: "易混词", word: "advise" }
  ] },
  { word: "length", phonetic: "/leŋθ/", pos: "n.", meaning: "长度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "author", phonetic: "/ˈɔːθə(r)/", pos: "n.", meaning: "作者", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "carry", phonetic: "/ˈkæri/", pos: "v.", meaning: "搬运；携带", grade: "junior", example: "Can you carry this bag?", trans: "你能提这个包吗？", tags: ["短语carry out"], related: [] },
  { word: "document", phonetic: "/ˈdɒkjumənt/", pos: "n.", meaning: "文件", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "swing", phonetic: "/swɪŋ/", pos: "v.", meaning: "摇摆", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "funny", phonetic: "/ˈfʌni/", pos: "adj.", meaning: "有趣的；滑稽的", grade: "junior", example: "The joke is funny.", trans: "笑话很有趣。", tags: ["比较级funnier"], related: [
    { type: "比较级", word: "funnier" }
  ] },
  { word: "store", phonetic: "/stɔː(r)/", pos: "n.", meaning: "商店", grade: "junior", example: "Go to the store.", trans: "去商店。", tags: ["基础", "英式shop"], related: [] },
  { word: "degree", phonetic: "/dɪˈɡriː/", pos: "n.", meaning: "度；程度", grade: "junior", example: "It is 30 degrees today.", trans: "今天30度。", tags: ["高频"], related: [] },
  { word: "sex", phonetic: "/seks/", pos: "n.", meaning: "性别", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "without", phonetic: "/wɪˈðaʊt/", pos: "prep.", meaning: "没有", grade: "junior", example: "I cannot live without you.", trans: "没有你我活不下去。", tags: ["反义词with"], related: [
    { type: "反义词", word: "with" }
  ] },
  { word: "content", phonetic: "/ˈkɒntent/", pos: "n.", meaning: "内容", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "land", phonetic: "/lænd/", pos: "n.", meaning: "陆地；土地", grade: "junior", example: "The plane will land soon.", trans: "飞机即将降落。", tags: ["基础"], related: [] },
  { word: "evaluate", phonetic: "/ɪˈvæljueɪt/", pos: "v.", meaning: "评估", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "piece", phonetic: "/piːs/", pos: "n.", meaning: "片；块", grade: "junior", example: "A piece of cake.", trans: "一块蛋糕。", tags: ["基础"], related: [] },
  { word: "worse", phonetic: "/wɜːs/", pos: "adj.", meaning: "更坏的", grade: "junior", example: "It is getting worse.", trans: "越来越糟。", tags: ["bad的比较级"], related: [] },
  { word: "became", phonetic: "/bɪˈkeɪm/", pos: "v.", meaning: "成为(过去式)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "end", phonetic: "/end/", pos: "n./v.", meaning: "结束；末端", grade: "junior", example: "At the end of the road.", trans: "在路的尽头。", tags: ["基础", "短语in the end"], related: [] },
  { word: "doctor", phonetic: "/ˈdɒktə(r)/", pos: "n.", meaning: "医生", grade: "junior", example: "See a doctor.", trans: "去看医生。", tags: ["基础"], related: [] },
  { word: "media", phonetic: "/ˈmiːdiə/", pos: "n.", meaning: "媒体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "possible", phonetic: "/ˈpɒsəbl/", pos: "adj.", meaning: "可能的", grade: "junior", example: "It is possible.", trans: "有可能。", tags: ["反义词impossible"], related: [
    { type: "反义词", word: "impossible" }
  ] },
  { word: "dark", phonetic: "/dɑːk/", pos: "adj.", meaning: "黑暗的", grade: "junior", example: "It is getting dark.", trans: "天变黑了。", tags: ["基础", "反义词light"], related: [
    { type: "反义词", word: "light" }
  ] },
  { word: "plug", phonetic: "/plʌɡ/", pos: "n.", meaning: "插头", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "royal", phonetic: "/ˈrɔɪəl/", pos: "adj.", meaning: "皇家的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "conclusion", phonetic: "/kənˈkluːʒn/", pos: "n.", meaning: "结论", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "severe", phonetic: "/sɪˈvɪə(r)/", pos: "adj.", meaning: "严重的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "leave", phonetic: "/liːv/", pos: "v.", meaning: "离开；留下", grade: "junior", example: "I will leave tomorrow.", trans: "我明天离开。", tags: ["过去式left"], related: [
    { type: "过去式", word: "left" }
  ] },
  { word: "genuine", phonetic: "/ˈdʒenjuɪn/", pos: "adj.", meaning: "真正的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "transfer", phonetic: "/trænsˈfɜː(r)/", pos: "v.", meaning: "转移", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rope", phonetic: "/rəʊp/", pos: "n.", meaning: "绳子", grade: "junior", example: "Tie it with a rope.", trans: "用绳子绑。", tags: ["基础"], related: [] },
  { word: "success", phonetic: "/səkˈses/", pos: "n.", meaning: "成功", grade: "junior", example: "I wish you success.", trans: "祝你成功。", tags: ["不可数", "形容词successful"], related: [] },
  { word: "bondage", phonetic: "/ˈbɒndɪdʒ/", pos: "n.", meaning: "奴役", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "extent", phonetic: "/ɪkˈstent/", pos: "n.", meaning: "程度", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "several", phonetic: "/ˈsevrəl/", pos: "adj.", meaning: "几个", grade: "junior", example: "I have several pens.", trans: "我有几支笔。", tags: ["基础"], related: [] },
  { word: "opinion", phonetic: "/əˈpɪnjən/", pos: "n.", meaning: "观点", grade: "junior", example: "What is your opinion?", trans: "你的观点是什么？", tags: ["高频", "短语in my opinion"], related: [] },
  { word: "tongue", phonetic: "/tʌŋ/", pos: "n.", meaning: "舌头", grade: "junior", example: "Stick out your tongue.", trans: "伸出舌头。", tags: ["基础"], related: [] },
  { word: "trip", phonetic: "/trɪp/", pos: "n.", meaning: "旅行", grade: "junior", example: "We had a trip.", trans: "我们去旅行了。", tags: ["基础"], related: [] },
  { word: "hire", phonetic: "/ˈhaɪə(r)/", pos: "v.", meaning: "雇用", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "faith", phonetic: "/feɪθ/", pos: "n.", meaning: "信仰", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lemon", phonetic: "/ˈlemən/", pos: "n.", meaning: "柠檬", grade: "junior", example: "I like lemon tea.", trans: "我喜欢柠檬茶。", tags: ["基础"], related: [] },
  { word: "appreciate", phonetic: "/əˈpriːʃieɪt/", pos: "v.", meaning: "欣赏；感激", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "effect", phonetic: "/ɪˈfekt/", pos: "n.", meaning: "影响", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "row", phonetic: "/rəʊ/", pos: "n.", meaning: "排；行", grade: "junior", example: "Sit in the first row.", trans: "坐第一排。", tags: ["基础"], related: [] },
  { word: "childhood", phonetic: "/ˈtʃaɪldhʊd/", pos: "n.", meaning: "童年", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "watch", phonetic: "/wɒtʃ/", pos: "v.", meaning: "观看", grade: "junior", example: "Watch TV.", trans: "看电视。", tags: ["基础"], related: [] },
  { word: "leaf", phonetic: "/liːf/", pos: "n.", meaning: "叶子", grade: "junior", example: "Leaves fall in autumn.", trans: "秋天树叶落下。", tags: ["复数leaves"], related: [
    { type: "复数", word: "leaves" }
  ] },
  { word: "noodle", phonetic: "/ˈnuːdl/", pos: "n.", meaning: "面条", grade: "junior", example: "I like noodles.", trans: "我喜欢面条。", tags: ["常用复数"], related: [] },
  { word: "unable", phonetic: "/ʌnˈeɪbl/", pos: "adj.", meaning: "不能的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "hospital", phonetic: "/ˈhɒspɪtl/", pos: "n.", meaning: "医院", grade: "junior", example: "He is in the hospital.", trans: "他在医院。", tags: ["基础"], related: [] },
  { word: "all", phonetic: "/ɔːl/", pos: "adj.", meaning: "所有的；全部", grade: "junior", example: "All students passed.", trans: "所有学生都通过了。", tags: ["基础", "短语all over"], related: [] },
  { word: "disabled", phonetic: "/dɪsˈeɪbld/", pos: "adj.", meaning: "残疾的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "audience", phonetic: "/ˈɔːdiəns/", pos: "n.", meaning: "观众", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sleep", phonetic: "/sliːp/", pos: "v.", meaning: "睡觉", grade: "junior", example: "I sleep eight hours.", trans: "我睡八小时。", tags: ["过去式slept"], related: [
    { type: "过去式", word: "slept" }
  ] },
  { word: "responsibility", phonetic: "/rɪˌspɒnsəˈbɪləti/", pos: "n.", meaning: "责任", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shut", phonetic: "/ʃʌt/", pos: "v.", meaning: "关闭", grade: "junior", example: "Shut the door.", trans: "关门。", tags: ["过去式shut"], related: [
    { type: "过去式", word: "shut" }
  ] },
  { word: "realize", phonetic: "/ˈriːəlaɪz/", pos: "v.", meaning: "意识到", grade: "junior", example: "I realized my mistake.", trans: "我意识到了错误。", tags: ["英式realise"], related: [] },
  { word: "bold", phonetic: "/bəʊld/", pos: "adj.", meaning: "大胆的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "building", phonetic: "/ˈbɪldɪŋ/", pos: "n.", meaning: "建筑物", grade: "junior", example: "This is a tall building.", trans: "这是一栋高楼。", tags: ["基础"], related: [] },
  { word: "process", phonetic: "/ˈprəʊses/", pos: "n.", meaning: "过程", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "old", phonetic: "/əʊld/", pos: "adj.", meaning: "老的；旧的", grade: "junior", example: "He is old.", trans: "他老了。", tags: ["比较级older", "反义词new/young"], related: [
    { type: "比较级", word: "older" },
    { type: "反义词", word: "new/young" }
  ] },
  { word: "quick", phonetic: "/kwɪk/", pos: "adj.", meaning: "快的", grade: "junior", example: "Be quick!", trans: "快点！", tags: ["副词quickly"], related: [] },
  { word: "dynamic", phonetic: "/daɪˈnæmɪk/", pos: "adj.", meaning: "动态的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shadow", phonetic: "/ˈʃædəʊ/", pos: "n.", meaning: "阴影", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stress", phonetic: "/stres/", pos: "n.", meaning: "压力", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wine", phonetic: "/waɪn/", pos: "n.", meaning: "葡萄酒", grade: "junior", example: "I had a glass of wine.", trans: "我喝了一杯酒。", tags: ["不可数"], related: [] },
  { word: "hide", phonetic: "/haɪd/", pos: "v.", meaning: "藏", grade: "junior", example: "Hide behind the door.", trans: "藏在门后。", tags: ["过去式hid"], related: [
    { type: "过去式", word: "hid" }
  ] },
  { word: "surface", phonetic: "/ˈsɜːfɪs/", pos: "n.", meaning: "表面", grade: "junior", example: "The surface is smooth.", trans: "表面光滑。", tags: ["基础"], related: [] },
  { word: "array", phonetic: "/əˈreɪ/", pos: "n.", meaning: "排列", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "approval", phonetic: "/əˈpruːvl/", pos: "n.", meaning: "赞成", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "coin", phonetic: "/kɔɪn/", pos: "n.", meaning: "硬币", grade: "junior", example: "I found a coin on the street.", trans: "我在街上捡到一枚硬币。", tags: ["基础"], related: [] },
  { word: "ship", phonetic: "/ʃɪp/", pos: "n.", meaning: "船", grade: "junior", example: "The ship is large.", trans: "船很大。", tags: ["基础"], related: [] },
  { word: "reflect", phonetic: "/rɪˈflekt/", pos: "v.", meaning: "反射", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "impact", phonetic: "/ˈɪmpækt/", pos: "n.", meaning: "影响", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "forgive", phonetic: "/fəˈɡɪv/", pos: "v.", meaning: "原谅", grade: "junior", example: "Please forgive me.", trans: "请原谅我。", tags: ["过去式forgave"], related: [
    { type: "过去式", word: "forgave" }
  ] },
  { word: "wall", phonetic: "/wɔːl/", pos: "n.", meaning: "墙", grade: "junior", example: "The wall is white.", trans: "墙是白的。", tags: ["基础"], related: [] },
  { word: "paint", phonetic: "/peɪnt/", pos: "v.", meaning: "绘画；油漆", grade: "junior", example: "I like to paint.", trans: "我喜欢画画。", tags: ["名词painting"], related: [
    { type: "名词形式", word: "painting" }
  ] },
  { word: "humor", phonetic: "/ˈhjuːmə(r)/", pos: "n.", meaning: "幽默", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "phone", phonetic: "/fəʊn/", pos: "n.", meaning: "电话", grade: "junior", example: "Answer the phone.", trans: "接电话。", tags: ["基础", "全称telephone"], related: [] },
  { word: "side", phonetic: "/saɪd/", pos: "n.", meaning: "边", grade: "junior", example: "On the other side.", trans: "在另一边。", tags: ["基础"], related: [] },
  { word: "sense", phonetic: "/sens/", pos: "n.", meaning: "感觉；感官", grade: "junior", example: "I have a sense of humor.", trans: "我有幽默感。", tags: ["基础"], related: [] },
  { word: "salary", phonetic: "/ˈsæləri/", pos: "n.", meaning: "薪水", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "would", phonetic: "/wʊd/", pos: "aux.", meaning: "将（will过去式）", grade: "junior", example: "Would you like tea?", trans: "你想喝茶吗？", tags: ["基础", "表委婉"], related: [] },
  { word: "birthday", phonetic: "/ˈbɜːθdeɪ/", pos: "n.", meaning: "生日", grade: "junior", example: "Happy birthday to you!", trans: "祝你生日快乐！", tags: ["基础"], related: [] },
  { word: "bureau", phonetic: "/ˈbjʊərəʊ/", pos: "n.", meaning: "局", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "conservation", phonetic: "/ˌkɒnsəˈveɪʃn/", pos: "n.", meaning: "保护", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "compact", phonetic: "/kəmˈpækt/", pos: "adj.", meaning: "紧凑的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "careless", phonetic: "/ˈkeələs/", pos: "adj.", meaning: "粗心的", grade: "junior", example: "He is careless with his work.", trans: "他工作粗心。", tags: ["反义词careful"], related: [
    { type: "反义词", word: "careful" }
  ] },
  { word: "occur", phonetic: "/əˈkɜː(r)/", pos: "v.", meaning: "发生", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "daniel", phonetic: "/ˈdænjəl/", pos: "n.", meaning: "丹尼尔", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "crisis", phonetic: "/ˈkraɪsɪs/", pos: "n.", meaning: "危机", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "circuit", phonetic: "/ˈsɜːkɪt/", pos: "n.", meaning: "电路", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fun", phonetic: "/fʌn/", pos: "n.", meaning: "乐趣", grade: "junior", example: "Have fun!", trans: "玩得开心！", tags: ["不可数", "短语have fun"], related: [] },
  { word: "couple", phonetic: "/ˈkʌpl/", pos: "n.", meaning: "一对；夫妇", grade: "junior", example: "They are a happy couple.", trans: "他们是一对幸福的夫妻。", tags: ["短语a couple of"], related: [] },
  { word: "offset", phonetic: "/ˈɒfset/", pos: "v.", meaning: "抵消", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "difference", phonetic: "/ˈdɪfrəns/", pos: "n.", meaning: "不同；差异", grade: "junior", example: "What is the difference?", trans: "有什么不同？", tags: ["形容词different"], related: [] },
  { word: "class", phonetic: "/klɑːs/", pos: "n.", meaning: "班级；课", grade: "junior", example: "I am in Class One.", trans: "我在一班。", tags: ["复数classes"], related: [
    { type: "复数", word: "classes" }
  ] },
  { word: "holiday", phonetic: "/ˈhɒlədeɪ/", pos: "n.", meaning: "假日", grade: "junior", example: "We had a great holiday.", trans: "我们度过了愉快的假期。", tags: ["基础"], related: [] },
  { word: "rich", phonetic: "/rɪtʃ/", pos: "adj.", meaning: "富有的", grade: "junior", example: "He is very rich.", trans: "他很富有。", tags: ["反义词poor"], related: [
    { type: "反义词", word: "poor" }
  ] },
  { word: "miss", phonetic: "/mɪs/", pos: "v.", meaning: "错过；想念", grade: "junior", example: "I miss my family.", trans: "我想念家人。", tags: ["基础"], related: [] },
  { word: "lunch", phonetic: "/lʌntʃ/", pos: "n.", meaning: "午餐", grade: "junior", example: "I have lunch at twelve.", trans: "我十二点吃午饭。", tags: ["基础"], related: [] },
  { word: "coast", phonetic: "/kəʊst/", pos: "n.", meaning: "海岸", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "organize", phonetic: "/ˈɔːɡənaɪz/", pos: "v.", meaning: "组织", grade: "junior", example: "Organize a party.", trans: "组织聚会。", tags: ["名词organization"], related: [
    { type: "名词形式", word: "organization" }
  ] },
  { word: "input", phonetic: "/ˈɪnpʊt/", pos: "n.", meaning: "输入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "o'clock", phonetic: "/əˈklɒk/", pos: "n.", meaning: "……点钟", grade: "junior", example: "It is ten o'clock.", trans: "十点了。", tags: ["基础"], related: [] },
  { word: "text", phonetic: "/tekst/", pos: "n.", meaning: "文本", grade: "junior", example: "Read the text.", trans: "读课文。", tags: ["基础"], related: [] },
  { word: "iron", phonetic: "/ˈaɪən/", pos: "n.", meaning: "铁；熨斗", grade: "junior", example: "Iron the shirt.", trans: "熨衬衫。", tags: ["基础"], related: [] },
  { word: "robot", phonetic: "/ˈrəʊbɒt/", pos: "n.", meaning: "机器人", grade: "junior", example: "The robot is useful.", trans: "机器人很有用。", tags: ["基础"], related: [] },
  { word: "name", phonetic: "/neɪm/", pos: "n.", meaning: "名字", grade: "junior", example: "What is your name?", trans: "你叫什么名字？", tags: ["基础"], related: [] },
  { word: "capable", phonetic: "/ˈkeɪpəbl/", pos: "adj.", meaning: "有能力的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tube", phonetic: "/tjuːb/", pos: "n.", meaning: "管子", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "system", phonetic: "/ˈsɪstəm/", pos: "n.", meaning: "系统", grade: "junior", example: "This is a new system.", trans: "这是新系统。", tags: ["高频"], related: [] },
  { word: "major", phonetic: "/ˈmeɪdʒə(r)/", pos: "adj.", meaning: "主要的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "work", phonetic: "/wɜːk/", pos: "v.", meaning: "工作", grade: "junior", example: "I work hard.", trans: "我努力工作。", tags: ["基础"], related: [] },
  { word: "explore", phonetic: "/ɪkˈsplɔː(r)/", pos: "v.", meaning: "探索", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "detail", phonetic: "/ˈdiːteɪl/", pos: "n.", meaning: "细节", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "binding", phonetic: "/ˈbaɪndɪŋ/", pos: "n.", meaning: "装订", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ignore", phonetic: "/ɪɡˈnɔː(r)/", pos: "v.", meaning: "忽视", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "male", phonetic: "/meɪl/", pos: "adj.", meaning: "男性的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "gulf", phonetic: "/ɡʌlf/", pos: "n.", meaning: "海湾", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stop", phonetic: "/stɒp/", pos: "v.", meaning: "停止", grade: "junior", example: "Stop talking.", trans: "别说话。", tags: ["基础", "后接doing/to do"], related: [] },
  { word: "mail", phonetic: "/meɪl/", pos: "n./v.", meaning: "邮件；邮寄", grade: "junior", example: "Check your mail.", trans: "查收邮件。", tags: ["基础"], related: [] },
  { word: "community", phonetic: "/kəˈmjuːnəti/", pos: "n.", meaning: "社区", grade: "junior", example: "Our community is safe.", trans: "我们的社区很安全。", tags: ["高频"], related: [] },
  { word: "filter", phonetic: "/ˈfɪltə(r)/", pos: "n.", meaning: "过滤器", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "temperature", phonetic: "/ˈtemprətʃə(r)/", pos: "n.", meaning: "温度", grade: "junior", example: "The temperature is high.", trans: "温度很高。", tags: ["基础"], related: [] },
  { word: "golden", phonetic: "/ˈɡəʊldən/", pos: "adj.", meaning: "金色的", grade: "junior", example: "The golden sun sets.", trans: "金色的太阳落下。", tags: ["基础"], related: [] },
  { word: "lane", phonetic: "/leɪn/", pos: "n.", meaning: "小巷", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "neither", phonetic: "/ˈnaɪðə(r)/", pos: "pron.", meaning: "两者都不", grade: "junior", example: "Neither of us knows.", trans: "我们俩都不知道。", tags: ["短语neither...nor..."], related: [] },
  { word: "facing", phonetic: "/ˈfeɪsɪŋ/", pos: "n.", meaning: "饰面", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cartoon", phonetic: "/kɑːˈtuːn/", pos: "n.", meaning: "卡通", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "due", phonetic: "/djuː/", pos: "adj.", meaning: "到期的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "music", phonetic: "/ˈmjuːzɪk/", pos: "n.", meaning: "音乐", grade: "junior", example: "I love music.", trans: "我喜欢音乐。", tags: ["不可数"], related: [] },
  { word: "glass", phonetic: "/ɡlɑːs/", pos: "n.", meaning: "玻璃；杯子", grade: "junior", example: "A glass of water.", trans: "一杯水。", tags: ["不可数/复数glasses"], related: [] },
  { word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", pos: "v./n.", meaning: "交换", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "republic", phonetic: "/rɪˈpʌblɪk/", pos: "n.", meaning: "共和国", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pear", phonetic: "/peə(r)/", pos: "n.", meaning: "梨", grade: "junior", example: "I had a pear.", trans: "我吃了个梨。", tags: ["基础"], related: [] },
  { word: "enable", phonetic: "/ɪˈneɪbl/", pos: "v.", meaning: "使能够", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "update", phonetic: "/ˌʌpˈdeɪt/", pos: "v.", meaning: "更新", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "result", phonetic: "/rɪˈzʌlt/", pos: "n.", meaning: "结果", grade: "junior", example: "What is the result?", trans: "结果是什么？", tags: ["基础", "短语as a result"], related: [] },
  { word: "library", phonetic: "/ˈlaɪbrəri/", pos: "n.", meaning: "图书馆", grade: "junior", example: "I study in the library.", trans: "我在图书馆学习。", tags: ["基础"], related: [] },
  { word: "dictionary", phonetic: "/ˈdɪkʃənri/", pos: "n.", meaning: "词典", grade: "junior", example: "Look it up in the dictionary.", trans: "在词典里查一下。", tags: ["基础"], related: [] },
  { word: "deep", phonetic: "/diːp/", pos: "adj.", meaning: "深的", grade: "junior", example: "The river is deep.", trans: "这条河很深。", tags: ["反义词shallow"], related: [
    { type: "反义词", word: "shallow" }
  ] },
  { word: "satisfaction", phonetic: "/ˌsætɪsˈfækʃn/", pos: "n.", meaning: "满意", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "comment", phonetic: "/ˈkɒment/", pos: "n./v.", meaning: "评论", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "topic", phonetic: "/ˈtɒpɪk/", pos: "n.", meaning: "话题", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "control", phonetic: "/kənˈtrəʊl/", pos: "v./n.", meaning: "控制", grade: "junior", example: "Control your temper.", trans: "控制你的脾气。", tags: ["高频"], related: [] },
  { word: "network", phonetic: "/ˈnetwɜːk/", pos: "n.", meaning: "网络", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lens", phonetic: "/lenz/", pos: "n.", meaning: "镜头", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "plan", phonetic: "/plæn/", pos: "n./v.", meaning: "计划", grade: "junior", example: "Make a plan.", trans: "制定计划。", tags: ["基础"], related: [] },
  { word: "skin", phonetic: "/skɪn/", pos: "n.", meaning: "皮肤", grade: "junior", example: "Her skin is soft.", trans: "她皮肤柔软。", tags: ["不可数"], related: [] },
  { word: "grant", phonetic: "/ɡrɑːnt/", pos: "v.", meaning: "授予", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "focus", phonetic: "/ˈfəʊkəs/", pos: "v.", meaning: "集中", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "landscape", phonetic: "/ˈlændskeɪp/", pos: "n.", meaning: "风景", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "recite", phonetic: "/rɪˈsaɪt/", pos: "v.", meaning: "背诵", grade: "junior", example: "Recite the poem.", trans: "背诵这首诗。", tags: ["基础"], related: [] },
  { word: "guarantee", phonetic: "/ˌɡærənˈtiː/", pos: "v.", meaning: "保证", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cable", phonetic: "/ˈkeɪbl/", pos: "n.", meaning: "电缆", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "generation", phonetic: "/ˌdʒenəˈreɪʃn/", pos: "n.", meaning: "一代", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "start", phonetic: "/stɑːt/", pos: "v.", meaning: "开始", grade: "junior", example: "Start the car.", trans: "发动汽车。", tags: ["基础", "反义词end"], related: [
    { type: "反义词", word: "end" }
  ] },
  { word: "permanent", phonetic: "/ˈpɜːmənənt/", pos: "adj.", meaning: "永久的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "kiss", phonetic: "/kɪs/", pos: "v.", meaning: "吻", grade: "junior", example: "She kissed her baby.", trans: "她吻了她的宝宝。", tags: ["基础"], related: [] },
  { word: "premier", phonetic: "/ˈpremiə(r)/", pos: "n.", meaning: "总理", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wear", phonetic: "/weə(r)/", pos: "v.", meaning: "穿；戴", grade: "junior", example: "Wear a hat.", trans: "戴帽子。", tags: ["过去式wore", "过去分词worn"], related: [
    { type: "过去式", word: "wore" },
    { type: "过去分词", word: "worn" }
  ] },
  { word: "champion", phonetic: "/ˈtʃæmpiən/", pos: "n.", meaning: "冠军", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fountain", phonetic: "/ˈfaʊntən/", pos: "n.", meaning: "喷泉", grade: "junior", example: "The fountain is in the park.", trans: "喷泉在公园里。", tags: ["基础"], related: [] },
  { word: "assist", phonetic: "/əˈsɪst/", pos: "v.", meaning: "帮助", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "chief", phonetic: "/tʃiːf/", pos: "n.", meaning: "首领", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "might", phonetic: "/maɪt/", pos: "aux.", meaning: "可能", grade: "junior", example: "I might go.", trans: "我可能去。", tags: ["may的过去式"], related: [] },
  { word: "assistance", phonetic: "/əˈsɪstəns/", pos: "n.", meaning: "帮助", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "image", phonetic: "/ˈɪmɪdʒ/", pos: "n.", meaning: "图像", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lead", phonetic: "/liːd/", pos: "v.", meaning: "领导；引导", grade: "junior", example: "She leads the team.", trans: "她领导团队。", tags: ["过去式led", "名词leader"], related: [
    { type: "过去式", word: "led" },
    { type: "名词形式", word: "leader" }
  ] },
  { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", pos: "n.", meaning: "挑战", grade: "junior", example: "Life is full of challenges.", trans: "生活充满挑战。", tags: ["高频"], related: [] },
  { word: "copy", phonetic: "/ˈkɒpi/", pos: "v.", meaning: "复制；抄写", grade: "junior", example: "Copy the sentence.", trans: "抄写这个句子。", tags: ["高频"], related: [] },
  { word: "lamb", phonetic: "/læm/", pos: "n.", meaning: "羔羊", grade: "junior", example: "The lamb is cute.", trans: "羔羊很可爱。", tags: ["基础"], related: [] },
  { word: "suck", phonetic: "/sʌk/", pos: "v.", meaning: "吸", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rose", phonetic: "/rəʊz/", pos: "n.", meaning: "玫瑰", grade: "junior", example: "I love roses.", trans: "我喜欢玫瑰。", tags: ["基础"], related: [] },
  { word: "matter", phonetic: "/ˈmætə(r)/", pos: "n./v.", meaning: "事情；要紧", grade: "junior", example: "What is the matter?", trans: "怎么了？", tags: ["高频"], related: [] },
  { word: "lucky", phonetic: "/ˈlʌki/", pos: "adj.", meaning: "幸运的", grade: "junior", example: "I am lucky today.", trans: "我今天很幸运。", tags: ["名词luck"], related: [
    { type: "名词形式", word: "luck" }
  ] },
  { word: "chemistry", phonetic: "/ˈkemɪstri/", pos: "n.", meaning: "化学", grade: "junior", example: "Chemistry is my favorite subject.", trans: "化学是我最喜欢的科目。", tags: ["基础"], related: [] },
  { word: "accessible", phonetic: "/əkˈsesəbl/", pos: "adj.", meaning: "可接近的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "independent", phonetic: "/ˌɪndɪˈpendənt/", pos: "adj.", meaning: "独立的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "crime", phonetic: "/kraɪm/", pos: "n.", meaning: "犯罪", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "compare", phonetic: "/kəmˈpeə(r)/", pos: "v.", meaning: "比较", grade: "junior", example: "Compare the two answers.", trans: "比较这两个答案。", tags: ["短语compare with"], related: [] },
  { word: "accident", phonetic: "/ˈæksɪdənt/", pos: "n.", meaning: "事故；意外", grade: "junior", example: "He had a car accident.", trans: "他出了车祸。", tags: ["高频", "短语by accident"], related: [] },
  { word: "plastic", phonetic: "/ˈplæstɪk/", pos: "n.", meaning: "塑料", grade: "junior", example: "This is plastic.", trans: "这是塑料的。", tags: ["不可数"], related: [] },
  { word: "forth", phonetic: "/fɔːθ/", pos: "adv.", meaning: "向前", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rice", phonetic: "/raɪs/", pos: "n.", meaning: "米饭", grade: "junior", example: "I eat rice every day.", trans: "我每天吃米饭。", tags: ["不可数"], related: [] },
  { word: "earn", phonetic: "/ɜːn/", pos: "v.", meaning: "赚；挣得", grade: "junior", example: "He earns a lot of money.", trans: "他赚很多钱。", tags: ["高频"], related: [] },
  { word: "asleep", phonetic: "/əˈsliːp/", pos: "adj.", meaning: "睡着的", grade: "junior", example: "The baby is asleep.", trans: "宝宝睡着了。", tags: ["表语形容词", "短语fall asleep"], related: [] },
  { word: "wife", phonetic: "/waɪf/", pos: "n.", meaning: "妻子", grade: "junior", example: "She is my wife.", trans: "她是我妻子。", tags: ["复数wives"], related: [
    { type: "复数", word: "wives" }
  ] },
  { word: "factor", phonetic: "/ˈfæktə(r)/", pos: "n.", meaning: "因素", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "glance", phonetic: "/ɡlɑːns/", pos: "v.", meaning: "扫视", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "reason", phonetic: "/ˈriːzn/", pos: "n.", meaning: "原因", grade: "junior", example: "What is the reason?", trans: "原因是什么？", tags: ["高频"], related: [] },
  { word: "elder", phonetic: "/ˈeldə(r)/", pos: "adj.", meaning: "年长的", grade: "junior", example: "My elder brother is a doctor.", trans: "我哥哥是医生。", tags: ["基础"], related: [] },
  { word: "proper", phonetic: "/ˈprɒpə(r)/", pos: "adj.", meaning: "合适的", grade: "junior", example: "Use proper words.", trans: "用合适的词。", tags: ["副词properly"], related: [] },
  { word: "gain", phonetic: "/ɡeɪn/", pos: "v.", meaning: "获得", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "schedule", phonetic: "/ˈʃedjuːl/", pos: "n.", meaning: "时间表", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "appeal", phonetic: "/əˈpiːl/", pos: "v./n.", meaning: "呼吁；吸引", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "discover", phonetic: "/dɪˈskʌvə(r)/", pos: "v.", meaning: "发现", grade: "junior", example: "Columbus discovered America.", trans: "哥伦布发现了美洲。", tags: ["名词discovery"], related: [
    { type: "名词形式", word: "discovery" }
  ] },
  { word: "fire", phonetic: "/ˈfaɪə(r)/", pos: "n.", meaning: "火", grade: "junior", example: "Put out the fire.", trans: "把火扑灭。", tags: ["基础"], related: [] },
  { word: "fine", phonetic: "/faɪn/", pos: "adj.", meaning: "好的；晴朗的", grade: "junior", example: "It is a fine day.", trans: "今天天气好。", tags: ["基础"], related: [] },
  { word: "effort", phonetic: "/ˈefət/", pos: "n.", meaning: "努力", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "well", phonetic: "/wel/", pos: "adv.", meaning: "好", grade: "junior", example: "She sings well.", trans: "她唱得好。", tags: ["比较级better", "最高级best"], related: [
    { type: "比较级", word: "better" },
    { type: "最高级", word: "best" },
    { type: "形容词", word: "good" }
  ] },
  { word: "crew", phonetic: "/kruː/", pos: "n.", meaning: "船员", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "initial", phonetic: "/ɪˈnɪʃl/", pos: "adj.", meaning: "最初的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "behaviour", phonetic: "/bɪˈheɪvjə(r)/", pos: "n.", meaning: "行为", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "simple", phonetic: "/ˈsɪmpl/", pos: "adj.", meaning: "简单的", grade: "junior", example: "This is simple.", trans: "这很简单。", tags: ["反义词difficult"], related: [
    { type: "反义词", word: "difficult" }
  ] },
  { word: "internal", phonetic: "/ɪnˈtɜːnl/", pos: "adj.", meaning: "内部的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "protect", phonetic: "/prəˈtekt/", pos: "v.", meaning: "保护", grade: "junior", example: "Protect the environment.", trans: "保护环境。", tags: ["名词protection"], related: [
    { type: "名词形式", word: "protection" }
  ] },
  { word: "percent", phonetic: "/pəˈsent/", pos: "n.", meaning: "百分之", grade: "junior", example: "Fifty percent passed.", trans: "百分之五十通过了。", tags: ["高频"], related: [] },
  { word: "theme", phonetic: "/θiːm/", pos: "n.", meaning: "主题", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "drum", phonetic: "/drʌm/", pos: "n.", meaning: "鼓", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "among", phonetic: "/əˈmʌŋ/", pos: "prep.", meaning: "在……之中", grade: "junior", example: "She is popular among us.", trans: "她在我们中很受欢迎。", tags: ["介词", "易混between"], related: [
    { type: "易混词", word: "between" }
  ] },
  { word: "mass", phonetic: "/mæs/", pos: "n.", meaning: "大量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "kid", phonetic: "/kɪd/", pos: "n.", meaning: "小孩", grade: "junior", example: "The kids are playing.", trans: "孩子们在玩。", tags: ["基础"], related: [] },
  { word: "play", phonetic: "/pleɪ/", pos: "v.", meaning: "玩；播放", grade: "junior", example: "I play football.", trans: "我踢足球。", tags: ["基础"], related: [] },
  { word: "carrot", phonetic: "/ˈkærət/", pos: "n.", meaning: "胡萝卜", grade: "junior", example: "Rabbits like carrots.", trans: "兔子喜欢胡萝卜。", tags: ["基础"], related: [] },
  { word: "housework", phonetic: "/ˈhaʊswɜːk/", pos: "n.", meaning: "家务", grade: "junior", example: "I do housework on weekends.", trans: "我周末做家务。", tags: ["不可数"], related: [] },
  { word: "program", phonetic: "/ˈprəʊɡræm/", pos: "n.", meaning: "程序；节目", grade: "junior", example: "Watch the program.", trans: "看节目。", tags: ["英式programme"], related: [] },
  { word: "anyone", phonetic: "/ˈeniwʌn/", pos: "pron.", meaning: "任何人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bridge", phonetic: "/brɪdʒ/", pos: "n.", meaning: "桥", grade: "junior", example: "Cross the bridge.", trans: "过桥。", tags: ["基础"], related: [] },
  { word: "volunteer", phonetic: "/ˌvɒlənˈtɪə(r)/", pos: "n./v.", meaning: "志愿者；自愿", grade: "junior", example: "I want to volunteer.", trans: "我想做志愿者。", tags: ["基础"], related: [] },
  { word: "death", phonetic: "/deθ/", pos: "n.", meaning: "死亡", grade: "junior", example: "His death was sudden.", trans: "他的死很突然。", tags: ["动词die"], related: [
    { type: "动词形式", word: "die" }
  ] },
  { word: "power", phonetic: "/ˈpaʊə(r)/", pos: "n.", meaning: "力量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pancake", phonetic: "/ˈpænkeɪk/", pos: "n.", meaning: "煎饼", grade: "junior", example: "I love pancakes.", trans: "我喜欢煎饼。", tags: ["复数pancakes"], related: [
    { type: "复数", word: "pancakes" }
  ] },
  { word: "establish", phonetic: "/ɪˈstæblɪʃ/", pos: "v.", meaning: "建立", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "basic", phonetic: "/ˈbeɪsɪk/", pos: "adj.", meaning: "基本的", grade: "junior", example: "We need basic skills.", trans: "我们需要基本技能。", tags: ["高频"], related: [] },
  { word: "branch", phonetic: "/brɑːntʃ/", pos: "n.", meaning: "树枝；分支", grade: "junior", example: "The branch broke.", trans: "树枝断了。", tags: ["复数branches"], related: [
    { type: "复数", word: "branches" }
  ] },
  { word: "child", phonetic: "/tʃaɪld/", pos: "n.", meaning: "孩子", grade: "junior", example: "The child is playing.", trans: "孩子在玩。", tags: ["复数children"], related: [
    { type: "复数", word: "children" }
  ] },
  { word: "char", phonetic: "/tʃɑː(r)/", pos: "v.", meaning: "烧焦", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "organic", phonetic: "/ɔːˈɡænɪk/", pos: "adj.", meaning: "有机的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "respect", phonetic: "/rɪˈspekt/", pos: "v./n.", meaning: "尊重", grade: "junior", example: "Respect your elders.", trans: "尊重长辈。", tags: ["基础"], related: [] },
  { word: "language", phonetic: "/ˈlæŋɡwɪdʒ/", pos: "n.", meaning: "语言", grade: "junior", example: "English is a language.", trans: "英语是一种语言。", tags: ["基础"], related: [] },
  { word: "indeed", phonetic: "/ɪnˈdiːd/", pos: "adv.", meaning: "确实", grade: "junior", example: "It is indeed true.", trans: "这确实是真的。", tags: ["高频"], related: [] },
  { word: "display", phonetic: "/dɪˈspleɪ/", pos: "v./n.", meaning: "展示", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "repeat", phonetic: "/rɪˈpiːt/", pos: "v.", meaning: "重复", grade: "junior", example: "Repeat after me.", trans: "跟我重复。", tags: ["基础"], related: [] },
  { word: "draw", phonetic: "/drɔː/", pos: "v.", meaning: "画；拉", grade: "junior", example: "I like to draw pictures.", trans: "我喜欢画画。", tags: ["过去式drew"], related: [
    { type: "过去式", word: "drew" }
  ] },
  { word: "sun", phonetic: "/sʌn/", pos: "n.", meaning: "太阳", grade: "junior", example: "The sun is bright.", trans: "太阳很亮。", tags: ["基础", "同音son"], related: [
    { type: "同音词", word: "son" }
  ] },
  { word: "candidate", phonetic: "/ˈkændɪdət/", pos: "n.", meaning: "候选人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bright", phonetic: "/braɪt/", pos: "adj.", meaning: "明亮的；聪明的", grade: "junior", example: "The sun is bright.", trans: "阳光明媚。", tags: ["名词brightness"], related: [
    { type: "名词形式", word: "brightness" }
  ] },
  { word: "implement", phonetic: "/ˈɪmplɪment/", pos: "v.", meaning: "实施", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "find", phonetic: "/faɪnd/", pos: "v.", meaning: "找到；发现", grade: "junior", example: "I found my keys.", trans: "我找到了钥匙。", tags: ["过去式found", "短语find out"], related: [
    { type: "过去式", word: "found" }
  ] },
  { word: "species", phonetic: "/ˈspiːʃiːz/", pos: "n.", meaning: "物种", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shop", phonetic: "/ʃɒp/", pos: "n.", meaning: "商店", grade: "junior", example: "Go to the shop.", trans: "去商店。", tags: ["基础"], related: [] },
  { word: "gate", phonetic: "/ɡeɪt/", pos: "n.", meaning: "大门", grade: "junior", example: "Wait at the gate.", trans: "在大门口等。", tags: ["基础"], related: [] },
  { word: "improve", phonetic: "/ɪmˈpruːv/", pos: "v.", meaning: "提高；改善", grade: "junior", example: "I want to improve my English.", trans: "我想提高英语。", tags: ["名词improvement"], related: [
    { type: "名词形式", word: "improvement" }
  ] },
  { word: "conservative", phonetic: "/kənˈsɜːvətɪv/", pos: "adj.", meaning: "保守的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wonderful", phonetic: "/ˈwʌndəfl/", pos: "adj.", meaning: "精彩的", grade: "junior", example: "It is wonderful!", trans: "太棒了！", tags: ["基础"], related: [] },
  { word: "academy", phonetic: "/əˈkædəmi/", pos: "n.", meaning: "学院", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "polite", phonetic: "/pəˈlaɪt/", pos: "adj.", meaning: "有礼貌的", grade: "junior", example: "He is polite.", trans: "他有礼貌。", tags: ["反义词impolite"], related: [
    { type: "反义词", word: "impolite" }
  ] },
  { word: "pack", phonetic: "/pæk/", pos: "v.", meaning: "打包", grade: "junior", example: "Pack your bags.", trans: "打包行李。", tags: ["基础"], related: [] },
  { word: "gallery", phonetic: "/ˈɡæləri/", pos: "n.", meaning: "画廊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "allow", phonetic: "/əˈlaʊ/", pos: "v.", meaning: "允许", grade: "junior", example: "My parents allow me to play.", trans: "父母允许我玩。", tags: ["高频", "短语allow sb to do"], related: [] },
  { word: "cheat", phonetic: "/tʃiːt/", pos: "v.", meaning: "欺骗", grade: "junior", example: "Do not cheat in exams.", trans: "考试不要作弊。", tags: ["高频"], related: [] },
  { word: "approximately", phonetic: "/əˈprɒksɪmətli/", pos: "adv.", meaning: "大约", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "most", phonetic: "/məʊst/", pos: "adj.", meaning: "最多的", grade: "junior", example: "Most students agree.", trans: "大多数学生同意。", tags: ["最高级"], related: [] },
  { word: "portable", phonetic: "/ˈpɔːtəbl/", pos: "adj.", meaning: "便携的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "succeed", phonetic: "/səkˈsiːd/", pos: "v.", meaning: "成功", grade: "junior", example: "He succeeded.", trans: "他成功了。", tags: ["名词success", "短语succeed in"], related: [
    { type: "名词形式", word: "success" }
  ] },
  { word: "tree", phonetic: "/triː/", pos: "n.", meaning: "树", grade: "junior", example: "The tree is tall.", trans: "树很高。", tags: ["基础"], related: [] },
  { word: "mend", phonetic: "/mend/", pos: "v.", meaning: "修补", grade: "junior", example: "Mend the shirt.", trans: "补衬衫。", tags: ["基础"], related: [] },
  { word: "throat", phonetic: "/θrəʊt/", pos: "n.", meaning: "喉咙", grade: "junior", example: "My throat hurts.", trans: "我喉咙疼。", tags: ["基础"], related: [] },
  { word: "meeting", phonetic: "/ˈmiːtɪŋ/", pos: "n.", meaning: "会议", grade: "junior", example: "We have a meeting.", trans: "我们有个会议。", tags: ["基础"], related: [] },
  { word: "beat", phonetic: "/biːt/", pos: "v.", meaning: "打；打败", grade: "junior", example: "He beat me at chess.", trans: "他下棋赢了我。", tags: ["过去式beat", "过去分词beaten"], related: [
    { type: "过去式", word: "beat" },
    { type: "过去分词", word: "beaten" }
  ] },
  { word: "busy", phonetic: "/ˈbɪzi/", pos: "adj.", meaning: "忙碌的", grade: "junior", example: "I am busy with my homework.", trans: "我忙于作业。", tags: ["短语be busy with"], related: [] },
  { word: "possibility", phonetic: "/ˌpɒsəˈbɪləti/", pos: "n.", meaning: "可能性", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "letter", phonetic: "/ˈletə(r)/", pos: "n.", meaning: "信；字母", grade: "junior", example: "I got a letter.", trans: "我收到一封信。", tags: ["基础"], related: [] },
  { word: "celebrity", phonetic: "/səˈlebrəti/", pos: "n.", meaning: "名人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "being", phonetic: "/ˈbiːɪŋ/", pos: "n.", meaning: "存在；生物", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "roll", phonetic: "/rəʊl/", pos: "v.", meaning: "滚动", grade: "junior", example: "Roll the ball.", trans: "滚动球。", tags: ["基础"], related: [] },
  { word: "handle", phonetic: "/ˈhændl/", pos: "v.", meaning: "处理", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "ordinary", phonetic: "/ˈɔːdnri/", pos: "adj.", meaning: "普通的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "jeans", phonetic: "/dʒiːnz/", pos: "n.", meaning: "牛仔裤", grade: "junior", example: "He wears jeans.", trans: "他穿牛仔裤。", tags: ["只有复数"], related: [] },
  { word: "wrong", phonetic: "/rɒŋ/", pos: "adj.", meaning: "错误的", grade: "junior", example: "You are wrong.", trans: "你错了。", tags: ["反义词right"], related: [
    { type: "反义词", word: "right" }
  ] },
  { word: "dialogue", phonetic: "/ˈdaɪəlɒɡ/", pos: "n.", meaning: "对话", grade: "junior", example: "Read the dialogue.", trans: "读这段对话。", tags: ["美式dialog"], related: [] },
  { word: "silver", phonetic: "/ˈsɪlvə(r)/", pos: "n.", meaning: "银", grade: "junior", example: "It is made of silver.", trans: "银制的。", tags: ["不可数"], related: [] },
  { word: "browse", phonetic: "/braʊz/", pos: "v.", meaning: "浏览", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bin", phonetic: "/bɪn/", pos: "n.", meaning: "垃圾箱", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "clear", phonetic: "/klɪə(r)/", pos: "adj.", meaning: "清楚的；清澈的", grade: "junior", example: "The water is clear.", trans: "水很清澈。", tags: ["短语clear up"], related: [] },
  { word: "OK", phonetic: "/ˌəʊˈkeɪ/", pos: "int.", meaning: "好的", grade: "junior", example: "OK, let us go.", trans: "好，走吧。", tags: ["基础"], related: [] },
  { word: "hero", phonetic: "/ˈhɪərəʊ/", pos: "n.", meaning: "英雄", grade: "junior", example: "He is a hero.", trans: "他是个英雄。", tags: ["复数heroes"], related: [
    { type: "复数", word: "heroes" }
  ] },
  { word: "peace", phonetic: "/piːs/", pos: "n.", meaning: "和平", grade: "junior", example: "We want peace.", trans: "我们要和平。", tags: ["不可数", "形容词peaceful"], related: [] },
  { word: "mark", phonetic: "/mɑːk/", pos: "n./v.", meaning: "标记；分数", grade: "junior", example: "Mark the answer.", trans: "标出答案。", tags: ["基础"], related: [] },
  { word: "blackboard", phonetic: "/ˈblækbɔːd/", pos: "n.", meaning: "黑板", grade: "junior", example: "Look at the blackboard.", trans: "看黑板。", tags: ["基础"], related: [] },
  { word: "associate", phonetic: "/əˈsəʊʃieɪt/", pos: "v.", meaning: "联想", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "total", phonetic: "/ˈtəʊtl/", pos: "adj.", meaning: "总的", grade: "junior", example: "The total is 100.", trans: "总共100。", tags: ["基础"], related: [] },
  { word: "commercial", phonetic: "/kəˈmɜːʃl/", pos: "adj.", meaning: "商业的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "apply", phonetic: "/əˈplaɪ/", pos: "v.", meaning: "申请", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "merchant", phonetic: "/ˈmɜːtʃənt/", pos: "n.", meaning: "商人", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pair", phonetic: "/peə(r)/", pos: "n.", meaning: "一双", grade: "junior", example: "A pair of shoes.", trans: "一双鞋。", tags: ["基础"], related: [] },
  { word: "bit", phonetic: "/bɪt/", pos: "n.", meaning: "一点；少量", grade: "junior", example: "Wait a bit.", trans: "等一下。", tags: ["高频", "短语a bit of"], related: [] },
  { word: "union", phonetic: "/ˈjuːniən/", pos: "n.", meaning: "联盟", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stay", phonetic: "/steɪ/", pos: "v.", meaning: "停留", grade: "junior", example: "Stay here.", trans: "待在这。", tags: ["基础"], related: [] },
  { word: "quantity", phonetic: "/ˈkwɒntəti/", pos: "n.", meaning: "数量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "suggest", phonetic: "/səˈdʒest/", pos: "v.", meaning: "建议", grade: "junior", example: "I suggest going now.", trans: "我建议现在走。", tags: ["后接doing", "名词suggestion"], related: [
    { type: "名词形式", word: "suggestion" }
  ] },
  { word: "tomato", phonetic: "/təˈmɑːtəʊ/", pos: "n.", meaning: "西红柿", grade: "junior", example: "I like tomatoes.", trans: "我喜欢西红柿。", tags: ["复数tomatoes"], related: [
    { type: "复数", word: "tomatoes" }
  ] },
  { word: "nervous", phonetic: "/ˈnɜːvəs/", pos: "adj.", meaning: "紧张的", grade: "junior", example: "I feel nervous.", trans: "我感到紧张。", tags: ["名词nerve"], related: [
    { type: "名词形式", word: "nerve" }
  ] },
  { word: "convert", phonetic: "/kənˈvɜːt/", pos: "v.", meaning: "转变", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "obtain", phonetic: "/əbˈteɪn/", pos: "v.", meaning: "获得", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "bad", phonetic: "/bæd/", pos: "adj.", meaning: "坏的；糟糕的", grade: "junior", example: "Smoking is bad for you.", trans: "吸烟对你有害。", tags: ["比较级worse", "最高级worst"], related: [
    { type: "比较级", word: "worse" },
    { type: "最高级", word: "worst" },
    { type: "副词", word: "badly" }
  ] },
  { word: "lab", phonetic: "/læb/", pos: "n.", meaning: "实验室", grade: "junior", example: "We do experiments in the lab.", trans: "我们在实验室做实验。", tags: ["基础", "全称laboratory"], related: [] },
  { word: "railway", phonetic: "/ˈreɪlweɪ/", pos: "n.", meaning: "铁路", grade: "junior", example: "The railway is long.", trans: "铁路很长。", tags: ["基础"], related: [] },
  { word: "belong", phonetic: "/bɪˈlɒŋ/", pos: "v.", meaning: "属于", grade: "junior", example: "This book belongs to me.", trans: "这本书属于我。", tags: ["短语belong to"], related: [] },
  { word: "former", phonetic: "/ˈfɔːmə(r)/", pos: "adj.", meaning: "以前的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "entire", phonetic: "/ɪnˈtaɪə(r)/", pos: "adj.", meaning: "整个的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tower", phonetic: "/ˈtaʊə(r)/", pos: "n.", meaning: "塔", grade: "junior", example: "The tower is tall.", trans: "塔很高。", tags: ["基础"], related: [] },
  { word: "wound", phonetic: "/wuːnd/", pos: "n.", meaning: "伤口", grade: "junior", example: "He has a wound.", trans: "他有个伤口。", tags: ["基础"], related: [] },
  { word: "coffee", phonetic: "/ˈkɒfi/", pos: "n.", meaning: "咖啡", grade: "junior", example: "I drink coffee every morning.", trans: "我每天早上喝咖啡。", tags: ["不可数"], related: [] },
  { word: "uncle", phonetic: "/ˈʌŋkl/", pos: "n.", meaning: "叔叔；舅舅", grade: "junior", example: "My uncle is funny.", trans: "我叔叔很有趣。", tags: ["基础"], related: [] },
  { word: "father", phonetic: "/ˈfɑːðə(r)/", pos: "n.", meaning: "父亲", grade: "junior", example: "My father is a teacher.", trans: "我爸爸是老师。", tags: ["基础"], related: [] },
  { word: "deliver", phonetic: "/dɪˈlɪvə(r)/", pos: "v.", meaning: "递送", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "room", phonetic: "/ruːm/", pos: "n.", meaning: "房间", grade: "junior", example: "This is my room.", trans: "这是我的房间。", tags: ["基础"], related: [] },
  { word: "product", phonetic: "/ˈprɒdʌkt/", pos: "n.", meaning: "产品", grade: "junior", example: "This is a new product.", trans: "这是新产品。", tags: ["高频"], related: [] },
  { word: "usually", phonetic: "/ˈjuːʒuəli/", pos: "adv.", meaning: "通常", grade: "junior", example: "I usually walk to school.", trans: "我通常走路上学。", tags: ["频率副词"], related: [
    { type: "形容词", word: "usual" }
  ] },
  { word: "clause", phonetic: "/klɔːz/", pos: "n.", meaning: "从句", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fever", phonetic: "/ˈfiːvə(r)/", pos: "n.", meaning: "发烧", grade: "junior", example: "I have a fever.", trans: "我发烧了。", tags: ["短语have a fever"], related: [] },
  { word: "pineapple", phonetic: "/ˈpaɪnæpl/", pos: "n.", meaning: "菠萝", grade: "junior", example: "I like pineapple.", trans: "我喜欢菠萝。", tags: ["基础"], related: [] },
  { word: "feature", phonetic: "/ˈfiːtʃə(r)/", pos: "n.", meaning: "特征", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "many", phonetic: "/ˈmeni/", pos: "adj.", meaning: "许多", grade: "junior", example: "Many people came.", trans: "很多人来了。", tags: ["修饰可数", "反义词few"], related: [
    { type: "反义词", word: "few" }
  ] },
  { word: "horse", phonetic: "/hɔːs/", pos: "n.", meaning: "马", grade: "junior", example: "The horse runs fast.", trans: "马跑得快。", tags: ["基础"], related: [] },
  { word: "noon", phonetic: "/nuːn/", pos: "n.", meaning: "正午", grade: "junior", example: "At noon we have lunch.", trans: "正午我们吃午饭。", tags: ["基础"], related: [] },
  { word: "memory", phonetic: "/ˈmeməri/", pos: "n.", meaning: "记忆", grade: "junior", example: "I have a good memory.", trans: "我记忆力好。", tags: ["复数memories"], related: [
    { type: "复数", word: "memories" }
  ] },
  { word: "financial", phonetic: "/faɪˈnænʃl/", pos: "adj.", meaning: "金融的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "font", phonetic: "/fɒnt/", pos: "n.", meaning: "字体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "border", phonetic: "/ˈbɔːdə(r)/", pos: "n.", meaning: "边界", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "boss", phonetic: "/bɒs/", pos: "n.", meaning: "老板", grade: "junior", example: "My boss is very kind.", trans: "我的老板很善良。", tags: ["基础"], related: [] },
  { word: "along", phonetic: "/əˈlɒŋ/", pos: "prep.", meaning: "沿着", grade: "junior", example: "Walk along the river.", trans: "沿着河走。", tags: ["介词"], related: [] },
  { word: "fix", phonetic: "/fɪks/", pos: "v.", meaning: "修理", grade: "junior", example: "Can you fix my bike?", trans: "你能修我的自行车吗？", tags: ["高频"], related: [] },
  { word: "blow", phonetic: "/bləʊ/", pos: "v.", meaning: "吹", grade: "junior", example: "The wind blows hard.", trans: "风刮得很大。", tags: ["过去式blew"], related: [
    { type: "过去式", word: "blew" }
  ] },
  { word: "extension", phonetic: "/ɪkˈstenʃn/", pos: "n.", meaning: "扩展", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "unit", phonetic: "/ˈjuːnɪt/", pos: "n.", meaning: "单位", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cat", phonetic: "/kæt/", pos: "n.", meaning: "猫", grade: "junior", example: "The cat is sleeping.", trans: "猫在睡觉。", tags: ["基础"], related: [] },
  { word: "push", phonetic: "/pʊʃ/", pos: "v.", meaning: "推", grade: "junior", example: "Push the door.", trans: "推门。", tags: ["反义词pull"], related: [
    { type: "反义词", word: "pull" }
  ] },
  { word: "babe", phonetic: "/beɪb/", pos: "n.", meaning: "婴儿", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "violin", phonetic: "/ˌvaɪəˈlɪn/", pos: "n.", meaning: "小提琴", grade: "junior", example: "She plays the violin.", trans: "她拉小提琴。", tags: ["基础"], related: [] },
  { word: "inn", phonetic: "/ɪn/", pos: "n.", meaning: "客栈", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "genetic", phonetic: "/dʒəˈnetɪk/", pos: "adj.", meaning: "遗传的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "incident", phonetic: "/ˈɪnsɪdənt/", pos: "n.", meaning: "事件", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "worker", phonetic: "/ˈwɜːkə(r)/", pos: "n.", meaning: "工人", grade: "junior", example: "He is a worker.", trans: "他是工人。", tags: ["基础"], related: [] },
  { word: "exam", phonetic: "/ɪɡˈzæm/", pos: "n.", meaning: "考试", grade: "junior", example: "I have an exam tomorrow.", trans: "我明天有考试。", tags: ["基础", "全称examination"], related: [] },
  { word: "lawyer", phonetic: "/ˈlɔːjə(r)/", pos: "n.", meaning: "律师", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "festival", phonetic: "/ˈfestɪvl/", pos: "n.", meaning: "节日", grade: "junior", example: "Spring Festival is important.", trans: "春节很重要。", tags: ["基础"], related: [] },
  { word: "read", phonetic: "/riːd/", pos: "v.", meaning: "读", grade: "junior", example: "I read books.", trans: "我读书。", tags: ["过去式read", "名词reading"], related: [
    { type: "过去式", word: "read" },
    { type: "名词形式", word: "reading" }
  ] },
  { word: "metal", phonetic: "/ˈmetl/", pos: "n.", meaning: "金属", grade: "junior", example: "Iron is a metal.", trans: "铁是金属。", tags: ["基础"], related: [] },
  { word: "fill", phonetic: "/fɪl/", pos: "v.", meaning: "填满", grade: "junior", example: "Fill the bottle with water.", trans: "把瓶子装满水。", tags: ["短语fill with"], related: [] },
  { word: "yellow", phonetic: "/ˈjeləʊ/", pos: "adj.", meaning: "黄色的", grade: "junior", example: "The sun is yellow.", trans: "太阳是黄色的。", tags: ["基础"], related: [] },
  { word: "breath", phonetic: "/breθ/", pos: "n.", meaning: "呼吸", grade: "junior", example: "Take a deep breath.", trans: "深呼吸。", tags: ["不可数", "动词breathe"], related: [
    { type: "动词形式", word: "breathe" }
  ] },
  { word: "international", phonetic: "/ˌɪntəˈnæʃnəl/", pos: "adj.", meaning: "国际的", grade: "junior", example: "This is an international school.", trans: "这是一所国际学校。", tags: ["高频"], related: [] },
  { word: "clean", phonetic: "/kliːn/", pos: "adj./v.", meaning: "干净的；打扫", grade: "junior", example: "Clean the room.", trans: "打扫房间。", tags: ["基础", "反义词dirty"], related: [
    { type: "反义词", word: "dirty" }
  ] },
  { word: "contract", phonetic: "/ˈkɒntrækt/", pos: "n.", meaning: "合同", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "wise", phonetic: "/waɪz/", pos: "adj.", meaning: "明智的", grade: "junior", example: "He is a wise man.", trans: "他是个明智的人。", tags: ["名词wisdom"], related: [
    { type: "名词形式", word: "wisdom" }
  ] },
  { word: "stamp", phonetic: "/stæmp/", pos: "n.", meaning: "邮票", grade: "junior", example: "Collect stamps.", trans: "集邮。", tags: ["基础"], related: [] },
  { word: "textbook", phonetic: "/ˈtekstbʊk/", pos: "n.", meaning: "教科书", grade: "junior", example: "Open your textbook.", trans: "打开课本。", tags: ["基础"], related: [] },
  { word: "various", phonetic: "/ˈveəriəs/", pos: "adj.", meaning: "各种各样的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "cinema", phonetic: "/ˈsɪnəmə/", pos: "n.", meaning: "电影院", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "remind", phonetic: "/rɪˈmaɪnd/", pos: "v.", meaning: "提醒", grade: "junior", example: "Remind me tomorrow.", trans: "明天提醒我。", tags: ["短语remind of"], related: [] },
  { word: "breakfast", phonetic: "/ˈbrekfəst/", pos: "n.", meaning: "早餐", grade: "junior", example: "I have breakfast at seven.", trans: "我七点吃早餐。", tags: ["基础"], related: [] },
  { word: "ear", phonetic: "/ɪə(r)/", pos: "n.", meaning: "耳朵", grade: "junior", example: "I have two ears.", trans: "我有两只耳朵。", tags: ["基础"], related: [] },
  { word: "signal", phonetic: "/ˈsɪɡnəl/", pos: "n.", meaning: "信号", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tape", phonetic: "/teɪp/", pos: "n.", meaning: "磁带", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "volume", phonetic: "/ˈvɒljuːm/", pos: "n.", meaning: "体积", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "shower", phonetic: "/ˈʃaʊə(r)/", pos: "n.", meaning: "淋浴", grade: "junior", example: "Take a shower.", trans: "淋浴。", tags: ["基础"], related: [] },
  { word: "act", phonetic: "/ækt/", pos: "v.", meaning: "行动；表演", grade: "junior", example: "Act quickly!", trans: "快行动！", tags: ["名词action"], related: [
    { type: "名词形式", word: "action" }
  ] },
  { word: "film", phonetic: "/fɪlm/", pos: "n.", meaning: "电影", grade: "junior", example: "Let us watch a film.", trans: "我们看电影吧。", tags: ["基础", "美语movie"], related: [] },
  { word: "animation", phonetic: "/ˌænɪˈmeɪʃn/", pos: "n.", meaning: "动画", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "guard", phonetic: "/ɡɑːd/", pos: "n.", meaning: "警卫", grade: "junior", example: "The guard is at the door.", trans: "警卫在门口。", tags: ["基础"], related: [] },
  { word: "motion", phonetic: "/ˈməʊʃn/", pos: "n.", meaning: "运动", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "argument", phonetic: "/ˈɑːɡjumənt/", pos: "n.", meaning: "争论", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "contact", phonetic: "/ˈkɒntækt/", pos: "v./n.", meaning: "联系", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "base", phonetic: "/beɪs/", pos: "n.", meaning: "基础；基地", grade: "junior", example: "The base of the mountain is wide.", trans: "山的底部很宽。", tags: ["高频"], related: [] },
  { word: "market", phonetic: "/ˈmɑːkɪt/", pos: "n.", meaning: "市场", grade: "junior", example: "Go to the market.", trans: "去市场。", tags: ["基础"], related: [] },
  { word: "loud", phonetic: "/laʊd/", pos: "adj.", meaning: "大声的", grade: "junior", example: "Speak loud.", trans: "大声说。", tags: ["基础"], related: [] },
  { word: "food", phonetic: "/fuːd/", pos: "n.", meaning: "食物", grade: "junior", example: "I like Chinese food.", trans: "我喜欢中国食物。", tags: ["不可数"], related: [] },
  { word: "overseas", phonetic: "/ˌəʊvəˈsiːz/", pos: "adv.", meaning: "海外", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rest", phonetic: "/rest/", pos: "n./v.", meaning: "休息", grade: "junior", example: "Have a rest.", trans: "休息一下。", tags: ["基础"], related: [] },
  { word: "headache", phonetic: "/ˈhedeɪk/", pos: "n.", meaning: "头痛", grade: "junior", example: "I have a headache.", trans: "我头疼。", tags: ["短语have a headache"], related: [] },
  { word: "bulletin", phonetic: "/ˈbʊlətɪn/", pos: "n.", meaning: "公告", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lack", phonetic: "/læk/", pos: "v.", meaning: "缺乏", grade: "junior", example: "He lacks confidence.", trans: "他缺乏信心。", tags: ["高频"], related: [] },
  { word: "battery", phonetic: "/ˈbætəri/", pos: "n.", meaning: "电池", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "influence", phonetic: "/ˈɪnfluəns/", pos: "n./v.", meaning: "影响", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "estate", phonetic: "/ɪˈsteɪt/", pos: "n.", meaning: "财产", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "government", phonetic: "/ˈɡʌvənmənt/", pos: "n.", meaning: "政府", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "win", phonetic: "/wɪn/", pos: "v.", meaning: "赢", grade: "junior", example: "We won the game.", trans: "我们赢了比赛。", tags: ["过去式won", "反义词lose"], related: [
    { type: "过去式", word: "won" },
    { type: "反义词", word: "lose" }
  ] },
  { word: "elephant", phonetic: "/ˈelɪfənt/", pos: "n.", meaning: "大象", grade: "junior", example: "The elephant is huge.", trans: "大象很大。", tags: ["基础"], related: [] },
  { word: "afternoon", phonetic: "/ˌɑːftəˈnuːn/", pos: "n.", meaning: "下午", grade: "junior", example: "We have class in the afternoon.", trans: "我们下午有课。", tags: ["基础"], related: [] },
  { word: "catholic", phonetic: "/ˈkæθlɪk/", pos: "adj.", meaning: "天主教的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "article", phonetic: "/ˈɑːtɪkl/", pos: "n.", meaning: "文章；冠词", grade: "junior", example: "I read an article yesterday.", trans: "我昨天读了一篇文章。", tags: ["高频"], related: [] },
  { word: "cute", phonetic: "/kjuːt/", pos: "adj.", meaning: "可爱的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "guess", phonetic: "/ɡes/", pos: "v.", meaning: "猜", grade: "junior", example: "Guess what?", trans: "你猜怎么着？", tags: ["基础"], related: [] },
  { word: "visible", phonetic: "/ˈvɪzəbl/", pos: "adj.", meaning: "可见的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "aspect", phonetic: "/ˈæspekt/", pos: "n.", meaning: "方面", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "afraid", phonetic: "/əˈfreɪd/", pos: "adj.", meaning: "害怕的", grade: "junior", example: "Do not be afraid.", trans: "不要害怕。", tags: ["短语be afraid of"], related: [] },
  { word: "change", phonetic: "/tʃeɪndʒ/", pos: "v./n.", meaning: "改变；零钱", grade: "junior", example: "Change your clothes.", trans: "换衣服。", tags: ["高频"], related: [] },
  { word: "leg", phonetic: "/leɡ/", pos: "n.", meaning: "腿", grade: "junior", example: "I have two legs.", trans: "我有两条腿。", tags: ["基础"], related: [] },
  { word: "promote", phonetic: "/prəˈməʊt/", pos: "v.", meaning: "促进", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "least", phonetic: "/liːst/", pos: "adj.", meaning: "最少的", grade: "junior", example: "At least try.", trans: "至少试试。", tags: ["短语at least"], related: [] },
  { word: "arena", phonetic: "/əˈriːnə/", pos: "n.", meaning: "竞技场", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "debt", phonetic: "/det/", pos: "n.", meaning: "债务", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "solar", phonetic: "/ˈsəʊlə(r)/", pos: "adj.", meaning: "太阳的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "impossible", phonetic: "/ɪmˈpɒsəbl/", pos: "adj.", meaning: "不可能的", grade: "junior", example: "It is impossible to win.", trans: "不可能赢。", tags: ["反义词possible"], related: [
    { type: "反义词", word: "possible" }
  ] },
  { word: "flower", phonetic: "/ˈflaʊə(r)/", pos: "n.", meaning: "花", grade: "junior", example: "The flowers are beautiful.", trans: "花很美。", tags: ["基础"], related: [] },
  { word: "individual", phonetic: "/ˌɪndɪˈvɪdʒuəl/", pos: "adj.", meaning: "个人的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "demand", phonetic: "/dɪˈmɑːnd/", pos: "v./n.", meaning: "要求", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "acquisition", phonetic: "/ˌækwɪˈzɪʃn/", pos: "n.", meaning: "获得", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "counter", phonetic: "/ˈkaʊntə(r)/", pos: "n.", meaning: "柜台", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "mouth", phonetic: "/maʊθ/", pos: "n.", meaning: "嘴", grade: "junior", example: "Open your mouth.", trans: "张嘴。", tags: ["复数mouths"], related: [
    { type: "复数", word: "mouths" }
  ] },
  { word: "pupil", phonetic: "/ˈpjuːpl/", pos: "n.", meaning: "小学生", grade: "junior", example: "The pupils are studying.", trans: "学生们在学习。", tags: ["基础"], related: [] },
  { word: "fee", phonetic: "/fiː/", pos: "n.", meaning: "费用", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fantastic", phonetic: "/fænˈtæstɪk/", pos: "adj.", meaning: "极好的", grade: "junior", example: "That is fantastic!", trans: "太棒了！", tags: ["高频"], related: [] },
  { word: "enter", phonetic: "/ˈentə(r)/", pos: "v.", meaning: "进入", grade: "junior", example: "Enter the room.", trans: "进入房间。", tags: ["名词entrance"], related: [
    { type: "名词形式", word: "entrance" }
  ] },
  { word: "stomach", phonetic: "/ˈstʌmək/", pos: "n.", meaning: "胃", grade: "junior", example: "My stomach hurts.", trans: "我胃疼。", tags: ["基础"], related: [] },
  { word: "queen", phonetic: "/kwiːn/", pos: "n.", meaning: "女王", grade: "junior", example: "The queen is wise.", trans: "女王很明智。", tags: ["基础"], related: [] },
  { word: "fuel", phonetic: "/ˈfjuːəl/", pos: "n.", meaning: "燃料", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "between", phonetic: "/bɪˈtwiːn/", pos: "prep.", meaning: "在……之间", grade: "junior", example: "The ball is between the two chairs.", trans: "球在两把椅子之间。", tags: ["易混among"], related: [
    { type: "易混词", word: "among" }
  ] },
  { word: "cost", phonetic: "/kɒst/", pos: "v.", meaning: "花费", grade: "junior", example: "The book costs 20 yuan.", trans: "这本书花了20元。", tags: ["过去式cost"], related: [
    { type: "过去式", word: "cost" }
  ] },
  { word: "abuse", phonetic: "/əˈbjuːz/", pos: "v.", meaning: "滥用；虐待", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "condition", phonetic: "/kənˈdɪʃn/", pos: "n.", meaning: "条件；状况", grade: "junior", example: "The car is in good condition.", trans: "车况良好。", tags: ["高频"], related: [] },
  { word: "drive", phonetic: "/draɪv/", pos: "v.", meaning: "驾驶", grade: "junior", example: "He drives a car.", trans: "他开车。", tags: ["过去式drove", "过去分词driven"], related: [
    { type: "过去式", word: "drove" },
    { type: "过去分词", word: "driven" }
  ] },
  { word: "hungry", phonetic: "/ˈhʌŋɡri/", pos: "adj.", meaning: "饥饿的", grade: "junior", example: "I am hungry.", trans: "我饿了。", tags: ["名词hunger"], related: [
    { type: "名词形式", word: "hunger" }
  ] },
  { word: "mile", phonetic: "/maɪl/", pos: "n.", meaning: "英里", grade: "junior", example: "It is five miles away.", trans: "五英里远。", tags: ["基础"], related: [] },
  { word: "bigger", phonetic: "/ˈbɪɡə(r)/", pos: "adj.", meaning: "更大的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "advance", phonetic: "/ədˈvɑːns/", pos: "v./n.", meaning: "前进；进步", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sell", phonetic: "/sel/", pos: "v.", meaning: "卖", grade: "junior", example: "They sell fruit.", trans: "他们卖水果。", tags: ["过去式sold", "反义词buy"], related: [
    { type: "过去式", word: "sold" },
    { type: "反义词", word: "buy" }
  ] },
  { word: "foster", phonetic: "/ˈfɒstə(r)/", pos: "v.", meaning: "培养", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "angry", phonetic: "/ˈæŋɡri/", pos: "adj.", meaning: "生气的", grade: "junior", example: "Do not be angry with me.", trans: "不要生我的气。", tags: ["短语be angry with"], related: [] },
  { word: "delta", phonetic: "/ˈdeltə/", pos: "n.", meaning: "三角洲", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "resident", phonetic: "/ˈrezɪdənt/", pos: "n.", meaning: "居民", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "current", phonetic: "/ˈkʌrənt/", pos: "adj.", meaning: "当前的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "relax", phonetic: "/rɪˈlæks/", pos: "v.", meaning: "放松", grade: "junior", example: "Relax and enjoy.", trans: "放松享受。", tags: ["名词relaxation"], related: [
    { type: "名词形式", word: "relaxation" }
  ] },
  { word: "plenty", phonetic: "/ˈplenti/", pos: "n.", meaning: "大量", grade: "junior", example: "There is plenty of time.", trans: "有大量时间。", tags: ["短语plenty of"], related: [] },
  { word: "philosophy", phonetic: "/fəˈlɒsəfi/", pos: "n.", meaning: "哲学", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "egg", phonetic: "/eɡ/", pos: "n.", meaning: "鸡蛋", grade: "junior", example: "I had eggs for breakfast.", trans: "我早餐吃了鸡蛋。", tags: ["基础"], related: [] },
  { word: "hole", phonetic: "/həʊl/", pos: "n.", meaning: "洞", grade: "junior", example: "There is a hole in the wall.", trans: "墙上有个洞。", tags: ["基础"], related: [] },
  { word: "commit", phonetic: "/kəˈmɪt/", pos: "v.", meaning: "犯（罪）", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "penalty", phonetic: "/ˈpenəlti/", pos: "n.", meaning: "惩罚", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "kingdom", phonetic: "/ˈkɪŋdəm/", pos: "n.", meaning: "王国", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "already", phonetic: "/ɔːlˈredi/", pos: "adv.", meaning: "已经", grade: "junior", example: "I have already finished.", trans: "我已经完成了。", tags: ["基础", "常用于完成时"], related: [] },
  { word: "finger", phonetic: "/ˈfɪŋɡə(r)/", pos: "n.", meaning: "手指", grade: "junior", example: "I have ten fingers.", trans: "我有十根手指。", tags: ["基础"], related: [] },
  { word: "friendly", phonetic: "/ˈfrendli/", pos: "adj.", meaning: "友好的", grade: "junior", example: "He is friendly to everyone.", trans: "他对每个人都友好。", tags: ["短语be friendly to"], related: [] },
  { word: "entry", phonetic: "/ˈentri/", pos: "n.", meaning: "进入", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "crystal", phonetic: "/ˈkrɪstl/", pos: "n.", meaning: "水晶", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "manage", phonetic: "/ˈmænɪdʒ/", pos: "v.", meaning: "管理；设法", grade: "junior", example: "He manages a company.", trans: "他管理一家公司。", tags: ["名词manager"], related: [
    { type: "名词形式", word: "manager" }
  ] },
  { word: "oil", phonetic: "/ɔɪl/", pos: "n.", meaning: "油", grade: "junior", example: "Add some oil.", trans: "加点油。", tags: ["不可数"], related: [] },
  { word: "friend", phonetic: "/frend/", pos: "n.", meaning: "朋友", grade: "junior", example: "She is my best friend.", trans: "她是我最好的朋友。", tags: ["基础"], related: [] },
  { word: "priority", phonetic: "/praɪˈɒrəti/", pos: "n.", meaning: "优先", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "seldom", phonetic: "/ˈseldəm/", pos: "adv.", meaning: "很少", grade: "junior", example: "I seldom watch TV.", trans: "我很少看电视。", tags: ["频率副词"], related: [] },
  { word: "explain", phonetic: "/ɪkˈspleɪn/", pos: "v.", meaning: "解释", grade: "junior", example: "Can you explain this?", trans: "你能解释这个吗？", tags: ["名词explanation"], related: [
    { type: "名词形式", word: "explanation" }
  ] },
  { word: "here", phonetic: "/hɪə(r)/", pos: "adv.", meaning: "这里", grade: "junior", example: "Come here.", trans: "过来。", tags: ["基础", "反义词there"], related: [
    { type: "反义词", word: "there" }
  ] },
  { word: "thick", phonetic: "/θɪk/", pos: "adj.", meaning: "厚的", grade: "junior", example: "The book is thick.", trans: "书很厚。", tags: ["反义词thin"], related: [
    { type: "反义词", word: "thin" }
  ] },
  { word: "poster", phonetic: "/ˈpəʊstə(r)/", pos: "n.", meaning: "海报", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "correct", phonetic: "/kəˈrekt/", pos: "adj./v.", meaning: "正确的；改正", grade: "junior", example: "Your answer is correct.", trans: "你的答案正确。", tags: ["名词correction"], related: [
    { type: "名词形式", word: "correction" }
  ] },
  { word: "another", phonetic: "/əˈnʌðə(r)/", pos: "adj.", meaning: "另一个的", grade: "junior", example: "Would you like another cup?", trans: "想再来一杯吗？", tags: ["易混other"], related: [
    { type: "易混词", word: "other" }
  ] },
  { word: "rude", phonetic: "/ruːd/", pos: "adj.", meaning: "粗鲁的", grade: "junior", example: "Do not be rude.", trans: "不要粗鲁。", tags: ["反义词polite"], related: [
    { type: "反义词", word: "polite" }
  ] },
  { word: "website", phonetic: "/ˈwebsaɪt/", pos: "n.", meaning: "网站", grade: "junior", example: "Visit the website.", trans: "访问网站。", tags: ["基础"], related: [] },
  { word: "biggest", phonetic: "/ˈbɪɡɪst/", pos: "adj.", meaning: "最大的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "regular", phonetic: "/ˈreɡjələ(r)/", pos: "adj.", meaning: "规律的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "sunny", phonetic: "/ˈsʌni/", pos: "adj.", meaning: "晴朗的", grade: "junior", example: "It is sunny today.", trans: "今天天晴。", tags: ["基础"], related: [] },
  { word: "factory", phonetic: "/ˈfæktri/", pos: "n.", meaning: "工厂", grade: "junior", example: "He works in a factory.", trans: "他在工厂工作。", tags: ["复数factories"], related: [
    { type: "复数", word: "factories" }
  ] },
  { word: "active", phonetic: "/ˈæktɪv/", pos: "adj.", meaning: "积极的；活跃的", grade: "junior", example: "She is active in class.", trans: "她在课堂上很积极。", tags: ["短语be active in"], related: [] },
  { word: "object", phonetic: "/ˈɒbdʒɪkt/", pos: "n.", meaning: "物体", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "decrease", phonetic: "/dɪˈkriːs/", pos: "v.", meaning: "减少", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "healthy", phonetic: "/ˈhelθi/", pos: "adj.", meaning: "健康的", grade: "junior", example: "Eat healthy food.", trans: "吃健康的食物。", tags: ["名词health"], related: [
    { type: "名词形式", word: "health" }
  ] },
  { word: "appendix", phonetic: "/əˈpendɪks/", pos: "n.", meaning: "附录", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "billy", phonetic: "/ˈbɪli/", pos: "n.", meaning: "警棍", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "famous", phonetic: "/ˈfeɪməs/", pos: "adj.", meaning: "著名的", grade: "junior", example: "He is a famous singer.", trans: "他是著名歌手。", tags: ["短语be famous for"], related: [] },
  { word: "April", phonetic: "/ˈeɪprəl/", pos: "n.", meaning: "四月", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "natural", phonetic: "/ˈnætʃrəl/", pos: "adj.", meaning: "自然的", grade: "junior", example: "It is a natural beauty.", trans: "自然之美。", tags: ["名词nature"], related: [
    { type: "名词形式", word: "nature" }
  ] },
  { word: "sky", phonetic: "/skaɪ/", pos: "n.", meaning: "天空", grade: "junior", example: "The sky is blue.", trans: "天空是蓝的。", tags: ["基础"], related: [] },
  { word: "ass", phonetic: "/æs/", pos: "n.", meaning: "驴", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "arrive", phonetic: "/əˈraɪv/", pos: "v.", meaning: "到达", grade: "junior", example: "We arrived at the station.", trans: "我们到达了车站。", tags: ["高频", "短语arrive at/in"], related: [] },
  { word: "punish", phonetic: "/ˈpʌnɪʃ/", pos: "v.", meaning: "惩罚", grade: "junior", example: "Do not punish him.", trans: "不要惩罚他。", tags: ["名词punishment"], related: [
    { type: "名词形式", word: "punishment" }
  ] },
  { word: "frank", phonetic: "/fræŋk/", pos: "adj.", meaning: "坦率的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lovely", phonetic: "/ˈlʌvli/", pos: "adj.", meaning: "可爱的", grade: "junior", example: "What a lovely dog!", trans: "多可爱的狗啊！", tags: ["基础"], related: [] },
  { word: "require", phonetic: "/rɪˈkwaɪə(r)/", pos: "v.", meaning: "需要", grade: "junior", example: "This requires effort.", trans: "这需要努力。", tags: ["名词requirement"], related: [
    { type: "名词形式", word: "requirement" }
  ] },
  { word: "cities", phonetic: "/ˈsɪtiz/", pos: "n.", meaning: "城市(复数)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "rate", phonetic: "/reɪt/", pos: "n.", meaning: "比率", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "devil", phonetic: "/ˈdevl/", pos: "n.", meaning: "魔鬼", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", pos: "adj.", meaning: "综合的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "institute", phonetic: "/ˈɪnstɪtjuːt/", pos: "n.", meaning: "机构", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tiger", phonetic: "/ˈtaɪɡə(r)/", pos: "n.", meaning: "老虎", grade: "junior", example: "The tiger is strong.", trans: "老虎很强壮。", tags: ["基础"], related: [] },
  { word: "output", phonetic: "/ˈaʊtpʊt/", pos: "n.", meaning: "输出", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "portion", phonetic: "/ˈpɔːʃn/", pos: "n.", meaning: "部分", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "efficient", phonetic: "/ɪˈfɪʃnt/", pos: "adj.", meaning: "高效的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "depend", phonetic: "/dɪˈpend/", pos: "v.", meaning: "依赖；取决于", grade: "junior", example: "It depends on the weather.", trans: "这取决于天气。", tags: ["短语depend on"], related: [] },
  { word: "confidence", phonetic: "/ˈkɒnfɪdəns/", pos: "n.", meaning: "信心", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "coverage", phonetic: "/ˈkʌvərɪdʒ/", pos: "n.", meaning: "覆盖", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "claim", phonetic: "/kleɪm/", pos: "v.", meaning: "声称", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "globe", phonetic: "/ɡləʊb/", pos: "n.", meaning: "地球", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "license", phonetic: "/ˈlaɪsns/", pos: "n.", meaning: "执照", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "publish", phonetic: "/ˈpʌblɪʃ/", pos: "v.", meaning: "出版", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pure", phonetic: "/pjʊə(r)/", pos: "adj.", meaning: "纯的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "alternative", phonetic: "/ɔːlˈtɜːnətɪv/", pos: "n./adj.", meaning: "替代的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "owner", phonetic: "/ˈəʊnə(r)/", pos: "n.", meaning: "主人", grade: "junior", example: "He is the owner.", trans: "他是主人。", tags: ["基础"], related: [] },
  { word: "theater", phonetic: "/ˈθiətə(r)/", pos: "n.", meaning: "剧院", grade: "junior", example: "Go to the theater.", trans: "去剧院。", tags: ["英式theatre"], related: [] },
  { word: "skate", phonetic: "/skeɪt/", pos: "v.", meaning: "滑冰", grade: "junior", example: "I like to skate.", trans: "我喜欢滑冰。", tags: ["基础"], related: [] },
  { word: "salt", phonetic: "/sɔːlt/", pos: "n.", meaning: "盐", grade: "junior", example: "Add some salt.", trans: "加点盐。", tags: ["不可数"], related: [] },
  { word: "storm", phonetic: "/stɔːm/", pos: "n.", meaning: "暴风雨", grade: "junior", example: "The storm is coming.", trans: "暴风雨要来了。", tags: ["基础"], related: [] },
  { word: "rare", phonetic: "/reə(r)/", pos: "adj.", meaning: "稀有的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "layer", phonetic: "/ˈleɪə(r)/", pos: "n.", meaning: "层", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "thin", phonetic: "/θɪn/", pos: "adj.", meaning: "瘦的；薄的", grade: "junior", example: "She is thin.", trans: "她很瘦。", tags: ["反义词thick/fat"], related: [
    { type: "反义词", word: "thick/fat" }
  ] },
  { word: "scene", phonetic: "/siːn/", pos: "n.", meaning: "场景", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "arms", phonetic: "/ɑːmz/", pos: "n.", meaning: "武器", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "relative", phonetic: "/ˈrelətɪv/", pos: "n.", meaning: "亲戚", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "willing", phonetic: "/ˈwɪlɪŋ/", pos: "adj.", meaning: "愿意的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "battle", phonetic: "/ˈbætl/", pos: "n.", meaning: "战斗", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "height", phonetic: "/haɪt/", pos: "n.", meaning: "高度", grade: "junior", example: "What is your height?", trans: "你多高？", tags: ["形容词high"], related: [] },
  { word: "crowd", phonetic: "/kraʊd/", pos: "n.", meaning: "人群", grade: "junior", example: "A large crowd gathered.", trans: "一大群人聚集了。", tags: ["基础"], related: [] },
  { word: "big", phonetic: "/bɪɡ/", pos: "adj.", meaning: "大的", grade: "junior", example: "He lives in a big house.", trans: "他住在大房子里。", tags: ["基础", "反义词small"], related: [
    { type: "反义词", word: "small" }
  ] },
  { word: "thing", phonetic: "/θɪŋ/", pos: "n.", meaning: "东西；事情", grade: "junior", example: "What is that thing?", trans: "那是什么东西？", tags: ["基础"], related: [] },
  { word: "support", phonetic: "/səˈpɔːt/", pos: "v.", meaning: "支持", grade: "junior", example: "I support you.", trans: "我支持你。", tags: ["基础"], related: [] },
  { word: "charter", phonetic: "/ˈtʃɑːtə(r)/", pos: "n.", meaning: "宪章", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "promise", phonetic: "/ˈprɒmɪs/", pos: "v.", meaning: "承诺", grade: "junior", example: "I promise to help.", trans: "我承诺帮忙。", tags: ["短语promise to do"], related: [] },
  { word: "era", phonetic: "/ˈɪərə/", pos: "n.", meaning: "时代", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "statement", phonetic: "/ˈsteɪtmənt/", pos: "n.", meaning: "声明", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "life", phonetic: "/laɪf/", pos: "n.", meaning: "生活；生命", grade: "junior", example: "Life is beautiful.", trans: "生活很美好。", tags: ["复数lives"], related: [
    { type: "复数", word: "lives" }
  ] },
  { word: "rise", phonetic: "/raɪz/", pos: "v.", meaning: "上升", grade: "junior", example: "The sun rises.", trans: "太阳升起。", tags: ["过去式rose", "过去分词risen"], related: [
    { type: "过去式", word: "rose" },
    { type: "过去分词", word: "risen" }
  ] },
  { word: "teach", phonetic: "/tiːtʃ/", pos: "v.", meaning: "教", grade: "junior", example: "She teaches English.", trans: "她教英语。", tags: ["过去式taught", "名词teacher"], related: [
    { type: "过去式", word: "taught" },
    { type: "名词形式", word: "teacher" }
  ] },
  { word: "recognize", phonetic: "/ˈrekəɡnaɪz/", pos: "v.", meaning: "认出", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "remove", phonetic: "/rɪˈmuːv/", pos: "v.", meaning: "移除", grade: "junior", example: "Remove the lid.", trans: "拿掉盖子。", tags: ["基础"], related: [] },
  { word: "kind", phonetic: "/kaɪnd/", pos: "adj.", meaning: "善良的", grade: "junior", example: "She is kind to others.", trans: "她对别人善良。", tags: ["名词kindness"], related: [
    { type: "名词形式", word: "kindness" }
  ] },
  { word: "charity", phonetic: "/ˈtʃærəti/", pos: "n.", meaning: "慈善", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "continue", phonetic: "/kənˈtɪnjuː/", pos: "v.", meaning: "继续", grade: "junior", example: "Continue reading.", trans: "继续读。", tags: ["短语continue to do/doing"], related: [] },
  { word: "people", phonetic: "/ˈpiːpl/", pos: "n.", meaning: "人们", grade: "junior", example: "Many people came.", trans: "很多人来了。", tags: ["单复数同形"], related: [] },
  { word: "force", phonetic: "/fɔːs/", pos: "n.", meaning: "力量", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "progress", phonetic: "/ˈprəʊɡres/", pos: "n.", meaning: "进步", grade: "junior", example: "You made great progress.", trans: "你进步很大。", tags: ["不可数"], related: [] },
  { word: "rain", phonetic: "/reɪn/", pos: "n./v.", meaning: "雨；下雨", grade: "junior", example: "It is raining.", trans: "在下雨。", tags: ["形容词rainy"], related: [] },
  { word: "radiation", phonetic: "/ˌreɪdiˈeɪʃn/", pos: "n.", meaning: "辐射", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tour", phonetic: "/tʊə(r)/", pos: "n.", meaning: "旅行", grade: "junior", example: "We went on a tour.", trans: "我们去旅行了。", tags: ["基础"], related: [] },
  { word: "live", phonetic: "/lɪv/", pos: "v.", meaning: "居住；生活", grade: "junior", example: "I live in Beijing.", trans: "我住在北京。", tags: ["基础"], related: [] },
  { word: "prize", phonetic: "/praɪz/", pos: "n.", meaning: "奖品", grade: "junior", example: "I won a prize.", trans: "我赢了奖品。", tags: ["基础"], related: [] },
  { word: "tennis", phonetic: "/ˈtenɪs/", pos: "n.", meaning: "网球", grade: "junior", example: "I play tennis.", trans: "我打网球。", tags: ["基础"], related: [] },
  { word: "research", phonetic: "/rɪˈsɜːtʃ/", pos: "n.", meaning: "研究", grade: "junior", example: "Do some research.", trans: "做些研究。", tags: ["不可数"], related: [] },
  { word: "climate", phonetic: "/ˈklaɪmət/", pos: "n.", meaning: "气候", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "easy", phonetic: "/ˈiːzi/", pos: "adj.", meaning: "容易的", grade: "junior", example: "This is an easy question.", trans: "这是个简单的问题。", tags: ["比较级easier", "反义词difficult"], related: [
    { type: "比较级", word: "easier" },
    { type: "反义词", word: "difficult" }
  ] },
  { word: "ladder", phonetic: "/ˈlædə(r)/", pos: "n.", meaning: "梯子", grade: "junior", example: "Climb the ladder.", trans: "爬梯子。", tags: ["基础"], related: [] },
  { word: "is", phonetic: "/ɪz/", pos: "v.", meaning: "是（be的第三人称单数）", grade: "junior", example: "He is my brother.", trans: "他是我弟弟。", tags: ["基础"], related: [] },
  { word: "hard", phonetic: "/hɑːd/", pos: "adj./adv.", meaning: "努力的；困难的", grade: "junior", example: "Work hard.", trans: "努力工作。", tags: ["易混hardly"], related: [
    { type: "易混词", word: "hardly" }
  ] },
  { word: "cell", phonetic: "/sel/", pos: "n.", meaning: "细胞", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "passion", phonetic: "/ˈpæʃn/", pos: "n.", meaning: "激情", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "leisure", phonetic: "/ˈleʒə(r)/", pos: "n.", meaning: "闲暇", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "lecture", phonetic: "/ˈlektʃə(r)/", pos: "n.", meaning: "讲座", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "loan", phonetic: "/ləʊn/", pos: "n.", meaning: "贷款", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "pronounce", phonetic: "/prəˈnaʊns/", pos: "v.", meaning: "发音", grade: "junior", example: "How do you pronounce this?", trans: "这个怎么发音？", tags: ["名词pronunciation"], related: [
    { type: "名词形式", word: "pronunciation" }
  ] },
  { word: "floor", phonetic: "/flɔː(r)/", pos: "n.", meaning: "地板；楼层", grade: "junior", example: "Sweep the floor.", trans: "扫地。", tags: ["基础"], related: [] },
  { word: "snowy", phonetic: "/ˈsnəʊi/", pos: "adj.", meaning: "下雪的", grade: "junior", example: "It is a snowy day.", trans: "今天是雪天。", tags: ["基础"], related: [] },
  { word: "screen", phonetic: "/skriːn/", pos: "n.", meaning: "屏幕", grade: "junior", example: "Look at the screen.", trans: "看屏幕。", tags: ["基础"], related: [] },
  { word: "atmosphere", phonetic: "/ˈætməsfɪə(r)/", pos: "n.", meaning: "气氛；大气", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "parallel", phonetic: "/ˈpærəlel/", pos: "adj.", meaning: "平行的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "fly", phonetic: "/flaɪ/", pos: "v.", meaning: "飞", grade: "junior", example: "Birds can fly.", trans: "鸟会飞。", tags: ["过去式flew"], related: [
    { type: "过去式", word: "flew" }
  ] },
  { word: "fair", phonetic: "/feə(r)/", pos: "adj.", meaning: "公平的", grade: "junior", example: "It is not fair.", trans: "这不公平。", tags: ["反义词unfair"], related: [
    { type: "反义词", word: "unfair" }
  ] },
  { word: "rather", phonetic: "/ˈrɑːðə(r)/", pos: "adv.", meaning: "相当；宁愿", grade: "junior", example: "I would rather go.", trans: "我宁愿走。", tags: ["短语would rather"], related: [] },
  { word: "good", phonetic: "/ɡʊd/", pos: "adj.", meaning: "好的", grade: "junior", example: "Good morning!", trans: "早上好！", tags: ["比较级better", "最高级best"], related: [
    { type: "比较级", word: "better" },
    { type: "最高级", word: "best" },
    { type: "副词", word: "well" }
  ] },
  { word: "long", phonetic: "/lɒŋ/", pos: "adj.", meaning: "长的", grade: "junior", example: "She has long hair.", trans: "她有长头发。", tags: ["反义词short"], related: [
    { type: "反义词", word: "short" }
  ] },
  { word: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", pos: "n.", meaning: "管理；行政", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "stand", phonetic: "/stænd/", pos: "v.", meaning: "站立", grade: "junior", example: "Stand up.", trans: "起立。", tags: ["过去式stood"], related: [
    { type: "过去式", word: "stood" }
  ] },
  { word: "done", phonetic: "/dʌn/", pos: "v.", meaning: "做(过去分词)", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "area", phonetic: "/ˈeəriə/", pos: "n.", meaning: "地区；面积", grade: "junior", example: "This area is very quiet.", trans: "这个地区很安静。", tags: ["高频"], related: [] },
  { word: "part", phonetic: "/pɑːt/", pos: "n.", meaning: "部分", grade: "junior", example: "This is part of the plan.", trans: "这是计划的一部分。", tags: ["基础"], related: [] },
  { word: "plane", phonetic: "/pleɪn/", pos: "n.", meaning: "飞机", grade: "junior", example: "I took a plane.", trans: "我坐飞机。", tags: ["基础", "全称airplane"], related: [] },
  { word: "brush", phonetic: "/brʌʃ/", pos: "v.", meaning: "刷", grade: "junior", example: "Brush your teeth.", trans: "刷牙。", tags: ["短语brush teeth"], related: [] },
  { word: "furniture", phonetic: "/ˈfɜːnɪtʃə(r)/", pos: "n.", meaning: "家具", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "expert", phonetic: "/ˈekspɜːt/", pos: "n.", meaning: "专家", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "those", phonetic: "/ðəʊz/", pos: "pron.", meaning: "那些", grade: "junior", example: "Those are apples.", trans: "那些是苹果。", tags: ["单数that"], related: [] },
  { word: "ensure", phonetic: "/ɪnˈʃʊə(r)/", pos: "v.", meaning: "确保", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "word", phonetic: "/wɜːd/", pos: "n.", meaning: "单词", grade: "junior", example: "Learn new words.", trans: "学新单词。", tags: ["基础"], related: [] },
  { word: "known", phonetic: "/nəʊn/", pos: "adj.", meaning: "已知的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "movie", phonetic: "/ˈmuːvi/", pos: "n.", meaning: "电影", grade: "junior", example: "Let us watch a movie.", trans: "看电影吧。", tags: ["基础", "英式film"], related: [] },
  { word: "college", phonetic: "/ˈkɒlɪdʒ/", pos: "n.", meaning: "大学；学院", grade: "junior", example: "She goes to college.", trans: "她在上大学。", tags: ["高频"], related: [] },
  { word: "meaning", phonetic: "/ˈmiːnɪŋ/", pos: "n.", meaning: "意思", grade: "junior", example: "What is the meaning?", trans: "什么意思？", tags: ["动词mean"], related: [
    { type: "动词形式", word: "mean" }
  ] },
  { word: "fund", phonetic: "/fʌnd/", pos: "n.", meaning: "基金", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "silent", phonetic: "/ˈsaɪlənt/", pos: "adj.", meaning: "沉默的", grade: "junior", example: "Be silent.", trans: "保持沉默。", tags: ["名词silence"], related: [
    { type: "名词形式", word: "silence" }
  ] },
  { word: "poor", phonetic: "/pʊə(r)/", pos: "adj.", meaning: "贫穷的；可怜的", grade: "junior", example: "The poor man needs help.", trans: "那个穷人需要帮助。", tags: ["反义词rich"], related: [
    { type: "反义词", word: "rich" }
  ] },
  { word: "chicken", phonetic: "/ˈtʃɪkɪn/", pos: "n.", meaning: "鸡；鸡肉", grade: "junior", example: "I had chicken for lunch.", trans: "我午饭吃了鸡肉。", tags: ["作鸡肉不可数"], related: [] },
  { word: "dozen", phonetic: "/ˈdʌzn/", pos: "n.", meaning: "一打", grade: "junior", example: "I want a dozen eggs.", trans: "我要一打鸡蛋。", tags: ["基础"], related: [] },
  { word: "form", phonetic: "/fɔːm/", pos: "n.", meaning: "形式；表格", grade: "junior", example: "Fill in the form.", trans: "填表格。", tags: ["基础"], related: [] },
  { word: "tradition", phonetic: "/trəˈdɪʃn/", pos: "n.", meaning: "传统", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "recommend", phonetic: "/ˌrekəˈmend/", pos: "v.", meaning: "推荐", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "courage", phonetic: "/ˈkʌrɪdʒ/", pos: "n.", meaning: "勇气", grade: "junior", example: "He has great courage.", trans: "他有很大的勇气。", tags: ["不可数", "名词courageous"], related: [
    { type: "名词形式", word: "courageous" }
  ] },
  { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", pos: "v.", meaning: "享受；喜欢", grade: "junior", example: "I enjoy reading.", trans: "我喜欢阅读。", tags: ["后接doing"], related: [] },
  { word: "medium", phonetic: "/ˈmiːdiəm/", pos: "n.", meaning: "媒介", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "downtown", phonetic: "/ˌdaʊnˈtaʊn/", pos: "n.", meaning: "市中心", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "downstairs", phonetic: "/ˌdaʊnˈsteəz/", pos: "adv.", meaning: "在楼下", grade: "junior", example: "He went downstairs.", trans: "他下楼了。", tags: ["反义词upstairs"], related: [
    { type: "反义词", word: "upstairs" }
  ] },
  { word: "maintain", phonetic: "/meɪnˈteɪn/", pos: "v.", meaning: "维持", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "consider", phonetic: "/kənˈsɪdə(r)/", pos: "v.", meaning: "考虑", grade: "junior", example: "Consider my suggestion.", trans: "考虑一下我的建议。", tags: ["后接doing"], related: [] },
  { word: "god", phonetic: "/ɡɒd/", pos: "n.", meaning: "上帝", grade: "junior", example: "God bless you.", trans: "上帝保佑你。", tags: ["基础"], related: [] },
  { word: "happen", phonetic: "/ˈhæpən/", pos: "v.", meaning: "发生", grade: "junior", example: "What happened?", trans: "发生了什么？", tags: ["短语happen to do"], related: [] },
  { word: "urban", phonetic: "/ˈɜːbən/", pos: "adj.", meaning: "城市的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "assistant", phonetic: "/əˈsɪstənt/", pos: "n.", meaning: "助手", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "tear", phonetic: "/tɪə(r)/", pos: "n.", meaning: "眼泪", grade: "junior", example: "Tears ran down her face.", trans: "眼泪流下她的脸。", tags: ["常用复数"], related: [] },
  { word: "element", phonetic: "/ˈelɪmənt/", pos: "n.", meaning: "元素", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "championship", phonetic: "/ˈtʃæmpiənʃɪp/", pos: "n.", meaning: "锦标赛", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "abroad", phonetic: "/əˈbrɔːd/", pos: "adv.", meaning: "在国外", grade: "junior", example: "She went abroad last year.", trans: "她去年出国了。", tags: ["高频"], related: [] },
  { word: "august", phonetic: "/ɔːˈɡʌst/", pos: "adj.", meaning: "威严的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "valuable", phonetic: "/ˈvæljuəbl/", pos: "adj.", meaning: "有价值的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "forest", phonetic: "/ˈfɒrɪst/", pos: "n.", meaning: "森林", grade: "junior", example: "The forest is large.", trans: "森林很大。", tags: ["基础"], related: [] },
  { word: "central", phonetic: "/ˈsentrəl/", pos: "adj.", meaning: "中央的", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "year", phonetic: "/jɪə(r)/", pos: "n.", meaning: "年", grade: "junior", example: "Happy New Year!", trans: "新年快乐！", tags: ["基础"], related: [] },
  { word: "democracy", phonetic: "/dɪˈmɒkrəsi/", pos: "n.", meaning: "民主", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "conflict", phonetic: "/ˈkɒnflɪkt/", pos: "n.", meaning: "冲突", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] },
  { word: "book", phonetic: "/bʊk/", pos: "n.", meaning: "书", grade: "junior", example: "I am reading a book.", trans: "我在看书。", tags: ["基础"], related: [] },
  { word: "kick", phonetic: "/kɪk/", pos: "v.", meaning: "踢", grade: "junior", example: "Kick the ball.", trans: "踢球。", tags: ["基础"], related: [] },
  { word: "arcade", phonetic: "/ɑːˈkeɪd/", pos: "n.", meaning: "拱廊", grade: "junior", example: "", trans: "", tags: ["高中常用词", "高考高频"], related: [] }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = WORDS_JUNIOR; }
