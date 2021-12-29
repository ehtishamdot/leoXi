// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"82lpU":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b2e9ed71dc506bb0";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"kQVkM":[function(require,module,exports) {
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define([
        "@popperjs/core"
    ], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function(t1) {
    "use strict";
    function e1(t1) {
        if (t1 && t1.__esModule) return t1;
        var e1 = Object.create(null);
        return t1 && Object.keys(t1).forEach(function(s) {
            if ("default" !== s) {
                var i = Object.getOwnPropertyDescriptor(t1, s);
                Object.defineProperty(e1, s, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t1[s];
                    }
                });
            }
        }), e1.default = t1, Object.freeze(e1);
    }
    var s1 = e1(t1);
    const i1 = {
        find: (t1, e1 = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e1, t1))
        ,
        findOne: (t1, e1 = document.documentElement)=>Element.prototype.querySelector.call(e1, t1)
        ,
        children: (t1, e1)=>[].concat(...t1.children).filter((t2)=>t2.matches(e1)
            )
        ,
        parents (t, e) {
            const s1 = [];
            let i1 = t.parentNode;
            for(; i1 && i1.nodeType === Node.ELEMENT_NODE && 3 !== i1.nodeType;)i1.matches(e) && s1.push(i1), i1 = i1.parentNode;
            return s1;
        },
        prev (t, e) {
            let s1 = t.previousElementSibling;
            for(; s1;){
                if (s1.matches(e)) return [
                    s1
                ];
                s1 = s1.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let s1 = t.nextElementSibling;
            for(; s1;){
                if (s1.matches(e)) return [
                    s1
                ];
                s1 = s1.nextElementSibling;
            }
            return [];
        }
    }, n = (t2)=>{
        do t2 += Math.floor(1000000 * Math.random());
        while (document.getElementById(t2))
        return t2;
    }, o = (t2)=>{
        let e2 = t2.getAttribute("data-bs-target");
        if (!e2 || "#" === e2) {
            let s1 = t2.getAttribute("href");
            if (!s1 || !s1.includes("#") && !s1.startsWith(".")) return null;
            s1.includes("#") && !s1.startsWith("#") && (s1 = "#" + s1.split("#")[1]), e2 = s1 && "#" !== s1 ? s1.trim() : null;
        }
        return e2;
    }, r = (t2)=>{
        const e2 = o(t2);
        return e2 && document.querySelector(e2) ? e2 : null;
    }, a1 = (t2)=>{
        const e2 = o(t2);
        return e2 ? document.querySelector(e2) : null;
    }, l = (t2)=>{
        t2.dispatchEvent(new Event("transitionend"));
    }, c = (t2)=>!(!t2 || "object" != typeof t2) && ((void 0) !== t2.jquery && (t2 = t2[0]), (void 0) !== t2.nodeType)
    , h = (t2)=>c(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? i1.findOne(t2) : null
    , d = (t2, e2, s1)=>{
        Object.keys(s1).forEach((i1)=>{
            const n1 = s1[i1], o1 = e2[i1], r1 = o1 && c(o1) ? "element" : null == (a2 = o1) ? "" + a2 : ({
            }).toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a2;
            if (!new RegExp(n1).test(r1)) throw new TypeError(`${t2.toUpperCase()}: Option "${i1}" provided type "${r1}" but expected type "${n1}".`);
        });
    }, u = (t2)=>!(!c(t2) || 0 === t2.getClientRects().length) && "visible" === getComputedStyle(t2).getPropertyValue("visibility")
    , g = (t2)=>!t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || ((void 0) !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled"))
    , p = (t2)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t2.getRootNode) {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
        }
        return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? p(t2.parentNode) : null;
    }, f = ()=>{
    }, m = (t2)=>t2.offsetHeight
    , _ = ()=>{
        const { jQuery: t2  } = window;
        return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
    }, b = [], v = ()=>"rtl" === document.documentElement.dir
    , y = (t2)=>{
        var e2;
        e2 = ()=>{
            const e3 = _();
            if (e3) {
                const s1 = t2.NAME, i1 = e3.fn[s1];
                e3.fn[s1] = t2.jQueryInterface, e3.fn[s1].Constructor = t2, e3.fn[s1].noConflict = ()=>(e3.fn[s1] = i1, t2.jQueryInterface)
                ;
            }
        }, "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", ()=>{
            b.forEach((t3)=>t3()
            );
        }), b.push(e2)) : e2();
    }, w = (t2)=>{
        "function" == typeof t2 && t2();
    }, E = (t2, e3, s1 = !0)=>{
        if (!s1) return void w(t2);
        const i1 = ((t3)=>{
            if (!t3) return 0;
            let { transitionDuration: e4 , transitionDelay: s2  } = window.getComputedStyle(t3);
            const i2 = Number.parseFloat(e4), n1 = Number.parseFloat(s2);
            return i2 || n1 ? (e4 = e4.split(",")[0], s2 = s2.split(",")[0], 1000 * (Number.parseFloat(e4) + Number.parseFloat(s2))) : 0;
        })(e3) + 5;
        let n1 = !1;
        const o1 = ({ target: s2  })=>{
            s2 === e3 && (n1 = !0, e3.removeEventListener("transitionend", o1), w(t2));
        };
        e3.addEventListener("transitionend", o1), setTimeout(()=>{
            n1 || l(e3);
        }, i1);
    }, A = (t2, e3, s1, i1)=>{
        let n1 = t2.indexOf(e3);
        if (-1 === n1) return t2[!s1 && i1 ? t2.length - 1 : 0];
        const o1 = t2.length;
        return n1 += s1 ? 1 : -1, i1 && (n1 = (n1 + o1) % o1), t2[Math.max(0, Math.min(n1, o1 - 1))];
    }, T = /[^.]*(?=\..*)\.|.*/, C = /\..*/, k = /::\d+$/, L = {
    };
    let O = 1;
    const D = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, I = /^(mouseenter|mouseleave)/i, N = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function S(t2, e3) {
        return e3 && `${e3}::${O++}` || t2.uidEvent || O++;
    }
    function x(t2) {
        const e3 = S(t2);
        return t2.uidEvent = e3, L[e3] = L[e3] || {
        }, L[e3];
    }
    function M(t2, e3, s1 = null) {
        const i1 = Object.keys(t2);
        for(let n1 = 0, o1 = i1.length; n1 < o1; n1++){
            const o1 = t2[i1[n1]];
            if (o1.originalHandler === e3 && o1.delegationSelector === s1) return o1;
        }
        return null;
    }
    function P(t2, e3, s1) {
        const i1 = "string" == typeof e3, n1 = i1 ? s1 : e3;
        let o1 = R(t2);
        return N.has(o1) || (o1 = t2), [
            i1,
            n1,
            o1
        ];
    }
    function j(t2, e3, s1, i1, n1) {
        if ("string" != typeof e3 || !t2) return;
        if (s1 || (s1 = i1, i1 = null), I.test(e3)) {
            const t3 = (t4)=>function(e4) {
                    if (!e4.relatedTarget || e4.relatedTarget !== e4.delegateTarget && !e4.delegateTarget.contains(e4.relatedTarget)) return t4.call(this, e4);
                }
            ;
            i1 ? i1 = t3(i1) : s1 = t3(s1);
        }
        const [o1, r1, a3] = P(e3, s1, i1), l1 = x(t2), c1 = l1[a3] || (l1[a3] = {
        }), h1 = M(c1, r1, o1 ? s1 : null);
        if (h1) return void (h1.oneOff = h1.oneOff && n1);
        const d1 = S(r1, e3.replace(T, "")), u1 = o1 ? function(t3, e4, s2) {
            return function i2(n2) {
                const o2 = t3.querySelectorAll(e4);
                for(let { target: r2  } = n2; r2 && r2 !== this; r2 = r2.parentNode)for(let a4 = o2.length; a4--;)if (o2[a4] === r2) return n2.delegateTarget = r2, i2.oneOff && B.off(t3, n2.type, e4, s2), s2.apply(r2, [
                    n2
                ]);
                return null;
            };
        }(t2, s1, i1) : function(t3, e4) {
            return function s2(i2) {
                return i2.delegateTarget = t3, s2.oneOff && B.off(t3, i2.type, e4), e4.apply(t3, [
                    i2
                ]);
            };
        }(t2, s1);
        u1.delegationSelector = o1 ? s1 : null, u1.originalHandler = r1, u1.oneOff = n1, u1.uidEvent = d1, c1[d1] = u1, t2.addEventListener(a3, u1, o1);
    }
    function H(t2, e3, s1, i1, n1) {
        const o1 = M(e3[s1], i1, n1);
        o1 && (t2.removeEventListener(s1, o1, Boolean(n1)), delete e3[s1][o1.uidEvent]);
    }
    function R(t2) {
        return t2 = t2.replace(C, ""), D[t2] || t2;
    }
    const B = {
        on (t, e, s, i) {
            j(t, e, s, i, !1);
        },
        one (t, e, s, i) {
            j(t, e, s, i, !0);
        },
        off (t, e, s, i) {
            if ("string" != typeof e || !t) return;
            const [n1, o1, r1] = P(e, s, i), a3 = r1 !== e, l1 = x(t), c1 = e.startsWith(".");
            if ((void 0) !== o1) {
                if (!l1 || !l1[r1]) return;
                return void H(t, l1, r1, o1, n1 ? s : null);
            }
            c1 && Object.keys(l1).forEach((s2)=>{
                !function(t2, e3, s3, i2) {
                    const n2 = e3[s3] || {
                    };
                    Object.keys(n2).forEach((o2)=>{
                        if (o2.includes(i2)) {
                            const i3 = n2[o2];
                            H(t2, e3, s3, i3.originalHandler, i3.delegationSelector);
                        }
                    });
                }(t, l1, s2, e.slice(1));
            });
            const h1 = l1[r1] || {
            };
            Object.keys(h1).forEach((s2)=>{
                const i2 = s2.replace(k, "");
                if (!a3 || e.includes(i2)) {
                    const e3 = h1[s2];
                    H(t, l1, r1, e3.originalHandler, e3.delegationSelector);
                }
            });
        },
        trigger (t, e, s) {
            if ("string" != typeof e || !t) return null;
            const i2 = _(), n1 = R(e), o1 = e !== n1, r1 = N.has(n1);
            let a3, l1 = !0, c1 = !0, h1 = !1, d1 = null;
            return o1 && i2 && (a3 = i2.Event(e, s), i2(t).trigger(a3), l1 = !a3.isPropagationStopped(), c1 = !a3.isImmediatePropagationStopped(), h1 = a3.isDefaultPrevented()), r1 ? (d1 = document.createEvent("HTMLEvents"), d1.initEvent(n1, l1, !0)) : d1 = new CustomEvent(e, {
                bubbles: l1,
                cancelable: !0
            }), (void 0) !== s && Object.keys(s).forEach((t2)=>{
                Object.defineProperty(d1, t2, {
                    get: ()=>s[t2]
                });
            }), h1 && d1.preventDefault(), c1 && t.dispatchEvent(d1), d1.defaultPrevented && (void 0) !== a3 && a3.preventDefault(), d1;
        }
    }, $ = new Map;
    var W = {
        set (t, e, s) {
            $.has(t) || $.set(t, new Map);
            const i2 = $.get(t);
            i2.has(e) || 0 === i2.size ? i2.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i2.keys())[0]}.`);
        },
        get: (t2, e3)=>$.has(t2) && $.get(t2).get(e3) || null
        ,
        remove (t, e) {
            if (!$.has(t)) return;
            const s2 = $.get(t);
            s2.delete(e), 0 === s2.size && $.delete(t);
        }
    };
    class q {
        constructor(t2){
            (t2 = h(t2)) && (this._element = t2, W.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            W.remove(this._element, this.constructor.DATA_KEY), B.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t3)=>{
                this[t3] = null;
            });
        }
        _queueCallback(t, e, s = !0) {
            E(t, e, s);
        }
        static getInstance(t) {
            return W.get(t, this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {
        }) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.0.2";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return "bs." + this.NAME;
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY;
        }
    }
    class z extends q {
        static get NAME() {
            return "alert";
        }
        close(t) {
            const e3 = t ? this._getRootElement(t) : this._element, s2 = this._triggerCloseEvent(e3);
            null === s2 || s2.defaultPrevented || this._removeElement(e3);
        }
        _getRootElement(t) {
            return a1(t) || t.closest(".alert");
        }
        _triggerCloseEvent(t) {
            return B.trigger(t, "close.bs.alert");
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e3 = t.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(t)
            , t, e3);
        }
        _destroyElement(t) {
            t.remove(), B.trigger(t, "closed.bs.alert");
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e3 = z.getOrCreateInstance(this);
                "close" === t && e3[t](this);
            });
        }
        static handleDismiss(t) {
            return function(e3) {
                e3 && e3.preventDefault(), t.close(this);
            };
        }
    }
    B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', z.handleDismiss(new z)), y(z);
    class F extends q {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e3 = F.getOrCreateInstance(this);
                "toggle" === t && e3[t]();
            });
        }
    }
    function U(t3) {
        return "true" === t3 || "false" !== t3 && (t3 === Number(t3).toString() ? Number(t3) : "" === t3 || "null" === t3 ? null : t3);
    }
    function K(t3) {
        return t3.replace(/[A-Z]/g, (t4)=>"-" + t4.toLowerCase()
        );
    }
    B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t3)=>{
        t3.preventDefault();
        const e3 = t3.target.closest('[data-bs-toggle="button"]');
        F.getOrCreateInstance(e3).toggle();
    }), y(F);
    const V = {
        setDataAttribute (t, e, s) {
            t.setAttribute("data-bs-" + K(e), s);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute("data-bs-" + K(e));
        },
        getDataAttributes (t) {
            if (!t) return {
            };
            const e3 = {
            };
            return Object.keys(t.dataset).filter((t3)=>t3.startsWith("bs")
            ).forEach((s2)=>{
                let i2 = s2.replace(/^bs/, "");
                i2 = i2.charAt(0).toLowerCase() + i2.slice(1, i2.length), e3[i2] = U(t.dataset[s2]);
            }), e3;
        },
        getDataAttribute: (t3, e3)=>U(t3.getAttribute("data-bs-" + K(e3)))
        ,
        offset (t) {
            const e3 = t.getBoundingClientRect();
            return {
                top: e3.top + document.body.scrollTop,
                left: e3.left + document.body.scrollLeft
            };
        },
        position: (t3)=>({
                top: t3.offsetTop,
                left: t3.offsetLeft
            })
    }, Q = {
        interval: 5000,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, X = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, Y = "next", G = "prev", Z = "left", J = "right", tt = {
        ArrowLeft: J,
        ArrowRight: Z
    };
    class et extends q {
        constructor(t3, e3){
            super(t3), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e3), this._indicatorsElement = i1.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return Q;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(Y);
        }
        nextWhenVisible() {
            !document.hidden && u(this._element) && this.next();
        }
        prev() {
            this._slide(G);
        }
        pause(t) {
            t || (this._isPaused = !0), i1.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t) {
            this._activeElement = i1.findOne(".active.carousel-item", this._element);
            const e4 = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void B.one(this._element, "slid.bs.carousel", ()=>this.to(t)
            );
            if (e4 === t) return this.pause(), void this.cycle();
            const s2 = t > e4 ? Y : G;
            this._slide(s2, this._items[t]);
        }
        _getConfig(t) {
            return t = {
                ...Q,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {
                }
            }, d("carousel", t, X), t;
        }
        _handleSwipe() {
            const t4 = Math.abs(this.touchDeltaX);
            if (t4 <= 40) return;
            const e4 = t4 / this.touchDeltaX;
            this.touchDeltaX = 0, e4 && this._slide(e4 > 0 ? J : Z);
        }
        _addEventListeners() {
            this._config.keyboard && B.on(this._element, "keydown.bs.carousel", (t4)=>this._keydown(t4)
            ), "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", (t4)=>this.pause(t4)
            ), B.on(this._element, "mouseleave.bs.carousel", (t4)=>this.cycle(t4)
            )), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t4 = (t5)=>{
                !this._pointerEvent || "pen" !== t5.pointerType && "touch" !== t5.pointerType ? this._pointerEvent || (this.touchStartX = t5.touches[0].clientX) : this.touchStartX = t5.clientX;
            }, e4 = (t5)=>{
                this.touchDeltaX = t5.touches && t5.touches.length > 1 ? 0 : t5.touches[0].clientX - this.touchStartX;
            }, s2 = (t5)=>{
                !this._pointerEvent || "pen" !== t5.pointerType && "touch" !== t5.pointerType || (this.touchDeltaX = t5.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t6)=>this.cycle(t6)
                , 500 + this._config.interval));
            };
            i1.find(".carousel-item img", this._element).forEach((t5)=>{
                B.on(t5, "dragstart.bs.carousel", (t6)=>t6.preventDefault()
                );
            }), this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", (e5)=>t4(e5)
            ), B.on(this._element, "pointerup.bs.carousel", (t5)=>s2(t5)
            ), this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", (e5)=>t4(e5)
            ), B.on(this._element, "touchmove.bs.carousel", (t5)=>e4(t5)
            ), B.on(this._element, "touchend.bs.carousel", (t5)=>s2(t5)
            ));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e4 = tt[t.key];
            e4 && (t.preventDefault(), this._slide(e4));
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? i1.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
        }
        _getItemByOrder(t, e) {
            const s2 = t === Y;
            return A(this._items, e, s2, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const s2 = this._getItemIndex(t), n1 = this._getItemIndex(i1.findOne(".active.carousel-item", this._element));
            return B.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n1,
                to: s2
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e4 = i1.findOne(".active", this._indicatorsElement);
                e4.classList.remove("active"), e4.removeAttribute("aria-current");
                const s2 = i1.find("[data-bs-target]", this._indicatorsElement);
                for(let e5 = 0; e5 < s2.length; e5++)if (Number.parseInt(s2[e5].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                    s2[e5].classList.add("active"), s2[e5].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t4 = this._activeElement || i1.findOne(".active.carousel-item", this._element);
            if (!t4) return;
            const e4 = Number.parseInt(t4.getAttribute("data-bs-interval"), 10);
            e4 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e4) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t, e) {
            const s2 = this._directionToOrder(t), n1 = i1.findOne(".active.carousel-item", this._element), o1 = this._getItemIndex(n1), r1 = e || this._getItemByOrder(s2, n1), a3 = this._getItemIndex(r1), l1 = Boolean(this._interval), c1 = s2 === Y, h1 = c1 ? "carousel-item-start" : "carousel-item-end", d1 = c1 ? "carousel-item-next" : "carousel-item-prev", u1 = this._orderToDirection(s2);
            if (r1 && r1.classList.contains("active")) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r1, u1).defaultPrevented) return;
            if (!n1 || !r1) return;
            this._isSliding = !0, l1 && this.pause(), this._setActiveIndicatorElement(r1), this._activeElement = r1;
            const g1 = ()=>{
                B.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r1,
                    direction: u1,
                    from: o1,
                    to: a3
                });
            };
            if (this._element.classList.contains("slide")) {
                r1.classList.add(d1), m(r1), n1.classList.add(h1), r1.classList.add(h1);
                const t4 = ()=>{
                    r1.classList.remove(h1, d1), r1.classList.add("active"), n1.classList.remove("active", d1, h1), this._isSliding = !1, setTimeout(g1, 0);
                };
                this._queueCallback(t4, n1, !0);
            } else n1.classList.remove("active"), r1.classList.add("active"), this._isSliding = !1, g1();
            l1 && this.cycle();
        }
        _directionToOrder(t) {
            return [
                J,
                Z
            ].includes(t) ? v() ? t === Z ? G : Y : t === Z ? Y : G : t;
        }
        _orderToDirection(t) {
            return [
                Y,
                G
            ].includes(t) ? v() ? t === G ? Z : J : t === G ? J : Z : t;
        }
        static carouselInterface(t, e) {
            const s2 = et.getOrCreateInstance(t, e);
            let { _config: i2  } = s2;
            "object" == typeof e && (i2 = {
                ...i2,
                ...e
            });
            const n1 = "string" == typeof e ? e : i2.slide;
            if ("number" == typeof e) s2.to(e);
            else if ("string" == typeof n1) {
                if ((void 0) === s2[n1]) throw new TypeError(`No method named "${n1}"`);
                s2[n1]();
            } else i2.interval && i2.ride && (s2.pause(), s2.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function() {
                et.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e4 = a1(this);
            if (!e4 || !e4.classList.contains("carousel")) return;
            const s2 = {
                ...V.getDataAttributes(e4),
                ...V.getDataAttributes(this)
            }, i2 = this.getAttribute("data-bs-slide-to");
            i2 && (s2.interval = !1), et.carouselInterface(e4, s2), i2 && et.getInstance(e4).to(i2), t.preventDefault();
        }
    }
    B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler), B.on(window, "load.bs.carousel.data-api", ()=>{
        const t4 = i1.find('[data-bs-ride="carousel"]');
        for(let e4 = 0, s2 = t4.length; e4 < s2; e4++)et.carouselInterface(t4[e4], et.getInstance(t4[e4]));
    }), y(et);
    const st = {
        toggle: !0,
        parent: ""
    }, it = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    class nt extends q {
        constructor(t4, e4){
            super(t4), this._isTransitioning = !1, this._config = this._getConfig(e4), this._triggerArray = i1.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s2 = i1.find('[data-bs-toggle="collapse"]');
            for(let t5 = 0, e5 = s2.length; t5 < e5; t5++){
                const e5 = s2[t5], n1 = r(e5), o1 = i1.find(n1).filter((t6)=>t6 === this._element
                );
                null !== n1 && o1.length && (this._selector = n1, this._triggerArray.push(e5));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }
        static get Default() {
            return st;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let t6, e6;
            this._parent && (t6 = i1.find(".show, .collapsing", this._parent).filter((t7)=>"string" == typeof this._config.parent ? t7.getAttribute("data-bs-parent") === this._config.parent : t7.classList.contains("collapse")
            ), 0 === t6.length && (t6 = null));
            const s3 = i1.findOne(this._selector);
            if (t6) {
                const i2 = t6.find((t7)=>s3 !== t7
                );
                if (e6 = i2 ? nt.getInstance(i2) : null, e6 && e6._isTransitioning) return;
            }
            if (B.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            t6 && t6.forEach((t7)=>{
                s3 !== t7 && nt.collapseInterface(t7, "hide"), e6 || W.set(t7, "bs.collapse", null);
            });
            const n1 = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n1] = 0, this._triggerArray.length && this._triggerArray.forEach((t7)=>{
                t7.classList.remove("collapsed"), t7.setAttribute("aria-expanded", !0);
            }), this.setTransitioning(!0);
            const o1 = "scroll" + (n1[0].toUpperCase() + n1.slice(1));
            this._queueCallback(()=>{
                this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n1] = "", this.setTransitioning(!1), B.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[n1] = this._element[o1] + "px";
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t6 = this._getDimension();
            this._element.style[t6] = this._element.getBoundingClientRect()[t6] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e6 = this._triggerArray.length;
            if (e6 > 0) for(let t7 = 0; t7 < e6; t7++){
                const e7 = this._triggerArray[t7], s3 = a1(e7);
                s3 && !s3.classList.contains("show") && (e7.classList.add("collapsed"), e7.setAttribute("aria-expanded", !1));
            }
            this.setTransitioning(!0), this._element.style[t6] = "", this._queueCallback(()=>{
                this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), B.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        setTransitioning(t) {
            this._isTransitioning = t;
        }
        _getConfig(t) {
            return (t = {
                ...st,
                ...t
            }).toggle = Boolean(t.toggle), d("collapse", t, it), t;
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height";
        }
        _getParent() {
            let { parent: t6  } = this._config;
            t6 = h(t6);
            const e6 = `[data-bs-toggle="collapse"][data-bs-parent="${t6}"]`;
            return i1.find(e6, t6).forEach((t7)=>{
                const e7 = a1(t7);
                this._addAriaAndCollapsedClass(e7, [
                    t7
                ]);
            }), t6;
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const s3 = t.classList.contains("show");
            e.forEach((t6)=>{
                s3 ? t6.classList.remove("collapsed") : t6.classList.add("collapsed"), t6.setAttribute("aria-expanded", s3);
            });
        }
        static collapseInterface(t, e) {
            let s3 = nt.getInstance(t);
            const i2 = {
                ...st,
                ...V.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {
                }
            };
            if (!s3 && i2.toggle && "string" == typeof e && /show|hide/.test(e) && (i2.toggle = !1), s3 || (s3 = new nt(t, i2)), "string" == typeof e) {
                if ((void 0) === s3[e]) throw new TypeError(`No method named "${e}"`);
                s3[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function() {
                nt.collapseInterface(this, t);
            });
        }
    }
    B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t6) {
        ("A" === t6.target.tagName || t6.delegateTarget && "A" === t6.delegateTarget.tagName) && t6.preventDefault();
        const e6 = V.getDataAttributes(this), s3 = r(this);
        i1.find(s3).forEach((t7)=>{
            const s4 = nt.getInstance(t7);
            let i2;
            s4 ? (null === s4._parent && "string" == typeof e6.parent && (s4._config.parent = e6.parent, s4._parent = s4._getParent()), i2 = "toggle") : i2 = e6, nt.collapseInterface(t7, i2);
        });
    }), y(nt);
    const ot = new RegExp("ArrowUp|ArrowDown|Escape"), rt = v() ? "top-end" : "top-start", at = v() ? "top-start" : "top-end", lt = v() ? "bottom-end" : "bottom-start", ct = v() ? "bottom-start" : "bottom-end", ht = v() ? "left-start" : "right-start", dt = v() ? "right-start" : "left-start", ut = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }, gt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class pt extends q {
        constructor(t6, e6){
            super(t6), this._popper = null, this._config = this._getConfig(e6), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        static get Default() {
            return ut;
        }
        static get DefaultType() {
            return gt;
        }
        static get NAME() {
            return "dropdown";
        }
        toggle() {
            g(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
        }
        show() {
            if (g(this._element) || this._menu.classList.contains("show")) return;
            const t7 = pt.getParentFromElement(this._element), e7 = {
                relatedTarget: this._element
            };
            if (!B.trigger(this._element, "show.bs.dropdown", e7).defaultPrevented) {
                if (this._inNavbar) V.setDataAttribute(this._menu, "popper", "none");
                else {
                    if ((void 0) === s1) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e8 = this._element;
                    "parent" === this._config.reference ? e8 = t7 : c(this._config.reference) ? e8 = h(this._config.reference) : "object" == typeof this._config.reference && (e8 = this._config.reference);
                    const i2 = this._getPopperConfig(), n1 = i2.modifiers.find((t8)=>"applyStyles" === t8.name && !1 === t8.enabled
                    );
                    this._popper = s1.createPopper(e8, this._menu, i2), n1 && V.setDataAttribute(this._menu, "popper", "static");
                }
                "ontouchstart" in document.documentElement && !t7.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t8)=>B.on(t8, "mouseover", f)
                ), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), B.trigger(this._element, "shown.bs.dropdown", e7);
            }
        }
        hide() {
            if (g(this._element) || !this._menu.classList.contains("show")) return;
            const t7 = {
                relatedTarget: this._element
            };
            this._completeHide(t7);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _addEventListeners() {
            B.on(this._element, "click.bs.dropdown", (t7)=>{
                t7.preventDefault(), this.toggle();
            });
        }
        _completeHide(t) {
            B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t7)=>B.off(t7, "mouseover", f)
            ), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), V.removeDataAttribute(this._menu, "popper"), B.trigger(this._element, "hidden.bs.dropdown", t));
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...V.getDataAttributes(this._element),
                ...t
            }, d("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t;
        }
        _getMenuElement() {
            return i1.next(this._element, ".dropdown-menu")[0];
        }
        _getPlacement() {
            const t7 = this._element.parentNode;
            if (t7.classList.contains("dropend")) return ht;
            if (t7.classList.contains("dropstart")) return dt;
            const e7 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t7.classList.contains("dropup") ? e7 ? at : rt : e7 ? ct : lt;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t7  } = this._config;
            return "string" == typeof t7 ? t7.split(",").map((t8)=>Number.parseInt(t8, 10)
            ) : "function" == typeof t7 ? (e7)=>t7(e7, this._element)
             : t7;
        }
        _getPopperConfig() {
            const t7 = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t7.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t7,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t7) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t , target: e  }) {
            const s3 = i1.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
            s3.length && A(s3, e, "ArrowDown" === t, !s3.includes(e)).focus();
        }
        static dropdownInterface(t, e) {
            const s3 = pt.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if ((void 0) === s3[e]) throw new TypeError(`No method named "${e}"`);
                s3[e]();
            }
        }
        static jQueryInterface(t) {
            return this.each(function() {
                pt.dropdownInterface(this, t);
            });
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e7 = i1.find('[data-bs-toggle="dropdown"]');
            for(let s3 = 0, i2 = e7.length; s3 < i2; s3++){
                const i2 = pt.getInstance(e7[s3]);
                if (!i2 || !1 === i2._config.autoClose) continue;
                if (!i2._element.classList.contains("show")) continue;
                const n1 = {
                    relatedTarget: i2._element
                };
                if (t) {
                    const e8 = t.composedPath(), s4 = e8.includes(i2._menu);
                    if (e8.includes(i2._element) || "inside" === i2._config.autoClose && !s4 || "outside" === i2._config.autoClose && s4) continue;
                    if (i2._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (n1.clickEvent = t);
                }
                i2._completeHide(n1);
            }
        }
        static getParentFromElement(t) {
            return a1(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ot.test(t.key)) return;
            const e7 = this.classList.contains("show");
            if (!e7 && "Escape" === t.key) return;
            if (t.preventDefault(), t.stopPropagation(), g(this)) return;
            const s3 = ()=>this.matches('[data-bs-toggle="dropdown"]') ? this : i1.prev(this, '[data-bs-toggle="dropdown"]')[0]
            ;
            return "Escape" === t.key ? (s3().focus(), void pt.clearMenus()) : "ArrowUp" === t.key || "ArrowDown" === t.key ? (e7 || s3().click(), void pt.getInstance(s3())._selectMenuItem(t)) : void (e7 && "Space" !== t.key || pt.clearMenus());
        }
    }
    B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler), B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler), B.on(document, "click.bs.dropdown.data-api", pt.clearMenus), B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus), B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(t7) {
        t7.preventDefault(), pt.dropdownInterface(this);
    }), y(pt);
    class ft {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t7 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t7);
        }
        hide() {
            const t7 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e7)=>e7 + t7
            ), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (e7)=>e7 + t7
            ), this._setElementAttributes(".sticky-top", "marginRight", (e7)=>e7 - t7
            );
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, s) {
            const i2 = this.getWidth();
            this._applyManipulationCallback(t, (t7)=>{
                if (t7 !== this._element && window.innerWidth > t7.clientWidth + i2) return;
                this._saveInitialAttribute(t7, e);
                const n1 = window.getComputedStyle(t7)[e];
                t7.style[e] = s(Number.parseFloat(n1)) + "px";
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const s3 = t.style[e];
            s3 && V.setDataAttribute(t, e, s3);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t7)=>{
                const s3 = V.getDataAttribute(t7, e);
                (void 0) === s3 ? t7.style.removeProperty(e) : (V.removeDataAttribute(t7, e), t7.style[e] = s3);
            });
        }
        _applyManipulationCallback(t, e) {
            c(t) ? e(t) : i1.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const mt = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }, _t = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    };
    class bt {
        constructor(t7){
            this._config = this._getConfig(t7), this._isAppended = !1, this._element = null;
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(()=>{
                w(t);
            })) : w(t);
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(()=>{
                this.dispose(), w(t);
            })) : w(t);
        }
        _getElement() {
            if (!this._element) {
                const t8 = document.createElement("div");
                t8.className = "modal-backdrop", this._config.isAnimated && t8.classList.add("fade"), this._element = t8;
            }
            return this._element;
        }
        _getConfig(t) {
            return (t = {
                ...mt,
                ..."object" == typeof t ? t : {
                }
            }).rootElement = h(t.rootElement), d("backdrop", t, _t), t;
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()), B.on(this._getElement(), "mousedown.bs.backdrop", ()=>{
                w(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && (B.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t) {
            E(t, this._getElement(), this._config.isAnimated);
        }
    }
    const vt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, yt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    class wt extends q {
        constructor(t8, e7){
            super(t8), this._config = this._getConfig(e7), this._dialog = i1.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new ft;
        }
        static get Default() {
            return vt;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || B.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (t9)=>this.hide(t9)
            ), B.on(this._dialog, "mousedown.dismiss.bs.modal", ()=>{
                B.one(this._element, "mouseup.dismiss.bs.modal", (t9)=>{
                    t9.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t)
            ));
        }
        hide(t) {
            if (t && [
                "A",
                "AREA"
            ].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
            if (B.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e8 = this._isAnimated();
            e8 && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), B.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), B.off(this._element, "click.dismiss.bs.modal"), B.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(()=>this._hideModal()
            , this._element, e8);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t9)=>B.off(t9, ".bs.modal")
            ), this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.modal");
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new bt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _getConfig(t) {
            return t = {
                ...vt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {
                }
            }, d("modal", t, yt), t;
        }
        _showElement(t) {
            const e8 = this._isAnimated(), s3 = i1.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s3 && (s3.scrollTop = 0), e8 && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(()=>{
                this._config.focus && this._element.focus(), this._isTransitioning = !1, B.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                });
            }, this._dialog, e8);
        }
        _enforceFocus() {
            B.off(document, "focusin.bs.modal"), B.on(document, "focusin.bs.modal", (t9)=>{
                document === t9.target || this._element === t9.target || this._element.contains(t9.target) || this._element.focus();
            });
        }
        _setEscapeEvent() {
            this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", (t9)=>{
                this._config.keyboard && "Escape" === t9.key ? (t9.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t9.key || this._triggerBackdropTransition();
            }) : B.off(this._element, "keydown.dismiss.bs.modal");
        }
        _setResizeEvent() {
            this._isShown ? B.on(window, "resize.bs.modal", ()=>this._adjustDialog()
            ) : B.off(window, "resize.bs.modal");
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), B.trigger(this._element, "hidden.bs.modal");
            });
        }
        _showBackdrop(t) {
            B.on(this._element, "click.dismiss.bs.modal", (t9)=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t9.target === t9.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t9 , scrollHeight: e8 , style: s3  } = this._element, i2 = e8 > document.documentElement.clientHeight;
            !i2 && "hidden" === s3.overflowY || t9.contains("modal-static") || (i2 || (s3.overflowY = "hidden"), t9.add("modal-static"), this._queueCallback(()=>{
                t9.remove("modal-static"), i2 || this._queueCallback(()=>{
                    s3.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t9 = this._element.scrollHeight > document.documentElement.clientHeight, e8 = this._scrollBar.getWidth(), s3 = e8 > 0;
            (!s3 && t9 && !v() || s3 && !t9 && v()) && (this._element.style.paddingLeft = e8 + "px"), (s3 && !t9 && !v() || !s3 && t9 && v()) && (this._element.style.paddingRight = e8 + "px");
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const s3 = wt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === s3[t]) throw new TypeError(`No method named "${t}"`);
                    s3[t](e);
                }
            });
        }
    }
    B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t9) {
        const e8 = a1(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t9.preventDefault(), B.one(e8, "show.bs.modal", (t10)=>{
            t10.defaultPrevented || B.one(e8, "hidden.bs.modal", ()=>{
                u(this) && this.focus();
            });
        }), wt.getOrCreateInstance(e8).toggle(this);
    }), y(wt);
    const Et = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, At = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Tt extends q {
        constructor(t9, e8){
            super(t9), this._config = this._getConfig(e8), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners();
        }
        static get NAME() {
            return "offcanvas";
        }
        static get Default() {
            return Et;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || B.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new ft).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(()=>{
                B.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (B.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new ft).reset(), B.trigger(this._element, "hidden.bs.offcanvas");
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), B.off(document, "focusin.bs.offcanvas");
        }
        _getConfig(t) {
            return t = {
                ...Et,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {
                }
            }, d("offcanvas", t, At), t;
        }
        _initializeBackDrop() {
            return new bt({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _enforceFocusOnElement(t) {
            B.off(document, "focusin.bs.offcanvas"), B.on(document, "focusin.bs.offcanvas", (e9)=>{
                document === e9.target || t === e9.target || t.contains(e9.target) || t.focus();
            }), t.focus();
        }
        _addEventListeners() {
            B.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', ()=>this.hide()
            ), B.on(this._element, "keydown.dismiss.bs.offcanvas", (t10)=>{
                this._config.keyboard && "Escape" === t10.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e9 = Tt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === e9[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e9[t](this);
                }
            });
        }
    }
    B.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t10) {
        const e9 = a1(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t10.preventDefault(), g(this)) return;
        B.one(e9, "hidden.bs.offcanvas", ()=>{
            u(this) && this.focus();
        });
        const s3 = i1.findOne(".offcanvas.show");
        s3 && s3 !== e9 && Tt.getInstance(s3).hide(), Tt.getOrCreateInstance(e9).toggle(this);
    }), B.on(window, "load.bs.offcanvas.data-api", ()=>i1.find(".offcanvas.show").forEach((t10)=>Tt.getOrCreateInstance(t10).show()
        )
    ), y(Tt);
    const Ct = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, Lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ot = (t10, e9)=>{
        const s3 = t10.nodeName.toLowerCase();
        if (e9.includes(s3)) return !Ct.has(s3) || Boolean(kt.test(t10.nodeValue) || Lt.test(t10.nodeValue));
        const i2 = e9.filter((t11)=>t11 instanceof RegExp
        );
        for(let t11 = 0, e10 = i2.length; t11 < e10; t11++)if (i2[t11].test(s3)) return !0;
        return !1;
    };
    function Dt(t10, e9, s3) {
        if (!t10.length) return t10;
        if (s3 && "function" == typeof s3) return s3(t10);
        const i2 = (new window.DOMParser).parseFromString(t10, "text/html"), n1 = Object.keys(e9), o1 = [].concat(...i2.body.querySelectorAll("*"));
        for(let t11 = 0, s4 = o1.length; t11 < s4; t11++){
            const s4 = o1[t11], i3 = s4.nodeName.toLowerCase();
            if (!n1.includes(i3)) {
                s4.remove();
                continue;
            }
            const r1 = [].concat(...s4.attributes), a3 = [].concat(e9["*"] || [], e9[i3] || []);
            r1.forEach((t12)=>{
                Ot(t12, a3) || s4.removeAttribute(t12.nodeName);
            });
        }
        return i2.body.innerHTML;
    }
    const It = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Nt = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), St = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, xt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: v() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: v() ? "right" : "left"
    }, Mt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, Pt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    };
    class jt extends q {
        constructor(t10, e9){
            if ((void 0) === s1) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t10), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {
            }, this._popper = null, this._config = this._getConfig(e9), this.tip = null, this._setListeners();
        }
        static get Default() {
            return Mt;
        }
        static get NAME() {
            return "tooltip";
        }
        static get Event() {
            return Pt;
        }
        static get DefaultType() {
            return St;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e10 = this._initializeOnDelegatedTarget(t);
                    e10._activeTrigger.click = !e10._activeTrigger.click, e10._isWithActiveTrigger() ? e10._enter(null, e10) : e10._leave(null, e10);
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t11 = B.trigger(this._element, this.constructor.Event.SHOW), e10 = p(this._element), i2 = null === e10 ? this._element.ownerDocument.documentElement.contains(this._element) : e10.contains(this._element);
            if (t11.defaultPrevented || !i2) return;
            const o1 = this.getTipElement(), r1 = n(this.constructor.NAME);
            o1.setAttribute("id", r1), this._element.setAttribute("aria-describedby", r1), this.setContent(), this._config.animation && o1.classList.add("fade");
            const a3 = "function" == typeof this._config.placement ? this._config.placement.call(this, o1, this._element) : this._config.placement, l1 = this._getAttachment(a3);
            this._addAttachmentClass(l1);
            const { container: c1  } = this._config;
            W.set(o1, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c1.appendChild(o1), B.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s1.createPopper(this._element, o1, this._getPopperConfig(l1)), o1.classList.add("show");
            const h1 = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            h1 && o1.classList.add(...h1.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t12)=>{
                B.on(t12, "mouseover", f);
            });
            const d1 = this.tip.classList.contains("fade");
            this._queueCallback(()=>{
                const t12 = this._hoverState;
                this._hoverState = null, B.trigger(this._element, this.constructor.Event.SHOWN), "out" === t12 && this._leave(null, this);
            }, this.tip, d1);
        }
        hide() {
            if (!this._popper) return;
            const t11 = this.getTipElement();
            if (B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t11.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t12)=>B.off(t12, "mouseover", f)
            ), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e10 = this.tip.classList.contains("fade");
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t11.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), B.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
            }, this.tip, e10), this._hoverState = "";
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t11 = document.createElement("div");
            return t11.innerHTML = this._config.template, this.tip = t11.children[0], this.tip;
        }
        setContent() {
            const t11 = this.getTipElement();
            this.setElementContent(i1.findOne(".tooltip-inner", t11), this.getTitle()), t11.classList.remove("fade", "show");
        }
        setElementContent(t, e) {
            if (null !== t) return c(e) ? (e = h(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Dt(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
        }
        getTitle() {
            let t11 = this._element.getAttribute("data-bs-original-title");
            return t11 || (t11 = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t11;
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            const s3 = this.constructor.DATA_KEY;
            return (e = e || W.get(t.delegateTarget, s3)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), W.set(t.delegateTarget, s3, e)), e;
        }
        _getOffset() {
            const { offset: t11  } = this._config;
            return "string" == typeof t11 ? t11.split(",").map((t12)=>Number.parseInt(t12, 10)
            ) : "function" == typeof t11 ? (e10)=>t11(e10, this._element)
             : t11;
        }
        _getPopperConfig(t) {
            const e10 = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t11)=>this._handlePopperPlacementChange(t11)
                    }
                ],
                onFirstUpdate: (t11)=>{
                    t11.options.placement !== t11.placement && this._handlePopperPlacementChange(t11);
                }
            };
            return {
                ...e10,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e10) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
        }
        _getAttachment(t) {
            return xt[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t11)=>{
                if ("click" === t11) B.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t12)=>this.toggle(t12)
                );
                else if ("manual" !== t11) {
                    const e10 = "hover" === t11 ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, s3 = "hover" === t11 ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    B.on(this._element, e10, this._config.selector, (t12)=>this._enter(t12)
                    ), B.on(this._element, s3, this._config.selector, (t12)=>this._leave(t12)
                    );
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t11 = this._element.getAttribute("title"), e10 = typeof this._element.getAttribute("data-bs-original-title");
            (t11 || "string" !== e10) && (this._element.setAttribute("data-bs-original-title", t11 || ""), !t11 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t11), this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(()=>{
                "show" === e._hoverState && e.show();
            }, e._config.delay.show) : e.show());
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(()=>{
                "out" === e._hoverState && e.hide();
            }, e._config.delay.hide) : e.hide());
        }
        _isWithActiveTrigger() {
            for(const t11 in this._activeTrigger)if (this._activeTrigger[t11]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e10 = V.getDataAttributes(this._element);
            return Object.keys(e10).forEach((t11)=>{
                Nt.has(t11) && delete e10[t11];
            }), (t = {
                ...this.constructor.Default,
                ...e10,
                ..."object" == typeof t && t ? t : {
                }
            }).container = !1 === t.container ? document.body : h(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)), t;
        }
        _getDelegateConfig() {
            const t11 = {
            };
            if (this._config) for(const e10 in this._config)this.constructor.Default[e10] !== this._config[e10] && (t11[e10] = this._config[e10]);
            return t11;
        }
        _cleanTipClass() {
            const t11 = this.getTipElement(), e10 = t11.getAttribute("class").match(It);
            null !== e10 && e10.length > 0 && e10.map((t12)=>t12.trim()
            ).forEach((e11)=>t11.classList.remove(e11)
            );
        }
        _handlePopperPlacementChange(t) {
            const { state: e10  } = t;
            e10 && (this.tip = e10.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e10.placement)));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e10 = jt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === e10[t]) throw new TypeError(`No method named "${t}"`);
                    e10[t]();
                }
            });
        }
    }
    y(jt);
    const Ht = new RegExp("(^|\\s)bs-popover\\S+", "g"), Rt = {
        ...jt.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, Bt = {
        ...jt.DefaultType,
        content: "(string|element|function)"
    }, $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Wt extends jt {
        static get Default() {
            return Rt;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return $t;
        }
        static get DefaultType() {
            return Bt;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        getTipElement() {
            return this.tip || (this.tip = super.getTipElement(), this.getTitle() || i1.findOne(".popover-header", this.tip).remove(), this._getContent() || i1.findOne(".popover-body", this.tip).remove()), this.tip;
        }
        setContent() {
            const t11 = this.getTipElement();
            this.setElementContent(i1.findOne(".popover-header", t11), this.getTitle());
            let e10 = this._getContent();
            "function" == typeof e10 && (e10 = e10.call(this._element)), this.setElementContent(i1.findOne(".popover-body", t11), e10), t11.classList.remove("fade", "show");
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content;
        }
        _cleanTipClass() {
            const t11 = this.getTipElement(), e10 = t11.getAttribute("class").match(Ht);
            null !== e10 && e10.length > 0 && e10.map((t12)=>t12.trim()
            ).forEach((e11)=>t11.classList.remove(e11)
            );
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e10 = Wt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === e10[t]) throw new TypeError(`No method named "${t}"`);
                    e10[t]();
                }
            });
        }
    }
    y(Wt);
    const qt = {
        offset: 10,
        method: "auto",
        target: ""
    }, zt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    class Ft extends q {
        constructor(t11, e10){
            super(t11), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e10), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, B.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()
            ), this.refresh(), this._process();
        }
        static get Default() {
            return qt;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            const t12 = this._scrollElement === this._scrollElement.window ? "offset" : "position", e11 = "auto" === this._config.method ? t12 : this._config.method, s3 = "position" === e11 ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i1.find(this._selector).map((t13)=>{
                const n1 = r(t13), o1 = n1 ? i1.findOne(n1) : null;
                if (o1) {
                    const t14 = o1.getBoundingClientRect();
                    if (t14.width || t14.height) return [
                        V[e11](o1).top + s3,
                        n1
                    ];
                }
                return null;
            }).filter((t13)=>t13
            ).sort((t13, e12)=>t13[0] - e12[0]
            ).forEach((t13)=>{
                this._offsets.push(t13[0]), this._targets.push(t13[1]);
            });
        }
        dispose() {
            B.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...qt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {
                }
            }).target && c(t.target)) {
                let { id: e11  } = t.target;
                e11 || (e11 = n("scrollspy"), t.target.id = e11), t.target = "#" + e11;
            }
            return d("scrollspy", t, zt), t;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t12 = this._getScrollTop() + this._config.offset, e11 = this._getScrollHeight(), s3 = this._config.offset + e11 - this._getOffsetHeight();
            if (this._scrollHeight !== e11 && this.refresh(), t12 >= s3) {
                const t13 = this._targets[this._targets.length - 1];
                this._activeTarget !== t13 && this._activate(t13);
            } else {
                if (this._activeTarget && t12 < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e12 = this._offsets.length; e12--;)this._activeTarget !== this._targets[e12] && t12 >= this._offsets[e12] && ((void 0) === this._offsets[e12 + 1] || t12 < this._offsets[e12 + 1]) && this._activate(this._targets[e12]);
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e11 = this._selector.split(",").map((e12)=>`${e12}[data-bs-target="${t}"],${e12}[href="${t}"]`
            ), s3 = i1.findOne(e11.join(","));
            s3.classList.contains("dropdown-item") ? (i1.findOne(".dropdown-toggle", s3.closest(".dropdown")).classList.add("active"), s3.classList.add("active")) : (s3.classList.add("active"), i1.parents(s3, ".nav, .list-group").forEach((t12)=>{
                i1.prev(t12, ".nav-link, .list-group-item").forEach((t13)=>t13.classList.add("active")
                ), i1.prev(t12, ".nav-item").forEach((t13)=>{
                    i1.children(t13, ".nav-link").forEach((t14)=>t14.classList.add("active")
                    );
                });
            })), B.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            });
        }
        _clear() {
            i1.find(this._selector).filter((t12)=>t12.classList.contains("active")
            ).forEach((t12)=>t12.classList.remove("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e11 = Ft.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === e11[t]) throw new TypeError(`No method named "${t}"`);
                    e11[t]();
                }
            });
        }
    }
    B.on(window, "load.bs.scrollspy.data-api", ()=>{
        i1.find('[data-bs-spy="scroll"]').forEach((t12)=>new Ft(t12)
        );
    }), y(Ft);
    class Ut extends q {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let t12;
            const e11 = a1(this._element), s3 = this._element.closest(".nav, .list-group");
            if (s3) {
                const e12 = "UL" === s3.nodeName || "OL" === s3.nodeName ? ":scope > li > .active" : ".active";
                t12 = i1.find(e12, s3), t12 = t12[t12.length - 1];
            }
            const n1 = t12 ? B.trigger(t12, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (B.trigger(this._element, "show.bs.tab", {
                relatedTarget: t12
            }).defaultPrevented || null !== n1 && n1.defaultPrevented) return;
            this._activate(this._element, s3);
            const o1 = ()=>{
                B.trigger(t12, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), B.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t12
                });
            };
            e11 ? this._activate(e11, e11.parentNode, o1) : o1();
        }
        _activate(t, e, s) {
            const n1 = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i1.children(e, ".active") : i1.find(":scope > li > .active", e))[0], o1 = s && n1 && n1.classList.contains("fade"), r1 = ()=>this._transitionComplete(t, n1, s)
            ;
            n1 && o1 ? (n1.classList.remove("show"), this._queueCallback(r1, t, !0)) : r1();
        }
        _transitionComplete(t, e, s) {
            if (e) {
                e.classList.remove("active");
                const t12 = i1.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t12 && t12.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m(t), t.classList.contains("fade") && t.classList.add("show");
            let n1 = t.parentNode;
            if (n1 && "LI" === n1.nodeName && (n1 = n1.parentNode), n1 && n1.classList.contains("dropdown-menu")) {
                const e11 = t.closest(".dropdown");
                e11 && i1.find(".dropdown-toggle", e11).forEach((t12)=>t12.classList.add("active")
                ), t.setAttribute("aria-expanded", !0);
            }
            s && s();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e11 = Ut.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if ((void 0) === e11[t]) throw new TypeError(`No method named "${t}"`);
                    e11[t]();
                }
            });
        }
    }
    B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t12) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t12.preventDefault(), g(this) || Ut.getOrCreateInstance(this).show();
    }), y(Ut);
    const Kt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Vt = {
        animation: !0,
        autohide: !0,
        delay: 5000
    };
    class Qt extends q {
        constructor(t12, e11){
            super(t12), this._config = this._getConfig(e11), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get DefaultType() {
            return Kt;
        }
        static get Default() {
            return Vt;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            B.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(()=>{
                this._element.classList.remove("showing"), this._element.classList.add("show"), B.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this._element.classList.contains("show") && (B.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(()=>{
                this._element.classList.add("hide"), B.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
        }
        _getConfig(t) {
            return t = {
                ...Vt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {
                }
            }, d("toast", t, this.constructor.DefaultType), t;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const s3 = t.relatedTarget;
            this._element === s3 || this._element.contains(s3) || this._maybeScheduleHide();
        }
        _setListeners() {
            B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', ()=>this.hide()
            ), B.on(this._element, "mouseover.bs.toast", (t13)=>this._onInteraction(t13, !0)
            ), B.on(this._element, "mouseout.bs.toast", (t13)=>this._onInteraction(t13, !1)
            ), B.on(this._element, "focusin.bs.toast", (t13)=>this._onInteraction(t13, !0)
            ), B.on(this._element, "focusout.bs.toast", (t13)=>this._onInteraction(t13, !1)
            );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e12 = Qt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if ((void 0) === e12[t]) throw new TypeError(`No method named "${t}"`);
                    e12[t](this);
                }
            });
        }
    }
    return y(Qt), {
        Alert: z,
        Button: F,
        Carousel: et,
        Collapse: nt,
        Dropdown: pt,
        Modal: wt,
        Offcanvas: Tt,
        Popover: Wt,
        ScrollSpy: Ft,
        Tab: Ut,
        Toast: Qt,
        Tooltip: jt
    };
});

},{"@popperjs/core":"ePjUz"}],"ePjUz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperBase", ()=>_createPopperJs.createPopper
);
parcelHelpers.export(exports, "createPopper", ()=>_popperJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
);
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"kBo2A","./modifiers/index.js":"gybOm","./createPopper.js":"eWRl5","./popper.js":"eUg1f","./popper-lite.js":"jTF4s","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kBo2A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top
);
parcelHelpers.export(exports, "bottom", ()=>bottom
);
parcelHelpers.export(exports, "right", ()=>right
);
parcelHelpers.export(exports, "left", ()=>left
);
parcelHelpers.export(exports, "auto", ()=>auto
);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements
);
parcelHelpers.export(exports, "start", ()=>start
);
parcelHelpers.export(exports, "end", ()=>end
);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents
);
parcelHelpers.export(exports, "viewport", ()=>viewport
);
parcelHelpers.export(exports, "popper", ()=>popper
);
parcelHelpers.export(exports, "reference", ()=>reference
);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements
);
parcelHelpers.export(exports, "placements", ()=>placements
);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead
);
parcelHelpers.export(exports, "read", ()=>read
);
parcelHelpers.export(exports, "afterRead", ()=>afterRead
);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "afterMain", ()=>afterMain
);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite
);
parcelHelpers.export(exports, "write", ()=>write
);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite
);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases
);
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gybOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", ()=>_applyStylesJsDefault.default
);
parcelHelpers.export(exports, "arrow", ()=>_arrowJsDefault.default
);
parcelHelpers.export(exports, "computeStyles", ()=>_computeStylesJsDefault.default
);
parcelHelpers.export(exports, "eventListeners", ()=>_eventListenersJsDefault.default
);
parcelHelpers.export(exports, "flip", ()=>_flipJsDefault.default
);
parcelHelpers.export(exports, "hide", ()=>_hideJsDefault.default
);
parcelHelpers.export(exports, "offset", ()=>_offsetJsDefault.default
);
parcelHelpers.export(exports, "popperOffsets", ()=>_popperOffsetsJsDefault.default
);
parcelHelpers.export(exports, "preventOverflow", ()=>_preventOverflowJsDefault.default
);
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"iCp47","./arrow.js":"3VSHy","./computeStyles.js":"eNeWb","./eventListeners.js":"gK2qK","./flip.js":"c3Yfj","./hide.js":"i5BM6","./offset.js":"5eukw","./popperOffsets.js":"767Ci","./preventOverflow.js":"2sJvj","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iCp47":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {
        };
        var attributes = state.attributes[name] || {
        };
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name1) {
            var value = attributes[name1];
            if (value === false) element.removeAttribute(name1);
            else element.setAttribute(name1, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style1, property) {
                style1[property] = '';
                return style1;
            }, {
            }); // arrow is optional + virtual elements
            if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"EprJN","../dom-utils/instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"EprJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5XVaZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement
);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement
);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot
);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = _getWindowJsDefault.default(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"MkPcb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"MkPcb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3VSHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _withinJsDefault = parcelHelpers.interopDefault(_withinJs);
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject1(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var axis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var isVertical = [_enumsJs.left, _enumsJs.right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = _getLayoutRectJsDefault.default(arrowElement);
    var minProp = axis === 'y' ? _enumsJs.top : _enumsJs.left;
    var maxProp = axis === 'y' ? _enumsJs.bottom : _enumsJs.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = _getOffsetParentJsDefault.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = _withinJsDefault.default(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!_instanceOfJs.isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!_containsJsDefault.default(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"uyzYw","../dom-utils/getLayoutRect.js":"jbNRU","../dom-utils/contains.js":"44CRG","../dom-utils/getOffsetParent.js":"h282o","../utils/getMainAxisFromPlacement.js":"3RRs0","../utils/within.js":"baM3C","../utils/mergePaddingObject.js":"kGOSi","../utils/expandToHashMap.js":"gAvCE","../enums.js":"kBo2A","../dom-utils/instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"uyzYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jbNRU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = _getBoundingClientRectJsDefault.default(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"a0UQf","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"a0UQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1; // FIXME:
    // `offsetWidth` returns an integer while `getBoundingClientRect`
    // returns a float. This results in `scaleX` or `scaleY` being
    // non-1 when it should be for elements that aren't a full pixel in
    // width or height.
    // if (isHTMLElement(element) && includeScale) {
    //   const offsetHeight = element.offsetHeight;
    //   const offsetWidth = element.offsetWidth;
    //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    //   // Fallback to 1 in case both values are `0`
    //   if (offsetWidth > 0) {
    //     scaleX = rect.width / offsetWidth || 1;
    //   }
    //   if (offsetHeight > 0) {
    //     scaleY = rect.height / offsetHeight || 1;
    //   }
    // }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}
exports.default = getBoundingClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"44CRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && _instanceOfJs.isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"h282o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
function getTrueOffsetParent(element) {
    if (!_instanceOfJs.isHTMLElement(element) || _getComputedStyleJsDefault.default(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && _instanceOfJs.isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = _getComputedStyleJsDefault.default(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = _getParentNodeJsDefault.default(element);
    while(_instanceOfJs.isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf(_getNodeNameJsDefault.default(currentNode)) < 0){
        var css = _getComputedStyleJsDefault.default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = _getWindowJsDefault.default(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && _isTableElementJsDefault.default(offsetParent) && _getComputedStyleJsDefault.default(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (_getNodeNameJsDefault.default(offsetParent) === 'html' || _getNodeNameJsDefault.default(offsetParent) === 'body' && _getComputedStyleJsDefault.default(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"MkPcb","./getNodeName.js":"EprJN","./getComputedStyle.js":"cn2q5","./instanceOf.js":"5XVaZ","./isTableElement.js":"a0fpP","./getParentNode.js":"lehUS","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cn2q5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return _getWindowJsDefault.default(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"MkPcb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"a0fpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(_getNodeNameJsDefault.default(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"EprJN","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lehUS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if (_getNodeNameJsDefault.default(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || (_instanceOfJs.isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _getDocumentElementJsDefault.default(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"EprJN","./getDocumentElement.js":"jaH6y","./instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jaH6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((_instanceOfJs.isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3RRs0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"baM3C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return _mathJs.max(min, _mathJs.min(value, max));
}
exports.default = within;

},{"./math.js":"gyDDZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gyDDZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max
);
parcelHelpers.export(exports, "min", ()=>min
);
parcelHelpers.export(exports, "round", ()=>round
);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kGOSi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, _getFreshSideObjectJsDefault.default(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"6Lmzs","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6Lmzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gAvCE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eNeWb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles
);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: _mathJs.round(_mathJs.round(x * dpr) / dpr) || 0,
        y: _mathJs.round(_mathJs.round(y * dpr) / dpr) || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = _enumsJs.left;
    var sideY = _enumsJs.top;
    var win = window;
    if (adaptive) {
        var offsetParent = _getOffsetParentJsDefault.default(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === _getWindowJsDefault.default(popper)) {
            offsetParent = _getDocumentElementJsDefault.default(popper);
            if (_getComputedStyleJsDefault.default(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === _enumsJs.top || (placement === _enumsJs.left || placement === _enumsJs.right) && variation === _enumsJs.end) {
            sideY = _enumsJs.bottom; // $FlowFixMe[prop-missing]
            y -= offsetParent[heightProp] - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === _enumsJs.left || (placement === _enumsJs.top || placement === _enumsJs.bottom) && variation === _enumsJs.end) {
            sideX = _enumsJs.right; // $FlowFixMe[prop-missing]
            x -= offsetParent[widthProp] - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = _getComputedStyleJsDefault.default(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: _getBasePlacementJsDefault.default(state.placement),
        variation: _getVariationJsDefault.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {
    }
};

},{"../enums.js":"kBo2A","../dom-utils/getOffsetParent.js":"h282o","../dom-utils/getWindow.js":"MkPcb","../dom-utils/getDocumentElement.js":"jaH6y","../dom-utils/getComputedStyle.js":"cn2q5","../utils/getBasePlacement.js":"uyzYw","../utils/getVariation.js":"e7Opv","../utils/math.js":"gyDDZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e7Opv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split('-')[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gK2qK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = _getWindowJsDefault.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: effect,
    data: {
    }
};

},{"../dom-utils/getWindow.js":"MkPcb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"c3Yfj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if (_getBasePlacementJsDefault.default(placement) === _enumsJs.auto) return [];
    var oppositePlacement = _getOppositePlacementJsDefault.default(placement);
    return [
        _getOppositeVariationPlacementJsDefault.default(placement),
        oppositePlacement,
        _getOppositeVariationPlacementJsDefault.default(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = _getBasePlacementJsDefault.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        _getOppositePlacementJsDefault.default(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(_getBasePlacementJsDefault.default(placement) === _enumsJs.auto ? _computeAutoPlacementJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = _getBasePlacementJsDefault.default(placement);
        var isStartVariation = _getVariationJsDefault.default(placement) === _enumsJs.start;
        var isVertical = [_enumsJs.top, _enumsJs.bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = _detectOverflowJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? _enumsJs.right : _enumsJs.left : isStartVariation ? _enumsJs.bottom : _enumsJs.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var altVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop1(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"1nfXR","../utils/getBasePlacement.js":"uyzYw","../utils/getOppositeVariationPlacement.js":"iPlb1","../utils/detectOverflow.js":"8uw8g","../utils/computeAutoPlacement.js":"5gagL","../enums.js":"kBo2A","../utils/getVariation.js":"e7Opv","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1nfXR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iPlb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8uw8g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? _enumsJs.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? _enumsJs.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? _enumsJs.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
    var altContext = elementContext === _enumsJs.popper ? _enumsJs.reference : _enumsJs.popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = _getClippingRectJsDefault.default(_instanceOfJs.isElement(element) ? element : element.contextElement || _getDocumentElementJsDefault.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = _getBoundingClientRectJsDefault.default(state.elements.reference);
    var popperOffsets = _computeOffsetsJsDefault.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = _rectToClientRectJsDefault.default(Object.assign({
    }, popperRect, popperOffsets));
    var elementClientRect = elementContext === _enumsJs.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === _enumsJs.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [_enumsJs.right, _enumsJs.bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [_enumsJs.top, _enumsJs.bottom].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"7EeZI","../dom-utils/getDocumentElement.js":"jaH6y","../dom-utils/getBoundingClientRect.js":"a0UQf","./computeOffsets.js":"wx3b2","./rectToClientRect.js":"3oP12","../enums.js":"kBo2A","../dom-utils/instanceOf.js":"5XVaZ","./mergePaddingObject.js":"kGOSi","./expandToHashMap.js":"gAvCE","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7EeZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element) {
    var rect = _getBoundingClientRectJsDefault.default(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === _enumsJs.viewport ? _rectToClientRectJsDefault.default(_getViewportRectJsDefault.default(element)) : _instanceOfJs.isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : _rectToClientRectJsDefault.default(_getDocumentRectJsDefault.default(_getDocumentElementJsDefault.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = _listScrollParentsJsDefault.default(_getParentNodeJsDefault.default(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(_getComputedStyleJsDefault.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && _instanceOfJs.isHTMLElement(element) ? _getOffsetParentJsDefault.default(element) : element;
    if (!_instanceOfJs.isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return _instanceOfJs.isElement(clippingParent) && _containsJsDefault.default(clippingParent, clipperElement) && _getNodeNameJsDefault.default(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = _mathJs.max(rect.top, accRect.top);
        accRect.right = _mathJs.min(rect.right, accRect.right);
        accRect.bottom = _mathJs.min(rect.bottom, accRect.bottom);
        accRect.left = _mathJs.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"kBo2A","./getViewportRect.js":"8kLIR","./getDocumentRect.js":"73Bm7","./listScrollParents.js":"1NLKz","./getOffsetParent.js":"h282o","./getDocumentElement.js":"jaH6y","./getComputedStyle.js":"cn2q5","./instanceOf.js":"5XVaZ","./getBoundingClientRect.js":"a0UQf","./getParentNode.js":"lehUS","./contains.js":"44CRG","./getNodeName.js":"EprJN","../utils/rectToClientRect.js":"3oP12","../utils/math.js":"gyDDZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8kLIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = _getWindowJsDefault.default(element);
    var html = _getDocumentElementJsDefault.default(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + _getWindowScrollBarXJsDefault.default(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"MkPcb","./getDocumentElement.js":"jaH6y","./getWindowScrollBarX.js":"4PVKs","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4PVKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return _getBoundingClientRectJsDefault.default(_getDocumentElementJsDefault.default(element)).left + _getWindowScrollJsDefault.default(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"a0UQf","./getDocumentElement.js":"jaH6y","./getWindowScroll.js":"3t560","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3t560":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = _getWindowJsDefault.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"MkPcb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"73Bm7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = _getDocumentElementJsDefault.default(element);
    var winScroll = _getWindowScrollJsDefault.default(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = _mathJs.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = _mathJs.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + _getWindowScrollBarXJsDefault.default(element);
    var y = -winScroll.scrollTop;
    if (_getComputedStyleJsDefault.default(body || html).direction === 'rtl') x += _mathJs.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"jaH6y","./getComputedStyle.js":"cn2q5","./getWindowScrollBarX.js":"4PVKs","./getWindowScroll.js":"3t560","../utils/math.js":"gyDDZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1NLKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = _getScrollParentJsDefault.default(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = _getWindowJsDefault.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], _isScrollParentJsDefault.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(_getParentNodeJsDefault.default(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"lcaNR","./getParentNode.js":"lehUS","./getWindow.js":"MkPcb","./isScrollParent.js":"kZX4x","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lcaNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf(_getNodeNameJsDefault.default(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if (_instanceOfJs.isHTMLElement(node) && _isScrollParentJsDefault.default(node)) return node;
    return getScrollParent(_getParentNodeJsDefault.default(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"lehUS","./isScrollParent.js":"kZX4x","./getNodeName.js":"EprJN","./instanceOf.js":"5XVaZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kZX4x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = _getComputedStyleJsDefault.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"cn2q5","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3oP12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"wx3b2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? _getBasePlacementJsDefault.default(placement) : null;
    var variation = placement ? _getVariationJsDefault.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? _getMainAxisFromPlacementJsDefault.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"uyzYw","./getVariation.js":"e7Opv","./getMainAxisFromPlacement.js":"3RRs0","../enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5gagL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enumsJs.placements : _options$allowedAutoP;
    var variation = _getVariationJsDefault.default(placement);
    var placements = variation ? flipVariations ? _enumsJs.variationPlacements : _enumsJs.variationPlacements.filter(function(placement1) {
        return _getVariationJsDefault.default(placement1) === variation;
    }) : _enumsJs.basePlacements;
    var allowedPlacements = placements.filter(function(placement1) {
        return allowedAutoPlacements.indexOf(placement1) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(' '));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement1) {
        acc[placement1] = _detectOverflowJsDefault.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[_getBasePlacementJsDefault.default(placement1)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"e7Opv","../enums.js":"kBo2A","./detectOverflow.js":"8uw8g","./getBasePlacement.js":"uyzYw","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"i5BM6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [_enumsJs.top, _enumsJs.right, _enumsJs.bottom, _enumsJs.left].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = _detectOverflowJsDefault.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = _detectOverflowJsDefault.default(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"kBo2A","../utils/detectOverflow.js":"8uw8g","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5eukw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", ()=>distanceAndSkiddingToXY
);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js");
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = _getBasePlacementJsDefault.default(placement);
    var invertDistance = [_enumsJs.left, _enumsJs.top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({
    }, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [_enumsJs.left, _enumsJs.right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset1 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = _enumsJs.placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset1);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"uyzYw","../enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"767Ci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = _computeOffsetsJsDefault.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {
    }
};

},{"../utils/computeOffsets.js":"wx3b2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2sJvj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _withinJsDefault = parcelHelpers.interopDefault(_withinJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = _detectOverflowJsDefault.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var variation = _getVariationJsDefault.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var altAxis = _getAltAxisJsDefault.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === 'y' ? _enumsJs.top : _enumsJs.left;
        var altSide = mainAxis === 'y' ? _enumsJs.bottom : _enumsJs.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = popperOffsets[mainAxis] + overflow[mainSide];
        var max = popperOffsets[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === _enumsJs.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === _enumsJs.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? _getLayoutRectJsDefault.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : _getFreshSideObjectJsDefault.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = _withinJsDefault.default(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && _getOffsetParentJsDefault.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
        if (checkMainAxis) {
            var preventedOffset = _withinJsDefault.default(tether ? _mathJs.min(min, tetherMin) : min, offset, tether ? _mathJs.max(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
        }
        if (checkAltAxis) {
            var _mainSide = mainAxis === 'x' ? _enumsJs.top : _enumsJs.left;
            var _altSide = mainAxis === 'x' ? _enumsJs.bottom : _enumsJs.right;
            var _offset = popperOffsets[altAxis];
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var _preventedOffset = _withinJsDefault.default(tether ? _mathJs.min(_min, tetherMin) : _min, _offset, tether ? _mathJs.max(_max, tetherMax) : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
        }
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"kBo2A","../utils/getBasePlacement.js":"uyzYw","../utils/getMainAxisFromPlacement.js":"3RRs0","../utils/getAltAxis.js":"6I2bo","../utils/within.js":"baM3C","../dom-utils/getLayoutRect.js":"jbNRU","../dom-utils/getOffsetParent.js":"h282o","../utils/detectOverflow.js":"8uw8g","../utils/getVariation.js":"e7Opv","../utils/getFreshSideObject.js":"6Lmzs","../utils/math.js":"gyDDZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6I2bo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eWRl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator
);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "detectOverflow", ()=>_detectOverflowJsDefault.default
);
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options1 = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({
                }, defaultOptions, state.options, options1);
                state.scrollParents = {
                    reference: _instanceOfJs.isElement(reference) ? _listScrollParentsJsDefault.default(reference) : reference.contextElement ? _listScrollParentsJsDefault.default(reference.contextElement) : [],
                    popper: _listScrollParentsJsDefault.default(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = _orderModifiersJsDefault.default(_mergeByNameJsDefault.default([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = _uniqueByJsDefault.default([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                _validateModifiersJsDefault.default(modifiers);
                if (_getBasePlacementJsDefault.default(state.options.placement) === _enumsJs.auto) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = _getComputedStyleJsDefault.default(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference1 = _state$elements.reference, popper1 = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference1, popper1)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: _getCompositeRectJsDefault.default(reference1, _getOffsetParentJsDefault.default(popper1), state.options.strategy === 'fixed'),
                    popper: _getLayoutRectJsDefault.default(popper1)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: _debounceJsDefault.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state1) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state1);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options1 = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options1
                    });
                    var noopFn = function noopFn1() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"5CDEN","./dom-utils/getLayoutRect.js":"jbNRU","./dom-utils/listScrollParents.js":"1NLKz","./dom-utils/getOffsetParent.js":"h282o","./dom-utils/getComputedStyle.js":"cn2q5","./utils/orderModifiers.js":"V76xq","./utils/debounce.js":"8uhlj","./utils/validateModifiers.js":"c5soS","./utils/uniqueBy.js":"dlAtE","./utils/getBasePlacement.js":"uyzYw","./utils/mergeByName.js":"jINbK","./utils/detectOverflow.js":"8uw8g","./dom-utils/instanceOf.js":"5XVaZ","./enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5CDEN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = rect.width / element.offsetWidth || 1;
    var scaleY = rect.height / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = _instanceOfJs.isHTMLElement(offsetParent);
    var offsetParentIsScaled = _instanceOfJs.isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = _getDocumentElementJsDefault.default(offsetParent);
    var rect = _getBoundingClientRectJsDefault.default(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (_getNodeNameJsDefault.default(offsetParent) !== 'body' || _isScrollParentJsDefault.default(documentElement)) scroll = _getNodeScrollJsDefault.default(offsetParent);
        if (_instanceOfJs.isHTMLElement(offsetParent)) {
            offsets = _getBoundingClientRectJsDefault.default(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = _getWindowScrollBarXJsDefault.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"a0UQf","./getNodeScroll.js":"5rSe9","./getNodeName.js":"EprJN","./instanceOf.js":"5XVaZ","./getWindowScrollBarX.js":"4PVKs","./getDocumentElement.js":"jaH6y","./isScrollParent.js":"kZX4x","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5rSe9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === _getWindowJsDefault.default(node) || !_instanceOfJs.isHTMLElement(node)) return _getWindowScrollJsDefault.default(node);
    else return _getHTMLElementScrollJsDefault.default(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"3t560","./getWindow.js":"MkPcb","./instanceOf.js":"5XVaZ","./getHTMLElementScroll.js":"2nQJU","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2nQJU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"V76xq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return _enumsJs.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8uhlj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"c5soS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                    break;
                case 'phase':
                    if (_enumsJs.modifierPhases.indexOf(modifier.phase) < 0) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enumsJs.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (modifier.effect != null && typeof modifier.effect !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(_formatJsDefault.default(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"ivHBY","../enums.js":"kBo2A","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ivHBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dlAtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jINbK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged1, current) {
        var existing = merged1[current.name];
        merged1[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged1;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eUg1f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
parcelHelpers.export(exports, "createPopperLite", ()=>_popperLiteJs.createPopper
) // eslint-disable-next-line import/no-unused-modules
;
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [_eventListenersJsDefault.default, _popperOffsetsJsDefault.default, _computeStylesJsDefault.default, _applyStylesJsDefault.default, _offsetJsDefault.default, _flipJsDefault.default, _preventOverflowJsDefault.default, _arrowJsDefault.default, _hideJsDefault.default];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"eWRl5","./modifiers/eventListeners.js":"gK2qK","./modifiers/popperOffsets.js":"767Ci","./modifiers/computeStyles.js":"eNeWb","./modifiers/applyStyles.js":"iCp47","./modifiers/offset.js":"5eukw","./modifiers/flip.js":"c3Yfj","./modifiers/preventOverflow.js":"2sJvj","./modifiers/arrow.js":"3VSHy","./modifiers/hide.js":"i5BM6","./popper-lite.js":"jTF4s","./modifiers/index.js":"gybOm","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jTF4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
parcelHelpers.export(exports, "popperGenerator", ()=>_createPopperJs.popperGenerator
);
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers
);
parcelHelpers.export(exports, "detectOverflow", ()=>_createPopperJs.detectOverflow
);
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [_eventListenersJsDefault.default, _popperOffsetsJsDefault.default, _computeStylesJsDefault.default, _applyStylesJsDefault.default];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"eWRl5","./modifiers/eventListeners.js":"gK2qK","./modifiers/popperOffsets.js":"767Ci","./modifiers/computeStyles.js":"eNeWb","./modifiers/applyStyles.js":"iCp47","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["82lpU","kQVkM"], "kQVkM", "parcelRequire7e89")

//# sourceMappingURL=tables.dc506bb0.js.map
