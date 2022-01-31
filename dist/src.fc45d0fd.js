// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = _;
exports.Fragment = d;
exports.cloneElement = B;
exports.createContext = D;
exports.h = exports.createElement = v;
exports.createRef = p;
exports.hydrate = q;
exports.options = exports.isValidElement = void 0;
exports.render = S;
exports.toChildArray = A;
var n,
    l,
    u,
    i,
    t,
    r,
    o,
    f,
    e = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = i;
exports.options = l;

function a(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function h(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(l, u, i) {
  var t,
      r,
      o,
      f = {};

  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
  return y(l, f, t, r, null);
}

function y(n, i, t, r, o) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++u : o
  };
  return null == o && null != l.vnode && l.vnode(f), f;
}

function p() {
  return {
    current: null
  };
}

function d(n) {
  return n.children;
}

function _(n, l) {
  this.props = n, this.context = l;
}

function k(n, l) {
  if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? k(n) : null;
}

function b(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return b(n);
  }
}

function m(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}

function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, r, o;
    n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? k(t) : r, t.__h), z(u, t), t.__e != r && b(t)));
  });
}

function w(n, l, u, i, t, r, o, f, s, a) {
  var h,
      v,
      p,
      _,
      b,
      m,
      g,
      w = i && i.__k || c,
      A = w.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, {
    children: _
  }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {
    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
        w[v] = void 0;
        break;
      }

      p = null;
    }
    j(n, _, p = p || e, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k(p));
  }

  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));

  if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
}

function x(n, l, u) {
  for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l));

  return l;
}

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

function P(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}

function C(n, l, u, i, t) {
  var r;

  for (r in u) "children" === r || "key" === r || r in l || H(n, r, null, u[r], i);

  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);
}

function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";
}

function H(n, l, u, i, t) {
  var r;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}

function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}

function j(n, u, i, t, r, o, f, e, c) {
  var s,
      h,
      v,
      y,
      p,
      k,
      b,
      m,
      g,
      x,
      A,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l.__b) && s(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, p, k);
        });
      }
      h.context = x, h.props = m, h.state = h.__s, (s = l.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, r, o, f, c);

    (s = l.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
  }
}

function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function L(l, u, i, t, r, o, f, c) {
  var s,
      a,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      _ = 0;
  if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, o[_] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (o = o && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h(o[_]);
    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
  }
  return l;
}

function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}

function N(n, u, i) {
  var t, r;

  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null;
  }

  if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && N(t[r], u, "function" != typeof n.type);
  i || null == n.__e || h(n.__e), n.__e = n.__d = void 0;
}

function O(n, l, u) {
  return this.constructor(n, u);
}

function S(u, i, t) {
  var r, o, f;
  l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!r && t || i).__k = v(d, null, [u]), o || e, e, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z(f, u);
}

function q(n, l) {
  S(n, l, q);
}

function B(l, u, i) {
  var t,
      r,
      o,
      f = a({}, l.props);

  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y(l.type, f, t || l.key, r || l.ref, null);
}

function D(n, l) {
  var u = {
    __c: l = "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(m);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = c.slice, exports.options = l = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, exports.isValidElement = i = function (n) {
  return null != n && void 0 === n.constructor;
}, _.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));
}, _.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
}, _.prototype.render = d, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
},{}],"node_modules/preact-custom-element/dist/preact-custom-element.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _preact = require("preact");

function r() {
  return (r = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }

    return t;
  }).apply(this, arguments);
}

function i(t) {
  this.getChildContext = function () {
    return t.context;
  };

  var e = t.children,
      n = function (t, e) {
    if (null == t) return {};
    var n,
        o,
        r = {},
        i = Object.keys(t);

    for (o = 0; o < i.length; o++) e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);

    return r;
  }(t, ["context", "children"]);

  return (0, _preact.cloneElement)(e, n);
}

function a() {
  var o = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(o), this._vdom = (0, _preact.h)(i, r({}, this._props, {
    context: o.detail.context
  }), function e(n, o) {
    if (3 === n.nodeType) return n.data;
    if (1 !== n.nodeType) return null;
    var r = [],
        i = {},
        a = 0,
        c = n.attributes,
        l = n.childNodes;

    for (a = c.length; a--;) "slot" !== c[a].name && (i[c[a].name] = c[a].value, i[s(c[a].name)] = c[a].value);

    for (a = l.length; a--;) {
      var p = e(l[a], null),
          d = l[a].slot;
      d ? i[d] = (0, _preact.h)(u, {
        name: d
      }, p) : r[a] = p;
    }

    var h = o ? (0, _preact.h)(u, null, r) : r;
    return (0, _preact.h)(o || n.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? _preact.hydrate : _preact.render)(this._vdom, this._root);
}

function s(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}

function c(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[s(t)] = r, this._vdom = (0, _preact.cloneElement)(this._vdom, i), (0, _preact.render)(this._vdom, this._root);
  }
}

function l() {
  (0, _preact.render)(this._vdom = null, this._root);
}

function u(e, n) {
  var o = this;
  return (0, _preact.h)("slot", r({}, e, {
    ref: function (t) {
      t ? (o.ref = t, o._listener || (o._listener = function (t) {
        t.stopPropagation(), t.detail.context = n;
      }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
    }
  }));
}

function _default(t, e, n, o) {
  function r() {
    var e = Reflect.construct(HTMLElement, [], r);
    return e._vdomComponent = t, e._root = o && o.shadow ? e.attachShadow({
      mode: "open"
    }) : e, e;
  }

  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = a, r.prototype.attributeChangedCallback = c, r.prototype.disconnectedCallback = l, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function (t) {
    Object.defineProperty(r.prototype, t, {
      get: function () {
        return this._vdom.props[t];
      },
      set: function (e) {
        this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e, this.connectedCallback());
        var n = typeof e;
        null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
      }
    });
  }), customElements.define(e || t.tagName || t.displayName || t.name, r);
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = A;
exports.useContext = F;
exports.useDebugValue = T;
exports.useEffect = y;
exports.useErrorBoundary = q;
exports.useImperativeHandle = _;
exports.useLayoutEffect = h;
exports.useMemo = d;
exports.useReducer = p;
exports.useRef = s;
exports.useState = l;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__b,
    f = _preact.options.__r,
    e = _preact.options.diffed,
    a = _preact.options.__c,
    v = _preact.options.unmount;

function m(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  for (var t; t = i.shift();) if (t.__P) try {
    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], _preact.options.__e(u, t.__v);
  }
}

_preact.options.__b = function (n) {
  u = null, c && c(n);
}, _preact.options.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, _preact.options.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = null;
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), a && a(t, u);
}, _preact.options.unmount = function (t) {
  v && v(t);
  var u,
      r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      g(n);
    } catch (n) {
      u = n;
    }
  }), u && _preact.options.__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u,
      r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  flushSync: true,
  unstable_batchedUpdates: true,
  StrictMode: true,
  Suspense: true,
  SuspenseList: true,
  lazy: true,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: true,
  createElement: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.Children = void 0;
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
exports.PureComponent = E;
exports.StrictMode = void 0;
exports.Suspense = L;
exports.SuspenseList = M;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0;
exports.cloneElement = rn;
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _preact.createElement;
  }
});
exports.createFactory = tn;
exports.createPortal = W;
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
exports.default = void 0;
exports.findDOMNode = on;
exports.flushSync = void 0;
exports.forwardRef = x;
exports.hydrate = $;
exports.isValidElement = en;
exports.lazy = F;
exports.memo = g;
exports.render = B;
exports.unmountComponentAtNode = un;
exports.version = exports.unstable_batchedUpdates = void 0;

var _hooks = require("preact/hooks");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});

var _preact = require("preact");

