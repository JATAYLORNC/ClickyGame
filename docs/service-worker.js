"use strict";var precacheConfig=[["/index.html","e30a0287945650c0eb9acb6c4b1e2aa3"],["/static/css/main.3a23da5e.css","69529be7427e574c0e74bbed912cdbd1"],["/static/js/main.569d749e.js","773810658040bc7cf4a62d18a340d989"],["/static/media/berlioz.ebaf1f0d.png","ebaf1f0daeec034dedaf9b290eb417bf"],["/static/media/disney-backgrounds.c5f0a017.jpg","c5f0a01720fce9422eba8762b9ae5331"],["/static/media/donald.fe516e4c.png","fe516e4cf31f19f1ecb5a753b9245fe3"],["/static/media/eeyore.7ded5cce.png","7ded5ccec2b55e025ab75ee6f0e5c2e2"],["/static/media/flower.580e309a.png","580e309afdc6ba3787cba751d8b3aee3"],["/static/media/goofy.737924b3.png","737924b39b463821a28edc5eb14eb97d"],["/static/media/kaa.e44ecdd6.png","e44ecdd61dfebe542434e4a9ad51cc22"],["/static/media/lilo.026dde14.png","026dde14245556adf560e658feb6c887"],["/static/media/marie.4a809002.png","4a8090024370b017bc7070e9f098d431"],["/static/media/mickey.417dd320.png","417dd32035e9927e6413cc4a6515b47d"],["/static/media/minnie.253f86bc.png","253f86bcb0b20946e96295445c1fb055"],["/static/media/mowgli.75b95ed8.png","75b95ed8aa8a9c9d5238a4b5ce11497d"],["/static/media/pooh.662f306e.png","662f306e9b1da59d5d278239c4c82cca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});