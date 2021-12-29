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
})({"gPS9b":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "f751f9acf8da8594";
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

},{}]},["gPS9b"], null, "parcelRequire7e89")
"use strict";
// !(function () {
//   var e, t;
//   -1 < navigator.platform.indexOf("Win") &&
//     (document.getElementsByClassName("main-content")[0] &&
//       ((e = document.querySelector(".main-content")), new PerfectScrollbar(e)),
//     document.getElementsByClassName("sidenav")[0] &&
//       ((e = document.querySelector(".sidenav")), new PerfectScrollbar(e)),
//     document.getElementsByClassName("navbar-collapse")[0] &&
//       ((t = document.querySelector(".navbar-collapse")),
//       new PerfectScrollbar(t)),
//     document.getElementsByClassName("fixed-plugin")[0] &&
//       ((t = document.querySelector(".fixed-plugin")), new PerfectScrollbar(t)));
// })(),
navbarBlurOnScroll("navbarBlur");
var fixedPlugin, fixedPluginButton, fixedPluginButtonNav, fixedPluginCard, fixedPluginCloseButton, navbar, buttonNavbarFixed, tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), tooltipList = tooltipTriggerList.map(function(e) {
    return new bootstrap.Tooltip(e);
});
document.querySelector(".fixed-plugin") && (fixedPlugin = document.querySelector(".fixed-plugin"), fixedPluginButton = document.querySelector(".fixed-plugin-button"), fixedPluginButtonNav = document.querySelector(".fixed-plugin-button-nav"), fixedPluginCard = document.querySelector(".fixed-plugin .card"), fixedPluginCloseButton = document.querySelectorAll(".fixed-plugin-close-button"), navbar = document.getElementById("navbarBlur"), buttonNavbarFixed = document.getElementById("navbarFixed"), fixedPluginButton && (fixedPluginButton.onclick = function() {
    fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show");
}), fixedPluginButtonNav && (fixedPluginButtonNav.onclick = function() {
    fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show");
}), fixedPluginCloseButton.forEach(function(e) {
    e.onclick = function() {
        fixedPlugin.classList.remove("show");
    };
}), document.querySelector("body").onclick = function(e) {
    e.target != fixedPluginButton && e.target != fixedPluginButtonNav && e.target.closest(".fixed-plugin .card") != fixedPluginCard && fixedPlugin.classList.remove("show");
}, navbar && "true" == navbar.getAttribute("navbar-scroll") && buttonNavbarFixed.setAttribute("checked", "true"));
var total = document.querySelectorAll(".nav-pills");
function getEventTarget(e) {
    return (e = e || window.event).target || e.srcElement;
}
function sidebarColor(e) {
    for(var t = e.parentElement.children, n = e.getAttribute("data-color"), i = 0; i < t.length; i++)t[i].classList.remove("active");
    e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active"), document.querySelector(".sidenav").setAttribute("data-color", n);
    var a = document.querySelector("#sidenavCard"), e = [
        "card",
        "card-background",
        "shadow-none",
        "card-background-mask-" + n
    ];
    a.className = "", a.classList.add(...e);
    e = document.querySelector("#sidenavCardIcon"), n = [
        "ni",
        "ni-diamond",
        "text-gradient",
        "text-lg",
        "top-0",
        "text-" + n, 
    ];
    e.className = "", e.classList.add(...n);
}
function navbarFixed(e) {
    var t = [
        "position-sticky",
        "blur",
        "shadow-blur",
        "mt-4",
        "left-auto",
        "top-1",
        "z-index-sticky", 
    ];
    const n = document.getElementById("navbarBlur");
    e.getAttribute("checked") ? (n.classList.remove(...t), n.setAttribute("navbar-scroll", "false"), navbarBlurOnScroll("navbarBlur"), e.removeAttribute("checked")) : (n.classList.add(...t), n.setAttribute("navbar-scroll", "true"), navbarBlurOnScroll("navbarBlur"), e.setAttribute("checked", "true"));
}
function navbarBlurOnScroll(e) {
    const t = document.getElementById(e);
    e = !!t && t.getAttribute("navbar-scroll");
    let n = [
        "position-sticky",
        "blur",
        "shadow-blur",
        "mt-4",
        "left-auto",
        "top-1",
        "z-index-sticky", 
    ], i = [
        "shadow-none"
    ];
    function a() {
        t.classList.remove(...n), t.classList.add(...i), s("transparent");
    }
    function s(e1) {
        let t1 = document.querySelectorAll(".navbar-main .nav-link"), n1 = document.querySelectorAll(".navbar-main .sidenav-toggler-line");
        "blur" === e1 ? (t1.forEach((e2)=>{
            e2.classList.remove("text-body");
        }), n1.forEach((e2)=>{
            e2.classList.add("bg-dark");
        })) : "transparent" === e1 && (t1.forEach((e2)=>{
            e2.classList.add("text-body");
        }), n1.forEach((e2)=>{
            e2.classList.remove("bg-dark");
        }));
    }
    window.onscroll = debounce("true" == e ? function() {
        5 < window.scrollY ? (t.classList.add(...n), t.classList.remove(...i), s("blur")) : a();
    } : function() {
        a();
    }, 10);
}
function debounce(i, a, s) {
    var l;
    return function() {
        var e = this, t = arguments, n = s && !l;
        clearTimeout(l), l = setTimeout(function() {
            l = null, s || i.apply(e, t);
        }, a), n && i.apply(e, t);
    };
}
function sidebarType(e) {
    for(var t = e.parentElement.children, n = e.getAttribute("data-class"), i = 0; i < t.length; i++)t[i].classList.remove("active");
    e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
    e = document.querySelector(".sidenav");
    e.classList.remove("bg-transparent"), e.classList.remove("bg-white"), e.classList.add(n);
}
total.forEach(function(s, e) {
    var l = document.createElement("div"), t = s.querySelector("li:first-child .nav-link").cloneNode();
    t.innerHTML = "-", l.classList.add("moving-tab", "position-absolute", "nav-link"), l.appendChild(t), s.appendChild(l);
    s.getElementsByTagName("li").length;
    l.style.padding = "0px", l.style.width = s.querySelector("li:nth-child(1)").offsetWidth + "px", l.style.transform = "translate3d(0px, 0px, 0px)", l.style.transition = ".5s ease", s.onmouseover = function(e1) {
        let t1 = getEventTarget(e1), a = t1.closest("li");
        if (a) {
            let n = Array.from(a.closest("ul").children), i = n.indexOf(a) + 1;
            s.querySelector("li:nth-child(" + i + ") .nav-link").onclick = function() {
                l = s.querySelector(".moving-tab");
                let e2 = 0;
                if (s.classList.contains("flex-column")) {
                    for(var t2 = 1; t2 <= n.indexOf(a); t2++)e2 += s.querySelector("li:nth-child(" + t2 + ")").offsetHeight;
                    l.style.transform = "translate3d(0px," + e2 + "px, 0px)", l.style.height = s.querySelector("li:nth-child(" + t2 + ")").offsetHeight;
                } else {
                    for(t2 = 1; t2 <= n.indexOf(a); t2++)e2 += s.querySelector("li:nth-child(" + t2 + ")").offsetWidth;
                    l.style.transform = "translate3d(" + e2 + "px, 0px, 0px)", l.style.width = s.querySelector("li:nth-child(" + i + ")").offsetWidth + "px";
                }
            };
        }
    };
}), window.addEventListener("resize", function(e) {
    total.forEach(function(n, e1) {
        n.querySelector(".moving-tab").remove();
        var i = document.createElement("div"), a = n.querySelector(".nav-link.active").cloneNode();
        a.innerHTML = "-", i.classList.add("moving-tab", "position-absolute", "nav-link"), i.appendChild(a), n.appendChild(i), i.style.padding = "0px", i.style.transition = ".5s ease";
        let s = n.querySelector(".nav-link.active").parentElement;
        if (s) {
            let e2 = Array.from(s.closest("ul").children);
            a = e2.indexOf(s) + 1;
            let t1 = 0;
            if (n.classList.contains("flex-column")) {
                for(var l = 1; l <= e2.indexOf(s); l++)t1 += n.querySelector("li:nth-child(" + l + ")").offsetHeight;
                i.style.transform = "translate3d(0px," + t1 + "px, 0px)", i.style.width = n.querySelector("li:nth-child(" + a + ")").offsetWidth + "px", i.style.height = n.querySelector("li:nth-child(" + l + ")").offsetHeight;
            } else {
                for(l = 1; l <= e2.indexOf(s); l++)t1 += n.querySelector("li:nth-child(" + l + ")").offsetWidth;
                i.style.transform = "translate3d(" + t1 + "px, 0px, 0px)", i.style.width = n.querySelector("li:nth-child(" + a + ")").offsetWidth + "px";
            }
        }
    }), window.innerWidth < 991 ? total.forEach(function(e1, t1) {
        e1.classList.contains("flex-column") || e1.classList.add("flex-column", "on-resize");
    }) : total.forEach(function(e1, t1) {
        e1.classList.contains("on-resize") && e1.classList.remove("flex-column", "on-resize");
    });
});
const iconNavbarSidenav = document.getElementById("iconNavbarSidenav"), iconSidenav = document.getElementById("iconSidenav"), sidenav = document.getElementById("sidenav-main");
let body = document.getElementsByTagName("body")[0], className = "g-sidenav-pinned";
function toggleSidenav() {
    body.classList.contains(className) ? (body.classList.remove(className), setTimeout(function() {
        sidenav.classList.remove("bg-white");
    }, 100), sidenav.classList.remove("bg-transparent")) : (body.classList.add(className), sidenav.classList.add("bg-white"), sidenav.classList.remove("bg-transparent"), iconSidenav.classList.remove("d-none"));
}
iconNavbarSidenav && iconNavbarSidenav.addEventListener("click", toggleSidenav), iconSidenav && iconSidenav.addEventListener("click", toggleSidenav);
let referenceButtons = document.querySelector("[data-class]");
function navbarColorOnResize() {
    1200 < window.innerWidth ? referenceButtons.classList.contains("active") && "bg-transparent" === referenceButtons.getAttribute("data-class") ? sidenav.classList.remove("bg-white") : sidenav.classList.add("bg-white") : (sidenav.classList.add("bg-white"), sidenav.classList.remove("bg-transparent"));
}
function sidenavTypeOnResize() {
    let e = document.querySelectorAll('[onclick="sidebarType(this)"]');
    window.innerWidth < 1200 ? e.forEach(function(e1) {
        e1.classList.add("disabled");
    }) : e.forEach(function(e1) {
        e1.classList.remove("disabled");
    });
}
window.addEventListener("resize", navbarColorOnResize), window.addEventListener("resize", sidenavTypeOnResize), window.addEventListener("load", sidenavTypeOnResize);
//# sourceMappingURL=_site_dashboard_free/assets/js/dashboard-free.js.map
document.querySelector("#dropdownMenuButton").addEventListener("click", ()=>{
    console.log(this.getAttribute("dropdownMenuButton"));
});

//# sourceMappingURL=History.f8da8594.js.map