function C(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function S(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

function E(n) {
  this.props = n;
}

function g(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : S(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, (0, _preact.createElement)(n, t);
  }

  return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}

(E.prototype = new _preact.Component()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return S(this.props, n) || S(this.state, t);
};
var w = _preact.options.__b;

_preact.options.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
};

var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function x(n) {
  function t(t, e) {
    var r = C({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
  }

  return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var N = function (n, t) {
  return null == n ? null : (0, _preact.toChildArray)((0, _preact.toChildArray)(n).map(t));
},
    k = {
  map: N,
  forEach: N,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    var t = (0, _preact.toChildArray)(n);
    if (1 !== t.length) throw "Children.only";
    return t[0];
  },
  toArray: _preact.toChildArray
},
    A = _preact.options.__e;

exports.Children = k;

_preact.options.__e = function (n, t, e) {
  if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
  A(n, t, e);
};

var O = _preact.options.unmount;

function L() {
  this.__u = 0, this.t = null, this.__b = null;
}

function U(n) {
  var t = n.__.__c;
  return t && t.__e && t.__e(n);
}

function F(n) {
  var t, e, r;

  function u(u) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return (0, _preact.createElement)(e, u);
  }

  return u.displayName = "Lazy", u.__f = !0, u;
}

function M() {
  this.u = null, this.o = null;
}

_preact.options.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
}, (L.prototype = new _preact.Component()).__c = function (n, t) {
  var e = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(e);

  var u = U(r.__v),
      o = !1,
      i = function () {
    o || (o = !0, e.__R = null, u ? u(l) : l());
  };

  e.__R = i;

  var l = function () {
    if (! --r.__u) {
      if (r.state.__e) {
        var n = r.state.__e;

        r.__v.__k[0] = function n(t, e, r) {
          return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
            return n(t, e, r);
          }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
        }(n, n.__c.__P, n.__c.__O);
      }

      var t;

      for (r.setState({
        __e: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  },
      c = !0 === t.__h;

  r.__u++ || c || r.setState({
    __e: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, L.prototype.componentWillUnmount = function () {
  this.t = [];
}, L.prototype.render = function (n, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"),
          r = this.__v.__k[0].__c;

      this.__v.__k[0] = function n(t, e, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
          "function" == typeof n.__c && n.__c();
        }), t.__c.__H = null), null != (t = C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return n(t, e, r);
        })), t;
      }(this.__b, e, r.__O = r.__P);
    }

    this.__b = null;
  }

  var u = t.__e && (0, _preact.createElement)(_preact.Fragment, null, n.fallback);
  return u && (u.__h = null), [(0, _preact.createElement)(_preact.Fragment, null, t.__e ? null : n.children), u];
};

var T = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

function D(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}

function I(n) {
  var t = this,
      e = n.i;
  t.componentWillUnmount = function () {
    (0, _preact.render)(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== e && t.componentWillUnmount(), n.__v ? (t.l || (t.i = e, t.l = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild: function (n) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    insertBefore: function (n, e) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    removeChild: function (n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
    }
  }), (0, _preact.render)((0, _preact.createElement)(D, {
    context: t.context
  }, n.__v), t.l)) : t.l && t.componentWillUnmount();
}

function W(n, t) {
  return (0, _preact.createElement)(I, {
    __v: n,
    i: t
  });
}

(M.prototype = new _preact.Component()).__e = function (n) {
  var t = this,
      e = U(t.__v),
      r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
    };

    e ? e(o) : o();
  };
}, M.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = (0, _preact.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    T(n, e, t);
  });
};

var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    V = "undefined" != typeof document,
    z = function (n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};

