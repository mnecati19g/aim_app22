'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "ff33f86ed70a094840e2462c12e5691a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "101670a8624c2e804d1123e207d9781f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8a1b6e2a2518f09535f218f80b15fea",
".git/logs/refs/heads/master": "a8a1b6e2a2518f09535f218f80b15fea",
".git/logs/refs/remotes/origin/master": "2ca6a2ef4e1ddcb42441c1fca9b741b8",
".git/objects/02/57d0ae0c8d8541f77aa9907672f29a8dbfc424": "09853b2ca2582a4bec1e8342969653c9",
".git/objects/0f/962077a91c515301d2192eea1fc16a1d568311": "ef2b44fc386da36b5ba243194a8915c4",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/66cf1ad142b8bbbc22dbafa4f59ffd77795777": "fed1de156f81bce41727c685bf369524",
".git/objects/32/b01e0c3d99a887e783499e83abb6a2ee686af3": "47131e3056e7e30b77d4a6d0a7904550",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/539a9b45929429da2006f5e2da62067413b17e": "1e0284c072c3bfd75b0f5151dd705a2d",
".git/objects/59/e3c4092f94010cca553a13223c92007b048378": "2a1266849bceb95e6bf4ee2f5923cb08",
".git/objects/5c/d092249ef898e5c88b8268330f7aaba9d158ba": "aafe963fa0e818bea64d9642203a34d1",
".git/objects/5f/223115dbd5ffd4be377d5c1ee299e7f6248271": "8f25854f909280b3ce679124c515d0d7",
".git/objects/60/da7824e19f2a0c93421b5c9a6071936394a4bb": "1fd12754ae656bc14455e3fa85e727db",
".git/objects/70/896bce50332b28e4b7a5d602658bda7fb7315f": "6e2cff5e3318aabf0fa46f0f205b43fb",
".git/objects/70/fec744bd8797334f7a24f4af05ca7d86c88a1c": "c70d886a20fa6f5896044be7c10dc84d",
".git/objects/71/7ab9d05f140e88e8b1f18ceb43f877a252f209": "c144da95ce1d4ea2b5704aaf5fc957e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/791ec282e820f15cef91f4959946a4693121b8": "50cdd61858df1788695393d6741dbad8",
".git/objects/81/cbf913610d47cf51ed36574c3f4670b0afb537": "373ef4e33bdc5c74784df92cb88fada5",
".git/objects/83/f418f0fc315c8bde9711de31ee669d8bf8fa71": "7af04fdd4dbbe270a5a12ef14af53202",
".git/objects/85/70e421d27b3c81f809f97ebd2c903c96c24cb0": "ba4fc3a58428b2a00857c520cf2a2c3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/1de98cedfd9f86a5d6a257f3a8d4e8860f297d": "474ccee84a12f9982f38eaa13798e0da",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/a44ef4bfb73f990f195c3440a313a86e5bd344": "7d15ef36b134def3aebfa4c1299323ca",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/37e926299aa936e3d6189483d68ef4f8269494": "f949db132b4fec638402816531a40ce5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/a54359942982611109829d9d587114ce21e12b": "077715df92bd69a90257c19aa56c335d",
".git/objects/bf/42a3d192e06779657d99ead80096a99fcf974e": "843f9ab3cc7bc7feec6edfb68c18c68b",
".git/objects/c7/fb340d7ac558024bd64772c864eabcb22339f2": "05286d2bb1675d5bf1c34db15aecf3cc",
".git/objects/ca/3456ea9e95e19ed61b5550356868db0e089130": "ffe93f46002b867ac1903c3aebbf0784",
".git/objects/cc/b76ea9078e011f0f9e13b29f278dd9504c2c86": "e199534aac100d6c1927e62c8b7fc430",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/2321381b3405cbc19d427e5c8043e41fe58f3f": "33825b21ecf782a16d73468154032c86",
".git/objects/ee/85197f0ec725136ce8ae41ab7bff0a93f7b835": "7d7b43d66339a96a6b1e826e14f49630",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/ccd0be89aec1cdf4ea4a97702ea81a42d8d64b": "77113500ea2bb993ff33cb3d648dd789",
".git/objects/fa/bfede4485ab200472366773caccea6ac95c11e": "ff64310700ba413c158dfd0b5e49f409",
".git/refs/heads/master": "7d58a89eb3b69f1f9c62dcefc0deeb3f",
".git/refs/remotes/origin/master": "7d58a89eb3b69f1f9c62dcefc0deeb3f",
"assets/AssetManifest.json": "4e65073d6b90e17b733fae0deea692ae",
"assets/assets/images/aslan.jpg": "8f0c085eacb04f598d19798e3622e179",
"assets/assets/images/ayi.jpg": "0518052f15b0eff7e4e608224b5be35b",
"assets/assets/images/bear.jpg": "02f8797a379dab7644096a4066f6f02e",
"assets/assets/images/cita.jpg": "3d001b2b63b119ff0454d52f89a05c61",
"assets/assets/images/dinazor.jpg": "7dff90fdea42bd8aec58f95037f1bc04",
"assets/assets/images/fil.jpg": "82cab4290d238f91b00b69075b8e4832",
"assets/assets/images/geyik.jpg": "f0a6144e7cdda3dc58ab3904b64e68d1",
"assets/assets/images/kaplan.jpg": "eae8d3108d457a4d7de1088b43e24449",
"assets/assets/images/keci.jpg": "c6eae581d1f4f0a30936ab4993d19b79",
"assets/assets/images/kurt.jpg": "4fceaf7db278fbffda71f19842b4b632",
"assets/assets/images/kus.jpg": "9ee87f3c3b4adba5fd159e2b59337641",
"assets/assets/images/kuzu.jpg": "84e8d13683e5f5ed2127e650f9335838",
"assets/assets/images/maymun.jpg": "59d727f52b79d7179139f25975c77ef1",
"assets/assets/images/panda.jpg": "f355ffedddd63af202a74cd8b32dfb82",
"assets/assets/images/rakun.jpg": "f6385441c3b1d0c8c567b284d3c4893e",
"assets/assets/images/tavsan.jpg": "f1bd20ea79c7566e93ae5c5e4eba0bf4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "c6290104f2b2b25ab3a5a28e30c08cce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d6c92522c62a1560ca47895438bbf183",
"/": "d6c92522c62a1560ca47895438bbf183",
"main.dart.js": "419d573b603000bfe61d818b392192fc",
"manifest.json": "e0d1cb6802d3fa5151c847de0d694eb4",
"version.json": "c2dc36a6d390c3e532ea3d80d9d74e95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
