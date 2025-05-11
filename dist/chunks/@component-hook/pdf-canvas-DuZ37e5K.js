import { d as Cy, o as Zm, r as Ay, c as Cp, n as ky, a as Ty, w as Id, b as My, e as Ey, f as Dy, g as Fd, h as Oy, i as Py } from "../vendor-2z0F1iGp.js";
let dA, eA, nA;
let __tla = (async () => {
  var Ly = Object.defineProperty, tv = (n) => {
    throw TypeError(n);
  }, Ry = (n, t, e) => t in n ? Ly(n, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: e
  }) : n[t] = e, Y = (n, t, e) => Ry(n, typeof t != "symbol" ? t + "" : t, e), Hf = (n, t, e) => t.has(n) || tv("Cannot " + e), l = (n, t, e) => (Hf(n, t, "read from private field"), e ? e.call(n) : t.get(n)), y = (n, t, e) => t.has(n) ? tv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), m = (n, t, e, s) => (Hf(n, t, "write to private field"), t.set(n, e), e), w = (n, t, e) => (Hf(n, t, "access private method"), e), Be = (n, t, e, s) => ({
    set _(i) {
      m(n, t, i);
    },
    get _() {
      return l(n, t, s);
    }
  });
  const Iy = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20'%20cy='20'%20r='10.75'%20stroke='currentColor'%20stroke-width='2.5'/%3e%3cpath%20d='M16%2024L23.7782%2016.2218'%20stroke='currentColor'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M24%2024L16.2218%2016.2218'%20stroke='currentColor'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", Fy = {
    top: 100,
    left: 50,
    scaleX: 0.5,
    scaleY: 0.5,
    borderColor: "black",
    cornerStrokeColor: "black",
    cornerSize: 6,
    selectionBackgroundColor: "rgba(245, 245, 245, 0.8)"
  }, jy = {
    top: 100,
    left: 50,
    fontFamily: "helvetica",
    borderColor: "black",
    cornerStrokeColor: "black",
    scaleX: 0.7,
    scaleY: 0.7,
    cornerSize: 6,
    selectionBackgroundColor: "rgba(245, 245, 245, 0.8)"
  }, Ny = {
    borderColor: "black",
    cornerStrokeColor: "black",
    cornerSize: 8,
    selectionBackgroundColor: "rgba(245, 245, 245, 0.8)"
  }, Wy = {
    stroke: "#000",
    hoverStroke: "#B7EC5D",
    src: Iy
  }, By = [
    "borderColor",
    "cornerStrokeColor",
    "cornerSize",
    "_cornerSize",
    "selectionBackgroundColor"
  ];
  function k(n, t, e) {
    return (t = function(s) {
      var i = function(r, a) {
        if (typeof r != "object" || !r) return r;
        var o = r[Symbol.toPrimitive];
        if (o !== void 0) {
          var h = o.call(r, a);
          if (typeof h != "object") return h;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (a === "string" ? String : Number)(r);
      }(s, "string");
      return typeof i == "symbol" ? i : i + "";
    }(t)) in n ? Object.defineProperty(n, t, {
      value: e,
      enumerable: true,
      configurable: true,
      writable: true
    }) : n[t] = e, n;
  }
  function Ap(n, t) {
    var e = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(n);
      t && (s = s.filter(function(i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })), e.push.apply(e, s);
    }
    return e;
  }
  function A(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Ap(Object(e), true).forEach(function(s) {
        k(n, s, e[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Ap(Object(e)).forEach(function(s) {
        Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(e, s));
      });
    }
    return n;
  }
  function yt(n, t) {
    if (n == null) return {};
    var e, s, i = function(a, o) {
      if (a == null) return {};
      var h = {};
      for (var c in a) if ({}.hasOwnProperty.call(a, c)) {
        if (o.indexOf(c) >= 0) continue;
        h[c] = a[c];
      }
      return h;
    }(n, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(n);
      for (s = 0; s < r.length; s++) e = r[s], t.indexOf(e) >= 0 || {}.propertyIsEnumerable.call(n, e) && (i[e] = n[e]);
    }
    return i;
  }
  function Or(n, t) {
    return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }
  class kp {
    constructor() {
      k(this, "browserShadowBlurConstant", 1), k(this, "DPI", 96), k(this, "devicePixelRatio", typeof window < "u" ? window.devicePixelRatio : 1), k(this, "perfLimitSizeTotal", 2097152), k(this, "maxCacheSideLimit", 4096), k(this, "minCacheSideLimit", 256), k(this, "disableStyleCopyPaste", false), k(this, "enableGLFiltering", true), k(this, "textureSize", 4096), k(this, "forceGLPutImageData", false), k(this, "cachesBoundsOfCurve", false), k(this, "fontPaths", {}), k(this, "NUM_FRACTION_DIGITS", 4);
    }
  }
  const rt = new class extends kp {
    constructor(n) {
      super(), this.configure(n);
    }
    configure() {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Object.assign(this, n);
    }
    addFonts() {
      let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.fontPaths = A(A({}, this.fontPaths), n);
    }
    removeFonts() {
      (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach((n) => {
        delete this.fontPaths[n];
      });
    }
    clearFonts() {
      this.fontPaths = {};
    }
    restoreDefaults(n) {
      const t = new kp(), e = (n == null ? void 0 : n.reduce((s, i) => (s[i] = t[i], s), {})) || t;
      this.configure(e);
    }
  }(), Ni = function(n) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s];
    return console[n]("fabric", ...e);
  };
  class ri extends Error {
    constructor(t, e) {
      super("fabric: ".concat(t), e);
    }
  }
  class zf extends ri {
    constructor(t) {
      super("".concat(t, " 'options.signal' is in 'aborted' state"));
    }
  }
  class Hy {
  }
  class zy extends Hy {
    testPrecision(t, e) {
      const s = "precision ".concat(e, ` float;
void main(){}`), i = t.createShader(t.FRAGMENT_SHADER);
      return !!i && (t.shaderSource(i, s), t.compileShader(i), !!t.getShaderParameter(i, t.COMPILE_STATUS));
    }
    queryWebGL(t) {
      const e = t.getContext("webgl");
      e && (this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.GLPrecision = [
        "highp",
        "mediump",
        "lowp"
      ].find((s) => this.testPrecision(e, s)), e.getExtension("WEBGL_lose_context").loseContext(), Ni("log", "WebGL: max texture size ".concat(this.maxTextureSize)));
    }
    isSupported(t) {
      return !!this.maxTextureSize && this.maxTextureSize >= t;
    }
  }
  const Vy = {};
  let Tp;
  const ai = () => Tp || (Tp = {
    document,
    window,
    isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
    WebGLProbe: new zy(),
    dispose() {
    },
    copyPasteData: Vy
  }), ao = () => ai().document, gd = () => ai().window, ev = () => {
    var n;
    return Math.max((n = rt.devicePixelRatio) !== null && n !== void 0 ? n : gd().devicePixelRatio, 1);
  }, yh = new class {
    constructor() {
      k(this, "charWidthsCache", {}), k(this, "boundsOfCurveCache", {});
    }
    getFontCache(n) {
      let { fontFamily: t, fontStyle: e, fontWeight: s } = n;
      t = t.toLowerCase(), this.charWidthsCache[t] || (this.charWidthsCache[t] = {});
      const i = this.charWidthsCache[t], r = "".concat(e.toLowerCase(), "_").concat((s + "").toLowerCase());
      return i[r] || (i[r] = {}), i[r];
    }
    clearFontCache(n) {
      (n = (n || "").toLowerCase()) ? this.charWidthsCache[n] && delete this.charWidthsCache[n] : this.charWidthsCache = {};
    }
    limitDimsByArea(n) {
      const { perfLimitSizeTotal: t } = rt, e = Math.sqrt(t * n);
      return [
        Math.floor(e),
        Math.floor(t / e)
      ];
    }
  }(), ug = "6.6.4";
  function Mn() {
  }
  const kr = Math.PI / 2, Wi = 2 * Math.PI, Vf = Math.PI / 180, Te = Object.freeze([
    1,
    0,
    0,
    1,
    0,
    0
  ]), Gf = 16, Vi = 0.4477152502, q = "center", at = "left", He = "top", dg = "bottom", Tt = "right", Ae = "none", Xf = /\r?\n/, sv = "moving", fd = "scaling", iv = "rotating", Uf = "rotate", rv = "skewing", el = "resizing", Gy = "modifyPoly", Xy = "modifyPath", uu = "changed", pd = "scale", Me = "scaleX", Ke = "scaleY", oo = "skewX", ho = "skewY", jt = "fill", ke = "stroke", du = "modified", Wn = "json", jd = "svg", B = new class {
    constructor() {
      this[Wn] = /* @__PURE__ */ new Map(), this[jd] = /* @__PURE__ */ new Map();
    }
    has(n) {
      return this[Wn].has(n);
    }
    getClass(n) {
      const t = this[Wn].get(n);
      if (!t) throw new ri("No class registered for ".concat(n));
      return t;
    }
    setClass(n, t) {
      t ? this[Wn].set(t, n) : (this[Wn].set(n.type, n), this[Wn].set(n.type.toLowerCase(), n));
    }
    getSVGClass(n) {
      return this[jd].get(n);
    }
    setSVGClass(n, t) {
      this[jd].set(t ?? n.type.toLowerCase(), n);
    }
  }(), gu = new class extends Array {
    remove(n) {
      const t = this.indexOf(n);
      t > -1 && this.splice(t, 1);
    }
    cancelAll() {
      const n = this.splice(0);
      return n.forEach((t) => t.abort()), n;
    }
    cancelByCanvas(n) {
      if (!n) return [];
      const t = this.filter((e) => {
        var s;
        return e.target === n || typeof e.target == "object" && ((s = e.target) === null || s === void 0 ? void 0 : s.canvas) === n;
      });
      return t.forEach((e) => e.abort()), t;
    }
    cancelByTarget(n) {
      if (!n) return [];
      const t = this.filter((e) => e.target === n);
      return t.forEach((e) => e.abort()), t;
    }
  }();
  class Uy {
    constructor() {
      k(this, "__eventListeners", {});
    }
    on(t, e) {
      if (this.__eventListeners || (this.__eventListeners = {}), typeof t == "object") return Object.entries(t).forEach((s) => {
        let [i, r] = s;
        this.on(i, r);
      }), () => this.off(t);
      if (e) {
        const s = t;
        return this.__eventListeners[s] || (this.__eventListeners[s] = []), this.__eventListeners[s].push(e), () => this.off(s, e);
      }
      return () => false;
    }
    once(t, e) {
      if (typeof t == "object") {
        const s = [];
        return Object.entries(t).forEach((i) => {
          let [r, a] = i;
          s.push(this.once(r, a));
        }), () => s.forEach((i) => i());
      }
      if (e) {
        const s = this.on(t, function() {
          for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
          e.call(this, ...r), s();
        });
        return s;
      }
      return () => false;
    }
    _removeEventListener(t, e) {
      if (this.__eventListeners[t]) if (e) {
        const s = this.__eventListeners[t], i = s.indexOf(e);
        i > -1 && s.splice(i, 1);
      } else this.__eventListeners[t] = [];
    }
    off(t, e) {
      if (this.__eventListeners) if (t === void 0) for (const s in this.__eventListeners) this._removeEventListener(s);
      else typeof t == "object" ? Object.entries(t).forEach((s) => {
        let [i, r] = s;
        this._removeEventListener(i, r);
      }) : this._removeEventListener(t, e);
    }
    fire(t, e) {
      var s;
      if (!this.__eventListeners) return;
      const i = (s = this.__eventListeners[t]) === null || s === void 0 ? void 0 : s.concat();
      if (i) for (let r = 0; r < i.length; r++) i[r].call(this, e || {});
    }
  }
  const nn = (n, t) => {
    const e = n.indexOf(t);
    return e !== -1 && n.splice(e, 1), n;
  }, Ps = (n) => {
    if (n === 0) return 1;
    switch (Math.abs(n) / kr) {
      case 1:
      case 3:
        return 0;
      case 2:
        return -1;
    }
    return Math.cos(n);
  }, Ls = (n) => {
    if (n === 0) return 0;
    const t = n / kr, e = Math.sign(n);
    switch (t) {
      case 1:
        return e;
      case 2:
        return 0;
      case 3:
        return -e;
    }
    return Math.sin(n);
  };
  class M {
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      typeof t == "object" ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = e);
    }
    add(t) {
      return new M(this.x + t.x, this.y + t.y);
    }
    addEquals(t) {
      return this.x += t.x, this.y += t.y, this;
    }
    scalarAdd(t) {
      return new M(this.x + t, this.y + t);
    }
    scalarAddEquals(t) {
      return this.x += t, this.y += t, this;
    }
    subtract(t) {
      return new M(this.x - t.x, this.y - t.y);
    }
    subtractEquals(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }
    scalarSubtract(t) {
      return new M(this.x - t, this.y - t);
    }
    scalarSubtractEquals(t) {
      return this.x -= t, this.y -= t, this;
    }
    multiply(t) {
      return new M(this.x * t.x, this.y * t.y);
    }
    scalarMultiply(t) {
      return new M(this.x * t, this.y * t);
    }
    scalarMultiplyEquals(t) {
      return this.x *= t, this.y *= t, this;
    }
    divide(t) {
      return new M(this.x / t.x, this.y / t.y);
    }
    scalarDivide(t) {
      return new M(this.x / t, this.y / t);
    }
    scalarDivideEquals(t) {
      return this.x /= t, this.y /= t, this;
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    lt(t) {
      return this.x < t.x && this.y < t.y;
    }
    lte(t) {
      return this.x <= t.x && this.y <= t.y;
    }
    gt(t) {
      return this.x > t.x && this.y > t.y;
    }
    gte(t) {
      return this.x >= t.x && this.y >= t.y;
    }
    lerp(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5;
      return e = Math.max(Math.min(1, e), 0), new M(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e);
    }
    distanceFrom(t) {
      const e = this.x - t.x, s = this.y - t.y;
      return Math.sqrt(e * e + s * s);
    }
    midPointFrom(t) {
      return this.lerp(t);
    }
    min(t) {
      return new M(Math.min(this.x, t.x), Math.min(this.y, t.y));
    }
    max(t) {
      return new M(Math.max(this.x, t.x), Math.max(this.y, t.y));
    }
    toString() {
      return "".concat(this.x, ",").concat(this.y);
    }
    setXY(t, e) {
      return this.x = t, this.y = e, this;
    }
    setX(t) {
      return this.x = t, this;
    }
    setY(t) {
      return this.y = t, this;
    }
    setFromPoint(t) {
      return this.x = t.x, this.y = t.y, this;
    }
    swap(t) {
      const e = this.x, s = this.y;
      this.x = t.x, this.y = t.y, t.x = e, t.y = s;
    }
    clone() {
      return new M(this.x, this.y);
    }
    rotate(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yf;
      const s = Ls(t), i = Ps(t), r = this.subtract(e);
      return new M(r.x * i - r.y * s, r.x * s + r.y * i).add(e);
    }
    transform(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return new M(t[0] * this.x + t[2] * this.y + (e ? 0 : t[4]), t[1] * this.x + t[3] * this.y + (e ? 0 : t[5]));
    }
  }
  const Yf = new M(0, 0), $l = (n) => !!n && Array.isArray(n._objects);
  function nv(n) {
    class t extends n {
      constructor() {
        super(...arguments), k(this, "_objects", []);
      }
      _onObjectAdded(s) {
      }
      _onObjectRemoved(s) {
      }
      _onStackOrderChanged(s) {
      }
      add() {
        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
        const a = this._objects.push(...i);
        return i.forEach((o) => this._onObjectAdded(o)), a;
      }
      insertAt(s) {
        for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
        return this._objects.splice(s, 0, ...r), r.forEach((o) => this._onObjectAdded(o)), this._objects.length;
      }
      remove() {
        const s = this._objects, i = [];
        for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        return a.forEach((h) => {
          const c = s.indexOf(h);
          c !== -1 && (s.splice(c, 1), i.push(h), this._onObjectRemoved(h));
        }), i;
      }
      forEachObject(s) {
        this.getObjects().forEach((i, r, a) => s(i, r, a));
      }
      getObjects() {
        for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
        return i.length === 0 ? [
          ...this._objects
        ] : this._objects.filter((a) => a.isType(...i));
      }
      item(s) {
        return this._objects[s];
      }
      isEmpty() {
        return this._objects.length === 0;
      }
      size() {
        return this._objects.length;
      }
      contains(s, i) {
        return !!this._objects.includes(s) || !!i && this._objects.some((r) => r instanceof t && r.contains(s, true));
      }
      complexity() {
        return this._objects.reduce((s, i) => s += i.complexity ? i.complexity() : 0, 0);
      }
      sendObjectToBack(s) {
        return !(!s || s === this._objects[0]) && (nn(this._objects, s), this._objects.unshift(s), this._onStackOrderChanged(s), true);
      }
      bringObjectToFront(s) {
        return !(!s || s === this._objects[this._objects.length - 1]) && (nn(this._objects, s), this._objects.push(s), this._onStackOrderChanged(s), true);
      }
      sendObjectBackwards(s, i) {
        if (!s) return false;
        const r = this._objects.indexOf(s);
        if (r !== 0) {
          const a = this.findNewLowerIndex(s, r, i);
          return nn(this._objects, s), this._objects.splice(a, 0, s), this._onStackOrderChanged(s), true;
        }
        return false;
      }
      bringObjectForward(s, i) {
        if (!s) return false;
        const r = this._objects.indexOf(s);
        if (r !== this._objects.length - 1) {
          const a = this.findNewUpperIndex(s, r, i);
          return nn(this._objects, s), this._objects.splice(a, 0, s), this._onStackOrderChanged(s), true;
        }
        return false;
      }
      moveObjectTo(s, i) {
        return s !== this._objects[i] && (nn(this._objects, s), this._objects.splice(i, 0, s), this._onStackOrderChanged(s), true);
      }
      findNewLowerIndex(s, i, r) {
        let a;
        if (r) {
          a = i;
          for (let o = i - 1; o >= 0; --o) if (s.isOverlapping(this._objects[o])) {
            a = o;
            break;
          }
        } else a = i - 1;
        return a;
      }
      findNewUpperIndex(s, i, r) {
        let a;
        if (r) {
          a = i;
          for (let o = i + 1; o < this._objects.length; ++o) if (s.isOverlapping(this._objects[o])) {
            a = o;
            break;
          }
        } else a = i + 1;
        return a;
      }
      collectObjects(s) {
        let { left: i, top: r, width: a, height: o } = s, { includeIntersecting: h = true } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const c = [], u = new M(i, r), d = u.add(new M(a, o));
        for (let g = this._objects.length - 1; g >= 0; g--) {
          const f = this._objects[g];
          f.selectable && f.visible && (h && f.intersectsWithRect(u, d) || f.isContainedWithinRect(u, d) || h && f.containsPoint(u) || h && f.containsPoint(d)) && c.push(f);
        }
        return c;
      }
    }
    return t;
  }
  class av extends Uy {
    _setOptions() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      for (const e in t) this.set(e, t[e]);
    }
    _setObject(t) {
      for (const e in t) this._set(e, t[e]);
    }
    set(t, e) {
      return typeof t == "object" ? this._setObject(t) : this._set(t, e), this;
    }
    _set(t, e) {
      this[t] = e;
    }
    toggle(t) {
      const e = this.get(t);
      return typeof e == "boolean" && this.set(t, !e), this;
    }
    get(t) {
      return this[t];
    }
  }
  function wh(n) {
    return gd().requestAnimationFrame(n);
  }
  function ov(n) {
    return gd().cancelAnimationFrame(n);
  }
  let Yy = 0;
  const Tr = () => Yy++, ms = () => {
    const n = ao().createElement("canvas");
    if (!n || n.getContext === void 0) throw new ri("Failed to create `canvas` element");
    return n;
  }, hv = () => ao().createElement("img"), Qe = (n) => {
    const t = ms();
    return t.width = n.width, t.height = n.height, t;
  }, $f = (n, t, e) => n.toDataURL("image/".concat(t), e), qf = (n, t, e) => new Promise((s, i) => {
    n.toBlob(s, "image/".concat(t), e);
  }), Ct = (n) => n * Vf, oi = (n) => n / Vf, lv = (n) => n.every((t, e) => t === Te[e]), de = (n, t, e) => new M(n).transform(t, e), We = (n) => {
    const t = 1 / (n[0] * n[3] - n[1] * n[2]), e = [
      t * n[3],
      -t * n[1],
      -t * n[2],
      t * n[0],
      0,
      0
    ], { x: s, y: i } = new M(n[4], n[5]).transform(e, true);
    return e[4] = -s, e[5] = -i, e;
  }, Et = (n, t, e) => [
    n[0] * t[0] + n[2] * t[1],
    n[1] * t[0] + n[3] * t[1],
    n[0] * t[2] + n[2] * t[3],
    n[1] * t[2] + n[3] * t[3],
    e ? 0 : n[0] * t[4] + n[2] * t[5] + n[4],
    e ? 0 : n[1] * t[4] + n[3] * t[5] + n[5]
  ], md = (n, t) => n.reduceRight((e, s) => s && e ? Et(s, e, t) : s || e, void 0) || Te.concat(), cv = (n) => {
    let [t, e] = n;
    return Math.atan2(e, t);
  }, Dn = (n) => {
    const t = cv(n), e = Math.pow(n[0], 2) + Math.pow(n[1], 2), s = Math.sqrt(e), i = (n[0] * n[3] - n[2] * n[1]) / s, r = Math.atan2(n[0] * n[2] + n[1] * n[3], e);
    return {
      angle: oi(t),
      scaleX: s,
      scaleY: i,
      skewX: oi(r),
      skewY: 0,
      translateX: n[4] || 0,
      translateY: n[5] || 0
    };
  }, lo = function(n) {
    return [
      1,
      0,
      0,
      1,
      n,
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
    ];
  };
  function Rn() {
    let { angle: n = 0 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { x: t = 0, y: e = 0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = Ct(n), i = Ps(s), r = Ls(s);
    return [
      i,
      r,
      -r,
      i,
      t ? t - (i * t - r * e) : 0,
      e ? e - (r * t + i * e) : 0
    ];
  }
  const vd = function(n) {
    return [
      n,
      0,
      0,
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n,
      0,
      0
    ];
  }, uv = (n) => Math.tan(Ct(n)), Kf = (n) => [
    1,
    0,
    uv(n),
    1,
    0,
    0
  ], Qf = (n) => [
    1,
    uv(n),
    0,
    1,
    0,
    0
  ], hl = (n) => {
    let { scaleX: t = 1, scaleY: e = 1, flipX: s = false, flipY: i = false, skewX: r = 0, skewY: a = 0 } = n, o = vd(s ? -t : t, i ? -e : e);
    return r && (o = Et(o, Kf(r), true)), a && (o = Et(o, Qf(a), true)), o;
  }, dv = (n) => {
    const { translateX: t = 0, translateY: e = 0, angle: s = 0 } = n;
    let i = lo(t, e);
    s && (i = Et(i, Rn({
      angle: s
    })));
    const r = hl(n);
    return lv(r) || (i = Et(i, r)), i;
  }, _h = function(n) {
    let { signal: t, crossOrigin: e = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(s, i) {
      if (t && t.aborted) return i(new zf("loadImage"));
      const r = hv();
      let a;
      t && (a = function(h) {
        r.src = "", i(h);
      }, t.addEventListener("abort", a, {
        once: true
      }));
      const o = function() {
        r.onload = r.onerror = null, a && (t == null ? void 0 : t.removeEventListener("abort", a)), s(r);
      };
      n ? (r.onload = o, r.onerror = function() {
        a && (t == null ? void 0 : t.removeEventListener("abort", a)), i(new ri("Error loading ".concat(r.src)));
      }, e && (r.crossOrigin = e), r.src = n) : o();
    });
  }, so = function(n) {
    let { signal: t, reviver: e = Mn } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise((s, i) => {
      const r = [];
      t && t.addEventListener("abort", i, {
        once: true
      }), Promise.all(n.map((a) => B.getClass(a.type).fromObject(a, {
        signal: t
      }).then((o) => (e(a, o), r.push(o), o)))).then(s).catch((a) => {
        r.forEach((o) => {
          o.dispose && o.dispose();
        }), i(a);
      }).finally(() => {
        t && t.removeEventListener("abort", i);
      });
    });
  }, ll = function(n) {
    let { signal: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise((e, s) => {
      const i = [];
      t && t.addEventListener("abort", s, {
        once: true
      });
      const r = Object.values(n).map((o) => o && o.type && B.has(o.type) ? so([
        o
      ], {
        signal: t
      }).then((h) => {
        let [c] = h;
        return i.push(c), c;
      }) : o), a = Object.keys(n);
      Promise.all(r).then((o) => o.reduce((h, c, u) => (h[a[u]] = c, h), {})).then(e).catch((o) => {
        i.forEach((h) => {
          h.dispose && h.dispose();
        }), s(o);
      }).finally(() => {
        t && t.removeEventListener("abort", s);
      });
    });
  }, In = function(n) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []).reduce((t, e) => (e in n && (t[e] = n[e]), t), {});
  }, Jf = (n, t) => Object.keys(n).reduce((e, s) => (t(n[s], s, n) && (e[s] = n[s]), e), {}), ft = (n, t) => parseFloat(Number(n).toFixed(t)), io = (n) => "matrix(" + n.map((t) => ft(t, rt.NUM_FRACTION_DIGITS)).join(" ") + ")", fs = (n) => !!n && n.toLive !== void 0, Mp = (n) => !!n && typeof n.toObject == "function", Ep = (n) => !!n && n.offsetX !== void 0 && "source" in n, an = (n) => !!n && "multiSelectionStacking" in n;
  function gv(n) {
    const t = n && Es(n);
    let e = 0, s = 0;
    if (!n || !t) return {
      left: e,
      top: s
    };
    let i = n;
    const r = t.documentElement, a = t.body || {
      scrollLeft: 0,
      scrollTop: 0
    };
    for (; i && (i.parentNode || i.host) && (i = i.parentNode || i.host, i === t ? (e = a.scrollLeft || r.scrollLeft || 0, s = a.scrollTop || r.scrollTop || 0) : (e += i.scrollLeft || 0, s += i.scrollTop || 0), i.nodeType !== 1 || i.style.position !== "fixed"); ) ;
    return {
      left: e,
      top: s
    };
  }
  const Es = (n) => n.ownerDocument || null, fv = (n) => {
    var t;
    return ((t = n.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) || null;
  }, pv = function(n, t, e) {
    let { width: s, height: i } = e, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    n.width = s, n.height = i, r > 1 && (n.setAttribute("width", (s * r).toString()), n.setAttribute("height", (i * r).toString()), t.scale(r, r));
  }, gg = (n, t) => {
    let { width: e, height: s } = t;
    e && (n.style.width = typeof e == "number" ? "".concat(e, "px") : e), s && (n.style.height = typeof s == "number" ? "".concat(s, "px") : s);
  };
  function Dp(n) {
    return n.onselectstart !== void 0 && (n.onselectstart = () => false), n.style.userSelect = Ae, n;
  }
  class mv {
    constructor(t) {
      k(this, "_originalCanvasStyle", void 0), k(this, "lower", void 0);
      const e = this.createLowerCanvas(t);
      this.lower = {
        el: e,
        ctx: e.getContext("2d")
      };
    }
    createLowerCanvas(t) {
      const e = (s = t) && s.getContext !== void 0 ? t : t && ao().getElementById(t) || ms();
      var s;
      if (e.hasAttribute("data-fabric")) throw new ri("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
      return this._originalCanvasStyle = e.style.cssText, e.setAttribute("data-fabric", "main"), e.classList.add("lower-canvas"), e;
    }
    cleanupDOM(t) {
      let { width: e, height: s } = t;
      const { el: i } = this.lower;
      i.classList.remove("lower-canvas"), i.removeAttribute("data-fabric"), i.setAttribute("width", "".concat(e)), i.setAttribute("height", "".concat(s)), i.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
    }
    setDimensions(t, e) {
      const { el: s, ctx: i } = this.lower;
      pv(s, i, t, e);
    }
    setCSSDimensions(t) {
      gg(this.lower.el, t);
    }
    calcOffset() {
      return function(t) {
        var e;
        const s = t && Es(t), i = {
          left: 0,
          top: 0
        };
        if (!s) return i;
        const r = ((e = fv(t)) === null || e === void 0 ? void 0 : e.getComputedStyle(t, null)) || {};
        i.left += parseInt(r.borderLeftWidth, 10) || 0, i.top += parseInt(r.borderTopWidth, 10) || 0, i.left += parseInt(r.paddingLeft, 10) || 0, i.top += parseInt(r.paddingTop, 10) || 0;
        let a = {
          left: 0,
          top: 0
        };
        const o = s.documentElement;
        t.getBoundingClientRect !== void 0 && (a = t.getBoundingClientRect());
        const h = gv(t);
        return {
          left: a.left + h.left - (o.clientLeft || 0) + i.left,
          top: a.top + h.top - (o.clientTop || 0) + i.top
        };
      }(this.lower.el);
    }
    dispose() {
      ai().dispose(this.lower.el), delete this.lower;
    }
  }
  const $y = {
    backgroundVpt: true,
    backgroundColor: "",
    overlayVpt: true,
    overlayColor: "",
    includeDefaultValues: true,
    svgViewportTransformation: true,
    renderOnAddRemove: true,
    skipOffscreen: true,
    enableRetinaScaling: true,
    imageSmoothingEnabled: true,
    controlsAboveOverlay: false,
    allowTouchScrolling: false,
    viewportTransform: [
      ...Te
    ]
  };
  class cl extends nv(av) {
    get lowerCanvasEl() {
      var t;
      return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.el;
    }
    get contextContainer() {
      var t;
      return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.ctx;
    }
    static getDefaults() {
      return cl.ownDefaults;
    }
    constructor(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(), Object.assign(this, this.constructor.getDefaults()), this.set(e), this.initElements(t), this._setDimensionsImpl({
        width: this.width || this.elements.lower.el.width || 0,
        height: this.height || this.elements.lower.el.height || 0
      }), this.skipControlsDrawing = false, this.viewportTransform = [
        ...this.viewportTransform
      ], this.calcViewportBoundaries();
    }
    initElements(t) {
      this.elements = new mv(t);
    }
    add() {
      const t = super.add(...arguments);
      return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t;
    }
    insertAt(t) {
      for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
      const r = super.insertAt(t, ...s);
      return s.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r;
    }
    remove() {
      const t = super.remove(...arguments);
      return t.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t;
    }
    _onObjectAdded(t) {
      t.canvas && t.canvas !== this && (Ni("warn", `Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`), t.canvas.remove(t)), t._set("canvas", this), t.setCoords(), this.fire("object:added", {
        target: t
      }), t.fire("added", {
        target: this
      });
    }
    _onObjectRemoved(t) {
      t._set("canvas", void 0), this.fire("object:removed", {
        target: t
      }), t.fire("removed", {
        target: this
      });
    }
    _onStackOrderChanged() {
      this.renderOnAddRemove && this.requestRenderAll();
    }
    getRetinaScaling() {
      return this.enableRetinaScaling ? ev() : 1;
    }
    calcOffset() {
      return this._offset = this.elements.calcOffset();
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    setWidth(t, e) {
      return this.setDimensions({
        width: t
      }, e);
    }
    setHeight(t, e) {
      return this.setDimensions({
        height: t
      }, e);
    }
    _setDimensionsImpl(t) {
      let { cssOnly: e = false, backstoreOnly: s = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!e) {
        const i = A({
          width: this.width,
          height: this.height
        }, t);
        this.elements.setDimensions(i, this.getRetinaScaling()), this.hasLostContext = true, this.width = i.width, this.height = i.height;
      }
      s || this.elements.setCSSDimensions(t), this.calcOffset();
    }
    setDimensions(t, e) {
      this._setDimensionsImpl(t, e), e && e.cssOnly || this.requestRenderAll();
    }
    getZoom() {
      return this.viewportTransform[0];
    }
    setViewportTransform(t) {
      this.viewportTransform = t, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
    }
    zoomToPoint(t, e) {
      const s = t, i = [
        ...this.viewportTransform
      ], r = de(t, We(i));
      i[0] = e, i[3] = e;
      const a = de(r, i);
      i[4] += s.x - a.x, i[5] += s.y - a.y, this.setViewportTransform(i);
    }
    setZoom(t) {
      this.zoomToPoint(new M(0, 0), t);
    }
    absolutePan(t) {
      const e = [
        ...this.viewportTransform
      ];
      return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e);
    }
    relativePan(t) {
      return this.absolutePan(new M(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]));
    }
    getElement() {
      return this.elements.lower.el;
    }
    clearContext(t) {
      t.clearRect(0, 0, this.width, this.height);
    }
    getContext() {
      return this.elements.lower.ctx;
    }
    clear() {
      this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
    }
    renderAll() {
      this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
    }
    renderAndReset() {
      this.nextRenderHandle = 0, this.renderAll();
    }
    requestRenderAll() {
      this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = wh(() => this.renderAndReset()));
    }
    calcViewportBoundaries() {
      const t = this.width, e = this.height, s = We(this.viewportTransform), i = de({
        x: 0,
        y: 0
      }, s), r = de({
        x: t,
        y: e
      }, s), a = i.min(r), o = i.max(r);
      return this.vptCoords = {
        tl: a,
        tr: new M(o.x, a.y),
        bl: new M(a.x, o.y),
        br: o
      };
    }
    cancelRequestedRender() {
      this.nextRenderHandle && (ov(this.nextRenderHandle), this.nextRenderHandle = 0);
    }
    drawControls(t) {
    }
    renderCanvas(t, e) {
      if (this.destroyed) return;
      const s = this.viewportTransform, i = this.clipPath;
      this.calcViewportBoundaries(), this.clearContext(t), t.imageSmoothingEnabled = this.imageSmoothingEnabled, t.patternQuality = "best", this.fire("before:render", {
        ctx: t
      }), this._renderBackground(t), t.save(), t.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this._renderObjects(t, e), t.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t), i && (i._set("canvas", this), i.shouldCache(), i._transformDone = true, i.renderCache({
        forClipping: true
      }), this.drawClipPathOnCanvas(t, i)), this._renderOverlay(t), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t), this.fire("after:render", {
        ctx: t
      }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
    }
    drawClipPathOnCanvas(t, e) {
      const s = this.viewportTransform;
      t.save(), t.transform(...s), t.globalCompositeOperation = "destination-in", e.transform(t), t.scale(1 / e.zoomX, 1 / e.zoomY), t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY), t.restore();
    }
    _renderObjects(t, e) {
      for (let s = 0, i = e.length; s < i; ++s) e[s] && e[s].render(t);
    }
    _renderBackgroundOrOverlay(t, e) {
      const s = this["".concat(e, "Color")], i = this["".concat(e, "Image")], r = this.viewportTransform, a = this["".concat(e, "Vpt")];
      if (!s && !i) return;
      const o = fs(s);
      if (s) {
        if (t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(this.width, 0), t.lineTo(this.width, this.height), t.lineTo(0, this.height), t.closePath(), t.fillStyle = o ? s.toLive(t) : s, a && t.transform(...r), o) {
          t.transform(1, 0, 0, 1, s.offsetX || 0, s.offsetY || 0);
          const h = s.gradientTransform || s.patternTransform;
          h && t.transform(...h);
        }
        t.fill(), t.restore();
      }
      if (i) {
        t.save();
        const { skipOffscreen: h } = this;
        this.skipOffscreen = a, a && t.transform(...r), i.render(t), this.skipOffscreen = h, t.restore();
      }
    }
    _renderBackground(t) {
      this._renderBackgroundOrOverlay(t, "background");
    }
    _renderOverlay(t) {
      this._renderBackgroundOrOverlay(t, "overlay");
    }
    getCenter() {
      return {
        top: this.height / 2,
        left: this.width / 2
      };
    }
    getCenterPoint() {
      return new M(this.width / 2, this.height / 2);
    }
    centerObjectH(t) {
      return this._centerObject(t, new M(this.getCenterPoint().x, t.getCenterPoint().y));
    }
    centerObjectV(t) {
      return this._centerObject(t, new M(t.getCenterPoint().x, this.getCenterPoint().y));
    }
    centerObject(t) {
      return this._centerObject(t, this.getCenterPoint());
    }
    viewportCenterObject(t) {
      return this._centerObject(t, this.getVpCenter());
    }
    viewportCenterObjectH(t) {
      return this._centerObject(t, new M(this.getVpCenter().x, t.getCenterPoint().y));
    }
    viewportCenterObjectV(t) {
      return this._centerObject(t, new M(t.getCenterPoint().x, this.getVpCenter().y));
    }
    getVpCenter() {
      return de(this.getCenterPoint(), We(this.viewportTransform));
    }
    _centerObject(t, e) {
      t.setXY(e, q, q), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
    }
    toDatalessJSON(t) {
      return this.toDatalessObject(t);
    }
    toObject(t) {
      return this._toObjectMethod("toObject", t);
    }
    toJSON() {
      return this.toObject();
    }
    toDatalessObject(t) {
      return this._toObjectMethod("toDatalessObject", t);
    }
    _toObjectMethod(t, e) {
      const s = this.clipPath, i = s && !s.excludeFromExport ? this._toObject(s, t, e) : null;
      return A(A(A({
        version: ug
      }, In(this, e)), {}, {
        objects: this._objects.filter((r) => !r.excludeFromExport).map((r) => this._toObject(r, t, e))
      }, this.__serializeBgOverlay(t, e)), i ? {
        clipPath: i
      } : null);
    }
    _toObject(t, e, s) {
      let i;
      this.includeDefaultValues || (i = t.includeDefaultValues, t.includeDefaultValues = false);
      const r = t[e](s);
      return this.includeDefaultValues || (t.includeDefaultValues = !!i), r;
    }
    __serializeBgOverlay(t, e) {
      const s = {}, i = this.backgroundImage, r = this.overlayImage, a = this.backgroundColor, o = this.overlayColor;
      return fs(a) ? a.excludeFromExport || (s.background = a.toObject(e)) : a && (s.background = a), fs(o) ? o.excludeFromExport || (s.overlay = o.toObject(e)) : o && (s.overlay = o), i && !i.excludeFromExport && (s.backgroundImage = this._toObject(i, t, e)), r && !r.excludeFromExport && (s.overlayImage = this._toObject(r, t, e)), s;
    }
    toSVG() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
      t.reviver = e;
      const s = [];
      return this._setSVGPreamble(s, t), this._setSVGHeader(s, t), this.clipPath && s.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, `)" >
`)), this._setSVGBgOverlayColor(s, "background"), this._setSVGBgOverlayImage(s, "backgroundImage", e), this._setSVGObjects(s, e), this.clipPath && s.push(`</g>
`), this._setSVGBgOverlayColor(s, "overlay"), this._setSVGBgOverlayImage(s, "overlayImage", e), s.push("</svg>"), s.join("");
    }
    _setSVGPreamble(t, e) {
      e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
    }
    _setSVGHeader(t, e) {
      const s = e.width || "".concat(this.width), i = e.height || "".concat(this.height), r = rt.NUM_FRACTION_DIGITS, a = e.viewBox;
      let o;
      if (a) o = 'viewBox="'.concat(a.x, " ").concat(a.y, " ").concat(a.width, " ").concat(a.height, '" ');
      else if (this.svgViewportTransformation) {
        const h = this.viewportTransform;
        o = 'viewBox="'.concat(ft(-h[4] / h[0], r), " ").concat(ft(-h[5] / h[3], r), " ").concat(ft(this.width / h[0], r), " ").concat(ft(this.height / h[3], r), '" ');
      } else o = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
      t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', s, '" ', 'height="', i, '" ', o, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", ug, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), `</defs>
`);
    }
    createSVGClipPathMarkup(t) {
      const e = this.clipPath;
      return e ? (e.clipPathId = "CLIPPATH_".concat(Tr()), '<clipPath id="'.concat(e.clipPathId, `" >
`).concat(e.toClipPathSVG(t.reviver), `</clipPath>
`)) : "";
    }
    createSVGRefElementsMarkup() {
      return [
        "background",
        "overlay"
      ].map((t) => {
        const e = this["".concat(t, "Color")];
        if (fs(e)) {
          const s = this["".concat(t, "Vpt")], i = this.viewportTransform, r = {
            isType: () => false,
            width: this.width / (s ? i[0] : 1),
            height: this.height / (s ? i[3] : 1)
          };
          return e.toSVG(r, {
            additionalTransform: s ? io(i) : ""
          });
        }
      }).join("");
    }
    createSVGFontFacesMarkup() {
      const t = [], e = {}, s = rt.fontPaths;
      this._objects.forEach(function r(a) {
        t.push(a), $l(a) && a._objects.forEach(r);
      }), t.forEach((r) => {
        if (!(a = r) || typeof a._renderText != "function") return;
        var a;
        const { styles: o, fontFamily: h } = r;
        !e[h] && s[h] && (e[h] = true, o && Object.values(o).forEach((c) => {
          Object.values(c).forEach((u) => {
            let { fontFamily: d = "" } = u;
            !e[d] && s[d] && (e[d] = true);
          });
        }));
      });
      const i = Object.keys(e).map((r) => `		@font-face {
			font-family: '`.concat(r, `';
			src: url('`).concat(s[r], `');
		}
`)).join("");
      return i ? `	<style type="text/css"><![CDATA[
`.concat(i, `]]></style>
`) : "";
    }
    _setSVGObjects(t, e) {
      this.forEachObject((s) => {
        s.excludeFromExport || this._setSVGObject(t, s, e);
      });
    }
    _setSVGObject(t, e, s) {
      t.push(e.toSVG(s));
    }
    _setSVGBgOverlayImage(t, e, s) {
      const i = this[e];
      i && !i.excludeFromExport && i.toSVG && t.push(i.toSVG(s));
    }
    _setSVGBgOverlayColor(t, e) {
      const s = this["".concat(e, "Color")];
      if (s) if (fs(s)) {
        const i = s.repeat || "", r = this.width, a = this.height, o = this["".concat(e, "Vpt")] ? io(We(this.viewportTransform)) : "";
        t.push('<rect transform="'.concat(o, " translate(").concat(r / 2, ",").concat(a / 2, ')" x="').concat(s.offsetX - r / 2, '" y="').concat(s.offsetY - a / 2, '" width="').concat(i !== "repeat-y" && i !== "no-repeat" || !Ep(s) ? r : s.source.width, '" height="').concat(i !== "repeat-x" && i !== "no-repeat" || !Ep(s) ? a : s.source.height, '" fill="url(#SVGID_').concat(s.id, `)"></rect>
`));
      } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', s, '"', `></rect>
`);
    }
    loadFromJSON(t, e) {
      let { signal: s } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!t) return Promise.reject(new ri("`json` is undefined"));
      const i = typeof t == "string" ? JSON.parse(t) : t, { objects: r = [], backgroundImage: a, background: o, overlayImage: h, overlay: c, clipPath: u } = i, d = this.renderOnAddRemove;
      return this.renderOnAddRemove = false, Promise.all([
        so(r, {
          reviver: e,
          signal: s
        }),
        ll({
          backgroundImage: a,
          backgroundColor: o,
          overlayImage: h,
          overlayColor: c,
          clipPath: u
        }, {
          signal: s
        })
      ]).then((g) => {
        let [f, p] = g;
        return this.clear(), this.add(...f), this.set(i), this.set(p), this.renderOnAddRemove = d, this;
      });
    }
    clone(t) {
      const e = this.toObject(t);
      return this.cloneWithoutData().loadFromJSON(e);
    }
    cloneWithoutData() {
      const t = Qe(this);
      return new this.constructor(t);
    }
    toDataURL() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { format: e = "png", quality: s = 1, multiplier: i = 1, enableRetinaScaling: r = false } = t, a = i * (r ? this.getRetinaScaling() : 1);
      return $f(this.toCanvasElement(a, t), e, s);
    }
    toBlob() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { format: e = "png", quality: s = 1, multiplier: i = 1, enableRetinaScaling: r = false } = t, a = i * (r ? this.getRetinaScaling() : 1);
      return qf(this.toCanvasElement(a, t), e, s);
    }
    toCanvasElement() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, { width: e, height: s, left: i, top: r, filter: a } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const o = (e || this.width) * t, h = (s || this.height) * t, c = this.getZoom(), u = this.width, d = this.height, g = this.skipControlsDrawing, f = c * t, p = this.viewportTransform, v = [
        f,
        0,
        0,
        f,
        (p[4] - (i || 0)) * t,
        (p[5] - (r || 0)) * t
      ], b = this.enableRetinaScaling, _ = Qe({
        width: o,
        height: h
      }), S = a ? this._objects.filter((x) => a(x)) : this._objects;
      return this.enableRetinaScaling = false, this.viewportTransform = v, this.width = o, this.height = h, this.skipControlsDrawing = true, this.calcViewportBoundaries(), this.renderCanvas(_.getContext("2d"), S), this.viewportTransform = p, this.width = u, this.height = d, this.calcViewportBoundaries(), this.enableRetinaScaling = b, this.skipControlsDrawing = g, _;
    }
    dispose() {
      return !this.disposed && this.elements.cleanupDOM({
        width: this.width,
        height: this.height
      }), gu.cancelByCanvas(this), this.disposed = true, new Promise((t, e) => {
        const s = () => {
          this.destroy(), t(true);
        };
        s.kill = e, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t(false) : this.nextRenderHandle ? this.__cleanupTask = s : s();
      });
    }
    destroy() {
      this.destroyed = true, this.cancelRequestedRender(), this.forEachObject((t) => t.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
    }
    toString() {
      return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>");
    }
  }
  k(cl, "ownDefaults", $y);
  const qy = [
    "touchstart",
    "touchmove",
    "touchend"
  ], vv = (n) => {
    const t = gv(n.target), e = function(s) {
      const i = s.changedTouches;
      return i && i[0] ? i[0] : s;
    }(n);
    return new M(e.clientX + t.left, e.clientY + t.top);
  }, fu = (n) => qy.includes(n.type) || n.pointerType === "touch", Op = (n) => {
    n.preventDefault(), n.stopPropagation();
  }, ni = (n) => {
    let t = 0, e = 0, s = 0, i = 0;
    for (let r = 0, a = n.length; r < a; r++) {
      const { x: o, y: h } = n[r];
      (o > s || !r) && (s = o), (o < t || !r) && (t = o), (h > i || !r) && (i = h), (h < e || !r) && (e = h);
    }
    return {
      left: t,
      top: e,
      width: s - t,
      height: i - e
    };
  }, Ky = [
    "translateX",
    "translateY",
    "scaleX",
    "scaleY"
  ], bv = (n, t) => ro(n, Et(t, n.calcOwnMatrix())), ro = (n, t) => {
    const e = Dn(t), { translateX: s, translateY: i, scaleX: r, scaleY: a } = e, o = yt(e, Ky), h = new M(s, i);
    n.flipX = false, n.flipY = false, Object.assign(n, o), n.set({
      scaleX: r,
      scaleY: a
    }), n.setPositionByOrigin(h, q, q);
  }, yv = (n) => {
    n.scaleX = 1, n.scaleY = 1, n.skewX = 0, n.skewY = 0, n.flipX = false, n.flipY = false, n.rotate(0);
  }, Zf = (n) => ({
    scaleX: n.scaleX,
    scaleY: n.scaleY,
    skewX: n.skewX,
    skewY: n.skewY,
    angle: n.angle,
    left: n.left,
    flipX: n.flipX,
    flipY: n.flipY,
    top: n.top
  }), bd = (n, t, e) => {
    const s = n / 2, i = t / 2, r = [
      new M(-s, -i),
      new M(s, -i),
      new M(-s, i),
      new M(s, i)
    ].map((o) => o.transform(e)), a = ni(r);
    return new M(a.width, a.height);
  }, ul = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Te;
    return Et(We(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te), n);
  }, En = function(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Te;
    return n.transform(ul(t, e));
  }, wv = function(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Te;
    return n.transform(ul(t, e), true);
  }, fg = (n, t, e) => {
    const s = ul(t, e);
    return ro(n, Et(s, n.calcOwnMatrix())), s;
  }, _v = (n, t) => {
    var e;
    const { transform: { target: s } } = t;
    (e = s.canvas) === null || e === void 0 || e.fire("object:".concat(n), A(A({}, t), {}, {
      target: s
    })), s.fire(n, t);
  }, Qy = {
    left: -0.5,
    top: -0.5,
    center: 0,
    bottom: 0.5,
    right: 0.5
  }, It = (n) => typeof n == "string" ? Qy[n] : n - 0.5, tp = "not-allowed";
  function xv(n) {
    return It(n.originX) === It(q) && It(n.originY) === It(q);
  }
  function Pp(n) {
    return 0.5 - It(n);
  }
  const Os = (n, t) => n[t], Sv = (n, t, e, s) => ({
    e: n,
    transform: t,
    pointer: new M(e, s)
  });
  function Cv(n, t) {
    const e = n.getTotalAngle() + oi(Math.atan2(t.y, t.x)) + 360;
    return Math.round(e % 360 / 45);
  }
  function ep(n, t, e, s, i) {
    var r;
    let { target: a, corner: o } = n;
    const h = a.controls[o], c = ((r = a.canvas) === null || r === void 0 ? void 0 : r.getZoom()) || 1, u = a.padding / c, d = function(g, f, p, v) {
      const b = g.getRelativeCenterPoint(), _ = p !== void 0 && v !== void 0 ? g.translateToGivenOrigin(b, q, q, p, v) : new M(g.left, g.top);
      return (g.angle ? f.rotate(-Ct(g.angle), b) : f).subtract(_);
    }(a, new M(s, i), t, e);
    return d.x >= u && (d.x -= u), d.x <= -u && (d.x += u), d.y >= u && (d.y -= u), d.y <= u && (d.y += u), d.x -= h.offsetX, d.y -= h.offsetY, d;
  }
  const Jy = (n, t, e, s) => {
    const { target: i, offsetX: r, offsetY: a } = t, o = e - r, h = s - a, c = !Os(i, "lockMovementX") && i.left !== o, u = !Os(i, "lockMovementY") && i.top !== h;
    return c && i.set(at, o), u && i.set(He, h), (c || u) && _v(sv, Sv(n, t, e, s)), c || u;
  }, Lp = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#0FF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000",
    blanchedalmond: "#FFEBCD",
    blue: "#00F",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#0FF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#F0F",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightgreen: "#90EE90",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#789",
    lightslategrey: "#789",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#0F0",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#F0F",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#639",
    red: "#F00",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FF0",
    yellowgreen: "#9ACD32"
  }, Nd = (n, t, e) => (e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? n + 6 * (t - n) * e : e < 0.5 ? t : e < 2 / 3 ? n + (t - n) * (2 / 3 - e) * 6 : n), Rp = (n, t, e, s) => {
    n /= 255, t /= 255, e /= 255;
    const i = Math.max(n, t, e), r = Math.min(n, t, e);
    let a, o;
    const h = (i + r) / 2;
    if (i === r) a = o = 0;
    else {
      const c = i - r;
      switch (o = h > 0.5 ? c / (2 - i - r) : c / (i + r), i) {
        case n:
          a = (t - e) / c + (t < e ? 6 : 0);
          break;
        case t:
          a = (e - n) / c + 2;
          break;
        case e:
          a = (n - t) / c + 4;
      }
      a /= 6;
    }
    return [
      Math.round(360 * a),
      Math.round(100 * o),
      Math.round(100 * h),
      s
    ];
  }, Ip = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "1";
    return parseFloat(n) / (n.endsWith("%") ? 100 : 1);
  }, pl = (n) => Math.min(Math.round(n), 255).toString(16).toUpperCase().padStart(2, "0"), Fp = (n) => {
    let [t, e, s, i = 1] = n;
    const r = Math.round(0.3 * t + 0.59 * e + 0.11 * s);
    return [
      r,
      r,
      r,
      i
    ];
  };
  class ht {
    constructor(t) {
      if (k(this, "isUnrecognised", false), t) if (t instanceof ht) this.setSource([
        ...t._source
      ]);
      else if (Array.isArray(t)) {
        const [e, s, i, r = 1] = t;
        this.setSource([
          e,
          s,
          i,
          r
        ]);
      } else this.setSource(this._tryParsingColor(t));
      else this.setSource([
        0,
        0,
        0,
        1
      ]);
    }
    _tryParsingColor(t) {
      return (t = t.toLowerCase()) in Lp && (t = Lp[t]), t === "transparent" ? [
        255,
        255,
        255,
        0
      ] : ht.sourceFromHex(t) || ht.sourceFromRgb(t) || ht.sourceFromHsl(t) || (this.isUnrecognised = true) && [
        0,
        0,
        0,
        1
      ];
    }
    getSource() {
      return this._source;
    }
    setSource(t) {
      this._source = t;
    }
    toRgb() {
      const [t, e, s] = this.getSource();
      return "rgb(".concat(t, ",").concat(e, ",").concat(s, ")");
    }
    toRgba() {
      return "rgba(".concat(this.getSource().join(","), ")");
    }
    toHsl() {
      const [t, e, s] = Rp(...this.getSource());
      return "hsl(".concat(t, ",").concat(e, "%,").concat(s, "%)");
    }
    toHsla() {
      const [t, e, s, i] = Rp(...this.getSource());
      return "hsla(".concat(t, ",").concat(e, "%,").concat(s, "%,").concat(i, ")");
    }
    toHex() {
      return this.toHexa().slice(0, 6);
    }
    toHexa() {
      const [t, e, s, i] = this.getSource();
      return "".concat(pl(t)).concat(pl(e)).concat(pl(s)).concat(pl(Math.round(255 * i)));
    }
    getAlpha() {
      return this.getSource()[3];
    }
    setAlpha(t) {
      return this._source[3] = t, this;
    }
    toGrayscale() {
      return this.setSource(Fp(this.getSource())), this;
    }
    toBlackWhite(t) {
      const [e, , , s] = Fp(this.getSource()), i = e < (t || 127) ? 0 : 255;
      return this.setSource([
        i,
        i,
        i,
        s
      ]), this;
    }
    overlayWith(t) {
      t instanceof ht || (t = new ht(t));
      const e = this.getSource(), s = t.getSource(), [i, r, a] = e.map((o, h) => Math.round(0.5 * o + 0.5 * s[h]));
      return this.setSource([
        i,
        r,
        a,
        e[3]
      ]), this;
    }
    static fromRgb(t) {
      return ht.fromRgba(t);
    }
    static fromRgba(t) {
      return new ht(ht.sourceFromRgb(t));
    }
    static sourceFromRgb(t) {
      const e = t.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
      if (e) {
        const [s, i, r] = e.slice(1, 4).map((a) => {
          const o = parseFloat(a);
          return a.endsWith("%") ? Math.round(2.55 * o) : o;
        });
        return [
          s,
          i,
          r,
          Ip(e[4])
        ];
      }
    }
    static fromHsl(t) {
      return ht.fromHsla(t);
    }
    static fromHsla(t) {
      return new ht(ht.sourceFromHsl(t));
    }
    static sourceFromHsl(t) {
      const e = t.match(/^hsla?\(\s*([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
      if (!e) return;
      const s = (ht.parseAngletoDegrees(e[1]) % 360 + 360) % 360 / 360, i = parseFloat(e[2]) / 100, r = parseFloat(e[3]) / 100;
      let a, o, h;
      if (i === 0) a = o = h = r;
      else {
        const c = r <= 0.5 ? r * (i + 1) : r + i - r * i, u = 2 * r - c;
        a = Nd(u, c, s + 1 / 3), o = Nd(u, c, s), h = Nd(u, c, s - 1 / 3);
      }
      return [
        Math.round(255 * a),
        Math.round(255 * o),
        Math.round(255 * h),
        Ip(e[4])
      ];
    }
    static fromHex(t) {
      return new ht(ht.sourceFromHex(t));
    }
    static sourceFromHex(t) {
      if (t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
        const e = t.slice(t.indexOf("#") + 1);
        let s;
        s = e.length <= 4 ? e.split("").map((h) => h + h) : e.match(/.{2}/g);
        const [i, r, a, o = 255] = s.map((h) => parseInt(h, 16));
        return [
          i,
          r,
          a,
          o / 255
        ];
      }
    }
    static parseAngletoDegrees(t) {
      const e = t.toLowerCase(), s = parseFloat(e);
      return e.includes("rad") ? oi(s) : e.includes("turn") ? 360 * s : s;
    }
  }
  const xe = function(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gf;
    const e = /\D{0,2}$/.exec(n), s = parseFloat(n), i = rt.DPI;
    switch (e == null ? void 0 : e[0]) {
      case "mm":
        return s * i / 25.4;
      case "cm":
        return s * i / 2.54;
      case "in":
        return s * i;
      case "pt":
        return s * i / 72;
      case "pc":
        return s * i / 72 * 12;
      case "em":
        return s * t;
      default:
        return s;
    }
  }, sp = (n) => {
    const [t, e] = n.trim().split(" "), [s, i] = (r = t) && r !== Ae ? [
      r.slice(1, 4),
      r.slice(5, 8)
    ] : r === Ae ? [
      r,
      r
    ] : [
      "Mid",
      "Mid"
    ];
    var r;
    return {
      meetOrSlice: e || "meet",
      alignX: s,
      alignY: i
    };
  }, sl = function(n, t) {
    let e, s, i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
    if (t) if (t.toLive) e = "url(#SVGID_".concat(t.id, ")");
    else {
      const r = new ht(t), a = r.getAlpha();
      e = r.toRgb(), a !== 1 && (s = a.toString());
    }
    else e = "none";
    return i ? "".concat(n, ": ").concat(e, "; ").concat(s ? "".concat(n, "-opacity: ").concat(s, "; ") : "") : "".concat(n, '="').concat(e, '" ').concat(s ? "".concat(n, '-opacity="').concat(s, '" ') : "");
  };
  class Av {
    getSvgStyles(t) {
      const e = this.fillRule ? this.fillRule : "nonzero", s = this.strokeWidth ? this.strokeWidth : "0", i = this.strokeDashArray ? this.strokeDashArray.join(" ") : Ae, r = this.strokeDashOffset ? this.strokeDashOffset : "0", a = this.strokeLineCap ? this.strokeLineCap : "butt", o = this.strokeLineJoin ? this.strokeLineJoin : "miter", h = this.strokeMiterLimit ? this.strokeMiterLimit : "4", c = this.opacity !== void 0 ? this.opacity : "1", u = this.visible ? "" : " visibility: hidden;", d = t ? "" : this.getSvgFilter(), g = sl(jt, this.fill);
      return [
        sl(ke, this.stroke),
        "stroke-width: ",
        s,
        "; ",
        "stroke-dasharray: ",
        i,
        "; ",
        "stroke-linecap: ",
        a,
        "; ",
        "stroke-dashoffset: ",
        r,
        "; ",
        "stroke-linejoin: ",
        o,
        "; ",
        "stroke-miterlimit: ",
        h,
        "; ",
        g,
        "fill-rule: ",
        e,
        "; ",
        "opacity: ",
        c,
        ";",
        d,
        u
      ].join("");
    }
    getSvgFilter() {
      return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : "";
    }
    getSvgCommons() {
      return [
        this.id ? 'id="'.concat(this.id, '" ') : "",
        this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""
      ].join("");
    }
    getSvgTransform(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      const s = t ? this.calcTransformMatrix() : this.calcOwnMatrix(), i = 'transform="'.concat(io(s));
      return "".concat(i).concat(e, '" ');
    }
    _toSVG(t) {
      return [
        ""
      ];
    }
    toSVG(t) {
      return this._createBaseSVGMarkup(this._toSVG(t), {
        reviver: t
      });
    }
    toClipPathSVG(t) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t), {
        reviver: t
      });
    }
    _createBaseClipPathSVGMarkup(t) {
      let { reviver: e, additionalTransform: s = "" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const i = [
        this.getSvgTransform(true, s),
        this.getSvgCommons()
      ].join(""), r = t.indexOf("COMMON_PARTS");
      return t[r] = i, e ? e(t.join("")) : t.join("");
    }
    _createBaseSVGMarkup(t) {
      let { noStyle: e, reviver: s, withShadow: i, additionalTransform: r } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const a = e ? "" : 'style="'.concat(this.getSvgStyles(), '" '), o = i ? 'style="'.concat(this.getSvgFilter(), '" ') : "", h = this.clipPath, c = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", u = h && h.absolutePositioned, d = this.stroke, g = this.fill, f = this.shadow, p = [], v = t.indexOf("COMMON_PARTS");
      let b;
      h && (h.clipPathId = "CLIPPATH_".concat(Tr()), b = '<clipPath id="'.concat(h.clipPathId, `" >
`).concat(h.toClipPathSVG(s), `</clipPath>
`)), u && p.push("<g ", o, this.getSvgCommons(), ` >
`), p.push("<g ", this.getSvgTransform(false), u ? "" : o + this.getSvgCommons(), ` >
`);
      const _ = [
        a,
        c,
        e ? "" : this.addPaintOrder(),
        " ",
        r ? 'transform="'.concat(r, '" ') : ""
      ].join("");
      return t[v] = _, fs(g) && p.push(g.toSVG(this)), fs(d) && p.push(d.toSVG(this)), f && p.push(f.toSVG(this)), h && p.push(b), p.push(t.join("")), p.push(`</g>
`), u && p.push(`</g>
`), s ? s(p.join("")) : p.join("");
    }
    addPaintOrder() {
      return this.paintFirst !== jt ? ' paint-order="'.concat(this.paintFirst, '" ') : "";
    }
  }
  function yd(n) {
    return new RegExp("^(" + n.join("|") + ")\\b", "i");
  }
  var jp;
  const Ds = String.raw(jp || (jp = Or([
    "(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)"
  ], [
    "(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)"
  ]))), pg = "http://www.w3.org/2000/svg", Zy = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + Ds + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + Ds + "))?\\s+(.*)"), tw = {
    cx: at,
    x: at,
    r: "radius",
    cy: He,
    y: He,
    display: "visible",
    visibility: "visible",
    transform: "transformMatrix",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-style": "fontStyle",
    "font-weight": "fontWeight",
    "letter-spacing": "charSpacing",
    "paint-order": "paintFirst",
    "stroke-dasharray": "strokeDashArray",
    "stroke-dashoffset": "strokeDashOffset",
    "stroke-linecap": "strokeLineCap",
    "stroke-linejoin": "strokeLineJoin",
    "stroke-miterlimit": "strokeMiterLimit",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
    "text-decoration": "textDecoration",
    "text-anchor": "textAnchor",
    opacity: "opacity",
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "vector-effect": "strokeUniform",
    "image-rendering": "imageSmoothing"
  }, Wd = "font-size", Bd = "clip-path", ew = yd([
    "path",
    "circle",
    "polygon",
    "polyline",
    "ellipse",
    "rect",
    "line",
    "image",
    "text"
  ]), sw = yd([
    "symbol",
    "image",
    "marker",
    "pattern",
    "view",
    "svg"
  ]), Np = yd([
    "symbol",
    "g",
    "a",
    "svg",
    "clipPath",
    "defs"
  ]), Wp = new RegExp("^\\s*(" + Ds + "+)\\s*,?\\s*(" + Ds + "+)\\s*,?\\s*(" + Ds + "+)\\s*,?\\s*(" + Ds + "+)\\s*$"), iw = new M(1, 0), kv = new M(), ip = (n, t) => n.rotate(t), pu = (n, t) => new M(t).subtract(n), mu = (n) => n.distanceFrom(kv), vu = (n, t) => Math.atan2(Xa(n, t), Mv(n, t)), Tv = (n) => vu(iw, n), wd = (n) => n.eq(kv) ? n : n.scalarDivide(mu(n)), rp = function(n) {
    let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    return wd(new M(-n.y, n.x).scalarMultiply(t ? 1 : -1));
  }, Xa = (n, t) => n.x * t.y - n.y * t.x, Mv = (n, t) => n.x * t.x + n.y * t.y, mg = (n, t, e) => {
    if (n.eq(t) || n.eq(e)) return true;
    const s = Xa(t, e), i = Xa(t, n), r = Xa(e, n);
    return s >= 0 ? i >= 0 && r <= 0 : !(i <= 0 && r >= 0);
  }, Bp = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?", Hp = new RegExp("(?:\\s|^)" + Bp + Bp + "(" + Ds + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
  class ji {
    constructor(t) {
      const e = typeof t == "string" ? ji.parseShadow(t) : t;
      Object.assign(this, ji.ownDefaults, e), this.id = Tr();
    }
    static parseShadow(t) {
      const e = t.trim(), [, s = 0, i = 0, r = 0] = (Hp.exec(e) || []).map((a) => parseFloat(a) || 0);
      return {
        color: (e.replace(Hp, "") || "rgb(0,0,0)").trim(),
        offsetX: s,
        offsetY: i,
        blur: r
      };
    }
    toString() {
      return [
        this.offsetX,
        this.offsetY,
        this.blur,
        this.color
      ].join("px ");
    }
    toSVG(t) {
      const e = ip(new M(this.offsetX, this.offsetY), Ct(-t.angle)), s = new ht(this.color);
      let i = 40, r = 40;
      return t.width && t.height && (i = 100 * ft((Math.abs(e.x) + this.blur) / t.width, rt.NUM_FRACTION_DIGITS) + 20, r = 100 * ft((Math.abs(e.y) + this.blur) / t.height, rt.NUM_FRACTION_DIGITS) + 20), t.flipX && (e.x *= -1), t.flipY && (e.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(r, '%" height="').concat(100 + 2 * r, '%" x="-').concat(i, '%" width="').concat(100 + 2 * i, `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(ft(this.blur ? this.blur / 2 : 0, rt.NUM_FRACTION_DIGITS), `"></feGaussianBlur>
	<feOffset dx="`).concat(ft(e.x, rt.NUM_FRACTION_DIGITS), '" dy="').concat(ft(e.y, rt.NUM_FRACTION_DIGITS), `" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(s.toRgb(), '" flood-opacity="').concat(s.getAlpha(), `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`);
    }
    toObject() {
      const t = {
        color: this.color,
        blur: this.blur,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        affectStroke: this.affectStroke,
        nonScaling: this.nonScaling,
        type: this.constructor.type
      }, e = ji.ownDefaults;
      return this.includeDefaultValues ? t : Jf(t, (s, i) => s !== e[i]);
    }
    static async fromObject(t) {
      return new this(t);
    }
  }
  k(ji, "ownDefaults", {
    color: "rgb(0,0,0)",
    blur: 0,
    offsetX: 0,
    offsetY: 0,
    affectStroke: false,
    includeDefaultValues: true,
    nonScaling: false
  }), k(ji, "type", "shadow"), B.setClass(ji, "shadow");
  const On = (n, t, e) => Math.max(n, Math.min(t, e)), rw = [
    He,
    at,
    Me,
    Ke,
    "flipX",
    "flipY",
    "originX",
    "originY",
    "angle",
    "opacity",
    "globalCompositeOperation",
    "shadow",
    "visible",
    oo,
    ho
  ], Bi = [
    jt,
    ke,
    "strokeWidth",
    "strokeDashArray",
    "width",
    "height",
    "paintFirst",
    "strokeUniform",
    "strokeLineCap",
    "strokeDashOffset",
    "strokeLineJoin",
    "strokeMiterLimit",
    "backgroundColor",
    "clipPath"
  ], nw = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    angle: 0,
    flipX: false,
    flipY: false,
    scaleX: 1,
    scaleY: 1,
    minScaleLimit: 0,
    skewX: 0,
    skewY: 0,
    originX: at,
    originY: He,
    strokeWidth: 1,
    strokeUniform: false,
    padding: 0,
    opacity: 1,
    paintFirst: jt,
    fill: "rgb(0,0,0)",
    fillRule: "nonzero",
    stroke: null,
    strokeDashArray: null,
    strokeDashOffset: 0,
    strokeLineCap: "butt",
    strokeLineJoin: "miter",
    strokeMiterLimit: 4,
    globalCompositeOperation: "source-over",
    backgroundColor: "",
    shadow: null,
    visible: true,
    includeDefaultValues: true,
    excludeFromExport: false,
    objectCaching: true,
    clipPath: void 0,
    inverted: false,
    absolutePositioned: false,
    centeredRotation: true,
    centeredScaling: false,
    dirty: true
  }, Hd = (n, t, e, s) => (n < Math.abs(t) ? (n = t, s = e / 4) : s = t === 0 && n === 0 ? e / Wi * Math.asin(1) : e / Wi * Math.asin(t / n), {
    a: n,
    c: t,
    p: e,
    s
  }), zp = (n, t, e, s, i) => n * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * i - t) * Wi / e), Ev = (n, t, e, s) => -e * Math.cos(n / s * kr) + e + t, vg = (n, t, e, s) => (n /= s) < 1 / 2.75 ? e * (7.5625 * n * n) + t : n < 2 / 2.75 ? e * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + t : n < 2.5 / 2.75 ? e * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + t : e * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + t, Vp = (n, t, e, s) => e - vg(s - n, 0, e, s) + t;
  var aw = Object.freeze({
    __proto__: null,
    defaultEasing: Ev,
    easeInBack: function(n, t, e, s) {
      let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1.70158;
      return e * (n /= s) * n * ((i + 1) * n - i) + t;
    },
    easeInBounce: Vp,
    easeInCirc: (n, t, e, s) => -e * (Math.sqrt(1 - (n /= s) * n) - 1) + t,
    easeInCubic: (n, t, e, s) => e * (n / s) ** 3 + t,
    easeInElastic: (n, t, e, s) => {
      const i = e;
      let r = 0;
      if (n === 0) return t;
      if ((n /= s) === 1) return t + e;
      r || (r = 0.3 * s);
      const { a, s: o, p: h } = Hd(i, e, r, 1.70158);
      return -zp(a, o, h, n, s) + t;
    },
    easeInExpo: (n, t, e, s) => n === 0 ? t : e * 2 ** (10 * (n / s - 1)) + t,
    easeInOutBack: function(n, t, e, s) {
      let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1.70158;
      return (n /= s / 2) < 1 ? e / 2 * (n * n * ((1 + (i *= 1.525)) * n - i)) + t : e / 2 * ((n -= 2) * n * ((1 + (i *= 1.525)) * n + i) + 2) + t;
    },
    easeInOutBounce: (n, t, e, s) => n < s / 2 ? 0.5 * Vp(2 * n, 0, e, s) + t : 0.5 * vg(2 * n - s, 0, e, s) + 0.5 * e + t,
    easeInOutCirc: (n, t, e, s) => (n /= s / 2) < 1 ? -e / 2 * (Math.sqrt(1 - n ** 2) - 1) + t : e / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t,
    easeInOutCubic: (n, t, e, s) => (n /= s / 2) < 1 ? e / 2 * n ** 3 + t : e / 2 * ((n - 2) ** 3 + 2) + t,
    easeInOutElastic: (n, t, e, s) => {
      const i = e;
      let r = 0;
      if (n === 0) return t;
      if ((n /= s / 2) === 2) return t + e;
      r || (r = s * (0.3 * 1.5));
      const { a, s: o, p: h, c } = Hd(i, e, r, 1.70158);
      return n < 1 ? -0.5 * zp(a, o, h, n, s) + t : a * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * s - o) * Wi / h) * 0.5 + c + t;
    },
    easeInOutExpo: (n, t, e, s) => n === 0 ? t : n === s ? t + e : (n /= s / 2) < 1 ? e / 2 * 2 ** (10 * (n - 1)) + t : e / 2 * -(2 ** (-10 * --n) + 2) + t,
    easeInOutQuad: (n, t, e, s) => (n /= s / 2) < 1 ? e / 2 * n ** 2 + t : -e / 2 * (--n * (n - 2) - 1) + t,
    easeInOutQuart: (n, t, e, s) => (n /= s / 2) < 1 ? e / 2 * n ** 4 + t : -e / 2 * ((n -= 2) * n ** 3 - 2) + t,
    easeInOutQuint: (n, t, e, s) => (n /= s / 2) < 1 ? e / 2 * n ** 5 + t : e / 2 * ((n - 2) ** 5 + 2) + t,
    easeInOutSine: (n, t, e, s) => -e / 2 * (Math.cos(Math.PI * n / s) - 1) + t,
    easeInQuad: (n, t, e, s) => e * (n /= s) * n + t,
    easeInQuart: (n, t, e, s) => e * (n /= s) * n ** 3 + t,
    easeInQuint: (n, t, e, s) => e * (n / s) ** 5 + t,
    easeInSine: (n, t, e, s) => -e * Math.cos(n / s * kr) + e + t,
    easeOutBack: function(n, t, e, s) {
      let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1.70158;
      return e * ((n = n / s - 1) * n * ((i + 1) * n + i) + 1) + t;
    },
    easeOutBounce: vg,
    easeOutCirc: (n, t, e, s) => e * Math.sqrt(1 - (n = n / s - 1) * n) + t,
    easeOutCubic: (n, t, e, s) => e * ((n / s - 1) ** 3 + 1) + t,
    easeOutElastic: (n, t, e, s) => {
      const i = e;
      let r = 0;
      if (n === 0) return t;
      if ((n /= s) === 1) return t + e;
      r || (r = 0.3 * s);
      const { a, s: o, p: h, c } = Hd(i, e, r, 1.70158);
      return a * 2 ** (-10 * n) * Math.sin((n * s - o) * Wi / h) + c + t;
    },
    easeOutExpo: (n, t, e, s) => n === s ? t + e : e * -(2 ** (-10 * n / s) + 1) + t,
    easeOutQuad: (n, t, e, s) => -e * (n /= s) * (n - 2) + t,
    easeOutQuart: (n, t, e, s) => -e * ((n = n / s - 1) * n ** 3 - 1) + t,
    easeOutQuint: (n, t, e, s) => e * ((n / s - 1) ** 5 + 1) + t,
    easeOutSine: (n, t, e, s) => e * Math.sin(n / s * kr) + t
  });
  const ow = () => false;
  class np {
    constructor(t) {
      let { startValue: e, byValue: s, duration: i = 500, delay: r = 0, easing: a = Ev, onStart: o = Mn, onChange: h = Mn, onComplete: c = Mn, abort: u = ow, target: d } = t;
      k(this, "_state", "pending"), k(this, "durationProgress", 0), k(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = i, this.delay = r, this.easing = a, this._onStart = o, this._onChange = h, this._onComplete = c, this._abort = u, this.target = d, this.startValue = e, this.byValue = s, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
    }
    get state() {
      return this._state;
    }
    isDone() {
      return this._state === "aborted" || this._state === "completed";
    }
    start() {
      const t = (e) => {
        this._state === "pending" && (this.startTime = e || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
      };
      this.register(), this.delay > 0 ? setTimeout(() => wh(t), this.delay) : wh(t);
    }
    tick(t) {
      const e = (t || +/* @__PURE__ */ new Date()) - this.startTime, s = Math.min(e, this.duration);
      this.durationProgress = s / this.duration;
      const { value: i, valueProgress: r } = this.calculate(s);
      this.value = Object.freeze(i), this.valueProgress = r, this._state !== "aborted" && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), wh(this.tick)));
    }
    register() {
      gu.push(this);
    }
    unregister() {
      gu.remove(this);
    }
    abort() {
      this._state = "aborted", this.unregister();
    }
  }
  const hw = [
    "startValue",
    "endValue"
  ];
  class lw extends np {
    constructor(t) {
      let { startValue: e = 0, endValue: s = 100 } = t;
      super(A(A({}, yt(t, hw)), {}, {
        startValue: e,
        byValue: s - e
      }));
    }
    calculate(t) {
      const e = this.easing(t, this.startValue, this.byValue, this.duration);
      return {
        value: e,
        valueProgress: Math.abs((e - this.startValue) / this.byValue)
      };
    }
  }
  const cw = [
    "startValue",
    "endValue"
  ];
  class uw extends np {
    constructor(t) {
      let { startValue: e = [
        0
      ], endValue: s = [
        100
      ] } = t;
      super(A(A({}, yt(t, cw)), {}, {
        startValue: e,
        byValue: s.map((i, r) => i - e[r])
      }));
    }
    calculate(t) {
      const e = this.startValue.map((s, i) => this.easing(t, s, this.byValue[i], this.duration, i));
      return {
        value: e,
        valueProgress: Math.abs((e[0] - this.startValue[0]) / this.byValue[0])
      };
    }
  }
  const dw = [
    "startValue",
    "endValue",
    "easing",
    "onChange",
    "onComplete",
    "abort"
  ], gw = (n, t, e, s) => t + e * (1 - Math.cos(n / s * kr)), zd = (n) => n && ((t, e, s) => n(new ht(t).toRgba(), e, s));
  class fw extends np {
    constructor(t) {
      let { startValue: e, endValue: s, easing: i = gw, onChange: r, onComplete: a, abort: o } = t, h = yt(t, dw);
      const c = new ht(e).getSource(), u = new ht(s).getSource();
      super(A(A({}, h), {}, {
        startValue: c,
        byValue: u.map((d, g) => d - c[g]),
        easing: i,
        onChange: zd(r),
        onComplete: zd(a),
        abort: zd(o)
      }));
    }
    calculate(t) {
      const [e, s, i, r] = this.startValue.map((o, h) => this.easing(t, o, this.byValue[h], this.duration, h)), a = [
        ...[
          e,
          s,
          i
        ].map(Math.round),
        On(0, r, 1)
      ];
      return {
        value: a,
        valueProgress: a.map((o, h) => this.byValue[h] !== 0 ? Math.abs((o - this.startValue[h]) / this.byValue[h]) : 0).find((o) => o !== 0) || 0
      };
    }
  }
  function ap(n) {
    const t = ((e) => Array.isArray(e.startValue) || Array.isArray(e.endValue))(n) ? new uw(n) : new lw(n);
    return t.start(), t;
  }
  function Dv(n) {
    const t = new fw(n);
    return t.start(), t;
  }
  class wt {
    constructor(t) {
      this.status = t, this.points = [];
    }
    includes(t) {
      return this.points.some((e) => e.eq(t));
    }
    append() {
      for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
      return this.points = this.points.concat(e.filter((i) => !this.includes(i))), this;
    }
    static isPointContained(t, e, s) {
      let i = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
      if (e.eq(s)) return t.eq(e);
      if (e.x === s.x) return t.x === e.x && (i || t.y >= Math.min(e.y, s.y) && t.y <= Math.max(e.y, s.y));
      if (e.y === s.y) return t.y === e.y && (i || t.x >= Math.min(e.x, s.x) && t.x <= Math.max(e.x, s.x));
      {
        const r = pu(e, s), a = pu(e, t).divide(r);
        return i ? Math.abs(a.x) === Math.abs(a.y) : a.x === a.y && a.x >= 0 && a.x <= 1;
      }
    }
    static isPointInPolygon(t, e) {
      const s = new M(t).setX(Math.min(t.x - 1, ...e.map((r) => r.x)));
      let i = 0;
      for (let r = 0; r < e.length; r++) {
        const a = this.intersectSegmentSegment(e[r], e[(r + 1) % e.length], t, s);
        if (a.includes(t)) return true;
        i += +(a.status === "Intersection");
      }
      return i % 2 == 1;
    }
    static intersectLineLine(t, e, s, i) {
      let r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], a = !(arguments.length > 5 && arguments[5] !== void 0) || arguments[5];
      const o = e.x - t.x, h = e.y - t.y, c = i.x - s.x, u = i.y - s.y, d = t.x - s.x, g = t.y - s.y, f = c * g - u * d, p = o * g - h * d, v = u * o - c * h;
      if (v !== 0) {
        const b = f / v, _ = p / v;
        return (r || 0 <= b && b <= 1) && (a || 0 <= _ && _ <= 1) ? new wt("Intersection").append(new M(t.x + b * o, t.y + b * h)) : new wt();
      }
      if (f === 0 || p === 0) {
        const b = r || a || wt.isPointContained(t, s, i) || wt.isPointContained(e, s, i) || wt.isPointContained(s, t, e) || wt.isPointContained(i, t, e);
        return new wt(b ? "Coincident" : void 0);
      }
      return new wt("Parallel");
    }
    static intersectSegmentLine(t, e, s, i) {
      return wt.intersectLineLine(t, e, s, i, false, true);
    }
    static intersectSegmentSegment(t, e, s, i) {
      return wt.intersectLineLine(t, e, s, i, false, false);
    }
    static intersectLinePolygon(t, e, s) {
      let i = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
      const r = new wt(), a = s.length;
      for (let o, h, c, u = 0; u < a; u++) {
        if (o = s[u], h = s[(u + 1) % a], c = wt.intersectLineLine(t, e, o, h, i, false), c.status === "Coincident") return c;
        r.append(...c.points);
      }
      return r.points.length > 0 && (r.status = "Intersection"), r;
    }
    static intersectSegmentPolygon(t, e, s) {
      return wt.intersectLinePolygon(t, e, s, false);
    }
    static intersectPolygonPolygon(t, e) {
      const s = new wt(), i = t.length, r = [];
      for (let a = 0; a < i; a++) {
        const o = t[a], h = t[(a + 1) % i], c = wt.intersectSegmentPolygon(o, h, e);
        c.status === "Coincident" ? (r.push(c), s.append(o, h)) : s.append(...c.points);
      }
      return r.length > 0 && r.length === t.length ? new wt("Coincident") : (s.points.length > 0 && (s.status = "Intersection"), s);
    }
    static intersectPolygonRectangle(t, e, s) {
      const i = e.min(s), r = e.max(s), a = new M(r.x, i.y), o = new M(i.x, r.y);
      return wt.intersectPolygonPolygon(t, [
        i,
        a,
        r,
        o
      ]);
    }
  }
  class pw extends av {
    getX() {
      return this.getXY().x;
    }
    setX(t) {
      this.setXY(this.getXY().setX(t));
    }
    getY() {
      return this.getXY().y;
    }
    setY(t) {
      this.setXY(this.getXY().setY(t));
    }
    getRelativeX() {
      return this.left;
    }
    setRelativeX(t) {
      this.left = t;
    }
    getRelativeY() {
      return this.top;
    }
    setRelativeY(t) {
      this.top = t;
    }
    getXY() {
      const t = this.getRelativeXY();
      return this.group ? de(t, this.group.calcTransformMatrix()) : t;
    }
    setXY(t, e, s) {
      this.group && (t = de(t, We(this.group.calcTransformMatrix()))), this.setRelativeXY(t, e, s);
    }
    getRelativeXY() {
      return new M(this.left, this.top);
    }
    setRelativeXY(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.originX, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.originY;
      this.setPositionByOrigin(t, e, s);
    }
    isStrokeAccountedForInDimensions() {
      return false;
    }
    getCoords() {
      const { tl: t, tr: e, br: s, bl: i } = this.aCoords || (this.aCoords = this.calcACoords()), r = [
        t,
        e,
        s,
        i
      ];
      if (this.group) {
        const a = this.group.calcTransformMatrix();
        return r.map((o) => de(o, a));
      }
      return r;
    }
    intersectsWithRect(t, e) {
      return wt.intersectPolygonRectangle(this.getCoords(), t, e).status === "Intersection";
    }
    intersectsWithObject(t) {
      const e = wt.intersectPolygonPolygon(this.getCoords(), t.getCoords());
      return e.status === "Intersection" || e.status === "Coincident" || t.isContainedWithinObject(this) || this.isContainedWithinObject(t);
    }
    isContainedWithinObject(t) {
      return this.getCoords().every((e) => t.containsPoint(e));
    }
    isContainedWithinRect(t, e) {
      const { left: s, top: i, width: r, height: a } = this.getBoundingRect();
      return s >= t.x && s + r <= e.x && i >= t.y && i + a <= e.y;
    }
    isOverlapping(t) {
      return this.intersectsWithObject(t) || this.isContainedWithinObject(t) || t.isContainedWithinObject(this);
    }
    containsPoint(t) {
      return wt.isPointInPolygon(t, this.getCoords());
    }
    isOnScreen() {
      if (!this.canvas) return false;
      const { tl: t, br: e } = this.canvas.vptCoords;
      return !!this.getCoords().some((s) => s.x <= e.x && s.x >= t.x && s.y <= e.y && s.y >= t.y) || !!this.intersectsWithRect(t, e) || this.containsPoint(t.midPointFrom(e));
    }
    isPartiallyOnScreen() {
      if (!this.canvas) return false;
      const { tl: t, br: e } = this.canvas.vptCoords;
      return this.intersectsWithRect(t, e) ? true : this.getCoords().every((s) => (s.x >= e.x || s.x <= t.x) && (s.y >= e.y || s.y <= t.y)) && this.containsPoint(t.midPointFrom(e));
    }
    getBoundingRect() {
      return ni(this.getCoords());
    }
    getScaledWidth() {
      return this._getTransformedDimensions().x;
    }
    getScaledHeight() {
      return this._getTransformedDimensions().y;
    }
    scale(t) {
      this._set(Me, t), this._set(Ke, t), this.setCoords();
    }
    scaleToWidth(t) {
      const e = this.getBoundingRect().width / this.getScaledWidth();
      return this.scale(t / this.width / e);
    }
    scaleToHeight(t) {
      const e = this.getBoundingRect().height / this.getScaledHeight();
      return this.scale(t / this.height / e);
    }
    getCanvasRetinaScaling() {
      var t;
      return ((t = this.canvas) === null || t === void 0 ? void 0 : t.getRetinaScaling()) || 1;
    }
    getTotalAngle() {
      return this.group ? oi(cv(this.calcTransformMatrix())) : this.angle;
    }
    getViewportTransform() {
      var t;
      return ((t = this.canvas) === null || t === void 0 ? void 0 : t.viewportTransform) || Te.concat();
    }
    calcACoords() {
      const t = Rn({
        angle: this.angle
      }), { x: e, y: s } = this.getRelativeCenterPoint(), i = lo(e, s), r = Et(i, t), a = this._getTransformedDimensions(), o = a.x / 2, h = a.y / 2;
      return {
        tl: de({
          x: -o,
          y: -h
        }, r),
        tr: de({
          x: o,
          y: -h
        }, r),
        bl: de({
          x: -o,
          y: h
        }, r),
        br: de({
          x: o,
          y: h
        }, r)
      };
    }
    setCoords() {
      this.aCoords = this.calcACoords();
    }
    transformMatrixKey() {
      let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = [];
      return !t && this.group && (e = this.group.transformMatrixKey(t)), e.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, It(this.originX), It(this.originY)), e;
    }
    calcTransformMatrix() {
      let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = this.calcOwnMatrix();
      if (t || !this.group) return e;
      const s = this.transformMatrixKey(t), i = this.matrixCache;
      return i && i.key.every((r, a) => r === s[a]) ? i.value : (this.group && (e = Et(this.group.calcTransformMatrix(false), e)), this.matrixCache = {
        key: s,
        value: e
      }, e);
    }
    calcOwnMatrix() {
      const t = this.transformMatrixKey(true), e = this.ownMatrixCache;
      if (e && e.key === t) return e.value;
      const s = this.getRelativeCenterPoint(), i = {
        angle: this.angle,
        translateX: s.x,
        translateY: s.y,
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        flipX: this.flipX,
        flipY: this.flipY
      }, r = dv(i);
      return this.ownMatrixCache = {
        key: t,
        value: r
      }, r;
    }
    _getNonTransformedDimensions() {
      return new M(this.width, this.height).scalarAdd(this.strokeWidth);
    }
    _calculateCurrentDimensions(t) {
      return this._getTransformedDimensions(t).transform(this.getViewportTransform(), true).scalarAdd(2 * this.padding);
    }
    _getTransformedDimensions() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const e = A({
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        width: this.width,
        height: this.height,
        strokeWidth: this.strokeWidth
      }, t), s = e.strokeWidth;
      let i = s, r = 0;
      this.strokeUniform && (i = 0, r = s);
      const a = e.width + i, o = e.height + i;
      let h;
      return h = e.skewX === 0 && e.skewY === 0 ? new M(a * e.scaleX, o * e.scaleY) : bd(a, o, hl(e)), h.scalarAdd(r);
    }
    translateToGivenOrigin(t, e, s, i, r) {
      let a = t.x, o = t.y;
      const h = It(i) - It(e), c = It(r) - It(s);
      if (h || c) {
        const u = this._getTransformedDimensions();
        a += h * u.x, o += c * u.y;
      }
      return new M(a, o);
    }
    translateToCenterPoint(t, e, s) {
      if (e === q && s === q) return t;
      const i = this.translateToGivenOrigin(t, e, s, q, q);
      return this.angle ? i.rotate(Ct(this.angle), t) : i;
    }
    translateToOriginPoint(t, e, s) {
      const i = this.translateToGivenOrigin(t, q, q, e, s);
      return this.angle ? i.rotate(Ct(this.angle), t) : i;
    }
    getCenterPoint() {
      const t = this.getRelativeCenterPoint();
      return this.group ? de(t, this.group.calcTransformMatrix()) : t;
    }
    getRelativeCenterPoint() {
      return this.translateToCenterPoint(new M(this.left, this.top), this.originX, this.originY);
    }
    getPointByOrigin(t, e) {
      return this.translateToOriginPoint(this.getRelativeCenterPoint(), t, e);
    }
    setPositionByOrigin(t, e, s) {
      const i = this.translateToCenterPoint(t, e, s), r = this.translateToOriginPoint(i, this.originX, this.originY);
      this.set({
        left: r.x,
        top: r.y
      });
    }
    _getLeftTopCoords() {
      return this.translateToOriginPoint(this.getRelativeCenterPoint(), at, He);
    }
  }
  const mw = [
    "type"
  ], vw = [
    "extraParam"
  ];
  let hi = class ql extends pw {
    static getDefaults() {
      return ql.ownDefaults;
    }
    get type() {
      const t = this.constructor.type;
      return t === "FabricObject" ? "object" : t.toLowerCase();
    }
    set type(t) {
      Ni("warn", "Setting type has no effect", t);
    }
    constructor(t) {
      super(), k(this, "_cacheContext", null), Object.assign(this, ql.ownDefaults), this.setOptions(t);
    }
    _createCacheCanvas() {
      this._cacheCanvas = ms(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = true;
    }
    _limitCacheSize(t) {
      const e = t.width, s = t.height, i = rt.maxCacheSideLimit, r = rt.minCacheSideLimit;
      if (e <= i && s <= i && e * s <= rt.perfLimitSizeTotal) return e < r && (t.width = r), s < r && (t.height = r), t;
      const a = e / s, [o, h] = yh.limitDimsByArea(a), c = On(r, o, i), u = On(r, h, i);
      return e > c && (t.zoomX /= e / c, t.width = c, t.capped = true), s > u && (t.zoomY /= s / u, t.height = u, t.capped = true), t;
    }
    _getCacheCanvasDimensions() {
      const t = this.getTotalObjectScaling(), e = this._getTransformedDimensions({
        skewX: 0,
        skewY: 0
      }), s = e.x * t.x / this.scaleX, i = e.y * t.y / this.scaleY;
      return {
        width: Math.ceil(s + 2),
        height: Math.ceil(i + 2),
        zoomX: t.x,
        zoomY: t.y,
        x: s,
        y: i
      };
    }
    _updateCacheCanvas() {
      const t = this._cacheCanvas, e = this._cacheContext, { width: s, height: i, zoomX: r, zoomY: a, x: o, y: h } = this._limitCacheSize(this._getCacheCanvasDimensions()), c = s !== t.width || i !== t.height, u = this.zoomX !== r || this.zoomY !== a;
      if (!t || !e) return false;
      if (c || u) {
        s !== t.width || i !== t.height ? (t.width = s, t.height = i) : (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height));
        const d = o / 2, g = h / 2;
        return this.cacheTranslationX = Math.round(t.width / 2 - d) + d, this.cacheTranslationY = Math.round(t.height / 2 - g) + g, e.translate(this.cacheTranslationX, this.cacheTranslationY), e.scale(r, a), this.zoomX = r, this.zoomY = a, true;
      }
      return false;
    }
    setOptions() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this._setOptions(t);
    }
    transform(t) {
      const e = this.group && !this.group._transformDone || this.group && this.canvas && t === this.canvas.contextTop, s = this.calcTransformMatrix(!e);
      t.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
    }
    getObjectScaling() {
      if (!this.group) return new M(Math.abs(this.scaleX), Math.abs(this.scaleY));
      const t = Dn(this.calcTransformMatrix());
      return new M(Math.abs(t.scaleX), Math.abs(t.scaleY));
    }
    getTotalObjectScaling() {
      const t = this.getObjectScaling();
      if (this.canvas) {
        const e = this.canvas.getZoom(), s = this.getCanvasRetinaScaling();
        return t.scalarMultiply(e * s);
      }
      return t;
    }
    getObjectOpacity() {
      let t = this.opacity;
      return this.group && (t *= this.group.getObjectOpacity()), t;
    }
    _constrainScale(t) {
      return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : t === 0 ? 1e-4 : t;
    }
    _set(t, e) {
      t !== Me && t !== Ke || (e = this._constrainScale(e)), t === Me && e < 0 ? (this.flipX = !this.flipX, e *= -1) : t === "scaleY" && e < 0 ? (this.flipY = !this.flipY, e *= -1) : t !== "shadow" || !e || e instanceof ji || (e = new ji(e));
      const s = this[t] !== e;
      return this[t] = e, s && this.constructor.cacheProperties.includes(t) && (this.dirty = true), this.parent && (this.dirty || s && this.constructor.stateProperties.includes(t)) && this.parent._set("dirty", true), this;
    }
    isNotVisible() {
      return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
    }
    render(t) {
      this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), this.transform(t), this._setOpacity(t), this._setShadow(t), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(), this.drawObject(t, false, {}), this.dirty = false), t.restore());
    }
    drawSelectionBackground(t) {
    }
    renderCache(t) {
      if (t = t || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
        const { zoomX: e, zoomY: s, cacheTranslationX: i, cacheTranslationY: r } = this, { width: a, height: o } = this._cacheCanvas;
        this.drawObject(this._cacheContext, t.forClipping, {
          zoomX: e,
          zoomY: s,
          cacheTranslationX: i,
          cacheTranslationY: r,
          width: a,
          height: o,
          parentClipPaths: []
        }), this.dirty = false;
      }
    }
    _removeCacheCanvas() {
      this._cacheCanvas = void 0, this._cacheContext = null;
    }
    hasStroke() {
      return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
    }
    hasFill() {
      return this.fill && this.fill !== "transparent";
    }
    needsItsOwnCache() {
      return !!(this.paintFirst === ke && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
    }
    shouldCache() {
      return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
    }
    willDrawShadow() {
      return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
    }
    drawClipPathOnCache(t, e, s) {
      t.save(), e.inverted ? t.globalCompositeOperation = "destination-out" : t.globalCompositeOperation = "destination-in", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s, 0, 0), t.restore();
    }
    drawObject(t, e, s) {
      const i = this.fill, r = this.stroke;
      e ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t)) : this._renderBackground(t), this._render(t), this._drawClipPath(t, this.clipPath, s), this.fill = i, this.stroke = r;
    }
    createClipPathLayer(t, e) {
      const s = Qe(e), i = s.getContext("2d");
      if (i.translate(e.cacheTranslationX, e.cacheTranslationY), i.scale(e.zoomX, e.zoomY), t._cacheCanvas = s, e.parentClipPaths.forEach((r) => {
        r.transform(i);
      }), e.parentClipPaths.push(t), t.absolutePositioned) {
        const r = We(this.calcTransformMatrix());
        i.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
      }
      return t.transform(i), t.drawObject(i, true, e), s;
    }
    _drawClipPath(t, e, s) {
      if (!e) return;
      e._transformDone = true;
      const i = this.createClipPathLayer(e, s);
      this.drawClipPathOnCache(t, e, i);
    }
    drawCacheOnCanvas(t) {
      t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }
    isCacheDirty() {
      let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      if (this.isNotVisible()) return false;
      const e = this._cacheCanvas, s = this._cacheContext;
      return !(!e || !s || t || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e && s && !t && (s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, e.width, e.height), s.restore()), true);
    }
    _renderBackground(t) {
      if (!this.backgroundColor) return;
      const e = this._getNonTransformedDimensions();
      t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t);
    }
    _setOpacity(t) {
      this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity;
    }
    _setStrokeStyles(t, e) {
      const s = e.stroke;
      s && (t.lineWidth = e.strokeWidth, t.lineCap = e.strokeLineCap, t.lineDashOffset = e.strokeDashOffset, t.lineJoin = e.strokeLineJoin, t.miterLimit = e.strokeMiterLimit, fs(s) ? s.gradientUnits === "percentage" || s.gradientTransform || s.patternTransform ? this._applyPatternForTransformedGradient(t, s) : (t.strokeStyle = s.toLive(t), this._applyPatternGradientTransform(t, s)) : t.strokeStyle = e.stroke);
    }
    _setFillStyles(t, e) {
      let { fill: s } = e;
      s && (fs(s) ? (t.fillStyle = s.toLive(t), this._applyPatternGradientTransform(t, s)) : t.fillStyle = s);
    }
    _setClippingProperties(t) {
      t.globalAlpha = 1, t.strokeStyle = "transparent", t.fillStyle = "#000000";
    }
    _setLineDash(t, e) {
      e && e.length !== 0 && t.setLineDash(e);
    }
    _setShadow(t) {
      if (!this.shadow) return;
      const e = this.shadow, s = this.canvas, i = this.getCanvasRetinaScaling(), [r, , , a] = (s == null ? void 0 : s.viewportTransform) || Te, o = r * i, h = a * i, c = e.nonScaling ? new M(1, 1) : this.getObjectScaling();
      t.shadowColor = e.color, t.shadowBlur = e.blur * rt.browserShadowBlurConstant * (o + h) * (c.x + c.y) / 4, t.shadowOffsetX = e.offsetX * o * c.x, t.shadowOffsetY = e.offsetY * h * c.y;
    }
    _removeShadow(t) {
      this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
    }
    _applyPatternGradientTransform(t, e) {
      if (!fs(e)) return {
        offsetX: 0,
        offsetY: 0
      };
      const s = e.gradientTransform || e.patternTransform, i = -this.width / 2 + e.offsetX || 0, r = -this.height / 2 + e.offsetY || 0;
      return e.gradientUnits === "percentage" ? t.transform(this.width, 0, 0, this.height, i, r) : t.transform(1, 0, 0, 1, i, r), s && t.transform(s[0], s[1], s[2], s[3], s[4], s[5]), {
        offsetX: i,
        offsetY: r
      };
    }
    _renderPaintInOrder(t) {
      this.paintFirst === ke ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t));
    }
    _render(t) {
    }
    _renderFill(t) {
      this.fill && (t.save(), this._setFillStyles(t, this), this.fillRule === "evenodd" ? t.fill("evenodd") : t.fill(), t.restore());
    }
    _renderStroke(t) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this.strokeUniform) {
          const e = this.getObjectScaling();
          t.scale(1 / e.x, 1 / e.y);
        }
        this._setLineDash(t, this.strokeDashArray), this._setStrokeStyles(t, this), t.stroke(), t.restore();
      }
    }
    _applyPatternForTransformedGradient(t, e) {
      var s;
      const i = this._limitCacheSize(this._getCacheCanvasDimensions()), r = this.getCanvasRetinaScaling(), a = i.x / this.scaleX / r, o = i.y / this.scaleY / r, h = Qe({
        width: Math.ceil(a),
        height: Math.ceil(o)
      }), c = h.getContext("2d");
      c && (c.beginPath(), c.moveTo(0, 0), c.lineTo(a, 0), c.lineTo(a, o), c.lineTo(0, o), c.closePath(), c.translate(a / 2, o / 2), c.scale(i.zoomX / this.scaleX / r, i.zoomY / this.scaleY / r), this._applyPatternGradientTransform(c, e), c.fillStyle = e.toLive(t), c.fill(), t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t.scale(r * this.scaleX / i.zoomX, r * this.scaleY / i.zoomY), t.strokeStyle = (s = c.createPattern(h, "no-repeat")) !== null && s !== void 0 ? s : "");
    }
    _findCenterFromElement() {
      return new M(this.left + this.width / 2, this.top + this.height / 2);
    }
    clone(t) {
      const e = this.toObject(t);
      return this.constructor.fromObject(e);
    }
    cloneAsImage(t) {
      const e = this.toCanvasElement(t);
      return new (B.getClass("image"))(e);
    }
    toCanvasElement() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const e = Zf(this), s = this.group, i = this.shadow, r = Math.abs, a = t.enableRetinaScaling ? ev() : 1, o = (t.multiplier || 1) * a, h = t.canvasProvider || ((S) => new cl(S, {
        enableRetinaScaling: false,
        renderOnAddRemove: false,
        skipOffscreen: false
      }));
      delete this.group, t.withoutTransform && yv(this), t.withoutShadow && (this.shadow = null), t.viewportTransform && fg(this, this.getViewportTransform()), this.setCoords();
      const c = ms(), u = this.getBoundingRect(), d = this.shadow, g = new M();
      if (d) {
        const S = d.blur, x = d.nonScaling ? new M(1, 1) : this.getObjectScaling();
        g.x = 2 * Math.round(r(d.offsetX) + S) * r(x.x), g.y = 2 * Math.round(r(d.offsetY) + S) * r(x.y);
      }
      const f = u.width + g.x, p = u.height + g.y;
      c.width = Math.ceil(f), c.height = Math.ceil(p);
      const v = h(c);
      t.format === "jpeg" && (v.backgroundColor = "#fff"), this.setPositionByOrigin(new M(v.width / 2, v.height / 2), q, q);
      const b = this.canvas;
      v._objects = [
        this
      ], this.set("canvas", v), this.setCoords();
      const _ = v.toCanvasElement(o || 1, t);
      return this.set("canvas", b), this.shadow = i, s && (this.group = s), this.set(e), this.setCoords(), v._objects = [], v.destroy(), _;
    }
    toDataURL() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return $f(this.toCanvasElement(t), t.format || "png", t.quality || 1);
    }
    toBlob() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return qf(this.toCanvasElement(t), t.format || "png", t.quality || 1);
    }
    isType() {
      for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
      return e.includes(this.constructor.type) || e.includes(this.type);
    }
    complexity() {
      return 1;
    }
    toJSON() {
      return this.toObject();
    }
    rotate(t) {
      const { centeredRotation: e, originX: s, originY: i } = this;
      if (e) {
        const { x: r, y: a } = this.getRelativeCenterPoint();
        this.originX = q, this.originY = q, this.left = r, this.top = a;
      }
      if (this.set("angle", t), e) {
        const { x: r, y: a } = this.translateToOriginPoint(this.getRelativeCenterPoint(), s, i);
        this.left = r, this.top = a, this.originX = s, this.originY = i;
      }
    }
    setOnGroup() {
    }
    _setupCompositeOperation(t) {
      this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation);
    }
    dispose() {
      gu.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && ai().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
    }
    animate(t, e) {
      return Object.entries(t).reduce((s, i) => {
        let [r, a] = i;
        return s[r] = this._animate(r, a, e), s;
      }, {});
    }
    _animate(t, e) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const i = t.split("."), r = this.constructor.colorProperties.includes(i[i.length - 1]), { abort: a, startValue: o, onChange: h, onComplete: c } = s, u = A(A({}, s), {}, {
        target: this,
        startValue: o ?? i.reduce((d, g) => d[g], this),
        endValue: e,
        abort: a == null ? void 0 : a.bind(this),
        onChange: (d, g, f) => {
          i.reduce((p, v, b) => (b === i.length - 1 && (p[v] = d), p[v]), this), h && h(d, g, f);
        },
        onComplete: (d, g, f) => {
          this.setCoords(), c && c(d, g, f);
        }
      });
      return r ? Dv(u) : ap(u);
    }
    isDescendantOf(t) {
      const { parent: e, group: s } = this;
      return e === t || s === t || !!e && e.isDescendantOf(t) || !!s && s !== e && s.isDescendantOf(t);
    }
    getAncestors() {
      const t = [];
      let e = this;
      do
        e = e.parent, e && t.push(e);
      while (e);
      return t;
    }
    findCommonAncestors(t) {
      if (this === t) return {
        fork: [],
        otherFork: [],
        common: [
          this,
          ...this.getAncestors()
        ]
      };
      const e = this.getAncestors(), s = t.getAncestors();
      if (e.length === 0 && s.length > 0 && this === s[s.length - 1]) return {
        fork: [],
        otherFork: [
          t,
          ...s.slice(0, s.length - 1)
        ],
        common: [
          this
        ]
      };
      for (let i, r = 0; r < e.length; r++) {
        if (i = e[r], i === t) return {
          fork: [
            this,
            ...e.slice(0, r)
          ],
          otherFork: [],
          common: e.slice(r)
        };
        for (let a = 0; a < s.length; a++) {
          if (this === s[a]) return {
            fork: [],
            otherFork: [
              t,
              ...s.slice(0, a)
            ],
            common: [
              this,
              ...e
            ]
          };
          if (i === s[a]) return {
            fork: [
              this,
              ...e.slice(0, r)
            ],
            otherFork: [
              t,
              ...s.slice(0, a)
            ],
            common: e.slice(r)
          };
        }
      }
      return {
        fork: [
          this,
          ...e
        ],
        otherFork: [
          t,
          ...s
        ],
        common: []
      };
    }
    hasCommonAncestors(t) {
      const e = this.findCommonAncestors(t);
      return e && !!e.common.length;
    }
    isInFrontOf(t) {
      if (this === t) return;
      const e = this.findCommonAncestors(t);
      if (e.fork.includes(t)) return true;
      if (e.otherFork.includes(this)) return false;
      const s = e.common[0] || this.canvas;
      if (!s) return;
      const i = e.fork.pop(), r = e.otherFork.pop(), a = s._objects.indexOf(i), o = s._objects.indexOf(r);
      return a > -1 && a > o;
    }
    toObject() {
      const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).concat(ql.customProperties, this.constructor.customProperties || []);
      let e;
      const s = rt.NUM_FRACTION_DIGITS, { clipPath: i, fill: r, stroke: a, shadow: o, strokeDashArray: h, left: c, top: u, originX: d, originY: g, width: f, height: p, strokeWidth: v, strokeLineCap: b, strokeDashOffset: _, strokeLineJoin: S, strokeUniform: x, strokeMiterLimit: C, scaleX: T, scaleY: O, angle: E, flipX: D, flipY: F, opacity: L, visible: N, backgroundColor: P, fillRule: I, paintFirst: W, globalCompositeOperation: j, skewX: R, skewY: st } = this;
      i && !i.excludeFromExport && (e = i.toObject(t.concat("inverted", "absolutePositioned")));
      const J = (Dt) => ft(Dt, s), _t = A(A({}, In(this, t)), {}, {
        type: this.constructor.type,
        version: ug,
        originX: d,
        originY: g,
        left: J(c),
        top: J(u),
        width: J(f),
        height: J(p),
        fill: Mp(r) ? r.toObject() : r,
        stroke: Mp(a) ? a.toObject() : a,
        strokeWidth: J(v),
        strokeDashArray: h && h.concat(),
        strokeLineCap: b,
        strokeDashOffset: _,
        strokeLineJoin: S,
        strokeUniform: x,
        strokeMiterLimit: J(C),
        scaleX: J(T),
        scaleY: J(O),
        angle: J(E),
        flipX: D,
        flipY: F,
        opacity: J(L),
        shadow: o && o.toObject(),
        visible: N,
        backgroundColor: P,
        fillRule: I,
        paintFirst: W,
        globalCompositeOperation: j,
        skewX: J(R),
        skewY: J(st)
      }, e ? {
        clipPath: e
      } : null);
      return this.includeDefaultValues ? _t : this._removeDefaultValues(_t);
    }
    toDatalessObject(t) {
      return this.toObject(t);
    }
    _removeDefaultValues(t) {
      const e = this.constructor.getDefaults(), s = Object.keys(e).length > 0 ? e : Object.getPrototypeOf(this);
      return Jf(t, (i, r) => {
        if (r === at || r === He || r === "type") return true;
        const a = s[r];
        return i !== a && !(Array.isArray(i) && Array.isArray(a) && i.length === 0 && a.length === 0);
      });
    }
    toString() {
      return "#<".concat(this.constructor.type, ">");
    }
    static _fromObject(t) {
      let e = yt(t, mw), s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { extraParam: i } = s, r = yt(s, vw);
      return ll(e, r).then((a) => i ? (delete a[i], new this(e[i], a)) : new this(a));
    }
    static fromObject(t, e) {
      return this._fromObject(t, e);
    }
  };
  k(hi, "stateProperties", rw), k(hi, "cacheProperties", Bi), k(hi, "ownDefaults", nw), k(hi, "type", "FabricObject"), k(hi, "colorProperties", [
    jt,
    ke,
    "backgroundColor"
  ]), k(hi, "customProperties", []), B.setClass(hi), B.setClass(hi, "object");
  const co = (n, t, e) => (s, i, r, a) => {
    const o = t(s, i, r, a);
    return o && _v(n, A(A({}, Sv(s, i, r, a)), e)), o;
  };
  function uo(n) {
    return (t, e, s, i) => {
      const { target: r, originX: a, originY: o } = e, h = r.getRelativeCenterPoint(), c = r.translateToOriginPoint(h, a, o), u = n(t, e, s, i);
      return r.setPositionByOrigin(c, e.originX, e.originY), u;
    };
  }
  const Gp = co(el, uo((n, t, e, s) => {
    const i = ep(t, t.originX, t.originY, e, s);
    if (It(t.originX) === It(q) || It(t.originX) === It(Tt) && i.x < 0 || It(t.originX) === It(at) && i.x > 0) {
      const { target: r } = t, a = r.strokeWidth / (r.strokeUniform ? r.scaleX : 1), o = xv(t) ? 2 : 1, h = r.width, c = Math.abs(i.x * o / r.scaleX) - a;
      return r.set("width", Math.max(c, 1)), h !== r.width;
    }
    return false;
  }));
  function bw(n, t, e, s, i) {
    s = s || {};
    const r = this.sizeX || s.cornerSize || i.cornerSize, a = this.sizeY || s.cornerSize || i.cornerSize, o = s.transparentCorners !== void 0 ? s.transparentCorners : i.transparentCorners, h = o ? ke : jt, c = !o && (s.cornerStrokeColor || i.cornerStrokeColor);
    let u, d = t, g = e;
    n.save(), n.fillStyle = s.cornerColor || i.cornerColor || "", n.strokeStyle = s.cornerStrokeColor || i.cornerStrokeColor || "", r > a ? (u = r, n.scale(1, a / r), g = e * r / a) : a > r ? (u = a, n.scale(r / a, 1), d = t * a / r) : u = r, n.beginPath(), n.arc(d, g, u / 2, 0, Wi, false), n[h](), c && n.stroke(), n.restore();
  }
  function yw(n, t, e, s, i) {
    s = s || {};
    const r = this.sizeX || s.cornerSize || i.cornerSize, a = this.sizeY || s.cornerSize || i.cornerSize, o = s.transparentCorners !== void 0 ? s.transparentCorners : i.transparentCorners, h = o ? ke : jt, c = !o && (s.cornerStrokeColor || i.cornerStrokeColor), u = r / 2, d = a / 2;
    n.save(), n.fillStyle = s.cornerColor || i.cornerColor || "", n.strokeStyle = s.cornerStrokeColor || i.cornerStrokeColor || "", n.translate(t, e);
    const g = i.getTotalAngle();
    n.rotate(Ct(g)), n["".concat(h, "Rect")](-u, -d, r, a), c && n.strokeRect(-u, -d, r, a), n.restore();
  }
  class Ss {
    constructor(t) {
      k(this, "visible", true), k(this, "actionName", pd), k(this, "angle", 0), k(this, "x", 0), k(this, "y", 0), k(this, "offsetX", 0), k(this, "offsetY", 0), k(this, "sizeX", 0), k(this, "sizeY", 0), k(this, "touchSizeX", 0), k(this, "touchSizeY", 0), k(this, "cursorStyle", "crosshair"), k(this, "withConnection", false), Object.assign(this, t);
    }
    shouldActivate(t, e, s, i) {
      var r;
      let { tl: a, tr: o, br: h, bl: c } = i;
      return ((r = e.canvas) === null || r === void 0 ? void 0 : r.getActiveObject()) === e && e.isControlVisible(t) && wt.isPointInPolygon(s, [
        a,
        o,
        h,
        c
      ]);
    }
    getActionHandler(t, e, s) {
      return this.actionHandler;
    }
    getMouseDownHandler(t, e, s) {
      return this.mouseDownHandler;
    }
    getMouseUpHandler(t, e, s) {
      return this.mouseUpHandler;
    }
    cursorStyleHandler(t, e, s) {
      return e.cursorStyle;
    }
    getActionName(t, e, s) {
      return e.actionName;
    }
    getVisibility(t, e) {
      var s, i;
      return (s = (i = t._controlsVisibility) === null || i === void 0 ? void 0 : i[e]) !== null && s !== void 0 ? s : this.visible;
    }
    setVisibility(t, e, s) {
      this.visible = t;
    }
    positionHandler(t, e, s, i) {
      return new M(this.x * t.x + this.offsetX, this.y * t.y + this.offsetY).transform(e);
    }
    calcCornerCoords(t, e, s, i, r, a) {
      const o = md([
        lo(s, i),
        Rn({
          angle: t
        }),
        vd((r ? this.touchSizeX : this.sizeX) || e, (r ? this.touchSizeY : this.sizeY) || e)
      ]);
      return {
        tl: new M(-0.5, -0.5).transform(o),
        tr: new M(0.5, -0.5).transform(o),
        br: new M(0.5, 0.5).transform(o),
        bl: new M(-0.5, 0.5).transform(o)
      };
    }
    render(t, e, s, i, r) {
      ((i = i || {}).cornerStyle || r.cornerStyle) === "circle" ? bw.call(this, t, e, s, i, r) : yw.call(this, t, e, s, i, r);
    }
  }
  const ww = (n, t, e) => e.lockRotation ? tp : t.cursorStyle, _w = co(iv, uo((n, t, e, s) => {
    let { target: i, ex: r, ey: a, theta: o, originX: h, originY: c } = t;
    const u = i.translateToOriginPoint(i.getRelativeCenterPoint(), h, c);
    if (Os(i, "lockRotation")) return false;
    const d = Math.atan2(a - u.y, r - u.x), g = Math.atan2(s - u.y, e - u.x);
    let f = oi(g - d + o);
    if (i.snapAngle && i.snapAngle > 0) {
      const v = i.snapAngle, b = i.snapThreshold || v, _ = Math.ceil(f / v) * v, S = Math.floor(f / v) * v;
      Math.abs(f - S) < b ? f = S : Math.abs(f - _) < b && (f = _);
    }
    f < 0 && (f = 360 + f), f %= 360;
    const p = i.angle !== f;
    return i.angle = f, p;
  }));
  function Ov(n, t) {
    const e = t.canvas, s = n[e.uniScaleKey];
    return e.uniformScaling && !s || !e.uniformScaling && s;
  }
  function Pv(n, t, e) {
    const s = Os(n, "lockScalingX"), i = Os(n, "lockScalingY");
    if (s && i || !t && (s || i) && e || s && t === "x" || i && t === "y") return true;
    const { width: r, height: a, strokeWidth: o } = n;
    return r === 0 && o === 0 && t !== "y" || a === 0 && o === 0 && t !== "x";
  }
  const xw = [
    "e",
    "se",
    "s",
    "sw",
    "w",
    "nw",
    "n",
    "ne",
    "e"
  ], _o = (n, t, e) => {
    const s = Ov(n, e);
    if (Pv(e, t.x !== 0 && t.y === 0 ? "x" : t.x === 0 && t.y !== 0 ? "y" : "", s)) return tp;
    const i = Cv(e, t);
    return "".concat(xw[i], "-resize");
  };
  function op(n, t, e, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    const r = t.target, a = i.by, o = Ov(n, r);
    let h, c, u, d, g, f;
    if (Pv(r, a, o)) return false;
    if (t.gestureScale) c = t.scaleX * t.gestureScale, u = t.scaleY * t.gestureScale;
    else {
      if (h = ep(t, t.originX, t.originY, e, s), g = a !== "y" ? Math.sign(h.x || t.signX || 1) : 1, f = a !== "x" ? Math.sign(h.y || t.signY || 1) : 1, t.signX || (t.signX = g), t.signY || (t.signY = f), Os(r, "lockScalingFlip") && (t.signX !== g || t.signY !== f)) return false;
      if (d = r._getTransformedDimensions(), o && !a) {
        const b = Math.abs(h.x) + Math.abs(h.y), { original: _ } = t, S = b / (Math.abs(d.x * _.scaleX / r.scaleX) + Math.abs(d.y * _.scaleY / r.scaleY));
        c = _.scaleX * S, u = _.scaleY * S;
      } else c = Math.abs(h.x * r.scaleX / d.x), u = Math.abs(h.y * r.scaleY / d.y);
      xv(t) && (c *= 2, u *= 2), t.signX !== g && a !== "y" && (t.originX = Pp(t.originX), c *= -1, t.signX = g), t.signY !== f && a !== "x" && (t.originY = Pp(t.originY), u *= -1, t.signY = f);
    }
    const p = r.scaleX, v = r.scaleY;
    return a ? (a === "x" && r.set(Me, c), a === "y" && r.set(Ke, u)) : (!Os(r, "lockScalingX") && r.set(Me, c), !Os(r, "lockScalingY") && r.set(Ke, u)), p !== r.scaleX || v !== r.scaleY;
  }
  const ml = co(fd, uo((n, t, e, s) => op(n, t, e, s))), Sw = co(fd, uo((n, t, e, s) => op(n, t, e, s, {
    by: "x"
  }))), Cw = co(fd, uo((n, t, e, s) => op(n, t, e, s, {
    by: "y"
  }))), Aw = [
    "target",
    "ex",
    "ey",
    "skewingSide"
  ], Vd = {
    x: {
      counterAxis: "y",
      scale: Me,
      skew: oo,
      lockSkewing: "lockSkewingX",
      origin: "originX",
      flip: "flipX"
    },
    y: {
      counterAxis: "x",
      scale: Ke,
      skew: ho,
      lockSkewing: "lockSkewingY",
      origin: "originY",
      flip: "flipY"
    }
  }, kw = [
    "ns",
    "nesw",
    "ew",
    "nwse"
  ], Tw = (n, t, e) => {
    if (t.x !== 0 && Os(e, "lockSkewingY") || t.y !== 0 && Os(e, "lockSkewingX")) return tp;
    const s = Cv(e, t) % 4;
    return "".concat(kw[s], "-resize");
  };
  function Lv(n, t, e, s, i) {
    const { target: r } = e, { counterAxis: a, origin: o, lockSkewing: h, skew: c, flip: u } = Vd[n];
    if (Os(r, h)) return false;
    const { origin: d, flip: g } = Vd[a], f = It(e[d]) * (r[g] ? -1 : 1), p = -Math.sign(f) * (r[u] ? -1 : 1), v = 0.5 * -((r[c] === 0 && ep(e, q, q, s, i)[n] > 0 || r[c] > 0 ? 1 : -1) * p) + 0.5;
    return co(rv, uo((b, _, S, x) => function(C, T, O) {
      let { target: E, ex: D, ey: F, skewingSide: L } = T, N = yt(T, Aw);
      const { skew: P } = Vd[C], I = O.subtract(new M(D, F)).divide(new M(E.scaleX, E.scaleY))[C], W = E[P], j = N[P], R = Math.tan(Ct(j)), st = C === "y" ? E._getTransformedDimensions({
        scaleX: 1,
        scaleY: 1,
        skewX: 0
      }).x : E._getTransformedDimensions({
        scaleX: 1,
        scaleY: 1
      }).y, J = 2 * I * L / Math.max(st, 1) + R, _t = oi(Math.atan(J));
      E.set(P, _t);
      const Dt = W !== E[P];
      if (Dt && C === "y") {
        const { skewX: se, scaleX: Ot } = E, dt = E._getTransformedDimensions({
          skewY: W
        }), ve = E._getTransformedDimensions(), vs = se !== 0 ? dt.x / ve.x : 1;
        vs !== 1 && E.set(Me, vs * Ot);
      }
      return Dt;
    }(n, _, new M(S, x))))(t, A(A({}, e), {}, {
      [o]: v,
      skewingSide: p
    }), s, i);
  }
  const Mw = (n, t, e, s) => Lv("x", n, t, e, s), Ew = (n, t, e, s) => Lv("y", n, t, e, s);
  function _d(n, t) {
    return n[t.canvas.altActionKey];
  }
  const vl = (n, t, e) => {
    const s = _d(n, e);
    return t.x === 0 ? s ? oo : Ke : t.y === 0 ? s ? ho : Me : "";
  }, Aa = (n, t, e) => _d(n, e) ? Tw(0, t, e) : _o(n, t, e), Xp = (n, t, e, s) => _d(n, t.target) ? Ew(n, t, e, s) : Sw(n, t, e, s), Up = (n, t, e, s) => _d(n, t.target) ? Mw(n, t, e, s) : Cw(n, t, e, s), Rv = () => ({
    ml: new Ss({
      x: -0.5,
      y: 0,
      cursorStyleHandler: Aa,
      actionHandler: Xp,
      getActionName: vl
    }),
    mr: new Ss({
      x: 0.5,
      y: 0,
      cursorStyleHandler: Aa,
      actionHandler: Xp,
      getActionName: vl
    }),
    mb: new Ss({
      x: 0,
      y: 0.5,
      cursorStyleHandler: Aa,
      actionHandler: Up,
      getActionName: vl
    }),
    mt: new Ss({
      x: 0,
      y: -0.5,
      cursorStyleHandler: Aa,
      actionHandler: Up,
      getActionName: vl
    }),
    tl: new Ss({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: _o,
      actionHandler: ml
    }),
    tr: new Ss({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: _o,
      actionHandler: ml
    }),
    bl: new Ss({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: _o,
      actionHandler: ml
    }),
    br: new Ss({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: _o,
      actionHandler: ml
    }),
    mtr: new Ss({
      x: 0,
      y: -0.5,
      actionHandler: _w,
      cursorStyleHandler: ww,
      offsetY: -40,
      withConnection: true,
      actionName: Uf
    })
  }), Dw = () => ({
    mr: new Ss({
      x: 0.5,
      y: 0,
      actionHandler: Gp,
      cursorStyleHandler: Aa,
      actionName: el
    }),
    ml: new Ss({
      x: -0.5,
      y: 0,
      actionHandler: Gp,
      cursorStyleHandler: Aa,
      actionName: el
    })
  }), Ow = () => A(A({}, Rv()), Dw());
  class il extends hi {
    static getDefaults() {
      return A(A({}, super.getDefaults()), il.ownDefaults);
    }
    constructor(t) {
      super(), Object.assign(this, this.constructor.createControls(), il.ownDefaults), this.setOptions(t);
    }
    static createControls() {
      return {
        controls: Rv()
      };
    }
    _updateCacheCanvas() {
      const t = this.canvas;
      if (this.noScaleCache && t && t._currentTransform) {
        const e = t._currentTransform, s = e.target, i = e.action;
        if (this === s && i && i.startsWith(pd)) return false;
      }
      return super._updateCacheCanvas();
    }
    getActiveControl() {
      const t = this.__corner;
      return t ? {
        key: t,
        control: this.controls[t],
        coord: this.oCoords[t]
      } : void 0;
    }
    findControl(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      if (!this.hasControls || !this.canvas) return;
      this.__corner = void 0;
      const s = Object.entries(this.oCoords);
      for (let i = s.length - 1; i >= 0; i--) {
        const [r, a] = s[i], o = this.controls[r];
        if (o.shouldActivate(r, this, t, e ? a.touchCorner : a.corner)) return this.__corner = r, {
          key: r,
          control: o,
          coord: this.oCoords[r]
        };
      }
    }
    calcOCoords() {
      const t = this.getViewportTransform(), e = this.getCenterPoint(), s = lo(e.x, e.y), i = Rn({
        angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
      }), r = Et(s, i), a = Et(t, r), o = Et(a, [
        1 / t[0],
        0,
        0,
        1 / t[3],
        0,
        0
      ]), h = this.group ? Dn(this.calcTransformMatrix()) : void 0;
      h && (h.scaleX = Math.abs(h.scaleX), h.scaleY = Math.abs(h.scaleY));
      const c = this._calculateCurrentDimensions(h), u = {};
      return this.forEachControl((d, g) => {
        const f = d.positionHandler(c, o, this, d);
        u[g] = Object.assign(f, this._calcCornerCoords(d, f));
      }), u;
    }
    _calcCornerCoords(t, e) {
      const s = this.getTotalAngle();
      return {
        corner: t.calcCornerCoords(s, this.cornerSize, e.x, e.y, false, this),
        touchCorner: t.calcCornerCoords(s, this.touchCornerSize, e.x, e.y, true, this)
      };
    }
    setCoords() {
      super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
    }
    forEachControl(t) {
      for (const e in this.controls) t(this.controls[e], e, this);
    }
    drawSelectionBackground(t) {
      if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
      t.save();
      const e = this.getRelativeCenterPoint(), s = this._calculateCurrentDimensions(), i = this.getViewportTransform();
      t.translate(e.x, e.y), t.scale(1 / i[0], 1 / i[3]), t.rotate(Ct(this.angle)), t.fillStyle = this.selectionBackgroundColor, t.fillRect(-s.x / 2, -s.y / 2, s.x, s.y), t.restore();
    }
    strokeBorders(t, e) {
      t.strokeRect(-e.x / 2, -e.y / 2, e.x, e.y);
    }
    _drawBorders(t, e) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const i = A({
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        borderDashArray: this.borderDashArray
      }, s);
      t.save(), t.strokeStyle = i.borderColor, this._setLineDash(t, i.borderDashArray), this.strokeBorders(t, e), i.hasControls && this.drawControlsConnectingLines(t, e), t.restore();
    }
    _renderControls(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const { hasBorders: s, hasControls: i } = this, r = A({
        hasBorders: s,
        hasControls: i
      }, e), a = this.getViewportTransform(), o = r.hasBorders, h = r.hasControls, c = Et(a, this.calcTransformMatrix()), u = Dn(c);
      t.save(), t.translate(u.translateX, u.translateY), t.lineWidth = this.borderScaleFactor, this.group === this.parent && (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (u.angle -= 180), t.rotate(Ct(this.group ? u.angle : this.angle)), o && this.drawBorders(t, u, e), h && this.drawControls(t, e), t.restore();
    }
    drawBorders(t, e, s) {
      let i;
      if (s && s.forActiveSelection || this.group) {
        const r = bd(this.width, this.height, hl(e)), a = this.isStrokeAccountedForInDimensions() ? Yf : (this.strokeUniform ? new M().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new M(e.scaleX, e.scaleY)).scalarMultiply(this.strokeWidth);
        i = r.add(a).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
      } else i = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
      this._drawBorders(t, i, s);
    }
    drawControlsConnectingLines(t, e) {
      let s = false;
      t.beginPath(), this.forEachControl((i, r) => {
        i.withConnection && i.getVisibility(this, r) && (s = true, t.moveTo(i.x * e.x, i.y * e.y), t.lineTo(i.x * e.x + i.offsetX, i.y * e.y + i.offsetY));
      }), s && t.stroke();
    }
    drawControls(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      t.save();
      const s = this.getCanvasRetinaScaling(), { cornerStrokeColor: i, cornerDashArray: r, cornerColor: a } = this, o = A({
        cornerStrokeColor: i,
        cornerDashArray: r,
        cornerColor: a
      }, e);
      t.setTransform(s, 0, 0, s, 0, 0), t.strokeStyle = t.fillStyle = o.cornerColor, this.transparentCorners || (t.strokeStyle = o.cornerStrokeColor), this._setLineDash(t, o.cornerDashArray), this.forEachControl((h, c) => {
        if (h.getVisibility(this, c)) {
          const u = this.oCoords[c];
          h.render(t, u.x, u.y, o, this);
        }
      }), t.restore();
    }
    isControlVisible(t) {
      return this.controls[t] && this.controls[t].getVisibility(this, t);
    }
    setControlVisible(t, e) {
      this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t] = e;
    }
    setControlsVisibility() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Object.entries(t).forEach((e) => {
        let [s, i] = e;
        return this.setControlVisible(s, i);
      });
    }
    clearContextTop(t) {
      if (!this.canvas) return;
      const e = this.canvas.contextTop;
      if (!e) return;
      const s = this.canvas.viewportTransform;
      e.save(), e.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this.transform(e);
      const i = this.width + 4, r = this.height + 4;
      return e.clearRect(-i / 2, -r / 2, i, r), t || e.restore(), e;
    }
    onDeselect(t) {
      return false;
    }
    onSelect(t) {
      return false;
    }
    shouldStartDragging(t) {
      return false;
    }
    onDragStart(t) {
      return false;
    }
    canDrop(t) {
      return false;
    }
    renderDragSourceEffect(t) {
    }
    renderDropTargetEffect(t) {
    }
  }
  function Iv(n, t) {
    return t.forEach((e) => {
      Object.getOwnPropertyNames(e.prototype).forEach((s) => {
        s !== "constructor" && Object.defineProperty(n.prototype, s, Object.getOwnPropertyDescriptor(e.prototype, s) || /* @__PURE__ */ Object.create(null));
      });
    }), n;
  }
  k(il, "ownDefaults", {
    noScaleCache: true,
    lockMovementX: false,
    lockMovementY: false,
    lockRotation: false,
    lockScalingX: false,
    lockScalingY: false,
    lockSkewingX: false,
    lockSkewingY: false,
    lockScalingFlip: false,
    cornerSize: 13,
    touchCornerSize: 24,
    transparentCorners: true,
    cornerColor: "rgb(178,204,255)",
    cornerStrokeColor: "",
    cornerStyle: "rect",
    cornerDashArray: null,
    hasControls: true,
    borderColor: "rgb(178,204,255)",
    borderDashArray: null,
    borderOpacityWhenMoving: 0.4,
    borderScaleFactor: 1,
    hasBorders: true,
    selectionBackgroundColor: "",
    selectable: true,
    evented: true,
    perPixelTargetFind: false,
    activeOn: "down",
    hoverCursor: null,
    moveCursor: null
  });
  class me extends il {
  }
  Iv(me, [
    Av
  ]), B.setClass(me), B.setClass(me, "object");
  const Fv = (n, t, e, s) => {
    const i = 2 * (s = Math.round(s)) + 1, { data: r } = n.getImageData(t - s, e - s, i, i);
    for (let a = 3; a < r.length; a += 4) if (r[a] > 0) return false;
    return true;
  };
  class jv {
    constructor(t) {
      this.options = t, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new M(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new M(1 / this.options.scaleX, 1 / this.options.scaleY) : new M(1, 1);
    }
    createSideVector(t, e) {
      const s = pu(t, e);
      return this.options.strokeUniform ? s.multiply(this.scale) : s;
    }
    projectOrthogonally(t, e, s) {
      return this.applySkew(t.add(this.calcOrthogonalProjection(t, e, s)));
    }
    isSkewed() {
      return this.options.skewX !== 0 || this.options.skewY !== 0;
    }
    applySkew(t) {
      const e = new M(t);
      return e.y += e.x * Math.tan(Ct(this.options.skewY)), e.x += e.y * Math.tan(Ct(this.options.skewX)), e;
    }
    scaleUnitVector(t, e) {
      return t.multiply(this.strokeUniformScalar).scalarMultiply(e);
    }
  }
  const Pw = new M();
  class Ua extends jv {
    static getOrthogonalRotationFactor(t, e) {
      const s = e ? vu(t, e) : Tv(t);
      return Math.abs(s) < kr ? -1 : 1;
    }
    constructor(t, e, s, i) {
      super(i), k(this, "AB", void 0), k(this, "AC", void 0), k(this, "alpha", void 0), k(this, "bisector", void 0), this.A = new M(t), this.B = new M(e), this.C = new M(s), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = vu(this.AB, this.AC), this.bisector = wd(ip(this.AB.eq(Pw) ? this.AC : this.AB, this.alpha / 2));
    }
    calcOrthogonalProjection(t, e) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude;
      const i = this.createSideVector(t, e), r = rp(i), a = Ua.getOrthogonalRotationFactor(r, this.bisector);
      return this.scaleUnitVector(r, s * a);
    }
    projectBevel() {
      const t = [];
      return (this.alpha % Wi == 0 ? [
        this.B
      ] : [
        this.B,
        this.C
      ]).forEach((e) => {
        t.push(this.projectOrthogonally(this.A, e)), t.push(this.projectOrthogonally(this.A, e, -this.strokeProjectionMagnitude));
      }), t;
    }
    projectMiter() {
      const t = [], e = Math.abs(this.alpha), s = 1 / Math.sin(e / 2), i = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s), r = this.options.strokeUniform ? mu(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
      return mu(i) / this.strokeProjectionMagnitude <= r && t.push(this.applySkew(this.A.add(i))), t.push(...this.projectBevel()), t;
    }
    projectRoundNoSkew(t, e) {
      const s = [], i = new M(Ua.getOrthogonalRotationFactor(this.bisector), Ua.getOrthogonalRotationFactor(new M(this.bisector.y, this.bisector.x)));
      return [
        new M(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),
        new M(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)
      ].forEach((r) => {
        mg(r, t, e) && s.push(this.A.add(r));
      }), s;
    }
    projectRoundWithSkew(t, e) {
      const s = [], { skewX: i, skewY: r, scaleX: a, scaleY: o, strokeUniform: h } = this.options, c = new M(Math.tan(Ct(i)), Math.tan(Ct(r))), u = this.strokeProjectionMagnitude, d = h ? u / o / Math.sqrt(1 / o ** 2 + 1 / a ** 2 * c.y ** 2) : u / Math.sqrt(1 + c.y ** 2), g = new M(Math.sqrt(Math.max(u ** 2 - d ** 2, 0)), d), f = h ? u / Math.sqrt(1 + c.x ** 2 * (1 / o) ** 2 / (1 / a + 1 / a * c.x * c.y) ** 2) : u / Math.sqrt(1 + c.x ** 2 / (1 + c.x * c.y) ** 2), p = new M(f, Math.sqrt(Math.max(u ** 2 - f ** 2, 0)));
      return [
        p,
        p.scalarMultiply(-1),
        g,
        g.scalarMultiply(-1)
      ].map((v) => this.applySkew(h ? v.multiply(this.strokeUniformScalar) : v)).forEach((v) => {
        mg(v, t, e) && s.push(this.applySkew(this.A).add(v));
      }), s;
    }
    projectRound() {
      const t = [];
      t.push(...this.projectBevel());
      const e = this.alpha % Wi == 0, s = this.applySkew(this.A), i = t[e ? 0 : 2].subtract(s), r = t[e ? 1 : 0].subtract(s), a = e ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), o = Xa(i, a) > 0, h = o ? i : r, c = o ? r : i;
      return this.isSkewed() ? t.push(...this.projectRoundWithSkew(h, c)) : t.push(...this.projectRoundNoSkew(h, c)), t;
    }
    projectPoints() {
      switch (this.options.strokeLineJoin) {
        case "miter":
          return this.projectMiter();
        case "round":
          return this.projectRound();
        default:
          return this.projectBevel();
      }
    }
    project() {
      return this.projectPoints().map((t) => ({
        originPoint: this.A,
        projectedPoint: t,
        angle: this.alpha,
        bisector: this.bisector
      }));
    }
  }
  class Yp extends jv {
    constructor(t, e, s) {
      super(s), this.A = new M(t), this.T = new M(e);
    }
    calcOrthogonalProjection(t, e) {
      let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude;
      const i = this.createSideVector(t, e);
      return this.scaleUnitVector(rp(i), s);
    }
    projectButt() {
      return [
        this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude),
        this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)
      ];
    }
    projectRound() {
      const t = [];
      if (!this.isSkewed() && this.A.eq(this.T)) {
        const e = new M(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
        t.push(this.applySkew(this.A.add(e)), this.applySkew(this.A.subtract(e)));
      } else t.push(...new Ua(this.A, this.T, this.T, this.options).projectRound());
      return t;
    }
    projectSquare() {
      const t = [];
      if (this.A.eq(this.T)) {
        const e = new M(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
        t.push(this.A.add(e), this.A.subtract(e));
      } else {
        const e = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), s = this.scaleUnitVector(wd(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), i = this.A.add(s);
        t.push(i.add(e), i.subtract(e));
      }
      return t.map((e) => this.applySkew(e));
    }
    projectPoints() {
      switch (this.options.strokeLineCap) {
        case "round":
          return this.projectRound();
        case "square":
          return this.projectSquare();
        default:
          return this.projectButt();
      }
    }
    project() {
      return this.projectPoints().map((t) => ({
        originPoint: this.A,
        projectedPoint: t
      }));
    }
  }
  const Nv = function(n, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const s = [];
    if (n.length === 0) return s;
    const i = n.reduce((r, a) => (r[r.length - 1].eq(a) || r.push(new M(a)), r), [
      new M(n[0])
    ]);
    if (i.length === 1) e = true;
    else if (!e) {
      const r = i[0], a = ((o, h) => {
        for (let c = o.length - 1; c >= 0; c--) if (h(o[c], c, o)) return c;
        return -1;
      })(i, (o) => !o.eq(r));
      i.splice(a + 1);
    }
    return i.forEach((r, a, o) => {
      let h, c;
      a === 0 ? (c = o[1], h = e ? r : o[o.length - 1]) : a === o.length - 1 ? (h = o[a - 1], c = e ? r : o[0]) : (h = o[a - 1], c = o[a + 1]), e && o.length === 1 ? s.push(...new Yp(r, r, t).project()) : !e || a !== 0 && a !== o.length - 1 ? s.push(...new Ua(r, h, c, t).project()) : s.push(...new Yp(r, a === 0 ? c : h, t).project());
    }), s;
  }, hp = (n) => {
    const t = {};
    return Object.keys(n).forEach((e) => {
      t[e] = {}, Object.keys(n[e]).forEach((s) => {
        t[e][s] = A({}, n[e][s]);
      });
    }), t;
  }, Wv = (n) => n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), xd = (n) => {
    const t = [];
    for (let e, s = 0; s < n.length; s++) (e = Lw(n, s)) !== false && t.push(e);
    return t;
  }, Lw = (n, t) => {
    const e = n.charCodeAt(t);
    if (isNaN(e)) return "";
    if (e < 55296 || e > 57343) return n.charAt(t);
    if (55296 <= e && e <= 56319) {
      if (n.length <= t + 1) throw "High surrogate without following low surrogate";
      const i = n.charCodeAt(t + 1);
      if (56320 > i || i > 57343) throw "High surrogate without following low surrogate";
      return n.charAt(t) + n.charAt(t + 1);
    }
    if (t === 0) throw "Low surrogate without preceding high surrogate";
    const s = n.charCodeAt(t - 1);
    if (55296 > s || s > 56319) throw "Low surrogate without preceding high surrogate";
    return false;
  };
  var Rw = Object.freeze({
    __proto__: null,
    capitalize: function(n) {
      let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return "".concat(n.charAt(0).toUpperCase()).concat(t ? n.slice(1) : n.slice(1).toLowerCase());
    },
    escapeXml: Wv,
    graphemeSplit: xd
  });
  const Sd = function(n, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return n.fill !== t.fill || n.stroke !== t.stroke || n.strokeWidth !== t.strokeWidth || n.fontSize !== t.fontSize || n.fontFamily !== t.fontFamily || n.fontWeight !== t.fontWeight || n.fontStyle !== t.fontStyle || n.textBackgroundColor !== t.textBackgroundColor || n.deltaY !== t.deltaY || e && (n.overline !== t.overline || n.underline !== t.underline || n.linethrough !== t.linethrough);
  }, Bv = (n, t) => {
    const e = t.split(`
`), s = [];
    let i = -1, r = {};
    n = hp(n);
    for (let a = 0; a < e.length; a++) {
      const o = xd(e[a]);
      if (n[a]) for (let h = 0; h < o.length; h++) {
        i++;
        const c = n[a][h];
        c && Object.keys(c).length > 0 && (Sd(r, c, true) ? s.push({
          start: i,
          end: i + 1,
          style: c
        }) : s[s.length - 1].end++), r = c || {};
      }
      else i += o.length, r = {};
    }
    return s;
  }, Hv = (n, t) => {
    if (!Array.isArray(n)) return hp(n);
    const e = t.split(Xf), s = {};
    let i = -1, r = 0;
    for (let a = 0; a < e.length; a++) {
      const o = xd(e[a]);
      for (let h = 0; h < o.length; h++) i++, n[r] && n[r].start <= i && i < n[r].end && (s[a] = s[a] || {}, s[a][h] = A({}, n[r].style), i === n[r].end - 1 && r++);
    }
    return s;
  }, Pr = [
    "display",
    "transform",
    jt,
    "fill-opacity",
    "fill-rule",
    "opacity",
    ke,
    "stroke-dasharray",
    "stroke-linecap",
    "stroke-dashoffset",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "id",
    "paint-order",
    "vector-effect",
    "instantiated_by_use",
    "clip-path"
  ];
  function $p(n, t) {
    const e = n.nodeName, s = n.getAttribute("class"), i = n.getAttribute("id"), r = "(?![a-zA-Z\\-]+)";
    let a;
    if (a = new RegExp("^" + e, "i"), t = t.replace(a, ""), i && t.length && (a = new RegExp("#" + i + r, "i"), t = t.replace(a, "")), s && t.length) {
      const o = s.split(" ");
      for (let h = o.length; h--; ) a = new RegExp("\\." + o[h] + r, "i"), t = t.replace(a, "");
    }
    return t.length === 0;
  }
  function Iw(n, t) {
    let e = true;
    const s = $p(n, t.pop());
    return s && t.length && (e = function(i, r) {
      let a, o = true;
      for (; i.parentElement && i.parentElement.nodeType === 1 && r.length; ) o && (a = r.pop()), o = $p(i = i.parentElement, a);
      return r.length === 0;
    }(n, t)), s && e && t.length === 0;
  }
  const Fw = (n) => {
    var t;
    return (t = tw[n]) !== null && t !== void 0 ? t : n;
  }, jw = new RegExp("(".concat(Ds, ")"), "gi"), Nw = (n) => n.replace(jw, " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " ");
  var qp, Kp, Qp, Jp, Zp, tm, em;
  const Ce = "(".concat(Ds, ")"), Ww = String.raw(qp || (qp = Or([
    "(skewX)(",
    ")"
  ], [
    "(skewX)\\(",
    "\\)"
  ])), Ce), Bw = String.raw(Kp || (Kp = Or([
    "(skewY)(",
    ")"
  ], [
    "(skewY)\\(",
    "\\)"
  ])), Ce), Hw = String.raw(Qp || (Qp = Or([
    "(rotate)(",
    "(?: ",
    " ",
    ")?)"
  ], [
    "(rotate)\\(",
    "(?: ",
    " ",
    ")?\\)"
  ])), Ce, Ce, Ce), zw = String.raw(Jp || (Jp = Or([
    "(scale)(",
    "(?: ",
    ")?)"
  ], [
    "(scale)\\(",
    "(?: ",
    ")?\\)"
  ])), Ce, Ce), Vw = String.raw(Zp || (Zp = Or([
    "(translate)(",
    "(?: ",
    ")?)"
  ], [
    "(translate)\\(",
    "(?: ",
    ")?\\)"
  ])), Ce, Ce), Gw = String.raw(tm || (tm = Or([
    "(matrix)(",
    " ",
    " ",
    " ",
    " ",
    " ",
    ")"
  ], [
    "(matrix)\\(",
    " ",
    " ",
    " ",
    " ",
    " ",
    "\\)"
  ])), Ce, Ce, Ce, Ce, Ce, Ce), lp = "(?:".concat(Gw, "|").concat(Vw, "|").concat(Hw, "|").concat(zw, "|").concat(Ww, "|").concat(Bw, ")"), Xw = "(?:".concat(lp, "*)"), Uw = String.raw(em || (em = Or([
    "^s*(?:",
    "?)s*$"
  ], [
    "^\\s*(?:",
    "?)\\s*$"
  ])), Xw), Yw = new RegExp(Uw), $w = new RegExp(lp), qw = new RegExp(lp, "g");
  function bu(n) {
    const t = [];
    if (!(n = Nw(n).replace(/\s*([()])\s*/gi, "$1")) || n && !Yw.test(n)) return [
      ...Te
    ];
    for (const e of n.matchAll(qw)) {
      const s = $w.exec(e[0]);
      if (!s) continue;
      let i = Te;
      const r = s.filter((p) => !!p), [, a, ...o] = r, [h, c, u, d, g, f] = o.map((p) => parseFloat(p));
      switch (a) {
        case "translate":
          i = lo(h, c);
          break;
        case Uf:
          i = Rn({
            angle: h
          }, {
            x: c,
            y: u
          });
          break;
        case pd:
          i = vd(h, c);
          break;
        case oo:
          i = Kf(h);
          break;
        case ho:
          i = Qf(h);
          break;
        case "matrix":
          i = [
            h,
            c,
            u,
            d,
            g,
            f
          ];
      }
      t.push(i);
    }
    return md(t);
  }
  function Kw(n, t, e, s) {
    const i = Array.isArray(t);
    let r, a = t;
    if (n !== jt && n !== ke || t !== Ae) {
      if (n === "strokeUniform") return t === "non-scaling-stroke";
      if (n === "strokeDashArray") a = t === Ae ? null : t.replace(/,/g, " ").split(/\s+/).map(parseFloat);
      else if (n === "transformMatrix") a = e && e.transformMatrix ? Et(e.transformMatrix, bu(t)) : bu(t);
      else if (n === "visible") a = t !== Ae && t !== "hidden", e && e.visible === false && (a = false);
      else if (n === "opacity") a = parseFloat(t), e && e.opacity !== void 0 && (a *= e.opacity);
      else if (n === "textAnchor") a = t === "start" ? at : t === "end" ? Tt : q;
      else if (n === "charSpacing") r = xe(t, s) / s * 1e3;
      else if (n === "paintFirst") {
        const o = t.indexOf(jt), h = t.indexOf(ke);
        a = jt, (o > -1 && h > -1 && h < o || o === -1 && h > -1) && (a = ke);
      } else {
        if (n === "href" || n === "xlink:href" || n === "font" || n === "id") return t;
        if (n === "imageSmoothing") return t === "optimizeQuality";
        r = i ? t.map(xe) : xe(t, s);
      }
    } else a = "";
    return !i && isNaN(r) ? a : r;
  }
  function Qw(n, t) {
    const e = n.match(Zy);
    if (!e) return;
    const s = e[1], i = e[3], r = e[4], a = e[5], o = e[6];
    s && (t.fontStyle = s), i && (t.fontWeight = isNaN(parseFloat(i)) ? i : parseFloat(i)), r && (t.fontSize = xe(r)), o && (t.fontFamily = o), a && (t.lineHeight = a === "normal" ? 1 : a);
  }
  function bg(n, t) {
    n.replace(/;\s*$/, "").split(";").forEach((e) => {
      if (!e) return;
      const [s, i] = e.split(":");
      t[s.trim().toLowerCase()] = i.trim();
    });
  }
  function Jw(n) {
    const t = {}, e = n.getAttribute("style");
    return e && (typeof e == "string" ? bg(e, t) : function(s, i) {
      Object.entries(s).forEach((r) => {
        let [a, o] = r;
        o !== void 0 && (i[a.toLowerCase()] = o);
      });
    }(e, t)), t;
  }
  const Zw = {
    stroke: "strokeOpacity",
    fill: "fillOpacity"
  };
  function Hi(n, t, e) {
    if (!n) return {};
    let s, i = {}, r = Gf;
    n.parentNode && Np.test(n.parentNode.nodeName) && (i = Hi(n.parentElement, t, e), i.fontSize && (s = r = xe(i.fontSize)));
    const a = A(A(A({}, t.reduce((c, u) => {
      const d = n.getAttribute(u);
      return d && (c[u] = d), c;
    }, {})), function(c) {
      let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = {};
      for (const g in u) Iw(c, g.split(" ")) && (d = A(A({}, d), u[g]));
      return d;
    }(n, e)), Jw(n));
    a[Bd] && n.setAttribute(Bd, a[Bd]), a[Wd] && (s = xe(a[Wd], r), a[Wd] = "".concat(s));
    const o = {};
    for (const c in a) {
      const u = Fw(c), d = Kw(u, a[c], i, s);
      o[u] = d;
    }
    o && o.font && Qw(o.font, o);
    const h = A(A({}, i), o);
    return Np.test(n.nodeName) ? h : function(c) {
      const u = me.getDefaults();
      return Object.entries(Zw).forEach((d) => {
        let [g, f] = d;
        if (c[f] === void 0 || c[g] === "") return;
        if (c[g] === void 0) {
          if (!u[g]) return;
          c[g] = u[g];
        }
        if (c[g].indexOf("url(") === 0) return;
        const p = new ht(c[g]);
        c[g] = p.setAlpha(ft(p.getAlpha() * c[f], 2)).toRgba();
      }), c;
    }(h);
  }
  const t_ = [
    "left",
    "top",
    "width",
    "height",
    "visible"
  ], zv = [
    "rx",
    "ry"
  ];
  class Js extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), Js.ownDefaults);
    }
    constructor(t) {
      super(), Object.assign(this, Js.ownDefaults), this.setOptions(t), this._initRxRy();
    }
    _initRxRy() {
      const { rx: t, ry: e } = this;
      t && !e ? this.ry = t : e && !t && (this.rx = e);
    }
    _render(t) {
      const { width: e, height: s } = this, i = -e / 2, r = -s / 2, a = this.rx ? Math.min(this.rx, e / 2) : 0, o = this.ry ? Math.min(this.ry, s / 2) : 0, h = a !== 0 || o !== 0;
      t.beginPath(), t.moveTo(i + a, r), t.lineTo(i + e - a, r), h && t.bezierCurveTo(i + e - Vi * a, r, i + e, r + Vi * o, i + e, r + o), t.lineTo(i + e, r + s - o), h && t.bezierCurveTo(i + e, r + s - Vi * o, i + e - Vi * a, r + s, i + e - a, r + s), t.lineTo(i + a, r + s), h && t.bezierCurveTo(i + Vi * a, r + s, i, r + s - Vi * o, i, r + s - o), t.lineTo(i, r + o), h && t.bezierCurveTo(i, r + Vi * o, i + Vi * a, r, i + a, r), t.closePath(), this._renderPaintInOrder(t);
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return super.toObject([
        ...zv,
        ...t
      ]);
    }
    _toSVG() {
      const { width: t, height: e, rx: s, ry: i } = this;
      return [
        "<rect ",
        "COMMON_PARTS",
        'x="'.concat(-t / 2, '" y="').concat(-e / 2, '" rx="').concat(s, '" ry="').concat(i, '" width="').concat(t, '" height="').concat(e, `" />
`)
      ];
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, this.ATTRIBUTE_NAMES, s), { left: r = 0, top: a = 0, width: o = 0, height: h = 0, visible: c = true } = i, u = yt(i, t_);
      return new this(A(A(A({}, e), u), {}, {
        left: r,
        top: a,
        width: o,
        height: h,
        visible: !!(c && o && h)
      }));
    }
  }
  k(Js, "type", "Rect"), k(Js, "cacheProperties", [
    ...Bi,
    ...zv
  ]), k(Js, "ownDefaults", {
    rx: 0,
    ry: 0
  }), k(Js, "ATTRIBUTE_NAMES", [
    ...Pr,
    "x",
    "y",
    "rx",
    "ry",
    "width",
    "height"
  ]), B.setClass(Js), B.setSVGClass(Js);
  const Ii = "initialization", yu = "added", cp = "removed", wu = "imperative", Vv = (n, t) => {
    const { strokeUniform: e, strokeWidth: s, width: i, height: r, group: a } = t, o = a && a !== n ? ul(a.calcTransformMatrix(), n.calcTransformMatrix()) : null, h = o ? t.getRelativeCenterPoint().transform(o) : t.getRelativeCenterPoint(), c = !t.isStrokeAccountedForInDimensions(), u = e && c ? wv(new M(s, s), void 0, n.calcTransformMatrix()) : Yf, d = !e && c ? s : 0, g = bd(i + d, r + d, md([
      o,
      t.calcOwnMatrix()
    ], true)).add(u).scalarDivide(2);
    return [
      h.subtract(g),
      h.add(g)
    ];
  };
  class Cd {
    calcLayoutResult(t, e) {
      if (this.shouldPerformLayout(t)) return this.calcBoundingBox(e, t);
    }
    shouldPerformLayout(t) {
      let { type: e, prevStrategy: s, strategy: i } = t;
      return e === Ii || e === wu || !!s && i !== s;
    }
    shouldLayoutClipPath(t) {
      let { type: e, target: { clipPath: s } } = t;
      return e !== Ii && s && !s.absolutePositioned;
    }
    getInitialSize(t, e) {
      return e.size;
    }
    calcBoundingBox(t, e) {
      const { type: s, target: i } = e;
      if (s === wu && e.overrides) return e.overrides;
      if (t.length === 0) return;
      const { left: r, top: a, width: o, height: h } = ni(t.map((d) => Vv(i, d)).reduce((d, g) => d.concat(g), [])), c = new M(o, h), u = new M(r, a).add(c.scalarDivide(2));
      if (s === Ii) {
        const d = this.getInitialSize(e, {
          size: c,
          center: u
        });
        return {
          center: u,
          relativeCorrection: new M(0, 0),
          size: d
        };
      }
      return {
        center: u.transform(i.calcOwnMatrix()),
        size: c
      };
    }
  }
  k(Cd, "type", "strategy");
  class yg extends Cd {
    shouldPerformLayout(t) {
      return true;
    }
  }
  k(yg, "type", "fit-content"), B.setClass(yg);
  const e_ = [
    "strategy"
  ], s_ = [
    "target",
    "strategy",
    "bubbles",
    "prevStrategy"
  ], Gv = "layoutManager";
  class rl {
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new yg();
      k(this, "strategy", void 0), this.strategy = t, this._subscriptions = /* @__PURE__ */ new Map();
    }
    performLayout(t) {
      const e = A(A({
        bubbles: true,
        strategy: this.strategy
      }, t), {}, {
        prevStrategy: this._prevLayoutStrategy,
        stopPropagation() {
          this.bubbles = false;
        }
      });
      this.onBeforeLayout(e);
      const s = this.getLayoutResult(e);
      s && this.commitLayout(e, s), this.onAfterLayout(e, s), this._prevLayoutStrategy = e.strategy;
    }
    attachHandlers(t, e) {
      const { target: s } = e;
      return [
        du,
        sv,
        el,
        iv,
        fd,
        rv,
        uu,
        Gy,
        Xy
      ].map((i) => t.on(i, (r) => this.performLayout(i === du ? {
        type: "object_modified",
        trigger: i,
        e: r,
        target: s
      } : {
        type: "object_modifying",
        trigger: i,
        e: r,
        target: s
      })));
    }
    subscribe(t, e) {
      this.unsubscribe(t, e);
      const s = this.attachHandlers(t, e);
      this._subscriptions.set(t, s);
    }
    unsubscribe(t, e) {
      (this._subscriptions.get(t) || []).forEach((s) => s()), this._subscriptions.delete(t);
    }
    unsubscribeTargets(t) {
      t.targets.forEach((e) => this.unsubscribe(e, t));
    }
    subscribeTargets(t) {
      t.targets.forEach((e) => this.subscribe(e, t));
    }
    onBeforeLayout(t) {
      const { target: e, type: s } = t, { canvas: i } = e;
      if (s === Ii || s === yu ? this.subscribeTargets(t) : s === cp && this.unsubscribeTargets(t), e.fire("layout:before", {
        context: t
      }), i && i.fire("object:layout:before", {
        target: e,
        context: t
      }), s === wu && t.deep) {
        const r = yt(t, e_);
        e.forEachObject((a) => a.layoutManager && a.layoutManager.performLayout(A(A({}, r), {}, {
          bubbles: false,
          target: a
        })));
      }
    }
    getLayoutResult(t) {
      const { target: e, strategy: s, type: i } = t, r = s.calcLayoutResult(t, e.getObjects());
      if (!r) return;
      const a = i === Ii ? new M() : e.getRelativeCenterPoint(), { center: o, correction: h = new M(), relativeCorrection: c = new M() } = r, u = a.subtract(o).add(h).transform(i === Ii ? Te : We(e.calcOwnMatrix()), true).add(c);
      return {
        result: r,
        prevCenter: a,
        nextCenter: o,
        offset: u
      };
    }
    commitLayout(t, e) {
      const { target: s } = t, { result: { size: i }, nextCenter: r } = e;
      var a, o;
      s.set({
        width: i.x,
        height: i.y
      }), this.layoutObjects(t, e), t.type === Ii ? s.set({
        left: (a = t.x) !== null && a !== void 0 ? a : r.x + i.x * It(s.originX),
        top: (o = t.y) !== null && o !== void 0 ? o : r.y + i.y * It(s.originY)
      }) : (s.setPositionByOrigin(r, q, q), s.setCoords(), s.set("dirty", true));
    }
    layoutObjects(t, e) {
      const { target: s } = t;
      s.forEachObject((i) => {
        i.group === s && this.layoutObject(t, e, i);
      }), t.strategy.shouldLayoutClipPath(t) && this.layoutObject(t, e, s.clipPath);
    }
    layoutObject(t, e, s) {
      let { offset: i } = e;
      s.set({
        left: s.left + i.x,
        top: s.top + i.y
      });
    }
    onAfterLayout(t, e) {
      const { target: s, strategy: i, bubbles: r, prevStrategy: a } = t, o = yt(t, s_), { canvas: h } = s;
      s.fire("layout:after", {
        context: t,
        result: e
      }), h && h.fire("object:layout:after", {
        context: t,
        result: e,
        target: s
      });
      const c = s.parent;
      r && c != null && c.layoutManager && ((o.path || (o.path = [])).push(s), c.layoutManager.performLayout(A(A({}, o), {}, {
        target: c
      }))), s.set("dirty", true);
    }
    dispose() {
      const { _subscriptions: t } = this;
      t.forEach((e) => e.forEach((s) => s())), t.clear();
    }
    toObject() {
      return {
        type: Gv,
        strategy: this.strategy.constructor.type
      };
    }
    toJSON() {
      return this.toObject();
    }
  }
  B.setClass(rl, Gv);
  const i_ = [
    "type",
    "objects",
    "layoutManager"
  ];
  class r_ extends rl {
    performLayout() {
    }
  }
  class ps extends nv(me) {
    static getDefaults() {
      return A(A({}, super.getDefaults()), ps.ownDefaults);
    }
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(), k(this, "_activeObjects", []), k(this, "__objectSelectionTracker", void 0), k(this, "__objectSelectionDisposer", void 0), Object.assign(this, ps.ownDefaults), this.setOptions(e), this.groupInit(t, e);
    }
    groupInit(t, e) {
      var s;
      this._objects = [
        ...t
      ], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, true), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, false), this.forEachObject((i) => {
        this.enterGroup(i, false);
      }), this.layoutManager = (s = e.layoutManager) !== null && s !== void 0 ? s : new rl(), this.layoutManager.performLayout({
        type: Ii,
        target: this,
        targets: [
          ...t
        ],
        x: e.left,
        y: e.top
      });
    }
    canEnterGroup(t) {
      return t === this || this.isDescendantOf(t) ? (Ni("error", "Group: circular object trees are not supported, this call has no effect"), false) : this._objects.indexOf(t) === -1 || (Ni("error", "Group: duplicate objects are not supported inside group, this call has no effect"), false);
    }
    _filterObjectsBeforeEnteringGroup(t) {
      return t.filter((e, s, i) => this.canEnterGroup(e) && i.indexOf(e) === s);
    }
    add() {
      for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
      const i = this._filterObjectsBeforeEnteringGroup(e), r = super.add(...i);
      return this._onAfterObjectsChange(yu, i), r;
    }
    insertAt(t) {
      for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
      const r = this._filterObjectsBeforeEnteringGroup(s), a = super.insertAt(t, ...r);
      return this._onAfterObjectsChange(yu, r), a;
    }
    remove() {
      const t = super.remove(...arguments);
      return this._onAfterObjectsChange(cp, t), t;
    }
    _onObjectAdded(t) {
      this.enterGroup(t, true), this.fire("object:added", {
        target: t
      }), t.fire("added", {
        target: this
      });
    }
    _onObjectRemoved(t, e) {
      this.exitGroup(t, e), this.fire("object:removed", {
        target: t
      }), t.fire("removed", {
        target: this
      });
    }
    _onAfterObjectsChange(t, e) {
      this.layoutManager.performLayout({
        type: t,
        targets: e,
        target: this
      });
    }
    _onStackOrderChanged() {
      this._set("dirty", true);
    }
    _set(t, e) {
      const s = this[t];
      return super._set(t, e), t === "canvas" && s !== e && (this._objects || []).forEach((i) => {
        i._set(t, e);
      }), this;
    }
    _shouldSetNestedCoords() {
      return this.subTargetCheck;
    }
    removeAll() {
      return this._activeObjects = [], this.remove(...this._objects);
    }
    __objectSelectionMonitor(t, e) {
      let { target: s } = e;
      const i = this._activeObjects;
      if (t) i.push(s), this._set("dirty", true);
      else if (i.length > 0) {
        const r = i.indexOf(s);
        r > -1 && (i.splice(r, 1), this._set("dirty", true));
      }
    }
    _watchObject(t, e) {
      t && this._watchObject(false, e), t ? (e.on("selected", this.__objectSelectionTracker), e.on("deselected", this.__objectSelectionDisposer)) : (e.off("selected", this.__objectSelectionTracker), e.off("deselected", this.__objectSelectionDisposer));
    }
    enterGroup(t, e) {
      t.group && t.group.remove(t), t._set("parent", this), this._enterGroup(t, e);
    }
    _enterGroup(t, e) {
      e && ro(t, Et(We(this.calcTransformMatrix()), t.calcTransformMatrix())), this._shouldSetNestedCoords() && t.setCoords(), t._set("group", this), t._set("canvas", this.canvas), this._watchObject(true, t);
      const s = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
      s && (s === t || t.isDescendantOf(s)) && this._activeObjects.push(t);
    }
    exitGroup(t, e) {
      this._exitGroup(t, e), t._set("parent", void 0), t._set("canvas", void 0);
    }
    _exitGroup(t, e) {
      t._set("group", void 0), e || (ro(t, Et(this.calcTransformMatrix(), t.calcTransformMatrix())), t.setCoords()), this._watchObject(false, t);
      const s = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t) : -1;
      s > -1 && this._activeObjects.splice(s, 1);
    }
    shouldCache() {
      const t = me.prototype.shouldCache.call(this);
      if (t) {
        for (let e = 0; e < this._objects.length; e++) if (this._objects[e].willDrawShadow()) return this.ownCaching = false, false;
      }
      return t;
    }
    willDrawShadow() {
      if (super.willDrawShadow()) return true;
      for (let t = 0; t < this._objects.length; t++) if (this._objects[t].willDrawShadow()) return true;
      return false;
    }
    isOnACache() {
      return this.ownCaching || !!this.parent && this.parent.isOnACache();
    }
    drawObject(t, e, s) {
      this._renderBackground(t);
      for (let r = 0; r < this._objects.length; r++) {
        var i;
        const a = this._objects[r];
        (i = this.canvas) !== null && i !== void 0 && i.preserveObjectStacking && a.group !== this ? (t.save(), t.transform(...We(this.calcTransformMatrix())), a.render(t), t.restore()) : a.group === this && a.render(t);
      }
      this._drawClipPath(t, this.clipPath, s);
    }
    setCoords() {
      super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject((t) => t.setCoords());
    }
    triggerLayout() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.layoutManager.performLayout(A({
        target: this,
        type: wu
      }, t));
    }
    render(t) {
      this._transformDone = true, super.render(t), this._transformDone = false;
    }
    __serializeObjects(t, e) {
      const s = this.includeDefaultValues;
      return this._objects.filter(function(i) {
        return !i.excludeFromExport;
      }).map(function(i) {
        const r = i.includeDefaultValues;
        i.includeDefaultValues = s;
        const a = i[t || "toObject"](e);
        return i.includeDefaultValues = r, a;
      });
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const e = this.layoutManager.toObject();
      return A(A(A({}, super.toObject([
        "subTargetCheck",
        "interactive",
        ...t
      ])), e.strategy !== "fit-content" || this.includeDefaultValues ? {
        layoutManager: e
      } : {}), {}, {
        objects: this.__serializeObjects("toObject", t)
      });
    }
    toString() {
      return "#<Group: (".concat(this.complexity(), ")>");
    }
    dispose() {
      this.layoutManager.unsubscribeTargets({
        targets: this.getObjects(),
        target: this
      }), this._activeObjects = [], this.forEachObject((t) => {
        this._watchObject(false, t), t.dispose();
      }), super.dispose();
    }
    _createSVGBgRect(t) {
      if (!this.backgroundColor) return "";
      const e = Js.prototype._toSVG.call(this), s = e.indexOf("COMMON_PARTS");
      e[s] = 'for="group" ';
      const i = e.join("");
      return t ? t(i) : i;
    }
    _toSVG(t) {
      const e = [
        "<g ",
        "COMMON_PARTS",
        ` >
`
      ], s = this._createSVGBgRect(t);
      s && e.push("		", s);
      for (let i = 0; i < this._objects.length; i++) e.push("		", this._objects[i].toSVG(t));
      return e.push(`</g>
`), e;
    }
    getSvgStyles() {
      const t = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: ".concat(this.opacity, ";") : "", e = this.visible ? "" : " visibility: hidden;";
      return [
        t,
        this.getSvgFilter(),
        e
      ].join("");
    }
    toClipPathSVG(t) {
      const e = [], s = this._createSVGBgRect(t);
      s && e.push("	", s);
      for (let i = 0; i < this._objects.length; i++) e.push("	", this._objects[i].toClipPathSVG(t));
      return this._createBaseClipPathSVGMarkup(e, {
        reviver: t
      });
    }
    static fromObject(t, e) {
      let { type: s, objects: i = [], layoutManager: r } = t, a = yt(t, i_);
      return Promise.all([
        so(i, e),
        ll(a, e)
      ]).then((o) => {
        let [h, c] = o;
        const u = new this(h, A(A(A({}, a), c), {}, {
          layoutManager: new r_()
        }));
        if (r) {
          const d = B.getClass(r.type), g = B.getClass(r.strategy);
          u.layoutManager = new d(new g());
        } else u.layoutManager = new rl();
        return u.layoutManager.subscribeTargets({
          type: Ii,
          target: u,
          targets: u.getObjects()
        }), u.setCoords(), u;
      });
    }
  }
  k(ps, "type", "Group"), k(ps, "ownDefaults", {
    strokeWidth: 0,
    subTargetCheck: false,
    interactive: false
  }), B.setClass(ps);
  const Xv = (n, t) => Math.min(t.width / n.width, t.height / n.height), Uv = (n, t) => Math.max(t.width / n.width, t.height / n.height), wg = "\\s*,?\\s*", go = "".concat(wg, "(").concat(Ds, ")"), n_ = "".concat(go).concat(go).concat(go).concat(wg, "([01])").concat(wg, "([01])").concat(go).concat(go), a_ = {
    m: "l",
    M: "L"
  }, o_ = (n, t, e, s, i, r, a, o, h, c, u) => {
    const d = Ps(n), g = Ls(n), f = Ps(t), p = Ls(t), v = e * i * f - s * r * p + a, b = s * i * f + e * r * p + o;
    return [
      "C",
      c + h * (-e * i * g - s * r * d),
      u + h * (-s * i * g + e * r * d),
      v + h * (e * i * p + s * r * f),
      b + h * (s * i * p - e * r * f),
      v,
      b
    ];
  }, sm = (n, t, e, s) => {
    const i = Math.atan2(t, n), r = Math.atan2(s, e);
    return r >= i ? r - i : 2 * Math.PI - (i - r);
  };
  function _g(n, t, e, s, i, r, a, o) {
    let h;
    if (rt.cachesBoundsOfCurve && (h = [
      ...arguments
    ].join(), yh.boundsOfCurveCache[h])) return yh.boundsOfCurveCache[h];
    const c = Math.sqrt, u = Math.abs, d = [], g = [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ];
    let f = 6 * n - 12 * e + 6 * i, p = -3 * n + 9 * e - 9 * i + 3 * a, v = 3 * e - 3 * n;
    for (let C = 0; C < 2; ++C) {
      if (C > 0 && (f = 6 * t - 12 * s + 6 * r, p = -3 * t + 9 * s - 9 * r + 3 * o, v = 3 * s - 3 * t), u(p) < 1e-12) {
        if (u(f) < 1e-12) continue;
        const F = -v / f;
        0 < F && F < 1 && d.push(F);
        continue;
      }
      const T = f * f - 4 * v * p;
      if (T < 0) continue;
      const O = c(T), E = (-f + O) / (2 * p);
      0 < E && E < 1 && d.push(E);
      const D = (-f - O) / (2 * p);
      0 < D && D < 1 && d.push(D);
    }
    let b = d.length;
    const _ = b, S = $v(n, t, e, s, i, r, a, o);
    for (; b--; ) {
      const { x: C, y: T } = S(d[b]);
      g[0][b] = C, g[1][b] = T;
    }
    g[0][_] = n, g[1][_] = t, g[0][_ + 1] = a, g[1][_ + 1] = o;
    const x = [
      new M(Math.min(...g[0]), Math.min(...g[1])),
      new M(Math.max(...g[0]), Math.max(...g[1]))
    ];
    return rt.cachesBoundsOfCurve && (yh.boundsOfCurveCache[h] = x), x;
  }
  const h_ = (n, t, e) => {
    let [s, i, r, a, o, h, c, u] = e;
    const d = ((g, f, p, v, b, _, S) => {
      if (p === 0 || v === 0) return [];
      let x = 0, C = 0, T = 0;
      const O = Math.PI, E = S * Vf, D = Ls(E), F = Ps(E), L = 0.5 * (-F * g - D * f), N = 0.5 * (-F * f + D * g), P = p ** 2, I = v ** 2, W = N ** 2, j = L ** 2, R = P * I - P * W - I * j;
      let st = Math.abs(p), J = Math.abs(v);
      if (R < 0) {
        const Is = Math.sqrt(1 - R / (P * I));
        st *= Is, J *= Is;
      } else T = (b === _ ? -1 : 1) * Math.sqrt(R / (P * W + I * j));
      const _t = T * st * N / J, Dt = -T * J * L / st, se = F * _t - D * Dt + 0.5 * g, Ot = D * _t + F * Dt + 0.5 * f;
      let dt = sm(1, 0, (L - _t) / st, (N - Dt) / J), ve = sm((L - _t) / st, (N - Dt) / J, (-L - _t) / st, (-N - Dt) / J);
      _ === 0 && ve > 0 ? ve -= 2 * O : _ === 1 && ve < 0 && (ve += 2 * O);
      const vs = Math.ceil(Math.abs(ve / O * 2)), Nt = [], nt = ve / vs, zi = 8 / 3 * Math.sin(nt / 4) * Math.sin(nt / 4) / Math.sin(nt / 2);
      let Nn = dt + nt;
      for (let Is = 0; Is < vs; Is++) Nt[Is] = o_(dt, Nn, F, D, st, J, se, Ot, zi, x, C), x = Nt[Is][5], C = Nt[Is][6], dt = Nn, Nn += nt;
      return Nt;
    })(c - n, u - t, i, r, o, h, a);
    for (let g = 0, f = d.length; g < f; g++) d[g][1] += n, d[g][2] += t, d[g][3] += n, d[g][4] += t, d[g][5] += n, d[g][6] += t;
    return d;
  }, Yv = (n) => {
    let t = 0, e = 0, s = 0, i = 0;
    const r = [];
    let a, o = 0, h = 0;
    for (const c of n) {
      const u = [
        ...c
      ];
      let d;
      switch (u[0]) {
        case "l":
          u[1] += t, u[2] += e;
        case "L":
          t = u[1], e = u[2], d = [
            "L",
            t,
            e
          ];
          break;
        case "h":
          u[1] += t;
        case "H":
          t = u[1], d = [
            "L",
            t,
            e
          ];
          break;
        case "v":
          u[1] += e;
        case "V":
          e = u[1], d = [
            "L",
            t,
            e
          ];
          break;
        case "m":
          u[1] += t, u[2] += e;
        case "M":
          t = u[1], e = u[2], s = u[1], i = u[2], d = [
            "M",
            t,
            e
          ];
          break;
        case "c":
          u[1] += t, u[2] += e, u[3] += t, u[4] += e, u[5] += t, u[6] += e;
        case "C":
          o = u[3], h = u[4], t = u[5], e = u[6], d = [
            "C",
            u[1],
            u[2],
            o,
            h,
            t,
            e
          ];
          break;
        case "s":
          u[1] += t, u[2] += e, u[3] += t, u[4] += e;
        case "S":
          a === "C" ? (o = 2 * t - o, h = 2 * e - h) : (o = t, h = e), t = u[3], e = u[4], d = [
            "C",
            o,
            h,
            u[1],
            u[2],
            t,
            e
          ], o = d[3], h = d[4];
          break;
        case "q":
          u[1] += t, u[2] += e, u[3] += t, u[4] += e;
        case "Q":
          o = u[1], h = u[2], t = u[3], e = u[4], d = [
            "Q",
            o,
            h,
            t,
            e
          ];
          break;
        case "t":
          u[1] += t, u[2] += e;
        case "T":
          a === "Q" ? (o = 2 * t - o, h = 2 * e - h) : (o = t, h = e), t = u[1], e = u[2], d = [
            "Q",
            o,
            h,
            t,
            e
          ];
          break;
        case "a":
          u[6] += t, u[7] += e;
        case "A":
          h_(t, e, u).forEach((g) => r.push(g)), t = u[6], e = u[7];
          break;
        case "z":
        case "Z":
          t = s, e = i, d = [
            "Z"
          ];
      }
      d ? (r.push(d), a = d[0]) : a = "";
    }
    return r;
  }, _u = (n, t, e, s) => Math.sqrt((e - n) ** 2 + (s - t) ** 2), $v = (n, t, e, s, i, r, a, o) => (h) => {
    const c = h ** 3, u = ((f) => 3 * f ** 2 * (1 - f))(h), d = ((f) => 3 * f * (1 - f) ** 2)(h), g = ((f) => (1 - f) ** 3)(h);
    return new M(a * c + i * u + e * d + n * g, o * c + r * u + s * d + t * g);
  }, qv = (n) => n ** 2, Kv = (n) => 2 * n * (1 - n), Qv = (n) => (1 - n) ** 2, l_ = (n, t, e, s, i, r, a, o) => (h) => {
    const c = qv(h), u = Kv(h), d = Qv(h), g = 3 * (d * (e - n) + u * (i - e) + c * (a - i)), f = 3 * (d * (s - t) + u * (r - s) + c * (o - r));
    return Math.atan2(f, g);
  }, c_ = (n, t, e, s, i, r) => (a) => {
    const o = qv(a), h = Kv(a), c = Qv(a);
    return new M(i * o + e * h + n * c, r * o + s * h + t * c);
  }, u_ = (n, t, e, s, i, r) => (a) => {
    const o = 1 - a, h = 2 * (o * (e - n) + a * (i - e)), c = 2 * (o * (s - t) + a * (r - s));
    return Math.atan2(c, h);
  }, im = (n, t, e) => {
    let s = new M(t, e), i = 0;
    for (let r = 1; r <= 100; r += 1) {
      const a = n(r / 100);
      i += _u(s.x, s.y, a.x, a.y), s = a;
    }
    return i;
  }, d_ = (n, t) => {
    let e, s = 0, i = 0, r = {
      x: n.x,
      y: n.y
    }, a = A({}, r), o = 0.01, h = 0;
    const c = n.iterator, u = n.angleFinder;
    for (; i < t && o > 1e-4; ) a = c(s), h = s, e = _u(r.x, r.y, a.x, a.y), e + i > t ? (s -= o, o /= 2) : (r = a, s += o, i += e);
    return A(A({}, a), {}, {
      angle: u(h)
    });
  }, up = (n) => {
    let t, e, s = 0, i = 0, r = 0, a = 0, o = 0;
    const h = [];
    for (const c of n) {
      const u = {
        x: i,
        y: r,
        command: c[0],
        length: 0
      };
      switch (c[0]) {
        case "M":
          e = u, e.x = a = i = c[1], e.y = o = r = c[2];
          break;
        case "L":
          e = u, e.length = _u(i, r, c[1], c[2]), i = c[1], r = c[2];
          break;
        case "C":
          t = $v(i, r, c[1], c[2], c[3], c[4], c[5], c[6]), e = u, e.iterator = t, e.angleFinder = l_(i, r, c[1], c[2], c[3], c[4], c[5], c[6]), e.length = im(t, i, r), i = c[5], r = c[6];
          break;
        case "Q":
          t = c_(i, r, c[1], c[2], c[3], c[4]), e = u, e.iterator = t, e.angleFinder = u_(i, r, c[1], c[2], c[3], c[4]), e.length = im(t, i, r), i = c[3], r = c[4];
          break;
        case "Z":
          e = u, e.destX = a, e.destY = o, e.length = _u(i, r, a, o), i = a, r = o;
      }
      s += e.length, h.push(e);
    }
    return h.push({
      length: s,
      x: i,
      y: r
    }), h;
  }, Jv = function(n, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : up(n), s = 0;
    for (; t - e[s].length > 0 && s < e.length - 2; ) t -= e[s].length, s++;
    const i = e[s], r = t / i.length, a = n[s];
    switch (i.command) {
      case "M":
        return {
          x: i.x,
          y: i.y,
          angle: 0
        };
      case "Z":
        return A(A({}, new M(i.x, i.y).lerp(new M(i.destX, i.destY), r)), {}, {
          angle: Math.atan2(i.destY - i.y, i.destX - i.x)
        });
      case "L":
        return A(A({}, new M(i.x, i.y).lerp(new M(a[1], a[2]), r)), {}, {
          angle: Math.atan2(a[2] - i.y, a[1] - i.x)
        });
      case "C":
      case "Q":
        return d_(i, t);
    }
  }, g_ = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi"), rm = new RegExp(n_, "g"), f_ = new RegExp(Ds, "gi"), p_ = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7
  }, Zv = (n) => {
    var t;
    const e = [], s = (t = n.match(g_)) !== null && t !== void 0 ? t : [];
    for (const i of s) {
      const r = i[0];
      if (r === "z" || r === "Z") {
        e.push([
          r
        ]);
        continue;
      }
      const a = p_[r.toLowerCase()];
      let o = [];
      if (r === "a" || r === "A") {
        rm.lastIndex = 0;
        for (let h = null; h = rm.exec(i); ) o.push(...h.slice(1));
      } else o = i.match(f_) || [];
      for (let h = 0; h < o.length; h += a) {
        const c = new Array(a), u = a_[r];
        c[0] = h > 0 && u ? u : r;
        for (let d = 0; d < a; d++) c[d + 1] = parseFloat(o[h + d]);
        e.push(c);
      }
    }
    return e;
  }, m_ = function(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = new M(n[0]), s = new M(n[1]), i = 1, r = 0;
    const a = [], o = n.length, h = o > 2;
    let c;
    for (h && (i = n[2].x < s.x ? -1 : n[2].x === s.x ? 0 : 1, r = n[2].y < s.y ? -1 : n[2].y === s.y ? 0 : 1), a.push([
      "M",
      e.x - i * t,
      e.y - r * t
    ]), c = 1; c < o; c++) {
      if (!e.eq(s)) {
        const u = e.midPointFrom(s);
        a.push([
          "Q",
          e.x,
          e.y,
          u.x,
          u.y
        ]);
      }
      e = n[c], c + 1 < n.length && (s = n[c + 1]);
    }
    return h && (i = e.x > n[c - 2].x ? 1 : e.x === n[c - 2].x ? 0 : -1, r = e.y > n[c - 2].y ? 1 : e.y === n[c - 2].y ? 0 : -1), a.push([
      "L",
      e.x + i * t,
      e.y + r * t
    ]), a;
  }, t0 = (n, t) => n.map((e) => e.map((s, i) => i === 0 || t === void 0 ? s : ft(s, t)).join(" ")).join(" ");
  function xu(n, t) {
    const e = n.style;
    e && t && (typeof t == "string" ? e.cssText += ";" + t : Object.entries(t).forEach((s) => {
      let [i, r] = s;
      return e.setProperty(i, r);
    }));
  }
  const v_ = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n;
  function e0(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const e = t.onComplete || Mn, s = new (gd()).XMLHttpRequest(), i = t.signal, r = function() {
      s.abort();
    }, a = function() {
      i && i.removeEventListener("abort", r), s.onerror = s.ontimeout = Mn;
    };
    if (i && i.aborted) throw new zf("request");
    return i && i.addEventListener("abort", r, {
      once: true
    }), s.onreadystatechange = function() {
      s.readyState === 4 && (a(), e(s), s.onreadystatechange = Mn);
    }, s.onerror = s.ontimeout = a, s.open("get", n, true), s.send(), s;
  }
  const Kl = (n, t) => {
    let e = n._findCenterFromElement();
    n.transformMatrix && (((s) => {
      if (s.transformMatrix) {
        const { scaleX: i, scaleY: r, angle: a, skewX: o } = Dn(s.transformMatrix);
        s.flipX = false, s.flipY = false, s.set(Me, i), s.set(Ke, r), s.angle = a, s.skewX = o, s.skewY = 0;
      }
    })(n), e = e.transform(n.transformMatrix)), delete n.transformMatrix, t && (n.scaleX *= t.scaleX, n.scaleY *= t.scaleY, n.cropX = t.cropX, n.cropY = t.cropY, e.x += t.offsetLeft, e.y += t.offsetTop, n.width = t.width, n.height = t.height), n.setPositionByOrigin(e, q, q);
  };
  var b_ = Object.freeze({
    __proto__: null,
    addTransformToObject: bv,
    animate: ap,
    animateColor: Dv,
    applyTransformToObject: ro,
    calcAngleBetweenVectors: vu,
    calcDimensionsMatrix: hl,
    calcPlaneChangeMatrix: ul,
    calcVectorRotation: Tv,
    cancelAnimFrame: ov,
    capValue: On,
    composeMatrix: dv,
    copyCanvasElement: (n) => {
      var t;
      const e = Qe(n);
      return (t = e.getContext("2d")) === null || t === void 0 || t.drawImage(n, 0, 0), e;
    },
    cos: Ps,
    createCanvasElement: ms,
    createImage: hv,
    createRotateMatrix: Rn,
    createScaleMatrix: vd,
    createSkewXMatrix: Kf,
    createSkewYMatrix: Qf,
    createTranslateMatrix: lo,
    createVector: pu,
    crossProduct: Xa,
    degreesToRadians: Ct,
    dotProduct: Mv,
    ease: aw,
    enlivenObjectEnlivables: ll,
    enlivenObjects: so,
    findScaleToCover: Uv,
    findScaleToFit: Xv,
    getBoundsOfCurve: _g,
    getOrthonormalVector: rp,
    getPathSegmentsInfo: up,
    getPointOnPath: Jv,
    getPointer: vv,
    getRandomInt: v_,
    getRegularPolygonPath: (n, t) => {
      const e = 2 * Math.PI / n;
      let s = -kr;
      n % 2 == 0 && (s += e / 2);
      const i = new Array(n + 1);
      for (let r = 0; r < n; r++) {
        const a = r * e + s, { x: o, y: h } = new M(Ps(a), Ls(a)).scalarMultiply(t);
        i[r] = [
          r === 0 ? "M" : "L",
          o,
          h
        ];
      }
      return i[n] = [
        "Z"
      ], i;
    },
    getSmoothPathFromPoints: m_,
    getSvgAttributes: (n) => {
      const t = [
        "instantiated_by_use",
        "style",
        "id",
        "class"
      ];
      switch (n) {
        case "linearGradient":
          return t.concat([
            "x1",
            "y1",
            "x2",
            "y2",
            "gradientUnits",
            "gradientTransform"
          ]);
        case "radialGradient":
          return t.concat([
            "gradientUnits",
            "gradientTransform",
            "cx",
            "cy",
            "r",
            "fx",
            "fy",
            "fr"
          ]);
        case "stop":
          return t.concat([
            "offset",
            "stop-color",
            "stop-opacity"
          ]);
      }
      return t;
    },
    getUnitVector: wd,
    groupSVGElements: (n, t) => n && n.length === 1 ? n[0] : new ps(n, t),
    hasStyleChanged: Sd,
    invertTransform: We,
    isBetweenVectors: mg,
    isIdentityMatrix: lv,
    isTouchEvent: fu,
    isTransparent: Fv,
    joinPath: t0,
    loadImage: _h,
    magnitude: mu,
    makeBoundingBoxFromPoints: ni,
    makePathSimpler: Yv,
    matrixToSVG: io,
    mergeClipPaths: (n, t) => {
      var e;
      let s = n, i = t;
      s.inverted && !i.inverted && (s = t, i = n), fg(i, (e = i.group) === null || e === void 0 ? void 0 : e.calcTransformMatrix(), s.calcTransformMatrix());
      const r = s.inverted && i.inverted;
      return r && (s.inverted = i.inverted = false), new ps([
        s
      ], {
        clipPath: i,
        inverted: r
      });
    },
    multiplyTransformMatrices: Et,
    multiplyTransformMatrixArray: md,
    parsePath: Zv,
    parsePreserveAspectRatioAttribute: sp,
    parseUnit: xe,
    pick: In,
    projectStrokeOnPoints: Nv,
    qrDecompose: Dn,
    radiansToDegrees: oi,
    removeFromArray: nn,
    removeTransformFromObject: (n, t) => {
      const e = We(t), s = Et(e, n.calcOwnMatrix());
      ro(n, s);
    },
    removeTransformMatrixForSvgParsing: Kl,
    request: e0,
    requestAnimFrame: wh,
    resetObjectTransform: yv,
    rotatePoint: (n, t, e) => n.rotate(e, t),
    rotateVector: ip,
    saveObjectTransform: Zf,
    sendObjectToPlane: fg,
    sendPointToPlane: En,
    sendVectorToPlane: wv,
    setStyle: xu,
    sin: Ls,
    sizeAfterTransform: bd,
    string: Rw,
    stylesFromArray: Hv,
    stylesToArray: Bv,
    toBlob: qf,
    toDataURL: $f,
    toFixed: ft,
    transformPath: (n, t, e) => (e && (t = Et(t, [
      1,
      0,
      0,
      1,
      -e.x,
      -e.y
    ])), n.map((s) => {
      const i = [
        ...s
      ];
      for (let r = 1; r < s.length - 1; r += 2) {
        const { x: a, y: o } = de({
          x: s[r],
          y: s[r + 1]
        }, t);
        i[r] = a, i[r + 1] = o;
      }
      return i;
    })),
    transformPoint: de
  });
  class y_ extends mv {
    constructor(t) {
      let { allowTouchScrolling: e = false, containerClass: s = "" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(t), k(this, "upper", void 0), k(this, "container", void 0);
      const { el: i } = this.lower, r = this.createUpperCanvas();
      this.upper = {
        el: r,
        ctx: r.getContext("2d")
      }, this.applyCanvasStyle(i, {
        allowTouchScrolling: e
      }), this.applyCanvasStyle(r, {
        allowTouchScrolling: e,
        styles: {
          position: "absolute",
          left: "0",
          top: "0"
        }
      });
      const a = this.createContainerElement();
      a.classList.add(s), i.parentNode && i.parentNode.replaceChild(a, i), a.append(i, r), this.container = a;
    }
    createUpperCanvas() {
      const { el: t } = this.lower, e = ms();
      return e.className = t.className, e.classList.remove("lower-canvas"), e.classList.add("upper-canvas"), e.setAttribute("data-fabric", "top"), e.style.cssText = t.style.cssText, e.setAttribute("draggable", "true"), e;
    }
    createContainerElement() {
      const t = ao().createElement("div");
      return t.setAttribute("data-fabric", "wrapper"), xu(t, {
        position: "relative"
      }), Dp(t), t;
    }
    applyCanvasStyle(t, e) {
      const { styles: s, allowTouchScrolling: i } = e;
      xu(t, A(A({}, s), {}, {
        "touch-action": i ? "manipulation" : Ae
      })), Dp(t);
    }
    setDimensions(t, e) {
      super.setDimensions(t, e);
      const { el: s, ctx: i } = this.upper;
      pv(s, i, t, e);
    }
    setCSSDimensions(t) {
      super.setCSSDimensions(t), gg(this.upper.el, t), gg(this.container, t);
    }
    cleanupDOM(t) {
      const e = this.container, { el: s } = this.lower, { el: i } = this.upper;
      super.cleanupDOM(t), e.removeChild(i), e.removeChild(s), e.parentNode && e.parentNode.replaceChild(s, e);
    }
    dispose() {
      super.dispose(), ai().dispose(this.upper.el), delete this.upper, delete this.container;
    }
  }
  class Ad extends cl {
    constructor() {
      super(...arguments), k(this, "targets", []), k(this, "_hoveredTargets", []), k(this, "_objectsToRender", void 0), k(this, "_currentTransform", null), k(this, "_groupSelector", null), k(this, "contextTopDirty", false);
    }
    static getDefaults() {
      return A(A({}, super.getDefaults()), Ad.ownDefaults);
    }
    get upperCanvasEl() {
      var t;
      return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.el;
    }
    get contextTop() {
      var t;
      return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.ctx;
    }
    get wrapperEl() {
      return this.elements.container;
    }
    initElements(t) {
      this.elements = new y_(t, {
        allowTouchScrolling: this.allowTouchScrolling,
        containerClass: this.containerClass
      }), this._createCacheCanvas();
    }
    _onObjectAdded(t) {
      this._objectsToRender = void 0, super._onObjectAdded(t);
    }
    _onObjectRemoved(t) {
      this._objectsToRender = void 0, t === this._activeObject && (this.fire("before:selection:cleared", {
        deselected: [
          t
        ]
      }), this._discardActiveObject(), this.fire("selection:cleared", {
        deselected: [
          t
        ]
      }), t.fire("deselected", {
        target: t
      })), t === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t);
    }
    _onStackOrderChanged() {
      this._objectsToRender = void 0, super._onStackOrderChanged();
    }
    _chooseObjectsToRender() {
      const t = this._activeObject;
      return !this.preserveObjectStacking && t ? this._objects.filter((e) => !e.group && e !== t).concat(t) : this._objects;
    }
    renderAll() {
      this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = false), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = false), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
    }
    renderTopLayer(t) {
      t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = true), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = true), t.restore();
    }
    renderTop() {
      const t = this.contextTop;
      this.clearContext(t), this.renderTopLayer(t), this.fire("after:render", {
        ctx: t
      });
    }
    setTargetFindTolerance(t) {
      t = Math.round(t), this.targetFindTolerance = t;
      const e = this.getRetinaScaling(), s = Math.ceil((2 * t + 1) * e);
      this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s, this.pixelFindContext.scale(e, e);
    }
    isTargetTransparent(t, e, s) {
      const i = this.targetFindTolerance, r = this.pixelFindContext;
      this.clearContext(r), r.save(), r.translate(-e + i, -s + i), r.transform(...this.viewportTransform);
      const a = t.selectionBackgroundColor;
      t.selectionBackgroundColor = "", t.render(r), t.selectionBackgroundColor = a, r.restore();
      const o = Math.round(i * this.getRetinaScaling());
      return Fv(r, o, o, o);
    }
    _isSelectionKeyPressed(t) {
      const e = this.selectionKey;
      return !!e && (Array.isArray(e) ? !!e.find((s) => !!s && t[s] === true) : t[e]);
    }
    _shouldClearSelection(t, e) {
      const s = this.getActiveObjects(), i = this._activeObject;
      return !!(!e || e && i && s.length > 1 && s.indexOf(e) === -1 && i !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && i && i !== e);
    }
    _shouldCenterTransform(t, e, s) {
      if (!t) return;
      let i;
      return e === pd || e === Me || e === Ke || e === el ? i = this.centeredScaling || t.centeredScaling : e === Uf && (i = this.centeredRotation || t.centeredRotation), i ? !s : s;
    }
    _getOriginFromCorner(t, e) {
      const s = {
        x: t.originX,
        y: t.originY
      };
      return e && ([
        "ml",
        "tl",
        "bl"
      ].includes(e) ? s.x = Tt : [
        "mr",
        "tr",
        "br"
      ].includes(e) && (s.x = at), [
        "tl",
        "mt",
        "tr"
      ].includes(e) ? s.y = dg : [
        "bl",
        "mb",
        "br"
      ].includes(e) && (s.y = He)), s;
    }
    _setupCurrentTransform(t, e, s) {
      var i;
      const r = e.group ? En(this.getScenePoint(t), void 0, e.group.calcTransformMatrix()) : this.getScenePoint(t), { key: a = "", control: o } = e.getActiveControl() || {}, h = s && o ? (i = o.getActionHandler(t, e, o)) === null || i === void 0 ? void 0 : i.bind(o) : Jy, c = ((f, p, v, b) => {
        if (!p || !f) return "drag";
        const _ = b.controls[p];
        return _.getActionName(v, _, b);
      })(s, a, t, e), u = t[this.centeredKey], d = this._shouldCenterTransform(e, c, u) ? {
        x: q,
        y: q
      } : this._getOriginFromCorner(e, a), g = {
        target: e,
        action: c,
        actionHandler: h,
        actionPerformed: false,
        corner: a,
        scaleX: e.scaleX,
        scaleY: e.scaleY,
        skewX: e.skewX,
        skewY: e.skewY,
        offsetX: r.x - e.left,
        offsetY: r.y - e.top,
        originX: d.x,
        originY: d.y,
        ex: r.x,
        ey: r.y,
        lastX: r.x,
        lastY: r.y,
        theta: Ct(e.angle),
        width: e.width,
        height: e.height,
        shiftKey: t.shiftKey,
        altKey: u,
        original: A(A({}, Zf(e)), {}, {
          originX: d.x,
          originY: d.y
        })
      };
      this._currentTransform = g, this.fire("before:transform", {
        e: t,
        transform: g
      });
    }
    setCursor(t) {
      this.upperCanvasEl.style.cursor = t;
    }
    _drawSelection(t) {
      const { x: e, y: s, deltaX: i, deltaY: r } = this._groupSelector, a = new M(e, s).transform(this.viewportTransform), o = new M(e + i, s + r).transform(this.viewportTransform), h = this.selectionLineWidth / 2;
      let c = Math.min(a.x, o.x), u = Math.min(a.y, o.y), d = Math.max(a.x, o.x), g = Math.max(a.y, o.y);
      this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(c, u, d - c, g - u)), this.selectionLineWidth && this.selectionBorderColor && (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, c += h, u += h, d -= h, g -= h, me.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(c, u, d - c, g - u));
    }
    findTarget(t) {
      if (this.skipTargetFind) return;
      const e = this.getViewportPoint(t), s = this._activeObject, i = this.getActiveObjects();
      if (this.targets = [], s && i.length >= 1) {
        if (s.findControl(e, fu(t)) || i.length > 1 && this.searchPossibleTargets([
          s
        ], e)) return s;
        if (s === this.searchPossibleTargets([
          s
        ], e)) {
          if (this.preserveObjectStacking) {
            const r = this.targets;
            this.targets = [];
            const a = this.searchPossibleTargets(this._objects, e);
            return t[this.altSelectionKey] && a && a !== s ? (this.targets = r, s) : a;
          }
          return s;
        }
      }
      return this.searchPossibleTargets(this._objects, e);
    }
    _pointIsInObjectSelectionArea(t, e) {
      let s = t.getCoords();
      const i = this.getZoom(), r = t.padding / i;
      if (r) {
        const [a, o, h, c] = s, u = Math.atan2(o.y - a.y, o.x - a.x), d = Ps(u) * r, g = Ls(u) * r, f = d + g, p = d - g;
        s = [
          new M(a.x - p, a.y - f),
          new M(o.x + f, o.y - p),
          new M(h.x + p, h.y + f),
          new M(c.x - f, c.y + p)
        ];
      }
      return wt.isPointInPolygon(e, s);
    }
    _checkTarget(t, e) {
      return !!(t && t.visible && t.evented && this._pointIsInObjectSelectionArea(t, En(e, void 0, this.viewportTransform)) && (!this.perPixelTargetFind && !t.perPixelTargetFind || t.isEditing || !this.isTargetTransparent(t, e.x, e.y)));
    }
    _searchPossibleTargets(t, e) {
      let s = t.length;
      for (; s--; ) {
        const i = t[s];
        if (this._checkTarget(i, e)) {
          if ($l(i) && i.subTargetCheck) {
            const r = this._searchPossibleTargets(i._objects, e);
            r && this.targets.push(r);
          }
          return i;
        }
      }
    }
    searchPossibleTargets(t, e) {
      const s = this._searchPossibleTargets(t, e);
      if (s && $l(s) && s.interactive && this.targets[0]) {
        const i = this.targets;
        for (let r = i.length - 1; r > 0; r--) {
          const a = i[r];
          if (!$l(a) || !a.interactive) return a;
        }
        return i[0];
      }
      return s;
    }
    getViewportPoint(t) {
      return this._pointer ? this._pointer : this.getPointer(t, true);
    }
    getScenePoint(t) {
      return this._absolutePointer ? this._absolutePointer : this.getPointer(t);
    }
    getPointer(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      const s = this.upperCanvasEl, i = s.getBoundingClientRect();
      let r = vv(t), a = i.width || 0, o = i.height || 0;
      a && o || (He in i && dg in i && (o = Math.abs(i.top - i.bottom)), Tt in i && at in i && (a = Math.abs(i.right - i.left))), this.calcOffset(), r.x = r.x - this._offset.left, r.y = r.y - this._offset.top, e || (r = En(r, void 0, this.viewportTransform));
      const h = this.getRetinaScaling();
      h !== 1 && (r.x /= h, r.y /= h);
      const c = a === 0 || o === 0 ? new M(1, 1) : new M(s.width / a, s.height / o);
      return r.multiply(c);
    }
    _setDimensionsImpl(t, e) {
      this._resetTransformEventData(), super._setDimensionsImpl(t, e), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
    }
    _createCacheCanvas() {
      this.pixelFindCanvasEl = ms(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
        willReadFrequently: true
      }), this.setTargetFindTolerance(this.targetFindTolerance);
    }
    getTopContext() {
      return this.elements.upper.ctx;
    }
    getSelectionContext() {
      return this.elements.upper.ctx;
    }
    getSelectionElement() {
      return this.elements.upper.el;
    }
    getActiveObject() {
      return this._activeObject;
    }
    getActiveObjects() {
      const t = this._activeObject;
      return an(t) ? t.getObjects() : t ? [
        t
      ] : [];
    }
    _fireSelectionEvents(t, e) {
      let s = false, i = false;
      const r = this.getActiveObjects(), a = [], o = [];
      t.forEach((h) => {
        r.includes(h) || (s = true, h.fire("deselected", {
          e,
          target: h
        }), o.push(h));
      }), r.forEach((h) => {
        t.includes(h) || (s = true, h.fire("selected", {
          e,
          target: h
        }), a.push(h));
      }), t.length > 0 && r.length > 0 ? (i = true, s && this.fire("selection:updated", {
        e,
        selected: a,
        deselected: o
      })) : r.length > 0 ? (i = true, this.fire("selection:created", {
        e,
        selected: a
      })) : t.length > 0 && (i = true, this.fire("selection:cleared", {
        e,
        deselected: o
      })), i && (this._objectsToRender = void 0);
    }
    setActiveObject(t, e) {
      const s = this.getActiveObjects(), i = this._setActiveObject(t, e);
      return this._fireSelectionEvents(s, e), i;
    }
    _setActiveObject(t, e) {
      const s = this._activeObject;
      return s !== t && !(!this._discardActiveObject(e, t) && this._activeObject) && !t.onSelect({
        e
      }) && (this._activeObject = t, an(t) && s !== t && t.set("canvas", this), t.setCoords(), true);
    }
    _discardActiveObject(t, e) {
      const s = this._activeObject;
      return !!s && !s.onDeselect({
        e: t,
        object: e
      }) && (this._currentTransform && this._currentTransform.target === s && this.endCurrentTransform(t), an(s) && s === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, true);
    }
    discardActiveObject(t) {
      const e = this.getActiveObjects(), s = this.getActiveObject();
      e.length && this.fire("before:selection:cleared", {
        e: t,
        deselected: [
          s
        ]
      });
      const i = this._discardActiveObject(t);
      return this._fireSelectionEvents(e, t), i;
    }
    endCurrentTransform(t) {
      const e = this._currentTransform;
      this._finalizeCurrentTransform(t), e && e.target && (e.target.isMoving = false), this._currentTransform = null;
    }
    _finalizeCurrentTransform(t) {
      const e = this._currentTransform, s = e.target, i = {
        e: t,
        target: s,
        transform: e,
        action: e.action
      };
      s._scaling && (s._scaling = false), s.setCoords(), e.actionPerformed && (this.fire("object:modified", i), s.fire(du, i));
    }
    setViewportTransform(t) {
      super.setViewportTransform(t);
      const e = this._activeObject;
      e && e.setCoords();
    }
    destroy() {
      const t = this._activeObject;
      an(t) && (t.removeAll(), t.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
    }
    clear() {
      this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
    }
    drawControls(t) {
      const e = this._activeObject;
      e && e._renderControls(t);
    }
    _toObject(t, e, s) {
      const i = this._realizeGroupTransformOnObject(t), r = super._toObject(t, e, s);
      return t.set(i), r;
    }
    _realizeGroupTransformOnObject(t) {
      const { group: e } = t;
      if (e && an(e) && this._activeObject === e) {
        const s = In(t, [
          "angle",
          "flipX",
          "flipY",
          at,
          Me,
          Ke,
          oo,
          ho,
          He
        ]);
        return bv(t, e.calcOwnMatrix()), s;
      }
      return {};
    }
    _setSVGObject(t, e, s) {
      const i = this._realizeGroupTransformOnObject(e);
      super._setSVGObject(t, e, s), e.set(i);
    }
  }
  k(Ad, "ownDefaults", {
    uniformScaling: true,
    uniScaleKey: "shiftKey",
    centeredScaling: false,
    centeredRotation: false,
    centeredKey: "altKey",
    altActionKey: "shiftKey",
    selection: true,
    selectionKey: "shiftKey",
    selectionColor: "rgba(100, 100, 255, 0.3)",
    selectionDashArray: [],
    selectionBorderColor: "rgba(255, 255, 255, 0.3)",
    selectionLineWidth: 1,
    selectionFullyContained: false,
    hoverCursor: "move",
    moveCursor: "move",
    defaultCursor: "default",
    freeDrawingCursor: "crosshair",
    notAllowedCursor: "not-allowed",
    perPixelTargetFind: false,
    targetFindTolerance: 0,
    skipTargetFind: false,
    stopContextMenu: false,
    fireRightClick: false,
    fireMiddleClick: false,
    enablePointerEvents: false,
    containerClass: "canvas-container",
    preserveObjectStacking: false
  });
  class w_ {
    constructor(t) {
      k(this, "targets", []), k(this, "__disposer", void 0);
      const e = () => {
        const { hiddenTextarea: i } = t.getActiveObject() || {};
        i && i.focus();
      }, s = t.upperCanvasEl;
      s.addEventListener("click", e), this.__disposer = () => s.removeEventListener("click", e);
    }
    exitTextEditing() {
      this.target = void 0, this.targets.forEach((t) => {
        t.isEditing && t.exitEditing();
      });
    }
    add(t) {
      this.targets.push(t);
    }
    remove(t) {
      this.unregister(t), nn(this.targets, t);
    }
    register(t) {
      this.target = t;
    }
    unregister(t) {
      t === this.target && (this.target = void 0);
    }
    onMouseMove(t) {
      var e;
      !((e = this.target) === null || e === void 0) && e.isEditing && this.target.updateSelectionOnMouseMove(t);
    }
    clear() {
      this.targets = [], this.target = void 0;
    }
    dispose() {
      this.clear(), this.__disposer(), delete this.__disposer;
    }
  }
  const __ = [
    "target",
    "oldTarget",
    "fireCanvas",
    "e"
  ], ze = {
    passive: false
  }, Bn = (n, t) => {
    const e = n.getViewportPoint(t), s = n.getScenePoint(t);
    return {
      viewportPoint: e,
      scenePoint: s,
      pointer: e,
      absolutePointer: s
    };
  }, Gi = function(n) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s];
    return n.addEventListener(...e);
  }, Je = function(n) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) e[s - 1] = arguments[s];
    return n.removeEventListener(...e);
  }, x_ = {
    mouse: {
      in: "over",
      out: "out",
      targetIn: "mouseover",
      targetOut: "mouseout",
      canvasIn: "mouse:over",
      canvasOut: "mouse:out"
    },
    drag: {
      in: "enter",
      out: "leave",
      targetIn: "dragenter",
      targetOut: "dragleave",
      canvasIn: "drag:enter",
      canvasOut: "drag:leave"
    }
  };
  class xg extends Ad {
    constructor(t) {
      super(t, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}), k(this, "_isClick", void 0), k(this, "textEditingManager", new w_(this)), [
        "_onMouseDown",
        "_onTouchStart",
        "_onMouseMove",
        "_onMouseUp",
        "_onTouchEnd",
        "_onResize",
        "_onMouseWheel",
        "_onMouseOut",
        "_onMouseEnter",
        "_onContextMenu",
        "_onClick",
        "_onDragStart",
        "_onDragEnd",
        "_onDragProgress",
        "_onDragOver",
        "_onDragEnter",
        "_onDragLeave",
        "_onDrop"
      ].forEach((e) => {
        this[e] = this[e].bind(this);
      }), this.addOrRemove(Gi, "add");
    }
    _getEventPrefix() {
      return this.enablePointerEvents ? "pointer" : "mouse";
    }
    addOrRemove(t, e) {
      const s = this.upperCanvasEl, i = this._getEventPrefix();
      t(fv(s), "resize", this._onResize), t(s, i + "down", this._onMouseDown), t(s, "".concat(i, "move"), this._onMouseMove, ze), t(s, "".concat(i, "out"), this._onMouseOut), t(s, "".concat(i, "enter"), this._onMouseEnter), t(s, "wheel", this._onMouseWheel), t(s, "contextmenu", this._onContextMenu), t(s, "click", this._onClick), t(s, "dblclick", this._onClick), t(s, "dragstart", this._onDragStart), t(s, "dragend", this._onDragEnd), t(s, "dragover", this._onDragOver), t(s, "dragenter", this._onDragEnter), t(s, "dragleave", this._onDragLeave), t(s, "drop", this._onDrop), this.enablePointerEvents || t(s, "touchstart", this._onTouchStart, ze);
    }
    removeListeners() {
      this.addOrRemove(Je, "remove");
      const t = this._getEventPrefix(), e = Es(this.upperCanvasEl);
      Je(e, "".concat(t, "up"), this._onMouseUp), Je(e, "touchend", this._onTouchEnd, ze), Je(e, "".concat(t, "move"), this._onMouseMove, ze), Je(e, "touchmove", this._onMouseMove, ze), clearTimeout(this._willAddMouseDown);
    }
    _onMouseWheel(t) {
      this.__onMouseWheel(t);
    }
    _onMouseOut(t) {
      const e = this._hoveredTarget, s = A({
        e: t
      }, Bn(this, t));
      this.fire("mouse:out", A(A({}, s), {}, {
        target: e
      })), this._hoveredTarget = void 0, e && e.fire("mouseout", A({}, s)), this._hoveredTargets.forEach((i) => {
        this.fire("mouse:out", A(A({}, s), {}, {
          target: i
        })), i && i.fire("mouseout", A({}, s));
      }), this._hoveredTargets = [];
    }
    _onMouseEnter(t) {
      this._currentTransform || this.findTarget(t) || (this.fire("mouse:over", A({
        e: t
      }, Bn(this, t))), this._hoveredTarget = void 0, this._hoveredTargets = []);
    }
    _onDragStart(t) {
      this._isClick = false;
      const e = this.getActiveObject();
      if (e && e.onDragStart(t)) {
        this._dragSource = e;
        const s = {
          e: t,
          target: e
        };
        return this.fire("dragstart", s), e.fire("dragstart", s), void Gi(this.upperCanvasEl, "drag", this._onDragProgress);
      }
      Op(t);
    }
    _renderDragEffects(t, e, s) {
      let i = false;
      const r = this._dropTarget;
      r && r !== e && r !== s && (r.clearContextTop(), i = true), e == null ? void 0 : e.clearContextTop(), s !== e && (s == null ? void 0 : s.clearContextTop());
      const a = this.contextTop;
      a.save(), a.transform(...this.viewportTransform), e && (a.save(), e.transform(a), e.renderDragSourceEffect(t), a.restore(), i = true), s && (a.save(), s.transform(a), s.renderDropTargetEffect(t), a.restore(), i = true), a.restore(), i && (this.contextTopDirty = true);
    }
    _onDragEnd(t) {
      const e = !!t.dataTransfer && t.dataTransfer.dropEffect !== Ae, s = e ? this._activeObject : void 0, i = {
        e: t,
        target: this._dragSource,
        subTargets: this.targets,
        dragSource: this._dragSource,
        didDrop: e,
        dropTarget: s
      };
      Je(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", i), this._dragSource && this._dragSource.fire("dragend", i), delete this._dragSource, this._onMouseUp(t);
    }
    _onDragProgress(t) {
      const e = {
        e: t,
        target: this._dragSource,
        dragSource: this._dragSource,
        dropTarget: this._draggedoverTarget
      };
      this.fire("drag", e), this._dragSource && this._dragSource.fire("drag", e);
    }
    findDragTargets(t) {
      return this.targets = [], {
        target: this._searchPossibleTargets(this._objects, this.getViewportPoint(t)),
        targets: [
          ...this.targets
        ]
      };
    }
    _onDragOver(t) {
      const e = "dragover", { target: s, targets: i } = this.findDragTargets(t), r = this._dragSource, a = {
        e: t,
        target: s,
        subTargets: i,
        dragSource: r,
        canDrop: false,
        dropTarget: void 0
      };
      let o;
      this.fire(e, a), this._fireEnterLeaveEvents(s, a), s && (s.canDrop(t) && (o = s), s.fire(e, a));
      for (let h = 0; h < i.length; h++) {
        const c = i[h];
        c.canDrop(t) && (o = c), c.fire(e, a);
      }
      this._renderDragEffects(t, r, o), this._dropTarget = o;
    }
    _onDragEnter(t) {
      const { target: e, targets: s } = this.findDragTargets(t), i = {
        e: t,
        target: e,
        subTargets: s,
        dragSource: this._dragSource
      };
      this.fire("dragenter", i), this._fireEnterLeaveEvents(e, i);
    }
    _onDragLeave(t) {
      const e = {
        e: t,
        target: this._draggedoverTarget,
        subTargets: this.targets,
        dragSource: this._dragSource
      };
      this.fire("dragleave", e), this._fireEnterLeaveEvents(void 0, e), this._renderDragEffects(t, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = [];
    }
    _onDrop(t) {
      const { target: e, targets: s } = this.findDragTargets(t), i = this._basicEventHandler("drop:before", A({
        e: t,
        target: e,
        subTargets: s,
        dragSource: this._dragSource
      }, Bn(this, t)));
      i.didDrop = false, i.dropTarget = void 0, this._basicEventHandler("drop", i), this.fire("drop:after", i);
    }
    _onContextMenu(t) {
      const e = this.findTarget(t), s = this.targets || [], i = this._basicEventHandler("contextmenu:before", {
        e: t,
        target: e,
        subTargets: s
      });
      return this.stopContextMenu && Op(t), this._basicEventHandler("contextmenu", i), false;
    }
    _onClick(t) {
      const e = t.detail;
      e > 3 || e < 2 || (this._cacheTransformEventData(t), e == 2 && t.type === "dblclick" && this._handleEvent(t, "dblclick"), e == 3 && this._handleEvent(t, "tripleclick"), this._resetTransformEventData());
    }
    getPointerId(t) {
      const e = t.changedTouches;
      return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1;
    }
    _isMainEvent(t) {
      return t.isPrimary === true || t.isPrimary !== false && (t.type === "touchend" && t.touches.length === 0 || !t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId);
    }
    _onTouchStart(t) {
      let e = !this.allowTouchScrolling;
      const s = this._activeObject;
      this.mainTouchId === void 0 && (this.mainTouchId = this.getPointerId(t)), this.__onMouseDown(t), (this.isDrawingMode || s && this._target === s) && (e = true), e && t.preventDefault(), this._resetTransformEventData();
      const i = this.upperCanvasEl, r = this._getEventPrefix(), a = Es(i);
      Gi(a, "touchend", this._onTouchEnd, ze), e && Gi(a, "touchmove", this._onMouseMove, ze), Je(i, "".concat(r, "down"), this._onMouseDown);
    }
    _onMouseDown(t) {
      this.__onMouseDown(t), this._resetTransformEventData();
      const e = this.upperCanvasEl, s = this._getEventPrefix();
      Je(e, "".concat(s, "move"), this._onMouseMove, ze);
      const i = Es(e);
      Gi(i, "".concat(s, "up"), this._onMouseUp), Gi(i, "".concat(s, "move"), this._onMouseMove, ze);
    }
    _onTouchEnd(t) {
      if (t.touches.length > 0) return;
      this.__onMouseUp(t), this._resetTransformEventData(), delete this.mainTouchId;
      const e = this._getEventPrefix(), s = Es(this.upperCanvasEl);
      Je(s, "touchend", this._onTouchEnd, ze), Je(s, "touchmove", this._onMouseMove, ze), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
        Gi(this.upperCanvasEl, "".concat(e, "down"), this._onMouseDown), this._willAddMouseDown = 0;
      }, 400);
    }
    _onMouseUp(t) {
      this.__onMouseUp(t), this._resetTransformEventData();
      const e = this.upperCanvasEl, s = this._getEventPrefix();
      if (this._isMainEvent(t)) {
        const i = Es(this.upperCanvasEl);
        Je(i, "".concat(s, "up"), this._onMouseUp), Je(i, "".concat(s, "move"), this._onMouseMove, ze), Gi(e, "".concat(s, "move"), this._onMouseMove, ze);
      }
    }
    _onMouseMove(t) {
      const e = this.getActiveObject();
      !this.allowTouchScrolling && (!e || !e.shouldStartDragging(t)) && t.preventDefault && t.preventDefault(), this.__onMouseMove(t);
    }
    _onResize() {
      this.calcOffset(), this._resetTransformEventData();
    }
    _shouldRender(t) {
      const e = this.getActiveObject();
      return !!e != !!t || e && t && e !== t;
    }
    __onMouseUp(t) {
      var e;
      this._cacheTransformEventData(t), this._handleEvent(t, "up:before");
      const s = this._currentTransform, i = this._isClick, r = this._target, { button: a } = t;
      if (a) return (this.fireMiddleClick && a === 1 || this.fireRightClick && a === 2) && this._handleEvent(t, "up"), void this._resetTransformEventData();
      if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t);
      if (!this._isMainEvent(t)) return;
      let o, h, c = false;
      if (s && (this._finalizeCurrentTransform(t), c = s.actionPerformed), !i) {
        const u = r === this._activeObject;
        this.handleSelection(t), c || (c = this._shouldRender(r) || !u && r === this._activeObject);
      }
      if (r) {
        const u = r.findControl(this.getViewportPoint(t), fu(t)), { key: d, control: g } = u || {};
        if (h = d, r.selectable && r !== this._activeObject && r.activeOn === "up") this.setActiveObject(r, t), c = true;
        else if (g) {
          const f = g.getMouseUpHandler(t, r, g);
          f && (o = this.getScenePoint(t), f.call(g, t, s, o.x, o.y));
        }
        r.isMoving = false;
      }
      if (s && (s.target !== r || s.corner !== h)) {
        const u = s.target && s.target.controls[s.corner], d = u && u.getMouseUpHandler(t, s.target, u);
        o = o || this.getScenePoint(t), d && d.call(u, t, s, o.x, o.y);
      }
      this._setCursorFromEvent(t, r), this._handleEvent(t, "up"), this._groupSelector = null, this._currentTransform = null, r && (r.__corner = void 0), c ? this.requestRenderAll() : i || (e = this._activeObject) !== null && e !== void 0 && e.isEditing || this.renderTop();
    }
    _basicEventHandler(t, e) {
      const { target: s, subTargets: i = [] } = e;
      this.fire(t, e), s && s.fire(t, e);
      for (let r = 0; r < i.length; r++) i[r] !== s && i[r].fire(t, e);
      return e;
    }
    _handleEvent(t, e, s) {
      const i = this._target, r = this.targets || [], a = A(A(A({
        e: t,
        target: i,
        subTargets: r
      }, Bn(this, t)), {}, {
        transform: this._currentTransform
      }, e === "up:before" || e === "up" ? {
        isClick: this._isClick,
        currentTarget: this.findTarget(t),
        currentSubTargets: this.targets
      } : {}), e === "down:before" || e === "down" ? s : {});
      this.fire("mouse:".concat(e), a), i && i.fire("mouse".concat(e), a);
      for (let o = 0; o < r.length; o++) r[o] !== i && r[o].fire("mouse".concat(e), a);
    }
    _onMouseDownInDrawingMode(t) {
      this._isCurrentlyDrawing = true, this.getActiveObject() && (this.discardActiveObject(t), this.requestRenderAll());
      const e = this.getScenePoint(t);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e, {
        e: t,
        pointer: e
      }), this._handleEvent(t, "down", {
        alreadySelected: false
      });
    }
    _onMouseMoveInDrawingMode(t) {
      if (this._isCurrentlyDrawing) {
        const e = this.getScenePoint(t);
        this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e, {
          e: t,
          pointer: e
        });
      }
      this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move");
    }
    _onMouseUpInDrawingMode(t) {
      const e = this.getScenePoint(t);
      this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
        e: t,
        pointer: e
      }) : this._isCurrentlyDrawing = false, this._handleEvent(t, "up");
    }
    __onMouseDown(t) {
      this._isClick = true, this._cacheTransformEventData(t), this._handleEvent(t, "down:before");
      let e = this._target, s = !!e && e === this._activeObject;
      const { button: i } = t;
      if (i) return (this.fireMiddleClick && i === 1 || this.fireRightClick && i === 2) && this._handleEvent(t, "down", {
        alreadySelected: s
      }), void this._resetTransformEventData();
      if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t);
      if (!this._isMainEvent(t) || this._currentTransform) return;
      let r = this._shouldRender(e), a = false;
      if (this.handleMultiSelection(t, e) ? (e = this._activeObject, a = true, r = true) : this._shouldClearSelection(t, e) && this.discardActiveObject(t), this.selection && (!e || !e.selectable && !e.isEditing && e !== this._activeObject)) {
        const o = this.getScenePoint(t);
        this._groupSelector = {
          x: o.x,
          y: o.y,
          deltaY: 0,
          deltaX: 0
        };
      }
      if (s = !!e && e === this._activeObject, e) {
        e.selectable && e.activeOn === "down" && this.setActiveObject(e, t);
        const o = e.findControl(this.getViewportPoint(t), fu(t));
        if (e === this._activeObject && (o || !a)) {
          this._setupCurrentTransform(t, e, s);
          const h = o ? o.control : void 0, c = this.getScenePoint(t), u = h && h.getMouseDownHandler(t, e, h);
          u && u.call(h, t, this._currentTransform, c.x, c.y);
        }
      }
      r && (this._objectsToRender = void 0), this._handleEvent(t, "down", {
        alreadySelected: s
      }), r && this.requestRenderAll();
    }
    _resetTransformEventData() {
      this._target = this._pointer = this._absolutePointer = void 0;
    }
    _cacheTransformEventData(t) {
      this._resetTransformEventData(), this._pointer = this.getViewportPoint(t), this._absolutePointer = En(this._pointer, void 0, this.viewportTransform), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t);
    }
    __onMouseMove(t) {
      if (this._isClick = false, this._cacheTransformEventData(t), this._handleEvent(t, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t);
      if (!this._isMainEvent(t)) return;
      const e = this._groupSelector;
      if (e) {
        const s = this.getScenePoint(t);
        e.deltaX = s.x - e.x, e.deltaY = s.y - e.y, this.renderTop();
      } else if (this._currentTransform) this._transformObject(t);
      else {
        const s = this.findTarget(t);
        this._setCursorFromEvent(t, s), this._fireOverOutEvents(t, s);
      }
      this.textEditingManager.onMouseMove(t), this._handleEvent(t, "move"), this._resetTransformEventData();
    }
    _fireOverOutEvents(t, e) {
      const s = this._hoveredTarget, i = this._hoveredTargets, r = this.targets, a = Math.max(i.length, r.length);
      this.fireSyntheticInOutEvents("mouse", {
        e: t,
        target: e,
        oldTarget: s,
        fireCanvas: true
      });
      for (let o = 0; o < a; o++) this.fireSyntheticInOutEvents("mouse", {
        e: t,
        target: r[o],
        oldTarget: i[o]
      });
      this._hoveredTarget = e, this._hoveredTargets = this.targets.concat();
    }
    _fireEnterLeaveEvents(t, e) {
      const s = this._draggedoverTarget, i = this._hoveredTargets, r = this.targets, a = Math.max(i.length, r.length);
      this.fireSyntheticInOutEvents("drag", A(A({}, e), {}, {
        target: t,
        oldTarget: s,
        fireCanvas: true
      }));
      for (let o = 0; o < a; o++) this.fireSyntheticInOutEvents("drag", A(A({}, e), {}, {
        target: r[o],
        oldTarget: i[o]
      }));
      this._draggedoverTarget = t;
    }
    fireSyntheticInOutEvents(t, e) {
      let { target: s, oldTarget: i, fireCanvas: r, e: a } = e, o = yt(e, __);
      const { targetIn: h, targetOut: c, canvasIn: u, canvasOut: d } = x_[t], g = i !== s;
      if (i && g) {
        const f = A(A({}, o), {}, {
          e: a,
          target: i,
          nextTarget: s
        }, Bn(this, a));
        r && this.fire(d, f), i.fire(c, f);
      }
      if (s && g) {
        const f = A(A({}, o), {}, {
          e: a,
          target: s,
          previousTarget: i
        }, Bn(this, a));
        r && this.fire(u, f), s.fire(h, f);
      }
    }
    __onMouseWheel(t) {
      this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData();
    }
    _transformObject(t) {
      const e = this.getScenePoint(t), s = this._currentTransform, i = s.target, r = i.group ? En(e, void 0, i.group.calcTransformMatrix()) : e;
      s.shiftKey = t.shiftKey, s.altKey = !!this.centeredKey && t[this.centeredKey], this._performTransformAction(t, s, r), s.actionPerformed && this.requestRenderAll();
    }
    _performTransformAction(t, e, s) {
      const { action: i, actionHandler: r, target: a } = e, o = !!r && r(t, e, s.x, s.y);
      o && a.setCoords(), i === "drag" && o && (e.target.isMoving = true, this.setCursor(e.target.moveCursor || this.moveCursor)), e.actionPerformed = e.actionPerformed || o;
    }
    _setCursorFromEvent(t, e) {
      if (!e) return void this.setCursor(this.defaultCursor);
      let s = e.hoverCursor || this.hoverCursor;
      const i = an(this._activeObject) ? this._activeObject : null, r = (!i || e.group !== i) && e.findControl(this.getViewportPoint(t));
      if (r) {
        const a = r.control;
        this.setCursor(a.cursorStyleHandler(t, a, e));
      } else e.subTargetCheck && this.targets.concat().reverse().map((a) => {
        s = a.hoverCursor || s;
      }), this.setCursor(s);
    }
    handleMultiSelection(t, e) {
      const s = this._activeObject, i = an(s);
      if (s && this._isSelectionKeyPressed(t) && this.selection && e && e.selectable && (s !== e || i) && (i || !e.isDescendantOf(s) && !s.isDescendantOf(e)) && !e.onSelect({
        e: t
      }) && !s.getActiveControl()) {
        if (i) {
          const r = s.getObjects();
          if (e === s) {
            const a = this.getViewportPoint(t);
            if (!(e = this.searchPossibleTargets(r, a) || this.searchPossibleTargets(this._objects, a)) || !e.selectable) return false;
          }
          e.group === s ? (s.remove(e), this._hoveredTarget = e, this._hoveredTargets = [
            ...this.targets
          ], s.size() === 1 && this._setActiveObject(s.item(0), t)) : (s.multiSelectAdd(e), this._hoveredTarget = s, this._hoveredTargets = [
            ...this.targets
          ]), this._fireSelectionEvents(r, t);
        } else {
          s.isEditing && s.exitEditing();
          const r = new (B.getClass("ActiveSelection"))([], {
            canvas: this
          });
          r.multiSelectAdd(s, e), this._hoveredTarget = r, this._setActiveObject(r, t), this._fireSelectionEvents([
            s
          ], t);
        }
        return true;
      }
      return false;
    }
    handleSelection(t) {
      if (!this.selection || !this._groupSelector) return false;
      const { x: e, y: s, deltaX: i, deltaY: r } = this._groupSelector, a = new M(e, s), o = a.add(new M(i, r)), h = a.min(o), c = a.max(o).subtract(h), u = this.collectObjects({
        left: h.x,
        top: h.y,
        width: c.x,
        height: c.y
      }, {
        includeIntersecting: !this.selectionFullyContained
      }), d = a.eq(o) ? u[0] ? [
        u[0]
      ] : [] : u.length > 1 ? u.filter((g) => !g.onSelect({
        e: t
      })).reverse() : u;
      if (d.length === 1) this.setActiveObject(d[0], t);
      else if (d.length > 1) {
        const g = B.getClass("ActiveSelection");
        this.setActiveObject(new g(d, {
          canvas: this
        }), t);
      }
      return this._groupSelector = null, true;
    }
    clear() {
      this.textEditingManager.clear(), super.clear();
    }
    destroy() {
      this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
    }
  }
  const s0 = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  }, S_ = A(A({}, s0), {}, {
    r1: 0,
    r2: 0
  }), ka = (n, t) => isNaN(n) && typeof t == "number" ? t : n, C_ = /^(\d+\.\d+)%|(\d+)%$/;
  function i0(n) {
    return n && C_.test(n);
  }
  function r0(n, t) {
    const e = typeof n == "number" ? n : typeof n == "string" ? parseFloat(n) / (i0(n) ? 100 : 1) : NaN;
    return On(0, ka(e, t), 1);
  }
  const A_ = /\s*;\s*/, k_ = /\s*:\s*/;
  function T_(n, t) {
    let e, s;
    const i = n.getAttribute("style");
    if (i) {
      const a = i.split(A_);
      a[a.length - 1] === "" && a.pop();
      for (let o = a.length; o--; ) {
        const [h, c] = a[o].split(k_).map((u) => u.trim());
        h === "stop-color" ? e = c : h === "stop-opacity" && (s = c);
      }
    }
    const r = new ht(e || n.getAttribute("stop-color") || "rgb(0,0,0)");
    return {
      offset: r0(n.getAttribute("offset"), 0),
      color: r.toRgb(),
      opacity: ka(parseFloat(s || n.getAttribute("stop-opacity") || ""), 1) * r.getAlpha() * t
    };
  }
  function M_(n, t) {
    const e = [], s = n.getElementsByTagName("stop"), i = r0(t, 1);
    for (let r = s.length; r--; ) e.push(T_(s[r], i));
    return e;
  }
  function n0(n) {
    return n.nodeName === "linearGradient" || n.nodeName === "LINEARGRADIENT" ? "linear" : "radial";
  }
  function a0(n) {
    return n.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage";
  }
  function bs(n, t) {
    return n.getAttribute(t);
  }
  function E_(n, t) {
    return function(e, s) {
      let i, { width: r, height: a, gradientUnits: o } = s;
      return Object.keys(e).reduce((h, c) => {
        const u = e[c];
        return u === "Infinity" ? i = 1 : u === "-Infinity" ? i = 0 : (i = typeof u == "string" ? parseFloat(u) : u, typeof u == "string" && i0(u) && (i *= 0.01, o === "pixels" && (c !== "x1" && c !== "x2" && c !== "r2" || (i *= r), c !== "y1" && c !== "y2" || (i *= a)))), h[c] = i, h;
      }, {});
    }(n0(n) === "linear" ? function(e) {
      return {
        x1: bs(e, "x1") || 0,
        y1: bs(e, "y1") || 0,
        x2: bs(e, "x2") || "100%",
        y2: bs(e, "y2") || 0
      };
    }(n) : function(e) {
      return {
        x1: bs(e, "fx") || bs(e, "cx") || "50%",
        y1: bs(e, "fy") || bs(e, "cy") || "50%",
        r1: 0,
        x2: bs(e, "cx") || "50%",
        y2: bs(e, "cy") || "50%",
        r2: bs(e, "r") || "50%"
      };
    }(n), A(A({}, t), {}, {
      gradientUnits: a0(n)
    }));
  }
  class xo {
    constructor(t) {
      const { type: e = "linear", gradientUnits: s = "pixels", coords: i = {}, colorStops: r = [], offsetX: a = 0, offsetY: o = 0, gradientTransform: h, id: c } = t || {};
      Object.assign(this, {
        type: e,
        gradientUnits: s,
        coords: A(A({}, e === "radial" ? S_ : s0), i),
        colorStops: r,
        offsetX: a,
        offsetY: o,
        gradientTransform: h,
        id: c ? "".concat(c, "_").concat(Tr()) : Tr()
      });
    }
    addColorStop(t) {
      for (const e in t) {
        const s = new ht(t[e]);
        this.colorStops.push({
          offset: parseFloat(e),
          color: s.toRgb(),
          opacity: s.getAlpha()
        });
      }
      return this;
    }
    toObject(t) {
      return A(A({}, In(this, t)), {}, {
        type: this.type,
        coords: A({}, this.coords),
        colorStops: this.colorStops.map((e) => A({}, e)),
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        gradientUnits: this.gradientUnits,
        gradientTransform: this.gradientTransform ? [
          ...this.gradientTransform
        ] : void 0
      });
    }
    toSVG(t) {
      let { additionalTransform: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const s = [], i = this.gradientTransform ? this.gradientTransform.concat() : Te.concat(), r = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox", a = this.colorStops.map((d) => A({}, d)).sort((d, g) => d.offset - g.offset);
      let o = -this.offsetX, h = -this.offsetY;
      var c;
      r === "objectBoundingBox" ? (o /= t.width, h /= t.height) : (o += t.width / 2, h += t.height / 2), (c = t) && typeof c._renderPathCommands == "function" && this.gradientUnits !== "percentage" && (o -= t.pathOffset.x, h -= t.pathOffset.y), i[4] -= o, i[5] -= h;
      const u = [
        'id="SVGID_'.concat(this.id, '"'),
        'gradientUnits="'.concat(r, '"'),
        'gradientTransform="'.concat(e ? e + " " : "").concat(io(i), '"'),
        ""
      ].join(" ");
      if (this.type === "linear") {
        const { x1: d, y1: g, x2: f, y2: p } = this.coords;
        s.push("<linearGradient ", u, ' x1="', d, '" y1="', g, '" x2="', f, '" y2="', p, `">
`);
      } else if (this.type === "radial") {
        const { x1: d, y1: g, x2: f, y2: p, r1: v, r2: b } = this.coords, _ = v > b;
        s.push("<radialGradient ", u, ' cx="', _ ? d : f, '" cy="', _ ? g : p, '" r="', _ ? v : b, '" fx="', _ ? f : d, '" fy="', _ ? p : g, `">
`), _ && (a.reverse(), a.forEach((x) => {
          x.offset = 1 - x.offset;
        }));
        const S = Math.min(v, b);
        if (S > 0) {
          const x = S / Math.max(v, b);
          a.forEach((C) => {
            C.offset += x * (1 - C.offset);
          });
        }
      }
      return a.forEach((d) => {
        let { color: g, offset: f, opacity: p } = d;
        s.push("<stop ", 'offset="', 100 * f + "%", '" style="stop-color:', g, p !== void 0 ? ";stop-opacity: " + p : ";", `"/>
`);
      }), s.push(this.type === "linear" ? "</linearGradient>" : "</radialGradient>", `
`), s.join("");
    }
    toLive(t) {
      const { x1: e, y1: s, x2: i, y2: r, r1: a, r2: o } = this.coords, h = this.type === "linear" ? t.createLinearGradient(e, s, i, r) : t.createRadialGradient(e, s, a, i, r, o);
      return this.colorStops.forEach((c) => {
        let { color: u, opacity: d, offset: g } = c;
        h.addColorStop(g, d !== void 0 ? new ht(u).setAlpha(d).toRgba() : u);
      }), h;
    }
    static async fromObject(t) {
      const { colorStops: e, gradientTransform: s } = t;
      return new this(A(A({}, t), {}, {
        colorStops: e ? e.map((i) => A({}, i)) : void 0,
        gradientTransform: s ? [
          ...s
        ] : void 0
      }));
    }
    static fromElement(t, e, s) {
      const i = a0(t), r = e._findCenterFromElement();
      return new this(A({
        id: t.getAttribute("id") || void 0,
        type: n0(t),
        coords: E_(t, {
          width: s.viewBoxWidth || s.width,
          height: s.viewBoxHeight || s.height
        }),
        colorStops: M_(t, s.opacity),
        gradientUnits: i,
        gradientTransform: bu(t.getAttribute("gradientTransform") || "")
      }, i === "pixels" ? {
        offsetX: e.width / 2 - r.x,
        offsetY: e.height / 2 - r.y
      } : {
        offsetX: 0,
        offsetY: 0
      }));
    }
  }
  k(xo, "type", "Gradient"), B.setClass(xo, "gradient"), B.setClass(xo, "linear"), B.setClass(xo, "radial");
  const D_ = [
    "type",
    "source",
    "patternTransform"
  ];
  class Gd {
    get type() {
      return "pattern";
    }
    set type(t) {
      Ni("warn", "Setting type has no effect", t);
    }
    constructor(t) {
      k(this, "repeat", "repeat"), k(this, "offsetX", 0), k(this, "offsetY", 0), k(this, "crossOrigin", ""), this.id = Tr(), Object.assign(this, t);
    }
    isImageSource() {
      return !!this.source && typeof this.source.src == "string";
    }
    isCanvasSource() {
      return !!this.source && !!this.source.toDataURL;
    }
    sourceToString() {
      return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
    }
    toLive(t) {
      return this.source && (!this.isImageSource() || this.source.complete && this.source.naturalWidth !== 0 && this.source.naturalHeight !== 0) ? t.createPattern(this.source, this.repeat) : null;
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const { repeat: e, crossOrigin: s } = this;
      return A(A({}, In(this, t)), {}, {
        type: "pattern",
        source: this.sourceToString(),
        repeat: e,
        crossOrigin: s,
        offsetX: ft(this.offsetX, rt.NUM_FRACTION_DIGITS),
        offsetY: ft(this.offsetY, rt.NUM_FRACTION_DIGITS),
        patternTransform: this.patternTransform ? [
          ...this.patternTransform
        ] : null
      });
    }
    toSVG(t) {
      let { width: e, height: s } = t;
      const { source: i, repeat: r, id: a } = this, o = ka(this.offsetX / e, 0), h = ka(this.offsetY / s, 0), c = r === "repeat-y" || r === "no-repeat" ? 1 + Math.abs(o || 0) : ka(i.width / e, 0), u = r === "repeat-x" || r === "no-repeat" ? 1 + Math.abs(h || 0) : ka(i.height / s, 0);
      return [
        '<pattern id="SVGID_'.concat(a, '" x="').concat(o, '" y="').concat(h, '" width="').concat(c, '" height="').concat(u, '">'),
        '<image x="0" y="0" width="'.concat(i.width, '" height="').concat(i.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'),
        "</pattern>",
        ""
      ].join(`
`);
    }
    static async fromObject(t, e) {
      let { type: s, source: i, patternTransform: r } = t, a = yt(t, D_);
      const o = await _h(i, A(A({}, e), {}, {
        crossOrigin: a.crossOrigin
      }));
      return new this(A(A({}, a), {}, {
        patternTransform: r && r.slice(0),
        source: o
      }));
    }
  }
  k(Gd, "type", "Pattern"), B.setClass(Gd), B.setClass(Gd, "pattern");
  const O_ = [
    "path",
    "left",
    "top"
  ], P_ = [
    "d"
  ];
  class on extends me {
    constructor(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { path: s, left: i, top: r } = e, a = yt(e, O_);
      super(), Object.assign(this, on.ownDefaults), this.setOptions(a), this._setPath(t || [], true), typeof i == "number" && this.set(at, i), typeof r == "number" && this.set(He, r);
    }
    _setPath(t, e) {
      this.path = Yv(Array.isArray(t) ? t : Zv(t)), this.setBoundingBox(e);
    }
    _findCenterFromElement() {
      const t = this._calcBoundsFromPath();
      return new M(t.left + t.width / 2, t.top + t.height / 2);
    }
    _renderPathCommands(t) {
      const e = -this.pathOffset.x, s = -this.pathOffset.y;
      t.beginPath();
      for (const i of this.path) switch (i[0]) {
        case "L":
          t.lineTo(i[1] + e, i[2] + s);
          break;
        case "M":
          t.moveTo(i[1] + e, i[2] + s);
          break;
        case "C":
          t.bezierCurveTo(i[1] + e, i[2] + s, i[3] + e, i[4] + s, i[5] + e, i[6] + s);
          break;
        case "Q":
          t.quadraticCurveTo(i[1] + e, i[2] + s, i[3] + e, i[4] + s);
          break;
        case "Z":
          t.closePath();
      }
    }
    _render(t) {
      this._renderPathCommands(t), this._renderPaintInOrder(t);
    }
    toString() {
      return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>");
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return A(A({}, super.toObject(t)), {}, {
        path: this.path.map((e) => e.slice())
      });
    }
    toDatalessObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const e = this.toObject(t);
      return this.sourcePath && (delete e.path, e.sourcePath = this.sourcePath), e;
    }
    _toSVG() {
      const t = t0(this.path, rt.NUM_FRACTION_DIGITS);
      return [
        "<path ",
        "COMMON_PARTS",
        'd="'.concat(t, `" stroke-linecap="round" />
`)
      ];
    }
    _getOffsetTransform() {
      const t = rt.NUM_FRACTION_DIGITS;
      return " translate(".concat(ft(-this.pathOffset.x, t), ", ").concat(ft(-this.pathOffset.y, t), ")");
    }
    toClipPathSVG(t) {
      const e = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
        reviver: t,
        additionalTransform: e
      });
    }
    toSVG(t) {
      const e = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), {
        reviver: t,
        additionalTransform: e
      });
    }
    complexity() {
      return this.path.length;
    }
    setDimensions() {
      this.setBoundingBox();
    }
    setBoundingBox(t) {
      const { width: e, height: s, pathOffset: i } = this._calcDimensions();
      this.set({
        width: e,
        height: s,
        pathOffset: i
      }), t && this.setPositionByOrigin(i, q, q);
    }
    _calcBoundsFromPath() {
      const t = [];
      let e = 0, s = 0, i = 0, r = 0;
      for (const a of this.path) switch (a[0]) {
        case "L":
          i = a[1], r = a[2], t.push({
            x: e,
            y: s
          }, {
            x: i,
            y: r
          });
          break;
        case "M":
          i = a[1], r = a[2], e = i, s = r;
          break;
        case "C":
          t.push(..._g(i, r, a[1], a[2], a[3], a[4], a[5], a[6])), i = a[5], r = a[6];
          break;
        case "Q":
          t.push(..._g(i, r, a[1], a[2], a[1], a[2], a[3], a[4])), i = a[3], r = a[4];
          break;
        case "Z":
          i = e, r = s;
      }
      return ni(t);
    }
    _calcDimensions() {
      const t = this._calcBoundsFromPath();
      return A(A({}, t), {}, {
        pathOffset: new M(t.left + t.width / 2, t.top + t.height / 2)
      });
    }
    static fromObject(t) {
      return this._fromObject(t, {
        extraParam: "path"
      });
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, this.ATTRIBUTE_NAMES, s), { d: r } = i;
      return new this(r, A(A(A({}, yt(i, P_)), e), {}, {
        left: void 0,
        top: void 0
      }));
    }
  }
  k(on, "type", "Path"), k(on, "cacheProperties", [
    ...Bi,
    "path",
    "fillRule"
  ]), k(on, "ATTRIBUTE_NAMES", [
    ...Pr,
    "d"
  ]), B.setClass(on), B.setSVGClass(on);
  const L_ = [
    "left",
    "top",
    "radius"
  ], o0 = [
    "radius",
    "startAngle",
    "endAngle",
    "counterClockwise"
  ];
  class ki extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), ki.ownDefaults);
    }
    constructor(t) {
      super(), Object.assign(this, ki.ownDefaults), this.setOptions(t);
    }
    _set(t, e) {
      return super._set(t, e), t === "radius" && this.setRadius(e), this;
    }
    _render(t) {
      t.beginPath(), t.arc(0, 0, this.radius, Ct(this.startAngle), Ct(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t);
    }
    getRadiusX() {
      return this.get("radius") * this.get(Me);
    }
    getRadiusY() {
      return this.get("radius") * this.get(Ke);
    }
    setRadius(t) {
      this.radius = t, this.set({
        width: 2 * t,
        height: 2 * t
      });
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return super.toObject([
        ...o0,
        ...t
      ]);
    }
    _toSVG() {
      const t = (this.endAngle - this.startAngle) % 360;
      if (t === 0) return [
        "<circle ",
        "COMMON_PARTS",
        'cx="0" cy="0" ',
        'r="',
        "".concat(this.radius),
        `" />
`
      ];
      {
        const { radius: e } = this, s = Ct(this.startAngle), i = Ct(this.endAngle), r = Ps(s) * e, a = Ls(s) * e, o = Ps(i) * e, h = Ls(i) * e, c = t > 180 ? 1 : 0, u = this.counterClockwise ? 0 : 1;
        return [
          '<path d="M '.concat(r, " ").concat(a, " A ").concat(e, " ").concat(e, " 0 ").concat(c, " ").concat(u, " ").concat(o, " ").concat(h, '" '),
          "COMMON_PARTS",
          ` />
`
        ];
      }
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, this.ATTRIBUTE_NAMES, s), { left: r = 0, top: a = 0, radius: o = 0 } = i;
      return new this(A(A({}, yt(i, L_)), {}, {
        radius: o,
        left: r - o,
        top: a - o
      }));
    }
    static fromObject(t) {
      return super._fromObject(t);
    }
  }
  k(ki, "type", "Circle"), k(ki, "cacheProperties", [
    ...Bi,
    ...o0
  ]), k(ki, "ownDefaults", {
    radius: 0,
    startAngle: 0,
    endAngle: 360,
    counterClockwise: false
  }), k(ki, "ATTRIBUTE_NAMES", [
    "cx",
    "cy",
    "r",
    ...Pr
  ]), B.setClass(ki), B.setSVGClass(ki);
  const R_ = [
    "x1",
    "y1",
    "x2",
    "y2"
  ], I_ = [
    "x1",
    "y1",
    "x2",
    "y2"
  ], Sg = [
    "x1",
    "x2",
    "y1",
    "y2"
  ];
  class hn extends me {
    constructor() {
      let [t, e, s, i] = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
        0,
        0,
        0,
        0
      ], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(), Object.assign(this, hn.ownDefaults), this.setOptions(r), this.x1 = t, this.x2 = s, this.y1 = e, this.y2 = i, this._setWidthHeight();
      const { left: a, top: o } = r;
      typeof a == "number" && this.set(at, a), typeof o == "number" && this.set(He, o);
    }
    _setWidthHeight() {
      const { x1: t, y1: e, x2: s, y2: i } = this;
      this.width = Math.abs(s - t), this.height = Math.abs(i - e);
      const { left: r, top: a, width: o, height: h } = ni([
        {
          x: t,
          y: e
        },
        {
          x: s,
          y: i
        }
      ]), c = new M(r + o / 2, a + h / 2);
      this.setPositionByOrigin(c, q, q);
    }
    _set(t, e) {
      return super._set(t, e), Sg.includes(t) && this._setWidthHeight(), this;
    }
    _render(t) {
      t.beginPath();
      const e = this.calcLinePoints();
      t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2), t.lineWidth = this.strokeWidth;
      const s = t.strokeStyle;
      var i;
      fs(this.stroke) ? t.strokeStyle = this.stroke.toLive(t) : t.strokeStyle = (i = this.stroke) !== null && i !== void 0 ? i : t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = s;
    }
    _findCenterFromElement() {
      return new M((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return A(A({}, super.toObject(t)), this.calcLinePoints());
    }
    _getNonTransformedDimensions() {
      const t = super._getNonTransformedDimensions();
      return this.strokeLineCap === "butt" && (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)), t;
    }
    calcLinePoints() {
      const { x1: t, x2: e, y1: s, y2: i, width: r, height: a } = this, o = t <= e ? -1 : 1, h = s <= i ? -1 : 1;
      return {
        x1: o * r / 2,
        x2: o * -r / 2,
        y1: h * a / 2,
        y2: h * -a / 2
      };
    }
    _toSVG() {
      const { x1: t, x2: e, y1: s, y2: i } = this.calcLinePoints();
      return [
        "<line ",
        "COMMON_PARTS",
        'x1="'.concat(t, '" y1="').concat(s, '" x2="').concat(e, '" y2="').concat(i, `" />
`)
      ];
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, this.ATTRIBUTE_NAMES, s), { x1: r = 0, y1: a = 0, x2: o = 0, y2: h = 0 } = i;
      return new this([
        r,
        a,
        o,
        h
      ], yt(i, R_));
    }
    static fromObject(t) {
      let { x1: e, y1: s, x2: i, y2: r } = t, a = yt(t, I_);
      return this._fromObject(A(A({}, a), {}, {
        points: [
          e,
          s,
          i,
          r
        ]
      }), {
        extraParam: "points"
      });
    }
  }
  k(hn, "type", "Line"), k(hn, "cacheProperties", [
    ...Bi,
    ...Sg
  ]), k(hn, "ATTRIBUTE_NAMES", Pr.concat(Sg)), B.setClass(hn), B.setSVGClass(hn);
  class mn extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), mn.ownDefaults);
    }
    constructor(t) {
      super(), Object.assign(this, mn.ownDefaults), this.setOptions(t);
    }
    _render(t) {
      const e = this.width / 2, s = this.height / 2;
      t.beginPath(), t.moveTo(-e, s), t.lineTo(0, -s), t.lineTo(e, s), t.closePath(), this._renderPaintInOrder(t);
    }
    _toSVG() {
      const t = this.width / 2, e = this.height / 2;
      return [
        "<polygon ",
        "COMMON_PARTS",
        'points="',
        "".concat(-t, " ").concat(e, ",0 ").concat(-e, ",").concat(t, " ").concat(e),
        '" />'
      ];
    }
  }
  k(mn, "type", "Triangle"), k(mn, "ownDefaults", {
    width: 100,
    height: 100
  }), B.setClass(mn), B.setSVGClass(mn);
  const h0 = [
    "rx",
    "ry"
  ];
  class Ti extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), Ti.ownDefaults);
    }
    constructor(t) {
      super(), Object.assign(this, Ti.ownDefaults), this.setOptions(t);
    }
    _set(t, e) {
      switch (super._set(t, e), t) {
        case "rx":
          this.rx = e, this.set("width", 2 * e);
          break;
        case "ry":
          this.ry = e, this.set("height", 2 * e);
      }
      return this;
    }
    getRx() {
      return this.get("rx") * this.get(Me);
    }
    getRy() {
      return this.get("ry") * this.get(Ke);
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return super.toObject([
        ...h0,
        ...t
      ]);
    }
    _toSVG() {
      return [
        "<ellipse ",
        "COMMON_PARTS",
        'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, `" />
`)
      ];
    }
    _render(t) {
      t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, Wi, false), t.restore(), this._renderPaintInOrder(t);
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, this.ATTRIBUTE_NAMES, s);
      return i.left = (i.left || 0) - i.rx, i.top = (i.top || 0) - i.ry, new this(i);
    }
  }
  function F_(n) {
    if (!n) return [];
    const t = n.replace(/,/g, " ").trim().split(/\s+/), e = [];
    for (let s = 0; s < t.length; s += 2) e.push({
      x: parseFloat(t[s]),
      y: parseFloat(t[s + 1])
    });
    return e;
  }
  k(Ti, "type", "Ellipse"), k(Ti, "cacheProperties", [
    ...Bi,
    ...h0
  ]), k(Ti, "ownDefaults", {
    rx: 0,
    ry: 0
  }), k(Ti, "ATTRIBUTE_NAMES", [
    ...Pr,
    "cx",
    "cy",
    "rx",
    "ry"
  ]), B.setClass(Ti), B.setSVGClass(Ti);
  const j_ = [
    "left",
    "top"
  ], l0 = {
    exactBoundingBox: false
  };
  class Ts extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), Ts.ownDefaults);
    }
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(), k(this, "strokeDiff", void 0), Object.assign(this, Ts.ownDefaults), this.setOptions(e), this.points = t;
      const { left: s, top: i } = e;
      this.initialized = true, this.setBoundingBox(true), typeof s == "number" && this.set(at, s), typeof i == "number" && this.set(He, i);
    }
    isOpen() {
      return true;
    }
    _projectStrokeOnPoints(t) {
      return Nv(this.points, t, this.isOpen());
    }
    _calcDimensions(t) {
      t = A({
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        strokeLineCap: this.strokeLineCap,
        strokeLineJoin: this.strokeLineJoin,
        strokeMiterLimit: this.strokeMiterLimit,
        strokeUniform: this.strokeUniform,
        strokeWidth: this.strokeWidth
      }, t || {});
      const e = this.exactBoundingBox ? this._projectStrokeOnPoints(t).map((c) => c.projectedPoint) : this.points;
      if (e.length === 0) return {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        pathOffset: new M(),
        strokeOffset: new M(),
        strokeDiff: new M()
      };
      const s = ni(e), i = hl(A(A({}, t), {}, {
        scaleX: 1,
        scaleY: 1
      })), r = ni(this.points.map((c) => de(c, i, true))), a = new M(this.scaleX, this.scaleY);
      let o = s.left + s.width / 2, h = s.top + s.height / 2;
      return this.exactBoundingBox && (o -= h * Math.tan(Ct(this.skewX)), h -= o * Math.tan(Ct(this.skewY))), A(A({}, s), {}, {
        pathOffset: new M(o, h),
        strokeOffset: new M(r.left, r.top).subtract(new M(s.left, s.top)).multiply(a),
        strokeDiff: new M(s.width, s.height).subtract(new M(r.width, r.height)).multiply(a)
      });
    }
    _findCenterFromElement() {
      const t = ni(this.points);
      return new M(t.left + t.width / 2, t.top + t.height / 2);
    }
    setDimensions() {
      this.setBoundingBox();
    }
    setBoundingBox(t) {
      const { left: e, top: s, width: i, height: r, pathOffset: a, strokeOffset: o, strokeDiff: h } = this._calcDimensions();
      this.set({
        width: i,
        height: r,
        pathOffset: a,
        strokeOffset: o,
        strokeDiff: h
      }), t && this.setPositionByOrigin(new M(e + i / 2, s + r / 2), q, q);
    }
    isStrokeAccountedForInDimensions() {
      return this.exactBoundingBox;
    }
    _getNonTransformedDimensions() {
      return this.exactBoundingBox ? new M(this.width, this.height) : super._getNonTransformedDimensions();
    }
    _getTransformedDimensions() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (this.exactBoundingBox) {
        let a;
        if (Object.keys(t).some((o) => this.strokeUniform || this.constructor.layoutProperties.includes(o))) {
          var e, s;
          const { width: o, height: h } = this._calcDimensions(t);
          a = new M((e = t.width) !== null && e !== void 0 ? e : o, (s = t.height) !== null && s !== void 0 ? s : h);
        } else {
          var i, r;
          a = new M((i = t.width) !== null && i !== void 0 ? i : this.width, (r = t.height) !== null && r !== void 0 ? r : this.height);
        }
        return a.multiply(new M(t.scaleX || this.scaleX, t.scaleY || this.scaleY));
      }
      return super._getTransformedDimensions(t);
    }
    _set(t, e) {
      const s = this.initialized && this[t] !== e, i = super._set(t, e);
      return this.exactBoundingBox && s && ((t === Me || t === Ke) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t)) && this.setDimensions(), i;
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return A(A({}, super.toObject(t)), {}, {
        points: this.points.map((e) => {
          let { x: s, y: i } = e;
          return {
            x: s,
            y: i
          };
        })
      });
    }
    _toSVG() {
      const t = [], e = this.pathOffset.x, s = this.pathOffset.y, i = rt.NUM_FRACTION_DIGITS;
      for (let r = 0, a = this.points.length; r < a; r++) t.push(ft(this.points[r].x - e, i), ",", ft(this.points[r].y - s, i), " ");
      return [
        "<".concat(this.constructor.type.toLowerCase(), " "),
        "COMMON_PARTS",
        'points="'.concat(t.join(""), `" />
`)
      ];
    }
    _render(t) {
      const e = this.points.length, s = this.pathOffset.x, i = this.pathOffset.y;
      if (e && !isNaN(this.points[e - 1].y)) {
        t.beginPath(), t.moveTo(this.points[0].x - s, this.points[0].y - i);
        for (let r = 0; r < e; r++) {
          const a = this.points[r];
          t.lineTo(a.x - s, a.y - i);
        }
        !this.isOpen() && t.closePath(), this._renderPaintInOrder(t);
      }
    }
    complexity() {
      return this.points.length;
    }
    static async fromElement(t, e, s) {
      return new this(F_(t.getAttribute("points")), A(A({}, yt(Hi(t, this.ATTRIBUTE_NAMES, s), j_)), e));
    }
    static fromObject(t) {
      return this._fromObject(t, {
        extraParam: "points"
      });
    }
  }
  k(Ts, "ownDefaults", l0), k(Ts, "type", "Polyline"), k(Ts, "layoutProperties", [
    oo,
    ho,
    "strokeLineCap",
    "strokeLineJoin",
    "strokeMiterLimit",
    "strokeWidth",
    "strokeUniform",
    "points"
  ]), k(Ts, "cacheProperties", [
    ...Bi,
    "points"
  ]), k(Ts, "ATTRIBUTE_NAMES", [
    ...Pr
  ]), B.setClass(Ts), B.setSVGClass(Ts);
  class bl extends Ts {
    isOpen() {
      return false;
    }
  }
  k(bl, "ownDefaults", l0), k(bl, "type", "Polygon"), B.setClass(bl), B.setSVGClass(bl);
  const c0 = [
    "fontSize",
    "fontWeight",
    "fontFamily",
    "fontStyle"
  ], u0 = [
    "underline",
    "overline",
    "linethrough"
  ], d0 = [
    ...c0,
    "lineHeight",
    "text",
    "charSpacing",
    "textAlign",
    "styles",
    "path",
    "pathStartOffset",
    "pathSide",
    "pathAlign"
  ], g0 = [
    ...d0,
    ...u0,
    "textBackgroundColor",
    "direction"
  ], N_ = [
    ...c0,
    ...u0,
    ke,
    "strokeWidth",
    jt,
    "deltaY",
    "textBackgroundColor"
  ], W_ = {
    _reNewline: Xf,
    _reSpacesAndTabs: /[ \t\r]/g,
    _reSpaceAndTab: /[ \t\r]/,
    _reWords: /\S+/g,
    fontSize: 40,
    fontWeight: "normal",
    fontFamily: "Times New Roman",
    underline: false,
    overline: false,
    linethrough: false,
    textAlign: at,
    fontStyle: "normal",
    lineHeight: 1.16,
    superscript: {
      size: 0.6,
      baseline: -0.35
    },
    subscript: {
      size: 0.6,
      baseline: 0.11
    },
    textBackgroundColor: "",
    stroke: null,
    shadow: null,
    path: void 0,
    pathStartOffset: 0,
    pathSide: at,
    pathAlign: "baseline",
    _fontSizeFraction: 0.222,
    offsets: {
      underline: 0.1,
      linethrough: -0.315,
      overline: -0.88
    },
    _fontSizeMult: 1.13,
    charSpacing: 0,
    deltaY: 0,
    direction: "ltr",
    CACHE_FONT_SIZE: 400,
    MIN_TEXT_WIDTH: 2
  }, si = "justify", Su = "justify-left", xh = "justify-right", Sh = "justify-center";
  class f0 extends me {
    isEmptyStyles(t) {
      if (!this.styles || t !== void 0 && !this.styles[t]) return true;
      const e = t === void 0 ? this.styles : {
        line: this.styles[t]
      };
      for (const s in e) for (const i in e[s]) for (const r in e[s][i]) return false;
      return true;
    }
    styleHas(t, e) {
      if (!this.styles || e !== void 0 && !this.styles[e]) return false;
      const s = e === void 0 ? this.styles : {
        0: this.styles[e]
      };
      for (const i in s) for (const r in s[i]) if (s[i][r][t] !== void 0) return true;
      return false;
    }
    cleanStyle(t) {
      if (!this.styles) return false;
      const e = this.styles;
      let s, i, r = 0, a = true, o = 0;
      for (const h in e) {
        s = 0;
        for (const c in e[h]) {
          const u = e[h][c] || {};
          r++, u[t] !== void 0 ? (i ? u[t] !== i && (a = false) : i = u[t], u[t] === this[t] && delete u[t]) : a = false, Object.keys(u).length !== 0 ? s++ : delete e[h][c];
        }
        s === 0 && delete e[h];
      }
      for (let h = 0; h < this._textLines.length; h++) o += this._textLines[h].length;
      a && r === o && (this[t] = i, this.removeStyle(t));
    }
    removeStyle(t) {
      if (!this.styles) return;
      const e = this.styles;
      let s, i, r;
      for (i in e) {
        for (r in s = e[i], s) delete s[r][t], Object.keys(s[r]).length === 0 && delete s[r];
        Object.keys(s).length === 0 && delete e[i];
      }
    }
    _extendStyles(t, e) {
      const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t);
      this._getLineStyle(s) || this._setLineStyle(s);
      const r = Jf(A(A({}, this._getStyleDeclaration(s, i)), e), (a) => a !== void 0);
      this._setStyleDeclaration(s, i, r);
    }
    getSelectionStyles(t, e, s) {
      const i = [];
      for (let r = t; r < (e || t); r++) i.push(this.getStyleAtPosition(r, s));
      return i;
    }
    getStyleAtPosition(t, e) {
      const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t);
      return e ? this.getCompleteStyleDeclaration(s, i) : this._getStyleDeclaration(s, i);
    }
    setSelectionStyles(t, e, s) {
      for (let i = e; i < (s || e); i++) this._extendStyles(i, t);
      this._forceClearCache = true;
    }
    _getStyleDeclaration(t, e) {
      var s;
      const i = this.styles && this.styles[t];
      return i && (s = i[e]) !== null && s !== void 0 ? s : {};
    }
    getCompleteStyleDeclaration(t, e) {
      return A(A({}, In(this, this.constructor._styleProperties)), this._getStyleDeclaration(t, e));
    }
    _setStyleDeclaration(t, e, s) {
      this.styles[t][e] = s;
    }
    _deleteStyleDeclaration(t, e) {
      delete this.styles[t][e];
    }
    _getLineStyle(t) {
      return !!this.styles[t];
    }
    _setLineStyle(t) {
      this.styles[t] = {};
    }
    _deleteLineStyle(t) {
      delete this.styles[t];
    }
  }
  k(f0, "_styleProperties", N_);
  const B_ = /  +/g, H_ = /"/g;
  function Xd(n, t, e, s, i) {
    return "		".concat(function(r, a) {
      let { left: o, top: h, width: c, height: u } = a, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rt.NUM_FRACTION_DIGITS;
      const g = sl(jt, r, false), [f, p, v, b] = [
        o,
        h,
        c,
        u
      ].map((_) => ft(_, d));
      return "<rect ".concat(g, ' x="').concat(f, '" y="').concat(p, '" width="').concat(v, '" height="').concat(b, '"></rect>');
    }(n, {
      left: t,
      top: e,
      width: s,
      height: i
    }), `
`);
  }
  const z_ = [
    "textAnchor",
    "textDecoration",
    "dx",
    "dy",
    "top",
    "left",
    "fontSize",
    "strokeWidth"
  ];
  let Ud;
  class le extends f0 {
    static getDefaults() {
      return A(A({}, super.getDefaults()), le.ownDefaults);
    }
    constructor(t, e) {
      super(), k(this, "__charBounds", []), Object.assign(this, le.ownDefaults), this.setOptions(e), this.styles || (this.styles = {}), this.text = t, this.initialized = true, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
    }
    setPathInfo() {
      const t = this.path;
      t && (t.segmentsInfo = up(t.path));
    }
    _splitText() {
      const t = this._splitTextIntoLines(this.text);
      return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t;
    }
    initDimensions() {
      this._splitText(), this._clearCache(), this.dirty = true, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(si) && this.enlargeSpaces();
    }
    enlargeSpaces() {
      let t, e, s, i, r, a, o;
      for (let h = 0, c = this._textLines.length; h < c; h++) if ((this.textAlign === si || h !== c - 1 && !this.isEndOfWrapping(h)) && (i = 0, r = this._textLines[h], e = this.getLineWidth(h), e < this.width && (o = this.textLines[h].match(this._reSpacesAndTabs)))) {
        s = o.length, t = (this.width - e) / s;
        for (let u = 0; u <= r.length; u++) a = this.__charBounds[h][u], this._reSpaceAndTab.test(r[u]) ? (a.width += t, a.kernedWidth += t, a.left += i, i += t) : a.left += i;
      }
    }
    isEndOfWrapping(t) {
      return t === this._textLines.length - 1;
    }
    missingNewlineOffset(t) {
      return 1;
    }
    get2DCursorLocation(t, e) {
      const s = e ? this._unwrappedTextLines : this._textLines;
      let i;
      for (i = 0; i < s.length; i++) {
        if (t <= s[i].length) return {
          lineIndex: i,
          charIndex: t
        };
        t -= s[i].length + this.missingNewlineOffset(i, e);
      }
      return {
        lineIndex: i - 1,
        charIndex: s[i - 1].length < t ? s[i - 1].length : t
      };
    }
    toString() {
      return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>');
    }
    _getCacheCanvasDimensions() {
      const t = super._getCacheCanvasDimensions(), e = this.fontSize;
      return t.width += e * t.zoomX, t.height += e * t.zoomY, t;
    }
    _render(t) {
      const e = this.path;
      e && !e.isNotVisible() && e._render(t), this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough");
    }
    _renderText(t) {
      this.paintFirst === ke ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t));
    }
    _setTextStyles(t, e, s) {
      if (t.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
        case q:
          t.textBaseline = "middle";
          break;
        case "ascender":
          t.textBaseline = He;
          break;
        case "descender":
          t.textBaseline = dg;
      }
      t.font = this._getFontDeclaration(e, s);
    }
    calcTextWidth() {
      let t = this.getLineWidth(0);
      for (let e = 1, s = this._textLines.length; e < s; e++) {
        const i = this.getLineWidth(e);
        i > t && (t = i);
      }
      return t;
    }
    _renderTextLine(t, e, s, i, r, a) {
      this._renderChars(t, e, s, i, r, a);
    }
    _renderTextLinesBackground(t) {
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
      const e = t.fillStyle, s = this._getLeftOffset();
      let i = this._getTopOffset();
      for (let r = 0, a = this._textLines.length; r < a; r++) {
        const o = this.getHeightOfLine(r);
        if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", r)) {
          i += o;
          continue;
        }
        const h = this._textLines[r].length, c = this._getLineLeftOffset(r);
        let u, d, g = 0, f = 0, p = this.getValueOfPropertyAt(r, 0, "textBackgroundColor");
        for (let v = 0; v < h; v++) {
          const b = this.__charBounds[r][v];
          d = this.getValueOfPropertyAt(r, v, "textBackgroundColor"), this.path ? (t.save(), t.translate(b.renderLeft, b.renderTop), t.rotate(b.angle), t.fillStyle = d, d && t.fillRect(-b.width / 2, -o / this.lineHeight * (1 - this._fontSizeFraction), b.width, o / this.lineHeight), t.restore()) : d !== p ? (u = s + c + f, this.direction === "rtl" && (u = this.width - u - g), t.fillStyle = p, p && t.fillRect(u, i, g, o / this.lineHeight), f = b.left, g = b.width, p = d) : g += b.kernedWidth;
        }
        d && !this.path && (u = s + c + f, this.direction === "rtl" && (u = this.width - u - g), t.fillStyle = d, t.fillRect(u, i, g, o / this.lineHeight)), i += o;
      }
      t.fillStyle = e, this._removeShadow(t);
    }
    _measureChar(t, e, s, i) {
      const r = yh.getFontCache(e), a = this._getFontDeclaration(e), o = s + t, h = s && a === this._getFontDeclaration(i), c = e.fontSize / this.CACHE_FONT_SIZE;
      let u, d, g, f;
      if (s && r[s] !== void 0 && (g = r[s]), r[t] !== void 0 && (f = u = r[t]), h && r[o] !== void 0 && (d = r[o], f = d - g), u === void 0 || g === void 0 || d === void 0) {
        const p = function() {
          return Ud || (Ud = Qe({
            width: 0,
            height: 0
          }).getContext("2d")), Ud;
        }();
        this._setTextStyles(p, e, true), u === void 0 && (f = u = p.measureText(t).width, r[t] = u), g === void 0 && h && s && (g = p.measureText(s).width, r[s] = g), h && d === void 0 && (d = p.measureText(o).width, r[o] = d, f = d - g);
      }
      return {
        width: u * c,
        kernedWidth: f * c
      };
    }
    getHeightOfChar(t, e) {
      return this.getValueOfPropertyAt(t, e, "fontSize");
    }
    measureLine(t) {
      const e = this._measureLine(t);
      return this.charSpacing !== 0 && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e;
    }
    _measureLine(t) {
      let e, s, i = 0;
      const r = this.pathSide === Tt, a = this.path, o = this._textLines[t], h = o.length, c = new Array(h);
      this.__charBounds[t] = c;
      for (let u = 0; u < h; u++) {
        const d = o[u];
        s = this._getGraphemeBox(d, t, u, e), c[u] = s, i += s.kernedWidth, e = d;
      }
      if (c[h] = {
        left: s ? s.left + s.width : 0,
        width: 0,
        kernedWidth: 0,
        height: this.fontSize,
        deltaY: 0
      }, a && a.segmentsInfo) {
        let u = 0;
        const d = a.segmentsInfo[a.segmentsInfo.length - 1].length;
        switch (this.textAlign) {
          case at:
            u = r ? d - i : 0;
            break;
          case q:
            u = (d - i) / 2;
            break;
          case Tt:
            u = r ? 0 : d - i;
        }
        u += this.pathStartOffset * (r ? -1 : 1);
        for (let g = r ? h - 1 : 0; r ? g >= 0 : g < h; r ? g-- : g++) s = c[g], u > d ? u %= d : u < 0 && (u += d), this._setGraphemeOnPath(u, s), u += s.kernedWidth;
      }
      return {
        width: i,
        numOfSpaces: 0
      };
    }
    _setGraphemeOnPath(t, e) {
      const s = t + e.kernedWidth / 2, i = this.path, r = Jv(i.path, s, i.segmentsInfo);
      e.renderLeft = r.x - i.pathOffset.x, e.renderTop = r.y - i.pathOffset.y, e.angle = r.angle + (this.pathSide === Tt ? Math.PI : 0);
    }
    _getGraphemeBox(t, e, s, i, r) {
      const a = this.getCompleteStyleDeclaration(e, s), o = i ? this.getCompleteStyleDeclaration(e, s - 1) : {}, h = this._measureChar(t, a, i, o);
      let c, u = h.kernedWidth, d = h.width;
      this.charSpacing !== 0 && (c = this._getWidthOfCharSpacing(), d += c, u += c);
      const g = {
        width: d,
        left: 0,
        height: a.fontSize,
        kernedWidth: u,
        deltaY: a.deltaY
      };
      if (s > 0 && !r) {
        const f = this.__charBounds[e][s - 1];
        g.left = f.left + f.width + h.kernedWidth - h.width;
      }
      return g;
    }
    getHeightOfLine(t) {
      if (this.__lineHeights[t]) return this.__lineHeights[t];
      let e = this.getHeightOfChar(t, 0);
      for (let s = 1, i = this._textLines[t].length; s < i; s++) e = Math.max(this.getHeightOfChar(t, s), e);
      return this.__lineHeights[t] = e * this.lineHeight * this._fontSizeMult;
    }
    calcTextHeight() {
      let t, e = 0;
      for (let s = 0, i = this._textLines.length; s < i; s++) t = this.getHeightOfLine(s), e += s === i - 1 ? t / this.lineHeight : t;
      return e;
    }
    _getLeftOffset() {
      return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
    }
    _getTopOffset() {
      return -this.height / 2;
    }
    _renderTextCommon(t, e) {
      t.save();
      let s = 0;
      const i = this._getLeftOffset(), r = this._getTopOffset();
      for (let a = 0, o = this._textLines.length; a < o; a++) {
        const h = this.getHeightOfLine(a), c = h / this.lineHeight, u = this._getLineLeftOffset(a);
        this._renderTextLine(e, t, this._textLines[a], i + u, r + s + c, a), s += h;
      }
      t.restore();
    }
    _renderTextFill(t) {
      (this.fill || this.styleHas(jt)) && this._renderTextCommon(t, "fillText");
    }
    _renderTextStroke(t) {
      (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore());
    }
    _renderChars(t, e, s, i, r, a) {
      const o = this.getHeightOfLine(a), h = this.textAlign.includes(si), c = this.path, u = !h && this.charSpacing === 0 && this.isEmptyStyles(a) && !c, d = this.direction === "ltr", g = this.direction === "ltr" ? 1 : -1, f = e.direction;
      let p, v, b, _, S, x = "", C = 0;
      if (e.save(), f !== this.direction && (e.canvas.setAttribute("dir", d ? "ltr" : "rtl"), e.direction = d ? "ltr" : "rtl", e.textAlign = d ? at : Tt), r -= o * this._fontSizeFraction / this.lineHeight, u) return this._renderChar(t, e, a, 0, s.join(""), i, r), void e.restore();
      for (let T = 0, O = s.length - 1; T <= O; T++) _ = T === O || this.charSpacing || c, x += s[T], b = this.__charBounds[a][T], C === 0 ? (i += g * (b.kernedWidth - b.width), C += b.width) : C += b.kernedWidth, h && !_ && this._reSpaceAndTab.test(s[T]) && (_ = true), _ || (p = p || this.getCompleteStyleDeclaration(a, T), v = this.getCompleteStyleDeclaration(a, T + 1), _ = Sd(p, v, false)), _ && (c ? (e.save(), e.translate(b.renderLeft, b.renderTop), e.rotate(b.angle), this._renderChar(t, e, a, T, x, -C / 2, 0), e.restore()) : (S = i, this._renderChar(t, e, a, T, x, S, r)), x = "", p = v, i += g * C, C = 0);
      e.restore();
    }
    _applyPatternGradientTransformText(t) {
      const e = this.width + this.strokeWidth, s = this.height + this.strokeWidth, i = Qe({
        width: e,
        height: s
      }), r = i.getContext("2d");
      return i.width = e, i.height = s, r.beginPath(), r.moveTo(0, 0), r.lineTo(e, 0), r.lineTo(e, s), r.lineTo(0, s), r.closePath(), r.translate(e / 2, s / 2), r.fillStyle = t.toLive(r), this._applyPatternGradientTransform(r, t), r.fill(), r.createPattern(i, "no-repeat");
    }
    handleFiller(t, e, s) {
      let i, r;
      return fs(s) ? s.gradientUnits === "percentage" || s.gradientTransform || s.patternTransform ? (i = -this.width / 2, r = -this.height / 2, t.translate(i, r), t[e] = this._applyPatternGradientTransformText(s), {
        offsetX: i,
        offsetY: r
      }) : (t[e] = s.toLive(t), this._applyPatternGradientTransform(t, s)) : (t[e] = s, {
        offsetX: 0,
        offsetY: 0
      });
    }
    _setStrokeStyles(t, e) {
      let { stroke: s, strokeWidth: i } = e;
      return t.lineWidth = i, t.lineCap = this.strokeLineCap, t.lineDashOffset = this.strokeDashOffset, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, this.handleFiller(t, "strokeStyle", s);
    }
    _setFillStyles(t, e) {
      let { fill: s } = e;
      return this.handleFiller(t, "fillStyle", s);
    }
    _renderChar(t, e, s, i, r, a, o) {
      const h = this._getStyleDeclaration(s, i), c = this.getCompleteStyleDeclaration(s, i), u = t === "fillText" && c.fill, d = t === "strokeText" && c.stroke && c.strokeWidth;
      if (d || u) {
        if (e.save(), e.font = this._getFontDeclaration(c), h.textBackgroundColor && this._removeShadow(e), h.deltaY && (o += h.deltaY), u) {
          const g = this._setFillStyles(e, c);
          e.fillText(r, a - g.offsetX, o - g.offsetY);
        }
        if (d) {
          const g = this._setStrokeStyles(e, c);
          e.strokeText(r, a - g.offsetX, o - g.offsetY);
        }
        e.restore();
      }
    }
    setSuperscript(t, e) {
      this._setScript(t, e, this.superscript);
    }
    setSubscript(t, e) {
      this._setScript(t, e, this.subscript);
    }
    _setScript(t, e, s) {
      const i = this.get2DCursorLocation(t, true), r = this.getValueOfPropertyAt(i.lineIndex, i.charIndex, "fontSize"), a = this.getValueOfPropertyAt(i.lineIndex, i.charIndex, "deltaY"), o = {
        fontSize: r * s.size,
        deltaY: a + r * s.baseline
      };
      this.setSelectionStyles(o, t, e);
    }
    _getLineLeftOffset(t) {
      const e = this.getLineWidth(t), s = this.width - e, i = this.textAlign, r = this.direction, a = this.isEndOfWrapping(t);
      let o = 0;
      return i === si || i === Sh && !a || i === xh && !a || i === Su && !a ? 0 : (i === q && (o = s / 2), i === Tt && (o = s), i === Sh && (o = s / 2), i === xh && (o = s), r === "rtl" && (i === Tt || i === si || i === xh ? o = 0 : i === at || i === Su ? o = -s : i !== q && i !== Sh || (o = -s / 2)), o);
    }
    _clearCache() {
      this._forceClearCache = false, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
    }
    getLineWidth(t) {
      if (this.__lineWidths[t] !== void 0) return this.__lineWidths[t];
      const { width: e } = this.measureLine(t);
      return this.__lineWidths[t] = e, e;
    }
    _getWidthOfCharSpacing() {
      return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
    }
    getValueOfPropertyAt(t, e, s) {
      var i;
      return (i = this._getStyleDeclaration(t, e)[s]) !== null && i !== void 0 ? i : this[s];
    }
    _renderTextDecoration(t, e) {
      if (!this[e] && !this.styleHas(e)) return;
      let s = this._getTopOffset();
      const i = this._getLeftOffset(), r = this.path, a = this._getWidthOfCharSpacing(), o = this.offsets[e];
      for (let h = 0, c = this._textLines.length; h < c; h++) {
        const u = this.getHeightOfLine(h);
        if (!this[e] && !this.styleHas(e, h)) {
          s += u;
          continue;
        }
        const d = this._textLines[h], g = u / this.lineHeight, f = this._getLineLeftOffset(h);
        let p, v, b = 0, _ = 0, S = this.getValueOfPropertyAt(h, 0, e), x = this.getValueOfPropertyAt(h, 0, jt);
        const C = s + g * (1 - this._fontSizeFraction);
        let T = this.getHeightOfChar(h, 0), O = this.getValueOfPropertyAt(h, 0, "deltaY");
        for (let D = 0, F = d.length; D < F; D++) {
          const L = this.__charBounds[h][D];
          p = this.getValueOfPropertyAt(h, D, e), v = this.getValueOfPropertyAt(h, D, jt);
          const N = this.getHeightOfChar(h, D), P = this.getValueOfPropertyAt(h, D, "deltaY");
          if (r && p && v) t.save(), t.fillStyle = x, t.translate(L.renderLeft, L.renderTop), t.rotate(L.angle), t.fillRect(-L.kernedWidth / 2, o * N + P, L.kernedWidth, this.fontSize / 15), t.restore();
          else if ((p !== S || v !== x || N !== T || P !== O) && _ > 0) {
            let I = i + f + b;
            this.direction === "rtl" && (I = this.width - I - _), S && x && (t.fillStyle = x, t.fillRect(I, C + o * T + O, _, this.fontSize / 15)), b = L.left, _ = L.width, S = p, x = v, T = N, O = P;
          } else _ += L.kernedWidth;
        }
        let E = i + f + b;
        this.direction === "rtl" && (E = this.width - E - _), t.fillStyle = v, p && v && t.fillRect(E, C + o * T + O, _ - a, this.fontSize / 15), s += u;
      }
      this._removeShadow(t);
    }
    _getFontDeclaration() {
      let { fontFamily: t = this.fontFamily, fontStyle: e = this.fontStyle, fontWeight: s = this.fontWeight, fontSize: i = this.fontSize } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
      const a = t.includes("'") || t.includes('"') || t.includes(",") || le.genericFonts.includes(t.toLowerCase()) ? t : '"'.concat(t, '"');
      return [
        e,
        s,
        "".concat(r ? this.CACHE_FONT_SIZE : i, "px"),
        a
      ].join(" ");
    }
    render(t) {
      this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t)));
    }
    graphemeSplit(t) {
      return xd(t);
    }
    _splitTextIntoLines(t) {
      const e = t.split(this._reNewline), s = new Array(e.length), i = [
        `
`
      ];
      let r = [];
      for (let a = 0; a < e.length; a++) s[a] = this.graphemeSplit(e[a]), r = r.concat(s[a], i);
      return r.pop(), {
        _unwrappedLines: s,
        lines: e,
        graphemeText: r,
        graphemeLines: s
      };
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return A(A({}, super.toObject([
        ...g0,
        ...t
      ])), {}, {
        styles: Bv(this.styles, this.text)
      }, this.path ? {
        path: this.path.toObject()
      } : {});
    }
    set(t, e) {
      const { textLayoutProperties: s } = this.constructor;
      super.set(t, e);
      let i = false, r = false;
      if (typeof t == "object") for (const a in t) a === "path" && this.setPathInfo(), i = i || s.includes(a), r = r || a === "path";
      else i = s.includes(t), r = t === "path";
      return r && this.setPathInfo(), i && this.initialized && (this.initDimensions(), this.setCoords()), this;
    }
    complexity() {
      return 1;
    }
    static async fromElement(t, e, s) {
      const i = Hi(t, le.ATTRIBUTE_NAMES, s), r = A(A({}, e), i), { textAnchor: a = at, textDecoration: o = "", dx: h = 0, dy: c = 0, top: u = 0, left: d = 0, fontSize: g = Gf, strokeWidth: f = 1 } = r, p = yt(r, z_), v = new this((t.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "), A({
        left: d + h,
        top: u + c,
        underline: o.includes("underline"),
        overline: o.includes("overline"),
        linethrough: o.includes("line-through"),
        strokeWidth: 0,
        fontSize: g
      }, p)), b = v.getScaledHeight() / v.height, _ = ((v.height + v.strokeWidth) * v.lineHeight - v.height) * b, S = v.getScaledHeight() + _;
      let x = 0;
      return a === q && (x = v.getScaledWidth() / 2), a === Tt && (x = v.getScaledWidth()), v.set({
        left: v.left - x,
        top: v.top - (S - v.fontSize * (0.07 + v._fontSizeFraction)) / v.lineHeight,
        strokeWidth: f
      }), v;
    }
    static fromObject(t) {
      return this._fromObject(A(A({}, t), {}, {
        styles: Hv(t.styles || {}, t.text)
      }), {
        extraParam: "text"
      });
    }
  }
  k(le, "textLayoutProperties", d0), k(le, "cacheProperties", [
    ...Bi,
    ...g0
  ]), k(le, "ownDefaults", W_), k(le, "type", "Text"), k(le, "genericFonts", [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "math",
    "emoji",
    "fangsong"
  ]), k(le, "ATTRIBUTE_NAMES", Pr.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), Iv(le, [
    class extends Av {
      _toSVG() {
        const n = this._getSVGLeftTopOffsets(), t = this._getSVGTextAndBg(n.textTop, n.textLeft);
        return this._wrapSVGTextAndBg(t);
      }
      toSVG(n) {
        const t = this._createBaseSVGMarkup(this._toSVG(), {
          reviver: n,
          noStyle: true,
          withShadow: true
        }), e = this.path;
        return e ? t + e._createBaseSVGMarkup(e._toSVG(), {
          reviver: n,
          withShadow: true,
          additionalTransform: io(this.calcOwnMatrix())
        }) : t;
      }
      _getSVGLeftTopOffsets() {
        return {
          textLeft: -this.width / 2,
          textTop: -this.height / 2,
          lineTop: this.getHeightOfLine(0)
        };
      }
      _wrapSVGTextAndBg(n) {
        let { textBgRects: t, textSpans: e } = n;
        const s = this.getSvgTextDecoration(this);
        return [
          t.join(""),
          '		<text xml:space="preserve" ',
          this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(H_, "'"), '" ') : "",
          this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : "",
          this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "",
          this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "",
          s ? 'text-decoration="'.concat(s, '" ') : "",
          this.direction === "rtl" ? 'direction="'.concat(this.direction, '" ') : "",
          'style="',
          this.getSvgStyles(true),
          '"',
          this.addPaintOrder(),
          " >",
          e.join(""),
          `</text>
`
        ];
      }
      _getSVGTextAndBg(n, t) {
        const e = [], s = [];
        let i, r = n;
        this.backgroundColor && s.push(...Xd(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
        for (let a = 0, o = this._textLines.length; a < o; a++) i = this._getLineLeftOffset(a), this.direction === "rtl" && (i += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", a)) && this._setSVGTextLineBg(s, a, t + i, r), this._setSVGTextLineText(e, a, t + i, r), r += this.getHeightOfLine(a);
        return {
          textSpans: e,
          textBgRects: s
        };
      }
      _createTextCharSpan(n, t, e, s, i) {
        const r = rt.NUM_FRACTION_DIGITS, a = this.getSvgSpanStyles(t, n !== n.trim() || !!n.match(B_)), o = a ? 'style="'.concat(a, '"') : "", h = t.deltaY, c = h ? ' dy="'.concat(ft(h, r), '" ') : "", { angle: u, renderLeft: d, renderTop: g, width: f } = i;
        let p = "";
        if (d !== void 0) {
          const v = f / 2;
          u && (p = ' rotate="'.concat(ft(oi(u), r), '"'));
          const b = Rn({
            angle: oi(u)
          });
          b[4] = d, b[5] = g;
          const _ = new M(-v, 0).transform(b);
          e = _.x, s = _.y;
        }
        return '<tspan x="'.concat(ft(e, r), '" y="').concat(ft(s, r), '" ').concat(c).concat(p).concat(o, ">").concat(Wv(n), "</tspan>");
      }
      _setSVGTextLineText(n, t, e, s) {
        const i = this.getHeightOfLine(t), r = this.textAlign.includes(si), a = this._textLines[t];
        let o, h, c, u, d, g = "", f = 0;
        s += i * (1 - this._fontSizeFraction) / this.lineHeight;
        for (let p = 0, v = a.length - 1; p <= v; p++) d = p === v || this.charSpacing || this.path, g += a[p], c = this.__charBounds[t][p], f === 0 ? (e += c.kernedWidth - c.width, f += c.width) : f += c.kernedWidth, r && !d && this._reSpaceAndTab.test(a[p]) && (d = true), d || (o = o || this.getCompleteStyleDeclaration(t, p), h = this.getCompleteStyleDeclaration(t, p + 1), d = Sd(o, h, true)), d && (u = this._getStyleDeclaration(t, p), n.push(this._createTextCharSpan(g, u, e, s, c)), g = "", o = h, this.direction === "rtl" ? e -= f : e += f, f = 0);
      }
      _setSVGTextLineBg(n, t, e, s) {
        const i = this._textLines[t], r = this.getHeightOfLine(t) / this.lineHeight;
        let a, o = 0, h = 0, c = this.getValueOfPropertyAt(t, 0, "textBackgroundColor");
        for (let u = 0; u < i.length; u++) {
          const { left: d, width: g, kernedWidth: f } = this.__charBounds[t][u];
          a = this.getValueOfPropertyAt(t, u, "textBackgroundColor"), a !== c ? (c && n.push(...Xd(c, e + h, s, o, r)), h = d, o = g, c = a) : o += f;
        }
        a && n.push(...Xd(c, e + h, s, o, r));
      }
      _getSVGLineTopOffset(n) {
        let t, e = 0;
        for (t = 0; t < n; t++) e += this.getHeightOfLine(t);
        const s = this.getHeightOfLine(t);
        return {
          lineTop: e,
          offset: (this._fontSizeMult - this._fontSizeFraction) * s / (this.lineHeight * this._fontSizeMult)
        };
      }
      getSvgStyles(n) {
        return "".concat(super.getSvgStyles(n), " white-space: pre;");
      }
      getSvgSpanStyles(n, t) {
        const { fontFamily: e, strokeWidth: s, stroke: i, fill: r, fontSize: a, fontStyle: o, fontWeight: h, deltaY: c } = n, u = this.getSvgTextDecoration(n);
        return [
          i ? sl(ke, i) : "",
          s ? "stroke-width: ".concat(s, "; ") : "",
          e ? "font-family: ".concat(e.includes("'") || e.includes('"') ? e : "'".concat(e, "'"), "; ") : "",
          a ? "font-size: ".concat(a, "px; ") : "",
          o ? "font-style: ".concat(o, "; ") : "",
          h ? "font-weight: ".concat(h, "; ") : "",
          u && "text-decoration: ".concat(u, "; "),
          r ? sl(jt, r) : "",
          c ? "baseline-shift: ".concat(-c, "; ") : "",
          t ? "white-space: pre; " : ""
        ].join("");
      }
      getSvgTextDecoration(n) {
        return [
          "overline",
          "underline",
          "line-through"
        ].filter((t) => n[t.replace("-", "")]).join(" ");
      }
    }
  ]), B.setClass(le), B.setSVGClass(le);
  class V_ {
    constructor(t) {
      k(this, "target", void 0), k(this, "__mouseDownInPlace", false), k(this, "__dragStartFired", false), k(this, "__isDraggingOver", false), k(this, "__dragStartSelection", void 0), k(this, "__dragImageDisposer", void 0), k(this, "_dispose", void 0), this.target = t;
      const e = [
        this.target.on("dragenter", this.dragEnterHandler.bind(this)),
        this.target.on("dragover", this.dragOverHandler.bind(this)),
        this.target.on("dragleave", this.dragLeaveHandler.bind(this)),
        this.target.on("dragend", this.dragEndHandler.bind(this)),
        this.target.on("drop", this.dropHandler.bind(this))
      ];
      this._dispose = () => {
        e.forEach((s) => s()), this._dispose = void 0;
      };
    }
    isPointerOverSelection(t) {
      const e = this.target, s = e.getSelectionStartFromPointer(t);
      return e.isEditing && s >= e.selectionStart && s <= e.selectionEnd && e.selectionStart < e.selectionEnd;
    }
    start(t) {
      return this.__mouseDownInPlace = this.isPointerOverSelection(t);
    }
    isActive() {
      return this.__mouseDownInPlace;
    }
    end(t) {
      const e = this.isActive();
      return e && !this.__dragStartFired && (this.target.setCursorByClick(t), this.target.initDelayedCursor(true)), this.__mouseDownInPlace = false, this.__dragStartFired = false, this.__isDraggingOver = false, e;
    }
    getDragStartSelection() {
      return this.__dragStartSelection;
    }
    setDragImage(t, e) {
      var s;
      let { selectionStart: i, selectionEnd: r } = e;
      const a = this.target, o = a.canvas, h = new M(a.flipX ? -1 : 1, a.flipY ? -1 : 1), c = a._getCursorBoundaries(i), u = new M(c.left + c.leftOffset, c.top + c.topOffset).multiply(h).transform(a.calcTransformMatrix()), d = o.getScenePoint(t).subtract(u), g = a.getCanvasRetinaScaling(), f = a.getBoundingRect(), p = u.subtract(new M(f.left, f.top)), v = o.viewportTransform, b = p.add(d).transform(v, true), _ = a.backgroundColor, S = hp(a.styles);
      a.backgroundColor = "";
      const x = {
        stroke: "transparent",
        fill: "transparent",
        textBackgroundColor: "transparent"
      };
      a.setSelectionStyles(x, 0, i), a.setSelectionStyles(x, r, a.text.length), a.dirty = true;
      const C = a.toCanvasElement({
        enableRetinaScaling: o.enableRetinaScaling,
        viewportTransform: true
      });
      a.backgroundColor = _, a.styles = S, a.dirty = true, xu(C, {
        position: "fixed",
        left: "".concat(-C.width, "px"),
        border: Ae,
        width: "".concat(C.width / g, "px"),
        height: "".concat(C.height / g, "px")
      }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
        C.remove();
      }, Es(t.target || this.target.hiddenTextarea).body.appendChild(C), (s = t.dataTransfer) === null || s === void 0 || s.setDragImage(C, b.x, b.y);
    }
    onDragStart(t) {
      this.__dragStartFired = true;
      const e = this.target, s = this.isActive();
      if (s && t.dataTransfer) {
        const i = this.__dragStartSelection = {
          selectionStart: e.selectionStart,
          selectionEnd: e.selectionEnd
        }, r = e._text.slice(i.selectionStart, i.selectionEnd).join(""), a = A({
          text: e.text,
          value: r
        }, i);
        t.dataTransfer.setData("text/plain", r), t.dataTransfer.setData("application/fabric", JSON.stringify({
          value: r,
          styles: e.getSelectionStyles(i.selectionStart, i.selectionEnd, true)
        })), t.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t, a);
      }
      return e.abortCursorAnimation(), s;
    }
    canDrop(t) {
      if (this.target.editable && !this.target.getActiveControl() && !t.defaultPrevented) {
        if (this.isActive() && this.__dragStartSelection) {
          const e = this.target.getSelectionStartFromPointer(t), s = this.__dragStartSelection;
          return e < s.selectionStart || e > s.selectionEnd;
        }
        return true;
      }
      return false;
    }
    targetCanDrop(t) {
      return this.target.canDrop(t);
    }
    dragEnterHandler(t) {
      let { e } = t;
      const s = this.targetCanDrop(e);
      !this.__isDraggingOver && s && (this.__isDraggingOver = true);
    }
    dragOverHandler(t) {
      const { e } = t, s = this.targetCanDrop(e);
      !this.__isDraggingOver && s ? this.__isDraggingOver = true : this.__isDraggingOver && !s && (this.__isDraggingOver = false), this.__isDraggingOver && (e.preventDefault(), t.canDrop = true, t.dropTarget = this.target);
    }
    dragLeaveHandler() {
      (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = false);
    }
    dropHandler(t) {
      var e;
      const { e: s } = t, i = s.defaultPrevented;
      this.__isDraggingOver = false, s.preventDefault();
      let r = (e = s.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain");
      if (r && !i) {
        const a = this.target, o = a.canvas;
        let h = a.getSelectionStartFromPointer(s);
        const { styles: c } = s.dataTransfer.types.includes("application/fabric") ? JSON.parse(s.dataTransfer.getData("application/fabric")) : {}, u = r[Math.max(0, r.length - 1)], d = 0;
        if (this.__dragStartSelection) {
          const g = this.__dragStartSelection.selectionStart, f = this.__dragStartSelection.selectionEnd;
          h > g && h <= f ? h = g : h > f && (h -= f - g), a.removeChars(g, f), delete this.__dragStartSelection;
        }
        a._reNewline.test(u) && (a._reNewline.test(a._text[h]) || h === a._text.length) && (r = r.trimEnd()), t.didDrop = true, t.dropTarget = a, a.insertChars(r, c, h), o.setActiveObject(a), a.enterEditing(s), a.selectionStart = Math.min(h + d, a._text.length), a.selectionEnd = Math.min(a.selectionStart + r.length, a._text.length), a.hiddenTextarea.value = a.text, a._updateTextarea(), a.hiddenTextarea.focus(), a.fire(uu, {
          index: h + d,
          action: "drop"
        }), o.fire("text:changed", {
          target: a
        }), o.contextTopDirty = true, o.requestRenderAll();
      }
    }
    dragEndHandler(t) {
      let { e } = t;
      if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
        var s;
        const i = this.target, r = this.target.canvas, { selectionStart: a, selectionEnd: o } = this.__dragStartSelection, h = ((s = e.dataTransfer) === null || s === void 0 ? void 0 : s.dropEffect) || Ae;
        h === Ae ? (i.selectionStart = a, i.selectionEnd = o, i._updateTextarea(), i.hiddenTextarea.focus()) : (i.clearContextTop(), h === "move" && (i.removeChars(a, o), i.selectionStart = i.selectionEnd = a, i.hiddenTextarea && (i.hiddenTextarea.value = i.text), i._updateTextarea(), i.fire(uu, {
          index: a,
          action: "dragend"
        }), r.fire("text:changed", {
          target: i
        }), r.requestRenderAll()), i.exitEditing());
      }
      this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = false;
    }
    dispose() {
      this._dispose && this._dispose();
    }
  }
  const nm = /[ \n\.,;!\?\-]/;
  class G_ extends le {
    constructor() {
      super(...arguments), k(this, "_currentCursorOpacity", 1);
    }
    initBehavior() {
      this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
    }
    onDeselect(t) {
      return this.isEditing && this.exitEditing(), this.selected = false, super.onDeselect(t);
    }
    _animateCursor(t) {
      let { toValue: e, duration: s, delay: i, onComplete: r } = t;
      return ap({
        startValue: this._currentCursorOpacity,
        endValue: e,
        duration: s,
        delay: i,
        onComplete: r,
        abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
        onChange: (a) => {
          this._currentCursorOpacity = a, this.renderCursorOrSelection();
        }
      });
    }
    _tick(t) {
      this._currentTickState = this._animateCursor({
        toValue: 0,
        duration: this.cursorDuration / 2,
        delay: Math.max(t || 0, 100),
        onComplete: this._onTickComplete
      });
    }
    _onTickComplete() {
      var t;
      (t = this._currentTickCompleteState) === null || t === void 0 || t.abort(), this._currentTickCompleteState = this._animateCursor({
        toValue: 1,
        duration: this.cursorDuration,
        onComplete: this._tick
      });
    }
    initDelayedCursor(t) {
      this.abortCursorAnimation(), this._tick(t ? 0 : this.cursorDelay);
    }
    abortCursorAnimation() {
      let t = false;
      [
        this._currentTickState,
        this._currentTickCompleteState
      ].forEach((e) => {
        e && !e.isDone() && (t = true, e.abort());
      }), this._currentCursorOpacity = 1, t && this.clearContextTop();
    }
    restartCursorIfNeeded() {
      [
        this._currentTickState,
        this._currentTickCompleteState
      ].some((t) => !t || t.isDone()) && this.initDelayedCursor();
    }
    selectAll() {
      return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
    }
    cmdAll() {
      this.selectAll(), this.renderCursorOrSelection();
    }
    getSelectedText() {
      return this._text.slice(this.selectionStart, this.selectionEnd).join("");
    }
    findWordBoundaryLeft(t) {
      let e = 0, s = t - 1;
      if (this._reSpace.test(this._text[s])) for (; this._reSpace.test(this._text[s]); ) e++, s--;
      for (; /\S/.test(this._text[s]) && s > -1; ) e++, s--;
      return t - e;
    }
    findWordBoundaryRight(t) {
      let e = 0, s = t;
      if (this._reSpace.test(this._text[s])) for (; this._reSpace.test(this._text[s]); ) e++, s++;
      for (; /\S/.test(this._text[s]) && s < this._text.length; ) e++, s++;
      return t + e;
    }
    findLineBoundaryLeft(t) {
      let e = 0, s = t - 1;
      for (; !/\n/.test(this._text[s]) && s > -1; ) e++, s--;
      return t - e;
    }
    findLineBoundaryRight(t) {
      let e = 0, s = t;
      for (; !/\n/.test(this._text[s]) && s < this._text.length; ) e++, s++;
      return t + e;
    }
    searchWordBoundary(t, e) {
      const s = this._text;
      let i = t > 0 && this._reSpace.test(s[t]) && (e === -1 || !Xf.test(s[t - 1])) ? t - 1 : t, r = s[i];
      for (; i > 0 && i < s.length && !nm.test(r); ) i += e, r = s[i];
      return e === -1 && nm.test(r) && i++, i;
    }
    selectWord(t) {
      var e;
      t = (e = t) !== null && e !== void 0 ? e : this.selectionStart;
      const s = this.searchWordBoundary(t, -1), i = Math.max(s, this.searchWordBoundary(t, 1));
      this.selectionStart = s, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
    }
    selectLine(t) {
      var e;
      t = (e = t) !== null && e !== void 0 ? e : this.selectionStart;
      const s = this.findLineBoundaryLeft(t), i = this.findLineBoundaryRight(t);
      this.selectionStart = s, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea();
    }
    enterEditing(t) {
      !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t ? {
        e: t
      } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
        target: this,
        e: t
      }), this.canvas.requestRenderAll()));
    }
    enterEditingImpl() {
      this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = true, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
    }
    updateSelectionOnMouseMove(t) {
      if (this.getActiveControl()) return;
      const e = this.hiddenTextarea;
      Es(e).activeElement !== e && e.focus();
      const s = this.getSelectionStartFromPointer(t), i = this.selectionStart, r = this.selectionEnd;
      (s === this.__selectionStartOnMouseDown && i !== r || i !== s && r !== s) && (s > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s) : (this.selectionStart = s, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i && this.selectionEnd === r || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
    }
    _setEditingProps() {
      this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = false, this.lockMovementX = this.lockMovementY = true;
    }
    fromStringToGraphemeSelection(t, e, s) {
      const i = s.slice(0, t), r = this.graphemeSplit(i).length;
      if (t === e) return {
        selectionStart: r,
        selectionEnd: r
      };
      const a = s.slice(t, e);
      return {
        selectionStart: r,
        selectionEnd: r + this.graphemeSplit(a).length
      };
    }
    fromGraphemeToStringSelection(t, e, s) {
      const i = s.slice(0, t).join("").length;
      return t === e ? {
        selectionStart: i,
        selectionEnd: i
      } : {
        selectionStart: i,
        selectionEnd: i + s.slice(t, e).join("").length
      };
    }
    _updateTextarea() {
      if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
        if (!this.inCompositionMode) {
          const t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
          this.hiddenTextarea.selectionStart = t.selectionStart, this.hiddenTextarea.selectionEnd = t.selectionEnd;
        }
        this.updateTextareaPosition();
      }
    }
    updateFromTextArea() {
      if (!this.hiddenTextarea) return;
      this.cursorOffsetCache = {};
      const t = this.hiddenTextarea;
      this.text = t.value, this.set("dirty", true), this.initDimensions(), this.setCoords();
      const e = this.fromStringToGraphemeSelection(t.selectionStart, t.selectionEnd, t.value);
      this.selectionEnd = this.selectionStart = e.selectionEnd, this.inCompositionMode || (this.selectionStart = e.selectionStart), this.updateTextareaPosition();
    }
    updateTextareaPosition() {
      if (this.selectionStart === this.selectionEnd) {
        const t = this._calcTextareaPosition();
        this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top;
      }
    }
    _calcTextareaPosition() {
      if (!this.canvas) return {
        left: "1px",
        top: "1px"
      };
      const t = this.inCompositionMode ? this.compositionStart : this.selectionStart, e = this._getCursorBoundaries(t), s = this.get2DCursorLocation(t), i = s.lineIndex, r = s.charIndex, a = this.getValueOfPropertyAt(i, r, "fontSize") * this.lineHeight, o = e.leftOffset, h = this.getCanvasRetinaScaling(), c = this.canvas.upperCanvasEl, u = c.width / h, d = c.height / h, g = u - a, f = d - a, p = new M(e.left + o, e.top + e.topOffset + a).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new M(c.clientWidth / u, c.clientHeight / d));
      return p.x < 0 && (p.x = 0), p.x > g && (p.x = g), p.y < 0 && (p.y = 0), p.y > f && (p.y = f), p.x += this.canvas._offset.left, p.y += this.canvas._offset.top, {
        left: "".concat(p.x, "px"),
        top: "".concat(p.y, "px"),
        fontSize: "".concat(a, "px"),
        charHeight: a
      };
    }
    _saveEditingProps() {
      this._savedProps = {
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        lockMovementX: this.lockMovementX,
        lockMovementY: this.lockMovementY,
        hoverCursor: this.hoverCursor,
        selectable: this.selectable,
        defaultCursor: this.canvas && this.canvas.defaultCursor,
        moveCursor: this.canvas && this.canvas.moveCursor
      };
    }
    _restoreEditingProps() {
      this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
    }
    _exitEditing() {
      const t = this.hiddenTextarea;
      this.selected = false, this.isEditing = false, t && (t.blur && t.blur(), t.parentNode && t.parentNode.removeChild(t)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop();
    }
    exitEditingImpl() {
      this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
    }
    exitEditing() {
      const t = this._textBeforeEdit !== this.text;
      return this.exitEditingImpl(), this.fire("editing:exited"), t && this.fire(du), this.canvas && (this.canvas.fire("text:editing:exited", {
        target: this
      }), t && this.canvas.fire("object:modified", {
        target: this
      })), this;
    }
    _removeExtraneousStyles() {
      for (const t in this.styles) this._textLines[t] || delete this.styles[t];
    }
    removeStyleFromTo(t, e) {
      const { lineIndex: s, charIndex: i } = this.get2DCursorLocation(t, true), { lineIndex: r, charIndex: a } = this.get2DCursorLocation(e, true);
      if (s !== r) {
        if (this.styles[s]) for (let o = i; o < this._unwrappedTextLines[s].length; o++) delete this.styles[s][o];
        if (this.styles[r]) for (let o = a; o < this._unwrappedTextLines[r].length; o++) {
          const h = this.styles[r][o];
          h && (this.styles[s] || (this.styles[s] = {}), this.styles[s][i + o - a] = h);
        }
        for (let o = s + 1; o <= r; o++) delete this.styles[o];
        this.shiftLineStyles(r, s - r);
      } else if (this.styles[s]) {
        const o = this.styles[s], h = a - i;
        for (let c = i; c < a; c++) delete o[c];
        for (const c in this.styles[s]) {
          const u = parseInt(c, 10);
          u >= a && (o[u - h] = o[c], delete o[c]);
        }
      }
    }
    shiftLineStyles(t, e) {
      const s = Object.assign({}, this.styles);
      for (const i in this.styles) {
        const r = parseInt(i, 10);
        r > t && (this.styles[r + e] = s[r], s[r - e] || delete this.styles[r]);
      }
    }
    insertNewlineStyleObject(t, e, s, i) {
      const r = {}, a = this._unwrappedTextLines[t].length, o = a === e;
      let h = false;
      s || (s = 1), this.shiftLineStyles(t, s);
      const c = this.styles[t] ? this.styles[t][e === 0 ? e : e - 1] : void 0;
      for (const d in this.styles[t]) {
        const g = parseInt(d, 10);
        g >= e && (h = true, r[g - e] = this.styles[t][d], o && e === 0 || delete this.styles[t][d]);
      }
      let u = false;
      for (h && !o && (this.styles[t + s] = r, u = true), (u || a > e) && s--; s > 0; ) i && i[s - 1] ? this.styles[t + s] = {
        0: A({}, i[s - 1])
      } : c ? this.styles[t + s] = {
        0: A({}, c)
      } : delete this.styles[t + s], s--;
      this._forceClearCache = true;
    }
    insertCharStyleObject(t, e, s, i) {
      this.styles || (this.styles = {});
      const r = this.styles[t], a = r ? A({}, r) : {};
      s || (s = 1);
      for (const h in a) {
        const c = parseInt(h, 10);
        c >= e && (r[c + s] = a[c], a[c - s] || delete r[c]);
      }
      if (this._forceClearCache = true, i) {
        for (; s--; ) Object.keys(i[s]).length && (this.styles[t] || (this.styles[t] = {}), this.styles[t][e + s] = A({}, i[s]));
        return;
      }
      if (!r) return;
      const o = r[e ? e - 1 : 1];
      for (; o && s--; ) this.styles[t][e + s] = A({}, o);
    }
    insertNewStyleBlock(t, e, s) {
      const i = this.get2DCursorLocation(e, true), r = [
        0
      ];
      let a, o = 0;
      for (let h = 0; h < t.length; h++) t[h] === `
` ? (o++, r[o] = 0) : r[o]++;
      for (r[0] > 0 && (this.insertCharStyleObject(i.lineIndex, i.charIndex, r[0], s), s = s && s.slice(r[0] + 1)), o && this.insertNewlineStyleObject(i.lineIndex, i.charIndex + r[0], o), a = 1; a < o; a++) r[a] > 0 ? this.insertCharStyleObject(i.lineIndex + a, 0, r[a], s) : s && this.styles[i.lineIndex + a] && s[0] && (this.styles[i.lineIndex + a][0] = s[0]), s = s && s.slice(r[a] + 1);
      r[a] > 0 && this.insertCharStyleObject(i.lineIndex + a, 0, r[a], s);
    }
    removeChars(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t + 1;
      this.removeStyleFromTo(t, e), this._text.splice(t, e - t), this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
    }
    insertChars(t, e, s) {
      let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : s;
      i > s && this.removeStyleFromTo(s, i);
      const r = this.graphemeSplit(t);
      this.insertNewStyleBlock(r, s, e), this._text = [
        ...this._text.slice(0, s),
        ...r,
        ...this._text.slice(i)
      ], this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
    }
    setSelectionStartEndWithShift(t, e, s) {
      s <= t ? (e === t ? this._selectionDirection = at : this._selectionDirection === Tt && (this._selectionDirection = at, this.selectionEnd = t), this.selectionStart = s) : s > t && s < e ? this._selectionDirection === Tt ? this.selectionEnd = s : this.selectionStart = s : (e === t ? this._selectionDirection = Tt : this._selectionDirection === at && (this._selectionDirection = Tt, this.selectionStart = e), this.selectionEnd = s);
    }
  }
  class X_ extends G_ {
    initHiddenTextarea() {
      const t = this.canvas && Es(this.canvas.getElement()) || ao(), e = t.createElement("textarea");
      Object.entries({
        autocapitalize: "off",
        autocorrect: "off",
        autocomplete: "off",
        spellcheck: "false",
        "data-fabric": "textarea",
        wrap: "off"
      }).map((a) => {
        let [o, h] = a;
        return e.setAttribute(o, h);
      });
      const { top: s, left: i, fontSize: r } = this._calcTextareaPosition();
      e.style.cssText = "position: absolute; top: ".concat(s, "; left: ").concat(i, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r, ";"), (this.hiddenTextareaContainer || t.body).appendChild(e), Object.entries({
        blur: "blur",
        keydown: "onKeyDown",
        keyup: "onKeyUp",
        input: "onInput",
        copy: "copy",
        cut: "copy",
        paste: "paste",
        compositionstart: "onCompositionStart",
        compositionupdate: "onCompositionUpdate",
        compositionend: "onCompositionEnd"
      }).map((a) => {
        let [o, h] = a;
        return e.addEventListener(o, this[h].bind(this));
      }), this.hiddenTextarea = e;
    }
    blur() {
      this.abortCursorAnimation();
    }
    onKeyDown(t) {
      if (!this.isEditing) return;
      const e = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
      if (t.keyCode in e) this[e[t.keyCode]](t);
      else {
        if (!(t.keyCode in this.ctrlKeysMapDown) || !t.ctrlKey && !t.metaKey) return;
        this[this.ctrlKeysMapDown[t.keyCode]](t);
      }
      t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.inCompositionMode = false, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
    }
    onKeyUp(t) {
      !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = false : t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll());
    }
    onInput(t) {
      const e = this.fromPaste, { value: s, selectionStart: i, selectionEnd: r } = this.hiddenTextarea;
      if (this.fromPaste = false, t && t.stopPropagation(), !this.isEditing) return;
      const a = () => {
        this.updateFromTextArea(), this.fire(uu), this.canvas && (this.canvas.fire("text:changed", {
          target: this
        }), this.canvas.requestRenderAll());
      };
      if (this.hiddenTextarea.value === "") return this.styles = {}, void a();
      const o = this._splitTextIntoLines(s).graphemeText, h = this._text.length, c = o.length, u = this.selectionStart, d = this.selectionEnd, g = u !== d;
      let f, p, v, b, _ = c - h;
      const S = this.fromStringToGraphemeSelection(i, r, s), x = u > S.selectionStart;
      g ? (p = this._text.slice(u, d), _ += d - u) : c < h && (p = x ? this._text.slice(d + _, d) : this._text.slice(u, u - _));
      const C = o.slice(S.selectionEnd - _, S.selectionEnd);
      if (p && p.length && (C.length && (f = this.getSelectionStyles(u, u + 1, false), f = C.map(() => f[0])), g ? (v = u, b = d) : x ? (v = d - p.length, b = d) : (v = d, b = d + p.length), this.removeStyleFromTo(v, b)), C.length) {
        const { copyPasteData: T } = ai();
        e && C.join("") === T.copiedText && !rt.disableStyleCopyPaste && (f = T.copiedTextStyle), this.insertNewStyleBlock(C, u, f);
      }
      a();
    }
    onCompositionStart() {
      this.inCompositionMode = true;
    }
    onCompositionEnd() {
      this.inCompositionMode = false;
    }
    onCompositionUpdate(t) {
      let { target: e } = t;
      const { selectionStart: s, selectionEnd: i } = e;
      this.compositionStart = s, this.compositionEnd = i, this.updateTextareaPosition();
    }
    copy() {
      if (this.selectionStart === this.selectionEnd) return;
      const { copyPasteData: t } = ai();
      t.copiedText = this.getSelectedText(), rt.disableStyleCopyPaste ? t.copiedTextStyle = void 0 : t.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true), this._copyDone = true;
    }
    paste() {
      this.fromPaste = true;
    }
    _getWidthBeforeCursor(t, e) {
      let s, i = this._getLineLeftOffset(t);
      return e > 0 && (s = this.__charBounds[t][e - 1], i += s.left + s.width), i;
    }
    getDownCursorOffset(t, e) {
      const s = this._getSelectionForOffset(t, e), i = this.get2DCursorLocation(s), r = i.lineIndex;
      if (r === this._textLines.length - 1 || t.metaKey || t.keyCode === 34) return this._text.length - s;
      const a = i.charIndex, o = this._getWidthBeforeCursor(r, a), h = this._getIndexOnLine(r + 1, o);
      return this._textLines[r].slice(a).length + h + 1 + this.missingNewlineOffset(r);
    }
    _getSelectionForOffset(t, e) {
      return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart;
    }
    getUpCursorOffset(t, e) {
      const s = this._getSelectionForOffset(t, e), i = this.get2DCursorLocation(s), r = i.lineIndex;
      if (r === 0 || t.metaKey || t.keyCode === 33) return -s;
      const a = i.charIndex, o = this._getWidthBeforeCursor(r, a), h = this._getIndexOnLine(r - 1, o), c = this._textLines[r].slice(0, a), u = this.missingNewlineOffset(r - 1);
      return -this._textLines[r - 1].length + h - c.length + (1 - u);
    }
    _getIndexOnLine(t, e) {
      const s = this._textLines[t];
      let i, r, a = this._getLineLeftOffset(t), o = 0;
      for (let h = 0, c = s.length; h < c; h++) if (i = this.__charBounds[t][h].width, a += i, a > e) {
        r = true;
        const u = a - i, d = a, g = Math.abs(u - e);
        o = Math.abs(d - e) < g ? h : h - 1;
        break;
      }
      return r || (o = s.length - 1), o;
    }
    moveCursorDown(t) {
      this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t);
    }
    moveCursorUp(t) {
      this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", t);
    }
    _moveCursorUpOrDown(t, e) {
      const s = this["get".concat(t, "CursorOffset")](e, this._selectionDirection === Tt);
      if (e.shiftKey ? this.moveCursorWithShift(s) : this.moveCursorWithoutShift(s), s !== 0) {
        const i = this.text.length;
        this.selectionStart = On(0, this.selectionStart, i), this.selectionEnd = On(0, this.selectionEnd, i), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
      }
    }
    moveCursorWithShift(t) {
      const e = this._selectionDirection === at ? this.selectionStart + t : this.selectionEnd + t;
      return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), t !== 0;
    }
    moveCursorWithoutShift(t) {
      return t < 0 ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), t !== 0;
    }
    moveCursorLeft(t) {
      this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", t);
    }
    _move(t, e, s) {
      let i;
      if (t.altKey) i = this["findWordBoundary".concat(s)](this[e]);
      else {
        if (!t.metaKey && t.keyCode !== 35 && t.keyCode !== 36) return this[e] += s === "Left" ? -1 : 1, true;
        i = this["findLineBoundary".concat(s)](this[e]);
      }
      return i !== void 0 && this[e] !== i && (this[e] = i, true);
    }
    _moveLeft(t, e) {
      return this._move(t, e, "Left");
    }
    _moveRight(t, e) {
      return this._move(t, e, "Right");
    }
    moveCursorLeftWithoutShift(t) {
      let e = true;
      return this._selectionDirection = at, this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e;
    }
    moveCursorLeftWithShift(t) {
      return this._selectionDirection === Tt && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : this.selectionStart !== 0 ? (this._selectionDirection = at, this._moveLeft(t, "selectionStart")) : void 0;
    }
    moveCursorRight(t) {
      this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t);
    }
    _moveCursorLeftOrRight(t, e) {
      const s = "moveCursor".concat(t).concat(e.shiftKey ? "WithShift" : "WithoutShift");
      this._currentCursorOpacity = 1, this[s](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
    }
    moveCursorRightWithShift(t) {
      return this._selectionDirection === at && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = Tt, this._moveRight(t, "selectionEnd")) : void 0;
    }
    moveCursorRightWithoutShift(t) {
      let e = true;
      return this._selectionDirection = Tt, this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e;
    }
  }
  const am = (n) => !!n.button;
  class U_ extends X_ {
    constructor() {
      super(...arguments), k(this, "draggableTextDelegate", void 0);
    }
    initBehavior() {
      this.on("mousedown", this._mouseDownHandler), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("mousetripleclick", this.tripleClickHandler), this.draggableTextDelegate = new V_(this), super.initBehavior();
    }
    shouldStartDragging() {
      return this.draggableTextDelegate.isActive();
    }
    onDragStart(t) {
      return this.draggableTextDelegate.onDragStart(t);
    }
    canDrop(t) {
      return this.draggableTextDelegate.canDrop(t);
    }
    doubleClickHandler(t) {
      this.isEditing && (this.selectWord(this.getSelectionStartFromPointer(t.e)), this.renderCursorOrSelection());
    }
    tripleClickHandler(t) {
      this.isEditing && (this.selectLine(this.getSelectionStartFromPointer(t.e)), this.renderCursorOrSelection());
    }
    _mouseDownHandler(t) {
      let { e, alreadySelected: s } = t;
      this.canvas && this.editable && !am(e) && !this.getActiveControl() && (this.draggableTextDelegate.start(e) || (this.canvas.textEditingManager.register(this), s && (this.inCompositionMode = false, this.setCursorByClick(e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()), this.selected || (this.selected = s || this.isEditing)));
    }
    mouseUpHandler(t) {
      let { e, transform: s } = t;
      const i = this.draggableTextDelegate.end(e);
      if (this.canvas) {
        this.canvas.textEditingManager.unregister(this);
        const r = this.canvas._activeObject;
        if (r && r !== this) return;
      }
      !this.editable || this.group && !this.group.interactive || s && s.actionPerformed || am(e) || i || this.selected && !this.getActiveControl() && (this.enterEditing(e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(true) : this.renderCursorOrSelection());
    }
    setCursorByClick(t) {
      const e = this.getSelectionStartFromPointer(t), s = this.selectionStart, i = this.selectionEnd;
      t.shiftKey ? this.setSelectionStartEndWithShift(s, i, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
    }
    getSelectionStartFromPointer(t) {
      const e = this.canvas.getScenePoint(t).transform(We(this.calcTransformMatrix())).add(new M(-this._getLeftOffset(), -this._getTopOffset()));
      let s = 0, i = 0, r = 0;
      for (let c = 0; c < this._textLines.length && s <= e.y; c++) s += this.getHeightOfLine(c), r = c, c > 0 && (i += this._textLines[c - 1].length + this.missingNewlineOffset(c - 1));
      let a = Math.abs(this._getLineLeftOffset(r));
      const o = this._textLines[r].length, h = this.__charBounds[r];
      for (let c = 0; c < o; c++) {
        const u = a + h[c].kernedWidth;
        if (e.x <= u) {
          Math.abs(e.x - u) <= Math.abs(e.x - a) && i++;
          break;
        }
        a = u, i++;
      }
      return Math.min(this.flipX ? o - i : i, this._text.length);
    }
  }
  const yl = "moveCursorUp", wl = "moveCursorDown", _l = "moveCursorLeft", xl = "moveCursorRight", Sl = "exitEditing", om = (n, t) => {
    const e = t.getRetinaScaling();
    n.setTransform(e, 0, 0, e, 0, 0);
    const s = t.viewportTransform;
    n.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
  }, Y_ = A({
    selectionStart: 0,
    selectionEnd: 0,
    selectionColor: "rgba(17,119,255,0.3)",
    isEditing: false,
    editable: true,
    editingBorderColor: "rgba(102,153,255,0.25)",
    cursorWidth: 2,
    cursorColor: "",
    cursorDelay: 1e3,
    cursorDuration: 600,
    caching: true,
    hiddenTextareaContainer: null,
    keysMap: {
      9: Sl,
      27: Sl,
      33: yl,
      34: wl,
      35: xl,
      36: _l,
      37: _l,
      38: yl,
      39: xl,
      40: wl
    },
    keysMapRtl: {
      9: Sl,
      27: Sl,
      33: yl,
      34: wl,
      35: _l,
      36: xl,
      37: xl,
      38: yl,
      39: _l,
      40: wl
    },
    ctrlKeysMapDown: {
      65: "cmdAll"
    },
    ctrlKeysMapUp: {
      67: "copy",
      88: "cut"
    }
  }, {
    _selectionDirection: null,
    _reSpace: /\s|\r?\n/,
    inCompositionMode: false
  });
  class Fi extends U_ {
    static getDefaults() {
      return A(A({}, super.getDefaults()), Fi.ownDefaults);
    }
    get type() {
      const t = super.type;
      return t === "itext" ? "i-text" : t;
    }
    constructor(t, e) {
      super(t, A(A({}, Fi.ownDefaults), e)), this.initBehavior();
    }
    _set(t, e) {
      return this.isEditing && this._savedProps && t in this._savedProps ? (this._savedProps[t] = e, this) : (t === "canvas" && (this.canvas instanceof xg && this.canvas.textEditingManager.remove(this), e instanceof xg && e.textEditingManager.add(this)), super._set(t, e));
    }
    setSelectionStart(t) {
      t = Math.max(t, 0), this._updateAndFire("selectionStart", t);
    }
    setSelectionEnd(t) {
      t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t);
    }
    _updateAndFire(t, e) {
      this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea();
    }
    _fireSelectionChanged() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
        target: this
      });
    }
    initDimensions() {
      this.isEditing && this.initDelayedCursor(), super.initDimensions();
    }
    getSelectionStyles() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart || 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionEnd, s = arguments.length > 2 ? arguments[2] : void 0;
      return super.getSelectionStyles(t, e, s);
    }
    setSelectionStyles(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionStart || 0, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.selectionEnd;
      return super.setSelectionStyles(t, e, s);
    }
    get2DCursorLocation() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 ? arguments[1] : void 0;
      return super.get2DCursorLocation(t, e);
    }
    render(t) {
      super.render(t), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
    }
    toCanvasElement(t) {
      const e = this.isEditing;
      this.isEditing = false;
      const s = super.toCanvasElement(t);
      return this.isEditing = e, s;
    }
    renderCursorOrSelection() {
      if (!this.isEditing || !this.canvas) return;
      const t = this.clearContextTop(true);
      if (!t) return;
      const e = this._getCursorBoundaries(), s = this.findAncestorsWithClipPath(), i = s.length > 0;
      let r, a = t;
      if (i) {
        r = Qe(t.canvas), a = r.getContext("2d"), om(a, this.canvas);
        const o = this.calcTransformMatrix();
        a.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
      }
      if (this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(a, e) : this.renderCursor(a, e), i) for (const o of s) {
        const h = o.clipPath, c = Qe(t.canvas), u = c.getContext("2d");
        if (om(u, this.canvas), !h.absolutePositioned) {
          const d = o.calcTransformMatrix();
          u.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
        }
        h.transform(u), h.drawObject(u, true, {}), this.drawClipPathOnCache(a, h, c);
      }
      i && (t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(r, 0, 0)), this.canvas.contextTopDirty = true, t.restore();
    }
    findAncestorsWithClipPath() {
      const t = [];
      let e = this;
      for (; e; ) e.clipPath && t.push(e), e = e.parent;
      return t;
    }
    _getCursorBoundaries() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 ? arguments[1] : void 0;
      const s = this._getLeftOffset(), i = this._getTopOffset(), r = this._getCursorBoundariesOffsets(t, e);
      return {
        left: s,
        top: i,
        leftOffset: r.left,
        topOffset: r.top
      };
    }
    _getCursorBoundariesOffsets(t, e) {
      return e ? this.__getCursorBoundariesOffsets(t) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t);
    }
    __getCursorBoundariesOffsets(t) {
      let e = 0, s = 0;
      const { charIndex: i, lineIndex: r } = this.get2DCursorLocation(t);
      for (let c = 0; c < r; c++) e += this.getHeightOfLine(c);
      const a = this._getLineLeftOffset(r), o = this.__charBounds[r][i];
      o && (s = o.left), this.charSpacing !== 0 && i === this._textLines[r].length && (s -= this._getWidthOfCharSpacing());
      const h = {
        top: e,
        left: a + (s > 0 ? s : 0)
      };
      return this.direction === "rtl" && (this.textAlign === Tt || this.textAlign === si || this.textAlign === xh ? h.left *= -1 : this.textAlign === at || this.textAlign === Su ? h.left = a - (s > 0 ? s : 0) : this.textAlign !== q && this.textAlign !== Sh || (h.left = a - (s > 0 ? s : 0))), h;
    }
    renderCursorAt(t) {
      this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t, true), t);
    }
    renderCursor(t, e) {
      this._renderCursor(t, e, this.selectionStart);
    }
    getCursorRenderingData() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._getCursorBoundaries(t);
      const s = this.get2DCursorLocation(t), i = s.lineIndex, r = s.charIndex > 0 ? s.charIndex - 1 : 0, a = this.getValueOfPropertyAt(i, r, "fontSize"), o = this.getObjectScaling().x * this.canvas.getZoom(), h = this.cursorWidth / o, c = this.getValueOfPropertyAt(i, r, "deltaY"), u = e.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(i) / this.lineHeight - a * (1 - this._fontSizeFraction);
      return {
        color: this.cursorColor || this.getValueOfPropertyAt(i, r, "fill"),
        opacity: this._currentCursorOpacity,
        left: e.left + e.leftOffset - h / 2,
        top: u + e.top + c,
        width: h,
        height: a
      };
    }
    _renderCursor(t, e, s) {
      const { color: i, opacity: r, left: a, top: o, width: h, height: c } = this.getCursorRenderingData(s, e);
      t.fillStyle = i, t.globalAlpha = r, t.fillRect(a, o, h, c);
    }
    renderSelection(t, e) {
      const s = {
        selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
        selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
      };
      this._renderSelection(t, s, e);
    }
    renderDragSourceEffect() {
      const t = this.draggableTextDelegate.getDragStartSelection();
      this._renderSelection(this.canvas.contextTop, t, this._getCursorBoundaries(t.selectionStart, true));
    }
    renderDropTargetEffect(t) {
      const e = this.getSelectionStartFromPointer(t);
      this.renderCursorAt(e);
    }
    _renderSelection(t, e, s) {
      const i = e.selectionStart, r = e.selectionEnd, a = this.textAlign.includes(si), o = this.get2DCursorLocation(i), h = this.get2DCursorLocation(r), c = o.lineIndex, u = h.lineIndex, d = o.charIndex < 0 ? 0 : o.charIndex, g = h.charIndex < 0 ? 0 : h.charIndex;
      for (let f = c; f <= u; f++) {
        const p = this._getLineLeftOffset(f) || 0;
        let v = this.getHeightOfLine(f), b = 0, _ = 0, S = 0;
        if (f === c && (_ = this.__charBounds[c][d].left), f >= c && f < u) S = a && !this.isEndOfWrapping(f) ? this.width : this.getLineWidth(f) || 5;
        else if (f === u) if (g === 0) S = this.__charBounds[u][g].left;
        else {
          const E = this._getWidthOfCharSpacing();
          S = this.__charBounds[u][g - 1].left + this.__charBounds[u][g - 1].width - E;
        }
        b = v, (this.lineHeight < 1 || f === u && this.lineHeight > 1) && (v /= this.lineHeight);
        let x = s.left + p + _, C = v, T = 0;
        const O = S - _;
        this.inCompositionMode ? (t.fillStyle = this.compositionColor || "black", C = 1, T = v) : t.fillStyle = this.selectionColor, this.direction === "rtl" && (this.textAlign === Tt || this.textAlign === si || this.textAlign === xh ? x = this.width - x - O : this.textAlign === at || this.textAlign === Su ? x = s.left + p - S : this.textAlign !== q && this.textAlign !== Sh || (x = s.left + p - S)), t.fillRect(x, s.top + s.topOffset + T, O, C), s.topOffset += b;
      }
    }
    getCurrentCharFontSize() {
      const t = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
    }
    getCurrentCharColor() {
      const t = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(t.l, t.c, jt);
    }
    _getCurrentCharIndex() {
      const t = this.get2DCursorLocation(this.selectionStart, true), e = t.charIndex > 0 ? t.charIndex - 1 : 0;
      return {
        l: t.lineIndex,
        c: e
      };
    }
    dispose() {
      this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
    }
  }
  k(Fi, "ownDefaults", Y_), k(Fi, "type", "IText"), B.setClass(Fi), B.setClass(Fi, "i-text");
  class vn extends Fi {
    static getDefaults() {
      return A(A({}, super.getDefaults()), vn.ownDefaults);
    }
    constructor(t, e) {
      super(t, A(A({}, vn.ownDefaults), e));
    }
    static createControls() {
      return {
        controls: Ow()
      };
    }
    initDimensions() {
      this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(si) && this.enlargeSpaces(), this.height = this.calcTextHeight());
    }
    _generateStyleMap(t) {
      let e = 0, s = 0, i = 0;
      const r = {};
      for (let a = 0; a < t.graphemeLines.length; a++) t.graphemeText[i] === `
` && a > 0 ? (s = 0, i++, e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[i]) && a > 0 && (s++, i++), r[a] = {
        line: e,
        offset: s
      }, i += t.graphemeLines[a].length, s += t.graphemeLines[a].length;
      return r;
    }
    styleHas(t, e) {
      if (this._styleMap && !this.isWrapping) {
        const s = this._styleMap[e];
        s && (e = s.line);
      }
      return super.styleHas(t, e);
    }
    isEmptyStyles(t) {
      if (!this.styles) return true;
      let e, s = 0, i = t + 1, r = false;
      const a = this._styleMap[t], o = this._styleMap[t + 1];
      a && (t = a.line, s = a.offset), o && (i = o.line, r = i === t, e = o.offset);
      const h = t === void 0 ? this.styles : {
        line: this.styles[t]
      };
      for (const c in h) for (const u in h[c]) {
        const d = parseInt(u, 10);
        if (d >= s && (!r || d < e)) for (const g in h[c][u]) return false;
      }
      return true;
    }
    _getStyleDeclaration(t, e) {
      if (this._styleMap && !this.isWrapping) {
        const s = this._styleMap[t];
        if (!s) return {};
        t = s.line, e = s.offset + e;
      }
      return super._getStyleDeclaration(t, e);
    }
    _setStyleDeclaration(t, e, s) {
      const i = this._styleMap[t];
      super._setStyleDeclaration(i.line, i.offset + e, s);
    }
    _deleteStyleDeclaration(t, e) {
      const s = this._styleMap[t];
      super._deleteStyleDeclaration(s.line, s.offset + e);
    }
    _getLineStyle(t) {
      const e = this._styleMap[t];
      return !!this.styles[e.line];
    }
    _setLineStyle(t) {
      const e = this._styleMap[t];
      super._setLineStyle(e.line);
    }
    _wrapText(t, e) {
      this.isWrapping = true;
      const s = this.getGraphemeDataForRender(t), i = [];
      for (let r = 0; r < s.wordsData.length; r++) i.push(...this._wrapLine(r, e, s));
      return this.isWrapping = false, i;
    }
    getGraphemeDataForRender(t) {
      const e = this.splitByGrapheme, s = e ? "" : " ";
      let i = 0;
      return {
        wordsData: t.map((r, a) => {
          let o = 0;
          const h = e ? this.graphemeSplit(r) : this.wordSplit(r);
          return h.length === 0 ? [
            {
              word: [],
              width: 0
            }
          ] : h.map((c) => {
            const u = e ? [
              c
            ] : this.graphemeSplit(c), d = this._measureWord(u, a, o);
            return i = Math.max(d, i), o += u.length + s.length, {
              word: u,
              width: d
            };
          });
        }),
        largestWordWidth: i
      };
    }
    _measureWord(t, e) {
      let s, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = 0;
      for (let a = 0, o = t.length; a < o; a++) r += this._getGraphemeBox(t[a], e, a + i, s, true).kernedWidth, s = t[a];
      return r;
    }
    wordSplit(t) {
      return t.split(this._wordJoiners);
    }
    _wrapLine(t, e, s) {
      let { largestWordWidth: i, wordsData: r } = s, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      const o = this._getWidthOfCharSpacing(), h = this.splitByGrapheme, c = [], u = h ? "" : " ";
      let d = 0, g = [], f = 0, p = 0, v = true;
      e -= a;
      const b = Math.max(e, i, this.dynamicMinWidth), _ = r[t];
      let S;
      for (f = 0, S = 0; S < _.length; S++) {
        const { word: x, width: C } = _[S];
        f += x.length, d += p + C - o, d > b && !v ? (c.push(g), g = [], d = C, v = true) : d += o, v || h || g.push(u), g = g.concat(x), p = h ? 0 : this._measureWord([
          u
        ], t, f), f++, v = false;
      }
      return S && c.push(g), i + a > this.dynamicMinWidth && (this.dynamicMinWidth = i - o + a), c;
    }
    isEndOfWrapping(t) {
      return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line;
    }
    missingNewlineOffset(t, e) {
      return this.splitByGrapheme && !e ? this.isEndOfWrapping(t) ? 1 : 0 : 1;
    }
    _splitTextIntoLines(t) {
      const e = super._splitTextIntoLines(t), s = this._wrapText(e.lines, this.width), i = new Array(s.length);
      for (let r = 0; r < s.length; r++) i[r] = s[r].join("");
      return e.lines = i, e.graphemeLines = s, e;
    }
    getMinWidth() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    }
    _removeExtraneousStyles() {
      const t = /* @__PURE__ */ new Map();
      for (const e in this._styleMap) {
        const s = parseInt(e, 10);
        if (this._textLines[s]) {
          const i = this._styleMap[e].line;
          t.set("".concat(i), true);
        }
      }
      for (const e in this.styles) t.has(e) || delete this.styles[e];
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return super.toObject([
        "minWidth",
        "splitByGrapheme",
        ...t
      ]);
    }
  }
  k(vn, "type", "Textbox"), k(vn, "textLayoutProperties", [
    ...Fi.textLayoutProperties,
    "width"
  ]), k(vn, "ownDefaults", {
    minWidth: 20,
    dynamicMinWidth: 2,
    lockScalingFlip: true,
    noScaleCache: false,
    _wordJoiners: /[ \t\r]/,
    splitByGrapheme: false
  }), B.setClass(vn);
  class hm extends Cd {
    shouldPerformLayout(t) {
      return !!t.target.clipPath && super.shouldPerformLayout(t);
    }
    shouldLayoutClipPath() {
      return false;
    }
    calcLayoutResult(t, e) {
      const { target: s } = t, { clipPath: i, group: r } = s;
      if (!i || !this.shouldPerformLayout(t)) return;
      const { width: a, height: o } = ni(Vv(s, i)), h = new M(a, o);
      if (i.absolutePositioned) return {
        center: En(i.getRelativeCenterPoint(), void 0, r ? r.calcTransformMatrix() : void 0),
        size: h
      };
      {
        const c = i.getRelativeCenterPoint().transform(s.calcOwnMatrix(), true);
        if (this.shouldPerformLayout(t)) {
          const { center: u = new M(), correction: d = new M() } = this.calcBoundingBox(e, t) || {};
          return {
            center: u.add(c),
            correction: d.subtract(c),
            size: h
          };
        }
        return {
          center: s.getRelativeCenterPoint().add(c),
          size: h
        };
      }
    }
  }
  k(hm, "type", "clip-path"), B.setClass(hm);
  class lm extends Cd {
    getInitialSize(t, e) {
      let { target: s } = t, { size: i } = e;
      return new M(s.width || i.x, s.height || i.y);
    }
  }
  k(lm, "type", "fixed"), B.setClass(lm);
  class $_ extends rl {
    subscribeTargets(t) {
      const e = t.target;
      t.targets.reduce((s, i) => (i.parent && s.add(i.parent), s), /* @__PURE__ */ new Set()).forEach((s) => {
        s.layoutManager.subscribeTargets({
          target: s,
          targets: [
            e
          ]
        });
      });
    }
    unsubscribeTargets(t) {
      const e = t.target, s = e.getObjects();
      t.targets.reduce((i, r) => (r.parent && i.add(r.parent), i), /* @__PURE__ */ new Set()).forEach((i) => {
        !s.some((r) => r.parent === i) && i.layoutManager.unsubscribeTargets({
          target: i,
          targets: [
            e
          ]
        });
      });
    }
  }
  class bn extends ps {
    static getDefaults() {
      return A(A({}, super.getDefaults()), bn.ownDefaults);
    }
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      super(), Object.assign(this, bn.ownDefaults), this.setOptions(e);
      const { left: s, top: i, layoutManager: r } = e;
      this.groupInit(t, {
        left: s,
        top: i,
        layoutManager: r ?? new $_()
      });
    }
    _shouldSetNestedCoords() {
      return true;
    }
    __objectSelectionMonitor() {
    }
    multiSelectAdd() {
      for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) e[s] = arguments[s];
      this.multiSelectionStacking === "selection-order" ? this.add(...e) : e.forEach((i) => {
        const r = this._objects.findIndex((o) => o.isInFrontOf(i)), a = r === -1 ? this.size() : r;
        this.insertAt(a, i);
      });
    }
    canEnterGroup(t) {
      return this.getObjects().some((e) => e.isDescendantOf(t) || t.isDescendantOf(e)) ? (Ni("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), false) : super.canEnterGroup(t);
    }
    enterGroup(t, e) {
      t.parent && t.parent === t.group ? t.parent._exitGroup(t) : t.group && t.parent !== t.group && t.group.remove(t), this._enterGroup(t, e);
    }
    exitGroup(t, e) {
      this._exitGroup(t, e), t.parent && t.parent._enterGroup(t, true);
    }
    _onAfterObjectsChange(t, e) {
      super._onAfterObjectsChange(t, e);
      const s = /* @__PURE__ */ new Set();
      e.forEach((i) => {
        const { parent: r } = i;
        r && s.add(r);
      }), t === cp ? s.forEach((i) => {
        i._onAfterObjectsChange(yu, e);
      }) : s.forEach((i) => {
        i._set("dirty", true);
      });
    }
    onDeselect() {
      return this.removeAll(), false;
    }
    toString() {
      return "#<ActiveSelection: (".concat(this.complexity(), ")>");
    }
    shouldCache() {
      return false;
    }
    isOnACache() {
      return false;
    }
    _renderControls(t, e, s) {
      t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      const i = A(A({
        hasControls: false
      }, s), {}, {
        forActiveSelection: true
      });
      for (let r = 0; r < this._objects.length; r++) this._objects[r]._renderControls(t, i);
      super._renderControls(t, e), t.restore();
    }
  }
  k(bn, "type", "ActiveSelection"), k(bn, "ownDefaults", {
    multiSelectionStacking: "canvas-stacking"
  }), B.setClass(bn), B.setClass(bn, "activeSelection");
  class q_ {
    constructor() {
      k(this, "resources", {});
    }
    applyFilters(t, e, s, i, r) {
      const a = r.getContext("2d");
      if (!a) return;
      a.drawImage(e, 0, 0, s, i);
      const o = {
        sourceWidth: s,
        sourceHeight: i,
        imageData: a.getImageData(0, 0, s, i),
        originalEl: e,
        originalImageData: a.getImageData(0, 0, s, i),
        canvasEl: r,
        ctx: a,
        filterBackend: this
      };
      t.forEach((c) => {
        c.applyTo(o);
      });
      const { imageData: h } = o;
      return h.width === s && h.height === i || (r.width = h.width, r.height = h.height), a.putImageData(h, 0, 0), o;
    }
  }
  class p0 {
    constructor() {
      let { tileSize: t = rt.textureSize } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      k(this, "aPosition", new Float32Array([
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        1
      ])), k(this, "resources", {}), this.tileSize = t, this.setupGLContext(t, t), this.captureGPUInfo();
    }
    setupGLContext(t, e) {
      this.dispose(), this.createWebGLCanvas(t, e);
    }
    createWebGLCanvas(t, e) {
      const s = Qe({
        width: t,
        height: e
      }), i = s.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
        depth: false,
        stencil: false,
        antialias: false
      });
      i && (i.clearColor(0, 0, 0, 0), this.canvas = s, this.gl = i);
    }
    applyFilters(t, e, s, i, r, a) {
      const o = this.gl, h = r.getContext("2d");
      if (!o || !h) return;
      let c;
      a && (c = this.getCachedTexture(a, e));
      const u = {
        originalWidth: e.width || e.naturalWidth || 0,
        originalHeight: e.height || e.naturalHeight || 0,
        sourceWidth: s,
        sourceHeight: i,
        destinationWidth: s,
        destinationHeight: i,
        context: o,
        sourceTexture: this.createTexture(o, s, i, c ? void 0 : e),
        targetTexture: this.createTexture(o, s, i),
        originalTexture: c || this.createTexture(o, s, i, c ? void 0 : e),
        passes: t.length,
        webgl: true,
        aPosition: this.aPosition,
        programCache: this.programCache,
        pass: 0,
        filterBackend: this,
        targetCanvas: r
      }, d = o.createFramebuffer();
      return o.bindFramebuffer(o.FRAMEBUFFER, d), t.forEach((g) => {
        g && g.applyTo(u);
      }), function(g) {
        const f = g.targetCanvas, p = f.width, v = f.height, b = g.destinationWidth, _ = g.destinationHeight;
        p === b && v === _ || (f.width = b, f.height = _);
      }(u), this.copyGLTo2D(o, u), o.bindTexture(o.TEXTURE_2D, null), o.deleteTexture(u.sourceTexture), o.deleteTexture(u.targetTexture), o.deleteFramebuffer(d), h.setTransform(1, 0, 0, 1, 0, 0), u;
    }
    dispose() {
      this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
    }
    clearWebGLCaches() {
      this.programCache = {}, this.textureCache = {};
    }
    createTexture(t, e, s, i, r) {
      const { NEAREST: a, TEXTURE_2D: o, RGBA: h, UNSIGNED_BYTE: c, CLAMP_TO_EDGE: u, TEXTURE_MAG_FILTER: d, TEXTURE_MIN_FILTER: g, TEXTURE_WRAP_S: f, TEXTURE_WRAP_T: p } = t, v = t.createTexture();
      return t.bindTexture(o, v), t.texParameteri(o, d, r || a), t.texParameteri(o, g, r || a), t.texParameteri(o, f, u), t.texParameteri(o, p, u), i ? t.texImage2D(o, 0, h, h, c, i) : t.texImage2D(o, 0, h, e, s, 0, h, c, null), v;
    }
    getCachedTexture(t, e, s) {
      const { textureCache: i } = this;
      if (i[t]) return i[t];
      {
        const r = this.createTexture(this.gl, e.width, e.height, e, s);
        return r && (i[t] = r), r;
      }
    }
    evictCachesForKey(t) {
      this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t]);
    }
    copyGLTo2D(t, e) {
      const s = t.canvas, i = e.targetCanvas, r = i.getContext("2d");
      if (!r) return;
      r.translate(0, i.height), r.scale(1, -1);
      const a = s.height - i.height;
      r.drawImage(s, 0, a, i.width, i.height, 0, 0, i.width, i.height);
    }
    copyGLTo2DPutImageData(t, e) {
      const s = e.targetCanvas.getContext("2d"), i = e.destinationWidth, r = e.destinationHeight, a = i * r * 4;
      if (!s) return;
      const o = new Uint8Array(this.imageBuffer, 0, a), h = new Uint8ClampedArray(this.imageBuffer, 0, a);
      t.readPixels(0, 0, i, r, t.RGBA, t.UNSIGNED_BYTE, o);
      const c = new ImageData(h, i, r);
      s.putImageData(c, 0, 0);
    }
    captureGPUInfo() {
      if (this.gpuInfo) return this.gpuInfo;
      const t = this.gl, e = {
        renderer: "",
        vendor: ""
      };
      if (!t) return e;
      const s = t.getExtension("WEBGL_debug_renderer_info");
      if (s) {
        const i = t.getParameter(s.UNMASKED_RENDERER_WEBGL), r = t.getParameter(s.UNMASKED_VENDOR_WEBGL);
        i && (e.renderer = i.toLowerCase()), r && (e.vendor = r.toLowerCase());
      }
      return this.gpuInfo = e, e;
    }
  }
  let Yd;
  function K_() {
    const { WebGLProbe: n } = ai();
    return n.queryWebGL(ms()), rt.enableGLFiltering && n.isSupported(rt.textureSize) ? new p0({
      tileSize: rt.textureSize
    }) : new q_();
  }
  function $d() {
    return !Yd && (!(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]) && (Yd = K_()), Yd;
  }
  const Q_ = [
    "filters",
    "resizeFilter",
    "src",
    "crossOrigin",
    "type"
  ], m0 = [
    "cropX",
    "cropY"
  ];
  class ge extends me {
    static getDefaults() {
      return A(A({}, super.getDefaults()), ge.ownDefaults);
    }
    constructor(t, e) {
      super(), k(this, "_lastScaleX", 1), k(this, "_lastScaleY", 1), k(this, "_filterScalingX", 1), k(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, ge.ownDefaults), this.setOptions(e), this.cacheKey = "texture".concat(Tr()), this.setElement(typeof t == "string" ? (this.canvas && Es(this.canvas.getElement()) || ao()).getElementById(t) : t, e);
    }
    getElement() {
      return this._element;
    }
    setElement(t) {
      var e;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = t, this._originalElement = t, this._setWidthHeight(s), (e = t.classList) === null || e === void 0 || e.add(ge.CSS_CANVAS), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
    }
    removeTexture(t) {
      const e = $d(false);
      e instanceof p0 && e.evictCachesForKey(t);
    }
    dispose() {
      super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, [
        "_originalElement",
        "_element",
        "_filteredEl",
        "_cacheCanvas"
      ].forEach((t) => {
        const e = this[t];
        e && ai().dispose(e), this[t] = void 0;
      });
    }
    getCrossOrigin() {
      return this._originalElement && (this._originalElement.crossOrigin || null);
    }
    getOriginalSize() {
      const t = this.getElement();
      return t ? {
        width: t.naturalWidth || t.width,
        height: t.naturalHeight || t.height
      } : {
        width: 0,
        height: 0
      };
    }
    _stroke(t) {
      if (!this.stroke || this.strokeWidth === 0) return;
      const e = this.width / 2, s = this.height / 2;
      t.beginPath(), t.moveTo(-e, -s), t.lineTo(e, -s), t.lineTo(e, s), t.lineTo(-e, s), t.lineTo(-e, -s), t.closePath();
    }
    toObject() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const e = [];
      return this.filters.forEach((s) => {
        s && e.push(s.toObject());
      }), A(A({}, super.toObject([
        ...m0,
        ...t
      ])), {}, {
        src: this.getSrc(),
        crossOrigin: this.getCrossOrigin(),
        filters: e
      }, this.resizeFilter ? {
        resizeFilter: this.resizeFilter.toObject()
      } : {});
    }
    hasCrop() {
      return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
    }
    _toSVG() {
      const t = [], e = this._element, s = -this.width / 2, i = -this.height / 2;
      let r = [], a = [], o = "", h = "";
      if (!e) return [];
      if (this.hasCrop()) {
        const c = Tr();
        r.push('<clipPath id="imageCrop_' + c + `">
`, '	<rect x="' + s + '" y="' + i + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), o = ' clip-path="url(#imageCrop_' + c + ')" ';
      }
      if (this.imageSmoothing || (h = ' image-rendering="optimizeSpeed"'), t.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(true), '" x="').concat(s - this.cropX, '" y="').concat(i - this.cropY, '" width="').concat(e.width || e.naturalWidth, '" height="').concat(e.height || e.naturalHeight, '"').concat(h).concat(o, `></image>
`)), this.stroke || this.strokeDashArray) {
        const c = this.fill;
        this.fill = null, a = [
          '	<rect x="'.concat(s, '" y="').concat(i, '" width="').concat(this.width, '" height="').concat(this.height, '" style="').concat(this.getSvgStyles(), `" />
`)
        ], this.fill = c;
      }
      return r = this.paintFirst !== jt ? r.concat(a, t) : r.concat(t, a), r;
    }
    getSrc(t) {
      const e = t ? this._element : this._originalElement;
      return e ? e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") || "" : e.src : this.src || "";
    }
    getSvgSrc(t) {
      return this.getSrc(t);
    }
    setSrc(t) {
      let { crossOrigin: e, signal: s } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return _h(t, {
        crossOrigin: e,
        signal: s
      }).then((i) => {
        e !== void 0 && this.set({
          crossOrigin: e
        }), this.setElement(i);
      });
    }
    toString() {
      return '#<Image: { src: "'.concat(this.getSrc(), '" }>');
    }
    applyResizeFilters() {
      const t = this.resizeFilter, e = this.minimumScaleTrigger, s = this.getTotalObjectScaling(), i = s.x, r = s.y, a = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", true), !t || i > e && r > e) return this._element = a, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i, void (this._lastScaleY = r);
      const o = Qe(a), { width: h, height: c } = a;
      this._element = o, this._lastScaleX = t.scaleX = i, this._lastScaleY = t.scaleY = r, $d().applyFilters([
        t
      ], a, h, c, this._element), this._filterScalingX = o.width / this._originalElement.width, this._filterScalingY = o.height / this._originalElement.height;
    }
    applyFilters() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.filters || [];
      if (t = t.filter((r) => r && !r.isNeutralState()), this.set("dirty", true), this.removeTexture("".concat(this.cacheKey, "_filtered")), t.length === 0) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
      const e = this._originalElement, s = e.naturalWidth || e.width, i = e.naturalHeight || e.height;
      if (this._element === this._originalElement) {
        const r = Qe({
          width: s,
          height: i
        });
        this._element = r, this._filteredEl = r;
      } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, s, i), this._lastScaleX = 1, this._lastScaleY = 1);
      $d().applyFilters(t, this._originalElement, s, i, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
    }
    _render(t) {
      t.imageSmoothingEnabled = this.imageSmoothing, this.isMoving !== true && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t);
    }
    drawCacheOnCanvas(t) {
      t.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t);
    }
    shouldCache() {
      return this.needsItsOwnCache();
    }
    _renderFill(t) {
      const e = this._element;
      if (!e) return;
      const s = this._filterScalingX, i = this._filterScalingY, r = this.width, a = this.height, o = Math.max(this.cropX, 0), h = Math.max(this.cropY, 0), c = e.naturalWidth || e.width, u = e.naturalHeight || e.height, d = o * s, g = h * i, f = Math.min(r * s, c - d), p = Math.min(a * i, u - g), v = -r / 2, b = -a / 2, _ = Math.min(r, c / s - o), S = Math.min(a, u / i - h);
      e && t.drawImage(e, d, g, f, p, v, b, _, S);
    }
    _needsResize() {
      const t = this.getTotalObjectScaling();
      return t.x !== this._lastScaleX || t.y !== this._lastScaleY;
    }
    _resetWidthHeight() {
      this.set(this.getOriginalSize());
    }
    _setWidthHeight() {
      let { width: t, height: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const s = this.getOriginalSize();
      this.width = t || s.width, this.height = e || s.height;
    }
    parsePreserveAspectRatioAttribute() {
      const t = sp(this.preserveAspectRatio || ""), e = this.width, s = this.height, i = {
        width: e,
        height: s
      };
      let r, a = this._element.width, o = this._element.height, h = 1, c = 1, u = 0, d = 0, g = 0, f = 0;
      return !t || t.alignX === Ae && t.alignY === Ae ? (h = e / a, c = s / o) : (t.meetOrSlice === "meet" && (h = c = Xv(this._element, i), r = (e - a * h) / 2, t.alignX === "Min" && (u = -r), t.alignX === "Max" && (u = r), r = (s - o * c) / 2, t.alignY === "Min" && (d = -r), t.alignY === "Max" && (d = r)), t.meetOrSlice === "slice" && (h = c = Uv(this._element, i), r = a - e / h, t.alignX === "Mid" && (g = r / 2), t.alignX === "Max" && (g = r), r = o - s / c, t.alignY === "Mid" && (f = r / 2), t.alignY === "Max" && (f = r), a = e / h, o = s / c)), {
        width: a,
        height: o,
        scaleX: h,
        scaleY: c,
        offsetLeft: u,
        offsetTop: d,
        cropX: g,
        cropY: f
      };
    }
    static fromObject(t, e) {
      let { filters: s, resizeFilter: i, src: r, crossOrigin: a, type: o } = t, h = yt(t, Q_);
      return Promise.all([
        _h(r, A(A({}, e), {}, {
          crossOrigin: a
        })),
        s && so(s, e),
        i && so([
          i
        ], e),
        ll(h, e)
      ]).then((c) => {
        let [u, d = [], [g] = [], f = {}] = c;
        return new this(u, A(A({}, h), {}, {
          src: r,
          filters: d,
          resizeFilter: g
        }, f));
      });
    }
    static fromURL(t) {
      let { crossOrigin: e = null, signal: s } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
      return _h(t, {
        crossOrigin: e,
        signal: s
      }).then((r) => new this(r, i));
    }
    static async fromElement(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0;
      const i = Hi(t, this.ATTRIBUTE_NAMES, s);
      return this.fromURL(i["xlink:href"] || i.href, e, i).catch((r) => (Ni("log", "Unable to parse Image", r), null));
    }
  }
  function qd(n) {
    if (!sw.test(n.nodeName)) return {};
    const t = n.getAttribute("viewBox");
    let e, s, i = 1, r = 1, a = 0, o = 0;
    const h = n.getAttribute("width"), c = n.getAttribute("height"), u = n.getAttribute("x") || 0, d = n.getAttribute("y") || 0, g = !(t && Wp.test(t)), f = !h || !c || h === "100%" || c === "100%";
    let p = "", v = 0, b = 0;
    if (g && (u || d) && n.parentNode && n.parentNode.nodeName !== "#document" && (p = " translate(" + xe(u || "0") + " " + xe(d || "0") + ") ", e = (n.getAttribute("transform") || "") + p, n.setAttribute("transform", e), n.removeAttribute("x"), n.removeAttribute("y")), g && f) return {
      width: 0,
      height: 0
    };
    const _ = {
      width: 0,
      height: 0
    };
    if (g) return _.width = xe(h), _.height = xe(c), _;
    const S = t.match(Wp);
    a = -parseFloat(S[1]), o = -parseFloat(S[2]);
    const x = parseFloat(S[3]), C = parseFloat(S[4]);
    _.minX = a, _.minY = o, _.viewBoxWidth = x, _.viewBoxHeight = C, f ? (_.width = x, _.height = C) : (_.width = xe(h), _.height = xe(c), i = _.width / x, r = _.height / C);
    const T = sp(n.getAttribute("preserveAspectRatio") || "");
    if (T.alignX !== Ae && (T.meetOrSlice === "meet" && (r = i = i > r ? r : i), T.meetOrSlice === "slice" && (r = i = i > r ? i : r), v = _.width - x * i, b = _.height - C * i, T.alignX === "Mid" && (v /= 2), T.alignY === "Mid" && (b /= 2), T.alignX === "Min" && (v = 0), T.alignY === "Min" && (b = 0)), i === 1 && r === 1 && a === 0 && o === 0 && u === 0 && d === 0) return _;
    if ((u || d) && n.parentNode.nodeName !== "#document" && (p = " translate(" + xe(u || "0") + " " + xe(d || "0") + ") "), e = p + " matrix(" + i + " 0 0 " + r + " " + (a * i + v) + " " + (o * r + b) + ") ", n.nodeName === "svg") {
      for (s = n.ownerDocument.createElementNS(pg, "g"); n.firstChild; ) s.appendChild(n.firstChild);
      n.appendChild(s);
    } else s = n, s.removeAttribute("x"), s.removeAttribute("y"), e = s.getAttribute("transform") + e;
    return s.setAttribute("transform", e), _;
  }
  k(ge, "type", "Image"), k(ge, "cacheProperties", [
    ...Bi,
    ...m0
  ]), k(ge, "ownDefaults", {
    strokeWidth: 0,
    srcFromAttribute: false,
    minimumScaleTrigger: 0.5,
    cropX: 0,
    cropY: 0,
    imageSmoothing: true
  }), k(ge, "CSS_CANVAS", "canvas-img"), k(ge, "ATTRIBUTE_NAMES", [
    ...Pr,
    "x",
    "y",
    "width",
    "height",
    "preserveAspectRatio",
    "xlink:href",
    "href",
    "crossOrigin",
    "image-rendering"
  ]), B.setClass(ge), B.setSVGClass(ge);
  const Cu = (n) => n.tagName.replace("svg:", ""), J_ = yd([
    "pattern",
    "defs",
    "symbol",
    "metadata",
    "clipPath",
    "mask",
    "desc"
  ]);
  function v0(n, t) {
    let e, s, i, r, a = [];
    for (i = 0, r = t.length; i < r; i++) e = t[i], s = n.getElementsByTagNameNS("http://www.w3.org/2000/svg", e), a = a.concat(Array.from(s));
    return a;
  }
  const Z_ = [
    "gradientTransform",
    "x1",
    "x2",
    "y1",
    "y2",
    "gradientUnits",
    "cx",
    "cy",
    "r",
    "fx",
    "fy"
  ], Kd = "xlink:href";
  function b0(n, t) {
    var e;
    const s = ((e = t.getAttribute(Kd)) === null || e === void 0 ? void 0 : e.slice(1)) || "", i = n.getElementById(s);
    if (i && i.getAttribute(Kd) && b0(n, i), i && (Z_.forEach((r) => {
      const a = i.getAttribute(r);
      !t.hasAttribute(r) && a && t.setAttribute(r, a);
    }), !t.children.length)) {
      const r = i.cloneNode(true);
      for (; r.firstChild; ) t.appendChild(r.firstChild);
    }
    t.removeAttribute(Kd);
  }
  const tx = [
    "linearGradient",
    "radialGradient",
    "svg:linearGradient",
    "svg:radialGradient"
  ];
  function ex(n) {
    const t = n.getElementsByTagName("style");
    let e, s;
    const i = {};
    for (e = 0, s = t.length; e < s; e++) {
      const r = (t[e].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
      r.trim() !== "" && r.split("}").filter((a, o, h) => h.length > 1 && a.trim()).forEach((a) => {
        if ((a.match(/{/g) || []).length > 1 && a.trim().startsWith("@")) return;
        const o = a.split("{"), h = {}, c = o[1].trim().split(";").filter(function(u) {
          return u.trim();
        });
        for (e = 0, s = c.length; e < s; e++) {
          const u = c[e].split(":"), d = u[0].trim(), g = u[1].trim();
          h[d] = g;
        }
        (a = o[0].trim()).split(",").forEach((u) => {
          (u = u.replace(/^svg/i, "").trim()) !== "" && (i[u] = A(A({}, i[u] || {}), h));
        });
      });
    }
    return i;
  }
  const cm = (n) => B.getSVGClass(Cu(n).toLowerCase());
  class sx {
    constructor(t, e, s, i, r) {
      this.elements = t, this.options = e, this.reviver = s, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i, this.clipPaths = r, this.gradientDefs = function(a) {
        const o = v0(a, tx), h = {};
        let c = o.length;
        for (; c--; ) {
          const u = o[c];
          u.getAttribute("xlink:href") && b0(a, u);
          const d = u.getAttribute("id");
          d && (h[d] = u);
        }
        return h;
      }(i), this.cssRules = ex(i);
    }
    parse() {
      return Promise.all(this.elements.map((t) => this.createObject(t)));
    }
    async createObject(t) {
      const e = cm(t);
      if (e) {
        const s = await e.fromElement(t, this.options, this.cssRules);
        return this.resolveGradient(s, t, jt), this.resolveGradient(s, t, ke), s instanceof ge && s._originalElement ? Kl(s, s.parsePreserveAspectRatioAttribute()) : Kl(s), await this.resolveClipPath(s, t), this.reviver && this.reviver(t, s), s;
      }
      return null;
    }
    extractPropertyDefinition(t, e, s) {
      const i = t[e], r = this.regexUrl;
      if (!r.test(i)) return;
      r.lastIndex = 0;
      const a = r.exec(i)[1];
      return r.lastIndex = 0, s[a];
    }
    resolveGradient(t, e, s) {
      const i = this.extractPropertyDefinition(t, s, this.gradientDefs);
      if (i) {
        const r = e.getAttribute(s + "-opacity"), a = xo.fromElement(i, t, A(A({}, this.options), {}, {
          opacity: r
        }));
        t.set(s, a);
      }
    }
    async resolveClipPath(t, e, s) {
      const i = this.extractPropertyDefinition(t, "clipPath", this.clipPaths);
      if (i) {
        const r = We(t.calcTransformMatrix()), a = i[0].parentElement;
        let o = e;
        for (; !s && o.parentElement && o.getAttribute("clip-path") !== t.clipPath; ) o = o.parentElement;
        o.parentElement.appendChild(a);
        const h = bu("".concat(o.getAttribute("transform") || "", " ").concat(a.getAttribute("originalTransform") || ""));
        a.setAttribute("transform", "matrix(".concat(h.join(","), ")"));
        const c = await Promise.all(i.map((S) => cm(S).fromElement(S, this.options, this.cssRules).then((x) => (Kl(x), x.fillRule = x.clipRule, delete x.clipRule, x)))), u = c.length === 1 ? c[0] : new ps(c), d = Et(r, u.calcTransformMatrix());
        u.clipPath && await this.resolveClipPath(u, o, a.getAttribute("clip-path") ? o : void 0);
        const { scaleX: g, scaleY: f, angle: p, skewX: v, translateX: b, translateY: _ } = Dn(d);
        u.set({
          flipX: false,
          flipY: false
        }), u.set({
          scaleX: g,
          scaleY: f,
          angle: p,
          skewX: v,
          skewY: 0
        }), u.setPositionByOrigin(new M(b, _), q, q), t.clipPath = u;
      } else delete t.clipPath;
    }
  }
  const um = (n) => ew.test(Cu(n)), Cg = () => ({
    objects: [],
    elements: [],
    options: {},
    allElements: []
  });
  async function ix(n, t) {
    let { crossOrigin: e, signal: s } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (s && s.aborted) return Ni("log", new zf("parseSVGDocument")), Cg();
    const i = n.documentElement;
    (function(c) {
      const u = v0(c, [
        "use",
        "svg:use"
      ]), d = [
        "x",
        "y",
        "xlink:href",
        "href",
        "transform"
      ];
      for (const g of u) {
        const f = g.attributes, p = {};
        for (const D of f) D.value && (p[D.name] = D.value);
        const v = (p["xlink:href"] || p.href || "").slice(1);
        if (v === "") return;
        const b = c.getElementById(v);
        if (b === null) return;
        let _ = b.cloneNode(true);
        const S = _.attributes, x = {};
        for (const D of S) D.value && (x[D.name] = D.value);
        const { x: C = 0, y: T = 0, transform: O = "" } = p, E = "".concat(O, " ").concat(x.transform || "", " translate(").concat(C, ", ").concat(T, ")");
        if (qd(_), /^svg$/i.test(_.nodeName)) {
          const D = _.ownerDocument.createElementNS(pg, "g");
          Object.entries(x).forEach((F) => {
            let [L, N] = F;
            return D.setAttributeNS(pg, L, N);
          }), D.append(..._.childNodes), _ = D;
        }
        for (const D of f) {
          if (!D) continue;
          const { name: F, value: L } = D;
          if (!d.includes(F)) if (F === "style") {
            const N = {};
            bg(L, N), Object.entries(x).forEach((I) => {
              let [W, j] = I;
              N[W] = j;
            }), bg(x.style || "", N);
            const P = Object.entries(N).map((I) => I.join(":")).join(";");
            _.setAttribute(F, P);
          } else !x[F] && _.setAttribute(F, L);
        }
        _.setAttribute("transform", E), _.setAttribute("instantiated_by_use", "1"), _.removeAttribute("id"), g.parentNode.replaceChild(_, g);
      }
    })(n);
    const r = Array.from(i.getElementsByTagName("*")), a = A(A({}, qd(i)), {}, {
      crossOrigin: e,
      signal: s
    }), o = r.filter((c) => (qd(c), um(c) && !function(u) {
      let d = u;
      for (; d && (d = d.parentElement); ) if (d && d.nodeName && J_.test(Cu(d)) && !d.getAttribute("instantiated_by_use")) return true;
      return false;
    }(c)));
    if (!o || o && !o.length) return A(A({}, Cg()), {}, {
      options: a,
      allElements: r
    });
    const h = {};
    return r.filter((c) => Cu(c) === "clipPath").forEach((c) => {
      c.setAttribute("originalTransform", c.getAttribute("transform") || "");
      const u = c.getAttribute("id");
      h[u] = Array.from(c.getElementsByTagName("*")).filter((d) => um(d));
    }), {
      objects: await new sx(o, a, t, n, h).parse(),
      elements: o,
      options: a,
      allElements: r
    };
  }
  function rx(n, t) {
    let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise((s, i) => {
      e0(n.replace(/^\n\s*/, "").trim(), {
        onComplete: (r) => {
          const a = r.responseXML;
          a && s(a), i();
        },
        signal: e.signal
      });
    }).then((s) => ix(s, t, e)).catch(() => Cg());
  }
  const kd = (n) => n.webgl !== void 0, dp = "precision highp float", nx = `
    `.concat(dp, `;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`), ax = [
    "type"
  ], ox = [
    "type"
  ], hx = new RegExp(dp, "g");
  class Vt {
    get type() {
      return this.constructor.type;
    }
    constructor() {
      let t = yt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ax);
      Object.assign(this, this.constructor.defaults, t);
    }
    getFragmentSource() {
      return nx;
    }
    getVertexSource() {
      return `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`;
    }
    createProgram(t) {
      let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getFragmentSource(), s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.getVertexSource();
      const { WebGLProbe: { GLPrecision: i = "highp" } } = ai();
      i !== "highp" && (e = e.replace(hx, dp.replace("highp", i)));
      const r = t.createShader(t.VERTEX_SHADER), a = t.createShader(t.FRAGMENT_SHADER), o = t.createProgram();
      if (!r || !a || !o) throw new ri("Vertex, fragment shader or program creation error");
      if (t.shaderSource(r, s), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw new ri("Vertex shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(r)));
      if (t.shaderSource(a, e), t.compileShader(a), !t.getShaderParameter(a, t.COMPILE_STATUS)) throw new ri("Fragment shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(a)));
      if (t.attachShader(o, r), t.attachShader(o, a), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) throw new ri('Shader link error for "'.concat(this.type, '" ').concat(t.getProgramInfoLog(o)));
      const h = this.getUniformLocations(t, o) || {};
      return h.uStepW = t.getUniformLocation(o, "uStepW"), h.uStepH = t.getUniformLocation(o, "uStepH"), {
        program: o,
        attributeLocations: this.getAttributeLocations(t, o),
        uniformLocations: h
      };
    }
    getAttributeLocations(t, e) {
      return {
        aPosition: t.getAttribLocation(e, "aPosition")
      };
    }
    getUniformLocations(t, e) {
      const s = this.constructor.uniformLocations, i = {};
      for (let r = 0; r < s.length; r++) i[s[r]] = t.getUniformLocation(e, s[r]);
      return i;
    }
    sendAttributeData(t, e, s) {
      const i = e.aPosition, r = t.createBuffer();
      t.bindBuffer(t.ARRAY_BUFFER, r), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, false, 0, 0), t.bufferData(t.ARRAY_BUFFER, s, t.STATIC_DRAW);
    }
    _setupFrameBuffer(t) {
      const e = t.context;
      if (t.passes > 1) {
        const s = t.destinationWidth, i = t.destinationHeight;
        t.sourceWidth === s && t.sourceHeight === i || (e.deleteTexture(t.targetTexture), t.targetTexture = t.filterBackend.createTexture(e, s, i)), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.targetTexture, 0);
      } else e.bindFramebuffer(e.FRAMEBUFFER, null), e.finish();
    }
    _swapTextures(t) {
      t.passes--, t.pass++;
      const e = t.targetTexture;
      t.targetTexture = t.sourceTexture, t.sourceTexture = e;
    }
    isNeutralState(t) {
      return false;
    }
    applyTo(t) {
      kd(t) ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
    }
    applyTo2d(t) {
    }
    getCacheKey() {
      return this.type;
    }
    retrieveShader(t) {
      const e = this.getCacheKey();
      return t.programCache[e] || (t.programCache[e] = this.createProgram(t.context)), t.programCache[e];
    }
    applyToWebGL(t) {
      const e = t.context, s = this.retrieveShader(t);
      t.pass === 0 && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture), e.useProgram(s.program), this.sendAttributeData(e, s.attributeLocations, t.aPosition), e.uniform1f(s.uniformLocations.uStepW, 1 / t.sourceWidth), e.uniform1f(s.uniformLocations.uStepH, 1 / t.sourceHeight), this.sendUniformData(e, s.uniformLocations), e.viewport(0, 0, t.destinationWidth, t.destinationHeight), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
    }
    bindAdditionalTexture(t, e, s) {
      t.activeTexture(s), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0);
    }
    unbindAdditionalTexture(t, e) {
      t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0);
    }
    sendUniformData(t, e) {
    }
    createHelpLayer(t) {
      if (!t.helpLayer) {
        const { sourceWidth: e, sourceHeight: s } = t, i = Qe({
          width: e,
          height: s
        });
        t.helpLayer = i;
      }
    }
    toObject() {
      const t = Object.keys(this.constructor.defaults || {});
      return A({
        type: this.type
      }, t.reduce((e, s) => (e[s] = this[s], e), {}));
    }
    toJSON() {
      return this.toObject();
    }
    static async fromObject(t, e) {
      return new this(yt(t, ox));
    }
  }
  k(Vt, "type", "BaseFilter"), k(Vt, "uniformLocations", []);
  const lx = {
    multiply: `gl_FragColor.rgb *= uColor.rgb;
`,
    screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,
    add: `gl_FragColor.rgb += uColor.rgb;
`,
    difference: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,
    subtract: `gl_FragColor.rgb -= uColor.rgb;
`,
    lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,
    darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,
    exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,
    overlay: `
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,
    tint: `
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `
  };
  class Cl extends Vt {
    getCacheKey() {
      return "".concat(this.type, "_").concat(this.mode);
    }
    getFragmentSource() {
      return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(lx[this.mode], `
        }
      }
      `);
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = new ht(this.color).getSource(), i = this.alpha, r = s[0] * i, a = s[1] * i, o = s[2] * i, h = 1 - i;
      for (let c = 0; c < e.length; c += 4) {
        const u = e[c], d = e[c + 1], g = e[c + 2];
        let f, p, v;
        switch (this.mode) {
          case "multiply":
            f = u * r / 255, p = d * a / 255, v = g * o / 255;
            break;
          case "screen":
            f = 255 - (255 - u) * (255 - r) / 255, p = 255 - (255 - d) * (255 - a) / 255, v = 255 - (255 - g) * (255 - o) / 255;
            break;
          case "add":
            f = u + r, p = d + a, v = g + o;
            break;
          case "difference":
            f = Math.abs(u - r), p = Math.abs(d - a), v = Math.abs(g - o);
            break;
          case "subtract":
            f = u - r, p = d - a, v = g - o;
            break;
          case "darken":
            f = Math.min(u, r), p = Math.min(d, a), v = Math.min(g, o);
            break;
          case "lighten":
            f = Math.max(u, r), p = Math.max(d, a), v = Math.max(g, o);
            break;
          case "overlay":
            f = r < 128 ? 2 * u * r / 255 : 255 - 2 * (255 - u) * (255 - r) / 255, p = a < 128 ? 2 * d * a / 255 : 255 - 2 * (255 - d) * (255 - a) / 255, v = o < 128 ? 2 * g * o / 255 : 255 - 2 * (255 - g) * (255 - o) / 255;
            break;
          case "exclusion":
            f = r + u - 2 * r * u / 255, p = a + d - 2 * a * d / 255, v = o + g - 2 * o * g / 255;
            break;
          case "tint":
            f = r + u * h, p = a + d * h, v = o + g * h;
        }
        e[c] = f, e[c + 1] = p, e[c + 2] = v;
      }
    }
    sendUniformData(t, e) {
      const s = new ht(this.color).getSource();
      s[0] = this.alpha * s[0] / 255, s[1] = this.alpha * s[1] / 255, s[2] = this.alpha * s[2] / 255, s[3] = this.alpha, t.uniform4fv(e.uColor, s);
    }
  }
  k(Cl, "defaults", {
    color: "#F95C63",
    mode: "multiply",
    alpha: 1
  }), k(Cl, "type", "BlendColor"), k(Cl, "uniformLocations", [
    "uColor"
  ]), B.setClass(Cl);
  const cx = {
    multiply: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,
    mask: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `
  }, ux = [
    "type",
    "image"
  ];
  class Al extends Vt {
    getCacheKey() {
      return "".concat(this.type, "_").concat(this.mode);
    }
    getFragmentSource() {
      return cx[this.mode];
    }
    getVertexSource() {
      return `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `;
    }
    applyToWebGL(t) {
      const e = t.context, s = this.createTexture(t.filterBackend, this.image);
      this.bindAdditionalTexture(e, s, e.TEXTURE1), super.applyToWebGL(t), this.unbindAdditionalTexture(e, e.TEXTURE1);
    }
    createTexture(t, e) {
      return t.getCachedTexture(e.cacheKey, e.getElement());
    }
    calculateMatrix() {
      const t = this.image, { width: e, height: s } = t.getElement();
      return [
        1 / t.scaleX,
        0,
        0,
        0,
        1 / t.scaleY,
        0,
        -t.left / e,
        -t.top / s,
        1
      ];
    }
    applyTo2d(t) {
      let { imageData: { data: e, width: s, height: i }, filterBackend: { resources: r } } = t;
      const a = this.image;
      r.blendImage || (r.blendImage = ms());
      const o = r.blendImage, h = o.getContext("2d");
      o.width !== s || o.height !== i ? (o.width = s, o.height = i) : h.clearRect(0, 0, s, i), h.setTransform(a.scaleX, 0, 0, a.scaleY, a.left, a.top), h.drawImage(a.getElement(), 0, 0, s, i);
      const c = h.getImageData(0, 0, s, i).data;
      for (let u = 0; u < e.length; u += 4) {
        const d = e[u], g = e[u + 1], f = e[u + 2], p = e[u + 3], v = c[u], b = c[u + 1], _ = c[u + 2], S = c[u + 3];
        switch (this.mode) {
          case "multiply":
            e[u] = d * v / 255, e[u + 1] = g * b / 255, e[u + 2] = f * _ / 255, e[u + 3] = p * S / 255;
            break;
          case "mask":
            e[u + 3] = S;
        }
      }
    }
    sendUniformData(t, e) {
      const s = this.calculateMatrix();
      t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, false, s);
    }
    toObject() {
      return A(A({}, super.toObject()), {}, {
        image: this.image && this.image.toObject()
      });
    }
    static async fromObject(t, e) {
      let { type: s, image: i } = t, r = yt(t, ux);
      return ge.fromObject(i, e).then((a) => new this(A(A({}, r), {}, {
        image: a
      })));
    }
  }
  k(Al, "type", "BlendImage"), k(Al, "defaults", {
    mode: "multiply",
    alpha: 1
  }), k(Al, "uniformLocations", [
    "uTransformMatrix",
    "uImage"
  ]), B.setClass(Al);
  class kl extends Vt {
    getFragmentSource() {
      return `
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        float weight = 1.0 - abs(percent);
        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
        total += weight;
      }
      gl_FragColor = color / total;
    }
  `;
    }
    applyTo(t) {
      kd(t) ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = true, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = false, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
    }
    applyTo2d(t) {
      t.imageData = this.simpleBlur(t);
    }
    simpleBlur(t) {
      let { ctx: e, imageData: s, filterBackend: { resources: i } } = t;
      const { width: r, height: a } = s;
      i.blurLayer1 || (i.blurLayer1 = ms(), i.blurLayer2 = ms());
      const o = i.blurLayer1, h = i.blurLayer2;
      o.width === r && o.height === a || (h.width = o.width = r, h.height = o.height = a);
      const c = o.getContext("2d"), u = h.getContext("2d"), d = 15, g = 0.06 * this.blur * 0.5;
      let f, p, v, b;
      for (c.putImageData(s, 0, 0), u.clearRect(0, 0, r, a), b = -15; b <= d; b++) f = (Math.random() - 0.5) / 4, p = b / d, v = g * p * r + f, u.globalAlpha = 1 - Math.abs(p), u.drawImage(o, v, f), c.drawImage(h, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, h.width, h.height);
      for (b = -15; b <= d; b++) f = (Math.random() - 0.5) / 4, p = b / d, v = g * p * a + f, u.globalAlpha = 1 - Math.abs(p), u.drawImage(o, f, v), c.drawImage(h, 0, 0), u.globalAlpha = 1, u.clearRect(0, 0, h.width, h.height);
      e.drawImage(o, 0, 0);
      const _ = e.getImageData(0, 0, o.width, o.height);
      return c.globalAlpha = 1, c.clearRect(0, 0, o.width, o.height), _;
    }
    sendUniformData(t, e) {
      const s = this.chooseRightDelta();
      t.uniform2fv(e.uDelta, s);
    }
    isNeutralState() {
      return this.blur === 0;
    }
    chooseRightDelta() {
      let t = 1;
      const e = [
        0,
        0
      ];
      this.horizontal ? this.aspectRatio > 1 && (t = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t = this.aspectRatio);
      const s = t * this.blur * 0.12;
      return this.horizontal ? e[0] = s : e[1] = s, e;
    }
  }
  k(kl, "type", "Blur"), k(kl, "defaults", {
    blur: 0
  }), k(kl, "uniformLocations", [
    "uDelta"
  ]), B.setClass(kl);
  class Tl extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = Math.round(255 * this.brightness);
      for (let i = 0; i < e.length; i += 4) e[i] += s, e[i + 1] += s, e[i + 2] += s;
    }
    isNeutralState() {
      return this.brightness === 0;
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uBrightness, this.brightness);
    }
  }
  k(Tl, "type", "Brightness"), k(Tl, "defaults", {
    brightness: 0
  }), k(Tl, "uniformLocations", [
    "uBrightness"
  ]), B.setClass(Tl);
  const y0 = {
    matrix: [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    colorsOnly: true
  };
  class Ta extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`;
    }
    applyTo2d(t) {
      const e = t.imageData.data, s = this.matrix, i = this.colorsOnly;
      for (let r = 0; r < e.length; r += 4) {
        const a = e[r], o = e[r + 1], h = e[r + 2];
        if (e[r] = a * s[0] + o * s[1] + h * s[2] + 255 * s[4], e[r + 1] = a * s[5] + o * s[6] + h * s[7] + 255 * s[9], e[r + 2] = a * s[10] + o * s[11] + h * s[12] + 255 * s[14], !i) {
          const c = e[r + 3];
          e[r] += c * s[3], e[r + 1] += c * s[8], e[r + 2] += c * s[13], e[r + 3] = a * s[15] + o * s[16] + h * s[17] + c * s[18] + 255 * s[19];
        }
      }
    }
    sendUniformData(t, e) {
      const s = this.matrix, i = [
        s[0],
        s[1],
        s[2],
        s[3],
        s[5],
        s[6],
        s[7],
        s[8],
        s[10],
        s[11],
        s[12],
        s[13],
        s[15],
        s[16],
        s[17],
        s[18]
      ], r = [
        s[4],
        s[9],
        s[14],
        s[19]
      ];
      t.uniformMatrix4fv(e.uColorMatrix, false, i), t.uniform4fv(e.uConstants, r);
    }
    toObject() {
      return A(A({}, super.toObject()), {}, {
        matrix: [
          ...this.matrix
        ]
      });
    }
  }
  function Fn(n, t) {
    var e;
    const s = (k(e = class extends Ta {
      toObject() {
        return {
          type: this.type,
          colorsOnly: this.colorsOnly
        };
      }
    }, "type", n), k(e, "defaults", {
      colorsOnly: false,
      matrix: t
    }), e);
    return B.setClass(s, n), s;
  }
  k(Ta, "type", "ColorMatrix"), k(Ta, "defaults", y0), k(Ta, "uniformLocations", [
    "uColorMatrix",
    "uConstants"
  ]), B.setClass(Ta);
  Fn("Brownie", [
    0.5997,
    0.34553,
    -0.27082,
    0,
    0.186,
    -0.0377,
    0.86095,
    0.15059,
    0,
    -0.1449,
    0.24113,
    -0.07441,
    0.44972,
    0,
    -0.02965,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("Vintage", [
    0.62793,
    0.32021,
    -0.03965,
    0,
    0.03784,
    0.02578,
    0.64411,
    0.03259,
    0,
    0.02926,
    0.0466,
    -0.08512,
    0.52416,
    0,
    0.02023,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("Kodachrome", [
    1.12855,
    -0.39673,
    -0.03992,
    0,
    0.24991,
    -0.16404,
    1.08352,
    -0.05498,
    0,
    0.09698,
    -0.16786,
    -0.56034,
    1.60148,
    0,
    0.13972,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("Technicolor", [
    1.91252,
    -0.85453,
    -0.09155,
    0,
    0.04624,
    -0.30878,
    1.76589,
    -0.10601,
    0,
    -0.27589,
    -0.2311,
    -0.75018,
    1.84759,
    0,
    0.12137,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("Polaroid", [
    1.438,
    -0.062,
    -0.062,
    0,
    0,
    -0.122,
    1.378,
    -0.122,
    0,
    0,
    -0.016,
    -0.016,
    1.483,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("Sepia", [
    0.393,
    0.769,
    0.189,
    0,
    0,
    0.349,
    0.686,
    0.168,
    0,
    0,
    0.272,
    0.534,
    0.131,
    0,
    0,
    0,
    0,
    0,
    1,
    0
  ]);
  Fn("BlackWhite", [
    1.5,
    1.5,
    1.5,
    0,
    -1,
    1.5,
    1.5,
    1.5,
    0,
    -1,
    1.5,
    1.5,
    1.5,
    0,
    -1,
    0,
    0,
    0,
    1,
    0
  ]);
  class dm extends Vt {
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      super(t), this.subFilters = t.subFilters || [];
    }
    applyTo(t) {
      kd(t) && (t.passes += this.subFilters.length - 1), this.subFilters.forEach((e) => {
        e.applyTo(t);
      });
    }
    toObject() {
      return {
        type: this.type,
        subFilters: this.subFilters.map((t) => t.toObject())
      };
    }
    isNeutralState() {
      return !this.subFilters.some((t) => !t.isNeutralState());
    }
    static fromObject(t, e) {
      return Promise.all((t.subFilters || []).map((s) => B.getClass(s.type).fromObject(s, e))).then((s) => new this({
        subFilters: s
      }));
    }
  }
  k(dm, "type", "Composed"), B.setClass(dm);
  class Ml extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`;
    }
    isNeutralState() {
      return this.contrast === 0;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = Math.floor(255 * this.contrast), i = 259 * (s + 255) / (255 * (259 - s));
      for (let r = 0; r < e.length; r += 4) e[r] = i * (e[r] - 128) + 128, e[r + 1] = i * (e[r + 1] - 128) + 128, e[r + 2] = i * (e[r + 2] - 128) + 128;
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uContrast, this.contrast);
    }
  }
  k(Ml, "type", "Contrast"), k(Ml, "defaults", {
    contrast: 0
  }), k(Ml, "uniformLocations", [
    "uContrast"
  ]), B.setClass(Ml);
  const dx = {
    Convolute_3_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_3_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_5_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_5_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_7_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_7_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,
    Convolute_9_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,
    Convolute_9_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `
  };
  class El extends Vt {
    getCacheKey() {
      return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(this.opaque ? 1 : 0);
    }
    getFragmentSource() {
      return dx[this.getCacheKey()];
    }
    applyTo2d(t) {
      const e = t.imageData, s = e.data, i = this.matrix, r = Math.round(Math.sqrt(i.length)), a = Math.floor(r / 2), o = e.width, h = e.height, c = t.ctx.createImageData(o, h), u = c.data, d = this.opaque ? 1 : 0;
      let g, f, p, v, b, _, S, x, C, T, O, E, D;
      for (O = 0; O < h; O++) for (T = 0; T < o; T++) {
        for (b = 4 * (O * o + T), g = 0, f = 0, p = 0, v = 0, D = 0; D < r; D++) for (E = 0; E < r; E++) S = O + D - a, _ = T + E - a, S < 0 || S >= h || _ < 0 || _ >= o || (x = 4 * (S * o + _), C = i[D * r + E], g += s[x] * C, f += s[x + 1] * C, p += s[x + 2] * C, d || (v += s[x + 3] * C));
        u[b] = g, u[b + 1] = f, u[b + 2] = p, u[b + 3] = d ? s[b + 3] : v;
      }
      t.imageData = c;
    }
    sendUniformData(t, e) {
      t.uniform1fv(e.uMatrix, this.matrix);
    }
    toObject() {
      return A(A({}, super.toObject()), {}, {
        opaque: this.opaque,
        matrix: [
          ...this.matrix
        ]
      });
    }
  }
  k(El, "type", "Convolute"), k(El, "defaults", {
    opaque: false,
    matrix: [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0
    ]
  }), k(El, "uniformLocations", [
    "uMatrix",
    "uOpaque",
    "uHalfSize",
    "uSize"
  ]), B.setClass(El);
  const w0 = "Gamma";
  class Dl extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`;
    }
    constructor() {
      let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      super(t), this.gamma = t.gamma || this.constructor.defaults.gamma.concat();
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = this.gamma, i = 1 / s[0], r = 1 / s[1], a = 1 / s[2];
      this.rgbValues || (this.rgbValues = {
        r: new Uint8Array(256),
        g: new Uint8Array(256),
        b: new Uint8Array(256)
      });
      const o = this.rgbValues;
      for (let h = 0; h < 256; h++) o.r[h] = 255 * Math.pow(h / 255, i), o.g[h] = 255 * Math.pow(h / 255, r), o.b[h] = 255 * Math.pow(h / 255, a);
      for (let h = 0; h < e.length; h += 4) e[h] = o.r[e[h]], e[h + 1] = o.g[e[h + 1]], e[h + 2] = o.b[e[h + 2]];
    }
    sendUniformData(t, e) {
      t.uniform3fv(e.uGamma, this.gamma);
    }
    isNeutralState() {
      const { gamma: t } = this;
      return t[0] === 1 && t[1] === 1 && t[2] === 1;
    }
    toObject() {
      return {
        type: w0,
        gamma: this.gamma.concat()
      };
    }
  }
  k(Dl, "type", w0), k(Dl, "defaults", {
    gamma: [
      1,
      1,
      1
    ]
  }), k(Dl, "uniformLocations", [
    "uGamma"
  ]), B.setClass(Dl);
  const gx = {
    average: `
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,
    lightness: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,
    luminosity: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `
  };
  class Ol extends Vt {
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      for (let s, i = 0; i < e.length; i += 4) {
        const r = e[i], a = e[i + 1], o = e[i + 2];
        switch (this.mode) {
          case "average":
            s = (r + a + o) / 3;
            break;
          case "lightness":
            s = (Math.min(r, a, o) + Math.max(r, a, o)) / 2;
            break;
          case "luminosity":
            s = 0.21 * r + 0.72 * a + 0.07 * o;
        }
        e[i + 2] = e[i + 1] = e[i] = s;
      }
    }
    getCacheKey() {
      return "".concat(this.type, "_").concat(this.mode);
    }
    getFragmentSource() {
      return gx[this.mode];
    }
    sendUniformData(t, e) {
      t.uniform1i(e.uMode, 1);
    }
    isNeutralState() {
      return false;
    }
  }
  k(Ol, "type", "Grayscale"), k(Ol, "defaults", {
    mode: "average"
  }), k(Ol, "uniformLocations", [
    "uMode"
  ]), B.setClass(Ol);
  const fx = A(A({}, y0), {}, {
    rotation: 0
  });
  class Qd extends Ta {
    calculateMatrix() {
      const t = this.rotation * Math.PI, e = Ps(t), s = Ls(t), i = 1 / 3, r = Math.sqrt(i) * s, a = 1 - e;
      this.matrix = [
        e + a / 3,
        i * a - r,
        i * a + r,
        0,
        0,
        i * a + r,
        e + i * a,
        i * a - r,
        0,
        0,
        i * a - r,
        i * a + r,
        e + i * a,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ];
    }
    isNeutralState() {
      return this.rotation === 0;
    }
    applyTo(t) {
      this.calculateMatrix(), super.applyTo(t);
    }
    toObject() {
      return {
        type: this.type,
        rotation: this.rotation
      };
    }
  }
  k(Qd, "type", "HueRotation"), k(Qd, "defaults", fx), B.setClass(Qd);
  class Pl extends Vt {
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      for (let s = 0; s < e.length; s += 4) e[s] = 255 - e[s], e[s + 1] = 255 - e[s + 1], e[s + 2] = 255 - e[s + 2], this.alpha && (e[s + 3] = 255 - e[s + 3]);
    }
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`;
    }
    isNeutralState() {
      return !this.invert;
    }
    sendUniformData(t, e) {
      t.uniform1i(e.uInvert, Number(this.invert)), t.uniform1i(e.uAlpha, Number(this.alpha));
    }
  }
  k(Pl, "type", "Invert"), k(Pl, "defaults", {
    alpha: false,
    invert: true
  }), k(Pl, "uniformLocations", [
    "uInvert",
    "uAlpha"
  ]), B.setClass(Pl);
  class Ll extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = this.noise;
      for (let i = 0; i < e.length; i += 4) {
        const r = (0.5 - Math.random()) * s;
        e[i] += r, e[i + 1] += r, e[i + 2] += r;
      }
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random());
    }
    isNeutralState() {
      return this.noise === 0;
    }
  }
  k(Ll, "type", "Noise"), k(Ll, "defaults", {
    noise: 0
  }), k(Ll, "uniformLocations", [
    "uNoise",
    "uSeed"
  ]), B.setClass(Ll);
  class Rl extends Vt {
    applyTo2d(t) {
      let { imageData: { data: e, width: s, height: i } } = t;
      for (let r = 0; r < i; r += this.blocksize) for (let a = 0; a < s; a += this.blocksize) {
        const o = 4 * r * s + 4 * a, h = e[o], c = e[o + 1], u = e[o + 2], d = e[o + 3];
        for (let g = r; g < Math.min(r + this.blocksize, i); g++) for (let f = a; f < Math.min(a + this.blocksize, s); f++) {
          const p = 4 * g * s + 4 * f;
          e[p] = h, e[p + 1] = c, e[p + 2] = u, e[p + 3] = d;
        }
      }
    }
    isNeutralState() {
      return this.blocksize === 1;
    }
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`;
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uBlocksize, this.blocksize);
    }
  }
  k(Rl, "type", "Pixelate"), k(Rl, "defaults", {
    blocksize: 4
  }), k(Rl, "uniformLocations", [
    "uBlocksize"
  ]), B.setClass(Rl);
  class Il extends Vt {
    getFragmentSource() {
      return `
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = 255 * this.distance, i = new ht(this.color).getSource(), r = [
        i[0] - s,
        i[1] - s,
        i[2] - s
      ], a = [
        i[0] + s,
        i[1] + s,
        i[2] + s
      ];
      for (let o = 0; o < e.length; o += 4) {
        const h = e[o], c = e[o + 1], u = e[o + 2];
        h > r[0] && c > r[1] && u > r[2] && h < a[0] && c < a[1] && u < a[2] && (e[o + 3] = 0);
      }
    }
    sendUniformData(t, e) {
      const s = new ht(this.color).getSource(), i = this.distance, r = [
        0 + s[0] / 255 - i,
        0 + s[1] / 255 - i,
        0 + s[2] / 255 - i,
        1
      ], a = [
        s[0] / 255 + i,
        s[1] / 255 + i,
        s[2] / 255 + i,
        1
      ];
      t.uniform4fv(e.uLow, r), t.uniform4fv(e.uHigh, a);
    }
  }
  k(Il, "type", "RemoveColor"), k(Il, "defaults", {
    color: "#FFFFFF",
    distance: 0.02,
    useAlpha: false
  }), k(Il, "uniformLocations", [
    "uLow",
    "uHigh"
  ]), B.setClass(Il);
  class Fl extends Vt {
    sendUniformData(t, e) {
      t.uniform2fv(e.uDelta, this.horizontal ? [
        1 / this.width,
        0
      ] : [
        0,
        1 / this.height
      ]), t.uniform1fv(e.uTaps, this.taps);
    }
    getFilterWindow() {
      const t = this.tempScale;
      return Math.ceil(this.lanczosLobes / t);
    }
    getCacheKey() {
      const t = this.getFilterWindow();
      return "".concat(this.type, "_").concat(t);
    }
    getFragmentSource() {
      const t = this.getFilterWindow();
      return this.generateShader(t);
    }
    getTaps() {
      const t = this.lanczosCreate(this.lanczosLobes), e = this.tempScale, s = this.getFilterWindow(), i = new Array(s);
      for (let r = 1; r <= s; r++) i[r - 1] = t(r * e);
      return i;
    }
    generateShader(t) {
      const e = new Array(t);
      for (let s = 1; s <= t; s++) e[s - 1] = "".concat(s, ".0 * uDelta");
      return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[`.concat(t, `];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        `).concat(e.map((s, i) => `
              color += texture2D(uTexture, vTexCoord + `.concat(s, ") * uTaps[").concat(i, "] + texture2D(uTexture, vTexCoord - ").concat(s, ") * uTaps[").concat(i, `];
              sum += 2.0 * uTaps[`).concat(i, `];
            `)).join(`
`), `
        gl_FragColor = color / sum;
      }
    `);
    }
    applyToForWebgl(t) {
      t.passes++, this.width = t.sourceWidth, this.horizontal = true, this.dW = Math.round(this.width * this.scaleX), this.dH = t.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t.destinationWidth = this.dW, super.applyTo(t), t.sourceWidth = t.destinationWidth, this.height = t.sourceHeight, this.horizontal = false, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t.destinationHeight = this.dH, super.applyTo(t), t.sourceHeight = t.destinationHeight;
    }
    applyTo(t) {
      kd(t) ? this.applyToForWebgl(t) : this.applyTo2d(t);
    }
    isNeutralState() {
      return this.scaleX === 1 && this.scaleY === 1;
    }
    lanczosCreate(t) {
      return (e) => {
        if (e >= t || e <= -t) return 0;
        if (e < 11920929e-14 && e > -11920929e-14) return 1;
        const s = (e *= Math.PI) / t;
        return Math.sin(e) / e * Math.sin(s) / s;
      };
    }
    applyTo2d(t) {
      const e = t.imageData, s = this.scaleX, i = this.scaleY;
      this.rcpScaleX = 1 / s, this.rcpScaleY = 1 / i;
      const r = e.width, a = e.height, o = Math.round(r * s), h = Math.round(a * i);
      let c;
      c = this.resizeType === "sliceHack" ? this.sliceByTwo(t, r, a, o, h) : this.resizeType === "hermite" ? this.hermiteFastResize(t, r, a, o, h) : this.resizeType === "bilinear" ? this.bilinearFiltering(t, r, a, o, h) : this.resizeType === "lanczos" ? this.lanczosResize(t, r, a, o, h) : new ImageData(o, h), t.imageData = c;
    }
    sliceByTwo(t, e, s, i, r) {
      const a = t.imageData, o = 0.5;
      let h = false, c = false, u = e * o, d = s * o;
      const g = t.filterBackend.resources;
      let f = 0, p = 0;
      const v = e;
      let b = 0;
      g.sliceByTwo || (g.sliceByTwo = ms());
      const _ = g.sliceByTwo;
      (_.width < 1.5 * e || _.height < s) && (_.width = 1.5 * e, _.height = s);
      const S = _.getContext("2d");
      for (S.clearRect(0, 0, 1.5 * e, s), S.putImageData(a, 0, 0), i = Math.floor(i), r = Math.floor(r); !h || !c; ) e = u, s = d, i < Math.floor(u * o) ? u = Math.floor(u * o) : (u = i, h = true), r < Math.floor(d * o) ? d = Math.floor(d * o) : (d = r, c = true), S.drawImage(_, f, p, e, s, v, b, u, d), f = v, p = b, b += d;
      return S.getImageData(f, p, i, r);
    }
    lanczosResize(t, e, s, i, r) {
      const a = t.imageData.data, o = t.ctx.createImageData(i, r), h = o.data, c = this.lanczosCreate(this.lanczosLobes), u = this.rcpScaleX, d = this.rcpScaleY, g = 2 / this.rcpScaleX, f = 2 / this.rcpScaleY, p = Math.ceil(u * this.lanczosLobes / 2), v = Math.ceil(d * this.lanczosLobes / 2), b = {}, _ = {
        x: 0,
        y: 0
      }, S = {
        x: 0,
        y: 0
      };
      return function x(C) {
        let T, O, E, D, F, L, N, P, I, W, j;
        for (_.x = (C + 0.5) * u, S.x = Math.floor(_.x), T = 0; T < r; T++) {
          for (_.y = (T + 0.5) * d, S.y = Math.floor(_.y), F = 0, L = 0, N = 0, P = 0, I = 0, O = S.x - p; O <= S.x + p; O++) if (!(O < 0 || O >= e)) {
            W = Math.floor(1e3 * Math.abs(O - _.x)), b[W] || (b[W] = {});
            for (let R = S.y - v; R <= S.y + v; R++) R < 0 || R >= s || (j = Math.floor(1e3 * Math.abs(R - _.y)), b[W][j] || (b[W][j] = c(Math.sqrt(Math.pow(W * g, 2) + Math.pow(j * f, 2)) / 1e3)), E = b[W][j], E > 0 && (D = 4 * (R * e + O), F += E, L += E * a[D], N += E * a[D + 1], P += E * a[D + 2], I += E * a[D + 3]));
          }
          D = 4 * (T * i + C), h[D] = L / F, h[D + 1] = N / F, h[D + 2] = P / F, h[D + 3] = I / F;
        }
        return ++C < i ? x(C) : o;
      }(0);
    }
    bilinearFiltering(t, e, s, i, r) {
      let a, o, h, c, u, d, g, f, p, v, b, _, S, x = 0;
      const C = this.rcpScaleX, T = this.rcpScaleY, O = 4 * (e - 1), E = t.imageData.data, D = t.ctx.createImageData(i, r), F = D.data;
      for (g = 0; g < r; g++) for (f = 0; f < i; f++) for (u = Math.floor(C * f), d = Math.floor(T * g), p = C * f - u, v = T * g - d, S = 4 * (d * e + u), b = 0; b < 4; b++) a = E[S + b], o = E[S + 4 + b], h = E[S + O + b], c = E[S + O + 4 + b], _ = a * (1 - p) * (1 - v) + o * p * (1 - v) + h * v * (1 - p) + c * p * v, F[x++] = _;
      return D;
    }
    hermiteFastResize(t, e, s, i, r) {
      const a = this.rcpScaleX, o = this.rcpScaleY, h = Math.ceil(a / 2), c = Math.ceil(o / 2), u = t.imageData.data, d = t.ctx.createImageData(i, r), g = d.data;
      for (let f = 0; f < r; f++) for (let p = 0; p < i; p++) {
        const v = 4 * (p + f * i);
        let b = 0, _ = 0, S = 0, x = 0, C = 0, T = 0, O = 0;
        const E = (f + 0.5) * o;
        for (let D = Math.floor(f * o); D < (f + 1) * o; D++) {
          const F = Math.abs(E - (D + 0.5)) / c, L = (p + 0.5) * a, N = F * F;
          for (let P = Math.floor(p * a); P < (p + 1) * a; P++) {
            let I = Math.abs(L - (P + 0.5)) / h;
            const W = Math.sqrt(N + I * I);
            W > 1 && W < -1 || (b = 2 * W * W * W - 3 * W * W + 1, b > 0 && (I = 4 * (P + D * e), O += b * u[I + 3], S += b, u[I + 3] < 255 && (b = b * u[I + 3] / 250), x += b * u[I], C += b * u[I + 1], T += b * u[I + 2], _ += b));
          }
        }
        g[v] = x / _, g[v + 1] = C / _, g[v + 2] = T / _, g[v + 3] = O / S;
      }
      return d;
    }
  }
  k(Fl, "type", "Resize"), k(Fl, "defaults", {
    resizeType: "hermite",
    scaleX: 1,
    scaleY: 1,
    lanczosLobes: 3
  }), k(Fl, "uniformLocations", [
    "uDelta",
    "uTaps"
  ]), B.setClass(Fl);
  class jl extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = -this.saturation;
      for (let i = 0; i < e.length; i += 4) {
        const r = e[i], a = e[i + 1], o = e[i + 2], h = Math.max(r, a, o);
        e[i] += h !== r ? (h - r) * s : 0, e[i + 1] += h !== a ? (h - a) * s : 0, e[i + 2] += h !== o ? (h - o) * s : 0;
      }
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uSaturation, -this.saturation);
    }
    isNeutralState() {
      return this.saturation === 0;
    }
  }
  k(jl, "type", "Saturation"), k(jl, "defaults", {
    saturation: 0
  }), k(jl, "uniformLocations", [
    "uSaturation"
  ]), B.setClass(jl);
  class Nl extends Vt {
    getFragmentSource() {
      return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`;
    }
    applyTo2d(t) {
      let { imageData: { data: e } } = t;
      const s = -this.vibrance;
      for (let i = 0; i < e.length; i += 4) {
        const r = e[i], a = e[i + 1], o = e[i + 2], h = Math.max(r, a, o), c = (r + a + o) / 3, u = 2 * Math.abs(h - c) / 255 * s;
        e[i] += h !== r ? (h - r) * u : 0, e[i + 1] += h !== a ? (h - a) * u : 0, e[i + 2] += h !== o ? (h - o) * u : 0;
      }
    }
    sendUniformData(t, e) {
      t.uniform1f(e.uVibrance, -this.vibrance);
    }
    isNeutralState() {
      return this.vibrance === 0;
    }
  }
  k(Nl, "type", "Vibrance"), k(Nl, "defaults", {
    vibrance: 0
  }), k(Nl, "uniformLocations", [
    "uVibrance"
  ]), B.setClass(Nl);
  let gm = null;
  function px() {
    const n = document.createElement("div");
    n.style.width = "1in", document.body.append(n);
    const t = n.offsetWidth;
    return n.remove(), t;
  }
  function mx() {
    const n = gm ?? px();
    return gm = n, n / 72;
  }
  function vx(n, t = 500) {
    if (typeof n != "function") throw new TypeError("The first argument is not a function.");
    let e = null;
    return function(...s) {
      e && clearTimeout(e), e = setTimeout(() => {
        e = null, n.apply(this, s);
      }, t);
    };
  }
  function bx(n) {
    return new Promise((t, e) => {
      const s = window.URL.createObjectURL(n), i = new Image();
      i.src = s, i.addEventListener("load", async () => {
        window.URL.revokeObjectURL(s), t(await yx(i));
      }), i.addEventListener("error", (r) => {
        window.URL.revokeObjectURL(s), e(r);
      });
    });
  }
  function yx(n) {
    return new Promise((t) => {
      const e = document.createElement("canvas"), s = e.getContext("2d"), { naturalWidth: i, naturalHeight: r } = n;
      e.width = i, e.height = r, s == null ? void 0 : s.drawImage(n, 0, 0, i, r), t(e.toDataURL("image/jpeg", 0.8));
    });
  }
  var Ch = {};
  Ch.d = (n, t) => {
    for (var e in t) Ch.o(t, e) && !Ch.o(n, e) && Object.defineProperty(n, e, {
      enumerable: true,
      get: t[e]
    });
  };
  Ch.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
  var $ = globalThis.pdfjsLib = {};
  Ch.d($, {
    AbortException: () => Mr,
    AnnotationEditorLayer: () => RC,
    AnnotationEditorParamsType: () => et,
    AnnotationEditorType: () => K,
    AnnotationEditorUIManager: () => al,
    AnnotationLayer: () => xC,
    AnnotationMode: () => gr,
    ColorPicker: () => ty,
    DOMSVGFactory: () => xp,
    DrawLayer: () => IC,
    FeatureTest: () => Ee,
    GlobalWorkerOptions: () => Er,
    ImageKind: () => Ql,
    InvalidPDFException: () => kg,
    MissingPDFException: () => nl,
    OPS: () => ks,
    OutputScale: () => yp,
    PDFDataRangeTransport: () => _b,
    PDFDateString: () => vp,
    PDFWorker: () => Ec,
    PasswordResponses: () => Sx,
    PermissionFlag: () => xx,
    PixelsPerInch: () => no,
    RenderingCancelledException: () => pp,
    TextLayer: () => nf,
    TouchManager: () => H0,
    UnexpectedResponseException: () => Au,
    Util: () => V,
    VerbosityLevel: () => Td,
    XfaLayer: () => Cb,
    build: () => eC,
    createValidAbsoluteUrl: () => Tx,
    fetchData: () => Od,
    getDocument: () => GS,
    getFilenameFromUrl: () => Fx,
    getPdfFilenameFromUrl: () => jx,
    getXfaPageViewport: () => Nx,
    isDataScheme: () => Pd,
    isPdfFile: () => mp,
    noContextMenu: () => Rs,
    normalizeUnicode: () => Lx,
    setLayerDimensions: () => Pn,
    shadow: () => Z,
    stopEvent: () => qe,
    version: () => tC
  });
  const pe = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), _0 = [
    1,
    0,
    0,
    1,
    0,
    0
  ], Ag = [
    1e-3,
    0,
    0,
    1e-3,
    0,
    0
  ], wx = 1e7, Jd = 1.35, Ue = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256
  }, gr = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
  }, _x = "pdfjs_internal_editor_", K = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15
  }, et = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_DEFAULT_COLOR: 32,
    HIGHLIGHT_THICKNESS: 33,
    HIGHLIGHT_FREE: 34,
    HIGHLIGHT_SHOW_ALL: 35,
    DRAW_STEP: 41
  }, xx = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
  }, ie = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  }, Ql = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  }, Wt = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    WIDGET: 20
  }, fo = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  }, Td = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  }, ks = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93
  }, Sx = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  let Md = Td.WARNINGS;
  function Cx(n) {
    Number.isInteger(n) && (Md = n);
  }
  function Ax() {
    return Md;
  }
  function Ed(n) {
    Md >= Td.INFOS && `${n}`;
  }
  function Q(n) {
    Md >= Td.WARNINGS && `${n}`;
  }
  function ut(n) {
    throw new Error(n);
  }
  function Ft(n, t) {
    n || ut(t);
  }
  function kx(n) {
    switch (n == null ? void 0 : n.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  }
  function Tx(n, t = null, e = null) {
    if (!n) return null;
    try {
      if (e && typeof n == "string") {
        if (e.addDefaultProtocol && n.startsWith("www.")) {
          const i = n.match(/\./g);
          (i == null ? void 0 : i.length) >= 2 && (n = `http://${n}`);
        }
        if (e.tryConvertEncoding) try {
          n = Px(n);
        } catch {
        }
      }
      const s = t ? new URL(n, t) : new URL(n);
      if (kx(s)) return s;
    } catch {
    }
    return null;
  }
  function Z(n, t, e, s = false) {
    return Object.defineProperty(n, t, {
      value: e,
      enumerable: !s,
      configurable: true,
      writable: false
    }), e;
  }
  const Lr = function() {
    function n(t, e) {
      this.message = t, this.name = e;
    }
    return n.prototype = new Error(), n.constructor = n, n;
  }();
  class fm extends Lr {
    constructor(t, e) {
      super(t, "PasswordException"), this.code = e;
    }
  }
  class Zd extends Lr {
    constructor(t, e) {
      super(t, "UnknownErrorException"), this.details = e;
    }
  }
  class kg extends Lr {
    constructor(t) {
      super(t, "InvalidPDFException");
    }
  }
  class nl extends Lr {
    constructor(t) {
      super(t, "MissingPDFException");
    }
  }
  class Au extends Lr {
    constructor(t, e) {
      super(t, "UnexpectedResponseException"), this.status = e;
    }
  }
  class Mx extends Lr {
    constructor(t) {
      super(t, "FormatError");
    }
  }
  class Mr extends Lr {
    constructor(t) {
      super(t, "AbortException");
    }
  }
  function x0(n) {
    (typeof n != "object" || (n == null ? void 0 : n.length) === void 0) && ut("Invalid argument for bytesToString");
    const t = n.length, e = 8192;
    if (t < e) return String.fromCharCode.apply(null, n);
    const s = [];
    for (let i = 0; i < t; i += e) {
      const r = Math.min(i + e, t), a = n.subarray(i, r);
      s.push(String.fromCharCode.apply(null, a));
    }
    return s.join("");
  }
  function Dd(n) {
    typeof n != "string" && ut("Invalid argument for stringToBytes");
    const t = n.length, e = new Uint8Array(t);
    for (let s = 0; s < t; ++s) e[s] = n.charCodeAt(s) & 255;
    return e;
  }
  function Ex(n) {
    return String.fromCharCode(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255);
  }
  function gp(n) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const [e, s] of n) t[e] = s;
    return t;
  }
  function Dx() {
    const n = new Uint8Array(4);
    return n[0] = 1, new Uint32Array(n.buffer, 0, 1)[0] === 1;
  }
  function Ox() {
    try {
      return new Function(""), true;
    } catch {
      return false;
    }
  }
  class Ee {
    static get isLittleEndian() {
      return Z(this, "isLittleEndian", Dx());
    }
    static get isEvalSupported() {
      return Z(this, "isEvalSupported", Ox());
    }
    static get isOffscreenCanvasSupported() {
      return Z(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
    }
    static get isImageDecoderSupported() {
      return Z(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
    }
    static get platform() {
      return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? Z(this, "platform", {
        isMac: navigator.platform.includes("Mac"),
        isWindows: navigator.platform.includes("Win"),
        isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
      }) : Z(this, "platform", {
        isMac: false,
        isWindows: false,
        isFirefox: false
      });
    }
    static get isCSSRoundSupported() {
      var t, e;
      return Z(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
    }
  }
  const tg = Array.from(Array(256).keys(), (n) => n.toString(16).padStart(2, "0"));
  var ln, Wl, Tg;
  class V {
    static makeHexColor(t, e, s) {
      return `#${tg[t]}${tg[e]}${tg[s]}`;
    }
    static scaleMinMax(t, e) {
      let s;
      t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
    }
    static transform(t, e) {
      return [
        t[0] * e[0] + t[2] * e[1],
        t[1] * e[0] + t[3] * e[1],
        t[0] * e[2] + t[2] * e[3],
        t[1] * e[2] + t[3] * e[3],
        t[0] * e[4] + t[2] * e[5] + t[4],
        t[1] * e[4] + t[3] * e[5] + t[5]
      ];
    }
    static applyTransform(t, e) {
      const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
      return [
        s,
        i
      ];
    }
    static applyInverseTransform(t, e) {
      const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, r = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
      return [
        i,
        r
      ];
    }
    static getAxialAlignedBoundingBox(t, e) {
      const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), r = this.applyTransform([
        t[0],
        t[3]
      ], e), a = this.applyTransform([
        t[2],
        t[1]
      ], e);
      return [
        Math.min(s[0], i[0], r[0], a[0]),
        Math.min(s[1], i[1], r[1], a[1]),
        Math.max(s[0], i[0], r[0], a[0]),
        Math.max(s[1], i[1], r[1], a[1])
      ];
    }
    static inverseTransform(t) {
      const e = t[0] * t[3] - t[1] * t[2];
      return [
        t[3] / e,
        -t[1] / e,
        -t[2] / e,
        t[0] / e,
        (t[2] * t[5] - t[4] * t[3]) / e,
        (t[4] * t[1] - t[5] * t[0]) / e
      ];
    }
    static singularValueDecompose2dScale(t) {
      const e = [
        t[0],
        t[2],
        t[1],
        t[3]
      ], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], r = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, h = Math.sqrt((s + a) ** 2 - 4 * (s * a - r * i)) / 2, c = o + h || 1, u = o - h || 1;
      return [
        Math.sqrt(c),
        Math.sqrt(u)
      ];
    }
    static normalizeRect(t) {
      const e = t.slice(0);
      return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
    }
    static intersect(t, e) {
      const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
      if (s > i) return null;
      const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
      return r > a ? null : [
        s,
        r,
        i,
        a
      ];
    }
    static bezierBoundingBox(t, e, s, i, r, a, o, h, c) {
      return c ? (c[0] = Math.min(c[0], t, o), c[1] = Math.min(c[1], e, h), c[2] = Math.max(c[2], t, o), c[3] = Math.max(c[3], e, h)) : c = [
        Math.min(t, o),
        Math.min(e, h),
        Math.max(t, o),
        Math.max(e, h)
      ], w(this, ln, Tg).call(this, t, s, r, o, e, i, a, h, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), c), w(this, ln, Tg).call(this, t, s, r, o, e, i, a, h, 3 * (-e + 3 * (i - a) + h), 6 * (e - 2 * i + a), 3 * (i - e), c), c;
    }
  }
  ln = /* @__PURE__ */ new WeakSet(), Wl = function(n, t, e, s, i, r, a, o, h, c) {
    if (h <= 0 || h >= 1) return;
    const u = 1 - h, d = h * h, g = d * h, f = u * (u * (u * n + 3 * h * t) + 3 * d * e) + g * s, p = u * (u * (u * i + 3 * h * r) + 3 * d * a) + g * o;
    c[0] = Math.min(c[0], f), c[1] = Math.min(c[1], p), c[2] = Math.max(c[2], f), c[3] = Math.max(c[3], p);
  }, Tg = function(n, t, e, s, i, r, a, o, h, c, u, d) {
    if (Math.abs(h) < 1e-12) {
      Math.abs(c) >= 1e-12 && w(this, ln, Wl).call(this, n, t, e, s, i, r, a, o, -u / c, d);
      return;
    }
    const g = c ** 2 - 4 * u * h;
    if (g < 0) return;
    const f = Math.sqrt(g), p = 2 * h;
    w(this, ln, Wl).call(this, n, t, e, s, i, r, a, o, (-c + f) / p, d), w(this, ln, Wl).call(this, n, t, e, s, i, r, a, o, (-c - f) / p, d);
  }, y(V, ln);
  function Px(n) {
    return decodeURIComponent(escape(n));
  }
  let eg = null, pm = null;
  function Lx(n) {
    return eg || (eg = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, pm = /* @__PURE__ */ new Map([
      [
        "\uFB05",
        "\u017Ft"
      ]
    ])), n.replaceAll(eg, (t, e, s) => e ? e.normalize("NFKC") : pm.get(s));
  }
  function Rx() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const n = new Uint8Array(32);
    return crypto.getRandomValues(n), x0(n);
  }
  const fp = "pdfjs_internal_id_";
  function Ix(n) {
    return Uint8Array.prototype.toBase64 ? n.toBase64() : btoa(x0(n));
  }
  typeof Promise.try != "function" && (Promise.try = function(n, ...t) {
    return new Promise((e) => {
      e(n(...t));
    });
  });
  const li = "http://www.w3.org/2000/svg", Hn = class {
  };
  Y(Hn, "CSS", 96), Y(Hn, "PDF", 72), Y(Hn, "PDF_TO_CSS_UNITS", Hn.CSS / Hn.PDF);
  let no = Hn;
  async function Od(n, t = "text") {
    if (So(n, document.baseURI)) {
      const e = await fetch(n);
      if (!e.ok) throw new Error(e.statusText);
      switch (t) {
        case "arraybuffer":
          return e.arrayBuffer();
        case "blob":
          return e.blob();
        case "json":
          return e.json();
      }
      return e.text();
    }
    return new Promise((e, s) => {
      const i = new XMLHttpRequest();
      i.open("GET", n, true), i.responseType = t, i.onreadystatechange = () => {
        if (i.readyState === XMLHttpRequest.DONE) {
          if (i.status === 200 || i.status === 0) {
            switch (t) {
              case "arraybuffer":
              case "blob":
              case "json":
                e(i.response);
                return;
            }
            e(i.responseText);
            return;
          }
          s(new Error(i.statusText));
        }
      }, i.send(null);
    });
  }
  class dl {
    constructor({ viewBox: t, userUnit: e, scale: s, rotation: i, offsetX: r = 0, offsetY: a = 0, dontFlip: o = false }) {
      this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
      const h = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
      let u, d, g, f;
      switch (i %= 360, i < 0 && (i += 360), i) {
        case 180:
          u = -1, d = 0, g = 0, f = 1;
          break;
        case 90:
          u = 0, d = 1, g = 1, f = 0;
          break;
        case 270:
          u = 0, d = -1, g = -1, f = 0;
          break;
        case 0:
          u = 1, d = 0, g = 0, f = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      o && (g = -g, f = -f);
      let p, v, b, _;
      u === 0 ? (p = Math.abs(c - t[1]) * s + r, v = Math.abs(h - t[0]) * s + a, b = (t[3] - t[1]) * s, _ = (t[2] - t[0]) * s) : (p = Math.abs(h - t[0]) * s + r, v = Math.abs(c - t[1]) * s + a, b = (t[2] - t[0]) * s, _ = (t[3] - t[1]) * s), this.transform = [
        u * s,
        d * s,
        g * s,
        f * s,
        p - u * s * h - g * s * c,
        v - d * s * h - f * s * c
      ], this.width = b, this.height = _;
    }
    get rawDims() {
      const { userUnit: t, viewBox: e } = this, s = e.map((i) => i * t);
      return Z(this, "rawDims", {
        pageWidth: s[2] - s[0],
        pageHeight: s[3] - s[1],
        pageX: s[0],
        pageY: s[1]
      });
    }
    clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: s = this.offsetX, offsetY: i = this.offsetY, dontFlip: r = false } = {}) {
      return new dl({
        viewBox: this.viewBox.slice(),
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: s,
        offsetY: i,
        dontFlip: r
      });
    }
    convertToViewportPoint(t, e) {
      return V.applyTransform([
        t,
        e
      ], this.transform);
    }
    convertToViewportRectangle(t) {
      const e = V.applyTransform([
        t[0],
        t[1]
      ], this.transform), s = V.applyTransform([
        t[2],
        t[3]
      ], this.transform);
      return [
        e[0],
        e[1],
        s[0],
        s[1]
      ];
    }
    convertToPdfPoint(t, e) {
      return V.applyInverseTransform([
        t,
        e
      ], this.transform);
    }
  }
  class pp extends Lr {
    constructor(t, e = 0) {
      super(t, "RenderingCancelledException"), this.extraDelay = e;
    }
  }
  function Pd(n) {
    const t = n.length;
    let e = 0;
    for (; e < t && n[e].trim() === ""; ) e++;
    return n.substring(e, e + 5).toLowerCase() === "data:";
  }
  function mp(n) {
    return typeof n == "string" && /\.pdf$/i.test(n);
  }
  function Fx(n) {
    return [n] = n.split(/[#?]/, 1), n.substring(n.lastIndexOf("/") + 1);
  }
  function jx(n, t = "document.pdf") {
    if (typeof n != "string") return t;
    if (Pd(n)) return Q('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
    const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(n);
    let r = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
    if (r && (r = r[0], r.includes("%"))) try {
      r = s.exec(decodeURIComponent(r))[0];
    } catch {
    }
    return r || t;
  }
  class mm {
    constructor() {
      Y(this, "started", /* @__PURE__ */ Object.create(null)), Y(this, "times", []);
    }
    time(t) {
      t in this.started && Q(`Timer is already running for ${t}`), this.started[t] = Date.now();
    }
    timeEnd(t) {
      t in this.started || Q(`Timer has not been started for ${t}`), this.times.push({
        name: t,
        start: this.started[t],
        end: Date.now()
      }), delete this.started[t];
    }
    toString() {
      const t = [];
      let e = 0;
      for (const { name: s } of this.times) e = Math.max(s.length, e);
      for (const { name: s, start: i, end: r } of this.times) t.push(`${s.padEnd(e)} ${r - i}ms
`);
      return t.join("");
    }
  }
  function So(n, t) {
    try {
      const { protocol: e } = t ? new URL(n, t) : new URL(n);
      return e === "http:" || e === "https:";
    } catch {
      return false;
    }
  }
  function Rs(n) {
    n.preventDefault();
  }
  function qe(n) {
    n.preventDefault(), n.stopPropagation();
  }
  var Ah;
  class vp {
    static toDateObject(t) {
      if (!t || typeof t != "string") return null;
      l(this, Ah) || m(this, Ah, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
      const e = l(this, Ah).exec(t);
      if (!e) return null;
      const s = parseInt(e[1], 10);
      let i = parseInt(e[2], 10);
      i = i >= 1 && i <= 12 ? i - 1 : 0;
      let r = parseInt(e[3], 10);
      r = r >= 1 && r <= 31 ? r : 1;
      let a = parseInt(e[4], 10);
      a = a >= 0 && a <= 23 ? a : 0;
      let o = parseInt(e[5], 10);
      o = o >= 0 && o <= 59 ? o : 0;
      let h = parseInt(e[6], 10);
      h = h >= 0 && h <= 59 ? h : 0;
      const c = e[7] || "Z";
      let u = parseInt(e[8], 10);
      u = u >= 0 && u <= 23 ? u : 0;
      let d = parseInt(e[9], 10) || 0;
      return d = d >= 0 && d <= 59 ? d : 0, c === "-" ? (a += u, o += d) : c === "+" && (a -= u, o -= d), new Date(Date.UTC(s, i, r, a, o, h));
    }
  }
  Ah = /* @__PURE__ */ new WeakMap(), y(vp, Ah);
  function Nx(n, { scale: t = 1, rotation: e = 0 }) {
    const { width: s, height: i } = n.attributes.style, r = [
      0,
      0,
      parseInt(s),
      parseInt(i)
    ];
    return new dl({
      viewBox: r,
      userUnit: 1,
      scale: t,
      rotation: e
    });
  }
  function bp(n) {
    if (n.startsWith("#")) {
      const t = parseInt(n.slice(1), 16);
      return [
        (t & 16711680) >> 16,
        (t & 65280) >> 8,
        t & 255
      ];
    }
    return n.startsWith("rgb(") ? n.slice(4, -1).split(",").map((t) => parseInt(t)) : n.startsWith("rgba(") ? n.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (Q(`Not a valid color format: "${n}"`), [
      0,
      0,
      0
    ]);
  }
  function Wx(n) {
    const t = document.createElement("span");
    t.style.visibility = "hidden", document.body.append(t);
    for (const e of n.keys()) {
      t.style.color = e;
      const s = window.getComputedStyle(t).color;
      n.set(e, bp(s));
    }
    t.remove();
  }
  function mt(n) {
    const { a: t, b: e, c: s, d: i, e: r, f: a } = n.getTransform();
    return [
      t,
      e,
      s,
      i,
      r,
      a
    ];
  }
  function Fs(n) {
    const { a: t, b: e, c: s, d: i, e: r, f: a } = n.getTransform().invertSelf();
    return [
      t,
      e,
      s,
      i,
      r,
      a
    ];
  }
  function Pn(n, t, e = false, s = true) {
    if (t instanceof dl) {
      const { pageWidth: i, pageHeight: r } = t.rawDims, { style: a } = n, o = Ee.isCSSRoundSupported, h = `var(--scale-factor) * ${i}px`, c = `var(--scale-factor) * ${r}px`, u = o ? `round(down, ${h}, var(--scale-round-x, 1px))` : `calc(${h})`, d = o ? `round(down, ${c}, var(--scale-round-y, 1px))` : `calc(${c})`;
      !e || t.rotation % 180 === 0 ? (a.width = u, a.height = d) : (a.width = d, a.height = u);
    }
    s && n.setAttribute("data-main-rotation", t.rotation);
  }
  class yp {
    constructor() {
      const t = window.devicePixelRatio || 1;
      this.sx = t, this.sy = t;
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
  }
  var Ir, zn, ii, Ma, Jl, kh, Mg, S0, Zs, vm, bm, ku, C0, Eg;
  const Zl = class tc {
    constructor(t) {
      y(this, Zs), y(this, Ir, null), y(this, zn, null), y(this, ii), y(this, Ma, null), y(this, Jl, null), m(this, ii, t), l(tc, kh) || m(tc, kh, Object.freeze({
        freetext: "pdfjs-editor-remove-freetext-button",
        highlight: "pdfjs-editor-remove-highlight-button",
        ink: "pdfjs-editor-remove-ink-button",
        stamp: "pdfjs-editor-remove-stamp-button"
      }));
    }
    render() {
      const t = m(this, Ir, document.createElement("div"));
      t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
      const e = l(this, ii)._uiManager._signal;
      t.addEventListener("contextmenu", Rs, {
        signal: e
      }), t.addEventListener("pointerdown", w(tc, Mg, S0), {
        signal: e
      });
      const s = m(this, Ma, document.createElement("div"));
      s.className = "buttons", t.append(s);
      const i = l(this, ii).toolbarPosition;
      if (i) {
        const { style: r } = t, a = l(this, ii)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
        r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return w(this, Zs, C0).call(this), t;
    }
    get div() {
      return l(this, Ir);
    }
    hide() {
      var t;
      l(this, Ir).classList.add("hidden"), (t = l(this, zn)) == null || t.hideDropdown();
    }
    show() {
      var t;
      l(this, Ir).classList.remove("hidden"), (t = l(this, Jl)) == null || t.shown();
    }
    async addAltText(t) {
      const e = await t.render();
      w(this, Zs, ku).call(this, e), l(this, Ma).prepend(e, l(this, Zs, Eg)), m(this, Jl, t);
    }
    addColorPicker(t) {
      m(this, zn, t);
      const e = t.renderButton();
      w(this, Zs, ku).call(this, e), l(this, Ma).prepend(e, l(this, Zs, Eg));
    }
    remove() {
      var t;
      l(this, Ir).remove(), (t = l(this, zn)) == null || t.destroy(), m(this, zn, null);
    }
  };
  Ir = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap(), kh = /* @__PURE__ */ new WeakMap(), Mg = /* @__PURE__ */ new WeakSet(), S0 = function(n) {
    n.stopPropagation();
  }, Zs = /* @__PURE__ */ new WeakSet(), vm = function(n) {
    l(this, ii)._focusEventsAllowed = false, qe(n);
  }, bm = function(n) {
    l(this, ii)._focusEventsAllowed = true, qe(n);
  }, ku = function(n) {
    const t = l(this, ii)._uiManager._signal;
    n.addEventListener("focusin", w(this, Zs, vm).bind(this), {
      capture: true,
      signal: t
    }), n.addEventListener("focusout", w(this, Zs, bm).bind(this), {
      capture: true,
      signal: t
    }), n.addEventListener("contextmenu", Rs, {
      signal: t
    });
  }, C0 = function() {
    const { editorType: n, _uiManager: t } = l(this, ii), e = document.createElement("button");
    e.className = "delete", e.tabIndex = 0, e.setAttribute("data-l10n-id", l(Zl, kh)[n]), w(this, Zs, ku).call(this, e), e.addEventListener("click", (s) => {
      t.delete();
    }, {
      signal: t._signal
    }), l(this, Ma).append(e);
  }, Eg = function() {
    const n = document.createElement("div");
    return n.className = "divider", n;
  }, y(Zl, Mg), y(Zl, kh, null);
  let Bx = Zl;
  var ec, cn, Ea, Th, A0, k0, ym;
  class Hx {
    constructor(t) {
      y(this, Th), y(this, ec, null), y(this, cn, null), y(this, Ea), m(this, Ea, t);
    }
    show(t, e, s) {
      const [i, r] = w(this, Th, k0).call(this, e, s), { style: a } = l(this, cn) || m(this, cn, w(this, Th, A0).call(this));
      t.append(l(this, cn)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      l(this, cn).remove();
    }
  }
  ec = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ new WeakSet(), A0 = function() {
    const n = m(this, cn, document.createElement("div"));
    n.className = "editToolbar", n.setAttribute("role", "toolbar"), n.addEventListener("contextmenu", Rs, {
      signal: l(this, Ea)._signal
    });
    const t = m(this, ec, document.createElement("div"));
    return t.className = "buttons", n.append(t), w(this, Th, ym).call(this), n;
  }, k0 = function(n, t) {
    let e = 0, s = 0;
    for (const i of n) {
      const r = i.y + i.height;
      if (r < e) continue;
      const a = i.x + (t ? i.width : 0);
      if (r > e) {
        s = a, e = r;
        continue;
      }
      t ? a > s && (s = a) : a < s && (s = a);
    }
    return [
      t ? 1 - s : s,
      e
    ];
  }, ym = function() {
    const n = document.createElement("button");
    n.className = "highlightButton", n.tabIndex = 0, n.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
    const t = document.createElement("span");
    n.append(t), t.className = "visuallyHidden", t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
    const e = l(this, Ea)._signal;
    n.addEventListener("contextmenu", Rs, {
      signal: e
    }), n.addEventListener("click", () => {
      l(this, Ea).highlightSelection("floating_button");
    }, {
      signal: e
    }), l(this, ec).append(n);
  };
  function Tu(n, t, e) {
    for (const s of e) t.addEventListener(s, n[s].bind(n));
  }
  var Dg;
  class zx {
    constructor() {
      y(this, Dg, 0);
    }
    get id() {
      return `${_x}${Be(this, Dg)._++}`;
    }
  }
  Dg = /* @__PURE__ */ new WeakMap();
  var Mh, Mu, Ht, Co, sc;
  const T0 = class {
    constructor() {
      y(this, Co), y(this, Mh, Rx()), y(this, Mu, 0), y(this, Ht, null);
    }
    static get _isSVGFittingCanvas() {
      const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', e = new OffscreenCanvas(1, 3).getContext("2d", {
        willReadFrequently: true
      }), s = new Image();
      s.src = t;
      const i = s.decode().then(() => (e.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(e.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
      return Z(this, "_isSVGFittingCanvas", i);
    }
    async getFromFile(t) {
      const { lastModified: e, name: s, size: i, type: r } = t;
      return w(this, Co, sc).call(this, `${e}_${s}_${i}_${r}`, t);
    }
    async getFromUrl(t) {
      return w(this, Co, sc).call(this, t, t);
    }
    async getFromBlob(t, e) {
      const s = await e;
      return w(this, Co, sc).call(this, t, s);
    }
    async getFromId(t) {
      l(this, Ht) || m(this, Ht, /* @__PURE__ */ new Map());
      const e = l(this, Ht).get(t);
      if (!e) return null;
      if (e.bitmap) return e.refCounter += 1, e;
      if (e.file) return this.getFromFile(e.file);
      if (e.blobPromise) {
        const { blobPromise: s } = e;
        return delete e.blobPromise, this.getFromBlob(e.id, s);
      }
      return this.getFromUrl(e.url);
    }
    getFromCanvas(t, e) {
      l(this, Ht) || m(this, Ht, /* @__PURE__ */ new Map());
      let s = l(this, Ht).get(t);
      if (s != null && s.bitmap) return s.refCounter += 1, s;
      const i = new OffscreenCanvas(e.width, e.height);
      return i.getContext("2d").drawImage(e, 0, 0), s = {
        bitmap: i.transferToImageBitmap(),
        id: `image_${l(this, Mh)}_${Be(this, Mu)._++}`,
        refCounter: 1,
        isSvg: false
      }, l(this, Ht).set(t, s), l(this, Ht).set(s.id, s), s;
    }
    getSvgUrl(t) {
      const e = l(this, Ht).get(t);
      return e != null && e.isSvg ? e.svgUrl : null;
    }
    deleteId(t) {
      var e;
      l(this, Ht) || m(this, Ht, /* @__PURE__ */ new Map());
      const s = l(this, Ht).get(t);
      if (!s || (s.refCounter -= 1, s.refCounter !== 0)) return;
      const { bitmap: i } = s;
      if (!s.url && !s.file) {
        const r = new OffscreenCanvas(i.width, i.height);
        r.getContext("bitmaprenderer").transferFromImageBitmap(i), s.blobPromise = r.convertToBlob();
      }
      (e = i.close) == null || e.call(i), s.bitmap = null;
    }
    isValidId(t) {
      return t.startsWith(`image_${l(this, Mh)}_`);
    }
  };
  Mh = /* @__PURE__ */ new WeakMap(), Mu = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakSet(), sc = async function(n, t) {
    l(this, Ht) || m(this, Ht, /* @__PURE__ */ new Map());
    let e = l(this, Ht).get(n);
    if (e === null) return null;
    if (e != null && e.bitmap) return e.refCounter += 1, e;
    try {
      e || (e = {
        bitmap: null,
        id: `image_${l(this, Mh)}_${Be(this, Mu)._++}`,
        refCounter: 0,
        isSvg: false
      });
      let s;
      if (typeof t == "string" ? (e.url = t, s = await Od(t, "blob")) : t instanceof File ? s = e.file = t : t instanceof Blob && (s = t), s.type === "image/svg+xml") {
        const i = T0._isSVGFittingCanvas, r = new FileReader(), a = new Image(), o = new Promise((h, c) => {
          a.onload = () => {
            e.bitmap = a, e.isSvg = true, h();
          }, r.onload = async () => {
            const u = e.svgUrl = r.result;
            a.src = await i ? `${u}#svgView(preserveAspectRatio(none))` : u;
          }, a.onerror = r.onerror = c;
        });
        r.readAsDataURL(s), await o;
      } else e.bitmap = await createImageBitmap(s);
      e.refCounter = 1;
    } catch (s) {
      Q(s), e = null;
    }
    return l(this, Ht).set(n, e), e && l(this, Ht).set(e.id, e), e;
  };
  let Vx = T0;
  var Pt, Fr, ic, pt;
  class Gx {
    constructor(t = 128) {
      y(this, Pt, []), y(this, Fr, false), y(this, ic), y(this, pt, -1), m(this, ic, t);
    }
    add({ cmd: t, undo: e, post: s, mustExec: i, type: r = NaN, overwriteIfSameType: a = false, keepUndo: o = false }) {
      if (i && t(), l(this, Fr)) return;
      const h = {
        cmd: t,
        undo: e,
        post: s,
        type: r
      };
      if (l(this, pt) === -1) {
        l(this, Pt).length > 0 && (l(this, Pt).length = 0), m(this, pt, 0), l(this, Pt).push(h);
        return;
      }
      if (a && l(this, Pt)[l(this, pt)].type === r) {
        o && (h.undo = l(this, Pt)[l(this, pt)].undo), l(this, Pt)[l(this, pt)] = h;
        return;
      }
      const c = l(this, pt) + 1;
      c === l(this, ic) ? l(this, Pt).splice(0, 1) : (m(this, pt, c), c < l(this, Pt).length && l(this, Pt).splice(c)), l(this, Pt).push(h);
    }
    undo() {
      if (l(this, pt) === -1) return;
      m(this, Fr, true);
      const { undo: t, post: e } = l(this, Pt)[l(this, pt)];
      t(), e == null ? void 0 : e(), m(this, Fr, false), m(this, pt, l(this, pt) - 1);
    }
    redo() {
      if (l(this, pt) < l(this, Pt).length - 1) {
        m(this, pt, l(this, pt) + 1), m(this, Fr, true);
        const { cmd: t, post: e } = l(this, Pt)[l(this, pt)];
        t(), e == null ? void 0 : e(), m(this, Fr, false);
      }
    }
    hasSomethingToUndo() {
      return l(this, pt) !== -1;
    }
    hasSomethingToRedo() {
      return l(this, pt) < l(this, Pt).length - 1;
    }
    cleanType(t) {
      if (l(this, pt) !== -1) {
        for (let e = l(this, pt); e >= 0; e--) if (l(this, Pt)[e].type !== t) {
          l(this, Pt).splice(e + 1, l(this, pt) - e), m(this, pt, e);
          return;
        }
        l(this, Pt).length = 0, m(this, pt, -1);
      }
    }
    destroy() {
      m(this, Pt, null);
    }
  }
  Pt = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap();
  var Og, M0;
  class gl {
    constructor(t) {
      y(this, Og), this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
      const { isMac: e } = Ee.platform;
      for (const [s, i, r = {}] of t) for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
    }
    exec(t, e) {
      if (!this.allKeys.has(e.key)) return;
      const s = this.callbacks.get(w(this, Og, M0).call(this, e));
      if (!s) return;
      const { callback: i, options: { bubbles: r = false, args: a = [], checker: o = null } } = s;
      o && !o(t, e) || (i.bind(t, ...a, e)(), r || qe(e));
    }
  }
  Og = /* @__PURE__ */ new WeakSet(), M0 = function(n) {
    n.altKey && this.buffer.push("alt"), n.ctrlKey && this.buffer.push("ctrl"), n.metaKey && this.buffer.push("meta"), n.shiftKey && this.buffer.push("shift"), this.buffer.push(n.key);
    const t = this.buffer.join("+");
    return this.buffer.length = 0, t;
  };
  const E0 = class D0 {
    get _colors() {
      const t = /* @__PURE__ */ new Map([
        [
          "CanvasText",
          null
        ],
        [
          "Canvas",
          null
        ]
      ]);
      return Wx(t), Z(this, "_colors", t);
    }
    convert(t) {
      const e = bp(t);
      if (!window.matchMedia("(forced-colors: active)").matches) return e;
      for (const [s, i] of this._colors) if (i.every((r, a) => r === e[a])) return D0._colorsMapping.get(s);
      return e;
    }
    getHexCode(t) {
      const e = this._colors.get(t);
      return e ? V.makeHexColor(...e) : t;
    }
  };
  Y(E0, "_colorsMapping", /* @__PURE__ */ new Map([
    [
      "CanvasText",
      [
        0,
        0,
        0
      ]
    ],
    [
      "Canvas",
      [
        255,
        255,
        255
      ]
    ]
  ]));
  let Xx = E0;
  var Ao, ts, Xt, ae, ko, Xi, Vn, ys, jr, Gn, To, Xn, ci, Ns, Un, Eu, rc, Mo, nc, ui, Nr, Eo, un, Us, Pg, dn, ac, Wr, Yn, oc, hc, te, ct, Ui, $n, Do, lc, Br, di, Yi, cc, ws, X, uc, Lg, wm, _m, Du, O0, P0, L0, Rg, R0, Ig, Fg, I0, we, xi, F0, j0, jg, N0, Oo, Ng;
  const Wg = class Bg {
    constructor(t, e, s, i, r, a, o, h, c, u, d, g, f) {
      y(this, X), y(this, Ao, new AbortController()), y(this, ts, null), y(this, Xt, /* @__PURE__ */ new Map()), y(this, ae, /* @__PURE__ */ new Map()), y(this, ko, null), y(this, Xi, null), y(this, Vn, null), y(this, ys, new Gx()), y(this, jr, null), y(this, Gn, null), y(this, To, 0), y(this, Xn, /* @__PURE__ */ new Set()), y(this, ci, null), y(this, Ns, null), y(this, Un, /* @__PURE__ */ new Set()), Y(this, "_editorUndoBar", null), y(this, Eu, false), y(this, rc, false), y(this, Mo, false), y(this, nc, null), y(this, ui, null), y(this, Nr, null), y(this, Eo, null), y(this, un, false), y(this, Us, null), y(this, Pg, new zx()), y(this, dn, false), y(this, ac, false), y(this, Wr, null), y(this, Yn, null), y(this, oc, null), y(this, hc, null), y(this, te, K.NONE), y(this, ct, /* @__PURE__ */ new Set()), y(this, Ui, null), y(this, $n, null), y(this, Do, null), y(this, lc, {
        isEditing: false,
        isEmpty: true,
        hasSomethingToUndo: false,
        hasSomethingToRedo: false,
        hasSelectedEditor: false,
        hasSelectedText: false
      }), y(this, Br, [
        0,
        0
      ]), y(this, di, null), y(this, Yi, null), y(this, cc, null), y(this, ws, null);
      const p = this._signal = l(this, Ao).signal;
      m(this, Yi, t), m(this, cc, e), m(this, ko, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
        signal: p
      }), i._on("pagechanging", this.onPageChanging.bind(this), {
        signal: p
      }), i._on("scalechanging", this.onScaleChanging.bind(this), {
        signal: p
      }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
        signal: p
      }), i._on("setpreference", this.onSetPreference.bind(this), {
        signal: p
      }), i._on("switchannotationeditorparams", (v) => this.updateParams(v.type, v.value), {
        signal: p
      }), w(this, X, O0).call(this), w(this, X, I0).call(this), w(this, X, Rg).call(this), m(this, Xi, r.annotationStorage), m(this, nc, r.filterFactory), m(this, $n, a), m(this, Eo, o || null), m(this, Eu, h), m(this, rc, c), m(this, Mo, u), m(this, hc, d || null), this.viewParameters = {
        realScale: no.PDF_TO_CSS_UNITS,
        rotation: 0
      }, this.isShiftKeyDown = false, this._editorUndoBar = g || null, this._supportsPinchToZoom = f !== false;
    }
    static get _keyboardManager() {
      const t = Bg.prototype, e = (a) => l(a, Yi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, { target: o }) => {
        if (o instanceof HTMLInputElement) {
          const { type: h } = o;
          return h !== "text" && h !== "number";
        }
        return true;
      }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
      return Z(this, "_keyboardManager", new gl([
        [
          [
            "ctrl+a",
            "mac+meta+a"
          ],
          t.selectAll,
          {
            checker: s
          }
        ],
        [
          [
            "ctrl+z",
            "mac+meta+z"
          ],
          t.undo,
          {
            checker: s
          }
        ],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z"
          ],
          t.redo,
          {
            checker: s
          }
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete"
          ],
          t.delete,
          {
            checker: s
          }
        ],
        [
          [
            "Enter",
            "mac+Enter"
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && l(a, Yi).contains(o) && !a.isEnterHandled
          }
        ],
        [
          [
            " ",
            "mac+ "
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (a, { target: o }) => !(o instanceof HTMLButtonElement) && l(a, Yi).contains(document.activeElement)
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          t.unselectAll
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -r,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              r,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -r
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              r
            ],
            checker: e
          }
        ]
      ]));
    }
    destroy() {
      var t, e, s, i, r;
      (t = l(this, ws)) == null || t.resolve(), m(this, ws, null), (e = l(this, Ao)) == null || e.abort(), m(this, Ao, null), this._signal = null;
      for (const a of l(this, ae).values()) a.destroy();
      l(this, ae).clear(), l(this, Xt).clear(), l(this, Un).clear(), m(this, ts, null), l(this, ct).clear(), l(this, ys).destroy(), (s = l(this, ko)) == null || s.destroy(), (i = l(this, Us)) == null || i.hide(), m(this, Us, null), l(this, ui) && (clearTimeout(l(this, ui)), m(this, ui, null)), l(this, di) && (clearTimeout(l(this, di)), m(this, di, null)), (r = this._editorUndoBar) == null || r.destroy();
    }
    combinedSignal(t) {
      return AbortSignal.any([
        this._signal,
        t.signal
      ]);
    }
    get mlManager() {
      return l(this, hc);
    }
    get useNewAltTextFlow() {
      return l(this, rc);
    }
    get useNewAltTextWhenAddingImage() {
      return l(this, Mo);
    }
    get hcmFilter() {
      return Z(this, "hcmFilter", l(this, $n) ? l(this, nc).addHCMFilter(l(this, $n).foreground, l(this, $n).background) : "none");
    }
    get direction() {
      return Z(this, "direction", getComputedStyle(l(this, Yi)).direction);
    }
    get highlightColors() {
      return Z(this, "highlightColors", l(this, Eo) ? new Map(l(this, Eo).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
    }
    get highlightColorNames() {
      return Z(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
    }
    setCurrentDrawingSession(t) {
      t ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), m(this, Gn, t);
    }
    setMainHighlightColorPicker(t) {
      m(this, oc, t);
    }
    editAltText(t, e = false) {
      var s;
      (s = l(this, ko)) == null || s.editAltText(this, t, e);
    }
    switchToMode(t, e) {
      this._eventBus.on("annotationeditormodechanged", e, {
        once: true,
        signal: this._signal
      }), this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: t
      });
    }
    setPreference(t, e) {
      this._eventBus.dispatch("setpreference", {
        source: this,
        name: t,
        value: e
      });
    }
    onSetPreference({ name: t, value: e }) {
      switch (t) {
        case "enableNewAltTextWhenAddingImage":
          m(this, Mo, e);
          break;
      }
    }
    onPageChanging({ pageNumber: t }) {
      m(this, To, t - 1);
    }
    focusMainContainer() {
      l(this, Yi).focus();
    }
    findParent(t, e) {
      for (const s of l(this, ae).values()) {
        const { x: i, y: r, width: a, height: o } = s.div.getBoundingClientRect();
        if (t >= i && t <= i + a && e >= r && e <= r + o) return s;
      }
      return null;
    }
    disableUserSelect(t = false) {
      l(this, cc).classList.toggle("noUserSelect", t);
    }
    addShouldRescale(t) {
      l(this, Un).add(t);
    }
    removeShouldRescale(t) {
      l(this, Un).delete(t);
    }
    onScaleChanging({ scale: t }) {
      var e;
      this.commitOrRemove(), this.viewParameters.realScale = t * no.PDF_TO_CSS_UNITS;
      for (const s of l(this, Un)) s.onScaleChanging();
      (e = l(this, Gn)) == null || e.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t }) {
      this.commitOrRemove(), this.viewParameters.rotation = t;
    }
    highlightSelection(t = "") {
      const e = document.getSelection();
      if (!e || e.isCollapsed) return;
      const { anchorNode: s, anchorOffset: i, focusNode: r, focusOffset: a } = e, o = e.toString(), h = w(this, X, uc).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(h);
      if (!c) return;
      e.empty();
      const u = w(this, X, Lg).call(this, h), d = l(this, te) === K.NONE, g = () => {
        u == null ? void 0 : u.createAndAddNewEditor({
          x: 0,
          y: 0
        }, false, {
          methodOfCreation: t,
          boxes: c,
          anchorNode: s,
          anchorOffset: i,
          focusNode: r,
          focusOffset: a,
          text: o
        }), d && this.showAllEditors("highlight", true, true);
      };
      if (d) {
        this.switchToMode(K.HIGHLIGHT, g);
        return;
      }
      g();
    }
    addToAnnotationStorage(t) {
      !t.isEmpty() && l(this, Xi) && !l(this, Xi).has(t.id) && l(this, Xi).setValue(t.id, t);
    }
    blur() {
      if (this.isShiftKeyDown = false, l(this, un) && (m(this, un, false), w(this, X, Du).call(this, "main_toolbar")), !this.hasSelection) return;
      const { activeElement: t } = document;
      for (const e of l(this, ct)) if (e.div.contains(t)) {
        m(this, Yn, [
          e,
          t
        ]), e._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!l(this, Yn)) return;
      const [t, e] = l(this, Yn);
      m(this, Yn, null), e.addEventListener("focusin", () => {
        t._focusEventsAllowed = true;
      }, {
        once: true,
        signal: this._signal
      }), e.focus();
    }
    addEditListeners() {
      w(this, X, Rg).call(this), w(this, X, Ig).call(this);
    }
    removeEditListeners() {
      w(this, X, R0).call(this), w(this, X, Fg).call(this);
    }
    dragOver(t) {
      for (const { type: e } of t.dataTransfer.items) for (const s of l(this, Ns)) if (s.isHandlingMimeForPasting(e)) {
        t.dataTransfer.dropEffect = "copy", t.preventDefault();
        return;
      }
    }
    drop(t) {
      for (const e of t.dataTransfer.items) for (const s of l(this, Ns)) if (s.isHandlingMimeForPasting(e.type)) {
        s.paste(e, this.currentLayer), t.preventDefault();
        return;
      }
    }
    copy(t) {
      var e;
      if (t.preventDefault(), (e = l(this, ts)) == null || e.commitOrRemove(), !this.hasSelection) return;
      const s = [];
      for (const i of l(this, ct)) {
        const r = i.serialize(true);
        r && s.push(r);
      }
      s.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(s));
    }
    cut(t) {
      this.copy(t), this.delete();
    }
    async paste(t) {
      t.preventDefault();
      const { clipboardData: e } = t;
      for (const r of e.items) for (const a of l(this, Ns)) if (a.isHandlingMimeForPasting(r.type)) {
        a.paste(r, this.currentLayer);
        return;
      }
      let s = e.getData("application/pdfjs");
      if (!s) return;
      try {
        s = JSON.parse(s);
      } catch (r) {
        Q(`paste: "${r.message}".`);
        return;
      }
      if (!Array.isArray(s)) return;
      this.unselectAll();
      const i = this.currentLayer;
      try {
        const r = [];
        for (const h of s) {
          const c = await i.deserialize(h);
          if (!c) return;
          r.push(c);
        }
        const a = () => {
          for (const h of r) w(this, X, jg).call(this, h);
          w(this, X, Ng).call(this, r);
        }, o = () => {
          for (const h of r) h.remove();
        };
        this.addCommands({
          cmd: a,
          undo: o,
          mustExec: true
        });
      } catch (r) {
        Q(`paste: "${r.message}".`);
      }
    }
    keydown(t) {
      !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = true), l(this, te) !== K.NONE && !this.isEditorHandlingKeyboard && Bg._keyboardManager.exec(this, t);
    }
    keyup(t) {
      this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = false, l(this, un) && (m(this, un, false), w(this, X, Du).call(this, "main_toolbar")));
    }
    onEditingAction({ name: t }) {
      switch (t) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
      }
    }
    setEditingState(t) {
      t ? (w(this, X, P0).call(this), w(this, X, Ig).call(this), w(this, X, we).call(this, {
        isEditing: l(this, te) !== K.NONE,
        isEmpty: w(this, X, Oo).call(this),
        hasSomethingToUndo: l(this, ys).hasSomethingToUndo(),
        hasSomethingToRedo: l(this, ys).hasSomethingToRedo(),
        hasSelectedEditor: false
      })) : (w(this, X, L0).call(this), w(this, X, Fg).call(this), w(this, X, we).call(this, {
        isEditing: false
      }), this.disableUserSelect(false));
    }
    registerEditorTypes(t) {
      if (!l(this, Ns)) {
        m(this, Ns, t);
        for (const e of l(this, Ns)) w(this, X, xi).call(this, e.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return l(this, Pg).id;
    }
    get currentLayer() {
      return l(this, ae).get(l(this, To));
    }
    getLayer(t) {
      return l(this, ae).get(t);
    }
    get currentPageIndex() {
      return l(this, To);
    }
    addLayer(t) {
      l(this, ae).set(t.pageIndex, t), l(this, dn) ? t.enable() : t.disable();
    }
    removeLayer(t) {
      l(this, ae).delete(t.pageIndex);
    }
    async updateMode(t, e = null, s = false) {
      var i;
      if (l(this, te) !== t && !(l(this, ws) && (await l(this, ws).promise, !l(this, ws)))) {
        if (m(this, ws, Promise.withResolvers()), m(this, te, t), t === K.NONE) {
          this.setEditingState(false), w(this, X, j0).call(this), (i = this._editorUndoBar) == null || i.hide(), l(this, ws).resolve();
          return;
        }
        this.setEditingState(true), await w(this, X, F0).call(this), this.unselectAll();
        for (const r of l(this, ae).values()) r.updateMode(t);
        if (!e) {
          s && this.addNewEditorFromKeyboard(), l(this, ws).resolve();
          return;
        }
        for (const r of l(this, Xt).values()) r.annotationElementId === e ? (this.setSelected(r), r.enterInEditMode()) : r.unselect();
        l(this, ws).resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t) {
      t !== l(this, te) && this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        mode: t
      });
    }
    updateParams(t, e) {
      var s;
      if (l(this, Ns)) {
        switch (t) {
          case et.CREATE:
            this.currentLayer.addNewEditor();
            return;
          case et.HIGHLIGHT_DEFAULT_COLOR:
            (s = l(this, oc)) == null || s.updateColor(e);
            break;
          case et.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                data: {
                  type: "highlight",
                  action: "toggle_visibility"
                }
              }
            }), (l(this, Do) || m(this, Do, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
            break;
        }
        for (const i of l(this, ct)) i.updateParams(t, e);
        for (const i of l(this, Ns)) i.updateDefaultParams(t, e);
      }
    }
    showAllEditors(t, e, s = false) {
      var i;
      for (const r of l(this, Xt).values()) r.editorType === t && r.show(e);
      (((i = l(this, Do)) == null ? void 0 : i.get(et.HIGHLIGHT_SHOW_ALL)) ?? true) !== e && w(this, X, xi).call(this, [
        [
          et.HIGHLIGHT_SHOW_ALL,
          e
        ]
      ]);
    }
    enableWaiting(t = false) {
      if (l(this, ac) !== t) {
        m(this, ac, t);
        for (const e of l(this, ae).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
      }
    }
    getEditors(t) {
      const e = [];
      for (const s of l(this, Xt).values()) s.pageIndex === t && e.push(s);
      return e;
    }
    getEditor(t) {
      return l(this, Xt).get(t);
    }
    addEditor(t) {
      l(this, Xt).set(t.id, t);
    }
    removeEditor(t) {
      var e;
      t.div.contains(document.activeElement) && (l(this, ui) && clearTimeout(l(this, ui)), m(this, ui, setTimeout(() => {
        this.focusMainContainer(), m(this, ui, null);
      }, 0))), l(this, Xt).delete(t.id), this.unselect(t), (!t.annotationElementId || !l(this, Xn).has(t.annotationElementId)) && ((e = l(this, Xi)) == null || e.remove(t.id));
    }
    addDeletedAnnotationElement(t) {
      l(this, Xn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = true;
    }
    isDeletedAnnotationElement(t) {
      return l(this, Xn).has(t);
    }
    removeDeletedAnnotationElement(t) {
      l(this, Xn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = false;
    }
    setActiveEditor(t) {
      l(this, ts) !== t && (m(this, ts, t), t && w(this, X, xi).call(this, t.propertiesToUpdate));
    }
    updateUI(t) {
      l(this, X, N0) === t && w(this, X, xi).call(this, t.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t) {
      w(this, X, xi).call(this, t.defaultPropertiesToUpdate);
    }
    toggleSelected(t) {
      if (l(this, ct).has(t)) {
        l(this, ct).delete(t), t.unselect(), w(this, X, we).call(this, {
          hasSelectedEditor: this.hasSelection
        });
        return;
      }
      l(this, ct).add(t), t.select(), w(this, X, xi).call(this, t.propertiesToUpdate), w(this, X, we).call(this, {
        hasSelectedEditor: true
      });
    }
    setSelected(t) {
      var e;
      (e = l(this, Gn)) == null || e.commitOrRemove();
      for (const s of l(this, ct)) s !== t && s.unselect();
      l(this, ct).clear(), l(this, ct).add(t), t.select(), w(this, X, xi).call(this, t.propertiesToUpdate), w(this, X, we).call(this, {
        hasSelectedEditor: true
      });
    }
    isSelected(t) {
      return l(this, ct).has(t);
    }
    get firstSelectedEditor() {
      return l(this, ct).values().next().value;
    }
    unselect(t) {
      t.unselect(), l(this, ct).delete(t), w(this, X, we).call(this, {
        hasSelectedEditor: this.hasSelection
      });
    }
    get hasSelection() {
      return l(this, ct).size !== 0;
    }
    get isEnterHandled() {
      return l(this, ct).size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      var t;
      l(this, ys).undo(), w(this, X, we).call(this, {
        hasSomethingToUndo: l(this, ys).hasSomethingToUndo(),
        hasSomethingToRedo: true,
        isEmpty: w(this, X, Oo).call(this)
      }), (t = this._editorUndoBar) == null || t.hide();
    }
    redo() {
      l(this, ys).redo(), w(this, X, we).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: l(this, ys).hasSomethingToRedo(),
        isEmpty: w(this, X, Oo).call(this)
      });
    }
    addCommands(t) {
      l(this, ys).add(t), w(this, X, we).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: false,
        isEmpty: w(this, X, Oo).call(this)
      });
    }
    cleanUndoStack(t) {
      l(this, ys).cleanType(t);
    }
    delete() {
      var t;
      this.commitOrRemove();
      const e = (t = this.currentLayer) == null ? void 0 : t.endDrawingSession(true);
      if (!this.hasSelection && !e) return;
      const s = e ? [
        e
      ] : [
        ...l(this, ct)
      ], i = () => {
        var a;
        (a = this._editorUndoBar) == null || a.show(r, s.length === 1 ? s[0].editorType : s.length);
        for (const o of s) o.remove();
      }, r = () => {
        for (const a of s) w(this, X, jg).call(this, a);
      };
      this.addCommands({
        cmd: i,
        undo: r,
        mustExec: true
      });
    }
    commitOrRemove() {
      var t;
      (t = l(this, ts)) == null || t.commitOrRemove();
    }
    hasSomethingToControl() {
      return l(this, ts) || this.hasSelection;
    }
    selectAll() {
      for (const t of l(this, ct)) t.commit();
      w(this, X, Ng).call(this, l(this, Xt).values());
    }
    unselectAll() {
      var t;
      if (!(l(this, ts) && (l(this, ts).commitOrRemove(), l(this, te) !== K.NONE)) && !((t = l(this, Gn)) != null && t.commitOrRemove()) && this.hasSelection) {
        for (const e of l(this, ct)) e.unselect();
        l(this, ct).clear(), w(this, X, we).call(this, {
          hasSelectedEditor: false
        });
      }
    }
    translateSelectedEditors(t, e, s = false) {
      if (s || this.commitOrRemove(), !this.hasSelection) return;
      l(this, Br)[0] += t, l(this, Br)[1] += e;
      const [i, r] = l(this, Br), a = [
        ...l(this, ct)
      ];
      l(this, di) && clearTimeout(l(this, di)), m(this, di, setTimeout(() => {
        m(this, di, null), l(this, Br)[0] = l(this, Br)[1] = 0, this.addCommands({
          cmd: () => {
            for (const h of a) l(this, Xt).has(h.id) && h.translateInPage(i, r);
          },
          undo: () => {
            for (const h of a) l(this, Xt).has(h.id) && h.translateInPage(-i, -r);
          },
          mustExec: false
        });
      }, 1e3));
      for (const h of a) h.translateInPage(t, e);
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true), m(this, ci, /* @__PURE__ */ new Map());
        for (const t of l(this, ct)) l(this, ci).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
      }
    }
    endDragSession() {
      if (!l(this, ci)) return false;
      this.disableUserSelect(false);
      const t = l(this, ci);
      m(this, ci, null);
      let e = false;
      for (const [{ x: i, y: r, pageIndex: a }, o] of t) o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
      if (!e) return false;
      const s = (i, r, a, o) => {
        if (l(this, Xt).has(i.id)) {
          const h = l(this, ae).get(o);
          h ? i._setParentAndPosition(h, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
        }
      };
      return this.addCommands({
        cmd: () => {
          for (const [i, { newX: r, newY: a, newPageIndex: o }] of t) s(i, r, a, o);
        },
        undo: () => {
          for (const [i, { savedX: r, savedY: a, savedPageIndex: o }] of t) s(i, r, a, o);
        },
        mustExec: true
      }), true;
    }
    dragSelectedEditors(t, e) {
      if (l(this, ci)) for (const s of l(this, ci).keys()) s.drag(t, e);
    }
    rebuild(t) {
      if (t.parent === null) {
        const e = this.getLayer(t.pageIndex);
        e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
      } else t.parent.addOrRebuild(t);
    }
    get isEditorHandlingKeyboard() {
      var t;
      return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || l(this, ct).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t) {
      return l(this, ts) === t;
    }
    getActive() {
      return l(this, ts);
    }
    getMode() {
      return l(this, te);
    }
    get imageManager() {
      return Z(this, "imageManager", new Vx());
    }
    getSelectionBoxes(t) {
      if (!t) return null;
      const e = document.getSelection();
      for (let c = 0, u = e.rangeCount; c < u; c++) if (!t.contains(e.getRangeAt(c).commonAncestorContainer)) return null;
      const { x: s, y: i, width: r, height: a } = t.getBoundingClientRect();
      let o;
      switch (t.getAttribute("data-main-rotation")) {
        case "90":
          o = (c, u, d, g) => ({
            x: (u - i) / a,
            y: 1 - (c + d - s) / r,
            width: g / a,
            height: d / r
          });
          break;
        case "180":
          o = (c, u, d, g) => ({
            x: 1 - (c + d - s) / r,
            y: 1 - (u + g - i) / a,
            width: d / r,
            height: g / a
          });
          break;
        case "270":
          o = (c, u, d, g) => ({
            x: 1 - (u + g - i) / a,
            y: (c - s) / r,
            width: g / a,
            height: d / r
          });
          break;
        default:
          o = (c, u, d, g) => ({
            x: (c - s) / r,
            y: (u - i) / a,
            width: d / r,
            height: g / a
          });
          break;
      }
      const h = [];
      for (let c = 0, u = e.rangeCount; c < u; c++) {
        const d = e.getRangeAt(c);
        if (!d.collapsed) for (const { x: g, y: f, width: p, height: v } of d.getClientRects()) p === 0 || v === 0 || h.push(o(g, f, p, v));
      }
      return h.length === 0 ? null : h;
    }
    addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
      (l(this, Vn) || m(this, Vn, /* @__PURE__ */ new Map())).set(t, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t }) {
      var e;
      (e = l(this, Vn)) == null || e.delete(t);
    }
    renderAnnotationElement(t) {
      var e;
      const s = (e = l(this, Vn)) == null ? void 0 : e.get(t.data.id);
      if (!s) return;
      const i = l(this, Xi).getRawValue(s);
      i && (l(this, te) === K.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
    }
  };
  Ao = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), rc = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Pg = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakSet(), uc = function({ anchorNode: n }) {
    return n.nodeType === Node.TEXT_NODE ? n.parentElement : n;
  }, Lg = function(n) {
    const { currentLayer: t } = this;
    if (t.hasTextLayer(n)) return t;
    for (const e of l(this, ae).values()) if (e.hasTextLayer(n)) return e;
    return null;
  }, wm = function() {
    const n = document.getSelection();
    if (!n || n.isCollapsed) return;
    const t = w(this, X, uc).call(this, n).closest(".textLayer"), e = this.getSelectionBoxes(t);
    e && (l(this, Us) || m(this, Us, new Hx(this)), l(this, Us).show(t, e, this.direction === "ltr"));
  }, _m = function() {
    var n, t, e;
    const s = document.getSelection();
    if (!s || s.isCollapsed) {
      l(this, Ui) && ((n = l(this, Us)) == null || n.hide(), m(this, Ui, null), w(this, X, we).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    const { anchorNode: i } = s;
    if (i === l(this, Ui)) return;
    const r = w(this, X, uc).call(this, s).closest(".textLayer");
    if (!r) {
      l(this, Ui) && ((t = l(this, Us)) == null || t.hide(), m(this, Ui, null), w(this, X, we).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    if ((e = l(this, Us)) == null || e.hide(), m(this, Ui, i), w(this, X, we).call(this, {
      hasSelectedText: true
    }), !(l(this, te) !== K.HIGHLIGHT && l(this, te) !== K.NONE) && (l(this, te) === K.HIGHLIGHT && this.showAllEditors("highlight", true, true), m(this, un, this.isShiftKeyDown), !this.isShiftKeyDown)) {
      const a = l(this, te) === K.HIGHLIGHT ? w(this, X, Lg).call(this, r) : null;
      a == null ? void 0 : a.toggleDrawing();
      const o = new AbortController(), h = this.combinedSignal(o), c = (u) => {
        u.type === "pointerup" && u.button !== 0 || (o.abort(), a == null ? void 0 : a.toggleDrawing(true), u.type === "pointerup" && w(this, X, Du).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", c, {
        signal: h
      }), window.addEventListener("blur", c, {
        signal: h
      });
    }
  }, Du = function(n = "") {
    l(this, te) === K.HIGHLIGHT ? this.highlightSelection(n) : l(this, Eu) && w(this, X, wm).call(this);
  }, O0 = function() {
    document.addEventListener("selectionchange", w(this, X, _m).bind(this), {
      signal: this._signal
    });
  }, P0 = function() {
    if (l(this, Nr)) return;
    m(this, Nr, new AbortController());
    const n = this.combinedSignal(l(this, Nr));
    window.addEventListener("focus", this.focus.bind(this), {
      signal: n
    }), window.addEventListener("blur", this.blur.bind(this), {
      signal: n
    });
  }, L0 = function() {
    var n;
    (n = l(this, Nr)) == null || n.abort(), m(this, Nr, null);
  }, Rg = function() {
    if (l(this, Wr)) return;
    m(this, Wr, new AbortController());
    const n = this.combinedSignal(l(this, Wr));
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: n
    }), window.addEventListener("keyup", this.keyup.bind(this), {
      signal: n
    });
  }, R0 = function() {
    var n;
    (n = l(this, Wr)) == null || n.abort(), m(this, Wr, null);
  }, Ig = function() {
    if (l(this, jr)) return;
    m(this, jr, new AbortController());
    const n = this.combinedSignal(l(this, jr));
    document.addEventListener("copy", this.copy.bind(this), {
      signal: n
    }), document.addEventListener("cut", this.cut.bind(this), {
      signal: n
    }), document.addEventListener("paste", this.paste.bind(this), {
      signal: n
    });
  }, Fg = function() {
    var n;
    (n = l(this, jr)) == null || n.abort(), m(this, jr, null);
  }, I0 = function() {
    const n = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: n
    }), document.addEventListener("drop", this.drop.bind(this), {
      signal: n
    });
  }, we = function(n) {
    Object.entries(n).some(([t, e]) => l(this, lc)[t] !== e) && (this._eventBus.dispatch("annotationeditorstateschanged", {
      source: this,
      details: Object.assign(l(this, lc), n)
    }), l(this, te) === K.HIGHLIGHT && n.hasSelectedEditor === false && w(this, X, xi).call(this, [
      [
        et.HIGHLIGHT_FREE,
        true
      ]
    ]));
  }, xi = function(n) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details: n
    });
  }, F0 = async function() {
    if (!l(this, dn)) {
      m(this, dn, true);
      const n = [];
      for (const t of l(this, ae).values()) n.push(t.enable());
      await Promise.all(n);
      for (const t of l(this, Xt).values()) t.enable();
    }
  }, j0 = function() {
    if (this.unselectAll(), l(this, dn)) {
      m(this, dn, false);
      for (const n of l(this, ae).values()) n.disable();
      for (const n of l(this, Xt).values()) n.disable();
    }
  }, jg = function(n) {
    const t = l(this, ae).get(n.pageIndex);
    t ? t.addOrRebuild(n) : (this.addEditor(n), this.addToAnnotationStorage(n));
  }, N0 = function() {
    let n = null;
    for (n of l(this, ct)) ;
    return n;
  }, Oo = function() {
    if (l(this, Xt).size === 0) return true;
    if (l(this, Xt).size === 1) for (const n of l(this, Xt).values()) return n.isEmpty();
    return false;
  }, Ng = function(n) {
    for (const t of l(this, ct)) t.unselect();
    l(this, ct).clear();
    for (const t of n) t.isEmpty() || (l(this, ct).add(t), t.select());
    w(this, X, we).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }, Y(Wg, "TRANSLATE_SMALL", 1), Y(Wg, "TRANSLATE_BIG", 10);
  let al = Wg;
  var ee, Mi, Hs, Eh, Si, hs, Po, gi, Ye, $i, qn, Ci, _r, Ei, Dh, dc;
  const Lo = class qi {
    constructor(t) {
      y(this, Ei), y(this, ee, null), y(this, Mi, false), y(this, Hs, null), y(this, Eh, null), y(this, Si, null), y(this, hs, null), y(this, Po, false), y(this, gi, null), y(this, Ye, null), y(this, $i, null), y(this, qn, null), y(this, Ci, false), m(this, Ye, t), m(this, Ci, t._uiManager.useNewAltTextFlow), l(qi, _r) || m(qi, _r, Object.freeze({
        added: "pdfjs-editor-new-alt-text-added-button",
        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
        missing: "pdfjs-editor-new-alt-text-missing-button",
        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
        review: "pdfjs-editor-new-alt-text-to-review-button",
        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
      }));
    }
    static initialize(t) {
      qi._l10n ?? (qi._l10n = t);
    }
    async render() {
      const t = m(this, Hs, document.createElement("button"));
      t.className = "altText", t.tabIndex = "0";
      const e = m(this, Eh, document.createElement("span"));
      t.append(e), l(this, Ci) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", l(qi, _r).missing), e.setAttribute("data-l10n-id", l(qi, _r)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
      const s = l(this, Ye)._uiManager._signal;
      t.addEventListener("contextmenu", Rs, {
        signal: s
      }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
        signal: s
      });
      const i = (r) => {
        r.preventDefault(), l(this, Ye)._uiManager.editAltText(l(this, Ye)), l(this, Ci) && l(this, Ye)._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: l(this, Ei, Dh)
          }
        });
      };
      return t.addEventListener("click", i, {
        capture: true,
        signal: s
      }), t.addEventListener("keydown", (r) => {
        r.target === t && r.key === "Enter" && (m(this, Po, true), i(r));
      }, {
        signal: s
      }), await w(this, Ei, dc).call(this), t;
    }
    finish() {
      l(this, Hs) && (l(this, Hs).focus({
        focusVisible: l(this, Po)
      }), m(this, Po, false));
    }
    isEmpty() {
      return l(this, Ci) ? l(this, ee) === null : !l(this, ee) && !l(this, Mi);
    }
    hasData() {
      return l(this, Ci) ? l(this, ee) !== null || !!l(this, $i) : this.isEmpty();
    }
    get guessedText() {
      return l(this, $i);
    }
    async setGuessedText(t) {
      l(this, ee) === null && (m(this, $i, t), m(this, qn, await qi._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
        generatedAltText: t
      })), w(this, Ei, dc).call(this));
    }
    toggleAltTextBadge(t = false) {
      var e;
      if (!l(this, Ci) || l(this, ee)) {
        (e = l(this, gi)) == null || e.remove(), m(this, gi, null);
        return;
      }
      if (!l(this, gi)) {
        const s = m(this, gi, document.createElement("div"));
        s.className = "noAltTextBadge", l(this, Ye).div.append(s);
      }
      l(this, gi).classList.toggle("hidden", !t);
    }
    serialize(t) {
      let e = l(this, ee);
      return !t && l(this, $i) === e && (e = l(this, qn)), {
        altText: e,
        decorative: l(this, Mi),
        guessedText: l(this, $i),
        textWithDisclaimer: l(this, qn)
      };
    }
    get data() {
      return {
        altText: l(this, ee),
        decorative: l(this, Mi)
      };
    }
    set data({ altText: t, decorative: e, guessedText: s, textWithDisclaimer: i, cancel: r = false }) {
      s && (m(this, $i, s), m(this, qn, i)), !(l(this, ee) === t && l(this, Mi) === e) && (r || (m(this, ee, t), m(this, Mi, e)), w(this, Ei, dc).call(this));
    }
    toggle(t = false) {
      l(this, Hs) && (!t && l(this, hs) && (clearTimeout(l(this, hs)), m(this, hs, null)), l(this, Hs).disabled = !t);
    }
    shown() {
      l(this, Ye)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_displayed",
        data: {
          label: l(this, Ei, Dh)
        }
      });
    }
    destroy() {
      var t, e;
      (t = l(this, Hs)) == null || t.remove(), m(this, Hs, null), m(this, Eh, null), m(this, Si, null), (e = l(this, gi)) == null || e.remove(), m(this, gi, null);
    }
  };
  ee = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Eh = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakSet(), Dh = function() {
    return l(this, ee) && "added" || l(this, ee) === null && this.guessedText && "review" || "missing";
  }, dc = async function() {
    var n, t, e;
    const s = l(this, Hs);
    if (!s) return;
    if (l(this, Ci)) {
      if (s.classList.toggle("done", !!l(this, ee)), s.setAttribute("data-l10n-id", l(Lo, _r)[l(this, Ei, Dh)]), (n = l(this, Eh)) == null || n.setAttribute("data-l10n-id", l(Lo, _r)[`${l(this, Ei, Dh)}-label`]), !l(this, ee)) {
        (t = l(this, Si)) == null || t.remove();
        return;
      }
    } else {
      if (!l(this, ee) && !l(this, Mi)) {
        s.classList.remove("done"), (e = l(this, Si)) == null || e.remove();
        return;
      }
      s.classList.add("done"), s.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let i = l(this, Si);
    if (!i) {
      m(this, Si, i = document.createElement("span")), i.className = "tooltip", i.setAttribute("role", "tooltip"), i.id = `alt-text-tooltip-${l(this, Ye).id}`;
      const a = 100, o = l(this, Ye)._uiManager._signal;
      o.addEventListener("abort", () => {
        clearTimeout(l(this, hs)), m(this, hs, null);
      }, {
        once: true
      }), s.addEventListener("mouseenter", () => {
        m(this, hs, setTimeout(() => {
          m(this, hs, null), l(this, Si).classList.add("show"), l(this, Ye)._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, a));
      }, {
        signal: o
      }), s.addEventListener("mouseleave", () => {
        var h;
        l(this, hs) && (clearTimeout(l(this, hs)), m(this, hs, null)), (h = l(this, Si)) == null || h.classList.remove("show");
      }, {
        signal: o
      });
    }
    l(this, Mi) ? i.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (i.removeAttribute("data-l10n-id"), i.textContent = l(this, ee)), i.parentNode || s.append(i);
    const r = l(this, Ye).getImageForAltText();
    r == null ? void 0 : r.setAttribute("aria-describedby", i.id);
  }, y(Lo, _r, null), Y(Lo, "_l10n", null);
  let xm = Lo;
  var Ou, Kn, Pu, Lu, Ru, Iu, Fu, Oh, Ki, Qn, Hr, Da, W0, Sm, sg;
  const B0 = class {
    constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: s = null, onPinchStart: i = null, onPinching: r = null, onPinchEnd: a = null, signal: o }) {
      y(this, Da), y(this, Ou), y(this, Kn, false), y(this, Pu, null), y(this, Lu), y(this, Ru), y(this, Iu), y(this, Fu), y(this, Oh), y(this, Ki, null), y(this, Qn), y(this, Hr, null), m(this, Ou, t), m(this, Pu, s), m(this, Lu, e), m(this, Ru, i), m(this, Iu, r), m(this, Fu, a), m(this, Qn, new AbortController()), m(this, Oh, AbortSignal.any([
        o,
        l(this, Qn).signal
      ])), t.addEventListener("touchstart", w(this, Da, W0).bind(this), {
        passive: false,
        signal: l(this, Oh)
      });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return Z(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
    }
    destroy() {
      var t;
      (t = l(this, Qn)) == null || t.abort(), m(this, Qn, null);
    }
  };
  Ou = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Pu = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap(), Fu = /* @__PURE__ */ new WeakMap(), Oh = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakSet(), W0 = function(n) {
    var t, e, s;
    if ((t = l(this, Lu)) != null && t.call(this) || n.touches.length < 2) return;
    if (!l(this, Hr)) {
      m(this, Hr, new AbortController());
      const a = AbortSignal.any([
        l(this, Oh),
        l(this, Hr).signal
      ]), o = l(this, Ou), h = {
        signal: a,
        passive: false
      };
      o.addEventListener("touchmove", w(this, Da, Sm).bind(this), h), o.addEventListener("touchend", w(this, Da, sg).bind(this), h), o.addEventListener("touchcancel", w(this, Da, sg).bind(this), h), (e = l(this, Ru)) == null || e.call(this);
    }
    if (qe(n), n.touches.length !== 2 || (s = l(this, Pu)) != null && s.call(this)) {
      m(this, Ki, null);
      return;
    }
    let [i, r] = n.touches;
    i.identifier > r.identifier && ([i, r] = [
      r,
      i
    ]), m(this, Ki, {
      touch0X: i.screenX,
      touch0Y: i.screenY,
      touch1X: r.screenX,
      touch1Y: r.screenY
    });
  }, Sm = function(n) {
    var t;
    if (!l(this, Ki) || n.touches.length !== 2) return;
    let [e, s] = n.touches;
    e.identifier > s.identifier && ([e, s] = [
      s,
      e
    ]);
    const { screenX: i, screenY: r } = e, { screenX: a, screenY: o } = s, h = l(this, Ki), { touch0X: c, touch0Y: u, touch1X: d, touch1Y: g } = h, f = d - c, p = g - u, v = a - i, b = o - r, _ = Math.hypot(v, b) || 1, S = Math.hypot(f, p) || 1;
    if (!l(this, Kn) && Math.abs(S - _) <= B0.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    if (h.touch0X = i, h.touch0Y = r, h.touch1X = a, h.touch1Y = o, n.preventDefault(), !l(this, Kn)) {
      m(this, Kn, true);
      return;
    }
    const x = [
      (i + a) / 2,
      (r + o) / 2
    ];
    (t = l(this, Iu)) == null || t.call(this, x, S, _);
  }, sg = function(n) {
    var t;
    l(this, Hr).abort(), m(this, Hr, null), (t = l(this, Fu)) == null || t.call(this), l(this, Ki) && (n.preventDefault(), m(this, Ki, null), m(this, Kn, false));
  };
  let H0 = B0;
  var Jn, Ys, vt, Ro, zr, gc, Zn, ce, ta, ar, yn, ju, Oa, oe, fc, ea, xr, fi, Io, Fo, es, gn, pc, Hg, it, zg, Nu, Vg, Bl, z0, Cm, ig, Hl, Gg, V0, G0, X0, Xg, U0, Ug, Y0, $0, q0, Yg, Ph;
  const At = class Yt {
    constructor(t) {
      y(this, it), y(this, Jn, null), y(this, Ys, null), y(this, vt, null), y(this, Ro, false), y(this, zr, null), y(this, gc, ""), y(this, Zn, false), y(this, ce, null), y(this, ta, null), y(this, ar, null), y(this, yn, null), y(this, ju, ""), y(this, Oa, false), y(this, oe, null), y(this, fc, false), y(this, ea, false), y(this, xr, false), y(this, fi, null), y(this, Io, 0), y(this, Fo, 0), y(this, es, null), y(this, gn, null), Y(this, "_editToolbar", null), Y(this, "_initialOptions", /* @__PURE__ */ Object.create(null)), Y(this, "_initialData", null), Y(this, "_isVisible", true), Y(this, "_uiManager", null), Y(this, "_focusEventsAllowed", true), y(this, pc, false), y(this, Hg, Yt._zIndex++), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
      const { rotation: e, rawDims: { pageWidth: s, pageHeight: i, pageX: r, pageY: a } } = this.parent.viewport;
      this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
        s,
        i
      ], this.pageTranslation = [
        r,
        a
      ];
      const [o, h] = this.parentDimensions;
      this.x = t.x / o, this.y = t.y / h, this.isAttachedToDOM = false, this.deleted = false;
    }
    static get _resizerKeyboardManager() {
      const t = Yt.prototype._resizeWithKeyboard, e = al.TRANSLATE_SMALL, s = al.TRANSLATE_BIG;
      return Z(this, "_resizerKeyboardManager", new gl([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t,
          {
            args: [
              -e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t,
          {
            args: [
              -s,
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t,
          {
            args: [
              e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t,
          {
            args: [
              s,
              0
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -s
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              s
            ]
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          Yt.prototype._stopResizingWithKeyboard
        ]
      ]));
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return Z(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t) {
      const e = new Ux({
        id: t.parent.getNextId(),
        parent: t.parent,
        uiManager: t._uiManager
      });
      e.annotationElementId = t.annotationElementId, e.deleted = true, e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t, e) {
      if (Yt._l10n ?? (Yt._l10n = t), Yt._l10nResizer || (Yt._l10nResizer = Object.freeze({
        topLeft: "pdfjs-editor-resizer-top-left",
        topMiddle: "pdfjs-editor-resizer-top-middle",
        topRight: "pdfjs-editor-resizer-top-right",
        middleRight: "pdfjs-editor-resizer-middle-right",
        bottomRight: "pdfjs-editor-resizer-bottom-right",
        bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
        bottomLeft: "pdfjs-editor-resizer-bottom-left",
        middleLeft: "pdfjs-editor-resizer-middle-left"
      })), Yt._borderLineWidth !== -1) return;
      const s = getComputedStyle(document.documentElement);
      Yt._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t, e) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t) {
      return false;
    }
    static paste(t, e) {
      ut("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return l(this, pc);
    }
    set _isDraggable(t) {
      var e;
      m(this, pc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t, e] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
          break;
        case 180:
          this.x += this.width / 2, this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
          break;
        default:
          this.x -= this.width / 2, this.y -= this.height / 2;
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(t) {
      this._uiManager.addCommands(t);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = l(this, Hg);
    }
    setParent(t) {
      t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : w(this, it, Ph).call(this), this.parent = t;
    }
    focusin(t) {
      this._focusEventsAllowed && (l(this, Oa) ? m(this, Oa, false) : this.parent.setSelected(this));
    }
    focusout(t) {
      var e;
      if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
      const s = t.relatedTarget;
      s != null && s.closest(`#${this.id}`) || (t.preventDefault(), (e = this.parent) != null && e.isMultipleSelection || this.commitOrRemove());
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t, e, s, i) {
      const [r, a] = this.parentDimensions;
      [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
    }
    translate(t, e) {
      w(this, it, zg).call(this, this.parentDimensions, t, e);
    }
    translateInPage(t, e) {
      l(this, oe) || m(this, oe, [
        this.x,
        this.y,
        this.width,
        this.height
      ]), w(this, it, zg).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
        block: "nearest"
      });
    }
    drag(t, e) {
      l(this, oe) || m(this, oe, [
        this.x,
        this.y,
        this.width,
        this.height
      ]);
      const { div: s, parentDimensions: [i, r] } = this;
      if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: d, y: g } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, d, g) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
      }
      let { x: a, y: o } = this;
      const [h, c] = this.getBaseTranslation();
      a += h, o += c;
      const { style: u } = s;
      u.left = `${(100 * a).toFixed(2)}%`, u.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
        block: "nearest"
      });
    }
    _onTranslating(t, e) {
    }
    _onTranslated(t, e) {
    }
    get _hasBeenMoved() {
      return !!l(this, oe) && (l(this, oe)[0] !== this.x || l(this, oe)[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!l(this, oe) && (l(this, oe)[2] !== this.width || l(this, oe)[3] !== this.height);
    }
    getBaseTranslation() {
      const [t, e] = this.parentDimensions, { _borderLineWidth: s } = Yt, i = s / t, r = s / e;
      switch (this.rotation) {
        case 90:
          return [
            -i,
            r
          ];
        case 180:
          return [
            i,
            r
          ];
        case 270:
          return [
            i,
            -r
          ];
        default:
          return [
            -i,
            -r
          ];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t = this.rotation) {
      const { div: { style: e }, pageDimensions: [s, i] } = this;
      let { x: r, y: a, width: o, height: h } = this;
      if (o *= s, h *= i, r *= s, a *= i, this._mustFixPosition) switch (t) {
        case 0:
          r = Math.max(0, Math.min(s - o, r)), a = Math.max(0, Math.min(i - h, a));
          break;
        case 90:
          r = Math.max(0, Math.min(s - h, r)), a = Math.min(i, Math.max(o, a));
          break;
        case 180:
          r = Math.min(s, Math.max(o, r)), a = Math.min(i, Math.max(h, a));
          break;
        case 270:
          r = Math.min(s, Math.max(h, r)), a = Math.max(0, Math.min(i - o, a));
          break;
      }
      this.x = r /= s, this.y = a /= i;
      const [c, u] = this.getBaseTranslation();
      r += c, a += u, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
    }
    screenToPageTranslation(t, e) {
      var s;
      return w(s = Yt, Nu, Vg).call(s, t, e, this.parentRotation);
    }
    pageTranslationToScreen(t, e) {
      var s;
      return w(s = Yt, Nu, Vg).call(s, t, e, 360 - this.parentRotation);
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t, pageDimensions: [e, s] } = this;
      return [
        e * t,
        s * t
      ];
    }
    setDims(t, e) {
      const [s, i] = this.parentDimensions, { style: r } = this.div;
      r.width = `${(100 * t / s).toFixed(2)}%`, l(this, Zn) || (r.height = `${(100 * e / i).toFixed(2)}%`);
    }
    fixDims() {
      const { style: t } = this.div, { height: e, width: s } = t, i = s.endsWith("%"), r = !l(this, Zn) && e.endsWith("%");
      if (i && r) return;
      const [a, o] = this.parentDimensions;
      i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !l(this, Zn) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
    }
    getInitialTranslation() {
      return [
        0,
        0
      ];
    }
    _onResized() {
    }
    static _round(t) {
      return Math.round(t * 1e4) / 1e4;
    }
    _onResizing() {
    }
    altTextFinish() {
      var t;
      (t = l(this, vt)) == null || t.finish();
    }
    async addEditToolbar() {
      return this._editToolbar || l(this, ea) ? this._editToolbar : (this._editToolbar = new Bx(this), this.div.append(this._editToolbar.render()), l(this, vt) && await this._editToolbar.addAltText(l(this, vt)), this._editToolbar);
    }
    removeEditToolbar() {
      var t;
      this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (t = l(this, vt)) == null || t.destroy());
    }
    addContainer(t) {
      var e;
      const s = (e = this._editToolbar) == null ? void 0 : e.div;
      s ? s.before(t) : this.div.append(t);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    async addAltTextButton() {
      l(this, vt) || (xm.initialize(Yt._l10n), m(this, vt, new xm(this)), l(this, Jn) && (l(this, vt).data = l(this, Jn), m(this, Jn, null)), await this.addEditToolbar());
    }
    get altTextData() {
      var t;
      return (t = l(this, vt)) == null ? void 0 : t.data;
    }
    set altTextData(t) {
      l(this, vt) && (l(this, vt).data = t);
    }
    get guessedAltText() {
      var t;
      return (t = l(this, vt)) == null ? void 0 : t.guessedText;
    }
    async setGuessedAltText(t) {
      var e;
      await ((e = l(this, vt)) == null ? void 0 : e.setGuessedText(t));
    }
    serializeAltText(t) {
      var e;
      return (e = l(this, vt)) == null ? void 0 : e.serialize(t);
    }
    hasAltText() {
      return !!l(this, vt) && !l(this, vt).isEmpty();
    }
    hasAltTextData() {
      var t;
      return ((t = l(this, vt)) == null ? void 0 : t.hasData()) ?? false;
    }
    render() {
      var t;
      this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = l(this, Ro) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), w(this, it, Ug).call(this);
      const [e, s] = this.parentDimensions;
      this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
      const [i, r] = this.getInitialTranslation();
      return this.translate(i, r), Tu(this, this.div, [
        "pointerdown"
      ]), this.isResizable && this._uiManager._supportsPinchToZoom && (l(this, gn) || m(this, gn, new H0({
        container: this.div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: w(this, it, V0).bind(this),
        onPinching: w(this, it, G0).bind(this),
        onPinchEnd: w(this, it, X0).bind(this),
        signal: this._uiManager._signal
      }))), (t = this._uiManager._editorUndoBar) == null || t.hide(), this.div;
    }
    pointerdown(t) {
      const { isMac: e } = Ee.platform;
      if (t.button !== 0 || t.ctrlKey && e) {
        t.preventDefault();
        return;
      }
      if (m(this, Oa, true), this._isDraggable) {
        w(this, it, U0).call(this, t);
        return;
      }
      w(this, it, Xg).call(this, t);
    }
    get isSelected() {
      return this._uiManager.isSelected(this);
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      l(this, fi) && clearTimeout(l(this, fi)), m(this, fi, setTimeout(() => {
        var t;
        m(this, fi, null), (t = this.parent) == null || t.moveEditorInDOM(this);
      }, 0));
    }
    _setParentAndPosition(t, e, s) {
      t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t, e, s = this.rotation) {
      const i = this.parentScale, [r, a] = this.pageDimensions, [o, h] = this.pageTranslation, c = t / i, u = e / i, d = this.x * r, g = this.y * a, f = this.width * r, p = this.height * a;
      switch (s) {
        case 0:
          return [
            d + c + o,
            a - g - u - p + h,
            d + c + f + o,
            a - g - u + h
          ];
        case 90:
          return [
            d + u + o,
            a - g + c + h,
            d + u + p + o,
            a - g + c + f + h
          ];
        case 180:
          return [
            d - c - f + o,
            a - g + u + h,
            d - c + o,
            a - g + u + p + h
          ];
        case 270:
          return [
            d - u - p + o,
            a - g - c - f + h,
            d - u + o,
            a - g - c + h
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t, e) {
      const [s, i, r, a] = t, o = r - s, h = a - i;
      switch (this.rotation) {
        case 0:
          return [
            s,
            e - a,
            o,
            h
          ];
        case 90:
          return [
            s,
            e - i,
            h,
            o
          ];
        case 180:
          return [
            r,
            e - i,
            o,
            h
          ];
        case 270:
          return [
            r,
            e - a,
            h,
            o
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    onceAdded(t) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      m(this, ea, true);
    }
    disableEditMode() {
      m(this, ea, false);
    }
    isInEditMode() {
      return l(this, ea);
    }
    shouldGetKeyboardEvents() {
      return l(this, xr);
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t, left: e, bottom: s, right: i } = this.getClientDimensions(), { innerHeight: r, innerWidth: a } = window;
      return e < a && i > 0 && t < r && s > 0;
    }
    rebuild() {
      w(this, it, Ug).call(this);
    }
    rotate(t) {
    }
    resize() {
    }
    serializeDeleted() {
      var t;
      return {
        id: this.annotationElementId,
        deleted: true,
        pageIndex: this.pageIndex,
        popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
      };
    }
    serialize(t = false, e = null) {
      ut("An editor must be serializable");
    }
    static async deserialize(t, e, s) {
      const i = new this.prototype.constructor({
        parent: e,
        id: e.getNextId(),
        uiManager: s
      });
      i.rotation = t.rotation, m(i, Jn, t.accessibilityData);
      const [r, a] = i.pageDimensions, [o, h, c, u] = i.getRectInCurrentCoords(t.rect, a);
      return i.x = o / r, i.y = h / a, i.width = c / r, i.height = u / a, i;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
    }
    remove() {
      var t, e;
      if ((t = l(this, yn)) == null || t.abort(), m(this, yn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), l(this, fi) && (clearTimeout(l(this, fi)), m(this, fi, null)), w(this, it, Ph).call(this), this.removeEditToolbar(), l(this, es)) {
        for (const s of l(this, es).values()) clearTimeout(s);
        m(this, es, null);
      }
      this.parent = null, (e = l(this, gn)) == null || e.destroy(), m(this, gn, null);
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      this.isResizable && (w(this, it, z0).call(this), l(this, ce).classList.remove("hidden"), Tu(this, this.div, [
        "keydown"
      ]));
    }
    get toolbarPosition() {
      return null;
    }
    keydown(t) {
      if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
      this._uiManager.setSelected(this), m(this, ar, {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      });
      const e = l(this, ce).children;
      if (!l(this, Ys)) {
        m(this, Ys, Array.from(e));
        const a = w(this, it, Y0).bind(this), o = w(this, it, $0).bind(this), h = this._uiManager._signal;
        for (const c of l(this, Ys)) {
          const u = c.getAttribute("data-resizer-name");
          c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", a, {
            signal: h
          }), c.addEventListener("blur", o, {
            signal: h
          }), c.addEventListener("focus", w(this, it, q0).bind(this, u), {
            signal: h
          }), c.setAttribute("data-l10n-id", Yt._l10nResizer[u]);
        }
      }
      const s = l(this, Ys)[0];
      let i = 0;
      for (const a of e) {
        if (a === s) break;
        i++;
      }
      const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (l(this, Ys).length / 4);
      if (r !== i) {
        if (r < i) for (let o = 0; o < i - r; o++) l(this, ce).append(l(this, ce).firstChild);
        else if (r > i) for (let o = 0; o < r - i; o++) l(this, ce).firstChild.before(l(this, ce).lastChild);
        let a = 0;
        for (const o of e) {
          const h = l(this, Ys)[a++].getAttribute("data-resizer-name");
          o.setAttribute("data-l10n-id", Yt._l10nResizer[h]);
        }
      }
      w(this, it, Yg).call(this, 0), m(this, xr, true), l(this, ce).firstChild.focus({
        focusVisible: true
      }), t.preventDefault(), t.stopImmediatePropagation();
    }
    _resizeWithKeyboard(t, e) {
      l(this, xr) && w(this, it, Gg).call(this, l(this, ju), {
        deltaX: t,
        deltaY: e,
        fromKeyboard: true
      });
    }
    _stopResizingWithKeyboard() {
      w(this, it, Ph).call(this), this.div.focus();
    }
    select() {
      var t, e, s;
      if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
        this.addEditToolbar().then(() => {
          var i, r;
          (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
        });
        return;
      }
      (e = this._editToolbar) == null || e.show(), (s = l(this, vt)) == null || s.toggleAltTextBadge(false);
    }
    unselect() {
      var t, e, s, i, r;
      (t = l(this, ce)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
        preventScroll: true
      }), (i = this._editToolbar) == null || i.hide(), (r = l(this, vt)) == null || r.toggleAltTextBadge(true);
    }
    updateParams(t, e) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    enterInEditMode() {
    }
    getImageForAltText() {
      return null;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return l(this, fc);
    }
    set isEditing(t) {
      m(this, fc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    setAspectRatio(t, e) {
      m(this, Zn, true);
      const s = t / e, { style: i } = this.div;
      i.aspectRatio = s, i.height = "auto";
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return {
        action: "added"
      };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t, e = false) {
      if (e) {
        l(this, es) || m(this, es, /* @__PURE__ */ new Map());
        const { action: s } = t;
        let i = l(this, es).get(s);
        i && clearTimeout(i), i = setTimeout(() => {
          this._reportTelemetry(t), l(this, es).delete(s), l(this, es).size === 0 && m(this, es, null);
        }, Yt._telemetryTimeout), l(this, es).set(s, i);
        return;
      }
      t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
        source: this,
        details: {
          type: "editing",
          data: t
        }
      });
    }
    show(t = this._isVisible) {
      this.div.classList.toggle("hidden", !t), this._isVisible = t;
    }
    enable() {
      this.div && (this.div.tabIndex = 0), m(this, Ro, false);
    }
    disable() {
      this.div && (this.div.tabIndex = -1), m(this, Ro, true);
    }
    renderAnnotationElement(t) {
      let e = t.container.querySelector(".annotationContent");
      if (!e) e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
      else if (e.nodeName === "CANVAS") {
        const s = e;
        e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
      }
      return e;
    }
    resetAnnotationElement(t) {
      const { firstChild: e } = t.container;
      (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
    }
  };
  Jn = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), gc = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakMap(), Hg = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakSet(), zg = function([n, t], e, s) {
    [e, s] = this.screenToPageTranslation(e, s), this.x += e / n, this.y += s / t, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
  }, Nu = /* @__PURE__ */ new WeakSet(), Vg = function(n, t, e) {
    switch (e) {
      case 90:
        return [
          t,
          -n
        ];
      case 180:
        return [
          -n,
          -t
        ];
      case 270:
        return [
          -t,
          n
        ];
      default:
        return [
          n,
          t
        ];
    }
  }, Bl = function(n) {
    switch (n) {
      case 90: {
        const [t, e] = this.pageDimensions;
        return [
          0,
          -t / e,
          e / t,
          0
        ];
      }
      case 180:
        return [
          -1,
          0,
          0,
          -1
        ];
      case 270: {
        const [t, e] = this.pageDimensions;
        return [
          0,
          t / e,
          -e / t,
          0
        ];
      }
      default:
        return [
          1,
          0,
          0,
          1
        ];
    }
  }, z0 = function() {
    if (l(this, ce)) return;
    m(this, ce, document.createElement("div")), l(this, ce).classList.add("resizers");
    const n = this._willKeepAspectRatio ? [
      "topLeft",
      "topRight",
      "bottomRight",
      "bottomLeft"
    ] : [
      "topLeft",
      "topMiddle",
      "topRight",
      "middleRight",
      "bottomRight",
      "bottomMiddle",
      "bottomLeft",
      "middleLeft"
    ], t = this._uiManager._signal;
    for (const e of n) {
      const s = document.createElement("div");
      l(this, ce).append(s), s.classList.add("resizer", e), s.setAttribute("data-resizer-name", e), s.addEventListener("pointerdown", w(this, it, Cm).bind(this, e), {
        signal: t
      }), s.addEventListener("contextmenu", Rs, {
        signal: t
      }), s.tabIndex = -1;
    }
    this.div.prepend(l(this, ce));
  }, Cm = function(n, t) {
    var e;
    t.preventDefault();
    const { isMac: s } = Ee.platform;
    if (t.button !== 0 || t.ctrlKey && s) return;
    (e = l(this, vt)) == null || e.toggle(false);
    const i = this._isDraggable;
    this._isDraggable = false, m(this, ta, [
      t.screenX,
      t.screenY
    ]);
    const r = new AbortController(), a = this._uiManager.combinedSignal(r);
    this.parent.togglePointerEvents(false), window.addEventListener("pointermove", w(this, it, Gg).bind(this, n), {
      passive: true,
      capture: true,
      signal: a
    }), window.addEventListener("touchmove", qe, {
      passive: false,
      signal: a
    }), window.addEventListener("contextmenu", Rs, {
      signal: a
    }), m(this, ar, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const o = this.parent.div.style.cursor, h = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(t.target).cursor;
    const c = () => {
      var u;
      r.abort(), this.parent.togglePointerEvents(true), (u = l(this, vt)) == null || u.toggle(true), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = h, w(this, it, Hl).call(this);
    };
    window.addEventListener("pointerup", c, {
      signal: a
    }), window.addEventListener("blur", c, {
      signal: a
    });
  }, ig = function(n, t, e, s) {
    this.width = e, this.height = s, this.x = n, this.y = t;
    const [i, r] = this.parentDimensions;
    this.setDims(i * e, r * s), this.fixAndSetPosition(), this._onResized();
  }, Hl = function() {
    if (!l(this, ar)) return;
    const { savedX: n, savedY: t, savedWidth: e, savedHeight: s } = l(this, ar);
    m(this, ar, null);
    const i = this.x, r = this.y, a = this.width, o = this.height;
    i === n && r === t && a === e && o === s || this.addCommands({
      cmd: w(this, it, ig).bind(this, i, r, a, o),
      undo: w(this, it, ig).bind(this, n, t, e, s),
      mustExec: true
    });
  }, Gg = function(n, t) {
    const [e, s] = this.parentDimensions, i = this.x, r = this.y, a = this.width, o = this.height, h = At.MIN_SIZE / e, c = At.MIN_SIZE / s, u = w(this, it, Bl).call(this, this.rotation), d = (j, R) => [
      u[0] * j + u[2] * R,
      u[1] * j + u[3] * R
    ], g = w(this, it, Bl).call(this, 360 - this.rotation), f = (j, R) => [
      g[0] * j + g[2] * R,
      g[1] * j + g[3] * R
    ];
    let p, v, b = false, _ = false;
    switch (n) {
      case "topLeft":
        b = true, p = (j, R) => [
          0,
          0
        ], v = (j, R) => [
          j,
          R
        ];
        break;
      case "topMiddle":
        p = (j, R) => [
          j / 2,
          0
        ], v = (j, R) => [
          j / 2,
          R
        ];
        break;
      case "topRight":
        b = true, p = (j, R) => [
          j,
          0
        ], v = (j, R) => [
          0,
          R
        ];
        break;
      case "middleRight":
        _ = true, p = (j, R) => [
          j,
          R / 2
        ], v = (j, R) => [
          0,
          R / 2
        ];
        break;
      case "bottomRight":
        b = true, p = (j, R) => [
          j,
          R
        ], v = (j, R) => [
          0,
          0
        ];
        break;
      case "bottomMiddle":
        p = (j, R) => [
          j / 2,
          R
        ], v = (j, R) => [
          j / 2,
          0
        ];
        break;
      case "bottomLeft":
        b = true, p = (j, R) => [
          0,
          R
        ], v = (j, R) => [
          j,
          0
        ];
        break;
      case "middleLeft":
        _ = true, p = (j, R) => [
          0,
          R / 2
        ], v = (j, R) => [
          j,
          R / 2
        ];
        break;
    }
    const S = p(a, o), x = v(a, o);
    let C = d(...x);
    const T = At._round(i + C[0]), O = At._round(r + C[1]);
    let E = 1, D = 1, F, L;
    if (t.fromKeyboard) ({ deltaX: F, deltaY: L } = t);
    else {
      const { screenX: j, screenY: R } = t, [st, J] = l(this, ta);
      [F, L] = this.screenToPageTranslation(j - st, R - J), l(this, ta)[0] = j, l(this, ta)[1] = R;
    }
    if ([F, L] = f(F / e, L / s), b) {
      const j = Math.hypot(a, o);
      E = D = Math.max(Math.min(Math.hypot(x[0] - S[0] - F, x[1] - S[1] - L) / j, 1 / a, 1 / o), h / a, c / o);
    } else _ ? E = Math.max(h, Math.min(1, Math.abs(x[0] - S[0] - F))) / a : D = Math.max(c, Math.min(1, Math.abs(x[1] - S[1] - L))) / o;
    const N = At._round(a * E), P = At._round(o * D);
    C = d(...v(N, P));
    const I = T - C[0], W = O - C[1];
    l(this, oe) || m(this, oe, [
      this.x,
      this.y,
      this.width,
      this.height
    ]), this.width = N, this.height = P, this.x = I, this.y = W, this.setDims(e * N, s * P), this.fixAndSetPosition(), this._onResizing();
  }, V0 = function() {
    var n;
    m(this, ar, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    }), (n = l(this, vt)) == null || n.toggle(false), this.parent.togglePointerEvents(false);
  }, G0 = function(n, t, e) {
    let s = 0.7 * (e / t) + 1 - 0.7;
    if (s === 1) return;
    const i = w(this, it, Bl).call(this, this.rotation), r = (C, T) => [
      i[0] * C + i[2] * T,
      i[1] * C + i[3] * T
    ], [a, o] = this.parentDimensions, h = this.x, c = this.y, u = this.width, d = this.height, g = At.MIN_SIZE / a, f = At.MIN_SIZE / o;
    s = Math.max(Math.min(s, 1 / u, 1 / d), g / u, f / d);
    const p = At._round(u * s), v = At._round(d * s);
    if (p === u && v === d) return;
    l(this, oe) || m(this, oe, [
      h,
      c,
      u,
      d
    ]);
    const b = r(u / 2, d / 2), _ = At._round(h + b[0]), S = At._round(c + b[1]), x = r(p / 2, v / 2);
    this.x = _ - x[0], this.y = S - x[1], this.width = p, this.height = v, this.setDims(a * p, o * v), this.fixAndSetPosition(), this._onResizing();
  }, X0 = function() {
    var n;
    (n = l(this, vt)) == null || n.toggle(true), this.parent.togglePointerEvents(true), w(this, it, Hl).call(this);
  }, Xg = function(n) {
    const { isMac: t } = Ee.platform;
    n.ctrlKey && !t || n.shiftKey || n.metaKey && t ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  }, U0 = function(n) {
    const { isSelected: t } = this;
    this._uiManager.setUpDragSession();
    let e = false;
    const s = new AbortController(), i = this._uiManager.combinedSignal(s), r = {
      capture: true,
      passive: false,
      signal: i
    }, a = (h) => {
      s.abort(), m(this, zr, null), m(this, Oa, false), this._uiManager.endDragSession() || w(this, it, Xg).call(this, h), e && this._onStopDragging();
    };
    t && (m(this, Io, n.clientX), m(this, Fo, n.clientY), m(this, zr, n.pointerId), m(this, gc, n.pointerType), window.addEventListener("pointermove", (h) => {
      e || (e = true, this._onStartDragging());
      const { clientX: c, clientY: u, pointerId: d } = h;
      if (d !== l(this, zr)) {
        qe(h);
        return;
      }
      const [g, f] = this.screenToPageTranslation(c - l(this, Io), u - l(this, Fo));
      m(this, Io, c), m(this, Fo, u), this._uiManager.dragSelectedEditors(g, f);
    }, r), window.addEventListener("touchmove", qe, r), window.addEventListener("pointerdown", (h) => {
      h.pointerType === l(this, gc) && (l(this, gn) || h.isPrimary) && a(h), qe(h);
    }, r));
    const o = (h) => {
      if (!l(this, zr) || l(this, zr) === h.pointerId) {
        a(h);
        return;
      }
      qe(h);
    };
    window.addEventListener("pointerup", o, {
      signal: i
    }), window.addEventListener("blur", o, {
      signal: i
    });
  }, Ug = function() {
    if (l(this, yn) || !this.div) return;
    m(this, yn, new AbortController());
    const n = this._uiManager.combinedSignal(l(this, yn));
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: n
    }), this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: n
    });
  }, Y0 = function(n) {
    At._resizerKeyboardManager.exec(this, n);
  }, $0 = function(n) {
    var t;
    l(this, xr) && ((t = n.relatedTarget) == null ? void 0 : t.parentNode) !== l(this, ce) && w(this, it, Ph).call(this);
  }, q0 = function(n) {
    m(this, ju, l(this, xr) ? n : "");
  }, Yg = function(n) {
    if (l(this, Ys)) for (const t of l(this, Ys)) t.tabIndex = n;
  }, Ph = function() {
    m(this, xr, false), w(this, it, Yg).call(this, -1), w(this, it, Hl).call(this);
  }, y(At, Nu), Y(At, "_l10n", null), Y(At, "_l10nResizer", null), Y(At, "_borderLineWidth", -1), Y(At, "_colorManager", new Xx()), Y(At, "_zIndex", 1), Y(At, "_telemetryTimeout", 1e3);
  let Mt = At;
  class Ux extends Mt {
    constructor(t) {
      super(t), this.annotationElementId = t.annotationElementId, this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  }
  const Am = 3285377520, Ze = 4294901760, js = 65535;
  class K0 {
    constructor(t) {
      this.h1 = t ? t & 4294967295 : Am, this.h2 = t ? t & 4294967295 : Am;
    }
    update(t) {
      let e, s;
      if (typeof t == "string") {
        e = new Uint8Array(t.length * 2), s = 0;
        for (let v = 0, b = t.length; v < b; v++) {
          const _ = t.charCodeAt(v);
          _ <= 255 ? e[s++] = _ : (e[s++] = _ >>> 8, e[s++] = _ & 255);
        }
      } else if (ArrayBuffer.isView(t)) e = t.slice(), s = e.byteLength;
      else throw new Error("Invalid data format, must be a string or TypedArray.");
      const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
      let o = 0, h = 0, c = this.h1, u = this.h2;
      const d = 3432918353, g = 461845907, f = d & js, p = g & js;
      for (let v = 0; v < i; v++) v & 1 ? (o = a[v], o = o * d & Ze | o * f & js, o = o << 15 | o >>> 17, o = o * g & Ze | o * p & js, c ^= o, c = c << 13 | c >>> 19, c = c * 5 + 3864292196) : (h = a[v], h = h * d & Ze | h * f & js, h = h << 15 | h >>> 17, h = h * g & Ze | h * p & js, u ^= h, u = u << 13 | u >>> 19, u = u * 5 + 3864292196);
      switch (o = 0, r) {
        case 3:
          o ^= e[i * 4 + 2] << 16;
        case 2:
          o ^= e[i * 4 + 1] << 8;
        case 1:
          o ^= e[i * 4], o = o * d & Ze | o * f & js, o = o << 15 | o >>> 17, o = o * g & Ze | o * p & js, i & 1 ? c ^= o : u ^= o;
      }
      this.h1 = c, this.h2 = u;
    }
    hexdigest() {
      let t = this.h1, e = this.h2;
      return t ^= e >>> 1, t = t * 3981806797 & Ze | t * 36045 & js, e = e * 4283543511 & Ze | ((e << 16 | t >>> 16) * 2950163797 & Ze) >>> 16, t ^= e >>> 1, t = t * 444984403 & Ze | t * 60499 & js, e = e * 3301882366 & Ze | ((e << 16 | t >>> 16) * 3120437893 & Ze) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
    }
  }
  const $g = Object.freeze({
    map: null,
    hash: "",
    transfer: void 0
  });
  var Ya, sa, $t, qg, Q0;
  class wp {
    constructor() {
      y(this, qg), y(this, Ya, false), y(this, sa, null), y(this, $t, /* @__PURE__ */ new Map()), this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
    }
    getValue(t, e) {
      const s = l(this, $t).get(t);
      return s === void 0 ? e : Object.assign(e, s);
    }
    getRawValue(t) {
      return l(this, $t).get(t);
    }
    remove(t) {
      if (l(this, $t).delete(t), l(this, $t).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
        for (const e of l(this, $t).values()) if (e instanceof Mt) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(t, e) {
      const s = l(this, $t).get(t);
      let i = false;
      if (s !== void 0) for (const [r, a] of Object.entries(e)) s[r] !== a && (i = true, s[r] = a);
      else i = true, l(this, $t).set(t, e);
      i && w(this, qg, Q0).call(this), e instanceof Mt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
    }
    has(t) {
      return l(this, $t).has(t);
    }
    getAll() {
      return l(this, $t).size > 0 ? gp(l(this, $t)) : null;
    }
    setAll(t) {
      for (const [e, s] of Object.entries(t)) this.setValue(e, s);
    }
    get size() {
      return l(this, $t).size;
    }
    resetModified() {
      l(this, Ya) && (m(this, Ya, false), typeof this.onResetModified == "function" && this.onResetModified());
    }
    get print() {
      return new J0(this);
    }
    get serializable() {
      if (l(this, $t).size === 0) return $g;
      const t = /* @__PURE__ */ new Map(), e = new K0(), s = [], i = /* @__PURE__ */ Object.create(null);
      let r = false;
      for (const [a, o] of l(this, $t)) {
        const h = o instanceof Mt ? o.serialize(false, i) : o;
        h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), r || (r = !!h.bitmap));
      }
      if (r) for (const a of t.values()) a.bitmap && s.push(a.bitmap);
      return t.size > 0 ? {
        map: t,
        hash: e.hexdigest(),
        transfer: s
      } : $g;
    }
    get editorStats() {
      let t = null;
      const e = /* @__PURE__ */ new Map();
      for (const s of l(this, $t).values()) {
        if (!(s instanceof Mt)) continue;
        const i = s.telemetryFinalData;
        if (!i) continue;
        const { type: r } = i;
        e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
        const a = t[r] || (t[r] = /* @__PURE__ */ new Map());
        for (const [o, h] of Object.entries(i)) {
          if (o === "type") continue;
          let c = a.get(o);
          c || (c = /* @__PURE__ */ new Map(), a.set(o, c));
          const u = c.get(h) ?? 0;
          c.set(h, u + 1);
        }
      }
      for (const [s, i] of e) t[s] = i.computeTelemetryFinalData(t[s]);
      return t;
    }
    resetModifiedIds() {
      m(this, sa, null);
    }
    get modifiedIds() {
      if (l(this, sa)) return l(this, sa);
      const t = [];
      for (const e of l(this, $t).values()) !(e instanceof Mt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
      return m(this, sa, {
        ids: new Set(t),
        hash: t.join(",")
      });
    }
  }
  Ya = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), qg = /* @__PURE__ */ new WeakSet(), Q0 = function() {
    l(this, Ya) || (m(this, Ya, true), typeof this.onSetModified == "function" && this.onSetModified());
  };
  var mc;
  class J0 extends wp {
    constructor(t) {
      super(), y(this, mc);
      const { map: e, hash: s, transfer: i } = t.serializable, r = structuredClone(e, i ? {
        transfer: i
      } : null);
      m(this, mc, {
        map: r,
        hash: s,
        transfer: i
      });
    }
    get print() {
      ut("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return l(this, mc);
    }
    get modifiedIds() {
      return Z(this, "modifiedIds", {
        ids: /* @__PURE__ */ new Set(),
        hash: ""
      });
    }
  }
  mc = /* @__PURE__ */ new WeakMap();
  var jo;
  class Yx {
    constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
      y(this, jo, /* @__PURE__ */ new Set()), this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t) {
      this.nativeFontFaces.add(t), this._document.fonts.add(t);
    }
    removeNativeFontFace(t) {
      this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
    }
    insertRule(t) {
      this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
      const e = this.styleElement.sheet;
      e.insertRule(t, e.cssRules.length);
    }
    clear() {
      for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
      this.nativeFontFaces.clear(), l(this, jo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t, _inspectFont: e }) {
      if (!(!t || l(this, jo).has(t.loadedName))) {
        if (Ft(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
          const { loadedName: s, src: i, style: r } = t, a = new FontFace(s, i, r);
          this.addNativeFontFace(a);
          try {
            await a.load(), l(this, jo).add(s), e == null ? void 0 : e(t);
          } catch {
            Q(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
          }
          return;
        }
        ut("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t) {
      if (t.attached || t.missingFile && !t.systemFontInfo) return;
      if (t.attached = true, t.systemFontInfo) {
        await this.loadSystemFont(t);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const s = t.createNativeFontFace();
        if (s) {
          this.addNativeFontFace(s);
          try {
            await s.loaded;
          } catch (i) {
            throw Q(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = true, i;
          }
        }
        return;
      }
      const e = t.createFontFaceRule();
      if (e) {
        if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
        await new Promise((s) => {
          const i = this._queueLoadingCallback(s);
          this._prepareFontLoadEvent(t, i);
        });
      }
    }
    get isFontLoadingAPISupported() {
      var t;
      const e = !!((t = this._document) != null && t.fonts);
      return Z(this, "isFontLoadingAPISupported", e);
    }
    get isSyncFontLoadingSupported() {
      let t = false;
      return (pe || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = true), Z(this, "isSyncFontLoadingSupported", t);
    }
    _queueLoadingCallback(t) {
      function e() {
        for (Ft(!i.done, "completeRequest() cannot be called twice."), i.done = true; s.length > 0 && s[0].done; ) {
          const r = s.shift();
          setTimeout(r.callback, 0);
        }
      }
      const { loadingRequests: s } = this, i = {
        done: false,
        complete: e,
        callback: t
      };
      return s.push(i), i;
    }
    get _loadTestFont() {
      const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
      return Z(this, "_loadTestFont", t);
    }
    _prepareFontLoadEvent(t, e) {
      function s(x, C) {
        return x.charCodeAt(C) << 24 | x.charCodeAt(C + 1) << 16 | x.charCodeAt(C + 2) << 8 | x.charCodeAt(C + 3) & 255;
      }
      function i(x, C, T, O) {
        const E = x.substring(0, C), D = x.substring(C + T);
        return E + O + D;
      }
      let r, a;
      const o = this._document.createElement("canvas");
      o.width = 1, o.height = 1;
      const h = o.getContext("2d");
      let c = 0;
      function u(x, C) {
        if (++c > 30) {
          Q("Load test font never loaded."), C();
          return;
        }
        if (h.font = "30px " + x, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
          C();
          return;
        }
        setTimeout(u.bind(null, x, C));
      }
      const d = `lt${Date.now()}${this.loadTestFontId++}`;
      let g = this._loadTestFont;
      g = i(g, 976, d.length, d);
      const f = 16, p = 1482184792;
      let v = s(g, f);
      for (r = 0, a = d.length - 3; r < a; r += 4) v = v - p + s(d, r) | 0;
      r < d.length && (v = v - p + s(d + "XXX", r) | 0), g = i(g, f, 4, Ex(v));
      const b = `url(data:font/opentype;base64,${btoa(g)});`, _ = `@font-face {font-family:"${d}";src:${b}}`;
      this.insertRule(_);
      const S = this._document.createElement("div");
      S.style.visibility = "hidden", S.style.width = S.style.height = "10px", S.style.position = "absolute", S.style.top = S.style.left = "0px";
      for (const x of [
        t.loadedName,
        d
      ]) {
        const C = this._document.createElement("span");
        C.textContent = "Hi", C.style.fontFamily = x, S.append(C);
      }
      this._document.body.append(S), u(d, () => {
        S.remove(), e.complete();
      });
    }
  }
  jo = /* @__PURE__ */ new WeakMap();
  class $x {
    constructor(t, { disableFontFace: e = false, fontExtraProperties: s = false, inspectFont: i = null }) {
      this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
      for (const r in t) this[r] = t[r];
      this.disableFontFace = e === true, this.fontExtraProperties = s === true, this._inspectFont = i;
    }
    createNativeFontFace() {
      var t;
      if (!this.data || this.disableFontFace) return null;
      let e;
      if (!this.cssFontInfo) e = new FontFace(this.loadedName, this.data, {});
      else {
        const s = {
          weight: this.cssFontInfo.fontWeight
        };
        this.cssFontInfo.italicAngle && (s.style = `oblique ${this.cssFontInfo.italicAngle}deg`), e = new FontFace(this.cssFontInfo.fontFamily, this.data, s);
      }
      return (t = this._inspectFont) == null || t.call(this, this), e;
    }
    createFontFaceRule() {
      var t;
      if (!this.data || this.disableFontFace) return null;
      const e = `url(data:${this.mimetype};base64,${Ix(this.data)});`;
      let s;
      if (!this.cssFontInfo) s = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
      else {
        let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), s = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${e}}`;
      }
      return (t = this._inspectFont) == null || t.call(this, this, e), s;
    }
    getPathGenerator(t, e) {
      if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
      const s = this.loadedName + "_path_" + e;
      let i;
      try {
        i = t.get(s);
      } catch (a) {
        Q(`getPathGenerator - ignoring character: "${a}".`);
      }
      const r = new Path2D(i || "");
      return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
    }
  }
  const zl = {
    DATA: 1,
    ERROR: 2
  }, Lt = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };
  function km() {
  }
  function Ie(n) {
    if (n instanceof Mr || n instanceof kg || n instanceof nl || n instanceof fm || n instanceof Au || n instanceof Zd) return n;
    switch (n instanceof Error || typeof n == "object" && n !== null || ut('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), n.name) {
      case "AbortException":
        return new Mr(n.message);
      case "InvalidPDFException":
        return new kg(n.message);
      case "MissingPDFException":
        return new nl(n.message);
      case "PasswordException":
        return new fm(n.message, n.code);
      case "UnexpectedResponseException":
        return new Au(n.message, n.status);
      case "UnknownErrorException":
        return new Zd(n.message, n.details);
    }
    return new Zd(n.message, n.toString());
  }
  var No, or, Z0, Tm, Mm, Vl;
  class Wo {
    constructor(t, e, s) {
      y(this, or), y(this, No, new AbortController()), this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", w(this, or, Z0).bind(this), {
        signal: l(this, No).signal
      });
    }
    on(t, e) {
      const s = this.actionHandler;
      if (s[t]) throw new Error(`There is already an actionName called "${t}"`);
      s[t] = e;
    }
    send(t, e, s) {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e
      }, s);
    }
    sendWithPromise(t, e, s) {
      const i = this.callbackId++, r = Promise.withResolvers();
      this.callbackCapabilities[i] = r;
      try {
        this.comObj.postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId: i,
          data: e
        }, s);
      } catch (a) {
        r.reject(a);
      }
      return r.promise;
    }
    sendWithStream(t, e, s, i) {
      const r = this.streamId++, a = this.sourceName, o = this.targetName, h = this.comObj;
      return new ReadableStream({
        start: (c) => {
          const u = Promise.withResolvers();
          return this.streamControllers[r] = {
            controller: c,
            startCall: u,
            pullCall: null,
            cancelCall: null,
            isClosed: false
          }, h.postMessage({
            sourceName: a,
            targetName: o,
            action: t,
            streamId: r,
            data: e,
            desiredSize: c.desiredSize
          }, i), u.promise;
        },
        pull: (c) => {
          const u = Promise.withResolvers();
          return this.streamControllers[r].pullCall = u, h.postMessage({
            sourceName: a,
            targetName: o,
            stream: Lt.PULL,
            streamId: r,
            desiredSize: c.desiredSize
          }), u.promise;
        },
        cancel: (c) => {
          Ft(c instanceof Error, "cancel must have a valid reason");
          const u = Promise.withResolvers();
          return this.streamControllers[r].cancelCall = u, this.streamControllers[r].isClosed = true, h.postMessage({
            sourceName: a,
            targetName: o,
            stream: Lt.CANCEL,
            streamId: r,
            reason: Ie(c)
          }), u.promise;
        }
      }, s);
    }
    destroy() {
      var t;
      (t = l(this, No)) == null || t.abort(), m(this, No, null);
    }
  }
  No = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakSet(), Z0 = function({ data: n }) {
    if (n.targetName !== this.sourceName) return;
    if (n.stream) {
      w(this, or, Mm).call(this, n);
      return;
    }
    if (n.callback) {
      const e = n.callbackId, s = this.callbackCapabilities[e];
      if (!s) throw new Error(`Cannot resolve callback ${e}`);
      if (delete this.callbackCapabilities[e], n.callback === zl.DATA) s.resolve(n.data);
      else if (n.callback === zl.ERROR) s.reject(Ie(n.reason));
      else throw new Error("Unexpected callback case");
      return;
    }
    const t = this.actionHandler[n.action];
    if (!t) throw new Error(`Unknown action from worker: ${n.action}`);
    if (n.callbackId) {
      const e = this.sourceName, s = n.sourceName, i = this.comObj;
      Promise.try(t, n.data).then(function(r) {
        i.postMessage({
          sourceName: e,
          targetName: s,
          callback: zl.DATA,
          callbackId: n.callbackId,
          data: r
        });
      }, function(r) {
        i.postMessage({
          sourceName: e,
          targetName: s,
          callback: zl.ERROR,
          callbackId: n.callbackId,
          reason: Ie(r)
        });
      });
      return;
    }
    if (n.streamId) {
      w(this, or, Tm).call(this, n);
      return;
    }
    t(n.data);
  }, Tm = function(n) {
    const t = n.streamId, e = this.sourceName, s = n.sourceName, i = this.comObj, r = this, a = this.actionHandler[n.action], o = {
      enqueue(h, c = 1, u) {
        if (this.isCancelled) return;
        const d = this.desiredSize;
        this.desiredSize -= c, d > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), i.postMessage({
          sourceName: e,
          targetName: s,
          stream: Lt.ENQUEUE,
          streamId: t,
          chunk: h
        }, u);
      },
      close() {
        this.isCancelled || (this.isCancelled = true, i.postMessage({
          sourceName: e,
          targetName: s,
          stream: Lt.CLOSE,
          streamId: t
        }), delete r.streamSinks[t]);
      },
      error(h) {
        Ft(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, i.postMessage({
          sourceName: e,
          targetName: s,
          stream: Lt.ERROR,
          streamId: t,
          reason: Ie(h)
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: n.desiredSize,
      ready: null
    };
    o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[t] = o, Promise.try(a, n.data, o).then(function() {
      i.postMessage({
        sourceName: e,
        targetName: s,
        stream: Lt.START_COMPLETE,
        streamId: t,
        success: true
      });
    }, function(h) {
      i.postMessage({
        sourceName: e,
        targetName: s,
        stream: Lt.START_COMPLETE,
        streamId: t,
        reason: Ie(h)
      });
    });
  }, Mm = function(n) {
    const t = n.streamId, e = this.sourceName, s = n.sourceName, i = this.comObj, r = this.streamControllers[t], a = this.streamSinks[t];
    switch (n.stream) {
      case Lt.START_COMPLETE:
        n.success ? r.startCall.resolve() : r.startCall.reject(Ie(n.reason));
        break;
      case Lt.PULL_COMPLETE:
        n.success ? r.pullCall.resolve() : r.pullCall.reject(Ie(n.reason));
        break;
      case Lt.PULL:
        if (!a) {
          i.postMessage({
            sourceName: e,
            targetName: s,
            stream: Lt.PULL_COMPLETE,
            streamId: t,
            success: true
          });
          break;
        }
        a.desiredSize <= 0 && n.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = n.desiredSize, Promise.try(a.onPull || km).then(function() {
          i.postMessage({
            sourceName: e,
            targetName: s,
            stream: Lt.PULL_COMPLETE,
            streamId: t,
            success: true
          });
        }, function(h) {
          i.postMessage({
            sourceName: e,
            targetName: s,
            stream: Lt.PULL_COMPLETE,
            streamId: t,
            reason: Ie(h)
          });
        });
        break;
      case Lt.ENQUEUE:
        if (Ft(r, "enqueue should have stream controller"), r.isClosed) break;
        r.controller.enqueue(n.chunk);
        break;
      case Lt.CLOSE:
        if (Ft(r, "close should have stream controller"), r.isClosed) break;
        r.isClosed = true, r.controller.close(), w(this, or, Vl).call(this, r, t);
        break;
      case Lt.ERROR:
        Ft(r, "error should have stream controller"), r.controller.error(Ie(n.reason)), w(this, or, Vl).call(this, r, t);
        break;
      case Lt.CANCEL_COMPLETE:
        n.success ? r.cancelCall.resolve() : r.cancelCall.reject(Ie(n.reason)), w(this, or, Vl).call(this, r, t);
        break;
      case Lt.CANCEL:
        if (!a) break;
        const o = Ie(n.reason);
        Promise.try(a.onCancel || km, o).then(function() {
          i.postMessage({
            sourceName: e,
            targetName: s,
            stream: Lt.CANCEL_COMPLETE,
            streamId: t,
            success: true
          });
        }, function(h) {
          i.postMessage({
            sourceName: e,
            targetName: s,
            stream: Lt.CANCEL_COMPLETE,
            streamId: t,
            reason: Ie(h)
          });
        }), a.sinkCapability.reject(o), a.isCancelled = true, delete this.streamSinks[t];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }, Vl = async function(n, t) {
    var e, s, i;
    await Promise.allSettled([
      (e = n.startCall) == null ? void 0 : e.promise,
      (s = n.pullCall) == null ? void 0 : s.promise,
      (i = n.cancelCall) == null ? void 0 : i.promise
    ]), delete this.streamControllers[t];
  };
  var vc;
  class tb {
    constructor({ enableHWA: t = false }) {
      y(this, vc, false), m(this, vc, t);
    }
    create(t, e) {
      if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
      const s = this._createCanvas(t, e);
      return {
        canvas: s,
        context: s.getContext("2d", {
          willReadFrequently: !l(this, vc)
        })
      };
    }
    reset(t, e, s) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
      t.canvas.width = e, t.canvas.height = s;
    }
    destroy(t) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
    }
    _createCanvas(t, e) {
      ut("Abstract method `_createCanvas` called.");
    }
  }
  vc = /* @__PURE__ */ new WeakMap();
  class qx extends tb {
    constructor({ ownerDocument: t = globalThis.document, enableHWA: e = false }) {
      super({
        enableHWA: e
      }), this._document = t;
    }
    _createCanvas(t, e) {
      const s = this._document.createElement("canvas");
      return s.width = t, s.height = e, s;
    }
  }
  class eb {
    constructor({ baseUrl: t = null, isCompressed: e = true }) {
      this.baseUrl = t, this.isCompressed = e;
    }
    async fetch({ name: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
      if (!t) throw new Error("CMap name must be specified.");
      const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
      return this._fetch(e).then((s) => ({
        cMapData: s,
        isCompressed: this.isCompressed
      })).catch((s) => {
        throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
      });
    }
    async _fetch(t) {
      ut("Abstract method `_fetch` called.");
    }
  }
  class sb extends eb {
    async _fetch(t) {
      const e = await Od(t, this.isCompressed ? "arraybuffer" : "text");
      return e instanceof ArrayBuffer ? new Uint8Array(e) : Dd(e);
    }
  }
  class ib {
    addFilter(t) {
      return "none";
    }
    addHCMFilter(t, e) {
      return "none";
    }
    addAlphaFilter(t) {
      return "none";
    }
    addLuminosityFilter(t) {
      return "none";
    }
    addHighlightHCMFilter(t, e, s, i, r) {
      return "none";
    }
    destroy(t = false) {
    }
  }
  var ia, $a, fr, Qi, ye, wn, ra, G, re, Bo, Pa, bc, na, rb, Kg, aa, po, Ho, Qg, zo;
  class Kx extends ib {
    constructor({ docId: t, ownerDocument: e = globalThis.document }) {
      super(), y(this, G), y(this, ia), y(this, $a), y(this, fr), y(this, Qi), y(this, ye), y(this, wn), y(this, ra, 0), m(this, Qi, t), m(this, ye, e);
    }
    addFilter(t) {
      if (!t) return "none";
      let e = l(this, G, re).get(t);
      if (e) return e;
      const [s, i, r] = w(this, G, bc).call(this, t), a = t.length === 1 ? s : `${s}${i}${r}`;
      if (e = l(this, G, re).get(a), e) return l(this, G, re).set(t, e), e;
      const o = `g_${l(this, Qi)}_transfer_map_${Be(this, ra)._++}`, h = w(this, G, na).call(this, o);
      l(this, G, re).set(t, h), l(this, G, re).set(a, h);
      const c = w(this, G, aa).call(this, o);
      return w(this, G, Ho).call(this, s, i, r, c), h;
    }
    addHCMFilter(t, e) {
      var s;
      const i = `${t}-${e}`, r = "base";
      let a = l(this, G, Bo).get(r);
      if ((a == null ? void 0 : a.key) === i || (a ? ((s = a.filter) == null || s.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
        key: i,
        url: "none",
        filter: null
      }, l(this, G, Bo).set(r, a)), !t || !e)) return a.url;
      const o = w(this, G, zo).call(this, t);
      t = V.makeHexColor(...o);
      const h = w(this, G, zo).call(this, e);
      if (e = V.makeHexColor(...h), l(this, G, Pa).style.color = "", t === "#000000" && e === "#ffffff" || t === e) return a.url;
      const c = new Array(256);
      for (let p = 0; p <= 255; p++) {
        const v = p / 255;
        c[p] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      }
      const u = c.join(","), d = `g_${l(this, Qi)}_hcm_filter`, g = a.filter = w(this, G, aa).call(this, d);
      w(this, G, Ho).call(this, u, u, u, g), w(this, G, Kg).call(this, g);
      const f = (p, v) => {
        const b = o[p] / 255, _ = h[p] / 255, S = new Array(v + 1);
        for (let x = 0; x <= v; x++) S[x] = b + x / v * (_ - b);
        return S.join(",");
      };
      return w(this, G, Ho).call(this, f(0, 5), f(1, 5), f(2, 5), g), a.url = w(this, G, na).call(this, d), a.url;
    }
    addAlphaFilter(t) {
      let e = l(this, G, re).get(t);
      if (e) return e;
      const [s] = w(this, G, bc).call(this, [
        t
      ]), i = `alpha_${s}`;
      if (e = l(this, G, re).get(i), e) return l(this, G, re).set(t, e), e;
      const r = `g_${l(this, Qi)}_alpha_map_${Be(this, ra)._++}`, a = w(this, G, na).call(this, r);
      l(this, G, re).set(t, a), l(this, G, re).set(i, a);
      const o = w(this, G, aa).call(this, r);
      return w(this, G, Qg).call(this, s, o), a;
    }
    addLuminosityFilter(t) {
      let e = l(this, G, re).get(t || "luminosity");
      if (e) return e;
      let s, i;
      if (t ? ([s] = w(this, G, bc).call(this, [
        t
      ]), i = `luminosity_${s}`) : i = "luminosity", e = l(this, G, re).get(i), e) return l(this, G, re).set(t, e), e;
      const r = `g_${l(this, Qi)}_luminosity_map_${Be(this, ra)._++}`, a = w(this, G, na).call(this, r);
      l(this, G, re).set(t, a), l(this, G, re).set(i, a);
      const o = w(this, G, aa).call(this, r);
      return w(this, G, rb).call(this, o), t && w(this, G, Qg).call(this, s, o), a;
    }
    addHighlightHCMFilter(t, e, s, i, r) {
      var a;
      const o = `${e}-${s}-${i}-${r}`;
      let h = l(this, G, Bo).get(t);
      if ((h == null ? void 0 : h.key) === o || (h ? ((a = h.filter) == null || a.remove(), h.key = o, h.url = "none", h.filter = null) : (h = {
        key: o,
        url: "none",
        filter: null
      }, l(this, G, Bo).set(t, h)), !e || !s)) return h.url;
      const [c, u] = [
        e,
        s
      ].map(w(this, G, zo).bind(this));
      let d = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), g = Math.round(0.2126 * u[0] + 0.7152 * u[1] + 0.0722 * u[2]), [f, p] = [
        i,
        r
      ].map(w(this, G, zo).bind(this));
      g < d && ([d, g, f, p] = [
        g,
        d,
        p,
        f
      ]), l(this, G, Pa).style.color = "";
      const v = (S, x, C) => {
        const T = new Array(256), O = (g - d) / C, E = S / 255, D = (x - S) / (255 * C);
        let F = 0;
        for (let L = 0; L <= C; L++) {
          const N = Math.round(d + L * O), P = E + L * D;
          for (let I = F; I <= N; I++) T[I] = P;
          F = N + 1;
        }
        for (let L = F; L < 256; L++) T[L] = T[F - 1];
        return T.join(",");
      }, b = `g_${l(this, Qi)}_hcm_${t}_filter`, _ = h.filter = w(this, G, aa).call(this, b);
      return w(this, G, Kg).call(this, _), w(this, G, Ho).call(this, v(f[0], p[0], 5), v(f[1], p[1], 5), v(f[2], p[2], 5), _), h.url = w(this, G, na).call(this, b), h.url;
    }
    destroy(t = false) {
      var e, s, i, r;
      t && (e = l(this, wn)) != null && e.size || ((s = l(this, fr)) == null || s.parentNode.parentNode.remove(), m(this, fr, null), (i = l(this, $a)) == null || i.clear(), m(this, $a, null), (r = l(this, wn)) == null || r.clear(), m(this, wn, null), m(this, ra, 0));
    }
  }
  ia = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakSet(), re = function() {
    return l(this, $a) || m(this, $a, /* @__PURE__ */ new Map());
  }, Bo = function() {
    return l(this, wn) || m(this, wn, /* @__PURE__ */ new Map());
  }, Pa = function() {
    if (!l(this, fr)) {
      const n = l(this, ye).createElement("div"), { style: t } = n;
      t.visibility = "hidden", t.contain = "strict", t.width = t.height = 0, t.position = "absolute", t.top = t.left = 0, t.zIndex = -1;
      const e = l(this, ye).createElementNS(li, "svg");
      e.setAttribute("width", 0), e.setAttribute("height", 0), m(this, fr, l(this, ye).createElementNS(li, "defs")), n.append(e), e.append(l(this, fr)), l(this, ye).body.append(n);
    }
    return l(this, fr);
  }, bc = function(n) {
    if (n.length === 1) {
      const o = n[0], h = new Array(256);
      for (let u = 0; u < 256; u++) h[u] = o[u] / 255;
      const c = h.join(",");
      return [
        c,
        c,
        c
      ];
    }
    const [t, e, s] = n, i = new Array(256), r = new Array(256), a = new Array(256);
    for (let o = 0; o < 256; o++) i[o] = t[o] / 255, r[o] = e[o] / 255, a[o] = s[o] / 255;
    return [
      i.join(","),
      r.join(","),
      a.join(",")
    ];
  }, na = function(n) {
    if (l(this, ia) === void 0) {
      m(this, ia, "");
      const t = l(this, ye).URL;
      t !== l(this, ye).baseURI && (Pd(t) ? Q('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, ia, t.split("#", 1)[0]));
    }
    return `url(${l(this, ia)}#${n})`;
  }, rb = function(n) {
    const t = l(this, ye).createElementNS(li, "feColorMatrix");
    t.setAttribute("type", "matrix"), t.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), n.append(t);
  }, Kg = function(n) {
    const t = l(this, ye).createElementNS(li, "feColorMatrix");
    t.setAttribute("type", "matrix"), t.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), n.append(t);
  }, aa = function(n) {
    const t = l(this, ye).createElementNS(li, "filter");
    return t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("id", n), l(this, G, Pa).append(t), t;
  }, po = function(n, t, e) {
    const s = l(this, ye).createElementNS(li, t);
    s.setAttribute("type", "discrete"), s.setAttribute("tableValues", e), n.append(s);
  }, Ho = function(n, t, e, s) {
    const i = l(this, ye).createElementNS(li, "feComponentTransfer");
    s.append(i), w(this, G, po).call(this, i, "feFuncR", n), w(this, G, po).call(this, i, "feFuncG", t), w(this, G, po).call(this, i, "feFuncB", e);
  }, Qg = function(n, t) {
    const e = l(this, ye).createElementNS(li, "feComponentTransfer");
    t.append(e), w(this, G, po).call(this, e, "feFuncA", n);
  }, zo = function(n) {
    return l(this, G, Pa).style.color = n, bp(getComputedStyle(l(this, G, Pa)).getPropertyValue("color"));
  };
  class nb {
    constructor({ baseUrl: t = null }) {
      this.baseUrl = t;
    }
    async fetch({ filename: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
      if (!t) throw new Error("Font filename must be specified.");
      const e = `${this.baseUrl}${t}`;
      return this._fetch(e).catch((s) => {
        throw new Error(`Unable to load font data at: ${e}`);
      });
    }
    async _fetch(t) {
      ut("Abstract method `_fetch` called.");
    }
  }
  class ab extends nb {
    async _fetch(t) {
      const e = await Od(t, "arraybuffer");
      return new Uint8Array(e);
    }
  }
  pe && Q("Please use the `legacy` build in Node.js environments.");
  async function ob(n) {
    const t = await process.getBuiltinModule("fs").promises.readFile(n);
    return new Uint8Array(t);
  }
  class Qx extends ib {
  }
  class Jx extends tb {
    _createCanvas(t, e) {
      return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
    }
  }
  class Zx extends eb {
    async _fetch(t) {
      return ob(t);
    }
  }
  class tS extends nb {
    async _fetch(t) {
      return ob(t);
    }
  }
  const fe = {
    FILL: "Fill",
    STROKE: "Stroke",
    SHADING: "Shading"
  };
  function Jg(n, t) {
    if (!t) return;
    const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
    i.rect(t[0], t[1], e, s), n.clip(i);
  }
  class _p {
    getPattern() {
      ut("Abstract method `getPattern` called.");
    }
  }
  class eS extends _p {
    constructor(t) {
      super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
    }
    _createGradient(t) {
      let e;
      this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
      for (const s of this._colorStops) e.addColorStop(s[0], s[1]);
      return e;
    }
    getPattern(t, e, s, i) {
      let r;
      if (i === fe.STROKE || i === fe.FILL) {
        const a = e.current.getClippedPathBoundingBox(i, mt(t)) || [
          0,
          0,
          0,
          0
        ], o = Math.ceil(a[2] - a[0]) || 1, h = Math.ceil(a[3] - a[1]) || 1, c = e.cachedCanvases.getCanvas("pattern", o, h), u = c.context;
        u.clearRect(0, 0, u.canvas.width, u.canvas.height), u.beginPath(), u.rect(0, 0, u.canvas.width, u.canvas.height), u.translate(-a[0], -a[1]), s = V.transform(s, [
          1,
          0,
          0,
          1,
          a[0],
          a[1]
        ]), u.transform(...e.baseTransform), this.matrix && u.transform(...this.matrix), Jg(u, this._bbox), u.fillStyle = this._createGradient(u), u.fill(), r = t.createPattern(c.canvas, "no-repeat");
        const d = new DOMMatrix(s);
        r.setTransform(d);
      } else Jg(t, this._bbox), r = this._createGradient(t);
      return r;
    }
  }
  function rg(n, t, e, s, i, r, a, o) {
    const h = t.coords, c = t.colors, u = n.data, d = n.width * 4;
    let g;
    h[e + 1] > h[s + 1] && (g = e, e = s, s = g, g = r, r = a, a = g), h[s + 1] > h[i + 1] && (g = s, s = i, i = g, g = a, a = o, o = g), h[e + 1] > h[s + 1] && (g = e, e = s, s = g, g = r, r = a, a = g);
    const f = (h[e] + t.offsetX) * t.scaleX, p = (h[e + 1] + t.offsetY) * t.scaleY, v = (h[s] + t.offsetX) * t.scaleX, b = (h[s + 1] + t.offsetY) * t.scaleY, _ = (h[i] + t.offsetX) * t.scaleX, S = (h[i + 1] + t.offsetY) * t.scaleY;
    if (p >= S) return;
    const x = c[r], C = c[r + 1], T = c[r + 2], O = c[a], E = c[a + 1], D = c[a + 2], F = c[o], L = c[o + 1], N = c[o + 2], P = Math.round(p), I = Math.round(S);
    let W, j, R, st, J, _t, Dt, se;
    for (let Ot = P; Ot <= I; Ot++) {
      if (Ot < b) {
        const nt = Ot < p ? 0 : (p - Ot) / (p - b);
        W = f - (f - v) * nt, j = x - (x - O) * nt, R = C - (C - E) * nt, st = T - (T - D) * nt;
      } else {
        let nt;
        Ot > S ? nt = 1 : b === S ? nt = 0 : nt = (b - Ot) / (b - S), W = v - (v - _) * nt, j = O - (O - F) * nt, R = E - (E - L) * nt, st = D - (D - N) * nt;
      }
      let dt;
      Ot < p ? dt = 0 : Ot > S ? dt = 1 : dt = (p - Ot) / (p - S), J = f - (f - _) * dt, _t = x - (x - F) * dt, Dt = C - (C - L) * dt, se = T - (T - N) * dt;
      const ve = Math.round(Math.min(W, J)), vs = Math.round(Math.max(W, J));
      let Nt = d * Ot + ve * 4;
      for (let nt = ve; nt <= vs; nt++) dt = (W - nt) / (W - J), dt < 0 ? dt = 0 : dt > 1 && (dt = 1), u[Nt++] = j - (j - _t) * dt | 0, u[Nt++] = R - (R - Dt) * dt | 0, u[Nt++] = st - (st - se) * dt | 0, u[Nt++] = 255;
    }
  }
  function sS(n, t, e) {
    const s = t.coords, i = t.colors;
    let r, a;
    switch (t.type) {
      case "lattice":
        const o = t.verticesPerRow, h = Math.floor(s.length / o) - 1, c = o - 1;
        for (r = 0; r < h; r++) {
          let u = r * o;
          for (let d = 0; d < c; d++, u++) rg(n, e, s[u], s[u + 1], s[u + o], i[u], i[u + 1], i[u + o]), rg(n, e, s[u + o + 1], s[u + 1], s[u + o], i[u + o + 1], i[u + 1], i[u + o]);
        }
        break;
      case "triangles":
        for (r = 0, a = s.length; r < a; r += 3) rg(n, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  class iS extends _p {
    constructor(t) {
      super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
    }
    _createMeshCanvas(t, e, s) {
      const i = Math.floor(this._bounds[0]), r = Math.floor(this._bounds[1]), a = Math.ceil(this._bounds[2]) - i, o = Math.ceil(this._bounds[3]) - r, h = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3), c = Math.min(Math.ceil(Math.abs(o * t[1] * 1.1)), 3e3), u = a / h, d = o / c, g = {
        coords: this._coords,
        colors: this._colors,
        offsetX: -i,
        offsetY: -r,
        scaleX: 1 / u,
        scaleY: 1 / d
      }, f = h + 2 * 2, p = c + 2 * 2, v = s.getCanvas("mesh", f, p), b = v.context, _ = b.createImageData(h, c);
      if (e) {
        const S = _.data;
        for (let x = 0, C = S.length; x < C; x += 4) S[x] = e[0], S[x + 1] = e[1], S[x + 2] = e[2], S[x + 3] = 255;
      }
      for (const S of this._figures) sS(_, S, g);
      return b.putImageData(_, 2, 2), {
        canvas: v.canvas,
        offsetX: i - 2 * u,
        offsetY: r - 2 * d,
        scaleX: u,
        scaleY: d
      };
    }
    getPattern(t, e, s, i) {
      Jg(t, this._bbox);
      let r;
      if (i === fe.SHADING) r = V.singularValueDecompose2dScale(mt(t));
      else if (r = V.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
        const o = V.singularValueDecompose2dScale(this.matrix);
        r = [
          r[0] * o[0],
          r[1] * o[1]
        ];
      }
      const a = this._createMeshCanvas(r, i === fe.SHADING ? null : this._background, e.cachedCanvases);
      return i !== fe.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
    }
  }
  class rS extends _p {
    getPattern() {
      return "hotpink";
    }
  }
  function nS(n) {
    switch (n[0]) {
      case "RadialAxial":
        return new eS(n);
      case "Mesh":
        return new iS(n);
      case "Dummy":
        return new rS();
    }
    throw new Error(`Unknown IR type: ${n[0]}`);
  }
  const Em = {
    COLORED: 1,
    UNCOLORED: 2
  }, hb = class lb {
    constructor(t, e, s, i, r) {
      this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = r;
    }
    createPatternCanvas(t) {
      const { bbox: e, operatorList: s, paintType: i, tilingType: r, color: a, canvasGraphicsFactory: o } = this;
      let { xstep: h, ystep: c } = this;
      h = Math.abs(h), c = Math.abs(c), Ed("TilingType: " + r);
      const u = e[0], d = e[1], g = e[2], f = e[3], p = g - u, v = f - d, b = V.singularValueDecompose2dScale(this.matrix), _ = V.singularValueDecompose2dScale(this.baseTransform), S = b[0] * _[0], x = b[1] * _[1];
      let C = p, T = v, O = false, E = false;
      const D = Math.ceil(h * S), F = Math.ceil(c * x), L = Math.ceil(p * S), N = Math.ceil(v * x);
      D >= L ? C = h : O = true, F >= N ? T = c : E = true;
      const P = this.getSizeAndScale(C, this.ctx.canvas.width, S), I = this.getSizeAndScale(T, this.ctx.canvas.height, x), W = t.cachedCanvases.getCanvas("pattern", P.size, I.size), j = W.context, R = o.createCanvasGraphics(j);
      if (R.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(R, i, a), j.translate(-P.scale * u, -I.scale * d), R.transform(P.scale, 0, 0, I.scale, 0, 0), j.save(), this.clipBbox(R, u, d, g, f), R.baseTransform = mt(R.ctx), R.executeOperatorList(s), R.endDrawing(), j.restore(), O || E) {
        const st = W.canvas;
        O && (C = h), E && (T = c);
        const J = this.getSizeAndScale(C, this.ctx.canvas.width, S), _t = this.getSizeAndScale(T, this.ctx.canvas.height, x), Dt = J.size, se = _t.size, Ot = t.cachedCanvases.getCanvas("pattern-workaround", Dt, se), dt = Ot.context, ve = O ? Math.floor(p / h) : 0, vs = E ? Math.floor(v / c) : 0;
        for (let Nt = 0; Nt <= ve; Nt++) for (let nt = 0; nt <= vs; nt++) dt.drawImage(st, Dt * Nt, se * nt, Dt, se, 0, 0, Dt, se);
        return {
          canvas: Ot.canvas,
          scaleX: J.scale,
          scaleY: _t.scale,
          offsetX: u,
          offsetY: d
        };
      }
      return {
        canvas: W.canvas,
        scaleX: P.scale,
        scaleY: I.scale,
        offsetX: u,
        offsetY: d
      };
    }
    getSizeAndScale(t, e, s) {
      const i = Math.max(lb.MAX_PATTERN_SIZE, e);
      let r = Math.ceil(t * s);
      return r >= i ? r = i : s = r / t, {
        scale: s,
        size: r
      };
    }
    clipBbox(t, e, s, i, r) {
      const a = i - e, o = r - s;
      t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(mt(t.ctx), [
        e,
        s,
        i,
        r
      ]), t.clip(), t.endPath();
    }
    setFillAndStrokeStyleToContext(t, e, s) {
      const i = t.ctx, r = t.current;
      switch (e) {
        case Em.COLORED:
          const a = this.ctx;
          i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, r.fillColor = a.fillStyle, r.strokeColor = a.strokeStyle;
          break;
        case Em.UNCOLORED:
          const o = V.makeHexColor(s[0], s[1], s[2]);
          i.fillStyle = o, i.strokeStyle = o, r.fillColor = o, r.strokeColor = o;
          break;
        default:
          throw new Mx(`Unsupported paint type: ${e}`);
      }
    }
    getPattern(t, e, s, i) {
      let r = s;
      i !== fe.SHADING && (r = V.transform(r, e.baseTransform), this.matrix && (r = V.transform(r, this.matrix)));
      const a = this.createPatternCanvas(e);
      let o = new DOMMatrix(r);
      o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
      const h = t.createPattern(a.canvas, "repeat");
      return h.setTransform(o), h;
    }
  };
  Y(hb, "MAX_PATTERN_SIZE", 3e3);
  let aS = hb;
  function oS({ src: n, srcPos: t = 0, dest: e, width: s, height: i, nonBlackColor: r = 4294967295, inverseDecode: a = false }) {
    const o = Ee.isLittleEndian ? 4278190080 : 255, [h, c] = a ? [
      r,
      o
    ] : [
      o,
      r
    ], u = s >> 3, d = s & 7, g = n.length;
    e = new Uint32Array(e.buffer);
    let f = 0;
    for (let p = 0; p < i; p++) {
      for (const b = t + u; t < b; t++) {
        const _ = t < g ? n[t] : 255;
        e[f++] = _ & 128 ? c : h, e[f++] = _ & 64 ? c : h, e[f++] = _ & 32 ? c : h, e[f++] = _ & 16 ? c : h, e[f++] = _ & 8 ? c : h, e[f++] = _ & 4 ? c : h, e[f++] = _ & 2 ? c : h, e[f++] = _ & 1 ? c : h;
      }
      if (d === 0) continue;
      const v = t < g ? n[t++] : 255;
      for (let b = 0; b < d; b++) e[f++] = v & 1 << 7 - b ? c : h;
    }
    return {
      srcPos: t,
      destPos: f
    };
  }
  const Dm = 16, Om = 100, hS = 15, Pm = 10, Lm = 1e3, je = 16;
  function lS(n, t) {
    if (n._removeMirroring) throw new Error("Context is already forwarding operations.");
    n.__originalSave = n.save, n.__originalRestore = n.restore, n.__originalRotate = n.rotate, n.__originalScale = n.scale, n.__originalTranslate = n.translate, n.__originalTransform = n.transform, n.__originalSetTransform = n.setTransform, n.__originalResetTransform = n.resetTransform, n.__originalClip = n.clip, n.__originalMoveTo = n.moveTo, n.__originalLineTo = n.lineTo, n.__originalBezierCurveTo = n.bezierCurveTo, n.__originalRect = n.rect, n.__originalClosePath = n.closePath, n.__originalBeginPath = n.beginPath, n._removeMirroring = () => {
      n.save = n.__originalSave, n.restore = n.__originalRestore, n.rotate = n.__originalRotate, n.scale = n.__originalScale, n.translate = n.__originalTranslate, n.transform = n.__originalTransform, n.setTransform = n.__originalSetTransform, n.resetTransform = n.__originalResetTransform, n.clip = n.__originalClip, n.moveTo = n.__originalMoveTo, n.lineTo = n.__originalLineTo, n.bezierCurveTo = n.__originalBezierCurveTo, n.rect = n.__originalRect, n.closePath = n.__originalClosePath, n.beginPath = n.__originalBeginPath, delete n._removeMirroring;
    }, n.save = function() {
      t.save(), this.__originalSave();
    }, n.restore = function() {
      t.restore(), this.__originalRestore();
    }, n.translate = function(e, s) {
      t.translate(e, s), this.__originalTranslate(e, s);
    }, n.scale = function(e, s) {
      t.scale(e, s), this.__originalScale(e, s);
    }, n.transform = function(e, s, i, r, a, o) {
      t.transform(e, s, i, r, a, o), this.__originalTransform(e, s, i, r, a, o);
    }, n.setTransform = function(e, s, i, r, a, o) {
      t.setTransform(e, s, i, r, a, o), this.__originalSetTransform(e, s, i, r, a, o);
    }, n.resetTransform = function() {
      t.resetTransform(), this.__originalResetTransform();
    }, n.rotate = function(e) {
      t.rotate(e), this.__originalRotate(e);
    }, n.clip = function(e) {
      t.clip(e), this.__originalClip(e);
    }, n.moveTo = function(e, s) {
      t.moveTo(e, s), this.__originalMoveTo(e, s);
    }, n.lineTo = function(e, s) {
      t.lineTo(e, s), this.__originalLineTo(e, s);
    }, n.bezierCurveTo = function(e, s, i, r, a, o) {
      t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
    }, n.rect = function(e, s, i, r) {
      t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
    }, n.closePath = function() {
      t.closePath(), this.__originalClosePath();
    }, n.beginPath = function() {
      t.beginPath(), this.__originalBeginPath();
    };
  }
  class cS {
    constructor(t) {
      this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
    }
    getCanvas(t, e, s) {
      let i;
      return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
    }
    delete(t) {
      delete this.cache[t];
    }
    clear() {
      for (const t in this.cache) {
        const e = this.cache[t];
        this.canvasFactory.destroy(e), delete this.cache[t];
      }
    }
  }
  function Gl(n, t, e, s, i, r, a, o, h, c) {
    const [u, d, g, f, p, v] = mt(n);
    if (d === 0 && g === 0) {
      const S = a * u + p, x = Math.round(S), C = o * f + v, T = Math.round(C), O = (a + h) * u + p, E = Math.abs(Math.round(O) - x) || 1, D = (o + c) * f + v, F = Math.abs(Math.round(D) - T) || 1;
      return n.setTransform(Math.sign(u), 0, 0, Math.sign(f), x, T), n.drawImage(t, e, s, i, r, 0, 0, E, F), n.setTransform(u, d, g, f, p, v), [
        E,
        F
      ];
    }
    if (u === 0 && f === 0) {
      const S = o * g + p, x = Math.round(S), C = a * d + v, T = Math.round(C), O = (o + c) * g + p, E = Math.abs(Math.round(O) - x) || 1, D = (a + h) * d + v, F = Math.abs(Math.round(D) - T) || 1;
      return n.setTransform(0, Math.sign(d), Math.sign(g), 0, x, T), n.drawImage(t, e, s, i, r, 0, 0, F, E), n.setTransform(u, d, g, f, p, v), [
        F,
        E
      ];
    }
    n.drawImage(t, e, s, i, r, a, o, h, c);
    const b = Math.hypot(u, d), _ = Math.hypot(g, f);
    return [
      b * h,
      _ * c
    ];
  }
  function uS(n) {
    const { width: t, height: e } = n;
    if (t > Lm || e > Lm) return null;
    const s = 1e3, i = new Uint8Array([
      0,
      2,
      4,
      0,
      1,
      0,
      5,
      4,
      8,
      10,
      0,
      8,
      0,
      2,
      1,
      0
    ]), r = t + 1;
    let a = new Uint8Array(r * (e + 1)), o, h, c;
    const u = t + 7 & -8;
    let d = new Uint8Array(u * e), g = 0;
    for (const b of n.data) {
      let _ = 128;
      for (; _ > 0; ) d[g++] = b & _ ? 0 : 255, _ >>= 1;
    }
    let f = 0;
    for (g = 0, d[g] !== 0 && (a[0] = 1, ++f), h = 1; h < t; h++) d[g] !== d[g + 1] && (a[h] = d[g] ? 2 : 1, ++f), g++;
    for (d[g] !== 0 && (a[h] = 2, ++f), o = 1; o < e; o++) {
      g = o * u, c = o * r, d[g - u] !== d[g] && (a[c] = d[g] ? 1 : 8, ++f);
      let b = (d[g] ? 4 : 0) + (d[g - u] ? 8 : 0);
      for (h = 1; h < t; h++) b = (b >> 2) + (d[g + 1] ? 4 : 0) + (d[g - u + 1] ? 8 : 0), i[b] && (a[c + h] = i[b], ++f), g++;
      if (d[g - u] !== d[g] && (a[c + h] = d[g] ? 2 : 4, ++f), f > s) return null;
    }
    for (g = u * (e - 1), c = o * r, d[g] !== 0 && (a[c] = 8, ++f), h = 1; h < t; h++) d[g] !== d[g + 1] && (a[c + h] = d[g] ? 4 : 8, ++f), g++;
    if (d[g] !== 0 && (a[c + h] = 4, ++f), f > s) return null;
    const p = new Int32Array([
      0,
      r,
      -1,
      0,
      -r,
      0,
      0,
      0,
      1
    ]), v = new Path2D();
    for (o = 0; f && o <= e; o++) {
      let b = o * r;
      const _ = b + t;
      for (; b < _ && !a[b]; ) b++;
      if (b === _) continue;
      v.moveTo(b % r, o);
      const S = b;
      let x = a[b];
      do {
        const C = p[x];
        do
          b += C;
        while (!a[b]);
        const T = a[b];
        T !== 5 && T !== 10 ? (x = T, a[b] = 0) : (x = T & 51 * x >> 4, a[b] &= x >> 2 | x << 2), v.lineTo(b % r, b / r | 0), a[b] || --f;
      } while (S !== b);
      --o;
    }
    return d = null, a = null, function(b) {
      b.save(), b.scale(1 / t, -1 / e), b.translate(0, -e), b.fill(v), b.beginPath(), b.restore();
    };
  }
  class Rm {
    constructor(t, e) {
      this.alphaIsShape = false, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = _0, this.textMatrixScale = 1, this.fontMatrix = Ag, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = ie.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = false, this.patternStroke = false, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([
        0,
        0,
        t,
        e
      ]);
    }
    clone() {
      const t = Object.create(this);
      return t.clipBox = this.clipBox.slice(), t;
    }
    setCurrentPoint(t, e) {
      this.x = t, this.y = e;
    }
    updatePathMinMax(t, e, s) {
      [e, s] = V.applyTransform([
        e,
        s
      ], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
    }
    updateRectMinMax(t, e) {
      const s = V.applyTransform(e, t), i = V.applyTransform(e.slice(2), t), r = V.applyTransform([
        e[0],
        e[3]
      ], t), a = V.applyTransform([
        e[2],
        e[1]
      ], t);
      this.minX = Math.min(this.minX, s[0], i[0], r[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], r[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], r[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], r[1], a[1]);
    }
    updateScalingPathMinMax(t, e) {
      V.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
    }
    updateCurvePathMinMax(t, e, s, i, r, a, o, h, c, u) {
      const d = V.bezierBoundingBox(e, s, i, r, a, o, h, c, u);
      u || this.updateRectMinMax(t, d);
    }
    getPathBoundingBox(t = fe.FILL, e = null) {
      const s = [
        this.minX,
        this.minY,
        this.maxX,
        this.maxY
      ];
      if (t === fe.STROKE) {
        e || ut("Stroke bounding box must include transform.");
        const i = V.singularValueDecompose2dScale(e), r = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
        s[0] -= r, s[1] -= a, s[2] += r, s[3] += a;
      }
      return s;
    }
    updateClipFromPath() {
      const t = V.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t || [
        0,
        0,
        0,
        0
      ]);
    }
    isEmptyClip() {
      return this.minX === 1 / 0;
    }
    startNewPathAndClipBox(t) {
      this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
    }
    getClippedPathBoundingBox(t = fe.FILL, e = null) {
      return V.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
  }
  function Im(n, t) {
    if (t instanceof ImageData) {
      n.putImageData(t, 0, 0);
      return;
    }
    const e = t.height, s = t.width, i = e % je, r = (e - i) / je, a = i === 0 ? r : r + 1, o = n.createImageData(s, je);
    let h = 0, c;
    const u = t.data, d = o.data;
    let g, f, p, v;
    if (t.kind === Ql.GRAYSCALE_1BPP) {
      const b = u.byteLength, _ = new Uint32Array(d.buffer, 0, d.byteLength >> 2), S = _.length, x = s + 7 >> 3, C = 4294967295, T = Ee.isLittleEndian ? 4278190080 : 255;
      for (g = 0; g < a; g++) {
        for (p = g < r ? je : i, c = 0, f = 0; f < p; f++) {
          const O = b - h;
          let E = 0;
          const D = O > x ? s : O * 8 - 7, F = D & -8;
          let L = 0, N = 0;
          for (; E < F; E += 8) N = u[h++], _[c++] = N & 128 ? C : T, _[c++] = N & 64 ? C : T, _[c++] = N & 32 ? C : T, _[c++] = N & 16 ? C : T, _[c++] = N & 8 ? C : T, _[c++] = N & 4 ? C : T, _[c++] = N & 2 ? C : T, _[c++] = N & 1 ? C : T;
          for (; E < D; E++) L === 0 && (N = u[h++], L = 128), _[c++] = N & L ? C : T, L >>= 1;
        }
        for (; c < S; ) _[c++] = 0;
        n.putImageData(o, 0, g * je);
      }
    } else if (t.kind === Ql.RGBA_32BPP) {
      for (f = 0, v = s * je * 4, g = 0; g < r; g++) d.set(u.subarray(h, h + v)), h += v, n.putImageData(o, 0, f), f += je;
      g < a && (v = s * i * 4, d.set(u.subarray(h, h + v)), n.putImageData(o, 0, f));
    } else if (t.kind === Ql.RGB_24BPP) for (p = je, v = s * p, g = 0; g < a; g++) {
      for (g >= r && (p = i, v = s * p), c = 0, f = v; f--; ) d[c++] = u[h++], d[c++] = u[h++], d[c++] = u[h++], d[c++] = 255;
      n.putImageData(o, 0, g * je);
    }
    else throw new Error(`bad image kind: ${t.kind}`);
  }
  function Fm(n, t) {
    if (t.bitmap) {
      n.drawImage(t.bitmap, 0, 0);
      return;
    }
    const e = t.height, s = t.width, i = e % je, r = (e - i) / je, a = i === 0 ? r : r + 1, o = n.createImageData(s, je);
    let h = 0;
    const c = t.data, u = o.data;
    for (let d = 0; d < a; d++) {
      const g = d < r ? je : i;
      ({ srcPos: h } = oS({
        src: c,
        srcPos: h,
        dest: u,
        width: s,
        height: g,
        nonBlackColor: 0
      })), n.putImageData(o, 0, d * je);
    }
  }
  function mo(n, t) {
    const e = [
      "strokeStyle",
      "fillStyle",
      "fillRule",
      "globalAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "globalCompositeOperation",
      "font",
      "filter"
    ];
    for (const s of e) n[s] !== void 0 && (t[s] = n[s]);
    n.setLineDash !== void 0 && (t.setLineDash(n.getLineDash()), t.lineDashOffset = n.lineDashOffset);
  }
  function Xl(n) {
    if (n.strokeStyle = n.fillStyle = "#000000", n.fillRule = "nonzero", n.globalAlpha = 1, n.lineWidth = 1, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 10, n.globalCompositeOperation = "source-over", n.font = "10px sans-serif", n.setLineDash !== void 0 && (n.setLineDash([]), n.lineDashOffset = 0), !pe) {
      const { filter: t } = n;
      t !== "none" && t !== "" && (n.filter = "none");
    }
  }
  function jm(n, t) {
    if (t) return true;
    const e = V.singularValueDecompose2dScale(n);
    e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
    const s = Math.fround((globalThis.devicePixelRatio || 1) * no.PDF_TO_CSS_UNITS);
    return e[0] <= s && e[1] <= s;
  }
  const dS = [
    "butt",
    "round",
    "square"
  ], gS = [
    "miter",
    "round",
    "bevel"
  ], fS = {}, Nm = {};
  var Ji, Zg, tf, ef;
  const pS = class cb {
    constructor(t, e, s, i, r, { optionalContentConfig: a, markedContentStack: o = null }, h, c) {
      y(this, Ji), this.ctx = t, this.current = new Rm(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new cS(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = c, this._cachedScaleForStroking = [
        -1,
        0
      ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
    }
    getObject(t, e = null) {
      return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
    }
    beginDrawing({ transform: t, viewport: e, transparency: s = false, background: i = null }) {
      const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
      if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
        const h = this.cachedCanvases.getCanvas("transparent", r, a);
        this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...mt(this.compositeCtx));
      }
      this.ctx.save(), Xl(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = mt(this.ctx);
    }
    executeOperatorList(t, e, s, i) {
      const r = t.argsArray, a = t.fnArray;
      let o = e || 0;
      const h = r.length;
      if (h === o) return o;
      const c = h - o > Pm && typeof s == "function", u = c ? Date.now() + hS : 0;
      let d = 0;
      const g = this.commonObjs, f = this.objs;
      let p;
      for (; ; ) {
        if (i !== void 0 && o === i.nextBreakPoint) return i.breakIt(o, s), o;
        if (p = a[o], p !== ks.dependency) this[p].apply(this, r[o]);
        else for (const v of r[o]) {
          const b = v.startsWith("g_") ? g : f;
          if (!b.has(v)) return b.get(v, s), o;
        }
        if (o++, o === h) return o;
        if (c && ++d > Pm) {
          if (Date.now() > u) return s(), o;
          d = 0;
        }
      }
    }
    endDrawing() {
      w(this, Ji, Zg).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
      for (const t of this._cachedBitmapsMap.values()) {
        for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
        t.clear();
      }
      this._cachedBitmapsMap.clear(), w(this, Ji, tf).call(this);
    }
    _scaleImage(t, e) {
      const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
      let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, h = i, c = "prescale1", u, d;
      for (; r > 2 && o > 1 || a > 2 && h > 1; ) {
        let g = o, f = h;
        r > 2 && o > 1 && (g = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / g), a > 2 && h > 1 && (f = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, a /= h / f), u = this.cachedCanvases.getCanvas(c, g, f), d = u.context, d.clearRect(0, 0, g, f), d.drawImage(t, 0, 0, o, h, 0, 0, g, f), t = u.canvas, o = g, h = f, c = c === "prescale1" ? "prescale2" : "prescale1";
      }
      return {
        img: t,
        paintWidth: o,
        paintHeight: h
      };
    }
    _createMaskCanvas(t) {
      const e = this.ctx, { width: s, height: i } = t, r = this.current.fillColor, a = this.current.patternFill, o = mt(e);
      let h, c, u, d;
      if ((t.bitmap || t.data) && t.count > 1) {
        const D = t.bitmap || t.data.buffer;
        c = JSON.stringify(a ? o : [
          o.slice(0, 4),
          r
        ]), h = this._cachedBitmapsMap.get(D), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(D, h));
        const F = h.get(c);
        if (F && !a) {
          const L = Math.round(Math.min(o[0], o[2]) + o[4]), N = Math.round(Math.min(o[1], o[3]) + o[5]);
          return {
            canvas: F,
            offsetX: L,
            offsetY: N
          };
        }
        u = F;
      }
      u || (d = this.cachedCanvases.getCanvas("maskCanvas", s, i), Fm(d.context, t));
      let g = V.transform(o, [
        1 / s,
        0,
        0,
        -1 / i,
        0,
        0
      ]);
      g = V.transform(g, [
        1,
        0,
        0,
        1,
        0,
        -i
      ]);
      const [f, p, v, b] = V.getAxialAlignedBoundingBox([
        0,
        0,
        s,
        i
      ], g), _ = Math.round(v - f) || 1, S = Math.round(b - p) || 1, x = this.cachedCanvases.getCanvas("fillCanvas", _, S), C = x.context, T = f, O = p;
      C.translate(-T, -O), C.transform(...g), u || (u = this._scaleImage(d.canvas, Fs(C)), u = u.img, h && a && h.set(c, u)), C.imageSmoothingEnabled = jm(mt(C), t.interpolate), Gl(C, u, 0, 0, u.width, u.height, 0, 0, s, i), C.globalCompositeOperation = "source-in";
      const E = V.transform(Fs(C), [
        1,
        0,
        0,
        1,
        -T,
        -O
      ]);
      return C.fillStyle = a ? r.getPattern(e, this, E, fe.FILL) : r, C.fillRect(0, 0, s, i), h && !a && (this.cachedCanvases.delete("fillCanvas"), h.set(c, x.canvas)), {
        canvas: x.canvas,
        offsetX: Math.round(T),
        offsetY: Math.round(O)
      };
    }
    setLineWidth(t) {
      t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
    }
    setLineCap(t) {
      this.ctx.lineCap = dS[t];
    }
    setLineJoin(t) {
      this.ctx.lineJoin = gS[t];
    }
    setMiterLimit(t) {
      this.ctx.miterLimit = t;
    }
    setDash(t, e) {
      const s = this.ctx;
      s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
    }
    setRenderingIntent(t) {
    }
    setFlatness(t) {
    }
    setGState(t) {
      for (const [e, s] of t) switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    checkSMaskState() {
      const t = this.inSMaskMode;
      this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
    }
    beginSMaskMode() {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
      this.suspendedCtx = this.ctx, this.ctx = i.context;
      const r = this.ctx;
      r.setTransform(...mt(this.suspendedCtx)), mo(this.suspendedCtx, r), lS(r, this.suspendedCtx), this.setGState([
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ]
      ]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring(), mo(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
    }
    compose(t) {
      if (!this.current.activeSMask) return;
      t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      ];
      const e = this.current.activeSMask, s = this.suspendedCtx;
      this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t, e, s, i) {
      const r = i[0], a = i[1], o = i[2] - r, h = i[3] - a;
      o === 0 || h === 0 || (this.genericComposeSMask(e.context, s, o, h, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
    }
    genericComposeSMask(t, e, s, i, r, a, o, h, c, u, d) {
      let g = t.canvas, f = h - u, p = c - d;
      if (a) {
        const b = V.makeHexColor(...a);
        if (f < 0 || p < 0 || f + s > g.width || p + i > g.height) {
          const _ = this.cachedCanvases.getCanvas("maskExtension", s, i), S = _.context;
          S.drawImage(g, -f, -p), S.globalCompositeOperation = "destination-atop", S.fillStyle = b, S.fillRect(0, 0, s, i), S.globalCompositeOperation = "source-over", g = _.canvas, f = p = 0;
        } else {
          t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
          const _ = new Path2D();
          _.rect(f, p, s, i), t.clip(_), t.globalCompositeOperation = "destination-atop", t.fillStyle = b, t.fillRect(f, p, s, i), t.restore();
        }
      }
      e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
      const v = new Path2D();
      v.rect(h, c, s, i), e.clip(v), e.globalCompositeOperation = "destination-in", e.drawImage(g, f, p, s, i, h, c, s, i), e.restore();
    }
    save() {
      this.inSMaskMode ? (mo(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
      const t = this.current;
      this.stateStack.push(t), this.current = t.clone();
    }
    restore() {
      this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), mo(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
    }
    transform(t, e, s, i, r, a) {
      this.ctx.transform(t, e, s, i, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t, e, s) {
      const i = this.ctx, r = this.current;
      let a = r.x, o = r.y, h, c;
      const u = mt(i), d = u[0] === 0 && u[3] === 0 || u[1] === 0 && u[2] === 0, g = d ? s.slice(0) : null;
      for (let f = 0, p = 0, v = t.length; f < v; f++) switch (t[f] | 0) {
        case ks.rectangle:
          a = e[p++], o = e[p++];
          const b = e[p++], _ = e[p++], S = a + b, x = o + _;
          i.moveTo(a, o), b === 0 || _ === 0 ? i.lineTo(S, x) : (i.lineTo(S, o), i.lineTo(S, x), i.lineTo(a, x)), d || r.updateRectMinMax(u, [
            a,
            o,
            S,
            x
          ]), i.closePath();
          break;
        case ks.moveTo:
          a = e[p++], o = e[p++], i.moveTo(a, o), d || r.updatePathMinMax(u, a, o);
          break;
        case ks.lineTo:
          a = e[p++], o = e[p++], i.lineTo(a, o), d || r.updatePathMinMax(u, a, o);
          break;
        case ks.curveTo:
          h = a, c = o, a = e[p + 4], o = e[p + 5], i.bezierCurveTo(e[p], e[p + 1], e[p + 2], e[p + 3], a, o), r.updateCurvePathMinMax(u, h, c, e[p], e[p + 1], e[p + 2], e[p + 3], a, o, g), p += 6;
          break;
        case ks.curveTo2:
          h = a, c = o, i.bezierCurveTo(a, o, e[p], e[p + 1], e[p + 2], e[p + 3]), r.updateCurvePathMinMax(u, h, c, a, o, e[p], e[p + 1], e[p + 2], e[p + 3], g), a = e[p + 2], o = e[p + 3], p += 4;
          break;
        case ks.curveTo3:
          h = a, c = o, a = e[p + 2], o = e[p + 3], i.bezierCurveTo(e[p], e[p + 1], a, o, a, o), r.updateCurvePathMinMax(u, h, c, e[p], e[p + 1], a, o, a, o, g), p += 4;
          break;
        case ks.closePath:
          i.closePath();
          break;
      }
      d && r.updateScalingPathMinMax(u, g), r.setCurrentPoint(a, o);
    }
    closePath() {
      this.ctx.closePath();
    }
    stroke(t = true) {
      const e = this.ctx, s = this.current.strokeColor;
      e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && s != null && s.getPattern ? (e.save(), e.strokeStyle = s.getPattern(e, this, Fs(e), fe.STROKE), this.rescaleAndStroke(false), e.restore()) : this.rescaleAndStroke(true)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
    }
    closeStroke() {
      this.closePath(), this.stroke();
    }
    fill(t = true) {
      const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
      let r = false;
      i && (e.save(), e.fillStyle = s.getPattern(e, this, Fs(e), fe.FILL), r = true);
      const a = this.current.getClippedPathBoundingBox();
      this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = false) : e.fill()), r && e.restore(), t && this.consumePath(a);
    }
    eoFill() {
      this.pendingEOFill = true, this.fill();
    }
    fillStroke() {
      this.fill(false), this.stroke(false), this.consumePath();
    }
    eoFillStroke() {
      this.pendingEOFill = true, this.fillStroke();
    }
    closeFillStroke() {
      this.closePath(), this.fillStroke();
    }
    closeEOFillStroke() {
      this.pendingEOFill = true, this.closePath(), this.fillStroke();
    }
    endPath() {
      this.consumePath();
    }
    clip() {
      this.pendingClip = fS;
    }
    eoClip() {
      this.pendingClip = Nm;
    }
    beginText() {
      this.current.textMatrix = _0, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
    }
    endText() {
      const t = this.pendingTextPaths, e = this.ctx;
      if (t === void 0) {
        e.beginPath();
        return;
      }
      const s = new Path2D(), i = e.getTransform().invertSelf();
      for (const { transform: r, x: a, y: o, fontSize: h, path: c } of t) s.addPath(c, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(h, -h));
      e.clip(s), e.beginPath(), delete this.pendingTextPaths;
    }
    setCharSpacing(t) {
      this.current.charSpacing = t;
    }
    setWordSpacing(t) {
      this.current.wordSpacing = t;
    }
    setHScale(t) {
      this.current.textHScale = t / 100;
    }
    setLeading(t) {
      this.current.leading = -t;
    }
    setFont(t, e) {
      var s;
      const i = this.commonObjs.get(t), r = this.current;
      if (!i) throw new Error(`Can't find font for ${t}`);
      if (r.fontMatrix = i.fontMatrix || Ag, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && Q("Invalid font matrix for font " + t), e < 0 ? (e = -e, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = e, i.isType3Font) return;
      const a = i.loadedName || "sans-serif", o = ((s = i.systemFontInfo) == null ? void 0 : s.css) || `"${a}", ${i.fallbackName}`;
      let h = "normal";
      i.black ? h = "900" : i.bold && (h = "bold");
      const c = i.italic ? "italic" : "normal";
      let u = e;
      e < Dm ? u = Dm : e > Om && (u = Om), this.current.fontSizeScale = e / u, this.ctx.font = `${c} ${h} ${u}px ${o}`;
    }
    setTextRenderingMode(t) {
      this.current.textRenderingMode = t;
    }
    setTextRise(t) {
      this.current.textRise = t;
    }
    moveText(t, e) {
      this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
    }
    setLeadingMoveText(t, e) {
      this.setLeading(-e), this.moveText(t, e);
    }
    setTextMatrix(t, e, s, i, r, a) {
      this.current.textMatrix = [
        t,
        e,
        s,
        i,
        r,
        a
      ], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
    }
    nextLine() {
      this.moveText(0, this.current.leading);
    }
    paintChar(t, e, s, i, r) {
      const a = this.ctx, o = this.current, h = o.font, c = o.textRenderingMode, u = o.fontSize / o.fontSizeScale, d = c & ie.FILL_STROKE_MASK, g = !!(c & ie.ADD_TO_PATH_FLAG), f = o.patternFill && !h.missingFile, p = o.patternStroke && !h.missingFile;
      let v;
      if ((h.disableFontFace || g || f || p) && (v = h.getPathGenerator(this.commonObjs, t)), h.disableFontFace || f || p) {
        if (a.save(), a.translate(e, s), a.scale(u, -u), d === ie.FILL || d === ie.FILL_STROKE) if (i) {
          const b = a.getTransform();
          a.setTransform(...i), a.fill(w(this, Ji, ef).call(this, v, b, i));
        } else a.fill(v);
        if (d === ie.STROKE || d === ie.FILL_STROKE) if (r) {
          const b = a.getTransform();
          a.setTransform(...r), a.stroke(w(this, Ji, ef).call(this, v, b, r));
        } else a.lineWidth /= u, a.stroke(v);
        a.restore();
      } else (d === ie.FILL || d === ie.FILL_STROKE) && a.fillText(t, e, s), (d === ie.STROKE || d === ie.FILL_STROKE) && a.strokeText(t, e, s);
      g && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
        transform: mt(a),
        x: e,
        y: s,
        fontSize: u,
        path: v
      });
    }
    get isFontSubpixelAAEnabled() {
      const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
      t.scale(1.5, 1), t.fillText("I", 0, 10);
      const e = t.getImageData(0, 0, 10, 10).data;
      let s = false;
      for (let i = 3; i < e.length; i += 4) if (e[i] > 0 && e[i] < 255) {
        s = true;
        break;
      }
      return Z(this, "isFontSubpixelAAEnabled", s);
    }
    showText(t) {
      const e = this.current, s = e.font;
      if (s.isType3Font) return this.showType3Text(t);
      const i = e.fontSize;
      if (i === 0) return;
      const r = this.ctx, a = e.fontSizeScale, o = e.charSpacing, h = e.wordSpacing, c = e.fontDirection, u = e.textHScale * c, d = t.length, g = s.vertical, f = g ? 1 : -1, p = s.defaultVMetrics, v = i * e.fontMatrix[0], b = e.textRenderingMode === ie.FILL && !s.disableFontFace && !e.patternFill;
      r.save(), r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), c > 0 ? r.scale(u, -1) : r.scale(u, 1);
      let _, S;
      if (e.patternFill) {
        r.save();
        const E = e.fillColor.getPattern(r, this, Fs(r), fe.FILL);
        _ = mt(r), r.restore(), r.fillStyle = E;
      }
      if (e.patternStroke) {
        r.save();
        const E = e.strokeColor.getPattern(r, this, Fs(r), fe.STROKE);
        S = mt(r), r.restore(), r.strokeStyle = E;
      }
      let x = e.lineWidth;
      const C = e.textMatrixScale;
      if (C === 0 || x === 0) {
        const E = e.textRenderingMode & ie.FILL_STROKE_MASK;
        (E === ie.STROKE || E === ie.FILL_STROKE) && (x = this.getSinglePixelWidth());
      } else x /= C;
      if (a !== 1 && (r.scale(a, a), x /= a), r.lineWidth = x, s.isInvalidPDFjsFont) {
        const E = [];
        let D = 0;
        for (const F of t) E.push(F.unicode), D += F.width;
        r.fillText(E.join(""), 0, 0), e.x += D * v * u, r.restore(), this.compose();
        return;
      }
      let T = 0, O;
      for (O = 0; O < d; ++O) {
        const E = t[O];
        if (typeof E == "number") {
          T += f * E * i / 1e3;
          continue;
        }
        let D = false;
        const F = (E.isSpace ? h : 0) + o, L = E.fontChar, N = E.accent;
        let P, I, W = E.width;
        if (g) {
          const R = E.vmetric || p, st = -(E.vmetric ? R[1] : W * 0.5) * v, J = R[2] * v;
          W = R ? -R[0] : W, P = st / a, I = (T + J) / a;
        } else P = T / a, I = 0;
        if (s.remeasure && W > 0) {
          const R = r.measureText(L).width * 1e3 / i * a;
          if (W < R && this.isFontSubpixelAAEnabled) {
            const st = W / R;
            D = true, r.save(), r.scale(st, 1), P /= st;
          } else W !== R && (P += (W - R) / 2e3 * i / a);
        }
        if (this.contentVisible && (E.isInFont || s.missingFile)) {
          if (b && !N) r.fillText(L, P, I);
          else if (this.paintChar(L, P, I, _, S), N) {
            const R = P + i * N.offset.x / a, st = I - i * N.offset.y / a;
            this.paintChar(N.fontChar, R, st, _, S);
          }
        }
        const j = g ? W * v - F * c : W * v + F * c;
        T += j, D && r.restore();
      }
      g ? e.y -= T : e.x += T * u, r.restore(), this.compose();
    }
    showType3Text(t) {
      const e = this.ctx, s = this.current, i = s.font, r = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, h = s.charSpacing, c = s.wordSpacing, u = s.textHScale * a, d = s.fontMatrix || Ag, g = t.length, f = s.textRenderingMode === ie.INVISIBLE;
      let p, v, b, _;
      if (!(f || r === 0)) {
        for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(u, a), p = 0; p < g; ++p) {
          if (v = t[p], typeof v == "number") {
            _ = o * v * r / 1e3, this.ctx.translate(_, 0), s.x += _ * u;
            continue;
          }
          const S = (v.isSpace ? c : 0) + h, x = i.charProcOperatorList[v.operatorListId];
          if (!x) {
            Q(`Type3 character "${v.operatorListId}" is not available.`);
            continue;
          }
          this.contentVisible && (this.processingType3 = v, this.save(), e.scale(r, r), e.transform(...d), this.executeOperatorList(x), this.restore()), b = V.applyTransform([
            v.width,
            0
          ], d)[0] * r + S, e.translate(b, 0), s.x += b * u;
        }
        e.restore(), this.processingType3 = null;
      }
    }
    setCharWidth(t, e) {
    }
    setCharWidthAndBounds(t, e, s, i, r, a) {
      this.ctx.rect(s, i, r - s, a - i), this.ctx.clip(), this.endPath();
    }
    getColorN_Pattern(t) {
      let e;
      if (t[0] === "TilingPattern") {
        const s = t[1], i = this.baseTransform || mt(this.ctx), r = {
          createCanvasGraphics: (a) => new cb(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack
          })
        };
        e = new aS(t, s, this.ctx, r, i);
      } else e = this._getPattern(t[1], t[2]);
      return e;
    }
    setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = true;
    }
    setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = true;
    }
    setStrokeRGBColor(t, e, s) {
      this.ctx.strokeStyle = this.current.strokeColor = V.makeHexColor(t, e, s), this.current.patternStroke = false;
    }
    setStrokeTransparent() {
      this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
    }
    setFillRGBColor(t, e, s) {
      this.ctx.fillStyle = this.current.fillColor = V.makeHexColor(t, e, s), this.current.patternFill = false;
    }
    setFillTransparent() {
      this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false;
    }
    _getPattern(t, e = null) {
      let s;
      return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = nS(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
    }
    shadingFill(t) {
      if (!this.contentVisible) return;
      const e = this.ctx;
      this.save();
      const s = this._getPattern(t);
      e.fillStyle = s.getPattern(e, this, Fs(e), fe.SHADING);
      const i = Fs(e);
      if (i) {
        const { width: r, height: a } = e.canvas, [o, h, c, u] = V.getAxialAlignedBoundingBox([
          0,
          0,
          r,
          a
        ], i);
        this.ctx.fillRect(o, h, c - o, u - h);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.compose(this.current.getClippedPathBoundingBox()), this.restore();
    }
    beginInlineImage() {
      ut("Should not call beginInlineImage");
    }
    beginImageData() {
      ut("Should not call beginImageData");
    }
    paintFormXObjectBegin(t, e) {
      if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = mt(this.ctx), e)) {
        const s = e[2] - e[0], i = e[3] - e[1];
        this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(mt(this.ctx), e), this.clip(), this.endPath();
      }
    }
    paintFormXObjectEnd() {
      this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t) {
      if (!this.contentVisible) return;
      this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
      const e = this.ctx;
      t.isolated || Ed("TODO: Support non-isolated groups."), t.knockout && Q("Knockout groups not supported.");
      const s = mt(e);
      if (t.matrix && e.transform(...t.matrix), !t.bbox) throw new Error("Bounding box is required.");
      let i = V.getAxialAlignedBoundingBox(t.bbox, mt(e));
      const r = [
        0,
        0,
        e.canvas.width,
        e.canvas.height
      ];
      i = V.intersect(i, r) || [
        0,
        0,
        0,
        0
      ];
      const a = Math.floor(i[0]), o = Math.floor(i[1]), h = Math.max(Math.ceil(i[2]) - a, 1), c = Math.max(Math.ceil(i[3]) - o, 1);
      this.current.startNewPathAndClipBox([
        0,
        0,
        h,
        c
      ]);
      let u = "groupAt" + this.groupLevel;
      t.smask && (u += "_smask_" + this.smaskCounter++ % 2);
      const d = this.cachedCanvases.getCanvas(u, h, c), g = d.context;
      g.translate(-a, -o), g.transform(...s), t.smask ? this.smaskStack.push({
        canvas: d.canvas,
        context: g,
        offsetX: a,
        offsetY: o,
        subtype: t.smask.subtype,
        backdrop: t.smask.backdrop,
        transferMap: t.smask.transferMap || null,
        startTransformInverse: null
      }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), mo(e, g), this.ctx = g, this.setGState([
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ]
      ]), this.groupStack.push(e), this.groupLevel++;
    }
    endGroup(t) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const e = this.ctx, s = this.groupStack.pop();
      if (this.ctx = s, this.ctx.imageSmoothingEnabled = false, t.smask) this.tempSMask = this.smaskStack.pop(), this.restore();
      else {
        this.ctx.restore();
        const i = mt(this.ctx);
        this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
        const r = V.getAxialAlignedBoundingBox([
          0,
          0,
          e.canvas.width,
          e.canvas.height
        ], i);
        this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
      }
    }
    beginAnnotation(t, e, s, i, r) {
      if (w(this, Ji, Zg).call(this), Xl(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
        const a = e[2] - e[0], o = e[3] - e[1];
        if (r && this.annotationCanvasMap) {
          s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
          const [h, c] = V.singularValueDecompose2dScale(mt(this.ctx)), { viewportScale: u } = this, d = Math.ceil(a * this.outputScaleX * u), g = Math.ceil(o * this.outputScaleY * u);
          this.annotationCanvas = this.canvasFactory.create(d, g);
          const { canvas: f, context: p } = this.annotationCanvas;
          this.annotationCanvasMap.set(t, f), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.save(), this.ctx.setTransform(h, 0, 0, -c, 0, o * c), Xl(this.ctx);
        } else Xl(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
      }
      this.current = new Rm(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
    }
    endAnnotation() {
      this.annotationCanvas && (this.ctx.restore(), w(this, Ji, tf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t) {
      if (!this.contentVisible) return;
      const e = t.count;
      t = this.getObject(t.data, t), t.count = e;
      const s = this.ctx, i = this.processingType3;
      if (i && (i.compiled === void 0 && (i.compiled = uS(t)), i.compiled)) {
        i.compiled(s);
        return;
      }
      const r = this._createMaskCanvas(t), a = r.canvas;
      s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), s.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, r, a) {
      if (!this.contentVisible) return;
      t = this.getObject(t.data, t);
      const o = this.ctx;
      o.save();
      const h = mt(o);
      o.transform(e, s, i, r, 0, 0);
      const c = this._createMaskCanvas(t);
      o.setTransform(1, 0, 0, 1, c.offsetX - h[4], c.offsetY - h[5]);
      for (let u = 0, d = a.length; u < d; u += 2) {
        const g = V.transform(h, [
          e,
          s,
          i,
          r,
          a[u],
          a[u + 1]
        ]), [f, p] = V.applyTransform([
          0,
          0
        ], g);
        o.drawImage(c.canvas, f, p);
      }
      o.restore(), this.compose();
    }
    paintImageMaskXObjectGroup(t) {
      if (!this.contentVisible) return;
      const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
      for (const r of t) {
        const { data: a, width: o, height: h, transform: c } = r, u = this.cachedCanvases.getCanvas("maskCanvas", o, h), d = u.context;
        d.save();
        const g = this.getObject(a, r);
        Fm(d, g), d.globalCompositeOperation = "source-in", d.fillStyle = i ? s.getPattern(d, this, Fs(e), fe.FILL) : s, d.fillRect(0, 0, o, h), d.restore(), e.save(), e.transform(...c), e.scale(1, -1), Gl(e, u.canvas, 0, 0, o, h, 0, -1, 1, 1), e.restore();
      }
      this.compose();
    }
    paintImageXObject(t) {
      if (!this.contentVisible) return;
      const e = this.getObject(t);
      if (!e) {
        Q("Dependent image isn't ready yet");
        return;
      }
      this.paintInlineImageXObject(e);
    }
    paintImageXObjectRepeat(t, e, s, i) {
      if (!this.contentVisible) return;
      const r = this.getObject(t);
      if (!r) {
        Q("Dependent image isn't ready yet");
        return;
      }
      const a = r.width, o = r.height, h = [];
      for (let c = 0, u = i.length; c < u; c += 2) h.push({
        transform: [
          e,
          0,
          0,
          s,
          i[c],
          i[c + 1]
        ],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
      this.paintInlineImageXObjectGroup(r, h);
    }
    applyTransferMapsToCanvas(t) {
      return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
    }
    applyTransferMapsToBitmap(t) {
      if (this.current.transferMaps === "none") return t.bitmap;
      const { bitmap: e, width: s, height: i } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
      return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
    }
    paintInlineImageXObject(t) {
      if (!this.contentVisible) return;
      const e = t.width, s = t.height, i = this.ctx;
      if (this.save(), !pe) {
        const { filter: o } = i;
        o !== "none" && o !== "" && (i.filter = "none");
      }
      i.scale(1 / e, -1 / s);
      let r;
      if (t.bitmap) r = this.applyTransferMapsToBitmap(t);
      else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data) r = t;
      else {
        const o = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
        Im(o, t), r = this.applyTransferMapsToCanvas(o);
      }
      const a = this._scaleImage(r, Fs(i));
      i.imageSmoothingEnabled = jm(mt(i), t.interpolate), Gl(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
    }
    paintInlineImageXObjectGroup(t, e) {
      if (!this.contentVisible) return;
      const s = this.ctx;
      let i;
      if (t.bitmap) i = t.bitmap;
      else {
        const r = t.width, a = t.height, o = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
        Im(o, t), i = this.applyTransferMapsToCanvas(o);
      }
      for (const r of e) s.save(), s.transform(...r.transform), s.scale(1, -1), Gl(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
      this.compose();
    }
    paintSolidColorImageMask() {
      this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t) {
    }
    markPointProps(t, e) {
    }
    beginMarkedContent(t) {
      this.markedContentStack.push({
        visible: true
      });
    }
    beginMarkedContentProps(t, e) {
      t === "OC" ? this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(e)
      }) : this.markedContentStack.push({
        visible: true
      }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent() {
      this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat() {
    }
    endCompat() {
    }
    consumePath(t) {
      const e = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
      const s = this.ctx;
      this.pendingClip && (e || (this.pendingClip === Nm ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t = mt(this.ctx);
        if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
        else {
          const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
          this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (this._cachedScaleForStroking[0] === -1) {
        const { lineWidth: t } = this.current, { a: e, b: s, c: i, d: r } = this.ctx.getTransform();
        let a, o;
        if (s === 0 && i === 0) {
          const h = Math.abs(e), c = Math.abs(r);
          if (h === c) if (t === 0) a = o = 1 / h;
          else {
            const u = h * t;
            a = o = u < 1 ? 1 / u : 1;
          }
          else if (t === 0) a = 1 / h, o = 1 / c;
          else {
            const u = h * t, d = c * t;
            a = u < 1 ? 1 / u : 1, o = d < 1 ? 1 / d : 1;
          }
        } else {
          const h = Math.abs(e * r - s * i), c = Math.hypot(e, s), u = Math.hypot(i, r);
          if (t === 0) a = u / h, o = c / h;
          else {
            const d = t * h;
            a = u > d ? u / d : 1, o = c > d ? c / d : 1;
          }
        }
        this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t) {
      const { ctx: e } = this, { lineWidth: s } = this.current, [i, r] = this.getScaleForStroking();
      if (e.lineWidth = s || 1, i === 1 && r === 1) {
        e.stroke();
        return;
      }
      const a = e.getLineDash();
      if (t && e.save(), e.scale(i, r), a.length > 0) {
        const o = Math.max(i, r);
        e.setLineDash(a.map((h) => h / o)), e.lineDashOffset /= o;
      }
      e.stroke(), t && e.restore();
    }
    isContentVisible() {
      for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return false;
      return true;
    }
  };
  Ji = /* @__PURE__ */ new WeakSet(), Zg = function() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
  }, tf = function() {
    if (this.pageColors) {
      const n = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (n !== "none") {
        const t = this.ctx.filter;
        this.ctx.filter = n, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = t;
      }
    }
  }, ef = function(n, t, e) {
    const s = new Path2D();
    return s.addPath(n, new DOMMatrix(e).invertSelf().multiplySelf(t)), s;
  };
  let yc = pS;
  for (const n in ks) yc.prototype[n] !== void 0 && (yc.prototype[ks[n]] = yc.prototype[n]);
  var Wu, Bu;
  class Er {
    static get workerPort() {
      return l(this, Wu);
    }
    static set workerPort(t) {
      if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
      m(this, Wu, t);
    }
    static get workerSrc() {
      return l(this, Bu);
    }
    static set workerSrc(t) {
      if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
      m(this, Bu, t);
    }
  }
  Wu = /* @__PURE__ */ new WeakMap(), Bu = /* @__PURE__ */ new WeakMap(), y(Er, Wu, null), y(Er, Bu, "");
  var oa, wc;
  class mS {
    constructor({ parsedData: t, rawData: e }) {
      y(this, oa), y(this, wc), m(this, oa, t), m(this, wc, e);
    }
    getRaw() {
      return l(this, wc);
    }
    get(t) {
      return l(this, oa).get(t) ?? null;
    }
    getAll() {
      return gp(l(this, oa));
    }
    has(t) {
      return l(this, oa).has(t);
    }
  }
  oa = /* @__PURE__ */ new WeakMap(), wc = /* @__PURE__ */ new WeakMap();
  const ha = Symbol("INTERNAL");
  var _c, xc, Sc, Vo;
  class vS {
    constructor(t, { name: e, intent: s, usage: i, rbGroups: r }) {
      y(this, _c, false), y(this, xc, false), y(this, Sc, false), y(this, Vo, true), m(this, _c, !!(t & Ue.DISPLAY)), m(this, xc, !!(t & Ue.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
    }
    get visible() {
      if (l(this, Sc)) return l(this, Vo);
      if (!l(this, Vo)) return false;
      const { print: t, view: e } = this.usage;
      return l(this, _c) ? (e == null ? void 0 : e.viewState) !== "OFF" : l(this, xc) ? (t == null ? void 0 : t.printState) !== "OFF" : true;
    }
    _setVisible(t, e, s = false) {
      t !== ha && ut("Internal method `_setVisible` called."), m(this, Sc, s), m(this, Vo, e);
    }
  }
  _c = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap(), Sc = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap();
  var Vr, lt, Go, Xo, Hu, sf;
  class bS {
    constructor(t, e = Ue.DISPLAY) {
      if (y(this, Hu), y(this, Vr, null), y(this, lt, /* @__PURE__ */ new Map()), y(this, Go, null), y(this, Xo, null), this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
        this.name = t.name, this.creator = t.creator, m(this, Xo, t.order);
        for (const s of t.groups) l(this, lt).set(s.id, new vS(e, s));
        if (t.baseState === "OFF") for (const s of l(this, lt).values()) s._setVisible(ha, false);
        for (const s of t.on) l(this, lt).get(s)._setVisible(ha, true);
        for (const s of t.off) l(this, lt).get(s)._setVisible(ha, false);
        m(this, Go, this.getHash());
      }
    }
    isVisible(t) {
      if (l(this, lt).size === 0) return true;
      if (!t) return Ed("Optional content group not defined."), true;
      if (t.type === "OCG") return l(this, lt).has(t.id) ? l(this, lt).get(t.id).visible : (Q(`Optional content group not found: ${t.id}`), true);
      if (t.type === "OCMD") {
        if (t.expression) return w(this, Hu, sf).call(this, t.expression);
        if (!t.policy || t.policy === "AnyOn") {
          for (const e of t.ids) {
            if (!l(this, lt).has(e)) return Q(`Optional content group not found: ${e}`), true;
            if (l(this, lt).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOn") {
          for (const e of t.ids) {
            if (!l(this, lt).has(e)) return Q(`Optional content group not found: ${e}`), true;
            if (!l(this, lt).get(e).visible) return false;
          }
          return true;
        } else if (t.policy === "AnyOff") {
          for (const e of t.ids) {
            if (!l(this, lt).has(e)) return Q(`Optional content group not found: ${e}`), true;
            if (!l(this, lt).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOff") {
          for (const e of t.ids) {
            if (!l(this, lt).has(e)) return Q(`Optional content group not found: ${e}`), true;
            if (l(this, lt).get(e).visible) return false;
          }
          return true;
        }
        return Q(`Unknown optional content policy ${t.policy}.`), true;
      }
      return Q(`Unknown group type ${t.type}.`), true;
    }
    setVisibility(t, e = true, s = true) {
      var i;
      const r = l(this, lt).get(t);
      if (!r) {
        Q(`Optional content group not found: ${t}`);
        return;
      }
      if (s && e && r.rbGroups.length) for (const a of r.rbGroups) for (const o of a) o !== t && ((i = l(this, lt).get(o)) == null || i._setVisible(ha, false, true));
      r._setVisible(ha, !!e, true), m(this, Vr, null);
    }
    setOCGState({ state: t, preserveRB: e }) {
      let s;
      for (const i of t) {
        switch (i) {
          case "ON":
          case "OFF":
          case "Toggle":
            s = i;
            continue;
        }
        const r = l(this, lt).get(i);
        if (r) switch (s) {
          case "ON":
            this.setVisibility(i, true, e);
            break;
          case "OFF":
            this.setVisibility(i, false, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
      }
      m(this, Vr, null);
    }
    get hasInitialVisibility() {
      return l(this, Go) === null || this.getHash() === l(this, Go);
    }
    getOrder() {
      return l(this, lt).size ? l(this, Xo) ? l(this, Xo).slice() : [
        ...l(this, lt).keys()
      ] : null;
    }
    getGroups() {
      return l(this, lt).size > 0 ? gp(l(this, lt)) : null;
    }
    getGroup(t) {
      return l(this, lt).get(t) || null;
    }
    getHash() {
      if (l(this, Vr) !== null) return l(this, Vr);
      const t = new K0();
      for (const [e, s] of l(this, lt)) t.update(`${e}:${s.visible}`);
      return m(this, Vr, t.hexdigest());
    }
  }
  Vr = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakSet(), sf = function(n) {
    const t = n.length;
    if (t < 2) return true;
    const e = n[0];
    for (let s = 1; s < t; s++) {
      const i = n[s];
      let r;
      if (Array.isArray(i)) r = w(this, Hu, sf).call(this, i);
      else if (l(this, lt).has(i)) r = l(this, lt).get(i).visible;
      else return Q(`Optional content group not found: ${i}`), true;
      switch (e) {
        case "And":
          if (!r) return false;
          break;
        case "Or":
          if (r) return true;
          break;
        case "Not":
          return !r;
        default:
          return true;
      }
    }
    return e === "And";
  };
  class yS {
    constructor(t, { disableRange: e = false, disableStream: s = false }) {
      Ft(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
      const { length: i, initialData: r, progressiveDone: a, contentDispositionFilename: o } = t;
      if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
        const h = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
        this._queuedChunks.push(h);
      }
      this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((h, c) => {
        this._onReceiveData({
          begin: h,
          chunk: c
        });
      }), t.addProgressListener((h, c) => {
        this._onProgress({
          loaded: h,
          total: c
        });
      }), t.addProgressiveReadListener((h) => {
        this._onReceiveData({
          chunk: h
        });
      }), t.addProgressiveDoneListener(() => {
        this._onProgressiveDone();
      }), t.transportReady();
    }
    _onReceiveData({ begin: t, chunk: e }) {
      const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
      if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
      else {
        const i = this._rangeReaders.some(function(r) {
          return r._begin !== t ? false : (r._enqueue(s), true);
        });
        Ft(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
      }
    }
    get _progressiveDataLength() {
      var t;
      return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    _onProgress(t) {
      var e, s, i, r;
      t.total === void 0 ? (s = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || s.call(e, {
        loaded: t.loaded
      }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, {
        loaded: t.loaded,
        total: t.total
      });
    }
    _onProgressiveDone() {
      var t;
      (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = true;
    }
    _removeRangeReader(t) {
      const e = this._rangeReaders.indexOf(t);
      e >= 0 && this._rangeReaders.splice(e, 1);
    }
    getFullReader() {
      Ft(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
      const t = this._queuedChunks;
      return this._queuedChunks = null, new wS(this, t, this._progressiveDone, this._contentDispositionFilename);
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new _S(this, t, e);
      return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var e;
      (e = this._fullRequestReader) == null || e.cancel(t);
      for (const s of this._rangeReaders.slice(0)) s.cancel(t);
      this._pdfDataRangeTransport.abort();
    }
  }
  class wS {
    constructor(t, e, s = false, i = null) {
      this._stream = t, this._done = s || false, this._filename = mp(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
      for (const r of this._queuedChunks) this._loaded += r.byteLength;
      this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
    }
    _enqueue(t) {
      this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
    }
    get headersReady() {
      return this._headersReady;
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    }
    get contentLength() {
      return this._stream._contentLength;
    }
    async read() {
      if (this._queuedChunks.length > 0) return {
        value: this._queuedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0;
    }
    progressiveDone() {
      this._done || (this._done = true);
    }
  }
  class _S {
    constructor(t, e, s) {
      this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
    }
    _enqueue(t) {
      if (!this._done) {
        if (this._requests.length === 0) this._queuedChunk = t;
        else {
          this._requests.shift().resolve({
            value: t,
            done: false
          });
          for (const e of this._requests) e.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0;
        }
        this._done = true, this._stream._removeRangeReader(this);
      }
    }
    get isStreamingSupported() {
      return false;
    }
    async read() {
      if (this._queuedChunk) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._stream._removeRangeReader(this);
    }
  }
  function xS(n) {
    let t = true, e = s("filename\\*", "i").exec(n);
    if (e) {
      e = e[1];
      let u = o(e);
      return u = unescape(u), u = h(u), u = c(u), r(u);
    }
    if (e = a(n), e) {
      const u = c(e);
      return r(u);
    }
    if (e = s("filename", "i").exec(n), e) {
      e = e[1];
      let u = o(e);
      return u = c(u), r(u);
    }
    function s(u, d) {
      return new RegExp("(?:^|;)\\s*" + u + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', d);
    }
    function i(u, d) {
      if (u) {
        if (!/^[\x00-\xFF]+$/.test(d)) return d;
        try {
          const g = new TextDecoder(u, {
            fatal: true
          }), f = Dd(d);
          d = g.decode(f), t = false;
        } catch {
        }
      }
      return d;
    }
    function r(u) {
      return t && /[\x80-\xff]/.test(u) && (u = i("utf-8", u), t && (u = i("iso-8859-1", u))), u;
    }
    function a(u) {
      const d = [];
      let g;
      const f = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
      for (; (g = f.exec(u)) !== null; ) {
        let [, v, b, _] = g;
        if (v = parseInt(v, 10), v in d) {
          if (v === 0) break;
          continue;
        }
        d[v] = [
          b,
          _
        ];
      }
      const p = [];
      for (let v = 0; v < d.length && v in d; ++v) {
        let [b, _] = d[v];
        _ = o(_), b && (_ = unescape(_), v === 0 && (_ = h(_))), p.push(_);
      }
      return p.join("");
    }
    function o(u) {
      if (u.startsWith('"')) {
        const d = u.slice(1).split('\\"');
        for (let g = 0; g < d.length; ++g) {
          const f = d[g].indexOf('"');
          f !== -1 && (d[g] = d[g].slice(0, f), d.length = g + 1), d[g] = d[g].replaceAll(/\\(.)/g, "$1");
        }
        u = d.join('"');
      }
      return u;
    }
    function h(u) {
      const d = u.indexOf("'");
      if (d === -1) return u;
      const g = u.slice(0, d), f = u.slice(d + 1).replace(/^[^']*'/, "");
      return i(g, f);
    }
    function c(u) {
      return !u.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(u) ? u : u.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(d, g, f, p) {
        if (f === "q" || f === "Q") return p = p.replaceAll("_", " "), p = p.replaceAll(/=([0-9a-fA-F]{2})/g, function(v, b) {
          return String.fromCharCode(parseInt(b, 16));
        }), i(g, p);
        try {
          p = atob(p);
        } catch {
        }
        return i(g, p);
      });
    }
    return "";
  }
  function ub(n, t) {
    const e = new Headers();
    if (!n || !t || typeof t != "object") return e;
    for (const s in t) {
      const i = t[s];
      i !== void 0 && e.append(s, i);
    }
    return e;
  }
  function Ld(n) {
    try {
      return new URL(n).origin;
    } catch {
    }
    return null;
  }
  function db({ responseHeaders: n, isHttp: t, rangeChunkSize: e, disableRange: s }) {
    const i = {
      allowRangeRequests: false,
      suggestedLength: void 0
    }, r = parseInt(n.get("Content-Length"), 10);
    return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || n.get("Accept-Ranges") !== "bytes" || (n.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = true), i;
  }
  function gb(n) {
    const t = n.get("Content-Disposition");
    if (t) {
      let e = xS(t);
      if (e.includes("%")) try {
        e = decodeURIComponent(e);
      } catch {
      }
      if (mp(e)) return e;
    }
    return null;
  }
  function Rd(n, t) {
    return n === 404 || n === 0 && t.startsWith("file:") ? new nl('Missing PDF "' + t + '".') : new Au(`Unexpected server response (${n}) while retrieving PDF "${t}".`, n);
  }
  function fb(n) {
    return n === 200 || n === 206;
  }
  function pb(n, t, e) {
    return {
      method: "GET",
      headers: n,
      signal: e.signal,
      mode: "cors",
      credentials: t ? "include" : "same-origin",
      redirect: "follow"
    };
  }
  function mb(n) {
    return n instanceof Uint8Array ? n.buffer : n instanceof ArrayBuffer ? n : (Q(`getArrayBuffer - unexpected data format: ${n}`), new Uint8Array(n).buffer);
  }
  class Wm {
    constructor(t) {
      Y(this, "_responseOrigin", null), this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = ub(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      var t;
      return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    getFullReader() {
      return Ft(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new SS(this), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new CS(this, t, e);
      return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var e;
      (e = this._fullRequestReader) == null || e.cancel(t);
      for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
  }
  class SS {
    constructor(t) {
      this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
      const e = t.source;
      this._withCredentials = e.withCredentials || false, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
      const s = new Headers(t.headers), i = e.url;
      fetch(i, pb(s, this._withCredentials, this._abortController)).then((r) => {
        if (t._responseOrigin = Ld(r.url), !fb(r.status)) throw Rd(r.status, i);
        this._reader = r.body.getReader(), this._headersCapability.resolve();
        const a = r.headers, { allowRangeRequests: o, suggestedLength: h } = db({
          responseHeaders: a,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange
        });
        this._isRangeSupported = o, this._contentLength = h || this._contentLength, this._filename = gb(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Mr("Streaming is disabled."));
      }).catch(this._headersCapability.reject), this.onProgress = null;
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var t;
      await this._headersCapability.promise;
      const { value: e, done: s } = await this._reader.read();
      return s ? {
        value: e,
        done: s
      } : (this._loaded += e.byteLength, (t = this.onProgress) == null || t.call(this, {
        loaded: this._loaded,
        total: this._contentLength
      }), {
        value: mb(e),
        done: false
      });
    }
    cancel(t) {
      var e;
      (e = this._reader) == null || e.cancel(t), this._abortController.abort();
    }
  }
  class CS {
    constructor(t, e, s) {
      this._stream = t, this._reader = null, this._loaded = 0;
      const i = t.source;
      this._withCredentials = i.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
      const r = new Headers(t.headers);
      r.append("Range", `bytes=${e}-${s - 1}`);
      const a = i.url;
      fetch(a, pb(r, this._withCredentials, this._abortController)).then((o) => {
        const h = Ld(o.url);
        if (h !== t._responseOrigin) throw new Error(`Expected range response-origin "${h}" to match "${t._responseOrigin}".`);
        if (!fb(o.status)) throw Rd(o.status, a);
        this._readCapability.resolve(), this._reader = o.body.getReader();
      }).catch(this._readCapability.reject), this.onProgress = null;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var t;
      await this._readCapability.promise;
      const { value: e, done: s } = await this._reader.read();
      return s ? {
        value: e,
        done: s
      } : (this._loaded += e.byteLength, (t = this.onProgress) == null || t.call(this, {
        loaded: this._loaded
      }), {
        value: mb(e),
        done: false
      });
    }
    cancel(t) {
      var e;
      (e = this._reader) == null || e.cancel(t), this._abortController.abort();
    }
  }
  const ng = 200, ag = 206;
  function AS(n) {
    const t = n.response;
    return typeof t != "string" ? t : Dd(t).buffer;
  }
  class kS {
    constructor({ url: t, httpHeaders: e, withCredentials: s }) {
      Y(this, "_responseOrigin", null), this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = ub(this.isHttp, e), this.withCredentials = s || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
    }
    request(t) {
      const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
        xhr: e
      };
      e.open("GET", this.url), e.withCredentials = this.withCredentials;
      for (const [r, a] of this.headers) e.setRequestHeader(r, a);
      return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = ag) : i.expectedStatus = ng, e.responseType = "arraybuffer", Ft(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
        t.onError(e.status);
      }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
    }
    onProgress(t, e) {
      var s;
      const i = this.pendingRequests[t];
      i && ((s = i.onProgress) == null || s.call(i, e));
    }
    onStateChange(t, e) {
      const s = this.pendingRequests[t];
      if (!s) return;
      const i = s.xhr;
      if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests)) return;
      if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
        s.onError(i.status);
        return;
      }
      const r = i.status || ng;
      if (!(r === ng && s.expectedStatus === ag) && r !== s.expectedStatus) {
        s.onError(i.status);
        return;
      }
      const a = AS(i);
      if (r === ag) {
        const o = i.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
        h ? s.onDone({
          begin: parseInt(h[1], 10),
          chunk: a
        }) : (Q('Missing or invalid "Content-Range" header.'), s.onError(0));
      } else a ? s.onDone({
        begin: 0,
        chunk: a
      }) : s.onError(i.status);
    }
    getRequestXhr(t) {
      return this.pendingRequests[t].xhr;
    }
    isPendingRequest(t) {
      return t in this.pendingRequests;
    }
    abortRequest(t) {
      const e = this.pendingRequests[t].xhr;
      delete this.pendingRequests[t], e.abort();
    }
  }
  class TS {
    constructor(t) {
      this._source = t, this._manager = new kS(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    _onRangeRequestReaderClosed(t) {
      const e = this._rangeRequestReaders.indexOf(t);
      e >= 0 && this._rangeRequestReaders.splice(e, 1);
    }
    getFullReader() {
      return Ft(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new MS(this._manager, this._source), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      const s = new ES(this._manager, t, e);
      return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var e;
      (e = this._fullRequestReader) == null || e.cancel(t);
      for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
  }
  class MS {
    constructor(t, e) {
      this._manager = t, this._url = e.url, this._fullRequestId = t.request({
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this)
      }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
    }
    _onHeadersReceived() {
      const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
      this._manager._responseOrigin = Ld(e.responseURL);
      const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
        const [h, ...c] = o.split(": ");
        return [
          h,
          c.join(": ")
        ];
      }) : []), { allowRangeRequests: r, suggestedLength: a } = db({
        responseHeaders: i,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      r && (this._isRangeSupported = true), this._contentLength = a || this._contentLength, this._filename = gb(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
    }
    _onDone(t) {
      if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t.chunk,
        done: false
      }) : this._cachedChunks.push(t.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
        for (const e of this._requests) e.resolve({
          value: void 0,
          done: true
        });
        this._requests.length = 0;
      }
    }
    _onError(t) {
      this._storedError = Rd(t, this._url), this._headersCapability.reject(this._storedError);
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._cachedChunks.length = 0;
    }
    _onProgress(t) {
      var e;
      (e = this.onProgress) == null || e.call(this, {
        loaded: t.loaded,
        total: t.lengthComputable ? t.total : this._contentLength
      });
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    get contentLength() {
      return this._contentLength;
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    async read() {
      if (await this._headersCapability.promise, this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) return {
        value: this._cachedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this._headersCapability.reject(t);
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
    }
  }
  class ES {
    constructor(t, e, s) {
      this._manager = t, this._url = t.url, this._requestId = t.request({
        begin: e,
        end: s,
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this)
      }), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
    }
    _onHeadersReceived() {
      var t;
      const e = Ld((t = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : t.responseURL);
      e !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${e}" to match "${this._manager._responseOrigin}".`), this._onError(0));
    }
    _close() {
      var t;
      (t = this.onClosed) == null || t.call(this, this);
    }
    _onDone(t) {
      const e = t.chunk;
      this._requests.length > 0 ? this._requests.shift().resolve({
        value: e,
        done: false
      }) : this._queuedChunk = e, this._done = true;
      for (const s of this._requests) s.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._close();
    }
    _onError(t) {
      this._storedError ?? (this._storedError = Rd(t, this._url));
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._queuedChunk = null;
    }
    _onProgress(t) {
      var e;
      this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
        loaded: t.loaded
      });
    }
    get isStreamingSupported() {
      return false;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
    }
  }
  const DS = /^[a-z][a-z0-9\-+.]+:/i;
  function OS(n) {
    if (DS.test(n)) return new URL(n);
    const t = process.getBuiltinModule("url");
    return new URL(t.pathToFileURL(n));
  }
  class PS {
    constructor(t) {
      this.source = t, this.url = OS(t.url), Ft(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      var t;
      return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
    }
    getFullReader() {
      return Ft(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new LS(this), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new RS(this, t, e);
      return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var e;
      (e = this._fullRequestReader) == null || e.cancel(t);
      for (const s of this._rangeRequestReaders.slice(0)) s.cancel(t);
    }
  }
  class LS {
    constructor(t) {
      this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null;
      const e = t.source;
      this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
      const s = process.getBuiltinModule("fs");
      s.promises.lstat(this._url).then((i) => {
        this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
      }, (i) => {
        i.code === "ENOENT" && (i = new nl(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
      });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var t;
      if (await this._readCapability.promise, this._done) return {
        value: void 0,
        done: true
      };
      if (this._storedError) throw this._storedError;
      const e = this._readableStream.read();
      return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (t = this.onProgress) == null || t.call(this, {
        loaded: this._loaded,
        total: this._contentLength
      }), {
        value: new Uint8Array(e).buffer,
        done: false
      });
    }
    cancel(t) {
      if (!this._readableStream) {
        this._error(t);
        return;
      }
      this._readableStream.destroy(t);
    }
    _error(t) {
      this._storedError = t, this._readCapability.resolve();
    }
    _setReadableStream(t) {
      this._readableStream = t, t.on("readable", () => {
        this._readCapability.resolve();
      }), t.on("end", () => {
        t.destroy(), this._done = true, this._readCapability.resolve();
      }), t.on("error", (e) => {
        this._error(e);
      }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Mr("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  class RS {
    constructor(t, e, s) {
      this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
      const i = t.source;
      this._isStreamingSupported = !i.disableStream;
      const r = process.getBuiltinModule("fs");
      this._setReadableStream(r.createReadStream(this._url, {
        start: e,
        end: s - 1
      }));
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var t;
      if (await this._readCapability.promise, this._done) return {
        value: void 0,
        done: true
      };
      if (this._storedError) throw this._storedError;
      const e = this._readableStream.read();
      return e === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += e.length, (t = this.onProgress) == null || t.call(this, {
        loaded: this._loaded
      }), {
        value: new Uint8Array(e).buffer,
        done: false
      });
    }
    cancel(t) {
      if (!this._readableStream) {
        this._error(t);
        return;
      }
      this._readableStream.destroy(t);
    }
    _error(t) {
      this._storedError = t, this._readCapability.resolve();
    }
    _setReadableStream(t) {
      this._readableStream = t, t.on("readable", () => {
        this._readCapability.resolve();
      }), t.on("end", () => {
        t.destroy(), this._done = true, this._readCapability.resolve();
      }), t.on("error", (e) => {
        this._error(e);
      }), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  const IS = 1e5, De = 30, FS = 0.8;
  var Bm, Gr, Ve, Cc, Ac, _n, pr, zu, Vu, la, Lh, Uo, xn, Rh, Gu, Yo, qa, Xu, Uu, ca, La, Ul, Rr, Ih, Ka, vb, Hm, rf, Ai, kc, og, bb, zm;
  const Oe = class $o {
    constructor({ textContentSource: t, container: e, viewport: s }) {
      y(this, Ka), y(this, Gr, Promise.withResolvers()), y(this, Ve, null), y(this, Cc, false), y(this, Ac, !!((Bm = globalThis.FontInspector) != null && Bm.enabled)), y(this, _n, null), y(this, pr, null), y(this, zu, 0), y(this, Vu, 0), y(this, la, null), y(this, Lh, null), y(this, Uo, 0), y(this, xn, 0), y(this, Rh, /* @__PURE__ */ Object.create(null)), y(this, Gu, []), y(this, Yo, null), y(this, qa, []), y(this, Xu, /* @__PURE__ */ new WeakMap()), y(this, Uu, null);
      var i;
      if (t instanceof ReadableStream) m(this, Yo, t);
      else if (typeof t == "object") m(this, Yo, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
      else throw new Error('No "textContentSource" parameter specified.');
      m(this, Ve, m(this, Lh, e)), m(this, xn, s.scale * (globalThis.devicePixelRatio || 1)), m(this, Uo, s.rotation), m(this, pr, {
        div: null,
        properties: null,
        ctx: null
      });
      const { pageWidth: r, pageHeight: a, pageX: o, pageY: h } = s.rawDims;
      m(this, Uu, [
        1,
        0,
        0,
        -1,
        -o,
        h + a
      ]), m(this, Vu, r), m(this, zu, a), w(i = $o, Ai, bb).call(i), Pn(e, s), l(this, Gr).promise.finally(() => {
        l($o, Ih).delete(this), m(this, pr, null), m(this, Rh, null);
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t, isFirefox: e } = Ee.platform;
      return Z(this, "fontFamilyMap", /* @__PURE__ */ new Map([
        [
          "sans-serif",
          `${t && e ? "Calibri, " : ""}sans-serif`
        ],
        [
          "monospace",
          `${t && e ? "Lucida Console, " : ""}monospace`
        ]
      ]));
    }
    render() {
      const t = () => {
        l(this, la).read().then(({ value: e, done: s }) => {
          if (s) {
            l(this, Gr).resolve();
            return;
          }
          l(this, _n) ?? m(this, _n, e.lang), Object.assign(l(this, Rh), e.styles), w(this, Ka, vb).call(this, e.items), t();
        }, l(this, Gr).reject);
      };
      return m(this, la, l(this, Yo).getReader()), l($o, Ih).add(this), t(), l(this, Gr).promise;
    }
    update({ viewport: t, onBefore: e = null }) {
      var s;
      const i = t.scale * (globalThis.devicePixelRatio || 1), r = t.rotation;
      if (r !== l(this, Uo) && (e == null ? void 0 : e(), m(this, Uo, r), Pn(l(this, Lh), {
        rotation: r
      })), i !== l(this, xn)) {
        e == null ? void 0 : e(), m(this, xn, i);
        const a = {
          div: null,
          properties: null,
          ctx: w(s = $o, Ai, kc).call(s, l(this, _n))
        };
        for (const o of l(this, qa)) a.properties = l(this, Xu).get(o), a.div = o, w(this, Ka, rf).call(this, a);
      }
    }
    cancel() {
      var t;
      const e = new Mr("TextLayer task cancelled.");
      (t = l(this, la)) == null || t.cancel(e).catch(() => {
      }), m(this, la, null), l(this, Gr).reject(e);
    }
    get textDivs() {
      return l(this, qa);
    }
    get textContentItemsStr() {
      return l(this, Gu);
    }
    static cleanup() {
      if (!(l(this, Ih).size > 0)) {
        l(this, ca).clear();
        for (const { canvas: t } of l(this, La).values()) t.remove();
        l(this, La).clear();
      }
    }
  };
  Gr = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), Lh = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), Rh = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ih = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakSet(), vb = function(n) {
    var t, e;
    if (l(this, Cc)) return;
    (e = l(this, pr)).ctx ?? (e.ctx = w(t = Oe, Ai, kc).call(t, l(this, _n)));
    const s = l(this, qa), i = l(this, Gu);
    for (const r of n) {
      if (s.length > IS) {
        Q("Ignoring additional textDivs for performance reasons."), m(this, Cc, true);
        return;
      }
      if (r.str === void 0) {
        if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
          const a = l(this, Ve);
          m(this, Ve, document.createElement("span")), l(this, Ve).classList.add("markedContent"), r.id !== null && l(this, Ve).setAttribute("id", `${r.id}`), a.append(l(this, Ve));
        } else r.type === "endMarkedContent" && m(this, Ve, l(this, Ve).parentNode);
        continue;
      }
      i.push(r.str), w(this, Ka, Hm).call(this, r);
    }
  }, Hm = function(n) {
    var t;
    const e = document.createElement("span"), s = {
      angle: 0,
      canvasWidth: 0,
      hasText: n.str !== "",
      hasEOL: n.hasEOL,
      fontSize: 0
    };
    l(this, qa).push(e);
    const i = V.transform(l(this, Uu), n.transform);
    let r = Math.atan2(i[1], i[0]);
    const a = l(this, Rh)[n.fontName];
    a.vertical && (r += Math.PI / 2);
    let o = l(this, Ac) && a.fontSubstitution || a.fontFamily;
    o = Oe.fontFamilyMap.get(o) || o;
    const h = Math.hypot(i[2], i[3]), c = h * w(t = Oe, Ai, zm).call(t, o, l(this, _n));
    let u, d;
    r === 0 ? (u = i[4], d = i[5] - c) : (u = i[4] + c * Math.sin(r), d = i[5] - c * Math.cos(r));
    const g = "calc(var(--scale-factor)*", f = e.style;
    l(this, Ve) === l(this, Lh) ? (f.left = `${(100 * u / l(this, Vu)).toFixed(2)}%`, f.top = `${(100 * d / l(this, zu)).toFixed(2)}%`) : (f.left = `${g}${u.toFixed(2)}px)`, f.top = `${g}${d.toFixed(2)}px)`), f.fontSize = `${g}${(l(Oe, Rr) * h).toFixed(2)}px)`, f.fontFamily = o, s.fontSize = h, e.setAttribute("role", "presentation"), e.textContent = n.str, e.dir = n.dir, l(this, Ac) && (e.dataset.fontName = a.fontSubstitutionLoadedName || n.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
    let p = false;
    if (n.str.length > 1) p = true;
    else if (n.str !== " " && n.transform[0] !== n.transform[3]) {
      const v = Math.abs(n.transform[0]), b = Math.abs(n.transform[3]);
      v !== b && Math.max(v, b) / Math.min(v, b) > 1.5 && (p = true);
    }
    if (p && (s.canvasWidth = a.vertical ? n.height : n.width), l(this, Xu).set(e, s), l(this, pr).div = e, l(this, pr).properties = s, w(this, Ka, rf).call(this, l(this, pr)), s.hasText && l(this, Ve).append(e), s.hasEOL) {
      const v = document.createElement("br");
      v.setAttribute("role", "presentation"), l(this, Ve).append(v);
    }
  }, rf = function(n) {
    var t;
    const { div: e, properties: s, ctx: i } = n, { style: r } = e;
    let a = "";
    if (l(Oe, Rr) > 1 && (a = `scale(${1 / l(Oe, Rr)})`), s.canvasWidth !== 0 && s.hasText) {
      const { fontFamily: o } = r, { canvasWidth: h, fontSize: c } = s;
      w(t = Oe, Ai, og).call(t, i, c * l(this, xn), o);
      const { width: u } = i.measureText(e.textContent);
      u > 0 && (a = `scaleX(${h * l(this, xn) / u}) ${a}`);
    }
    s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
  }, Ai = /* @__PURE__ */ new WeakSet(), kc = function(n = null) {
    let t = l(this, La).get(n || (n = ""));
    if (!t) {
      const e = document.createElement("canvas");
      e.className = "hiddenCanvasElement", e.lang = n, document.body.append(e), t = e.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      }), l(this, La).set(n, t), l(this, Ul).set(t, {
        size: 0,
        family: ""
      });
    }
    return t;
  }, og = function(n, t, e) {
    const s = l(this, Ul).get(n);
    t === s.size && e === s.family || (n.font = `${t}px ${e}`, s.size = t, s.family = e);
  }, bb = function() {
    if (l(this, Rr) !== null) return;
    const n = document.createElement("div");
    n.style.opacity = 0, n.style.lineHeight = 1, n.style.fontSize = "1px", n.style.position = "absolute", n.textContent = "X", document.body.append(n), m(this, Rr, n.getBoundingClientRect().height), n.remove();
  }, zm = function(n, t) {
    const e = l(this, ca).get(n);
    if (e) return e;
    const s = w(this, Ai, kc).call(this, t);
    s.canvas.width = s.canvas.height = De, w(this, Ai, og).call(this, s, De, n);
    const i = s.measureText("");
    let r = i.fontBoundingBoxAscent, a = Math.abs(i.fontBoundingBoxDescent);
    if (r) {
      const c = r / (r + a);
      return l(this, ca).set(n, c), s.canvas.width = s.canvas.height = 0, c;
    }
    s.strokeStyle = "red", s.clearRect(0, 0, De, De), s.strokeText("g", 0, 0);
    let o = s.getImageData(0, 0, De, De).data;
    a = 0;
    for (let c = o.length - 1 - 3; c >= 0; c -= 4) if (o[c] > 0) {
      a = Math.ceil(c / 4 / De);
      break;
    }
    s.clearRect(0, 0, De, De), s.strokeText("A", 0, De), o = s.getImageData(0, 0, De, De).data, r = 0;
    for (let c = 0, u = o.length; c < u; c += 4) if (o[c] > 0) {
      r = De - Math.floor(c / 4 / De);
      break;
    }
    s.canvas.width = s.canvas.height = 0;
    const h = r ? r / (r + a) : FS;
    return l(this, ca).set(n, h), h;
  }, y(Oe, Ai), y(Oe, ca, /* @__PURE__ */ new Map()), y(Oe, La, /* @__PURE__ */ new Map()), y(Oe, Ul, /* @__PURE__ */ new WeakMap()), y(Oe, Rr, null), y(Oe, Ih, /* @__PURE__ */ new Set());
  let nf = Oe;
  class ol {
    static textContent(t) {
      const e = [], s = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null)
      };
      function i(r) {
        var a;
        if (!r) return;
        let o = null;
        const h = r.name;
        if (h === "#text") o = r.value;
        else if (ol.shouldBuildText(h)) (a = r == null ? void 0 : r.attributes) != null && a.textContent ? o = r.attributes.textContent : r.value && (o = r.value);
        else return;
        if (o !== null && e.push({
          str: o
        }), !!r.children) for (const c of r.children) i(c);
      }
      return i(t), s;
    }
    static shouldBuildText(t) {
      return !(t === "textarea" || t === "input" || t === "option" || t === "select");
    }
  }
  const jS = 65536, NS = 100, WS = 5e3, BS = pe ? Jx : qx, HS = pe ? Zx : sb, zS = pe ? Qx : Kx, VS = pe ? tS : ab;
  function GS(n = {}) {
    typeof n == "string" || n instanceof URL ? n = {
      url: n
    } : (n instanceof ArrayBuffer || ArrayBuffer.isView(n)) && (n = {
      data: n
    });
    const t = new YS(), { docId: e } = t, s = n.url ? XS(n.url) : null, i = n.data ? US(n.data) : null, r = n.httpHeaders || null, a = n.withCredentials === true, o = n.password ?? null, h = n.range instanceof _b ? n.range : null, c = Number.isInteger(n.rangeChunkSize) && n.rangeChunkSize > 0 ? n.rangeChunkSize : jS;
    let u = n.worker instanceof Ec ? n.worker : null;
    const d = n.verbosity, g = typeof n.docBaseUrl == "string" && !Pd(n.docBaseUrl) ? n.docBaseUrl : null, f = typeof n.cMapUrl == "string" ? n.cMapUrl : null, p = n.cMapPacked !== false, v = n.CMapReaderFactory || HS, b = typeof n.standardFontDataUrl == "string" ? n.standardFontDataUrl : null, _ = n.StandardFontDataFactory || VS, S = n.stopAtErrors !== true, x = Number.isInteger(n.maxImageSize) && n.maxImageSize > -1 ? n.maxImageSize : -1, C = n.isEvalSupported !== false, T = typeof n.isOffscreenCanvasSupported == "boolean" ? n.isOffscreenCanvasSupported : !pe, O = typeof n.isImageDecoderSupported == "boolean" ? n.isImageDecoderSupported : !pe && (Ee.platform.isFirefox || !globalThis.chrome), E = Number.isInteger(n.canvasMaxAreaInBytes) ? n.canvasMaxAreaInBytes : -1, D = typeof n.disableFontFace == "boolean" ? n.disableFontFace : pe, F = n.fontExtraProperties === true, L = n.enableXfa === true, N = n.ownerDocument || globalThis.document, P = n.disableRange === true, I = n.disableStream === true, W = n.disableAutoFetch === true, j = n.pdfBug === true, R = n.CanvasFactory || BS, st = n.FilterFactory || zS, J = n.enableHWA === true, _t = h ? h.length : n.length ?? NaN, Dt = typeof n.useSystemFonts == "boolean" ? n.useSystemFonts : !pe && !D, se = typeof n.useWorkerFetch == "boolean" ? n.useWorkerFetch : v === sb && _ === ab && f && b && So(f, document.baseURI) && So(b, document.baseURI), Ot = null;
    Cx(d);
    const dt = {
      canvasFactory: new R({
        ownerDocument: N,
        enableHWA: J
      }),
      filterFactory: new st({
        docId: e,
        ownerDocument: N
      }),
      cMapReaderFactory: se ? null : new v({
        baseUrl: f,
        isCompressed: p
      }),
      standardFontDataFactory: se ? null : new _({
        baseUrl: b
      })
    };
    if (!u) {
      const Nt = {
        verbosity: d,
        port: Er.workerPort
      };
      u = Nt.port ? Ec.fromPort(Nt) : new Ec(Nt), t._worker = u;
    }
    const ve = {
      docId: e,
      apiVersion: "4.10.38",
      data: i,
      password: o,
      disableAutoFetch: W,
      rangeChunkSize: c,
      length: _t,
      docBaseUrl: g,
      enableXfa: L,
      evaluatorOptions: {
        maxImageSize: x,
        disableFontFace: D,
        ignoreErrors: S,
        isEvalSupported: C,
        isOffscreenCanvasSupported: T,
        isImageDecoderSupported: O,
        canvasMaxAreaInBytes: E,
        fontExtraProperties: F,
        useSystemFonts: Dt,
        cMapUrl: se ? f : null,
        standardFontDataUrl: se ? b : null
      }
    }, vs = {
      disableFontFace: D,
      fontExtraProperties: F,
      ownerDocument: N,
      pdfBug: j,
      styleElement: Ot,
      loadingParams: {
        disableAutoFetch: W,
        enableXfa: L
      }
    };
    return u.promise.then(function() {
      if (t.destroyed) throw new Error("Loading aborted");
      if (u.destroyed) throw new Error("Worker was destroyed");
      const Nt = u.messageHandler.sendWithPromise("GetDocRequest", ve, i ? [
        i.buffer
      ] : null);
      let nt;
      if (h) nt = new yS(h, {
        disableRange: P,
        disableStream: I
      });
      else if (!i) {
        if (!s) throw new Error("getDocument - no `url` parameter provided.");
        let zi;
        if (pe) if (So(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype)) throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          zi = Wm;
        } else zi = PS;
        else zi = So(s) ? Wm : TS;
        nt = new zi({
          url: s,
          length: _t,
          httpHeaders: r,
          withCredentials: a,
          rangeChunkSize: c,
          disableRange: P,
          disableStream: I
        });
      }
      return Nt.then((zi) => {
        if (t.destroyed) throw new Error("Loading aborted");
        if (u.destroyed) throw new Error("Worker was destroyed");
        const Nn = new Wo(e, zi, u.port), Is = new QS(Nn, t, nt, vs, dt);
        t._transport = Is, Nn.send("Ready", null);
      });
    }).catch(t._capability.reject), t;
  }
  function XS(n) {
    if (n instanceof URL) return n.href;
    try {
      return new URL(n, window.location).href;
    } catch {
      if (pe && typeof n == "string") return n;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }
  function US(n) {
    if (pe && typeof Buffer < "u" && n instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (n instanceof Uint8Array && n.byteLength === n.buffer.byteLength) return n;
    if (typeof n == "string") return Dd(n);
    if (n instanceof ArrayBuffer || ArrayBuffer.isView(n) || typeof n == "object" && !isNaN(n == null ? void 0 : n.length)) return new Uint8Array(n);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }
  function Vm(n) {
    return typeof n == "object" && Number.isInteger(n == null ? void 0 : n.num) && n.num >= 0 && Number.isInteger(n == null ? void 0 : n.gen) && n.gen >= 0;
  }
  var af;
  const yb = class wb {
    constructor() {
      this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${Be(wb, af)._++}`, this.destroyed = false, this.onPassword = null, this.onProgress = null;
    }
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      var t, e, s, i;
      this.destroyed = true;
      try {
        (t = this._worker) != null && t.port && (this._worker._pendingDestroy = true), await ((e = this._transport) == null ? void 0 : e.destroy());
      } catch (r) {
        throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
      }
      this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
    }
  };
  af = /* @__PURE__ */ new WeakMap(), y(yb, af, 0);
  let YS = yb;
  class _b {
    constructor(t, e, s = false, i = null) {
      this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
    }
    addRangeListener(t) {
      this._rangeListeners.push(t);
    }
    addProgressListener(t) {
      this._progressListeners.push(t);
    }
    addProgressiveReadListener(t) {
      this._progressiveReadListeners.push(t);
    }
    addProgressiveDoneListener(t) {
      this._progressiveDoneListeners.push(t);
    }
    onDataRange(t, e) {
      for (const s of this._rangeListeners) s(t, e);
    }
    onDataProgress(t, e) {
      this._readyCapability.promise.then(() => {
        for (const s of this._progressListeners) s(t, e);
      });
    }
    onDataProgressiveRead(t) {
      this._readyCapability.promise.then(() => {
        for (const e of this._progressiveReadListeners) e(t);
      });
    }
    onDataProgressiveDone() {
      this._readyCapability.promise.then(() => {
        for (const t of this._progressiveDoneListeners) t();
      });
    }
    transportReady() {
      this._readyCapability.resolve();
    }
    requestDataRange(t, e) {
      ut("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  }
  class $S {
    constructor(t, e) {
      this._pdfInfo = t, this._transport = e;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return Z(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t) {
      return this._transport.getPage(t);
    }
    getPageIndex(t) {
      return this._transport.getPageIndex(t);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t) {
      return this._transport.getDestination(t);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    cleanup(t = false) {
      return this._transport.startCleanup(t || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(t) {
      return this._transport.cachedPageNumber(t);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }
  var Xr, mr, $s, Ra, Yu;
  class qS {
    constructor(t, e, s, i = false) {
      y(this, $s), y(this, Xr, null), y(this, mr, false), this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new mm() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new xb(), this._maybeCleanupAfterRender = false, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false;
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t, rotation: e = this.rotate, offsetX: s = 0, offsetY: i = 0, dontFlip: r = false } = {}) {
      return new dl({
        viewBox: this.view,
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: s,
        offsetY: i,
        dontFlip: r
      });
    }
    getAnnotations({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return Z(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      var t;
      return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
    }
    render({ canvasContext: t, viewport: e, intent: s = "display", annotationMode: i = gr.ENABLE, transform: r = null, background: a = null, optionalContentConfigPromise: o = null, annotationCanvasMap: h = null, pageColors: c = null, printAnnotationStorage: u = null, isEditing: d = false }) {
      var g, f;
      (g = this._stats) == null || g.time("Overall");
      const p = this._transport.getRenderingIntent(s, i, u, d), { renderingIntent: v, cacheKey: b } = p;
      m(this, mr, false), w(this, $s, Yu).call(this), o || (o = this._transport.getOptionalContentConfig(v));
      let _ = this._intentStates.get(b);
      _ || (_ = /* @__PURE__ */ Object.create(null), this._intentStates.set(b, _)), _.streamReaderCancelTimeout && (clearTimeout(_.streamReaderCancelTimeout), _.streamReaderCancelTimeout = null);
      const S = !!(v & Ue.PRINT);
      _.displayReadyCapability || (_.displayReadyCapability = Promise.withResolvers(), _.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (f = this._stats) == null || f.time("Page Request"), this._pumpOperatorList(p));
      const x = (O) => {
        var E;
        _.renderTasks.delete(C), (this._maybeCleanupAfterRender || S) && m(this, mr, true), w(this, $s, Ra).call(this, !S), O ? (C.capability.reject(O), this._abortOperatorList({
          intentState: _,
          reason: O instanceof Error ? O : new Error(O)
        })) : C.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (E = globalThis.Stats) != null && E.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
      }, C = new ZS({
        callback: x,
        params: {
          canvasContext: t,
          viewport: e,
          transform: r,
          background: a
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: h,
        operatorList: _.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !S,
        pdfBug: this._pdfBug,
        pageColors: c
      });
      (_.renderTasks || (_.renderTasks = /* @__PURE__ */ new Set())).add(C);
      const T = C.task;
      return Promise.all([
        _.displayReadyCapability.promise,
        o
      ]).then(([O, E]) => {
        var D;
        if (this.destroyed) {
          x();
          return;
        }
        if ((D = this._stats) == null || D.time("Rendering"), !(E.renderingIntent & v)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        C.initializeGraphics({
          transparency: O,
          optionalContentConfig: E
        }), C.operatorListChanged();
      }).catch(x), T;
    }
    getOperatorList({ intent: t = "display", annotationMode: e = gr.ENABLE, printAnnotationStorage: s = null, isEditing: i = false } = {}) {
      var r;
      function a() {
        h.operatorList.lastChunk && (h.opListReadCapability.resolve(h.operatorList), h.renderTasks.delete(c));
      }
      const o = this._transport.getRenderingIntent(t, e, s, i, true);
      let h = this._intentStates.get(o.cacheKey);
      h || (h = /* @__PURE__ */ Object.create(null), this._intentStates.set(o.cacheKey, h));
      let c;
      return h.opListReadCapability || (c = /* @__PURE__ */ Object.create(null), c.operatorListChanged = a, h.opListReadCapability = Promise.withResolvers(), (h.renderTasks || (h.renderTasks = /* @__PURE__ */ new Set())).add(c), h.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (r = this._stats) == null || r.time("Page Request"), this._pumpOperatorList(o)), h.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t = false, disableNormalization: e = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", {
        pageIndex: this._pageIndex,
        includeMarkedContent: t === true,
        disableNormalization: e === true
      }, {
        highWaterMark: 100,
        size(s) {
          return s.items.length;
        }
      });
    }
    getTextContent(t = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((s) => ol.textContent(s));
      const e = this.streamTextContent(t);
      return new Promise(function(s, i) {
        function r() {
          a.read().then(function({ value: h, done: c }) {
            if (c) {
              s(o);
              return;
            }
            o.lang ?? (o.lang = h.lang), Object.assign(o.styles, h.styles), o.items.push(...h.items), r();
          }, i);
        }
        const a = e.getReader(), o = {
          items: [],
          styles: /* @__PURE__ */ Object.create(null),
          lang: null
        };
        r();
      });
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t = [];
      for (const e of this._intentStates.values()) if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: true
      }), !e.opListReadCapability) for (const s of e.renderTasks) t.push(s.completed), s.cancel();
      return this.objs.clear(), m(this, mr, false), w(this, $s, Yu).call(this), Promise.all(t);
    }
    cleanup(t = false) {
      m(this, mr, true);
      const e = w(this, $s, Ra).call(this, false);
      return t && e && this._stats && (this._stats = new mm()), e;
    }
    _startRenderPage(t, e) {
      var s, i;
      const r = this._intentStates.get(e);
      r && ((s = this._stats) == null || s.timeEnd("Page Request"), (i = r.displayReadyCapability) == null || i.resolve(t));
    }
    _renderPageChunk(t, e) {
      for (let s = 0, i = t.length; s < i; s++) e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
      e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
      for (const s of e.renderTasks) s.operatorListChanged();
      t.lastChunk && w(this, $s, Ra).call(this, true);
    }
    _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: s, modifiedIds: i }) {
      const { map: r, transfer: a } = s, o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
        pageIndex: this._pageIndex,
        intent: t,
        cacheKey: e,
        annotationStorage: r,
        modifiedIds: i
      }, a).getReader(), h = this._intentStates.get(e);
      h.streamReader = o;
      const c = () => {
        o.read().then(({ value: u, done: d }) => {
          if (d) {
            h.streamReader = null;
            return;
          }
          this._transport.destroyed || (this._renderPageChunk(u, h), c());
        }, (u) => {
          if (h.streamReader = null, !this._transport.destroyed) {
            if (h.operatorList) {
              h.operatorList.lastChunk = true;
              for (const d of h.renderTasks) d.operatorListChanged();
              w(this, $s, Ra).call(this, true);
            }
            if (h.displayReadyCapability) h.displayReadyCapability.reject(u);
            else if (h.opListReadCapability) h.opListReadCapability.reject(u);
            else throw u;
          }
        });
      };
      c();
    }
    _abortOperatorList({ intentState: t, reason: e, force: s = false }) {
      if (t.streamReader) {
        if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
          if (t.renderTasks.size > 0) return;
          if (e instanceof pp) {
            let i = NS;
            e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
              t.streamReaderCancelTimeout = null, this._abortOperatorList({
                intentState: t,
                reason: e,
                force: true
              });
            }, i);
            return;
          }
        }
        if (t.streamReader.cancel(new Mr(e.message)).catch(() => {
        }), t.streamReader = null, !this._transport.destroyed) {
          for (const [i, r] of this._intentStates) if (r === t) {
            this._intentStates.delete(i);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  }
  Xr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakSet(), Ra = function(n = false) {
    if (w(this, $s, Yu).call(this), !l(this, mr) || this.destroyed) return false;
    if (n) return m(this, Xr, setTimeout(() => {
      m(this, Xr, null), w(this, $s, Ra).call(this, false);
    }, WS)), false;
    for (const { renderTasks: t, operatorList: e } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return false;
    return this._intentStates.clear(), this.objs.clear(), m(this, mr, false), true;
  }, Yu = function() {
    l(this, Xr) && (clearTimeout(l(this, Xr)), m(this, Xr, null));
  };
  var Zi, of;
  class KS {
    constructor() {
      y(this, Zi, /* @__PURE__ */ new Map()), y(this, of, Promise.resolve());
    }
    postMessage(t, e) {
      const s = {
        data: structuredClone(t, e ? {
          transfer: e
        } : null)
      };
      l(this, of).then(() => {
        for (const [i] of l(this, Zi)) i.call(this, s);
      });
    }
    addEventListener(t, e, s = null) {
      let i = null;
      if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
        const { signal: r } = s;
        if (r.aborted) {
          Q("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const a = () => this.removeEventListener(t, e);
        i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
      }
      l(this, Zi).set(e, i);
    }
    removeEventListener(t, e) {
      const s = l(this, Zi).get(e);
      s == null ? void 0 : s(), l(this, Zi).delete(e);
    }
    terminate() {
      for (const [, t] of l(this, Zi)) t == null ? void 0 : t();
      l(this, Zi).clear();
    }
  }
  Zi = /* @__PURE__ */ new WeakMap(), of = /* @__PURE__ */ new WeakMap();
  var hf, Qa, fn, qo, Tc, Fh, Mc;
  const tr = class be {
    constructor({ name: t = null, port: e = null, verbosity: s = Ax() } = {}) {
      y(this, qo);
      var i;
      if (this.name = t, this.destroyed = false, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
        if ((i = l(be, fn)) != null && i.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
        (l(be, fn) || m(be, fn, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
        return;
      }
      this._initialize();
    }
    get promise() {
      return this._readyCapability.promise;
    }
    get port() {
      return this._port;
    }
    get messageHandler() {
      return this._messageHandler;
    }
    _initializeFromPort(t) {
      this._port = t, this._messageHandler = new Wo("main", "worker", t), this._messageHandler.on("ready", function() {
      }), w(this, qo, Tc).call(this);
    }
    _initialize() {
      if (l(be, Qa) || l(be, Fh, Mc)) {
        this._setupFakeWorker();
        return;
      }
      let { workerSrc: t } = be;
      try {
        be._isSameOrigin(window.location.href, t) || (t = be._createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), s = new Wo("main", "worker", e), i = () => {
          r.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, r = new AbortController();
        e.addEventListener("error", () => {
          this._webWorker || i();
        }, {
          signal: r.signal
        }), s.on("test", (o) => {
          if (r.abort(), this.destroyed || !o) {
            i();
            return;
          }
          this._messageHandler = s, this._port = e, this._webWorker = e, w(this, qo, Tc).call(this);
        }), s.on("ready", (o) => {
          if (r.abort(), this.destroyed) {
            i();
            return;
          }
          try {
            a();
          } catch {
            this._setupFakeWorker();
          }
        });
        const a = () => {
          const o = new Uint8Array();
          s.send("test", o, [
            o.buffer
          ]);
        };
        a();
        return;
      } catch {
        Ed("The worker has been disabled.");
      }
      this._setupFakeWorker();
    }
    _setupFakeWorker() {
      l(be, Qa) || (Q("Setting up fake worker."), m(be, Qa, true)), be._setupFakeWorkerGlobal.then((t) => {
        if (this.destroyed) {
          this._readyCapability.reject(new Error("Worker was destroyed"));
          return;
        }
        const e = new KS();
        this._port = e;
        const s = `fake${Be(be, hf)._++}`, i = new Wo(s + "_worker", s, e);
        t.setup(i, e), this._messageHandler = new Wo(s, s + "_worker", e), w(this, qo, Tc).call(this);
      }).catch((t) => {
        this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
      });
    }
    destroy() {
      var t, e, s;
      this.destroyed = true, (t = this._webWorker) == null || t.terminate(), this._webWorker = null, (e = l(be, fn)) == null || e.delete(this._port), this._port = null, (s = this._messageHandler) == null || s.destroy(), this._messageHandler = null;
    }
    static fromPort(t) {
      var e;
      if (!(t != null && t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
      const s = (e = l(this, fn)) == null ? void 0 : e.get(t.port);
      if (s) {
        if (s._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return s;
      }
      return new be(t);
    }
    static get workerSrc() {
      if (Er.workerSrc) return Er.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
      return Z(this, "_setupFakeWorkerGlobal", (async () => l(this, Fh, Mc) ? l(this, Fh, Mc) : (await import(this.workerSrc).then(async (m2) => {
        await m2.__tla;
        return m2;
      })).WorkerMessageHandler)());
    }
  };
  hf = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakSet(), Tc = function() {
    this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }, Fh = /* @__PURE__ */ new WeakSet(), Mc = function() {
    var n;
    try {
      return ((n = globalThis.pdfjsWorker) == null ? void 0 : n.WorkerMessageHandler) || null;
    } catch {
      return null;
    }
  }, y(tr, Fh), y(tr, hf, 0), y(tr, Qa, false), y(tr, fn), pe && (m(tr, Qa, true), Er.workerSrc || (Er.workerSrc = "./pdf.worker.mjs")), tr._isSameOrigin = (n, t) => {
    let e;
    try {
      if (e = new URL(n), !e.origin || e.origin === "null") return false;
    } catch {
      return false;
    }
    const s = new URL(t, e);
    return e.origin === s.origin;
  }, tr._createCDNWrapper = (n) => {
    const t = `await import("${n}");`;
    return URL.createObjectURL(new Blob([
      t
    ], {
      type: "text/javascript"
    }));
  };
  let Ec = tr;
  var vr, pi, Ko, Qo, er, ua, Jo;
  class QS {
    constructor(t, e, s, i, r) {
      y(this, ua), y(this, vr, /* @__PURE__ */ new Map()), y(this, pi, /* @__PURE__ */ new Map()), y(this, Ko, /* @__PURE__ */ new Map()), y(this, Qo, /* @__PURE__ */ new Map()), y(this, er, null), this.messageHandler = t, this.loadingTask = e, this.commonObjs = new xb(), this.fontLoader = new Yx({
        ownerDocument: i.ownerDocument,
        styleElement: i.styleElement
      }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
    }
    get annotationStorage() {
      return Z(this, "annotationStorage", new wp());
    }
    getRenderingIntent(t, e = gr.ENABLE, s = null, i = false, r = false) {
      let a = Ue.DISPLAY, o = $g;
      switch (t) {
        case "any":
          a = Ue.ANY;
          break;
        case "display":
          break;
        case "print":
          a = Ue.PRINT;
          break;
        default:
          Q(`getRenderingIntent - invalid intent: ${t}`);
      }
      const h = a & Ue.PRINT && s instanceof J0 ? s : this.annotationStorage;
      switch (e) {
        case gr.DISABLE:
          a += Ue.ANNOTATIONS_DISABLE;
          break;
        case gr.ENABLE:
          break;
        case gr.ENABLE_FORMS:
          a += Ue.ANNOTATIONS_FORMS;
          break;
        case gr.ENABLE_STORAGE:
          a += Ue.ANNOTATIONS_STORAGE, o = h.serializable;
          break;
        default:
          Q(`getRenderingIntent - invalid annotationMode: ${e}`);
      }
      i && (a += Ue.IS_EDITING), r && (a += Ue.OPLIST);
      const { ids: c, hash: u } = h.modifiedIds, d = [
        a,
        o.hash,
        u
      ];
      return {
        renderingIntent: a,
        cacheKey: d.join("_"),
        annotationStorageSerializable: o,
        modifiedIds: c
      };
    }
    destroy() {
      var t;
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true, this.destroyCapability = Promise.withResolvers(), (t = l(this, er)) == null || t.reject(new Error("Worker was destroyed during onPassword callback"));
      const e = [];
      for (const i of l(this, pi).values()) e.push(i._destroy());
      l(this, pi).clear(), l(this, Ko).clear(), l(this, Qo).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
      const s = this.messageHandler.sendWithPromise("Terminate", null);
      return e.push(s), Promise.all(e).then(() => {
        var i, r;
        this.commonObjs.clear(), this.fontLoader.clear(), l(this, vr).clear(), this.filterFactory.destroy(), nf.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new Mr("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
      }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t, loadingTask: e } = this;
      t.on("GetReader", (s, i) => {
        Ft(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
          this._lastProgress = {
            loaded: r.loaded,
            total: r.total
          };
        }, i.onPull = () => {
          this._fullReader.read().then(function({ value: r, done: a }) {
            if (a) {
              i.close();
              return;
            }
            Ft(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [
              r
            ]);
          }).catch((r) => {
            i.error(r);
          });
        }, i.onCancel = (r) => {
          this._fullReader.cancel(r), i.ready.catch((a) => {
            if (!this.destroyed) throw a;
          });
        };
      }), t.on("ReaderHeadersReady", async (s) => {
        var i;
        await this._fullReader.headersReady;
        const { isStreamingSupported: r, isRangeSupported: a, contentLength: o } = this._fullReader;
        return (!r || !a) && (this._lastProgress && ((i = e.onProgress) == null || i.call(e, this._lastProgress)), this._fullReader.onProgress = (h) => {
          var c;
          (c = e.onProgress) == null || c.call(e, {
            loaded: h.loaded,
            total: h.total
          });
        }), {
          isStreamingSupported: r,
          isRangeSupported: a,
          contentLength: o
        };
      }), t.on("GetRangeReader", (s, i) => {
        Ft(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
        const r = this._networkStream.getRangeReader(s.begin, s.end);
        if (!r) {
          i.close();
          return;
        }
        i.onPull = () => {
          r.read().then(function({ value: a, done: o }) {
            if (o) {
              i.close();
              return;
            }
            Ft(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [
              a
            ]);
          }).catch((a) => {
            i.error(a);
          });
        }, i.onCancel = (a) => {
          r.cancel(a), i.ready.catch((o) => {
            if (!this.destroyed) throw o;
          });
        };
      }), t.on("GetDoc", ({ pdfInfo: s }) => {
        this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new $S(s, this));
      }), t.on("DocException", (s) => {
        e._capability.reject(Ie(s));
      }), t.on("PasswordRequest", (s) => {
        m(this, er, Promise.withResolvers());
        try {
          if (!e.onPassword) throw Ie(s);
          const i = (r) => {
            r instanceof Error ? l(this, er).reject(r) : l(this, er).resolve({
              password: r
            });
          };
          e.onPassword(i, s.code);
        } catch (i) {
          l(this, er).reject(i);
        }
        return l(this, er).promise;
      }), t.on("DataLoaded", (s) => {
        var i;
        (i = e.onProgress) == null || i.call(e, {
          loaded: s.length,
          total: s.length
        }), this.downloadInfoCapability.resolve(s);
      }), t.on("StartRenderPage", (s) => {
        this.destroyed || l(this, pi).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
      }), t.on("commonobj", ([s, i, r]) => {
        var a;
        if (this.destroyed || this.commonObjs.has(s)) return null;
        switch (i) {
          case "Font":
            const { disableFontFace: o, fontExtraProperties: h, pdfBug: c } = this._params;
            if ("error" in r) {
              const f = r.error;
              Q(`Error during font loading: ${f}`), this.commonObjs.resolve(s, f);
              break;
            }
            const u = c && (a = globalThis.FontInspector) != null && a.enabled ? (f, p) => globalThis.FontInspector.fontAdded(f, p) : null, d = new $x(r, {
              disableFontFace: o,
              fontExtraProperties: h,
              inspectFont: u
            });
            this.fontLoader.bind(d).catch(() => t.sendWithPromise("FontFallback", {
              id: s
            })).finally(() => {
              !h && d.data && (d.data = null), this.commonObjs.resolve(s, d);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: g } = r;
            Ft(g, "The imageRef must be defined.");
            for (const f of l(this, pi).values()) for (const [, p] of f.objs) if ((p == null ? void 0 : p.ref) === g) return p.dataLen ? (this.commonObjs.resolve(s, structuredClone(p)), p.dataLen) : null;
            break;
          case "FontPath":
          case "Image":
          case "Pattern":
            this.commonObjs.resolve(s, r);
            break;
          default:
            throw new Error(`Got unknown common object type ${i}`);
        }
        return null;
      }), t.on("obj", ([s, i, r, a]) => {
        var o;
        if (this.destroyed) return;
        const h = l(this, pi).get(i);
        if (!h.objs.has(s)) {
          if (h._intentStates.size === 0) {
            (o = a == null ? void 0 : a.bitmap) == null || o.close();
            return;
          }
          switch (r) {
            case "Image":
              h.objs.resolve(s, a), (a == null ? void 0 : a.dataLen) > wx && (h._maybeCleanupAfterRender = true);
              break;
            case "Pattern":
              h.objs.resolve(s, a);
              break;
            default:
              throw new Error(`Got unknown object type ${r}`);
          }
        }
      }), t.on("DocProgress", (s) => {
        var i;
        this.destroyed || (i = e.onProgress) == null || i.call(e, {
          loaded: s.loaded,
          total: s.total
        });
      }), t.on("FetchBuiltInCMap", async (s) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.cMapReaderFactory) throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
        return this.cMapReaderFactory.fetch(s);
      }), t.on("FetchStandardFontData", async (s) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.standardFontDataFactory) throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
        return this.standardFontDataFactory.fetch(s);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      var t;
      this.annotationStorage.size <= 0 && Q("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: e, transfer: s } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", {
        isPureXfa: !!this._htmlForXfa,
        numPages: this._numPages,
        annotationStorage: e,
        filename: ((t = this._fullReader) == null ? void 0 : t.filename) ?? null
      }, s).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t) {
      if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
      const e = t - 1, s = l(this, Ko).get(e);
      if (s) return s;
      const i = this.messageHandler.sendWithPromise("GetPage", {
        pageIndex: e
      }).then((r) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        r.refStr && l(this, Qo).set(r.refStr, t);
        const a = new qS(e, r, this, this._params.pdfBug);
        return l(this, pi).set(e, a), a;
      });
      return l(this, Ko).set(e, i), i;
    }
    getPageIndex(t) {
      return Vm(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen
      }) : Promise.reject(new Error("Invalid pageIndex request."));
    }
    getAnnotations(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotations", {
        pageIndex: t,
        intent: e
      });
    }
    getFieldObjects() {
      return w(this, ua, Jo).call(this, "GetFieldObjects");
    }
    hasJSActions() {
      return w(this, ua, Jo).call(this, "HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t) {
      return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
        id: t
      });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getDocJSActions() {
      return w(this, ua, Jo).call(this, "GetDocJSActions");
    }
    getPageJSActions(t) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", {
        pageIndex: t
      });
    }
    getStructTree(t) {
      return this.messageHandler.sendWithPromise("GetStructTree", {
        pageIndex: t
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t) {
      return w(this, ua, Jo).call(this, "GetOptionalContentConfig").then((e) => new bS(e, t));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t = "GetMetadata", e = l(this, vr).get(t);
      if (e) return e;
      const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
        var r, a;
        return {
          info: i[0],
          metadata: i[1] ? new mS(i[1]) : null,
          contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
          contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
        };
      });
      return l(this, vr).set(t, s), s;
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const e of l(this, pi).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
        this.commonObjs.clear(), t || this.fontLoader.clear(), l(this, vr).clear(), this.filterFactory.destroy(true), nf.cleanup();
      }
    }
    cachedPageNumber(t) {
      if (!Vm(t)) return null;
      const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
      return l(this, Qo).get(e) ?? null;
    }
  }
  vr = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakSet(), Jo = function(n, t = null) {
    const e = l(this, vr).get(n);
    if (e) return e;
    const s = this.messageHandler.sendWithPromise(n, t);
    return l(this, vr).set(n, s), s;
  };
  const Zo = Symbol("INITIAL_DATA");
  var rs, Dc, lf;
  class xb {
    constructor() {
      y(this, Dc), y(this, rs, /* @__PURE__ */ Object.create(null));
    }
    get(t, e = null) {
      if (e) {
        const i = w(this, Dc, lf).call(this, t);
        return i.promise.then(() => e(i.data)), null;
      }
      const s = l(this, rs)[t];
      if (!s || s.data === Zo) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
      return s.data;
    }
    has(t) {
      const e = l(this, rs)[t];
      return !!e && e.data !== Zo;
    }
    delete(t) {
      const e = l(this, rs)[t];
      return !e || e.data === Zo ? false : (delete l(this, rs)[t], true);
    }
    resolve(t, e = null) {
      const s = w(this, Dc, lf).call(this, t);
      s.data = e, s.resolve();
    }
    clear() {
      var t;
      for (const e in l(this, rs)) {
        const { data: s } = l(this, rs)[e];
        (t = s == null ? void 0 : s.bitmap) == null || t.close();
      }
      m(this, rs, /* @__PURE__ */ Object.create(null));
    }
    *[Symbol.iterator]() {
      for (const t in l(this, rs)) {
        const { data: e } = l(this, rs)[t];
        e !== Zo && (yield [
          t,
          e
        ]);
      }
    }
  }
  rs = /* @__PURE__ */ new WeakMap(), Dc = /* @__PURE__ */ new WeakSet(), lf = function(n) {
    var t;
    return (t = l(this, rs))[n] || (t[n] = {
      ...Promise.withResolvers(),
      data: Zo
    });
  };
  var Ur;
  class JS {
    constructor(t) {
      y(this, Ur, null), m(this, Ur, t), this.onContinue = null;
    }
    get promise() {
      return l(this, Ur).capability.promise;
    }
    cancel(t = 0) {
      l(this, Ur).cancel(null, t);
    }
    get separateAnnots() {
      const { separateAnnots: t } = l(this, Ur).operatorList;
      if (!t) return false;
      const { annotationCanvasMap: e } = l(this, Ur);
      return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
    }
  }
  Ur = /* @__PURE__ */ new WeakMap();
  var Yr, Ia;
  const Sb = class th {
    constructor({ callback: t, params: e, objs: s, commonObjs: i, annotationCanvasMap: r, operatorList: a, pageIndex: o, canvasFactory: h, filterFactory: c, useRequestAnimationFrame: u = false, pdfBug: d = false, pageColors: g = null }) {
      y(this, Yr, null), this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = c, this._pdfBug = d, this.pageColors = g, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = u === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new JS(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t = false, optionalContentConfig: e }) {
      var s, i;
      if (this.cancelled) return;
      if (this._canvas) {
        if (l(th, Ia).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        l(th, Ia).add(this._canvas);
      }
      this._pdfBug && (s = globalThis.StepperManager) != null && s.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
      const { canvasContext: r, viewport: a, transform: o, background: h } = this.params;
      this.gfx = new yc(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
        optionalContentConfig: e
      }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
        transform: o,
        viewport: a,
        transparency: t,
        background: h
      }), this.operatorListIdx = 0, this.graphicsReady = true, (i = this.graphicsReadyCallback) == null || i.call(this);
    }
    cancel(t = null, e = 0) {
      var s;
      this.running = false, this.cancelled = true, (s = this.gfx) == null || s.endDrawing(), l(this, Yr) && (window.cancelAnimationFrame(l(this, Yr)), m(this, Yr, null)), l(th, Ia).delete(this._canvas), this.callback(t || new pp(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
    }
    operatorListChanged() {
      var t;
      if (!this.graphicsReady) {
        this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        return;
      }
      (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
    }
    _continue() {
      this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? m(this, Yr, window.requestAnimationFrame(() => {
        m(this, Yr, null), this._nextBound().catch(this._cancelBound);
      })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), l(th, Ia).delete(this._canvas), this.callback())));
    }
  };
  Yr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), y(Sb, Ia, /* @__PURE__ */ new WeakSet());
  let ZS = Sb;
  const tC = "4.10.38", eC = "f9bea397f";
  function Gm(n) {
    return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
  }
  function vo(n) {
    return Math.max(0, Math.min(255, 255 * n));
  }
  class Xm {
    static CMYK_G([t, e, s, i]) {
      return [
        "G",
        1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)
      ];
    }
    static G_CMYK([t]) {
      return [
        "CMYK",
        0,
        0,
        0,
        1 - t
      ];
    }
    static G_RGB([t]) {
      return [
        "RGB",
        t,
        t,
        t
      ];
    }
    static G_rgb([t]) {
      return t = vo(t), [
        t,
        t,
        t
      ];
    }
    static G_HTML([t]) {
      const e = Gm(t);
      return `#${e}${e}${e}`;
    }
    static RGB_G([t, e, s]) {
      return [
        "G",
        0.3 * t + 0.59 * e + 0.11 * s
      ];
    }
    static RGB_rgb(t) {
      return t.map(vo);
    }
    static RGB_HTML(t) {
      return `#${t.map(Gm).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [
        null
      ];
    }
    static CMYK_RGB([t, e, s, i]) {
      return [
        "RGB",
        1 - Math.min(1, t + i),
        1 - Math.min(1, s + i),
        1 - Math.min(1, e + i)
      ];
    }
    static CMYK_rgb([t, e, s, i]) {
      return [
        vo(1 - Math.min(1, t + i)),
        vo(1 - Math.min(1, s + i)),
        vo(1 - Math.min(1, e + i))
      ];
    }
    static CMYK_HTML(t) {
      const e = this.CMYK_RGB(t).slice(1);
      return this.RGB_HTML(e);
    }
    static RGB_CMYK([t, e, s]) {
      const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
      return [
        "CMYK",
        i,
        r,
        a,
        o
      ];
    }
  }
  class sC {
    create(t, e, s = false) {
      if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
      const i = this._createSVG("svg:svg");
      return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
    }
    createElement(t) {
      if (typeof t != "string") throw new Error("Invalid SVG element type");
      return this._createSVG(t);
    }
    _createSVG(t) {
      ut("Abstract method `_createSVG` called.");
    }
  }
  class xp extends sC {
    _createSVG(t) {
      return document.createElementNS(li, t);
    }
  }
  class Cb {
    static setupStorage(t, e, s, i, r) {
      const a = i.getValue(e, {
        value: null
      });
      switch (s.name) {
        case "textarea":
          if (a.value !== null && (t.textContent = a.value), r === "print") break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
          break;
        case "input":
          if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
            if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", true) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print") break;
            t.addEventListener("change", (o) => {
              i.setValue(e, {
                value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
              });
            });
          } else {
            if (a.value !== null && t.setAttribute("value", a.value), r === "print") break;
            t.addEventListener("input", (o) => {
              i.setValue(e, {
                value: o.target.value
              });
            });
          }
          break;
        case "select":
          if (a.value !== null) {
            t.setAttribute("value", a.value);
            for (const o of s.children) o.attributes.value === a.value ? o.attributes.selected = true : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
          }
          t.addEventListener("input", (o) => {
            const h = o.target.options, c = h.selectedIndex === -1 ? "" : h[h.selectedIndex].value;
            i.setValue(e, {
              value: c
            });
          });
          break;
      }
    }
    static setAttributes({ html: t, element: e, storage: s = null, intent: i, linkService: r }) {
      const { attributes: a } = e, o = t instanceof HTMLAnchorElement;
      a.type === "radio" && (a.name = `${a.name}-${i}`);
      for (const [h, c] of Object.entries(a)) if (c != null) switch (h) {
        case "class":
          c.length && t.setAttribute(h, c.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t.setAttribute("data-element-id", c);
          break;
        case "style":
          Object.assign(t.style, c);
          break;
        case "textContent":
          t.textContent = c;
          break;
        default:
          (!o || h !== "href" && h !== "newWindow") && t.setAttribute(h, c);
      }
      o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
    }
    static render(t) {
      var e, s;
      const i = t.annotationStorage, r = t.linkService, a = t.xfaHtml, o = t.intent || "display", h = document.createElement(a.name);
      a.attributes && this.setAttributes({
        html: h,
        element: a,
        intent: o,
        linkService: r
      });
      const c = o !== "richText", u = t.div;
      if (u.append(h), t.viewport) {
        const f = `matrix(${t.viewport.transform.join(",")})`;
        u.style.transform = f;
      }
      c && u.setAttribute("class", "xfaLayer xfaFont");
      const d = [];
      if (a.children.length === 0) {
        if (a.value) {
          const f = document.createTextNode(a.value);
          h.append(f), c && ol.shouldBuildText(a.name) && d.push(f);
        }
        return {
          textDivs: d
        };
      }
      const g = [
        [
          a,
          -1,
          h
        ]
      ];
      for (; g.length > 0; ) {
        const [f, p, v] = g.at(-1);
        if (p + 1 === f.children.length) {
          g.pop();
          continue;
        }
        const b = f.children[++g.at(-1)[1]];
        if (b === null) continue;
        const { name: _ } = b;
        if (_ === "#text") {
          const x = document.createTextNode(b.value);
          d.push(x), v.append(x);
          continue;
        }
        const S = (e = b == null ? void 0 : b.attributes) != null && e.xmlns ? document.createElementNS(b.attributes.xmlns, _) : document.createElement(_);
        if (v.append(S), b.attributes && this.setAttributes({
          html: S,
          element: b,
          storage: i,
          intent: o,
          linkService: r
        }), ((s = b.children) == null ? void 0 : s.length) > 0) g.push([
          b,
          -1,
          S
        ]);
        else if (b.value) {
          const x = document.createTextNode(b.value);
          c && ol.shouldBuildText(_) && d.push(x), S.append(x);
        }
      }
      for (const f of u.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) f.setAttribute("readOnly", true);
      return {
        textDivs: d
      };
    }
    static update(t) {
      const e = `matrix(${t.viewport.transform.join(",")})`;
      t.div.style.transform = e, t.div.hidden = false;
    }
  }
  const fl = 1e3, iC = 9, Ln = /* @__PURE__ */ new WeakSet();
  function Dr(n) {
    return {
      width: n[2] - n[0],
      height: n[3] - n[1]
    };
  }
  class rC {
    static create(t) {
      switch (t.data.annotationType) {
        case Wt.LINK:
          return new Mb(t);
        case Wt.TEXT:
          return new aC(t);
        case Wt.WIDGET:
          switch (t.data.fieldType) {
            case "Tx":
              return new oC(t);
            case "Btn":
              return t.data.radioButton ? new Eb(t) : t.data.checkBox ? new lC(t) : new cC(t);
            case "Ch":
              return new uC(t);
            case "Sig":
              return new hC(t);
          }
          return new jn(t);
        case Wt.POPUP:
          return new uf(t);
        case Wt.FREETEXT:
          return new Pb(t);
        case Wt.LINE:
          return new gC(t);
        case Wt.SQUARE:
          return new fC(t);
        case Wt.CIRCLE:
          return new pC(t);
        case Wt.POLYLINE:
          return new Lb(t);
        case Wt.CARET:
          return new vC(t);
        case Wt.INK:
          return new Sp(t);
        case Wt.POLYGON:
          return new mC(t);
        case Wt.HIGHLIGHT:
          return new Rb(t);
        case Wt.UNDERLINE:
          return new bC(t);
        case Wt.SQUIGGLY:
          return new yC(t);
        case Wt.STRIKEOUT:
          return new wC(t);
        case Wt.STAMP:
          return new Ib(t);
        case Wt.FILEATTACHMENT:
          return new _C(t);
        default:
          return new Gt(t);
      }
    }
  }
  var $r, eh, sh, Oc, cf;
  const nC = class Ab {
    constructor(t, { isRenderable: e = false, ignoreBorder: s = false, createQuadrilaterals: i = false } = {}) {
      y(this, Oc), y(this, $r, null), y(this, eh, false), y(this, sh, null), this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
    }
    static _hasPopupData({ titleObj: t, contentsObj: e, richText: s }) {
      return !!(t != null && t.str || e != null && e.str || s != null && s.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return Ab._hasPopupData(this.data);
    }
    updateEdited(t) {
      var e;
      if (!this.container) return;
      l(this, $r) || m(this, $r, {
        rect: this.data.rect.slice(0)
      });
      const { rect: s } = t;
      s && w(this, Oc, cf).call(this, s), (e = l(this, sh)) == null || e.popup.updateEdited(t);
    }
    resetEdited() {
      var t;
      l(this, $r) && (w(this, Oc, cf).call(this, l(this, $r).rect), (t = l(this, sh)) == null || t.popup.resetEdited(), m(this, $r, null));
    }
    _createContainer(t) {
      const { data: e, parent: { page: s, viewport: i } } = this, r = document.createElement("section");
      r.setAttribute("data-annotation-id", e.id), this instanceof jn || (r.tabIndex = fl);
      const { style: a } = r;
      if (a.zIndex = this.parent.zIndex++, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof uf) {
        const { rotation: v } = e;
        return !e.hasOwnCanvas && v !== 0 && this.setRotation(v, r), r;
      }
      const { width: o, height: h } = Dr(e.rect);
      if (!t && e.borderStyle.width > 0) {
        a.borderWidth = `${e.borderStyle.width}px`;
        const v = e.borderStyle.horizontalCornerRadius, b = e.borderStyle.verticalCornerRadius;
        if (v > 0 || b > 0) {
          const S = `calc(${v}px * var(--scale-factor)) / calc(${b}px * var(--scale-factor))`;
          a.borderRadius = S;
        } else if (this instanceof Eb) {
          const S = `calc(${o}px * var(--scale-factor)) / calc(${h}px * var(--scale-factor))`;
          a.borderRadius = S;
        }
        switch (e.borderStyle.style) {
          case fo.SOLID:
            a.borderStyle = "solid";
            break;
          case fo.DASHED:
            a.borderStyle = "dashed";
            break;
          case fo.BEVELED:
            Q("Unimplemented border style: beveled");
            break;
          case fo.INSET:
            Q("Unimplemented border style: inset");
            break;
          case fo.UNDERLINE:
            a.borderBottomStyle = "solid";
            break;
        }
        const _ = e.borderColor || null;
        _ ? (m(this, eh, true), a.borderColor = V.makeHexColor(_[0] | 0, _[1] | 0, _[2] | 0)) : a.borderWidth = 0;
      }
      const c = V.normalizeRect([
        e.rect[0],
        s.view[3] - e.rect[1] + s.view[1],
        e.rect[2],
        s.view[3] - e.rect[3] + s.view[1]
      ]), { pageWidth: u, pageHeight: d, pageX: g, pageY: f } = i.rawDims;
      a.left = `${100 * (c[0] - g) / u}%`, a.top = `${100 * (c[1] - f) / d}%`;
      const { rotation: p } = e;
      return e.hasOwnCanvas || p === 0 ? (a.width = `${100 * o / u}%`, a.height = `${100 * h / d}%`) : this.setRotation(p, r), r;
    }
    setRotation(t, e = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: s, pageHeight: i } = this.parent.viewport.rawDims, { width: r, height: a } = Dr(this.data.rect);
      let o, h;
      t % 180 === 0 ? (o = 100 * r / s, h = 100 * a / i) : (o = 100 * a / s, h = 100 * r / i), e.style.width = `${o}%`, e.style.height = `${h}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
    }
    get _commonActions() {
      const t = (e, s, i) => {
        const r = i.detail[e], a = r[0], o = r.slice(1);
        i.target.style[s] = Xm[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
          [s]: Xm[`${a}_rgb`](o)
        });
      };
      return Z(this, "_commonActions", {
        display: (e) => {
          const { display: s } = e.detail, i = s % 2 === 1;
          this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noView: i,
            noPrint: s === 1 || s === 2
          });
        },
        print: (e) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !e.detail.print
          });
        },
        hidden: (e) => {
          const { hidden: s } = e.detail;
          this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noPrint: s,
            noView: s
          });
        },
        focus: (e) => {
          setTimeout(() => e.target.focus({
            preventScroll: false
          }), 0);
        },
        userName: (e) => {
          e.target.title = e.detail.userName;
        },
        readonly: (e) => {
          e.target.disabled = e.detail.readonly;
        },
        required: (e) => {
          this._setRequired(e.target, e.detail.required);
        },
        bgColor: (e) => {
          t("bgColor", "backgroundColor", e);
        },
        fillColor: (e) => {
          t("fillColor", "backgroundColor", e);
        },
        fgColor: (e) => {
          t("fgColor", "color", e);
        },
        textColor: (e) => {
          t("textColor", "color", e);
        },
        borderColor: (e) => {
          t("borderColor", "borderColor", e);
        },
        strokeColor: (e) => {
          t("strokeColor", "borderColor", e);
        },
        rotation: (e) => {
          const s = e.detail.rotation;
          this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
            rotation: s
          });
        }
      });
    }
    _dispatchEventFromSandbox(t, e) {
      const s = this._commonActions;
      for (const i of Object.keys(e.detail)) {
        const r = t[i] || s[i];
        r == null ? void 0 : r(e);
      }
    }
    _setDefaultPropertiesFromJS(t) {
      if (!this.enableScripting) return;
      const e = this.annotationStorage.getRawValue(this.data.id);
      if (!e) return;
      const s = this._commonActions;
      for (const [i, r] of Object.entries(e)) {
        const a = s[i];
        if (a) {
          const o = {
            detail: {
              [i]: r
            },
            target: t
          };
          a(o), delete e[i];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t } = this.data;
      if (!t) return;
      const [e, s, i, r] = this.data.rect.map((v) => Math.fround(v));
      if (t.length === 8) {
        const [v, b, _, S] = t.subarray(2, 6);
        if (i === v && r === b && e === _ && s === S) return;
      }
      const { style: a } = this.container;
      let o;
      if (l(this, eh)) {
        const { borderColor: v, borderWidth: b } = a;
        a.borderWidth = 0, o = [
          "url('data:image/svg+xml;utf8,",
          '<svg xmlns="http://www.w3.org/2000/svg"',
          ' preserveAspectRatio="none" viewBox="0 0 1 1">',
          `<g fill="transparent" stroke="${v}" stroke-width="${b}">`
        ], this.container.classList.add("hasBorder");
      }
      const h = i - e, c = r - s, { svgFactory: u } = this, d = u.createElement("svg");
      d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0);
      const g = u.createElement("defs");
      d.append(g);
      const f = u.createElement("clipPath"), p = `clippath_${this.data.id}`;
      f.setAttribute("id", p), f.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(f);
      for (let v = 2, b = t.length; v < b; v += 8) {
        const _ = t[v], S = t[v + 1], x = t[v + 2], C = t[v + 3], T = u.createElement("rect"), O = (x - e) / h, E = (r - S) / c, D = (_ - x) / h, F = (S - C) / c;
        T.setAttribute("x", O), T.setAttribute("y", E), T.setAttribute("width", D), T.setAttribute("height", F), f.append(T), o == null ? void 0 : o.push(`<rect vector-effect="non-scaling-stroke" x="${O}" y="${E}" width="${D}" height="${F}"/>`);
      }
      l(this, eh) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(d), this.container.style.clipPath = `url(#${p})`;
    }
    _createPopup() {
      const { data: t } = this, e = m(this, sh, new uf({
        data: {
          color: t.color,
          titleObj: t.titleObj,
          modificationDate: t.modificationDate,
          contentsObj: t.contentsObj,
          richText: t.richText,
          parentRect: t.rect,
          borderStyle: 0,
          id: `popup_${t.id}`,
          rotation: t.rotation
        },
        parent: this.parent,
        elements: [
          this
        ]
      }));
      this.parent.div.append(e.render());
    }
    render() {
      ut("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t, e = null) {
      const s = [];
      if (this._fieldObjects) {
        const i = this._fieldObjects[t];
        if (i) for (const { page: r, id: a, exportValues: o } of i) {
          if (r === -1 || a === e) continue;
          const h = typeof o == "string" ? o : null, c = document.querySelector(`[data-element-id="${a}"]`);
          if (c && !Ln.has(c)) {
            Q(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: h,
            domElement: c
          });
        }
        return s;
      }
      for (const i of document.getElementsByName(t)) {
        const { exportValue: r } = i, a = i.getAttribute("data-element-id");
        a !== e && Ln.has(i) && s.push({
          id: a,
          exportValue: r,
          domElement: i
        });
      }
      return s;
    }
    show() {
      var t;
      this.container && (this.container.hidden = false), (t = this.popup) == null || t.maybeShow();
    }
    hide() {
      var t;
      this.container && (this.container.hidden = true), (t = this.popup) == null || t.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t = this.getElementsToTriggerPopup();
      if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
      else t.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t, data: { id: e } } = this;
      this.container.addEventListener("dblclick", () => {
        var s;
        (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
          source: this,
          mode: t,
          editId: e
        });
      });
    }
  };
  $r = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ new WeakMap(), sh = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakSet(), cf = function(n) {
    const { container: { style: t }, data: { rect: e, rotation: s }, parent: { viewport: { rawDims: { pageWidth: i, pageHeight: r, pageX: a, pageY: o } } } } = this;
    e == null ? void 0 : e.splice(0, 4, ...n);
    const { width: h, height: c } = Dr(n);
    t.left = `${100 * (n[0] - a) / i}%`, t.top = `${100 * (r - n[3] + o) / r}%`, s === 0 ? (t.width = `${100 * h / i}%`, t.height = `${100 * c / r}%`) : this.setRotation(s);
  };
  let Gt = nC;
  var qs, Sn, kb, Tb;
  class Mb extends Gt {
    constructor(t, e = null) {
      super(t, {
        isRenderable: true,
        ignoreBorder: !!(e != null && e.ignoreBorder),
        createQuadrilaterals: true
      }), y(this, qs), this.isTooltipOnly = t.data.isTooltipOnly;
    }
    render() {
      const { data: t, linkService: e } = this, s = document.createElement("a");
      s.setAttribute("data-element-id", t.id);
      let i = false;
      return t.url ? (e.addLinkAttributes(s, t.url, t.newWindow), i = true) : t.action ? (this._bindNamedAction(s, t.action), i = true) : t.attachment ? (w(this, qs, kb).call(this, s, t.attachment, t.attachmentDest), i = true) : t.setOCGState ? (w(this, qs, Tb).call(this, s, t.setOCGState), i = true) : t.dest ? (this._bindLink(s, t.dest), i = true) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, t), i = true), t.resetForm ? (this._bindResetFormAction(s, t.resetForm), i = true) : this.isTooltipOnly && !i && (this._bindLink(s, ""), i = true)), this.container.classList.add("linkAnnotation"), i && this.container.append(s), this.container;
    }
    _bindLink(t, e) {
      t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), false), (e || e === "") && w(this, qs, Sn).call(this);
    }
    _bindNamedAction(t, e) {
      t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), false), w(this, qs, Sn).call(this);
    }
    _bindJSAction(t, e) {
      t.href = this.linkService.getAnchorUrl("");
      const s = /* @__PURE__ */ new Map([
        [
          "Action",
          "onclick"
        ],
        [
          "Mouse Up",
          "onmouseup"
        ],
        [
          "Mouse Down",
          "onmousedown"
        ]
      ]);
      for (const i of Object.keys(e.actions)) {
        const r = s.get(i);
        r && (t[r] = () => {
          var a;
          return (a = this.linkService.eventBus) == null || a.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e.id,
              name: i
            }
          }), false;
        });
      }
      t.onclick || (t.onclick = () => false), w(this, qs, Sn).call(this);
    }
    _bindResetFormAction(t, e) {
      const s = t.onclick;
      if (s || (t.href = this.linkService.getAnchorUrl("")), w(this, qs, Sn).call(this), !this._fieldObjects) {
        Q('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (t.onclick = () => false);
        return;
      }
      t.onclick = () => {
        var i;
        s == null ? void 0 : s();
        const { fields: r, refs: a, include: o } = e, h = [];
        if (r.length !== 0 || a.length !== 0) {
          const d = new Set(a);
          for (const g of r) {
            const f = this._fieldObjects[g] || [];
            for (const { id: p } of f) d.add(p);
          }
          for (const g of Object.values(this._fieldObjects)) for (const f of g) d.has(f.id) === o && h.push(f);
        } else for (const d of Object.values(this._fieldObjects)) h.push(...d);
        const c = this.annotationStorage, u = [];
        for (const d of h) {
          const { id: g } = d;
          switch (u.push(g), d.type) {
            case "text": {
              const p = d.defaultValue || "";
              c.setValue(g, {
                value: p
              });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const p = d.defaultValue === d.exportValues;
              c.setValue(g, {
                value: p
              });
              break;
            }
            case "combobox":
            case "listbox": {
              const p = d.defaultValue || "";
              c.setValue(g, {
                value: p
              });
              break;
            }
            default:
              continue;
          }
          const f = document.querySelector(`[data-element-id="${g}"]`);
          if (f) {
            if (!Ln.has(f)) {
              Q(`_bindResetFormAction - element not allowed: ${g}`);
              continue;
            }
          } else continue;
          f.dispatchEvent(new Event("resetform"));
        }
        return this.enableScripting && ((i = this.linkService.eventBus) == null || i.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: u,
            name: "ResetForm"
          }
        })), false;
      };
    }
  }
  qs = /* @__PURE__ */ new WeakSet(), Sn = function() {
    this.container.setAttribute("data-internal-link", "");
  }, kb = function(n, t, e = null) {
    n.href = this.linkService.getAnchorUrl(""), t.description && (n.title = t.description), n.onclick = () => {
      var s;
      return (s = this.downloadManager) == null || s.openOrDownloadData(t.content, t.filename, e), false;
    }, w(this, qs, Sn).call(this);
  }, Tb = function(n, t) {
    n.href = this.linkService.getAnchorUrl(""), n.onclick = () => (this.linkService.executeSetOCGState(t), false), w(this, qs, Sn).call(this);
  };
  class aC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true
      });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t = document.createElement("img");
      return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
        type: this.data.name
      })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
    }
  }
  class jn extends Gt {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(t) {
      var e;
      this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = true), t.hidden = false);
    }
    _getKeyModifier(t) {
      return Ee.platform.isMac ? t.metaKey : t.ctrlKey;
    }
    _setEventListener(t, e, s, i, r) {
      s.includes("mouse") ? t.addEventListener(s, (a) => {
        var o;
        (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: r(a),
            shift: a.shiftKey,
            modifier: this._getKeyModifier(a)
          }
        });
      }) : t.addEventListener(s, (a) => {
        var o;
        if (s === "blur") {
          if (!e.focused || !a.relatedTarget) return;
          e.focused = false;
        } else if (s === "focus") {
          if (e.focused) return;
          e.focused = true;
        }
        r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: r(a)
          }
        }));
      });
    }
    _setEventListeners(t, e, s, i) {
      var r, a, o;
      for (const [h, c] of s) (c === "Action" || (r = this.data.actions) != null && r[c]) && ((c === "Focus" || c === "Blur") && (e || (e = {
        focused: false
      })), this._setEventListener(t, e, h, c, i), c === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : c === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
    }
    _setBackgroundColor(t) {
      const e = this.data.backgroundColor || null;
      t.style.backgroundColor = e === null ? "transparent" : V.makeHexColor(e[0], e[1], e[2]);
    }
    _setTextStyle(t) {
      const e = [
        "left",
        "center",
        "right"
      ], { fontColor: s } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || iC, r = t.style;
      let a;
      const o = 2, h = (c) => Math.round(10 * c) / 10;
      if (this.data.multiLine) {
        const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o), u = Math.round(c / (Jd * i)) || 1, d = c / u;
        a = Math.min(i, h(d / Jd));
      } else {
        const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
        a = Math.min(i, h(c / Jd));
      }
      r.fontSize = `calc(${a}px * var(--scale-factor))`, r.color = V.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t, e) {
      e ? t.setAttribute("required", true) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
    }
  }
  class oC extends jn {
    constructor(t) {
      const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
      super(t, {
        isRenderable: e
      });
    }
    setPropertyOnSiblings(t, e, s, i) {
      const r = this.annotationStorage;
      for (const a of this._getElementsByName(t.name, t.id)) a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
    }
    render() {
      var t, e;
      const s = this.annotationStorage, i = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let r = null;
      if (this.renderForms) {
        const a = s.getValue(i, {
          value: this.data.fieldValue
        });
        let o = a.value || "";
        const h = s.getValue(i, {
          charLimit: this.data.maxLen
        }).charLimit;
        h && o.length > h && (o = o.slice(0, h));
        let c = a.formattedValue || ((t = this.data.textContent) == null ? void 0 : t.join(`
`)) || null;
        c && this.data.comb && (c = c.replaceAll(/\s+/g, ""));
        const u = {
          userValue: o,
          formattedValue: c,
          lastCommittedValue: null,
          commitKey: 1,
          focused: false
        };
        this.data.multiLine ? (r = document.createElement("textarea"), r.textContent = c ?? o, this.data.doNotScroll && (r.style.overflowY = "hidden")) : (r = document.createElement("input"), r.type = "text", r.setAttribute("value", c ?? o), this.data.doNotScroll && (r.style.overflowX = "hidden")), this.data.hasOwnCanvas && (r.hidden = true), Ln.add(r), r.setAttribute("data-element-id", i), r.disabled = this.data.readOnly, r.name = this.data.fieldName, r.tabIndex = fl, this._setRequired(r, this.data.required), h && (r.maxLength = h), r.addEventListener("input", (g) => {
          s.setValue(i, {
            value: g.target.value
          }), this.setPropertyOnSiblings(r, "value", g.target.value, "value"), u.formattedValue = null;
        }), r.addEventListener("resetform", (g) => {
          const f = this.data.defaultFieldValue ?? "";
          r.value = u.userValue = f, u.formattedValue = null;
        });
        let d = (g) => {
          const { formattedValue: f } = u;
          f != null && (g.target.value = f), g.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          r.addEventListener("focus", (f) => {
            var p;
            if (u.focused) return;
            const { target: v } = f;
            u.userValue && (v.value = u.userValue), u.lastCommittedValue = v.value, u.commitKey = 1, (p = this.data.actions) != null && p.Focus || (u.focused = true);
          }), r.addEventListener("updatefromsandbox", (f) => {
            this.showElementAndHideCanvas(f.target);
            const p = {
              value(v) {
                u.userValue = v.detail.value ?? "", s.setValue(i, {
                  value: u.userValue.toString()
                }), v.target.value = u.userValue;
              },
              formattedValue(v) {
                const { formattedValue: b } = v.detail;
                u.formattedValue = b, b != null && v.target !== document.activeElement && (v.target.value = b), s.setValue(i, {
                  formattedValue: b
                });
              },
              selRange(v) {
                v.target.setSelectionRange(...v.detail.selRange);
              },
              charLimit: (v) => {
                var b;
                const { charLimit: _ } = v.detail, { target: S } = v;
                if (_ === 0) {
                  S.removeAttribute("maxLength");
                  return;
                }
                S.setAttribute("maxLength", _);
                let x = u.userValue;
                !x || x.length <= _ || (x = x.slice(0, _), S.value = u.userValue = x, s.setValue(i, {
                  value: x
                }), (b = this.linkService.eventBus) == null || b.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: i,
                    name: "Keystroke",
                    value: x,
                    willCommit: true,
                    commitKey: 1,
                    selStart: S.selectionStart,
                    selEnd: S.selectionEnd
                  }
                }));
              }
            };
            this._dispatchEventFromSandbox(p, f);
          }), r.addEventListener("keydown", (f) => {
            var p;
            u.commitKey = 1;
            let v = -1;
            if (f.key === "Escape" ? v = 0 : f.key === "Enter" && !this.data.multiLine ? v = 2 : f.key === "Tab" && (u.commitKey = 3), v === -1) return;
            const { value: b } = f.target;
            u.lastCommittedValue !== b && (u.lastCommittedValue = b, u.userValue = b, (p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: i,
                name: "Keystroke",
                value: b,
                willCommit: true,
                commitKey: v,
                selStart: f.target.selectionStart,
                selEnd: f.target.selectionEnd
              }
            }));
          });
          const g = d;
          d = null, r.addEventListener("blur", (f) => {
            var p, v;
            if (!u.focused || !f.relatedTarget) return;
            (p = this.data.actions) != null && p.Blur || (u.focused = false);
            const { value: b } = f.target;
            u.userValue = b, u.lastCommittedValue !== b && ((v = this.linkService.eventBus) == null || v.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: i,
                name: "Keystroke",
                value: b,
                willCommit: true,
                commitKey: u.commitKey,
                selStart: f.target.selectionStart,
                selEnd: f.target.selectionEnd
              }
            })), g(f);
          }), (e = this.data.actions) != null && e.Keystroke && r.addEventListener("beforeinput", (f) => {
            var p;
            u.lastCommittedValue = null;
            const { data: v, target: b } = f, { value: _, selectionStart: S, selectionEnd: x } = b;
            let C = S, T = x;
            switch (f.inputType) {
              case "deleteWordBackward": {
                const O = _.substring(0, S).match(/\w*[^\w]*$/);
                O && (C -= O[0].length);
                break;
              }
              case "deleteWordForward": {
                const O = _.substring(S).match(/^[^\w]*\w*/);
                O && (T += O[0].length);
                break;
              }
              case "deleteContentBackward":
                S === x && (C -= 1);
                break;
              case "deleteContentForward":
                S === x && (T += 1);
                break;
            }
            f.preventDefault(), (p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: i,
                name: "Keystroke",
                value: _,
                change: v || "",
                willCommit: false,
                selStart: C,
                selEnd: T
              }
            });
          }), this._setEventListeners(r, u, [
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ]
          ], (f) => f.target.value);
        }
        if (d && r.addEventListener("blur", d), this.data.comb) {
          const g = (this.data.rect[2] - this.data.rect[0]) / h;
          r.classList.add("comb"), r.style.letterSpacing = `calc(${g}px * var(--scale-factor) - 1ch)`;
        }
      } else r = document.createElement("div"), r.textContent = this.data.fieldValue, r.style.verticalAlign = "middle", r.style.display = "table-cell", this.data.hasOwnCanvas && (r.hidden = true);
      return this._setTextStyle(r), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
    }
  }
  class hC extends jn {
    constructor(t) {
      super(t, {
        isRenderable: !!t.data.hasOwnCanvas
      });
    }
  }
  class lC extends jn {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      const t = this.annotationStorage, e = this.data, s = e.id;
      let i = t.getValue(s, {
        value: e.exportValue === e.fieldValue
      }).value;
      typeof i == "string" && (i = i !== "Off", t.setValue(s, {
        value: i
      })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const r = document.createElement("input");
      return Ln.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", true), r.setAttribute("exportValue", e.exportValue), r.tabIndex = fl, r.addEventListener("change", (a) => {
        const { name: o, checked: h } = a.target;
        for (const c of this._getElementsByName(o, s)) {
          const u = h && c.exportValue === e.exportValue;
          c.domElement && (c.domElement.checked = u), t.setValue(c.id, {
            value: u
          });
        }
        t.setValue(s, {
          value: h
        });
      }), r.addEventListener("resetform", (a) => {
        const o = e.defaultFieldValue || "Off";
        a.target.checked = o === e.exportValue;
      }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
        const o = {
          value(h) {
            h.target.checked = h.detail.value !== "Off", t.setValue(s, {
              value: h.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(o, a);
      }), this._setEventListeners(r, null, [
        [
          "change",
          "Validate"
        ],
        [
          "change",
          "Action"
        ],
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ]
      ], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
    }
  }
  class Eb extends jn {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t = this.annotationStorage, e = this.data, s = e.id;
      let i = t.getValue(s, {
        value: e.fieldValue === e.buttonValue
      }).value;
      if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
        value: i
      })), i) for (const a of this._getElementsByName(e.fieldName, s)) t.setValue(a.id, {
        value: false
      });
      const r = document.createElement("input");
      if (Ln.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", true), r.tabIndex = fl, r.addEventListener("change", (a) => {
        const { name: o, checked: h } = a.target;
        for (const c of this._getElementsByName(o, s)) t.setValue(c.id, {
          value: false
        });
        t.setValue(s, {
          value: h
        });
      }), r.addEventListener("resetform", (a) => {
        const o = e.defaultFieldValue;
        a.target.checked = o != null && o === e.buttonValue;
      }), this.enableScripting && this.hasJSActions) {
        const a = e.buttonValue;
        r.addEventListener("updatefromsandbox", (o) => {
          const h = {
            value: (c) => {
              const u = a === c.detail.value;
              for (const d of this._getElementsByName(c.target.name)) {
                const g = u && d.id === s;
                d.domElement && (d.domElement.checked = g), t.setValue(d.id, {
                  value: g
                });
              }
            }
          };
          this._dispatchEventFromSandbox(h, o);
        }), this._setEventListeners(r, null, [
          [
            "change",
            "Validate"
          ],
          [
            "change",
            "Action"
          ],
          [
            "focus",
            "Focus"
          ],
          [
            "blur",
            "Blur"
          ],
          [
            "mousedown",
            "Mouse Down"
          ],
          [
            "mouseenter",
            "Mouse Enter"
          ],
          [
            "mouseleave",
            "Mouse Exit"
          ],
          [
            "mouseup",
            "Mouse Up"
          ]
        ], (o) => o.target.checked);
      }
      return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
    }
  }
  class cC extends Mb {
    constructor(t) {
      super(t, {
        ignoreBorder: t.data.hasAppearance
      });
    }
    render() {
      const t = super.render();
      t.classList.add("buttonWidgetAnnotation", "pushButton");
      const e = t.lastChild;
      return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
        this._dispatchEventFromSandbox({}, s);
      })), t;
    }
  }
  class uC extends jn {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
        value: this.data.fieldValue
      }), i = document.createElement("select");
      Ln.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = fl;
      let r = this.data.combo && this.data.options.length > 0;
      this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = true)), i.addEventListener("resetform", (u) => {
        const d = this.data.defaultFieldValue;
        for (const g of i.options) g.selected = g.value === d;
      });
      for (const u of this.data.options) {
        const d = document.createElement("option");
        d.textContent = u.displayValue, d.value = u.exportValue, s.value.includes(u.exportValue) && (d.setAttribute("selected", true), r = false), i.append(d);
      }
      let a = null;
      if (r) {
        const u = document.createElement("option");
        u.value = " ", u.setAttribute("hidden", true), u.setAttribute("selected", true), i.prepend(u), a = () => {
          u.remove(), i.removeEventListener("input", a), a = null;
        }, i.addEventListener("input", a);
      }
      const o = (u) => {
        const d = u ? "value" : "textContent", { options: g, multiple: f } = i;
        return f ? Array.prototype.filter.call(g, (p) => p.selected).map((p) => p[d]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][d];
      };
      let h = o(false);
      const c = (u) => {
        const d = u.target.options;
        return Array.prototype.map.call(d, (g) => ({
          displayValue: g.textContent,
          exportValue: g.value
        }));
      };
      return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (u) => {
        const d = {
          value(g) {
            a == null ? void 0 : a();
            const f = g.detail.value, p = new Set(Array.isArray(f) ? f : [
              f
            ]);
            for (const v of i.options) v.selected = p.has(v.value);
            t.setValue(e, {
              value: o(true)
            }), h = o(false);
          },
          multipleSelection(g) {
            i.multiple = true;
          },
          remove(g) {
            const f = i.options, p = g.detail.remove;
            f[p].selected = false, i.remove(p), f.length > 0 && Array.prototype.findIndex.call(f, (v) => v.selected) === -1 && (f[0].selected = true), t.setValue(e, {
              value: o(true),
              items: c(g)
            }), h = o(false);
          },
          clear(g) {
            for (; i.length !== 0; ) i.remove(0);
            t.setValue(e, {
              value: null,
              items: []
            }), h = o(false);
          },
          insert(g) {
            const { index: f, displayValue: p, exportValue: v } = g.detail.insert, b = i.children[f], _ = document.createElement("option");
            _.textContent = p, _.value = v, b ? b.before(_) : i.append(_), t.setValue(e, {
              value: o(true),
              items: c(g)
            }), h = o(false);
          },
          items(g) {
            const { items: f } = g.detail;
            for (; i.length !== 0; ) i.remove(0);
            for (const p of f) {
              const { displayValue: v, exportValue: b } = p, _ = document.createElement("option");
              _.textContent = v, _.value = b, i.append(_);
            }
            i.options.length > 0 && (i.options[0].selected = true), t.setValue(e, {
              value: o(true),
              items: c(g)
            }), h = o(false);
          },
          indices(g) {
            const f = new Set(g.detail.indices);
            for (const p of g.target.options) p.selected = f.has(p.index);
            t.setValue(e, {
              value: o(true)
            }), h = o(false);
          },
          editable(g) {
            g.target.disabled = !g.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(d, u);
      }), i.addEventListener("input", (u) => {
        var d;
        const g = o(true), f = o(false);
        t.setValue(e, {
          value: g
        }), u.preventDefault(), (d = this.linkService.eventBus) == null || d.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: h,
            change: f,
            changeEx: g,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      }), this._setEventListeners(i, null, [
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ],
        [
          "input",
          "Action"
        ],
        [
          "input",
          "Validate"
        ]
      ], (u) => u.target.value)) : i.addEventListener("input", function(u) {
        t.setValue(e, {
          value: o(true)
        });
      }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
    }
  }
  class uf extends Gt {
    constructor(t) {
      const { data: e, elements: s } = t;
      super(t, {
        isRenderable: Gt._hasPopupData(e)
      }), this.elements = s, this.popup = null;
    }
    render() {
      this.container.classList.add("popupAnnotation");
      const t = this.popup = new dC({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open
      }), e = [];
      for (const s of this.elements) s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
      return this.container.setAttribute("aria-controls", e.map((s) => `${fp}${s}`).join(",")), this.container;
    }
  }
  var jh, df, gf, Nh, da, kt, hr, ih, $u, qu, Wh, sr, zs, br, Ku, yr, Pc, qr, ga, zt, Lc, hg, Um, Db, Ob, Ym, Qu, Ju, ff;
  class dC {
    constructor({ container: t, color: e, elements: s, titleObj: i, modificationDate: r, contentsObj: a, richText: o, parent: h, rect: c, parentRect: u, open: d }) {
      y(this, zt), y(this, jh, w(this, zt, Ob).bind(this)), y(this, df, w(this, zt, ff).bind(this)), y(this, gf, w(this, zt, Ju).bind(this)), y(this, Nh, w(this, zt, Qu).bind(this)), y(this, da, null), y(this, kt, null), y(this, hr, null), y(this, ih, null), y(this, $u, null), y(this, qu, null), y(this, Wh, null), y(this, sr, false), y(this, zs, null), y(this, br, null), y(this, Ku, null), y(this, yr, null), y(this, Pc, null), y(this, qr, null), y(this, ga, false);
      var g;
      m(this, kt, t), m(this, Pc, i), m(this, hr, a), m(this, yr, o), m(this, qu, h), m(this, da, e), m(this, Ku, c), m(this, Wh, u), m(this, $u, s), m(this, ih, vp.toDateObject(r)), this.trigger = s.flatMap((f) => f.getElementsToTriggerPopup());
      for (const f of this.trigger) f.addEventListener("click", l(this, Nh)), f.addEventListener("mouseenter", l(this, gf)), f.addEventListener("mouseleave", l(this, df)), f.classList.add("popupTriggerArea");
      for (const f of s) (g = f.container) == null || g.addEventListener("keydown", l(this, jh));
      l(this, kt).hidden = true, d && w(this, zt, Qu).call(this);
    }
    render() {
      if (l(this, zs)) return;
      const t = m(this, zs, document.createElement("div"));
      if (t.className = "popup", l(this, da)) {
        const r = t.style.outlineColor = V.makeHexColor(...l(this, da));
        CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)` : t.style.backgroundColor = V.makeHexColor(...l(this, da).map((a) => Math.floor(0.7 * (255 - a) + a)));
      }
      const e = document.createElement("span");
      e.className = "header";
      const s = document.createElement("h1");
      if (e.append(s), { dir: s.dir, str: s.textContent } = l(this, Pc), t.append(e), l(this, ih)) {
        const r = document.createElement("span");
        r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
          dateObj: l(this, ih).valueOf()
        })), e.append(r);
      }
      const i = l(this, zt, Lc);
      if (i) Cb.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
      else {
        const r = this._formatContents(l(this, hr));
        t.append(r);
      }
      l(this, kt).append(t);
    }
    _formatContents({ str: t, dir: e }) {
      const s = document.createElement("p");
      s.classList.add("popupContent"), s.dir = e;
      const i = t.split(/(?:\r\n?|\n)/);
      for (let r = 0, a = i.length; r < a; ++r) {
        const o = i[r];
        s.append(document.createTextNode(o)), r < a - 1 && s.append(document.createElement("br"));
      }
      return s;
    }
    updateEdited({ rect: t, popupContent: e }) {
      var s;
      l(this, qr) || m(this, qr, {
        contentsObj: l(this, hr),
        richText: l(this, yr)
      }), t && m(this, br, null), e && (m(this, yr, w(this, zt, Db).call(this, e)), m(this, hr, null)), (s = l(this, zs)) == null || s.remove(), m(this, zs, null);
    }
    resetEdited() {
      var t;
      l(this, qr) && ({ contentsObj: Be(this, hr)._, richText: Be(this, yr)._ } = l(this, qr), m(this, qr, null), (t = l(this, zs)) == null || t.remove(), m(this, zs, null), m(this, br, null));
    }
    forceHide() {
      m(this, ga, this.isVisible), l(this, ga) && (l(this, kt).hidden = true);
    }
    maybeShow() {
      l(this, ga) && (l(this, zs) || w(this, zt, Ju).call(this), m(this, ga, false), l(this, kt).hidden = false);
    }
    get isVisible() {
      return l(this, kt).hidden === false;
    }
  }
  jh = /* @__PURE__ */ new WeakMap(), df = /* @__PURE__ */ new WeakMap(), gf = /* @__PURE__ */ new WeakMap(), Nh = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), ih = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), qu = /* @__PURE__ */ new WeakMap(), Wh = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakSet(), Lc = function() {
    const n = l(this, yr), t = l(this, hr);
    return n != null && n.str && (!(t != null && t.str) || t.str === n.str) && l(this, yr).html || null;
  }, hg = function() {
    var n, t, e;
    return ((e = (t = (n = l(this, zt, Lc)) == null ? void 0 : n.attributes) == null ? void 0 : t.style) == null ? void 0 : e.fontSize) || 0;
  }, Um = function() {
    var n, t, e;
    return ((e = (t = (n = l(this, zt, Lc)) == null ? void 0 : n.attributes) == null ? void 0 : t.style) == null ? void 0 : e.color) || null;
  }, Db = function(n) {
    const t = [], e = {
      str: n,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [
          {
            name: "p",
            children: t
          }
        ]
      }
    }, s = {
      style: {
        color: l(this, zt, Um),
        fontSize: l(this, zt, hg) ? `calc(${l(this, zt, hg)}px * var(--scale-factor))` : ""
      }
    };
    for (const i of n.split(`
`)) t.push({
      name: "span",
      value: i,
      attributes: s
    });
    return e;
  }, Ob = function(n) {
    n.altKey || n.shiftKey || n.ctrlKey || n.metaKey || (n.key === "Enter" || n.key === "Escape" && l(this, sr)) && w(this, zt, Qu).call(this);
  }, Ym = function() {
    if (l(this, br) !== null) return;
    const { page: { view: n }, viewport: { rawDims: { pageWidth: t, pageHeight: e, pageX: s, pageY: i } } } = l(this, qu);
    let r = !!l(this, Wh), a = r ? l(this, Wh) : l(this, Ku);
    for (const g of l(this, $u)) if (!a || V.intersect(g.data.rect, a) !== null) {
      a = g.data.rect, r = true;
      break;
    }
    const o = V.normalizeRect([
      a[0],
      n[3] - a[1] + n[1],
      a[2],
      n[3] - a[3] + n[1]
    ]), h = r ? a[2] - a[0] + 5 : 0, c = o[0] + h, u = o[1];
    m(this, br, [
      100 * (c - s) / t,
      100 * (u - i) / e
    ]);
    const { style: d } = l(this, kt);
    d.left = `${l(this, br)[0]}%`, d.top = `${l(this, br)[1]}%`;
  }, Qu = function() {
    m(this, sr, !l(this, sr)), l(this, sr) ? (w(this, zt, Ju).call(this), l(this, kt).addEventListener("click", l(this, Nh)), l(this, kt).addEventListener("keydown", l(this, jh))) : (w(this, zt, ff).call(this), l(this, kt).removeEventListener("click", l(this, Nh)), l(this, kt).removeEventListener("keydown", l(this, jh)));
  }, Ju = function() {
    l(this, zs) || this.render(), this.isVisible ? l(this, sr) && l(this, kt).classList.add("focused") : (w(this, zt, Ym).call(this), l(this, kt).hidden = false, l(this, kt).style.zIndex = parseInt(l(this, kt).style.zIndex) + 1e3);
  }, ff = function() {
    l(this, kt).classList.remove("focused"), !(l(this, sr) || !this.isVisible) && (l(this, kt).hidden = true, l(this, kt).style.zIndex = parseInt(l(this, kt).style.zIndex) - 1e3);
  };
  class Pb extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = K.FREETEXT;
    }
    render() {
      if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
        const t = document.createElement("div");
        t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
        for (const e of this.textContent) {
          const s = document.createElement("span");
          s.textContent = e, t.append(s);
        }
        this.container.append(t);
      }
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  var Rc;
  class gC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), y(this, Rc, null);
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const t = this.data, { width: e, height: s } = Dr(t.rect), i = this.svgFactory.create(e, s, true), r = m(this, Rc, this.svgFactory.createElement("svg:line"));
      return r.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), r.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), r.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), r.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), r.setAttribute("stroke-width", t.borderStyle.width || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), i.append(r), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return l(this, Rc);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  Rc = /* @__PURE__ */ new WeakMap();
  var Ic;
  class fC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), y(this, Ic, null);
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const t = this.data, { width: e, height: s } = Dr(t.rect), i = this.svgFactory.create(e, s, true), r = t.borderStyle.width, a = m(this, Ic, this.svgFactory.createElement("svg:rect"));
      return a.setAttribute("x", r / 2), a.setAttribute("y", r / 2), a.setAttribute("width", e - r), a.setAttribute("height", s - r), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), i.append(a), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return l(this, Ic);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  Ic = /* @__PURE__ */ new WeakMap();
  var Fc;
  class pC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), y(this, Fc, null);
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const t = this.data, { width: e, height: s } = Dr(t.rect), i = this.svgFactory.create(e, s, true), r = t.borderStyle.width, a = m(this, Fc, this.svgFactory.createElement("svg:ellipse"));
      return a.setAttribute("cx", e / 2), a.setAttribute("cy", s / 2), a.setAttribute("rx", e / 2 - r / 2), a.setAttribute("ry", s / 2 - r / 2), a.setAttribute("stroke-width", r || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), i.append(a), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return l(this, Fc);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  Fc = /* @__PURE__ */ new WeakMap();
  var jc;
  class Lb extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), y(this, jc, null), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, vertices: e, borderStyle: s, popupRef: i } } = this;
      if (!e) return this.container;
      const { width: r, height: a } = Dr(t), o = this.svgFactory.create(r, a, true);
      let h = [];
      for (let u = 0, d = e.length; u < d; u += 2) {
        const g = e[u] - t[0], f = t[3] - e[u + 1];
        h.push(`${g},${f}`);
      }
      h = h.join(" ");
      const c = m(this, jc, this.svgFactory.createElement(this.svgElementName));
      return c.setAttribute("points", h), c.setAttribute("stroke-width", s.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), o.append(c), this.container.append(o), !i && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return l(this, jc);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  jc = /* @__PURE__ */ new WeakMap();
  class mC extends Lb {
    constructor(t) {
      super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
  }
  class vC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
  }
  var Nc, fa, Wc, pf;
  class Sp extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), y(this, Wc), y(this, Nc, null), y(this, fa, []), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? K.HIGHLIGHT : K.INK;
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, rotation: e, inkLists: s, borderStyle: i, popupRef: r } } = this, { transform: a, width: o, height: h } = w(this, Wc, pf).call(this, e, t), c = this.svgFactory.create(o, h, true), u = m(this, Nc, this.svgFactory.createElement("svg:g"));
      c.append(u), u.setAttribute("stroke-width", i.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", a);
      for (let d = 0, g = s.length; d < g; d++) {
        const f = this.svgFactory.createElement(this.svgElementName);
        l(this, fa).push(f), f.setAttribute("points", s[d].join(",")), u.append(f);
      }
      return !r && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t) {
      super.updateEdited(t);
      const { thickness: e, points: s, rect: i } = t, r = l(this, Nc);
      if (e >= 0 && r.setAttribute("stroke-width", e || 1), s) for (let a = 0, o = l(this, fa).length; a < o; a++) l(this, fa)[a].setAttribute("points", s[a].join(","));
      if (i) {
        const { transform: a, width: o, height: h } = w(this, Wc, pf).call(this, this.data.rotation, i);
        r.parentElement.setAttribute("viewBox", `0 0 ${o} ${h}`), r.setAttribute("transform", a);
      }
    }
    getElementsToTriggerPopup() {
      return l(this, fa);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  Nc = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap(), Wc = /* @__PURE__ */ new WeakSet(), pf = function(n, t) {
    switch (n) {
      case 90:
        return {
          transform: `rotate(90) translate(${-t[0]},${t[1]}) scale(1,-1)`,
          width: t[3] - t[1],
          height: t[2] - t[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-t[2]},${t[1]}) scale(1,-1)`,
          width: t[2] - t[0],
          height: t[3] - t[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-t[2]},${t[3]}) scale(1,-1)`,
          width: t[3] - t[1],
          height: t[2] - t[0]
        };
      default:
        return {
          transform: `translate(${-t[0]},${t[3]}) scale(1,-1)`,
          width: t[2] - t[0],
          height: t[3] - t[1]
        };
    }
  };
  class Rb extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      }), this.annotationEditorType = K.HIGHLIGHT;
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
    }
  }
  class bC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
    }
  }
  class yC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
    }
  }
  class wC extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
    }
  }
  class Ib extends Gt {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.annotationEditorType = K.STAMP;
    }
    render() {
      return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  var Bc, Hc, mf;
  class _C extends Gt {
    constructor(t) {
      var e;
      super(t, {
        isRenderable: true
      }), y(this, Hc), y(this, Bc, null);
      const { file: s } = this.data;
      this.filename = s.filename, this.content = s.content, (e = this.linkService.eventBus) == null || e.dispatch("fileattachmentannotation", {
        source: this,
        ...s
      });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t, data: e } = this;
      let s;
      e.hasAppearance || e.fillAlpha === 0 ? s = document.createElement("div") : (s = document.createElement("img"), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`, e.fillAlpha && e.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(e.fillAlpha * 100)}%);`)), s.addEventListener("dblclick", w(this, Hc, mf).bind(this)), m(this, Bc, s);
      const { isMac: i } = Ee.platform;
      return t.addEventListener("keydown", (r) => {
        r.key === "Enter" && (i ? r.metaKey : r.ctrlKey) && w(this, Hc, mf).call(this);
      }), !e.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add("popupTriggerArea"), t.append(s), t;
    }
    getElementsToTriggerPopup() {
      return l(this, Bc);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  Bc = /* @__PURE__ */ new WeakMap(), Hc = /* @__PURE__ */ new WeakSet(), mf = function() {
    var n;
    (n = this.downloadManager) == null || n.openOrDownloadData(this.content, this.filename);
  };
  var Zu, Fa, pa, td, rh, Fb, vf;
  class xC {
    constructor({ div: t, accessibilityManager: e, annotationCanvasMap: s, annotationEditorUIManager: i, page: r, viewport: a, structTreeLayer: o }) {
      y(this, rh), y(this, Zu, null), y(this, Fa, null), y(this, pa, /* @__PURE__ */ new Map()), y(this, td, null), this.div = t, m(this, Zu, e), m(this, Fa, s), m(this, td, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
    }
    hasEditableAnnotations() {
      return l(this, pa).size > 0;
    }
    async render(t) {
      var e;
      const { annotations: s } = t, i = this.div;
      Pn(i, this.viewport);
      const r = /* @__PURE__ */ new Map(), a = {
        data: null,
        layer: i,
        linkService: t.linkService,
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || "",
        renderForms: t.renderForms !== false,
        svgFactory: new xp(),
        annotationStorage: t.annotationStorage || new wp(),
        enableScripting: t.enableScripting === true,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null
      };
      for (const o of s) {
        if (o.noHTML) continue;
        const h = o.annotationType === Wt.POPUP;
        if (h) {
          const d = r.get(o.id);
          if (!d) continue;
          a.elements = d;
        } else {
          const { width: d, height: g } = Dr(o.rect);
          if (d <= 0 || g <= 0) continue;
        }
        a.data = o;
        const c = rC.create(a);
        if (!c.isRenderable) continue;
        if (!h && o.popupRef) {
          const d = r.get(o.popupRef);
          d ? d.push(c) : r.set(o.popupRef, [
            c
          ]);
        }
        const u = c.render();
        o.hidden && (u.style.visibility = "hidden"), await w(this, rh, Fb).call(this, u, o.id), c._isEditable && (l(this, pa).set(c.data.id, c), (e = this._annotationEditorUIManager) == null || e.renderAnnotationElement(c));
      }
      w(this, rh, vf).call(this);
    }
    update({ viewport: t }) {
      const e = this.div;
      this.viewport = t, Pn(e, {
        rotation: t.rotation
      }), w(this, rh, vf).call(this), e.hidden = false;
    }
    getEditableAnnotations() {
      return Array.from(l(this, pa).values());
    }
    getEditableAnnotation(t) {
      return l(this, pa).get(t);
    }
  }
  Zu = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), td = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakSet(), Fb = async function(n, t) {
    var e, s;
    const i = n.firstChild || n, r = i.id = `${fp}${t}`, a = await ((e = l(this, td)) == null ? void 0 : e.getAriaAttributes(r));
    if (a) for (const [o, h] of a) i.setAttribute(o, h);
    this.div.append(n), (s = l(this, Zu)) == null || s.moveElementInDOM(this.div, n, i, false);
  }, vf = function() {
    if (!l(this, Fa)) return;
    const n = this.div;
    for (const [t, e] of l(this, Fa)) {
      const s = n.querySelector(`[data-annotation-id="${t}"]`);
      if (!s) continue;
      e.className = "annotationContent";
      const { firstChild: i } = s;
      i ? i.nodeName === "CANVAS" ? i.replaceWith(e) : i.classList.contains("annotationContent") ? i.after(e) : i.before(e) : s.append(e);
    }
    l(this, Fa).clear();
  };
  const zc = /\r\n?|\n/g;
  var Ks, ls, Vc, ma, cs, Ge, jb, Nb, Wb, ed, Cn, sd, Gc, Bb, bf, Hb;
  const mi = class qt extends Mt {
    constructor(t) {
      super({
        ...t,
        name: "freeTextEditor"
      }), y(this, Ge), y(this, Ks), y(this, ls, ""), y(this, Vc, `${this.id}-editor`), y(this, ma, null), y(this, cs), m(this, Ks, t.color || qt._defaultColor || Mt._defaultLineColor), m(this, cs, t.fontSize || qt._defaultFontSize);
    }
    static get _keyboardManager() {
      const t = qt.prototype, e = (r) => r.isEmpty(), s = al.TRANSLATE_SMALL, i = al.TRANSLATE_BIG;
      return Z(this, "_keyboardManager", new gl([
        [
          [
            "ctrl+s",
            "mac+meta+s",
            "ctrl+p",
            "mac+meta+p"
          ],
          t.commitOrRemove,
          {
            bubbles: true
          }
        ],
        [
          [
            "ctrl+Enter",
            "mac+meta+Enter",
            "Escape",
            "mac+Escape"
          ],
          t.commitOrRemove
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ]
      ]));
    }
    static initialize(t, e) {
      Mt.initialize(t, e);
      const s = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case et.FREETEXT_SIZE:
          qt._defaultFontSize = e;
          break;
        case et.FREETEXT_COLOR:
          qt._defaultColor = e;
          break;
      }
    }
    updateParams(t, e) {
      switch (t) {
        case et.FREETEXT_SIZE:
          w(this, Ge, jb).call(this, e);
          break;
        case et.FREETEXT_COLOR:
          w(this, Ge, Nb).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          et.FREETEXT_SIZE,
          qt._defaultFontSize
        ],
        [
          et.FREETEXT_COLOR,
          qt._defaultColor || Mt._defaultLineColor
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          et.FREETEXT_SIZE,
          l(this, cs)
        ],
        [
          et.FREETEXT_COLOR,
          l(this, Ks)
        ]
      ];
    }
    _translateEmpty(t, e) {
      this._uiManager.translateSelectedEditors(t, e, true);
    }
    getInitialTranslation() {
      const t = this.parentScale;
      return [
        -qt._internalPadding * t,
        -(qt._internalPadding + l(this, cs)) * t
      ];
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (this.isInEditMode()) return;
      this.parent.setEditingState(false), this.parent.updateToolbar(K.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), m(this, ma, new AbortController());
      const t = this._uiManager.combinedSignal(l(this, ma));
      this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
        signal: t
      });
    }
    disableEditMode() {
      var t;
      this.isInEditMode() && (this.parent.setEditingState(true), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", l(this, Vc)), this._isDraggable = true, (t = l(this, ma)) == null || t.abort(), m(this, ma, null), this.div.focus({
        preventScroll: true
      }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"));
    }
    focusin(t) {
      this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t) {
      var e;
      this.width || (this.enableEditMode(), t && this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
    }
    isEmpty() {
      return !this.editorDiv || this.editorDiv.innerText.trim() === "";
    }
    remove() {
      this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit(), this.disableEditMode();
      const t = l(this, ls), e = m(this, ls, w(this, Ge, Wb).call(this).trimEnd());
      if (t === e) return;
      const s = (i) => {
        if (m(this, ls, i), !i) {
          this.remove();
          return;
        }
        w(this, Ge, Gc).call(this), this._uiManager.rebuild(this), w(this, Ge, ed).call(this);
      };
      this.addCommands({
        cmd: () => {
          s(e);
        },
        undo: () => {
          s(t);
        },
        mustExec: false
      }), w(this, Ge, ed).call(this);
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode(), this.editorDiv.focus();
    }
    dblclick(t) {
      this.enterInEditMode();
    }
    keydown(t) {
      t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
    }
    editorDivKeydown(t) {
      qt._keyboardManager.exec(this, t);
    }
    editorDivFocus(t) {
      this.isEditing = true;
    }
    editorDivBlur(t) {
      this.isEditing = false;
    }
    editorDivInput(t) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      this.width && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", l(this, Vc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
      const { style: s } = this.editorDiv;
      if (s.fontSize = `calc(${l(this, cs)}px * var(--scale-factor))`, s.color = l(this, Ks), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), Tu(this, this.div, [
        "dblclick",
        "keydown"
      ]), this.width) {
        const [i, r] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: a } = this._initialData;
          let [o, h] = this.getInitialTranslation();
          [o, h] = this.pageTranslationToScreen(o, h);
          const [c, u] = this.pageDimensions, [d, g] = this.pageTranslation;
          let f, p;
          switch (this.rotation) {
            case 0:
              f = t + (a[0] - d) / c, p = e + this.height - (a[1] - g) / u;
              break;
            case 90:
              f = t + (a[0] - d) / c, p = e - (a[1] - g) / u, [o, h] = [
                h,
                -o
              ];
              break;
            case 180:
              f = t - this.width + (a[0] - d) / c, p = e - (a[1] - g) / u, [o, h] = [
                -o,
                -h
              ];
              break;
            case 270:
              f = t + (a[0] - d - this.height * u) / c, p = e + (a[1] - g - this.width * c) / u, [o, h] = [
                -h,
                o
              ];
              break;
          }
          this.setAt(f * i, p * r, o, h);
        } else this.setAt(t * i, e * r, this.width * i, this.height * r);
        w(this, Ge, Gc).call(this), this._isDraggable = true, this.editorDiv.contentEditable = false;
      } else this._isDraggable = false, this.editorDiv.contentEditable = true;
      return this.div;
    }
    editorDivPaste(t) {
      var e, s, i;
      const r = t.clipboardData || window.clipboardData, { types: a } = r;
      if (a.length === 1 && a[0] === "text/plain") return;
      t.preventDefault();
      const o = w(e = qt, Cn, bf).call(e, r.getData("text") || "").replaceAll(zc, `
`);
      if (!o) return;
      const h = window.getSelection();
      if (!h.rangeCount) return;
      this.editorDiv.normalize(), h.deleteFromDocument();
      const c = h.getRangeAt(0);
      if (!o.includes(`
`)) {
        c.insertNode(document.createTextNode(o)), this.editorDiv.normalize(), h.collapseToStart();
        return;
      }
      const { startContainer: u, startOffset: d } = c, g = [], f = [];
      if (u.nodeType === Node.TEXT_NODE) {
        const b = u.parentElement;
        if (f.push(u.nodeValue.slice(d).replaceAll(zc, "")), b !== this.editorDiv) {
          let _ = g;
          for (const S of this.editorDiv.childNodes) {
            if (S === b) {
              _ = f;
              continue;
            }
            _.push(w(s = qt, Cn, sd).call(s, S));
          }
        }
        g.push(u.nodeValue.slice(0, d).replaceAll(zc, ""));
      } else if (u === this.editorDiv) {
        let b = g, _ = 0;
        for (const S of this.editorDiv.childNodes) _++ === d && (b = f), b.push(w(i = qt, Cn, sd).call(i, S));
      }
      m(this, ls, `${g.join(`
`)}${o}${f.join(`
`)}`), w(this, Ge, Gc).call(this);
      const p = new Range();
      let v = g.reduce((b, _) => b + _.length, 0);
      for (const { firstChild: b } of this.editorDiv.childNodes) if (b.nodeType === Node.TEXT_NODE) {
        const _ = b.nodeValue.length;
        if (v <= _) {
          p.setStart(b, v), p.setEnd(b, v);
          break;
        }
        v -= _;
      }
      h.removeAllRanges(), h.addRange(p);
    }
    get contentDiv() {
      return this.editorDiv;
    }
    static async deserialize(t, e, s) {
      var i;
      let r = null;
      if (t instanceof Pb) {
        const { data: { defaultAppearanceData: { fontSize: o, fontColor: h }, rect: c, rotation: u, id: d, popupRef: g }, textContent: f, textPosition: p, parent: { page: { pageNumber: v } } } = t;
        if (!f || f.length === 0) return null;
        r = t = {
          annotationType: K.FREETEXT,
          color: Array.from(h),
          fontSize: o,
          value: f.join(`
`),
          position: p,
          pageIndex: v - 1,
          rect: c.slice(0),
          rotation: u,
          id: d,
          deleted: false,
          popupRef: g
        };
      }
      const a = await super.deserialize(t, e, s);
      return m(a, cs, t.fontSize), m(a, Ks, V.makeHexColor(...t.color)), m(a, ls, w(i = qt, Cn, bf).call(i, t.value)), a.annotationElementId = t.id || null, a._initialData = r, a;
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = qt._internalPadding * this.parentScale, s = this.getRect(e, e), i = Mt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : l(this, Ks)), r = {
        annotationType: K.FREETEXT,
        color: i,
        fontSize: l(this, cs),
        value: w(this, Ge, Bb).call(this),
        pageIndex: this.pageIndex,
        rect: s,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId
      };
      return t ? r : this.annotationElementId && !w(this, Ge, Hb).call(this, r) ? null : (r.id = this.annotationElementId, r);
    }
    renderAnnotationElement(t) {
      const e = super.renderAnnotationElement(t);
      if (this.deleted) return e;
      const { style: s } = e;
      s.fontSize = `calc(${l(this, cs)}px * var(--scale-factor))`, s.color = l(this, Ks), e.replaceChildren();
      for (const r of l(this, ls).split(`
`)) {
        const a = document.createElement("div");
        a.append(r ? document.createTextNode(r) : document.createElement("br")), e.append(a);
      }
      const i = qt._internalPadding * this.parentScale;
      return t.updateEdited({
        rect: this.getRect(i, i),
        popupContent: l(this, ls)
      }), e;
    }
    resetAnnotationElement(t) {
      super.resetAnnotationElement(t), t.resetEdited();
    }
  };
  Ks = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakSet(), jb = function(n) {
    const t = (s) => {
      this.editorDiv.style.fontSize = `calc(${s}px * var(--scale-factor))`, this.translate(0, -(s - l(this, cs)) * this.parentScale), m(this, cs, s), w(this, Ge, ed).call(this);
    }, e = l(this, cs);
    this.addCommands({
      cmd: t.bind(this, n),
      undo: t.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: et.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }, Nb = function(n) {
    const t = (s) => {
      m(this, Ks, this.editorDiv.style.color = s);
    }, e = l(this, Ks);
    this.addCommands({
      cmd: t.bind(this, n),
      undo: t.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: et.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }, Wb = function() {
    var n;
    const t = [];
    this.editorDiv.normalize();
    let e = null;
    for (const s of this.editorDiv.childNodes) (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE && s.nodeName === "BR" || (t.push(w(n = mi, Cn, sd).call(n, s)), e = s);
    return t.join(`
`);
  }, ed = function() {
    const [n, t] = this.parentDimensions;
    let e;
    if (this.isAttachedToDOM) e = this.div.getBoundingClientRect();
    else {
      const { currentLayer: s, div: i } = this, r = i.style.display, a = i.classList.contains("hidden");
      i.classList.remove("hidden"), i.style.display = "hidden", s.div.append(this.div), e = i.getBoundingClientRect(), i.remove(), i.style.display = r, i.classList.toggle("hidden", a);
    }
    this.rotation % 180 === this.parentRotation % 180 ? (this.width = e.width / n, this.height = e.height / t) : (this.width = e.height / n, this.height = e.width / t), this.fixAndSetPosition();
  }, Cn = /* @__PURE__ */ new WeakSet(), sd = function(n) {
    return (n.nodeType === Node.TEXT_NODE ? n.nodeValue : n.innerText).replaceAll(zc, "");
  }, Gc = function() {
    if (this.editorDiv.replaceChildren(), !!l(this, ls)) for (const n of l(this, ls).split(`
`)) {
      const t = document.createElement("div");
      t.append(n ? document.createTextNode(n) : document.createElement("br")), this.editorDiv.append(t);
    }
  }, Bb = function() {
    return l(this, ls).replaceAll("\xA0", " ");
  }, bf = function(n) {
    return n.replaceAll(" ", "\xA0");
  }, Hb = function(n) {
    const { value: t, fontSize: e, color: s, pageIndex: i } = this._initialData;
    return this._hasBeenMoved || n.value !== t || n.fontSize !== e || n.color.some((r, a) => r !== s[a]) || n.pageIndex !== i;
  }, y(mi, Cn), Y(mi, "_freeTextDefaultContent", ""), Y(mi, "_internalPadding", 0), Y(mi, "_defaultColor", null), Y(mi, "_defaultFontSize", 10), Y(mi, "_type", "freetext"), Y(mi, "_editorType", K.FREETEXT);
  let SC = mi;
  class H {
    toSVGPath() {
      ut("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      ut("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
      ut("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, s, i, r, a) {
      a || (a = new Float32Array(t.length));
      for (let o = 0, h = t.length; o < h; o += 2) a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
      return a;
    }
    static _rescaleAndSwap(t, e, s, i, r, a) {
      a || (a = new Float32Array(t.length));
      for (let o = 0, h = t.length; o < h; o += 2) a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
      return a;
    }
    static _translate(t, e, s, i) {
      i || (i = new Float32Array(t.length));
      for (let r = 0, a = t.length; r < a; r += 2) i[r] = e + t[r], i[r + 1] = s + t[r + 1];
      return i;
    }
    static svgRound(t) {
      return Math.round(t * 1e4);
    }
    static _normalizePoint(t, e, s, i, r) {
      switch (r) {
        case 90:
          return [
            1 - e / s,
            t / i
          ];
        case 180:
          return [
            1 - t / s,
            1 - e / i
          ];
        case 270:
          return [
            e / s,
            1 - t / i
          ];
        default:
          return [
            t / s,
            e / i
          ];
      }
    }
    static _normalizePagePoint(t, e, s) {
      switch (s) {
        case 90:
          return [
            1 - e,
            t
          ];
        case 180:
          return [
            1 - t,
            1 - e
          ];
        case 270:
          return [
            e,
            1 - t
          ];
        default:
          return [
            t,
            e
          ];
      }
    }
    static createBezierPoints(t, e, s, i, r, a) {
      return [
        (t + 5 * s) / 6,
        (e + 5 * i) / 6,
        (5 * s + r) / 6,
        (5 * i + a) / 6,
        (s + r) / 2,
        (i + a) / 2
      ];
    }
  }
  Y(H, "PRECISION", 1e-4);
  var us, Qs, Bh, Hh, vi, tt, Ja, Za, Xc, Uc, zh, nh, Kr, Yc, lg, yf, ds, bo, zb, Vb, Gb, Xb, Ub, Yb;
  const va = class wf {
    constructor({ x: t, y: e }, s, i, r, a, o = 0) {
      y(this, ds), y(this, us), y(this, Qs, []), y(this, Bh), y(this, Hh), y(this, vi, []), y(this, tt, new Float32Array(18)), y(this, Ja), y(this, Za), y(this, Xc), y(this, Uc), y(this, zh), y(this, nh), y(this, Kr, []), m(this, us, s), m(this, nh, r * i), m(this, Hh, a), l(this, tt).set([
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ], 6), m(this, Bh, o), m(this, Uc, l(wf, Yc) * i), m(this, Xc, l(wf, yf) * i), m(this, zh, i), l(this, Kr).push(t, e);
    }
    isEmpty() {
      return isNaN(l(this, tt)[8]);
    }
    add({ x: t, y: e }) {
      var s;
      m(this, Ja, t), m(this, Za, e);
      const [i, r, a, o] = l(this, us);
      let [h, c, u, d] = l(this, tt).subarray(8, 12);
      const g = t - u, f = e - d, p = Math.hypot(g, f);
      if (p < l(this, Xc)) return false;
      const v = p - l(this, Uc), b = v / p, _ = b * g, S = b * f;
      let x = h, C = c;
      h = u, c = d, u += _, d += S, (s = l(this, Kr)) == null || s.push(t, e);
      const T = -S / v, O = _ / v, E = T * l(this, nh), D = O * l(this, nh);
      return l(this, tt).set(l(this, tt).subarray(2, 8), 0), l(this, tt).set([
        u + E,
        d + D
      ], 4), l(this, tt).set(l(this, tt).subarray(14, 18), 12), l(this, tt).set([
        u - E,
        d - D
      ], 16), isNaN(l(this, tt)[6]) ? (l(this, vi).length === 0 && (l(this, tt).set([
        h + E,
        c + D
      ], 2), l(this, vi).push(NaN, NaN, NaN, NaN, (h + E - i) / a, (c + D - r) / o), l(this, tt).set([
        h - E,
        c - D
      ], 14), l(this, Qs).push(NaN, NaN, NaN, NaN, (h - E - i) / a, (c - D - r) / o)), l(this, tt).set([
        x,
        C,
        h,
        c,
        u,
        d
      ], 6), !this.isEmpty()) : (l(this, tt).set([
        x,
        C,
        h,
        c,
        u,
        d
      ], 6), Math.abs(Math.atan2(C - c, x - h) - Math.atan2(S, _)) < Math.PI / 2 ? ([h, c, u, d] = l(this, tt).subarray(2, 6), l(this, vi).push(NaN, NaN, NaN, NaN, ((h + u) / 2 - i) / a, ((c + d) / 2 - r) / o), [h, c, x, C] = l(this, tt).subarray(14, 18), l(this, Qs).push(NaN, NaN, NaN, NaN, ((x + h) / 2 - i) / a, ((C + c) / 2 - r) / o), true) : ([x, C, h, c, u, d] = l(this, tt).subarray(0, 6), l(this, vi).push(((x + 5 * h) / 6 - i) / a, ((C + 5 * c) / 6 - r) / o, ((5 * h + u) / 6 - i) / a, ((5 * c + d) / 6 - r) / o, ((h + u) / 2 - i) / a, ((c + d) / 2 - r) / o), [u, d, h, c, x, C] = l(this, tt).subarray(12, 18), l(this, Qs).push(((x + 5 * h) / 6 - i) / a, ((C + 5 * c) / 6 - r) / o, ((5 * h + u) / 6 - i) / a, ((5 * c + d) / 6 - r) / o, ((h + u) / 2 - i) / a, ((c + d) / 2 - r) / o), true));
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t = l(this, vi), e = l(this, Qs);
      if (isNaN(l(this, tt)[6]) && !this.isEmpty()) return w(this, ds, zb).call(this);
      const s = [];
      s.push(`M${t[4]} ${t[5]}`);
      for (let i = 6; i < t.length; i += 6) isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
      w(this, ds, Gb).call(this, s);
      for (let i = e.length - 6; i >= 6; i -= 6) isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
      return w(this, ds, Vb).call(this, s), s.join(" ");
    }
    newFreeDrawOutline(t, e, s, i, r, a) {
      return new Kb(t, e, s, i, r, a);
    }
    getOutlines() {
      var t;
      const e = l(this, vi), s = l(this, Qs), i = l(this, tt), [r, a, o, h] = l(this, us), c = new Float32Array((((t = l(this, Kr)) == null ? void 0 : t.length) ?? 0) + 2);
      for (let g = 0, f = c.length - 2; g < f; g += 2) c[g] = (l(this, Kr)[g] - r) / o, c[g + 1] = (l(this, Kr)[g + 1] - a) / h;
      if (c[c.length - 2] = (l(this, Ja) - r) / o, c[c.length - 1] = (l(this, Za) - a) / h, isNaN(i[6]) && !this.isEmpty()) return w(this, ds, Xb).call(this, c);
      const u = new Float32Array(l(this, vi).length + 24 + l(this, Qs).length);
      let d = e.length;
      for (let g = 0; g < d; g += 2) {
        if (isNaN(e[g])) {
          u[g] = u[g + 1] = NaN;
          continue;
        }
        u[g] = e[g], u[g + 1] = e[g + 1];
      }
      d = w(this, ds, Yb).call(this, u, d);
      for (let g = s.length - 6; g >= 6; g -= 6) for (let f = 0; f < 6; f += 2) {
        if (isNaN(s[g + f])) {
          u[d] = u[d + 1] = NaN, d += 2;
          continue;
        }
        u[d] = s[g + f], u[d + 1] = s[g + f + 1], d += 2;
      }
      return w(this, ds, Ub).call(this, u, d), this.newFreeDrawOutline(u, c, l(this, us), l(this, zh), l(this, Bh), l(this, Hh));
    }
  };
  us = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Bh = /* @__PURE__ */ new WeakMap(), Hh = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Uc = /* @__PURE__ */ new WeakMap(), zh = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), lg = /* @__PURE__ */ new WeakMap(), yf = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakSet(), bo = function() {
    const n = l(this, tt).subarray(4, 6), t = l(this, tt).subarray(16, 18), [e, s, i, r] = l(this, us);
    return [
      (l(this, Ja) + (n[0] - t[0]) / 2 - e) / i,
      (l(this, Za) + (n[1] - t[1]) / 2 - s) / r,
      (l(this, Ja) + (t[0] - n[0]) / 2 - e) / i,
      (l(this, Za) + (t[1] - n[1]) / 2 - s) / r
    ];
  }, zb = function() {
    const [n, t, e, s] = l(this, us), [i, r, a, o] = w(this, ds, bo).call(this);
    return `M${(l(this, tt)[2] - n) / e} ${(l(this, tt)[3] - t) / s} L${(l(this, tt)[4] - n) / e} ${(l(this, tt)[5] - t) / s} L${i} ${r} L${a} ${o} L${(l(this, tt)[16] - n) / e} ${(l(this, tt)[17] - t) / s} L${(l(this, tt)[14] - n) / e} ${(l(this, tt)[15] - t) / s} Z`;
  }, Vb = function(n) {
    const t = l(this, Qs);
    n.push(`L${t[4]} ${t[5]} Z`);
  }, Gb = function(n) {
    const [t, e, s, i] = l(this, us), r = l(this, tt).subarray(4, 6), a = l(this, tt).subarray(16, 18), [o, h, c, u] = w(this, ds, bo).call(this);
    n.push(`L${(r[0] - t) / s} ${(r[1] - e) / i} L${o} ${h} L${c} ${u} L${(a[0] - t) / s} ${(a[1] - e) / i}`);
  }, Xb = function(n) {
    const t = l(this, tt), [e, s, i, r] = l(this, us), [a, o, h, c] = w(this, ds, bo).call(this), u = new Float32Array(36);
    return u.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (t[2] - e) / i,
      (t[3] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (t[4] - e) / i,
      (t[5] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      a,
      o,
      NaN,
      NaN,
      NaN,
      NaN,
      h,
      c,
      NaN,
      NaN,
      NaN,
      NaN,
      (t[16] - e) / i,
      (t[17] - s) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (t[14] - e) / i,
      (t[15] - s) / r
    ], 0), this.newFreeDrawOutline(u, n, l(this, us), l(this, zh), l(this, Bh), l(this, Hh));
  }, Ub = function(n, t) {
    const e = l(this, Qs);
    return n.set([
      NaN,
      NaN,
      NaN,
      NaN,
      e[4],
      e[5]
    ], t), t += 6;
  }, Yb = function(n, t) {
    const e = l(this, tt).subarray(4, 6), s = l(this, tt).subarray(16, 18), [i, r, a, o] = l(this, us), [h, c, u, d] = w(this, ds, bo).call(this);
    return n.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (e[0] - i) / a,
      (e[1] - r) / o,
      NaN,
      NaN,
      NaN,
      NaN,
      h,
      c,
      NaN,
      NaN,
      NaN,
      NaN,
      u,
      d,
      NaN,
      NaN,
      NaN,
      NaN,
      (s[0] - i) / a,
      (s[1] - r) / o
    ], t), t += 24;
  }, y(va, Yc, 8), y(va, lg, 2), y(va, yf, l(va, Yc) + l(va, lg));
  let $b = va;
  var ah, ja, wr, $c, ss, qc, Rt, _f, qb;
  class Kb extends H {
    constructor(t, e, s, i, r, a) {
      super(), y(this, _f), y(this, ah), y(this, ja, new Float32Array(4)), y(this, wr), y(this, $c), y(this, ss), y(this, qc), y(this, Rt), m(this, Rt, t), m(this, ss, e), m(this, ah, s), m(this, qc, i), m(this, wr, r), m(this, $c, a), this.lastPoint = [
        NaN,
        NaN
      ], w(this, _f, qb).call(this, a);
      const [o, h, c, u] = l(this, ja);
      for (let d = 0, g = t.length; d < g; d += 2) t[d] = (t[d] - o) / c, t[d + 1] = (t[d + 1] - h) / u;
      for (let d = 0, g = e.length; d < g; d += 2) e[d] = (e[d] - o) / c, e[d + 1] = (e[d + 1] - h) / u;
    }
    toSVGPath() {
      const t = [
        `M${l(this, Rt)[4]} ${l(this, Rt)[5]}`
      ];
      for (let e = 6, s = l(this, Rt).length; e < s; e += 6) {
        if (isNaN(l(this, Rt)[e])) {
          t.push(`L${l(this, Rt)[e + 4]} ${l(this, Rt)[e + 5]}`);
          continue;
        }
        t.push(`C${l(this, Rt)[e]} ${l(this, Rt)[e + 1]} ${l(this, Rt)[e + 2]} ${l(this, Rt)[e + 3]} ${l(this, Rt)[e + 4]} ${l(this, Rt)[e + 5]}`);
      }
      return t.push("Z"), t.join(" ");
    }
    serialize([t, e, s, i], r) {
      const a = s - t, o = i - e;
      let h, c;
      switch (r) {
        case 0:
          h = H._rescale(l(this, Rt), t, i, a, -o), c = H._rescale(l(this, ss), t, i, a, -o);
          break;
        case 90:
          h = H._rescaleAndSwap(l(this, Rt), t, e, a, o), c = H._rescaleAndSwap(l(this, ss), t, e, a, o);
          break;
        case 180:
          h = H._rescale(l(this, Rt), s, e, -a, o), c = H._rescale(l(this, ss), s, e, -a, o);
          break;
        case 270:
          h = H._rescaleAndSwap(l(this, Rt), s, i, -a, -o), c = H._rescaleAndSwap(l(this, ss), s, i, -a, -o);
          break;
      }
      return {
        outline: Array.from(h),
        points: [
          Array.from(c)
        ]
      };
    }
    get box() {
      return l(this, ja);
    }
    newOutliner(t, e, s, i, r, a = 0) {
      return new $b(t, e, s, i, r, a);
    }
    getNewOutline(t, e) {
      const [s, i, r, a] = l(this, ja), [o, h, c, u] = l(this, ah), d = r * c, g = a * u, f = s * c + o, p = i * u + h, v = this.newOutliner({
        x: l(this, ss)[0] * d + f,
        y: l(this, ss)[1] * g + p
      }, l(this, ah), l(this, qc), t, l(this, $c), e ?? l(this, wr));
      for (let b = 2; b < l(this, ss).length; b += 2) v.add({
        x: l(this, ss)[b] * d + f,
        y: l(this, ss)[b + 1] * g + p
      });
      return v.getOutlines();
    }
  }
  ah = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), $c = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), _f = /* @__PURE__ */ new WeakSet(), qb = function(n) {
    const t = l(this, Rt);
    let e = t[4], s = t[5], i = e, r = s, a = e, o = s, h = e, c = s;
    const u = n ? Math.max : Math.min;
    for (let g = 6, f = t.length; g < f; g += 6) {
      if (isNaN(t[g])) i = Math.min(i, t[g + 4]), r = Math.min(r, t[g + 5]), a = Math.max(a, t[g + 4]), o = Math.max(o, t[g + 5]), c < t[g + 5] ? (h = t[g + 4], c = t[g + 5]) : c === t[g + 5] && (h = u(h, t[g + 4]));
      else {
        const p = V.bezierBoundingBox(e, s, ...t.slice(g, g + 6));
        i = Math.min(i, p[0]), r = Math.min(r, p[1]), a = Math.max(a, p[2]), o = Math.max(o, p[3]), c < p[3] ? (h = p[2], c = p[3]) : c === p[3] && (h = u(h, p[2]));
      }
      e = t[g + 4], s = t[g + 5];
    }
    const d = l(this, ja);
    d[0] = i - l(this, wr), d[1] = r - l(this, wr), d[2] = a - i + 2 * l(this, wr), d[3] = o - r + 2 * l(this, wr), this.lastPoint = [
      h,
      c
    ];
  };
  var id, rd, Qr, Ws, ti, Qb, Yl, Jb, Zb, xf;
  class Sf {
    constructor(t, e = 0, s = 0, i = true) {
      y(this, ti), y(this, id), y(this, rd), y(this, Qr, []), y(this, Ws, []);
      let r = 1 / 0, a = -1 / 0, o = 1 / 0, h = -1 / 0;
      const c = 10 ** -4;
      for (const { x: b, y: _, width: S, height: x } of t) {
        const C = Math.floor((b - e) / c) * c, T = Math.ceil((b + S + e) / c) * c, O = Math.floor((_ - e) / c) * c, E = Math.ceil((_ + x + e) / c) * c, D = [
          C,
          O,
          E,
          true
        ], F = [
          T,
          O,
          E,
          false
        ];
        l(this, Qr).push(D, F), r = Math.min(r, C), a = Math.max(a, T), o = Math.min(o, O), h = Math.max(h, E);
      }
      const u = a - r + 2 * s, d = h - o + 2 * s, g = r - s, f = o - s, p = l(this, Qr).at(i ? -1 : -2), v = [
        p[0],
        p[2]
      ];
      for (const b of l(this, Qr)) {
        const [_, S, x] = b;
        b[0] = (_ - g) / u, b[1] = (S - f) / d, b[2] = (x - f) / d;
      }
      m(this, id, new Float32Array([
        g,
        f,
        u,
        d
      ])), m(this, rd, v);
    }
    getOutlines() {
      l(this, Qr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
      const t = [];
      for (const e of l(this, Qr)) e[3] ? (t.push(...w(this, ti, xf).call(this, e)), w(this, ti, Jb).call(this, e)) : (w(this, ti, Zb).call(this, e), t.push(...w(this, ti, xf).call(this, e)));
      return w(this, ti, Qb).call(this, t);
    }
  }
  id = /* @__PURE__ */ new WeakMap(), rd = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakSet(), Qb = function(n) {
    const t = [], e = /* @__PURE__ */ new Set();
    for (const r of n) {
      const [a, o, h] = r;
      t.push([
        a,
        o,
        r
      ], [
        a,
        h,
        r
      ]);
    }
    t.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
    for (let r = 0, a = t.length; r < a; r += 2) {
      const o = t[r][2], h = t[r + 1][2];
      o.push(h), h.push(o), e.add(o), e.add(h);
    }
    const s = [];
    let i;
    for (; e.size > 0; ) {
      const r = e.values().next().value;
      let [a, o, h, c, u] = r;
      e.delete(r);
      let d = a, g = o;
      for (i = [
        a,
        h
      ], s.push(i); ; ) {
        let f;
        if (e.has(c)) f = c;
        else if (e.has(u)) f = u;
        else break;
        e.delete(f), [a, o, h, c, u] = f, d !== a && (i.push(d, g, a, g === o ? o : h), d = a), g = g === o ? h : o;
      }
      i.push(d, g);
    }
    return new CC(s, l(this, id), l(this, rd));
  }, Yl = function(n) {
    const t = l(this, Ws);
    let e = 0, s = t.length - 1;
    for (; e <= s; ) {
      const i = e + s >> 1, r = t[i][0];
      if (r === n) return i;
      r < n ? e = i + 1 : s = i - 1;
    }
    return s + 1;
  }, Jb = function([, n, t]) {
    const e = w(this, ti, Yl).call(this, n);
    l(this, Ws).splice(e, 0, [
      n,
      t
    ]);
  }, Zb = function([, n, t]) {
    const e = w(this, ti, Yl).call(this, n);
    for (let s = e; s < l(this, Ws).length; s++) {
      const [i, r] = l(this, Ws)[s];
      if (i !== n) break;
      if (i === n && r === t) {
        l(this, Ws).splice(s, 1);
        return;
      }
    }
    for (let s = e - 1; s >= 0; s--) {
      const [i, r] = l(this, Ws)[s];
      if (i !== n) break;
      if (i === n && r === t) {
        l(this, Ws).splice(s, 1);
        return;
      }
    }
  }, xf = function(n) {
    const [t, e, s] = n, i = [
      [
        t,
        e,
        s
      ]
    ], r = w(this, ti, Yl).call(this, s);
    for (let a = 0; a < r; a++) {
      const [o, h] = l(this, Ws)[a];
      for (let c = 0, u = i.length; c < u; c++) {
        const [, d, g] = i[c];
        if (!(h <= d || g <= o)) {
          if (d >= o) {
            if (g > h) i[c][1] = h;
            else {
              if (u === 1) return [];
              i.splice(c, 1), c--, u--;
            }
            continue;
          }
          i[c][2] = o, g > h && i.push([
            t,
            h,
            g
          ]);
        }
      }
    }
    return i;
  };
  var Kc, oh;
  class CC extends H {
    constructor(t, e, s) {
      super(), y(this, Kc), y(this, oh), m(this, oh, t), m(this, Kc, e), this.lastPoint = s;
    }
    toSVGPath() {
      const t = [];
      for (const e of l(this, oh)) {
        let [s, i] = e;
        t.push(`M${s} ${i}`);
        for (let r = 2; r < e.length; r += 2) {
          const a = e[r], o = e[r + 1];
          a === s ? (t.push(`V${o}`), i = o) : o === i && (t.push(`H${a}`), s = a);
        }
        t.push("Z");
      }
      return t.join(" ");
    }
    serialize([t, e, s, i], r) {
      const a = [], o = s - t, h = i - e;
      for (const c of l(this, oh)) {
        const u = new Array(c.length);
        for (let d = 0; d < c.length; d += 2) u[d] = t + c[d] * o, u[d + 1] = i - c[d + 1] * h;
        a.push(u);
      }
      return a;
    }
    get box() {
      return l(this, Kc);
    }
    get classNamesForOutlining() {
      return [
        "highlightOutline"
      ];
    }
  }
  Kc = /* @__PURE__ */ new WeakMap(), oh = /* @__PURE__ */ new WeakMap();
  class Cf extends $b {
    newFreeDrawOutline(t, e, s, i, r, a) {
      return new AC(t, e, s, i, r, a);
    }
  }
  class AC extends Kb {
    newOutliner(t, e, s, i, r, a = 0) {
      return new Cf(t, e, s, i, r, a);
    }
  }
  var Vs, ba, Vh, Ut, nd, hh, Qc, ad, An, ei, Gh, Xh, xt, Af, kf, Tf, Jr, $m, lr;
  const Jc = class bi {
    constructor({ editor: t = null, uiManager: e = null }) {
      y(this, xt), y(this, Vs, null), y(this, ba, null), y(this, Vh), y(this, Ut, null), y(this, nd, false), y(this, hh, false), y(this, Qc, null), y(this, ad), y(this, An, null), y(this, ei, null), y(this, Gh);
      var s;
      t ? (m(this, hh, false), m(this, Gh, et.HIGHLIGHT_COLOR), m(this, Qc, t)) : (m(this, hh, true), m(this, Gh, et.HIGHLIGHT_DEFAULT_COLOR)), m(this, ei, (t == null ? void 0 : t._uiManager) || e), m(this, ad, l(this, ei)._eventBus), m(this, Vh, (t == null ? void 0 : t.color) || ((s = l(this, ei)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), l(bi, Xh) || m(bi, Xh, Object.freeze({
        blue: "pdfjs-editor-colorpicker-blue",
        green: "pdfjs-editor-colorpicker-green",
        pink: "pdfjs-editor-colorpicker-pink",
        red: "pdfjs-editor-colorpicker-red",
        yellow: "pdfjs-editor-colorpicker-yellow"
      }));
    }
    static get _keyboardManager() {
      return Z(this, "_keyboardManager", new gl([
        [
          [
            "Escape",
            "mac+Escape"
          ],
          bi.prototype._hideDropdownFromKeyboard
        ],
        [
          [
            " ",
            "mac+ "
          ],
          bi.prototype._colorSelectFromKeyboard
        ],
        [
          [
            "ArrowDown",
            "ArrowRight",
            "mac+ArrowDown",
            "mac+ArrowRight"
          ],
          bi.prototype._moveToNext
        ],
        [
          [
            "ArrowUp",
            "ArrowLeft",
            "mac+ArrowUp",
            "mac+ArrowLeft"
          ],
          bi.prototype._moveToPrevious
        ],
        [
          [
            "Home",
            "mac+Home"
          ],
          bi.prototype._moveToBeginning
        ],
        [
          [
            "End",
            "mac+End"
          ],
          bi.prototype._moveToEnd
        ]
      ]));
    }
    renderButton() {
      const t = m(this, Vs, document.createElement("button"));
      t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", true);
      const e = l(this, ei)._signal;
      t.addEventListener("click", w(this, xt, Jr).bind(this), {
        signal: e
      }), t.addEventListener("keydown", w(this, xt, Tf).bind(this), {
        signal: e
      });
      const s = m(this, ba, document.createElement("span"));
      return s.className = "swatch", s.setAttribute("aria-hidden", true), s.style.backgroundColor = l(this, Vh), t.append(s), t;
    }
    renderMainDropdown() {
      const t = m(this, Ut, w(this, xt, Af).call(this));
      return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
    }
    _colorSelectFromKeyboard(t) {
      if (t.target === l(this, Vs)) {
        w(this, xt, Jr).call(this, t);
        return;
      }
      const e = t.target.getAttribute("data-color");
      e && w(this, xt, kf).call(this, e, t);
    }
    _moveToNext(t) {
      var e, s;
      if (!l(this, xt, lr)) {
        w(this, xt, Jr).call(this, t);
        return;
      }
      if (t.target === l(this, Vs)) {
        (e = l(this, Ut).firstChild) == null || e.focus();
        return;
      }
      (s = t.target.nextSibling) == null || s.focus();
    }
    _moveToPrevious(t) {
      var e, s;
      if (t.target === ((e = l(this, Ut)) == null ? void 0 : e.firstChild) || t.target === l(this, Vs)) {
        l(this, xt, lr) && this._hideDropdownFromKeyboard();
        return;
      }
      l(this, xt, lr) || w(this, xt, Jr).call(this, t), (s = t.target.previousSibling) == null || s.focus();
    }
    _moveToBeginning(t) {
      var e;
      if (!l(this, xt, lr)) {
        w(this, xt, Jr).call(this, t);
        return;
      }
      (e = l(this, Ut).firstChild) == null || e.focus();
    }
    _moveToEnd(t) {
      var e;
      if (!l(this, xt, lr)) {
        w(this, xt, Jr).call(this, t);
        return;
      }
      (e = l(this, Ut).lastChild) == null || e.focus();
    }
    hideDropdown() {
      var t, e;
      (t = l(this, Ut)) == null || t.classList.add("hidden"), (e = l(this, An)) == null || e.abort(), m(this, An, null);
    }
    _hideDropdownFromKeyboard() {
      var t;
      if (!l(this, hh)) {
        if (!l(this, xt, lr)) {
          (t = l(this, Qc)) == null || t.unselect();
          return;
        }
        this.hideDropdown(), l(this, Vs).focus({
          preventScroll: true,
          focusVisible: l(this, nd)
        });
      }
    }
    updateColor(t) {
      if (l(this, ba) && (l(this, ba).style.backgroundColor = t), !l(this, Ut)) return;
      const e = l(this, ei).highlightColors.values();
      for (const s of l(this, Ut).children) s.setAttribute("aria-selected", e.next().value === t);
    }
    destroy() {
      var t, e;
      (t = l(this, Vs)) == null || t.remove(), m(this, Vs, null), m(this, ba, null), (e = l(this, Ut)) == null || e.remove(), m(this, Ut, null);
    }
  };
  Vs = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), Vh = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), nd = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Gh = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakSet(), Af = function() {
    const n = document.createElement("div"), t = l(this, ei)._signal;
    n.addEventListener("contextmenu", Rs, {
      signal: t
    }), n.className = "dropdown", n.role = "listbox", n.setAttribute("aria-multiselectable", false), n.setAttribute("aria-orientation", "vertical"), n.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    for (const [e, s] of l(this, ei).highlightColors) {
      const i = document.createElement("button");
      i.tabIndex = "0", i.role = "option", i.setAttribute("data-color", s), i.title = e, i.setAttribute("data-l10n-id", l(Jc, Xh)[e]);
      const r = document.createElement("span");
      i.append(r), r.className = "swatch", r.style.backgroundColor = s, i.setAttribute("aria-selected", s === l(this, Vh)), i.addEventListener("click", w(this, xt, kf).bind(this, s), {
        signal: t
      }), n.append(i);
    }
    return n.addEventListener("keydown", w(this, xt, Tf).bind(this), {
      signal: t
    }), n;
  }, kf = function(n, t) {
    t.stopPropagation(), l(this, ad).dispatch("switchannotationeditorparams", {
      source: this,
      type: l(this, Gh),
      value: n
    });
  }, Tf = function(n) {
    Jc._keyboardManager.exec(this, n);
  }, Jr = function(n) {
    if (l(this, xt, lr)) {
      this.hideDropdown();
      return;
    }
    if (m(this, nd, n.detail === 0), l(this, An) || (m(this, An, new AbortController()), window.addEventListener("pointerdown", w(this, xt, $m).bind(this), {
      signal: l(this, ei).combinedSignal(l(this, An))
    })), l(this, Ut)) {
      l(this, Ut).classList.remove("hidden");
      return;
    }
    const t = m(this, Ut, w(this, xt, Af).call(this));
    l(this, Vs).append(t);
  }, $m = function(n) {
    var t;
    (t = l(this, Ut)) != null && t.contains(n.target) || this.hideDropdown();
  }, lr = function() {
    return l(this, Ut) && !l(this, Ut).classList.contains("hidden");
  }, y(Jc, Xh, null);
  let ty = Jc;
  var Uh, od, Sr, Na, Yh, Xe, hd, ld, to, Cs, as, ue, $h, Cr, _e, lh, Ms, Zc, ot, Mf, cd, ey, sy, qm, Ef, Zr, Pi, eo, iy, tu, qh, ry, ny, ay, oy, hy;
  const Pe = class ne extends Mt {
    constructor(t) {
      super({
        ...t,
        name: "highlightEditor"
      }), y(this, ot), y(this, Uh, null), y(this, od, 0), y(this, Sr), y(this, Na, null), y(this, Yh, null), y(this, Xe, null), y(this, hd, null), y(this, ld, 0), y(this, to, null), y(this, Cs, null), y(this, as, null), y(this, ue, false), y(this, $h, null), y(this, Cr), y(this, _e, null), y(this, lh, ""), y(this, Ms), y(this, Zc, ""), this.color = t.color || ne._defaultColor, m(this, Ms, t.thickness || ne._defaultThickness), m(this, Cr, t.opacity || ne._defaultOpacity), m(this, Sr, t.boxes || null), m(this, Zc, t.methodOfCreation || ""), m(this, lh, t.text || ""), this._isDraggable = false, t.highlightId > -1 ? (m(this, ue, true), w(this, ot, cd).call(this, t), w(this, ot, Zr).call(this)) : l(this, Sr) && (m(this, Uh, t.anchorNode), m(this, od, t.anchorOffset), m(this, hd, t.focusNode), m(this, ld, t.focusOffset), w(this, ot, Mf).call(this), w(this, ot, Zr).call(this), this.rotate(this.rotation));
    }
    static get _keyboardManager() {
      const t = ne.prototype;
      return Z(this, "_keyboardManager", new gl([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._moveCaret,
          {
            args: [
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._moveCaret,
          {
            args: [
              1
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._moveCaret,
          {
            args: [
              2
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._moveCaret,
          {
            args: [
              3
            ]
          }
        ]
      ]));
    }
    get telemetryInitialData() {
      return {
        action: "added",
        type: l(this, ue) ? "free_highlight" : "highlight",
        color: this._uiManager.highlightColorNames.get(this.color),
        thickness: l(this, Ms),
        methodOfCreation: l(this, Zc)
      };
    }
    get telemetryFinalData() {
      return {
        type: "highlight",
        color: this._uiManager.highlightColorNames.get(this.color)
      };
    }
    static computeTelemetryFinalData(t) {
      return {
        numberOfColors: t.get("color").size
      };
    }
    static initialize(t, e) {
      var s;
      Mt.initialize(t, e), ne._defaultColor || (ne._defaultColor = ((s = e.highlightColors) == null ? void 0 : s.values().next().value) || "#fff066");
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case et.HIGHLIGHT_DEFAULT_COLOR:
          ne._defaultColor = e;
          break;
        case et.HIGHLIGHT_THICKNESS:
          ne._defaultThickness = e;
          break;
      }
    }
    translateInPage(t, e) {
    }
    get toolbarPosition() {
      return l(this, $h);
    }
    updateParams(t, e) {
      switch (t) {
        case et.HIGHLIGHT_COLOR:
          w(this, ot, ey).call(this, e);
          break;
        case et.HIGHLIGHT_THICKNESS:
          w(this, ot, sy).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          et.HIGHLIGHT_DEFAULT_COLOR,
          ne._defaultColor
        ],
        [
          et.HIGHLIGHT_THICKNESS,
          ne._defaultThickness
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          et.HIGHLIGHT_COLOR,
          this.color || ne._defaultColor
        ],
        [
          et.HIGHLIGHT_THICKNESS,
          l(this, Ms) || ne._defaultThickness
        ],
        [
          et.HIGHLIGHT_FREE,
          l(this, ue)
        ]
      ];
    }
    async addEditToolbar() {
      const t = await super.addEditToolbar();
      return t ? (this._uiManager.highlightColors && (m(this, Yh, new ty({
        editor: this
      })), t.addColorPicker(l(this, Yh))), t) : null;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(w(this, ot, qh).call(this));
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    getRect(t, e) {
      return super.getRect(t, e, w(this, ot, qh).call(this));
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
    }
    remove() {
      w(this, ot, Ef).call(this), this._reportTelemetry({
        action: "deleted"
      }), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (w(this, ot, Zr).call(this), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var e;
      let s = false;
      this.parent && !t ? w(this, ot, Ef).call(this) : t && (w(this, ot, Zr).call(this, t), s = !this.parent && ((e = this.div) == null ? void 0 : e.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), s && this.select();
    }
    rotate(t) {
      var e, s, i;
      const { drawLayer: r } = this.parent;
      let a;
      l(this, ue) ? (t = (t - this.rotation + 360) % 360, a = w(e = ne, Pi, eo).call(e, l(this, Cs).box, t)) : a = w(s = ne, Pi, eo).call(s, [
        this.x,
        this.y,
        this.width,
        this.height
      ], t), r.updateProperties(l(this, as), {
        bbox: a,
        root: {
          "data-main-rotation": t
        }
      }), r.updateProperties(l(this, _e), {
        bbox: w(i = ne, Pi, eo).call(i, l(this, Xe).box, t),
        root: {
          "data-main-rotation": t
        }
      });
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      l(this, lh) && (t.setAttribute("aria-label", l(this, lh)), t.setAttribute("role", "mark")), l(this, ue) ? t.classList.add("free") : this.div.addEventListener("keydown", w(this, ot, iy).bind(this), {
        signal: this._uiManager._signal
      });
      const e = m(this, to, document.createElement("div"));
      t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = l(this, Na);
      const [s, i] = this.parentDimensions;
      return this.setDims(this.width * s, this.height * i), Tu(this, l(this, to), [
        "pointerover",
        "pointerleave"
      ]), this.enableEditing(), t;
    }
    pointerover() {
      var t;
      this.isSelected || (t = this.parent) == null || t.drawLayer.updateProperties(l(this, _e), {
        rootClass: {
          hovered: true
        }
      });
    }
    pointerleave() {
      var t;
      this.isSelected || (t = this.parent) == null || t.drawLayer.updateProperties(l(this, _e), {
        rootClass: {
          hovered: false
        }
      });
    }
    _moveCaret(t) {
      switch (this.parent.unselect(this), t) {
        case 0:
        case 2:
          w(this, ot, tu).call(this, true);
          break;
        case 1:
        case 3:
          w(this, ot, tu).call(this, false);
          break;
      }
    }
    select() {
      var t;
      super.select(), l(this, _e) && ((t = this.parent) == null || t.drawLayer.updateProperties(l(this, _e), {
        rootClass: {
          hovered: false,
          selected: true
        }
      }));
    }
    unselect() {
      var t;
      super.unselect(), l(this, _e) && ((t = this.parent) == null || t.drawLayer.updateProperties(l(this, _e), {
        rootClass: {
          selected: false
        }
      }), l(this, ue) || w(this, ot, tu).call(this, false));
    }
    get _mustFixPosition() {
      return !l(this, ue);
    }
    show(t = this._isVisible) {
      super.show(t), this.parent && (this.parent.drawLayer.updateProperties(l(this, as), {
        rootClass: {
          hidden: !t
        }
      }), this.parent.drawLayer.updateProperties(l(this, _e), {
        rootClass: {
          hidden: !t
        }
      }));
    }
    static startHighlighting(t, e, { target: s, x: i, y: r }) {
      const { x: a, y: o, width: h, height: c } = s.getBoundingClientRect(), u = new AbortController(), d = t.combinedSignal(u), g = (f) => {
        u.abort(), w(this, Pi, oy).call(this, t, f);
      };
      window.addEventListener("blur", g, {
        signal: d
      }), window.addEventListener("pointerup", g, {
        signal: d
      }), window.addEventListener("pointerdown", qe, {
        capture: true,
        passive: false,
        signal: d
      }), window.addEventListener("contextmenu", Rs, {
        signal: d
      }), s.addEventListener("pointermove", w(this, Pi, ay).bind(this, t), {
        signal: d
      }), this._freeHighlight = new Cf({
        x: i,
        y: r
      }, [
        a,
        o,
        h,
        c
      ], t.scale, this._defaultThickness / 2, e, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.draw({
        bbox: [
          0,
          0,
          1,
          1
        ],
        root: {
          viewBox: "0 0 1 1",
          fill: this._defaultColor,
          "fill-opacity": this._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      }, true, true);
    }
    static async deserialize(t, e, s) {
      var i, r, a, o;
      let h = null;
      if (t instanceof Rb) {
        const { data: { quadPoints: S, rect: x, rotation: C, id: T, color: O, opacity: E, popupRef: D }, parent: { page: { pageNumber: F } } } = t;
        h = t = {
          annotationType: K.HIGHLIGHT,
          color: Array.from(O),
          opacity: E,
          quadPoints: S,
          boxes: null,
          pageIndex: F - 1,
          rect: x.slice(0),
          rotation: C,
          id: T,
          deleted: false,
          popupRef: D
        };
      } else if (t instanceof Sp) {
        const { data: { inkLists: S, rect: x, rotation: C, id: T, color: O, borderStyle: { rawWidth: E }, popupRef: D }, parent: { page: { pageNumber: F } } } = t;
        h = t = {
          annotationType: K.HIGHLIGHT,
          color: Array.from(O),
          thickness: E,
          inkLists: S,
          boxes: null,
          pageIndex: F - 1,
          rect: x.slice(0),
          rotation: C,
          id: T,
          deleted: false,
          popupRef: D
        };
      }
      const { color: c, quadPoints: u, inkLists: d, opacity: g } = t, f = await super.deserialize(t, e, s);
      f.color = V.makeHexColor(...c), m(f, Cr, g || 1), d && m(f, Ms, t.thickness), f.annotationElementId = t.id || null, f._initialData = h;
      const [p, v] = f.pageDimensions, [b, _] = f.pageTranslation;
      if (u) {
        const S = m(f, Sr, []);
        for (let x = 0; x < u.length; x += 8) S.push({
          x: (u[x] - b) / p,
          y: 1 - (u[x + 1] - _) / v,
          width: (u[x + 2] - u[x]) / p,
          height: (u[x + 1] - u[x + 5]) / v
        });
        w(i = f, ot, Mf).call(i), w(r = f, ot, Zr).call(r), f.rotate(f.rotation);
      } else if (d) {
        m(f, ue, true);
        const S = d[0], x = {
          x: S[0] - b,
          y: v - (S[1] - _)
        }, C = new Cf(x, [
          0,
          0,
          p,
          v
        ], 1, l(f, Ms) / 2, true, 1e-3);
        for (let E = 0, D = S.length; E < D; E += 2) x.x = S[E] - b, x.y = v - (S[E + 1] - _), C.add(x);
        const { id: T, clipPathId: O } = e.drawLayer.draw({
          bbox: [
            0,
            0,
            1,
            1
          ],
          root: {
            viewBox: "0 0 1 1",
            fill: f.color,
            "fill-opacity": f._defaultOpacity
          },
          rootClass: {
            highlight: true,
            free: true
          },
          path: {
            d: C.toSVGPath()
          }
        }, true, true);
        w(a = f, ot, cd).call(a, {
          highlightOutlines: C.getOutlines(),
          highlightId: T,
          clipPathId: O
        }), w(o = f, ot, Zr).call(o);
      }
      return f;
    }
    serialize(t = false) {
      if (this.isEmpty() || t) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = this.getRect(0, 0), s = Mt._colorManager.convert(this.color), i = {
        annotationType: K.HIGHLIGHT,
        color: s,
        opacity: l(this, Cr),
        thickness: l(this, Ms),
        quadPoints: w(this, ot, ry).call(this),
        outlines: w(this, ot, ny).call(this, e),
        pageIndex: this.pageIndex,
        rect: e,
        rotation: w(this, ot, qh).call(this),
        structTreeParentId: this._structTreeParentId
      };
      return this.annotationElementId && !w(this, ot, hy).call(this, i) ? null : (i.id = this.annotationElementId, i);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  Uh = /* @__PURE__ */ new WeakMap(), od = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), Yh = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap(), ld = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), Cs = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), $h = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakSet(), Mf = function() {
    const n = new Sf(l(this, Sr), 1e-3);
    m(this, Cs, n.getOutlines()), [this.x, this.y, this.width, this.height] = l(this, Cs).box;
    const t = new Sf(l(this, Sr), 25e-4, 1e-3, this._uiManager.direction === "ltr");
    m(this, Xe, t.getOutlines());
    const { lastPoint: e } = l(this, Xe);
    m(this, $h, [
      (e[0] - this.x) / this.width,
      (e[1] - this.y) / this.height
    ]);
  }, cd = function({ highlightOutlines: n, highlightId: t, clipPathId: e }) {
    var s, i;
    if (m(this, Cs, n), m(this, Xe, n.getNewOutline(l(this, Ms) / 2 + 1.5, 25e-4)), t >= 0) m(this, as, t), m(this, Na, e), this.parent.drawLayer.finalizeDraw(t, {
      bbox: n.box,
      path: {
        d: n.toSVGPath()
      }
    }), m(this, _e, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: true
      },
      bbox: l(this, Xe).box,
      path: {
        d: l(this, Xe).toSVGPath()
      }
    }, true));
    else if (this.parent) {
      const u = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(l(this, as), {
        bbox: w(s = Pe, Pi, eo).call(s, l(this, Cs).box, (u - this.rotation + 360) % 360),
        path: {
          d: n.toSVGPath()
        }
      }), this.parent.drawLayer.updateProperties(l(this, _e), {
        bbox: w(i = Pe, Pi, eo).call(i, l(this, Xe).box, u),
        path: {
          d: l(this, Xe).toSVGPath()
        }
      });
    }
    const [r, a, o, h] = n.box;
    switch (this.rotation) {
      case 0:
        this.x = r, this.y = a, this.width = o, this.height = h;
        break;
      case 90: {
        const [u, d] = this.parentDimensions;
        this.x = a, this.y = 1 - r, this.width = o * d / u, this.height = h * u / d;
        break;
      }
      case 180:
        this.x = 1 - r, this.y = 1 - a, this.width = o, this.height = h;
        break;
      case 270: {
        const [u, d] = this.parentDimensions;
        this.x = 1 - a, this.y = r, this.width = o * d / u, this.height = h * u / d;
        break;
      }
    }
    const { lastPoint: c } = l(this, Xe);
    m(this, $h, [
      (c[0] - r) / o,
      (c[1] - a) / h
    ]);
  }, ey = function(n) {
    const t = (i, r) => {
      var a, o;
      this.color = i, m(this, Cr, r), (a = this.parent) == null || a.drawLayer.updateProperties(l(this, as), {
        root: {
          fill: i,
          "fill-opacity": r
        }
      }), (o = l(this, Yh)) == null || o.updateColor(i);
    }, e = this.color, s = l(this, Cr);
    this.addCommands({
      cmd: t.bind(this, n, Pe._defaultOpacity),
      undo: t.bind(this, e, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: et.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.highlightColorNames.get(n)
    }, true);
  }, sy = function(n) {
    const t = l(this, Ms), e = (s) => {
      m(this, Ms, s), w(this, ot, qm).call(this, s);
    };
    this.addCommands({
      cmd: e.bind(this, n),
      undo: e.bind(this, t),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: et.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "thickness_changed",
      thickness: n
    }, true);
  }, qm = function(n) {
    if (!l(this, ue)) return;
    w(this, ot, cd).call(this, {
      highlightOutlines: l(this, Cs).getNewOutline(n / 2)
    }), this.fixAndSetPosition();
    const [t, e] = this.parentDimensions;
    this.setDims(this.width * t, this.height * e);
  }, Ef = function() {
    l(this, as) === null || !this.parent || (this.parent.drawLayer.remove(l(this, as)), m(this, as, null), this.parent.drawLayer.remove(l(this, _e)), m(this, _e, null));
  }, Zr = function(n = this.parent) {
    l(this, as) === null && ({ id: Be(this, as)._, clipPathId: Be(this, Na)._ } = n.drawLayer.draw({
      bbox: l(this, Cs).box,
      root: {
        viewBox: "0 0 1 1",
        fill: this.color,
        "fill-opacity": l(this, Cr)
      },
      rootClass: {
        highlight: true,
        free: l(this, ue)
      },
      path: {
        d: l(this, Cs).toSVGPath()
      }
    }, false, true), m(this, _e, n.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: l(this, ue)
      },
      bbox: l(this, Xe).box,
      path: {
        d: l(this, Xe).toSVGPath()
      }
    }, l(this, ue))), l(this, to) && (l(this, to).style.clipPath = l(this, Na)));
  }, Pi = /* @__PURE__ */ new WeakSet(), eo = function([n, t, e, s], i) {
    switch (i) {
      case 90:
        return [
          1 - t - s,
          n,
          s,
          e
        ];
      case 180:
        return [
          1 - n - e,
          1 - t - s,
          e,
          s
        ];
      case 270:
        return [
          t,
          1 - n - e,
          s,
          e
        ];
    }
    return [
      n,
      t,
      e,
      s
    ];
  }, iy = function(n) {
    Pe._keyboardManager.exec(this, n);
  }, tu = function(n) {
    if (!l(this, Uh)) return;
    const t = window.getSelection();
    n ? t.setPosition(l(this, Uh), l(this, od)) : t.setPosition(l(this, hd), l(this, ld));
  }, qh = function() {
    return l(this, ue) ? this.rotation : 0;
  }, ry = function() {
    if (l(this, ue)) return null;
    const [n, t] = this.pageDimensions, [e, s] = this.pageTranslation, i = l(this, Sr), r = new Float32Array(i.length * 8);
    let a = 0;
    for (const { x: o, y: h, width: c, height: u } of i) {
      const d = o * n + e, g = (1 - h) * t + s;
      r[a] = r[a + 4] = d, r[a + 1] = r[a + 3] = g, r[a + 2] = r[a + 6] = d + c * n, r[a + 5] = r[a + 7] = g - u * t, a += 8;
    }
    return r;
  }, ny = function(n) {
    return l(this, Cs).serialize(n, w(this, ot, qh).call(this));
  }, ay = function(n, t) {
    this._freeHighlight.add(t) && n.drawLayer.updateProperties(this._freeHighlightId, {
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    });
  }, oy = function(n, t) {
    this._freeHighlight.isEmpty() ? n.drawLayer.remove(this._freeHighlightId) : n.createAndAddNewEditor(t, false, {
      highlightId: this._freeHighlightId,
      highlightOutlines: this._freeHighlight.getOutlines(),
      clipPathId: this._freeHighlightClipId,
      methodOfCreation: "main_toolbar"
    }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
  }, hy = function(n) {
    const { color: t } = this._initialData;
    return n.color.some((e, s) => e !== t[s]);
  }, y(Pe, Pi), Y(Pe, "_defaultColor", null), Y(Pe, "_defaultOpacity", 1), Y(Pe, "_defaultThickness", 12), Y(Pe, "_type", "highlight"), Y(Pe, "_editorType", K.HIGHLIGHT), Y(Pe, "_freeHighlightId", -1), Y(Pe, "_freeHighlight", null), Y(Pe, "_freeHighlightClipId", "");
  let Km = Pe;
  var ya;
  class kC {
    constructor() {
      y(this, ya, /* @__PURE__ */ Object.create(null));
    }
    updateProperty(t, e) {
      this[t] = e, this.updateSVGProperty(t, e);
    }
    updateProperties(t) {
      if (t) for (const [e, s] of Object.entries(t)) this.updateProperty(e, s);
    }
    updateSVGProperty(t, e) {
      l(this, ya)[t] = e;
    }
    toSVGProperties() {
      const t = l(this, ya);
      return m(this, ya, /* @__PURE__ */ Object.create(null)), {
        root: t
      };
    }
    reset() {
      m(this, ya, /* @__PURE__ */ Object.create(null));
    }
    updateAll(t = this) {
      this.updateProperties(t);
    }
    clone() {
      ut("Not implemented");
    }
  }
  ya = /* @__PURE__ */ new WeakMap();
  var os, ch, Zt, Wa, Ba, cr, ur, dr, Ha, gt, Df, cg, Of, uh, Qm, eu, Kh, wa;
  const is = class U extends Mt {
    constructor(t) {
      super(t), y(this, gt), y(this, os, null), y(this, ch), Y(this, "_drawId", null), m(this, ch, t.mustBeCommitted || false), t.drawOutlines && (w(this, gt, Df).call(this, t), w(this, gt, uh).call(this));
    }
    static _mergeSVGProperties(t, e) {
      const s = new Set(Object.keys(t));
      for (const [i, r] of Object.entries(e)) s.has(i) ? Object.assign(t[i], r) : t[i] = r;
      return t;
    }
    static getDefaultDrawingOptions(t) {
      ut("Not implemented");
    }
    static get typesMap() {
      ut("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t, e) {
      const s = this.typesMap.get(t);
      s && this._defaultDrawingOptions.updateProperty(s, e), this._currentParent && (l(U, Zt).updateProperty(s, e), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(t, e) {
      const s = this.constructor.typesMap.get(t);
      s && this._updateProperty(t, s, e);
    }
    static get defaultPropertiesToUpdate() {
      const t = [], e = this._defaultDrawingOptions;
      for (const [s, i] of this.typesMap) t.push([
        s,
        e[i]
      ]);
      return t;
    }
    get propertiesToUpdate() {
      const t = [], { _drawingOptions: e } = this;
      for (const [s, i] of this.constructor.typesMap) t.push([
        s,
        e[i]
      ]);
      return t;
    }
    _updateProperty(t, e, s) {
      const i = this._drawingOptions, r = i[e], a = (o) => {
        var h;
        i.updateProperty(e, o);
        const c = l(this, os).updateProperty(e, o);
        c && w(this, gt, Kh).call(this, c), (h = this.parent) == null || h.drawLayer.updateProperties(this._drawId, i.toSVGProperties());
      };
      this.addCommands({
        cmd: a.bind(this, s),
        undo: a.bind(this, r),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: t,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _onResizing() {
      var t;
      (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, U._mergeSVGProperties(l(this, os).getPathResizingSVGProperties(w(this, gt, eu).call(this)), {
        bbox: w(this, gt, wa).call(this)
      }));
    }
    _onResized() {
      var t;
      (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, U._mergeSVGProperties(l(this, os).getPathResizedSVGProperties(w(this, gt, eu).call(this)), {
        bbox: w(this, gt, wa).call(this)
      }));
    }
    _onTranslating(t, e) {
      var s;
      (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
        bbox: w(this, gt, wa).call(this, t, e)
      });
    }
    _onTranslated() {
      var t;
      (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, U._mergeSVGProperties(l(this, os).getPathTranslatedSVGProperties(w(this, gt, eu).call(this), this.parentDimensions), {
        bbox: w(this, gt, wa).call(this)
      }));
    }
    _onStartDragging() {
      var t;
      (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: true
        }
      });
    }
    _onStopDragging() {
      var t;
      (t = this.parent) == null || t.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: false
        }
      });
    }
    commit() {
      super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, l(this, ch) && (m(this, ch, false), this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
    }
    remove() {
      w(this, gt, Of).call(this), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (w(this, gt, uh).call(this), w(this, gt, Kh).call(this, l(this, os).box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var e;
      let s = false;
      this.parent && !t ? (this._uiManager.removeShouldRescale(this), w(this, gt, Of).call(this)) : t && (this._uiManager.addShouldRescale(this), w(this, gt, uh).call(this, t), s = !this.parent && ((e = this.div) == null ? void 0 : e.classList.contains("selectedEditor"))), super.setParent(t), s && this.select();
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, U._mergeSVGProperties({
        bbox: w(this, gt, wa).call(this)
      }, l(this, os).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && w(this, gt, Kh).call(this, l(this, os).updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      t.classList.add("draw");
      const e = document.createElement("div");
      t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal";
      const [s, i] = this.parentDimensions;
      return this.setDims(this.width * s, this.height * i), this._uiManager.addShouldRescale(this), this.disableEditing(), t;
    }
    static createDrawerInstance(t, e, s, i, r) {
      ut("Not implemented");
    }
    static startDrawing(t, e, s, i) {
      var r;
      const { target: a, offsetX: o, offsetY: h, pointerId: c, pointerType: u } = i;
      if (l(U, ur) && l(U, ur) !== u) return;
      const { viewport: { rotation: d } } = t, { width: g, height: f } = a.getBoundingClientRect(), p = m(U, Wa, new AbortController()), v = t.combinedSignal(p);
      if (l(U, cr) || m(U, cr, c), l(U, ur) ?? m(U, ur, u), window.addEventListener("pointerup", (b) => {
        var _;
        l(U, cr) === b.pointerId ? this._endDraw(b) : (_ = l(U, dr)) == null || _.delete(b.pointerId);
      }, {
        signal: v
      }), window.addEventListener("pointercancel", (b) => {
        var _;
        l(U, cr) === b.pointerId ? this._currentParent.endDrawingSession() : (_ = l(U, dr)) == null || _.delete(b.pointerId);
      }, {
        signal: v
      }), window.addEventListener("pointerdown", (b) => {
        l(U, ur) === b.pointerType && ((l(U, dr) || m(U, dr, /* @__PURE__ */ new Set())).add(b.pointerId), l(U, Zt).isCancellable() && (l(U, Zt).removeLastElement(), l(U, Zt).isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
      }, {
        capture: true,
        passive: false,
        signal: v
      }), window.addEventListener("contextmenu", Rs, {
        signal: v
      }), a.addEventListener("pointermove", this._drawMove.bind(this), {
        signal: v
      }), a.addEventListener("touchmove", (b) => {
        b.timeStamp === l(U, Ha) && qe(b);
      }, {
        signal: v
      }), t.toggleDrawing(), (r = e._editorUndoBar) == null || r.hide(), l(U, Zt)) {
        t.drawLayer.updateProperties(this._currentDrawId, l(U, Zt).startNew(o, h, g, f, d));
        return;
      }
      e.updateUIForDefaultProperties(this), m(U, Zt, this.createDrawerInstance(o, h, g, f, d)), m(U, Ba, this.getDefaultDrawingOptions()), this._currentParent = t, { id: this._currentDrawId } = t.drawLayer.draw(this._mergeSVGProperties(l(U, Ba).toSVGProperties(), l(U, Zt).defaultSVGProperties), true, false);
    }
    static _drawMove(t) {
      var e;
      if (m(U, Ha, -1), !l(U, Zt)) return;
      const { offsetX: s, offsetY: i, pointerId: r } = t;
      if (l(U, cr) === r) {
        if (((e = l(U, dr)) == null ? void 0 : e.size) >= 1) {
          this._endDraw(t);
          return;
        }
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, l(U, Zt).add(s, i)), m(U, Ha, t.timeStamp), qe(t);
      }
    }
    static _cleanup(t) {
      t && (this._currentDrawId = -1, this._currentParent = null, m(U, Zt, null), m(U, Ba, null), m(U, ur, null), m(U, Ha, NaN)), l(U, Wa) && (l(U, Wa).abort(), m(U, Wa, null), m(U, cr, NaN), m(U, dr, null));
    }
    static _endDraw(t) {
      const e = this._currentParent;
      if (e) {
        if (e.toggleDrawing(true), this._cleanup(false), t && e.drawLayer.updateProperties(this._currentDrawId, l(U, Zt).end(t.offsetX, t.offsetY)), this.supportMultipleDrawings) {
          const s = l(U, Zt), i = this._currentDrawId, r = s.getLastElement();
          e.addCommands({
            cmd: () => {
              e.drawLayer.updateProperties(i, s.setLastElement(r));
            },
            undo: () => {
              e.drawLayer.updateProperties(i, s.removeLastElement());
            },
            mustExec: false,
            type: et.DRAW_STEP
          });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t) {
      const e = this._currentParent;
      if (!e) return null;
      if (e.toggleDrawing(true), e.cleanUndoStack(et.DRAW_STEP), !l(U, Zt).isEmpty()) {
        const { pageDimensions: [s, i], scale: r } = e, a = e.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0
        }, false, {
          drawId: this._currentDrawId,
          drawOutlines: l(U, Zt).getOutlines(s * r, i * r, r, this._INNER_MARGIN),
          drawingOptions: l(U, Ba),
          mustBeCommitted: !t
        });
        return this._cleanup(true), a;
      }
      return e.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
    }
    createDrawingOptions(t) {
    }
    static deserializeDraw(t, e, s, i, r, a) {
      ut("Not implemented");
    }
    static async deserialize(t, e, s) {
      var i, r;
      const { rawDims: { pageWidth: a, pageHeight: o, pageX: h, pageY: c } } = e.viewport, u = this.deserializeDraw(h, c, a, o, this._INNER_MARGIN, t), d = await super.deserialize(t, e, s);
      return d.createDrawingOptions(t), w(i = d, gt, Df).call(i, {
        drawOutlines: u
      }), w(r = d, gt, uh).call(r), d.onScaleChanging(), d.rotate(), d;
    }
    serializeDraw(t) {
      const [e, s] = this.pageTranslation, [i, r] = this.pageDimensions;
      return l(this, os).serialize([
        e,
        s,
        i,
        r
      ], t);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  os = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), Wa = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakSet(), Df = function({ drawOutlines: n, drawId: t, drawingOptions: e }) {
    m(this, os, n), this._drawingOptions || (this._drawingOptions = e), t >= 0 ? (this._drawId = t, this.parent.drawLayer.finalizeDraw(t, n.defaultProperties)) : this._drawId = w(this, gt, cg).call(this, n, this.parent), w(this, gt, Kh).call(this, n.box);
  }, cg = function(n, t) {
    const { id: e } = t.drawLayer.draw(is._mergeSVGProperties(this._drawingOptions.toSVGProperties(), n.defaultSVGProperties), false, false);
    return e;
  }, Of = function() {
    this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
  }, uh = function(n = this.parent) {
    if (!(this._drawId !== null && this.parent === n)) {
      if (this._drawId !== null) {
        this.parent.drawLayer.updateParent(this._drawId, n.drawLayer);
        return;
      }
      this._drawingOptions.updateAll(), this._drawId = w(this, gt, cg).call(this, l(this, os), n);
    }
  }, Qm = function([n, t, e, s]) {
    const { parentDimensions: [i, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          t,
          1 - n,
          e * (r / i),
          s * (i / r)
        ];
      case 180:
        return [
          1 - n,
          1 - t,
          e,
          s
        ];
      case 270:
        return [
          1 - t,
          n,
          e * (r / i),
          s * (i / r)
        ];
      default:
        return [
          n,
          t,
          e,
          s
        ];
    }
  }, eu = function() {
    const { x: n, y: t, width: e, height: s, parentDimensions: [i, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          1 - t,
          n,
          e * (i / r),
          s * (r / i)
        ];
      case 180:
        return [
          1 - n,
          1 - t,
          e,
          s
        ];
      case 270:
        return [
          t,
          1 - n,
          e * (i / r),
          s * (r / i)
        ];
      default:
        return [
          n,
          t,
          e,
          s
        ];
    }
  }, Kh = function(n) {
    if ([this.x, this.y, this.width, this.height] = w(this, gt, Qm).call(this, n), this.div) {
      this.fixAndSetPosition();
      const [t, e] = this.parentDimensions;
      this.setDims(this.width * t, this.height * e);
    }
    this._onResized();
  }, wa = function() {
    const { x: n, y: t, width: e, height: s, rotation: i, parentRotation: r, parentDimensions: [a, o] } = this;
    switch ((i * 4 + r) / 90) {
      case 1:
        return [
          1 - t - s,
          n,
          s,
          e
        ];
      case 2:
        return [
          1 - n - e,
          1 - t - s,
          e,
          s
        ];
      case 3:
        return [
          t,
          1 - n - e,
          s,
          e
        ];
      case 4:
        return [
          n,
          t - e * (a / o),
          s * (o / a),
          e * (a / o)
        ];
      case 5:
        return [
          1 - t,
          n,
          e * (a / o),
          s * (o / a)
        ];
      case 6:
        return [
          1 - n - s * (o / a),
          1 - t,
          s * (o / a),
          e * (a / o)
        ];
      case 7:
        return [
          t - e * (a / o),
          1 - n - s * (o / a),
          e * (a / o),
          s * (o / a)
        ];
      case 8:
        return [
          n - e,
          t - s,
          e,
          s
        ];
      case 9:
        return [
          1 - t,
          n - e,
          s,
          e
        ];
      case 10:
        return [
          1 - n,
          1 - t,
          e,
          s
        ];
      case 11:
        return [
          t - s,
          1 - n,
          s,
          e
        ];
      case 12:
        return [
          n - s * (o / a),
          t,
          s * (o / a),
          e * (a / o)
        ];
      case 13:
        return [
          1 - t - e * (a / o),
          n - s * (o / a),
          e * (a / o),
          s * (o / a)
        ];
      case 14:
        return [
          1 - n,
          1 - t - e * (a / o),
          s * (o / a),
          e * (a / o)
        ];
      case 15:
        return [
          t,
          1 - n,
          e * (a / o),
          s * (o / a)
        ];
      default:
        return [
          n,
          t,
          e,
          s
        ];
    }
  }, Y(is, "_currentDrawId", -1), Y(is, "_currentParent", null), y(is, Zt, null), y(is, Wa, null), y(is, Ba, null), y(is, cr, NaN), y(is, ur, null), y(is, dr, null), y(is, Ha, NaN), Y(is, "_INNER_MARGIN", 3);
  let TC = is;
  var yi, Kt, Qt, za, dh, Le, Jt, _s, _a, Va, Ga, gh, su;
  class MC {
    constructor(t, e, s, i, r, a) {
      y(this, gh), y(this, yi, new Float64Array(6)), y(this, Kt), y(this, Qt), y(this, za), y(this, dh), y(this, Le), y(this, Jt, ""), y(this, _s, 0), y(this, _a, new gy()), y(this, Va), y(this, Ga), m(this, Va, s), m(this, Ga, i), m(this, za, r), m(this, dh, a), [t, e] = w(this, gh, su).call(this, t, e);
      const o = m(this, Kt, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      m(this, Le, [
        t,
        e
      ]), m(this, Qt, [
        {
          line: o,
          points: l(this, Le)
        }
      ]), l(this, yi).set(o, 0);
    }
    updateProperty(t, e) {
      t === "stroke-width" && m(this, dh, e);
    }
    isEmpty() {
      return !l(this, Qt) || l(this, Qt).length === 0;
    }
    isCancellable() {
      return l(this, Le).length <= 10;
    }
    add(t, e) {
      [t, e] = w(this, gh, su).call(this, t, e);
      const [s, i, r, a] = l(this, yi).subarray(2, 6), o = t - r, h = e - a;
      return Math.hypot(l(this, Va) * o, l(this, Ga) * h) <= 2 ? null : (l(this, Le).push(t, e), isNaN(s) ? (l(this, yi).set([
        r,
        a,
        t,
        e
      ], 2), l(this, Kt).push(NaN, NaN, NaN, NaN, t, e), {
        path: {
          d: this.toSVGPath()
        }
      }) : (isNaN(l(this, yi)[0]) && l(this, Kt).splice(6, 6), l(this, yi).set([
        s,
        i,
        r,
        a,
        t,
        e
      ], 0), l(this, Kt).push(...H.createBezierPoints(s, i, r, a, t, e)), {
        path: {
          d: this.toSVGPath()
        }
      }));
    }
    end(t, e) {
      return this.add(t, e) || (l(this, Le).length === 2 ? {
        path: {
          d: this.toSVGPath()
        }
      } : null);
    }
    startNew(t, e, s, i, r) {
      m(this, Va, s), m(this, Ga, i), m(this, za, r), [t, e] = w(this, gh, su).call(this, t, e);
      const a = m(this, Kt, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      m(this, Le, [
        t,
        e
      ]);
      const o = l(this, Qt).at(-1);
      return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), l(this, Qt).push({
        line: a,
        points: l(this, Le)
      }), l(this, yi).set(a, 0), m(this, _s, 0), this.toSVGPath(), null;
    }
    getLastElement() {
      return l(this, Qt).at(-1);
    }
    setLastElement(t) {
      return l(this, Qt) ? (l(this, Qt).push(t), m(this, Kt, t.line), m(this, Le, t.points), m(this, _s, 0), {
        path: {
          d: this.toSVGPath()
        }
      }) : l(this, _a).setLastElement(t);
    }
    removeLastElement() {
      if (!l(this, Qt)) return l(this, _a).removeLastElement();
      l(this, Qt).pop(), m(this, Jt, "");
      for (let t = 0, e = l(this, Qt).length; t < e; t++) {
        const { line: s, points: i } = l(this, Qt)[t];
        m(this, Kt, s), m(this, Le, i), m(this, _s, 0), this.toSVGPath();
      }
      return {
        path: {
          d: l(this, Jt)
        }
      };
    }
    toSVGPath() {
      const t = H.svgRound(l(this, Kt)[4]), e = H.svgRound(l(this, Kt)[5]);
      if (l(this, Le).length === 2) return m(this, Jt, `${l(this, Jt)} M ${t} ${e} Z`), l(this, Jt);
      if (l(this, Le).length <= 6) {
        const i = l(this, Jt).lastIndexOf("M");
        m(this, Jt, `${l(this, Jt).slice(0, i)} M ${t} ${e}`), m(this, _s, 6);
      }
      if (l(this, Le).length === 4) {
        const i = H.svgRound(l(this, Kt)[10]), r = H.svgRound(l(this, Kt)[11]);
        return m(this, Jt, `${l(this, Jt)} L ${i} ${r}`), m(this, _s, 12), l(this, Jt);
      }
      const s = [];
      l(this, _s) === 0 && (s.push(`M ${t} ${e}`), m(this, _s, 6));
      for (let i = l(this, _s), r = l(this, Kt).length; i < r; i += 6) {
        const [a, o, h, c, u, d] = l(this, Kt).slice(i, i + 6).map(H.svgRound);
        s.push(`C${a} ${o} ${h} ${c} ${u} ${d}`);
      }
      return m(this, Jt, l(this, Jt) + s.join(" ")), m(this, _s, l(this, Kt).length), l(this, Jt);
    }
    getOutlines(t, e, s, i) {
      const r = l(this, Qt).at(-1);
      return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), l(this, _a).build(l(this, Qt), t, e, s, l(this, za), l(this, dh), i), m(this, yi, null), m(this, Kt, null), m(this, Qt, null), m(this, Jt, null), l(this, _a);
    }
    get defaultSVGProperties() {
      return {
        root: {
          viewBox: "0 0 10000 10000"
        },
        rootClass: {
          draw: true
        },
        bbox: [
          0,
          0,
          1,
          1
        ]
      };
    }
  }
  yi = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakSet(), su = function(n, t) {
    return H._normalizePoint(n, t, l(this, Va), l(this, Ga), l(this, za));
  };
  var Fe, iu, ud, ns, Di, Oi, Qh, Jh, Zh, $e, Li, ly, cy, uy;
  const EC = class dy extends H {
    constructor() {
      super(...arguments), y(this, $e), y(this, Fe), y(this, iu, 0), y(this, ud), y(this, ns), y(this, Di), y(this, Oi), y(this, Qh), y(this, Jh), y(this, Zh);
    }
    build(t, e, s, i, r, a, o) {
      m(this, Di, e), m(this, Oi, s), m(this, Qh, i), m(this, Jh, r), m(this, Zh, a), m(this, ud, o ?? 0), m(this, ns, t), w(this, $e, cy).call(this);
    }
    setLastElement(t) {
      return l(this, ns).push(t), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    removeLastElement() {
      return l(this, ns).pop(), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    toSVGPath() {
      const t = [];
      for (const { line: e } of l(this, ns)) {
        if (t.push(`M${H.svgRound(e[4])} ${H.svgRound(e[5])}`), e.length === 6) {
          t.push("Z");
          continue;
        }
        if (e.length === 12) {
          t.push(`L${H.svgRound(e[10])} ${H.svgRound(e[11])}`);
          continue;
        }
        for (let s = 6, i = e.length; s < i; s += 6) {
          const [r, a, o, h, c, u] = e.subarray(s, s + 6).map(H.svgRound);
          t.push(`C${r} ${a} ${o} ${h} ${c} ${u}`);
        }
      }
      return t.join("");
    }
    serialize([t, e, s, i], r) {
      const a = [], o = [], [h, c, u, d] = w(this, $e, ly).call(this);
      let g, f, p, v, b, _, S, x, C;
      switch (l(this, Jh)) {
        case 0:
          C = H._rescale, g = t, f = e + i, p = s, v = -i, b = t + h * s, _ = e + (1 - c - d) * i, S = t + (h + u) * s, x = e + (1 - c) * i;
          break;
        case 90:
          C = H._rescaleAndSwap, g = t, f = e, p = s, v = i, b = t + c * s, _ = e + h * i, S = t + (c + d) * s, x = e + (h + u) * i;
          break;
        case 180:
          C = H._rescale, g = t + s, f = e, p = -s, v = i, b = t + (1 - h - u) * s, _ = e + c * i, S = t + (1 - h) * s, x = e + (c + d) * i;
          break;
        case 270:
          C = H._rescaleAndSwap, g = t + s, f = e + i, p = -s, v = -i, b = t + (1 - c - d) * s, _ = e + (1 - h - u) * i, S = t + (1 - c) * s, x = e + (1 - h) * i;
          break;
      }
      for (const { line: T, points: O } of l(this, ns)) a.push(C(T, g, f, p, v, r ? new Array(T.length) : null)), o.push(C(O, g, f, p, v, r ? new Array(O.length) : null));
      return {
        lines: a,
        points: o,
        rect: [
          b,
          _,
          S,
          x
        ]
      };
    }
    static deserialize(t, e, s, i, r, { paths: { lines: a, points: o }, rotation: h, thickness: c }) {
      const u = [];
      let d, g, f, p, v;
      switch (h) {
        case 0:
          v = H._rescale, d = -t / s, g = e / i + 1, f = 1 / s, p = -1 / i;
          break;
        case 90:
          v = H._rescaleAndSwap, d = -e / i, g = -t / s, f = 1 / i, p = 1 / s;
          break;
        case 180:
          v = H._rescale, d = t / s + 1, g = -e / i, f = -1 / s, p = 1 / i;
          break;
        case 270:
          v = H._rescaleAndSwap, d = e / i + 1, g = t / s + 1, f = -1 / i, p = -1 / s;
          break;
      }
      if (!a) {
        a = [];
        for (const _ of o) {
          const S = _.length;
          if (S === 2) {
            a.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              _[0],
              _[1]
            ]));
            continue;
          }
          if (S === 4) {
            a.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              _[0],
              _[1],
              NaN,
              NaN,
              NaN,
              NaN,
              _[2],
              _[3]
            ]));
            continue;
          }
          const x = new Float32Array(3 * (S - 2));
          a.push(x);
          let [C, T, O, E] = _.subarray(0, 4);
          x.set([
            NaN,
            NaN,
            NaN,
            NaN,
            C,
            T
          ], 0);
          for (let D = 4; D < S; D += 2) {
            const F = _[D], L = _[D + 1];
            x.set(H.createBezierPoints(C, T, O, E, F, L), (D - 2) * 3), [C, T, O, E] = [
              O,
              E,
              F,
              L
            ];
          }
        }
      }
      for (let _ = 0, S = a.length; _ < S; _++) u.push({
        line: v(a[_].map((x) => x ?? NaN), d, g, f, p),
        points: v(o[_].map((x) => x ?? NaN), d, g, f, p)
      });
      const b = new dy();
      return b.build(u, s, i, 1, h, c, r), b;
    }
    get box() {
      return l(this, Fe);
    }
    updateProperty(t, e) {
      return t === "stroke-width" ? w(this, $e, uy).call(this, e) : null;
    }
    updateParentDimensions([t, e], s) {
      const [i, r] = w(this, $e, Li).call(this);
      m(this, Di, t), m(this, Oi, e), m(this, Qh, s);
      const [a, o] = w(this, $e, Li).call(this), h = a - i, c = o - r, u = l(this, Fe);
      return u[0] -= h, u[1] -= c, u[2] += 2 * h, u[3] += 2 * c, u;
    }
    updateRotation(t) {
      return m(this, iu, t), {
        path: {
          transform: this.rotationTransform
        }
      };
    }
    get viewBox() {
      return l(this, Fe).map(H.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t, e] = l(this, Fe);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${H.svgRound(t)} ${H.svgRound(e)}`
        }
      };
    }
    get rotationTransform() {
      const [, , t, e] = l(this, Fe);
      let s = 0, i = 0, r = 0, a = 0, o = 0, h = 0;
      switch (l(this, iu)) {
        case 90:
          i = e / t, r = -t / e, o = t;
          break;
        case 180:
          s = -1, a = -1, o = t, h = e;
          break;
        case 270:
          i = -e / t, r = t / e, h = e;
          break;
        default:
          return "";
      }
      return `matrix(${s} ${i} ${r} ${a} ${H.svgRound(o)} ${H.svgRound(h)})`;
    }
    getPathResizingSVGProperties([t, e, s, i]) {
      const [r, a] = w(this, $e, Li).call(this), [o, h, c, u] = l(this, Fe);
      if (Math.abs(c - r) <= H.PRECISION || Math.abs(u - a) <= H.PRECISION) {
        const v = t + s / 2 - (o + c / 2), b = e + i / 2 - (h + u / 2);
        return {
          path: {
            "transform-origin": `${H.svgRound(t)} ${H.svgRound(e)}`,
            transform: `${this.rotationTransform} translate(${v} ${b})`
          }
        };
      }
      const d = (s - 2 * r) / (c - 2 * r), g = (i - 2 * a) / (u - 2 * a), f = c / s, p = u / i;
      return {
        path: {
          "transform-origin": `${H.svgRound(o)} ${H.svgRound(h)}`,
          transform: `${this.rotationTransform} scale(${f} ${p}) translate(${H.svgRound(r)} ${H.svgRound(a)}) scale(${d} ${g}) translate(${H.svgRound(-r)} ${H.svgRound(-a)})`
        }
      };
    }
    getPathResizedSVGProperties([t, e, s, i]) {
      const [r, a] = w(this, $e, Li).call(this), o = l(this, Fe), [h, c, u, d] = o;
      if (o[0] = t, o[1] = e, o[2] = s, o[3] = i, Math.abs(u - r) <= H.PRECISION || Math.abs(d - a) <= H.PRECISION) {
        const b = t + s / 2 - (h + u / 2), _ = e + i / 2 - (c + d / 2);
        for (const { line: S, points: x } of l(this, ns)) H._translate(S, b, _, S), H._translate(x, b, _, x);
        return {
          root: {
            viewBox: this.viewBox
          },
          path: {
            "transform-origin": `${H.svgRound(t)} ${H.svgRound(e)}`,
            transform: this.rotationTransform || null,
            d: this.toSVGPath()
          }
        };
      }
      const g = (s - 2 * r) / (u - 2 * r), f = (i - 2 * a) / (d - 2 * a), p = -g * (h + r) + t + r, v = -f * (c + a) + e + a;
      if (g !== 1 || f !== 1 || p !== 0 || v !== 0) for (const { line: b, points: _ } of l(this, ns)) H._rescale(b, p, v, g, f, b), H._rescale(_, p, v, g, f, _);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${H.svgRound(t)} ${H.svgRound(e)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    getPathTranslatedSVGProperties([t, e], s) {
      const [i, r] = s, a = l(this, Fe), o = t - a[0], h = e - a[1];
      if (l(this, Di) === i && l(this, Oi) === r) for (const { line: c, points: u } of l(this, ns)) H._translate(c, o, h, c), H._translate(u, o, h, u);
      else {
        const c = l(this, Di) / i, u = l(this, Oi) / r;
        m(this, Di, i), m(this, Oi, r);
        for (const { line: d, points: g } of l(this, ns)) H._rescale(d, o, h, c, u, d), H._rescale(g, o, h, c, u, g);
        a[2] *= c, a[3] *= u;
      }
      return a[0] = t, a[1] = e, {
        root: {
          viewBox: this.viewBox
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${H.svgRound(t)} ${H.svgRound(e)}`
        }
      };
    }
    get defaultSVGProperties() {
      const t = l(this, Fe);
      return {
        root: {
          viewBox: this.viewBox
        },
        rootClass: {
          draw: true
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${H.svgRound(t[0])} ${H.svgRound(t[1])}`,
          transform: this.rotationTransform || null
        },
        bbox: t
      };
    }
  };
  Fe = /* @__PURE__ */ new WeakMap(), iu = /* @__PURE__ */ new WeakMap(), ud = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Qh = /* @__PURE__ */ new WeakMap(), Jh = /* @__PURE__ */ new WeakMap(), Zh = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakSet(), Li = function(n = l(this, Zh)) {
    const t = l(this, ud) + n / 2 * l(this, Qh);
    return l(this, Jh) % 180 === 0 ? [
      t / l(this, Di),
      t / l(this, Oi)
    ] : [
      t / l(this, Oi),
      t / l(this, Di)
    ];
  }, ly = function() {
    const [n, t, e, s] = l(this, Fe), [i, r] = w(this, $e, Li).call(this, 0);
    return [
      n + i,
      t + r,
      e - 2 * i,
      s - 2 * r
    ];
  }, cy = function() {
    const n = m(this, Fe, new Float32Array([
      1 / 0,
      1 / 0,
      -1 / 0,
      -1 / 0
    ]));
    for (const { line: s } of l(this, ns)) {
      if (s.length <= 12) {
        for (let a = 4, o = s.length; a < o; a += 6) {
          const [h, c] = s.subarray(a, a + 2);
          n[0] = Math.min(n[0], h), n[1] = Math.min(n[1], c), n[2] = Math.max(n[2], h), n[3] = Math.max(n[3], c);
        }
        continue;
      }
      let i = s[4], r = s[5];
      for (let a = 6, o = s.length; a < o; a += 6) {
        const [h, c, u, d, g, f] = s.subarray(a, a + 6);
        V.bezierBoundingBox(i, r, h, c, u, d, g, f, n), i = g, r = f;
      }
    }
    const [t, e] = w(this, $e, Li).call(this);
    n[0] = Math.min(1, Math.max(0, n[0] - t)), n[1] = Math.min(1, Math.max(0, n[1] - e)), n[2] = Math.min(1, Math.max(0, n[2] + t)), n[3] = Math.min(1, Math.max(0, n[3] + e)), n[2] -= n[0], n[3] -= n[1];
  }, uy = function(n) {
    const [t, e] = w(this, $e, Li).call(this);
    m(this, Zh, n);
    const [s, i] = w(this, $e, Li).call(this), [r, a] = [
      s - t,
      i - e
    ], o = l(this, Fe);
    return o[0] -= r, o[1] -= a, o[2] += 2 * r, o[3] += 2 * a, o;
  };
  let gy = EC;
  var fh;
  const DC = class fy extends kC {
    constructor(t) {
      super(), y(this, fh), m(this, fh, t), super.updateProperties({
        fill: "none",
        stroke: Mt._defaultLineColor,
        "stroke-opacity": 1,
        "stroke-width": 1,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
    }
    updateSVGProperty(t, e) {
      t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= l(this, fh).realScale), super.updateSVGProperty(t, e);
    }
    clone() {
      const t = new fy(l(this, fh));
      return t.updateAll(this), t;
    }
  };
  fh = /* @__PURE__ */ new WeakMap();
  let OC = DC;
  var Pf, py;
  const ru = class my extends TC {
    constructor(t) {
      super({
        ...t,
        name: "inkEditor"
      }), y(this, Pf), this._willKeepAspectRatio = true;
    }
    static initialize(t, e) {
      Mt.initialize(t, e), this._defaultDrawingOptions = new OC(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return Z(this, "typesMap", /* @__PURE__ */ new Map([
        [
          et.INK_THICKNESS,
          "stroke-width"
        ],
        [
          et.INK_COLOR,
          "stroke"
        ],
        [
          et.INK_OPACITY,
          "stroke-opacity"
        ]
      ]));
    }
    static createDrawerInstance(t, e, s, i, r) {
      return new MC(t, e, s, i, r, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t, e, s, i, r, a) {
      return gy.deserialize(t, e, s, i, r, a);
    }
    static async deserialize(t, e, s) {
      let i = null;
      if (t instanceof Sp) {
        const { data: { inkLists: a, rect: o, rotation: h, id: c, color: u, opacity: d, borderStyle: { rawWidth: g }, popupRef: f }, parent: { page: { pageNumber: p } } } = t;
        i = t = {
          annotationType: K.INK,
          color: Array.from(u),
          thickness: g,
          opacity: d,
          paths: {
            points: a
          },
          boxes: null,
          pageIndex: p - 1,
          rect: o.slice(0),
          rotation: h,
          id: c,
          deleted: false,
          popupRef: f
        };
      }
      const r = await super.deserialize(t, e, s);
      return r.annotationElementId = t.id || null, r._initialData = i, r;
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t, _drawingOptions: e, parent: s } = this;
      e.updateSVGProperty("stroke-width"), s.drawLayer.updateProperties(t, e.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t = this._currentParent;
      t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t, thickness: e, opacity: s }) {
      this._drawingOptions = my.getDefaultDrawingOptions({
        stroke: V.makeHexColor(...t),
        "stroke-width": e,
        "stroke-opacity": s
      });
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e, points: s, rect: i } = this.serializeDraw(t), { _drawingOptions: { stroke: r, "stroke-opacity": a, "stroke-width": o } } = this, h = {
        annotationType: K.INK,
        color: Mt._colorManager.convert(r),
        opacity: a,
        thickness: o,
        paths: {
          lines: e,
          points: s
        },
        pageIndex: this.pageIndex,
        rect: i,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId
      };
      return t ? h : this.annotationElementId && !w(this, Pf, py).call(this, h) ? null : (h.id = this.annotationElementId, h);
    }
    renderAnnotationElement(t) {
      const { points: e, rect: s } = this.serializeDraw(false);
      return t.updateEdited({
        rect: s,
        thickness: this._drawingOptions["stroke-width"],
        points: e
      }), null;
    }
  };
  Pf = /* @__PURE__ */ new WeakSet(), py = function(n) {
    const { color: t, thickness: e, opacity: s, pageIndex: i } = this._initialData;
    return this._hasBeenMoved || this._hasBeenResized || n.color.some((r, a) => r !== t[a]) || n.thickness !== e || n.opacity !== s || n.pageIndex !== i;
  }, Y(ru, "_type", "ink"), Y(ru, "_editorType", K.INK), Y(ru, "_defaultDrawingOptions", null);
  let PC = ru;
  var St, he, pn, Ar, kn, ph, Ri, wi, gs, tl, bt, yo, wo, nu, Lf, dd, Rf, au, vy;
  const ou = class extends Mt {
    constructor(t) {
      super({
        ...t,
        name: "stampEditor"
      }), y(this, bt), y(this, St, null), y(this, he, null), y(this, pn, null), y(this, Ar, null), y(this, kn, null), y(this, ph, ""), y(this, Ri, null), y(this, wi, null), y(this, gs, false), y(this, tl, false), m(this, Ar, t.bitmapUrl), m(this, kn, t.bitmapFile);
    }
    static initialize(t, e) {
      Mt.initialize(t, e);
    }
    static get supportedTypes() {
      return Z(this, "supportedTypes", [
        "apng",
        "avif",
        "bmp",
        "gif",
        "jpeg",
        "png",
        "svg+xml",
        "webp",
        "x-icon"
      ].map((t) => `image/${t}`));
    }
    static get supportedTypesStr() {
      return Z(this, "supportedTypesStr", this.supportedTypes.join(","));
    }
    static isHandlingMimeForPasting(t) {
      return this.supportedTypes.includes(t);
    }
    static paste(t, e) {
      e.pasteEditor(K.STAMP, {
        bitmapFile: t.getAsFile()
      });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
    }
    get telemetryFinalData() {
      var t;
      return {
        type: "stamp",
        hasAltText: !!((t = this.altTextData) != null && t.altText)
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasAltText");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    async mlGuessAltText(t = null, e = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: s } = this._uiManager;
      if (!s) throw new Error("No ML.");
      if (!await s.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: i, width: r, height: a } = t || this.copyCanvas(null, null, true).imageData, o = await s.guess({
        name: "altText",
        request: {
          data: i,
          width: r,
          height: a,
          channels: i.length / (r * a)
        }
      });
      if (!o) throw new Error("No response from the AI service.");
      if (o.error) throw new Error("Error from the AI service.");
      if (o.cancel) return null;
      if (!o.output) throw new Error("No valid response from the AI service.");
      const h = o.output;
      return await this.setGuessedAltText(h), e && !this.hasAltTextData() && (this.altTextData = {
        alt: h,
        decorative: false
      }), h;
    }
    remove() {
      var t;
      l(this, he) && (m(this, St, null), this._uiManager.imageManager.deleteId(l(this, he)), (t = l(this, Ri)) == null || t.remove(), m(this, Ri, null), l(this, wi) && (clearTimeout(l(this, wi)), m(this, wi, null))), super.remove();
    }
    rebuild() {
      if (!this.parent) {
        l(this, he) && w(this, bt, nu).call(this);
        return;
      }
      super.rebuild(), this.div !== null && (l(this, he) && l(this, Ri) === null && w(this, bt, nu).call(this), this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded(t) {
      this._isDraggable = true, t && this.div.focus();
    }
    isEmpty() {
      return !(l(this, pn) || l(this, St) || l(this, Ar) || l(this, kn) || l(this, he));
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      if (this.width && (t = this.x, e = this.y), super.render(), this.div.hidden = true, this.div.setAttribute("role", "figure"), this.addAltTextButton(), l(this, St) ? w(this, bt, Lf).call(this) : w(this, bt, nu).call(this), this.width && !this.annotationElementId) {
        const [s, i] = this.parentDimensions;
        this.setAt(t * s, e * i, this.width * s, this.height * i);
      }
      return this._uiManager.addShouldRescale(this), this.div;
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      this.parent && (l(this, wi) !== null && clearTimeout(l(this, wi)), m(this, wi, setTimeout(() => {
        m(this, wi, null), w(this, bt, Rf).call(this);
      }, 200)));
    }
    copyCanvas(t, e, s = false) {
      var i;
      t || (t = 224);
      const { width: r, height: a } = l(this, St), o = new yp();
      let h = l(this, St), c = r, u = a, d = null;
      if (e) {
        if (r > e || a > e) {
          const E = Math.min(e / r, e / a);
          c = Math.floor(r * E), u = Math.floor(a * E);
        }
        d = document.createElement("canvas");
        const f = d.width = Math.ceil(c * o.sx), p = d.height = Math.ceil(u * o.sy);
        l(this, gs) || (h = w(this, bt, dd).call(this, f, p));
        const v = d.getContext("2d");
        v.filter = this._uiManager.hcmFilter;
        let b = "white", _ = "#cfcfd8";
        this._uiManager.hcmFilter !== "none" ? _ = "black" : (i = window.matchMedia) != null && i.call(window, "(prefers-color-scheme: dark)").matches && (b = "#8f8f9d", _ = "#42414d");
        const S = 15, x = S * o.sx, C = S * o.sy, T = new OffscreenCanvas(x * 2, C * 2), O = T.getContext("2d");
        O.fillStyle = b, O.fillRect(0, 0, x * 2, C * 2), O.fillStyle = _, O.fillRect(0, 0, x, C), O.fillRect(x, C, x, C), v.fillStyle = v.createPattern(T, "repeat"), v.fillRect(0, 0, f, p), v.drawImage(h, 0, 0, h.width, h.height, 0, 0, f, p);
      }
      let g = null;
      if (s) {
        let f, p;
        if (o.symmetric && h.width < t && h.height < t) f = h.width, p = h.height;
        else if (h = l(this, St), r > t || a > t) {
          const b = Math.min(t / r, t / a);
          f = Math.floor(r * b), p = Math.floor(a * b), l(this, gs) || (h = w(this, bt, dd).call(this, f, p));
        }
        const v = new OffscreenCanvas(f, p).getContext("2d", {
          willReadFrequently: true
        });
        v.drawImage(h, 0, 0, h.width, h.height, 0, 0, f, p), g = {
          width: f,
          height: p,
          data: v.getImageData(0, 0, f, p).data
        };
      }
      return {
        canvas: d,
        width: c,
        height: u,
        imageData: g
      };
    }
    getImageForAltText() {
      return l(this, Ri);
    }
    static async deserialize(t, e, s) {
      var i;
      let r = null;
      if (t instanceof Ib) {
        const { data: { rect: v, rotation: b, id: _, structParent: S, popupRef: x }, container: C, parent: { page: { pageNumber: T } } } = t, O = C.querySelector("canvas"), E = s.imageManager.getFromCanvas(C.id, O);
        O.remove();
        const D = ((i = await e._structTree.getAriaAttributes(`${fp}${_}`)) == null ? void 0 : i.get("aria-label")) || "";
        r = t = {
          annotationType: K.STAMP,
          bitmapId: E.id,
          bitmap: E.bitmap,
          pageIndex: T - 1,
          rect: v.slice(0),
          rotation: b,
          id: _,
          deleted: false,
          accessibilityData: {
            decorative: false,
            altText: D
          },
          isSvg: false,
          structParent: S,
          popupRef: x
        };
      }
      const a = await super.deserialize(t, e, s), { rect: o, bitmap: h, bitmapUrl: c, bitmapId: u, isSvg: d, accessibilityData: g } = t;
      u && s.imageManager.isValidId(u) ? (m(a, he, u), h && m(a, St, h)) : m(a, Ar, c), m(a, gs, d);
      const [f, p] = a.pageDimensions;
      return a.width = (o[2] - o[0]) / f, a.height = (o[3] - o[1]) / p, a.annotationElementId = t.id || null, g && (a.altTextData = g), a._initialData = r, m(a, tl, !!r), a;
    }
    serialize(t = false, e = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const s = {
        annotationType: K.STAMP,
        bitmapId: l(this, he),
        pageIndex: this.pageIndex,
        rect: this.getRect(0, 0),
        rotation: this.rotation,
        isSvg: l(this, gs),
        structTreeParentId: this._structTreeParentId
      };
      if (t) return s.bitmapUrl = w(this, bt, au).call(this, true), s.accessibilityData = this.serializeAltText(true), s;
      const { decorative: i, altText: r } = this.serializeAltText(false);
      if (!i && r && (s.accessibilityData = {
        type: "Figure",
        alt: r
      }), this.annotationElementId) {
        const o = w(this, bt, vy).call(this, s);
        if (o.isSame) return null;
        o.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
      if (s.id = this.annotationElementId, e === null) return s;
      e.stamps || (e.stamps = /* @__PURE__ */ new Map());
      const a = l(this, gs) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
      if (!e.stamps.has(l(this, he))) e.stamps.set(l(this, he), {
        area: a,
        serialized: s
      }), s.bitmap = w(this, bt, au).call(this, false);
      else if (l(this, gs)) {
        const o = e.stamps.get(l(this, he));
        a > o.area && (o.area = a, o.serialized.bitmap.close(), o.serialized.bitmap = w(this, bt, au).call(this, false));
      }
      return s;
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
  };
  St = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakSet(), yo = function(n, t = false) {
    if (!n) {
      this.remove();
      return;
    }
    m(this, St, n.bitmap), t || (m(this, he, n.id), m(this, gs, n.isSvg)), n.file && m(this, ph, n.file.name), w(this, bt, Lf).call(this);
  }, wo = function() {
    if (m(this, pn, null), this._uiManager.enableWaiting(false), !!l(this, Ri)) {
      if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && l(this, St)) {
        this._editToolbar.hide(), this._uiManager.editAltText(this, true);
        return;
      }
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && l(this, St)) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: false,
            alt_text_type: "empty"
          }
        });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  }, nu = function() {
    if (l(this, he)) {
      this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(l(this, he)).then((e) => w(this, bt, yo).call(this, e, true)).finally(() => w(this, bt, wo).call(this));
      return;
    }
    if (l(this, Ar)) {
      const e = l(this, Ar);
      m(this, Ar, null), this._uiManager.enableWaiting(true), m(this, pn, this._uiManager.imageManager.getFromUrl(e).then((s) => w(this, bt, yo).call(this, s)).finally(() => w(this, bt, wo).call(this)));
      return;
    }
    if (l(this, kn)) {
      const e = l(this, kn);
      m(this, kn, null), this._uiManager.enableWaiting(true), m(this, pn, this._uiManager.imageManager.getFromFile(e).then((s) => w(this, bt, yo).call(this, s)).finally(() => w(this, bt, wo).call(this)));
      return;
    }
    const n = document.createElement("input");
    n.type = "file", n.accept = ou.supportedTypesStr;
    const t = this._uiManager._signal;
    m(this, pn, new Promise((e) => {
      n.addEventListener("change", async () => {
        if (!n.files || n.files.length === 0) this.remove();
        else {
          this._uiManager.enableWaiting(true);
          const s = await this._uiManager.imageManager.getFromFile(n.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          }), w(this, bt, yo).call(this, s);
        }
        e();
      }, {
        signal: t
      }), n.addEventListener("cancel", () => {
        this.remove(), e();
      }, {
        signal: t
      });
    }).finally(() => w(this, bt, wo).call(this))), n.click();
  }, Lf = function() {
    var n;
    const { div: t } = this;
    let { width: e, height: s } = l(this, St);
    const [i, r] = this.pageDimensions, a = 0.75;
    if (this.width) e = this.width * i, s = this.height * r;
    else if (e > a * i || s > a * r) {
      const u = Math.min(a * i / e, a * r / s);
      e *= u, s *= u;
    }
    const [o, h] = this.parentDimensions;
    this.setDims(e * o / i, s * h / r), this._uiManager.enableWaiting(false);
    const c = m(this, Ri, document.createElement("canvas"));
    c.setAttribute("role", "img"), this.addContainer(c), this.width = e / i, this.height = s / r, (n = this._initialOptions) != null && n.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = false), w(this, bt, Rf).call(this), l(this, tl) || (this.parent.addUndoableEditor(this), m(this, tl, true)), this._reportTelemetry({
      action: "inserted_image"
    }), l(this, ph) && c.setAttribute("aria-label", l(this, ph));
  }, dd = function(n, t) {
    const { width: e, height: s } = l(this, St);
    let i = e, r = s, a = l(this, St);
    for (; i > 2 * n || r > 2 * t; ) {
      const o = i, h = r;
      i > 2 * n && (i = i >= 16384 ? Math.floor(i / 2) - 1 : Math.ceil(i / 2)), r > 2 * t && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2));
      const c = new OffscreenCanvas(i, r);
      c.getContext("2d").drawImage(a, 0, 0, o, h, 0, 0, i, r), a = c.transferToImageBitmap();
    }
    return a;
  }, Rf = function() {
    const [n, t] = this.parentDimensions, { width: e, height: s } = this, i = new yp(), r = Math.ceil(e * n * i.sx), a = Math.ceil(s * t * i.sy), o = l(this, Ri);
    if (!o || o.width === r && o.height === a) return;
    o.width = r, o.height = a;
    const h = l(this, gs) ? l(this, St) : w(this, bt, dd).call(this, r, a), c = o.getContext("2d");
    c.filter = this._uiManager.hcmFilter, c.drawImage(h, 0, 0, h.width, h.height, 0, 0, r, a);
  }, au = function(n) {
    if (n) {
      if (l(this, gs)) {
        const e = this._uiManager.imageManager.getSvgUrl(l(this, he));
        if (e) return e;
      }
      const t = document.createElement("canvas");
      return { width: t.width, height: t.height } = l(this, St), t.getContext("2d").drawImage(l(this, St), 0, 0), t.toDataURL();
    }
    if (l(this, gs)) {
      const [t, e] = this.pageDimensions, s = Math.round(this.width * t * no.PDF_TO_CSS_UNITS), i = Math.round(this.height * e * no.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(s, i);
      return r.getContext("2d").drawImage(l(this, St), 0, 0, l(this, St).width, l(this, St).height, 0, 0, s, i), r.transferToImageBitmap();
    }
    return structuredClone(l(this, St));
  }, vy = function(n) {
    var t;
    const { pageIndex: e, accessibilityData: { altText: s } } = this._initialData, i = n.pageIndex === e, r = (((t = n.accessibilityData) == null ? void 0 : t.alt) || "") === s;
    return {
      isSame: !this._hasBeenMoved && !this._hasBeenResized && i && r,
      isSameAltText: r
    };
  }, Y(ou, "_type", "stamp"), Y(ou, "_editorType", K.STAMP);
  let LC = ou;
  var xa, mh, _i, tn, ir, As, en, vh, Sa, Bs, rr, Se, nr, z, Tn, Bt, by, Gs, If, Ff, hu;
  const lu = class sn {
    constructor({ uiManager: t, pageIndex: e, div: s, structTreeLayer: i, accessibilityManager: r, annotationLayer: a, drawLayer: o, textLayer: h, viewport: c, l10n: u }) {
      y(this, Bt), y(this, xa), y(this, mh, false), y(this, _i, null), y(this, tn, null), y(this, ir, null), y(this, As, /* @__PURE__ */ new Map()), y(this, en, false), y(this, vh, false), y(this, Sa, false), y(this, Bs, null), y(this, rr, null), y(this, Se, null), y(this, nr, null), y(this, z);
      const d = [
        ...l(sn, Tn).values()
      ];
      if (!sn._initialized) {
        sn._initialized = true;
        for (const g of d) g.initialize(u, t);
      }
      t.registerEditorTypes(d), m(this, z, t), this.pageIndex = e, this.div = s, m(this, xa, r), m(this, _i, a), this.viewport = c, m(this, Se, h), this.drawLayer = o, this._structTree = i, l(this, z).addLayer(this);
    }
    get isEmpty() {
      return l(this, As).size === 0;
    }
    get isInvisible() {
      return this.isEmpty && l(this, z).getMode() === K.NONE;
    }
    updateToolbar(t) {
      l(this, z).updateToolbar(t);
    }
    updateMode(t = l(this, z).getMode()) {
      switch (w(this, Bt, hu).call(this), t) {
        case K.NONE:
          this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
          return;
        case K.INK:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          break;
        case K.HIGHLIGHT:
          this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
          break;
        default:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e } = this.div;
      for (const s of l(sn, Tn).values()) e.toggle(`${s._type}Editing`, t === s._editorType);
      this.div.hidden = false;
    }
    hasTextLayer(t) {
      var e;
      return t === ((e = l(this, Se)) == null ? void 0 : e.div);
    }
    setEditingState(t) {
      l(this, z).setEditingState(t);
    }
    addCommands(t) {
      l(this, z).addCommands(t);
    }
    cleanUndoStack(t) {
      l(this, z).cleanUndoStack(t);
    }
    toggleDrawing(t = false) {
      this.div.classList.toggle("drawing", !t);
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    toggleAnnotationLayerPointerEvents(t = false) {
      var e;
      (e = l(this, _i)) == null || e.div.classList.toggle("disabled", !t);
    }
    async enable() {
      m(this, Sa, true), this.div.tabIndex = 0, this.togglePointerEvents(true);
      const t = /* @__PURE__ */ new Set();
      for (const s of l(this, As).values()) s.enableEditing(), s.show(true), s.annotationElementId && (l(this, z).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
      if (!l(this, _i)) {
        m(this, Sa, false);
        return;
      }
      const e = l(this, _i).getEditableAnnotations();
      for (const s of e) {
        if (s.hide(), l(this, z).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) continue;
        const i = await this.deserialize(s);
        i && (this.addOrRebuild(i), i.enableEditing());
      }
      m(this, Sa, false);
    }
    disable() {
      var t;
      m(this, vh, true), this.div.tabIndex = -1, this.togglePointerEvents(false);
      const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (const r of l(this, As).values()) if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          e.set(r.annotationElementId, r);
          continue;
        } else s.set(r.annotationElementId, r);
        (t = this.getEditableAnnotation(r.annotationElementId)) == null || t.show(), r.remove();
      }
      if (l(this, _i)) {
        const r = l(this, _i).getEditableAnnotations();
        for (const a of r) {
          const { id: o } = a.data;
          if (l(this, z).isDeletedAnnotationElement(o)) continue;
          let h = s.get(o);
          if (h) {
            h.resetAnnotationElement(a), h.show(false), a.show();
            continue;
          }
          h = e.get(o), h && (l(this, z).addChangedExistingAnnotation(h), h.renderAnnotationElement(a) && h.show(false)), a.show();
        }
      }
      w(this, Bt, hu).call(this), this.isEmpty && (this.div.hidden = true);
      const { classList: i } = this.div;
      for (const r of l(sn, Tn).values()) i.remove(`${r._type}Editing`);
      this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), m(this, vh, false);
    }
    getEditableAnnotation(t) {
      var e;
      return ((e = l(this, _i)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
    }
    setActiveEditor(t) {
      l(this, z).getActive() !== t && l(this, z).setActiveEditor(t);
    }
    enableTextSelection() {
      var t;
      if (this.div.tabIndex = -1, (t = l(this, Se)) != null && t.div && !l(this, nr)) {
        m(this, nr, new AbortController());
        const e = l(this, z).combinedSignal(l(this, nr));
        l(this, Se).div.addEventListener("pointerdown", w(this, Bt, by).bind(this), {
          signal: e
        }), l(this, Se).div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      var t;
      this.div.tabIndex = 0, (t = l(this, Se)) != null && t.div && l(this, nr) && (l(this, nr).abort(), m(this, nr, null), l(this, Se).div.classList.remove("highlighting"));
    }
    enableClick() {
      if (l(this, tn)) return;
      m(this, tn, new AbortController());
      const t = l(this, z).combinedSignal(l(this, tn));
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
        signal: t
      });
      const e = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e, {
        signal: t
      }), this.div.addEventListener("pointercancel", e, {
        signal: t
      });
    }
    disableClick() {
      var t;
      (t = l(this, tn)) == null || t.abort(), m(this, tn, null);
    }
    attach(t) {
      l(this, As).set(t.id, t);
      const { annotationElementId: e } = t;
      e && l(this, z).isDeletedAnnotationElement(e) && l(this, z).removeDeletedAnnotationElement(t);
    }
    detach(t) {
      var e;
      l(this, As).delete(t.id), (e = l(this, xa)) == null || e.removePointerInTextLayer(t.contentDiv), !l(this, vh) && t.annotationElementId && l(this, z).addDeletedAnnotationElement(t);
    }
    remove(t) {
      this.detach(t), l(this, z).removeEditor(t), t.div.remove(), t.isAttachedToDOM = false;
    }
    changeParent(t) {
      var e;
      t.parent !== this && (t.parent && t.annotationElementId && (l(this, z).addDeletedAnnotationElement(t.annotationElementId), Mt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
    }
    add(t) {
      if (!(t.parent === this && t.isAttachedToDOM)) {
        if (this.changeParent(t), l(this, z).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
          const e = t.render();
          this.div.append(e), t.isAttachedToDOM = true;
        }
        t.fixAndSetPosition(), t.onceAdded(!l(this, Sa)), l(this, z).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
      }
    }
    moveEditorInDOM(t) {
      var e;
      if (!t.isAttachedToDOM) return;
      const { activeElement: s } = document;
      t.div.contains(s) && !l(this, ir) && (t._focusEventsAllowed = false, m(this, ir, setTimeout(() => {
        m(this, ir, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
          t._focusEventsAllowed = true;
        }, {
          once: true,
          signal: l(this, z)._signal
        }), s.focus());
      }, 0))), t._structTreeParentId = (e = l(this, xa)) == null ? void 0 : e.moveElementInDOM(this.div, t.div, t.contentDiv, true);
    }
    addOrRebuild(t) {
      t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
    }
    addUndoableEditor(t) {
      const e = () => t._uiManager.rebuild(t), s = () => {
        t.remove();
      };
      this.addCommands({
        cmd: e,
        undo: s,
        mustExec: false
      });
    }
    getNextId() {
      return l(this, z).getId();
    }
    combinedSignal(t) {
      return l(this, z).combinedSignal(t);
    }
    canCreateNewEmptyEditor() {
      var t;
      return (t = l(this, Bt, Gs)) == null ? void 0 : t.canCreateNewEmptyEditor();
    }
    pasteEditor(t, e) {
      l(this, z).updateToolbar(t), l(this, z).updateMode(t);
      const { offsetX: s, offsetY: i } = w(this, Bt, Ff).call(this), r = this.getNextId(), a = w(this, Bt, If).call(this, {
        parent: this,
        id: r,
        x: s,
        y: i,
        uiManager: l(this, z),
        isCentered: true,
        ...e
      });
      a && this.add(a);
    }
    async deserialize(t) {
      var e;
      return await ((e = l(sn, Tn).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, l(this, z))) || null;
    }
    createAndAddNewEditor(t, e, s = {}) {
      const i = this.getNextId(), r = w(this, Bt, If).call(this, {
        parent: this,
        id: i,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: l(this, z),
        isCentered: e,
        ...s
      });
      return r && this.add(r), r;
    }
    addNewEditor() {
      this.createAndAddNewEditor(w(this, Bt, Ff).call(this), true);
    }
    setSelected(t) {
      l(this, z).setSelected(t);
    }
    toggleSelected(t) {
      l(this, z).toggleSelected(t);
    }
    unselect(t) {
      l(this, z).unselect(t);
    }
    pointerup(t) {
      var e;
      const { isMac: s } = Ee.platform;
      if (!(t.button !== 0 || t.ctrlKey && s) && t.target === this.div && l(this, en) && (m(this, en, false), !((e = l(this, Bt, Gs)) != null && e.isDrawer && l(this, Bt, Gs).supportMultipleDrawings))) {
        if (!l(this, mh)) {
          m(this, mh, true);
          return;
        }
        if (l(this, z).getMode() === K.STAMP) {
          l(this, z).unselectAll();
          return;
        }
        this.createAndAddNewEditor(t, false);
      }
    }
    pointerdown(t) {
      var e;
      if (l(this, z).getMode() === K.HIGHLIGHT && this.enableTextSelection(), l(this, en)) {
        m(this, en, false);
        return;
      }
      const { isMac: s } = Ee.platform;
      if (t.button !== 0 || t.ctrlKey && s || t.target !== this.div) return;
      if (m(this, en, true), (e = l(this, Bt, Gs)) != null && e.isDrawer) {
        this.startDrawingSession(t);
        return;
      }
      const i = l(this, z).getActive();
      m(this, mh, !i || i.isEmpty());
    }
    startDrawingSession(t) {
      if (this.div.focus(), l(this, Bs)) {
        l(this, Bt, Gs).startDrawing(this, l(this, z), false, t);
        return;
      }
      l(this, z).setCurrentDrawingSession(this), m(this, Bs, new AbortController());
      const e = l(this, z).combinedSignal(l(this, Bs));
      this.div.addEventListener("blur", ({ relatedTarget: s }) => {
        s && !this.div.contains(s) && (m(this, rr, null), this.commitOrRemove());
      }, {
        signal: e
      }), l(this, Bt, Gs).startDrawing(this, l(this, z), false, t);
    }
    pause(t) {
      if (t) {
        const { activeElement: e } = document;
        this.div.contains(e) && m(this, rr, e);
        return;
      }
      l(this, rr) && setTimeout(() => {
        var e;
        (e = l(this, rr)) == null || e.focus(), m(this, rr, null);
      }, 0);
    }
    endDrawingSession(t = false) {
      return l(this, Bs) ? (l(this, z).setCurrentDrawingSession(null), l(this, Bs).abort(), m(this, Bs, null), m(this, rr, null), l(this, Bt, Gs).endDrawing(t)) : null;
    }
    findNewParent(t, e, s) {
      const i = l(this, z).findParent(e, s);
      return i === null || i === this ? false : (i.changeParent(t), true);
    }
    commitOrRemove() {
      return l(this, Bs) ? (this.endDrawingSession(), true) : false;
    }
    onScaleChanging() {
      l(this, Bs) && l(this, Bt, Gs).onScaleChangingWhenDrawing(this);
    }
    destroy() {
      var t, e;
      this.commitOrRemove(), ((t = l(this, z).getActive()) == null ? void 0 : t.parent) === this && (l(this, z).commitOrRemove(), l(this, z).setActiveEditor(null)), l(this, ir) && (clearTimeout(l(this, ir)), m(this, ir, null));
      for (const s of l(this, As).values()) (e = l(this, xa)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = false, s.div.remove();
      this.div = null, l(this, As).clear(), l(this, z).removeLayer(this);
    }
    render({ viewport: t }) {
      this.viewport = t, Pn(this.div, t);
      for (const e of l(this, z).getEditors(this.pageIndex)) this.add(e), e.rebuild();
      this.updateMode();
    }
    update({ viewport: t }) {
      l(this, z).commitOrRemove(), w(this, Bt, hu).call(this);
      const e = this.viewport.rotation, s = t.rotation;
      if (this.viewport = t, Pn(this.div, {
        rotation: s
      }), e !== s) for (const i of l(this, As).values()) i.rotate(s);
    }
    get pageDimensions() {
      const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
      return [
        t,
        e
      ];
    }
    get scale() {
      return l(this, z).viewParameters.realScale;
    }
  };
  xa = /* @__PURE__ */ new WeakMap(), mh = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakSet(), by = function(n) {
    l(this, z).unselectAll();
    const { target: t } = n;
    if (t === l(this, Se).div || (t.getAttribute("role") === "img" || t.classList.contains("endOfContent")) && l(this, Se).div.contains(t)) {
      const { isMac: e } = Ee.platform;
      if (n.button !== 0 || n.ctrlKey && e) return;
      l(this, z).showAllEditors("highlight", true, true), l(this, Se).div.classList.add("free"), this.toggleDrawing(), Km.startHighlighting(this, l(this, z).direction === "ltr", {
        target: l(this, Se).div,
        x: n.x,
        y: n.y
      }), l(this, Se).div.addEventListener("pointerup", () => {
        l(this, Se).div.classList.remove("free"), this.toggleDrawing(true);
      }, {
        once: true,
        signal: l(this, z)._signal
      }), n.preventDefault();
    }
  }, Gs = function() {
    return l(lu, Tn).get(l(this, z).getMode());
  }, If = function(n) {
    const t = l(this, Bt, Gs);
    return t ? new t.prototype.constructor(n) : null;
  }, Ff = function() {
    const { x: n, y: t, width: e, height: s } = this.div.getBoundingClientRect(), i = Math.max(0, n), r = Math.max(0, t), a = Math.min(window.innerWidth, n + e), o = Math.min(window.innerHeight, t + s), h = (i + a) / 2 - n, c = (r + o) / 2 - t, [u, d] = this.viewport.rotation % 180 === 0 ? [
      h,
      c
    ] : [
      c,
      h
    ];
    return {
      offsetX: u,
      offsetY: d
    };
  }, hu = function() {
    for (const n of l(this, As).values()) n.isEmpty() && n.remove();
  }, Y(lu, "_initialized", false), y(lu, Tn, new Map([
    SC,
    PC,
    LC,
    Km
  ].map((n) => [
    n._editorType,
    n
  ])));
  let RC = lu;
  var Xs, cu, Re, Ca, jf, yy, rn, Nf, wy, Wf;
  const bh = class xs {
    constructor({ pageIndex: t }) {
      y(this, rn), y(this, Xs, null), y(this, cu, 0), y(this, Re, /* @__PURE__ */ new Map()), y(this, Ca, /* @__PURE__ */ new Map()), this.pageIndex = t;
    }
    setParent(t) {
      if (!l(this, Xs)) {
        m(this, Xs, t);
        return;
      }
      if (l(this, Xs) !== t) {
        if (l(this, Re).size > 0) for (const e of l(this, Re).values()) e.remove(), t.append(e);
        m(this, Xs, t);
      }
    }
    static get _svgFactory() {
      return Z(this, "_svgFactory", new xp());
    }
    draw(t, e = false, s = false) {
      const i = Be(this, cu)._++, r = w(this, rn, Nf).call(this), a = xs._svgFactory.createElement("defs");
      r.append(a);
      const o = xs._svgFactory.createElement("path");
      a.append(o);
      const h = `path_p${this.pageIndex}_${i}`;
      o.setAttribute("id", h), o.setAttribute("vector-effect", "non-scaling-stroke"), e && l(this, Ca).set(i, o);
      const c = s ? w(this, rn, wy).call(this, a, h) : null, u = xs._svgFactory.createElement("use");
      return r.append(u), u.setAttribute("href", `#${h}`), this.updateProperties(r, t), l(this, Re).set(i, r), {
        id: i,
        clipPathId: `url(#${c})`
      };
    }
    drawOutline(t, e) {
      const s = Be(this, cu)._++, i = w(this, rn, Nf).call(this), r = xs._svgFactory.createElement("defs");
      i.append(r);
      const a = xs._svgFactory.createElement("path");
      r.append(a);
      const o = `path_p${this.pageIndex}_${s}`;
      a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
      let h;
      if (e) {
        const d = xs._svgFactory.createElement("mask");
        r.append(d), h = `mask_p${this.pageIndex}_${s}`, d.setAttribute("id", h), d.setAttribute("maskUnits", "objectBoundingBox");
        const g = xs._svgFactory.createElement("rect");
        d.append(g), g.setAttribute("width", "1"), g.setAttribute("height", "1"), g.setAttribute("fill", "white");
        const f = xs._svgFactory.createElement("use");
        d.append(f), f.setAttribute("href", `#${o}`), f.setAttribute("stroke", "none"), f.setAttribute("fill", "black"), f.setAttribute("fill-rule", "nonzero"), f.classList.add("mask");
      }
      const c = xs._svgFactory.createElement("use");
      i.append(c), c.setAttribute("href", `#${o}`), h && c.setAttribute("mask", `url(#${h})`);
      const u = c.cloneNode();
      return i.append(u), c.classList.add("mainOutline"), u.classList.add("secondaryOutline"), this.updateProperties(i, t), l(this, Re).set(s, i), s;
    }
    finalizeDraw(t, e) {
      l(this, Ca).delete(t), this.updateProperties(t, e);
    }
    updateProperties(t, e) {
      var s;
      if (!e) return;
      const { root: i, bbox: r, rootClass: a, path: o } = e, h = typeof t == "number" ? l(this, Re).get(t) : t;
      if (h) {
        if (i && w(this, rn, Wf).call(this, h, i), r && w(s = xs, jf, yy).call(s, h, r), a) {
          const { classList: c } = h;
          for (const [u, d] of Object.entries(a)) c.toggle(u, d);
        }
        if (o) {
          const c = h.firstChild.firstChild;
          w(this, rn, Wf).call(this, c, o);
        }
      }
    }
    updateParent(t, e) {
      if (e === this) return;
      const s = l(this, Re).get(t);
      s && (l(e, Xs).append(s), l(this, Re).delete(t), l(e, Re).set(t, s));
    }
    remove(t) {
      l(this, Ca).delete(t), l(this, Xs) !== null && (l(this, Re).get(t).remove(), l(this, Re).delete(t));
    }
    destroy() {
      m(this, Xs, null);
      for (const t of l(this, Re).values()) t.remove();
      l(this, Re).clear(), l(this, Ca).clear();
    }
  };
  Xs = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakSet(), yy = function(n, [t, e, s, i]) {
    const { style: r } = n;
    r.top = `${100 * e}%`, r.left = `${100 * t}%`, r.width = `${100 * s}%`, r.height = `${100 * i}%`;
  }, rn = /* @__PURE__ */ new WeakSet(), Nf = function() {
    const n = bh._svgFactory.create(1, 1, true);
    return l(this, Xs).append(n), n.setAttribute("aria-hidden", true), n;
  }, wy = function(n, t) {
    const e = bh._svgFactory.createElement("clipPath");
    n.append(e);
    const s = `clip_${t}`;
    e.setAttribute("id", s), e.setAttribute("clipPathUnits", "objectBoundingBox");
    const i = bh._svgFactory.createElement("use");
    return e.append(i), i.setAttribute("href", `#${t}`), i.classList.add("clip"), s;
  }, Wf = function(n, t) {
    for (const [e, s] of Object.entries(t)) s === null ? n.removeAttribute(e) : n.setAttribute(e, s);
  }, y(bh, jf);
  let IC = bh;
  globalThis.pdfjsTestingUtils = {
    HighlightOutliner: Sf
  };
  $.AbortException;
  $.AnnotationEditorLayer;
  $.AnnotationEditorParamsType;
  $.AnnotationEditorType;
  $.AnnotationEditorUIManager;
  $.AnnotationLayer;
  $.AnnotationMode;
  $.ColorPicker;
  $.DOMSVGFactory;
  $.DrawLayer;
  $.FeatureTest;
  var FC = $.GlobalWorkerOptions;
  $.ImageKind;
  $.InvalidPDFException;
  $.MissingPDFException;
  $.OPS;
  $.OutputScale;
  $.PDFDataRangeTransport;
  $.PDFDateString;
  $.PDFWorker;
  $.PasswordResponses;
  $.PermissionFlag;
  $.PixelsPerInch;
  $.RenderingCancelledException;
  $.TextLayer;
  $.TouchManager;
  $.UnexpectedResponseException;
  $.Util;
  $.VerbosityLevel;
  $.XfaLayer;
  $.build;
  $.createValidAbsoluteUrl;
  $.fetchData;
  var jC = $.getDocument;
  $.getFilenameFromUrl;
  $.getPdfFilenameFromUrl;
  $.getXfaPageViewport;
  $.isDataScheme;
  $.isPdfFile;
  $.noContextMenu;
  $.normalizeUnicode;
  $.setLayerDimensions;
  $.shadow;
  $.stopEvent;
  $.version;
  const NC = {
    "pdfjs-dist": "4.10.38"
  };
  function WC(n) {
    return new Promise((t, e) => {
      const s = new FileReader();
      s.addEventListener("load", () => t(s.result)), s.addEventListener("error", e), s.readAsDataURL(n);
    });
  }
  const BC = NC["pdfjs-dist"].replace("^", "");
  FC.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${BC}/pdf.worker.min.mjs`;
  async function HC(n) {
    const t = "data:application/pdf;base64,", e = await WC(n);
    if (typeof e == "string") return window.atob(e.slice(t.length));
  }
  function zC(n, t) {
    return jC({
      data: n,
      password: t
    }).promise;
  }
  const Ne = /* @__PURE__ */ new Map();
  function VC(n) {
    const t = new xg(n);
    return Ne.set(n, t), t;
  }
  function GC(n, t) {
    const e = Date.now();
    return {
      PDFId: `${n.name}-${e}`,
      name: n.name.replace(/.pdf/, ""),
      updateDate: e,
      PDFBase64: t
    };
  }
  function XC(n, t) {
    const e = n.getViewport({
      scale: t
    }), s = document.createElement("canvas"), i = s.getContext("2d"), r = mx() / window.devicePixelRatio;
    s.width = Math.floor(e.width * r), s.height = Math.floor(e.height * r);
    const a = {
      canvasContext: i,
      viewport: e,
      transform: [
        r,
        0,
        0,
        r,
        0,
        0
      ]
    }, o = n.render(a);
    return {
      canvas: s,
      renderTask: o
    };
  }
  async function UC({ src: n }, t, e) {
    if (!n || !e) return null;
    const { objects: s, options: i } = await rx(n), r = s.filter((o) => o !== null), a = b_.groupSVGElements(r, i);
    return r.forEach((o) => {
      o.stroke = e;
    }), a.hoverCursor = "pointer", a.stroke = `${e}-${t}`, a;
  }
  function YC(n, t) {
    if (!Ne.get(n)) return;
    const e = 1 / 3, s = tA(t, e);
    xy(n, s, e);
  }
  async function $C(n, t) {
    const e = await bx(t), s = Date.now(), i = {
      PDFId: `${t.name}${s}`,
      name: t.name.replace(/.png|.jpg|.jpeg/, ""),
      updateDate: s,
      PDFBase64: e
    };
    return _y(n, {
      url: e
    }), {
      ...i,
      pages: 1
    };
  }
  async function _y(n, { url: t, scale: e = 0.5 }) {
    if (!Ne.get(n)) return;
    const s = await ge.fromURL(t);
    s.scale(e), xy(n, s, e);
  }
  function xy(n, t, e) {
    const s = Ne.get(n);
    s && (s.setWidth(t.width * e), s.setHeight(t.height * e), s.backgroundImage = t, s.renderAll());
  }
  function qC(n, t) {
    if (!t) return;
    const { oCoords: e } = n;
    if (!e) return;
    const { x: s, y: i } = e.tl.touchCorner.tl, { height: r, width: a, scaleY: o, scaleX: h } = t;
    t.top = i - r * o / 2, t.left = s - a * h / 2, t.setCoords();
  }
  function KC(n, t, e) {
    !e || !n || (e.scale(1 / t), qC(n, e));
  }
  function QC(n, t) {
    if (!n) return;
    const e = n._cornerSize || 6;
    n.borderScaleFactor = 1 / t, n.cornerSize = e * (1 / t), n.touchCornerSize = e * 4 * (1 / t), n.setCoords();
  }
  function JC(n) {
    const t = Ne.get(n);
    t && (t.discardActiveObject(), t.renderAll());
  }
  function ZC(n) {
    const t = Ne.get(n);
    t && (t.clear(), Ne.delete(n));
  }
  function tA(n, t) {
    return new ge(n, {
      scaleX: t,
      scaleY: t
    });
  }
  function Bf(n, t) {
    if (!t) return;
    const { left: e, top: s, scaleX: i, scaleY: r, width: a, height: o } = n, h = t.x * a * i, c = t.y * o * r;
    n.set({
      left: e - h,
      top: s - c
    });
  }
  eA = function(n, t, e) {
    var s;
    const i = n.type, r = {
      "application/pdf": sA,
      "image/png": Jm,
      "image/jpeg": Jm
    };
    return ((s = r[i]) == null ? void 0 : s.call(r, n, t, e)) ?? Promise.reject(new Error(`Unsupported ${i} file type.`));
  };
  async function sA(n, t, e) {
    const s = await HC(n);
    if (!s) return;
    const i = GC(n, s);
    try {
      const r = await Sy({
        page: 1,
        PDFBase64: s,
        scale: 0.8,
        password: t
      }, e);
      return {
        ...i,
        pages: r
      };
    } catch (r) {
      return Promise.reject(r);
    }
  }
  async function Sy({ page: n, PDFBase64: t, scale: e, password: s }, i) {
    try {
      const r = await zC(t, s), a = await r.getPage(n), { renderTask: o, canvas: h } = XC(a, e);
      return o.promise.then(() => (i && YC(i, h), r.numPages));
    } catch (r) {
      return Promise.reject(r);
    }
  }
  async function Jm(n, t, e) {
    if (e) return await $C(e, n);
  }
  async function iA(n, t) {
    const e = Ne.get(n);
    if (!e) return;
    const s = e == null ? void 0 : e.getActiveObject();
    if (!s) return;
    const i = await s.clone(By);
    i instanceof ps ? i.forEachObject((r) => {
      e.add(r), t(e, r);
    }) : (e.add(i), t(e, i)), Bf(i, {
      x: -0.1,
      y: -0.1
    }), e.setActiveObject(i);
  }
  function rA(n) {
    const t = Ne.get(n);
    if (!t) return;
    const e = t.getActiveObject();
    e && (e instanceof ps ? (e.forEachObject((s) => {
      t.remove(s);
    }), t.discardActiveObject()) : t.remove(e));
  }
  nA = function(n) {
    const { id: t = "", selectionOptions: e, pointerDown: s, pointerMove: i, pointerUp: r, selectionCreated: a, selectionCleared: o } = n || {};
    let h = null, c = null, u = 1, d = {
      ...Wy
    };
    function g() {
      if (!t || Ne.has(t)) return;
      const P = VC(t);
      return P.on("selection:created", (I) => {
        if (a == null ? void 0 : a(I), I.selected.length <= 1) return;
        const W = P.getActiveObject();
        W && (c = W, e != null && e.value && c.set(e.value), c._cornerSize = c.cornerSize, T(u));
      }), P.on("selection:cleared", (I) => {
        o == null ? void 0 : o(I), E(P);
      }), s && P.on("mouse:down", s), i && P.on("mouse:move", i), r && P.on("mouse:up", r), P;
    }
    function f(P, I) {
      return eA(P, I, t);
    }
    function p(P) {
      return Sy(P, t);
    }
    function v({ url: P, scale: I = 0.5 }) {
      return _y(t, {
        url: P,
        scale: I
      });
    }
    async function b(P, I, W) {
      const j = Ne.get(t);
      if (!j) return;
      const R = await ge.fromURL(P, {}, {
        ...Fy,
        ...I
      });
      Bf(R, W), j.add(R), S(j, R), j.setActiveObject(R);
    }
    function _(P, I, W) {
      const j = Ne.get(t);
      if (!j) return;
      const R = new le(P, {
        ...jy,
        ...I
      });
      Bf(R, W), j.add(R), S(j, R), j.setActiveObject(R);
    }
    function S(P, I) {
      I.on("selected", (W) => x({
        canvas: P,
        target: W.target
      })), I.on("modified", (W) => x({
        canvas: P,
        target: W.target
      })), I.on("scaling", () => E(P)), I.on("moving", () => E(P)), I.on("rotating", () => E(P)), I._cornerSize = I._cornerSize ?? I.cornerSize;
    }
    async function x({ canvas: P, target: I, stroke: W = d.stroke, uuid: j = Date.now() }) {
      if (P.getActiveObjects().length > 1 || (h == null ? void 0 : h.stroke) === `${W}-${j}`) return;
      const R = await UC(d, j, W);
      E(P), h = R, c = I, C(P, I, j), T(u, true), R && P.add(R);
    }
    function C(P, I, W) {
      h && (h.on("selected", () => {
        P.remove(I), E(P);
      }), h.on("mouseover", () => {
        x({
          canvas: P,
          target: I,
          stroke: d.hoverStroke,
          uuid: W
        });
      }), h.on("mouseout", () => {
        x({
          canvas: P,
          target: I,
          stroke: d.stroke,
          uuid: W
        });
      }));
    }
    function T(P, I = false) {
      const W = Ne.get(t);
      u = P, W && (QC(c, P), KC(c, P, h), !I && W.renderAll());
    }
    function O(P) {
      if (!P) return;
      d = {
        ...d,
        ...P
      };
      const I = Ne.get(t);
      !h || !c || !I || x({
        target: c,
        canvas: I
      });
    }
    function E(P) {
      c = null, h && (P.remove(h), h = null);
    }
    function D() {
      JC(t);
    }
    function F() {
      ZC(t);
    }
    function L() {
      return iA(t, S);
    }
    function N() {
      rA(t);
    }
    return {
      createCanvas: g,
      loadFile: f,
      specifyPage: p,
      renderImage: v,
      addFabric: b,
      addTextFabric: _,
      clearActive: D,
      deleteCanvas: F,
      scaleFabric: T,
      setCloseSvgOptions: O,
      copyActiveFabric: L,
      deleteActiveFabric: N
    };
  };
  function aA(n) {
    let t = 0;
    const e = vx(() => {
      t !== window.innerWidth && (t = window.innerWidth, n());
    });
    Py(() => {
      window.addEventListener("resize", e);
    }), Zm(() => {
      window.removeEventListener("resize", e);
    });
  }
  dA = Cy({
    __name: "pdf-canvas",
    props: {
      file: {},
      page: {
        default: 1
      },
      canvasId: {
        default: "PDF-canvas"
      },
      fileZoom: {
        default: 1
      },
      fileScale: {
        default: 1
      },
      canvasScale: {
        default: 1
      },
      canvasClass: {
        default: ""
      },
      isDrop: {
        type: Boolean,
        default: false
      },
      password: {},
      dropTextOptions: {},
      dropImageOptions: {},
      selectionOptions: {},
      closeSvgOptions: {},
      manualReload: {
        type: Boolean
      },
      onDestroy: {
        type: Function,
        default: Zm
      }
    },
    emits: [
      "loaded",
      "reload",
      "pointerDown",
      "pointerMove",
      "pointerUp",
      "selectionCreated",
      "selectionCleared"
    ],
    setup(n, { expose: t, emit: e }) {
      const s = n, i = e, { onDestroy: r } = s, a = Ay(null), o = `${s.canvasId}-${s.page - 1}`, h = Cp(() => s.fileZoom * s.canvasScale), c = Cp(() => ({
        ...Ny,
        ...s.selectionOptions
      })), { createCanvas: u, specifyPage: d, addFabric: g, addTextFabric: f, renderImage: p, clearActive: v, deleteCanvas: b, scaleFabric: _, setCloseSvgOptions: S, copyActiveFabric: x, deleteActiveFabric: C } = nA({
        id: o,
        selectionOptions: c,
        pointerDown: (L) => i("pointerDown", L),
        pointerMove: (L) => i("pointerMove", L),
        pointerUp: (L) => i("pointerUp", L),
        selectionCreated: (L) => i("selectionCreated", L),
        selectionCleared: (L) => i("selectionCleared", L)
      });
      T(), aA(F);
      async function T() {
        const { file: L, page: N, fileScale: P } = s;
        window.requestAnimationFrame(async () => {
          if (await ky(), u(), L.PDFBase64.startsWith("data:image") || L.canvas) {
            const { canvas: I } = L, W = I ? 7 : 3, j = I != null && I.length ? I[N - 1] : L.PDFBase64;
            p({
              url: j,
              scale: P / W
            }), i("loaded");
            return;
          }
          await d({
            page: N,
            PDFBase64: L.PDFBase64,
            scale: P,
            password: s.password
          }), i("loaded");
        });
      }
      function O(L) {
        if (!s.isDrop || !L.dataTransfer) return;
        const { dataTransfer: N, offsetX: P, offsetY: I } = L, W = N.getData("text/plain"), j = N.getData("text/uri-list"), R = N.getData("custom/offset"), st = R ? JSON.parse(R) : null, J = {
          top: I,
          left: P
        }, _t = {
          x: (st == null ? void 0 : st.offsetX) ?? 0,
          y: (st == null ? void 0 : st.offsetY) ?? 0
        };
        j ? E(j, J, _t) : W && D(W, J, _t);
      }
      function E(L, N, P) {
        g(L, {
          ...s.dropImageOptions,
          ...N
        }, P);
      }
      function D(L, N, P) {
        f(L, {
          ...s.dropTextOptions,
          ...N
        }, P);
      }
      function F() {
        s.manualReload || T(), i("reload");
      }
      return Id([
        () => s.fileScale,
        () => s.page,
        () => s.file,
        () => s.password
      ], F), Id(h, (L) => _(L), {
        immediate: true
      }), Id(() => s.closeSvgOptions, S, {
        immediate: true
      }), r(b), t({
        reload: T,
        addImage: E,
        addText: D,
        clearActive: v,
        deleteCanvas: b,
        copyActiveFabric: x,
        deleteActiveFabric: C,
        canvasRef: a
      }), (L, N) => (My(), Ty("div", {
        style: Oy({
          transform: `scale(${h.value})`
        }),
        onDragover: N[0] || (N[0] = Fd(() => {
        }, [
          "prevent"
        ])),
        onDragenter: N[1] || (N[1] = Fd(() => {
        }, [
          "prevent"
        ])),
        onDrop: Fd(O, [
          "stop",
          "prevent"
        ])
      }, [
        Ey("canvas", {
          id: o,
          ref_key: "canvasRef",
          ref: a,
          class: Dy(L.canvasClass)
        }, null, 2)
      ], 36));
    }
  });
})();
export {
  __tla,
  dA as default,
  eA as loadFile,
  nA as useFabric
};