function B(n, t, e) {
  return null == t.__k && (t.textContent = ""), (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function $(n, t, e) {
  return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

_preact.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
  Object.defineProperty(_preact.Component.prototype, n, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + n];
    },
    set: function (t) {
      Object.defineProperty(this, n, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var H = _preact.options.event;

function Z() {}

function Y() {
  return this.cancelBubble;
}

function q() {
  return this.defaultPrevented;
}

_preact.options.event = function (n) {
  return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
};

var G,
    J = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    K = _preact.options.vnode;

_preact.options.vnode = function (n) {
  var t = n.type,
      e = n.props,
      r = e;

  if ("string" == typeof t) {
    var u = -1 === t.indexOf("-");

    for (var o in r = {}, e) {
      var i = e[o];
      V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
    }

    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = (0, _preact.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = -1 != r.value.indexOf(n.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = (0, _preact.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
    })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
  }

  n.$$typeof = j, K && K(n);
};

var Q = _preact.options.__r;

_preact.options.__r = function (n) {
  Q && Q(n), G = n.__c;
};

var X = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (n) {
        return G.__n[n.__c].props.value;
      }
    }
  }
},
    nn = "17.0.2";
exports.version = nn;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X;

function tn(n) {
  return _preact.createElement.bind(null, n);
}

function en(n) {
  return !!n && n.$$typeof === j;
}

function rn(n) {
  return en(n) ? _preact.cloneElement.apply(null, arguments) : n;
}

function un(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

function on(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var ln = function (n, t) {
  return n(t);
},
    cn = function (n, t) {
  return n(t);
},
    fn = _preact.Fragment;

exports.StrictMode = fn;
exports.flushSync = cn;
exports.unstable_batchedUpdates = ln;
var _default = {
  useState: _hooks.useState,
  useReducer: _hooks.useReducer,
  useEffect: _hooks.useEffect,
  useLayoutEffect: _hooks.useLayoutEffect,
  useRef: _hooks.useRef,
  useImperativeHandle: _hooks.useImperativeHandle,
  useMemo: _hooks.useMemo,
  useCallback: _hooks.useCallback,
  useContext: _hooks.useContext,
  useDebugValue: _hooks.useDebugValue,
  version: "17.0.2",
  Children: k,
  render: B,
  hydrate: $,
  unmountComponentAtNode: un,
  createPortal: W,
  createElement: _preact.createElement,
  createContext: _preact.createContext,
  createFactory: tn,
  cloneElement: rn,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: en,
  findDOMNode: on,
  Component: _preact.Component,
  PureComponent: E,
  memo: g,
  forwardRef: x,
  flushSync: cn,
  unstable_batchedUpdates: ln,
  StrictMode: _preact.Fragment,
  Suspense: L,
  SuspenseList: M,
  lazy: F,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X
};
exports.default = _default;
},{"preact/hooks":"node_modules/preact/hooks/dist/hooks.module.js","preact":"node_modules/preact/dist/preact.module.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/tailwind.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/@fortawesome/fontawesome-free/css/all.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../webfonts/fa-brands-400.eot":[["fa-brands-400.1bb139e6.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./../webfonts/fa-brands-400.woff2":[["fa-brands-400.1d34615d.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./../webfonts/fa-brands-400.woff":[["fa-brands-400.eca31406.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./../webfonts/fa-brands-400.ttf":[["fa-brands-400.df86de32.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./../webfonts/fa-brands-400.svg":[["fa-brands-400.f1eb0e8c.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./../webfonts/fa-regular-400.eot":[["fa-regular-400.a2c1909d.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./../webfonts/fa-regular-400.woff2":[["fa-regular-400.5ca8c932.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./../webfonts/fa-regular-400.woff":[["fa-regular-400.3c3cc54e.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./../webfonts/fa-regular-400.ttf":[["fa-regular-400.cde05ce7.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./../webfonts/fa-regular-400.svg":[["fa-regular-400.6ef294e6.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./../webfonts/fa-solid-900.eot":[["fa-solid-900.90890cef.eot","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./../webfonts/fa-solid-900.woff2":[["fa-solid-900.da0e0451.woff2","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./../webfonts/fa-solid-900.woff":[["fa-solid-900.935b31ea.woff","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./../webfonts/fa-solid-900.ttf":[["fa-solid-900.f2409036.ttf","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./../webfonts/fa-solid-900.svg":[["fa-solid-900.c87ba59a.svg","node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./tailwind.min.css":"src/tailwind.min.css","@fortawesome/fontawesome-free/css/all.css":"node_modules/@fortawesome/fontawesome-free/css/all.css","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/react-share/hocs/createIcon.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

function createIcon(iconConfig) {
  var Icon = function Icon(_a) {
    var bgStyle = _a.bgStyle,
        borderRadius = _a.borderRadius,
        iconFillColor = _a.iconFillColor,
        round = _a.round,
        size = _a.size,
        rest = __rest(_a, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);

    return preact_1.h("svg", __assign({
      viewBox: "0 0 64 64",
      width: size,
      height: size
    }, rest), round ? preact_1.h("circle", {
      cx: "32",
      cy: "32",
      r: "31",
      fill: iconConfig.color,
      style: bgStyle
    }) : preact_1.h("rect", {
      width: "64",
      height: "64",
      rx: borderRadius,
      ry: borderRadius,
      fill: iconConfig.color,
      style: bgStyle
    }), preact_1.h("path", {
      d: iconConfig.path,
      fill: iconFillColor
    }));
  };

  Icon.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: 'white',
    size: 64
  };
  return Icon;
}

exports.default = createIcon;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/react-share/EmailIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var EmailIcon = createIcon_1.default({
  color: '#7f7f7f',
  networkName: 'email',
  path: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z'
});
exports.default = EmailIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/utils/objectToGetParams.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function objectToGetParams(object) {
  var params = Object.entries(object).filter(function (_a) {
    var value = _a[1];
    return value !== undefined && value !== null;
  }).map(function (_a) {
    var key = _a[0],
        value = _a[1];
    return encodeURIComponent(key) + "=" + encodeURIComponent(String(value));
  });
  return params.length > 0 ? "?" + params.join('&') : '';
}

exports.default = objectToGetParams;
},{}],"node_modules/classnames/index.js":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"src/react-share/ShareButton.tsx":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

var classnames_1 = __importDefault(require("classnames"));

var isPromise = function isPromise(obj) {
  return !!obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var getBoxPositionOnWindowCenter = function getBoxPositionOnWindowCenter(width, height) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
  };
};

var getBoxPositionOnScreenCenter = function getBoxPositionOnScreenCenter(width, height) {
  return {
    top: (window.screen.height - height) / 2,
    left: (window.screen.width - width) / 2
  };
};

function windowOpen(url, _a, onClose) {
  var height = _a.height,
      width = _a.width,
      configRest = __rest(_a, ["height", "width"]);

  var config = __assign({
    height: height,
    width: width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  }, configRest);

  var shareDialog = window.open(url, '', Object.keys(config).map(function (key) {
    return key + "=" + config[key];
  }).join(', '));

  if (onClose) {
    var interval_1 = window.setInterval(function () {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval_1);
          onClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

var ShareButton =
/** @class */
function (_super) {
  __extends(ShareButton, _super);

  function ShareButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.openShareDialog = function (link) {
      var _a = _this.props,
          onShareWindowClose = _a.onShareWindowClose,
          _b = _a.windowHeight,
          windowHeight = _b === void 0 ? 400 : _b,
          _c = _a.windowPosition,
          windowPosition = _c === void 0 ? 'windowCenter' : _c,
          _d = _a.windowWidth,
          windowWidth = _d === void 0 ? 550 : _d;

      var windowConfig = __assign({
        height: windowHeight,
        width: windowWidth
      }, windowPosition === 'windowCenter' ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));

      windowOpen(link, windowConfig, onShareWindowClose);
    };

    _this.handleClick = function (event) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, beforeOnClick, disabled, networkLink, onClick, url, openShareDialogOnClick, opts, link, returnVal;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this.props, beforeOnClick = _a.beforeOnClick, disabled = _a.disabled, networkLink = _a.networkLink, onClick = _a.onClick, url = _a.url, openShareDialogOnClick = _a.openShareDialogOnClick, opts = _a.opts;
              link = networkLink(url, opts);

              if (disabled) {
                return [2
                /*return*/
                ];
              }

              event.preventDefault();
              if (!beforeOnClick) return [3
              /*break*/
              , 2];
              returnVal = beforeOnClick();
              if (!isPromise(returnVal)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , returnVal];

            case 1:
              _b.sent();

              _b.label = 2;

            case 2:
              if (openShareDialogOnClick) {
                this.openShareDialog(link);
              }

              if (onClick) {
                onClick(event, link);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    return _this;
  }

  ShareButton.prototype.render = function () {
    var _a = this.props,
        beforeOnClick = _a.beforeOnClick,
        children = _a.children,
        className = _a.className,
        disabled = _a.disabled,
        disabledStyle = _a.disabledStyle,
        forwardedRef = _a.forwardedRef,
        networkLink = _a.networkLink,
        networkName = _a.networkName,
        onShareWindowClose = _a.onShareWindowClose,
        openShareDialogOnClick = _a.openShareDialogOnClick,
        opts = _a.opts,
        resetButtonStyle = _a.resetButtonStyle,
        style = _a.style,
        url = _a.url,
        windowHeight = _a.windowHeight,
        windowPosition = _a.windowPosition,
        windowWidth = _a.windowWidth,
        rest = __rest(_a, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]);

    var newClassName = classnames_1.default('react-share__ShareButton', {
      'react-share__ShareButton--disabled': !!disabled,
      disabled: !!disabled
    }, className);
    var newStyle = resetButtonStyle ? __assign(__assign({
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      font: 'inherit',
      color: 'inherit',
      cursor: 'pointer'
    }, style), disabled && disabledStyle) : __assign(__assign({}, style), disabled && disabledStyle);
    return preact_1.h("button", __assign({}, rest, {
      "aria-label": rest['aria-label'] || networkName,
      className: newClassName,
      onClick: this.handleClick,
      ref: forwardedRef,
      style: newStyle
    }), children);
  };

  ShareButton.defaultProps = {
    disabledStyle: {
      opacity: 0.6
    },
    openShareDialogOnClick: true,
    resetButtonStyle: true
  };
  return ShareButton;
}(preact_1.Component);

exports.default = ShareButton;
},{"preact":"node_modules/preact/dist/preact.module.js","classnames":"node_modules/classnames/index.js"}],"src/react-share/hocs/createShareButton.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

var compat_1 = require("preact/compat");

var ShareButton_1 = __importDefault(require("../ShareButton"));

function createShareButton(networkName, link, optsMap, defaultProps) {
  function CreatedButton(props, ref) {
    var opts = optsMap(props);

    var passedProps = __assign({}, props); // remove keys from passed props that are passed as opts


    var optsKeys = Object.keys(opts);
    optsKeys.forEach(function (key) {
      delete passedProps[key];
    });
    return preact_1.h(ShareButton_1.default, __assign({}, defaultProps, passedProps, {
      forwardedRef: ref,
      networkName: networkName,
      networkLink: link,
      opts: optsMap(props)
    }));
  }

  CreatedButton.displayName = "ShareButton-" + networkName;
  return compat_1.forwardRef(CreatedButton);
}

exports.default = createShareButton;
},{"preact":"node_modules/preact/dist/preact.module.js","preact/compat":"node_modules/preact/compat/dist/compat.module.js","../ShareButton":"src/react-share/ShareButton.tsx"}],"src/react-share/EmailShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function emailLink(url, _a) {
  var subject = _a.subject,
      body = _a.body,
      separator = _a.separator;
  return 'mailto:' + objectToGetParams_1.default({
    subject: subject,
    body: body ? body + separator + url : url
  });
}

var EmailShareButton = createShareButton_1.default('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body,
    separator: props.separator || ' '
  };
}, {
  openShareDialogOnClick: false,
  onClick: function onClick(_, link) {
    window.location.href = link;
  }
});
exports.default = EmailShareButton;
},{"./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/FacebookIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var FacebookIcon = createIcon_1.default({
  color: '#3b5998',
  networkName: 'facebook',
  path: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z'
});
exports.default = FacebookIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/FacebookMessengerIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var FacebookMessengerIcon = createIcon_1.default({
  color: '#2196F3',
  networkName: 'facebookmessenger',
  path: 'M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094'
});
exports.default = FacebookMessengerIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/FacebookMessengerShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function facebookMessengerLink(url, _a) {
  var appId = _a.appId,
      redirectUri = _a.redirectUri,
      to = _a.to;
  return 'https://www.facebook.com/dialog/send' + objectToGetParams_1.default({
    link: url,
    redirect_uri: redirectUri || url,
    app_id: appId,
    to: to
  });
}

var FacebookMessengerShareButton = createShareButton_1.default('facebookmessenger', facebookMessengerLink, function (props) {
  return {
    appId: props.appId,
    redirectUri: props.redirectUri,
    to: props.to
  };
}, {
  windowWidth: 1000,
  windowHeight: 820
});
exports.default = FacebookMessengerShareButton;
},{"./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/utils/assert.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AssertionError =
/** @class */
function (_super) {
  __extends(AssertionError, _super);

  function AssertionError(message) {
    var _this = _super.call(this, message) || this;

    _this.name = 'AssertionError';
    return _this;
  }

  return AssertionError;
}(Error);

function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}

exports.default = assert;
},{}],"src/react-share/FacebookShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function facebookLink(url, _a) {
  var quote = _a.quote,
      hashtag = _a.hashtag;
  assert_1.default(url, 'facebook.url');
  return 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams_1.default({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var FacebookShareButton = createShareButton_1.default('facebook', facebookLink, function (props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
exports.default = FacebookShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"node_modules/jsonp/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"node_modules/jsonp/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"node_modules/jsonp/node_modules/ms/index.js"}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/jsonp/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"node_modules/jsonp/node_modules/debug/src/debug.js","process":"node_modules/process/browser.js"}],"node_modules/jsonp/index.js":[function(require,module,exports) {
/**
 * Module dependencies
 */

var debug = require('debug')('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}

},{"debug":"node_modules/jsonp/node_modules/debug/src/browser.js"}],"src/react-share/hocs/createShareCount.tsx":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preact_1 = require("preact");

var defaultChildren = function defaultChildren(shareCount) {
  return shareCount;
};

var SocialMediaShareCount =
/** @class */
function (_super) {
  __extends(SocialMediaShareCount, _super);

  function SocialMediaShareCount(props) {
    var _this = _super.call(this, props) || this;

    _this._isMounted = false;
    _this.state = {
      count: 0,
      isLoading: false
    };
    return _this;
  }

  SocialMediaShareCount.prototype.componentDidMount = function () {
    this._isMounted = true;
    this.updateCount(this.props.url);
  };

  SocialMediaShareCount.prototype.componentDidUpdate = function (prevProps) {
    if (this.props.url !== prevProps.url) {
      this.updateCount(this.props.url);
    }
  };

  SocialMediaShareCount.prototype.componentWillUnmount = function () {
    this._isMounted = false;
  };

  SocialMediaShareCount.prototype.updateCount = function (url) {
    var _this = this;

    this.setState({
      isLoading: true
    });
    this.props.getCount(url, function (count) {
      if (_this._isMounted) {
        _this.setState({
          count: count,
          isLoading: false
        });
      }
    });
  };

  SocialMediaShareCount.prototype.render = function () {
    var _a = this.state,
        count = _a.count,
        isLoading = _a.isLoading;

    var _b = this.props,
        _c = _b.children,
        children = _c === void 0 ? defaultChildren : _c,
        className = _b.className,
        _ = _b.getCount,
        rest = __rest(_b, ["children", "className", "getCount"]);

    return preact_1.h("span", __assign({
      className: className ? 'react-share__ShareCount' : ''
    }, rest), !isLoading && count !== undefined && children(count));
  };

  return SocialMediaShareCount;
}(preact_1.Component);

function createShareCount(getCount) {
  var ShareCount = function ShareCount(props) {
    return preact_1.h(SocialMediaShareCount, __assign({
      getCount: getCount
    }, props));
  };

  ShareCount.displayName = "ShareCount(" + getCount.name + ")";
  return ShareCount;
}

exports.default = createShareCount;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/react-share/FacebookShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getFacebookShareCount(shareUrl, callback) {
  var endpoint = "https://graph.facebook.com/?id=" + shareUrl + "&fields=og_object{engagement}";
  jsonp_1.default(endpoint, function (err, data) {
    callback(!err && data && data.og_object && data.og_object.engagement ? data.og_object.engagement.count : undefined);
  });
}

exports.default = createShareCount_1.default(getFacebookShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/HatenaIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var HatenaIcon = createIcon_1.default({
  color: '#009ad9',
  networkName: 'hatena',
  path: 'M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 '
});
exports.default = HatenaIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/HatenaShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function hatenaLink(url, _a) {
  var title = _a.title;
  assert_1.default(url, 'hatena.url');
  return "http://b.hatena.ne.jp/add?mode=confirm&url=" + url + "&title=" + title;
}

var HatenaShareButton = createShareButton_1.default('hatena', hatenaLink, function (props) {
  return {
    title: props.title
  };
}, {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: 'windowCenter'
});
exports.default = HatenaShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/HatenaShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getHatenaShareCount(shareUrl, callback) {
  var url = 'https://bookmark.hatenaapis.com/count/entry';
  jsonp_1.default(url + objectToGetParams_1.default({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data : undefined);
  });
}

exports.default = createShareCount_1.default(getHatenaShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/InstapaperIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var InstapaperIcon = createIcon_1.default({
  color: '#1F1F1F',
  networkName: 'instapaper',
  path: 'M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z'
});
exports.default = InstapaperIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/InstapaperShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

function instapaperLink(url, _a) {
  var title = _a.title,
      description = _a.description;
  assert_1.default(url, 'instapaper.url');
  return 'http://www.instapaper.com/hello2' + objectToGetParams_1.default({
    url: url,
    title: title,
    description: description
  });
}

var InstapaperShareButton = createShareButton_1.default('instapaper', instapaperLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  windowWidth: 500,
  windowHeight: 500,
  windowPosition: 'windowCenter'
});
exports.default = InstapaperShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts"}],"src/react-share/LineIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var LineIcon = createIcon_1.default({
  color: '#00b800',
  networkName: 'line',
  path: 'M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z'
});
exports.default = LineIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/LineShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

function lineLink(url, _a) {
  var title = _a.title;
  assert_1.default(url, 'line.url');
  return 'https://social-plugins.line.me/lineit/share' + objectToGetParams_1.default({
    url: url,
    text: title
  });
}

var LineShareButton = createShareButton_1.default('line', lineLink, function (props) {
  return {
    title: props.title
  };
}, {
  windowWidth: 500,
  windowHeight: 500
});
exports.default = LineShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts"}],"src/react-share/LinkedinIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var LinkedinIcon = createIcon_1.default({
  color: '#007fb1',
  networkName: 'linkedin',
  path: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z'
});
exports.default = LinkedinIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/LinkedinShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function linkedinLink(url, _a) {
  var title = _a.title,
      summary = _a.summary,
      source = _a.source;
  assert_1.default(url, 'linkedin.url');
  return 'https://linkedin.com/shareArticle' + objectToGetParams_1.default({
    url: url,
    mini: 'true',
    title: title,
    summary: summary,
    source: source
  });
}

var LinkedinShareButton = createShareButton_1.default('linkedin', linkedinLink, function (_a) {
  var title = _a.title,
      summary = _a.summary,
      source = _a.source;
  return {
    title: title,
    summary: summary,
    source: source
  };
}, {
  windowWidth: 750,
  windowHeight: 600
});
exports.default = LinkedinShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/LivejournalIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var LivejournalIcon = createIcon_1.default({
  color: '#21A5D8',
  networkName: 'livejournal',
  path: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z'
});
exports.default = LivejournalIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/LivejournalShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function livejournalLink(url, _a) {
  var title = _a.title,
      description = _a.description;
  assert_1.default(url, 'livejournal.url');
  return 'https://www.livejournal.com/update.bml' + objectToGetParams_1.default({
    subject: title,
    event: description
  });
}

var LivejournalShareButton = createShareButton_1.default('livejournal', livejournalLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  windowWidth: 660,
  windowHeight: 460
});
exports.default = LivejournalShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/MailruIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var MailruIcon = createIcon_1.default({
  color: '#168DE2',
  networkName: 'mailru',
  path: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z'
});
exports.default = MailruIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/MailruShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function mailruLink(url, _a) {
  var title = _a.title,
      description = _a.description,
      imageUrl = _a.imageUrl;
  assert_1.default(url, 'mailru.url');
  return 'https://connect.mail.ru/share' + objectToGetParams_1.default({
    url: url,
    title: title,
    description: description,
    image_url: imageUrl
  });
}

var MailruShareButton = createShareButton_1.default('mailru', mailruLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl
  };
}, {
  windowWidth: 660,
  windowHeight: 460
});
exports.default = MailruShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/OKIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var OKIcon = createIcon_1.default({
  color: '#f2720c',
  networkName: 'ok',
  path: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z '
});
exports.default = OKIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/OKShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function okLink(url, _a) {
  var title = _a.title,
      description = _a.description,
      image = _a.image;
  assert_1.default(url, 'ok.url');
  return 'https://connect.ok.ru/offer' + objectToGetParams_1.default({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

var OKShareButton = createShareButton_1.default('ok', okLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  windowWidth: 588,
  windowHeight: 480,
  windowPosition: 'screenCenter'
});
exports.default = OKShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/OKShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;
  window.ODKL = {
    updateCount: function updateCount(index, count) {
      var callbackIndex = index === '' ? 0 : parseInt(index.replace('react-share-', ''), 10);
      window.OK.callbacks[callbackIndex](count === '' ? undefined : parseInt(count, 10));
    }
  };
  window.OK.callbacks.push(callback);
  return jsonp_1.default(url + objectToGetParams_1.default({
    'st.cmd': 'extLike',
    uid: "react-share-" + index,
    ref: shareUrl
  }));
}

exports.default = createShareCount_1.default(getOKShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/PinterestIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var PinterestIcon = createIcon_1.default({
  color: '#cb2128',
  networkName: 'pinterest',
  path: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z'
});
exports.default = PinterestIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/PinterestShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function pinterestLink(url, _a) {
  var media = _a.media,
      description = _a.description;
  assert_1.default(url, 'pinterest.url');
  assert_1.default(media, 'pinterest.media');
  return 'https://pinterest.com/pin/create/button/' + objectToGetParams_1.default({
    url: url,
    media: media,
    description: description
  });
}

var PinterestShareButton = createShareButton_1.default('pinterest', pinterestLink, function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  windowWidth: 1000,
  windowHeight: 730
});
exports.default = PinterestShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/PinterestShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';
  jsonp_1.default(url + objectToGetParams_1.default({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

exports.default = createShareCount_1.default(getPinterestShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/PocketIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var PocketIcon = createIcon_1.default({
  color: '#EF3F56',
  networkName: 'pocket',
  path: 'M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z'
});
exports.default = PocketIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/PocketShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

function pocketLink(url, _a) {
  var title = _a.title;
  assert_1.default(url, 'pocket.url');
  return 'https://getpocket.com/save' + objectToGetParams_1.default({
    url: url,
    title: title
  });
}

var PocketShareButton = createShareButton_1.default('pocket', pocketLink, function (props) {
  return {
    title: props.title
  };
}, {
  windowWidth: 500,
  windowHeight: 500
});
exports.default = PocketShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts"}],"src/react-share/RedditIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var RedditIcon = createIcon_1.default({
  color: '#ff4500',
  networkName: 'reddit',
  path: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z'
});
exports.default = RedditIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/RedditShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function redditLink(url, _a) {
  var title = _a.title;
  assert_1.default(url, 'reddit.url');
  return 'https://www.reddit.com/submit' + objectToGetParams_1.default({
    url: url,
    title: title
  });
}

var RedditShareButton = createShareButton_1.default('reddit', redditLink, function (props) {
  return {
    title: props.title
  };
}, {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: 'windowCenter'
});
exports.default = RedditShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/RedditShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getRedditShareCount(shareUrl, callback) {
  var endpoint = "https://www.reddit.com/api/info.json?limit=1&url=" + shareUrl;
  jsonp_1.default(endpoint, {
    param: 'jsonp'
  }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

exports.default = createShareCount_1.default(getRedditShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/TelegramIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var TelegramIcon = createIcon_1.default({
  color: '#37aee2',
  networkName: 'telegram',
  path: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957'
});
exports.default = TelegramIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/TelegramShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function telegramLink(url, _a) {
  var title = _a.title;
  assert_1.default(url, 'telegram.url');
  return 'https://telegram.me/share/url' + objectToGetParams_1.default({
    url: url,
    text: title
  });
}

var TelegramShareButton = createShareButton_1.default('telegram', telegramLink, function (props) {
  return {
    title: props.title
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
exports.default = TelegramShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/TumblrIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var TumblrIcon = createIcon_1.default({
  color: '#2c4762',
  networkName: 'tumblr',
  path: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z'
});
exports.default = TumblrIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/TumblrShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function tumblrLink(url, _a) {
  var title = _a.title,
      caption = _a.caption,
      tags = _a.tags,
      posttype = _a.posttype;
  assert_1.default(url, 'tumblr.url');
  return 'https://www.tumblr.com/widgets/share/tool' + objectToGetParams_1.default({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

var TumblrShareButton = createShareButton_1.default('tumblr', tumblrLink, function (props) {
  return {
    title: props.title,
    tags: (props.tags || []).join(','),
    caption: props.caption,
    posttype: props.posttype || 'link'
  };
}, {
  windowWidth: 660,
  windowHeight: 460
});
exports.default = TumblrShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/TumblrShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'https://api.tumblr.com/v2/share/stats';
  return jsonp_1.default(endpoint + objectToGetParams_1.default({
    url: shareUrl
  }), function (err, data) {
    callback(!err && data && data.response ? data.response.note_count : undefined);
  });
}

exports.default = createShareCount_1.default(getTumblrShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/TwitterIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var TwitterIcon = createIcon_1.default({
  color: '#00aced',
  networkName: 'twitter',
  path: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z'
});
exports.default = TwitterIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/TwitterShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function twitterLink(url, _a) {
  var title = _a.title,
      via = _a.via,
      _b = _a.hashtags,
      hashtags = _b === void 0 ? [] : _b,
      _c = _a.related,
      related = _c === void 0 ? [] : _c;
  assert_1.default(url, 'twitter.url');
  assert_1.default(Array.isArray(hashtags), 'twitter.hashtags is not an array');
  assert_1.default(Array.isArray(related), 'twitter.related is not an array');
  return 'https://twitter.com/share' + objectToGetParams_1.default({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.length > 0 ? hashtags.join(',') : undefined,
    related: related.length > 0 ? related.join(',') : undefined
  });
}

var TwitterShareButton = createShareButton_1.default('twitter', twitterLink, function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
exports.default = TwitterShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/ViberIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var ViberIcon = createIcon_1.default({
  color: '#7C529E',
  networkName: 'viber',
  path: 'm31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z'
});
exports.default = ViberIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/ViberShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function viberLink(url, _a) {
  var title = _a.title,
      separator = _a.separator;
  assert_1.default(url, 'viber.url');
  return 'viber://forward' + objectToGetParams_1.default({
    text: title ? title + separator + url : url
  });
}

var ViberShareButton = createShareButton_1.default('viber', viberLink, function (props) {
  return {
    title: props.title,
    separator: props.separator || ' '
  };
}, {
  windowWidth: 660,
  windowHeight: 460
});
exports.default = ViberShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/VKIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var VKIcon = createIcon_1.default({
  color: '#45668e',
  networkName: 'vk',
  path: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z'
});
exports.default = VKIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/VKShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function vkLink(url, _a) {
  var title = _a.title,
      image = _a.image,
      noParse = _a.noParse,
      noVkLinks = _a.noVkLinks;
  assert_1.default(url, 'vk.url');
  return 'https://vk.com/share.php' + objectToGetParams_1.default({
    url: url,
    title: title,
    image: image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0
  });
}

var VKShareButton = createShareButton_1.default('vk', vkLink, function (props) {
  return {
    title: props.title,
    image: props.image,
    noParse: props.noParse,
    noVkLinks: props.noVkLinks
  };
}, {
  windowWidth: 660,
  windowHeight: 460
});
exports.default = VKShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/VKShareCount.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonp_1 = __importDefault(require("jsonp"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareCount_1 = __importDefault(require("./hocs/createShareCount"));

function getVKShareCount(shareUrl, callback) {
  if (!window.VK) window.VK = {};
  window.VK.Share = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    count: function count(index, _count) {
      return window.VK.callbacks[index](_count);
    }
  };
  window.VK.callbacks = [];
  var url = 'https://vk.com/share.php';
  var index = window.VK.callbacks.length;
  window.VK.callbacks.push(callback);
  return jsonp_1.default(url + objectToGetParams_1.default({
    act: 'count',
    index: index,
    url: shareUrl
  }));
}

exports.default = createShareCount_1.default(getVKShareCount);
},{"jsonp":"node_modules/jsonp/index.js","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareCount":"src/react-share/hocs/createShareCount.tsx"}],"src/react-share/WeiboIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var WeiboIcon = createIcon_1.default({
  color: '#CD201F',
  networkName: 'weibo',
  path: 'M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z'
});
exports.default = WeiboIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/WeiboShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function weiboLink(url, _a) {
  var title = _a.title,
      image = _a.image;
  assert_1.default(url, 'weibo.url');
  return 'http://service.weibo.com/share/share.php' + objectToGetParams_1.default({
    url: url,
    title: title,
    pic: image
  });
}

var WeiboShareButton = createShareButton_1.default('weibo', weiboLink, function (props) {
  return {
    title: props.title,
    image: props.image
  };
}, {
  windowWidth: 660,
  windowHeight: 550,
  windowPosition: 'screenCenter'
});
exports.default = WeiboShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/WhatsappIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var WhatsappIcon = createIcon_1.default({
  color: '#25D366',
  networkName: 'whatsapp',
  path: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915'
});
exports.default = WhatsappIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/WhatsappShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

function whatsappLink(url, _a) {
  var title = _a.title,
      separator = _a.separator;
  assert_1.default(url, 'whatsapp.url');
  return 'https://' + (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + objectToGetParams_1.default({
    text: title ? title + separator + url : url
  });
}

var WhatsappShareButton = createShareButton_1.default('whatsapp', whatsappLink, function (props) {
  return {
    title: props.title,
    separator: props.separator || ' '
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
exports.default = WhatsappShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/WorkplaceIcon.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createIcon_1 = __importDefault(require("./hocs/createIcon"));

var WorkplaceIcon = createIcon_1.default({
  color: '#3b3d4a',
  networkName: 'workplace',
  path: 'M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z'
});
exports.default = WorkplaceIcon;
},{"./hocs/createIcon":"src/react-share/hocs/createIcon.tsx"}],"src/react-share/WorkplaceShareButton.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assert_1 = __importDefault(require("./utils/assert"));

var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));

var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));

function workplaceLink(url, _a) {
  var quote = _a.quote,
      hashtag = _a.hashtag;
  assert_1.default(url, 'workplace.url');
  return 'https://work.facebook.com/sharer.php' + objectToGetParams_1.default({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var WorkplaceShareButton = createShareButton_1.default('workplace', workplaceLink, function (props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
exports.default = WorkplaceShareButton;
},{"./utils/assert":"src/react-share/utils/assert.ts","./utils/objectToGetParams":"src/react-share/utils/objectToGetParams.ts","./hocs/createShareButton":"src/react-share/hocs/createShareButton.tsx"}],"src/react-share/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkplaceShareButton = exports.WorkplaceIcon = exports.WhatsappShareButton = exports.WhatsappIcon = exports.WeiboShareButton = exports.WeiboIcon = exports.VKShareCount = exports.VKShareButton = exports.VKIcon = exports.ViberShareButton = exports.ViberIcon = exports.TwitterShareButton = exports.TwitterIcon = exports.TumblrShareCount = exports.TumblrShareButton = exports.TumblrIcon = exports.TelegramShareButton = exports.TelegramIcon = exports.RedditShareCount = exports.RedditShareButton = exports.RedditIcon = exports.PocketShareButton = exports.PocketIcon = exports.PinterestShareCount = exports.PinterestShareButton = exports.PinterestIcon = exports.OKShareCount = exports.OKShareButton = exports.OKIcon = exports.MailruShareButton = exports.MailruIcon = exports.LivejournalShareButton = exports.LivejournalIcon = exports.LinkedinShareButton = exports.LinkedinIcon = exports.LineShareButton = exports.LineIcon = exports.InstapaperShareButton = exports.InstapaperIcon = exports.HatenaShareCount = exports.HatenaShareButton = exports.HatenaIcon = exports.FacebookShareCount = exports.FacebookShareButton = exports.FacebookMessengerShareButton = exports.FacebookMessengerIcon = exports.FacebookIcon = exports.EmailShareButton = exports.EmailIcon = void 0;

var EmailIcon_1 = require("./EmailIcon");

Object.defineProperty(exports, "EmailIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(EmailIcon_1).default;
  }
});

var EmailShareButton_1 = require("./EmailShareButton");

Object.defineProperty(exports, "EmailShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(EmailShareButton_1).default;
  }
});

var FacebookIcon_1 = require("./FacebookIcon");

Object.defineProperty(exports, "FacebookIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(FacebookIcon_1).default;
  }
});

var FacebookMessengerIcon_1 = require("./FacebookMessengerIcon");

Object.defineProperty(exports, "FacebookMessengerIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(FacebookMessengerIcon_1).default;
  }
});

var FacebookMessengerShareButton_1 = require("./FacebookMessengerShareButton");

Object.defineProperty(exports, "FacebookMessengerShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(FacebookMessengerShareButton_1).default;
  }
});

var FacebookShareButton_1 = require("./FacebookShareButton");

Object.defineProperty(exports, "FacebookShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(FacebookShareButton_1).default;
  }
});

var FacebookShareCount_1 = require("./FacebookShareCount");

Object.defineProperty(exports, "FacebookShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(FacebookShareCount_1).default;
  }
});

var HatenaIcon_1 = require("./HatenaIcon");

Object.defineProperty(exports, "HatenaIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(HatenaIcon_1).default;
  }
});

var HatenaShareButton_1 = require("./HatenaShareButton");

Object.defineProperty(exports, "HatenaShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(HatenaShareButton_1).default;
  }
});

var HatenaShareCount_1 = require("./HatenaShareCount");

Object.defineProperty(exports, "HatenaShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(HatenaShareCount_1).default;
  }
});

var InstapaperIcon_1 = require("./InstapaperIcon");

Object.defineProperty(exports, "InstapaperIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(InstapaperIcon_1).default;
  }
});

var InstapaperShareButton_1 = require("./InstapaperShareButton");

Object.defineProperty(exports, "InstapaperShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(InstapaperShareButton_1).default;
  }
});

var LineIcon_1 = require("./LineIcon");

Object.defineProperty(exports, "LineIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(LineIcon_1).default;
  }
});

var LineShareButton_1 = require("./LineShareButton");

Object.defineProperty(exports, "LineShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(LineShareButton_1).default;
  }
});

var LinkedinIcon_1 = require("./LinkedinIcon");

Object.defineProperty(exports, "LinkedinIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(LinkedinIcon_1).default;
  }
});

var LinkedinShareButton_1 = require("./LinkedinShareButton");

Object.defineProperty(exports, "LinkedinShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(LinkedinShareButton_1).default;
  }
});

