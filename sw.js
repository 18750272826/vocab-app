/* ===========================================
   Service Worker - 核心词汇速记 PWA
   功能: 离线缓存、资源预缓存、更新管理
   =========================================== */

const CACHE_VERSION = 'vocab-pwa-v3';
const CACHE_NAME = CACHE_VERSION;

// 需要预缓存的核心资源
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './words_junior.js',
  './words_senior.js',
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

// ===== 请求拦截：缓存优先，网络回退 =====
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // 只处理 GET 请求
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 跳过跨域请求（如字体CDN等）
  if (url.origin !== self.location.origin) return;

  // 缓存优先策略
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // 命中缓存，同时后台更新（stale-while-revalidate）
          fetch(request)
            .then((freshResponse) => {
              if (freshResponse && freshResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, freshResponse.clone());
                });
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // 未命中缓存，从网络获取
        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // 缓存新资源
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
            return response;
          })
          .catch(() => {
            // 离线回退：如果是页面请求，返回首页
            if (request.destination === 'document') {
              return caches.match('./index.html');
            }
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
