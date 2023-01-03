// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8TtF2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gLLPy":[function(require,module,exports) {
const area = document.querySelector("#galaxy");
let amountMeteor = 100;
let amountStar = 600;
let i = 0;
let j = 0;
let k = 0;
function galaxy() {
    while(i < amountMeteor){
        // meteor from top
        let drop = document.createElement("span");
        let size = Math.random() + 0.5;
        let posX = Math.floor(Math.random() * area.offsetWidth);
        let delay = Math.random() * -200000;
        let duration = Math.random() * 200 + 3;
        drop.style.width = size + "px";
        drop.style.left = posX + "px";
        drop.style.top = 0;
        drop.style.animationDelay = delay + "s";
        drop.style.animationDuration = duration + "s";
        area.appendChild(drop);
        i++;
    }
    while(k < amountMeteor * 2){
        // meteor from right
        let drop1 = document.createElement("span");
        let size1 = Math.random() + 0.3;
        let posY = Math.floor(Math.random() * area.offsetHeight);
        let delay1 = Math.random() - 200;
        let duration1 = Math.random() * 300 + 3;
        drop1.style.width = size1 + "px";
        drop1.style.right = "15px";
        drop1.style.top = posY + "px";
        drop1.style.animationDelay = delay1 + "s";
        drop1.style.animationDuration = duration1 + "s";
        area.appendChild(drop1);
        k++;
    }
    while(j < amountStar){
        let star = document.createElement("j");
        let size2 = Math.random() * 3;
        let posX1 = Math.floor(Math.random() * area.offsetWidth * 2);
        let posY1 = Math.floor(Math.random() * area.offsetHeight);
        let duration2 = Math.random() * 5000 + 10;
        star.style.width = size2 + "px";
        star.style.height = size2 + "px";
        star.style.left = posX1 + "px";
        star.style.top = posY1 + "px";
        star.style.animationDuration = duration2 + "s";
        area.appendChild(star);
        j++;
    }
}
function renderMenu() {
    const menuItem = [
        {
            name: "Professional",
            link: "professional",
            active: false
        },
        {
            name: "Personal",
            link: "personal",
            active: false
        },
        {
            name: "Blog",
            link: "blogs",
            active: false
        },
        {
            name: "Contact",
            link: "contact",
            active: false
        }
    ];
    const navbar = document.getElementById("navbar");
    let html = "";
    menuItem.forEach((i)=>{
        let anchor = `<a href="#${i.link}" class="text-base font-medium
     text-white hover:text-pink">${i.name}</a>`;
        html += anchor;
    });
    navbar.innerHTML = html;
}
function renderProfessionalSection() {
    const professional = {
        title: "Mobina Khalilzade",
        description: "I am a computer science graduate. Since 2019, I have been working as a front-end developer specializing in the Angular framework in order to build and develop websites, PWAs, and admin dashboards. I have experienced working for both startup and well-established companies. I am currently living in Istanbul, Turkey but I was born in Tehran, Iran. I speak Farsi, English, Spanish and Turkish.",
        img: "./assets/images/mobinakhalilzade-crop.jpg",
        link: "https://drive.google.com/file/d/17w01GAwFCKACeK3YYbeA1-C9bXeqWlZo/view?usp=share_link"
    };
    const photo = document.getElementById("photo");
    photo.innerHTML = `<img width="200" height="100" class="mx-auto rounded-full mb-4 shadow-md"
    src="${professional.img}" alt="${professional.title}" />
    <div class="flex justify-center">
   <p class="text-black basis-full md:basis-2/3">${professional.description}</p></div>
   <div class="text-center text-pink mx-auto">
   <label class="block my-5">Here my resume</label>
   <a target="_blank"href=${professional.link}><i class="fa-solid fa-file-lines fa-2xl"></i></a></div>
   `;
}
function renderSkills() {
    const data = [
        {
            title: "HTML",
            logo: "fa-brands fa-html5",
            photo: "./assets/images/html.png",
            level: "expert"
        },
        {
            title: "CSS",
            logo: "fa-brands fa-css3-alt",
            photo: "../../../../assets/images/css.png",
            level: "expert"
        },
        {
            title: "Bootstrap",
            logo: "fa-brands fa-css3-alt",
            photo: "../../../../assets/images/bootstrap.png",
            level: "expert"
        },
        {
            title: "Tailwind",
            logo: "fa-brands fa-css3-alt",
            photo: "../../../../assets/images/tailwind.png",
            level: "advanced"
        },
        {
            title: "JavaScript",
            logo: "fa-brands fa-square-js",
            photo: "../../../../assets/images/js.png",
            level: "advanced"
        },
        {
            title: "TypeScript",
            logo: "fa-regular fa-t",
            photo: "../../../../assets/images/ts.png",
            level: "advanced"
        },
        {
            title: "Angular",
            logo: "fa-brands fa-angular",
            photo: "../../../../assets/images/angular.png",
            level: "advanced"
        },
        {
            title: "RxJs",
            logo: "fa-brands fa-react",
            photo: "../../../../assets/images/rxjs.png",
            level: "intermediate"
        },
        {
            title: "React",
            logo: "fa-brands fa-react",
            photo: "../../../../assets/images/react.png",
            level: "intermediate"
        },
        {
            title: "Redux",
            logo: "fa-brands fa-react",
            photo: "../../../../assets/images/redux.png",
            level: "basic"
        },
        {
            title: "Git",
            logo: "fa-brands fa-git",
            photo: "../../../../assets/images/git.png",
            level: "intermediate"
        },
        {
            title: "NodeJs",
            logo: "fa-brands fa-node-js",
            photo: "../../../../assets/images/nodejs.png",
            level: "intermediate"
        },
        {
            title: "Express",
            logo: "fa-brands fa-node-js",
            photo: "../../../../assets/images/express.png",
            level: "learning"
        },
        {
            title: "Mongo DB",
            logo: "fa-solid fa-database",
            photo: "../../../../assets/images/mongodb.png",
            level: "learning"
        },
        {
            title: "Adobe Photoshop",
            logo: "fa-regular fa-p",
            photo: "../../../../assets/images/photoshop.png",
            level: "basic "
        },
        {
            title: "Adobe XD",
            logo: "fa-regular fa-x",
            photo: "../../../../assets/images/xd.png",
            level: "basic"
        }
    ];
    const skills = document.getElementById("skills");
    let h2 = document.createElement("h2");
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-code", "text-blue");
    const skillText = document.createTextNode("Skills ");
    h2.appendChild(skillText);
    h2.appendChild(i);
    h2.classList.add("text-black", "text-center", "pb-8");
    skills.appendChild(h2);
    let html = "";
    // <i class="${i.logo} fa-xl text-blue p-2"></i> ${i.title}
    data.forEach((i)=>{
        let segment = `<div class="flex gap-1 justify-between sm:justify-center mx-0 lg:mx-10">
    <div class="flex basis-2/6 sm:basis-1/6 my-2">
    <img width="50" height="40" src=${i.photo} alt=${i.title} class="mr-2 md:mr-5 w-5 h-5 md:w-12 md:h-12"  />
    <p class="text-dark font-semibold self-center">${i.title}</p>
    </div>
    <div class="bar ${i.level} self-center basis-4/6"></div>
    </div>`;
        html += segment;
    });
    skills.innerHTML += html;
}
function renderPersonalSection() {
    const personal = {
        title: "Shared Module",
        img: "../../../../assets/images/mobina.jpg"
    };
    const summary = document.getElementById("summary");
    summary.innerHTML = `<img width="200" height="200" class="mx-auto rounded-3xl mb-4 shadow-md"
  src="${personal.img}" alt="${personal.title}" />
  <div class="flex justify-center">
 <p class="text-black basis-full md:basis-2/3 mt-10">
  I am 26 years old married woman who is a feminist
  <img class="inline m-0 p-0" width="30" height="30" src=../assets/images/feminism.png /> at heart and besides coding,
  I spend my time on many different things. I care about a healthy lifestyle, so I cook for almost every meal.
  baking cookies and cakes make me really happy. Honestly, I enjoy cooking more than eating :)
  I lift weights every other day to stay fit.
  Following and listening to <a class="text-blue" href="https://hubermanlab.com/" target=_blank>Huberman's podcast</a> has helped me a lot in having a healthy lifestyle.
  The second most important hobby of mine is watching movies and TV series.
  I like watching popular TV shows.
  But I love artistic movies and reading their critics or joining movie criticism sessions.
  I can watch movies with mythological stories like 
  <a class="text-blue" href="https://www.imdb.com/title/tt5109784/" target=_blank>Mother!</a> or
  <a class="text-blue" href="https://www.imdb.com/title/tt0870984/?ref_=nv_sr_srsg_4" target=_blank>Antichrist</a>
  over and over again. My favortie directors are
  <a class="text-blue" href="https://www.imdb.com/name/nm0000233/" target=_blank>Quentin Tarantino</a> and
  <a class="text-blue" href="https://www.imdb.com/name/nm0001885/" target=_blank>Lars von Trier</a>.
  I used to swim and take part in swimming competitions during primary and high school but now I just swim in summers and for recreation :)
  This is a kind of side effect of having a job like programming:))</p></div>
  <div class="w-[75%] mx-auto flex justify-around md:justify-center gap-2 md:gap-10 text-blue my-8 md:my-10">
  <i class="fa-solid fa-cookie-bite fa-3x"></i>
  <i class="fa-solid fa-dumbbell fa-3x"></i>
  <i class="fa-solid fa-video fa-3x"></i>
  <i class="fa-solid fa-person-swimming fa-3x"></i>
  </div>

 `;
}
function renderBlog() {
    const data = [
        {
            title: "Shared Module",
            description: "We intend to build an angular application with shared module for making use of reusable codes.",
            img: "../../../../assets/images/shared-module.png",
            link: "https://medium.com/@mobinaya/shared-module-in-angular-bc56f8264b2e",
            date: "May 28, 2021"
        }
    ];
    const blog = document.getElementById("blogs");
    let html = "";
    data.forEach((i)=>{
        let segment = `<a href=${i.link} target="_blank" class="self-center rounded border border-gray
     shadow text-dark p-4">
    <img src="${i.img}" alt="${i.title}">
    <h3 class="my-4">${i.title}</h3>
    <p class="text-base text-truncate-2">${i.description}</p>
    <small class="text-seconary">
    ${i.date}
    </small>
    </a>`;
        html += segment;
    });
    blog.innerHTML = html;
}
document.getElementById("sendEmail").addEventListener("click", function() {
    let name = document.querySelector('[name="name"]').value;
    let message = document.querySelector('[name="message"]').value;
    let subject = "Emailing from your website";
    window.open(`mailto:mobinakhalilzade@gmail.com?subject=${subject}&body=Hi Mobina, I am ${name}. ${message}`);
});
function renderSocialMedia() {
    const socialMediaItems = [
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/mobina-khalilzade/",
            icon: "fab fa-linkedin-in"
        },
        {
            name: "Github",
            link: "https://github.com/mobinakhalilzade",
            icon: "fab fa-github"
        },
        {
            name: "Whatsapp",
            link: "https://wa.me/+989016355725",
            icon: "fab fa-whatsapp"
        },
        {
            name: "Telegram",
            link: "https://t.me/mobinaya",
            icon: "fa-brands fa-telegram"
        }
    ];
    const socialMedia = document.getElementById("socialMedia");
    let html = "";
    socialMediaItems.forEach((i)=>{
        let segment = `<div class="text-center">
    <a class="text-primary" href="${i.link}" target="_blank">
      <i class="${i.icon} fa-2x text-blue"></i>
    </a>
    </div>`;
        html += segment;
    });
    socialMedia.innerHTML = html;
}
function getYear() {
    let footer = document.getElementById("year");
    let year = new Date().getFullYear();
    footer.innerHTML = `<small class="text-mute"
  >Mobina Khalilzade <i class="fa fa-copyright text-pink"></i> ${year}
</small>`;
}
galaxy();
renderMenu();
renderBlog();
renderSocialMedia();
renderSkills();
renderProfessionalSection();
renderPersonalSection();
getYear();

},{}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