var LivejournalIcon_1 = require("./LivejournalIcon");

Object.defineProperty(exports, "LivejournalIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(LivejournalIcon_1).default;
  }
});

var LivejournalShareButton_1 = require("./LivejournalShareButton");

Object.defineProperty(exports, "LivejournalShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(LivejournalShareButton_1).default;
  }
});

var MailruIcon_1 = require("./MailruIcon");

Object.defineProperty(exports, "MailruIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(MailruIcon_1).default;
  }
});

var MailruShareButton_1 = require("./MailruShareButton");

Object.defineProperty(exports, "MailruShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(MailruShareButton_1).default;
  }
});

var OKIcon_1 = require("./OKIcon");

Object.defineProperty(exports, "OKIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(OKIcon_1).default;
  }
});

var OKShareButton_1 = require("./OKShareButton");

Object.defineProperty(exports, "OKShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(OKShareButton_1).default;
  }
});

var OKShareCount_1 = require("./OKShareCount");

Object.defineProperty(exports, "OKShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(OKShareCount_1).default;
  }
});

var PinterestIcon_1 = require("./PinterestIcon");

Object.defineProperty(exports, "PinterestIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(PinterestIcon_1).default;
  }
});

var PinterestShareButton_1 = require("./PinterestShareButton");

