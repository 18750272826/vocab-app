/* ===========================================
   Service Worker - 核心词汇速记 PWA
   功能: 离线缓存、资源预缓存、更新管理
   =========================================== */

const CACHE_VERSION = 'vocab-pwa-v11';
const CACHE_NAME = CACHE_VERSION;

// 需要预缓存的核心资源（带 ?v=11 版本号，与 index.html 中的引用一致，便于突破 HTTP 缓存）
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css?v=11',
  './app.js?v=11',
  './words_junior.js?v=11',
  './words_senior.js?v=11',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ===== 安装：预缓存核心资源 =====
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // 逐个缓存，避免某个资源失败导致全部失败
        return Promise.allSettled(
          PRECACHE_URLS.map(url => cache.add(url))
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ===== 激活：清理旧缓存 =====
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        );
      })
      .then(() => self.clients.claim())
  );
});

// ===== 请求拦截：网络优先，离线回退缓存 =====
// 在线时始终获取最新版本（保证 PWA 每次打开都能及时更新），离线时才使用缓存
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // 只处理 GET 请求
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 跳过跨域请求（如字体CDN等）
  if (url.origin !== self.location.origin) return;

  const isDocument = request.mode === 'navigate' || request.destination === 'document';

  event.respondWith(
    // 网络优先：文档请求跳过 HTTP 缓存，确保拿到最新 HTML
    fetch(request, isDocument ? { cache: 'no-store' } : undefined)
      .then((response) => {
        // 缓存最新成功响应，供离线时使用
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => {
        // 离线回退：优先返回已缓存资源
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          // 页面请求离线时回退到首页缓存
          if (isDocument) return caches.match('./index.html');
          return undefined;
        });
      })
  );
});

// ===== 消息通信：接收更新通知 =====
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
