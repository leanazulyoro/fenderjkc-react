"use strict";var precacheConfig=[["/fenderjkc-react/index.html","285afbb68288786f10872b6479191f07"],["/fenderjkc-react/static/css/main.7f917183.css","0bd7a6ec9ebd6aea5651a3111c2ee84e"],["/fenderjkc-react/static/js/main.cf0a3c20.js","ed63104125e163c444c638bd9fe851d6"],["/fenderjkc-react/static/media/FranklinGothic-ExtraCond.8d53e7c2.otf","8d53e7c269f7da5536c06143cb52e570"],["/fenderjkc-react/static/media/FranklinGothic-ExtraCond.e7c0893f.eot","e7c0893f4ea06e2fff8713a3225ae85b"],["/fenderjkc-react/static/media/FranklinGothic-ExtraCond.f18549d1.ttf","f18549d183fb89e6a0b8bdf1f980dcaa"],["/fenderjkc-react/static/media/ITCFranklinGothicStd-DmCp.0ffd422f.ttf","0ffd422ffa6365b6d16bdc2caba6587d"],["/fenderjkc-react/static/media/ITCFranklinGothicStd-DmCp.abb34c62.otf","abb34c62e4ddf2c7a36716246656b22a"],["/fenderjkc-react/static/media/ITCFranklinGothicStd-DmCp.e4ac8d0d.eot","e4ac8d0d360b758e304787c7957b89fc"],["/fenderjkc-react/static/media/bg.1fe314c6.jpg","1fe314c699c3ce7a820e80dc7c0de915"],["/fenderjkc-react/static/media/caracteristicas_a.dfa2fc80.png","dfa2fc80dcbc5ddfdd9d8d0445332168"],["/fenderjkc-react/static/media/caracteristicas_b.99dddf97.png","99dddf977c73c112e230b149d384de1e"],["/fenderjkc-react/static/media/caracteristicas_c.568c830d.png","568c830d8d8bd926bad6746ee5e0366d"],["/fenderjkc-react/static/media/caracteristicas_d.6ebcb8f5.png","6ebcb8f5606616d97b4163cc705b453b"],["/fenderjkc-react/static/media/guitar1.c12b57ff.png","c12b57ff0d4a183727e79f803de4f940"],["/fenderjkc-react/static/media/guitar2.24a5cd24.png","24a5cd24ccabe03e2346e0477d5d99a1"],["/fenderjkc-react/static/media/kurt1.940b2197.png","940b21971b8b0ebec4df39874d4f513b"],["/fenderjkc-react/static/media/logo.38c4e74f.png","38c4e74fa624e4e481222739b23a235c"],["/fenderjkc-react/static/media/page1_shadows.cae732d8.png","cae732d8909a1dd649127208f3036a54"],["/fenderjkc-react/static/media/sprite_main.dfd60ece.png","dfd60ece5edff1573b2d60ec3318e744"],["/fenderjkc-react/static/media/texture.e8d06fd3.png","e8d06fd33c78ab15533605e0bc86ddfb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/fenderjkc-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});