Object.defineProperty(exports, "PinterestShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(PinterestShareButton_1).default;
  }
});

var PinterestShareCount_1 = require("./PinterestShareCount");

Object.defineProperty(exports, "PinterestShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(PinterestShareCount_1).default;
  }
});

var PocketIcon_1 = require("./PocketIcon");

Object.defineProperty(exports, "PocketIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(PocketIcon_1).default;
  }
});

var PocketShareButton_1 = require("./PocketShareButton");

Object.defineProperty(exports, "PocketShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(PocketShareButton_1).default;
  }
});

var RedditIcon_1 = require("./RedditIcon");

Object.defineProperty(exports, "RedditIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(RedditIcon_1).default;
  }
});

var RedditShareButton_1 = require("./RedditShareButton");

Object.defineProperty(exports, "RedditShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(RedditShareButton_1).default;
  }
});

var RedditShareCount_1 = require("./RedditShareCount");

Object.defineProperty(exports, "RedditShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(RedditShareCount_1).default;
  }
});

var TelegramIcon_1 = require("./TelegramIcon");

Object.defineProperty(exports, "TelegramIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(TelegramIcon_1).default;
  }
});

var TelegramShareButton_1 = require("./TelegramShareButton");

Object.defineProperty(exports, "TelegramShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(TelegramShareButton_1).default;
  }
});

