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
})({"fYLVu":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "3f8b7d919b29a9f5";
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

},{}]},["fYLVu"], null, "parcelRequire7e89")
/**
 * @popperjs/core v2.9.2 - MIT License
 */ "use strict";
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {
    });
}(this, function(e) {
    function t(e1) {
        return {
            width: (e1 = e1.getBoundingClientRect()).width,
            height: e1.height,
            top: e1.top,
            right: e1.right,
            bottom: e1.bottom,
            left: e1.left,
            x: e1.left,
            y: e1.top
        };
    }
    function n1(e1) {
        return null == e1 ? window : "[object Window]" !== e1.toString() ? (e1 = e1.ownerDocument) && e1.defaultView || window : e1;
    }
    function o1(e1) {
        return {
            scrollLeft: (e1 = n1(e1)).pageXOffset,
            scrollTop: e1.pageYOffset
        };
    }
    function r2(e1) {
        return e1 instanceof n1(e1).Element || e1 instanceof Element;
    }
    function i(e1) {
        return e1 instanceof n1(e1).HTMLElement || e1 instanceof HTMLElement;
    }
    function a(e1) {
        return "undefined" != typeof ShadowRoot && (e1 instanceof n1(e1).ShadowRoot || e1 instanceof ShadowRoot);
    }
    function s(e1) {
        return e1 ? (e1.nodeName || "").toLowerCase() : null;
    }
    function f1(e1) {
        return ((r2(e1) ? e1.ownerDocument : e1.document) || window.document).documentElement;
    }
    function p(e1) {
        return t(f1(e1)).left + o1(e1).scrollLeft;
    }
    function c(e1) {
        return n1(e1).getComputedStyle(e1);
    }
    function l(e1) {
        return e1 = c(e1), /auto|scroll|overlay|hidden/.test(e1.overflow + e1.overflowY + e1.overflowX);
    }
    function u(e1, r1, a1) {
        (void 0) === a1 && (a1 = !1);
        var c1 = f1(r1);
        e1 = t(e1);
        var u1 = i(r1), d = {
            scrollLeft: 0,
            scrollTop: 0
        }, m = {
            x: 0,
            y: 0
        };
        return (u1 || !u1 && !a1) && (("body" !== s(r1) || l(c1)) && (d = r1 !== n1(r1) && i(r1) ? {
            scrollLeft: r1.scrollLeft,
            scrollTop: r1.scrollTop
        } : o1(r1)), i(r1) ? ((m = t(r1)).x += r1.clientLeft, m.y += r1.clientTop) : c1 && (m.x = p(c1))), {
            x: e1.left + d.scrollLeft - m.x,
            y: e1.top + d.scrollTop - m.y,
            width: e1.width,
            height: e1.height
        };
    }
    function d(e1) {
        var n1 = t(e1), o1 = e1.offsetWidth, r1 = e1.offsetHeight;
        return 1 >= Math.abs(n1.width - o1) && (o1 = n1.width), 1 >= Math.abs(n1.height - r1) && (r1 = n1.height), {
            x: e1.offsetLeft,
            y: e1.offsetTop,
            width: o1,
            height: r1
        };
    }
    function m(e1) {
        return "html" === s(e1) ? e1 : e1.assignedSlot || e1.parentNode || (a(e1) ? e1.host : null) || f1(e1);
    }
    function h(e1) {
        return 0 <= [
            "html",
            "body",
            "#document"
        ].indexOf(s(e1)) ? e1.ownerDocument.body : i(e1) && l(e1) ? e1 : h(m(e1));
    }
    function v(e1, t1) {
        var o1;
        (void 0) === t1 && (t1 = []);
        var r1 = h(e1);
        return e1 = r1 === (null == (o1 = e1.ownerDocument) ? void 0 : o1.body), o1 = n1(r1), r1 = e1 ? [
            o1
        ].concat(o1.visualViewport || [], l(r1) ? r1 : []) : r1, t1 = t1.concat(r1), e1 ? t1 : t1.concat(v(m(r1)));
    }
    function g(e1) {
        return i(e1) && "fixed" !== c(e1).position ? e1.offsetParent : null;
    }
    function y(e1) {
        for(var t1 = n1(e1), o1 = g(e1); o1 && 0 <= [
            "table",
            "td",
            "th"
        ].indexOf(s(o1)) && "static" === c(o1).position;)o1 = g(o1);
        if (o1 && ("html" === s(o1) || "body" === s(o1) && "static" === c(o1).position)) return t1;
        if (!o1) e: {
            if (o1 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e1) || "fixed" !== c(e1).position) for(e1 = m(e1); i(e1) && 0 > [
                "html",
                "body"
            ].indexOf(s(e1));){
                var r1 = c(e1);
                if ("none" !== r1.transform || "none" !== r1.perspective || "paint" === r1.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(r1.willChange) || o1 && "filter" === r1.willChange || o1 && r1.filter && "none" !== r1.filter) {
                    o1 = e1;
                    break e;
                }
                e1 = e1.parentNode;
            }
            o1 = null;
        }
        return o1 || t1;
    }
    function b(e1) {
        function t1(e2) {
            o2.add(e2.name), [].concat(e2.requires || [], e2.requiresIfExists || []).forEach(function(e3) {
                o2.has(e3) || (e3 = n2.get(e3)) && t1(e3);
            }), r3.push(e2);
        }
        var n2 = new Map, o2 = new Set, r3 = [];
        return e1.forEach(function(e2) {
            n2.set(e2.name, e2);
        }), e1.forEach(function(e2) {
            o2.has(e2.name) || t1(e2);
        }), r3;
    }
    function w(e1) {
        var t1;
        return function() {
            return t1 || (t1 = new Promise(function(n2) {
                Promise.resolve().then(function() {
                    t1 = void 0, n2(e1());
                });
            })), t1;
        };
    }
    function x(e1) {
        return e1.split("-")[0];
    }
    function O(e1, t1) {
        var n2 = t1.getRootNode && t1.getRootNode();
        if (e1.contains(t1)) return !0;
        if (n2 && a(n2)) do {
            if (t1 && e1.isSameNode(t1)) return !0;
            t1 = t1.parentNode || t1.host;
        }while (t1)
        return !1;
    }
    function j(e1) {
        return Object.assign({
        }, e1, {
            left: e1.x,
            top: e1.y,
            right: e1.x + e1.width,
            bottom: e1.y + e1.height
        });
    }
    function E(e1, r3) {
        if ("viewport" === r3) {
            r3 = n1(e1);
            var a1 = f1(e1);
            r3 = r3.visualViewport;
            var s1 = a1.clientWidth;
            a1 = a1.clientHeight;
            var l1 = 0, u1 = 0;
            r3 && (s1 = r3.width, a1 = r3.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l1 = r3.offsetLeft, u1 = r3.offsetTop)), e1 = j(e1 = {
                width: s1,
                height: a1,
                x: l1 + p(e1),
                y: u1
            });
        } else i(r3) ? ((e1 = t(r3)).top += r3.clientTop, e1.left += r3.clientLeft, e1.bottom = e1.top + r3.clientHeight, e1.right = e1.left + r3.clientWidth, e1.width = r3.clientWidth, e1.height = r3.clientHeight, e1.x = e1.left, e1.y = e1.top) : (u1 = f1(e1), e1 = f1(u1), s1 = o1(u1), r3 = null == (a1 = u1.ownerDocument) ? void 0 : a1.body, a1 = _(e1.scrollWidth, e1.clientWidth, r3 ? r3.scrollWidth : 0, r3 ? r3.clientWidth : 0), l1 = _(e1.scrollHeight, e1.clientHeight, r3 ? r3.scrollHeight : 0, r3 ? r3.clientHeight : 0), u1 = -s1.scrollLeft + p(u1), s1 = -s1.scrollTop, "rtl" === c(r3 || e1).direction && (u1 += _(e1.clientWidth, r3 ? r3.clientWidth : 0) - a1), e1 = j({
            width: a1,
            height: l1,
            x: u1,
            y: s1
        }));
        return e1;
    }
    function D(e1, t1, n2) {
        return t1 = "clippingParents" === t1 ? (function(e2) {
            var t2 = v(m(e2)), n3 = 0 <= [
                "absolute",
                "fixed"
            ].indexOf(c(e2).position) && i(e2) ? y(e2) : e2;
            return r2(n3) ? t2.filter(function(e3) {
                return r2(e3) && O(e3, n3) && "body" !== s(e3);
            }) : [];
        })(e1) : [].concat(t1), (n2 = (n2 = [].concat(t1, [
            n2
        ])).reduce(function(t2, n3) {
            return n3 = E(e1, n3), t2.top = _(n3.top, t2.top), t2.right = U(n3.right, t2.right), t2.bottom = U(n3.bottom, t2.bottom), t2.left = _(n3.left, t2.left), t2;
        }, E(e1, n2[0]))).width = n2.right - n2.left, n2.height = n2.bottom - n2.top, n2.x = n2.left, n2.y = n2.top, n2;
    }
    function L(e1) {
        return 0 <= [
            "top",
            "bottom"
        ].indexOf(e1) ? "x" : "y";
    }
    function P(e1) {
        var t1 = e1.reference, n2 = e1.element, o2 = (e1 = e1.placement) ? x(e1) : null;
        e1 = e1 ? e1.split("-")[1] : null;
        var r3 = t1.x + t1.width / 2 - n2.width / 2, i1 = t1.y + t1.height / 2 - n2.height / 2;
        switch(o2){
            case "top":
                r3 = {
                    x: r3,
                    y: t1.y - n2.height
                };
                break;
            case "bottom":
                r3 = {
                    x: r3,
                    y: t1.y + t1.height
                };
                break;
            case "right":
                r3 = {
                    x: t1.x + t1.width,
                    y: i1
                };
                break;
            case "left":
                r3 = {
                    x: t1.x - n2.width,
                    y: i1
                };
                break;
            default:
                r3 = {
                    x: t1.x,
                    y: t1.y
                };
        }
        if (null != (o2 = o2 ? L(o2) : null)) switch(i1 = "y" === o2 ? "height" : "width", e1){
            case "start":
                r3[o2] -= t1[i1] / 2 - n2[i1] / 2;
                break;
            case "end":
                r3[o2] += t1[i1] / 2 - n2[i1] / 2;
        }
        return r3;
    }
    function M(e1) {
        return Object.assign({
        }, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e1);
    }
    function k(e1, t1) {
        return t1.reduce(function(t2, n2) {
            return t2[n2] = e1, t2;
        }, {
        });
    }
    function A(e1, n2) {
        (void 0) === n2 && (n2 = {
        });
        var o2 = n2;
        n2 = (void 0) === (n2 = o2.placement) ? e1.placement : n2;
        var i1 = o2.boundary, a2 = (void 0) === i1 ? "clippingParents" : i1, s2 = (void 0) === (i1 = o2.rootBoundary) ? "viewport" : i1;
        i1 = (void 0) === (i1 = o2.elementContext) ? "popper" : i1;
        var p1 = o2.altBoundary, c1 = (void 0) !== p1 && p1;
        o2 = M("number" != typeof (o2 = (void 0) === (o2 = o2.padding) ? 0 : o2) ? o2 : k(o2, C));
        var l2 = e1.elements.reference;
        p1 = e1.rects.popper, a2 = D(r2(c1 = e1.elements[c1 ? "popper" === i1 ? "reference" : "popper" : i1]) ? c1 : c1.contextElement || f1(e1.elements.popper), a2, s2), c1 = P({
            reference: s2 = t(l2),
            element: p1,
            strategy: "absolute",
            placement: n2
        }), p1 = j(Object.assign({
        }, p1, c1)), s2 = "popper" === i1 ? p1 : s2;
        var u2 = {
            top: a2.top - s2.top + o2.top,
            bottom: s2.bottom - a2.bottom + o2.bottom,
            left: a2.left - s2.left + o2.left,
            right: s2.right - a2.right + o2.right
        };
        if (e1 = e1.modifiersData.offset, "popper" === i1 && e1) {
            var d1 = e1[n2];
            Object.keys(u2).forEach(function(e2) {
                var t1 = 0 <= [
                    "right",
                    "bottom"
                ].indexOf(e2) ? 1 : -1, n3 = 0 <= [
                    "top",
                    "bottom"
                ].indexOf(e2) ? "y" : "x";
                u2[e2] += d1[n3] * t1;
            });
        }
        return u2;
    }
    function W() {
        for(var e1 = arguments.length, t1 = Array(e1), n2 = 0; n2 < e1; n2++)t1[n2] = arguments[n2];
        return !t1.some(function(e2) {
            return !(e2 && "function" == typeof e2.getBoundingClientRect);
        });
    }
    function B(e1) {
        (void 0) === e1 && (e1 = {
        });
        var t1 = e1.defaultModifiers, n2 = (void 0) === t1 ? [] : t1, o2 = (void 0) === (e1 = e1.defaultOptions) ? F : e1;
        return function(e2, t2, i1) {
            function a2() {
                f2.forEach(function(e3) {
                    return e3();
                }), f2 = [];
            }
            (void 0) === i1 && (i1 = o2);
            var s2 = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({
                }, F, o2),
                modifiersData: {
                },
                elements: {
                    reference: e2,
                    popper: t2
                },
                attributes: {
                },
                styles: {
                }
            }, f2 = [], p1 = !1, c1 = {
                state: s2,
                setOptions: function(i2) {
                    return a2(), s2.options = Object.assign({
                    }, o2, s2.options, i2), s2.scrollParents = {
                        reference: r2(e2) ? v(e2) : e2.contextElement ? v(e2.contextElement) : [],
                        popper: v(t2)
                    }, i2 = (function(e3) {
                        var t3 = b(e3);
                        return I.reduce(function(e4, n3) {
                            return e4.concat(t3.filter(function(e5) {
                                return e5.phase === n3;
                            }));
                        }, []);
                    })(function(e3) {
                        var t3 = e3.reduce(function(e4, t4) {
                            var n3 = e4[t4.name];
                            return e4[t4.name] = n3 ? Object.assign({
                            }, n3, t4, {
                                options: Object.assign({
                                }, n3.options, t4.options),
                                data: Object.assign({
                                }, n3.data, t4.data)
                            }) : t4, e4;
                        }, {
                        });
                        return Object.keys(t3).map(function(e4) {
                            return t3[e4];
                        });
                    }([].concat(n2, s2.options.modifiers))), s2.orderedModifiers = i2.filter(function(e3) {
                        return e3.enabled;
                    }), s2.orderedModifiers.forEach(function(e3) {
                        var t3 = e3.name, n3 = e3.options;
                        n3 = (void 0) === n3 ? {
                        } : n3, "function" == typeof (e3 = e3.effect) && (t3 = e3({
                            state: s2,
                            name: t3,
                            instance: c1,
                            options: n3
                        }), f2.push(t3 || function() {
                        }));
                    }), c1.update();
                },
                forceUpdate: function() {
                    if (!p1) {
                        var e3 = s2.elements, t3 = e3.reference;
                        if (W(t3, e3 = e3.popper)) for(s2.rects = {
                            reference: u(t3, y(e3), "fixed" === s2.options.strategy),
                            popper: d(e3)
                        }, s2.reset = !1, s2.placement = s2.options.placement, s2.orderedModifiers.forEach(function(e4) {
                            return s2.modifiersData[e4.name] = Object.assign({
                            }, e4.data);
                        }), t3 = 0; t3 < s2.orderedModifiers.length; t3++)if (!0 === s2.reset) s2.reset = !1, t3 = -1;
                        else {
                            var n3 = s2.orderedModifiers[t3];
                            e3 = n3.fn;
                            var o3 = n3.options;
                            o3 = (void 0) === o3 ? {
                            } : o3, n3 = n3.name, "function" == typeof e3 && (s2 = e3({
                                state: s2,
                                options: o3,
                                name: n3,
                                instance: c1
                            }) || s2);
                        }
                    }
                },
                update: w(function() {
                    return new Promise(function(e4) {
                        c1.forceUpdate(), e4(s2);
                    });
                }),
                destroy: function() {
                    a2(), p1 = !0;
                }
            };
            return W(e2, t2) ? (c1.setOptions(i1).then(function(e4) {
                !p1 && i1.onFirstUpdate && i1.onFirstUpdate(e4);
            }), c1) : c1;
        };
    }
    function T(e1) {
        var t1, o2 = e1.popper, r3 = e1.popperRect, i1 = e1.placement, a2 = e1.offsets, s2 = e1.position, p1 = e1.gpuAcceleration, l2 = e1.adaptive;
        if (!0 === (e1 = e1.roundOffsets)) {
            e1 = a2.y;
            var u2 = window.devicePixelRatio || 1;
            e1 = {
                x: z(z(a2.x * u2) / u2) || 0,
                y: z(z(e1 * u2) / u2) || 0
            };
        } else e1 = "function" == typeof e1 ? e1(a2) : a2;
        e1 = (void 0) === (e1 = (u2 = e1).x) ? 0 : e1, u2 = (void 0) === (u2 = u2.y) ? 0 : u2;
        var d2 = a2.hasOwnProperty("x");
        a2 = a2.hasOwnProperty("y");
        var m1, h1 = "left", v1 = "top", g1 = window;
        if (l2) {
            var b1 = y(o2), w1 = "clientHeight", x1 = "clientWidth";
            b1 === n1(o2) && "static" !== c(b1 = f1(o2)).position && (w1 = "scrollHeight", x1 = "scrollWidth"), "top" === i1 && (v1 = "bottom", u2 -= b1[w1] - r3.height, u2 *= p1 ? 1 : -1), "left" === i1 && (h1 = "right", e1 -= b1[x1] - r3.width, e1 *= p1 ? 1 : -1);
        }
        return o2 = Object.assign({
            position: s2
        }, l2 && J), p1 ? Object.assign({
        }, o2, ((m1 = {
        })[v1] = a2 ? "0" : "", m1[h1] = d2 ? "0" : "", m1.transform = 2 > (g1.devicePixelRatio || 1) ? "translate(" + e1 + "px, " + u2 + "px)" : "translate3d(" + e1 + "px, " + u2 + "px, 0)", m1)) : Object.assign({
        }, o2, ((t1 = {
        })[v1] = a2 ? u2 + "px" : "", t1[h1] = d2 ? e1 + "px" : "", t1.transform = "", t1));
    }
    function H(e1) {
        return e1.replace(/left|right|bottom|top/g, function(e2) {
            return $[e2];
        });
    }
    function R(e1) {
        return e1.replace(/start|end/g, function(e2) {
            return ee[e2];
        });
    }
    function S(e1, t1, n2) {
        return (void 0) === n2 && (n2 = {
            x: 0,
            y: 0
        }), {
            top: e1.top - t1.height - n2.y,
            right: e1.right - t1.width + n2.x,
            bottom: e1.bottom - t1.height + n2.y,
            left: e1.left - t1.width - n2.x
        };
    }
    function q(e1) {
        return [
            "top",
            "right",
            "bottom",
            "left"
        ].some(function(t1) {
            return 0 <= e1[t1];
        });
    }
    var C = [
        "top",
        "bottom",
        "right",
        "left"
    ], N = C.reduce(function(e1, t1) {
        return e1.concat([
            t1 + "-start",
            t1 + "-end"
        ]);
    }, []), V = [].concat(C, [
        "auto"
    ]).reduce(function(e1, t1) {
        return e1.concat([
            t1,
            t1 + "-start",
            t1 + "-end"
        ]);
    }, []), I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), _ = Math.max, U = Math.min, z = Math.round, F = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    }, X = {
        passive: !0
    }, Y = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {
        },
        effect: function(e1) {
            var t1 = e1.state, o2 = e1.instance, r3 = (e1 = e1.options).scroll, i1 = (void 0) === r3 || r3, a2 = (void 0) === (e1 = e1.resize) || e1, s2 = n1(t1.elements.popper), f2 = [].concat(t1.scrollParents.reference, t1.scrollParents.popper);
            return i1 && f2.forEach(function(e2) {
                e2.addEventListener("scroll", o2.update, X);
            }), a2 && s2.addEventListener("resize", o2.update, X), function() {
                i1 && f2.forEach(function(e2) {
                    e2.removeEventListener("scroll", o2.update, X);
                }), a2 && s2.removeEventListener("resize", o2.update, X);
            };
        },
        data: {
        }
    }, G = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(e1) {
            var t1 = e1.state;
            t1.modifiersData[e1.name] = P({
                reference: t1.rects.reference,
                element: t1.rects.popper,
                strategy: "absolute",
                placement: t1.placement
            });
        },
        data: {
        }
    }, J = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }, K = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e1) {
            var t1 = e1.state, n2 = e1.options;
            e1 = (void 0) === (e1 = n2.gpuAcceleration) || e1;
            var o2 = n2.adaptive;
            o2 = (void 0) === o2 || o2, n2 = (void 0) === (n2 = n2.roundOffsets) || n2, e1 = {
                placement: x(t1.placement),
                popper: t1.elements.popper,
                popperRect: t1.rects.popper,
                gpuAcceleration: e1
            }, null != t1.modifiersData.popperOffsets && (t1.styles.popper = Object.assign({
            }, t1.styles.popper, T(Object.assign({
            }, e1, {
                offsets: t1.modifiersData.popperOffsets,
                position: t1.options.strategy,
                adaptive: o2,
                roundOffsets: n2
            })))), null != t1.modifiersData.arrow && (t1.styles.arrow = Object.assign({
            }, t1.styles.arrow, T(Object.assign({
            }, e1, {
                offsets: t1.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: n2
            })))), t1.attributes.popper = Object.assign({
            }, t1.attributes.popper, {
                "data-popper-placement": t1.placement
            });
        },
        data: {
        }
    }, Q = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e1) {
            var t1 = e1.state;
            Object.keys(t1.elements).forEach(function(e2) {
                var n2 = t1.styles[e2] || {
                }, o2 = t1.attributes[e2] || {
                }, r3 = t1.elements[e2];
                i(r3) && s(r3) && (Object.assign(r3.style, n2), Object.keys(o2).forEach(function(e4) {
                    var t2 = o2[e4];
                    !1 === t2 ? r3.removeAttribute(e4) : r3.setAttribute(e4, !0 === t2 ? "" : t2);
                }));
            });
        },
        effect: function(e1) {
            var t1 = e1.state, n2 = {
                popper: {
                    position: t1.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {
                }
            };
            return Object.assign(t1.elements.popper.style, n2.popper), t1.styles = n2, t1.elements.arrow && Object.assign(t1.elements.arrow.style, n2.arrow), function() {
                Object.keys(t1.elements).forEach(function(e2) {
                    var o2 = t1.elements[e2], r3 = t1.attributes[e2] || {
                    };
                    e2 = Object.keys(t1.styles.hasOwnProperty(e2) ? t1.styles[e2] : n2[e2]).reduce(function(e4, t2) {
                        return e4[t2] = "", e4;
                    }, {
                    }), i(o2) && s(o2) && (Object.assign(o2.style, e2), Object.keys(r3).forEach(function(e4) {
                        o2.removeAttribute(e4);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    }, Z = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(e1) {
            var t1 = e1.state, n2 = e1.name, o2 = (void 0) === (e1 = e1.options.offset) ? [
                0,
                0
            ] : e1, r3 = (e1 = V.reduce(function(e2, n4) {
                var r4 = t1.rects, i1 = x(n4), a2 = 0 <= [
                    "left",
                    "top"
                ].indexOf(i1) ? -1 : 1, s2 = "function" == typeof o2 ? o2(Object.assign({
                }, r4, {
                    placement: n4
                })) : o2;
                return r4 = (r4 = s2[0]) || 0, s2 = ((s2 = s2[1]) || 0) * a2, i1 = 0 <= [
                    "left",
                    "right"
                ].indexOf(i1) ? {
                    x: s2,
                    y: r4
                } : {
                    x: r4,
                    y: s2
                }, e2[n4] = i1, e2;
            }, {
            }))[t1.placement], i1 = r3.x;
            r3 = r3.y, null != t1.modifiersData.popperOffsets && (t1.modifiersData.popperOffsets.x += i1, t1.modifiersData.popperOffsets.y += r3), t1.modifiersData[n2] = e1;
        }
    }, $ = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }, ee = {
        start: "end",
        end: "start"
    }, te = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1 = e1.state, n2 = e1.options;
            if (e1 = e1.name, !t1.modifiersData[e1]._skip) {
                var o2 = n2.mainAxis;
                o2 = (void 0) === o2 || o2;
                var r3 = n2.altAxis;
                r3 = (void 0) === r3 || r3;
                var i1 = n2.fallbackPlacements, a2 = n2.padding, s2 = n2.boundary, f2 = n2.rootBoundary, p1 = n2.altBoundary, c1 = n2.flipVariations, l2 = (void 0) === c1 || c1, u3 = n2.allowedAutoPlacements;
                c1 = x(n2 = t1.options.placement), i1 = i1 || (c1 !== n2 && l2 ? (function(e2) {
                    if ("auto" === x(e2)) return [];
                    var t2 = H(e2);
                    return [
                        R(e2),
                        t2,
                        R(t2)
                    ];
                })(n2) : [
                    H(n2)
                ]);
                var d2 = [
                    n2
                ].concat(i1).reduce(function(e2, n4) {
                    return e2.concat("auto" === x(n4) ? function(e4, t2) {
                        (void 0) === t2 && (t2 = {
                        });
                        var n5 = t2.boundary, o4 = t2.rootBoundary, r4 = t2.padding, i2 = t2.flipVariations, a3 = t2.allowedAutoPlacements, s3 = (void 0) === a3 ? V : a3, f3 = t2.placement.split("-")[1];
                        0 === (i2 = (t2 = f3 ? i2 ? N : N.filter(function(e5) {
                            return e5.split("-")[1] === f3;
                        }) : C).filter(function(e5) {
                            return 0 <= s3.indexOf(e5);
                        })).length && (i2 = t2);
                        var p2 = i2.reduce(function(t4, i3) {
                            return t4[i3] = A(e4, {
                                placement: i3,
                                boundary: n5,
                                rootBoundary: o4,
                                padding: r4
                            })[x(i3)], t4;
                        }, {
                        });
                        return Object.keys(p2).sort(function(e5, t4) {
                            return p2[e5] - p2[t4];
                        });
                    }(t1, {
                        placement: n4,
                        boundary: s2,
                        rootBoundary: f2,
                        padding: a2,
                        flipVariations: l2,
                        allowedAutoPlacements: u3
                    }) : n4);
                }, []);
                n2 = t1.rects.reference, i1 = t1.rects.popper;
                var m1 = new Map;
                c1 = !0;
                for(var h1 = d2[0], v1 = 0; v1 < d2.length; v1++){
                    var g1 = d2[v1], y1 = x(g1), b2 = "start" === g1.split("-")[1], w2 = 0 <= [
                        "top",
                        "bottom"
                    ].indexOf(y1), O1 = w2 ? "width" : "height", j1 = A(t1, {
                        placement: g1,
                        boundary: s2,
                        rootBoundary: f2,
                        altBoundary: p1,
                        padding: a2
                    });
                    if (b2 = w2 ? b2 ? "right" : "left" : b2 ? "bottom" : "top", n2[O1] > i1[O1] && (b2 = H(b2)), O1 = H(b2), w2 = [], o2 && w2.push(0 >= j1[y1]), r3 && w2.push(0 >= j1[b2], 0 >= j1[O1]), w2.every(function(e2) {
                        return e2;
                    })) {
                        h1 = g1, c1 = !1;
                        break;
                    }
                    m1.set(g1, w2);
                }
                if (c1) for(o2 = function(e2) {
                    var t2 = d2.find(function(t4) {
                        if (t4 = m1.get(t4)) return t4.slice(0, e2).every(function(e4) {
                            return e4;
                        });
                    });
                    if (t2) return h1 = t2, "break";
                }, r3 = l2 ? 3 : 1; 0 < r3 && "break" !== o2(r3); r3--);
                t1.placement !== h1 && (t1.modifiersData[e1]._skip = !0, t1.placement = h1, t1.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    }, ne = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1 = e1.state, n2 = e1.options;
            e1 = e1.name;
            var o4 = n2.mainAxis, r4 = (void 0) === o4 || o4, i2 = (void 0) !== (o4 = n2.altAxis) && o4;
            o4 = (void 0) === (o4 = n2.tether) || o4;
            var a3 = n2.tetherOffset, s3 = (void 0) === a3 ? 0 : a3, f3 = A(t1, {
                boundary: n2.boundary,
                rootBoundary: n2.rootBoundary,
                padding: n2.padding,
                altBoundary: n2.altBoundary
            });
            n2 = x(t1.placement);
            var p2 = t1.placement.split("-")[1], c2 = !p2, l3 = L(n2);
            n2 = "x" === l3 ? "y" : "x", a3 = t1.modifiersData.popperOffsets;
            var u4 = t1.rects.reference, m2 = t1.rects.popper, h2 = "function" == typeof s3 ? s3(Object.assign({
            }, t1.rects, {
                placement: t1.placement
            })) : s3;
            if (s3 = {
                x: 0,
                y: 0
            }, a3) {
                if (r4 || i2) {
                    var v2 = "y" === l3 ? "top" : "left", g2 = "y" === l3 ? "bottom" : "right", b3 = "y" === l3 ? "height" : "width", w3 = a3[l3], O2 = a3[l3] + f3[v2], j2 = a3[l3] - f3[g2], E1 = o4 ? -m2[b3] / 2 : 0, D1 = "start" === p2 ? u4[b3] : m2[b3];
                    p2 = "start" === p2 ? -m2[b3] : -u4[b3], m2 = t1.elements.arrow, m2 = o4 && m2 ? d(m2) : {
                        width: 0,
                        height: 0
                    };
                    var P1 = t1.modifiersData["arrow#persistent"] ? t1.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                    v2 = P1[v2], g2 = P1[g2], m2 = _(0, U(u4[b3], m2[b3])), D1 = c2 ? u4[b3] / 2 - E1 - m2 - v2 - h2 : D1 - m2 - v2 - h2, u4 = c2 ? -u4[b3] / 2 + E1 + m2 + g2 + h2 : p2 + m2 + g2 + h2, c2 = t1.elements.arrow && y(t1.elements.arrow), h2 = t1.modifiersData.offset ? t1.modifiersData.offset[t1.placement][l3] : 0, c2 = a3[l3] + D1 - h2 - (c2 ? "y" === l3 ? c2.clientTop || 0 : c2.clientLeft || 0 : 0), u4 = a3[l3] + u4 - h2, r4 && (r4 = o4 ? U(O2, c2) : O2, j2 = o4 ? _(j2, u4) : j2, r4 = _(r4, U(w3, j2)), a3[l3] = r4, s3[l3] = r4 - w3), i2 && (r4 = (i2 = a3[n2]) + f3["x" === l3 ? "top" : "left"], f3 = i2 - f3["x" === l3 ? "bottom" : "right"], r4 = o4 ? U(r4, c2) : r4, o4 = o4 ? _(f3, u4) : f3, o4 = _(r4, U(i2, o4)), a3[n2] = o4, s3[n2] = o4 - i2);
                }
                t1.modifiersData[e1] = s3;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    }, oe = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e1) {
            var t1, n2 = e1.state, o4 = e1.name, r4 = e1.options, i2 = n2.elements.arrow, a3 = n2.modifiersData.popperOffsets, s3 = x(n2.placement);
            if (e1 = L(s3), s3 = 0 <= [
                "left",
                "right"
            ].indexOf(s3) ? "height" : "width", i2 && a3) {
                r4 = M("number" != typeof (r4 = "function" == typeof (r4 = r4.padding) ? r4(Object.assign({
                }, n2.rects, {
                    placement: n2.placement
                })) : r4) ? r4 : k(r4, C));
                var f3 = d(i2), p2 = "y" === e1 ? "top" : "left", c2 = "y" === e1 ? "bottom" : "right", l3 = n2.rects.reference[s3] + n2.rects.reference[e1] - a3[e1] - n2.rects.popper[s3];
                a3 = a3[e1] - n2.rects.reference[e1], a3 = (i2 = (i2 = y(i2)) ? "y" === e1 ? i2.clientHeight || 0 : i2.clientWidth || 0 : 0) / 2 - f3[s3] / 2 + (l3 / 2 - a3 / 2), s3 = _(r4[p2], U(a3, i2 - f3[s3] - r4[c2])), n2.modifiersData[o4] = ((t1 = {
                })[e1] = s3, t1.centerOffset = s3 - a3, t1);
            }
        },
        effect: function(e1) {
            var t1 = e1.state;
            if (null != (e1 = (void 0) === (e1 = e1.options.element) ? "[data-popper-arrow]" : e1)) {
                if ("string" == typeof e1 && !(e1 = t1.elements.popper.querySelector(e1))) return;
                O(t1.elements.popper, e1) && (t1.elements.arrow = e1);
            }
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    }, re = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(e1) {
            var t1 = e1.state;
            e1 = e1.name;
            var n2 = t1.rects.reference, o4 = t1.rects.popper, r4 = t1.modifiersData.preventOverflow, i2 = A(t1, {
                elementContext: "reference"
            }), a3 = A(t1, {
                altBoundary: !0
            });
            n2 = S(i2, n2), o4 = S(a3, o4, r4), r4 = q(n2), a3 = q(o4), t1.modifiersData[e1] = {
                referenceClippingOffsets: n2,
                popperEscapeOffsets: o4,
                isReferenceHidden: r4,
                hasPopperEscaped: a3
            }, t1.attributes.popper = Object.assign({
            }, t1.attributes.popper, {
                "data-popper-reference-hidden": r4,
                "data-popper-escaped": a3
            });
        }
    }, ie = B({
        defaultModifiers: [
            Y,
            G,
            K,
            Q
        ]
    }), ae = [
        Y,
        G,
        K,
        Q,
        Z,
        te,
        ne,
        oe,
        re
    ], se = B({
        defaultModifiers: ae
    });
    e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = A, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=dashboard.9b29a9f5.js.map
