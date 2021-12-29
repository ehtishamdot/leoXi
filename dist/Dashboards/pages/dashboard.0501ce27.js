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
})({"jAoOl":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "81077d960501ce27";
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

},{}],"7kNoG":[function(require,module,exports) {
/*!
 * Chart.js v3.0.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
}(this, function() {
    "use strict";
    const t1 = "undefined" == typeof window ? function(t1) {
        return t1();
    } : window.requestAnimationFrame;
    function e1(e1, i, n) {
        const o = n || ((t1)=>Array.prototype.slice.call(t1)
        );
        let s = !1, a = [];
        return function(...n1) {
            a = o(n1), s || (s = !0, t1.call(window, ()=>{
                s = !1, e1.apply(i, a);
            }));
        };
    }
    function i1(t1, e1) {
        let i1;
        return function() {
            return e1 ? (clearTimeout(i1), i1 = setTimeout(t1, e1)) : t1(), e1;
        };
    }
    const n1 = (t1)=>"start" === t1 ? "left" : "end" === t1 ? "right" : "center"
    , o5 = (t1, e1, i1)=>"start" === t1 ? e1 : "end" === t1 ? i1 : (e1 + i1) / 2
    , s4 = (t1, e1, i1)=>"right" === t1 ? i1 : "center" === t1 ? (e1 + i1) / 2 : e1
    ;
    var a = new class {
        constructor(){
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0;
        }
        _notify(t, e, i, n) {
            const o1 = e.listeners[n], s1 = e.duration;
            o1.forEach((n2)=>n2({
                    chart: t,
                    numSteps: s1,
                    currentStep: Math.min(i - e.start, s1)
                })
            );
        }
        _refresh() {
            const e2 = this;
            e2._request || (e2._running = !0, e2._request = t1.call(window, ()=>{
                e2._update(), e2._request = null, e2._running && e2._refresh();
            }));
        }
        _update(t = Date.now()) {
            const e2 = this;
            let i2 = 0;
            e2._charts.forEach((n2, o1)=>{
                if (!n2.running || !n2.items.length) return;
                const s1 = n2.items;
                let a1, r = s1.length - 1, l = !1;
                for(; r >= 0; --r)a1 = s1[r], a1._active ? (a1._total > n2.duration && (n2.duration = a1._total), a1.tick(t), l = !0) : (s1[r] = s1[s1.length - 1], s1.pop());
                l && (o1.draw(), e2._notify(o1, n2, t, "progress")), s1.length || (n2.running = !1, e2._notify(o1, n2, t, "complete")), i2 += s1.length;
            }), e2._lastDate = t, 0 === i2 && (e2._running = !1);
        }
        _getAnims(t) {
            const e2 = this._charts;
            let i2 = e2.get(t);
            return i2 || (i2 = {
                running: !1,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e2.set(t, i2)), i2;
        }
        listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
            return this._getAnims(t).items.length > 0;
        }
        start(t) {
            const e2 = this._charts.get(t);
            e2 && (e2.running = !0, e2.start = Date.now(), e2.duration = e2.items.reduce((t2, e3)=>Math.max(t2, e3._duration)
            , 0), this._refresh());
        }
        running(t) {
            if (!this._running) return !1;
            const e2 = this._charts.get(t);
            return !!(e2 && e2.running && e2.items.length);
        }
        stop(t) {
            const e2 = this._charts.get(t);
            if (!e2 || !e2.items.length) return;
            const i2 = e2.items;
            let n2 = i2.length - 1;
            for(; n2 >= 0; --n2)i2[n2].cancel();
            e2.items = [], this._notify(t, e2, Date.now(), "complete");
        }
        remove(t) {
            return this._charts.delete(t);
        }
    };
    /*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */ const r = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }, l = "0123456789ABCDEF", c2 = (t2)=>l[15 & t2]
    , h2 = (t2)=>l[(240 & t2) >> 4] + l[15 & t2]
    , d2 = (t2)=>(240 & t2) >> 4 == (15 & t2)
    ;
    function u(t2) {
        var e2 = function(t3) {
            return d2(t3.r) && d2(t3.g) && d2(t3.b) && d2(t3.a);
        }(t2) ? c2 : h2;
        return t2 ? "#" + e2(t2.r) + e2(t2.g) + e2(t2.b) + (t2.a < 255 ? e2(t2.a) : "") : t2;
    }
    function f(t2) {
        return t2 + 0.5 | 0;
    }
    const g = (t2, e2, i2)=>Math.max(Math.min(t2, i2), e2)
    ;
    function p(t2) {
        return g(f(2.55 * t2), 0, 255);
    }
    function m(t2) {
        return g(f(255 * t2), 0, 255);
    }
    function x(t2) {
        return g(f(t2 / 2.55) / 100, 0, 1);
    }
    function b(t2) {
        return g(f(100 * t2), 0, 100);
    }
    const _ = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const y = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function v(t2, e2, i2) {
        const n2 = e2 * Math.min(i2, 1 - i2), o1 = (e3, o2 = (e3 + t2 / 30) % 12)=>i2 - n2 * Math.max(Math.min(o2 - 3, 9 - o2, 1), -1)
        ;
        return [
            o1(0),
            o1(8),
            o1(4)
        ];
    }
    function M(t2, e2, i2) {
        const n2 = (n3, o1 = (n3 + t2 / 60) % 6)=>i2 - i2 * e2 * Math.max(Math.min(o1, 4 - o1, 1), 0)
        ;
        return [
            n2(5),
            n2(3),
            n2(1)
        ];
    }
    function w(t2, e2, i2) {
        const n2 = v(t2, 1, 0.5);
        let o1;
        for(e2 + i2 > 1 && (o1 = 1 / (e2 + i2), e2 *= o1, i2 *= o1), o1 = 0; o1 < 3; o1++)n2[o1] *= 1 - e2 - i2, n2[o1] += e2;
        return n2;
    }
    function k(t2) {
        const e2 = t2.r / 255, i2 = t2.g / 255, n2 = t2.b / 255, o1 = Math.max(e2, i2, n2), s1 = Math.min(e2, i2, n2), a1 = (o1 + s1) / 2;
        let r1, l1, c1;
        return o1 !== s1 && (c1 = o1 - s1, l1 = a1 > 0.5 ? c1 / (2 - o1 - s1) : c1 / (o1 + s1), r1 = o1 === e2 ? (i2 - n2) / c1 + (i2 < n2 ? 6 : 0) : o1 === i2 ? (n2 - e2) / c1 + 2 : (e2 - i2) / c1 + 4, r1 = 60 * r1 + 0.5), [
            0 | r1,
            l1 || 0,
            a1
        ];
    }
    function S(t2, e2, i2, n2) {
        return (Array.isArray(e2) ? t2(e2[0], e2[1], e2[2]) : t2(e2, i2, n2)).map(m);
    }
    function P(t2, e2, i2) {
        return S(v, t2, e2, i2);
    }
    function D(t2) {
        return (t2 % 360 + 360) % 360;
    }
    function C(t2) {
        const e2 = y.exec(t2);
        let i2, n2 = 255;
        if (!e2) return;
        e2[5] !== i2 && (n2 = e2[6] ? p(+e2[5]) : m(+e2[5]));
        const o1 = D(+e2[2]), s1 = +e2[3] / 100, a1 = +e2[4] / 100;
        return i2 = "hwb" === e2[1] ? (function(t3, e3, i3) {
            return S(w, t3, e3, i3);
        })(o1, s1, a1) : "hsv" === e2[1] ? (function(t3, e3, i3) {
            return S(M, t3, e3, i3);
        })(o1, s1, a1) : P(o1, s1, a1), {
            r: i2[0],
            g: i2[1],
            b: i2[2],
            a: n2
        };
    }
    const A = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    }, O = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };
    let T;
    function L(t2) {
        T || (T = (function() {
            const t3 = {
            }, e2 = Object.keys(O), i2 = Object.keys(A);
            let n2, o1, s1, a1, r1;
            for(n2 = 0; n2 < e2.length; n2++){
                for(a1 = r1 = e2[n2], o1 = 0; o1 < i2.length; o1++)s1 = i2[o1], r1 = r1.replace(s1, A[s1]);
                s1 = parseInt(O[a1], 16), t3[r1] = [
                    s1 >> 16 & 255,
                    s1 >> 8 & 255,
                    255 & s1
                ];
            }
            return t3;
        })(), T.transparent = [
            0,
            0,
            0,
            0
        ]);
        const e2 = T[t2.toLowerCase()];
        return e2 && {
            r: e2[0],
            g: e2[1],
            b: e2[2],
            a: 4 === e2.length ? e2[3] : 255
        };
    }
    function R(t2, e2, i2) {
        if (t2) {
            let n2 = k(t2);
            n2[e2] = Math.max(0, Math.min(n2[e2] + n2[e2] * i2, 0 === e2 ? 360 : 1)), n2 = P(n2), t2.r = n2[0], t2.g = n2[1], t2.b = n2[2];
        }
    }
    function E(t2, e2) {
        return t2 ? Object.assign(e2 || {
        }, t2) : t2;
    }
    function I(t2) {
        var e2 = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(t2) ? t2.length >= 3 && (e2 = {
            r: t2[0],
            g: t2[1],
            b: t2[2],
            a: 255
        }, t2.length > 3 && (e2.a = m(t2[3]))) : (e2 = E(t2, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = m(e2.a), e2;
    }
    function F(t2) {
        return "r" === t2.charAt(0) ? (function(t3) {
            const e2 = _.exec(t3);
            let i2, n2, o1, s1 = 255;
            if (e2) {
                if (e2[7] !== i2) {
                    const t4 = +e2[7];
                    s1 = 255 & (e2[8] ? p(t4) : 255 * t4);
                }
                return i2 = +e2[1], n2 = +e2[3], o1 = +e2[5], i2 = 255 & (e2[2] ? p(i2) : i2), n2 = 255 & (e2[4] ? p(n2) : n2), o1 = 255 & (e2[6] ? p(o1) : o1), {
                    r: i2,
                    g: n2,
                    b: o1,
                    a: s1
                };
            }
        })(t2) : C(t2);
    }
    class z {
        constructor(t2){
            if (t2 instanceof z) return t2;
            const e2 = typeof t2;
            let i2;
            var n2, o1, s1;
            "object" === e2 ? i2 = I(t2) : "string" === e2 && (s1 = (n2 = t2).length, "#" === n2[0] && (4 === s1 || 5 === s1 ? o1 = {
                r: 255 & 17 * r[n2[1]],
                g: 255 & 17 * r[n2[2]],
                b: 255 & 17 * r[n2[3]],
                a: 5 === s1 ? 17 * r[n2[4]] : 255
            } : 7 !== s1 && 9 !== s1 || (o1 = {
                r: r[n2[1]] << 4 | r[n2[2]],
                g: r[n2[3]] << 4 | r[n2[4]],
                b: r[n2[5]] << 4 | r[n2[6]],
                a: 9 === s1 ? r[n2[7]] << 4 | r[n2[8]] : 255
            })), i2 = o1 || L(t2) || F(t2)), this._rgb = i2, this._valid = !!i2;
        }
        get valid() {
            return this._valid;
        }
        get rgb() {
            var t3 = E(this._rgb);
            return t3 && (t3.a = x(t3.a)), t3;
        }
        set rgb(t) {
            this._rgb = I(t);
        }
        rgbString() {
            var t4;
            return this._valid ? (t4 = this._rgb) && (t4.a < 255 ? `rgba(${t4.r}, ${t4.g}, ${t4.b}, ${x(t4.a)})` : `rgb(${t4.r}, ${t4.g}, ${t4.b})`) : this._rgb;
        }
        hexString() {
            return this._valid ? u(this._rgb) : this._rgb;
        }
        hslString() {
            return this._valid ? (function(t5) {
                if (!t5) return;
                const e3 = k(t5), i3 = e3[0], n3 = b(e3[1]), o2 = b(e3[2]);
                return t5.a < 255 ? `hsla(${i3}, ${n3}%, ${o2}%, ${x(t5.a)})` : `hsl(${i3}, ${n3}%, ${o2}%)`;
            })(this._rgb) : this._rgb;
        }
        mix(t, e) {
            const i3 = this;
            if (t) {
                const n3 = i3.rgb, o2 = t.rgb;
                let s2;
                const a1 = e === s2 ? 0.5 : e, r1 = 2 * a1 - 1, l1 = n3.a - o2.a, c1 = ((r1 * l1 == -1 ? r1 : (r1 + l1) / (1 + r1 * l1)) + 1) / 2;
                s2 = 1 - c1, n3.r = 255 & c1 * n3.r + s2 * o2.r + 0.5, n3.g = 255 & c1 * n3.g + s2 * o2.g + 0.5, n3.b = 255 & c1 * n3.b + s2 * o2.b + 0.5, n3.a = a1 * n3.a + (1 - a1) * o2.a, i3.rgb = n3;
            }
            return i3;
        }
        clone() {
            return new z(this.rgb);
        }
        alpha(t) {
            return this._rgb.a = m(t), this;
        }
        clearer(t) {
            return this._rgb.a *= 1 - t, this;
        }
        greyscale() {
            const t5 = this._rgb, e3 = f(0.3 * t5.r + 0.59 * t5.g + 0.11 * t5.b);
            return t5.r = t5.g = t5.b = e3, this;
        }
        opaquer(t) {
            return this._rgb.a *= 1 + t, this;
        }
        negate() {
            const t5 = this._rgb;
            return t5.r = 255 - t5.r, t5.g = 255 - t5.g, t5.b = 255 - t5.b, this;
        }
        lighten(t) {
            return R(this._rgb, 2, t), this;
        }
        darken(t) {
            return R(this._rgb, 2, -t), this;
        }
        saturate(t) {
            return R(this._rgb, 1, t), this;
        }
        desaturate(t) {
            return R(this._rgb, 1, -t), this;
        }
        rotate(t) {
            return (function(t5, e3) {
                var i3 = k(t5);
                i3[0] = D(i3[0] + e3), i3 = P(i3), t5.r = i3[0], t5.g = i3[1], t5.b = i3[2];
            })(this._rgb, t), this;
        }
    }
    function V(t5) {
        return new z(t5);
    }
    const B = (t5)=>t5 instanceof CanvasGradient || t5 instanceof CanvasPattern
    ;
    function W(t5) {
        return B(t5) ? t5 : V(t5);
    }
    function H(t5) {
        return B(t5) ? t5 : V(t5).saturate(0.5).darken(0.1).hexString();
    }
    function N() {
    }
    const j = function() {
        let t5 = 0;
        return function() {
            return t5++;
        };
    }();
    function $(t5) {
        return null == t5;
    }
    function Y(t5) {
        if (Array.isArray && Array.isArray(t5)) return !0;
        const e3 = Object.prototype.toString.call(t5);
        return "[object" === e3.substr(0, 7) && "Array]" === e3.substr(-6);
    }
    function U(t5) {
        return null !== t5 && "[object Object]" === Object.prototype.toString.call(t5);
    }
    const X = (t5)=>("number" == typeof t5 || t5 instanceof Number) && isFinite(+t5)
    ;
    function q(t5, e3) {
        return X(t5) ? t5 : e3;
    }
    function K(t5, e3) {
        return (void 0) === t5 ? e3 : t5;
    }
    const G = (t5, e3)=>"string" == typeof t5 && t5.endsWith("%") ? parseFloat(t5) / 100 : t5 / e3
    , Z = (t5, e3)=>"string" == typeof t5 && t5.endsWith("%") ? parseFloat(t5) / 100 * e3 : +t5
    ;
    function Q(t5, e3, i3) {
        if (t5 && "function" == typeof t5.call) return t5.apply(i3, e3);
    }
    function J(t5, e3, i3, n3) {
        let o2, s2, a1;
        if (Y(t5)) {
            if (s2 = t5.length, n3) for(o2 = s2 - 1; o2 >= 0; o2--)e3.call(i3, t5[o2], o2);
            else for(o2 = 0; o2 < s2; o2++)e3.call(i3, t5[o2], o2);
        } else if (U(t5)) for(a1 = Object.keys(t5), s2 = a1.length, o2 = 0; o2 < s2; o2++)e3.call(i3, t5[a1[o2]], a1[o2]);
    }
    function tt(t5, e3) {
        let i3, n3, o2, s2;
        if (!t5 || !e3 || t5.length !== e3.length) return !1;
        for(i3 = 0, n3 = t5.length; i3 < n3; ++i3)if (o2 = t5[i3], s2 = e3[i3], o2.datasetIndex !== s2.datasetIndex || o2.index !== s2.index) return !1;
        return !0;
    }
    function et(t5) {
        if (Y(t5)) return t5.map(et);
        if (U(t5)) {
            const e3 = Object.create(null), i3 = Object.keys(t5), n3 = i3.length;
            let o2 = 0;
            for(; o2 < n3; ++o2)e3[i3[o2]] = et(t5[i3[o2]]);
            return e3;
        }
        return t5;
    }
    function it(t5) {
        return -1 === [
            "__proto__",
            "prototype",
            "constructor"
        ].indexOf(t5);
    }
    function nt(t5, e3, i3, n3) {
        if (!it(t5)) return;
        const o2 = e3[t5], s2 = i3[t5];
        U(o2) && U(s2) ? ot(o2, s2, n3) : e3[t5] = et(s2);
    }
    function ot(t5, e3, i3) {
        const n3 = Y(e3) ? e3 : [
            e3
        ], o2 = n3.length;
        if (!U(t5)) return t5;
        const s2 = (i3 = i3 || {
        }).merger || nt;
        for(let a1 = 0; a1 < o2; ++a1){
            if (!U(e3 = n3[a1])) continue;
            const o3 = Object.keys(e3);
            for(let n4 = 0, a2 = o3.length; n4 < a2; ++n4)s2(o3[n4], t5, e3, i3);
        }
        return t5;
    }
    function st(t5, e3) {
        return ot(t5, e3, {
            merger: at
        });
    }
    function at(t5, e3, i3) {
        if (!it(t5)) return;
        const n3 = e3[t5], o2 = i3[t5];
        U(n3) && U(o2) ? st(n3, o2) : Object.prototype.hasOwnProperty.call(e3, t5) || (e3[t5] = et(o2));
    }
    function rt(t5, e3) {
        const i3 = t5.indexOf(".", e3);
        return -1 === i3 ? t5.length : i3;
    }
    function lt(t5, e3) {
        if ("" === e3) return t5;
        let i3 = 0, n3 = rt(e3, i3);
        for(; t5 && n3 > i3;)t5 = t5[e3.substr(i3, n3 - i3)], i3 = n3 + 1, n3 = rt(e3, i3);
        return t5;
    }
    function ct(t5) {
        return t5.charAt(0).toUpperCase() + t5.slice(1);
    }
    const ht = (t5)=>(void 0) !== t5
    , dt = (t5)=>"function" == typeof t5
    , ut = Object.create(null), ft = Object.create(null);
    function gt(t5, e3) {
        if (!e3) return t5;
        const i3 = e3.split(".");
        for(let e4 = 0, n3 = i3.length; e4 < n3; ++e4){
            const n3 = i3[e4];
            t5 = t5[n3] || (t5[n3] = Object.create(null));
        }
        return t5;
    }
    function pt(t5, e3, i3) {
        return "string" == typeof e3 ? ot(gt(t5, e3), i3) : ot(gt(t5, ""), e3);
    }
    var mt = new class {
        constructor(t5){
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {
            }, this.devicePixelRatio = (t6)=>t6.chart.platform.getDevicePixelRatio()
            , this.elements = {
            }, this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove"
            ], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {
            }, this.hoverBackgroundColor = (t6, e3)=>H(e3.backgroundColor)
            , this.hoverBorderColor = (t6, e3)=>H(e3.borderColor)
            , this.hoverColor = (t6, e3)=>H(e3.color)
            , this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {
            }, this.responsive = !0, this.scale = void 0, this.scales = {
            }, this.showLine = !0, this.describe(t5);
        }
        set(t, e) {
            return pt(this, t, e);
        }
        get(t) {
            return gt(this, t);
        }
        describe(t, e) {
            return pt(ft, t, e);
        }
        override(t, e) {
            return pt(ut, t, e);
        }
        route(t, e, i, n) {
            const o2 = gt(this, t), s2 = gt(this, i), a1 = "_" + e;
            Object.defineProperties(o2, {
                [a1]: {
                    value: o2[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get () {
                        const t6 = this[a1], e3 = s2[n];
                        return U(t6) ? Object.assign({
                        }, e3, t6) : K(t6, e3);
                    },
                    set (t) {
                        this[a1] = t;
                    }
                }
            });
        }
    }({
        _scriptable: (t6)=>!t6.startsWith("on")
        ,
        _indexable: (t6)=>"events" !== t6
        ,
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    });
    const xt = Math.PI, bt = 2 * xt, _t = bt + xt, yt = Number.POSITIVE_INFINITY, vt = xt / 180, Mt = xt / 2, wt = xt / 4, kt = 2 * xt / 3, St = Math.log10, Pt = Math.sign;
    function Dt(t6) {
        const e3 = Math.pow(10, Math.floor(St(t6))), i3 = t6 / e3;
        return (i3 <= 1 ? 1 : i3 <= 2 ? 2 : i3 <= 5 ? 5 : 10) * e3;
    }
    function Ct(t6) {
        const e3 = [], i3 = Math.sqrt(t6);
        let n3;
        for(n3 = 1; n3 < i3; n3++)t6 % n3 == 0 && (e3.push(n3), e3.push(t6 / n3));
        return i3 === (0 | i3) && e3.push(i3), e3.sort((t7, e4)=>t7 - e4
        ).pop(), e3;
    }
    function At(t6) {
        return !isNaN(parseFloat(t6)) && isFinite(t6);
    }
    function Ot(t6, e3, i3) {
        return Math.abs(t6 - e3) < i3;
    }
    function Tt(t6, e3) {
        const i3 = Math.round(t6);
        return i3 - e3 <= t6 && i3 + e3 >= t6;
    }
    function Lt(t6, e3, i3) {
        let n3, o2, s2;
        for(n3 = 0, o2 = t6.length; n3 < o2; n3++)s2 = t6[n3][i3], isNaN(s2) || (e3.min = Math.min(e3.min, s2), e3.max = Math.max(e3.max, s2));
    }
    function Rt(t6) {
        return t6 * (xt / 180);
    }
    function Et(t6) {
        return t6 * (180 / xt);
    }
    function It(t6) {
        if (!X(t6)) return;
        let e3 = 1, i3 = 0;
        for(; Math.round(t6 * e3) / e3 !== t6;)e3 *= 10, i3++;
        return i3;
    }
    function Ft(t6, e3) {
        const i3 = e3.x - t6.x, n3 = e3.y - t6.y, o2 = Math.sqrt(i3 * i3 + n3 * n3);
        let s2 = Math.atan2(n3, i3);
        return s2 < -0.5 * xt && (s2 += bt), {
            angle: s2,
            distance: o2
        };
    }
    function zt(t6, e3) {
        return Math.sqrt(Math.pow(e3.x - t6.x, 2) + Math.pow(e3.y - t6.y, 2));
    }
    function Vt(t6, e3) {
        return (t6 - e3 + _t) % bt - xt;
    }
    function Bt(t6) {
        return (t6 % bt + bt) % bt;
    }
    function Wt(t6, e3, i3) {
        const n3 = Bt(t6), o2 = Bt(e3), s2 = Bt(i3), a1 = Bt(o2 - n3), r1 = Bt(s2 - n3), l1 = Bt(n3 - o2), c1 = Bt(n3 - s2);
        return n3 === o2 || n3 === s2 || a1 > r1 && l1 < c1;
    }
    function Ht(t6, e3, i3) {
        return Math.max(e3, Math.min(i3, t6));
    }
    function Nt(t6) {
        return Ht(t6, -32768, 32767);
    }
    function jt(t6) {
        return !t6 || $(t6.size) || $(t6.family) ? null : (t6.style ? t6.style + " " : "") + (t6.weight ? t6.weight + " " : "") + t6.size + "px " + t6.family;
    }
    function $t(t6, e3, i3, n3, o2) {
        let s2 = e3[o2];
        return s2 || (s2 = e3[o2] = t6.measureText(o2).width, i3.push(o2)), s2 > n3 && (n3 = s2), n3;
    }
    function Yt(t6, e3, i3, n3) {
        let o2 = (n3 = n3 || {
        }).data = n3.data || {
        }, s2 = n3.garbageCollect = n3.garbageCollect || [];
        n3.font !== e3 && (o2 = n3.data = {
        }, s2 = n3.garbageCollect = [], n3.font = e3), t6.save(), t6.font = e3;
        let a1 = 0;
        const r1 = i3.length;
        let l1, c1, h1, d1, u1;
        for(l1 = 0; l1 < r1; l1++)if (d1 = i3[l1], null != d1 && !0 !== Y(d1)) a1 = $t(t6, o2, s2, a1, d1);
        else if (Y(d1)) for(c1 = 0, h1 = d1.length; c1 < h1; c1++)u1 = d1[c1], null == u1 || Y(u1) || (a1 = $t(t6, o2, s2, a1, u1));
        t6.restore();
        const f1 = s2.length / 2;
        if (f1 > i3.length) {
            for(l1 = 0; l1 < f1; l1++)delete o2[s2[l1]];
            s2.splice(0, f1);
        }
        return a1;
    }
    function Ut(t6, e3, i3) {
        const n3 = t6.currentDevicePixelRatio, o2 = 0 !== i3 ? Math.max(i3 / 2, 0.5) : 0;
        return Math.round((e3 - o2) * n3) / n3 + o2;
    }
    function Xt(t6, e3) {
        (e3 = e3 || t6.getContext("2d")).save(), e3.resetTransform(), e3.clearRect(0, 0, t6.width, t6.height), e3.restore();
    }
    function qt(t6, e3, i3, n3) {
        let o2, s2, a1, r1, l1;
        const c1 = e3.pointStyle, h1 = e3.rotation, d1 = e3.radius;
        let u1 = (h1 || 0) * vt;
        if (c1 && "object" == typeof c1 && (o2 = c1.toString(), "[object HTMLImageElement]" === o2 || "[object HTMLCanvasElement]" === o2)) return t6.save(), t6.translate(i3, n3), t6.rotate(u1), t6.drawImage(c1, -c1.width / 2, -c1.height / 2, c1.width, c1.height), void t6.restore();
        if (!(isNaN(d1) || d1 <= 0)) {
            switch(t6.beginPath(), c1){
                default:
                    t6.arc(i3, n3, d1, 0, bt), t6.closePath();
                    break;
                case "triangle":
                    t6.moveTo(i3 + Math.sin(u1) * d1, n3 - Math.cos(u1) * d1), u1 += kt, t6.lineTo(i3 + Math.sin(u1) * d1, n3 - Math.cos(u1) * d1), u1 += kt, t6.lineTo(i3 + Math.sin(u1) * d1, n3 - Math.cos(u1) * d1), t6.closePath();
                    break;
                case "rectRounded":
                    l1 = 0.516 * d1, r1 = d1 - l1, s2 = Math.cos(u1 + wt) * r1, a1 = Math.sin(u1 + wt) * r1, t6.arc(i3 - s2, n3 - a1, l1, u1 - xt, u1 - Mt), t6.arc(i3 + a1, n3 - s2, l1, u1 - Mt, u1), t6.arc(i3 + s2, n3 + a1, l1, u1, u1 + Mt), t6.arc(i3 - a1, n3 + s2, l1, u1 + Mt, u1 + xt), t6.closePath();
                    break;
                case "rect":
                    if (!h1) {
                        r1 = Math.SQRT1_2 * d1, t6.rect(i3 - r1, n3 - r1, 2 * r1, 2 * r1);
                        break;
                    }
                    u1 += wt;
                case "rectRot":
                    s2 = Math.cos(u1) * d1, a1 = Math.sin(u1) * d1, t6.moveTo(i3 - s2, n3 - a1), t6.lineTo(i3 + a1, n3 - s2), t6.lineTo(i3 + s2, n3 + a1), t6.lineTo(i3 - a1, n3 + s2), t6.closePath();
                    break;
                case "crossRot":
                    u1 += wt;
                case "cross":
                    s2 = Math.cos(u1) * d1, a1 = Math.sin(u1) * d1, t6.moveTo(i3 - s2, n3 - a1), t6.lineTo(i3 + s2, n3 + a1), t6.moveTo(i3 + a1, n3 - s2), t6.lineTo(i3 - a1, n3 + s2);
                    break;
                case "star":
                    s2 = Math.cos(u1) * d1, a1 = Math.sin(u1) * d1, t6.moveTo(i3 - s2, n3 - a1), t6.lineTo(i3 + s2, n3 + a1), t6.moveTo(i3 + a1, n3 - s2), t6.lineTo(i3 - a1, n3 + s2), u1 += wt, s2 = Math.cos(u1) * d1, a1 = Math.sin(u1) * d1, t6.moveTo(i3 - s2, n3 - a1), t6.lineTo(i3 + s2, n3 + a1), t6.moveTo(i3 + a1, n3 - s2), t6.lineTo(i3 - a1, n3 + s2);
                    break;
                case "line":
                    s2 = Math.cos(u1) * d1, a1 = Math.sin(u1) * d1, t6.moveTo(i3 - s2, n3 - a1), t6.lineTo(i3 + s2, n3 + a1);
                    break;
                case "dash":
                    t6.moveTo(i3, n3), t6.lineTo(i3 + Math.cos(u1) * d1, n3 + Math.sin(u1) * d1);
            }
            t6.fill(), e3.borderWidth > 0 && t6.stroke();
        }
    }
    function Kt(t6, e3, i3) {
        return i3 = i3 || 0.5, t6 && t6.x > e3.left - i3 && t6.x < e3.right + i3 && t6.y > e3.top - i3 && t6.y < e3.bottom + i3;
    }
    function Gt(t6, e3) {
        t6.save(), t6.beginPath(), t6.rect(e3.left, e3.top, e3.right - e3.left, e3.bottom - e3.top), t6.clip();
    }
    function Zt(t6) {
        t6.restore();
    }
    function Qt(t6, e3, i3, n3, o2) {
        if (!e3) return t6.lineTo(i3.x, i3.y);
        if ("middle" === o2) {
            const n4 = (e3.x + i3.x) / 2;
            t6.lineTo(n4, e3.y), t6.lineTo(n4, i3.y);
        } else "after" === o2 != !!n3 ? t6.lineTo(e3.x, i3.y) : t6.lineTo(i3.x, e3.y);
        t6.lineTo(i3.x, i3.y);
    }
    function Jt(t6, e3, i3, n3) {
        if (!e3) return t6.lineTo(i3.x, i3.y);
        t6.bezierCurveTo(n3 ? e3.cp1x : e3.cp2x, n3 ? e3.cp1y : e3.cp2y, n3 ? i3.cp2x : i3.cp1x, n3 ? i3.cp2y : i3.cp1y, i3.x, i3.y);
    }
    function te(t6, e3, i3, n3, o2, s2 = {
    }) {
        const a1 = Y(e3) ? e3 : [
            e3
        ], r1 = s2.strokeWidth > 0 && "" !== s2.strokeColor;
        let l1, c1;
        for(t6.save(), s2.translation && t6.translate(s2.translation[0], s2.translation[1]), $(s2.rotation) || t6.rotate(s2.rotation), t6.font = o2.string, s2.color && (t6.fillStyle = s2.color), s2.textAlign && (t6.textAlign = s2.textAlign), s2.textBaseline && (t6.textBaseline = s2.textBaseline), l1 = 0; l1 < a1.length; ++l1){
            if (c1 = a1[l1], r1 && (s2.strokeColor && (t6.strokeStyle = s2.strokeColor), $(s2.strokeWidth) || (t6.lineWidth = s2.strokeWidth), t6.strokeText(c1, i3, n3, s2.maxWidth)), t6.fillText(c1, i3, n3, s2.maxWidth), s2.strikethrough || s2.underline) {
                const e4 = t6.measureText(c1), o3 = i3 - e4.actualBoundingBoxLeft, a2 = i3 + e4.actualBoundingBoxRight, r2 = n3 - e4.actualBoundingBoxAscent, l2 = n3 + e4.actualBoundingBoxDescent, h1 = s2.strikethrough ? (r2 + l2) / 2 : l2;
                t6.strokeStyle = t6.fillStyle, t6.beginPath(), t6.lineWidth = s2.decorationWidth || 2, t6.moveTo(o3, h1), t6.lineTo(a2, h1), t6.stroke();
            }
            n3 += o2.lineHeight;
        }
        t6.restore();
    }
    function ee(t6, e3, i3) {
        i3 = i3 || ((i4)=>t6[i4] < e3
        );
        let n3, o2 = t6.length - 1, s2 = 0;
        for(; o2 - s2 > 1;)n3 = s2 + o2 >> 1, i3(n3) ? s2 = n3 : o2 = n3;
        return {
            lo: s2,
            hi: o2
        };
    }
    const ie = (t6, e3, i3)=>ee(t6, i3, (n3)=>t6[n3][e3] < i3
        )
    , ne = (t6, e3, i3)=>ee(t6, i3, (n3)=>t6[n3][e3] >= i3
        )
    ;
    function oe(t6, e3, i3) {
        let n3 = 0, o2 = t6.length;
        for(; n3 < o2 && t6[n3] < e3;)n3++;
        for(; o2 > n3 && t6[o2 - 1] > i3;)o2--;
        return n3 > 0 || o2 < t6.length ? t6.slice(n3, o2) : t6;
    }
    const se = [
        "push",
        "pop",
        "shift",
        "splice",
        "unshift"
    ];
    function ae(t6, e3) {
        t6._chartjs ? t6._chartjs.listeners.push(e3) : (Object.defineProperty(t6, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [
                    e3
                ]
            }
        }), se.forEach((e4)=>{
            const i3 = "_onData" + ct(e4), n3 = t6[e4];
            Object.defineProperty(t6, e4, {
                configurable: !0,
                enumerable: !1,
                value (...e) {
                    const o2 = n3.apply(this, e);
                    return t6._chartjs.listeners.forEach((t7)=>{
                        "function" == typeof t7[i3] && t7[i3](...e);
                    }), o2;
                }
            });
        }));
    }
    function re(t6, e3) {
        const i3 = t6._chartjs;
        if (!i3) return;
        const n3 = i3.listeners, o2 = n3.indexOf(e3);
        -1 !== o2 && n3.splice(o2, 1), n3.length > 0 || (se.forEach((e4)=>{
            delete t6[e4];
        }), delete t6._chartjs);
    }
    function le(t6) {
        const e3 = new Set;
        let i3, n3;
        for(i3 = 0, n3 = t6.length; i3 < n3; ++i3)e3.add(t6[i3]);
        if (e3.size === n3) return t6;
        const o2 = [];
        return e3.forEach((t7)=>{
            o2.push(t7);
        }), o2;
    }
    function ce(t6) {
        let e3 = t6.parentNode;
        return e3 && "[object ShadowRoot]" === e3.toString() && (e3 = e3.host), e3;
    }
    function he(t6, e3, i3) {
        let n3;
        return "string" == typeof t6 ? (n3 = parseInt(t6, 10), -1 !== t6.indexOf("%") && (n3 = n3 / 100 * e3.parentNode[i3])) : n3 = t6, n3;
    }
    const de = (t6)=>window.getComputedStyle(t6, null)
    ;
    function ue(t6, e3) {
        return de(t6).getPropertyValue(e3);
    }
    const fe = [
        "top",
        "right",
        "bottom",
        "left"
    ];
    function ge(t6, e3, i3) {
        const n3 = {
        };
        i3 = i3 ? "-" + i3 : "";
        for(let o2 = 0; o2 < 4; o2++){
            const s2 = fe[o2];
            n3[s2] = parseFloat(t6[e3 + "-" + s2 + i3]) || 0;
        }
        return n3.width = n3.left + n3.right, n3.height = n3.top + n3.bottom, n3;
    }
    function pe(t6, e3) {
        const { canvas: i3 , currentDevicePixelRatio: n3  } = e3, o2 = de(i3), s2 = "border-box" === o2.boxSizing, a1 = ge(o2, "padding"), r1 = ge(o2, "border", "width"), { x: l1 , y: c1 , box: h1  } = function(t7, e4) {
            const i4 = t7.native || t7, n4 = i4.touches, o3 = n4 && n4.length ? n4[0] : i4, { offsetX: s3 , offsetY: a2  } = o3;
            let r2, l2, c2 = !1;
            if (((t8, e5, i5)=>(t8 > 0 || e5 > 0) && (!i5 || !i5.shadowRoot)
            )(s3, a2, i4.target)) r2 = s3, l2 = a2;
            else {
                const t8 = e4.getBoundingClientRect();
                r2 = o3.clientX - t8.left, l2 = o3.clientY - t8.top, c2 = !0;
            }
            return {
                x: r2,
                y: l2,
                box: c2
            };
        }(t6, i3), d1 = a1.left + (h1 && r1.left), u1 = a1.top + (h1 && r1.top);
        let { width: f1 , height: g1  } = e3;
        return s2 && (f1 -= a1.width + r1.width, g1 -= a1.height + r1.height), {
            x: Math.round((l1 - d1) / f1 * i3.width / n3),
            y: Math.round((c1 - u1) / g1 * i3.height / n3)
        };
    }
    const me = (t6)=>Math.round(10 * t6) / 10
    ;
    function xe(t6, e3, i3, n3) {
        const o2 = de(t6), s2 = ge(o2, "margin"), a1 = he(o2.maxWidth, t6, "clientWidth") || yt, r1 = he(o2.maxHeight, t6, "clientHeight") || yt, l1 = function(t7, e4, i4) {
            let n4, o3;
            if ((void 0) === e4 || (void 0) === i4) {
                const s3 = ce(t7);
                if (s3) {
                    const t8 = s3.getBoundingClientRect(), a2 = de(s3), r2 = ge(a2, "border", "width"), l2 = ge(a2, "padding");
                    e4 = t8.width - l2.width - r2.width, i4 = t8.height - l2.height - r2.height, n4 = he(a2.maxWidth, s3, "clientWidth"), o3 = he(a2.maxHeight, s3, "clientHeight");
                } else e4 = t7.clientWidth, i4 = t7.clientHeight;
            }
            return {
                width: e4,
                height: i4,
                maxWidth: n4 || yt,
                maxHeight: o3 || yt
            };
        }(t6, e3, i3);
        let { width: c1 , height: h1  } = l1;
        if ("content-box" === o2.boxSizing) {
            const t7 = ge(o2, "border", "width"), e4 = ge(o2, "padding");
            c1 -= e4.width + t7.width, h1 -= e4.height + t7.height;
        }
        return c1 = Math.max(0, c1 - s2.width), h1 = Math.max(0, n3 ? Math.floor(c1 / n3) : h1 - s2.height), c1 = me(Math.min(c1, a1, l1.maxWidth)), h1 = me(Math.min(h1, r1, l1.maxHeight)), c1 && !h1 && (h1 = me(c1 / 2)), {
            width: c1,
            height: h1
        };
    }
    function be(t6, e3, i3) {
        const n3 = t6.currentDevicePixelRatio = e3 || 1, { canvas: o2 , width: s2 , height: a1  } = t6;
        o2.height = a1 * n3, o2.width = s2 * n3, t6.ctx.setTransform(n3, 0, 0, n3, 0, 0), o2.style && (i3 || !o2.style.height && !o2.style.width) && (o2.style.height = a1 + "px", o2.style.width = s2 + "px");
    }
    const _e = function() {
        let t6 = !1;
        try {
            const e3 = {
                get passive () {
                    return t6 = !0, !1;
                }
            };
            window.addEventListener("test", null, e3), window.removeEventListener("test", null, e3);
        } catch (t7) {
        }
        return t6;
    }();
    function ye(t6, e3) {
        const i3 = ue(t6, e3), n3 = i3 && i3.match(/^(\d+)(\.\d+)?px$/);
        return n3 ? +n3[1] : void 0;
    }
    function ve(t6, e3) {
        return "native" in t6 ? {
            x: t6.x,
            y: t6.y
        } : pe(t6, e3);
    }
    function Me(t6, e3, i3, n3) {
        const { controller: o2 , data: s2 , _sorted: a1  } = t6, r1 = o2._cachedMeta.iScale;
        if (r1 && e3 === r1.axis && a1 && s2.length) {
            const t7 = r1._reversePixels ? ne : ie;
            if (!n3) return t7(s2, e3, i3);
            if (o2._sharedOptions) {
                const n4 = s2[0], o3 = "function" == typeof n4.getRange && n4.getRange(e3);
                if (o3) {
                    const n5 = t7(s2, e3, i3 - o3), a2 = t7(s2, e3, i3 + o3);
                    return {
                        lo: n5.lo,
                        hi: a2.hi
                    };
                }
            }
        }
        return {
            lo: 0,
            hi: s2.length - 1
        };
    }
    function we(t6, e3, i3, n3, o2) {
        const s2 = t6.getSortedVisibleDatasetMetas(), a1 = i3[e3];
        for(let t7 = 0, i4 = s2.length; t7 < i4; ++t7){
            const { index: i4 , data: r1  } = s2[t7], { lo: l1 , hi: c1  } = Me(s2[t7], e3, a1, o2);
            for(let t8 = l1; t8 <= c1; ++t8){
                const e4 = r1[t8];
                e4.skip || n3(e4, i4, t8);
            }
        }
    }
    function ke(t6, e3, i3, n3) {
        const o2 = [];
        if (!Kt(e3, t6.chartArea, t6._minPadding)) return o2;
        return we(t6, i3, e3, function(t7, i4, s2) {
            t7.inRange(e3.x, e3.y, n3) && o2.push({
                element: t7,
                datasetIndex: i4,
                index: s2
            });
        }, !0), o2;
    }
    function Se(t6, e3, i3, n3, o2) {
        const s2 = function(t7) {
            const e4 = -1 !== t7.indexOf("x"), i4 = -1 !== t7.indexOf("y");
            return function(t8, n4) {
                const o3 = e4 ? Math.abs(t8.x - n4.x) : 0, s3 = i4 ? Math.abs(t8.y - n4.y) : 0;
                return Math.sqrt(Math.pow(o3, 2) + Math.pow(s3, 2));
            };
        }(i3);
        let a1 = Number.POSITIVE_INFINITY, r1 = [];
        if (!Kt(e3, t6.chartArea, t6._minPadding)) return r1;
        return we(t6, i3, e3, function(t7, i4, l1) {
            if (n3 && !t7.inRange(e3.x, e3.y, o2)) return;
            const c1 = t7.getCenterPoint(o2), h1 = s2(e3, c1);
            h1 < a1 ? (r1 = [
                {
                    element: t7,
                    datasetIndex: i4,
                    index: l1
                }
            ], a1 = h1) : h1 === a1 && r1.push({
                element: t7,
                datasetIndex: i4,
                index: l1
            });
        }), r1;
    }
    function Pe(t6, e3, i3, n3) {
        const o2 = ve(e3, t6), s2 = [], a1 = i3.axis, r1 = "x" === a1 ? "inXRange" : "inYRange";
        let l1 = !1;
        return (function(t7, e4) {
            const i4 = t7.getSortedVisibleDatasetMetas();
            let n4, o3, s3;
            for(let t8 = 0, a2 = i4.length; t8 < a2; ++t8){
                ({ index: n4 , data: o3  } = i4[t8]);
                for(let t9 = 0, i5 = o3.length; t9 < i5; ++t9)s3 = o3[t9], s3.skip || e4(s3, n4, t9);
            }
        })(t6, (t7, e4, i4)=>{
            t7[r1](o2[a1], n3) && s2.push({
                element: t7,
                datasetIndex: e4,
                index: i4
            }), t7.inRange(o2.x, o2.y, n3) && (l1 = !0);
        }), i3.intersect && !l1 ? [] : s2;
    }
    var De = {
        modes: {
            index (t, e, i, n) {
                const o2 = ve(e, t), s2 = i.axis || "x", a1 = i.intersect ? ke(t, o2, s2, n) : Se(t, o2, s2, !1, n), r1 = [];
                return a1.length ? (t.getSortedVisibleDatasetMetas().forEach((t6)=>{
                    const e3 = a1[0].index, i3 = t6.data[e3];
                    i3 && !i3.skip && r1.push({
                        element: i3,
                        datasetIndex: t6.index,
                        index: e3
                    });
                }), r1) : [];
            },
            dataset (t, e, i, n) {
                const o2 = ve(e, t), s2 = i.axis || "xy";
                let a1 = i.intersect ? ke(t, o2, s2, n) : Se(t, o2, s2, !1, n);
                if (a1.length > 0) {
                    const e3 = a1[0].datasetIndex, i3 = t.getDatasetMeta(e3).data;
                    a1 = [];
                    for(let t6 = 0; t6 < i3.length; ++t6)a1.push({
                        element: i3[t6],
                        datasetIndex: e3,
                        index: t6
                    });
                }
                return a1;
            },
            point: (t6, e3, i3, n3)=>ke(t6, ve(e3, t6), i3.axis || "xy", n3)
            ,
            nearest: (t6, e3, i3, n3)=>Se(t6, ve(e3, t6), i3.axis || "xy", i3.intersect, n3)
            ,
            x: (t6, e3, i3, n3)=>(i3.axis = "x", Pe(t6, e3, i3, n3))
            ,
            y: (t6, e3, i3, n3)=>(i3.axis = "y", Pe(t6, e3, i3, n3))
        }
    };
    const Ce = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
    function Ae(t6, e3) {
        const i3 = ("" + t6).match(Ce);
        if (!i3 || "normal" === i3[1]) return 1.2 * e3;
        switch(t6 = +i3[2], i3[3]){
            case "px":
                return t6;
            case "%":
                t6 /= 100;
        }
        return e3 * t6;
    }
    function Oe(t6, e3) {
        const i3 = {
        }, n3 = U(e3), o2 = n3 ? Object.keys(e3) : e3, s2 = U(t6) ? n3 ? (i4)=>K(t6[i4], t6[e3[i4]])
         : (e4)=>t6[e4]
         : ()=>t6
        ;
        for (const t7 of o2)i3[t7] = +s2(t7) || 0;
        return i3;
    }
    function Te(t6) {
        return Oe(t6, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        });
    }
    function Le(t6) {
        return Oe(t6, [
            "topLeft",
            "topRight",
            "bottomLeft",
            "bottomRight"
        ]);
    }
    function Re(t6) {
        const e3 = Te(t6);
        return e3.width = e3.left + e3.right, e3.height = e3.top + e3.bottom, e3;
    }
    function Ee(t6, e3) {
        t6 = t6 || {
        }, e3 = e3 || mt.font;
        let i3 = K(t6.size, e3.size);
        "string" == typeof i3 && (i3 = parseInt(i3, 10));
        const n3 = {
            family: K(t6.family, e3.family),
            lineHeight: Ae(K(t6.lineHeight, e3.lineHeight), i3),
            size: i3,
            style: K(t6.style, e3.style),
            weight: K(t6.weight, e3.weight),
            string: ""
        };
        return n3.string = jt(n3), n3;
    }
    function Ie(t6, e3, i3, n3) {
        let o2, s2, a1, r1 = !0;
        for(o2 = 0, s2 = t6.length; o2 < s2; ++o2)if (a1 = t6[o2], (void 0) !== a1 && ((void 0) !== e3 && "function" == typeof a1 && (a1 = a1(e3), r1 = !1), (void 0) !== i3 && Y(a1) && (a1 = a1[i3 % a1.length], r1 = !1), (void 0) !== a1)) return n3 && !r1 && (n3.cacheable = !1), a1;
    }
    function Fe(t6, e3) {
        const { min: i3 , max: n3  } = t6;
        return {
            min: i3 - Math.abs(Z(e3, i3)),
            max: n3 + Z(e3, n3)
        };
    }
    const ze = [
        "left",
        "top",
        "right",
        "bottom"
    ];
    function Ve(t6, e3) {
        return t6.filter((t7)=>t7.pos === e3
        );
    }
    function Be(t6, e3) {
        return t6.filter((t7)=>-1 === ze.indexOf(t7.pos) && t7.box.axis === e3
        );
    }
    function We(t6, e3) {
        return t6.sort((t7, i3)=>{
            const n3 = e3 ? i3 : t7, o2 = e3 ? t7 : i3;
            return n3.weight === o2.weight ? n3.index - o2.index : n3.weight - o2.weight;
        });
    }
    function He(t6, e3, i3, n3) {
        return Math.max(t6[i3], e3[i3]) + Math.max(t6[n3], e3[n3]);
    }
    function Ne(t6, e3) {
        t6.top = Math.max(t6.top, e3.top), t6.left = Math.max(t6.left, e3.left), t6.bottom = Math.max(t6.bottom, e3.bottom), t6.right = Math.max(t6.right, e3.right);
    }
    function je(t6, e3, i3) {
        const n3 = i3.box, o2 = t6.maxPadding;
        if (U(i3.pos)) return {
            same: !1,
            other: !1
        };
        i3.size && (t6[i3.pos] -= i3.size), i3.size = i3.horizontal ? n3.height : n3.width, t6[i3.pos] += i3.size, n3.getPadding && Ne(o2, n3.getPadding());
        const s2 = Math.max(0, e3.outerWidth - He(o2, t6, "left", "right")), a1 = Math.max(0, e3.outerHeight - He(o2, t6, "top", "bottom")), r1 = s2 !== t6.w, l1 = a1 !== t6.h;
        return t6.w = s2, t6.h = a1, i3.horizontal ? {
            same: r1,
            other: l1
        } : {
            same: l1,
            other: r1
        };
    }
    function $e(t6, e3) {
        const i3 = e3.maxPadding;
        function n3(t7) {
            const n4 = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t7.forEach((t8)=>{
                n4[t8] = Math.max(e3[t8], i3[t8]);
            }), n4;
        }
        return n3(t6 ? [
            "left",
            "right"
        ] : [
            "top",
            "bottom"
        ]);
    }
    function Ye(t6, e3, i3) {
        const n3 = [];
        let o2, s2, a1, r1, l1, c1;
        for(o2 = 0, s2 = t6.length, l1 = 0; o2 < s2; ++o2){
            a1 = t6[o2], r1 = a1.box, r1.update(a1.width || e3.w, a1.height || e3.h, $e(a1.horizontal, e3));
            const { same: s3 , other: h1  } = je(e3, i3, a1);
            l1 |= s3 && n3.length, c1 = c1 || h1, r1.fullSize || n3.push(a1);
        }
        return l1 && Ye(n3, e3, i3) || c1;
    }
    function Ue(t6, e3, i3) {
        const n3 = i3.padding;
        let o2, s2, a1, r1, l1 = e3.x, c1 = e3.y;
        for(o2 = 0, s2 = t6.length; o2 < s2; ++o2)a1 = t6[o2], r1 = a1.box, a1.horizontal ? (r1.left = r1.fullSize ? n3.left : e3.left, r1.right = r1.fullSize ? i3.outerWidth - n3.right : e3.left + e3.w, r1.top = c1, r1.bottom = c1 + r1.height, r1.width = r1.right - r1.left, c1 = r1.bottom) : (r1.left = l1, r1.right = l1 + r1.width, r1.top = r1.fullSize ? n3.top : e3.top, r1.bottom = r1.fullSize ? i3.outerHeight - n3.right : e3.top + e3.h, r1.height = r1.bottom - r1.top, l1 = r1.right);
        e3.x = l1, e3.y = c1;
    }
    mt.set("layout", {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
    var Xe = {
        addBox (t, e) {
            t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                return [
                    {
                        z: 0,
                        draw (t) {
                            e.draw(t);
                        }
                    }
                ];
            }, t.boxes.push(e);
        },
        removeBox (t, e) {
            const i3 = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== i3 && t.boxes.splice(i3, 1);
        },
        configure (t, e, i) {
            e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
        },
        update (t, e, i, n) {
            if (!t) return;
            const o2 = Re(t.options.layout.padding), s2 = e - o2.width, a1 = i - o2.height, r1 = function(t6) {
                const e3 = function(t7) {
                    const e4 = [];
                    let i3, n3, o3;
                    for(i3 = 0, n3 = (t7 || []).length; i3 < n3; ++i3)o3 = t7[i3], e4.push({
                        index: i3,
                        box: o3,
                        pos: o3.position,
                        horizontal: o3.isHorizontal(),
                        weight: o3.weight
                    });
                    return e4;
                }(t6), i3 = We(e3.filter((t7)=>t7.box.fullSize
                ), !0), n3 = We(Ve(e3, "left"), !0), o3 = We(Ve(e3, "right")), s3 = We(Ve(e3, "top"), !0), a2 = We(Ve(e3, "bottom")), r2 = Be(e3, "x"), l1 = Be(e3, "y");
                return {
                    fullSize: i3,
                    leftAndTop: n3.concat(s3),
                    rightAndBottom: o3.concat(l1).concat(a2).concat(r2),
                    chartArea: Ve(e3, "chartArea"),
                    vertical: n3.concat(o3).concat(l1),
                    horizontal: s3.concat(a2).concat(r2)
                };
            }(t.boxes), l1 = r1.vertical, c1 = r1.horizontal;
            J(t.boxes, (t6)=>{
                "function" == typeof t6.beforeLayout && t6.beforeLayout();
            });
            const h1 = l1.reduce((t6, e3)=>e3.box.options && !1 === e3.box.options.display ? t6 : t6 + 1
            , 0) || 1, d1 = Object.freeze({
                outerWidth: e,
                outerHeight: i,
                padding: o2,
                availableWidth: s2,
                availableHeight: a1,
                vBoxMaxWidth: s2 / 2 / h1,
                hBoxMaxHeight: a1 / 2
            }), u1 = Object.assign({
            }, o2);
            Ne(u1, Re(n));
            const f1 = Object.assign({
                maxPadding: u1,
                w: s2,
                h: a1,
                x: o2.left,
                y: o2.top
            }, o2);
            !function(t6, e3) {
                let i3, n3, o3;
                for(i3 = 0, n3 = t6.length; i3 < n3; ++i3)o3 = t6[i3], o3.horizontal ? (o3.width = o3.box.fullSize && e3.availableWidth, o3.height = e3.hBoxMaxHeight) : (o3.width = e3.vBoxMaxWidth, o3.height = o3.box.fullSize && e3.availableHeight);
            }(l1.concat(c1), d1), Ye(r1.fullSize, f1, d1), Ye(l1, f1, d1), Ye(c1, f1, d1) && Ye(l1, f1, d1), (function(t6) {
                const e3 = t6.maxPadding;
                function i3(i4) {
                    const n3 = Math.max(e3[i4] - t6[i4], 0);
                    return t6[i4] += n3, n3;
                }
                t6.y += i3("top"), t6.x += i3("left"), i3("right"), i3("bottom");
            })(f1), Ue(r1.leftAndTop, f1, d1), f1.x += f1.w, f1.y += f1.h, Ue(r1.rightAndBottom, f1, d1), t.chartArea = {
                left: f1.left,
                top: f1.top,
                right: f1.left + f1.w,
                bottom: f1.top + f1.h,
                height: f1.h,
                width: f1.w
            }, J(r1.chartArea, (e3)=>{
                const i3 = e3.box;
                Object.assign(i3, t.chartArea), i3.update(f1.w, f1.h);
            });
        }
    };
    class qe {
        acquireContext(t, e) {
        }
        releaseContext(t) {
            return !1;
        }
        addEventListener(t, e, i) {
        }
        removeEventListener(t, e, i) {
        }
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(t, e, i, n) {
            return e = Math.max(0, e || t.width), i = i || t.height, {
                width: e,
                height: Math.max(0, n ? Math.floor(e / n) : i)
            };
        }
        isAttached(t) {
            return !0;
        }
    }
    class Ke extends qe {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null;
        }
    }
    const Ge = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    }, Ze = (t6)=>null === t6 || "" === t6
    ;
    const Qe = !!_e && {
        passive: !0
    };
    function Je(t6, e3, i3) {
        t6.canvas.removeEventListener(e3, i3, Qe);
    }
    function ti(t6, e3, i3) {
        const n3 = t6.canvas, o2 = n3 && ce(n3) || n3, s2 = new MutationObserver((t7)=>{
            const e4 = ce(o2);
            t7.forEach((t8)=>{
                for(let n4 = 0; n4 < t8.addedNodes.length; n4++){
                    const s3 = t8.addedNodes[n4];
                    s3 !== o2 && s3 !== e4 || i3(t8.target);
                }
            });
        });
        return s2.observe(document, {
            childList: !0,
            subtree: !0
        }), s2;
    }
    function ei(t6, e3, i3) {
        const n3 = t6.canvas, o2 = n3 && ce(n3);
        if (!o2) return;
        const s2 = new MutationObserver((t7)=>{
            t7.forEach((t8)=>{
                for(let e4 = 0; e4 < t8.removedNodes.length; e4++)if (t8.removedNodes[e4] === n3) {
                    i3();
                    break;
                }
            });
        });
        return s2.observe(o2, {
            childList: !0
        }), s2;
    }
    const ii = new Map;
    let ni = 0;
    function oi() {
        const t6 = window.devicePixelRatio;
        t6 !== ni && (ni = t6, ii.forEach((e3, i3)=>{
            i3.currentDevicePixelRatio !== t6 && e3();
        }));
    }
    function si(t6, i3, n3) {
        const o2 = t6.canvas, s2 = o2 && ce(o2);
        if (!s2) return;
        const a1 = e1((t7, e3)=>{
            const i4 = s2.clientWidth;
            n3(t7, e3), i4 < s2.clientWidth && n3();
        }, window), r1 = new ResizeObserver((t7)=>{
            const e3 = t7[0], i4 = e3.contentRect.width, n4 = e3.contentRect.height;
            0 === i4 && 0 === n4 || a1(i4, n4);
        });
        return r1.observe(s2), (function(t7, e3) {
            ii.size || window.addEventListener("resize", oi), ii.set(t7, e3);
        })(t6, a1), r1;
    }
    function ai(t6, e3, i3) {
        i3 && i3.disconnect(), "resize" === e3 && (function(t7) {
            ii.delete(t7), ii.size || window.removeEventListener("resize", oi);
        })(t6);
    }
    function ri(t6, i3, n3) {
        const o2 = t6.canvas, s2 = e1((e3)=>{
            null !== t6.ctx && n3(function(t7, e4) {
                const i4 = Ge[t7.type] || t7.type, { x: n4 , y: o3  } = pe(t7, e4);
                return {
                    type: i4,
                    chart: e4,
                    native: t7,
                    x: (void 0) !== n4 ? n4 : null,
                    y: (void 0) !== o3 ? o3 : null
                };
            }(e3, t6));
        }, t6, (t7)=>{
            const e3 = t7[0];
            return [
                e3,
                e3.offsetX,
                e3.offsetY
            ];
        });
        return (function(t7, e3, i4) {
            t7.addEventListener(e3, i4, Qe);
        })(o2, i3, s2), s2;
    }
    class li extends qe {
        acquireContext(t, e) {
            const i3 = t && t.getContext && t.getContext("2d");
            return i3 && i3.canvas === t ? ((function(t6, e3) {
                const i4 = t6.style, n3 = t6.getAttribute("height"), o2 = t6.getAttribute("width");
                if (t6.$chartjs = {
                    initial: {
                        height: n3,
                        width: o2,
                        style: {
                            display: i4.display,
                            height: i4.height,
                            width: i4.width
                        }
                    }
                }, i4.display = i4.display || "block", i4.boxSizing = i4.boxSizing || "border-box", Ze(o2)) {
                    const e4 = ye(t6, "width");
                    (void 0) !== e4 && (t6.width = e4);
                }
                if (Ze(n3)) {
                    if ("" === t6.style.height) t6.height = t6.width / (e3 || 2);
                    else {
                        const e4 = ye(t6, "height");
                        (void 0) !== e4 && (t6.height = e4);
                    }
                }
            })(t, e), i3) : null;
        }
        releaseContext(t) {
            const e3 = t.canvas;
            if (!e3.$chartjs) return !1;
            const i3 = e3.$chartjs.initial;
            [
                "height",
                "width"
            ].forEach((t6)=>{
                const n3 = i3[t6];
                $(n3) ? e3.removeAttribute(t6) : e3.setAttribute(t6, n3);
            });
            const n3 = i3.style || {
            };
            return Object.keys(n3).forEach((t6)=>{
                e3.style[t6] = n3[t6];
            }), e3.width = e3.width, delete e3.$chartjs, !0;
        }
        addEventListener(t, e, i) {
            this.removeEventListener(t, e);
            const n3 = t.$proxies || (t.$proxies = {
            }), o2 = {
                attach: ti,
                detach: ei,
                resize: si
            }[e] || ri;
            n3[e] = o2(t, e, i);
        }
        removeEventListener(t, e) {
            const i3 = t.$proxies || (t.$proxies = {
            }), n3 = i3[e];
            if (!n3) return;
            (({
                attach: ai,
                detach: ai,
                resize: ai
            })[e] || Je)(t, e, n3), i3[e] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(t, e, i, n) {
            return xe(t, e, i, n);
        }
        isAttached(t) {
            const e3 = ce(t);
            return !(!e3 || !ce(e3));
        }
    }
    var ci = Object.freeze({
        __proto__: null,
        BasePlatform: qe,
        BasicPlatform: Ke,
        DomPlatform: li
    });
    const hi = (t6)=>0 === t6 || 1 === t6
    , di = (t6, e3, i3)=>-Math.pow(2, 10 * (t6 -= 1)) * Math.sin((t6 - e3) * bt / i3)
    , ui = (t6, e3, i3)=>Math.pow(2, -10 * t6) * Math.sin((t6 - e3) * bt / i3) + 1
    , fi = {
        linear: (t6)=>t6
        ,
        easeInQuad: (t6)=>t6 * t6
        ,
        easeOutQuad: (t6)=>-t6 * (t6 - 2)
        ,
        easeInOutQuad: (t6)=>(t6 /= 0.5) < 1 ? 0.5 * t6 * t6 : -0.5 * ((--t6) * (t6 - 2) - 1)
        ,
        easeInCubic: (t6)=>t6 * t6 * t6
        ,
        easeOutCubic: (t6)=>(t6 -= 1) * t6 * t6 + 1
        ,
        easeInOutCubic: (t6)=>(t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 : 0.5 * ((t6 -= 2) * t6 * t6 + 2)
        ,
        easeInQuart: (t6)=>t6 * t6 * t6 * t6
        ,
        easeOutQuart: (t6)=>-((t6 -= 1) * t6 * t6 * t6 - 1)
        ,
        easeInOutQuart: (t6)=>(t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 * t6 : -0.5 * ((t6 -= 2) * t6 * t6 * t6 - 2)
        ,
        easeInQuint: (t6)=>t6 * t6 * t6 * t6 * t6
        ,
        easeOutQuint: (t6)=>(t6 -= 1) * t6 * t6 * t6 * t6 + 1
        ,
        easeInOutQuint: (t6)=>(t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 * t6 * t6 : 0.5 * ((t6 -= 2) * t6 * t6 * t6 * t6 + 2)
        ,
        easeInSine: (t6)=>1 - Math.cos(t6 * Mt)
        ,
        easeOutSine: (t6)=>Math.sin(t6 * Mt)
        ,
        easeInOutSine: (t6)=>-0.5 * (Math.cos(xt * t6) - 1)
        ,
        easeInExpo: (t6)=>0 === t6 ? 0 : Math.pow(2, 10 * (t6 - 1))
        ,
        easeOutExpo: (t6)=>1 === t6 ? 1 : 1 - Math.pow(2, -10 * t6)
        ,
        easeInOutExpo: (t6)=>hi(t6) ? t6 : t6 < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * t6 - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * t6 - 1)))
        ,
        easeInCirc: (t6)=>t6 >= 1 ? t6 : -(Math.sqrt(1 - t6 * t6) - 1)
        ,
        easeOutCirc: (t6)=>Math.sqrt(1 - (t6 -= 1) * t6)
        ,
        easeInOutCirc: (t6)=>(t6 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t6 * t6) - 1) : 0.5 * (Math.sqrt(1 - (t6 -= 2) * t6) + 1)
        ,
        easeInElastic: (t6)=>hi(t6) ? t6 : di(t6, 0.075, 0.3)
        ,
        easeOutElastic: (t6)=>hi(t6) ? t6 : ui(t6, 0.075, 0.3)
        ,
        easeInOutElastic (t) {
            const e3 = 0.1125;
            return hi(t) ? t : t < 0.5 ? 0.5 * di(2 * t, e3, 0.45) : 0.5 + 0.5 * ui(2 * t - 1, e3, 0.45);
        },
        easeInBack (t) {
            const e3 = 1.70158;
            return t * t * ((e3 + 1) * t - e3);
        },
        easeOutBack (t) {
            const e3 = 1.70158;
            return (t -= 1) * t * ((e3 + 1) * t + e3) + 1;
        },
        easeInOutBack (t) {
            let e3 = 1.70158;
            return (t /= 0.5) < 1 ? t * t * ((1 + (e3 *= 1.525)) * t - e3) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e3 *= 1.525)) * t + e3) + 2);
        },
        easeInBounce: (t6)=>1 - fi.easeOutBounce(1 - t6)
        ,
        easeOutBounce (t) {
            const e3 = 7.5625, i3 = 2.75;
            return t < 1 / i3 ? e3 * t * t : t < 2 / i3 ? e3 * (t -= 1.5 / i3) * t + 0.75 : t < 2.5 / i3 ? e3 * (t -= 2.25 / i3) * t + 0.9375 : e3 * (t -= 2.625 / i3) * t + 0.984375;
        },
        easeInOutBounce: (t6)=>t6 < 0.5 ? 0.5 * fi.easeInBounce(2 * t6) : 0.5 * fi.easeOutBounce(2 * t6 - 1) + 0.5
    }, gi = "transparent", pi = {
        boolean: (t6, e3, i3)=>i3 > 0.5 ? e3 : t6
        ,
        color (t, e, i) {
            const n3 = W(t || gi), o2 = n3.valid && W(e || gi);
            return o2 && o2.valid ? o2.mix(n3, i).hexString() : e;
        },
        number: (t6, e3, i3)=>t6 + (e3 - t6) * i3
    };
    class mi {
        constructor(t6, e3, i3, n3){
            const o2 = e3[i3];
            n3 = Ie([
                t6.to,
                n3,
                o2,
                t6.from
            ]);
            const s2 = Ie([
                t6.from,
                o2,
                n3
            ]);
            this._active = !0, this._fn = t6.fn || pi[t6.type || typeof s2], this._easing = fi[t6.easing] || fi.linear, this._start = Math.floor(Date.now() + (t6.delay || 0)), this._duration = this._total = Math.floor(t6.duration), this._loop = !!t6.loop, this._target = e3, this._prop = i3, this._from = s2, this._to = n3, this._promises = void 0;
        }
        active() {
            return this._active;
        }
        update(t, e, i) {
            const n4 = this;
            if (n4._active) {
                n4._notify(!1);
                const o3 = n4._target[n4._prop], s3 = i - n4._start, a1 = n4._duration - s3;
                n4._start = i, n4._duration = Math.floor(Math.max(a1, t.duration)), n4._total += s3, n4._loop = !!t.loop, n4._to = Ie([
                    t.to,
                    e,
                    o3,
                    t.from
                ]), n4._from = Ie([
                    t.from,
                    o3,
                    e
                ]);
            }
        }
        cancel() {
            const t7 = this;
            t7._active && (t7.tick(Date.now()), t7._active = !1, t7._notify(!1));
        }
        tick(t) {
            const e4 = this, i4 = t - e4._start, n4 = e4._duration, o3 = e4._prop, s3 = e4._from, a1 = e4._loop, r1 = e4._to;
            let l1;
            if (e4._active = s3 !== r1 && (a1 || i4 < n4), !e4._active) return e4._target[o3] = r1, void e4._notify(!0);
            i4 < 0 ? e4._target[o3] = s3 : (l1 = i4 / n4 % 2, l1 = a1 && l1 > 1 ? 2 - l1 : l1, l1 = e4._easing(Math.min(1, Math.max(0, l1))), e4._target[o3] = e4._fn(s3, r1, l1));
        }
        wait() {
            const t7 = this._promises || (this._promises = []);
            return new Promise((e4, i4)=>{
                t7.push({
                    res: e4,
                    rej: i4
                });
            });
        }
        _notify(t) {
            const e4 = t ? "res" : "rej", i4 = this._promises || [];
            for(let t7 = 0; t7 < i4.length; t7++)i4[t7][e4]();
        }
    }
    mt.set("animation", {
        delay: void 0,
        duration: 1000,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    });
    const xi = Object.keys(mt.animation);
    mt.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (t7)=>"onProgress" !== t7 && "onComplete" !== t7 && "fn" !== t7
    }), mt.set("animations", {
        colors: {
            type: "color",
            properties: [
                "color",
                "borderColor",
                "backgroundColor"
            ]
        },
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "borderWidth",
                "radius",
                "tension"
            ]
        }
    }), mt.describe("animations", {
        _fallback: "animation"
    }), mt.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: (t7)=>0 | t7
                }
            }
        }
    });
    class bi {
        constructor(t7, e4){
            this._chart = t7, this._properties = new Map, this.configure(e4);
        }
        configure(t) {
            if (!U(t)) return;
            const e5 = this._properties;
            Object.getOwnPropertyNames(t).forEach((i4)=>{
                const n4 = t[i4];
                if (!U(n4)) return;
                const o3 = {
                };
                for (const t8 of xi)o3[t8] = n4[t8];
                (Y(n4.properties) && n4.properties || [
                    i4
                ]).forEach((t9)=>{
                    t9 !== i4 && e5.has(t9) || e5.set(t9, o3);
                });
            });
        }
        _animateOptions(t, e) {
            const i4 = e.options, n4 = function(t8, e5) {
                if (!e5) return;
                let i5 = t8.options;
                if (!i5) return void (t8.options = e5);
                i5.$shared && (t8.options = i5 = Object.assign({
                }, i5, {
                    $shared: !1,
                    $animations: {
                    }
                }));
                return i5;
            }(t, i4);
            if (!n4) return [];
            const o3 = this._createAnimations(n4, i4);
            return i4.$shared && (function(t8, e5) {
                const i5 = [], n5 = Object.keys(e5);
                for(let e6 = 0; e6 < n5.length; e6++){
                    const o4 = t8[n5[e6]];
                    o4 && o4.active() && i5.push(o4.wait());
                }
                return Promise.all(i5);
            })(t.options.$animations, i4).then(()=>{
                t.options = i4;
            }, ()=>{
            }), o3;
        }
        _createAnimations(t, e) {
            const i4 = this._properties, n4 = [], o3 = t.$animations || (t.$animations = {
            }), s3 = Object.keys(e), a1 = Date.now();
            let r1;
            for(r1 = s3.length - 1; r1 >= 0; --r1){
                const l1 = s3[r1];
                if ("$" === l1.charAt(0)) continue;
                if ("options" === l1) {
                    n4.push(...this._animateOptions(t, e));
                    continue;
                }
                const c1 = e[l1];
                let h1 = o3[l1];
                const d1 = i4.get(l1);
                if (h1) {
                    if (d1 && h1.active()) {
                        h1.update(d1, c1, a1);
                        continue;
                    }
                    h1.cancel();
                }
                d1 && d1.duration ? (o3[l1] = h1 = new mi(d1, t, l1, c1), n4.push(h1)) : t[l1] = c1;
            }
            return n4;
        }
        update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const i4 = this._createAnimations(t, e);
            return i4.length ? (a.add(this._chart, i4), !0) : void 0;
        }
    }
    function _i(t8, e5) {
        const i4 = t8 && t8.options || {
        }, n4 = i4.reverse, o3 = (void 0) === i4.min ? e5 : 0, s3 = (void 0) === i4.max ? e5 : 0;
        return {
            start: n4 ? s3 : o3,
            end: n4 ? o3 : s3
        };
    }
    function yi(t8, e5) {
        const i4 = [], n4 = t8._getSortedDatasetMetas(e5);
        let o3, s3;
        for(o3 = 0, s3 = n4.length; o3 < s3; ++o3)i4.push(n4[o3].index);
        return i4;
    }
    function vi(t8, e5, i4, n4) {
        const o3 = t8.keys, s3 = "single" === n4.mode;
        let a1, r1, l1, c1;
        if (null !== e5) {
            for(a1 = 0, r1 = o3.length; a1 < r1; ++a1){
                if (l1 = +o3[a1], l1 === i4) {
                    if (n4.all) continue;
                    break;
                }
                c1 = t8.values[l1], X(c1) && (s3 || 0 === e5 || Pt(e5) === Pt(c1)) && (e5 += c1);
            }
            return e5;
        }
    }
    function Mi(t8, e5) {
        const i4 = t8 && t8.options.stacked;
        return i4 || (void 0) === i4 && (void 0) !== e5.stack;
    }
    function wi(t8, e5, i4) {
        const n4 = t8[e5] || (t8[e5] = {
        });
        return n4[i4] || (n4[i4] = {
        });
    }
    function ki(t8, e5) {
        const { chart: i4 , _cachedMeta: n4  } = t8, o3 = i4._stacks || (i4._stacks = {
        }), { iScale: s3 , vScale: a1 , index: r1  } = n4, l1 = s3.axis, c1 = a1.axis, h1 = function(t9, e6, i5) {
            return t9.id + "." + e6.id + "." + i5.stack + "." + i5.type;
        }(s3, a1, n4), d1 = e5.length;
        let u1;
        for(let t9 = 0; t9 < d1; ++t9){
            const i5 = e5[t9], { [l1]: n5 , [c1]: s4  } = i5;
            u1 = (i5._stacks || (i5._stacks = {
            }))[c1] = wi(o3, h1, n5), u1[r1] = s4;
        }
    }
    function Si(t8, e5) {
        const i4 = t8.scales;
        return Object.keys(i4).filter((t9)=>i4[t9].axis === e5
        ).shift();
    }
    function Pi(t8, e5) {
        e5 = e5 || t8._parsed;
        for (const i4 of e5){
            const e6 = i4._stacks;
            if (!e6 || (void 0) === e6[t8.vScale.id] || (void 0) === e6[t8.vScale.id][t8.index]) return;
            delete e6[t8.vScale.id][t8.index];
        }
    }
    const Di = (t8)=>"reset" === t8 || "none" === t8
    , Ci = (t8, e5)=>e5 ? t8 : Object.assign({
        }, t8)
    ;
    class Ai {
        constructor(t8, e5){
            this.chart = t8, this._ctx = t8.ctx, this.index = e5, this._cachedDataOpts = {
            }, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this.initialize();
        }
        initialize() {
            const t9 = this, e6 = t9._cachedMeta;
            t9.configure(), t9.linkScales(), e6._stacked = Mi(e6.vScale, e6), t9.addElements();
        }
        updateIndex(t) {
            this.index = t;
        }
        linkScales() {
            const t9 = this, e6 = t9.chart, i4 = t9._cachedMeta, n4 = t9.getDataset(), o3 = (t10, e7, i5, n5)=>"x" === t10 ? e7 : "r" === t10 ? n5 : i5
            , s3 = i4.xAxisID = K(n4.xAxisID, Si(e6, "x")), a1 = i4.yAxisID = K(n4.yAxisID, Si(e6, "y")), r1 = i4.rAxisID = K(n4.rAxisID, Si(e6, "r")), l1 = i4.indexAxis, c1 = i4.iAxisID = o3(l1, s3, a1, r1), h1 = i4.vAxisID = o3(l1, a1, s3, r1);
            i4.xScale = t9.getScaleForId(s3), i4.yScale = t9.getScaleForId(a1), i4.rScale = t9.getScaleForId(r1), i4.iScale = t9.getScaleForId(c1), i4.vScale = t9.getScaleForId(h1);
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
            return this.chart.scales[t];
        }
        _getOtherScale(t) {
            const e6 = this._cachedMeta;
            return t === e6.iScale ? e6.vScale : e6.iScale;
        }
        reset() {
            this._update("reset");
        }
        _destroy() {
            const t9 = this._cachedMeta;
            this._data && re(this._data, this), t9._stacked && Pi(t9);
        }
        _dataCheck() {
            const t9 = this, e6 = t9.getDataset(), i4 = e6.data || (e6.data = []);
            U(i4) ? t9._data = (function(t10) {
                const e7 = Object.keys(t10), i5 = new Array(e7.length);
                let n4, o3, s3;
                for(n4 = 0, o3 = e7.length; n4 < o3; ++n4)s3 = e7[n4], i5[n4] = {
                    x: s3,
                    y: t10[s3]
                };
                return i5;
            })(i4) : t9._data !== i4 && (t9._data && (re(t9._data, t9), Pi(t9._cachedMeta)), i4 && Object.isExtensible(i4) && ae(i4, t9), t9._data = i4);
        }
        addElements() {
            const t9 = this, e6 = t9._cachedMeta;
            t9._dataCheck(), t9.datasetElementType && (e6.dataset = new t9.datasetElementType);
        }
        buildOrUpdateElements(t) {
            const e6 = this, i4 = e6._cachedMeta, n4 = e6.getDataset();
            let o3 = !1;
            e6._dataCheck(), i4._stacked = Mi(i4.vScale, i4), i4.stack !== n4.stack && (o3 = !0, Pi(i4), i4.stack = n4.stack), e6._resyncElements(t), o3 && ki(e6, i4._parsed);
        }
        configure() {
            const t9 = this, e6 = t9.chart.config, i4 = e6.datasetScopeKeys(t9._type), n4 = e6.getOptionScopes(t9.getDataset(), i4, !0);
            t9.options = e6.createResolver(n4, t9.getContext()), t9._parsing = t9.options.parsing;
        }
        parse(t, e) {
            const i4 = this, { _cachedMeta: n4 , _data: o3  } = i4, { iScale: s3 , _stacked: a1  } = n4, r1 = s3.axis;
            let l1, c1, h1, d1 = 0 === t && e === o3.length || n4._sorted, u1 = t > 0 && n4._parsed[t - 1];
            if (!1 === i4._parsing) n4._parsed = o3, n4._sorted = !0;
            else {
                h1 = Y(o3[t]) ? i4.parseArrayData(n4, o3, t, e) : U(o3[t]) ? i4.parseObjectData(n4, o3, t, e) : i4.parsePrimitiveData(n4, o3, t, e);
                const s4 = ()=>null === c1[r1] || u1 && c1[r1] < u1[r1]
                ;
                for(l1 = 0; l1 < e; ++l1)n4._parsed[l1 + t] = c1 = h1[l1], d1 && (s4() && (d1 = !1), u1 = c1);
                n4._sorted = d1;
            }
            a1 && ki(i4, h1);
        }
        parsePrimitiveData(t, e, i, n) {
            const { iScale: o3 , vScale: s3  } = t, a1 = o3.axis, r1 = s3.axis, l1 = o3.getLabels(), c1 = o3 === s3, h1 = new Array(n);
            let d1, u1, f1;
            for(d1 = 0, u1 = n; d1 < u1; ++d1)f1 = d1 + i, h1[d1] = {
                [a1]: c1 || o3.parse(l1[f1], f1),
                [r1]: s3.parse(e[f1], f1)
            };
            return h1;
        }
        parseArrayData(t, e, i, n) {
            const { xScale: o3 , yScale: s3  } = t, a1 = new Array(n);
            let r1, l1, c1, h1;
            for(r1 = 0, l1 = n; r1 < l1; ++r1)c1 = r1 + i, h1 = e[c1], a1[r1] = {
                x: o3.parse(h1[0], c1),
                y: s3.parse(h1[1], c1)
            };
            return a1;
        }
        parseObjectData(t, e, i, n) {
            const { xScale: o3 , yScale: s3  } = t, { xAxisKey: a1 = "x" , yAxisKey: r1 = "y"  } = this._parsing, l1 = new Array(n);
            let c1, h1, d1, u1;
            for(c1 = 0, h1 = n; c1 < h1; ++c1)d1 = c1 + i, u1 = e[d1], l1[c1] = {
                x: o3.parse(lt(u1, a1), d1),
                y: s3.parse(lt(u1, r1), d1)
            };
            return l1;
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
            return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
            const n4 = this.chart, o3 = this._cachedMeta, s3 = e[t.axis];
            return vi({
                keys: yi(n4, !0),
                values: e._stacks[t.axis]
            }, s3, o3.index, {
                mode: i
            });
        }
        updateRangeFromParsed(t, e, i, n) {
            const o3 = i[e.axis];
            let s3 = null === o3 ? NaN : o3;
            const a1 = n && i._stacks[e.axis];
            n && a1 && (n.values = a1, t.min = Math.min(t.min, s3), t.max = Math.max(t.max, s3), s3 = vi(n, o3, this._cachedMeta.index, {
                all: !0
            })), t.min = Math.min(t.min, s3), t.max = Math.max(t.max, s3);
        }
        getMinMax(t, e) {
            const i4 = this, n4 = i4._cachedMeta, o3 = n4._parsed, s3 = n4._sorted && t === n4.iScale, a1 = o3.length, r1 = i4._getOtherScale(t), l1 = e && n4._stacked && {
                keys: yi(i4.chart, !0),
                values: null
            }, c1 = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            }, { min: h1 , max: d1  } = function(t9) {
                const { min: e6 , max: i5 , minDefined: n5 , maxDefined: o4  } = t9.getUserBounds();
                return {
                    min: n5 ? e6 : Number.NEGATIVE_INFINITY,
                    max: o4 ? i5 : Number.POSITIVE_INFINITY
                };
            }(r1);
            let u1, f1, g1, p1;
            function m1() {
                return g1 = o3[u1], f1 = g1[t.axis], p1 = g1[r1.axis], !X(f1) || h1 > p1 || d1 < p1;
            }
            for(u1 = 0; u1 < a1 && (m1() || (i4.updateRangeFromParsed(c1, t, g1, l1), !s3)); ++u1);
            if (s3) for(u1 = a1 - 1; u1 >= 0; --u1)if (!m1()) {
                i4.updateRangeFromParsed(c1, t, g1, l1);
                break;
            }
            return c1;
        }
        getAllParsedValues(t) {
            const e6 = this._cachedMeta._parsed, i4 = [];
            let n4, o3, s3;
            for(n4 = 0, o3 = e6.length; n4 < o3; ++n4)s3 = e6[n4][t.axis], X(s3) && i4.push(s3);
            return i4;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(t) {
            const e6 = this._cachedMeta, i4 = e6.iScale, n4 = e6.vScale, o3 = this.getParsed(t);
            return {
                label: i4 ? "" + i4.getLabelForValue(o3[i4.axis]) : "",
                value: n4 ? "" + n4.getLabelForValue(o3[n4.axis]) : ""
            };
        }
        _update(t) {
            const e6 = this, i4 = e6._cachedMeta;
            e6.configure(), e6._cachedDataOpts = {
            }, e6.update(t || "default"), i4._clip = (function(t9) {
                let e7, i5, n4, o3;
                return U(t9) ? (e7 = t9.top, i5 = t9.right, n4 = t9.bottom, o3 = t9.left) : e7 = i5 = n4 = o3 = t9, {
                    top: e7,
                    right: i5,
                    bottom: n4,
                    left: o3
                };
            })(K(e6.options.clip, function(t9, e7, i5) {
                if (!1 === i5) return !1;
                const n4 = _i(t9, i5), o3 = _i(e7, i5);
                return {
                    top: o3.end,
                    right: n4.end,
                    bottom: o3.start,
                    left: n4.start
                };
            }(i4.xScale, i4.yScale, e6.getMaxOverflow())));
        }
        update(t) {
        }
        draw() {
            const t9 = this, e6 = t9._ctx, i4 = t9.chart, n4 = t9._cachedMeta, o3 = n4.data || [], s3 = i4.chartArea, a1 = [], r1 = t9._drawStart || 0, l1 = t9._drawCount || o3.length - r1;
            let c1;
            for(n4.dataset && n4.dataset.draw(e6, s3, r1, l1), c1 = r1; c1 < r1 + l1; ++c1){
                const t10 = o3[c1];
                t10.active ? a1.push(t10) : t10.draw(e6, s3);
            }
            for(c1 = 0; c1 < a1.length; ++c1)a1[c1].draw(e6, s3);
        }
        getStyle(t, e) {
            const i4 = e ? "active" : "default";
            return (void 0) === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i4) : this.resolveDataElementOptions(t || 0, i4);
        }
        getContext(t, e, i) {
            const n4 = this, o3 = n4.getDataset();
            let s3;
            if (t >= 0 && t < n4._cachedMeta.data.length) {
                const e6 = n4._cachedMeta.data[t];
                s3 = e6.$context || (e6.$context = (function(t9, e7, i4) {
                    return Object.assign(Object.create(t9), {
                        active: !1,
                        dataIndex: e7,
                        parsed: void 0,
                        raw: void 0,
                        element: i4,
                        index: e7,
                        mode: "default",
                        type: "data"
                    });
                })(n4.getContext(), t, e6)), s3.parsed = n4.getParsed(t), s3.raw = o3.data[t];
            } else s3 = n4.$context || (n4.$context = (function(t9, e6) {
                return Object.assign(Object.create(t9), {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e6,
                    index: e6,
                    mode: "default",
                    type: "dataset"
                });
            })(n4.chart.getContext(), n4.index)), s3.dataset = o3;
            return s3.active = !!e, s3.mode = i, s3;
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", i) {
            const n4 = this, o3 = "active" === e, s3 = n4._cachedDataOpts, a1 = t + "-" + e, r1 = s3[a1], l1 = n4.enableOptionSharing && ht(i);
            if (r1) return Ci(r1, l1);
            const c1 = n4.chart.config, h1 = c1.datasetElementScopeKeys(n4._type, t), d1 = o3 ? [
                t + "Hover",
                "hover",
                t,
                ""
            ] : [
                t,
                ""
            ], u1 = c1.getOptionScopes(n4.getDataset(), h1), f1 = Object.keys(mt.elements[t]), g1 = c1.resolveNamedOptions(u1, f1, ()=>n4.getContext(i, o3)
            , d1);
            return g1.$shared && (g1.$shared = l1, s3[a1] = Object.freeze(Ci(g1, l1))), g1;
        }
        _resolveAnimations(t, e, i) {
            const n4 = this, o3 = n4.chart, s3 = n4._cachedDataOpts, a1 = "animation-" + e, r1 = s3[a1];
            if (r1) return r1;
            let l1;
            if (!1 !== o3.options.animation) {
                const o4 = n4.chart.config, s4 = o4.datasetAnimationScopeKeys(n4._type, e), a2 = o4.getOptionScopes(n4.getDataset(), s4);
                l1 = o4.createResolver(a2, n4.getContext(t, i, e));
            }
            const c1 = new bi(o3, l1 && l1.animations);
            return l1 && l1._cacheable && (s3[a1] = Object.freeze(c1)), c1;
        }
        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({
            }, t));
        }
        includeOptions(t, e) {
            return !e || Di(t) || this.chart._animationsDisabled;
        }
        updateElement(t, e, i, n) {
            Di(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i);
        }
        updateSharedOptions(t, e, i) {
            t && !Di(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, n) {
            t.active = n;
            const o3 = this.getStyle(e, n);
            this._resolveAnimations(e, i, n).update(t, {
                options: !n && this.getSharedOptions(o3) || o3
            });
        }
        removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1);
        }
        setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0);
        }
        _removeDatasetHoverStyle() {
            const t9 = this._cachedMeta.dataset;
            t9 && this._setStyle(t9, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
            const t9 = this._cachedMeta.dataset;
            t9 && this._setStyle(t9, void 0, "active", !0);
        }
        _resyncElements(t) {
            const e6 = this, i4 = e6._cachedMeta.data.length, n4 = e6._data.length;
            n4 > i4 ? e6._insertElements(i4, n4 - i4, t) : n4 < i4 && e6._removeElements(n4, i4 - n4);
            const o3 = Math.min(n4, i4);
            o3 && e6.parse(0, o3);
        }
        _insertElements(t, e, i = !0) {
            const n4 = this, o3 = n4._cachedMeta, s3 = o3.data, a1 = t + e;
            let r1;
            const l1 = (t9)=>{
                for(t9.length += e, r1 = t9.length - 1; r1 >= a1; r1--)t9[r1] = t9[r1 - e];
            };
            for(l1(s3), r1 = t; r1 < a1; ++r1)s3[r1] = new n4.dataElementType;
            n4._parsing && l1(o3._parsed), n4.parse(t, e), i && n4.updateElements(s3, t, e, "reset");
        }
        updateElements(t, e, i, n) {
        }
        _removeElements(t, e) {
            const i4 = this._cachedMeta;
            if (this._parsing) {
                const n4 = i4._parsed.splice(t, e);
                i4._stacked && Pi(i4, n4);
            }
            i4.data.splice(t, e);
        }
        _onDataPush() {
            const t9 = arguments.length;
            this._insertElements(this.getDataset().data.length - t9, t9);
        }
        _onDataPop() {
            this._removeElements(this._cachedMeta.data.length - 1, 1);
        }
        _onDataShift() {
            this._removeElements(0, 1);
        }
        _onDataSplice(t, e) {
            this._removeElements(t, e), this._insertElements(t, arguments.length - 2);
        }
        _onDataUnshift() {
            this._insertElements(0, arguments.length);
        }
    }
    Ai.defaults = {
    }, Ai.prototype.datasetElementType = null, Ai.prototype.dataElementType = null;
    class Oi {
        constructor(){
            this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
        }
        tooltipPosition(t) {
            const { x: e6 , y: i4  } = this.getProps([
                "x",
                "y"
            ], t);
            return {
                x: e6,
                y: i4
            };
        }
        hasValue() {
            return At(this.x) && At(this.y);
        }
        getProps(t, e) {
            const i4 = this, n4 = this.$animations;
            if (!e || !n4) return i4;
            const o3 = {
            };
            return t.forEach((t9)=>{
                o3[t9] = n4[t9] && n4[t9].active() ? n4[t9]._to : i4[t9];
            }), o3;
        }
    }
    Oi.defaults = {
    }, Oi.defaultRoutes = void 0;
    const Ti = new Map;
    function Li(t9, e6, i4) {
        return (function(t10, e7) {
            e7 = e7 || {
            };
            const i5 = t10 + JSON.stringify(e7);
            let n4 = Ti.get(i5);
            return n4 || (n4 = new Intl.NumberFormat(t10, e7), Ti.set(i5, n4)), n4;
        })(e6, i4).format(t9);
    }
    const Ri = {
        values: (t9)=>Y(t9) ? t9 : "" + t9
        ,
        numeric (t, e, i) {
            if (0 === t) return "0";
            const n4 = this.chart.options.locale;
            let o3, s3 = t;
            if (i.length > 1) {
                const e6 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                (e6 < 0.0001 || e6 > 1000000000000000) && (o3 = "scientific"), s3 = (function(t9, e7) {
                    let i4 = e7.length > 3 ? e7[2].value - e7[1].value : e7[1].value - e7[0].value;
                    Math.abs(i4) > 1 && t9 !== Math.floor(t9) && (i4 = t9 - Math.floor(t9));
                    return i4;
                })(t, i);
            }
            const a1 = St(Math.abs(s3)), r1 = Math.max(Math.min(-1 * Math.floor(a1), 20), 0), l1 = {
                notation: o3,
                minimumFractionDigits: r1,
                maximumFractionDigits: r1
            };
            return Object.assign(l1, this.options.ticks.format), Li(t, n4, l1);
        },
        logarithmic (t, e, i) {
            if (0 === t) return "0";
            const n4 = t / Math.pow(10, Math.floor(St(t)));
            return 1 === n4 || 2 === n4 || 5 === n4 ? Ri.numeric.call(this, t, e, i) : "";
        }
    };
    var Ei = {
        formatters: Ri
    };
    function Ii(t9, e6) {
        const i4 = t9.options.ticks, n4 = i4.maxTicksLimit || function(t10) {
            const e7 = t10.options.offset, i5 = t10._tickSize(), n5 = t10._length / i5 + (e7 ? 0 : 1), o3 = t10._maxLength / i5;
            return Math.floor(Math.min(n5, o3));
        }(t9), o3 = i4.major.enabled ? function(t10) {
            const e7 = [];
            let i5, n5;
            for(i5 = 0, n5 = t10.length; i5 < n5; i5++)t10[i5].major && e7.push(i5);
            return e7;
        }(e6) : [], s3 = o3.length, a1 = o3[0], r1 = o3[s3 - 1], l1 = [];
        if (s3 > n4) return (function(t10, e7, i5, n5) {
            let o4, s4 = 0, a2 = i5[0];
            for(n5 = Math.ceil(n5), o4 = 0; o4 < t10.length; o4++)o4 === a2 && (e7.push(t10[o4]), s4++, a2 = i5[s4 * n5]);
        })(e6, l1, o3, s3 / n4), l1;
        const c1 = function(t10, e7, i5) {
            const n5 = function(t11) {
                const e8 = t11.length;
                let i6, n6;
                if (e8 < 2) return !1;
                for(n6 = t11[0], i6 = 1; i6 < e8; ++i6)if (t11[i6] - t11[i6 - 1] !== n6) return !1;
                return n6;
            }(t10), o4 = e7.length / i5;
            if (!n5) return Math.max(o4, 1);
            const s4 = Ct(n5);
            for(let t11 = 0, e8 = s4.length - 1; t11 < e8; t11++){
                const e8 = s4[t11];
                if (e8 > o4) return e8;
            }
            return Math.max(o4, 1);
        }(o3, e6, n4);
        if (s3 > 0) {
            let t10, i5;
            const n5 = s3 > 1 ? Math.round((r1 - a1) / (s3 - 1)) : null;
            for(Fi(e6, l1, c1, $(n5) ? 0 : a1 - n5, a1), t10 = 0, i5 = s3 - 1; t10 < i5; t10++)Fi(e6, l1, c1, o3[t10], o3[t10 + 1]);
            return Fi(e6, l1, c1, r1, $(n5) ? e6.length : r1 + n5), l1;
        }
        return Fi(e6, l1, c1), l1;
    }
    function Fi(t9, e6, i4, n4, o3) {
        const s3 = K(n4, 0), a1 = Math.min(K(o3, t9.length), t9.length);
        let r1, l1, c1, h1 = 0;
        for(i4 = Math.ceil(i4), o3 && (r1 = o3 - n4, i4 = r1 / Math.floor(r1 / i4)), c1 = s3; c1 < 0;)h1++, c1 = Math.round(s3 + h1 * i4);
        for(l1 = Math.max(s3, 0); l1 < a1; l1++)l1 === c1 && (e6.push(t9[l1]), h1++, c1 = Math.round(s3 + h1 * i4));
    }
    mt.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t9, e6)=>e6.lineWidth
            ,
            tickColor: (t9, e6)=>e6.color
            ,
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderColor: (t9, e6)=>e6.color
            ,
            borderWidth: (t9, e6)=>e6.lineWidth
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ei.formatters.values,
            minor: {
            },
            major: {
            },
            align: "center",
            crossAlign: "near"
        }
    }), mt.route("scale.ticks", "color", "", "color"), mt.route("scale.grid", "color", "", "borderColor"), mt.route("scale.title", "color", "", "color"), mt.describe("scale", {
        _fallback: !1,
        _scriptable: (t9)=>!t9.startsWith("before") && !t9.startsWith("after") && "callback" !== t9 && "parser" !== t9
        ,
        _indexable: (t9)=>"borderDash" !== t9 && "tickBorderDash" !== t9
    }), mt.describe("scales", {
        _fallback: "scale"
    });
    const zi = (t9, e6, i4)=>"top" === e6 || "left" === e6 ? t9[e6] + i4 : t9[e6] - i4
    ;
    function Vi(t9, e6) {
        const i4 = [], n4 = t9.length / e6, o3 = t9.length;
        let s3 = 0;
        for(; s3 < o3; s3 += n4)i4.push(t9[Math.floor(s3)]);
        return i4;
    }
    function Bi(t9, e6, i4) {
        const n4 = t9.ticks.length, o3 = Math.min(e6, n4 - 1), s3 = t9._startPixel, a1 = t9._endPixel, r1 = 0.000001;
        let l1, c1 = t9.getPixelForTick(o3);
        if (!(i4 && (l1 = 1 === n4 ? Math.max(c1 - s3, a1 - c1) : 0 === e6 ? (t9.getPixelForTick(1) - c1) / 2 : (c1 - t9.getPixelForTick(o3 - 1)) / 2, c1 += o3 < e6 ? l1 : -l1, c1 < s3 - r1 || c1 > a1 + r1))) return c1;
    }
    function Wi(t9) {
        return t9.drawTicks ? t9.tickLength : 0;
    }
    function Hi(t9, e6) {
        if (!t9.display) return 0;
        const i4 = Ee(t9.font, e6), n4 = Re(t9.padding);
        return (Y(t9.text) ? t9.text.length : 1) * i4.lineHeight + n4.height;
    }
    function Ni(t9, e6, i4) {
        let o3 = n1(t9);
        return (i4 && "right" !== e6 || !i4 && "right" === e6) && (o3 = ((t10)=>"left" === t10 ? "right" : "right" === t10 ? "left" : t10
        )(o3)), o3;
    }
    class ji extends Oi {
        constructor(t9){
            super(), this.id = t9.id, this.type = t9.type, this.options = void 0, this.ctx = t9.ctx, this.chart = t9.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {
            }, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {
            }, this._dataLimitsCached = !1, this.$context = void 0;
        }
        init(t) {
            const e6 = this;
            e6.options = t, e6.axis = t.axis, e6._userMin = e6.parse(t.min), e6._userMax = e6.parse(t.max), e6._suggestedMin = e6.parse(t.suggestedMin), e6._suggestedMax = e6.parse(t.suggestedMax);
        }
        parse(t, e) {
            return t;
        }
        getUserBounds() {
            let { _userMin: t10 , _userMax: e6 , _suggestedMin: i4 , _suggestedMax: n4  } = this;
            return t10 = q(t10, Number.POSITIVE_INFINITY), e6 = q(e6, Number.NEGATIVE_INFINITY), i4 = q(i4, Number.POSITIVE_INFINITY), n4 = q(n4, Number.NEGATIVE_INFINITY), {
                min: q(t10, i4),
                max: q(e6, n4),
                minDefined: X(t10),
                maxDefined: X(e6)
            };
        }
        getMinMax(t) {
            const e6 = this;
            let i4, { min: n4 , max: o3 , minDefined: s3 , maxDefined: a1  } = e6.getUserBounds();
            if (s3 && a1) return {
                min: n4,
                max: o3
            };
            const r1 = e6.getMatchingVisibleMetas();
            for(let l1 = 0, c1 = r1.length; l1 < c1; ++l1)i4 = r1[l1].controller.getMinMax(e6, t), s3 || (n4 = Math.min(n4, i4.min)), a1 || (o3 = Math.max(o3, i4.max));
            return {
                min: q(n4, q(o3, n4)),
                max: q(o3, q(n4, o3))
            };
        }
        getPadding() {
            const t10 = this;
            return {
                left: t10.paddingLeft || 0,
                top: t10.paddingTop || 0,
                right: t10.paddingRight || 0,
                bottom: t10.paddingBottom || 0
            };
        }
        getTicks() {
            return this.ticks;
        }
        getLabels() {
            const t10 = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t10.xLabels : t10.yLabels) || t10.labels || [];
        }
        beforeLayout() {
            this._cache = {
            }, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            Q(this.options.beforeUpdate, [
                this
            ]);
        }
        update(t, e, i) {
            const n4 = this, o3 = n4.options.ticks, s3 = o3.sampleSize;
            n4.beforeUpdate(), n4.maxWidth = t, n4.maxHeight = e, n4._margins = i = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, i), n4.ticks = null, n4._labelSizes = null, n4._gridLineItems = null, n4._labelItems = null, n4.beforeSetDimensions(), n4.setDimensions(), n4.afterSetDimensions(), n4._maxLength = n4.isHorizontal() ? n4.width + i.left + i.right : n4.height + i.top + i.bottom, n4._dataLimitsCached || (n4.beforeDataLimits(), n4.determineDataLimits(), n4.afterDataLimits(), n4._dataLimitsCached = !0), n4.beforeBuildTicks(), n4.ticks = n4.buildTicks() || [], n4.afterBuildTicks();
            const a1 = s3 < n4.ticks.length;
            n4._convertTicksToLabels(a1 ? Vi(n4.ticks, s3) : n4.ticks), n4.configure(), n4.beforeCalculateLabelRotation(), n4.calculateLabelRotation(), n4.afterCalculateLabelRotation(), o3.display && (o3.autoSkip || "auto" === o3.source) && (n4.ticks = Ii(n4, n4.ticks), n4._labelSizes = null), a1 && n4._convertTicksToLabels(n4.ticks), n4.beforeFit(), n4.fit(), n4.afterFit(), n4.afterUpdate();
        }
        configure() {
            const t10 = this;
            let e6, i4, n4 = t10.options.reverse;
            t10.isHorizontal() ? (e6 = t10.left, i4 = t10.right) : (e6 = t10.top, i4 = t10.bottom, n4 = !n4), t10._startPixel = e6, t10._endPixel = i4, t10._reversePixels = n4, t10._length = i4 - e6, t10._alignToPixels = t10.options.alignToPixels;
        }
        afterUpdate() {
            Q(this.options.afterUpdate, [
                this
            ]);
        }
        beforeSetDimensions() {
            Q(this.options.beforeSetDimensions, [
                this
            ]);
        }
        setDimensions() {
            const t10 = this;
            t10.isHorizontal() ? (t10.width = t10.maxWidth, t10.left = 0, t10.right = t10.width) : (t10.height = t10.maxHeight, t10.top = 0, t10.bottom = t10.height), t10.paddingLeft = 0, t10.paddingTop = 0, t10.paddingRight = 0, t10.paddingBottom = 0;
        }
        afterSetDimensions() {
            Q(this.options.afterSetDimensions, [
                this
            ]);
        }
        _callHooks(t) {
            const e6 = this;
            e6.chart.notifyPlugins(t, e6.getContext()), Q(e6.options[t], [
                e6
            ]);
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {
        }
        afterDataLimits() {
            this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
            return [];
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
            Q(this.options.beforeTickToLabelConversion, [
                this
            ]);
        }
        generateTickLabels(t) {
            const e6 = this, i4 = e6.options.ticks;
            let n4, o3, s3;
            for(n4 = 0, o3 = t.length; n4 < o3; n4++)s3 = t[n4], s3.label = Q(i4.callback, [
                s3.value,
                n4,
                t
            ], e6);
        }
        afterTickToLabelConversion() {
            Q(this.options.afterTickToLabelConversion, [
                this
            ]);
        }
        beforeCalculateLabelRotation() {
            Q(this.options.beforeCalculateLabelRotation, [
                this
            ]);
        }
        calculateLabelRotation() {
            const t10 = this, e6 = t10.options, i4 = e6.ticks, n4 = t10.ticks.length, o3 = i4.minRotation || 0, s3 = i4.maxRotation;
            let a1, r1, l1, c1 = o3;
            if (!t10._isVisible() || !i4.display || o3 >= s3 || n4 <= 1 || !t10.isHorizontal()) return void (t10.labelRotation = o3);
            const h1 = t10._getLabelSizes(), d1 = h1.widest.width, u1 = h1.highest.height, f1 = Ht(t10.chart.width - d1, 0, t10.maxWidth);
            a1 = e6.offset ? t10.maxWidth / n4 : f1 / (n4 - 1), d1 + 6 > a1 && (a1 = f1 / (n4 - (e6.offset ? 0.5 : 1)), r1 = t10.maxHeight - Wi(e6.grid) - i4.padding - Hi(e6.title, t10.chart.options.font), l1 = Math.sqrt(d1 * d1 + u1 * u1), c1 = Et(Math.min(Math.asin(Math.min((h1.highest.height + 6) / a1, 1)), Math.asin(Math.min(r1 / l1, 1)) - Math.asin(u1 / l1))), c1 = Math.max(o3, Math.min(s3, c1))), t10.labelRotation = c1;
        }
        afterCalculateLabelRotation() {
            Q(this.options.afterCalculateLabelRotation, [
                this
            ]);
        }
        beforeFit() {
            Q(this.options.beforeFit, [
                this
            ]);
        }
        fit() {
            const t10 = this, e6 = {
                width: 0,
                height: 0
            }, { chart: i4 , options: { ticks: n4 , title: o3 , grid: s3  }  } = t10, a1 = t10._isVisible(), r1 = t10.isHorizontal();
            if (a1) {
                const a2 = Hi(o3, i4.options.font);
                if (r1 ? (e6.width = t10.maxWidth, e6.height = Wi(s3) + a2) : (e6.height = t10.maxHeight, e6.width = Wi(s3) + a2), n4.display && t10.ticks.length) {
                    const { first: i5 , last: o4 , widest: s4 , highest: a3  } = t10._getLabelSizes(), l1 = 2 * n4.padding, c1 = Rt(t10.labelRotation), h1 = Math.cos(c1), d1 = Math.sin(c1);
                    if (r1) {
                        const i6 = d1 * s4.width + h1 * a3.height;
                        e6.height = Math.min(t10.maxHeight, e6.height + i6 + l1);
                    } else {
                        const i6 = n4.mirror ? 0 : h1 * s4.width + d1 * a3.height;
                        e6.width = Math.min(t10.maxWidth, e6.width + i6 + l1);
                    }
                    t10._calculatePadding(i5, o4, d1, h1);
                }
            }
            t10._handleMargins(), r1 ? (t10.width = t10._length = i4.width - t10._margins.left - t10._margins.right, t10.height = e6.height) : (t10.width = e6.width, t10.height = t10._length = i4.height - t10._margins.top - t10._margins.bottom);
        }
        _calculatePadding(t, e, i, n) {
            const o3 = this, { ticks: { align: s3 , padding: a1  } , position: r1  } = o3.options, l1 = 0 !== o3.labelRotation, c1 = "top" !== r1 && "x" === o3.axis;
            if (o3.isHorizontal()) {
                const r2 = o3.getPixelForTick(0) - o3.left, h1 = o3.right - o3.getPixelForTick(o3.ticks.length - 1);
                let d1 = 0, u1 = 0;
                l1 ? c1 ? (d1 = n * t.width, u1 = i * e.height) : (d1 = i * t.height, u1 = n * e.width) : "start" === s3 ? u1 = e.width : "end" === s3 ? d1 = t.width : (d1 = t.width / 2, u1 = e.width / 2), o3.paddingLeft = Math.max((d1 - r2 + a1) * o3.width / (o3.width - r2), 0), o3.paddingRight = Math.max((u1 - h1 + a1) * o3.width / (o3.width - h1), 0);
            } else {
                let i4 = e.height / 2, n4 = t.height / 2;
                "start" === s3 ? (i4 = 0, n4 = t.height) : "end" === s3 && (i4 = e.height, n4 = 0), o3.paddingTop = i4 + a1, o3.paddingBottom = n4 + a1;
            }
        }
        _handleMargins() {
            const t10 = this;
            t10._margins && (t10._margins.left = Math.max(t10.paddingLeft, t10._margins.left), t10._margins.top = Math.max(t10.paddingTop, t10._margins.top), t10._margins.right = Math.max(t10.paddingRight, t10._margins.right), t10._margins.bottom = Math.max(t10.paddingBottom, t10._margins.bottom));
        }
        afterFit() {
            Q(this.options.afterFit, [
                this
            ]);
        }
        isHorizontal() {
            const { axis: t10 , position: e6  } = this.options;
            return "top" === e6 || "bottom" === e6 || "x" === t10;
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
            const e6 = this;
            e6.beforeTickToLabelConversion(), e6.generateTickLabels(t), e6.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            const t10 = this;
            let e6 = t10._labelSizes;
            if (!e6) {
                const i4 = t10.options.ticks.sampleSize;
                let n4 = t10.ticks;
                i4 < n4.length && (n4 = Vi(n4, i4)), t10._labelSizes = e6 = t10._computeLabelSizes(n4, n4.length);
            }
            return e6;
        }
        _computeLabelSizes(t, e) {
            const { ctx: i4 , _longestTextCache: n4  } = this, o3 = [], s3 = [];
            let a1, r1, l1, c1, h1, d1, u1, f1, g1, p1, m1, x1 = 0, b1 = 0;
            for(a1 = 0; a1 < e; ++a1){
                if (c1 = t[a1].label, h1 = this._resolveTickFontOptions(a1), i4.font = d1 = h1.string, u1 = n4[d1] = n4[d1] || {
                    data: {
                    },
                    gc: []
                }, f1 = h1.lineHeight, g1 = p1 = 0, $(c1) || Y(c1)) {
                    if (Y(c1)) for(r1 = 0, l1 = c1.length; r1 < l1; ++r1)m1 = c1[r1], $(m1) || Y(m1) || (g1 = $t(i4, u1.data, u1.gc, g1, m1), p1 += f1);
                } else g1 = $t(i4, u1.data, u1.gc, g1, c1), p1 = f1;
                o3.push(g1), s3.push(p1), x1 = Math.max(g1, x1), b1 = Math.max(p1, b1);
            }
            !function(t10, e6) {
                J(t10, (t11)=>{
                    const i5 = t11.gc, n5 = i5.length / 2;
                    let o4;
                    if (n5 > e6) {
                        for(o4 = 0; o4 < n5; ++o4)delete t11.data[i5[o4]];
                        i5.splice(0, n5);
                    }
                });
            }(n4, e);
            const _1 = o3.indexOf(x1), y1 = s3.indexOf(b1), v1 = (t10)=>({
                    width: o3[t10] || 0,
                    height: s3[t10] || 0
                })
            ;
            return {
                first: v1(0),
                last: v1(e - 1),
                widest: v1(_1),
                highest: v1(y1)
            };
        }
        getLabelForValue(t) {
            return t;
        }
        getPixelForValue(t, e) {
            return NaN;
        }
        getValueForPixel(t) {
        }
        getPixelForTick(t) {
            const e6 = this.ticks;
            return t < 0 || t > e6.length - 1 ? null : this.getPixelForValue(e6[t].value);
        }
        getPixelForDecimal(t) {
            const e6 = this;
            e6._reversePixels && (t = 1 - t);
            const i4 = e6._startPixel + t * e6._length;
            return Nt(e6._alignToPixels ? Ut(e6.chart, i4, 0) : i4);
        }
        getDecimalForPixel(t) {
            const e6 = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e6 : e6;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const { min: t10 , max: e6  } = this;
            return t10 < 0 && e6 < 0 ? e6 : t10 > 0 && e6 > 0 ? t10 : 0;
        }
        getContext(t) {
            const e6 = this, i4 = e6.ticks || [];
            if (t >= 0 && t < i4.length) {
                const n4 = i4[t];
                return n4.$context || (n4.$context = (function(t10, e7, i5) {
                    return Object.assign(Object.create(t10), {
                        tick: i5,
                        index: e7,
                        type: "tick"
                    });
                })(e6.getContext(), t, n4));
            }
            var n4, o3;
            return e6.$context || (e6.$context = (n4 = e6.chart.getContext(), o3 = e6, Object.assign(Object.create(n4), {
                scale: o3,
                type: "scale"
            })));
        }
        _tickSize() {
            const t10 = this, e6 = t10.options.ticks, i4 = Rt(t10.labelRotation), n5 = Math.abs(Math.cos(i4)), o4 = Math.abs(Math.sin(i4)), s3 = t10._getLabelSizes(), a1 = e6.autoSkipPadding || 0, r1 = s3 ? s3.widest.width + a1 : 0, l1 = s3 ? s3.highest.height + a1 : 0;
            return t10.isHorizontal() ? l1 * n5 > r1 * o4 ? r1 / n5 : l1 / o4 : l1 * o4 < r1 * n5 ? l1 / n5 : r1 / o4;
        }
        _isVisible() {
            const t10 = this.options.display;
            return "auto" !== t10 ? !!t10 : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
            const e6 = this, i4 = e6.axis, n5 = e6.chart, o4 = e6.options, { grid: s3 , position: a1  } = o4, r1 = s3.offset, l1 = e6.isHorizontal(), c1 = e6.ticks.length + (r1 ? 1 : 0), h1 = Wi(s3), d1 = [], u1 = s3.setContext(e6.getContext(0)), f1 = u1.drawBorder ? u1.borderWidth : 0, g1 = f1 / 2, p1 = function(t10) {
                return Ut(n5, t10, f1);
            };
            let m1, x1, b1, _1, y1, v1, M1, w1, k1, S1, P1, D1;
            if ("top" === a1) m1 = p1(e6.bottom), v1 = e6.bottom - h1, w1 = m1 - g1, S1 = p1(t.top) + g1, D1 = t.bottom;
            else if ("bottom" === a1) m1 = p1(e6.top), S1 = t.top, D1 = p1(t.bottom) - g1, v1 = m1 + g1, w1 = e6.top + h1;
            else if ("left" === a1) m1 = p1(e6.right), y1 = e6.right - h1, M1 = m1 - g1, k1 = p1(t.left) + g1, P1 = t.right;
            else if ("right" === a1) m1 = p1(e6.left), k1 = t.left, P1 = p1(t.right) - g1, y1 = m1 + g1, M1 = e6.left + h1;
            else if ("x" === i4) {
                if ("center" === a1) m1 = p1((t.top + t.bottom) / 2 + 0.5);
                else if (U(a1)) {
                    const t10 = Object.keys(a1)[0], i5 = a1[t10];
                    m1 = p1(e6.chart.scales[t10].getPixelForValue(i5));
                }
                S1 = t.top, D1 = t.bottom, v1 = m1 + g1, w1 = v1 + h1;
            } else if ("y" === i4) {
                if ("center" === a1) m1 = p1((t.left + t.right) / 2);
                else if (U(a1)) {
                    const t10 = Object.keys(a1)[0], i5 = a1[t10];
                    m1 = p1(e6.chart.scales[t10].getPixelForValue(i5));
                }
                y1 = m1 - g1, M1 = y1 - h1, k1 = t.left, P1 = t.right;
            }
            for(x1 = 0; x1 < c1; ++x1){
                const t10 = s3.setContext(e6.getContext(x1)), i5 = t10.lineWidth, o5 = t10.color, a2 = s3.borderDash || [], c2 = t10.borderDashOffset, h2 = t10.tickWidth, u2 = t10.tickColor, f2 = t10.tickBorderDash || [], g2 = t10.tickBorderDashOffset;
                b1 = Bi(e6, x1, r1), (void 0) !== b1 && (_1 = Ut(n5, b1, i5), l1 ? y1 = M1 = k1 = P1 = _1 : v1 = w1 = S1 = D1 = _1, d1.push({
                    tx1: y1,
                    ty1: v1,
                    tx2: M1,
                    ty2: w1,
                    x1: k1,
                    y1: S1,
                    x2: P1,
                    y2: D1,
                    width: i5,
                    color: o5,
                    borderDash: a2,
                    borderDashOffset: c2,
                    tickWidth: h2,
                    tickColor: u2,
                    tickBorderDash: f2,
                    tickBorderDashOffset: g2
                }));
            }
            return e6._ticksLength = c1, e6._borderValue = m1, d1;
        }
        _computeLabelItems(t) {
            const e6 = this, i4 = e6.axis, n5 = e6.options, { position: o4 , ticks: s3  } = n5, a1 = e6.isHorizontal(), r1 = e6.ticks, { align: l1 , crossAlign: c1 , padding: h1  } = s3, d1 = Wi(n5.grid), u1 = d1 + h1, f1 = -Rt(e6.labelRotation), g1 = [];
            let p1, m1, x1, b1, _1, y1, v1, M1, w1, k1, S1, P1, D1 = "middle";
            if ("top" === o4) y1 = e6.bottom - u1, v1 = e6._getXAxisLabelAlignment();
            else if ("bottom" === o4) y1 = e6.top + u1, v1 = e6._getXAxisLabelAlignment();
            else if ("left" === o4) {
                const t10 = this._getYAxisLabelAlignment(d1);
                v1 = t10.textAlign, _1 = t10.x;
            } else if ("right" === o4) {
                const t10 = this._getYAxisLabelAlignment(d1);
                v1 = t10.textAlign, _1 = t10.x;
            } else if ("x" === i4) {
                if ("center" === o4) y1 = (t.top + t.bottom) / 2 + u1;
                else if (U(o4)) {
                    const t10 = Object.keys(o4)[0], i5 = o4[t10];
                    y1 = e6.chart.scales[t10].getPixelForValue(i5) + u1;
                }
                v1 = e6._getXAxisLabelAlignment();
            } else if ("y" === i4) {
                if ("center" === o4) _1 = (t.left + t.right) / 2 - u1;
                else if (U(o4)) {
                    const t10 = Object.keys(o4)[0], i5 = o4[t10];
                    _1 = e6.chart.scales[t10].getPixelForValue(i5);
                }
                v1 = this._getYAxisLabelAlignment(d1).textAlign;
            }
            "y" === i4 && ("start" === l1 ? D1 = "top" : "end" === l1 && (D1 = "bottom"));
            const C1 = e6._getLabelSizes();
            for(p1 = 0, m1 = r1.length; p1 < m1; ++p1){
                x1 = r1[p1], b1 = x1.label;
                const t10 = s3.setContext(e6.getContext(p1));
                M1 = e6.getPixelForTick(p1) + s3.labelOffset, w1 = e6._resolveTickFontOptions(p1), k1 = w1.lineHeight, S1 = Y(b1) ? b1.length : 1;
                const i5 = S1 / 2, n6 = t10.color, l2 = t10.textStrokeColor, h2 = t10.textStrokeWidth;
                a1 ? (_1 = M1, P1 = "top" === o4 ? "near" === c1 || 0 !== f1 ? -S1 * k1 + k1 / 2 : "center" === c1 ? -C1.highest.height / 2 - i5 * k1 + k1 : -C1.highest.height + k1 / 2 : "near" === c1 || 0 !== f1 ? k1 / 2 : "center" === c1 ? C1.highest.height / 2 - i5 * k1 : C1.highest.height - S1 * k1) : (y1 = M1, P1 = (1 - S1) * k1 / 2), g1.push({
                    rotation: f1,
                    label: b1,
                    font: w1,
                    color: n6,
                    strokeColor: l2,
                    strokeWidth: h2,
                    textOffset: P1,
                    textAlign: v1,
                    textBaseline: D1,
                    translation: [
                        _1,
                        y1
                    ]
                });
            }
            return g1;
        }
        _getXAxisLabelAlignment() {
            const { position: t10 , ticks: e6  } = this.options;
            if (-Rt(this.labelRotation)) return "top" === t10 ? "left" : "right";
            let i4 = "center";
            return "start" === e6.align ? i4 = "left" : "end" === e6.align && (i4 = "right"), i4;
        }
        _getYAxisLabelAlignment(t) {
            const e6 = this, { position: i4 , ticks: { crossAlign: n5 , mirror: o4 , padding: s3  }  } = e6.options, a1 = t + s3, r1 = e6._getLabelSizes().widest.width;
            let l1, c1;
            return "left" === i4 ? o4 ? (l1 = "left", c1 = e6.right - s3) : (c1 = e6.right - a1, "near" === n5 ? l1 = "right" : "center" === n5 ? (l1 = "center", c1 -= r1 / 2) : (l1 = "left", c1 = e6.left)) : "right" === i4 ? o4 ? (l1 = "right", c1 = e6.left + s3) : (c1 = e6.left + a1, "near" === n5 ? l1 = "left" : "center" === n5 ? (l1 = "center", c1 += r1 / 2) : (l1 = "right", c1 = e6.right)) : l1 = "right", {
                textAlign: l1,
                x: c1
            };
        }
        _computeLabelArea() {
            const t10 = this;
            if (t10.options.ticks.mirror) return;
            const e6 = t10.chart, i4 = t10.options.position;
            return "left" === i4 || "right" === i4 ? {
                top: 0,
                left: t10.left,
                bottom: e6.height,
                right: t10.right
            } : "top" === i4 || "bottom" === i4 ? {
                top: t10.top,
                left: 0,
                bottom: t10.bottom,
                right: e6.width
            } : void 0;
        }
        drawBackground() {
            const { ctx: t10 , options: { backgroundColor: e6  } , left: i4 , top: n5 , width: o4 , height: s3  } = this;
            e6 && (t10.save(), t10.fillStyle = e6, t10.fillRect(i4, n5, o4, s3), t10.restore());
        }
        getLineWidthForValue(t) {
            const e6 = this, i4 = e6.options.grid;
            if (!e6._isVisible() || !i4.display) return 0;
            const n5 = e6.ticks.findIndex((e7)=>e7.value === t
            );
            if (n5 >= 0) return i4.setContext(e6.getContext(n5)).lineWidth;
            return 0;
        }
        drawGrid(t) {
            const e6 = this, i4 = e6.options.grid, n5 = e6.ctx, o4 = e6.chart, s3 = i4.setContext(e6.getContext(0)), a1 = i4.drawBorder ? s3.borderWidth : 0, r1 = e6._gridLineItems || (e6._gridLineItems = e6._computeGridLineItems(t));
            let l1, c1;
            const h1 = (t10, e7, i5)=>{
                i5.width && i5.color && (n5.save(), n5.lineWidth = i5.width, n5.strokeStyle = i5.color, n5.setLineDash(i5.borderDash || []), n5.lineDashOffset = i5.borderDashOffset, n5.beginPath(), n5.moveTo(t10.x, t10.y), n5.lineTo(e7.x, e7.y), n5.stroke(), n5.restore());
            };
            if (i4.display) for(l1 = 0, c1 = r1.length; l1 < c1; ++l1){
                const t10 = r1[l1];
                i4.drawOnChartArea && h1({
                    x: t10.x1,
                    y: t10.y1
                }, {
                    x: t10.x2,
                    y: t10.y2
                }, t10), i4.drawTicks && h1({
                    x: t10.tx1,
                    y: t10.ty1
                }, {
                    x: t10.tx2,
                    y: t10.ty2
                }, {
                    color: t10.tickColor,
                    width: t10.tickWidth,
                    borderDash: t10.tickBorderDash,
                    borderDashOffset: t10.tickBorderDashOffset
                });
            }
            if (a1) {
                const t10 = i4.setContext(e6.getContext(e6._ticksLength - 1)), n6 = t10.lineWidth, s4 = e6._borderValue;
                let r2, l2, c2, d1;
                e6.isHorizontal() ? (r2 = Ut(o4, e6.left, a1) - a1 / 2, l2 = Ut(o4, e6.right, n6) + n6 / 2, c2 = d1 = s4) : (c2 = Ut(o4, e6.top, a1) - a1 / 2, d1 = Ut(o4, e6.bottom, n6) + n6 / 2, r2 = l2 = s4), h1({
                    x: r2,
                    y: c2
                }, {
                    x: l2,
                    y: d1
                }, {
                    width: a1,
                    color: t10.borderColor
                });
            }
        }
        drawLabels(t) {
            const e6 = this;
            if (!e6.options.ticks.display) return;
            const i4 = e6.ctx, n5 = e6._computeLabelArea();
            n5 && Gt(i4, n5);
            const o4 = e6._labelItems || (e6._labelItems = e6._computeLabelItems(t));
            let s3, a1;
            for(s3 = 0, a1 = o4.length; s3 < a1; ++s3){
                const t10 = o4[s3], e7 = t10.font;
                te(i4, t10.label, 0, t10.textOffset, e7, t10);
            }
            n5 && Zt(i4);
        }
        drawTitle() {
            const { ctx: t10 , options: { position: e6 , title: i4 , reverse: n5  }  } = this;
            if (!i4.display) return;
            const s3 = Ee(i4.font), a1 = Re(i4.padding), r1 = i4.align;
            let l1 = s3.lineHeight / 2;
            "bottom" === e6 ? (l1 += a1.bottom, Y(i4.text) && (l1 += s3.lineHeight * (i4.text.length - 1))) : l1 += a1.top;
            const { titleX: c1 , titleY: h1 , maxWidth: d1 , rotation: u1  } = function(t11, e7, i5, n6) {
                const { top: s4 , left: a2 , bottom: r2 , right: l2  } = t11;
                let c2, h2, d2, u2 = 0;
                return t11.isHorizontal() ? (h2 = o5(n6, a2, l2), d2 = zi(t11, i5, e7), c2 = l2 - a2) : (h2 = zi(t11, i5, e7), d2 = o5(n6, r2, s4), u2 = "left" === i5 ? -Mt : Mt), {
                    titleX: h2,
                    titleY: d2,
                    maxWidth: c2,
                    rotation: u2
                };
            }(this, l1, e6, r1);
            te(t10, i4.text, 0, 0, s3, {
                color: i4.color,
                maxWidth: d1,
                rotation: u1,
                textAlign: Ni(r1, e6, n5),
                textBaseline: "middle",
                translation: [
                    c1,
                    h1
                ]
            });
        }
        draw(t) {
            const e6 = this;
            e6._isVisible() && (e6.drawBackground(), e6.drawGrid(t), e6.drawTitle(), e6.drawLabels(t));
        }
        _layers() {
            const t10 = this, e6 = t10.options, i4 = e6.ticks && e6.ticks.z || 0, n5 = e6.grid && e6.grid.z || 0;
            return t10._isVisible() && i4 !== n5 && t10.draw === ji.prototype.draw ? [
                {
                    z: n5,
                    draw (e) {
                        t10.drawBackground(), t10.drawGrid(e), t10.drawTitle();
                    }
                },
                {
                    z: i4,
                    draw (e) {
                        t10.drawLabels(e);
                    }
                }
            ] : [
                {
                    z: i4,
                    draw (e) {
                        t10.draw(e);
                    }
                }
            ];
        }
        getMatchingVisibleMetas(t) {
            const e6 = this, i4 = e6.chart.getSortedVisibleDatasetMetas(), n5 = e6.axis + "AxisID", o4 = [];
            let s3, a1;
            for(s3 = 0, a1 = i4.length; s3 < a1; ++s3){
                const a2 = i4[s3];
                a2[n5] !== e6.id || t && a2.type !== t || o4.push(a2);
            }
            return o4;
        }
        _resolveTickFontOptions(t) {
            return Ee(this.options.ticks.setContext(this.getContext(t)).font);
        }
    }
    function $i(t10, e6 = [
        ""
    ], i4 = t10, n5) {
        ht(n5) || (n5 = en("_fallback", t10));
        const o4 = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t10,
            _rootScopes: i4,
            _fallback: n5,
            override: (o5)=>$i([
                    o5,
                    ...t10
                ], e6, i4, n5)
        };
        return new Proxy(o4, {
            deleteProperty: (e7, i5)=>(delete e7[i5], delete e7._keys, delete t10[0][i5], !0)
            ,
            get: (i5, n6)=>Ki(i5, n6, ()=>(function(t11, e7, i6, n7) {
                        let o5;
                        for (const s3 of e7)if (o5 = en(Xi(s3, t11), i6), ht(o5)) return qi(t11, o5) ? Ji(i6, n7, t11, o5) : o5;
                    })(n6, e6, t10, i5)
                )
            ,
            getOwnPropertyDescriptor: (t11, e7)=>Reflect.getOwnPropertyDescriptor(t11._scopes[0], e7)
            ,
            getPrototypeOf: ()=>Reflect.getPrototypeOf(t10[0])
            ,
            has: (t11, e7)=>nn(t11).includes(e7)
            ,
            ownKeys: (t11)=>nn(t11)
            ,
            set: (e7, i5, n6)=>(t10[0][i5] = n6, delete e7[i5], delete e7._keys, !0)
        });
    }
    function Yi(t10, e6, i4, n5) {
        const o4 = {
            _cacheable: !1,
            _proxy: t10,
            _context: e6,
            _subProxy: i4,
            _stack: new Set,
            _descriptors: Ui(t10, n5),
            setContext: (e7)=>Yi(t10, e7, i4, n5)
            ,
            override: (o5)=>Yi(t10.override(o5), e6, i4, n5)
        };
        return new Proxy(o4, {
            deleteProperty: (e7, i5)=>(delete e7[i5], delete t10[i5], !0)
            ,
            get: (t11, e7, i5)=>Ki(t11, e7, ()=>(function(t12, e8, i6) {
                        const { _proxy: n6 , _context: o5 , _subProxy: s3 , _descriptors: a1  } = t12;
                        let r1 = n6[e8];
                        dt(r1) && a1.isScriptable(e8) && (r1 = (function(t13, e9, i7, n7) {
                            const { _proxy: o6 , _context: s4 , _subProxy: a2 , _stack: r2  } = i7;
                            if (r2.has(t13)) throw new Error("Recursion detected: " + [
                                ...r2
                            ].join("->") + "->" + t13);
                            r2.add(t13), e9 = e9(s4, a2 || n7), r2.delete(t13), U(e9) && (e9 = Ji(o6._scopes, o6, t13, e9));
                            return e9;
                        })(e8, r1, t12, i6));
                        Y(r1) && r1.length && (r1 = (function(t13, e9, i7, n7) {
                            const { _proxy: o6 , _context: s4 , _subProxy: a2 , _descriptors: r2  } = i7;
                            if (ht(s4.index) && n7(t13)) e9 = e9[s4.index % e9.length];
                            else if (U(e9[0])) {
                                const i8 = e9, n8 = o6._scopes.filter((t14)=>t14 !== i8
                                );
                                e9 = [];
                                for (const l1 of i8){
                                    const i9 = Ji(n8, o6, t13, l1);
                                    e9.push(Yi(i9, s4, a2 && a2[t13], r2));
                                }
                            }
                            return e9;
                        })(e8, r1, t12, a1.isIndexable));
                        qi(e8, r1) && (r1 = Yi(r1, o5, s3 && s3[e8], a1));
                        return r1;
                    })(t11, e7, i5)
                )
            ,
            getOwnPropertyDescriptor: (e7, i5)=>e7._descriptors.allKeys ? Reflect.has(t10, i5) ? {
                    enumerable: !0,
                    configurable: !0
                } : void 0 : Reflect.getOwnPropertyDescriptor(t10, i5)
            ,
            getPrototypeOf: ()=>Reflect.getPrototypeOf(t10)
            ,
            has: (e7, i5)=>Reflect.has(t10, i5)
            ,
            ownKeys: ()=>Reflect.ownKeys(t10)
            ,
            set: (e7, i5, n6)=>(t10[i5] = n6, delete e7[i5], !0)
        });
    }
    function Ui(t10, e6 = {
        scriptable: !0,
        indexable: !0
    }) {
        const { _scriptable: i4 = e6.scriptable , _indexable: n5 = e6.indexable , _allKeys: o4 = e6.allKeys  } = t10;
        return {
            allKeys: o4,
            scriptable: i4,
            indexable: n5,
            isScriptable: dt(i4) ? i4 : ()=>i4
            ,
            isIndexable: dt(n5) ? n5 : ()=>n5
        };
    }
    const Xi = (t10, e6)=>t10 ? t10 + ct(e6) : e6
    , qi = (t10, e6)=>U(e6) && "adapters" !== t10
    ;
    function Ki(t10, e6, i4) {
        let n5 = t10[e6];
        return ht(n5) || (n5 = i4(), ht(n5) && (t10[e6] = n5)), n5;
    }
    function Gi(t10, e6, i4) {
        return dt(t10) ? t10(e6, i4) : t10;
    }
    const Zi = (t10, e6)=>!0 === t10 ? e6 : "string" == typeof t10 ? lt(e6, t10) : void 0
    ;
    function Qi(t10, e6, i4, n5) {
        for (const o4 of e6){
            const e7 = Zi(i4, o4);
            if (e7) {
                t10.add(e7);
                const o5 = Gi(e7._fallback, i4, e7);
                if (ht(o5) && o5 !== i4 && o5 !== n5) return o5;
            } else if (!1 === e7 && ht(n5) && i4 !== n5) return null;
        }
        return !1;
    }
    function Ji(t10, e6, i4, n5) {
        const o4 = e6._rootScopes, s3 = Gi(e6._fallback, i4, n5), a1 = [
            ...t10,
            ...o4
        ], r1 = new Set, l1 = t10[0];
        U(l1) && !(i4 in l1) && r1.add(l1[i4] = {
        }), r1.add(n5);
        let c1 = tn(r1, a1, i4, s3 || i4);
        return null !== c1 && (!ht(s3) || s3 === i4 || (c1 = tn(r1, a1, s3, c1), null !== c1)) && $i([
            ...r1
        ], [
            ""
        ], o4, s3);
    }
    function tn(t10, e6, i4, n5) {
        for(; i4;)i4 = Qi(t10, e6, i4, n5);
        return i4;
    }
    function en(t10, e6) {
        for (const i4 of e6){
            if (!i4) continue;
            const e7 = i4[t10];
            if (ht(e7)) return e7;
        }
    }
    function nn(t10) {
        let e6 = t10._keys;
        return e6 || (e6 = t10._keys = (function(t11) {
            const e7 = new Set;
            for (const i4 of t11)for (const t12 of Object.keys(i4).filter((t13)=>!t13.startsWith("_")
            ))e7.add(t12);
            return [
                ...e7
            ];
        })(t10._scopes)), e6;
    }
    const on = Number.EPSILON || 0.00000000000001, sn = (t10, e6)=>e6 < t10.length && !t10[e6].skip && t10[e6]
    ;
    function an(t10, e6, i4, n5) {
        const o4 = t10.skip ? e6 : t10, s3 = e6, a1 = i4.skip ? e6 : i4, r1 = zt(s3, o4), l1 = zt(a1, s3);
        let c1 = r1 / (r1 + l1), h1 = l1 / (r1 + l1);
        c1 = isNaN(c1) ? 0 : c1, h1 = isNaN(h1) ? 0 : h1;
        const d1 = n5 * c1, u1 = n5 * h1;
        return {
            previous: {
                x: s3.x - d1 * (a1.x - o4.x),
                y: s3.y - d1 * (a1.y - o4.y)
            },
            next: {
                x: s3.x + u1 * (a1.x - o4.x),
                y: s3.y + u1 * (a1.y - o4.y)
            }
        };
    }
    function rn(t10) {
        const e6 = t10.length, i4 = Array(e6).fill(0), n5 = Array(e6);
        let o4, s3, a1, r1 = sn(t10, 0);
        for(o4 = 0; o4 < e6; ++o4)if (s3 = a1, a1 = r1, r1 = sn(t10, o4 + 1), a1) {
            if (r1) {
                const t11 = r1.x - a1.x;
                i4[o4] = 0 !== t11 ? (r1.y - a1.y) / t11 : 0;
            }
            n5[o4] = s3 ? r1 ? Pt(i4[o4 - 1]) !== Pt(i4[o4]) ? 0 : (i4[o4 - 1] + i4[o4]) / 2 : i4[o4 - 1] : i4[o4];
        }
        !function(t11, e7, i5) {
            const n6 = t11.length;
            let o5, s4, a2, r2, l1, c1 = sn(t11, 0);
            for(let h1 = 0; h1 < n6 - 1; ++h1)l1 = c1, c1 = sn(t11, h1 + 1), l1 && c1 && (Ot(e7[h1], 0, on) ? i5[h1] = i5[h1 + 1] = 0 : (o5 = i5[h1] / e7[h1], s4 = i5[h1 + 1] / e7[h1], r2 = Math.pow(o5, 2) + Math.pow(s4, 2), r2 <= 9 || (a2 = 3 / Math.sqrt(r2), i5[h1] = o5 * a2 * e7[h1], i5[h1 + 1] = s4 * a2 * e7[h1])));
        }(t10, i4, n5), (function(t11, e7) {
            const i5 = t11.length;
            let n6, o5, s4, a2 = sn(t11, 0);
            for(let r2 = 0; r2 < i5; ++r2){
                if (o5 = s4, s4 = a2, a2 = sn(t11, r2 + 1), !s4) continue;
                const { x: i6 , y: l1  } = s4;
                o5 && (n6 = (i6 - o5.x) / 3, s4.cp1x = i6 - n6, s4.cp1y = l1 - n6 * e7[r2]), a2 && (n6 = (a2.x - i6) / 3, s4.cp2x = i6 + n6, s4.cp2y = l1 + n6 * e7[r2]);
            }
        })(t10, n5);
    }
    function ln(t10, e6, i4) {
        return Math.max(Math.min(t10, i4), e6);
    }
    function cn(t10, e6, i4, n5) {
        let o4, s3, a1, r1;
        if (e6.spanGaps && (t10 = t10.filter((t11)=>!t11.skip
        )), "monotone" === e6.cubicInterpolationMode) rn(t10);
        else {
            let i5 = n5 ? t10[t10.length - 1] : t10[0];
            for(o4 = 0, s3 = t10.length; o4 < s3; ++o4)a1 = t10[o4], r1 = an(i5, a1, t10[Math.min(o4 + 1, s3 - (n5 ? 0 : 1)) % s3], e6.tension), a1.cp1x = r1.previous.x, a1.cp1y = r1.previous.y, a1.cp2x = r1.next.x, a1.cp2y = r1.next.y, i5 = a1;
        }
        e6.capBezierPoints && (function(t11, e7) {
            let i5, n6, o5, s4, a2, r2 = Kt(t11[0], e7);
            for(i5 = 0, n6 = t11.length; i5 < n6; ++i5)a2 = s4, s4 = r2, r2 = i5 < n6 - 1 && Kt(t11[i5 + 1], e7), s4 && (o5 = t11[i5], a2 && (o5.cp1x = ln(o5.cp1x, e7.left, e7.right), o5.cp1y = ln(o5.cp1y, e7.top, e7.bottom)), r2 && (o5.cp2x = ln(o5.cp2x, e7.left, e7.right), o5.cp2y = ln(o5.cp2y, e7.top, e7.bottom)));
        })(t10, i4);
    }
    function hn(t10, e6, i4, n5) {
        return {
            x: t10.x + i4 * (e6.x - t10.x),
            y: t10.y + i4 * (e6.y - t10.y)
        };
    }
    function dn(t10, e6, i4, n5) {
        return {
            x: t10.x + i4 * (e6.x - t10.x),
            y: "middle" === n5 ? i4 < 0.5 ? t10.y : e6.y : "after" === n5 ? i4 < 1 ? t10.y : e6.y : i4 > 0 ? e6.y : t10.y
        };
    }
    function un(t10, e6, i4, n5) {
        const o4 = {
            x: t10.cp2x,
            y: t10.cp2y
        }, s3 = {
            x: e6.cp1x,
            y: e6.cp1y
        }, a1 = hn(t10, o4, i4), r1 = hn(o4, s3, i4), l1 = hn(s3, e6, i4), c1 = hn(a1, r1, i4), h1 = hn(r1, l1, i4);
        return hn(c1, h1, i4);
    }
    function fn(t10, e6, i4) {
        return t10 ? (function(t11, e7) {
            return {
                x: (i5)=>t11 + t11 + e7 - i5
                ,
                setWidth (t) {
                    e7 = t;
                },
                textAlign: (t12)=>"center" === t12 ? t12 : "right" === t12 ? "left" : "right"
                ,
                xPlus: (t12, e8)=>t12 - e8
                ,
                leftForLtr: (t12, e8)=>t12 - e8
            };
        })(e6, i4) : {
            x: (t11)=>t11
            ,
            setWidth (t) {
            },
            textAlign: (t11)=>t11
            ,
            xPlus: (t11, e7)=>t11 + e7
            ,
            leftForLtr: (t11, e7)=>t11
        };
    }
    function gn(t10, e6) {
        let i4, n5;
        "ltr" !== e6 && "rtl" !== e6 || (i4 = t10.canvas.style, n5 = [
            i4.getPropertyValue("direction"),
            i4.getPropertyPriority("direction")
        ], i4.setProperty("direction", e6, "important"), t10.prevTextDirection = n5);
    }
    function pn(t10, e6) {
        (void 0) !== e6 && (delete t10.prevTextDirection, t10.canvas.style.setProperty("direction", e6[0], e6[1]));
    }
    function mn(t10) {
        return "angle" === t10 ? {
            between: Wt,
            compare: Vt,
            normalize: Bt
        } : {
            between: (t11, e6, i4)=>t11 >= e6 && t11 <= i4
            ,
            compare: (t11, e6)=>t11 - e6
            ,
            normalize: (t11)=>t11
        };
    }
    function xn(t10, e6, i4, n5) {
        return {
            start: t10 % n5,
            end: e6 % n5,
            loop: i4 && (e6 - t10 + 1) % n5 == 0
        };
    }
    function bn(t10, e6, i4) {
        if (!i4) return [
            t10
        ];
        const { property: n5 , start: o4 , end: s3  } = i4, a1 = e6.length, { compare: r1 , between: l1 , normalize: c1  } = mn(n5), { start: h1 , end: d1 , loop: u1  } = function(t11, e7, i5) {
            const { property: n6 , start: o5 , end: s4  } = i5, { between: a2 , normalize: r2  } = mn(n6), l2 = e7.length;
            let c2, h2, { start: d2 , end: u2 , loop: f1  } = t11;
            if (f1) {
                for(d2 += l2, u2 += l2, c2 = 0, h2 = l2; c2 < h2 && a2(r2(e7[d2 % l2][n6]), o5, s4); ++c2)d2--, u2--;
                d2 %= l2, u2 %= l2;
            }
            return u2 < d2 && (u2 += l2), {
                start: d2,
                end: u2,
                loop: f1
            };
        }(t10, e6, i4), f1 = [];
        let g1, p1, m1, x1 = !1, b1 = null;
        const _1 = ()=>x1 || l1(o4, m1, g1) && 0 !== r1(o4, m1)
        , y1 = ()=>!x1 || 0 === r1(s3, g1) || l1(s3, m1, g1)
        ;
        for(let t11 = h1, i5 = h1; t11 <= d1; ++t11)p1 = e6[t11 % a1], p1.skip || (g1 = c1(p1[n5]), x1 = l1(g1, o4, s3), null === b1 && _1() && (b1 = 0 === r1(g1, o4) ? t11 : i5), null !== b1 && y1() && (f1.push(xn(b1, t11, u1, a1)), b1 = null), i5 = t11, m1 = g1);
        return null !== b1 && f1.push(xn(b1, d1, u1, a1)), f1;
    }
    function _n(t10, e6) {
        const i4 = [], n5 = t10.segments;
        for(let o4 = 0; o4 < n5.length; o4++){
            const s3 = bn(n5[o4], t10.points, e6);
            s3.length && i4.push(...s3);
        }
        return i4;
    }
    function yn(t10) {
        const e6 = t10.points, i4 = t10.options.spanGaps, n5 = e6.length;
        if (!n5) return [];
        const o4 = !!t10._loop, { start: s3 , end: a1  } = function(t11, e7, i5, n6) {
            let o5 = 0, s4 = e7 - 1;
            if (i5 && !n6) for(; o5 < e7 && !t11[o5].skip;)o5++;
            for(; o5 < e7 && t11[o5].skip;)o5++;
            for(o5 %= e7, i5 && (s4 += o5); s4 > o5 && t11[s4 % e7].skip;)s4--;
            return s4 %= e7, {
                start: o5,
                end: s4
            };
        }(e6, n5, o4, i4);
        if (!0 === i4) return [
            {
                start: s3,
                end: a1,
                loop: o4
            }
        ];
        return (function(t11, e7, i5, n6) {
            const o5 = t11.length, s4 = [];
            let a2, r1 = e7, l1 = t11[e7];
            for(a2 = e7 + 1; a2 <= i5; ++a2){
                const i6 = t11[a2 % o5];
                i6.skip || i6.stop ? l1.skip || (n6 = !1, s4.push({
                    start: e7 % o5,
                    end: (a2 - 1) % o5,
                    loop: n6
                }), e7 = r1 = i6.stop ? a2 : null) : (r1 = a2, l1.skip && (e7 = a2)), l1 = i6;
            }
            return null !== r1 && s4.push({
                start: e7 % o5,
                end: r1 % o5,
                loop: n6
            }), s4;
        })(e6, s3, a1 < s3 ? a1 + n5 : a1, !!t10._fullLoop && 0 === s3 && a1 === n5 - 1);
    }
    var vn = Object.freeze({
        __proto__: null,
        easingEffects: fi,
        color: W,
        getHoverColor: H,
        noop: N,
        uid: j,
        isNullOrUndef: $,
        isArray: Y,
        isObject: U,
        isFinite: X,
        finiteOrDefault: q,
        valueOrDefault: K,
        toPercentage: G,
        toDimension: Z,
        callback: Q,
        each: J,
        _elementsEqual: tt,
        clone: et,
        _merger: nt,
        merge: ot,
        mergeIf: st,
        _mergerIf: at,
        _deprecated: function(t10, e6, i4, n5) {
            (void 0) !== e6 && console.warn(t10 + ': "' + i4 + '" is deprecated. Please use "' + n5 + '" instead');
        },
        resolveObjectKey: lt,
        _capitalize: ct,
        defined: ht,
        isFunction: dt,
        toFontString: jt,
        _measureText: $t,
        _longestText: Yt,
        _alignPixel: Ut,
        clearCanvas: Xt,
        drawPoint: qt,
        _isPointInArea: Kt,
        clipArea: Gt,
        unclipArea: Zt,
        _steppedLineTo: Qt,
        _bezierCurveTo: Jt,
        renderText: te,
        _lookup: ee,
        _lookupByKey: ie,
        _rlookupByKey: ne,
        _filterBetween: oe,
        listenArrayEvents: ae,
        unlistenArrayEvents: re,
        _arrayUnique: le,
        _createResolver: $i,
        _attachContext: Yi,
        _descriptors: Ui,
        splineCurve: an,
        splineCurveMonotone: rn,
        _updateBezierControlPoints: cn,
        _getParentNode: ce,
        getStyle: ue,
        getRelativePosition: pe,
        getMaximumSize: xe,
        retinaScale: be,
        supportsEventListenerOptions: _e,
        readUsedSize: ye,
        fontString: function(t10, e6, i4) {
            return e6 + " " + t10 + "px " + i4;
        },
        requestAnimFrame: t1,
        throttled: e1,
        debounce: i1,
        _toLeftRightCenter: n1,
        _alignStartEnd: o5,
        _textX: s4,
        _pointInLine: hn,
        _steppedInterpolation: dn,
        _bezierInterpolation: un,
        formatNumber: Li,
        toLineHeight: Ae,
        toTRBL: Te,
        toTRBLCorners: Le,
        toPadding: Re,
        toFont: Ee,
        resolve: Ie,
        _addGrace: Fe,
        PI: xt,
        TAU: bt,
        PITAU: _t,
        INFINITY: yt,
        RAD_PER_DEG: vt,
        HALF_PI: Mt,
        QUARTER_PI: wt,
        TWO_THIRDS_PI: kt,
        log10: St,
        sign: Pt,
        niceNum: Dt,
        _factorize: Ct,
        isNumber: At,
        almostEquals: Ot,
        almostWhole: Tt,
        _setMinAndMaxByKey: Lt,
        toRadians: Rt,
        toDegrees: Et,
        _decimalPlaces: It,
        getAngleFromPoint: Ft,
        distanceBetweenPoints: zt,
        _angleDiff: Vt,
        _normalizeAngle: Bt,
        _angleBetween: Wt,
        _limitValue: Ht,
        _int16Range: Nt,
        getRtlAdapter: fn,
        overrideTextDirection: gn,
        restoreTextDirection: pn,
        _boundSegment: bn,
        _boundSegments: _n,
        _computeSegments: yn
    });
    class Mn {
        constructor(t10, e6, i4){
            this.type = t10, this.scope = e6, this.override = i4, this.items = Object.create(null);
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
        register(t) {
            const e7 = this, i5 = Object.getPrototypeOf(t);
            let n5;
            (function(t11) {
                return "id" in t11 && "defaults" in t11;
            })(i5) && (n5 = e7.register(i5));
            const o4 = e7.items, s3 = t.id, a1 = e7.scope + "." + s3;
            if (!s3) throw new Error("class does not have id: " + t);
            return s3 in o4 || (o4[s3] = t, (function(t11, e8, i6) {
                const n6 = ot(Object.create(null), [
                    i6 ? mt.get(i6) : {
                    },
                    mt.get(e8),
                    t11.defaults
                ]);
                mt.set(e8, n6), t11.defaultRoutes && (function(t12, e9) {
                    Object.keys(e9).forEach((i7)=>{
                        const n7 = i7.split("."), o5 = n7.pop(), s4 = [
                            t12
                        ].concat(n7).join("."), a2 = e9[i7].split("."), r1 = a2.pop(), l1 = a2.join(".");
                        mt.route(s4, o5, l1, r1);
                    });
                })(e8, t11.defaultRoutes);
                t11.descriptors && mt.describe(e8, t11.descriptors);
            })(t, a1, n5), e7.override && mt.override(t.id, t.overrides)), a1;
        }
        get(t) {
            return this.items[t];
        }
        unregister(t) {
            const e7 = this.items, i5 = t.id, n5 = this.scope;
            i5 in e7 && delete e7[i5], n5 && i5 in mt[n5] && (delete mt[n5][i5], this.override && delete ut[i5]);
        }
    }
    var wn = new class {
        constructor(){
            this.controllers = new Mn(Ai, "datasets", !0), this.elements = new Mn(Oi, "elements"), this.plugins = new Mn(Object, "plugins"), this.scales = new Mn(ji, "scales"), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
        add(...t) {
            this._each("register", t);
        }
        remove(...t) {
            this._each("unregister", t);
        }
        addControllers(...t) {
            this._each("register", t, this.controllers);
        }
        addElements(...t) {
            this._each("register", t, this.elements);
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins);
        }
        addScales(...t) {
            this._each("register", t, this.scales);
        }
        getController(t) {
            return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
            return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
            return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales);
        }
        _each(t, e, i) {
            const n5 = this;
            [
                ...e
            ].forEach((e7)=>{
                const o4 = i || n5._getRegistryForType(e7);
                i || o4.isForType(e7) || o4 === n5.plugins && e7.id ? n5._exec(t, o4, e7) : J(e7, (e8)=>{
                    const o5 = i || n5._getRegistryForType(e8);
                    n5._exec(t, o5, e8);
                });
            });
        }
        _exec(t, e, i) {
            const n5 = ct(t);
            Q(i["before" + n5], [], i), e[t](i), Q(i["after" + n5], [], i);
        }
        _getRegistryForType(t) {
            for(let e7 = 0; e7 < this._typedRegistries.length; e7++){
                const i5 = this._typedRegistries[e7];
                if (i5.isForType(t)) return i5;
            }
            return this.plugins;
        }
        _get(t, e, i) {
            const n5 = e.get(t);
            if ((void 0) === n5) throw new Error('"' + t + '" is not a registered ' + i + ".");
            return n5;
        }
    };
    class kn {
        constructor(){
            this._init = [];
        }
        notify(t, e, i) {
            const n5 = this;
            "beforeInit" === e && (n5._init = n5._createDescriptors(t, !0), n5._notify(n5._init, t, "install"));
            const o4 = n5._descriptors(t), s3 = n5._notify(o4, t, e, i);
            return "destroy" === e && (n5._notify(o4, t, "stop"), n5._notify(n5._init, t, "uninstall")), s3;
        }
        _notify(t, e, i, n) {
            n = n || {
            };
            for (const o4 of t){
                const t11 = o4.plugin;
                if (!1 === Q(t11[i], [
                    e,
                    n,
                    o4.options
                ], t11) && n.cancelable) return !1;
            }
            return !0;
        }
        invalidate() {
            $(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(t) {
            if (this._cache) return this._cache;
            const e7 = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e7;
        }
        _createDescriptors(t, e) {
            const i5 = t && t.config, n5 = K(i5.options && i5.options.plugins, {
            }), o4 = function(t11) {
                const e7 = [], i6 = Object.keys(wn.plugins.items);
                for(let t12 = 0; t12 < i6.length; t12++)e7.push(wn.getPlugin(i6[t12]));
                const n6 = t11.plugins || [];
                for(let t13 = 0; t13 < n6.length; t13++){
                    const i7 = n6[t13];
                    -1 === e7.indexOf(i7) && e7.push(i7);
                }
                return e7;
            }(i5);
            return !1 !== n5 || e ? (function(t11, e7, i6, n6) {
                const o5 = [], s3 = t11.getContext();
                for(let a1 = 0; a1 < e7.length; a1++){
                    const r1 = e7[a1], l1 = Sn(i6[r1.id], n6);
                    null !== l1 && o5.push({
                        plugin: r1,
                        options: Pn(t11.config, r1, l1, s3)
                    });
                }
                return o5;
            })(t, o4, n5, e) : [];
        }
        _notifyStateChanges(t) {
            const e7 = this._oldCache || [], i5 = this._cache, n5 = (t11, e8)=>t11.filter((t12)=>!e8.some((e9)=>t12.plugin.id === e9.plugin.id
                    )
                )
            ;
            this._notify(n5(e7, i5), t, "stop"), this._notify(n5(i5, e7), t, "start");
        }
    }
    function Sn(t11, e7) {
        return e7 || !1 !== t11 ? !0 === t11 ? {
        } : t11 : null;
    }
    function Pn(t11, e7, i5, n5) {
        const o4 = t11.pluginScopeKeys(e7), s3 = t11.getOptionScopes(i5, o4);
        return t11.createResolver(s3, n5, [
            ""
        ], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }
    function Dn(t11, e7) {
        const i5 = mt.datasets[t11] || {
        };
        return ((e7.datasets || {
        })[t11] || {
        }).indexAxis || e7.indexAxis || i5.indexAxis || "x";
    }
    function Cn(t11, e7) {
        var i5;
        return "x" === t11 || "y" === t11 ? t11 : e7.axis || ("top" === (i5 = e7.position) || "bottom" === i5 ? "x" : "left" === i5 || "right" === i5 ? "y" : void 0) || t11.charAt(0).toLowerCase();
    }
    function An(t11) {
        const e7 = t11.options || (t11.options = {
        });
        e7.plugins = K(e7.plugins, {
        }), e7.scales = (function(t12, e8) {
            const i5 = ut[t12.type] || {
                scales: {
                }
            }, n5 = e8.scales || {
            }, o4 = Dn(t12.type, e8), s3 = Object.create(null), a1 = Object.create(null);
            return Object.keys(n5).forEach((t13)=>{
                const e9 = n5[t13], r1 = Cn(t13, e9), l1 = function(t14, e10) {
                    return t14 === e10 ? "_index_" : "_value_";
                }(r1, o4), c1 = i5.scales || {
                };
                s3[r1] = s3[r1] || t13, a1[t13] = st(Object.create(null), [
                    {
                        axis: r1
                    },
                    e9,
                    c1[r1],
                    c1[l1]
                ]);
            }), t12.data.datasets.forEach((i6)=>{
                const o5 = i6.type || t12.type, r1 = i6.indexAxis || Dn(o5, e8), l1 = (ut[o5] || {
                }).scales || {
                };
                Object.keys(l1).forEach((t13)=>{
                    const e9 = function(t14, e10) {
                        let i7 = t14;
                        return "_index_" === t14 ? i7 = e10 : "_value_" === t14 && (i7 = "x" === e10 ? "y" : "x"), i7;
                    }(t13, r1), o6 = i6[e9 + "AxisID"] || s3[e9] || e9;
                    a1[o6] = a1[o6] || Object.create(null), st(a1[o6], [
                        {
                            axis: e9
                        },
                        n5[o6],
                        l1[t13]
                    ]);
                });
            }), Object.keys(a1).forEach((t13)=>{
                const e9 = a1[t13];
                st(e9, [
                    mt.scales[e9.type],
                    mt.scale
                ]);
            }), a1;
        })(t11, e7);
    }
    const On = new Map, Tn = new Set;
    function Ln(t11, e7) {
        let i5 = On.get(t11);
        return i5 || (i5 = e7(), On.set(t11, i5), Tn.add(i5)), i5;
    }
    const Rn = (t11, e7, i5)=>{
        const n5 = lt(e7, i5);
        (void 0) !== n5 && t11.add(n5);
    };
    class En {
        constructor(t11){
            this._config = (function(t12) {
                const e7 = (t12 = t12 || {
                }).data = t12.data || {
                    datasets: [],
                    labels: []
                };
                return e7.datasets = e7.datasets || [], e7.labels = e7.labels || [], An(t12), t12;
            })(t11), this._scopeCache = new Map, this._resolverCache = new Map;
        }
        get type() {
            return this._config.type;
        }
        set type(t) {
            this._config.type = t;
        }
        get data() {
            return this._config.data;
        }
        set data(t) {
            this._config.data = t;
        }
        get options() {
            return this._config.options;
        }
        set options(t) {
            this._config.options = t;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const t12 = this._config;
            this.clearCache(), An(t12);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
            return Ln(t, ()=>[
                    [
                        "datasets." + t,
                        ""
                    ]
                ]
            );
        }
        datasetAnimationScopeKeys(t, e) {
            return Ln(`${t}.transition.${e}`, ()=>[
                    [
                        `datasets.${t}.transitions.${e}`,
                        "transitions." + e
                    ],
                    [
                        "datasets." + t,
                        ""
                    ]
                ]
            );
        }
        datasetElementScopeKeys(t, e) {
            return Ln(`${t}-${e}`, ()=>[
                    [
                        `datasets.${t}.elements.${e}`,
                        "datasets." + t,
                        "elements." + e,
                        ""
                    ]
                ]
            );
        }
        pluginScopeKeys(t) {
            const e7 = t.id;
            return Ln(`${this.type}-plugin-${e7}`, ()=>[
                    [
                        "plugins." + e7,
                        ...t.additionalOptionScopes || []
                    ]
                ]
            );
        }
        _cachedScopes(t, e) {
            const i5 = this._scopeCache;
            let n5 = i5.get(t);
            return n5 && !e || (n5 = new Map, i5.set(t, n5)), n5;
        }
        getOptionScopes(t, e, i) {
            const { options: n5 , type: o4  } = this, s3 = this._cachedScopes(t, i), a1 = s3.get(e);
            if (a1) return a1;
            const r1 = new Set;
            e.forEach((e7)=>{
                t && (r1.add(t), e7.forEach((e8)=>Rn(r1, t, e8)
                )), e7.forEach((t12)=>Rn(r1, n5, t12)
                ), e7.forEach((t12)=>Rn(r1, ut[o4] || {
                    }, t12)
                ), e7.forEach((t12)=>Rn(r1, mt, t12)
                ), e7.forEach((t12)=>Rn(r1, ft, t12)
                );
            });
            const l1 = [
                ...r1
            ];
            return Tn.has(e) && s3.set(e, l1), l1;
        }
        chartOptionScopes() {
            const { options: t12 , type: e7  } = this;
            return [
                t12,
                ut[e7] || {
                },
                mt.datasets[e7] || {
                },
                {
                    type: e7
                },
                mt,
                ft
            ];
        }
        resolveNamedOptions(t, e, i, n = [
            ""
        ]) {
            const o4 = {
                $shared: !0
            }, { resolver: s3 , subPrefixes: a1  } = In(this._resolverCache, t, n);
            let r1 = s3;
            if ((function(t12, e7) {
                const { isScriptable: i5 , isIndexable: n5  } = Ui(t12);
                for (const o5 of e7)if (i5(o5) && dt(t12[o5]) || n5(o5) && Y(t12[o5])) return !0;
                return !1;
            })(s3, e)) {
                o4.$shared = !1;
                r1 = Yi(s3, i = dt(i) ? i() : i, this.createResolver(t, i, a1));
            }
            for (const t12 of e)o4[t12] = r1[t12];
            return o4;
        }
        createResolver(t, e, i = [
            ""
        ], n) {
            const { resolver: o4  } = In(this._resolverCache, t, i);
            return U(e) ? Yi(o4, e, void 0, n) : o4;
        }
    }
    function In(t12, e7, i5) {
        let n5 = t12.get(e7);
        n5 || (n5 = new Map, t12.set(e7, n5));
        const o4 = i5.join();
        let s3 = n5.get(o4);
        if (!s3) s3 = {
            resolver: $i(e7, i5),
            subPrefixes: i5.filter((t13)=>!t13.toLowerCase().includes("hover")
            )
        }, n5.set(o4, s3);
        return s3;
    }
    const Fn = [
        "top",
        "bottom",
        "left",
        "right",
        "chartArea"
    ];
    function zn(t12, e7) {
        return "top" === t12 || "bottom" === t12 || -1 === Fn.indexOf(t12) && "x" === e7;
    }
    function Vn(t12, e7) {
        return function(i5, n5) {
            return i5[t12] === n5[t12] ? i5[e7] - n5[e7] : i5[t12] - n5[t12];
        };
    }
    function Bn(t12) {
        const e7 = t12.chart, i5 = e7.options.animation;
        e7.notifyPlugins("afterRender"), Q(i5 && i5.onComplete, [
            t12
        ], e7);
    }
    function Wn(t12) {
        const e7 = t12.chart, i5 = e7.options.animation;
        Q(i5 && i5.onProgress, [
            t12
        ], e7);
    }
    function Hn() {
        return "undefined" != typeof window && "undefined" != typeof document;
    }
    function Nn(t12) {
        return Hn() && "string" == typeof t12 ? t12 = document.getElementById(t12) : t12 && t12.length && (t12 = t12[0]), t12 && t12.canvas && (t12 = t12.canvas), t12;
    }
    const jn = {
    }, $n = (t12)=>{
        const e7 = Nn(t12);
        return Object.values(jn).filter((t13)=>t13.canvas === e7
        ).pop();
    };
    class Yn {
        constructor(t12, e7){
            const n5 = this;
            this.config = e7 = new En(e7);
            const o4 = Nn(t12), s3 = $n(o4);
            if (s3) throw new Error("Canvas is already in use. Chart with ID '" + s3.id + "' must be destroyed before the canvas can be reused.");
            const r1 = e7.createResolver(e7.chartOptionScopes(), n5.getContext());
            this.platform = n5._initializePlatform(o4, e7);
            const l1 = n5.platform.acquireContext(o4, r1.aspectRatio), c1 = l1 && l1.canvas, h1 = c1 && c1.height, d1 = c1 && c1.width;
            this.id = j(), this.ctx = l1, this.canvas = c1, this.width = d1, this.height = h1, this._options = r1, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {
            }, this._sortedMetasets = [], this.scales = {
            }, this.scale = void 0, this._plugins = new kn, this.$proxies = {
            }, this._hiddenIndices = {
            }, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = i1(()=>this.update("resize")
            , r1.resizeDelay || 0), jn[n5.id] = n5, l1 && c1 ? (a.listen(n5, "complete", Bn), a.listen(n5, "progress", Wn), n5._initialize(), n5.attached && n5.update()) : console.error("Failed to create chart: can't acquire context from the given item");
        }
        get aspectRatio() {
            const { options: { aspectRatio: t13 , maintainAspectRatio: e8  } , width: i5 , height: n6 , _aspectRatio: o5  } = this;
            return $(t13) ? e8 && o5 ? o5 : n6 ? i5 / n6 : null : t13;
        }
        get data() {
            return this.config.data;
        }
        set data(t) {
            this.config.data = t;
        }
        get options() {
            return this._options;
        }
        set options(t) {
            this.config.options = t;
        }
        _initialize() {
            const t13 = this;
            return t13.notifyPlugins("beforeInit"), t13.options.responsive ? t13.resize() : be(t13, t13.options.devicePixelRatio), t13.bindEvents(), t13.notifyPlugins("afterInit"), t13;
        }
        _initializePlatform(t, e) {
            return e.platform ? new e.platform : !Hn() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? new Ke : new li;
        }
        clear() {
            return Xt(this.canvas, this.ctx), this;
        }
        stop() {
            return a.stop(this), this;
        }
        resize(t, e) {
            a.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e);
        }
        _resize(t, e) {
            const i5 = this, n6 = i5.options, o5 = i5.canvas, s4 = n6.maintainAspectRatio && i5.aspectRatio, a1 = i5.platform.getMaximumSize(o5, t, e, s4), r2 = i5.currentDevicePixelRatio, l2 = n6.devicePixelRatio || i5.platform.getDevicePixelRatio();
            i5.width === a1.width && i5.height === a1.height && r2 === l2 || (i5.width = a1.width, i5.height = a1.height, i5._aspectRatio = i5.aspectRatio, be(i5, l2, !0), i5.notifyPlugins("resize", {
                size: a1
            }), Q(n6.onResize, [
                i5,
                a1
            ], i5), i5.attached && i5._doResize() && i5.render());
        }
        ensureScalesHaveIDs() {
            J(this.options.scales || {
            }, (t13, e8)=>{
                t13.id = e8;
            });
        }
        buildOrUpdateScales() {
            const t13 = this, e8 = t13.options, i5 = e8.scales, n6 = t13.scales, o5 = Object.keys(n6).reduce((t14, e9)=>(t14[e9] = !1, t14)
            , {
            });
            let s4 = [];
            i5 && (s4 = s4.concat(Object.keys(i5).map((t14)=>{
                const e9 = i5[t14], n7 = Cn(t14, e9), o6 = "r" === n7, s5 = "x" === n7;
                return {
                    options: e9,
                    dposition: o6 ? "chartArea" : s5 ? "bottom" : "left",
                    dtype: o6 ? "radialLinear" : s5 ? "category" : "linear"
                };
            }))), J(s4, (i6)=>{
                const s5 = i6.options, a1 = s5.id, r2 = Cn(a1, s5), l2 = K(s5.type, i6.dtype);
                (void 0) !== s5.position && zn(s5.position, r2) === zn(i6.dposition) || (s5.position = i6.dposition), o5[a1] = !0;
                let c2 = null;
                if (a1 in n6 && n6[a1].type === l2) c2 = n6[a1];
                else c2 = new (wn.getScale(l2))({
                    id: a1,
                    type: l2,
                    ctx: t13.ctx,
                    chart: t13
                }), n6[c2.id] = c2;
                c2.init(s5, e8);
            }), J(o5, (t14, e9)=>{
                t14 || delete n6[e9];
            }), J(n6, (e9)=>{
                Xe.configure(t13, e9, e9.options), Xe.addBox(t13, e9);
            });
        }
        _updateMetasetIndex(t, e) {
            const i5 = this._metasets, n6 = t.index;
            n6 !== e && (i5[n6] = i5[e], i5[e] = t, t.index = e);
        }
        _updateMetasets() {
            const t13 = this, e8 = t13._metasets, i5 = t13.data.datasets.length, n6 = e8.length;
            if (n6 > i5) {
                for(let e9 = i5; e9 < n6; ++e9)t13._destroyDatasetMeta(e9);
                e8.splice(i5, n6 - i5);
            }
            t13._sortedMetasets = e8.slice(0).sort(Vn("order", "index"));
        }
        _removeUnreferencedMetasets() {
            const t13 = this, { _metasets: e8 , data: { datasets: i5  }  } = t13;
            e8.length > i5.length && delete t13._stacks, e8.forEach((e9, n6)=>{
                0 === i5.filter((t14)=>t14 === e9._dataset
                ).length && t13._destroyDatasetMeta(n6);
            });
        }
        buildOrUpdateControllers() {
            const t13 = this, e8 = [], i5 = t13.data.datasets;
            let n6, o5;
            for(t13._removeUnreferencedMetasets(), n6 = 0, o5 = i5.length; n6 < o5; n6++){
                const o6 = i5[n6];
                let s4 = t13.getDatasetMeta(n6);
                const a1 = o6.type || t13.config.type;
                if (s4.type && s4.type !== a1 && (t13._destroyDatasetMeta(n6), s4 = t13.getDatasetMeta(n6)), s4.type = a1, s4.indexAxis = o6.indexAxis || Dn(a1, t13.options), s4.order = o6.order || 0, t13._updateMetasetIndex(s4, n6), s4.label = "" + o6.label, s4.visible = t13.isDatasetVisible(n6), s4.controller) s4.controller.updateIndex(n6), s4.controller.linkScales();
                else {
                    const i6 = wn.getController(a1), { datasetElementType: o7 , dataElementType: r2  } = mt.datasets[a1];
                    Object.assign(i6.prototype, {
                        dataElementType: wn.getElement(r2),
                        datasetElementType: o7 && wn.getElement(o7)
                    }), s4.controller = new i6(t13, n6), e8.push(s4.controller);
                }
            }
            return t13._updateMetasets(), e8;
        }
        _resetElements() {
            const t13 = this;
            J(t13.data.datasets, (e8, i5)=>{
                t13.getDatasetMeta(i5).controller.reset();
            }, t13);
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
            const e8 = this, i5 = e8.config;
            i5.update(), e8._options = i5.createResolver(i5.chartOptionScopes(), e8.getContext()), J(e8.scales, (t13)=>{
                Xe.removeBox(e8, t13);
            });
            const n6 = e8._animationsDisabled = !e8.options.animation;
            if (e8.ensureScalesHaveIDs(), e8.buildOrUpdateScales(), e8._plugins.invalidate(), !1 === e8.notifyPlugins("beforeUpdate", {
                mode: t,
                cancelable: !0
            })) return;
            const o5 = e8.buildOrUpdateControllers();
            e8.notifyPlugins("beforeElementsUpdate");
            let s4 = 0;
            for(let t13 = 0, i6 = e8.data.datasets.length; t13 < i6; t13++){
                const { controller: i6  } = e8.getDatasetMeta(t13), a1 = !n6 && -1 === o5.indexOf(i6);
                i6.buildOrUpdateElements(a1), s4 = Math.max(+i6.getMaxOverflow(), s4);
            }
            e8._minPadding = s4, e8._updateLayout(s4), n6 || J(o5, (t14)=>{
                t14.reset();
            }), e8._updateDatasets(t), e8.notifyPlugins("afterUpdate", {
                mode: t
            }), e8._layers.sort(Vn("z", "_idx")), e8._lastEvent && e8._eventHandler(e8._lastEvent, !0), e8.render();
        }
        _updateLayout(t) {
            const e8 = this;
            if (!1 === e8.notifyPlugins("beforeLayout", {
                cancelable: !0
            })) return;
            Xe.update(e8, e8.width, e8.height, t);
            const i5 = e8.chartArea, n6 = i5.width <= 0 || i5.height <= 0;
            e8._layers = [], J(e8.boxes, (t13)=>{
                n6 && "chartArea" === t13.position || (t13.configure && t13.configure(), e8._layers.push(...t13._layers()));
            }, e8), e8._layers.forEach((t13, e9)=>{
                t13._idx = e9;
            }), e8.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
            const e8 = this, i5 = "function" == typeof t;
            if (!1 !== e8.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0
            })) {
                for(let n6 = 0, o5 = e8.data.datasets.length; n6 < o5; ++n6)e8._updateDataset(n6, i5 ? t({
                    datasetIndex: n6
                }) : t);
                e8.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                });
            }
        }
        _updateDataset(t, e) {
            const i5 = this, n6 = i5.getDatasetMeta(t), o5 = {
                meta: n6,
                index: t,
                mode: e,
                cancelable: !0
            };
            !1 !== i5.notifyPlugins("beforeDatasetUpdate", o5) && (n6.controller._update(e), o5.cancelable = !1, i5.notifyPlugins("afterDatasetUpdate", o5));
        }
        render() {
            const t13 = this;
            !1 !== t13.notifyPlugins("beforeRender", {
                cancelable: !0
            }) && (a.has(t13) ? t13.attached && !a.running(t13) && a.start(t13) : (t13.draw(), Bn({
                chart: t13
            })));
        }
        draw() {
            const t13 = this;
            let e8;
            if (t13._resizeBeforeDraw) {
                const { width: e9 , height: i5  } = t13._resizeBeforeDraw;
                t13._resize(e9, i5), t13._resizeBeforeDraw = null;
            }
            if (t13.clear(), t13.width <= 0 || t13.height <= 0) return;
            if (!1 === t13.notifyPlugins("beforeDraw", {
                cancelable: !0
            })) return;
            const i5 = t13._layers;
            for(e8 = 0; e8 < i5.length && i5[e8].z <= 0; ++e8)i5[e8].draw(t13.chartArea);
            for(t13._drawDatasets(); e8 < i5.length; ++e8)i5[e8].draw(t13.chartArea);
            t13.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
            const e8 = this._sortedMetasets, i5 = [];
            let n6, o5;
            for(n6 = 0, o5 = e8.length; n6 < o5; ++n6){
                const o6 = e8[n6];
                t && !o6.visible || i5.push(o6);
            }
            return i5;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            const t13 = this;
            if (!1 === t13.notifyPlugins("beforeDatasetsDraw", {
                cancelable: !0
            })) return;
            const e8 = t13.getSortedVisibleDatasetMetas();
            for(let i5 = e8.length - 1; i5 >= 0; --i5)t13._drawDataset(e8[i5]);
            t13.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
            const e8 = this, i5 = e8.ctx, n6 = t._clip, o5 = e8.chartArea, s4 = {
                meta: t,
                index: t.index,
                cancelable: !0
            };
            !1 !== e8.notifyPlugins("beforeDatasetDraw", s4) && (Gt(i5, {
                left: !1 === n6.left ? 0 : o5.left - n6.left,
                right: !1 === n6.right ? e8.width : o5.right + n6.right,
                top: !1 === n6.top ? 0 : o5.top - n6.top,
                bottom: !1 === n6.bottom ? e8.height : o5.bottom + n6.bottom
            }), t.controller.draw(), Zt(i5), s4.cancelable = !1, e8.notifyPlugins("afterDatasetDraw", s4));
        }
        getElementsAtEventForMode(t, e, i, n) {
            const o5 = De.modes[e];
            return "function" == typeof o5 ? o5(this, t, i, n) : [];
        }
        getDatasetMeta(t) {
            const e8 = this.data.datasets[t], i5 = this._metasets;
            let n6 = i5.filter((t13)=>t13 && t13._dataset === e8
            ).pop();
            return n6 || (n6 = i5[t] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e8 && e8.order || 0,
                index: t,
                _dataset: e8,
                _parsed: [],
                _sorted: !1
            }), n6;
        }
        getContext() {
            return this.$context || (this.$context = {
                chart: this,
                type: "chart"
            });
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
            const e8 = this.data.datasets[t];
            if (!e8) return !1;
            const i5 = this.getDatasetMeta(t);
            return "boolean" == typeof i5.hidden ? !i5.hidden : !e8.hidden;
        }
        setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t];
        }
        _updateDatasetVisibility(t, e) {
            const i5 = this, n6 = e ? "show" : "hide", o5 = i5.getDatasetMeta(t), s4 = o5.controller._resolveAnimations(void 0, n6);
            i5.setDatasetVisibility(t, e), s4.update(o5, {
                visible: e
            }), i5.update((e8)=>e8.datasetIndex === t ? n6 : void 0
            );
        }
        hide(t) {
            this._updateDatasetVisibility(t, !1);
        }
        show(t) {
            this._updateDatasetVisibility(t, !0);
        }
        _destroyDatasetMeta(t) {
            const e8 = this, i5 = e8._metasets && e8._metasets[t];
            i5 && i5.controller && (i5.controller._destroy(), delete e8._metasets[t]);
        }
        destroy() {
            const t13 = this, { canvas: e8 , ctx: i5  } = t13;
            let n6, o5;
            for(t13.stop(), a.remove(t13), n6 = 0, o5 = t13.data.datasets.length; n6 < o5; ++n6)t13._destroyDatasetMeta(n6);
            t13.config.clearCache(), e8 && (t13.unbindEvents(), Xt(e8, i5), t13.platform.releaseContext(i5), t13.canvas = null, t13.ctx = null), t13.notifyPlugins("destroy"), delete jn[t13.id];
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
        }
        bindEvents() {
            const t13 = this, e8 = t13._listeners, i5 = t13.platform, n6 = (n7, o5)=>{
                i5.addEventListener(t13, n7, o5), e8[n7] = o5;
            }, o5 = (n7, o6)=>{
                e8[n7] && (i5.removeEventListener(t13, n7, o6), delete e8[n7]);
            };
            let s4 = function(e9, i6, n7) {
                e9.offsetX = i6, e9.offsetY = n7, t13._eventHandler(e9);
            };
            if (J(t13.options.events, (t14)=>n6(t14, s4)
            ), t13.options.responsive) {
                let e9;
                s4 = (e10, i6)=>{
                    t13.canvas && t13.resize(e10, i6);
                };
                const a1 = ()=>{
                    o5("attach", a1), t13.attached = !0, t13.resize(), n6("resize", s4), n6("detach", e9);
                };
                e9 = ()=>{
                    t13.attached = !1, o5("resize", s4), n6("attach", a1);
                }, i5.isAttached(t13.canvas) ? a1() : e9();
            } else t13.attached = !0;
        }
        unbindEvents() {
            const t13 = this, e8 = t13._listeners;
            e8 && (delete t13._listeners, J(e8, (e9, i5)=>{
                t13.platform.removeEventListener(t13, i5, e9);
            }));
        }
        updateHoverStyle(t, e, i) {
            const n6 = i ? "set" : "remove";
            let o5, s4, a1, r2;
            for("dataset" === e && (o5 = this.getDatasetMeta(t[0].datasetIndex), o5.controller["_" + n6 + "DatasetHoverStyle"]()), a1 = 0, r2 = t.length; a1 < r2; ++a1){
                s4 = t[a1];
                const e8 = s4 && this.getDatasetMeta(s4.datasetIndex).controller;
                e8 && e8[n6 + "HoverStyle"](s4.element, s4.datasetIndex, s4.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t) {
            const e8 = this, i5 = e8._active || [], n6 = t.map(({ datasetIndex: t13 , index: i6  })=>{
                const n7 = e8.getDatasetMeta(t13);
                if (!n7) throw new Error("No dataset found at index " + t13);
                return {
                    datasetIndex: t13,
                    element: n7.data[i6],
                    index: i6
                };
            });
            !tt(n6, i5) && (e8._active = n6, e8._updateHoverStyles(n6, i5));
        }
        notifyPlugins(t, e) {
            return this._plugins.notify(this, t, e);
        }
        _updateHoverStyles(t, e, i) {
            const n6 = this, o5 = n6.options.hover, s4 = (t13, e8)=>t13.filter((t14)=>!e8.some((e9)=>t14.datasetIndex === e9.datasetIndex && t14.index === e9.index
                    )
                )
            , a1 = s4(e, t), r2 = i ? t : s4(t, e);
            a1.length && n6.updateHoverStyle(a1, o5.mode, !1), r2.length && o5.mode && n6.updateHoverStyle(r2, o5.mode, !0);
        }
        _eventHandler(t, e) {
            const i5 = this, n6 = {
                event: t,
                replay: e,
                cancelable: !0
            };
            if (!1 === i5.notifyPlugins("beforeEvent", n6)) return;
            const o5 = i5._handleEvent(t, e);
            return n6.cancelable = !1, i5.notifyPlugins("afterEvent", n6), (o5 || n6.changed) && i5.render(), i5;
        }
        _handleEvent(t, e) {
            const i5 = this, { _active: n6 = [] , options: o5  } = i5, s4 = o5.hover, a1 = e;
            let r2 = [], l2 = !1, c2 = null;
            return "mouseout" !== t.type && (r2 = i5.getElementsAtEventForMode(t, s4.mode, s4, a1), c2 = "click" === t.type ? i5._lastEvent : t), i5._lastEvent = null, Q(o5.onHover, [
                t,
                r2,
                i5
            ], i5), "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || Kt(t, i5.chartArea, i5._minPadding) && Q(o5.onClick, [
                t,
                r2,
                i5
            ], i5), l2 = !tt(r2, n6), (l2 || e) && (i5._active = r2, i5._updateHoverStyles(r2, n6, e)), i5._lastEvent = c2, l2;
        }
    }
    const Un = ()=>J(Yn.instances, (t13)=>t13._plugins.invalidate()
        )
    , Xn = !0;
    function qn() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
    }
    Object.defineProperties(Yn, {
        defaults: {
            enumerable: Xn,
            value: mt
        },
        instances: {
            enumerable: Xn,
            value: jn
        },
        overrides: {
            enumerable: Xn,
            value: ut
        },
        registry: {
            enumerable: Xn,
            value: wn
        },
        version: {
            enumerable: Xn,
            value: "3.0.2"
        },
        getChart: {
            enumerable: Xn,
            value: $n
        },
        register: {
            enumerable: Xn,
            value: (...t13)=>{
                wn.add(...t13), Un();
            }
        },
        unregister: {
            enumerable: Xn,
            value: (...t13)=>{
                wn.remove(...t13), Un();
            }
        }
    });
    class Kn {
        constructor(t13){
            this.options = t13 || {
            };
        }
        formats() {
            return qn();
        }
        parse(t, e) {
            return qn();
        }
        format(t, e) {
            return qn();
        }
        add(t, e, i) {
            return qn();
        }
        diff(t, e, i) {
            return qn();
        }
        startOf(t, e, i) {
            return qn();
        }
        endOf(t, e) {
            return qn();
        }
    }
    Kn.override = function(t14) {
        Object.assign(Kn.prototype, t14);
    };
    var Gn = {
        _date: Kn
    };
    function Zn(t14) {
        const e8 = function(t15) {
            if (!t15._cache.$bar) {
                const e9 = t15.getMatchingVisibleMetas("bar");
                let i5 = [];
                for(let n6 = 0, o5 = e9.length; n6 < o5; n6++)i5 = i5.concat(e9[n6].controller.getAllParsedValues(t15));
                t15._cache.$bar = le(i5.sort((t16, e10)=>t16 - e10
                ));
            }
            return t15._cache.$bar;
        }(t14);
        let i5, n6, o5, s4, a1 = t14._length;
        const r2 = ()=>{
            a1 = Math.min(a1, i5 && Math.abs(o5 - s4) || a1), s4 = o5;
        };
        for(i5 = 0, n6 = e8.length; i5 < n6; ++i5)o5 = t14.getPixelForValue(e8[i5]), r2();
        for(i5 = 0, n6 = t14.ticks.length; i5 < n6; ++i5)o5 = t14.getPixelForTick(i5), r2();
        return a1;
    }
    function Qn(t14, e8, i5, n6) {
        return Y(t14) ? (function(t15, e9, i6, n7) {
            const o5 = i6.parse(t15[0], n7), s4 = i6.parse(t15[1], n7), a1 = Math.min(o5, s4), r2 = Math.max(o5, s4);
            let l2 = a1, c2 = r2;
            Math.abs(a1) > Math.abs(r2) && (l2 = r2, c2 = a1), e9[i6.axis] = c2, e9._custom = {
                barStart: l2,
                barEnd: c2,
                start: o5,
                end: s4,
                min: a1,
                max: r2
            };
        })(t14, e8, i5, n6) : e8[i5.axis] = i5.parse(t14, n6), e8;
    }
    function Jn(t14, e8, i5, n6) {
        const o5 = t14.iScale, s4 = t14.vScale, a1 = o5.getLabels(), r2 = o5 === s4, l2 = [];
        let c2, h2, d2, u1;
        for(c2 = i5, h2 = i5 + n6; c2 < h2; ++c2)u1 = e8[c2], d2 = {
        }, d2[o5.axis] = r2 || o5.parse(a1[c2], c2), l2.push(Qn(u1, d2, s4, c2));
        return l2;
    }
    function to(t14) {
        return t14 && (void 0) !== t14.barStart && (void 0) !== t14.barEnd;
    }
    class eo extends Ai {
        parsePrimitiveData(t, e, i, n) {
            return Jn(t, e, i, n);
        }
        parseArrayData(t, e, i, n) {
            return Jn(t, e, i, n);
        }
        parseObjectData(t, e, i, n) {
            const { iScale: o5 , vScale: s4  } = t, { xAxisKey: a1 = "x" , yAxisKey: r2 = "y"  } = this._parsing, l2 = "x" === o5.axis ? a1 : r2, c2 = "x" === s4.axis ? a1 : r2, h2 = [];
            let d2, u1, f1, g1;
            for(d2 = i, u1 = i + n; d2 < u1; ++d2)g1 = e[d2], f1 = {
            }, f1[o5.axis] = o5.parse(lt(g1, l2), d2), h2.push(Qn(lt(g1, c2), f1, s4, d2));
            return h2;
        }
        updateRangeFromParsed(t, e, i, n) {
            super.updateRangeFromParsed(t, e, i, n);
            const o5 = i._custom;
            o5 && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o5.min), t.max = Math.max(t.max, o5.max));
        }
        getLabelAndValue(t) {
            const e8 = this._cachedMeta, { iScale: i5 , vScale: n6  } = e8, o5 = this.getParsed(t), s4 = o5._custom, a1 = to(s4) ? "[" + s4.start + ", " + s4.end + "]" : "" + n6.getLabelForValue(o5[n6.axis]);
            return {
                label: "" + i5.getLabelForValue(o5[i5.axis]),
                value: a1
            };
        }
        initialize() {
            const t14 = this;
            t14.enableOptionSharing = !0, super.initialize();
            t14._cachedMeta.stack = t14.getDataset().stack;
        }
        update(t) {
            const e8 = this._cachedMeta;
            this.updateElements(e8.data, 0, e8.data.length, t);
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = "reset" === n, a1 = o5._cachedMeta.vScale, r2 = a1.getBasePixel(), l2 = a1.isHorizontal(), c2 = o5._getRuler(), h2 = o5.resolveDataElementOptions(e, n), d2 = o5.getSharedOptions(h2), u1 = o5.includeOptions(n, d2);
            o5.updateSharedOptions(d2, n, h2);
            for(let a2 = e; a2 < e + i; a2++){
                const e8 = s4 ? {
                    base: r2,
                    head: r2
                } : o5._calculateBarValuePixels(a2), i5 = o5._calculateBarIndexPixels(a2, c2), h3 = {
                    horizontal: l2,
                    base: e8.base,
                    x: l2 ? e8.head : i5.center,
                    y: l2 ? i5.center : e8.head,
                    height: l2 ? i5.size : void 0,
                    width: l2 ? void 0 : i5.size
                };
                u1 && (h3.options = d2 || o5.resolveDataElementOptions(a2, n)), o5.updateElement(t[a2], a2, h3, n);
            }
        }
        _getStacks(t, e) {
            const i5 = this._cachedMeta.iScale, n6 = i5.getMatchingVisibleMetas(this._type), o5 = i5.options.stacked, s4 = n6.length, a1 = [];
            let r2, l2;
            for(r2 = 0; r2 < s4; ++r2){
                if (l2 = n6[r2], (void 0) !== e) {
                    const t14 = l2.controller.getParsed(e)[l2.controller._cachedMeta.vScale.axis];
                    if ($(t14) || isNaN(t14)) continue;
                }
                if ((!1 === o5 || -1 === a1.indexOf(l2.stack) || (void 0) === o5 && (void 0) === l2.stack) && a1.push(l2.stack), l2.index === t) break;
            }
            return a1.length || a1.push(void 0), a1;
        }
        _getStackCount(t) {
            return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e) {
            const i5 = this._getStacks(t), n6 = (void 0) !== e ? i5.indexOf(e) : -1;
            return -1 === n6 ? i5.length - 1 : n6;
        }
        _getRuler() {
            const t14 = this, e8 = t14.options, i5 = t14._cachedMeta, n6 = i5.iScale, o5 = [];
            let s4, a1;
            for(s4 = 0, a1 = i5.data.length; s4 < a1; ++s4)o5.push(n6.getPixelForValue(t14.getParsed(s4)[n6.axis], s4));
            const r2 = e8.barThickness;
            return {
                min: r2 || Zn(n6),
                pixels: o5,
                start: n6._startPixel,
                end: n6._endPixel,
                stackCount: t14._getStackCount(),
                scale: n6,
                grouped: e8.grouped,
                ratio: r2 ? 1 : e8.categoryPercentage * e8.barPercentage
            };
        }
        _calculateBarValuePixels(t) {
            const e8 = this, { vScale: i5 , _stacked: n6  } = e8._cachedMeta, { base: o5 , minBarLength: s4  } = e8.options, a1 = e8.getParsed(t), r2 = a1._custom, l2 = to(r2);
            let c2, h2, d2 = a1[i5.axis], u1 = 0, f1 = n6 ? e8.applyStack(i5, a1, n6) : d2;
            f1 !== d2 && (u1 = f1 - d2, f1 = d2), l2 && (d2 = r2.barStart, f1 = r2.barEnd - r2.barStart, 0 !== d2 && Pt(d2) !== Pt(r2.barEnd) && (u1 = 0), u1 += d2);
            const g1 = $(o5) || l2 ? u1 : o5;
            let p1 = i5.getPixelForValue(g1);
            c2 = this.chart.getDataVisibility(t) ? i5.getPixelForValue(u1 + f1) : p1, h2 = c2 - p1, (void 0) !== s4 && Math.abs(h2) < s4 && (h2 = h2 < 0 ? -s4 : s4, 0 === d2 && (p1 -= h2 / 2), c2 = p1 + h2);
            const m1 = o5 || 0;
            if (p1 === i5.getPixelForValue(m1)) {
                const t14 = i5.getLineWidthForValue(m1) / 2;
                h2 > 0 ? (p1 += t14, h2 -= t14) : h2 < 0 && (p1 -= t14, h2 += t14);
            }
            return {
                size: h2,
                base: p1,
                head: c2,
                center: c2 + h2 / 2
            };
        }
        _calculateBarIndexPixels(t, e) {
            const i5 = this, n6 = e.scale, o5 = i5.options, s4 = K(o5.maxBarThickness, 1 / 0);
            let a1, r2;
            if (e.grouped) {
                const n7 = o5.skipNull ? i5._getStackCount(t) : e.stackCount, l2 = "flex" === o5.barThickness ? function(t14, e8, i6, n8) {
                    const o6 = e8.pixels, s5 = o6[t14];
                    let a2 = t14 > 0 ? o6[t14 - 1] : null, r3 = t14 < o6.length - 1 ? o6[t14 + 1] : null;
                    const l3 = i6.categoryPercentage;
                    null === a2 && (a2 = s5 - (null === r3 ? e8.end - e8.start : r3 - s5)), null === r3 && (r3 = s5 + s5 - a2);
                    const c2 = s5 - (s5 - Math.min(a2, r3)) / 2 * l3;
                    return {
                        chunk: Math.abs(r3 - a2) / 2 * l3 / n8,
                        ratio: i6.barPercentage,
                        start: c2
                    };
                }(t, e, o5, n7) : function(t14, e8, i6, n8) {
                    const o6 = i6.barThickness;
                    let s5, a2;
                    return $(o6) ? (s5 = e8.min * i6.categoryPercentage, a2 = i6.barPercentage) : (s5 = o6 * n8, a2 = 1), {
                        chunk: s5 / n8,
                        ratio: a2,
                        start: e8.pixels[t14] - s5 / 2
                    };
                }(t, e, o5, n7), c2 = i5._getStackIndex(i5.index, i5._cachedMeta.stack);
                a1 = l2.start + l2.chunk * c2 + l2.chunk / 2, r2 = Math.min(s4, l2.chunk * l2.ratio);
            } else a1 = n6.getPixelForValue(i5.getParsed(t)[n6.axis], t), r2 = Math.min(s4, e.min * e.ratio);
            return {
                base: a1 - r2 / 2,
                head: a1 + r2 / 2,
                center: a1,
                size: r2
            };
        }
        draw() {
            const t14 = this, e8 = t14.chart, i5 = t14._cachedMeta, n6 = i5.vScale, o5 = i5.data, s4 = o5.length;
            let a1 = 0;
            for(Gt(e8.ctx, e8.chartArea); a1 < s4; ++a1)null !== t14.getParsed(a1)[n6.axis] && o5[a1].draw(t14._ctx);
            Zt(e8.ctx);
        }
    }
    eo.id = "bar", eo.defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "base",
                    "width",
                    "height"
                ]
            }
        }
    }, eo.overrides = {
        interaction: {
            mode: "index"
        },
        scales: {
            _index_: {
                type: "category",
                offset: !0,
                grid: {
                    offset: !0
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: !0
            }
        }
    };
    class io extends Ai {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parseObjectData(t, e, i, n) {
            const { xScale: o5 , yScale: s4  } = t, { xAxisKey: a1 = "x" , yAxisKey: r2 = "y"  } = this._parsing, l2 = [];
            let c2, h2, d2;
            for(c2 = i, h2 = i + n; c2 < h2; ++c2)d2 = e[c2], l2.push({
                x: o5.parse(lt(d2, a1), c2),
                y: s4.parse(lt(d2, r2), c2),
                _custom: d2 && d2.r && +d2.r
            });
            return l2;
        }
        getMaxOverflow() {
            const { data: t14 , _parsed: e8  } = this._cachedMeta;
            let i5 = 0;
            for(let n6 = t14.length - 1; n6 >= 0; --n6)i5 = Math.max(i5, t14[n6].size() / 2, e8[n6]._custom);
            return i5 > 0 && i5;
        }
        getLabelAndValue(t) {
            const e8 = this._cachedMeta, { xScale: i5 , yScale: n6  } = e8, o5 = this.getParsed(t), s4 = i5.getLabelForValue(o5.x), a1 = n6.getLabelForValue(o5.y), r2 = o5._custom;
            return {
                label: e8.label,
                value: "(" + s4 + ", " + a1 + (r2 ? ", " + r2 : "") + ")"
            };
        }
        update(t) {
            const e8 = this._cachedMeta.data;
            this.updateElements(e8, 0, e8.length, t);
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = "reset" === n, { xScale: a1 , yScale: r2  } = o5._cachedMeta, l2 = o5.resolveDataElementOptions(e, n), c2 = o5.getSharedOptions(l2), h2 = o5.includeOptions(n, c2);
            for(let l3 = e; l3 < e + i; l3++){
                const e8 = t[l3], i5 = !s4 && o5.getParsed(l3), c3 = s4 ? a1.getPixelForDecimal(0.5) : a1.getPixelForValue(i5.x), d2 = s4 ? r2.getBasePixel() : r2.getPixelForValue(i5.y), u1 = {
                    x: c3,
                    y: d2,
                    skip: isNaN(c3) || isNaN(d2)
                };
                h2 && (u1.options = o5.resolveDataElementOptions(l3, n), s4 && (u1.options.radius = 0)), o5.updateElement(e8, l3, u1, n);
            }
            o5.updateSharedOptions(c2, n, l2);
        }
        resolveDataElementOptions(t, e) {
            const i5 = this.getParsed(t);
            let n6 = super.resolveDataElementOptions(t, e);
            n6.$shared && (n6 = Object.assign({
            }, n6, {
                $shared: !1
            }));
            const o5 = n6.radius;
            return "active" !== e && (n6.radius = 0), n6.radius += K(i5 && i5._custom, o5), n6;
        }
    }
    io.id = "bubble", io.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "borderWidth",
                    "radius"
                ]
            }
        }
    }, io.overrides = {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: ()=>""
                }
            }
        }
    };
    class no extends Ai {
        constructor(t14, e8){
            super(t14, e8), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
        linkScales() {
        }
        parse(t, e) {
            const i5 = this.getDataset().data, n6 = this._cachedMeta;
            let o5, s4;
            for(o5 = t, s4 = t + e; o5 < s4; ++o5)n6._parsed[o5] = +i5[o5];
        }
        _getRotation() {
            return Rt(this.options.rotation - 90);
        }
        _getCircumference() {
            return Rt(this.options.circumference);
        }
        _getRotationExtents() {
            let t15 = bt, e9 = -bt;
            const i5 = this;
            for(let n6 = 0; n6 < i5.chart.data.datasets.length; ++n6)if (i5.chart.isDatasetVisible(n6)) {
                const o5 = i5.chart.getDatasetMeta(n6).controller, s4 = o5._getRotation(), a1 = o5._getCircumference();
                t15 = Math.min(t15, s4), e9 = Math.max(e9, s4 + a1);
            }
            return {
                rotation: t15,
                circumference: e9 - t15
            };
        }
        update(t) {
            const e9 = this, i5 = e9.chart, { chartArea: n6  } = i5, o5 = e9._cachedMeta, s4 = o5.data, a1 = e9.getMaxBorderWidth() + e9.getMaxOffset(s4), r2 = Math.max((Math.min(n6.width, n6.height) - a1) / 2, 0), l2 = Math.min(G(e9.options.cutout, r2), 1), c2 = e9._getRingWeight(e9.index), { circumference: h2 , rotation: d2  } = e9._getRotationExtents(), { ratioX: u1 , ratioY: f1 , offsetX: g1 , offsetY: p1  } = function(t15, e10, i6) {
                let n7 = 1, o6 = 1, s5 = 0, a2 = 0;
                if (e10 < bt) {
                    const r3 = t15, l3 = r3 + e10, c3 = Math.cos(r3), h3 = Math.sin(r3), d3 = Math.cos(l3), u2 = Math.sin(l3), f2 = (t16, e11, n8)=>Wt(t16, r3, l3) ? 1 : Math.max(e11, e11 * i6, n8, n8 * i6)
                    , g2 = (t16, e11, n8)=>Wt(t16, r3, l3) ? -1 : Math.min(e11, e11 * i6, n8, n8 * i6)
                    , p2 = f2(0, c3, d3), m1 = f2(Mt, h3, u2), x1 = g2(xt, c3, d3), b1 = g2(xt + Mt, h3, u2);
                    n7 = (p2 - x1) / 2, o6 = (m1 - b1) / 2, s5 = -(p2 + x1) / 2, a2 = -(m1 + b1) / 2;
                }
                return {
                    ratioX: n7,
                    ratioY: o6,
                    offsetX: s5,
                    offsetY: a2
                };
            }(d2, h2, l2), m1 = (n6.width - a1) / u1, x1 = (n6.height - a1) / f1, b1 = Math.max(Math.min(m1, x1) / 2, 0), _1 = Z(e9.options.radius, b1), y1 = (_1 - Math.max(_1 * l2, 0)) / e9._getVisibleDatasetWeightTotal();
            e9.offsetX = g1 * _1, e9.offsetY = p1 * _1, o5.total = e9.calculateTotal(), e9.outerRadius = _1 - y1 * e9._getRingWeightOffset(e9.index), e9.innerRadius = Math.max(e9.outerRadius - y1 * c2, 0), e9.updateElements(s4, 0, s4.length, t);
        }
        _circumference(t, e) {
            const i5 = this, n6 = i5.options, o5 = i5._cachedMeta, s4 = i5._getCircumference();
            return e && n6.animation.animateRotate || !this.chart.getDataVisibility(t) || null === o5._parsed[t] ? 0 : i5.calculateCircumference(o5._parsed[t] * s4 / bt);
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = "reset" === n, a1 = o5.chart, r2 = a1.chartArea, l2 = a1.options.animation, c2 = (r2.left + r2.right) / 2, h2 = (r2.top + r2.bottom) / 2, d2 = s4 && l2.animateScale, u1 = d2 ? 0 : o5.innerRadius, f1 = d2 ? 0 : o5.outerRadius, g1 = o5.resolveDataElementOptions(e, n), p1 = o5.getSharedOptions(g1), m1 = o5.includeOptions(n, p1);
            let x1, b1 = o5._getRotation();
            for(x1 = 0; x1 < e; ++x1)b1 += o5._circumference(x1, s4);
            for(x1 = e; x1 < e + i; ++x1){
                const e9 = o5._circumference(x1, s4), i5 = t[x1], a2 = {
                    x: c2 + o5.offsetX,
                    y: h2 + o5.offsetY,
                    startAngle: b1,
                    endAngle: b1 + e9,
                    circumference: e9,
                    outerRadius: f1,
                    innerRadius: u1
                };
                m1 && (a2.options = p1 || o5.resolveDataElementOptions(x1, n)), b1 += e9, o5.updateElement(i5, x1, a2, n);
            }
            o5.updateSharedOptions(p1, n, g1);
        }
        calculateTotal() {
            const t15 = this._cachedMeta, e9 = t15.data;
            let i5, n6 = 0;
            for(i5 = 0; i5 < e9.length; i5++){
                const e10 = t15._parsed[i5];
                null !== e10 && !isNaN(e10) && this.chart.getDataVisibility(i5) && (n6 += Math.abs(e10));
            }
            return n6;
        }
        calculateCircumference(t) {
            const e9 = this._cachedMeta.total;
            return e9 > 0 && !isNaN(t) ? bt * (Math.abs(t) / e9) : 0;
        }
        getLabelAndValue(t) {
            const e9 = this._cachedMeta, i5 = this.chart, n6 = i5.data.labels || [], o5 = Li(e9._parsed[t], i5.options.locale);
            return {
                label: n6[t] || "",
                value: o5
            };
        }
        getMaxBorderWidth(t) {
            const e9 = this;
            let i5 = 0;
            const n6 = e9.chart;
            let o5, s4, a1, r2, l2;
            if (!t) for(o5 = 0, s4 = n6.data.datasets.length; o5 < s4; ++o5)if (n6.isDatasetVisible(o5)) {
                a1 = n6.getDatasetMeta(o5), t = a1.data, r2 = a1.controller, r2 !== e9 && r2.configure();
                break;
            }
            if (!t) return 0;
            for(o5 = 0, s4 = t.length; o5 < s4; ++o5)l2 = r2.resolveDataElementOptions(o5), "inner" !== l2.borderAlign && (i5 = Math.max(i5, l2.borderWidth || 0, l2.hoverBorderWidth || 0));
            return i5;
        }
        getMaxOffset(t) {
            let e9 = 0;
            for(let i5 = 0, n6 = t.length; i5 < n6; ++i5){
                const t15 = this.resolveDataElementOptions(i5);
                e9 = Math.max(e9, t15.offset || 0, t15.hoverOffset || 0);
            }
            return e9;
        }
        _getRingWeightOffset(t) {
            let e9 = 0;
            for(let i5 = 0; i5 < t; ++i5)this.chart.isDatasetVisible(i5) && (e9 += this._getRingWeight(i5));
            return e9;
        }
        _getRingWeight(t) {
            return Math.max(K(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
    }
    no.id = "doughnut", no.defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth"
                ]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        indexAxis: "r"
    }, no.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (t) {
                        const e9 = t.data;
                        return e9.labels.length && e9.datasets.length ? e9.labels.map((e10, i5)=>{
                            const n6 = t.getDatasetMeta(0).controller.getStyle(i5);
                            return {
                                text: e10,
                                fillStyle: n6.backgroundColor,
                                strokeStyle: n6.borderColor,
                                lineWidth: n6.borderWidth,
                                hidden: !t.getDataVisibility(i5),
                                index: i5
                            };
                        }) : [];
                    }
                },
                onClick (t, e, i) {
                    i.chart.toggleDataVisibility(e.index), i.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    title: ()=>""
                    ,
                    label (t) {
                        let e9 = t.label;
                        const i5 = ": " + t.formattedValue;
                        return Y(e9) ? (e9 = e9.slice(), e9[0] += i5) : e9 += i5, e9;
                    }
                }
            }
        }
    };
    class oo extends Ai {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        update(t) {
            const e9 = this, i5 = e9._cachedMeta, { dataset: n6 , data: o5 = [] , _dataset: s4  } = i5, a1 = e9.chart._animationsDisabled;
            let { start: r2 , count: l2  } = function(t15, e10, i6) {
                const n7 = e10.length;
                let o6 = 0, s5 = n7;
                if (t15._sorted) {
                    const { iScale: a2 , _parsed: r3  } = t15, l3 = a2.axis, { min: c2 , max: h2 , minDefined: d2 , maxDefined: u1  } = a2.getUserBounds();
                    d2 && (o6 = Ht(Math.min(ie(r3, a2.axis, c2).lo, i6 ? n7 : ie(e10, l3, a2.getPixelForValue(c2)).lo), 0, n7 - 1)), s5 = u1 ? Ht(Math.max(ie(r3, a2.axis, h2).hi + 1, i6 ? 0 : ie(e10, l3, a2.getPixelForValue(h2)).hi + 1), o6, n7) - o6 : n7 - o6;
                }
                return {
                    start: o6,
                    count: s5
                };
            }(i5, o5, a1);
            if (e9._drawStart = r2, e9._drawCount = l2, (function(t15) {
                const { xScale: e10 , yScale: i6 , _scaleRanges: n7  } = t15, o6 = {
                    xmin: e10.min,
                    xmax: e10.max,
                    ymin: i6.min,
                    ymax: i6.max
                };
                if (!n7) return t15._scaleRanges = o6, !0;
                const s5 = n7.xmin !== e10.min || n7.xmax !== e10.max || n7.ymin !== i6.min || n7.ymax !== i6.max;
                return Object.assign(n7, o6), s5;
            })(i5) && (r2 = 0, l2 = o5.length), n6._decimated = !!s4._decimated, n6.points = o5, "resize" !== t) {
                const i6 = e9.resolveDatasetElementOptions(t);
                e9.options.showLine || (i6.borderWidth = 0), e9.updateElement(n6, void 0, {
                    animated: !a1,
                    options: i6
                }, t);
            }
            e9.updateElements(o5, r2, l2, t);
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = "reset" === n, { xScale: a1 , yScale: r2 , _stacked: l2  } = o5._cachedMeta, c2 = o5.resolveDataElementOptions(e, n), h2 = o5.getSharedOptions(c2), d2 = o5.includeOptions(n, h2), u1 = o5.options.spanGaps, f1 = At(u1) ? u1 : Number.POSITIVE_INFINITY, g1 = o5.chart._animationsDisabled || s4 || "none" === n;
            let p1 = e > 0 && o5.getParsed(e - 1);
            for(let c3 = e; c3 < e + i; ++c3){
                const e9 = t[c3], i5 = o5.getParsed(c3), u2 = g1 ? e9 : {
                }, m1 = u2.x = a1.getPixelForValue(i5.x, c3), x1 = u2.y = s4 ? r2.getBasePixel() : r2.getPixelForValue(l2 ? o5.applyStack(r2, i5, l2) : i5.y, c3);
                u2.skip = isNaN(m1) || isNaN(x1), u2.stop = c3 > 0 && i5.x - p1.x > f1, d2 && (u2.options = h2 || o5.resolveDataElementOptions(c3, n)), g1 || o5.updateElement(e9, c3, u2, n), p1 = i5;
            }
            o5.updateSharedOptions(h2, n, c2);
        }
        getMaxOverflow() {
            const t15 = this, e9 = t15._cachedMeta, i5 = e9.dataset, n6 = i5.options && i5.options.borderWidth || 0, o5 = e9.data || [];
            if (!o5.length) return n6;
            const s4 = o5[0].size(t15.resolveDataElementOptions(0)), a1 = o5[o5.length - 1].size(t15.resolveDataElementOptions(o5.length - 1));
            return Math.max(n6, s4, a1) / 2;
        }
        draw() {
            this._cachedMeta.dataset.updateControlPoints(this.chart.chartArea), super.draw();
        }
    }
    oo.id = "line", oo.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    }, oo.overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    class so extends Ai {
        constructor(t15, e9){
            super(t15, e9), this.innerRadius = void 0, this.outerRadius = void 0;
        }
        update(t) {
            const e10 = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e10, 0, e10.length, t);
        }
        _updateRadius() {
            const t16 = this, e10 = t16.chart, i5 = e10.chartArea, n6 = e10.options, o5 = Math.min(i5.right - i5.left, i5.bottom - i5.top), s4 = Math.max(o5 / 2, 0), a1 = (s4 - Math.max(n6.cutoutPercentage ? s4 / 100 * n6.cutoutPercentage : 1, 0)) / e10.getVisibleDatasetCount();
            t16.outerRadius = s4 - a1 * t16.index, t16.innerRadius = t16.outerRadius - a1;
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = "reset" === n, a1 = o5.chart, r2 = o5.getDataset(), l2 = a1.options.animation, c2 = o5._cachedMeta.rScale, h2 = c2.xCenter, d2 = c2.yCenter, u1 = c2.getIndexAngle(0) - 0.5 * xt;
            let f1, g1 = u1;
            const p1 = 360 / o5.countVisibleElements();
            for(f1 = 0; f1 < e; ++f1)g1 += o5._computeAngle(f1, n, p1);
            for(f1 = e; f1 < e + i; f1++){
                const e10 = t[f1];
                let i5 = g1, m1 = g1 + o5._computeAngle(f1, n, p1), x1 = a1.getDataVisibility(f1) ? c2.getDistanceFromCenterForValue(r2.data[f1]) : 0;
                g1 = m1, s4 && (l2.animateScale && (x1 = 0), l2.animateRotate && (i5 = m1 = u1));
                const b1 = {
                    x: h2,
                    y: d2,
                    innerRadius: 0,
                    outerRadius: x1,
                    startAngle: i5,
                    endAngle: m1,
                    options: o5.resolveDataElementOptions(f1, n)
                };
                o5.updateElement(e10, f1, b1, n);
            }
        }
        countVisibleElements() {
            const t16 = this.getDataset(), e10 = this._cachedMeta;
            let i5 = 0;
            return e10.data.forEach((e11, n6)=>{
                !isNaN(t16.data[n6]) && this.chart.getDataVisibility(n6) && i5++;
            }), i5;
        }
        _computeAngle(t, e, i) {
            return this.chart.getDataVisibility(t) ? Rt(this.resolveDataElementOptions(t, e).angle || i) : 0;
        }
    }
    so.id = "polarArea", so.defaults = {
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius"
                ]
            }
        },
        indexAxis: "r",
        startAngle: 0
    }, so.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (t) {
                        const e10 = t.data;
                        return e10.labels.length && e10.datasets.length ? e10.labels.map((e11, i5)=>{
                            const n6 = t.getDatasetMeta(0).controller.getStyle(i5);
                            return {
                                text: e11,
                                fillStyle: n6.backgroundColor,
                                strokeStyle: n6.borderColor,
                                lineWidth: n6.borderWidth,
                                hidden: !t.getDataVisibility(i5),
                                index: i5
                            };
                        }) : [];
                    }
                },
                onClick (t, e, i) {
                    i.chart.toggleDataVisibility(e.index), i.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    title: ()=>""
                    ,
                    label: (t16)=>t16.chart.data.labels[t16.dataIndex] + ": " + t16.formattedValue
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                beginAtZero: !0,
                grid: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                startAngle: 0
            }
        }
    };
    class ao extends no {
    }
    ao.id = "pie", ao.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    };
    class ro extends Ai {
        getLabelAndValue(t) {
            const e10 = this._cachedMeta.vScale, i5 = this.getParsed(t);
            return {
                label: e10.getLabels()[t],
                value: "" + e10.getLabelForValue(i5[e10.axis])
            };
        }
        update(t) {
            const e10 = this, i5 = e10._cachedMeta, n6 = i5.dataset, o5 = i5.data || [], s4 = i5.iScale.getLabels();
            if (n6.points = o5, "resize" !== t) {
                const i6 = e10.resolveDatasetElementOptions(t);
                e10.options.showLine || (i6.borderWidth = 0);
                const a1 = {
                    _loop: !0,
                    _fullLoop: s4.length === o5.length,
                    options: i6
                };
                e10.updateElement(n6, void 0, a1, t);
            }
            e10.updateElements(o5, 0, o5.length, t);
        }
        updateElements(t, e, i, n) {
            const o5 = this, s4 = o5.getDataset(), a1 = o5._cachedMeta.rScale, r2 = "reset" === n;
            for(let l2 = e; l2 < e + i; l2++){
                const e10 = t[l2], i5 = o5.resolveDataElementOptions(l2, n), c2 = a1.getPointPositionForValue(l2, s4.data[l2]), h2 = r2 ? a1.xCenter : c2.x, d2 = r2 ? a1.yCenter : c2.y, u1 = {
                    x: h2,
                    y: d2,
                    angle: c2.angle,
                    skip: isNaN(h2) || isNaN(d2),
                    options: i5
                };
                o5.updateElement(e10, l2, u1, n);
            }
        }
    }
    ro.id = "radar", ro.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
            line: {
                fill: "start"
            }
        }
    }, ro.overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    };
    class lo extends oo {
    }
    lo.id = "scatter", lo.defaults = {
        showLine: !1,
        fill: !1
    }, lo.overrides = {
        interaction: {
            mode: "point"
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: ()=>""
                    ,
                    label: (t16)=>"(" + t16.label + ", " + t16.formattedValue + ")"
                }
            }
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    var co = Object.freeze({
        __proto__: null,
        BarController: eo,
        BubbleController: io,
        DoughnutController: no,
        LineController: oo,
        PolarAreaController: so,
        PieController: ao,
        RadarController: ro,
        ScatterController: lo
    });
    function ho(t16, e10) {
        const { startAngle: i5 , endAngle: n6 , pixelMargin: o5 , x: s4 , y: a1 , outerRadius: r2 , innerRadius: l2  } = e10;
        let c2 = o5 / r2;
        t16.beginPath(), t16.arc(s4, a1, r2, i5 - c2, n6 + c2), l2 > o5 ? (c2 = o5 / l2, t16.arc(s4, a1, l2, n6 + c2, i5 - c2, !0)) : t16.arc(s4, a1, o5, n6 + Mt, i5 - Mt), t16.closePath(), t16.clip();
    }
    function uo(t16, e10) {
        const { x: i5 , y: n6 , startAngle: o5 , endAngle: s4 , pixelMargin: a1  } = e10, r2 = Math.max(e10.outerRadius - a1, 0), l2 = e10.innerRadius + a1;
        t16.beginPath(), t16.arc(i5, n6, r2, o5, s4), t16.arc(i5, n6, l2, s4, o5, !0), t16.closePath();
    }
    function fo(t16, e10) {
        const { x: i5 , y: n6 , startAngle: o5 , endAngle: s4 , pixelMargin: a1 , options: r2  } = e10, l2 = e10.outerRadius, c2 = e10.innerRadius + a1, h2 = "inner" === r2.borderAlign;
        r2.borderWidth && (h2 ? (t16.lineWidth = 2 * r2.borderWidth, t16.lineJoin = "round") : (t16.lineWidth = r2.borderWidth, t16.lineJoin = "bevel"), e10.fullCircles && (function(t17, e11, i6) {
            const { x: n7 , y: o6 , startAngle: s5 , endAngle: a2 , pixelMargin: r3  } = e11, l3 = Math.max(e11.outerRadius - r3, 0), c3 = e11.innerRadius + r3;
            let h3;
            for(i6 && (e11.endAngle = e11.startAngle + bt, ho(t17, e11), e11.endAngle = a2, e11.endAngle === e11.startAngle && (e11.endAngle += bt, e11.fullCircles--)), t17.beginPath(), t17.arc(n7, o6, c3, s5 + bt, s5, !0), h3 = 0; h3 < e11.fullCircles; ++h3)t17.stroke();
            for(t17.beginPath(), t17.arc(n7, o6, l3, s5, s5 + bt), h3 = 0; h3 < e11.fullCircles; ++h3)t17.stroke();
        })(t16, e10, h2), h2 && ho(t16, e10), t16.beginPath(), t16.arc(i5, n6, l2, o5, s4), t16.arc(i5, n6, c2, s4, o5, !0), t16.closePath(), t16.stroke());
    }
    class go extends Oi {
        constructor(t16){
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t16 && Object.assign(this, t16);
        }
        inRange(t, e, i) {
            const n6 = this.getProps([
                "x",
                "y"
            ], i), { angle: o5 , distance: s4  } = Ft(n6, {
                x: t,
                y: e
            }), { startAngle: a1 , endAngle: r2 , innerRadius: l2 , outerRadius: c2 , circumference: h2  } = this.getProps([
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference"
            ], i);
            return (h2 >= bt || Wt(o5, a1, r2)) && s4 >= l2 && s4 <= c2;
        }
        getCenterPoint(t) {
            const { x: e10 , y: i5 , startAngle: n6 , endAngle: o5 , innerRadius: s4 , outerRadius: a1  } = this.getProps([
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius"
            ], t), r2 = (n6 + o5) / 2, l2 = (s4 + a1) / 2;
            return {
                x: e10 + Math.cos(r2) * l2,
                y: i5 + Math.sin(r2) * l2
            };
        }
        tooltipPosition(t) {
            return this.getCenterPoint(t);
        }
        draw(t) {
            const e10 = this, i5 = e10.options, n6 = i5.offset || 0;
            if (e10.pixelMargin = "inner" === i5.borderAlign ? 0.33 : 0, e10.fullCircles = Math.floor(e10.circumference / bt), !(0 === e10.circumference || e10.innerRadius < 0 || e10.outerRadius < 0)) {
                if (t.save(), n6 && e10.circumference < bt) {
                    const i6 = (e10.startAngle + e10.endAngle) / 2;
                    t.translate(Math.cos(i6) * n6, Math.sin(i6) * n6);
                }
                t.fillStyle = i5.backgroundColor, t.strokeStyle = i5.borderColor, (function(t17, e11) {
                    if (e11.fullCircles) {
                        e11.endAngle = e11.startAngle + bt, uo(t17, e11);
                        for(let i6 = 0; i6 < e11.fullCircles; ++i6)t17.fill();
                    }
                    isNaN(e11.circumference) || (e11.endAngle = e11.startAngle + e11.circumference % bt), uo(t17, e11), t17.fill();
                })(t, e10), fo(t, e10), t.restore();
            }
        }
    }
    function po(t17, e10, i5) {
        t17.lineTo(i5.x, i5.y);
    }
    function mo(t17, e10, i5) {
        i5 = i5 || {
        };
        const n6 = t17.length, o5 = Math.max(i5.start || 0, e10.start), s4 = Math.min(i5.end || n6 - 1, e10.end);
        return {
            count: n6,
            start: o5,
            loop: e10.loop,
            ilen: s4 < o5 ? n6 + s4 - o5 : s4 - o5
        };
    }
    function xo(t17, e10, i5, n6) {
        const { points: o5 , options: s4  } = e10, { count: a1 , start: r2 , loop: l2 , ilen: c2  } = mo(o5, i5, n6), h2 = function(t18) {
            return t18.stepped ? Qt : t18.tension ? Jt : po;
        }(s4);
        let d2, u1, f1, { move: g1 = !0 , reverse: p1  } = n6 || {
        };
        for(d2 = 0; d2 <= c2; ++d2)u1 = o5[(r2 + (p1 ? c2 - d2 : d2)) % a1], u1.skip || (g1 ? (t17.moveTo(u1.x, u1.y), g1 = !1) : h2(t17, f1, u1, p1, s4.stepped), f1 = u1);
        return l2 && (u1 = o5[(r2 + (p1 ? c2 : 0)) % a1], h2(t17, f1, u1, p1, s4.stepped)), !!l2;
    }
    function bo(t17, e10, i5, n6) {
        const o5 = e10.points, { count: s4 , start: a1 , ilen: r2  } = mo(o5, i5, n6), { move: l2 = !0 , reverse: c2  } = n6 || {
        };
        let h2, d2, u1, f1, g1, p1, m1 = 0, x1 = 0;
        const b1 = (t18)=>(a1 + (c2 ? r2 - t18 : t18)) % s4
        , _1 = ()=>{
            f1 !== g1 && (t17.lineTo(m1, g1), t17.lineTo(m1, f1), t17.lineTo(m1, p1));
        };
        for(l2 && (d2 = o5[b1(0)], t17.moveTo(d2.x, d2.y)), h2 = 0; h2 <= r2; ++h2){
            if (d2 = o5[b1(h2)], d2.skip) continue;
            const e11 = d2.x, i6 = d2.y, n7 = 0 | e11;
            n7 === u1 ? (i6 < f1 ? f1 = i6 : i6 > g1 && (g1 = i6), m1 = (x1 * m1 + e11) / ++x1) : (_1(), t17.lineTo(e11, i6), u1 = n7, x1 = 0, f1 = g1 = i6), p1 = i6;
        }
        _1();
    }
    function _o(t17) {
        const e10 = t17.options, i5 = e10.borderDash && e10.borderDash.length;
        return !(t17._decimated || t17._loop || e10.tension || e10.stepped || i5) ? bo : xo;
    }
    go.id = "arc", go.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderWidth: 2,
        offset: 0,
        angle: void 0
    }, go.defaultRoutes = {
        backgroundColor: "backgroundColor"
    };
    const yo = "function" == typeof Path2D ? function(t17, e10, i5, n6) {
        let o5 = e10._path;
        o5 || (o5 = e10._path = new Path2D, e10.path(o5, i5, n6) && o5.closePath()), t17.stroke(o5);
    } : function(t17, e10, i5, n6) {
        t17.beginPath(), e10.path(t17, i5, n6) && t17.closePath(), t17.stroke();
    };
    class vo extends Oi {
        constructor(t17){
            super(), this.animated = !0, this.options = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, t17 && Object.assign(this, t17);
        }
        updateControlPoints(t) {
            const e10 = this, i5 = e10.options;
            if (i5.tension && !i5.stepped && !e10._pointsUpdated) {
                const n6 = i5.spanGaps ? e10._loop : e10._fullLoop;
                cn(e10._points, i5, t, n6), e10._pointsUpdated = !0;
            }
        }
        set points(t) {
            const e10 = this;
            e10._points = t, delete e10._segments, delete e10._path, e10._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = yn(this));
        }
        first() {
            const t18 = this.segments, e10 = this.points;
            return t18.length && e10[t18[0].start];
        }
        last() {
            const t18 = this.segments, e10 = this.points, i5 = t18.length;
            return i5 && e10[t18[i5 - 1].end];
        }
        interpolate(t, e) {
            const i5 = this, n6 = i5.options, o5 = t[e], s4 = i5.points, a1 = _n(i5, {
                property: e,
                start: o5,
                end: o5
            });
            if (!a1.length) return;
            const r2 = [], l2 = function(t18) {
                return t18.stepped ? dn : t18.tension ? un : hn;
            }(n6);
            let c2, h2;
            for(c2 = 0, h2 = a1.length; c2 < h2; ++c2){
                const { start: i6 , end: h3  } = a1[c2], d2 = s4[i6], u1 = s4[h3];
                if (d2 === u1) {
                    r2.push(d2);
                    continue;
                }
                const f1 = l2(d2, u1, Math.abs((o5 - d2[e]) / (u1[e] - d2[e])), n6.stepped);
                f1[e] = t[e], r2.push(f1);
            }
            return 1 === r2.length ? r2[0] : r2;
        }
        pathSegment(t, e, i) {
            return _o(this)(t, this, e, i);
        }
        path(t, e, i) {
            const n6 = this, o5 = n6.segments, s4 = o5.length, a1 = _o(n6);
            let r2 = n6._loop;
            e = e || 0, i = i || n6.points.length - e;
            for(let l2 = 0; l2 < s4; ++l2)r2 &= a1(t, n6, o5[l2], {
                start: e,
                end: e + i - 1
            });
            return !!r2;
        }
        draw(t, e, i, n) {
            const o5 = this, s4 = o5.options || {
            };
            (o5.points || []).length && s4.borderWidth && (t.save(), (function(t18, e10) {
                t18.lineCap = e10.borderCapStyle, t18.setLineDash(e10.borderDash), t18.lineDashOffset = e10.borderDashOffset, t18.lineJoin = e10.borderJoinStyle, t18.lineWidth = e10.borderWidth, t18.strokeStyle = e10.borderColor;
            })(t, s4), yo(t, o5, i, n), t.restore(), o5.animated && (o5._pointsUpdated = !1, o5._path = void 0));
        }
    }
    function Mo(t18, e10, i5, n6) {
        const o5 = t18.options, { [i5]: s4  } = t18.getProps([
            i5
        ], n6);
        return Math.abs(e10 - s4) < o5.radius + o5.hitRadius;
    }
    vo.id = "line", vo.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }, vo.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    }, vo.descriptors = {
        _scriptable: !0,
        _indexable: (t18)=>"borderDash" !== t18 && "fill" !== t18
    };
    class wo extends Oi {
        constructor(t18){
            super(), this.options = void 0, this.skip = void 0, this.stop = void 0, t18 && Object.assign(this, t18);
        }
        inRange(t, e, i) {
            const n6 = this.options, { x: o5 , y: s4  } = this.getProps([
                "x",
                "y"
            ], i);
            return Math.pow(t - o5, 2) + Math.pow(e - s4, 2) < Math.pow(n6.hitRadius + n6.radius, 2);
        }
        inXRange(t, e) {
            return Mo(this, t, "x", e);
        }
        inYRange(t, e) {
            return Mo(this, t, "y", e);
        }
        getCenterPoint(t) {
            const { x: e10 , y: i5  } = this.getProps([
                "x",
                "y"
            ], t);
            return {
                x: e10,
                y: i5
            };
        }
        size(t) {
            let e10 = (t = t || this.options || {
            }).radius || 0;
            e10 = Math.max(e10, e10 && t.hoverRadius || 0);
            return 2 * (e10 + (e10 && t.borderWidth || 0));
        }
        draw(t) {
            const e10 = this, i5 = e10.options;
            e10.skip || i5.radius < 0.1 || (t.strokeStyle = i5.borderColor, t.lineWidth = i5.borderWidth, t.fillStyle = i5.backgroundColor, qt(t, i5, e10.x, e10.y));
        }
        getRange() {
            const t19 = this.options || {
            };
            return t19.radius + t19.hitRadius;
        }
    }
    function ko(t19, e10) {
        const { x: i5 , y: n6 , base: o5 , width: s4 , height: a1  } = t19.getProps([
            "x",
            "y",
            "base",
            "width",
            "height"
        ], e10);
        let r2, l2, c2, h2, d2;
        return t19.horizontal ? (d2 = a1 / 2, r2 = Math.min(i5, o5), l2 = Math.max(i5, o5), c2 = n6 - d2, h2 = n6 + d2) : (d2 = s4 / 2, r2 = i5 - d2, l2 = i5 + d2, c2 = Math.min(n6, o5), h2 = Math.max(n6, o5)), {
            left: r2,
            top: c2,
            right: l2,
            bottom: h2
        };
    }
    function So(t19) {
        let e10 = t19.options.borderSkipped;
        const i5 = {
        };
        return e10 ? (e10 = t19.horizontal ? Po(e10, "left", "right", t19.base > t19.x) : Po(e10, "bottom", "top", t19.base < t19.y), i5[e10] = !0, i5) : i5;
    }
    function Po(t19, e10, i5, n6) {
        var o5, s4, a1;
        return n6 ? (a1 = i5, t19 = Do(t19 = (o5 = t19) === (s4 = e10) ? a1 : o5 === a1 ? s4 : o5, i5, e10)) : t19 = Do(t19, e10, i5), t19;
    }
    function Do(t19, e10, i5) {
        return "start" === t19 ? e10 : "end" === t19 ? i5 : t19;
    }
    function Co(t19, e10, i5, n6) {
        return t19 ? 0 : Math.max(Math.min(e10, n6), i5);
    }
    function Ao(t19) {
        const e10 = ko(t19), i5 = e10.right - e10.left, n6 = e10.bottom - e10.top, o5 = function(t20, e11, i6) {
            const n7 = t20.options.borderWidth, o6 = So(t20), s4 = Te(n7);
            return {
                t: Co(o6.top, s4.top, 0, i6),
                r: Co(o6.right, s4.right, 0, e11),
                b: Co(o6.bottom, s4.bottom, 0, i6),
                l: Co(o6.left, s4.left, 0, e11)
            };
        }(t19, i5 / 2, n6 / 2), s4 = function(t20, e11, i6) {
            const n7 = Le(t20.options.borderRadius), o6 = Math.min(e11, i6), s5 = So(t20);
            return {
                topLeft: Co(s5.top || s5.left, n7.topLeft, 0, o6),
                topRight: Co(s5.top || s5.right, n7.topRight, 0, o6),
                bottomLeft: Co(s5.bottom || s5.left, n7.bottomLeft, 0, o6),
                bottomRight: Co(s5.bottom || s5.right, n7.bottomRight, 0, o6)
            };
        }(t19, i5 / 2, n6 / 2);
        return {
            outer: {
                x: e10.left,
                y: e10.top,
                w: i5,
                h: n6,
                radius: s4
            },
            inner: {
                x: e10.left + o5.l,
                y: e10.top + o5.t,
                w: i5 - o5.l - o5.r,
                h: n6 - o5.t - o5.b,
                radius: {
                    topLeft: Math.max(0, s4.topLeft - Math.max(o5.t, o5.l)),
                    topRight: Math.max(0, s4.topRight - Math.max(o5.t, o5.r)),
                    bottomLeft: Math.max(0, s4.bottomLeft - Math.max(o5.b, o5.l)),
                    bottomRight: Math.max(0, s4.bottomRight - Math.max(o5.b, o5.r))
                }
            }
        };
    }
    function Oo(t19, e10, i5, n6) {
        const o5 = null === e10, s4 = null === i5, a1 = t19 && !(o5 && s4) && ko(t19, n6);
        return a1 && (o5 || e10 >= a1.left && e10 <= a1.right) && (s4 || i5 >= a1.top && i5 <= a1.bottom);
    }
    function To(t19, e10) {
        const { x: i5 , y: n6 , w: o5 , h: s4 , radius: a1  } = e10;
        t19.arc(i5 + a1.topLeft, n6 + a1.topLeft, a1.topLeft, -Mt, xt, !0), t19.lineTo(i5, n6 + s4 - a1.bottomLeft), t19.arc(i5 + a1.bottomLeft, n6 + s4 - a1.bottomLeft, a1.bottomLeft, xt, Mt, !0), t19.lineTo(i5 + o5 - a1.bottomRight, n6 + s4), t19.arc(i5 + o5 - a1.bottomRight, n6 + s4 - a1.bottomRight, a1.bottomRight, Mt, 0, !0), t19.lineTo(i5 + o5, n6 + a1.topRight), t19.arc(i5 + o5 - a1.topRight, n6 + a1.topRight, a1.topRight, 0, -Mt, !0), t19.lineTo(i5 + a1.topLeft, n6);
    }
    function Lo(t19, e10) {
        t19.rect(e10.x, e10.y, e10.w, e10.h);
    }
    wo.id = "point", wo.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    }, wo.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    class Ro extends Oi {
        constructor(t19){
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, t19 && Object.assign(this, t19);
        }
        draw(t) {
            const e10 = this.options, { inner: i5 , outer: n6  } = Ao(this), o5 = (s5 = n6.radius).topLeft || s5.topRight || s5.bottomLeft || s5.bottomRight ? To : Lo;
            var s5;
            t.save(), n6.w === i5.w && n6.h === i5.h || (t.beginPath(), o5(t, n6), t.clip(), o5(t, i5), t.fillStyle = e10.borderColor, t.fill("evenodd")), t.beginPath(), o5(t, i5), t.fillStyle = e10.backgroundColor, t.fill(), t.restore();
        }
        inRange(t, e, i) {
            return Oo(this, t, e, i);
        }
        inXRange(t, e) {
            return Oo(this, t, null, e);
        }
        inYRange(t, e) {
            return Oo(this, null, t, e);
        }
        getCenterPoint(t) {
            const { x: e10 , y: i5 , base: n6 , horizontal: o5  } = this.getProps([
                "x",
                "y",
                "base",
                "horizontal"
            ], t);
            return {
                x: o5 ? (e10 + n6) / 2 : e10,
                y: o5 ? i5 : (i5 + n6) / 2
            };
        }
        getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2;
        }
    }
    Ro.id = "bar", Ro.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        pointStyle: void 0
    }, Ro.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    var Eo = Object.freeze({
        __proto__: null,
        ArcElement: go,
        LineElement: vo,
        PointElement: wo,
        BarElement: Ro
    });
    function Io(t20) {
        t20.data.datasets.forEach((t21)=>{
            if (t21._decimated) {
                const e10 = t21._data;
                delete t21._decimated, delete t21._data, Object.defineProperty(t21, "data", {
                    value: e10
                });
            }
        });
    }
    var Fo = {
        id: "decimation",
        defaults: {
            algorithm: "min-max",
            enabled: !1
        },
        beforeElementsUpdate: (t20, e10, i5)=>{
            if (!i5.enabled) return void Io(t20);
            const n6 = t20.width;
            t20.data.datasets.forEach((e11, o5)=>{
                const { _data: s6 , indexAxis: a1  } = e11, r2 = t20.getDatasetMeta(o5), l2 = s6 || e11.data;
                if ("y" === Ie([
                    a1,
                    t20.options.indexAxis
                ])) return;
                if ("line" !== r2.type) return;
                const c2 = t20.scales[r2.xAxisID];
                if ("linear" !== c2.type && "time" !== c2.type) return;
                if (t20.options.parsing) return;
                if (l2.length <= 4 * n6) return;
                let h2;
                switch($(s6) && (e11._data = l2, delete e11.data, Object.defineProperty(e11, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(t21) {
                        this._data = t21;
                    }
                })), i5.algorithm){
                    case "lttb":
                        h2 = (function(t21, e12, i6) {
                            const n7 = i6.samples || e12, o6 = [], s7 = (t21.length - 2) / (n7 - 2);
                            let a2, r3, l3, c3, h3, d2 = 0, u1 = 0;
                            for(o6[d2++] = t21[u1], a2 = 0; a2 < n7 - 2; a2++){
                                let e13, i7 = 0, n8 = 0;
                                const f1 = Math.floor((a2 + 1) * s7) + 1, g1 = Math.min(Math.floor((a2 + 2) * s7) + 1, t21.length), p1 = g1 - f1;
                                for(e13 = f1; e13 < g1; e13++)i7 = t21[e13].x, n8 = t21[e13].y;
                                i7 /= p1, n8 /= p1;
                                const m1 = Math.floor(a2 * s7) + 1, x1 = Math.floor((a2 + 1) * s7) + 1, { x: b1 , y: _1  } = t21[u1];
                                for(l3 = c3 = -1, e13 = m1; e13 < x1; e13++)c3 = 0.5 * Math.abs((b1 - i7) * (t21[e13].y - _1) - (b1 - t21[e13].x) * (n8 - _1)), c3 > l3 && (l3 = c3, r3 = t21[e13], h3 = e13);
                                o6[d2++] = r3, u1 = h3;
                            }
                            return o6[d2++] = t21[t21.length - 1], o6;
                        })(l2, n6, i5);
                        break;
                    case "min-max":
                        h2 = (function(t21, e12) {
                            let i6, n7, o6, s7, a2, r3, l3, c3, h3, d2, u1 = 0, f1 = 0;
                            const g1 = [], p1 = t21[0].x, m1 = t21[t21.length - 1].x - p1;
                            for(i6 = 0; i6 < t21.length; ++i6){
                                n7 = t21[i6], o6 = (n7.x - p1) / m1 * e12, s7 = n7.y;
                                const x1 = 0 | o6;
                                if (x1 === a2) s7 < h3 ? (h3 = s7, r3 = i6) : s7 > d2 && (d2 = s7, l3 = i6), u1 = (f1 * u1 + n7.x) / ++f1;
                                else {
                                    const e13 = i6 - 1;
                                    if (!$(r3) && !$(l3)) {
                                        const i7 = Math.min(r3, l3), n8 = Math.max(r3, l3);
                                        i7 !== c3 && i7 !== e13 && g1.push({
                                            ...t21[i7],
                                            x: u1
                                        }), n8 !== c3 && n8 !== e13 && g1.push({
                                            ...t21[n8],
                                            x: u1
                                        });
                                    }
                                    i6 > 0 && e13 !== c3 && g1.push(t21[e13]), g1.push(n7), a2 = x1, f1 = 0, h3 = d2 = s7, r3 = l3 = c3 = i6;
                                }
                            }
                            return g1;
                        })(l2, n6);
                        break;
                    default:
                        throw new Error(`Unsupported decimation algorithm '${i5.algorithm}'`);
                }
                e11._decimated = h2;
            });
        },
        destroy (t) {
            Io(t);
        }
    };
    function zo(t20, e10, i5) {
        const n6 = function(t21) {
            const e11 = t21.options, i6 = e11.fill;
            let n7 = K(i6 && i6.target, i6);
            return (void 0) === n7 && (n7 = !!e11.backgroundColor), !1 !== n7 && null !== n7 && (!0 === n7 ? "origin" : n7);
        }(t20);
        if (U(n6)) return !isNaN(n6.value) && n6;
        let o5 = parseFloat(n6);
        return X(o5) && Math.floor(o5) === o5 ? ("-" !== n6[0] && "+" !== n6[0] || (o5 = e10 + o5), !(o5 === e10 || o5 < 0 || o5 >= i5) && o5) : [
            "origin",
            "start",
            "end",
            "stack"
        ].indexOf(n6) >= 0 && n6;
    }
    class Vo {
        constructor(t20){
            this.x = t20.x, this.y = t20.y, this.radius = t20.radius;
        }
        pathSegment(t, e, i) {
            const { x: n6 , y: o5 , radius: s6  } = this;
            return e = e || {
                start: 0,
                end: bt
            }, t.arc(n6, o5, s6, e.end, e.start, !0), !i.bounds;
        }
        interpolate(t) {
            const { x: e10 , y: i5 , radius: n6  } = this, o5 = t.angle;
            return {
                x: e10 + Math.cos(o5) * n6,
                y: i5 + Math.sin(o5) * n6,
                angle: o5
            };
        }
    }
    function Bo(t21) {
        return (t21.scale || {
        }).getPointPositionForValue ? (function(t22) {
            const { scale: e10 , fill: i5  } = t22, n6 = e10.options, o5 = e10.getLabels().length, s6 = [], a1 = n6.reverse ? e10.max : e10.min, r2 = n6.reverse ? e10.min : e10.max;
            let l2, c2, h2;
            if (h2 = "start" === i5 ? a1 : "end" === i5 ? r2 : U(i5) ? i5.value : e10.getBaseValue(), n6.grid.circular) return c2 = e10.getPointPositionForValue(0, a1), new Vo({
                x: c2.x,
                y: c2.y,
                radius: e10.getDistanceFromCenterForValue(h2)
            });
            for(l2 = 0; l2 < o5; ++l2)s6.push(e10.getPointPositionForValue(l2, h2));
            return s6;
        })(t21) : (function(t22) {
            const { scale: e10 = {
            } , fill: i5  } = t22;
            let n6, o5 = null;
            return "start" === i5 ? o5 = e10.bottom : "end" === i5 ? o5 = e10.top : U(i5) ? o5 = e10.getPixelForValue(i5.value) : e10.getBasePixel && (o5 = e10.getBasePixel()), X(o5) ? (n6 = e10.isHorizontal(), {
                x: n6 ? o5 : null,
                y: n6 ? null : o5
            }) : null;
        })(t21);
    }
    function Wo(t21) {
        const { chart: e10 , scale: i5 , index: n6 , line: o5  } = t21, s6 = [], a1 = o5.segments, r2 = o5.points, l2 = function(t22, e11) {
            const i6 = [], n7 = t22.getSortedVisibleDatasetMetas();
            for(let t23 = 0; t23 < n7.length; t23++){
                const o6 = n7[t23];
                if (o6.index === e11) break;
                Ho(o6) && i6.unshift(o6.dataset);
            }
            return i6;
        }(e10, n6);
        l2.push($o({
            x: null,
            y: i5.bottom
        }, o5));
        for(let t22 = 0; t22 < a1.length; t22++){
            const e11 = a1[t22];
            for(let t23 = e11.start; t23 <= e11.end; t23++)No(s6, r2[t23], l2);
        }
        return new vo({
            points: s6,
            options: {
            }
        });
    }
    const Ho = (t21)=>"line" === t21.type && !t21.hidden
    ;
    function No(t21, e10, i5) {
        const n6 = [];
        for(let o5 = 0; o5 < i5.length; o5++){
            const s6 = i5[o5], { first: a1 , last: r2 , point: l2  } = jo(s6, e10, "x");
            if (!(!l2 || a1 && r2)) {
                if (a1) n6.unshift(l2);
                else if (t21.push(l2), !r2) break;
            }
        }
        t21.push(...n6);
    }
    function jo(t21, e10, i5) {
        const n6 = t21.interpolate(e10, i5);
        if (!n6) return {
        };
        const o5 = n6[i5], s6 = t21.segments, a1 = t21.points;
        let r2 = !1, l2 = !1;
        for(let t22 = 0; t22 < s6.length; t22++){
            const e11 = s6[t22], n7 = a1[e11.start][i5], c2 = a1[e11.end][i5];
            if (o5 >= n7 && o5 <= c2) {
                r2 = o5 === n7, l2 = o5 === c2;
                break;
            }
        }
        return {
            first: r2,
            last: l2,
            point: n6
        };
    }
    function $o(t21, e10) {
        let i5 = [], n6 = !1;
        return Y(t21) ? (n6 = !0, i5 = t21) : i5 = (function(t22, e11) {
            const { x: i6 = null , y: n7 = null  } = t22 || {
            }, o5 = e11.points, s6 = [];
            return e11.segments.forEach((t23)=>{
                const e12 = o5[t23.start], a1 = o5[t23.end];
                null !== n7 ? (s6.push({
                    x: e12.x,
                    y: n7
                }), s6.push({
                    x: a1.x,
                    y: n7
                })) : null !== i6 && (s6.push({
                    x: i6,
                    y: e12.y
                }), s6.push({
                    x: i6,
                    y: a1.y
                }));
            }), s6;
        })(t21, e10), i5.length ? new vo({
            points: i5,
            options: {
                tension: 0
            },
            _loop: n6,
            _fullLoop: n6
        }) : null;
    }
    function Yo(t21, e10, i5) {
        let n6 = t21[e10].fill;
        const o5 = [
            e10
        ];
        let s6;
        if (!i5) return n6;
        for(; !1 !== n6 && -1 === o5.indexOf(n6);){
            if (!X(n6)) return n6;
            if (s6 = t21[n6], !s6) return !1;
            if (s6.visible) return n6;
            o5.push(n6), n6 = s6.fill;
        }
        return !1;
    }
    function Uo(t21, e10, i5) {
        t21.beginPath(), e10.path(t21), t21.lineTo(e10.last().x, i5), t21.lineTo(e10.first().x, i5), t21.closePath(), t21.clip();
    }
    function Xo(t21, e10, i5, n6) {
        if (n6) return;
        let o5 = e10[t21], s6 = i5[t21];
        return "angle" === t21 && (o5 = Bt(o5), s6 = Bt(s6)), {
            property: t21,
            start: o5,
            end: s6
        };
    }
    function qo(t21, e10, i5, n6) {
        return t21 && e10 ? n6(t21[i5], e10[i5]) : t21 ? t21[i5] : e10 ? e10[i5] : 0;
    }
    function Ko(t21, e10, i5) {
        const { top: n6 , bottom: o5  } = e10.chart.chartArea, { property: s6 , start: a1 , end: r2  } = i5 || {
        };
        "x" === s6 && (t21.beginPath(), t21.rect(a1, n6, r2 - a1, o5 - n6), t21.clip());
    }
    function Go(t21, e10, i5, n6) {
        const o5 = e10.interpolate(i5, n6);
        o5 && t21.lineTo(o5.x, o5.y);
    }
    function Zo(t21, e10) {
        const { line: i5 , target: n6 , property: o5 , color: s6 , scale: a1  } = e10, r2 = function(t22, e11, i6) {
            const n7 = t22.segments, o6 = t22.points, s7 = e11.points, a2 = [];
            for(let t23 = 0; t23 < n7.length; t23++){
                const r3 = n7[t23], l2 = Xo(i6, o6[r3.start], o6[r3.end], r3.loop);
                if (!e11.segments) {
                    a2.push({
                        source: r3,
                        target: l2,
                        start: o6[r3.start],
                        end: o6[r3.end]
                    });
                    continue;
                }
                const c2 = _n(e11, l2);
                for(let t24 = 0; t24 < c2.length; ++t24){
                    const e12 = c2[t24], n8 = Xo(i6, s7[e12.start], s7[e12.end], e12.loop), h2 = bn(r3, o6, n8);
                    for(let t25 = 0; t25 < h2.length; t25++)a2.push({
                        source: h2[t25],
                        target: e12,
                        start: {
                            [i6]: qo(l2, n8, "start", Math.max)
                        },
                        end: {
                            [i6]: qo(l2, n8, "end", Math.min)
                        }
                    });
                }
            }
            return a2;
        }(i5, n6, o5);
        t21.fillStyle = s6;
        for(let e11 = 0, s7 = r2.length; e11 < s7; ++e11){
            const { source: s7 , target: l2 , start: c2 , end: h2  } = r2[e11];
            t21.save(), Ko(t21, a1, Xo(o5, c2, h2)), t21.beginPath();
            const d2 = !!i5.pathSegment(t21, s7);
            d2 ? t21.closePath() : Go(t21, n6, h2, o5);
            const u1 = !!n6.pathSegment(t21, l2, {
                move: d2,
                reverse: !0
            }), f1 = d2 && u1;
            f1 || Go(t21, n6, c2, o5), t21.closePath(), t21.fill(f1 ? "evenodd" : "nonzero"), t21.restore();
        }
    }
    var Qo = {
        id: "filler",
        afterDatasetsUpdate (t, e, i) {
            const n6 = (t.data.datasets || []).length, o5 = i.propagate, s6 = [];
            let a1, r2, l2, c2;
            for(r2 = 0; r2 < n6; ++r2)a1 = t.getDatasetMeta(r2), l2 = a1.dataset, c2 = null, l2 && l2.options && l2 instanceof vo && (c2 = {
                visible: t.isDatasetVisible(r2),
                index: r2,
                fill: zo(l2, r2, n6),
                chart: t,
                scale: a1.vScale,
                line: l2
            }), a1.$filler = c2, s6.push(c2);
            for(r2 = 0; r2 < n6; ++r2)c2 = s6[r2], c2 && !1 !== c2.fill && (c2.fill = Yo(s6, r2, o5));
        },
        beforeDatasetsDraw (t) {
            const e10 = t.getSortedVisibleDatasetMetas(), i5 = t.chartArea;
            let n6, o5;
            for(n6 = e10.length - 1; n6 >= 0; --n6)o5 = e10[n6].$filler, o5 && o5.line.updateControlPoints(i5);
        },
        beforeDatasetDraw (t, e) {
            const i5 = t.chartArea, n6 = t.ctx, o5 = e.meta.$filler;
            if (!o5 || !1 === o5.fill) return;
            const s6 = function(t21) {
                const { chart: e10 , fill: i6 , line: n7  } = t21;
                if (X(i6)) return (function(t22, e11) {
                    const i7 = t22.getDatasetMeta(e11);
                    return i7 && t22.isDatasetVisible(e11) ? i7.dataset : null;
                })(e10, i6);
                if ("stack" === i6) return Wo(t21);
                const o6 = Bo(t21);
                return o6 instanceof Vo ? o6 : $o(o6, n7);
            }(o5), { line: a1 , scale: r2  } = o5, l2 = a1.options, c2 = l2.fill, h2 = l2.backgroundColor, { above: d2 = h2 , below: u1 = h2  } = c2 || {
            };
            s6 && a1.points.length && (Gt(n6, i5), (function(t21, e10) {
                const { line: i6 , target: n7 , above: o6 , below: s7 , area: a2 , scale: r3  } = e10, l3 = i6._loop ? "angle" : "x";
                t21.save(), "x" === l3 && s7 !== o6 && (Uo(t21, n7, a2.top), Zo(t21, {
                    line: i6,
                    target: n7,
                    color: o6,
                    scale: r3,
                    property: l3
                }), t21.restore(), t21.save(), Uo(t21, n7, a2.bottom)), Zo(t21, {
                    line: i6,
                    target: n7,
                    color: s7,
                    scale: r3,
                    property: l3
                }), t21.restore();
            })(n6, {
                line: a1,
                target: s6,
                above: d2,
                below: u1,
                area: i5,
                scale: r2
            }), Zt(n6));
        },
        defaults: {
            propagate: !0
        }
    };
    const Jo = (t21, e10)=>{
        let { boxHeight: i5 = e10 , boxWidth: n6 = e10  } = t21;
        return t21.usePointStyle && (i5 = Math.min(i5, e10), n6 = Math.min(n6, e10)), {
            boxWidth: n6,
            boxHeight: i5,
            itemHeight: Math.max(e10, i5)
        };
    };
    class ts extends Oi {
        constructor(t21){
            super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t21.chart, this.options = t21.options, this.ctx = t21.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
        }
        update(t, e, i) {
            const n6 = this;
            n6.maxWidth = t, n6.maxHeight = e, n6._margins = i, n6.setDimensions(), n6.buildLabels(), n6.fit();
        }
        setDimensions() {
            const t22 = this;
            t22.isHorizontal() ? (t22.width = t22.maxWidth, t22.left = 0, t22.right = t22.width) : (t22.height = t22.maxHeight, t22.top = 0, t22.bottom = t22.height);
        }
        buildLabels() {
            const t22 = this, e10 = t22.options.labels || {
            };
            let i5 = Q(e10.generateLabels, [
                t22.chart
            ], t22) || [];
            e10.filter && (i5 = i5.filter((i6)=>e10.filter(i6, t22.chart.data)
            )), e10.sort && (i5 = i5.sort((i6, n6)=>e10.sort(i6, n6, t22.chart.data)
            )), t22.options.reverse && i5.reverse(), t22.legendItems = i5;
        }
        fit() {
            const t22 = this, { options: e10 , ctx: i5  } = t22;
            if (!e10.display) return void (t22.width = t22.height = 0);
            const n6 = e10.labels, o5 = Ee(n6.font), s6 = o5.size, a1 = t22._computeTitleHeight(), { boxWidth: r2 , itemHeight: l2  } = Jo(n6, s6);
            let c2, h2;
            i5.font = o5.string, t22.isHorizontal() ? (c2 = t22.maxWidth, h2 = t22._fitRows(a1, s6, r2, l2) + 10) : (h2 = t22.maxHeight, c2 = t22._fitCols(a1, s6, r2, l2) + 10), t22.width = Math.min(c2, e10.maxWidth || t22.maxWidth), t22.height = Math.min(h2, e10.maxHeight || t22.maxHeight);
        }
        _fitRows(t, e, i, n) {
            const o5 = this, { ctx: s6 , maxWidth: a1 , options: { labels: { padding: r2  }  }  } = o5, l2 = o5.legendHitBoxes = [], c2 = o5.lineWidths = [
                0
            ], h2 = n + r2;
            let d2 = t;
            s6.textAlign = "left", s6.textBaseline = "middle";
            let u1 = -1, f1 = -h2;
            return o5.legendItems.forEach((t22, o6)=>{
                const g1 = i + e / 2 + s6.measureText(t22.text).width;
                (0 === o6 || c2[c2.length - 1] + g1 + 2 * r2 > a1) && (d2 += h2, c2[c2.length - (o6 > 0 ? 0 : 1)] = 0, f1 += h2, u1++), l2[o6] = {
                    left: 0,
                    top: f1,
                    row: u1,
                    width: g1,
                    height: n
                }, c2[c2.length - 1] += g1 + r2;
            }), d2;
        }
        _fitCols(t, e, i, n) {
            const o5 = this, { ctx: s6 , maxHeight: a1 , options: { labels: { padding: r2  }  }  } = o5, l2 = o5.legendHitBoxes = [], c2 = o5.columnSizes = [], h2 = a1 - t;
            let d2 = r2, u1 = 0, f1 = 0, g1 = 0, p1 = 0, m1 = 0;
            return o5.legendItems.forEach((t22, o6)=>{
                const a2 = i + e / 2 + s6.measureText(t22.text).width;
                o6 > 0 && f1 + e + 2 * r2 > h2 && (d2 += u1 + r2, c2.push({
                    width: u1,
                    height: f1
                }), g1 += u1 + r2, m1++, p1 = 0, u1 = f1 = 0), u1 = Math.max(u1, a2), f1 += e + r2, l2[o6] = {
                    left: g1,
                    top: p1,
                    col: m1,
                    width: a2,
                    height: n
                }, p1 += n + r2;
            }), d2 += u1, c2.push({
                width: u1,
                height: f1
            }), d2;
        }
        adjustHitBoxes() {
            const t22 = this;
            if (!t22.options.display) return;
            const e10 = t22._computeTitleHeight(), { legendHitBoxes: i5 , options: { align: n6 , labels: { padding: s6  }  }  } = t22;
            if (this.isHorizontal()) {
                let a1 = 0, r2 = o5(n6, t22.left + s6, t22.right - t22.lineWidths[a1]);
                for (const l2 of i5)a1 !== l2.row && (a1 = l2.row, r2 = o5(n6, t22.left + s6, t22.right - t22.lineWidths[a1])), l2.top += t22.top + e10 + s6, l2.left = r2, r2 += l2.width + s6;
            } else {
                let a1 = 0, r2 = o5(n6, t22.top + e10 + s6, t22.bottom - t22.columnSizes[a1].height);
                for (const l2 of i5)l2.col !== a1 && (a1 = l2.col, r2 = o5(n6, t22.top + e10 + s6, t22.bottom - t22.columnSizes[a1].height)), l2.top = r2, l2.left += t22.left + s6, r2 += l2.height + s6;
            }
        }
        isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
        }
        draw() {
            const t22 = this;
            if (t22.options.display) {
                const e10 = t22.ctx;
                Gt(e10, t22), t22._draw(), Zt(e10);
            }
        }
        _draw() {
            const t22 = this, { options: e10 , columnSizes: i5 , lineWidths: n6 , ctx: a1  } = t22, { align: r2 , labels: l2  } = e10, c2 = mt.color, h2 = fn(e10.rtl, t22.left, t22.width), d2 = Ee(l2.font), { color: u1 , padding: f1  } = l2, g1 = d2.size, p1 = g1 / 2;
            let m1;
            t22.drawTitle(), a1.textAlign = h2.textAlign("left"), a1.textBaseline = "middle", a1.lineWidth = 0.5, a1.strokeStyle = u1, a1.fillStyle = u1, a1.font = d2.string;
            const { boxWidth: x1 , boxHeight: b1 , itemHeight: _1  } = Jo(l2, g1), y1 = t22.isHorizontal(), v1 = this._computeTitleHeight();
            m1 = y1 ? {
                x: o5(r2, t22.left + f1, t22.right - n6[0]),
                y: t22.top + f1 + v1,
                line: 0
            } : {
                x: t22.left + f1,
                y: o5(r2, t22.top + v1 + f1, t22.bottom - i5[0].height),
                line: 0
            }, gn(t22.ctx, e10.textDirection);
            const M1 = _1 + f1;
            t22.legendItems.forEach((e11, u2)=>{
                const w1 = a1.measureText(e11.text).width, k1 = h2.textAlign(e11.textAlign || (e11.textAlign = l2.textAlign)), S1 = x1 + g1 / 2 + w1;
                let P1 = m1.x, D1 = m1.y;
                h2.setWidth(t22.width), y1 ? u2 > 0 && P1 + S1 + f1 > t22.right && (D1 = m1.y += M1, m1.line++, P1 = m1.x = o5(r2, t22.left + f1, t22.right - n6[m1.line])) : u2 > 0 && D1 + M1 > t22.bottom && (P1 = m1.x = P1 + i5[m1.line].width + f1, m1.line++, D1 = m1.y = o5(r2, t22.top + v1 + f1, t22.bottom - i5[m1.line].height));
                !function(t23, e12, i6) {
                    if (isNaN(x1) || x1 <= 0 || isNaN(b1) || b1 < 0) return;
                    a1.save();
                    const n7 = K(i6.lineWidth, 1);
                    if (a1.fillStyle = K(i6.fillStyle, c2), a1.lineCap = K(i6.lineCap, "butt"), a1.lineDashOffset = K(i6.lineDashOffset, 0), a1.lineJoin = K(i6.lineJoin, "miter"), a1.lineWidth = n7, a1.strokeStyle = K(i6.strokeStyle, c2), a1.setLineDash(K(i6.lineDash, [])), l2.usePointStyle) {
                        const o5 = {
                            radius: x1 * Math.SQRT2 / 2,
                            pointStyle: i6.pointStyle,
                            rotation: i6.rotation,
                            borderWidth: n7
                        }, s6 = h2.xPlus(t23, x1 / 2);
                        qt(a1, o5, s6, e12 + p1);
                    } else {
                        const i7 = e12 + Math.max((g1 - b1) / 2, 0);
                        a1.fillRect(h2.leftForLtr(t23, x1), i7, x1, b1), 0 !== n7 && a1.strokeRect(h2.leftForLtr(t23, x1), i7, x1, b1);
                    }
                    a1.restore();
                }(h2.x(P1), D1, e11), P1 = s4(k1, P1 + x1 + p1, t22.right), (function(t23, e12, i6) {
                    te(a1, i6.text, t23, e12 + _1 / 2, d2, {
                        strikethrough: i6.hidden,
                        textAlign: i6.textAlign
                    });
                })(h2.x(P1), D1, e11), y1 ? m1.x += S1 + f1 : m1.y += M1;
            }), pn(t22.ctx, e10.textDirection);
        }
        drawTitle() {
            const t22 = this, e10 = t22.options, i5 = e10.title, s6 = Ee(i5.font), a1 = Re(i5.padding);
            if (!i5.display) return;
            const r2 = fn(e10.rtl, t22.left, t22.width), l2 = t22.ctx, c2 = i5.position, h2 = s6.size / 2, d2 = a1.top + h2;
            let u1, f1 = t22.left, g1 = t22.width;
            if (this.isHorizontal()) g1 = Math.max(...t22.lineWidths), u1 = t22.top + d2, f1 = o5(e10.align, f1, t22.right - g1);
            else {
                const i6 = t22.columnSizes.reduce((t23, e11)=>Math.max(t23, e11.height)
                , 0);
                u1 = d2 + o5(e10.align, t22.top, t22.bottom - i6 - e10.labels.padding - t22._computeTitleHeight());
            }
            const p1 = o5(c2, f1, f1 + g1);
            l2.textAlign = r2.textAlign(n1(c2)), l2.textBaseline = "middle", l2.strokeStyle = i5.color, l2.fillStyle = i5.color, l2.font = s6.string, te(l2, i5.text, p1, u1, s6);
        }
        _computeTitleHeight() {
            const t22 = this.options.title, e10 = Ee(t22.font), i5 = Re(t22.padding);
            return t22.display ? e10.lineHeight + i5.height : 0;
        }
        _getLegendItemAt(t, e) {
            const i5 = this;
            let n6, o5, s6;
            if (t >= i5.left && t <= i5.right && e >= i5.top && e <= i5.bottom) for(s6 = i5.legendHitBoxes, n6 = 0; n6 < s6.length; ++n6)if (o5 = s6[n6], t >= o5.left && t <= o5.left + o5.width && e >= o5.top && e <= o5.top + o5.height) return i5.legendItems[n6];
            return null;
        }
        handleEvent(t) {
            const e10 = this, i5 = e10.options;
            if (!function(t22, e11) {
                if ("mousemove" === t22 && (e11.onHover || e11.onLeave)) return !0;
                if (e11.onClick && ("click" === t22 || "mouseup" === t22)) return !0;
                return !1;
            }(t.type, i5)) return;
            const n6 = e10._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type) {
                const a1 = e10._hoveredItem, r2 = (s6 = n6, null !== (o6 = a1) && null !== s6 && o6.datasetIndex === s6.datasetIndex && o6.index === s6.index);
                a1 && !r2 && Q(i5.onLeave, [
                    t,
                    a1,
                    e10
                ], e10), e10._hoveredItem = n6, n6 && !r2 && Q(i5.onHover, [
                    t,
                    n6,
                    e10
                ], e10);
            } else n6 && Q(i5.onClick, [
                t,
                n6,
                e10
            ], e10);
            var o6, s6;
        }
    }
    var es = {
        id: "legend",
        _element: ts,
        start (t, e, i) {
            const n6 = t.legend = new ts({
                ctx: t.ctx,
                options: i,
                chart: t
            });
            Xe.configure(t, n6, i), Xe.addBox(t, n6);
        },
        stop (t) {
            Xe.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate (t, e, i) {
            const n6 = t.legend;
            Xe.configure(t, n6, i), n6.options = i;
        },
        afterUpdate (t) {
            const e10 = t.legend;
            e10.buildLabels(), e10.adjustHitBoxes();
        },
        afterEvent (t, e) {
            e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1000,
            onClick (t, e, i) {
                const n6 = e.datasetIndex, o7 = i.chart;
                o7.isDatasetVisible(n6) ? (o7.hide(n6), e.hidden = !0) : (o7.show(n6), e.hidden = !1);
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: (t22)=>t22.chart.options.color
                ,
                boxWidth: 40,
                padding: 10,
                generateLabels (t) {
                    const e10 = t.data.datasets, { labels: { usePointStyle: i5 , pointStyle: n6 , textAlign: o7  }  } = t.legend.options;
                    return t._getSortedDatasetMetas().map((t22)=>{
                        const s7 = t22.controller.getStyle(i5 ? 0 : void 0), a1 = Re(s7.borderWidth);
                        return {
                            text: e10[t22.index].label,
                            fillStyle: s7.backgroundColor,
                            hidden: !t22.visible,
                            lineCap: s7.borderCapStyle,
                            lineDash: s7.borderDash,
                            lineDashOffset: s7.borderDashOffset,
                            lineJoin: s7.borderJoinStyle,
                            lineWidth: (a1.width + a1.height) / 4,
                            strokeStyle: s7.borderColor,
                            pointStyle: n6 || s7.pointStyle,
                            rotation: s7.rotation,
                            textAlign: o7 || s7.textAlign,
                            datasetIndex: t22.index
                        };
                    }, this);
                }
            },
            title: {
                color: (t22)=>t22.chart.options.color
                ,
                display: !1,
                position: "center",
                text: ""
            }
        },
        descriptors: {
            _scriptable: (t22)=>!t22.startsWith("on")
            ,
            labels: {
                _scriptable: (t22)=>![
                        "generateLabels",
                        "filter",
                        "sort"
                    ].includes(t22)
            }
        }
    };
    class is extends Oi {
        constructor(t22){
            super(), this.chart = t22.chart, this.options = t22.options, this.ctx = t22.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
        }
        update(t, e) {
            const i5 = this, n6 = i5.options;
            if (i5.left = 0, i5.top = 0, !n6.display) return void (i5.width = i5.height = i5.right = i5.bottom = 0);
            i5.width = i5.right = t, i5.height = i5.bottom = e;
            const o7 = Y(n6.text) ? n6.text.length : 1;
            i5._padding = Re(n6.padding);
            const s7 = o7 * Ee(n6.font).lineHeight + i5._padding.height;
            i5.isHorizontal() ? i5.height = s7 : i5.width = s7;
        }
        isHorizontal() {
            const t23 = this.options.position;
            return "top" === t23 || "bottom" === t23;
        }
        _drawArgs(t) {
            const { top: e10 , left: i5 , bottom: n6 , right: s7 , options: a1  } = this, r2 = a1.align;
            let l2, c2, h2, d2 = 0;
            return this.isHorizontal() ? (c2 = o5(r2, i5, s7), h2 = e10 + t, l2 = s7 - i5) : ("left" === a1.position ? (c2 = i5 + t, h2 = o5(r2, n6, e10), d2 = -0.5 * xt) : (c2 = s7 - t, h2 = o5(r2, e10, n6), d2 = 0.5 * xt), l2 = n6 - e10), {
                titleX: c2,
                titleY: h2,
                maxWidth: l2,
                rotation: d2
            };
        }
        draw() {
            const t23 = this, e10 = t23.ctx, i5 = t23.options;
            if (!i5.display) return;
            const o7 = Ee(i5.font), s7 = o7.lineHeight / 2 + t23._padding.top, { titleX: a1 , titleY: r2 , maxWidth: l2 , rotation: c2  } = t23._drawArgs(s7);
            te(e10, i5.text, 0, 0, o7, {
                color: i5.color,
                maxWidth: l2,
                rotation: c2,
                textAlign: n1(i5.align),
                textBaseline: "middle",
                translation: [
                    a1,
                    r2
                ]
            });
        }
    }
    var ns = {
        id: "title",
        _element: is,
        start (t, e, i) {
            !function(t23, e10) {
                const i5 = new is({
                    ctx: t23.ctx,
                    options: e10,
                    chart: t23
                });
                Xe.configure(t23, i5, e10), Xe.addBox(t23, i5), t23.titleBlock = i5;
            }(t, i);
        },
        stop (t) {
            const e10 = t.titleBlock;
            Xe.removeBox(t, e10), delete t.titleBlock;
        },
        beforeUpdate (t, e, i) {
            const n6 = t.titleBlock;
            Xe.configure(t, n6, i), n6.options = i;
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                style: "bold"
            },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2000
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const os = {
        average (t) {
            if (!t.length) return !1;
            let e10, i5, n6 = 0, o7 = 0, s7 = 0;
            for(e10 = 0, i5 = t.length; e10 < i5; ++e10){
                const i6 = t[e10].element;
                if (i6 && i6.hasValue()) {
                    const t23 = i6.tooltipPosition();
                    n6 += t23.x, o7 += t23.y, ++s7;
                }
            }
            return {
                x: n6 / s7,
                y: o7 / s7
            };
        },
        nearest (t, e) {
            let i5, n6, o7, s7 = e.x, a1 = e.y, r2 = Number.POSITIVE_INFINITY;
            for(i5 = 0, n6 = t.length; i5 < n6; ++i5){
                const n7 = t[i5].element;
                if (n7 && n7.hasValue()) {
                    const t23 = zt(e, n7.getCenterPoint());
                    t23 < r2 && (r2 = t23, o7 = n7);
                }
            }
            if (o7) {
                const t23 = o7.tooltipPosition();
                s7 = t23.x, a1 = t23.y;
            }
            return {
                x: s7,
                y: a1
            };
        }
    };
    function ss(t23, e10) {
        return e10 && (Y(e10) ? Array.prototype.push.apply(t23, e10) : t23.push(e10)), t23;
    }
    function as(t23) {
        return ("string" == typeof t23 || t23 instanceof String) && t23.indexOf("\n") > -1 ? t23.split("\n") : t23;
    }
    function rs(t23, e10) {
        const { element: i5 , datasetIndex: n6 , index: o7  } = e10, s7 = t23.getDatasetMeta(n6).controller, { label: a1 , value: r2  } = s7.getLabelAndValue(o7);
        return {
            chart: t23,
            label: a1,
            parsed: s7.getParsed(o7),
            raw: t23.data.datasets[n6].data[o7],
            formattedValue: r2,
            dataset: s7.getDataset(),
            dataIndex: o7,
            datasetIndex: n6,
            element: i5
        };
    }
    function ls(t23, e10) {
        const i5 = t23._chart.ctx, { body: n6 , footer: o7 , title: s7  } = t23, { boxWidth: a1 , boxHeight: r2  } = e10, l2 = Ee(e10.bodyFont), c2 = Ee(e10.titleFont), h2 = Ee(e10.footerFont), d2 = s7.length, u1 = o7.length, f1 = n6.length, g1 = Re(e10.padding);
        let p1 = g1.height, m1 = 0, x1 = n6.reduce((t24, e11)=>t24 + e11.before.length + e11.lines.length + e11.after.length
        , 0);
        if (x1 += t23.beforeBody.length + t23.afterBody.length, d2 && (p1 += d2 * c2.lineHeight + (d2 - 1) * e10.titleSpacing + e10.titleMarginBottom), x1) p1 += f1 * (e10.displayColors ? Math.max(r2, l2.lineHeight) : l2.lineHeight) + (x1 - f1) * l2.lineHeight + (x1 - 1) * e10.bodySpacing;
        u1 && (p1 += e10.footerMarginTop + u1 * h2.lineHeight + (u1 - 1) * e10.footerSpacing);
        let b1 = 0;
        const _1 = function(t24) {
            m1 = Math.max(m1, i5.measureText(t24).width + b1);
        };
        return i5.save(), i5.font = c2.string, J(t23.title, _1), i5.font = l2.string, J(t23.beforeBody.concat(t23.afterBody), _1), b1 = e10.displayColors ? a1 + 2 : 0, J(n6, (t24)=>{
            J(t24.before, _1), J(t24.lines, _1), J(t24.after, _1);
        }), b1 = 0, i5.font = h2.string, J(t23.footer, _1), i5.restore(), m1 += g1.width, {
            width: m1,
            height: p1
        };
    }
    function cs(t23, e10, i5, n6) {
        const { x: o7 , width: s7  } = i5, { width: a1 , chartArea: { left: r2 , right: l2  }  } = t23;
        let c2 = "center";
        return "center" === n6 ? c2 = o7 <= (r2 + l2) / 2 ? "left" : "right" : o7 <= s7 / 2 ? c2 = "left" : o7 >= a1 - s7 / 2 && (c2 = "right"), (function(t24, e11, i6, n7) {
            const { x: o8 , width: s8  } = n7, a2 = i6.caretSize + i6.caretPadding;
            return "left" === t24 && o8 + s8 + a2 > e11.width || "right" === t24 && o8 - s8 - a2 < 0 || void 0;
        })(c2, t23, e10, i5) && (c2 = "center"), c2;
    }
    function hs(t23, e10, i5) {
        const n6 = e10.yAlign || function(t24, e11) {
            const { y: i6 , height: n7  } = e11;
            return i6 < n7 / 2 ? "top" : i6 > t24.height - n7 / 2 ? "bottom" : "center";
        }(t23, i5);
        return {
            xAlign: e10.xAlign || cs(t23, e10, i5, n6),
            yAlign: n6
        };
    }
    function ds(t23, e10, i5, n6) {
        const { caretSize: o7 , caretPadding: s7 , cornerRadius: a1  } = t23, { xAlign: r2 , yAlign: l2  } = i5, c2 = o7 + s7, h2 = a1 + s7;
        let d2 = function(t24, e11) {
            let { x: i6 , width: n7  } = t24;
            return "right" === e11 ? i6 -= n7 : "center" === e11 && (i6 -= n7 / 2), i6;
        }(e10, r2);
        const u1 = function(t24, e11, i6) {
            let { y: n7 , height: o8  } = t24;
            return "top" === e11 ? n7 += i6 : n7 -= "bottom" === e11 ? o8 + i6 : o8 / 2, n7;
        }(e10, l2, c2);
        return "center" === l2 ? "left" === r2 ? d2 += c2 : "right" === r2 && (d2 -= c2) : "left" === r2 ? d2 -= h2 : "right" === r2 && (d2 += h2), {
            x: Ht(d2, 0, n6.width - e10.width),
            y: Ht(u1, 0, n6.height - e10.height)
        };
    }
    function us(t23, e10, i5) {
        const n6 = Re(i5.padding);
        return "center" === e10 ? t23.x + t23.width / 2 : "right" === e10 ? t23.x + t23.width - n6.right : t23.x + n6.left;
    }
    function fs(t23) {
        return ss([], as(t23));
    }
    function gs(t23, e10) {
        const i5 = e10 && e10.dataset && e10.dataset.tooltip && e10.dataset.tooltip.callbacks;
        return i5 ? t23.override(i5) : t23;
    }
    class ps extends Oi {
        constructor(t23){
            super(), this.opacity = 0, this._active = [], this._chart = t23._chart, this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.options = t23.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const t24 = this, e10 = t24._cachedAnimations;
            if (e10) return e10;
            const i5 = t24._chart, n6 = t24.options.setContext(t24.getContext()), o7 = n6.enabled && i5.options.animation && n6.animations, s7 = new bi(t24._chart, o7);
            return o7._cacheable && (t24._cachedAnimations = Object.freeze(s7)), s7;
        }
        getContext() {
            const t24 = this;
            var e10, i5, n6;
            return t24.$context || (t24.$context = (e10 = t24._chart.getContext(), i5 = t24, n6 = t24._tooltipItems, Object.assign(Object.create(e10), {
                tooltip: i5,
                tooltipItems: n6,
                type: "tooltip"
            })));
        }
        getTitle(t, e) {
            const i6 = this, { callbacks: n7  } = e, o7 = n7.beforeTitle.apply(i6, [
                t
            ]), s7 = n7.title.apply(i6, [
                t
            ]), a1 = n7.afterTitle.apply(i6, [
                t
            ]);
            let r2 = [];
            return r2 = ss(r2, as(o7)), r2 = ss(r2, as(s7)), r2 = ss(r2, as(a1)), r2;
        }
        getBeforeBody(t, e) {
            return fs(e.callbacks.beforeBody.apply(this, [
                t
            ]));
        }
        getBody(t, e) {
            const i6 = this, { callbacks: n7  } = e, o7 = [];
            return J(t, (t24)=>{
                const e11 = {
                    before: [],
                    lines: [],
                    after: []
                }, s7 = gs(n7, t24);
                ss(e11.before, as(s7.beforeLabel.call(i6, t24))), ss(e11.lines, s7.label.call(i6, t24)), ss(e11.after, as(s7.afterLabel.call(i6, t24))), o7.push(e11);
            }), o7;
        }
        getAfterBody(t, e) {
            return fs(e.callbacks.afterBody.apply(this, [
                t
            ]));
        }
        getFooter(t, e) {
            const i6 = this, { callbacks: n7  } = e, o7 = n7.beforeFooter.apply(i6, [
                t
            ]), s7 = n7.footer.apply(i6, [
                t
            ]), a1 = n7.afterFooter.apply(i6, [
                t
            ]);
            let r2 = [];
            return r2 = ss(r2, as(o7)), r2 = ss(r2, as(s7)), r2 = ss(r2, as(a1)), r2;
        }
        _createItems(t) {
            const e11 = this, i6 = e11._active, n7 = e11._chart.data, o7 = [], s7 = [], a1 = [];
            let r2, l2, c2 = [];
            for(r2 = 0, l2 = i6.length; r2 < l2; ++r2)c2.push(rs(e11._chart, i6[r2]));
            return t.filter && (c2 = c2.filter((e12, i7, o8)=>t.filter(e12, i7, o8, n7)
            )), t.itemSort && (c2 = c2.sort((e12, i7)=>t.itemSort(e12, i7, n7)
            )), J(c2, (i7)=>{
                const n8 = gs(t.callbacks, i7);
                o7.push(n8.labelColor.call(e11, i7)), s7.push(n8.labelPointStyle.call(e11, i7)), a1.push(n8.labelTextColor.call(e11, i7));
            }), e11.labelColors = o7, e11.labelPointStyles = s7, e11.labelTextColors = a1, e11.dataPoints = c2, c2;
        }
        update(t, e) {
            const i6 = this, n7 = i6.options.setContext(i6.getContext()), o7 = i6._active;
            let s7, a1 = [];
            if (o7.length) {
                const t24 = os[n7.position].call(i6, o7, i6._eventPosition);
                a1 = i6._createItems(n7), i6.title = i6.getTitle(a1, n7), i6.beforeBody = i6.getBeforeBody(a1, n7), i6.body = i6.getBody(a1, n7), i6.afterBody = i6.getAfterBody(a1, n7), i6.footer = i6.getFooter(a1, n7);
                const e11 = i6._size = ls(i6, n7), r2 = Object.assign({
                }, t24, e11), l2 = hs(i6._chart, n7, r2), c2 = ds(n7, r2, l2, i6._chart);
                i6.xAlign = l2.xAlign, i6.yAlign = l2.yAlign, s7 = {
                    opacity: 1,
                    x: c2.x,
                    y: c2.y,
                    width: e11.width,
                    height: e11.height,
                    caretX: t24.x,
                    caretY: t24.y
                };
            } else 0 !== i6.opacity && (s7 = {
                opacity: 0
            });
            i6._tooltipItems = a1, i6.$context = void 0, s7 && i6._resolveAnimations().update(i6, s7), t && n7.external && n7.external.call(i6, {
                chart: i6._chart,
                tooltip: i6,
                replay: e
            });
        }
        drawCaret(t, e, i, n) {
            const o7 = this.getCaretPosition(t, i, n);
            e.lineTo(o7.x1, o7.y1), e.lineTo(o7.x2, o7.y2), e.lineTo(o7.x3, o7.y3);
        }
        getCaretPosition(t, e, i) {
            const { xAlign: n7 , yAlign: o7  } = this, { cornerRadius: s7 , caretSize: a1  } = i, { x: r2 , y: l2  } = t, { width: c2 , height: h2  } = e;
            let d2, u1, f1, g1, p1, m1;
            return "center" === o7 ? (p1 = l2 + h2 / 2, "left" === n7 ? (d2 = r2, u1 = d2 - a1, g1 = p1 + a1, m1 = p1 - a1) : (d2 = r2 + c2, u1 = d2 + a1, g1 = p1 - a1, m1 = p1 + a1), f1 = d2) : (u1 = "left" === n7 ? r2 + s7 + a1 : "right" === n7 ? r2 + c2 - s7 - a1 : this.caretX, "top" === o7 ? (g1 = l2, p1 = g1 - a1, d2 = u1 - a1, f1 = u1 + a1) : (g1 = l2 + h2, p1 = g1 + a1, d2 = u1 + a1, f1 = u1 - a1), m1 = g1), {
                x1: d2,
                x2: u1,
                x3: f1,
                y1: g1,
                y2: p1,
                y3: m1
            };
        }
        drawTitle(t, e, i) {
            const n7 = this, o7 = n7.title, s7 = o7.length;
            let a1, r2, l2;
            if (s7) {
                const c2 = fn(i.rtl, n7.x, n7.width);
                for(t.x = us(n7, i.titleAlign, i), e.textAlign = c2.textAlign(i.titleAlign), e.textBaseline = "middle", a1 = Ee(i.titleFont), r2 = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a1.string, l2 = 0; l2 < s7; ++l2)e.fillText(o7[l2], c2.x(t.x), t.y + a1.lineHeight / 2), t.y += a1.lineHeight + r2, l2 + 1 === s7 && (t.y += i.titleMarginBottom - r2);
            }
        }
        _drawColorBox(t, e, i, n, o) {
            const s7 = this, a1 = s7.labelColors[i], r2 = s7.labelPointStyles[i], { boxHeight: l2 , boxWidth: c2  } = o, h2 = Ee(o.bodyFont), d2 = us(s7, "left", o), u1 = n.x(d2), f1 = l2 < h2.lineHeight ? (h2.lineHeight - l2) / 2 : 0, g1 = e.y + f1;
            if (o.usePointStyle) {
                const e11 = {
                    radius: Math.min(c2, l2) / 2,
                    pointStyle: r2.pointStyle,
                    rotation: r2.rotation,
                    borderWidth: 1
                }, i6 = n.leftForLtr(u1, c2) + c2 / 2, s8 = g1 + l2 / 2;
                t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, qt(t, e11, i6, s8), t.strokeStyle = a1.borderColor, t.fillStyle = a1.backgroundColor, qt(t, e11, i6, s8);
            } else t.fillStyle = o.multiKeyBackground, t.fillRect(n.leftForLtr(u1, c2), g1, c2, l2), t.lineWidth = 1, t.strokeStyle = a1.borderColor, t.strokeRect(n.leftForLtr(u1, c2), g1, c2, l2), t.fillStyle = a1.backgroundColor, t.fillRect(n.leftForLtr(n.xPlus(u1, 1), c2 - 2), g1 + 1, c2 - 2, l2 - 2);
            t.fillStyle = s7.labelTextColors[i];
        }
        drawBody(t, e, i) {
            const n7 = this, { body: o7  } = n7, { bodySpacing: s7 , bodyAlign: a1 , displayColors: r2 , boxHeight: l2 , boxWidth: c2  } = i, h2 = Ee(i.bodyFont);
            let d2 = h2.lineHeight, u1 = 0;
            const f1 = fn(i.rtl, n7.x, n7.width), g1 = function(i6) {
                e.fillText(i6, f1.x(t.x + u1), t.y + d2 / 2), t.y += d2 + s7;
            }, p1 = f1.textAlign(a1);
            let m1, x1, b1, _1, y1, v1, M1;
            for(e.textAlign = a1, e.textBaseline = "middle", e.font = h2.string, t.x = us(n7, p1, i), e.fillStyle = i.bodyColor, J(n7.beforeBody, g1), u1 = r2 && "right" !== p1 ? "center" === a1 ? c2 / 2 + 1 : c2 + 2 : 0, _1 = 0, v1 = o7.length; _1 < v1; ++_1){
                for(m1 = o7[_1], x1 = n7.labelTextColors[_1], e.fillStyle = x1, J(m1.before, g1), b1 = m1.lines, r2 && b1.length && (n7._drawColorBox(e, t, _1, f1, i), d2 = Math.max(h2.lineHeight, l2)), y1 = 0, M1 = b1.length; y1 < M1; ++y1)g1(b1[y1]), d2 = h2.lineHeight;
                J(m1.after, g1);
            }
            u1 = 0, d2 = h2.lineHeight, J(n7.afterBody, g1), t.y -= s7;
        }
        drawFooter(t, e, i) {
            const n7 = this, o7 = n7.footer, s7 = o7.length;
            let a1, r2;
            if (s7) {
                const l2 = fn(i.rtl, n7.x, n7.width);
                for(t.x = us(n7, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l2.textAlign(i.footerAlign), e.textBaseline = "middle", a1 = Ee(i.footerFont), e.fillStyle = i.footerColor, e.font = a1.string, r2 = 0; r2 < s7; ++r2)e.fillText(o7[r2], l2.x(t.x), t.y + a1.lineHeight / 2), t.y += a1.lineHeight + i.footerSpacing;
            }
        }
        drawBackground(t, e, i, n) {
            const { xAlign: o7 , yAlign: s7  } = this, { x: a1 , y: r2  } = t, { width: l2 , height: c2  } = i, h2 = n.cornerRadius;
            e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a1 + h2, r2), "top" === s7 && this.drawCaret(t, e, i, n), e.lineTo(a1 + l2 - h2, r2), e.quadraticCurveTo(a1 + l2, r2, a1 + l2, r2 + h2), "center" === s7 && "right" === o7 && this.drawCaret(t, e, i, n), e.lineTo(a1 + l2, r2 + c2 - h2), e.quadraticCurveTo(a1 + l2, r2 + c2, a1 + l2 - h2, r2 + c2), "bottom" === s7 && this.drawCaret(t, e, i, n), e.lineTo(a1 + h2, r2 + c2), e.quadraticCurveTo(a1, r2 + c2, a1, r2 + c2 - h2), "center" === s7 && "left" === o7 && this.drawCaret(t, e, i, n), e.lineTo(a1, r2 + h2), e.quadraticCurveTo(a1, r2, a1 + h2, r2), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
            const e11 = this, i6 = e11._chart, n7 = e11.$animations, o7 = n7 && n7.x, s7 = n7 && n7.y;
            if (o7 || s7) {
                const n8 = os[t.position].call(e11, e11._active, e11._eventPosition);
                if (!n8) return;
                const a1 = e11._size = ls(e11, t), r2 = Object.assign({
                }, n8, e11._size), l2 = hs(i6, t, r2), c2 = ds(t, r2, l2, i6);
                o7._to === c2.x && s7._to === c2.y || (e11.xAlign = l2.xAlign, e11.yAlign = l2.yAlign, e11.width = a1.width, e11.height = a1.height, e11.caretX = n8.x, e11.caretY = n8.y, e11._resolveAnimations().update(e11, c2));
            }
        }
        draw(t) {
            const e11 = this, i6 = e11.options.setContext(e11.getContext());
            let n7 = e11.opacity;
            if (!n7) return;
            e11._updateAnimationTarget(i6);
            const o7 = {
                width: e11.width,
                height: e11.height
            }, s7 = {
                x: e11.x,
                y: e11.y
            };
            n7 = Math.abs(n7) < 0.001 ? 0 : n7;
            const a1 = Re(i6.padding), r2 = e11.title.length || e11.beforeBody.length || e11.body.length || e11.afterBody.length || e11.footer.length;
            i6.enabled && r2 && (t.save(), t.globalAlpha = n7, e11.drawBackground(s7, t, o7, i6), gn(t, i6.textDirection), s7.y += a1.top, e11.drawTitle(s7, t, i6), e11.drawBody(s7, t, i6), e11.drawFooter(s7, t, i6), pn(t, i6.textDirection), t.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t, e) {
            const i6 = this, n7 = i6._active, o7 = t.map(({ datasetIndex: t24 , index: e11  })=>{
                const n8 = i6._chart.getDatasetMeta(t24);
                if (!n8) throw new Error("Cannot find a dataset at index " + t24);
                return {
                    datasetIndex: t24,
                    element: n8.data[e11],
                    index: e11
                };
            }), s7 = !tt(n7, o7), a1 = i6._positionChanged(o7, e);
            (s7 || a1) && (i6._active = o7, i6._eventPosition = e, i6.update(!0));
        }
        handleEvent(t, e) {
            const i6 = this, n7 = i6.options, o7 = i6._active || [];
            let s7 = !1, a1 = [];
            "mouseout" !== t.type && (a1 = i6._chart.getElementsAtEventForMode(t, n7.mode, n7, e), n7.reverse && a1.reverse());
            const r2 = i6._positionChanged(a1, t);
            return s7 = e || !tt(a1, o7) || r2, s7 && (i6._active = a1, (n7.enabled || n7.external) && (i6._eventPosition = {
                x: t.x,
                y: t.y
            }, i6.update(!0, e))), s7;
        }
        _positionChanged(t, e) {
            const i6 = this, n7 = os[i6.options.position].call(i6, t, e);
            return i6.caretX !== n7.x || i6.caretY !== n7.y;
        }
    }
    ps.positioners = os;
    var ms = {
        id: "tooltip",
        _element: ps,
        positioners: os,
        afterInit (t, e, i) {
            i && (t.tooltip = new ps({
                _chart: t,
                options: i
            }));
        },
        beforeUpdate (t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
        },
        reset (t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
        },
        afterDraw (t) {
            const e11 = t.tooltip, i6 = {
                tooltip: e11
            };
            !1 !== t.notifyPlugins("beforeTooltipDraw", i6) && (e11 && e11.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i6));
        },
        afterEvent (t, e) {
            if (t.tooltip) {
                const i6 = e.replay;
                t.tooltip.handleEvent(e.event, i6) && (e.changed = !0);
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {
                style: "bold"
            },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {
            },
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {
                style: "bold"
            },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t24, e11)=>e11.bodyFont.size
            ,
            boxWidth: (t24, e11)=>e11.bodyFont.size
            ,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {
                duration: 400,
                easing: "easeOutQuart"
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: [
                        "x",
                        "y",
                        "width",
                        "height",
                        "caretX",
                        "caretY"
                    ]
                },
                opacity: {
                    easing: "linear",
                    duration: 200
                }
            },
            callbacks: {
                beforeTitle: N,
                title (t) {
                    if (t.length > 0) {
                        const e11 = t[0], i6 = e11.chart.data.labels, n7 = i6 ? i6.length : 0;
                        if (this && this.options && "dataset" === this.options.mode) return e11.dataset.label || "";
                        if (e11.label) return e11.label;
                        if (n7 > 0 && e11.dataIndex < n7) return i6[e11.dataIndex];
                    }
                    return "";
                },
                afterTitle: N,
                beforeBody: N,
                beforeLabel: N,
                label (t) {
                    if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                    let e11 = t.dataset.label || "";
                    e11 && (e11 += ": ");
                    const i6 = t.formattedValue;
                    return $(i6) || (e11 += i6), e11;
                },
                labelColor (t) {
                    const e11 = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        borderColor: e11.borderColor,
                        backgroundColor: e11.backgroundColor
                    };
                },
                labelTextColor () {
                    return this.options.bodyColor;
                },
                labelPointStyle (t) {
                    const e11 = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                    return {
                        pointStyle: e11.pointStyle,
                        rotation: e11.rotation
                    };
                },
                afterLabel: N,
                afterBody: N,
                beforeFooter: N,
                footer: N,
                afterFooter: N
            }
        },
        defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
        },
        descriptors: {
            _scriptable: (t24)=>"filter" !== t24 && "itemSort" !== t24 && "external" !== t24
            ,
            _indexable: !1,
            callbacks: {
                _scriptable: !1,
                _indexable: !1
            },
            animation: {
                _fallback: !1
            },
            animations: {
                _fallback: "animation"
            }
        },
        additionalOptionScopes: [
            "interaction"
        ]
    }, xs = Object.freeze({
        __proto__: null,
        Decimation: Fo,
        Filler: Qo,
        Legend: es,
        Title: ns,
        Tooltip: ms
    });
    function bs(t24, e11, i6) {
        const n7 = t24.indexOf(e11);
        if (-1 === n7) return ((t25, e12, i7)=>"string" == typeof e12 ? t25.push(e12) - 1 : isNaN(e12) ? null : i7
        )(t24, e11, i6);
        return n7 !== t24.lastIndexOf(e11) ? i6 : n7;
    }
    class _s extends ji {
        constructor(t24){
            super(t24), this._startValue = void 0, this._valueRange = 0;
        }
        parse(t, e) {
            if ($(t)) return null;
            const i6 = this.getLabels();
            return ((t25, e11)=>null === t25 ? null : Ht(Math.round(t25), 0, e11)
            )(e = isFinite(e) && i6[e] === t ? e : bs(i6, t, K(e, t)), i6.length - 1);
        }
        determineDataLimits() {
            const t25 = this, { minDefined: e11 , maxDefined: i6  } = t25.getUserBounds();
            let { min: n7 , max: o7  } = t25.getMinMax(!0);
            "ticks" === t25.options.bounds && (e11 || (n7 = 0), i6 || (o7 = t25.getLabels().length - 1)), t25.min = n7, t25.max = o7;
        }
        buildTicks() {
            const t25 = this, e11 = t25.min, i6 = t25.max, n7 = t25.options.offset, o7 = [];
            let s7 = t25.getLabels();
            s7 = 0 === e11 && i6 === s7.length - 1 ? s7 : s7.slice(e11, i6 + 1), t25._valueRange = Math.max(s7.length - (n7 ? 0 : 1), 1), t25._startValue = t25.min - (n7 ? 0.5 : 0);
            for(let t26 = e11; t26 <= i6; t26++)o7.push({
                value: t26
            });
            return o7;
        }
        getLabelForValue(t) {
            const e11 = this.getLabels();
            return t >= 0 && t < e11.length ? e11[t] : t;
        }
        configure() {
            const t25 = this;
            super.configure(), t25.isHorizontal() || (t25._reversePixels = !t25._reversePixels);
        }
        getPixelForValue(t) {
            const e11 = this;
            return "number" != typeof t && (t = e11.parse(t)), null === t ? NaN : e11.getPixelForDecimal((t - e11._startValue) / e11._valueRange);
        }
        getPixelForTick(t) {
            const e11 = this.ticks;
            return t < 0 || t > e11.length - 1 ? null : this.getPixelForValue(e11[t].value);
        }
        getValueForPixel(t) {
            const e11 = this;
            return Math.round(e11._startValue + e11.getDecimalForPixel(t) * e11._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
    }
    _s.id = "category", _s.defaults = {
        ticks: {
            callback: _s.prototype.getLabelForValue
        }
    };
    class ys extends ji {
        constructor(t25){
            super(t25), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
        parse(t, e) {
            return $(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
        }
        handleTickRangeOptions() {
            const t26 = this, { beginAtZero: e11 , stacked: i6  } = t26.options, { minDefined: n7 , maxDefined: o7  } = t26.getUserBounds();
            let { min: s7 , max: a1  } = t26;
            const r2 = (t27)=>s7 = n7 ? s7 : t27
            , l2 = (t27)=>a1 = o7 ? a1 : t27
            ;
            if (e11 || i6) {
                const t27 = Pt(s7), e12 = Pt(a1);
                t27 < 0 && e12 < 0 ? l2(0) : t27 > 0 && e12 > 0 && r2(0);
            }
            s7 === a1 && (l2(a1 + 1), e11 || r2(s7 - 1)), t26.min = s7, t26.max = a1;
        }
        getTickLimit() {
            const t26 = this, e11 = t26.options.ticks;
            let i6, { maxTicksLimit: n7 , stepSize: o7  } = e11;
            return o7 ? i6 = Math.ceil(t26.max / o7) - Math.floor(t26.min / o7) + 1 : (i6 = t26.computeTickLimit(), n7 = n7 || 11), n7 && (i6 = Math.min(n7, i6)), i6;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const t26 = this, e11 = t26.options, i6 = e11.ticks;
            let n7 = t26.getTickLimit();
            n7 = Math.max(2, n7);
            const o7 = function(t27, e12) {
                const i7 = [], { step: n8 , min: o8 , max: s7 , precision: a1 , count: r2 , maxTicks: l2  } = t27, c2 = n8 || 1, h2 = l2 - 1, { min: d2 , max: u1  } = e12, f1 = !$(o8), g1 = !$(s7), p1 = !$(r2);
                let m1, x1, b1, _1, y1 = Dt((u1 - d2) / h2 / c2) * c2;
                if (y1 < 0.00000000000001 && !f1 && !g1) return [
                    {
                        value: d2
                    },
                    {
                        value: u1
                    }
                ];
                _1 = Math.ceil(u1 / y1) - Math.floor(d2 / y1), _1 > h2 && (y1 = Dt(_1 * y1 / h2 / c2) * c2), $(a1) || (m1 = Math.pow(10, a1), y1 = Math.ceil(y1 * m1) / m1), x1 = Math.floor(d2 / y1) * y1, b1 = Math.ceil(u1 / y1) * y1, f1 && g1 && n8 && Tt((s7 - o8) / n8, y1 / 1000) ? (_1 = Math.min((s7 - o8) / y1, l2), y1 = (s7 - o8) / _1, x1 = o8, b1 = s7) : p1 ? (x1 = f1 ? o8 : x1, b1 = g1 ? s7 : b1, _1 = r2 - 1, y1 = (b1 - x1) / _1) : (_1 = (b1 - x1) / y1, _1 = Ot(_1, Math.round(_1), y1 / 1000) ? Math.round(_1) : Math.ceil(_1)), m1 = Math.pow(10, $(a1) ? It(y1) : a1), x1 = Math.round(x1 * m1) / m1, b1 = Math.round(b1 * m1) / m1;
                let v1 = 0;
                for(f1 && (i7.push({
                    value: o8
                }), x1 <= o8 && v1++, Ot(Math.round((x1 + v1 * y1) * m1) / m1, o8, y1 / 10) && v1++); v1 < _1; ++v1)i7.push({
                    value: Math.round((x1 + v1 * y1) * m1) / m1
                });
                return g1 ? Ot(i7[i7.length - 1].value, s7, y1 / 10) ? i7[i7.length - 1].value = s7 : i7.push({
                    value: s7
                }) : i7.push({
                    value: b1
                }), i7;
            }({
                maxTicks: n7,
                min: e11.min,
                max: e11.max,
                precision: i6.precision,
                step: i6.stepSize,
                count: i6.count
            }, Fe(t26, e11.grace));
            return "ticks" === e11.bounds && Lt(o7, t26, "value"), e11.reverse ? (o7.reverse(), t26.start = t26.max, t26.end = t26.min) : (t26.start = t26.min, t26.end = t26.max), o7;
        }
        configure() {
            const t26 = this, e11 = t26.ticks;
            let i6 = t26.min, n7 = t26.max;
            if (super.configure(), t26.options.offset && e11.length) {
                const t27 = (n7 - i6) / Math.max(e11.length - 1, 1) / 2;
                i6 -= t27, n7 += t27;
            }
            t26._startValue = i6, t26._endValue = n7, t26._valueRange = n7 - i6;
        }
        getLabelForValue(t) {
            return Li(t, this.chart.options.locale);
        }
    }
    class vs extends ys {
        determineDataLimits() {
            const t26 = this, { min: e11 , max: i6  } = t26.getMinMax(!0);
            t26.min = X(e11) ? e11 : 0, t26.max = X(i6) ? i6 : 1, t26.handleTickRangeOptions();
        }
        computeTickLimit() {
            const t26 = this;
            if (t26.isHorizontal()) return Math.ceil(t26.width / 40);
            const e11 = t26._resolveTickFontOptions(0);
            return Math.ceil(t26.height / e11.lineHeight);
        }
        getPixelForValue(t) {
            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
    }
    function Ms(t26) {
        return 1 === t26 / Math.pow(10, Math.floor(St(t26)));
    }
    vs.id = "linear", vs.defaults = {
        ticks: {
            callback: Ei.formatters.numeric
        }
    };
    class ws extends ji {
        constructor(t26){
            super(t26), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
        parse(t, e) {
            const i6 = ys.prototype.parse.apply(this, [
                t,
                e
            ]);
            if (0 !== i6) return X(i6) && i6 > 0 ? i6 : null;
            this._zero = !0;
        }
        determineDataLimits() {
            const t27 = this, { min: e11 , max: i6  } = t27.getMinMax(!0);
            t27.min = X(e11) ? Math.max(0, e11) : null, t27.max = X(i6) ? Math.max(0, i6) : null, t27.options.beginAtZero && (t27._zero = !0), t27.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const t27 = this, { minDefined: e11 , maxDefined: i6  } = t27.getUserBounds();
            let n7 = t27.min, o7 = t27.max;
            const s7 = (t28)=>n7 = e11 ? n7 : t28
            , a1 = (t28)=>o7 = i6 ? o7 : t28
            , r2 = (t28, e12)=>Math.pow(10, Math.floor(St(t28)) + e12)
            ;
            n7 === o7 && (n7 <= 0 ? (s7(1), a1(10)) : (s7(r2(n7, -1)), a1(r2(o7, 1)))), n7 <= 0 && s7(r2(o7, -1)), o7 <= 0 && a1(r2(n7, 1)), t27._zero && t27.min !== t27._suggestedMin && n7 === r2(t27.min, 0) && s7(r2(n7, -1)), t27.min = n7, t27.max = o7;
        }
        buildTicks() {
            const t27 = this, e11 = t27.options, i6 = function(t28, e12) {
                const i7 = Math.floor(St(e12.max)), n7 = Math.ceil(e12.max / Math.pow(10, i7)), o7 = [];
                let s7 = q(t28.min, Math.pow(10, Math.floor(St(e12.min)))), a1 = Math.floor(St(s7)), r2 = Math.floor(s7 / Math.pow(10, a1)), l2 = a1 < 0 ? Math.pow(10, Math.abs(a1)) : 1;
                do o7.push({
                    value: s7,
                    major: Ms(s7)
                }), ++r2, 10 === r2 && (r2 = 1, ++a1, l2 = a1 >= 0 ? 1 : l2), s7 = Math.round(r2 * Math.pow(10, a1) * l2) / l2;
                while (a1 < i7 || a1 === i7 && r2 < n7)
                const c2 = q(t28.max, s7);
                return o7.push({
                    value: c2,
                    major: Ms(s7)
                }), o7;
            }({
                min: t27._userMin,
                max: t27._userMax
            }, t27);
            return "ticks" === e11.bounds && Lt(i6, t27, "value"), e11.reverse ? (i6.reverse(), t27.start = t27.max, t27.end = t27.min) : (t27.start = t27.min, t27.end = t27.max), i6;
        }
        getLabelForValue(t) {
            return (void 0) === t ? "0" : Li(t, this.chart.options.locale);
        }
        configure() {
            const t27 = this, e11 = t27.min;
            super.configure(), t27._startValue = St(e11), t27._valueRange = St(t27.max) - St(e11);
        }
        getPixelForValue(t) {
            const e11 = this;
            return (void 0) !== t && 0 !== t || (t = e11.min), null === t || isNaN(t) ? NaN : e11.getPixelForDecimal(t === e11.min ? 0 : (St(t) - e11._startValue) / e11._valueRange);
        }
        getValueForPixel(t) {
            const e11 = this, i6 = e11.getDecimalForPixel(t);
            return Math.pow(10, e11._startValue + i6 * e11._valueRange);
        }
    }
    function ks(t27) {
        const e11 = t27.ticks;
        if (e11.display && t27.display) {
            const t28 = Re(e11.backdropPadding);
            return K(e11.font && e11.font.size, mt.font.size) + t28.height;
        }
        return 0;
    }
    function Ss(t27, e11, i6, n7, o7) {
        return t27 === n7 || t27 === o7 ? {
            start: e11 - i6 / 2,
            end: e11 + i6 / 2
        } : t27 < n7 || t27 > o7 ? {
            start: e11 - i6,
            end: e11
        } : {
            start: e11,
            end: e11 + i6
        };
    }
    function Ps(t27) {
        return 0 === t27 || 180 === t27 ? "center" : t27 < 180 ? "left" : "right";
    }
    function Ds(t27, e11, i6) {
        90 === t27 || 270 === t27 ? i6.y -= e11.h / 2 : (t27 > 270 || t27 < 90) && (i6.y -= e11.h);
    }
    function Cs(t27, e11, i6, n7) {
        const { ctx: o7  } = t27;
        if (i6) o7.arc(t27.xCenter, t27.yCenter, e11, 0, bt);
        else {
            let i7 = t27.getPointPosition(0, e11);
            o7.moveTo(i7.x, i7.y);
            for(let s7 = 1; s7 < n7; s7++)i7 = t27.getPointPosition(s7, e11), o7.lineTo(i7.x, i7.y);
        }
    }
    function As(t27) {
        return At(t27) ? t27 : 0;
    }
    ws.id = "logarithmic", ws.defaults = {
        ticks: {
            callback: Ei.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    };
    class Os extends ys {
        constructor(t27){
            super(t27), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
        setDimensions() {
            const t28 = this;
            t28.width = t28.maxWidth, t28.height = t28.maxHeight, t28.paddingTop = ks(t28.options) / 2, t28.xCenter = Math.floor(t28.width / 2), t28.yCenter = Math.floor((t28.height - t28.paddingTop) / 2), t28.drawingArea = Math.min(t28.height - t28.paddingTop, t28.width) / 2;
        }
        determineDataLimits() {
            const t28 = this, { min: e11 , max: i6  } = t28.getMinMax(!1);
            t28.min = X(e11) && !isNaN(e11) ? e11 : 0, t28.max = X(i6) && !isNaN(i6) ? i6 : 0, t28.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / ks(this.options));
        }
        generateTickLabels(t) {
            const e11 = this;
            ys.prototype.generateTickLabels.call(e11, t), e11._pointLabels = e11.getLabels().map((t28, i6)=>{
                const n7 = Q(e11.options.pointLabels.callback, [
                    t28,
                    i6
                ], e11);
                return n7 || 0 === n7 ? n7 : "";
            });
        }
        fit() {
            const t28 = this, e11 = t28.options;
            e11.display && e11.pointLabels.display ? (function(t29) {
                const e12 = {
                    l: 0,
                    r: t29.width,
                    t: 0,
                    b: t29.height - t29.paddingTop
                }, i6 = {
                };
                let n7, o7, s7;
                const a1 = [], r2 = [], l2 = t29.getLabels().length;
                for(n7 = 0; n7 < l2; n7++){
                    const l3 = t29.options.pointLabels.setContext(t29.getContext(n7));
                    r2[n7] = l3.padding, s7 = t29.getPointPosition(n7, t29.drawingArea + r2[n7]);
                    const u1 = Ee(l3.font);
                    t29.ctx.font = u1.string, c3 = t29.ctx, h3 = u1.lineHeight, o7 = Y(d3 = t29._pointLabels[n7]) ? {
                        w: Yt(c3, c3.font, d3),
                        h: d3.length * h3
                    } : {
                        w: c3.measureText(d3).width,
                        h: h3
                    }, a1[n7] = o7;
                    const f1 = t29.getIndexAngle(n7), g1 = Et(f1), p1 = Ss(g1, s7.x, o7.w, 0, 180), m1 = Ss(g1, s7.y, o7.h, 90, 270);
                    p1.start < e12.l && (e12.l = p1.start, i6.l = f1), p1.end > e12.r && (e12.r = p1.end, i6.r = f1), m1.start < e12.t && (e12.t = m1.start, i6.t = f1), m1.end > e12.b && (e12.b = m1.end, i6.b = f1);
                }
                var c3, h3, d3;
                t29._setReductions(t29.drawingArea, e12, i6), t29._pointLabelItems = [];
                const u1 = t29.options, f1 = ks(u1), g1 = t29.getDistanceFromCenterForValue(u1.ticks.reverse ? t29.min : t29.max);
                for(n7 = 0; n7 < l2; n7++){
                    const e13 = 0 === n7 ? f1 / 2 : 0, i7 = t29.getPointPosition(n7, g1 + e13 + r2[n7]), o8 = Et(t29.getIndexAngle(n7)), s8 = a1[n7];
                    Ds(o8, s8, i7);
                    const l3 = Ps(o8);
                    let c4;
                    c4 = "left" === l3 ? i7.x : "center" === l3 ? i7.x - s8.w / 2 : i7.x - s8.w;
                    const h4 = c4 + s8.w;
                    t29._pointLabelItems[n7] = {
                        x: i7.x,
                        y: i7.y,
                        textAlign: l3,
                        left: c4,
                        top: i7.y,
                        right: h4,
                        bottom: i7.y + s8.h
                    };
                }
            })(t28) : t28.setCenterPoint(0, 0, 0, 0);
        }
        _setReductions(t, e, i) {
            const n7 = this;
            let o7 = e.l / Math.sin(i.l), s7 = Math.max(e.r - n7.width, 0) / Math.sin(i.r), a1 = -e.t / Math.cos(i.t), r2 = -Math.max(e.b - (n7.height - n7.paddingTop), 0) / Math.cos(i.b);
            o7 = As(o7), s7 = As(s7), a1 = As(a1), r2 = As(r2), n7.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (o7 + s7) / 2), Math.floor(t - (a1 + r2) / 2))), n7.setCenterPoint(o7, s7, a1, r2);
        }
        setCenterPoint(t, e, i, n) {
            const o7 = this, s7 = o7.width - e - o7.drawingArea, a1 = t + o7.drawingArea, r2 = i + o7.drawingArea, l2 = o7.height - o7.paddingTop - n - o7.drawingArea;
            o7.xCenter = Math.floor((a1 + s7) / 2 + o7.left), o7.yCenter = Math.floor((r2 + l2) / 2 + o7.top + o7.paddingTop);
        }
        getIndexAngle(t) {
            return Bt(t * (bt / this.getLabels().length) + Rt(this.options.startAngle || 0));
        }
        getDistanceFromCenterForValue(t) {
            const e11 = this;
            if ($(t)) return NaN;
            const i6 = e11.drawingArea / (e11.max - e11.min);
            return e11.options.reverse ? (e11.max - t) * i6 : (t - e11.min) * i6;
        }
        getValueForDistanceFromCenter(t) {
            if ($(t)) return NaN;
            const e11 = this, i6 = t / (e11.drawingArea / (e11.max - e11.min));
            return e11.options.reverse ? e11.max - i6 : e11.min + i6;
        }
        getPointPosition(t, e) {
            const i6 = this, n7 = i6.getIndexAngle(t) - Mt;
            return {
                x: Math.cos(n7) * e + i6.xCenter,
                y: Math.sin(n7) * e + i6.yCenter,
                angle: n7
            };
        }
        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }
        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
            const { left: e11 , top: i6 , right: n7 , bottom: o7  } = this._pointLabelItems[t];
            return {
                left: e11,
                top: i6,
                right: n7,
                bottom: o7
            };
        }
        drawBackground() {
            const t28 = this, { backgroundColor: e11 , grid: { circular: i6  }  } = t28.options;
            if (e11) {
                const n7 = t28.ctx;
                n7.save(), n7.beginPath(), Cs(t28, t28.getDistanceFromCenterForValue(t28._endValue), i6, t28.getLabels().length), n7.closePath(), n7.fillStyle = e11, n7.fill(), n7.restore();
            }
        }
        drawGrid() {
            const t28 = this, e11 = t28.ctx, i6 = t28.options, { angleLines: n7 , grid: o7  } = i6, s7 = t28.getLabels().length;
            let a1, r2, l2;
            if (i6.pointLabels.display && (function(t29, e12) {
                const { ctx: i7 , options: { pointLabels: n8  }  } = t29;
                for(let o8 = e12 - 1; o8 >= 0; o8--){
                    const e13 = n8.setContext(t29.getContext(o8)), s8 = Ee(e13.font), { x: a2 , y: r3 , textAlign: l3 , left: c3 , top: h3 , right: d3 , bottom: u1  } = t29._pointLabelItems[o8], { backdropColor: f1  } = e13;
                    if (!$(f1)) {
                        const t30 = Re(e13.backdropPadding);
                        i7.fillStyle = f1, i7.fillRect(c3 - t30.left, h3 - t30.top, d3 - c3 + t30.width, u1 - h3 + t30.height);
                    }
                    te(i7, t29._pointLabels[o8], a2, r3 + s8.lineHeight / 2, s8, {
                        color: e13.color,
                        textAlign: l3,
                        textBaseline: "middle"
                    });
                }
            })(t28, s7), o7.display && t28.ticks.forEach((e12, i7)=>{
                if (0 !== i7) {
                    r2 = t28.getDistanceFromCenterForValue(e12.value);
                    const n8 = o7.setContext(t28.getContext(i7 - 1));
                    !function(t29, e13, i8, n9) {
                        const o8 = t29.ctx, s8 = e13.circular, { color: a2 , lineWidth: r3  } = e13;
                        !s8 && !n9 || !a2 || !r3 || i8 < 0 || (o8.save(), o8.strokeStyle = a2, o8.lineWidth = r3, o8.setLineDash(e13.borderDash), o8.lineDashOffset = e13.borderDashOffset, o8.beginPath(), Cs(t29, i8, s8, n9), o8.closePath(), o8.stroke(), o8.restore());
                    }(t28, n8, r2, s7);
                }
            }), n7.display) {
                for(e11.save(), a1 = t28.getLabels().length - 1; a1 >= 0; a1--){
                    const o8 = n7.setContext(t28.getContext(a1)), { color: s8 , lineWidth: c3  } = o8;
                    c3 && s8 && (e11.lineWidth = c3, e11.strokeStyle = s8, e11.setLineDash(o8.borderDash), e11.lineDashOffset = o8.borderDashOffset, r2 = t28.getDistanceFromCenterForValue(i6.ticks.reverse ? t28.min : t28.max), l2 = t28.getPointPosition(a1, r2), e11.beginPath(), e11.moveTo(t28.xCenter, t28.yCenter), e11.lineTo(l2.x, l2.y), e11.stroke());
                }
                e11.restore();
            }
        }
        drawLabels() {
            const t28 = this, e11 = t28.ctx, i6 = t28.options, n7 = i6.ticks;
            if (!n7.display) return;
            const o7 = t28.getIndexAngle(0);
            let s7, a1;
            e11.save(), e11.translate(t28.xCenter, t28.yCenter), e11.rotate(o7), e11.textAlign = "center", e11.textBaseline = "middle", t28.ticks.forEach((o8, r2)=>{
                if (0 === r2 && !i6.reverse) return;
                const l2 = n7.setContext(t28.getContext(r2)), c3 = Ee(l2.font);
                if (s7 = t28.getDistanceFromCenterForValue(t28.ticks[r2].value), l2.showLabelBackdrop) {
                    a1 = e11.measureText(o8.label).width, e11.fillStyle = l2.backdropColor;
                    const t29 = Re(l2.backdropPadding);
                    e11.fillRect(-a1 / 2 - t29.left, -s7 - c3.size / 2 - t29.top, a1 + t29.width, c3.size + t29.height);
                }
                te(e11, o8.label, 0, -s7, c3, {
                    color: l2.color
                });
            }), e11.restore();
        }
        drawTitle() {
        }
    }
    Os.id = "radialLinear", Os.defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        grid: {
            circular: !1
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPadding: 2,
            callback: Ei.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: (t28)=>t28
            ,
            padding: 5
        }
    }, Os.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    }, Os.descriptors = {
        angleLines: {
            _fallback: "grid"
        }
    };
    const Ts = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1000
        },
        second: {
            common: !0,
            size: 1000,
            steps: 60
        },
        minute: {
            common: !0,
            size: 60000,
            steps: 60
        },
        hour: {
            common: !0,
            size: 3600000,
            steps: 24
        },
        day: {
            common: !0,
            size: 86400000,
            steps: 30
        },
        week: {
            common: !1,
            size: 604800000,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628000000,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884000000,
            steps: 4
        },
        year: {
            common: !0,
            size: 31540000000
        }
    }, Ls = Object.keys(Ts);
    function Rs(t28, e11) {
        return t28 - e11;
    }
    function Es(t28, e11) {
        if ($(e11)) return null;
        const i6 = t28._adapter, n7 = t28.options.time, { parser: o7 , round: s7 , isoWeekday: a1  } = n7;
        let r2 = e11;
        return "function" == typeof o7 && (r2 = o7(r2)), X(r2) || (r2 = "string" == typeof o7 ? i6.parse(r2, o7) : i6.parse(r2)), null === r2 ? null : (s7 && (r2 = "week" !== s7 || !At(a1) && !0 !== a1 ? i6.startOf(r2, s7) : i6.startOf(r2, "isoWeek", a1)), +r2);
    }
    function Is(t28, e11, i6, n7) {
        const o7 = Ls.length;
        for(let s7 = Ls.indexOf(t28); s7 < o7 - 1; ++s7){
            const t29 = Ts[Ls[s7]], o8 = t29.steps ? t29.steps : Number.MAX_SAFE_INTEGER;
            if (t29.common && Math.ceil((i6 - e11) / (o8 * t29.size)) <= n7) return Ls[s7];
        }
        return Ls[o7 - 1];
    }
    function Fs(t28, e11, i6) {
        if (i6) {
            if (i6.length) {
                const { lo: n7 , hi: o7  } = ee(i6, e11);
                t28[i6[n7] >= e11 ? i6[n7] : i6[o7]] = !0;
            }
        } else t28[e11] = !0;
    }
    function zs(t28, e11, i6) {
        const n7 = [], o7 = {
        }, s7 = e11.length;
        let a1, r2;
        for(a1 = 0; a1 < s7; ++a1)r2 = e11[a1], o7[r2] = a1, n7.push({
            value: r2,
            major: !1
        });
        return 0 !== s7 && i6 ? (function(t29, e12, i7, n8) {
            const o8 = t29._adapter, s8 = +o8.startOf(e12[0].value, n8), a2 = e12[e12.length - 1].value;
            let r3, l2;
            for(r3 = s8; r3 <= a2; r3 = +o8.add(r3, 1, n8))l2 = i7[r3], l2 >= 0 && (e12[l2].major = !0);
            return e12;
        })(t28, n7, o7, i6) : n7;
    }
    class Vs extends ji {
        constructor(t28){
            super(t28), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {
            }, this._normalized = !1;
        }
        init(t, e) {
            const i6 = t.time || (t.time = {
            }), n7 = this._adapter = new Gn._date(t.adapters.date);
            st(i6.displayFormats, n7.formats()), super.init(t), this._normalized = e.normalized;
        }
        parse(t, e) {
            return (void 0) === t ? null : Es(this, t);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const t29 = this, e11 = t29.options, i6 = t29._adapter, n7 = e11.time.unit || "day";
            let { min: o7 , max: s7 , minDefined: a1 , maxDefined: r2  } = t29.getUserBounds();
            function l2(t30) {
                a1 || isNaN(t30.min) || (o7 = Math.min(o7, t30.min)), r2 || isNaN(t30.max) || (s7 = Math.max(s7, t30.max));
            }
            a1 && r2 || (l2(t29._getLabelBounds()), "ticks" === e11.bounds && "labels" === e11.ticks.source || l2(t29.getMinMax(!1))), o7 = X(o7) && !isNaN(o7) ? o7 : +i6.startOf(Date.now(), n7), s7 = X(s7) && !isNaN(s7) ? s7 : +i6.endOf(Date.now(), n7) + 1, t29.min = Math.min(o7, s7 - 1), t29.max = Math.max(o7 + 1, s7);
        }
        _getLabelBounds() {
            const t29 = this.getLabelTimestamps();
            let e11 = Number.POSITIVE_INFINITY, i6 = Number.NEGATIVE_INFINITY;
            return t29.length && (e11 = t29[0], i6 = t29[t29.length - 1]), {
                min: e11,
                max: i6
            };
        }
        buildTicks() {
            const t29 = this, e11 = t29.options, i6 = e11.time, n7 = e11.ticks, o7 = "labels" === n7.source ? t29.getLabelTimestamps() : t29._generate();
            "ticks" === e11.bounds && o7.length && (t29.min = t29._userMin || o7[0], t29.max = t29._userMax || o7[o7.length - 1]);
            const s7 = t29.min, a1 = oe(o7, s7, t29.max);
            return t29._unit = i6.unit || (n7.autoSkip ? Is(i6.minUnit, t29.min, t29.max, t29._getLabelCapacity(s7)) : (function(t30, e12, i7, n8, o8) {
                for(let s8 = Ls.length - 1; s8 >= Ls.indexOf(i7); s8--){
                    const i8 = Ls[s8];
                    if (Ts[i8].common && t30._adapter.diff(o8, n8, i8) >= e12 - 1) return i8;
                }
                return Ls[i7 ? Ls.indexOf(i7) : 0];
            })(t29, a1.length, i6.minUnit, t29.min, t29.max)), t29._majorUnit = n7.major.enabled && "year" !== t29._unit ? (function(t30) {
                for(let e12 = Ls.indexOf(t30) + 1, i7 = Ls.length; e12 < i7; ++e12)if (Ts[Ls[e12]].common) return Ls[e12];
            })(t29._unit) : void 0, t29.initOffsets(o7), e11.reverse && a1.reverse(), zs(t29, a1, t29._majorUnit);
        }
        initOffsets(t) {
            const e11 = this;
            let i6, n7, o7 = 0, s7 = 0;
            e11.options.offset && t.length && (i6 = e11.getDecimalForValue(t[0]), o7 = 1 === t.length ? 1 - i6 : (e11.getDecimalForValue(t[1]) - i6) / 2, n7 = e11.getDecimalForValue(t[t.length - 1]), s7 = 1 === t.length ? n7 : (n7 - e11.getDecimalForValue(t[t.length - 2])) / 2);
            const a1 = t.length < 3 ? 0.5 : 0.25;
            o7 = Ht(o7, 0, a1), s7 = Ht(s7, 0, a1), e11._offsets = {
                start: o7,
                end: s7,
                factor: 1 / (o7 + 1 + s7)
            };
        }
        _generate() {
            const t29 = this, e11 = t29._adapter, i6 = t29.min, n7 = t29.max, o7 = t29.options, s7 = o7.time, a1 = s7.unit || Is(s7.minUnit, i6, n7, t29._getLabelCapacity(i6)), r2 = K(s7.stepSize, 1), l2 = "week" === a1 && s7.isoWeekday, c3 = At(l2) || !0 === l2, h3 = {
            };
            let d3, u1, f1 = i6;
            if (c3 && (f1 = +e11.startOf(f1, "isoWeek", l2)), f1 = +e11.startOf(f1, c3 ? "day" : a1), e11.diff(n7, i6, a1) > 100000 * r2) throw new Error(i6 + " and " + n7 + " are too far apart with stepSize of " + r2 + " " + a1);
            const g1 = "data" === o7.ticks.source && t29.getDataTimestamps();
            for(d3 = f1, u1 = 0; d3 < n7; d3 = +e11.add(d3, r2, a1), u1++)Fs(h3, d3, g1);
            return d3 !== n7 && "ticks" !== o7.bounds && 1 !== u1 || Fs(h3, d3, g1), Object.keys(h3).sort((t30, e12)=>t30 - e12
            ).map((t30)=>+t30
            );
        }
        getLabelForValue(t) {
            const e11 = this._adapter, i6 = this.options.time;
            return i6.tooltipFormat ? e11.format(t, i6.tooltipFormat) : e11.format(t, i6.displayFormats.datetime);
        }
        _tickFormatFunction(t, e, i, n) {
            const o7 = this, s7 = o7.options, a1 = s7.time.displayFormats, r2 = o7._unit, l2 = o7._majorUnit, c3 = r2 && a1[r2], h3 = l2 && a1[l2], d3 = i[e], u1 = l2 && h3 && d3 && d3.major, f1 = o7._adapter.format(t, n || (u1 ? h3 : c3)), g1 = s7.ticks.callback;
            return g1 ? g1(f1, e, i) : f1;
        }
        generateTickLabels(t) {
            let e11, i6, n7;
            for(e11 = 0, i6 = t.length; e11 < i6; ++e11)n7 = t[e11], n7.label = this._tickFormatFunction(n7.value, e11, t);
        }
        getDecimalForValue(t) {
            const e11 = this;
            return null === t ? NaN : (t - e11.min) / (e11.max - e11.min);
        }
        getPixelForValue(t) {
            const e11 = this, i6 = e11._offsets, n7 = e11.getDecimalForValue(t);
            return e11.getPixelForDecimal((i6.start + n7) * i6.factor);
        }
        getValueForPixel(t) {
            const e11 = this, i6 = e11._offsets, n7 = e11.getDecimalForPixel(t) / i6.factor - i6.end;
            return e11.min + n7 * (e11.max - e11.min);
        }
        _getLabelSize(t) {
            const e11 = this, i6 = e11.options.ticks, n7 = e11.ctx.measureText(t).width, o7 = Rt(e11.isHorizontal() ? i6.maxRotation : i6.minRotation), s7 = Math.cos(o7), a1 = Math.sin(o7), r2 = e11._resolveTickFontOptions(0).size;
            return {
                w: n7 * s7 + r2 * a1,
                h: n7 * a1 + r2 * s7
            };
        }
        _getLabelCapacity(t) {
            const e11 = this, i6 = e11.options.time, n7 = i6.displayFormats, o7 = n7[i6.unit] || n7.millisecond, s7 = e11._tickFormatFunction(t, 0, zs(e11, [
                t
            ], e11._majorUnit), o7), a1 = e11._getLabelSize(s7), r2 = Math.floor(e11.isHorizontal() ? e11.width / a1.w : e11.height / a1.h) - 1;
            return r2 > 0 ? r2 : 1;
        }
        getDataTimestamps() {
            const t29 = this;
            let e11, i6, n7 = t29._cache.data || [];
            if (n7.length) return n7;
            const o7 = t29.getMatchingVisibleMetas();
            if (t29._normalized && o7.length) return t29._cache.data = o7[0].controller.getAllParsedValues(t29);
            for(e11 = 0, i6 = o7.length; e11 < i6; ++e11)n7 = n7.concat(o7[e11].controller.getAllParsedValues(t29));
            return t29._cache.data = t29.normalize(n7);
        }
        getLabelTimestamps() {
            const t29 = this, e11 = t29._cache.labels || [];
            let i6, n7;
            if (e11.length) return e11;
            const o7 = t29.getLabels();
            for(i6 = 0, n7 = o7.length; i6 < n7; ++i6)e11.push(Es(t29, o7[i6]));
            return t29._cache.labels = t29._normalized ? e11 : t29.normalize(e11);
        }
        normalize(t) {
            return le(t.sort(Rs));
        }
    }
    function Bs(t29, e11, i6) {
        let n7, o7, s7, a1;
        if (i6) n7 = Math.floor(e11), o7 = Math.ceil(e11), s7 = t29[n7], a1 = t29[o7];
        else {
            const i7 = ee(t29, e11);
            s7 = i7.lo, a1 = i7.hi, n7 = t29[s7], o7 = t29[a1];
        }
        const r2 = o7 - n7;
        return r2 ? s7 + (a1 - s7) * (e11 - n7) / r2 : s7;
    }
    Vs.id = "time", Vs.defaults = {
        bounds: "data",
        adapters: {
        },
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
            }
        },
        ticks: {
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    class Ws extends Vs {
        constructor(t29){
            super(t29), this._table = [], this._maxIndex = void 0;
        }
        initOffsets() {
            const t30 = this, e11 = t30._getTimestampsForTable();
            t30._table = t30.buildLookupTable(e11), t30._maxIndex = t30._table.length - 1, super.initOffsets(e11);
        }
        buildLookupTable(t) {
            const { min: e11 , max: i6  } = this;
            if (!t.length) return [
                {
                    time: e11,
                    pos: 0
                },
                {
                    time: i6,
                    pos: 1
                }
            ];
            const n7 = [
                e11
            ];
            let o7, s7, a1;
            for(o7 = 0, s7 = t.length; o7 < s7; ++o7)a1 = t[o7], a1 > e11 && a1 < i6 && n7.push(a1);
            return n7.push(i6), n7;
        }
        _getTimestampsForTable() {
            const t30 = this;
            let e11 = t30._cache.all || [];
            if (e11.length) return e11;
            const i6 = t30.getDataTimestamps(), n7 = t30.getLabelTimestamps();
            return e11 = i6.length && n7.length ? t30.normalize(i6.concat(n7)) : i6.length ? i6 : n7, e11 = t30._cache.all = e11, e11;
        }
        getPixelForValue(t, e) {
            const i6 = this, n7 = i6._offsets, o7 = i6._normalized && i6._maxIndex > 0 && !$(e) ? e / i6._maxIndex : i6.getDecimalForValue(t);
            return i6.getPixelForDecimal((n7.start + o7) * n7.factor);
        }
        getDecimalForValue(t) {
            return Bs(this._table, t) / this._maxIndex;
        }
        getValueForPixel(t) {
            const e11 = this, i6 = e11._offsets, n7 = e11.getDecimalForPixel(t) / i6.factor - i6.end;
            return Bs(e11._table, n7 * this._maxIndex, !0);
        }
    }
    Ws.id = "timeseries", Ws.defaults = Vs.defaults;
    var Hs = Object.freeze({
        __proto__: null,
        CategoryScale: _s,
        LinearScale: vs,
        LogarithmicScale: ws,
        RadialLinearScale: Os,
        TimeScale: Vs,
        TimeSeriesScale: Ws
    });
    return Yn.register(co, Hs, Eo, xs), Yn.helpers = {
        ...vn
    }, Yn._adapters = Gn, Yn.Animation = mi, Yn.Animations = bi, Yn.animator = a, Yn.controllers = wn.controllers.items, Yn.DatasetController = Ai, Yn.Element = Oi, Yn.elements = Eo, Yn.Interaction = De, Yn.layouts = Xe, Yn.platforms = ci, Yn.Scale = ji, Yn.Ticks = Ei, Object.assign(Yn, co, Hs, Eo, xs, ci), Yn.Chart = Yn, "undefined" != typeof window && (window.Chart = Yn), Yn;
});

},{}]},["jAoOl","7kNoG"], "7kNoG", "parcelRequire7e89")

//# sourceMappingURL=dashboard.0501ce27.js.map