var TumblrIcon_1 = require("./TumblrIcon");

Object.defineProperty(exports, "TumblrIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(TumblrIcon_1).default;
  }
});

var TumblrShareButton_1 = require("./TumblrShareButton");

Object.defineProperty(exports, "TumblrShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(TumblrShareButton_1).default;
  }
});

var TumblrShareCount_1 = require("./TumblrShareCount");

Object.defineProperty(exports, "TumblrShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(TumblrShareCount_1).default;
  }
});

var TwitterIcon_1 = require("./TwitterIcon");

Object.defineProperty(exports, "TwitterIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(TwitterIcon_1).default;
  }
});

var TwitterShareButton_1 = require("./TwitterShareButton");

Object.defineProperty(exports, "TwitterShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(TwitterShareButton_1).default;
  }
});

var ViberIcon_1 = require("./ViberIcon");

Object.defineProperty(exports, "ViberIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(ViberIcon_1).default;
  }
});

var ViberShareButton_1 = require("./ViberShareButton");

Object.defineProperty(exports, "ViberShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(ViberShareButton_1).default;
  }
});

var VKIcon_1 = require("./VKIcon");

Object.defineProperty(exports, "VKIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(VKIcon_1).default;
  }
});

var VKShareButton_1 = require("./VKShareButton");

Object.defineProperty(exports, "VKShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(VKShareButton_1).default;
  }
});

var VKShareCount_1 = require("./VKShareCount");

Object.defineProperty(exports, "VKShareCount", {
  enumerable: true,
  get: function get() {
    return __importDefault(VKShareCount_1).default;
  }
});

var WeiboIcon_1 = require("./WeiboIcon");

Object.defineProperty(exports, "WeiboIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(WeiboIcon_1).default;
  }
});

var WeiboShareButton_1 = require("./WeiboShareButton");

Object.defineProperty(exports, "WeiboShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(WeiboShareButton_1).default;
  }
});

var WhatsappIcon_1 = require("./WhatsappIcon");

Object.defineProperty(exports, "WhatsappIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(WhatsappIcon_1).default;
  }
});

var WhatsappShareButton_1 = require("./WhatsappShareButton");

Object.defineProperty(exports, "WhatsappShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(WhatsappShareButton_1).default;
  }
});

var WorkplaceIcon_1 = require("./WorkplaceIcon");

Object.defineProperty(exports, "WorkplaceIcon", {
  enumerable: true,
  get: function get() {
    return __importDefault(WorkplaceIcon_1).default;
  }
});

var WorkplaceShareButton_1 = require("./WorkplaceShareButton");

Object.defineProperty(exports, "WorkplaceShareButton", {
  enumerable: true,
  get: function get() {
    return __importDefault(WorkplaceShareButton_1).default;
  }
});
},{"./EmailIcon":"src/react-share/EmailIcon.ts","./EmailShareButton":"src/react-share/EmailShareButton.ts","./FacebookIcon":"src/react-share/FacebookIcon.ts","./FacebookMessengerIcon":"src/react-share/FacebookMessengerIcon.ts","./FacebookMessengerShareButton":"src/react-share/FacebookMessengerShareButton.ts","./FacebookShareButton":"src/react-share/FacebookShareButton.ts","./FacebookShareCount":"src/react-share/FacebookShareCount.ts","./HatenaIcon":"src/react-share/HatenaIcon.ts","./HatenaShareButton":"src/react-share/HatenaShareButton.ts","./HatenaShareCount":"src/react-share/HatenaShareCount.ts","./InstapaperIcon":"src/react-share/InstapaperIcon.ts","./InstapaperShareButton":"src/react-share/InstapaperShareButton.ts","./LineIcon":"src/react-share/LineIcon.ts","./LineShareButton":"src/react-share/LineShareButton.ts","./LinkedinIcon":"src/react-share/LinkedinIcon.ts","./LinkedinShareButton":"src/react-share/LinkedinShareButton.ts","./LivejournalIcon":"src/react-share/LivejournalIcon.ts","./LivejournalShareButton":"src/react-share/LivejournalShareButton.ts","./MailruIcon":"src/react-share/MailruIcon.ts","./MailruShareButton":"src/react-share/MailruShareButton.ts","./OKIcon":"src/react-share/OKIcon.ts","./OKShareButton":"src/react-share/OKShareButton.ts","./OKShareCount":"src/react-share/OKShareCount.ts","./PinterestIcon":"src/react-share/PinterestIcon.ts","./PinterestShareButton":"src/react-share/PinterestShareButton.ts","./PinterestShareCount":"src/react-share/PinterestShareCount.ts","./PocketIcon":"src/react-share/PocketIcon.ts","./PocketShareButton":"src/react-share/PocketShareButton.ts","./RedditIcon":"src/react-share/RedditIcon.ts","./RedditShareButton":"src/react-share/RedditShareButton.ts","./RedditShareCount":"src/react-share/RedditShareCount.ts","./TelegramIcon":"src/react-share/TelegramIcon.ts","./TelegramShareButton":"src/react-share/TelegramShareButton.ts","./TumblrIcon":"src/react-share/TumblrIcon.ts","./TumblrShareButton":"src/react-share/TumblrShareButton.ts","./TumblrShareCount":"src/react-share/TumblrShareCount.ts","./TwitterIcon":"src/react-share/TwitterIcon.ts","./TwitterShareButton":"src/react-share/TwitterShareButton.ts","./ViberIcon":"src/react-share/ViberIcon.ts","./ViberShareButton":"src/react-share/ViberShareButton.ts","./VKIcon":"src/react-share/VKIcon.ts","./VKShareButton":"src/react-share/VKShareButton.ts","./VKShareCount":"src/react-share/VKShareCount.ts","./WeiboIcon":"src/react-share/WeiboIcon.ts","./WeiboShareButton":"src/react-share/WeiboShareButton.ts","./WhatsappIcon":"src/react-share/WhatsappIcon.ts","./WhatsappShareButton":"src/react-share/WhatsappShareButton.ts","./WorkplaceIcon":"src/react-share/WorkplaceIcon.ts","./WorkplaceShareButton":"src/react-share/WorkplaceShareButton.ts"}],"src/ShareIcons.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareIcons = void 0;

var compat_1 = require("preact/compat");

var preact_1 = require("preact");

require("./styles.css");

var react_share_1 = require("./react-share"); //ref https://codepen.io/volitilov/pen/gxvyRX


var getAllIcons = function getAllIcons(size) {
  if (size === void 0) {
    size = 40;
  }

  return [{
    name: "facebook",
    icon: preact_1.h(react_share_1.FacebookIcon, {
      size: size
    })
  }, {
    name: "twitter",
    icon: preact_1.h(react_share_1.TwitterIcon, {
      size: size
    })
  }, {
    name: "linkedin",
    icon: preact_1.h(react_share_1.LinkedinIcon, {
      size: size
    })
  }, {
    name: "pinterest",
    icon: preact_1.h(react_share_1.PinterestIcon, {
      size: size
    })
  }, {
    name: "facebook-messenger",
    icon: preact_1.h(react_share_1.FacebookMessengerIcon, {
      size: size
    })
  }, {
    name: "telegram",
    icon: preact_1.h(react_share_1.TelegramIcon, {
      size: size
    })
  }, {
    name: "whatsapp",
    icon: preact_1.h(react_share_1.WhatsappIcon, {
      size: size
    })
  }, {
    name: "vk",
    icon: preact_1.h(react_share_1.VKIcon, {
      size: size
    })
  }, {
    name: "ok",
    icon: preact_1.h(react_share_1.OKIcon, {
      size: size
    })
  }, {
    name: "reddit",
    icon: preact_1.h(react_share_1.RedditIcon, {
      size: size
    })
  }, {
    name: "tumblr",
    icon: preact_1.h(react_share_1.TumblrIcon, {
      size: size
    })
  }, {
    name: "live-journal",
    icon: preact_1.h(react_share_1.LivejournalIcon, {
      size: size
    })
  }, {
    name: "mailru",
    icon: preact_1.h(react_share_1.MailruIcon, {
      size: size
    })
  }, {
    name: "email",
    icon: preact_1.h(react_share_1.EmailIcon, {
      size: size
    })
  }, {
    name: "viber",
    icon: preact_1.h(react_share_1.ViberIcon, {
      size: size
    })
  }, {
    name: "workplace",
    icon: preact_1.h(react_share_1.WorkplaceIcon, {
      size: size
    })
  }, {
    name: "line",
    icon: preact_1.h(react_share_1.LineIcon, {
      size: size
    })
  }, {
    name: "weibo",
    icon: preact_1.h(react_share_1.WeiboIcon, {
      size: size
    })
  }, {
    name: "pocket",
    icon: preact_1.h(react_share_1.PocketIcon, {
      size: size
    })
  }, {
    name: "instapaper",
    icon: preact_1.h(react_share_1.InstapaperIcon, {
      size: size
    })
  }, {
    name: "hatena",
    icon: preact_1.h(react_share_1.HatenaIcon, {
      size: size
    })
  }];
};

var getShareIcon = function getShareIcon(name, shareUrl, size) {
  if (size === void 0) {
    size = 64;
  }

  if (name === "facebook") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.FacebookShareButton, {
      url: shareUrl,
      quote: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.FacebookIcon, {
      size: size
    })));
  } else if (name === "facebook-messenger") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.FacebookMessengerShareButton, {
      url: shareUrl,
      appId: "521270401588372",
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.FacebookMessengerIcon, {
      size: size
    })));
  } else if (name === "twitter") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.TwitterShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.TwitterIcon, {
      size: size
    })));
  } else if (name === "telegram") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.TelegramShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.TelegramIcon, {
      size: size
    })));
  } else if (name === "whatsapp") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.WhatsappShareButton, {
      url: shareUrl,
      title: name,
      separator: ":: ",
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.WhatsappIcon, {
      size: size
    })));
  } else if (name === "linkedin") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.LinkedinShareButton, {
      url: shareUrl,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.LinkedinIcon, {
      size: size
    })));
  } else if (name === "pinterest") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.PinterestShareButton, {
      url: String(window.location),
      //   media={`${String(window.location)}/${exampleImage}`}
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.PinterestIcon, {
      size: size
    })));
  } else if (name === "vk") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.VKShareButton, {
      url: shareUrl,
      //   image={`${String(window.location)}/${exampleImage}`}
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.VKIcon, {
      size: size
    })));
  } else if (name === "ok") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.OKShareButton, {
      url: shareUrl,
      //   image={`${String(window.location)}/${exampleImage}`}
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.OKIcon, {
      size: size
    })));
  } else if (name === "reddit") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.RedditShareButton, {
      url: shareUrl,
      title: name,
      windowWidth: 660,
      windowHeight: 460,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.RedditIcon, {
      size: size
    })));
  } else if (name === "tumblr") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.TumblrShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.TumblrIcon, {
      size: size
    })));
  } else if (name === "live-journal") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.LivejournalShareButton, {
      url: shareUrl,
      title: name,
      description: shareUrl,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.LivejournalIcon, {
      size: size
    })));
  } else if (name === "mailru") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.MailruShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.MailruIcon, {
      size: size
    })));
  } else if (name === "email") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.EmailShareButton, {
      url: shareUrl,
      subject: name,
      body: "body",
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.EmailIcon, {
      size: size
    })));
  } else if (name === "viber") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.ViberShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.ViberIcon, {
      size: size
    })));
  } else if (name === "workplace") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.WorkplaceShareButton, {
      url: shareUrl,
      quote: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.WorkplaceIcon, {
      size: size
    })));
  } else if (name === "line") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.LineShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.LineIcon, {
      size: size
    })));
  } else if (name === "weibo") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.WeiboShareButton, {
      url: shareUrl,
      title: name,
      //   image={`${String(window.location)}/${exampleImage}`}
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.WeiboIcon, {
      size: size
    })));
  } else if (name === "pocket") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.PocketShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.PocketIcon, {
      size: size
    })));
  } else if (name === "instapaper") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.InstapaperShareButton, {
      url: shareUrl,
      title: name,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.InstapaperIcon, {
      size: size
    })));
  } else if (name === "hatena") {
    return preact_1.h("div", {
      className: "Demo__some-network"
    }, preact_1.h(react_share_1.HatenaShareButton, {
      url: shareUrl,
      title: name,
      windowWidth: 660,
      windowHeight: 460,
      className: "Demo__some-network__share-button"
    }, preact_1.h(react_share_1.HatenaIcon, {
      size: size
    })));
  }
};

var getFirstFourElements = function getFirstFourElements(link) {
  var allIcons = getAllIcons();
  var icons = allIcons.slice(0, 4);
  return icons.map(function (icon, i) {
    return __assign(__assign({}, icon), {
      id: i + 1,
      link: link,
      icon: getShareIcon(icon.name, link, 55)
    });
  });
};

var getRemainingElements = function getRemainingElements(link) {
  var allIcons = getAllIcons(30);
  var icons = allIcons.slice(4, allIcons.length);
  return icons.map(function (icon, i) {
    return __assign(__assign({}, icon), {
      id: i + 4,
      link: link,
      icon: getShareIcon(icon.name, link, 30)
    });
  });
};

exports.ShareIcons = function (_a) {
  var children = _a.children,
      align = _a.alignIcons,
      link = _a.link;

  var _b = compat_1.useState(getFirstFourElements(link) || []),
      items = _b[0],
      setItems = _b[1];

  var _c = compat_1.useState(getRemainingElements(link) || []),
      dropdownItems = _c[0],
      setDropdownItems = _c[1];

  var getAlignClass = function getAlignClass() {
    var alignClass = "";

    if (align === "left") {
      alignClass += "flex-col left-0 top-10";
    }

    if (align === "right") {
      alignClass += "flex-col right-0 top-10";
    }

    if (align === "top") {
      alignClass += "flex top-0 justify-center w-screen";
    }

    if (align === "bottom") {
      alignClass += "flex bottom-0 justify-center w-screen";
    }

    if (align === "top-left") {
      alignClass += "flex flex-row-reverse top-0 left-0";
    }

    if (align === "top-right") {
      alignClass += "flex top-0 right-0";
    }

    if (align === "bottom-left") {
      alignClass += "flex flex-row-reverse bottom-0 left-0";
    }

    if (align === "bottom-right") {
      alignClass += "flex bottom-0 right-0";
    }

    return alignClass;
  };

  return preact_1.h("div", {
    class: "s-soft" + " " + getAlignClass()
  }, items.map(function (item, index) {
    return preact_1.h("div", {
      class: "s-item" + " " + item.name + " cursor-pointer " + (align === 'left' ? 'hover:pl-10' : align === "right" ? "hover:pr-10" : ""),
      target: "_blank"
    }, item.icon);
  }), preact_1.h("div", {
    class: "relative inline-block " + "dropdown"
  }, preact_1.h("a", {
    class: "s-item" + " cursor-pointer bg-green-600 "
  }, preact_1.h("span", {
    class: "fa fa-ellipsis-h"
  })), preact_1.h("div", {
    class: align.indexOf("bottom") !== -1 ? "dropup-content" : "dropdown-content"
  }, preact_1.h("ul", {
    class: "py-1"
  }, dropdownItems.map(function (di, i) {
    return preact_1.h("li", null, preact_1.h("div", {
      class: "flex cursor-pointer block py-0.5 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
      target: "_blank"
    }, di.icon));
  })))));
};
},{"preact/compat":"node_modules/preact/compat/dist/compat.module.js","preact":"node_modules/preact/dist/preact.module.js","./styles.css":"src/styles.css","./react-share":"src/react-share/index.ts"}],"src/index.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @ts-ignore

var preact_custom_element_1 = __importDefault(require("preact-custom-element"));

var ShareIcons_1 = require("./ShareIcons");

preact_custom_element_1.default(ShareIcons_1.ShareIcons, "x-share-icons", ["align-icons", "link"], {
  shadow: false
}); // const icons = document.createElement("x-share-icons")!;
// // icons.setAttribute("align", "top");
// document.getElementById("container")?.appendChild(icons);
},{"preact-custom-element":"node_modules/preact-custom-element/dist/preact-custom-element.esm.js","./ShareIcons":"src/ShareIcons.tsx"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51724" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.tsx"], null)
//# sourceMappingURL=/src.fc45d0fd.js.map