/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _e = {}, Cn = [], ht = () => {
}, Au = () => false, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Co = (e) => e.startsWith("onUpdate:"), $e = Object.assign, To = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Su = Object.prototype.hasOwnProperty, ve = (e, t) => Su.call(e, t), ae = Array.isArray, Tn = (e) => Un(e) === "[object Map]", Dn = (e) => Un(e) === "[object Set]", ui = (e) => Un(e) === "[object Date]", wu = (e) => Un(e) === "[object RegExp]", he = (e) => typeof e == "function", Oe = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", Ql = (e) => (Se(e) || he(e)) && he(e.then) && he(e.catch), Jl = Object.prototype.toString, Un = (e) => Jl.call(e), Cu = (e) => Un(e).slice(8, -1), zl = (e) => Un(e) === "[object Object]", Io = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xn = /* @__PURE__ */ wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tu = /-(\w)/g, st = ls((e) => e.replace(Tu, (t, n) => n ? n.toUpperCase() : "")), Iu = /\B([A-Z])/g, zt = ls((e) => e.replace(Iu, "-$1").toLowerCase()), cs = ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = ls((e) => e ? `on${cs(e)}` : ""), Ze = (e, t) => !Object.is(e, t), In = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Zl = (e, t, n, r = false) => {
  Object.defineProperty(e, t, { configurable: true, enumerable: false, writable: r, value: n });
}, Hr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ru = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fi;
const as = () => fi || (fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ro(e) {
  if (ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Oe(r) ? Nu(r) : Ro(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (Oe(e) || Se(e)) return e;
}
const Ou = /;(?![^(]*\))/g, Lu = /:([^]+)/, Pu = /\/\*[^]*?\*\//g;
function Nu(e) {
  const t = {};
  return e.replace(Pu, "").split(Ou).forEach((n) => {
    if (n) {
      const r = n.split(Lu);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Oo(e) {
  let t = "";
  if (Oe(e)) t = e;
  else if (ae(e)) for (let n = 0; n < e.length; n++) {
    const r = Oo(e[n]);
    r && (t += r + " ");
  }
  else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const xu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fu = /* @__PURE__ */ wo(xu);
function ec(e) {
  return !!e || e === "";
}
function Mu(e, t) {
  if (e.length !== t.length) return false;
  let n = true;
  for (let r = 0; n && r < e.length; r++) n = mn(e[r], t[r]);
  return n;
}
function mn(e, t) {
  if (e === t) return true;
  let n = ui(e), r = ui(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : false;
  if (n = gt(e), r = gt(t), n || r) return e === t;
  if (n = ae(e), r = ae(t), n || r) return n && r ? Mu(e, t) : false;
  if (n = Se(e), r = Se(t), n || r) {
    if (!n || !r) return false;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o) return false;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !mn(e[i], t[i])) return false;
    }
  }
  return String(e) === String(t);
}
function Lo(e, t) {
  return e.findIndex((n) => mn(n, t));
}
const tc = (e) => !!(e && e.__v_isRef === true), ku = (e) => Oe(e) ? e : e == null ? "" : ae(e) || Se(e) && (e.toString === Jl || !he(e.toString)) ? tc(e) ? ku(e.value) : JSON.stringify(e, nc, 2) : String(e), nc = (e, t) => tc(t) ? nc(e, t.value) : Tn(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[Ts(r, o) + " =>"] = s, n), {}) } : Dn(t) ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ts(n)) } : gt(t) ? Ts(t) : Se(t) && !ae(t) && !zl(t) ? String(t) : t, Ts = (e, t = "") => {
  var n;
  return gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qe;
class rc {
  constructor(t = false) {
    this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Qe, !t && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t, n;
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Qe;
      try {
        return Qe = this, t();
      } finally {
        Qe = n;
      }
    }
  }
  on() {
    Qe = this;
  }
  off() {
    Qe = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = false;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Po(e) {
  return new rc(e);
}
function sc() {
  return Qe;
}
function Du(e, t = false) {
  Qe && Qe.cleanups.push(e);
}
let Ce;
const Is = /* @__PURE__ */ new WeakSet();
class oc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Is.has(this) && (Is.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lc(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, di(this), cc(this);
    const t = Ce, n = pt;
    Ce = this, pt = true;
    try {
      return this.fn();
    } finally {
      ac(this), Ce = t, pt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fo(t);
      this.deps = this.depsTail = void 0, di(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Ys(this) && this.run();
  }
  get dirty() {
    return Ys(this);
  }
}
let ic = 0, Qn, Jn;
function lc(e, t = false) {
  if (e.flags |= 8, t) {
    e.next = Jn, Jn = e;
    return;
  }
  e.next = Qn, Qn = e;
}
function No() {
  ic++;
}
function xo() {
  if (--ic > 0) return;
  if (Jn) {
    let t = Jn;
    for (Jn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Qn; ) {
    let t = Qn;
    for (Qn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger();
      } catch (r) {
        e || (e = r);
      }
      t = n;
    }
  }
  if (e) throw e;
}
function cc(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ac(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Fo(r), Uu(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Ys(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (uc(t.dep.computed) || t.dep.version !== t.version)) return true;
  return !!e._dirty;
}
function uc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sr)) return;
  e.globalVersion = sr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ys(e)) {
    e.flags &= -3;
    return;
  }
  const n = Ce, r = pt;
  Ce = e, pt = true;
  try {
    cc(e);
    const s = e.fn(e._value);
    (t.version === 0 || Ze(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Ce = n, pt = r, ac(e), e.flags &= -3;
  }
}
function Fo(e, t = false) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep) Fo(o, true);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Uu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pt = true;
const fc = [];
function Zt() {
  fc.push(pt), pt = false;
}
function en() {
  const e = fc.pop();
  pt = e === void 0 ? true : e;
}
function di(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ce;
    Ce = void 0;
    try {
      t();
    } finally {
      Ce = n;
    }
  }
}
let sr = 0;
class $u {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class us {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Ce || !pt || Ce === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ce) n = this.activeLink = new $u(Ce, this), Ce.deps ? (n.prevDep = Ce.depsTail, Ce.depsTail.nextDep = n, Ce.depsTail = n) : Ce.deps = Ce.depsTail = n, dc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ce.depsTail, n.nextDep = void 0, Ce.depsTail.nextDep = n, Ce.depsTail = n, Ce.deps === n && (Ce.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, sr++, this.notify(t);
  }
  notify(t) {
    No();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      xo();
    }
  }
}
function dc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) dc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vr = /* @__PURE__ */ new WeakMap(), hn = Symbol(""), qs = Symbol(""), or = Symbol("");
function We(e, t, n) {
  if (pt && Ce) {
    let r = Vr.get(e);
    r || Vr.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new us()), s.map = r, s.key = n), s.track();
  }
}
function Lt(e, t, n, r, s, o) {
  const i = Vr.get(e);
  if (!i) {
    sr++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (No(), t === "clear") i.forEach(l);
  else {
    const a = ae(e), d = a && Io(n);
    if (a && n === "length") {
      const c = Number(r);
      i.forEach((u, f) => {
        (f === "length" || f === or || !gt(f) && f >= c) && l(u);
      });
    } else switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(or)), t) {
      case "add":
        a ? d && l(i.get("length")) : (l(i.get(hn)), Tn(e) && l(i.get(qs)));
        break;
      case "delete":
        a || (l(i.get(hn)), Tn(e) && l(i.get(qs)));
        break;
      case "set":
        Tn(e) && l(i.get(hn));
        break;
    }
  }
  xo();
}
function Hu(e, t) {
  const n = Vr.get(e);
  return n && n.get(t);
}
function bn(e) {
  const t = ge(e);
  return t === e ? t : (We(t, "iterate", or), ct(e) ? t : t.map(je));
}
function fs(e) {
  return We(e = ge(e), "iterate", or), e;
}
const Vu = { __proto__: null, [Symbol.iterator]() {
  return Rs(this, Symbol.iterator, je);
}, concat(...e) {
  return bn(this).concat(...e.map((t) => ae(t) ? bn(t) : t));
}, entries() {
  return Rs(this, "entries", (e) => (e[1] = je(e[1]), e));
}, every(e, t) {
  return Ct(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return Ct(this, "filter", e, t, (n) => n.map(je), arguments);
}, find(e, t) {
  return Ct(this, "find", e, t, je, arguments);
}, findIndex(e, t) {
  return Ct(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return Ct(this, "findLast", e, t, je, arguments);
}, findLastIndex(e, t) {
  return Ct(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return Ct(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return Os(this, "includes", e);
}, indexOf(...e) {
  return Os(this, "indexOf", e);
}, join(e) {
  return bn(this).join(e);
}, lastIndexOf(...e) {
  return Os(this, "lastIndexOf", e);
}, map(e, t) {
  return Ct(this, "map", e, t, void 0, arguments);
}, pop() {
  return Wn(this, "pop");
}, push(...e) {
  return Wn(this, "push", e);
}, reduce(e, ...t) {
  return hi(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return hi(this, "reduceRight", e, t);
}, shift() {
  return Wn(this, "shift");
}, some(e, t) {
  return Ct(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return Wn(this, "splice", e);
}, toReversed() {
  return bn(this).toReversed();
}, toSorted(e) {
  return bn(this).toSorted(e);
}, toSpliced(...e) {
  return bn(this).toSpliced(...e);
}, unshift(...e) {
  return Wn(this, "unshift", e);
}, values() {
  return Rs(this, "values", je);
} };
function Rs(e, t, n) {
  const r = fs(e), s = r[t]();
  return r !== e && !ct(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const Wu = Array.prototype;
function Ct(e, t, n, r, s, o) {
  const i = fs(e), l = i !== e && !ct(e), a = i[t];
  if (a !== Wu[t]) {
    const u = a.apply(e, o);
    return l ? je(u) : u;
  }
  let d = n;
  i !== e && (l ? d = function(u, f) {
    return n.call(this, je(u), f, e);
  } : n.length > 2 && (d = function(u, f) {
    return n.call(this, u, f, e);
  }));
  const c = a.call(i, d, r);
  return l && s ? s(c) : c;
}
function hi(e, t, n, r) {
  const s = fs(e);
  let o = n;
  return s !== e && (ct(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, je(l), a, e);
  }), s[t](o, ...r);
}
function Os(e, t, n) {
  const r = ge(e);
  We(r, "iterate", or);
  const s = r[t](...n);
  return (s === -1 || s === false) && Do(n[0]) ? (n[0] = ge(n[0]), r[t](...n)) : s;
}
function Wn(e, t, n = []) {
  Zt(), No();
  const r = ge(e)[t].apply(e, n);
  return xo(), en(), r;
}
const ju = /* @__PURE__ */ wo("__proto__,__v_isRef,__isVue"), hc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt));
function Bu(e) {
  gt(e) || (e = String(e));
  const t = ge(this);
  return We(t, "has", e), t.hasOwnProperty(e);
}
class pc {
  constructor(t = false, n = false) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw") return r === (s ? o ? ef : yc : o ? _c : mc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = ae(t);
    if (!s) {
      let a;
      if (i && (a = Vu[n])) return a;
      if (n === "hasOwnProperty") return Bu;
    }
    const l = Reflect.get(t, n, Re(t) ? t : r);
    return (gt(n) ? hc.has(n) : ju(n)) || (s || We(t, "get", n), o) ? l : Re(l) ? i && Io(n) ? l : l.value : Se(l) ? s ? vc(l) : pr(l) : l;
  }
}
class gc extends pc {
  constructor(t = false) {
    super(false, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = _n(o);
      if (!ct(r) && !_n(r) && (o = ge(o), r = ge(r)), !ae(t) && Re(o) && !Re(r)) return a ? false : (o.value = r, true);
    }
    const i = ae(t) && Io(n) ? Number(n) < t.length : ve(t, n), l = Reflect.set(t, n, r, Re(t) ? t : s);
    return t === ge(s) && (i ? Ze(r, o) && Lt(t, "set", n, r) : Lt(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = ve(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Lt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!gt(n) || !hc.has(n)) && We(t, "has", n), r;
  }
  ownKeys(t) {
    return We(t, "iterate", ae(t) ? "length" : hn), Reflect.ownKeys(t);
  }
}
class Ku extends pc {
  constructor(t = false) {
    super(true, t);
  }
  set(t, n) {
    return true;
  }
  deleteProperty(t, n) {
    return true;
  }
}
const Gu = new gc(), Yu = new Ku(), qu = new gc(true);
const Xs = (e) => e, Sr = (e) => Reflect.getPrototypeOf(e);
function Xu(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = ge(s), i = Tn(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = s[e](...r), c = n ? Xs : t ? Qs : je;
    return !t && We(o, "iterate", a ? qs : hn), { next() {
      const { value: u, done: f } = d.next();
      return f ? { value: u, done: f } : { value: l ? [c(u[0]), c(u[1])] : c(u), done: f };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function wr(e) {
  return function(...t) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function Qu(e, t) {
  const n = { get(s) {
    const o = this.__v_raw, i = ge(o), l = ge(s);
    e || (Ze(s, l) && We(i, "get", s), We(i, "get", l));
    const { has: a } = Sr(i), d = t ? Xs : e ? Qs : je;
    if (a.call(i, s)) return d(o.get(s));
    if (a.call(i, l)) return d(o.get(l));
    o !== i && o.get(s);
  }, get size() {
    const s = this.__v_raw;
    return !e && We(ge(s), "iterate", hn), Reflect.get(s, "size", s);
  }, has(s) {
    const o = this.__v_raw, i = ge(o), l = ge(s);
    return e || (Ze(s, l) && We(i, "has", s), We(i, "has", l)), s === l ? o.has(s) : o.has(s) || o.has(l);
  }, forEach(s, o) {
    const i = this, l = i.__v_raw, a = ge(l), d = t ? Xs : e ? Qs : je;
    return !e && We(a, "iterate", hn), l.forEach((c, u) => s.call(o, d(c), d(u), i));
  } };
  return $e(n, e ? { add: wr("add"), set: wr("set"), delete: wr("delete"), clear: wr("clear") } : { add(s) {
    !t && !ct(s) && !_n(s) && (s = ge(s));
    const o = ge(this);
    return Sr(o).has.call(o, s) || (o.add(s), Lt(o, "add", s, s)), this;
  }, set(s, o) {
    !t && !ct(o) && !_n(o) && (o = ge(o));
    const i = ge(this), { has: l, get: a } = Sr(i);
    let d = l.call(i, s);
    d || (s = ge(s), d = l.call(i, s));
    const c = a.call(i, s);
    return i.set(s, o), d ? Ze(o, c) && Lt(i, "set", s, o) : Lt(i, "add", s, o), this;
  }, delete(s) {
    const o = ge(this), { has: i, get: l } = Sr(o);
    let a = i.call(o, s);
    a || (s = ge(s), a = i.call(o, s)), l && l.call(o, s);
    const d = o.delete(s);
    return a && Lt(o, "delete", s, void 0), d;
  }, clear() {
    const s = ge(this), o = s.size !== 0, i = s.clear();
    return o && Lt(s, "clear", void 0, void 0), i;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = Xu(s, e, t);
  }), n;
}
function Mo(e, t) {
  const n = Qu(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ve(n, s) && s in r ? n : r, s, o);
}
const Ju = { get: Mo(false, false) }, zu = { get: Mo(false, true) }, Zu = { get: Mo(true, false) };
const mc = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), ef = /* @__PURE__ */ new WeakMap();
function tf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function nf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tf(Cu(e));
}
function pr(e) {
  return _n(e) ? e : ko(e, false, Gu, Ju, mc);
}
function bc(e) {
  return ko(e, false, qu, zu, _c);
}
function vc(e) {
  return ko(e, true, Yu, Zu, yc);
}
function ko(e, t, n, r, s) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = s.get(e);
  if (o) return o;
  const i = nf(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return s.set(e, l), l;
}
function Mt(e) {
  return _n(e) ? Mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _n(e) {
  return !!(e && e.__v_isReadonly);
}
function ct(e) {
  return !!(e && e.__v_isShallow);
}
function Do(e) {
  return e ? !!e.__v_raw : false;
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function Uo(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && Zl(e, "__v_skip", true), e;
}
const je = (e) => Se(e) ? pr(e) : e, Qs = (e) => Se(e) ? vc(e) : e;
function Re(e) {
  return e ? e.__v_isRef === true : false;
}
function Qt(e) {
  return Ec(e, false);
}
function $o(e) {
  return Ec(e, true);
}
function Ec(e, t) {
  return Re(e) ? e : new rf(e, t);
}
class rf {
  constructor(t, n) {
    this.dep = new us(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ge(t), this._value = n ? t : je(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || ct(t) || _n(t);
    t = r ? t : ge(t), Ze(t, n) && (this._rawValue = t, this._value = r ? t : je(t), this.dep.trigger());
  }
}
function Rn(e) {
  return Re(e) ? e.value : e;
}
const sf = { get: (e, t, n) => t === "__v_raw" ? e : Rn(Reflect.get(e, t, n)), set: (e, t, n, r) => {
  const s = e[t];
  return Re(s) && !Re(n) ? (s.value = n, true) : Reflect.set(e, t, n, r);
} };
function Ac(e) {
  return Mt(e) ? e : new Proxy(e, sf);
}
class of {
  constructor(t) {
    this.__v_isRef = true, this._value = void 0;
    const n = this.dep = new us(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function lf(e) {
  return new of(e);
}
function cf(e) {
  const t = ae(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Sc(e, n);
  return t;
}
class af {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Hu(ge(this._object), this._key);
  }
}
class uf {
  constructor(t) {
    this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function ff(e, t, n) {
  return Re(e) ? e : he(e) ? new uf(e) : Se(e) && arguments.length > 1 ? Sc(e, t, n) : Qt(e);
}
function Sc(e, t, n) {
  const r = e[t];
  return Re(r) ? r : new af(e, t, n);
}
class df {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new us(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ce !== this) return lc(this, true), true;
  }
  get value() {
    const t = this.dep.track();
    return uc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function hf(e, t, n = false) {
  let r, s;
  return he(e) ? r = e : (r = e.get, s = e.set), new df(r, s, n);
}
const Cr = {}, Wr = /* @__PURE__ */ new WeakMap();
let fn;
function pf(e, t = false, n = fn) {
  if (n) {
    let r = Wr.get(n);
    r || Wr.set(n, r = []), r.push(e);
  }
}
function gf(e, t, n = _e) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: a } = n, d = (_) => s ? _ : ct(_) || s === false || s === 0 ? Pt(_, 1) : Pt(_);
  let c, u, f, h, g = false, y = false;
  if (Re(e) ? (u = () => e.value, g = ct(e)) : Mt(e) ? (u = () => d(e), g = true) : ae(e) ? (y = true, g = e.some((_) => Mt(_) || ct(_)), u = () => e.map((_) => {
    if (Re(_)) return _.value;
    if (Mt(_)) return d(_);
    if (he(_)) return a ? a(_, 2) : _();
  })) : he(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (f) {
      Zt();
      try {
        f();
      } finally {
        en();
      }
    }
    const _ = fn;
    fn = c;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      fn = _;
    }
  } : u = ht, t && s) {
    const _ = u, x = s === true ? 1 / 0 : s;
    u = () => Pt(_(), x);
  }
  const O = sc(), p = () => {
    c.stop(), O && O.active && To(O.effects, c);
  };
  if (o && t) {
    const _ = t;
    t = (...x) => {
      _(...x), p();
    };
  }
  let S = y ? new Array(e.length).fill(Cr) : Cr;
  const w = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_)) if (t) {
      const x = c.run();
      if (s || g || (y ? x.some((E, L) => Ze(E, S[L])) : Ze(x, S))) {
        f && f();
        const E = fn;
        fn = c;
        try {
          const L = [x, S === Cr ? void 0 : y && S[0] === Cr ? [] : S, h];
          a ? a(t, 3, L) : t(...L), S = x;
        } finally {
          fn = E;
        }
      }
    } else c.run();
  };
  return l && l(w), c = new oc(u), c.scheduler = i ? () => i(w, false) : w, h = (_) => pf(_, false, c), f = c.onStop = () => {
    const _ = Wr.get(c);
    if (_) {
      if (a) a(_, 4);
      else for (const x of _) x();
      Wr.delete(c);
    }
  }, t ? r ? w(true) : S = c.run() : i ? i(w.bind(null, true), true) : c.run(), p.pause = c.pause.bind(c), p.resume = c.resume.bind(c), p.stop = p, p;
}
function Pt(e, t = 1 / 0, n) {
  if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
  if (n.add(e), t--, Re(e)) Pt(e.value, t, n);
  else if (ae(e)) for (let r = 0; r < e.length; r++) Pt(e[r], t, n);
  else if (Dn(e) || Tn(e)) e.forEach((r) => {
    Pt(r, t, n);
  });
  else if (zl(e)) {
    for (const r in e) Pt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Pt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    mr(s, t, n);
  }
}
function mt(e, t, n, r) {
  if (he(e)) {
    const s = gr(e, t, n, r);
    return s && Ql(s) && s.catch((o) => {
      mr(o, t, n);
    }), s;
  }
  if (ae(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(mt(e[o], t, n, r));
    return s;
  }
}
function mr(e, t, n, r = true) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || _e;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, a, d) === false) return;
      }
      l = l.parent;
    }
    if (o) {
      Zt(), gr(o, null, 10, [e, a, d]), en();
      return;
    }
  }
  mf(e, n, s, r, i);
}
function mf(e, t, n, r = true, s = false) {
  if (s) throw e;
  console.error(e);
}
const Je = [];
let vt = -1;
const On = [];
let Kt = null, En = 0;
const wc = Promise.resolve();
let jr = null;
function ds(e) {
  const t = jr || wc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function _f(e) {
  let t = vt + 1, n = Je.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Je[r], o = ir(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ho(e) {
  if (!(e.flags & 1)) {
    const t = ir(e), n = Je[Je.length - 1];
    !n || !(e.flags & 2) && t >= ir(n) ? Je.push(e) : Je.splice(_f(t), 0, e), e.flags |= 1, Cc();
  }
}
function Cc() {
  jr || (jr = wc.then(Rc));
}
function Tc(e) {
  ae(e) ? On.push(...e) : Kt && e.id === -1 ? Kt.splice(En + 1, 0, e) : e.flags & 1 || (On.push(e), e.flags |= 1), Cc();
}
function pi(e, t, n = vt + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ic(e) {
  if (On.length) {
    const t = [...new Set(On)].sort((n, r) => ir(n) - ir(r));
    if (On.length = 0, Kt) {
      Kt.push(...t);
      return;
    }
    for (Kt = t, En = 0; En < Kt.length; En++) {
      const n = Kt[En];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Kt = null, En = 0;
  }
}
const ir = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Rc(e) {
  try {
    for (vt = 0; vt < Je.length; vt++) {
      const t = Je[vt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; vt < Je.length; vt++) {
      const t = Je[vt];
      t && (t.flags &= -2);
    }
    vt = -1, Je.length = 0, Ic(), jr = null, (Je.length || On.length) && Rc();
  }
}
let ke = null, Oc = null;
function Br(e) {
  const t = ke;
  return ke = e, Oc = e && e.type.__scopeId || null, t;
}
function yf(e, t = ke, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Ii(-1);
    const o = Br(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Br(o), r._d && Ii(1);
    }
    return i;
  };
  return r._n = true, r._c = true, r._d = true, r;
}
function Sm(e, t) {
  if (ke === null) return e;
  const n = ms(ke), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, l, a = _e] = t[s];
    o && (he(o) && (o = { mounted: o, updated: o }), o.deep && Pt(i), r.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: l, modifiers: a }));
  }
  return e;
}
function ln(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[r];
    a && (Zt(), mt(a, n, 8, [e.el, l, e, t]), en());
  }
}
const Lc = Symbol("_vte"), Pc = (e) => e.__isTeleport, zn = (e) => e && (e.disabled || e.disabled === ""), gi = (e) => e && (e.defer || e.defer === ""), mi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _i = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Js = (e, t) => {
  const n = e && e.to;
  return Oe(n) ? t ? t(n) : null : n;
}, Nc = { name: "Teleport", __isTeleport: true, process(e, t, n, r, s, o, i, l, a, d) {
  const { mc: c, pc: u, pbc: f, o: { insert: h, querySelector: g, createText: y, createComment: O } } = d, p = zn(t.props);
  let { shapeFlag: S, children: w, dynamicChildren: _ } = t;
  if (e == null) {
    const x = t.el = y(""), E = t.anchor = y("");
    h(x, n, r), h(E, n, r);
    const L = (m, P) => {
      S & 16 && (s && s.isCE && (s.ce._teleportTarget = m), c(w, m, P, s, o, i, l, a));
    }, b = () => {
      const m = t.target = Js(t.props, g), P = xc(m, t, y, h);
      m && (i !== "svg" && mi(m) ? i = "svg" : i !== "mathml" && _i(m) && (i = "mathml"), p || (L(m, P), xr(t, false)));
    };
    p && (L(n, E), xr(t, true)), gi(t.props) ? Fe(() => {
      b(), t.el.__isMounted = true;
    }, o) : b();
  } else {
    if (gi(t.props) && !e.el.__isMounted) {
      Fe(() => {
        Nc.process(e, t, n, r, s, o, i, l, a, d), delete e.el.__isMounted;
      }, o);
      return;
    }
    t.el = e.el, t.targetStart = e.targetStart;
    const x = t.anchor = e.anchor, E = t.target = e.target, L = t.targetAnchor = e.targetAnchor, b = zn(e.props), m = b ? n : E, P = b ? x : L;
    if (i === "svg" || mi(E) ? i = "svg" : (i === "mathml" || _i(E)) && (i = "mathml"), _ ? (f(e.dynamicChildren, _, m, s, o, i, l), Bo(e, t, true)) : a || u(e, t, m, P, s, o, i, l, false), p) b ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Tr(t, n, x, d, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      const F = t.target = Js(t.props, g);
      F && Tr(t, F, null, d, 0);
    } else b && Tr(t, E, L, d, 1);
    xr(t, p);
  }
}, remove(e, t, n, { um: r, o: { remove: s } }, o) {
  const { shapeFlag: i, children: l, anchor: a, targetStart: d, targetAnchor: c, target: u, props: f } = e;
  if (u && (s(d), s(c)), o && s(a), i & 16) {
    const h = o || !zn(f);
    for (let g = 0; g < l.length; g++) {
      const y = l[g];
      r(y, t, n, h, !!y.dynamicChildren);
    }
  }
}, move: Tr, hydrate: bf };
function Tr(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: d, props: c } = e, u = o === 2;
  if (u && r(i, t, n), (!u || zn(c)) && a & 16) for (let f = 0; f < d.length; f++) s(d[f], t, n, 2);
  u && r(l, t, n);
}
function bf(e, t, n, r, s, o, { o: { nextSibling: i, parentNode: l, querySelector: a, insert: d, createText: c } }, u) {
  const f = t.target = Js(t.props, a);
  if (f) {
    const h = zn(t.props), g = f._lpa || f.firstChild;
    if (t.shapeFlag & 16) if (h) t.anchor = u(i(e), t, l(e), n, r, s, o), t.targetStart = g, t.targetAnchor = g && i(g);
    else {
      t.anchor = i(e);
      let y = g;
      for (; y; ) {
        if (y && y.nodeType === 8) {
          if (y.data === "teleport start anchor") t.targetStart = y;
          else if (y.data === "teleport anchor") {
            t.targetAnchor = y, f._lpa = t.targetAnchor && i(t.targetAnchor);
            break;
          }
        }
        y = i(y);
      }
      t.targetAnchor || xc(f, t, c, d), u(g && i(g), t, f, n, r, s, o);
    }
    xr(t, h);
  }
  return t.anchor && i(t.anchor);
}
const wm = Nc;
function xr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function xc(e, t, n, r) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[Lc] = o, e && (r(s, e), r(o, e)), o;
}
const Gt = Symbol("_leaveCb"), Ir = Symbol("_enterCb");
function vf() {
  const e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return yr(() => {
    e.isMounted = true;
  }), Wo(() => {
    e.isUnmounting = true;
  }), e;
}
const ot = [Function, Array], Fc = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: ot, onEnter: ot, onAfterEnter: ot, onEnterCancelled: ot, onBeforeLeave: ot, onLeave: ot, onAfterLeave: ot, onLeaveCancelled: ot, onBeforeAppear: ot, onAppear: ot, onAfterAppear: ot, onAppearCancelled: ot }, Mc = (e) => {
  const t = e.subTree;
  return t.component ? Mc(t.component) : t;
}, Ef = { name: "BaseTransition", props: Fc, setup(e, { slots: t }) {
  const n = Ut(), r = vf();
  return () => {
    const s = t.default && Uc(t.default(), true);
    if (!s || !s.length) return;
    const o = kc(s), i = ge(e), { mode: l } = i;
    if (r.isLeaving) return Ls(o);
    const a = yi(o);
    if (!a) return Ls(o);
    let d = zs(a, i, r, n, (u) => d = u);
    a.type !== Ke && Ln(a, d);
    let c = n.subTree && yi(n.subTree);
    if (c && c.type !== Ke && !Xt(a, c) && Mc(n).type !== Ke) {
      let u = zs(c, i, r, n);
      if (Ln(c, u), l === "out-in" && a.type !== Ke) return r.isLeaving = true, u.afterLeave = () => {
        r.isLeaving = false, n.job.flags & 8 || n.update(), delete u.afterLeave, c = void 0;
      }, Ls(o);
      l === "in-out" && a.type !== Ke ? u.delayLeave = (f, h, g) => {
        const y = Dc(r, c);
        y[String(c.key)] = c, f[Gt] = () => {
          h(), f[Gt] = void 0, delete d.delayedLeave, c = void 0;
        }, d.delayedLeave = () => {
          g(), delete d.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return o;
  };
} };
function kc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e) if (n.type !== Ke) {
      t = n;
      break;
    }
  }
  return t;
}
const Af = Ef;
function Dc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function zs(e, t, n, r, s) {
  const { appear: o, mode: i, persisted: l = false, onBeforeEnter: a, onEnter: d, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: h, onAfterLeave: g, onLeaveCancelled: y, onBeforeAppear: O, onAppear: p, onAfterAppear: S, onAppearCancelled: w } = t, _ = String(e.key), x = Dc(n, e), E = (m, P) => {
    m && mt(m, r, 9, P);
  }, L = (m, P) => {
    const F = P[1];
    E(m, P), ae(m) ? m.every((R) => R.length <= 1) && F() : m.length <= 1 && F();
  }, b = { mode: i, persisted: l, beforeEnter(m) {
    let P = a;
    if (!n.isMounted) if (o) P = O || a;
    else return;
    m[Gt] && m[Gt](true);
    const F = x[_];
    F && Xt(e, F) && F.el[Gt] && F.el[Gt](), E(P, [m]);
  }, enter(m) {
    let P = d, F = c, R = u;
    if (!n.isMounted) if (o) P = p || d, F = S || c, R = w || u;
    else return;
    let U = false;
    const k = m[Ir] = (W) => {
      U || (U = true, W ? E(R, [m]) : E(F, [m]), b.delayedLeave && b.delayedLeave(), m[Ir] = void 0);
    };
    P ? L(P, [m, k]) : k();
  }, leave(m, P) {
    const F = String(e.key);
    if (m[Ir] && m[Ir](true), n.isUnmounting) return P();
    E(f, [m]);
    let R = false;
    const U = m[Gt] = (k) => {
      R || (R = true, P(), k ? E(y, [m]) : E(g, [m]), m[Gt] = void 0, x[F] === e && delete x[F]);
    };
    x[F] = e, h ? L(h, [m, U]) : U();
  }, clone(m) {
    const P = zs(m, t, n, r, s);
    return s && s(P), P;
  } };
  return b;
}
function Ls(e) {
  if (_r(e)) return e = kt(e), e.children = null, e;
}
function yi(e) {
  if (!_r(e)) return Pc(e.type) && e.children ? kc(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && he(n.default)) return n.default();
  }
}
function Ln(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Uc(e, t = false, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Be ? (i.patchFlag & 128 && s++, r = r.concat(Uc(i.children, t, l))) : (t || i.type !== Ke) && r.push(l != null ? kt(i, { key: l }) : i);
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
  return he(e) ? $e({ name: e.name }, t, { setup: e }) : e;
}
function Cm() {
  const e = Ut();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Vo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Tm(e) {
  const t = Ut(), n = $o(null);
  if (t) {
    const s = t.refs === _e ? t.refs = {} : t.refs;
    Object.defineProperty(s, e, { enumerable: true, get: () => n.value, set: (o) => n.value = o });
  }
  return n;
}
function Kr(e, t, n, r, s = false) {
  if (ae(e)) {
    e.forEach((g, y) => Kr(g, t && (ae(t) ? t[y] : t), n, r, s));
    return;
  }
  if (pn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Kr(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? ms(r.component) : r.el, i = s ? null : o, { i: l, r: a } = e, d = t && t.r, c = l.refs === _e ? l.refs = {} : l.refs, u = l.setupState, f = ge(u), h = u === _e ? () => false : (g) => ve(f, g);
  if (d != null && d !== a && (Oe(d) ? (c[d] = null, h(d) && (u[d] = null)) : Re(d) && (d.value = null)), he(a)) gr(a, l, 12, [i, c]);
  else {
    const g = Oe(a), y = Re(a);
    if (g || y) {
      const O = () => {
        if (e.f) {
          const p = g ? h(a) ? u[a] : c[a] : a.value;
          s ? ae(p) && To(p, o) : ae(p) ? p.includes(o) || p.push(o) : g ? (c[a] = [o], h(a) && (u[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else g ? (c[a] = i, h(a) && (u[a] = i)) : y && (a.value = i, e.k && (c[e.k] = i));
      };
      i ? (O.id = -1, Fe(O, n)) : O();
    }
  }
}
const bi = (e) => e.nodeType === 8;
as().requestIdleCallback;
as().cancelIdleCallback;
function Sf(e, t) {
  if (bi(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === false) break;
      } else if (bi(r)) if (r.data === "]") {
        if (--n === 0) break;
      } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else t(e);
}
const pn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Im(e) {
  he(e) && (e = { loader: e });
  const { loader: t, loadingComponent: n, errorComponent: r, delay: s = 200, hydrate: o, timeout: i, suspensible: l = true, onError: a } = e;
  let d = null, c, u = 0;
  const f = () => (u++, d = null, h()), h = () => {
    let g;
    return d || (g = d = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), a) return new Promise((O, p) => {
        a(y, () => O(f()), () => p(y), u + 1);
      });
      throw y;
    }).then((y) => g !== d && d ? d : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ $n({ name: "AsyncComponentWrapper", __asyncLoader: h, __asyncHydrate(g, y, O) {
    const p = o ? () => {
      const S = o(O, (w) => Sf(g, w));
      S && (y.bum || (y.bum = [])).push(S);
    } : O;
    c ? p() : h().then(() => !y.isUnmounted && p());
  }, get __asyncResolved() {
    return c;
  }, setup() {
    const g = Me;
    if (Vo(g), c) return () => Ps(c, g);
    const y = (w) => {
      d = null, mr(w, g, 13, !r);
    };
    if (l && g.suspense || Nn) return h().then((w) => () => Ps(w, g)).catch((w) => (y(w), () => r ? De(r, { error: w }) : null));
    const O = Qt(false), p = Qt(), S = Qt(!!s);
    return s && setTimeout(() => {
      S.value = false;
    }, s), i != null && setTimeout(() => {
      if (!O.value && !p.value) {
        const w = new Error(`Async component timed out after ${i}ms.`);
        y(w), p.value = w;
      }
    }, i), h().then(() => {
      O.value = true, g.parent && _r(g.parent.vnode) && g.parent.update();
    }).catch((w) => {
      y(w), p.value = w;
    }), () => {
      if (O.value && c) return Ps(c, g);
      if (p.value && r) return De(r, { error: p.value });
      if (n && !S.value) return De(n);
    };
  } });
}
function Ps(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode, i = De(e, r, s);
  return i.ref = n, i.ce = o, delete t.vnode.ce, i;
}
const _r = (e) => e.type.__isKeepAlive, wf = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e, { slots: t }) {
  const n = Ut(), r = n.ctx;
  if (!r.renderer) return () => {
    const S = t.default && t.default();
    return S && S.length === 1 ? S[0] : S;
  };
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
  let i = null;
  const l = n.suspense, { renderer: { p: a, m: d, um: c, o: { createElement: u } } } = r, f = u("div");
  r.activate = (S, w, _, x, E) => {
    const L = S.component;
    d(S, w, _, 0, l), a(L.vnode, S, w, _, L, l, x, S.slotScopeIds, E), Fe(() => {
      L.isDeactivated = false, L.a && In(L.a);
      const b = S.props && S.props.onVnodeMounted;
      b && it(b, L.parent, S);
    }, l);
  }, r.deactivate = (S) => {
    const w = S.component;
    qr(w.m), qr(w.a), d(S, f, null, 1, l), Fe(() => {
      w.da && In(w.da);
      const _ = S.props && S.props.onVnodeUnmounted;
      _ && it(_, w.parent, S), w.isDeactivated = true;
    }, l);
  };
  function h(S) {
    Ns(S), c(S, n, l, true);
  }
  function g(S) {
    s.forEach((w, _) => {
      const x = io(w.type);
      x && !S(x) && y(_);
    });
  }
  function y(S) {
    const w = s.get(S);
    w && (!i || !Xt(w, i)) ? h(w) : i && Ns(i), s.delete(S), o.delete(S);
  }
  St(() => [e.include, e.exclude], ([S, w]) => {
    S && g((_) => Yn(S, _)), w && g((_) => !Yn(w, _));
  }, { flush: "post", deep: true });
  let O = null;
  const p = () => {
    O != null && (Xr(n.subTree.type) ? Fe(() => {
      s.set(O, Rr(n.subTree));
    }, n.subTree.suspense) : s.set(O, Rr(n.subTree)));
  };
  return yr(p), Vc(p), Wo(() => {
    s.forEach((S) => {
      const { subTree: w, suspense: _ } = n, x = Rr(w);
      if (S.type === x.type && S.key === x.key) {
        Ns(x);
        const E = x.component.da;
        E && Fe(E, _);
        return;
      }
      h(S);
    });
  }), () => {
    if (O = null, !t.default) return i = null;
    const S = t.default(), w = S[0];
    if (S.length > 1) return i = null, S;
    if (!Pn(w) || !(w.shapeFlag & 4) && !(w.shapeFlag & 128)) return i = null, w;
    let _ = Rr(w);
    if (_.type === Ke) return i = null, _;
    const x = _.type, E = io(pn(_) ? _.type.__asyncResolved || {} : x), { include: L, exclude: b, max: m } = e;
    if (L && (!E || !Yn(L, E)) || b && E && Yn(b, E)) return _.shapeFlag &= -257, i = _, w;
    const P = _.key == null ? x : _.key, F = s.get(P);
    return _.el && (_ = kt(_), w.shapeFlag & 128 && (w.ssContent = _)), O = P, F ? (_.el = F.el, _.component = F.component, _.transition && Ln(_, _.transition), _.shapeFlag |= 512, o.delete(P), o.add(P)) : (o.add(P), m && o.size > parseInt(m, 10) && y(o.values().next().value)), _.shapeFlag |= 256, i = _, Xr(w.type) ? w : _;
  };
} }, Rm = wf;
function Yn(e, t) {
  return ae(e) ? e.some((n) => Yn(n, t)) : Oe(e) ? e.split(",").includes(t) : wu(e) ? (e.lastIndex = 0, e.test(t)) : false;
}
function Cf(e, t) {
  $c(e, "a", t);
}
function Tf(e, t) {
  $c(e, "da", t);
}
function $c(e, t, n = Me) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return e();
  });
  if (hs(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; ) _r(s.parent.vnode) && If(r, t, n, s), s = s.parent;
  }
}
function If(e, t, n, r) {
  const s = hs(t, e, r, true);
  ps(() => {
    To(r[t], s);
  }, n);
}
function Ns(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Rr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function hs(e, t, n = Me, r = false) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Zt();
      const l = vr(n), a = mt(t, n, e, i);
      return l(), en(), a;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const Dt = (e) => (t, n = Me) => {
  (!Nn || e === "sp") && hs(e, (...r) => t(...r), n);
}, Rf = Dt("bm"), yr = Dt("m"), Hc = Dt("bu"), Vc = Dt("u"), Wo = Dt("bum"), ps = Dt("um"), Of = Dt("sp"), Lf = Dt("rtg"), Pf = Dt("rtc");
function Nf(e, t = Me) {
  hs("ec", e, t);
}
const Wc = "components";
function Om(e, t) {
  return Bc(Wc, e, true, t) || e;
}
const jc = Symbol.for("v-ndc");
function Lm(e) {
  return Oe(e) ? Bc(Wc, e, false) || e : e || jc;
}
function Bc(e, t, n = true, r = false) {
  const s = ke || Me;
  if (s) {
    const o = s.type;
    {
      const l = io(o, false);
      if (l && (l === t || l === st(t) || l === cs(st(t)))) return o;
    }
    const i = vi(s[e] || o[e], t) || vi(s.appContext[e], t);
    return !i && r ? o : i;
  }
}
function vi(e, t) {
  return e && (e[t] || e[st(t)] || e[cs(st(t))]);
}
function Pm(e, t, n, r) {
  let s;
  const o = n, i = ae(e);
  if (i || Oe(e)) {
    const l = i && Mt(e);
    let a = false;
    l && (a = !ct(e), e = fs(e)), s = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++) s[d] = t(a ? je(e[d]) : e[d], d, void 0, o);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o);
  } else if (Se(e)) if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, o));
  else {
    const l = Object.keys(e);
    s = new Array(l.length);
    for (let a = 0, d = l.length; a < d; a++) {
      const c = l[a];
      s[a] = t(e[c], c, a, o);
    }
  }
  else s = [];
  return s;
}
function Nm(e, t, n = {}, r, s) {
  if (ke.ce || ke.parent && pn(ke.parent) && ke.parent.ce) return ro(), so(Be, null, [De("slot", n, r)], 64);
  let o = e[t];
  o && o._c && (o._d = false), ro();
  const i = o && Kc(o(n)), l = n.key || i && i.key, a = so(Be, { key: (l && !gt(l) ? l : `_${t}`) + "" }, i || [], i && e._ === 1 ? 64 : -2);
  return o && o._c && (o._d = true), a;
}
function Kc(e) {
  return e.some((t) => Pn(t) ? !(t.type === Ke || t.type === Be && !Kc(t.children)) : true) ? e : null;
}
const Zs = (e) => e ? fa(e) ? ms(e) : Zs(e.parent) : null, Zn = $e(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => Zs(e.parent), $root: (e) => Zs(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Yc(e), $forceUpdate: (e) => e.f || (e.f = () => {
  Ho(e.update);
}), $nextTick: (e) => e.n || (e.n = ds.bind(e.proxy)), $watch: (e) => td.bind(e) }), xs = (e, t) => e !== _e && !e.__isScriptSetup && ve(e, t), xf = { get({ _: e }, t) {
  if (t === "__v_skip") return true;
  const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: a } = e;
  let d;
  if (t[0] !== "$") {
    const h = i[t];
    if (h !== void 0) switch (h) {
      case 1:
        return r[t];
      case 2:
        return s[t];
      case 4:
        return n[t];
      case 3:
        return o[t];
    }
    else {
      if (xs(r, t)) return i[t] = 1, r[t];
      if (s !== _e && ve(s, t)) return i[t] = 2, s[t];
      if ((d = e.propsOptions[0]) && ve(d, t)) return i[t] = 3, o[t];
      if (n !== _e && ve(n, t)) return i[t] = 4, n[t];
      eo && (i[t] = 0);
    }
  }
  const c = Zn[t];
  let u, f;
  if (c) return t === "$attrs" && We(e.attrs, "get", ""), c(e);
  if ((u = l.__cssModules) && (u = u[t])) return u;
  if (n !== _e && ve(n, t)) return i[t] = 4, n[t];
  if (f = a.config.globalProperties, ve(f, t)) return f[t];
}, set({ _: e }, t, n) {
  const { data: r, setupState: s, ctx: o } = e;
  return xs(s, t) ? (s[t] = n, true) : r !== _e && ve(r, t) ? (r[t] = n, true) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } }, i) {
  let l;
  return !!n[i] || e !== _e && ve(e, i) || xs(t, i) || (l = o[0]) && ve(l, i) || ve(r, i) || ve(Zn, i) || ve(s.config.globalProperties, i);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
function Gr(e) {
  return ae(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
function xm(e, t) {
  return !e || !t ? e || t : ae(e) && ae(t) ? e.concat(t) : $e({}, Gr(e), Gr(t));
}
let eo = true;
function Ff(e) {
  const t = Yc(e), n = e.proxy, r = e.ctx;
  eo = false, t.beforeCreate && Ei(t.beforeCreate, e, "bc");
  const { data: s, computed: o, methods: i, watch: l, provide: a, inject: d, created: c, beforeMount: u, mounted: f, beforeUpdate: h, updated: g, activated: y, deactivated: O, beforeDestroy: p, beforeUnmount: S, destroyed: w, unmounted: _, render: x, renderTracked: E, renderTriggered: L, errorCaptured: b, serverPrefetch: m, expose: P, inheritAttrs: F, components: R, directives: U, filters: k } = t;
  if (d && Mf(d, r, null), i) for (const v in i) {
    const B = i[v];
    he(B) && (r[v] = B.bind(n));
  }
  if (s) {
    const v = s.call(n, n);
    Se(v) && (e.data = pr(v));
  }
  if (eo = true, o) for (const v in o) {
    const B = o[v], V = he(B) ? B.bind(n, n) : he(B.get) ? B.get.bind(n, n) : ht, J = !he(B) && he(B.set) ? B.set.bind(n) : ht, ie = He({ get: V, set: J });
    Object.defineProperty(r, v, { enumerable: true, configurable: true, get: () => ie.value, set: (te) => ie.value = te });
  }
  if (l) for (const v in l) Gc(l[v], r, n, v);
  if (a) {
    const v = he(a) ? a.call(n) : a;
    Reflect.ownKeys(v).forEach((B) => {
      Fr(B, v[B]);
    });
  }
  c && Ei(c, e, "c");
  function T(v, B) {
    ae(B) ? B.forEach((V) => v(V.bind(n))) : B && v(B.bind(n));
  }
  if (T(Rf, u), T(yr, f), T(Hc, h), T(Vc, g), T(Cf, y), T(Tf, O), T(Nf, b), T(Pf, E), T(Lf, L), T(Wo, S), T(ps, _), T(Of, m), ae(P)) if (P.length) {
    const v = e.exposed || (e.exposed = {});
    P.forEach((B) => {
      Object.defineProperty(v, B, { get: () => n[B], set: (V) => n[B] = V });
    });
  } else e.exposed || (e.exposed = {});
  x && e.render === ht && (e.render = x), F != null && (e.inheritAttrs = F), R && (e.components = R), U && (e.directives = U), m && Vo(e);
}
function Mf(e, t, n = ht) {
  ae(e) && (e = to(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Se(s) ? "default" in s ? o = rt(s.from || r, s.default, true) : o = rt(s.from || r) : o = rt(s), Re(o) ? Object.defineProperty(t, r, { enumerable: true, configurable: true, get: () => o.value, set: (i) => o.value = i }) : t[r] = o;
  }
}
function Ei(e, t, n) {
  mt(ae(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gc(e, t, n, r) {
  let s = r.includes(".") ? oa(n, r) : () => n[r];
  if (Oe(e)) {
    const o = t[e];
    he(o) && St(s, o);
  } else if (he(e)) St(s, e.bind(n));
  else if (Se(e)) if (ae(e)) e.forEach((o) => Gc(o, t, n, r));
  else {
    const o = he(e.handler) ? e.handler.bind(n) : t[e.handler];
    he(o) && St(s, o, e);
  }
}
function Yc(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach((d) => Yr(a, d, i, true)), Yr(a, t, i)), Se(t) && o.set(t, a), a;
}
function Yr(e, t, n, r = false) {
  const { mixins: s, extends: o } = t;
  o && Yr(e, o, n, true), s && s.forEach((i) => Yr(e, i, n, true));
  for (const i in t) if (!(r && i === "expose")) {
    const l = kf[i] || n && n[i];
    e[i] = l ? l(e[i], t[i]) : t[i];
  }
  return e;
}
const kf = { data: Ai, props: Si, emits: Si, methods: qn, computed: qn, beforeCreate: qe, created: qe, beforeMount: qe, mounted: qe, beforeUpdate: qe, updated: qe, beforeDestroy: qe, beforeUnmount: qe, destroyed: qe, unmounted: qe, activated: qe, deactivated: qe, errorCaptured: qe, serverPrefetch: qe, components: qn, directives: qn, watch: Uf, provide: Ai, inject: Df };
function Ai(e, t) {
  return t ? e ? function() {
    return $e(he(e) ? e.call(this, this) : e, he(t) ? t.call(this, this) : t);
  } : t : e;
}
function Df(e, t) {
  return qn(to(e), to(t));
}
function to(e) {
  if (ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qn(e, t) {
  return e ? $e(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Si(e, t) {
  return e ? ae(e) && ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : $e(/* @__PURE__ */ Object.create(null), Gr(e), Gr(t ?? {})) : t;
}
function Uf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = $e(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = qe(e[r], t[r]);
  return n;
}
function qc() {
  return { app: null, config: { isNativeTag: Au, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let $f = 0;
function Hf(e, t) {
  return function(r, s = null) {
    he(r) || (r = $e({}, r)), s != null && !Se(s) && (s = null);
    const o = qc(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = false;
    const d = o.app = { _uid: $f++, _component: r, _props: s, _container: null, _context: o, _instance: null, version: Ed, get config() {
      return o.config;
    }, set config(c) {
    }, use(c, ...u) {
      return i.has(c) || (c && he(c.install) ? (i.add(c), c.install(d, ...u)) : he(c) && (i.add(c), c(d, ...u))), d;
    }, mixin(c) {
      return o.mixins.includes(c) || o.mixins.push(c), d;
    }, component(c, u) {
      return u ? (o.components[c] = u, d) : o.components[c];
    }, directive(c, u) {
      return u ? (o.directives[c] = u, d) : o.directives[c];
    }, mount(c, u, f) {
      if (!a) {
        const h = d._ceVNode || De(r, s);
        return h.appContext = o, f === true ? f = "svg" : f === false && (f = void 0), e(h, c, f), a = true, d._container = c, c.__vue_app__ = d, ms(h.component);
      }
    }, onUnmount(c) {
      l.push(c);
    }, unmount() {
      a && (mt(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
    }, provide(c, u) {
      return o.provides[c] = u, d;
    }, runWithContext(c) {
      const u = gn;
      gn = d;
      try {
        return c();
      } finally {
        gn = u;
      }
    } };
    return d;
  };
}
let gn = null;
function Fr(e, t) {
  if (Me) {
    let n = Me.provides;
    const r = Me.parent && Me.parent.provides;
    r === n && (n = Me.provides = Object.create(r)), n[e] = t;
  }
}
function rt(e, t, n = false) {
  const r = Me || ke;
  if (r || gn) {
    const s = gn ? gn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && he(t) ? t.call(r && r.proxy) : t;
  }
}
function Vf() {
  return !!(Me || ke || gn);
}
const Xc = {}, Qc = () => Object.create(Xc), Jc = (e) => Object.getPrototypeOf(e) === Xc;
function Wf(e, t, n, r = false) {
  const s = {}, o = Qc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zc(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? e.props = r ? s : bc(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function jf(e, t, n, r) {
  const { props: s, attrs: o, vnode: { patchFlag: i } } = e, l = ge(s), [a] = e.propsOptions;
  let d = false;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let f = c[u];
        if (gs(e.emitsOptions, f)) continue;
        const h = t[f];
        if (a) if (ve(o, f)) h !== o[f] && (o[f] = h, d = true);
        else {
          const g = st(f);
          s[g] = no(a, l, g, h, e, false);
        }
        else h !== o[f] && (o[f] = h, d = true);
      }
    }
  } else {
    zc(e, t, s, o) && (d = true);
    let c;
    for (const u in l) (!t || !ve(t, u) && ((c = zt(u)) === u || !ve(t, c))) && (a ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = no(a, l, u, void 0, e, true)) : delete s[u]);
    if (o !== l) for (const u in o) (!t || !ve(t, u)) && (delete o[u], d = true);
  }
  d && Lt(e.attrs, "set", "");
}
function zc(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = false, l;
  if (t) for (let a in t) {
    if (Xn(a)) continue;
    const d = t[a];
    let c;
    s && ve(s, c = st(a)) ? !o || !o.includes(c) ? n[c] = d : (l || (l = {}))[c] = d : gs(e.emitsOptions, a) || (!(a in r) || d !== r[a]) && (r[a] = d, i = true);
  }
  if (o) {
    const a = ge(n), d = l || _e;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = no(s, a, u, d[u], e, !ve(d, u));
    }
  }
  return i;
}
function no(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const l = ve(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && he(a)) {
        const { propsDefaults: d } = s;
        if (n in d) r = d[n];
        else {
          const c = vr(s);
          r = d[n] = a.call(null, t), c();
        }
      } else r = a;
      s.ce && s.ce._setProp(n, r);
    }
    i[0] && (o && !l ? r = false : i[1] && (r === "" || r === zt(n)) && (r = true));
  }
  return r;
}
const Bf = /* @__PURE__ */ new WeakMap();
function Zc(e, t, n = false) {
  const r = n ? Bf : t.propsCache, s = r.get(e);
  if (s) return s;
  const o = e.props, i = {}, l = [];
  let a = false;
  if (!he(e)) {
    const c = (u) => {
      a = true;
      const [f, h] = Zc(u, t, true);
      $e(i, f), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a) return Se(e) && r.set(e, Cn), Cn;
  if (ae(o)) for (let c = 0; c < o.length; c++) {
    const u = st(o[c]);
    wi(u) && (i[u] = _e);
  }
  else if (o) for (const c in o) {
    const u = st(c);
    if (wi(u)) {
      const f = o[c], h = i[u] = ae(f) || he(f) ? { type: f } : $e({}, f), g = h.type;
      let y = false, O = true;
      if (ae(g)) for (let p = 0; p < g.length; ++p) {
        const S = g[p], w = he(S) && S.name;
        if (w === "Boolean") {
          y = true;
          break;
        } else w === "String" && (O = false);
      }
      else y = he(g) && g.name === "Boolean";
      h[0] = y, h[1] = O, (y || ve(h, "default")) && l.push(u);
    }
  }
  const d = [i, l];
  return Se(e) && r.set(e, d), d;
}
function wi(e) {
  return e[0] !== "$" && !Xn(e);
}
const ea = (e) => e[0] === "_" || e === "$stable", jo = (e) => ae(e) ? e.map(Et) : [Et(e)], Kf = (e, t, n) => {
  if (t._n) return t;
  const r = yf((...s) => jo(t(...s)), n);
  return r._c = false, r;
}, ta = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ea(s)) continue;
    const o = e[s];
    if (he(o)) t[s] = Kf(s, o, r);
    else if (o != null) {
      const i = jo(o);
      t[s] = () => i;
    }
  }
}, na = (e, t) => {
  const n = jo(t);
  e.slots.default = () => n;
}, ra = (e, t, n) => {
  for (const r in t) (n || r !== "_") && (e[r] = t[r]);
}, Gf = (e, t, n) => {
  const r = e.slots = Qc();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ra(r, t, n), n && Zl(r, "_", s, true)) : ta(t, r);
  } else t && na(e, t);
}, Yf = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = true, i = _e;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = false : ra(s, t, n) : (o = !t.$stable, ta(t, s)), i = t;
  } else t && (na(e, t), i = { default: 1 });
  if (o) for (const l in s) !ea(l) && i[l] == null && delete s[l];
}, Fe = ld;
function qf(e) {
  return Xf(e);
}
function Xf(e, t) {
  const n = as();
  n.__VUE__ = true;
  const { insert: r, remove: s, patchProp: o, createElement: i, createText: l, createComment: a, setText: d, setElementText: c, parentNode: u, nextSibling: f, setScopeId: h = ht, insertStaticContent: g } = e, y = (I, N, $, K = null, X = null, Y = null, A = void 0, C = null, D = !!N.dynamicChildren) => {
    if (I === N) return;
    I && !Xt(I, N) && (K = G(I), te(I, X, Y, true), I = null), N.patchFlag === -2 && (D = false, N.dynamicChildren = null);
    const { type: H, ref: re, shapeFlag: q } = N;
    switch (H) {
      case br:
        O(I, N, $, K);
        break;
      case Ke:
        p(I, N, $, K);
        break;
      case Mr:
        I == null && S(N, $, K, A);
        break;
      case Be:
        R(I, N, $, K, X, Y, A, C, D);
        break;
      default:
        q & 1 ? x(I, N, $, K, X, Y, A, C, D) : q & 6 ? U(I, N, $, K, X, Y, A, C, D) : (q & 64 || q & 128) && H.process(I, N, $, K, X, Y, A, C, D, ne);
    }
    re != null && X && Kr(re, I && I.ref, Y, N || I, !N);
  }, O = (I, N, $, K) => {
    if (I == null) r(N.el = l(N.children), $, K);
    else {
      const X = N.el = I.el;
      N.children !== I.children && d(X, N.children);
    }
  }, p = (I, N, $, K) => {
    I == null ? r(N.el = a(N.children || ""), $, K) : N.el = I.el;
  }, S = (I, N, $, K) => {
    [I.el, I.anchor] = g(I.children, N, $, K, I.el, I.anchor);
  }, w = ({ el: I, anchor: N }, $, K) => {
    let X;
    for (; I && I !== N; ) X = f(I), r(I, $, K), I = X;
    r(N, $, K);
  }, _ = ({ el: I, anchor: N }) => {
    let $;
    for (; I && I !== N; ) $ = f(I), s(I), I = $;
    s(N);
  }, x = (I, N, $, K, X, Y, A, C, D) => {
    N.type === "svg" ? A = "svg" : N.type === "math" && (A = "mathml"), I == null ? E(N, $, K, X, Y, A, C, D) : m(I, N, X, Y, A, C, D);
  }, E = (I, N, $, K, X, Y, A, C) => {
    let D, H;
    const { props: re, shapeFlag: q, transition: M, dirs: j } = I;
    if (D = I.el = i(I.type, Y, re && re.is, re), q & 8 ? c(D, I.children) : q & 16 && b(I.children, D, null, K, X, Fs(I, Y), A, C), j && ln(I, null, K, "created"), L(D, I, I.scopeId, A, K), re) {
      for (const de in re) de !== "value" && !Xn(de) && o(D, de, null, re[de], Y, K);
      "value" in re && o(D, "value", null, re.value, Y), (H = re.onVnodeBeforeMount) && it(H, K, I);
    }
    j && ln(I, null, K, "beforeMount");
    const oe = Qf(X, M);
    oe && M.beforeEnter(D), r(D, N, $), ((H = re && re.onVnodeMounted) || oe || j) && Fe(() => {
      H && it(H, K, I), oe && M.enter(D), j && ln(I, null, K, "mounted");
    }, X);
  }, L = (I, N, $, K, X) => {
    if ($ && h(I, $), K) for (let Y = 0; Y < K.length; Y++) h(I, K[Y]);
    if (X) {
      let Y = X.subTree;
      if (N === Y || Xr(Y.type) && (Y.ssContent === N || Y.ssFallback === N)) {
        const A = X.vnode;
        L(I, A, A.scopeId, A.slotScopeIds, X.parent);
      }
    }
  }, b = (I, N, $, K, X, Y, A, C, D = 0) => {
    for (let H = D; H < I.length; H++) {
      const re = I[H] = C ? Yt(I[H]) : Et(I[H]);
      y(null, re, N, $, K, X, Y, A, C);
    }
  }, m = (I, N, $, K, X, Y, A) => {
    const C = N.el = I.el;
    let { patchFlag: D, dynamicChildren: H, dirs: re } = N;
    D |= I.patchFlag & 16;
    const q = I.props || _e, M = N.props || _e;
    let j;
    if ($ && cn($, false), (j = M.onVnodeBeforeUpdate) && it(j, $, N, I), re && ln(N, I, $, "beforeUpdate"), $ && cn($, true), (q.innerHTML && M.innerHTML == null || q.textContent && M.textContent == null) && c(C, ""), H ? P(I.dynamicChildren, H, C, $, K, Fs(N, X), Y) : A || B(I, N, C, null, $, K, Fs(N, X), Y, false), D > 0) {
      if (D & 16) F(C, q, M, $, X);
      else if (D & 2 && q.class !== M.class && o(C, "class", null, M.class, X), D & 4 && o(C, "style", q.style, M.style, X), D & 8) {
        const oe = N.dynamicProps;
        for (let de = 0; de < oe.length; de++) {
          const ue = oe[de], we = q[ue], pe = M[ue];
          (pe !== we || ue === "value") && o(C, ue, we, pe, X, $);
        }
      }
      D & 1 && I.children !== N.children && c(C, N.children);
    } else !A && H == null && F(C, q, M, $, X);
    ((j = M.onVnodeUpdated) || re) && Fe(() => {
      j && it(j, $, N, I), re && ln(N, I, $, "updated");
    }, K);
  }, P = (I, N, $, K, X, Y, A) => {
    for (let C = 0; C < N.length; C++) {
      const D = I[C], H = N[C], re = D.el && (D.type === Be || !Xt(D, H) || D.shapeFlag & 70) ? u(D.el) : $;
      y(D, H, re, null, K, X, Y, A, true);
    }
  }, F = (I, N, $, K, X) => {
    if (N !== $) {
      if (N !== _e) for (const Y in N) !Xn(Y) && !(Y in $) && o(I, Y, N[Y], null, X, K);
      for (const Y in $) {
        if (Xn(Y)) continue;
        const A = $[Y], C = N[Y];
        A !== C && Y !== "value" && o(I, Y, C, A, X, K);
      }
      "value" in $ && o(I, "value", N.value, $.value, X);
    }
  }, R = (I, N, $, K, X, Y, A, C, D) => {
    const H = N.el = I ? I.el : l(""), re = N.anchor = I ? I.anchor : l("");
    let { patchFlag: q, dynamicChildren: M, slotScopeIds: j } = N;
    j && (C = C ? C.concat(j) : j), I == null ? (r(H, $, K), r(re, $, K), b(N.children || [], $, re, X, Y, A, C, D)) : q > 0 && q & 64 && M && I.dynamicChildren ? (P(I.dynamicChildren, M, $, X, Y, A, C), (N.key != null || X && N === X.subTree) && Bo(I, N, true)) : B(I, N, $, re, X, Y, A, C, D);
  }, U = (I, N, $, K, X, Y, A, C, D) => {
    N.slotScopeIds = C, I == null ? N.shapeFlag & 512 ? X.ctx.activate(N, $, K, A, D) : k(N, $, K, X, Y, A, D) : W(I, N, D);
  }, k = (I, N, $, K, X, Y, A) => {
    const C = I.component = gd(I, K, X);
    if (_r(I) && (C.ctx.renderer = ne), md(C, false, A), C.asyncDep) {
      if (X && X.registerDep(C, T, A), !I.el) {
        const D = C.subTree = De(Ke);
        p(null, D, N, $);
      }
    } else T(C, I, N, $, X, Y, A);
  }, W = (I, N, $) => {
    const K = N.component = I.component;
    if (od(I, N, $)) if (K.asyncDep && !K.asyncResolved) {
      v(K, N, $);
      return;
    } else K.next = N, K.update();
    else N.el = I.el, K.vnode = N;
  }, T = (I, N, $, K, X, Y, A) => {
    const C = () => {
      if (I.isMounted) {
        let { next: q, bu: M, u: j, parent: oe, vnode: de } = I;
        {
          const Ie = sa(I);
          if (Ie) {
            q && (q.el = de.el, v(I, q, A)), Ie.asyncDep.then(() => {
              I.isUnmounted || C();
            });
            return;
          }
        }
        let ue = q, we;
        cn(I, false), q ? (q.el = de.el, v(I, q, A)) : q = de, M && In(M), (we = q.props && q.props.onVnodeBeforeUpdate) && it(we, oe, q, de), cn(I, true);
        const pe = Ci(I), Te = I.subTree;
        I.subTree = pe, y(Te, pe, u(Te.el), G(Te), I, X, Y), q.el = pe.el, ue === null && id(I, pe.el), j && Fe(j, X), (we = q.props && q.props.onVnodeUpdated) && Fe(() => it(we, oe, q, de), X);
      } else {
        let q;
        const { el: M, props: j } = N, { bm: oe, m: de, parent: ue, root: we, type: pe } = I, Te = pn(N);
        cn(I, false), oe && In(oe), !Te && (q = j && j.onVnodeBeforeMount) && it(q, ue, N), cn(I, true);
        {
          we.ce && we.ce._injectChildStyle(pe);
          const Ie = I.subTree = Ci(I);
          y(null, Ie, $, K, I, X, Y), N.el = Ie.el;
        }
        if (de && Fe(de, X), !Te && (q = j && j.onVnodeMounted)) {
          const Ie = N;
          Fe(() => it(q, ue, Ie), X);
        }
        (N.shapeFlag & 256 || ue && pn(ue.vnode) && ue.vnode.shapeFlag & 256) && I.a && Fe(I.a, X), I.isMounted = true, N = $ = K = null;
      }
    };
    I.scope.on();
    const D = I.effect = new oc(C);
    I.scope.off();
    const H = I.update = D.run.bind(D), re = I.job = D.runIfDirty.bind(D);
    re.i = I, re.id = I.uid, D.scheduler = () => Ho(re), cn(I, true), H();
  }, v = (I, N, $) => {
    N.component = I;
    const K = I.vnode.props;
    I.vnode = N, I.next = null, jf(I, N.props, K, $), Yf(I, N.children, $), Zt(), pi(I), en();
  }, B = (I, N, $, K, X, Y, A, C, D = false) => {
    const H = I && I.children, re = I ? I.shapeFlag : 0, q = N.children, { patchFlag: M, shapeFlag: j } = N;
    if (M > 0) {
      if (M & 128) {
        J(H, q, $, K, X, Y, A, C, D);
        return;
      } else if (M & 256) {
        V(H, q, $, K, X, Y, A, C, D);
        return;
      }
    }
    j & 8 ? (re & 16 && ce(H, X, Y), q !== H && c($, q)) : re & 16 ? j & 16 ? J(H, q, $, K, X, Y, A, C, D) : ce(H, X, Y, true) : (re & 8 && c($, ""), j & 16 && b(q, $, K, X, Y, A, C, D));
  }, V = (I, N, $, K, X, Y, A, C, D) => {
    I = I || Cn, N = N || Cn;
    const H = I.length, re = N.length, q = Math.min(H, re);
    let M;
    for (M = 0; M < q; M++) {
      const j = N[M] = D ? Yt(N[M]) : Et(N[M]);
      y(I[M], j, $, null, X, Y, A, C, D);
    }
    H > re ? ce(I, X, Y, true, false, q) : b(N, $, K, X, Y, A, C, D, q);
  }, J = (I, N, $, K, X, Y, A, C, D) => {
    let H = 0;
    const re = N.length;
    let q = I.length - 1, M = re - 1;
    for (; H <= q && H <= M; ) {
      const j = I[H], oe = N[H] = D ? Yt(N[H]) : Et(N[H]);
      if (Xt(j, oe)) y(j, oe, $, null, X, Y, A, C, D);
      else break;
      H++;
    }
    for (; H <= q && H <= M; ) {
      const j = I[q], oe = N[M] = D ? Yt(N[M]) : Et(N[M]);
      if (Xt(j, oe)) y(j, oe, $, null, X, Y, A, C, D);
      else break;
      q--, M--;
    }
    if (H > q) {
      if (H <= M) {
        const j = M + 1, oe = j < re ? N[j].el : K;
        for (; H <= M; ) y(null, N[H] = D ? Yt(N[H]) : Et(N[H]), $, oe, X, Y, A, C, D), H++;
      }
    } else if (H > M) for (; H <= q; ) te(I[H], X, Y, true), H++;
    else {
      const j = H, oe = H, de = /* @__PURE__ */ new Map();
      for (H = oe; H <= M; H++) {
        const Ne = N[H] = D ? Yt(N[H]) : Et(N[H]);
        Ne.key != null && de.set(Ne.key, H);
      }
      let ue, we = 0;
      const pe = M - oe + 1;
      let Te = false, Ie = 0;
      const Ge = new Array(pe);
      for (H = 0; H < pe; H++) Ge[H] = 0;
      for (H = j; H <= q; H++) {
        const Ne = I[H];
        if (we >= pe) {
          te(Ne, X, Y, true);
          continue;
        }
        let ze;
        if (Ne.key != null) ze = de.get(Ne.key);
        else for (ue = oe; ue <= M; ue++) if (Ge[ue - oe] === 0 && Xt(Ne, N[ue])) {
          ze = ue;
          break;
        }
        ze === void 0 ? te(Ne, X, Y, true) : (Ge[ze - oe] = H + 1, ze >= Ie ? Ie = ze : Te = true, y(Ne, N[ze], $, null, X, Y, A, C, D), we++);
      }
      const tt = Te ? Jf(Ge) : Cn;
      for (ue = tt.length - 1, H = pe - 1; H >= 0; H--) {
        const Ne = oe + H, ze = N[Ne], Ar = Ne + 1 < re ? N[Ne + 1].el : K;
        Ge[H] === 0 ? y(null, ze, $, Ar, X, Y, A, C, D) : Te && (ue < 0 || H !== tt[ue] ? ie(ze, $, Ar, 2) : ue--);
      }
    }
  }, ie = (I, N, $, K, X = null) => {
    const { el: Y, type: A, transition: C, children: D, shapeFlag: H } = I;
    if (H & 6) {
      ie(I.component.subTree, N, $, K);
      return;
    }
    if (H & 128) {
      I.suspense.move(N, $, K);
      return;
    }
    if (H & 64) {
      A.move(I, N, $, ne);
      return;
    }
    if (A === Be) {
      r(Y, N, $);
      for (let q = 0; q < D.length; q++) ie(D[q], N, $, K);
      r(I.anchor, N, $);
      return;
    }
    if (A === Mr) {
      w(I, N, $);
      return;
    }
    if (K !== 2 && H & 1 && C) if (K === 0) C.beforeEnter(Y), r(Y, N, $), Fe(() => C.enter(Y), X);
    else {
      const { leave: q, delayLeave: M, afterLeave: j } = C, oe = () => r(Y, N, $), de = () => {
        q(Y, () => {
          oe(), j && j();
        });
      };
      M ? M(Y, oe, de) : de();
    }
    else r(Y, N, $);
  }, te = (I, N, $, K = false, X = false) => {
    const { type: Y, props: A, ref: C, children: D, dynamicChildren: H, shapeFlag: re, patchFlag: q, dirs: M, cacheIndex: j } = I;
    if (q === -2 && (X = false), C != null && Kr(C, null, $, I, true), j != null && (N.renderCache[j] = void 0), re & 256) {
      N.ctx.deactivate(I);
      return;
    }
    const oe = re & 1 && M, de = !pn(I);
    let ue;
    if (de && (ue = A && A.onVnodeBeforeUnmount) && it(ue, N, I), re & 6) Q(I.component, $, K);
    else {
      if (re & 128) {
        I.suspense.unmount($, K);
        return;
      }
      oe && ln(I, null, N, "beforeUnmount"), re & 64 ? I.type.remove(I, N, $, ne, K) : H && !H.hasOnce && (Y !== Be || q > 0 && q & 64) ? ce(H, N, $, false, true) : (Y === Be && q & 384 || !X && re & 16) && ce(D, N, $), K && se(I);
    }
    (de && (ue = A && A.onVnodeUnmounted) || oe) && Fe(() => {
      ue && it(ue, N, I), oe && ln(I, null, N, "unmounted");
    }, $);
  }, se = (I) => {
    const { type: N, el: $, anchor: K, transition: X } = I;
    if (N === Be) {
      Z($, K);
      return;
    }
    if (N === Mr) {
      _(I);
      return;
    }
    const Y = () => {
      s($), X && !X.persisted && X.afterLeave && X.afterLeave();
    };
    if (I.shapeFlag & 1 && X && !X.persisted) {
      const { leave: A, delayLeave: C } = X, D = () => A($, Y);
      C ? C(I.el, Y, D) : D();
    } else Y();
  }, Z = (I, N) => {
    let $;
    for (; I !== N; ) $ = f(I), s(I), I = $;
    s(N);
  }, Q = (I, N, $) => {
    const { bum: K, scope: X, job: Y, subTree: A, um: C, m: D, a: H } = I;
    qr(D), qr(H), K && In(K), X.stop(), Y && (Y.flags |= 8, te(A, I, N, $)), C && Fe(C, N), Fe(() => {
      I.isUnmounted = true;
    }, N), N && N.pendingBranch && !N.isUnmounted && I.asyncDep && !I.asyncResolved && I.suspenseId === N.pendingId && (N.deps--, N.deps === 0 && N.resolve());
  }, ce = (I, N, $, K = false, X = false, Y = 0) => {
    for (let A = Y; A < I.length; A++) te(I[A], N, $, K, X);
  }, G = (I) => {
    if (I.shapeFlag & 6) return G(I.component.subTree);
    if (I.shapeFlag & 128) return I.suspense.next();
    const N = f(I.anchor || I.el), $ = N && N[Lc];
    return $ ? f($) : N;
  };
  let ee = false;
  const z = (I, N, $) => {
    I == null ? N._vnode && te(N._vnode, null, null, true) : y(N._vnode || null, I, N, null, null, null, $), N._vnode = I, ee || (ee = true, pi(), Ic(), ee = false);
  }, ne = { p: y, um: te, m: ie, r: se, mt: k, mc: b, pc: B, pbc: P, n: G, o: e };
  return { render: z, hydrate: void 0, createApp: Hf(z) };
}
function Fs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function cn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bo(e, t, n = false) {
  const r = e.children, s = t.children;
  if (ae(r) && ae(s)) for (let o = 0; o < r.length; o++) {
    const i = r[o];
    let l = s[o];
    l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = Yt(s[o]), l.el = i.el), !n && l.patchFlag !== -2 && Bo(i, l)), l.type === br && (l.el = i.el);
  }
}
function Jf(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const d = e[r];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; ) l = o + i >> 1, e[n[l]] < d ? o = l + 1 : i = l;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
  return n;
}
function sa(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : sa(t);
}
function qr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const zf = Symbol.for("v-scx"), Zf = () => rt(zf);
function ed(e, t) {
  return Ko(e, null, { flush: "sync" });
}
function St(e, t, n) {
  return Ko(e, t, n);
}
function Ko(e, t, n = _e) {
  const { immediate: r, deep: s, flush: o, once: i } = n, l = $e({}, n), a = t && r || !t && o !== "post";
  let d;
  if (Nn) {
    if (o === "sync") {
      const h = Zf();
      d = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = ht, h.resume = ht, h.pause = ht, h;
    }
  }
  const c = Me;
  l.call = (h, g, y) => mt(h, c, g, y);
  let u = false;
  o === "post" ? l.scheduler = (h) => {
    Fe(h, c && c.suspense);
  } : o !== "sync" && (u = true, l.scheduler = (h, g) => {
    g ? h() : Ho(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const f = gf(e, t, l);
  return Nn && (d ? d.push(f) : a && f()), f;
}
function td(e, t, n) {
  const r = this.proxy, s = Oe(e) ? e.includes(".") ? oa(r, e) : () => r[e] : e.bind(r, r);
  let o;
  he(t) ? o = t : (o = t.handler, n = t);
  const i = vr(this), l = Ko(s, o.bind(r), n);
  return i(), l;
}
function oa(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function Fm(e, t, n = _e) {
  const r = Ut(), s = st(t), o = zt(t), i = ia(e, s), l = lf((a, d) => {
    let c, u = _e, f;
    return ed(() => {
      const h = e[s];
      Ze(c, h) && (c = h, d());
    }), { get() {
      return a(), n.get ? n.get(c) : c;
    }, set(h) {
      const g = n.set ? n.set(h) : h;
      if (!Ze(g, c) && !(u !== _e && Ze(h, u))) return;
      const y = r.vnode.props;
      y && (t in y || s in y || o in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${o}` in y) || (c = h, d()), r.emit(`update:${t}`, g), Ze(h, g) && Ze(h, u) && !Ze(g, f) && d(), u = h, f = g;
    } };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return { next() {
      return a < 2 ? { value: a++ ? i || _e : l, done: false } : { done: true };
    } };
  }, l;
}
const ia = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${zt(t)}Modifiers`];
function nd(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _e;
  let s = n;
  const o = t.startsWith("update:"), i = o && ia(r, t.slice(7));
  i && (i.trim && (s = n.map((c) => Oe(c) ? c.trim() : c)), i.number && (s = n.map(Hr)));
  let l, a = r[l = Cs(t)] || r[l = Cs(st(t))];
  !a && o && (a = r[l = Cs(zt(t))]), a && mt(a, e, 6, s);
  const d = r[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    e.emitted[l] = true, mt(d, e, 6, s);
  }
}
function la(e, t, n = false) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {}, l = false;
  if (!he(e)) {
    const a = (d) => {
      const c = la(d, t, true);
      c && (l = true, $e(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (Se(e) && r.set(e, null), null) : (ae(o) ? o.forEach((a) => i[a] = null) : $e(i, o), Se(e) && r.set(e, i), i);
}
function gs(e, t) {
  return !e || !is(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, zt(t)) || ve(e, t));
}
function Ci(e) {
  const { type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: i, attrs: l, emit: a, render: d, renderCache: c, props: u, data: f, setupState: h, ctx: g, inheritAttrs: y } = e, O = Br(e);
  let p, S;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r, x = _;
      p = Et(d.call(x, _, c, u, h, f, g)), S = l;
    } else {
      const _ = t;
      p = Et(_.length > 1 ? _(u, { attrs: l, slots: i, emit: a }) : _(u, null)), S = t.props ? l : rd(l);
    }
  } catch (_) {
    er.length = 0, mr(_, e, 1), p = De(Ke);
  }
  let w = p;
  if (S && y !== false) {
    const _ = Object.keys(S), { shapeFlag: x } = w;
    _.length && x & 7 && (o && _.some(Co) && (S = sd(S, o)), w = kt(w, S, false, true));
  }
  return n.dirs && (w = kt(w, null, false, true), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition && Ln(w, n.transition), p = w, Br(O), p;
}
const rd = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, sd = (e, t) => {
  const n = {};
  for (const r in e) (!Co(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function od(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: l, patchFlag: a } = t, d = o.emitsOptions;
  if (t.dirs || t.transition) return true;
  if (n && a >= 0) {
    if (a & 1024) return true;
    if (a & 16) return r ? Ti(r, i, d) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const f = c[u];
        if (i[f] !== r[f] && !gs(d, f)) return true;
      }
    }
  } else return (s || l) && (!l || !l.$stable) ? true : r === i ? false : r ? i ? Ti(r, i, d) : true : !!i;
  return false;
}
function Ti(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return true;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !gs(n, o)) return true;
  }
  return false;
}
function id({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
const Xr = (e) => e.__isSuspense;
function ld(e, t) {
  t && t.pendingBranch ? ae(e) ? t.effects.push(...e) : t.effects.push(e) : Tc(e);
}
const Be = Symbol.for("v-fgt"), br = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), Mr = Symbol.for("v-stc"), er = [];
let nt = null;
function ro(e = false) {
  er.push(nt = e ? null : []);
}
function cd() {
  er.pop(), nt = er[er.length - 1] || null;
}
let lr = 1;
function Ii(e, t = false) {
  lr += e, e < 0 && nt && t && (nt.hasOnce = true);
}
function ca(e) {
  return e.dynamicChildren = lr > 0 ? nt || Cn : null, cd(), lr > 0 && nt && nt.push(e), e;
}
function Mm(e, t, n, r, s, o) {
  return ca(ua(e, t, n, r, s, o, true));
}
function so(e, t, n, r, s) {
  return ca(De(e, t, n, r, s, true));
}
function Pn(e) {
  return e ? e.__v_isVNode === true : false;
}
function Xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const aa = ({ key: e }) => e ?? null, kr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || Re(e) || he(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function ua(e, t = null, n = null, r = 0, s = null, o = e === Be ? 0 : 1, i = false, l = false) {
  const a = { __v_isVNode: true, __v_skip: true, type: e, props: t, key: t && aa(t), ref: t && kr(t), scopeId: Oc, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o, patchFlag: r, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: ke };
  return l ? (Go(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= Oe(n) ? 8 : 16), lr > 0 && !i && nt && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && nt.push(a), a;
}
const De = ad;
function ad(e, t = null, n = null, r = 0, s = null, o = false) {
  if ((!e || e === jc) && (e = Ke), Pn(e)) {
    const l = kt(e, t, true);
    return n && Go(l, n), lr > 0 && !o && nt && (l.shapeFlag & 6 ? nt[nt.indexOf(e)] = l : nt.push(l)), l.patchFlag = -2, l;
  }
  if (vd(e) && (e = e.__vccOpts), t) {
    t = ud(t);
    let { class: l, style: a } = t;
    l && !Oe(l) && (t.class = Oo(l)), Se(a) && (Do(a) && !ae(a) && (a = $e({}, a)), t.style = Ro(a));
  }
  const i = Oe(e) ? 1 : Xr(e) ? 128 : Pc(e) ? 64 : Se(e) ? 4 : he(e) ? 2 : 0;
  return ua(e, t, n, r, s, i, o, true);
}
function ud(e) {
  return e ? Do(e) || Jc(e) ? $e({}, e) : e : null;
}
function kt(e, t, n = false, r = false) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: a } = e, d = t ? dd(s || {}, t) : s, c = { __v_isVNode: true, __v_skip: true, type: e.type, props: d, key: d && aa(d), ref: t && t.ref ? n && o ? ae(o) ? o.concat(kr(t)) : [o, kr(t)] : kr(t) : o, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== Be ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: a, component: e.component, suspense: e.suspense, ssContent: e.ssContent && kt(e.ssContent), ssFallback: e.ssFallback && kt(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return a && r && Ln(c, a.clone(c)), c;
}
function fd(e = " ", t = 0) {
  return De(br, null, e, t);
}
function km(e = "", t = false) {
  return t ? (ro(), so(Ke, null, e)) : De(Ke, null, e);
}
function Et(e) {
  return e == null || typeof e == "boolean" ? De(Ke) : ae(e) ? De(Be, null, e.slice()) : Pn(e) ? Yt(e) : De(br, null, String(e));
}
function Yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e);
}
function Go(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ae(t)) n = 16;
  else if (typeof t == "object") if (r & 65) {
    const s = t.default;
    s && (s._c && (s._d = false), Go(e, s()), s._c && (s._d = true));
    return;
  } else {
    n = 32;
    const s = t._;
    !s && !Jc(t) ? t._ctx = ke : s === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
  }
  else he(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [fd(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function dd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r) if (s === "class") t.class !== r.class && (t.class = Oo([t.class, r.class]));
    else if (s === "style") t.style = Ro([t.style, r.style]);
    else if (is(s)) {
      const o = t[s], i = r[s];
      i && o !== i && !(ae(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
    } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function it(e, t, n, r = null) {
  mt(e, t, 7, [n, r]);
}
const hd = qc();
let pd = 0;
function gd(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || hd, o = { uid: pd++, vnode: e, type: r, parent: t, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new rc(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(s.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Zc(r, s), emitsOptions: la(r, s), emit: null, emitted: null, propsDefaults: _e, inheritAttrs: r.inheritAttrs, ctx: _e, data: _e, props: _e, attrs: _e, slots: _e, refs: _e, setupState: _e, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = nd.bind(null, o), e.ce && e.ce(o), o;
}
let Me = null;
const Ut = () => Me || ke;
let Qr, oo;
{
  const e = as(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Qr = t("__VUE_INSTANCE_SETTERS__", (n) => Me = n), oo = t("__VUE_SSR_SETTERS__", (n) => Nn = n);
}
const vr = (e) => {
  const t = Me;
  return Qr(e), e.scope.on(), () => {
    e.scope.off(), Qr(t);
  };
}, Ri = () => {
  Me && Me.scope.off(), Qr(null);
};
function fa(e) {
  return e.vnode.shapeFlag & 4;
}
let Nn = false;
function md(e, t = false, n = false) {
  t && oo(t);
  const { props: r, children: s } = e.vnode, o = fa(e);
  Wf(e, r, o, t), Gf(e, s, n);
  const i = o ? _d(e, t) : void 0;
  return t && oo(false), i;
}
function _d(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xf);
  const { setup: r } = n;
  if (r) {
    Zt();
    const s = e.setupContext = r.length > 1 ? bd(e) : null, o = vr(e), i = gr(r, e, 0, [e.props, s]), l = Ql(i);
    if (en(), o(), (l || e.sp) && !pn(e) && Vo(e), l) {
      if (i.then(Ri, Ri), t) return i.then((a) => {
        Oi(e, a);
      }).catch((a) => {
        mr(a, e, 0);
      });
      e.asyncDep = i;
    } else Oi(e, i);
  } else da(e);
}
function Oi(e, t, n) {
  he(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Ac(t)), da(e);
}
function da(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ht);
  {
    const s = vr(e);
    Zt();
    try {
      Ff(e);
    } finally {
      en(), s();
    }
  }
}
const yd = { get(e, t) {
  return We(e, "get", ""), e[t];
} };
function bd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, yd), slots: e.slots, emit: e.emit, expose: t };
}
function ms(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ac(Uo(e.exposed)), { get(t, n) {
    if (n in t) return t[n];
    if (n in Zn) return Zn[n](e);
  }, has(t, n) {
    return n in t || n in Zn;
  } })) : e.proxy;
}
function io(e, t = true) {
  return he(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vd(e) {
  return he(e) && "__vccOpts" in e;
}
const He = (e, t) => hf(e, t, Nn);
function Er(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Se(t) && !ae(t) ? Pn(t) ? De(e, null, [t]) : De(e, t) : De(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Pn(n) && (n = [n]), De(e, t, n));
}
const Ed = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lo;
const Li = typeof window < "u" && window.trustedTypes;
if (Li) try {
  lo = Li.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
const ha = lo ? (e) => lo.createHTML(e) : (e) => e, Ad = "http://www.w3.org/2000/svg", Sd = "http://www.w3.org/1998/Math/MathML", Ot = typeof document < "u" ? document : null, Pi = Ot && Ot.createElement("template"), wd = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  const t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, r) => {
  const s = t === "svg" ? Ot.createElementNS(Ad, e) : t === "mathml" ? Ot.createElementNS(Sd, e) : n ? Ot.createElement(e, { is: n }) : Ot.createElement(e);
  return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
}, createText: (e) => Ot.createTextNode(e), createComment: (e) => Ot.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => Ot.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, r, s, o) {
  const i = n ? n.previousSibling : t.lastChild;
  if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(true), n), !(s === o || !(s = s.nextSibling)); ) ;
  else {
    Pi.innerHTML = ha(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
    const l = Pi.content;
    if (r === "svg" || r === "mathml") {
      const a = l.firstChild;
      for (; a.firstChild; ) l.appendChild(a.firstChild);
      l.removeChild(a);
    }
    t.insertBefore(l, n);
  }
  return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Vt = "transition", jn = "animation", cr = Symbol("_vtc"), pa = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Cd = $e({}, Fc, pa), Td = (e) => (e.displayName = "Transition", e.props = Cd, e), Dm = Td((e, { slots: t }) => Er(Af, Id(e), t)), an = (e, t = []) => {
  ae(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ni = (e) => e ? ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
function Id(e) {
  const t = {};
  for (const R in e) R in pa || (t[R] = e[R]);
  if (e.css === false) return t;
  const { name: n = "v", type: r, duration: s, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: a = o, appearActiveClass: d = i, appearToClass: c = l, leaveFromClass: u = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, g = Rd(s), y = g && g[0], O = g && g[1], { onBeforeEnter: p, onEnter: S, onEnterCancelled: w, onLeave: _, onLeaveCancelled: x, onBeforeAppear: E = p, onAppear: L = S, onAppearCancelled: b = w } = t, m = (R, U, k, W) => {
    R._enterCancelled = W, un(R, U ? c : l), un(R, U ? d : i), k && k();
  }, P = (R, U) => {
    R._isLeaving = false, un(R, u), un(R, h), un(R, f), U && U();
  }, F = (R) => (U, k) => {
    const W = R ? L : S, T = () => m(U, R, k);
    an(W, [U, T]), xi(() => {
      un(U, R ? a : o), Tt(U, R ? c : l), Ni(W) || Fi(U, r, y, T);
    });
  };
  return $e(t, { onBeforeEnter(R) {
    an(p, [R]), Tt(R, o), Tt(R, i);
  }, onBeforeAppear(R) {
    an(E, [R]), Tt(R, a), Tt(R, d);
  }, onEnter: F(false), onAppear: F(true), onLeave(R, U) {
    R._isLeaving = true;
    const k = () => P(R, U);
    Tt(R, u), R._enterCancelled ? (Tt(R, f), Di()) : (Di(), Tt(R, f)), xi(() => {
      R._isLeaving && (un(R, u), Tt(R, h), Ni(_) || Fi(R, r, O, k));
    }), an(_, [R, k]);
  }, onEnterCancelled(R) {
    m(R, false, void 0, true), an(w, [R]);
  }, onAppearCancelled(R) {
    m(R, true, void 0, true), an(b, [R]);
  }, onLeaveCancelled(R) {
    P(R), an(x, [R]);
  } });
}
function Rd(e) {
  if (e == null) return null;
  if (Se(e)) return [Ms(e.enter), Ms(e.leave)];
  {
    const t = Ms(e);
    return [t, t];
  }
}
function Ms(e) {
  return Ru(e);
}
function Tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[cr] || (e[cr] = /* @__PURE__ */ new Set())).add(t);
}
function un(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[cr];
  n && (n.delete(t), n.size || (e[cr] = void 0));
}
function xi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Od = 0;
function Fi(e, t, n, r) {
  const s = e._endId = ++Od, o = () => {
    s === e._endId && r();
  };
  if (n != null) return setTimeout(o, n);
  const { type: i, timeout: l, propCount: a } = Ld(e, t);
  if (!i) return r();
  const d = i + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, f), o();
  }, f = (h) => {
    h.target === e && ++c >= a && u();
  };
  setTimeout(() => {
    c < a && u();
  }, l + 1), e.addEventListener(d, f);
}
function Ld(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), s = r(`${Vt}Delay`), o = r(`${Vt}Duration`), i = Mi(s, o), l = r(`${jn}Delay`), a = r(`${jn}Duration`), d = Mi(l, a);
  let c = null, u = 0, f = 0;
  t === Vt ? i > 0 && (c = Vt, u = i, f = o.length) : t === jn ? d > 0 && (c = jn, u = d, f = a.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? Vt : jn : null, f = c ? c === Vt ? o.length : a.length : 0);
  const h = c === Vt && /\b(transform|all)(,|$)/.test(r(`${Vt}Property`).toString());
  return { type: c, timeout: u, propCount: f, hasTransform: h };
}
function Mi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => ki(n) + ki(e[r])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Di() {
  return document.body.offsetHeight;
}
function Pd(e, t, n) {
  const r = e[cr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Jr = Symbol("_vod"), ga = Symbol("_vsh"), Um = { beforeMount(e, { value: t }, { transition: n }) {
  e[Jr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bn(e, t);
}, mounted(e, { value: t }, { transition: n }) {
  n && t && n.enter(e);
}, updated(e, { value: t, oldValue: n }, { transition: r }) {
  !t != !n && (r ? t ? (r.beforeEnter(e), Bn(e, true), r.enter(e)) : r.leave(e, () => {
    Bn(e, false);
  }) : Bn(e, t));
}, beforeUnmount(e, { value: t }) {
  Bn(e, t);
} };
function Bn(e, t) {
  e.style.display = t ? e[Jr] : "none", e[ga] = !t;
}
const ma = Symbol("");
function $m(e) {
  const t = Ut();
  if (!t) return;
  const n = t.ut = (s = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((o) => zr(o, s));
  }, r = () => {
    const s = e(t.proxy);
    t.ce ? zr(t.ce, s) : co(t.subTree, s), n(s);
  };
  Hc(() => {
    Tc(r);
  }), yr(() => {
    St(r, ht, { flush: "post" });
    const s = new MutationObserver(r);
    s.observe(t.subTree.el.parentNode, { childList: true }), ps(() => s.disconnect());
  });
}
function co(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      co(n.activeBranch, t);
    });
  }
  for (; e.component; ) e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el) zr(e.el, t);
  else if (e.type === Be) e.children.forEach((n) => co(n, t));
  else if (e.type === Mr) {
    let { el: n, anchor: r } = e;
    for (; n && (zr(n, t), n !== r); ) n = n.nextSibling;
  }
}
function zr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const s in t) n.setProperty(`--${s}`, t[s]), r += `--${s}: ${t[s]};`;
    n[ma] = r;
  }
}
const Nd = /(^|;)\s*display\s*:/;
function xd(e, t, n) {
  const r = e.style, s = Oe(n);
  let o = false;
  if (n && !s) {
    if (t) if (Oe(t)) for (const i of t.split(";")) {
      const l = i.slice(0, i.indexOf(":")).trim();
      n[l] == null && Dr(r, l, "");
    }
    else for (const i in t) n[i] == null && Dr(r, i, "");
    for (const i in n) i === "display" && (o = true), Dr(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[ma];
      i && (n += ";" + i), r.cssText = n, o = Nd.test(n);
    }
  } else t && e.removeAttribute("style");
  Jr in e && (e[Jr] = o ? r.display : "", e[ga] && (r.display = "none"));
}
const Ui = /\s*!important$/;
function Dr(e, t, n) {
  if (ae(n)) n.forEach((r) => Dr(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const r = Fd(e, t);
    Ui.test(n) ? e.setProperty(zt(r), n.replace(Ui, ""), "important") : e[r] = n;
  }
}
const $i = ["Webkit", "Moz", "ms"], ks = {};
function Fd(e, t) {
  const n = ks[t];
  if (n) return n;
  let r = st(t);
  if (r !== "filter" && r in e) return ks[t] = r;
  r = cs(r);
  for (let s = 0; s < $i.length; s++) {
    const o = $i[s] + r;
    if (o in e) return ks[t] = o;
  }
  return t;
}
const Hi = "http://www.w3.org/1999/xlink";
function Vi(e, t, n, r, s, o = Fu(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hi, t.slice(6, t.length)) : e.setAttributeNS(Hi, t, n) : n == null || o && !ec(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : gt(n) ? String(n) : n);
}
function Wi(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ha(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = false;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ec(n) : n == null && l === "string" ? (n = "", i = true) : l === "number" && (n = 0, i = true);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function Nt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Md(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ji = Symbol("_vei");
function kd(e, t, n, r, s = null) {
  const o = e[ji] || (e[ji] = {}), i = o[t];
  if (r && i) i.value = r;
  else {
    const [l, a] = Dd(t);
    if (r) {
      const d = o[t] = Hd(r, s);
      Nt(e, l, d, a);
    } else i && (Md(e, l, i, a), o[t] = void 0);
  }
}
const Bi = /(?:Once|Passive|Capture)$/;
function Dd(e) {
  let t;
  if (Bi.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Bi); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
  }
  return [e[2] === ":" ? e.slice(3) : zt(e.slice(2)), t];
}
let Ds = 0;
const Ud = Promise.resolve(), $d = () => Ds || (Ud.then(() => Ds = 0), Ds = Date.now());
function Hd(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    mt(Vd(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = $d(), n;
}
function Vd(e, t) {
  if (ae(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = true;
    }, t.map((r) => (s) => !s._stopped && r && r(s));
  } else return t;
}
const Ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wd = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? Pd(e, r, i) : t === "style" ? xd(e, n, r) : is(t) ? Co(t) || kd(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : jd(e, t, r, i)) ? (Wi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vi(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? Wi(e, st(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Vi(e, t, r, i));
};
function jd(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ki(t) && he(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
  }
  return Ki(t) && Oe(n) ? false : t in e;
}
const Jt = (e) => {
  const t = e.props["onUpdate:modelValue"] || false;
  return ae(t) ? (n) => In(t, n) : t;
};
function Bd(e) {
  e.target.composing = true;
}
function Gi(e) {
  const t = e.target;
  t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
}
const at = Symbol("_assign"), Yi = { created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
  e[at] = Jt(s);
  const o = r || s.props && s.props.type === "number";
  Nt(e, t ? "change" : "input", (i) => {
    if (i.target.composing) return;
    let l = e.value;
    n && (l = l.trim()), o && (l = Hr(l)), e[at](l);
  }), n && Nt(e, "change", () => {
    e.value = e.value.trim();
  }), t || (Nt(e, "compositionstart", Bd), Nt(e, "compositionend", Gi), Nt(e, "change", Gi));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
  if (e[at] = Jt(i), e.composing) return;
  const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, a = t ?? "";
  l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === a) || (e.value = a));
} }, Kd = { deep: true, created(e, t, n) {
  e[at] = Jt(n), Nt(e, "change", () => {
    const r = e._modelValue, s = xn(e), o = e.checked, i = e[at];
    if (ae(r)) {
      const l = Lo(r, s), a = l !== -1;
      if (o && !a) i(r.concat(s));
      else if (!o && a) {
        const d = [...r];
        d.splice(l, 1), i(d);
      }
    } else if (Dn(r)) {
      const l = new Set(r);
      o ? l.add(s) : l.delete(s), i(l);
    } else i(_a(e, o));
  });
}, mounted: qi, beforeUpdate(e, t, n) {
  e[at] = Jt(n), qi(e, t, n);
} };
function qi(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let s;
  if (ae(t)) s = Lo(t, r.props.value) > -1;
  else if (Dn(t)) s = t.has(r.props.value);
  else {
    if (t === n) return;
    s = mn(t, _a(e, true));
  }
  e.checked !== s && (e.checked = s);
}
const Gd = { created(e, { value: t }, n) {
  e.checked = mn(t, n.props.value), e[at] = Jt(n), Nt(e, "change", () => {
    e[at](xn(e));
  });
}, beforeUpdate(e, { value: t, oldValue: n }, r) {
  e[at] = Jt(r), t !== n && (e.checked = mn(t, r.props.value));
} }, Yd = { deep: true, created(e, { value: t, modifiers: { number: n } }, r) {
  const s = Dn(t);
  Nt(e, "change", () => {
    const o = Array.prototype.filter.call(e.options, (i) => i.selected).map((i) => n ? Hr(xn(i)) : xn(i));
    e[at](e.multiple ? s ? new Set(o) : o : o[0]), e._assigning = true, ds(() => {
      e._assigning = false;
    });
  }), e[at] = Jt(r);
}, mounted(e, { value: t }) {
  Xi(e, t);
}, beforeUpdate(e, t, n) {
  e[at] = Jt(n);
}, updated(e, { value: t }) {
  e._assigning || Xi(e, t);
} };
function Xi(e, t) {
  const n = e.multiple, r = ae(t);
  if (!(n && !r && !Dn(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const i = e.options[s], l = xn(i);
      if (n) if (r) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(l)) : i.selected = Lo(t, l) > -1;
      } else i.selected = t.has(l);
      else if (mn(xn(i), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function xn(e) {
  return "_value" in e ? e._value : e.value;
}
function _a(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Hm = { created(e, t, n) {
  Or(e, t, n, null, "created");
}, mounted(e, t, n) {
  Or(e, t, n, null, "mounted");
}, beforeUpdate(e, t, n, r) {
  Or(e, t, n, r, "beforeUpdate");
}, updated(e, t, n, r) {
  Or(e, t, n, r, "updated");
} };
function qd(e, t) {
  switch (e) {
    case "SELECT":
      return Yd;
    case "TEXTAREA":
      return Yi;
    default:
      switch (t) {
        case "checkbox":
          return Kd;
        case "radio":
          return Gd;
        default:
          return Yi;
      }
  }
}
function Or(e, t, n, r, s) {
  const i = qd(e.tagName, n.props && n.props.type)[s];
  i && i(e, t, n, r);
}
const Xd = ["ctrl", "shift", "alt", "meta"], Qd = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => Xd.some((n) => e[`${n}Key`] && !t.includes(n)) }, Vm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const l = Qd[t[i]];
      if (l && l(s, t)) return;
    }
    return e(s, ...o);
  });
}, Jd = $e({ patchProp: Wd }, wd);
let Qi;
function ya() {
  return Qi || (Qi = qf(Jd));
}
const Wm = (...e) => {
  ya().render(...e);
}, jm = (...e) => {
  const t = ya().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = Zd(r);
    if (!s) return;
    const o = t._component;
    !he(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, false, zd(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function zd(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zd(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
/*!
* pinia v3.0.2
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
let ba;
const _s = (e) => ba = e, va = Symbol();
function ao(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var tr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(tr || (tr = {}));
function Bm() {
  const e = Po(true), t = e.run(() => Qt({}));
  let n = [], r = [];
  const s = Uo({ install(o) {
    _s(s), s._a = o, o.provide(va, s), o.config.globalProperties.$pinia = s, r.forEach((i) => n.push(i)), r = [];
  }, use(o) {
    return this._a ? n.push(o) : r.push(o), this;
  }, _p: n, _a: null, _e: e, _s: /* @__PURE__ */ new Map(), state: t });
  return s;
}
const Ea = () => {
};
function Ji(e, t, n, r = Ea) {
  e.push(t);
  const s = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && sc() && Du(s), s;
}
function vn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const eh = (e) => e(), zi = Symbol(), Us = Symbol();
function uo(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n], s = e[n];
    ao(s) && ao(r) && e.hasOwnProperty(n) && !Re(r) && !Mt(r) ? e[n] = uo(s, r) : e[n] = r;
  }
  return e;
}
const th = Symbol();
function nh(e) {
  return !ao(e) || !Object.prototype.hasOwnProperty.call(e, th);
}
const { assign: Bt } = Object;
function rh(e) {
  return !!(Re(e) && e.effect);
}
function sh(e, t, n, r) {
  const { state: s, actions: o, getters: i } = t, l = n.state.value[e];
  let a;
  function d() {
    l || (n.state.value[e] = s ? s() : {});
    const c = cf(n.state.value[e]);
    return Bt(c, o, Object.keys(i || {}).reduce((u, f) => (u[f] = Uo(He(() => {
      _s(n);
      const h = n._s.get(e);
      return i[f].call(h, h);
    })), u), {}));
  }
  return a = Aa(e, d, t, n, r, true), a;
}
function Aa(e, t, n = {}, r, s, o) {
  let i;
  const l = Bt({ actions: {} }, n), a = { deep: true };
  let d, c, u = [], f = [], h;
  const g = r.state.value[e];
  !o && !g && (r.state.value[e] = {}), Qt({});
  let y;
  function O(b) {
    let m;
    d = c = false, typeof b == "function" ? (b(r.state.value[e]), m = { type: tr.patchFunction, storeId: e, events: h }) : (uo(r.state.value[e], b), m = { type: tr.patchObject, payload: b, storeId: e, events: h });
    const P = y = Symbol();
    ds().then(() => {
      y === P && (d = true);
    }), c = true, vn(u, m, r.state.value[e]);
  }
  const p = o ? function() {
    const { state: m } = n, P = m ? m() : {};
    this.$patch((F) => {
      Bt(F, P);
    });
  } : Ea;
  function S() {
    i.stop(), u = [], f = [], r._s.delete(e);
  }
  const w = (b, m = "") => {
    if (zi in b) return b[Us] = m, b;
    const P = function() {
      _s(r);
      const F = Array.from(arguments), R = [], U = [];
      function k(v) {
        R.push(v);
      }
      function W(v) {
        U.push(v);
      }
      vn(f, { args: F, name: P[Us], store: x, after: k, onError: W });
      let T;
      try {
        T = b.apply(this && this.$id === e ? this : x, F);
      } catch (v) {
        throw vn(U, v), v;
      }
      return T instanceof Promise ? T.then((v) => (vn(R, v), v)).catch((v) => (vn(U, v), Promise.reject(v))) : (vn(R, T), T);
    };
    return P[zi] = true, P[Us] = m, P;
  }, _ = { _p: r, $id: e, $onAction: Ji.bind(null, f), $patch: O, $reset: p, $subscribe(b, m = {}) {
    const P = Ji(u, b, m.detached, () => F()), F = i.run(() => St(() => r.state.value[e], (R) => {
      (m.flush === "sync" ? c : d) && b({ storeId: e, type: tr.direct, events: h }, R);
    }, Bt({}, a, m)));
    return P;
  }, $dispose: S }, x = pr(_);
  r._s.set(e, x);
  const L = (r._a && r._a.runWithContext || eh)(() => r._e.run(() => (i = Po()).run(() => t({ action: w }))));
  for (const b in L) {
    const m = L[b];
    if (Re(m) && !rh(m) || Mt(m)) o || (g && nh(m) && (Re(m) ? m.value = g[b] : uo(m, g[b])), r.state.value[e][b] = m);
    else if (typeof m == "function") {
      const P = w(m, b);
      L[b] = P, l.actions[b] = m;
    }
  }
  return Bt(x, L), Bt(ge(x), L), Object.defineProperty(x, "$state", { get: () => r.state.value[e], set: (b) => {
    O((m) => {
      Bt(m, b);
    });
  } }), r._p.forEach((b) => {
    Bt(x, i.run(() => b({ store: x, app: r._a, pinia: r, options: l })));
  }), g && o && n.hydrate && n.hydrate(x.$state, g), d = true, c = true, x;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Km(e, t, n) {
  let r;
  const s = typeof t == "function";
  r = s ? n : t;
  function o(i, l) {
    const a = Vf();
    return i = i || (a ? rt(va, null) : null), i && _s(i), i = ba, i._s.has(e) || (s ? Aa(e, t, r, i) : sh(e, r, i)), i._s.get(e);
  }
  return o.$id = e, o;
}
function Gm(e) {
  const t = ge(e), n = {};
  for (const r in t) {
    const s = t[r];
    s.effect ? n[r] = He({ get: () => e[r], set(o) {
      e[r] = o;
    } }) : (Re(s) || Mt(s)) && (n[r] = ff(e, r));
  }
  return n;
}
const oh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, ih = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, lh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ch(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    ah(e);
    return;
  }
  return t;
}
function ah(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function uh(e, t = {}) {
  if (typeof e != "string") return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
  const n = e.trim();
  if (n.length <= 9) switch (n.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!lh.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (oh.test(e) || ih.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, ch);
    }
    return JSON.parse(e);
  } catch (r) {
    if (t.strict) throw r;
    return e;
  }
}
function fh(e, t) {
  if (e == null) return;
  let n = e;
  for (let r = 0; r < t.length; r++) {
    if (n == null || n[t[r]] == null) return;
    n = n[t[r]];
  }
  return n;
}
function Yo(e, t, n) {
  if (n.length === 0) return t;
  const r = n[0];
  return n.length > 1 && (t = Yo(typeof e != "object" || e === null || !Object.prototype.hasOwnProperty.call(e, r) ? Number.isInteger(Number(n[1])) ? [] : {} : e[r], t, Array.prototype.slice.call(n, 1))), Number.isInteger(Number(r)) && Array.isArray(e) ? e.slice()[r] : Object.assign({}, e, { [r]: t });
}
function Sa(e, t) {
  if (e == null || t.length === 0) return e;
  if (t.length === 1) {
    if (e == null) return e;
    if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.slice.call(e, 0).splice(t[0], 1);
    const n = {};
    for (const r in e) n[r] = e[r];
    return delete n[t[0]], n;
  }
  if (e[t[0]] == null) {
    if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.concat.call([], e);
    const n = {};
    for (const r in e) n[r] = e[r];
    return n;
  }
  return Yo(e, Sa(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]]);
}
function wa(e, t) {
  return t.map((n) => n.split(".")).map((n) => [n, fh(e, n)]).filter((n) => n[1] !== void 0).reduce((n, r) => Yo(n, r[1], r[0]), {});
}
function Ca(e, t) {
  return t.map((n) => n.split(".")).reduce((n, r) => Sa(n, r), e);
}
function Zi(e, { storage: t, serializer: n, key: r, debug: s, pick: o, omit: i, beforeHydrate: l, afterHydrate: a }, d, c = true) {
  try {
    c && (l == null ? void 0 : l(d));
    const u = t.getItem(r);
    if (u) {
      const f = n.deserialize(u), h = o ? wa(f, o) : f, g = i ? Ca(h, i) : h;
      e.$patch(g);
    }
    c && (a == null ? void 0 : a(d));
  } catch (u) {
    s && console.error("[pinia-plugin-persistedstate]", u);
  }
}
function el(e, { storage: t, serializer: n, key: r, debug: s, pick: o, omit: i }) {
  try {
    const l = o ? wa(e, o) : e, a = i ? Ca(l, i) : l, d = n.serialize(a);
    t.setItem(r, d);
  } catch (l) {
    s && console.error("[pinia-plugin-persistedstate]", l);
  }
}
function dh(e, t, n) {
  const { pinia: r, store: s, options: { persist: o = n } } = e;
  if (!o) return;
  if (!(s.$id in r.state.value)) {
    const a = r._s.get(s.$id.replace("__hot:", ""));
    a && Promise.resolve().then(() => a.$persist());
    return;
  }
  const l = (Array.isArray(o) ? o : o === true ? [{}] : [o]).map(t);
  s.$hydrate = ({ runHooks: a = true } = {}) => {
    l.forEach((d) => {
      Zi(s, d, e, a);
    });
  }, s.$persist = () => {
    l.forEach((a) => {
      el(s.$state, a);
    });
  }, l.forEach((a) => {
    Zi(s, a, e), s.$subscribe((d, c) => el(c, a), { detached: true });
  });
}
function hh(e = {}) {
  return function(t) {
    dh(t, (n) => ({ key: (e.key ? e.key : (r) => r)(n.key ?? t.store.$id), debug: n.debug ?? e.debug ?? false, serializer: n.serializer ?? e.serializer ?? { serialize: (r) => JSON.stringify(r), deserialize: (r) => uh(r) }, storage: n.storage ?? e.storage ?? window.localStorage, beforeHydrate: n.beforeHydrate, afterHydrate: n.afterHydrate, pick: n.pick, omit: n.omit }), e.auto ?? false);
  };
}
var Ym = hh();
/*!
* vue-router v4.5.0
* (c) 2024 Eduardo San Martin Morote
* @license MIT
*/
const An = typeof document < "u";
function Ta(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ph(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ta(e.default);
}
const be = Object.assign;
function $s(e, t) {
  const n = {};
  for (const r in t) {
    const s = t[r];
    n[r] = _t(s) ? s.map(e) : e(s);
  }
  return n;
}
const nr = () => {
}, _t = Array.isArray, Ia = /#/g, gh = /&/g, mh = /\//g, _h = /=/g, yh = /\?/g, Ra = /\+/g, bh = /%5B/g, vh = /%5D/g, Oa = /%5E/g, Eh = /%60/g, La = /%7B/g, Ah = /%7C/g, Pa = /%7D/g, Sh = /%20/g;
function qo(e) {
  return encodeURI("" + e).replace(Ah, "|").replace(bh, "[").replace(vh, "]");
}
function wh(e) {
  return qo(e).replace(La, "{").replace(Pa, "}").replace(Oa, "^");
}
function fo(e) {
  return qo(e).replace(Ra, "%2B").replace(Sh, "+").replace(Ia, "%23").replace(gh, "%26").replace(Eh, "`").replace(La, "{").replace(Pa, "}").replace(Oa, "^");
}
function Ch(e) {
  return fo(e).replace(_h, "%3D");
}
function Th(e) {
  return qo(e).replace(Ia, "%23").replace(yh, "%3F");
}
function Ih(e) {
  return e == null ? "" : Th(e).replace(mh, "%2F");
}
function ar(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Rh = /\/$/, Oh = (e) => e.replace(Rh, "");
function Hs(e, t, n = "/") {
  let r, s = {}, o = "", i = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (r = t.slice(0, a), o = t.slice(a + 1, l > -1 ? l : t.length), s = e(o)), l > -1 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = xh(r ?? t, n), { fullPath: r + (o && "?") + o + i, path: r, query: s, hash: ar(i) };
}
function Lh(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function tl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ph(e, t, n) {
  const r = t.matched.length - 1, s = n.matched.length - 1;
  return r > -1 && r === s && Fn(t.matched[r], n.matched[s]) && Na(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Fn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Na(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (!Nh(e[n], t[n])) return false;
  return true;
}
function Nh(e, t) {
  return _t(e) ? nl(e, t) : _t(t) ? nl(t, e) : e === t;
}
function nl(e, t) {
  return _t(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function xh(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
  (s === ".." || s === ".") && r.push("");
  let o = n.length - 1, i, l;
  for (i = 0; i < r.length; i++) if (l = r[i], l !== ".") if (l === "..") o > 1 && o--;
  else break;
  return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
}
const Wt = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var ur;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ur || (ur = {}));
var rr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(rr || (rr = {}));
function Fh(e) {
  if (!e) if (An) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Oh(e);
}
const Mh = /^[^#]+#/;
function kh(e, t) {
  return e.replace(Mh, "#") + t;
}
function Dh(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0) };
}
const ys = () => ({ left: window.scrollX, top: window.scrollY });
function Uh(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) return;
    t = Dh(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function rl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ho = /* @__PURE__ */ new Map();
function $h(e, t) {
  ho.set(e, t);
}
function Hh(e) {
  const t = ho.get(e);
  return ho.delete(e), t;
}
let Vh = () => location.protocol + "//" + location.host;
function xa(e, t) {
  const { pathname: n, search: r, hash: s } = t, o = e.indexOf("#");
  if (o > -1) {
    let l = s.includes(e.slice(o)) ? e.slice(o).length : 1, a = s.slice(l);
    return a[0] !== "/" && (a = "/" + a), tl(a, "");
  }
  return tl(n, e) + r + s;
}
function Wh(e, t, n, r) {
  let s = [], o = [], i = null;
  const l = ({ state: f }) => {
    const h = xa(e, location), g = n.value, y = t.value;
    let O = 0;
    if (f) {
      if (n.value = h, t.value = f, i && i === g) {
        i = null;
        return;
      }
      O = y ? f.position - y.position : 0;
    } else r(h);
    s.forEach((p) => {
      p(n.value, g, { delta: O, type: ur.pop, direction: O ? O > 0 ? rr.forward : rr.back : rr.unknown });
    });
  };
  function a() {
    i = n.value;
  }
  function d(f) {
    s.push(f);
    const h = () => {
      const g = s.indexOf(f);
      g > -1 && s.splice(g, 1);
    };
    return o.push(h), h;
  }
  function c() {
    const { history: f } = window;
    f.state && f.replaceState(be({}, f.state, { scroll: ys() }), "");
  }
  function u() {
    for (const f of o) f();
    o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", c, { passive: true }), { pauseListeners: a, listen: d, destroy: u };
}
function sl(e, t, n, r = false, s = false) {
  return { back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: s ? ys() : null };
}
function jh(e) {
  const { history: t, location: n } = window, r = { value: xa(e, n) }, s = { value: t.state };
  s.value || o(r.value, { back: null, current: r.value, forward: null, position: t.length - 1, replaced: true, scroll: null }, true);
  function o(a, d, c) {
    const u = e.indexOf("#"), f = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + a : Vh() + e + a;
    try {
      t[c ? "replaceState" : "pushState"](d, "", f), s.value = d;
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](f);
    }
  }
  function i(a, d) {
    const c = be({}, t.state, sl(s.value.back, a, s.value.forward, true), d, { position: s.value.position });
    o(a, c, true), r.value = a;
  }
  function l(a, d) {
    const c = be({}, s.value, t.state, { forward: a, scroll: ys() });
    o(c.current, c, true);
    const u = be({}, sl(r.value, a, null), { position: c.position + 1 }, d);
    o(a, u, false), r.value = a;
  }
  return { location: r, state: s, push: l, replace: i };
}
function qm(e) {
  e = Fh(e);
  const t = jh(e), n = Wh(e, t.state, t.location, t.replace);
  function r(o, i = true) {
    i || n.pauseListeners(), history.go(o);
  }
  const s = be({ location: "", base: e, go: r, createHref: kh.bind(null, e) }, t, n);
  return Object.defineProperty(s, "location", { enumerable: true, get: () => t.location.value }), Object.defineProperty(s, "state", { enumerable: true, get: () => t.state.value }), s;
}
function Bh(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Fa(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ma = Symbol("");
var ol;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ol || (ol = {}));
function Mn(e, t) {
  return be(new Error(), { type: e, [Ma]: true }, t);
}
function It(e, t) {
  return e instanceof Error && Ma in e && (t == null || !!(e.type & t));
}
const il = "[^/]+?", Kh = { sensitive: false, strict: false, start: true, end: true }, Gh = /[.+*?^${}()[\]/\\]/g;
function Yh(e, t) {
  const n = be({}, Kh, t), r = [];
  let s = n.start ? "^" : "";
  const o = [];
  for (const d of e) {
    const c = d.length ? [] : [90];
    n.strict && !d.length && (s += "/");
    for (let u = 0; u < d.length; u++) {
      const f = d[u];
      let h = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0) u || (s += "/"), s += f.value.replace(Gh, "\\$&"), h += 40;
      else if (f.type === 1) {
        const { value: g, repeatable: y, optional: O, regexp: p } = f;
        o.push({ name: g, repeatable: y, optional: O });
        const S = p || il;
        if (S !== il) {
          h += 10;
          try {
            new RegExp(`(${S})`);
          } catch (_) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${S}): ` + _.message);
          }
        }
        let w = y ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`;
        u || (w = O && d.length < 2 ? `(?:/${w})` : "/" + w), O && (w += "?"), s += w, h += 20, O && (h += -8), y && (h += -20), S === ".*" && (h += -50);
      }
      c.push(h);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(d) {
    const c = d.match(i), u = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const h = c[f] || "", g = o[f - 1];
      u[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return u;
  }
  function a(d) {
    let c = "", u = false;
    for (const f of e) {
      (!u || !c.endsWith("/")) && (c += "/"), u = false;
      for (const h of f) if (h.type === 0) c += h.value;
      else if (h.type === 1) {
        const { value: g, repeatable: y, optional: O } = h, p = g in d ? d[g] : "";
        if (_t(p) && !y) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const S = _t(p) ? p.join("/") : p;
        if (!S) if (O) f.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${g}"`);
        c += S;
      }
    }
    return c || "/";
  }
  return { re: i, score: r, keys: o, parse: l, stringify: a };
}
function qh(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function ka(e, t) {
  let n = 0;
  const r = e.score, s = t.score;
  for (; n < r.length && n < s.length; ) {
    const o = qh(r[n], s[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ll(r)) return 1;
    if (ll(s)) return -1;
  }
  return s.length - r.length;
}
function ll(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Xh = { type: 0, value: "" }, Qh = /[a-zA-Z0-9_]/;
function Jh(e) {
  if (!e) return [[]];
  if (e === "/") return [[Xh]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${n})/"${d}": ${h}`);
  }
  let n = 0, r = n;
  const s = [];
  let o;
  function i() {
    o && s.push(o), o = [];
  }
  let l = 0, a, d = "", c = "";
  function u() {
    d && (n === 0 ? o.push({ type: 0, value: d }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), o.push({ type: 1, value: d, regexp: c, repeatable: a === "*" || a === "+", optional: a === "*" || a === "?" })) : t("Invalid state to consume buffer"), d = "");
  }
  function f() {
    d += a;
  }
  for (; l < e.length; ) {
    if (a = e[l++], a === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (d && u(), i()) : a === ":" ? (u(), n = 1) : f();
        break;
      case 4:
        f(), n = r;
        break;
      case 1:
        a === "(" ? n = 2 : Qh.test(a) ? f() : (u(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = 3 : c += a;
        break;
      case 3:
        u(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), i(), s;
}
function zh(e, t, n) {
  const r = Yh(Jh(e.path), n), s = be(r, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Zh(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = fl({ strict: false, end: true, sensitive: false }, t);
  function s(u) {
    return r.get(u);
  }
  function o(u, f, h) {
    const g = !h, y = al(u);
    y.aliasOf = h && h.record;
    const O = fl(t, u), p = [y];
    if ("alias" in u) {
      const _ = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const x of _) p.push(al(be({}, y, { components: h ? h.record.components : y.components, path: x, aliasOf: h ? h.record : y })));
    }
    let S, w;
    for (const _ of p) {
      const { path: x } = _;
      if (f && x[0] !== "/") {
        const E = f.record.path, L = E[E.length - 1] === "/" ? "" : "/";
        _.path = f.record.path + (x && L + x);
      }
      if (S = zh(_, f, O), h ? h.alias.push(S) : (w = w || S, w !== S && w.alias.push(S), g && u.name && !ul(S) && i(u.name)), Da(S) && a(S), y.children) {
        const E = y.children;
        for (let L = 0; L < E.length; L++) o(E[L], S, h && h.children[L]);
      }
      h = h || S;
    }
    return w ? () => {
      i(w);
    } : nr;
  }
  function i(u) {
    if (Fa(u)) {
      const f = r.get(u);
      f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(u);
      f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function a(u) {
    const f = np(u, n);
    n.splice(f, 0, u), u.record.name && !ul(u) && r.set(u.record.name, u);
  }
  function d(u, f) {
    let h, g = {}, y, O;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw Mn(1, { location: u });
      O = h.record.name, g = be(cl(f.params, h.keys.filter((w) => !w.optional).concat(h.parent ? h.parent.keys.filter((w) => w.optional) : []).map((w) => w.name)), u.params && cl(u.params, h.keys.map((w) => w.name))), y = h.stringify(g);
    } else if (u.path != null) y = u.path, h = n.find((w) => w.re.test(y)), h && (g = h.parse(y), O = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : n.find((w) => w.re.test(f.path)), !h) throw Mn(1, { location: u, currentLocation: f });
      O = h.record.name, g = be({}, f.params, u.params), y = h.stringify(g);
    }
    const p = [];
    let S = h;
    for (; S; ) p.unshift(S.record), S = S.parent;
    return { name: O, path: y, params: g, matched: p, meta: tp(p) };
  }
  e.forEach((u) => o(u));
  function c() {
    n.length = 0, r.clear();
  }
  return { addRoute: o, resolve: d, removeRoute: i, clearRoutes: c, getRoutes: l, getRecordMatcher: s };
}
function cl(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function al(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: ep(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function ep(e) {
  const t = {}, n = e.props || false;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function ul(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function tp(e) {
  return e.reduce((t, n) => be(t, n.meta), {});
}
function fl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function np(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const o = n + r >> 1;
    ka(e, t[o]) < 0 ? r = o : n = o + 1;
  }
  const s = rp(e);
  return s && (r = t.lastIndexOf(s, r - 1)), r;
}
function rp(e) {
  let t = e;
  for (; t = t.parent; ) if (Da(t) && ka(e, t) === 0) return t;
}
function Da({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function sp(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(Ra, " "), i = o.indexOf("="), l = ar(i < 0 ? o : o.slice(0, i)), a = i < 0 ? null : ar(o.slice(i + 1));
    if (l in t) {
      let d = t[l];
      _t(d) || (d = t[l] = [d]), d.push(a);
    } else t[l] = a;
  }
  return t;
}
function dl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Ch(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (_t(r) ? r.map((o) => o && fo(o)) : [r && fo(r)]).forEach((o) => {
      o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
    });
  }
  return t;
}
function op(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = _t(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
  }
  return t;
}
const ip = Symbol(""), hl = Symbol(""), bs = Symbol(""), Xo = Symbol(""), po = Symbol("");
function Kn() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const s = e.indexOf(r);
      s > -1 && e.splice(s, 1);
    };
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function qt(e, t, n, r, s, o = (i) => i()) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
  return () => new Promise((l, a) => {
    const d = (f) => {
      f === false ? a(Mn(4, { from: n, to: t })) : f instanceof Error ? a(f) : Bh(f) ? a(Mn(2, { from: t, to: f })) : (i && r.enterCallbacks[s] === i && typeof f == "function" && i.push(f), l());
    }, c = o(() => e.call(r && r.instances[s], t, n, d));
    let u = Promise.resolve(c);
    e.length < 3 && (u = u.then(d)), u.catch((f) => a(f));
  });
}
function Vs(e, t, n, r, s = (o) => o()) {
  const o = [];
  for (const i of e) for (const l in i.components) {
    let a = i.components[l];
    if (!(t !== "beforeRouteEnter" && !i.instances[l])) if (Ta(a)) {
      const c = (a.__vccOpts || a)[t];
      c && o.push(qt(c, n, r, i, l, s));
    } else {
      let d = a();
      o.push(() => d.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
        const u = ph(c) ? c.default : c;
        i.mods[l] = c, i.components[l] = u;
        const h = (u.__vccOpts || u)[t];
        return h && qt(h, n, r, i, l, s)();
      }));
    }
  }
  return o;
}
function pl(e) {
  const t = rt(bs), n = rt(Xo), r = He(() => {
    const a = Rn(e.to);
    return t.resolve(a);
  }), s = He(() => {
    const { matched: a } = r.value, { length: d } = a, c = a[d - 1], u = n.matched;
    if (!c || !u.length) return -1;
    const f = u.findIndex(Fn.bind(null, c));
    if (f > -1) return f;
    const h = gl(a[d - 2]);
    return d > 1 && gl(c) === h && u[u.length - 1].path !== h ? u.findIndex(Fn.bind(null, a[d - 2])) : f;
  }), o = He(() => s.value > -1 && fp(n.params, r.value.params)), i = He(() => s.value > -1 && s.value === n.matched.length - 1 && Na(n.params, r.value.params));
  function l(a = {}) {
    if (up(a)) {
      const d = t[Rn(e.replace) ? "replace" : "push"](Rn(e.to)).catch(nr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  return { route: r, href: He(() => r.value.href), isActive: o, isExactActive: i, navigate: l };
}
function lp(e) {
  return e.length === 1 ? e[0] : e;
}
const cp = /* @__PURE__ */ $n({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: pl, setup(e, { slots: t }) {
  const n = pr(pl(e)), { options: r } = rt(bs), s = He(() => ({ [ml(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive, [ml(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive }));
  return () => {
    const o = t.default && lp(t.default(n));
    return e.custom ? o : Er("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: s.value }, o);
  };
} }), ap = cp;
function up(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function fp(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s) return false;
    } else if (!_t(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return false;
  }
  return true;
}
function gl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ml = (e, t, n) => e ?? t ?? n, dp = /* @__PURE__ */ $n({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) {
  const r = rt(po), s = He(() => e.route || r.value), o = rt(hl, 0), i = He(() => {
    let d = Rn(o);
    const { matched: c } = s.value;
    let u;
    for (; (u = c[d]) && !u.components; ) d++;
    return d;
  }), l = He(() => s.value.matched[i.value]);
  Fr(hl, He(() => i.value + 1)), Fr(ip, l), Fr(po, s);
  const a = Qt();
  return St(() => [a.value, l.value, e.name], ([d, c, u], [f, h, g]) => {
    c && (c.instances[u] = d, h && h !== c && d && d === f && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), d && c && (!h || !Fn(c, h) || !f) && (c.enterCallbacks[u] || []).forEach((y) => y(d));
  }, { flush: "post" }), () => {
    const d = s.value, c = e.name, u = l.value, f = u && u.components[c];
    if (!f) return _l(n.default, { Component: f, route: d });
    const h = u.props[c], g = h ? h === true ? d.params : typeof h == "function" ? h(d) : h : null, O = Er(f, be({}, g, t, { onVnodeUnmounted: (p) => {
      p.component.isUnmounted && (u.instances[c] = null);
    }, ref: a }));
    return _l(n.default, { Component: O, route: d }) || O;
  };
} });
function _l(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const hp = dp;
function Xm(e) {
  const t = Zh(e.routes, e), n = e.parseQuery || sp, r = e.stringifyQuery || dl, s = e.history, o = Kn(), i = Kn(), l = Kn(), a = $o(Wt);
  let d = Wt;
  An && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = $s.bind(null, (G) => "" + G), u = $s.bind(null, Ih), f = $s.bind(null, ar);
  function h(G, ee) {
    let z, ne;
    return Fa(G) ? (z = t.getRecordMatcher(G), ne = ee) : ne = G, t.addRoute(ne, z);
  }
  function g(G) {
    const ee = t.getRecordMatcher(G);
    ee && t.removeRoute(ee);
  }
  function y() {
    return t.getRoutes().map((G) => G.record);
  }
  function O(G) {
    return !!t.getRecordMatcher(G);
  }
  function p(G, ee) {
    if (ee = be({}, ee || a.value), typeof G == "string") {
      const $ = Hs(n, G, ee.path), K = t.resolve({ path: $.path }, ee), X = s.createHref($.fullPath);
      return be($, K, { params: f(K.params), hash: ar($.hash), redirectedFrom: void 0, href: X });
    }
    let z;
    if (G.path != null) z = be({}, G, { path: Hs(n, G.path, ee.path).path });
    else {
      const $ = be({}, G.params);
      for (const K in $) $[K] == null && delete $[K];
      z = be({}, G, { params: u($) }), ee.params = u(ee.params);
    }
    const ne = t.resolve(z, ee), fe = G.hash || "";
    ne.params = c(f(ne.params));
    const I = Lh(r, be({}, G, { hash: wh(fe), path: ne.path })), N = s.createHref(I);
    return be({ fullPath: I, hash: fe, query: r === dl ? op(G.query) : G.query || {} }, ne, { redirectedFrom: void 0, href: N });
  }
  function S(G) {
    return typeof G == "string" ? Hs(n, G, a.value.path) : be({}, G);
  }
  function w(G, ee) {
    if (d !== G) return Mn(8, { from: ee, to: G });
  }
  function _(G) {
    return L(G);
  }
  function x(G) {
    return _(be(S(G), { replace: true }));
  }
  function E(G) {
    const ee = G.matched[G.matched.length - 1];
    if (ee && ee.redirect) {
      const { redirect: z } = ee;
      let ne = typeof z == "function" ? z(G) : z;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = S(ne) : { path: ne }, ne.params = {}), be({ query: G.query, hash: G.hash, params: ne.path != null ? {} : G.params }, ne);
    }
  }
  function L(G, ee) {
    const z = d = p(G), ne = a.value, fe = G.state, I = G.force, N = G.replace === true, $ = E(z);
    if ($) return L(be(S($), { state: typeof $ == "object" ? be({}, fe, $.state) : fe, force: I, replace: N }), ee || z);
    const K = z;
    K.redirectedFrom = ee;
    let X;
    return !I && Ph(r, ne, z) && (X = Mn(16, { to: K, from: ne }), ie(ne, ne, true, false)), (X ? Promise.resolve(X) : P(K, ne)).catch((Y) => It(Y) ? It(Y, 2) ? Y : J(Y) : B(Y, K, ne)).then((Y) => {
      if (Y) {
        if (It(Y, 2)) return L(be({ replace: N }, S(Y.to), { state: typeof Y.to == "object" ? be({}, fe, Y.to.state) : fe, force: I }), ee || K);
      } else Y = R(K, ne, true, N, fe);
      return F(K, ne, Y), Y;
    });
  }
  function b(G, ee) {
    const z = w(G, ee);
    return z ? Promise.reject(z) : Promise.resolve();
  }
  function m(G) {
    const ee = Z.values().next().value;
    return ee && typeof ee.runWithContext == "function" ? ee.runWithContext(G) : G();
  }
  function P(G, ee) {
    let z;
    const [ne, fe, I] = pp(G, ee);
    z = Vs(ne.reverse(), "beforeRouteLeave", G, ee);
    for (const $ of ne) $.leaveGuards.forEach((K) => {
      z.push(qt(K, G, ee));
    });
    const N = b.bind(null, G, ee);
    return z.push(N), ce(z).then(() => {
      z = [];
      for (const $ of o.list()) z.push(qt($, G, ee));
      return z.push(N), ce(z);
    }).then(() => {
      z = Vs(fe, "beforeRouteUpdate", G, ee);
      for (const $ of fe) $.updateGuards.forEach((K) => {
        z.push(qt(K, G, ee));
      });
      return z.push(N), ce(z);
    }).then(() => {
      z = [];
      for (const $ of I) if ($.beforeEnter) if (_t($.beforeEnter)) for (const K of $.beforeEnter) z.push(qt(K, G, ee));
      else z.push(qt($.beforeEnter, G, ee));
      return z.push(N), ce(z);
    }).then(() => (G.matched.forEach(($) => $.enterCallbacks = {}), z = Vs(I, "beforeRouteEnter", G, ee, m), z.push(N), ce(z))).then(() => {
      z = [];
      for (const $ of i.list()) z.push(qt($, G, ee));
      return z.push(N), ce(z);
    }).catch(($) => It($, 8) ? $ : Promise.reject($));
  }
  function F(G, ee, z) {
    l.list().forEach((ne) => m(() => ne(G, ee, z)));
  }
  function R(G, ee, z, ne, fe) {
    const I = w(G, ee);
    if (I) return I;
    const N = ee === Wt, $ = An ? history.state : {};
    z && (ne || N ? s.replace(G.fullPath, be({ scroll: N && $ && $.scroll }, fe)) : s.push(G.fullPath, fe)), a.value = G, ie(G, ee, z, N), J();
  }
  let U;
  function k() {
    U || (U = s.listen((G, ee, z) => {
      if (!Q.listening) return;
      const ne = p(G), fe = E(ne);
      if (fe) {
        L(be(fe, { replace: true, force: true }), ne).catch(nr);
        return;
      }
      d = ne;
      const I = a.value;
      An && $h(rl(I.fullPath, z.delta), ys()), P(ne, I).catch((N) => It(N, 12) ? N : It(N, 2) ? (L(be(S(N.to), { force: true }), ne).then(($) => {
        It($, 20) && !z.delta && z.type === ur.pop && s.go(-1, false);
      }).catch(nr), Promise.reject()) : (z.delta && s.go(-z.delta, false), B(N, ne, I))).then((N) => {
        N = N || R(ne, I, false), N && (z.delta && !It(N, 8) ? s.go(-z.delta, false) : z.type === ur.pop && It(N, 20) && s.go(-1, false)), F(ne, I, N);
      }).catch(nr);
    }));
  }
  let W = Kn(), T = Kn(), v;
  function B(G, ee, z) {
    J(G);
    const ne = T.list();
    return ne.length ? ne.forEach((fe) => fe(G, ee, z)) : console.error(G), Promise.reject(G);
  }
  function V() {
    return v && a.value !== Wt ? Promise.resolve() : new Promise((G, ee) => {
      W.add([G, ee]);
    });
  }
  function J(G) {
    return v || (v = !G, k(), W.list().forEach(([ee, z]) => G ? z(G) : ee()), W.reset()), G;
  }
  function ie(G, ee, z, ne) {
    const { scrollBehavior: fe } = e;
    if (!An || !fe) return Promise.resolve();
    const I = !z && Hh(rl(G.fullPath, 0)) || (ne || !z) && history.state && history.state.scroll || null;
    return ds().then(() => fe(G, ee, I)).then((N) => N && Uh(N)).catch((N) => B(N, G, ee));
  }
  const te = (G) => s.go(G);
  let se;
  const Z = /* @__PURE__ */ new Set(), Q = { currentRoute: a, listening: true, addRoute: h, removeRoute: g, clearRoutes: t.clearRoutes, hasRoute: O, getRoutes: y, resolve: p, options: e, push: _, replace: x, go: te, back: () => te(-1), forward: () => te(1), beforeEach: o.add, beforeResolve: i.add, afterEach: l.add, onError: T.add, isReady: V, install(G) {
    const ee = this;
    G.component("RouterLink", ap), G.component("RouterView", hp), G.config.globalProperties.$router = ee, Object.defineProperty(G.config.globalProperties, "$route", { enumerable: true, get: () => Rn(a) }), An && !se && a.value === Wt && (se = true, _(s.location).catch((fe) => {
    }));
    const z = {};
    for (const fe in Wt) Object.defineProperty(z, fe, { get: () => a.value[fe], enumerable: true });
    G.provide(bs, ee), G.provide(Xo, bc(z)), G.provide(po, a);
    const ne = G.unmount;
    Z.add(G), G.unmount = function() {
      Z.delete(G), Z.size < 1 && (d = Wt, U && U(), U = null, a.value = Wt, se = false, v = false), ne();
    };
  } };
  function ce(G) {
    return G.reduce((ee, z) => ee.then(() => m(z)), Promise.resolve());
  }
  return Q;
}
function pp(e, t) {
  const n = [], r = [], s = [], o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const l = t.matched[i];
    l && (e.matched.find((d) => Fn(d, l)) ? r.push(l) : n.push(l));
    const a = e.matched[i];
    a && (t.matched.find((d) => Fn(d, a)) || s.push(a));
  }
  return [n, r, s];
}
function Qm() {
  return rt(bs);
}
function Jm(e) {
  return rt(Xo);
}
function Qo(e) {
  return new Promise((t, n) => {
    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
  });
}
function gp(e, t) {
  const n = indexedDB.open(e);
  n.onupgradeneeded = () => n.result.createObjectStore(t);
  const r = Qo(n);
  return (s, o) => r.then((i) => o(i.transaction(t, s).objectStore(t)));
}
let Ws;
function Ua() {
  return Ws || (Ws = gp("keyval-store", "keyval")), Ws;
}
function zm(e, t = Ua()) {
  return t("readonly", (n) => Qo(n.get(e)));
}
function Zm(e, t, n = Ua()) {
  return n("readwrite", (r) => (r.put(t, e), Qo(r.transaction)));
}
/*!
* shared v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
const Zr = typeof window < "u", tn = (e, t = false) => t ? Symbol.for(e) : Symbol(e), mp = (e, t, n) => _p({ l: e, k: t, s: n }), _p = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), xe = (e) => typeof e == "number" && isFinite(e), yp = (e) => zo(e) === "[object Date]", es = (e) => zo(e) === "[object RegExp]", vs = (e) => me(e) && Object.keys(e).length === 0, Ve = Object.assign, bp = Object.create, Ae = (e = null) => bp(e);
let yl;
const Jo = () => yl || (yl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ae());
function bl(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const vp = Object.prototype.hasOwnProperty;
function dt(e, t) {
  return vp.call(e, t);
}
const Ue = Array.isArray, Le = (e) => typeof e == "function", le = (e) => typeof e == "string", Pe = (e) => typeof e == "boolean", ye = (e) => e !== null && typeof e == "object", Ep = (e) => ye(e) && Le(e.then) && Le(e.catch), $a = Object.prototype.toString, zo = (e) => $a.call(e), me = (e) => zo(e) === "[object Object]", Ap = (e) => e == null ? "" : Ue(e) || me(e) && e.toString === $a ? JSON.stringify(e, null, 2) : String(e);
function Zo(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
function Sp(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Lr = (e) => !ye(e) || Ue(e);
function Ur(e, t) {
  if (Lr(e) || Lr(t)) throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: s } = n.pop();
    Object.keys(r).forEach((o) => {
      o !== "__proto__" && (ye(r[o]) && !ye(s[o]) && (s[o] = Array.isArray(r[o]) ? [] : Ae()), Lr(s[o]) || Lr(r[o]) ? s[o] = r[o] : n.push({ src: r[o], des: s[o] }));
    });
  }
}
/*!
* message-compiler v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
function wp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function go(e, t, n) {
  return { start: e, end: t };
}
const Ee = { EXPECTED_TOKEN: 1, INVALID_TOKEN_IN_PLACEHOLDER: 2, UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3, UNKNOWN_ESCAPE_SEQUENCE: 4, INVALID_UNICODE_ESCAPE_SEQUENCE: 5, UNBALANCED_CLOSING_BRACE: 6, UNTERMINATED_CLOSING_BRACE: 7, EMPTY_PLACEHOLDER: 8, NOT_ALLOW_NEST_PLACEHOLDER: 9, INVALID_LINKED_FORMAT: 10, MUST_HAVE_MESSAGES_IN_PLURAL: 11, UNEXPECTED_EMPTY_LINKED_MODIFIER: 12, UNEXPECTED_EMPTY_LINKED_KEY: 13, UNEXPECTED_LEXICAL_ANALYSIS: 14 }, Cp = 17;
function Es(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n, i = e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function Tp(e) {
  throw e;
}
const Rt = " ", Ip = "\r", Xe = `
`, Rp = "\u2028", Op = "\u2029";
function Lp(e) {
  const t = e;
  let n = 0, r = 1, s = 1, o = 0;
  const i = (L) => t[L] === Ip && t[L + 1] === Xe, l = (L) => t[L] === Xe, a = (L) => t[L] === Op, d = (L) => t[L] === Rp, c = (L) => i(L) || l(L) || a(L) || d(L), u = () => n, f = () => r, h = () => s, g = () => o, y = (L) => i(L) || a(L) || d(L) ? Xe : t[L], O = () => y(n), p = () => y(n + o);
  function S() {
    return o = 0, c(n) && (r++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function w() {
    return i(n + o) && o++, o++, t[n + o];
  }
  function _() {
    n = 0, r = 1, s = 1, o = 0;
  }
  function x(L = 0) {
    o = L;
  }
  function E() {
    const L = n + o;
    for (; L !== n; ) S();
    o = 0;
  }
  return { index: u, line: f, column: h, peekOffset: g, charAt: y, currentChar: O, currentPeek: p, next: S, peek: w, reset: _, resetPeek: x, skipToPeek: E };
}
const jt = void 0, Pp = ".", vl = "'", Np = "tokenizer";
function xp(e, t = {}) {
  const n = t.location !== false, r = Lp(e), s = () => r.index(), o = () => wp(r.line(), r.column(), r.index()), i = o(), l = s(), a = { currentType: 13, offset: l, startLoc: i, endLoc: i, lastType: 13, lastOffset: l, lastStartLoc: i, lastEndLoc: i, braceNest: 0, inLinked: false, text: "" }, d = () => a, { onError: c } = t;
  function u(A, C, D, ...H) {
    const re = d();
    if (C.column += D, C.offset += D, c) {
      const q = n ? go(re.startLoc, C) : null, M = Es(A, q, { domain: Np, args: H });
      c(M);
    }
  }
  function f(A, C, D) {
    A.endLoc = o(), A.currentType = C;
    const H = { type: C };
    return n && (H.loc = go(A.startLoc, A.endLoc)), D != null && (H.value = D), H;
  }
  const h = (A) => f(A, 13);
  function g(A, C) {
    return A.currentChar() === C ? (A.next(), C) : (u(Ee.EXPECTED_TOKEN, o(), 0, C), "");
  }
  function y(A) {
    let C = "";
    for (; A.currentPeek() === Rt || A.currentPeek() === Xe; ) C += A.currentPeek(), A.peek();
    return C;
  }
  function O(A) {
    const C = y(A);
    return A.skipToPeek(), C;
  }
  function p(A) {
    if (A === jt) return false;
    const C = A.charCodeAt(0);
    return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C === 95;
  }
  function S(A) {
    if (A === jt) return false;
    const C = A.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function w(A, C) {
    const { currentType: D } = C;
    if (D !== 2) return false;
    y(A);
    const H = p(A.currentPeek());
    return A.resetPeek(), H;
  }
  function _(A, C) {
    const { currentType: D } = C;
    if (D !== 2) return false;
    y(A);
    const H = A.currentPeek() === "-" ? A.peek() : A.currentPeek(), re = S(H);
    return A.resetPeek(), re;
  }
  function x(A, C) {
    const { currentType: D } = C;
    if (D !== 2) return false;
    y(A);
    const H = A.currentPeek() === vl;
    return A.resetPeek(), H;
  }
  function E(A, C) {
    const { currentType: D } = C;
    if (D !== 7) return false;
    y(A);
    const H = A.currentPeek() === ".";
    return A.resetPeek(), H;
  }
  function L(A, C) {
    const { currentType: D } = C;
    if (D !== 8) return false;
    y(A);
    const H = p(A.currentPeek());
    return A.resetPeek(), H;
  }
  function b(A, C) {
    const { currentType: D } = C;
    if (!(D === 7 || D === 11)) return false;
    y(A);
    const H = A.currentPeek() === ":";
    return A.resetPeek(), H;
  }
  function m(A, C) {
    const { currentType: D } = C;
    if (D !== 9) return false;
    const H = () => {
      const q = A.currentPeek();
      return q === "{" ? p(A.peek()) : q === "@" || q === "|" || q === ":" || q === "." || q === Rt || !q ? false : q === Xe ? (A.peek(), H()) : F(A, false);
    }, re = H();
    return A.resetPeek(), re;
  }
  function P(A) {
    y(A);
    const C = A.currentPeek() === "|";
    return A.resetPeek(), C;
  }
  function F(A, C = true) {
    const D = (re = false, q = "") => {
      const M = A.currentPeek();
      return M === "{" || M === "@" || !M ? re : M === "|" ? !(q === Rt || q === Xe) : M === Rt ? (A.peek(), D(true, Rt)) : M === Xe ? (A.peek(), D(true, Xe)) : true;
    }, H = D();
    return C && A.resetPeek(), H;
  }
  function R(A, C) {
    const D = A.currentChar();
    return D === jt ? jt : C(D) ? (A.next(), D) : null;
  }
  function U(A) {
    const C = A.charCodeAt(0);
    return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36;
  }
  function k(A) {
    return R(A, U);
  }
  function W(A) {
    const C = A.charCodeAt(0);
    return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36 || C === 45;
  }
  function T(A) {
    return R(A, W);
  }
  function v(A) {
    const C = A.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function B(A) {
    return R(A, v);
  }
  function V(A) {
    const C = A.charCodeAt(0);
    return C >= 48 && C <= 57 || C >= 65 && C <= 70 || C >= 97 && C <= 102;
  }
  function J(A) {
    return R(A, V);
  }
  function ie(A) {
    let C = "", D = "";
    for (; C = B(A); ) D += C;
    return D;
  }
  function te(A) {
    let C = "";
    for (; ; ) {
      const D = A.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D) break;
      if (D === Rt || D === Xe) if (F(A)) C += D, A.next();
      else {
        if (P(A)) break;
        C += D, A.next();
      }
      else C += D, A.next();
    }
    return C;
  }
  function se(A) {
    O(A);
    let C = "", D = "";
    for (; C = T(A); ) D += C;
    return A.currentChar() === jt && u(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0), D;
  }
  function Z(A) {
    O(A);
    let C = "";
    return A.currentChar() === "-" ? (A.next(), C += `-${ie(A)}`) : C += ie(A), A.currentChar() === jt && u(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0), C;
  }
  function Q(A) {
    return A !== vl && A !== Xe;
  }
  function ce(A) {
    O(A), g(A, "'");
    let C = "", D = "";
    for (; C = R(A, Q); ) C === "\\" ? D += G(A) : D += C;
    const H = A.currentChar();
    return H === Xe || H === jt ? (u(Ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), H === Xe && (A.next(), g(A, "'")), D) : (g(A, "'"), D);
  }
  function G(A) {
    const C = A.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return A.next(), `\\${C}`;
      case "u":
        return ee(A, C, 4);
      case "U":
        return ee(A, C, 6);
      default:
        return u(Ee.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, C), "";
    }
  }
  function ee(A, C, D) {
    g(A, C);
    let H = "";
    for (let re = 0; re < D; re++) {
      const q = J(A);
      if (!q) {
        u(Ee.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${C}${H}${A.currentChar()}`);
        break;
      }
      H += q;
    }
    return `\\${C}${H}`;
  }
  function z(A) {
    return A !== "{" && A !== "}" && A !== Rt && A !== Xe;
  }
  function ne(A) {
    O(A);
    let C = "", D = "";
    for (; C = R(A, z); ) D += C;
    return D;
  }
  function fe(A) {
    let C = "", D = "";
    for (; C = k(A); ) D += C;
    return D;
  }
  function I(A) {
    const C = (D) => {
      const H = A.currentChar();
      return H === "{" || H === "@" || H === "|" || H === "(" || H === ")" || !H || H === Rt ? D : (D += H, A.next(), C(D));
    };
    return C("");
  }
  function N(A) {
    O(A);
    const C = g(A, "|");
    return O(A), C;
  }
  function $(A, C) {
    let D = null;
    switch (A.currentChar()) {
      case "{":
        return C.braceNest >= 1 && u(Ee.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), A.next(), D = f(C, 2, "{"), O(A), C.braceNest++, D;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && u(Ee.EMPTY_PLACEHOLDER, o(), 0), A.next(), D = f(C, 3, "}"), C.braceNest--, C.braceNest > 0 && O(A), C.inLinked && C.braceNest === 0 && (C.inLinked = false), D;
      case "@":
        return C.braceNest > 0 && u(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0), D = K(A, C) || h(C), C.braceNest = 0, D;
      default: {
        let re = true, q = true, M = true;
        if (P(A)) return C.braceNest > 0 && u(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0), D = f(C, 1, N(A)), C.braceNest = 0, C.inLinked = false, D;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6)) return u(Ee.UNTERMINATED_CLOSING_BRACE, o(), 0), C.braceNest = 0, X(A, C);
        if (re = w(A, C)) return D = f(C, 4, se(A)), O(A), D;
        if (q = _(A, C)) return D = f(C, 5, Z(A)), O(A), D;
        if (M = x(A, C)) return D = f(C, 6, ce(A)), O(A), D;
        if (!re && !q && !M) return D = f(C, 12, ne(A)), u(Ee.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, D.value), O(A), D;
        break;
      }
    }
    return D;
  }
  function K(A, C) {
    const { currentType: D } = C;
    let H = null;
    const re = A.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (re === Xe || re === Rt) && u(Ee.INVALID_LINKED_FORMAT, o(), 0), re) {
      case "@":
        return A.next(), H = f(C, 7, "@"), C.inLinked = true, H;
      case ".":
        return O(A), A.next(), f(C, 8, ".");
      case ":":
        return O(A), A.next(), f(C, 9, ":");
      default:
        return P(A) ? (H = f(C, 1, N(A)), C.braceNest = 0, C.inLinked = false, H) : E(A, C) || b(A, C) ? (O(A), K(A, C)) : L(A, C) ? (O(A), f(C, 11, fe(A))) : m(A, C) ? (O(A), re === "{" ? $(A, C) || H : f(C, 10, I(A))) : (D === 7 && u(Ee.INVALID_LINKED_FORMAT, o(), 0), C.braceNest = 0, C.inLinked = false, X(A, C));
    }
  }
  function X(A, C) {
    let D = { type: 13 };
    if (C.braceNest > 0) return $(A, C) || h(C);
    if (C.inLinked) return K(A, C) || h(C);
    switch (A.currentChar()) {
      case "{":
        return $(A, C) || h(C);
      case "}":
        return u(Ee.UNBALANCED_CLOSING_BRACE, o(), 0), A.next(), f(C, 3, "}");
      case "@":
        return K(A, C) || h(C);
      default: {
        if (P(A)) return D = f(C, 1, N(A)), C.braceNest = 0, C.inLinked = false, D;
        if (F(A)) return f(C, 0, te(A));
        break;
      }
    }
    return D;
  }
  function Y() {
    const { currentType: A, offset: C, startLoc: D, endLoc: H } = a;
    return a.lastType = A, a.lastOffset = C, a.lastStartLoc = D, a.lastEndLoc = H, a.offset = s(), a.startLoc = o(), r.currentChar() === jt ? f(a, 13) : X(r, a);
  }
  return { nextToken: Y, currentOffset: s, currentPosition: o, context: d };
}
const Fp = "parser", Mp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function kp(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD";
    }
  }
}
function Dp(e = {}) {
  const t = e.location !== false, { onError: n } = e;
  function r(p, S, w, _, ...x) {
    const E = p.currentPosition();
    if (E.offset += _, E.column += _, n) {
      const L = t ? go(w, E) : null, b = Es(S, L, { domain: Fp, args: x });
      n(b);
    }
  }
  function s(p, S, w) {
    const _ = { type: p };
    return t && (_.start = S, _.end = S, _.loc = { start: w, end: w }), _;
  }
  function o(p, S, w, _) {
    t && (p.end = S, p.loc && (p.loc.end = w));
  }
  function i(p, S) {
    const w = p.context(), _ = s(3, w.offset, w.startLoc);
    return _.value = S, o(_, p.currentOffset(), p.currentPosition()), _;
  }
  function l(p, S) {
    const w = p.context(), { lastOffset: _, lastStartLoc: x } = w, E = s(5, _, x);
    return E.index = parseInt(S, 10), p.nextToken(), o(E, p.currentOffset(), p.currentPosition()), E;
  }
  function a(p, S) {
    const w = p.context(), { lastOffset: _, lastStartLoc: x } = w, E = s(4, _, x);
    return E.key = S, p.nextToken(), o(E, p.currentOffset(), p.currentPosition()), E;
  }
  function d(p, S) {
    const w = p.context(), { lastOffset: _, lastStartLoc: x } = w, E = s(9, _, x);
    return E.value = S.replace(Mp, kp), p.nextToken(), o(E, p.currentOffset(), p.currentPosition()), E;
  }
  function c(p) {
    const S = p.nextToken(), w = p.context(), { lastOffset: _, lastStartLoc: x } = w, E = s(8, _, x);
    return S.type !== 11 ? (r(p, Ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0), E.value = "", o(E, _, x), { nextConsumeToken: S, node: E }) : (S.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, bt(S)), E.value = S.value || "", o(E, p.currentOffset(), p.currentPosition()), { node: E });
  }
  function u(p, S) {
    const w = p.context(), _ = s(7, w.offset, w.startLoc);
    return _.value = S, o(_, p.currentOffset(), p.currentPosition()), _;
  }
  function f(p) {
    const S = p.context(), w = s(6, S.offset, S.startLoc);
    let _ = p.nextToken();
    if (_.type === 8) {
      const x = c(p);
      w.modifier = x.node, _ = x.nextConsumeToken || p.nextToken();
    }
    switch (_.type !== 9 && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(_)), _ = p.nextToken(), _.type === 2 && (_ = p.nextToken()), _.type) {
      case 10:
        _.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(_)), w.key = u(p, _.value || "");
        break;
      case 4:
        _.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(_)), w.key = a(p, _.value || "");
        break;
      case 5:
        _.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(_)), w.key = l(p, _.value || "");
        break;
      case 6:
        _.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(_)), w.key = d(p, _.value || "");
        break;
      default: {
        r(p, Ee.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const x = p.context(), E = s(7, x.offset, x.startLoc);
        return E.value = "", o(E, x.offset, x.startLoc), w.key = E, o(w, x.offset, x.startLoc), { nextConsumeToken: _, node: w };
      }
    }
    return o(w, p.currentOffset(), p.currentPosition()), { node: w };
  }
  function h(p) {
    const S = p.context(), w = S.currentType === 1 ? p.currentOffset() : S.offset, _ = S.currentType === 1 ? S.endLoc : S.startLoc, x = s(2, w, _);
    x.items = [];
    let E = null;
    do {
      const m = E || p.nextToken();
      switch (E = null, m.type) {
        case 0:
          m.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(m)), x.items.push(i(p, m.value || ""));
          break;
        case 5:
          m.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(m)), x.items.push(l(p, m.value || ""));
          break;
        case 4:
          m.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(m)), x.items.push(a(p, m.value || ""));
          break;
        case 6:
          m.value == null && r(p, Ee.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, bt(m)), x.items.push(d(p, m.value || ""));
          break;
        case 7: {
          const P = f(p);
          x.items.push(P.node), E = P.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const L = S.currentType === 1 ? S.lastOffset : p.currentOffset(), b = S.currentType === 1 ? S.lastEndLoc : p.currentPosition();
    return o(x, L, b), x;
  }
  function g(p, S, w, _) {
    const x = p.context();
    let E = _.items.length === 0;
    const L = s(1, S, w);
    L.cases = [], L.cases.push(_);
    do {
      const b = h(p);
      E || (E = b.items.length === 0), L.cases.push(b);
    } while (x.currentType !== 13);
    return E && r(p, Ee.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0), o(L, p.currentOffset(), p.currentPosition()), L;
  }
  function y(p) {
    const S = p.context(), { offset: w, startLoc: _ } = S, x = h(p);
    return S.currentType === 13 ? x : g(p, w, _, x);
  }
  function O(p) {
    const S = xp(p, Ve({}, e)), w = S.context(), _ = s(0, w.offset, w.startLoc);
    return t && _.loc && (_.loc.source = p), _.body = y(S), e.onCacheKey && (_.cacheKey = e.onCacheKey(p)), w.currentType !== 13 && r(S, Ee.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, p[w.offset] || ""), o(_, S.currentOffset(), S.currentPosition()), _;
  }
  return { parse: O };
}
function bt(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
}
function Up(e, t = {}) {
  const n = { ast: e, helpers: /* @__PURE__ */ new Set() };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function El(e, t) {
  for (let n = 0; n < e.length; n++) ei(e[n], t);
}
function ei(e, t) {
  switch (e.type) {
    case 1:
      El(e.cases, t), t.helper("plural");
      break;
    case 2:
      El(e.items, t);
      break;
    case 6: {
      ei(e.key, t), t.helper("linked"), t.helper("type");
      break;
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function $p(e, t = {}) {
  const n = Up(e);
  n.helper("normalize"), e.body && ei(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Hp(e) {
  const t = e.body;
  return t.type === 2 ? Al(t) : t.cases.forEach((n) => Al(n)), e;
}
function Al(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = Zo(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Sn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Sn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++) Sn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++) Sn(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Sn(t.key), t.k = t.key, delete t.key, t.modifier && (Sn(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
  }
  delete e.type;
}
function Vp(e, t) {
  const { filename: n, breakLineCode: r, needIndent: s } = t, o = t.location !== false, i = { filename: n, code: "", column: 1, line: 1, offset: 0, map: void 0, breakLineCode: r, needIndent: s, indentLevel: 0 };
  o && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function a(y, O) {
    i.code += y;
  }
  function d(y, O = true) {
    const p = O ? r : "";
    a(s ? p + "  ".repeat(y) : p);
  }
  function c(y = true) {
    const O = ++i.indentLevel;
    y && d(O);
  }
  function u(y = true) {
    const O = --i.indentLevel;
    y && d(O);
  }
  function f() {
    d(i.indentLevel);
  }
  return { context: l, push: a, indent: c, deindent: u, newline: f, helper: (y) => `_${y}`, needIndent: () => i.needIndent };
}
function Wp(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), kn(e, t.key), t.modifier ? (e.push(", "), kn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function jp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let o = 0; o < s && (kn(e, t.items[o]), o !== s - 1); o++) e.push(", ");
  e.deindent(r()), e.push("])");
}
function Bp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let o = 0; o < s && (kn(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Kp(e, t) {
  t.body ? kn(e, t.body) : e.push("null");
}
function kn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Kp(e, t);
      break;
    case 1:
      Bp(e, t);
      break;
    case 2:
      jp(e, t);
      break;
    case 6:
      Wp(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const Gp = (e, t = {}) => {
  const n = le(t.mode) ? t.mode : "normal", r = le(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = Vp(e, { filename: r, breakLineCode: s, needIndent: o });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Zo(i.map((c) => `${c}: _${c}`), ", ")} } = ctx`), l.newline()), l.push("return "), kn(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: a, map: d } = l.context();
  return { ast: e, code: a, map: d ? d.toJSON() : void 0 };
};
function Yp(e, t = {}) {
  const n = Ve({}, t), r = !!n.jit, s = !!n.minify, o = n.optimize == null ? true : n.optimize, l = Dp(n).parse(e);
  return r ? (o && Hp(l), s && Sn(l), { ast: l, code: "" }) : ($p(l, n), Gp(l, n));
}
/*!
* core-base v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
function qp() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Jo().__INTLIFY_PROD_DEVTOOLS__ = false);
}
function wt(e) {
  return ye(e) && ti(e) === 0 && (dt(e, "b") || dt(e, "body"));
}
const Ha = ["b", "body"];
function Xp(e) {
  return nn(e, Ha);
}
const Va = ["c", "cases"];
function Qp(e) {
  return nn(e, Va, []);
}
const Wa = ["s", "static"];
function Jp(e) {
  return nn(e, Wa);
}
const ja = ["i", "items"];
function zp(e) {
  return nn(e, ja, []);
}
const Ba = ["t", "type"];
function ti(e) {
  return nn(e, Ba);
}
const Ka = ["v", "value"];
function Pr(e, t) {
  const n = nn(e, Ka);
  if (n != null) return n;
  throw fr(t);
}
const Ga = ["m", "modifier"];
function Zp(e) {
  return nn(e, Ga);
}
const Ya = ["k", "key"];
function eg(e) {
  const t = nn(e, Ya);
  if (t) return t;
  throw fr(6);
}
function nn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (dt(e, s) && e[s] != null) return e[s];
  }
  return n;
}
const qa = [...Ha, ...Va, ...Wa, ...ja, ...Ya, ...Ga, ...Ka, ...Ba];
function fr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function js(e) {
  return (n) => tg(n, e);
}
function tg(e, t) {
  const n = Xp(t);
  if (n == null) throw fr(0);
  if (ti(n) === 1) {
    const o = Qp(n);
    return e.plural(o.reduce((i, l) => [...i, Sl(e, l)], []));
  } else return Sl(e, n);
}
function Sl(e, t) {
  const n = Jp(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = zp(t).reduce((s, o) => [...s, mo(e, o)], []);
    return e.normalize(r);
  }
}
function mo(e, t) {
  const n = ti(t);
  switch (n) {
    case 3:
      return Pr(t, n);
    case 9:
      return Pr(t, n);
    case 4: {
      const r = t;
      if (dt(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (dt(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw fr(n);
    }
    case 5: {
      const r = t;
      if (dt(r, "i") && xe(r.i)) return e.interpolate(e.list(r.i));
      if (dt(r, "index") && xe(r.index)) return e.interpolate(e.list(r.index));
      throw fr(n);
    }
    case 6: {
      const r = t, s = Zp(r), o = eg(r);
      return e.linked(mo(e, o), s ? mo(e, s) : void 0, e.type);
    }
    case 7:
      return Pr(t, n);
    case 8:
      return Pr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ng = (e) => e;
let Nr = Ae();
function rg(e, t = {}) {
  let n = false;
  const r = t.onError || Tp;
  return t.onError = (s) => {
    n = true, r(s);
  }, { ...Yp(e, t), detectError: n };
}
function sg(e, t) {
  if (le(e)) {
    Pe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || ng)(e), s = Nr[r];
    if (s) return s;
    const { ast: o, detectError: i } = rg(e, { ...t, location: false, jit: true }), l = js(o);
    return i ? l : Nr[r] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Nr[n];
      return r || (Nr[n] = js(e));
    } else return js(e);
  }
}
let dr = null;
function og(e) {
  dr = e;
}
function ig(e, t, n) {
  dr && dr.emit("i18n:init", { timestamp: Date.now(), i18n: e, version: t, meta: n });
}
const lg = cg("function:translate");
function cg(e) {
  return (t) => dr && dr.emit(e, t);
}
const xt = { INVALID_ARGUMENT: Cp, INVALID_DATE_ARGUMENT: 18, INVALID_ISO_DATE_ARGUMENT: 19, NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21, NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22, NOT_SUPPORT_LOCALE_TYPE: 23 }, ag = 24;
function Ft(e) {
  return Es(e, null, void 0);
}
function ni(e, t) {
  return t.locale != null ? wl(t.locale) : wl(e.locale);
}
let Bs;
function wl(e) {
  if (le(e)) return e;
  if (Le(e)) {
    if (e.resolvedOnce && Bs != null) return Bs;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ep(t)) throw Ft(xt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Bs = t;
    } else throw Ft(xt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw Ft(xt.NOT_SUPPORT_LOCALE_TYPE);
}
function ug(e, t, n) {
  return [.../* @__PURE__ */ new Set([n, ...Ue(t) ? t : ye(t) ? Object.keys(t) : le(t) ? [t] : [n]])];
}
function Xa(e, t, n) {
  const r = le(n) ? n : ts, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(r);
  if (!o) {
    o = [];
    let i = [n];
    for (; Ue(i); ) i = Cl(o, i, t);
    const l = Ue(t) || !me(t) ? t : t.default ? t.default : null;
    i = le(l) ? [l] : l, Ue(i) && Cl(o, i, false), s.__localeChainCache.set(r, o);
  }
  return o;
}
function Cl(e, t, n) {
  let r = true;
  for (let s = 0; s < t.length && Pe(r); s++) {
    const o = t[s];
    le(o) && (r = fg(e, t[s], n));
  }
  return r;
}
function fg(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const o = s.join("-");
    r = dg(e, o, n), s.splice(-1, 1);
  } while (s.length && r === true);
  return r;
}
function dg(e, t, n) {
  let r = false;
  if (!e.includes(t) && (r = true, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ue(n) || me(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const rn = [];
rn[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
rn[1] = { w: [1], ".": [2], "[": [4], o: [7] };
rn[2] = { w: [2], i: [3, 0], 0: [3, 0] };
rn[3] = { i: [3, 0], 0: [3, 0], w: [1, 1], ".": [2, 1], "[": [4, 1], o: [7, 1] };
rn[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
rn[5] = { "'": [4, 0], o: 8, l: [5, 0] };
rn[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const hg = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function pg(e) {
  return hg.test(e);
}
function gg(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function mg(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function _g(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? false : pg(t) ? gg(t) : "*" + t;
}
function yg(e) {
  const t = [];
  let n = -1, r = 0, s = 0, o, i, l, a, d, c, u;
  const f = [];
  f[0] = () => {
    i === void 0 ? i = l : i += l;
  }, f[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, f[2] = () => {
    f[0](), s++;
  }, f[3] = () => {
    if (s > 0) s--, r = 4, f[0]();
    else {
      if (s = 0, i === void 0 || (i = _g(i), i === false)) return false;
      f[1]();
    }
  };
  function h() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"') return n++, l = "\\" + g, f[0](), true;
  }
  for (; r !== null; ) if (n++, o = e[n], !(o === "\\" && h())) {
    if (a = mg(o), u = rn[r], d = u[a] || u.l || 8, d === 8 || (r = d[0], d[1] !== void 0 && (c = f[d[1]], c && (l = o, c() === false)))) return;
    if (r === 7) return t;
  }
}
const Tl = /* @__PURE__ */ new Map();
function bg(e, t) {
  return ye(e) ? e[t] : null;
}
function vg(e, t) {
  if (!ye(e)) return null;
  let n = Tl.get(t);
  if (n || (n = yg(t), n && Tl.set(t, n)), !n) return null;
  const r = n.length;
  let s = e, o = 0;
  for (; o < r; ) {
    const i = n[o];
    if (qa.includes(i) && wt(s)) return null;
    const l = s[i];
    if (l === void 0 || Le(s)) return null;
    s = l, o++;
  }
  return s;
}
const Eg = "11.1.3", As = -1, ts = "en-US", Il = "", Rl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ag() {
  return { upper: (e, t) => t === "text" && le(e) ? e.toUpperCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e, lower: (e, t) => t === "text" && le(e) ? e.toLowerCase() : t === "vnode" && ye(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e, capitalize: (e, t) => t === "text" && le(e) ? Rl(e) : t === "vnode" && ye(e) && "__v_isVNode" in e ? Rl(e.children) : e };
}
let Qa;
function Sg(e) {
  Qa = e;
}
let Ja;
function wg(e) {
  Ja = e;
}
let za;
function Cg(e) {
  za = e;
}
let Za = null;
const Tg = (e) => {
  Za = e;
}, Ig = () => Za;
let eu = null;
const Ol = (e) => {
  eu = e;
}, Rg = () => eu;
let Ll = 0;
function Og(e = {}) {
  const t = Le(e.onWarn) ? e.onWarn : Sp, n = le(e.version) ? e.version : Eg, r = le(e.locale) || Le(e.locale) ? e.locale : ts, s = Le(r) ? ts : r, o = Ue(e.fallbackLocale) || me(e.fallbackLocale) || le(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : s, i = me(e.messages) ? e.messages : Ks(s), l = me(e.datetimeFormats) ? e.datetimeFormats : Ks(s), a = me(e.numberFormats) ? e.numberFormats : Ks(s), d = Ve(Ae(), e.modifiers, Ag()), c = e.pluralRules || Ae(), u = Le(e.missing) ? e.missing : null, f = Pe(e.missingWarn) || es(e.missingWarn) ? e.missingWarn : true, h = Pe(e.fallbackWarn) || es(e.fallbackWarn) ? e.fallbackWarn : true, g = !!e.fallbackFormat, y = !!e.unresolving, O = Le(e.postTranslation) ? e.postTranslation : null, p = me(e.processor) ? e.processor : null, S = Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : true, w = !!e.escapeParameter, _ = Le(e.messageCompiler) ? e.messageCompiler : Qa, x = Le(e.messageResolver) ? e.messageResolver : Ja || bg, E = Le(e.localeFallbacker) ? e.localeFallbacker : za || ug, L = ye(e.fallbackContext) ? e.fallbackContext : void 0, b = e, m = ye(b.__datetimeFormatters) ? b.__datetimeFormatters : /* @__PURE__ */ new Map(), P = ye(b.__numberFormatters) ? b.__numberFormatters : /* @__PURE__ */ new Map(), F = ye(b.__meta) ? b.__meta : {};
  Ll++;
  const R = { version: n, cid: Ll, locale: r, fallbackLocale: o, messages: i, modifiers: d, pluralRules: c, missing: u, missingWarn: f, fallbackWarn: h, fallbackFormat: g, unresolving: y, postTranslation: O, processor: p, warnHtmlMessage: S, escapeParameter: w, messageCompiler: _, messageResolver: x, localeFallbacker: E, fallbackContext: L, onWarn: t, __meta: F };
  return R.datetimeFormats = l, R.numberFormats = a, R.__datetimeFormatters = m, R.__numberFormatters = P, __INTLIFY_PROD_DEVTOOLS__ && ig(R, n, F), R;
}
const Ks = (e) => ({ [e]: Ae() });
function ri(e, t, n, r, s) {
  const { missing: o, onWarn: i } = e;
  if (o !== null) {
    const l = o(e, n, t, s);
    return le(l) ? l : t;
  } else return t;
}
function Gn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Lg(e, t) {
  return e === t ? false : e.split("-")[0] === t.split("-")[0];
}
function Pg(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return false;
  for (let r = n + 1; r < t.length; r++) if (Lg(e, t[r])) return true;
  return false;
}
function Pl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __datetimeFormatters: l } = e, [a, d, c, u] = _o(...t), f = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, g = ni(e, c), y = i(e, s, g);
  if (!le(a) || a === "") return new Intl.DateTimeFormat(g, u).format(d);
  let O = {}, p, S = null;
  const w = "datetime format";
  for (let E = 0; E < y.length && (p = y[E], O = n[p] || {}, S = O[a], !me(S)); E++) ri(e, a, p, f, w);
  if (!me(S) || !le(p)) return r ? As : a;
  let _ = `${p}__${a}`;
  vs(u) || (_ = `${_}__${JSON.stringify(u)}`);
  let x = l.get(_);
  return x || (x = new Intl.DateTimeFormat(p, Ve({}, S, u)), l.set(_, x)), h ? x.formatToParts(d) : x.format(d);
}
const tu = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function _o(...e) {
  const [t, n, r, s] = e, o = Ae();
  let i = Ae(), l;
  if (le(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw Ft(xt.INVALID_ISO_DATE_ARGUMENT);
    const d = a[3] ? a[3].trim().startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
    l = new Date(d);
    try {
      l.toISOString();
    } catch {
      throw Ft(xt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (yp(t)) {
    if (isNaN(t.getTime())) throw Ft(xt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (xe(t)) l = t;
  else throw Ft(xt.INVALID_ARGUMENT);
  return le(n) ? o.key = n : me(n) && Object.keys(n).forEach((a) => {
    tu.includes(a) ? i[a] = n[a] : o[a] = n[a];
  }), le(r) ? o.locale = r : me(r) && (i = r), me(s) && (i = s), [o.key || "", l, o, i];
}
function Nl(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o);
  }
}
function xl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: o, localeFallbacker: i } = e, { __numberFormatters: l } = e, [a, d, c, u] = yo(...t), f = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, g = ni(e, c), y = i(e, s, g);
  if (!le(a) || a === "") return new Intl.NumberFormat(g, u).format(d);
  let O = {}, p, S = null;
  const w = "number format";
  for (let E = 0; E < y.length && (p = y[E], O = n[p] || {}, S = O[a], !me(S)); E++) ri(e, a, p, f, w);
  if (!me(S) || !le(p)) return r ? As : a;
  let _ = `${p}__${a}`;
  vs(u) || (_ = `${_}__${JSON.stringify(u)}`);
  let x = l.get(_);
  return x || (x = new Intl.NumberFormat(p, Ve({}, S, u)), l.set(_, x)), h ? x.formatToParts(d) : x.format(d);
}
const nu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function yo(...e) {
  const [t, n, r, s] = e, o = Ae();
  let i = Ae();
  if (!xe(t)) throw Ft(xt.INVALID_ARGUMENT);
  const l = t;
  return le(n) ? o.key = n : me(n) && Object.keys(n).forEach((a) => {
    nu.includes(a) ? i[a] = n[a] : o[a] = n[a];
  }), le(r) ? o.locale = r : me(r) && (i = r), me(s) && (i = s), [o.key || "", l, o, i];
}
function Fl(e, t, n) {
  const r = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o);
  }
}
const Ng = (e) => e, xg = (e) => "", Fg = "text", Mg = (e) => e.length === 0 ? "" : Zo(e), kg = Ap;
function Ml(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Dg(e) {
  const t = xe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (xe(e.named.count) || xe(e.named.n)) ? xe(e.named.count) ? e.named.count : xe(e.named.n) ? e.named.n : t : t;
}
function Ug(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function $g(e = {}) {
  const t = e.locale, n = Dg(e), r = ye(e.pluralRules) && le(t) && Le(e.pluralRules[t]) ? e.pluralRules[t] : Ml, s = ye(e.pluralRules) && le(t) && Le(e.pluralRules[t]) ? Ml : void 0, o = (p) => p[r(n, p.length, s)], i = e.list || [], l = (p) => i[p], a = e.named || Ae();
  xe(e.pluralIndex) && Ug(n, a);
  const d = (p) => a[p];
  function c(p, S) {
    const w = Le(e.messages) ? e.messages(p, !!S) : ye(e.messages) ? e.messages[p] : false;
    return w || (e.parent ? e.parent.message(p) : xg);
  }
  const u = (p) => e.modifiers ? e.modifiers[p] : Ng, f = me(e.processor) && Le(e.processor.normalize) ? e.processor.normalize : Mg, h = me(e.processor) && Le(e.processor.interpolate) ? e.processor.interpolate : kg, g = me(e.processor) && le(e.processor.type) ? e.processor.type : Fg, O = { list: l, named: d, plural: o, linked: (p, ...S) => {
    const [w, _] = S;
    let x = "text", E = "";
    S.length === 1 ? ye(w) ? (E = w.modifier || E, x = w.type || x) : le(w) && (E = w || E) : S.length === 2 && (le(w) && (E = w || E), le(_) && (x = _ || x));
    const L = c(p, true)(O), b = x === "vnode" && Ue(L) && E ? L[0] : L;
    return E ? u(E)(b, x) : b;
  }, message: c, type: g, interpolate: h, normalize: f, values: Ve(Ae(), i, a) };
  return O;
}
const kl = () => "", lt = (e) => Le(e);
function Dl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: o, fallbackLocale: i, messages: l } = e, [a, d] = bo(...t), c = Pe(d.missingWarn) ? d.missingWarn : e.missingWarn, u = Pe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, f = Pe(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, h = !!d.resolvedMessage, g = le(d.default) || Pe(d.default) ? Pe(d.default) ? o ? a : () => a : d.default : n ? o ? a : () => a : null, y = n || g != null && (le(g) || Le(g)), O = ni(e, d);
  f && Hg(d);
  let [p, S, w] = h ? [a, O, l[O] || Ae()] : ru(e, a, O, i, u, c), _ = p, x = a;
  if (!h && !(le(_) || wt(_) || lt(_)) && y && (_ = g, x = _), !h && (!(le(_) || wt(_) || lt(_)) || !le(S))) return s ? As : a;
  let E = false;
  const L = () => {
    E = true;
  }, b = lt(_) ? _ : su(e, a, S, _, x, L);
  if (E) return _;
  const m = jg(e, S, w, d), P = $g(m), F = Vg(e, b, P), R = r ? r(F, a) : F;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const U = { timestamp: Date.now(), key: le(a) ? a : lt(_) ? _.key : "", locale: S || (lt(_) ? _.locale : ""), format: le(_) ? _ : lt(_) ? _.source : "", message: R };
    U.meta = Ve({}, e.__meta, Ig() || {}), lg(U);
  }
  return R;
}
function Hg(e) {
  Ue(e.list) ? e.list = e.list.map((t) => le(t) ? bl(t) : t) : ye(e.named) && Object.keys(e.named).forEach((t) => {
    le(e.named[t]) && (e.named[t] = bl(e.named[t]));
  });
}
function ru(e, t, n, r, s, o) {
  const { messages: i, onWarn: l, messageResolver: a, localeFallbacker: d } = e, c = d(e, r, n);
  let u = Ae(), f, h = null;
  const g = "translate";
  for (let y = 0; y < c.length && (f = c[y], u = i[f] || Ae(), (h = a(u, t)) === null && (h = u[t]), !(le(h) || wt(h) || lt(h))); y++) if (!Pg(f, c)) {
    const O = ri(e, t, f, o, g);
    O !== t && (h = O);
  }
  return [h, f, u];
}
function su(e, t, n, r, s, o) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (lt(r)) {
    const d = r;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (i == null) {
    const d = () => r;
    return d.locale = n, d.key = t, d;
  }
  const a = i(r, Wg(e, n, s, r, l, o));
  return a.locale = n, a.key = t, a.source = r, a;
}
function Vg(e, t, n) {
  return t(n);
}
function bo(...e) {
  const [t, n, r] = e, s = Ae();
  if (!le(t) && !xe(t) && !lt(t) && !wt(t)) throw Ft(xt.INVALID_ARGUMENT);
  const o = xe(t) ? String(t) : (lt(t), t);
  return xe(n) ? s.plural = n : le(n) ? s.default = n : me(n) && !vs(n) ? s.named = n : Ue(n) && (s.list = n), xe(r) ? s.plural = r : le(r) ? s.default = r : me(r) && Ve(s, r), [o, s];
}
function Wg(e, t, n, r, s, o) {
  return { locale: t, key: n, warnHtmlMessage: s, onError: (i) => {
    throw o && o(i), i;
  }, onCacheKey: (i) => mp(t, n, i) };
}
function jg(e, t, n, r) {
  const { modifiers: s, pluralRules: o, messageResolver: i, fallbackLocale: l, fallbackWarn: a, missingWarn: d, fallbackContext: c } = e, f = { locale: t, modifiers: s, pluralRules: o, messages: (h, g) => {
    let y = i(n, h);
    if (y == null && (c || g)) {
      const [, , O] = ru(c || e, h, t, l, a, d);
      y = i(O, h);
    }
    if (le(y) || wt(y)) {
      let O = false;
      const S = su(e, h, t, y, h, () => {
        O = true;
      });
      return O ? kl : S;
    } else return lt(y) ? y : kl;
  } };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), xe(r.plural) && (f.pluralIndex = r.plural), f;
}
qp();
/*!
* vue-i18n v11.1.3
* (c) 2025 kazuya kawaguchi
* Released under the MIT License.
*/
const Bg = "11.1.3";
function Kg() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Jo().__INTLIFY_PROD_DEVTOOLS__ = false);
}
const ut = { UNEXPECTED_RETURN_TYPE: ag, INVALID_ARGUMENT: 25, MUST_BE_CALL_SETUP_TOP: 26, NOT_INSTALLED: 27, REQUIRED_VALUE: 28, INVALID_VALUE: 29, NOT_INSTALLED_WITH_PROVIDE: 31, UNEXPECTED_ERROR: 32 };
function yt(e, ...t) {
  return Es(e, null, void 0);
}
const vo = tn("__translateVNode"), Eo = tn("__datetimeParts"), Ao = tn("__numberParts"), Gg = tn("__setPluralRules"), Yg = tn("__injectWithOption"), So = tn("__dispose");
function hr(e) {
  if (!ye(e) || wt(e)) return e;
  for (const t in e) if (dt(e, t)) if (!t.includes(".")) ye(e[t]) && hr(e[t]);
  else {
    const n = t.split("."), r = n.length - 1;
    let s = e, o = false;
    for (let i = 0; i < r; i++) {
      if (n[i] === "__proto__") throw new Error(`unsafe key: ${n[i]}`);
      if (n[i] in s || (s[n[i]] = Ae()), !ye(s[n[i]])) {
        o = true;
        break;
      }
      s = s[n[i]];
    }
    if (o || (wt(s) ? qa.includes(n[r]) || delete e[t] : (s[n[r]] = e[t], delete e[t])), !wt(s)) {
      const i = s[n[r]];
      ye(i) && hr(i);
    }
  }
  return e;
}
function ou(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t, i = me(n) ? n : Ue(r) ? Ae() : { [e]: Ae() };
  if (Ue(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: a, resource: d } = l;
      a ? (i[a] = i[a] || Ae(), Ur(d, i[a])) : Ur(d, i);
    } else le(l) && Ur(JSON.parse(l), i);
  }), s == null && o) for (const l in i) dt(i, l) && hr(i[l]);
  return i;
}
function iu(e) {
  return e.type;
}
function qg(e, t, n) {
  let r = ye(t.messages) ? t.messages : Ae();
  "__i18nGlobal" in n && (r = ou(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const s = Object.keys(r);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, r[o]);
  });
  {
    if (ye(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (ye(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Ul(e) {
  return De(br, null, e, 0);
}
const $l = "__INTLIFY_META__", Hl = () => [], Xg = () => false;
let Vl = 0;
function Wl(e) {
  return (t, n, r, s) => e(n, r, Ut() || void 0, s);
}
const Qg = () => {
  const e = Ut();
  let t = null;
  return e && (t = iu(e)[$l]) ? { [$l]: t } : null;
};
function lu(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, s = e.flatJson, o = Zr ? Qt : $o;
  let i = Pe(e.inheritLocale) ? e.inheritLocale : true;
  const l = o(t && i ? t.locale.value : le(e.locale) ? e.locale : ts), a = o(t && i ? t.fallbackLocale.value : le(e.fallbackLocale) || Ue(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === false ? e.fallbackLocale : l.value), d = o(ou(l.value, e)), c = o(me(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), u = o(me(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let f = t ? t.missingWarn : Pe(e.missingWarn) || es(e.missingWarn) ? e.missingWarn : true, h = t ? t.fallbackWarn : Pe(e.fallbackWarn) || es(e.fallbackWarn) ? e.fallbackWarn : true, g = t ? t.fallbackRoot : Pe(e.fallbackRoot) ? e.fallbackRoot : true, y = !!e.fallbackFormat, O = Le(e.missing) ? e.missing : null, p = Le(e.missing) ? Wl(e.missing) : null, S = Le(e.postTranslation) ? e.postTranslation : null, w = t ? t.warnHtmlMessage : Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : true, _ = !!e.escapeParameter;
  const x = t ? t.modifiers : me(e.modifiers) ? e.modifiers : {};
  let E = e.pluralRules || t && t.pluralRules, L;
  L = (() => {
    r && Ol(null);
    const M = { version: Bg, locale: l.value, fallbackLocale: a.value, messages: d.value, modifiers: x, pluralRules: E, missing: p === null ? void 0 : p, missingWarn: f, fallbackWarn: h, fallbackFormat: y, unresolving: true, postTranslation: S === null ? void 0 : S, warnHtmlMessage: w, escapeParameter: _, messageResolver: e.messageResolver, messageCompiler: e.messageCompiler, __meta: { framework: "vue" } };
    M.datetimeFormats = c.value, M.numberFormats = u.value, M.__datetimeFormatters = me(L) ? L.__datetimeFormatters : void 0, M.__numberFormatters = me(L) ? L.__numberFormatters : void 0;
    const j = Og(M);
    return r && Ol(j), j;
  })(), Gn(L, l.value, a.value);
  function m() {
    return [l.value, a.value, d.value, c.value, u.value];
  }
  const P = He({ get: () => l.value, set: (M) => {
    L.locale = M, l.value = M;
  } }), F = He({ get: () => a.value, set: (M) => {
    L.fallbackLocale = M, a.value = M, Gn(L, l.value, M);
  } }), R = He(() => d.value), U = He(() => c.value), k = He(() => u.value);
  function W() {
    return Le(S) ? S : null;
  }
  function T(M) {
    S = M, L.postTranslation = M;
  }
  function v() {
    return O;
  }
  function B(M) {
    M !== null && (p = Wl(M)), O = M, L.missing = p;
  }
  const V = (M, j, oe, de, ue, we) => {
    m();
    let pe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = t ? Rg() : void 0), pe = M(L);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = void 0);
    }
    if (oe !== "translate exists" && xe(pe) && pe === As || oe === "translate exists" && !pe) {
      const [Te, Ie] = j();
      return t && g ? de(t) : ue(Te);
    } else {
      if (we(pe)) return pe;
      throw yt(ut.UNEXPECTED_RETURN_TYPE);
    }
  };
  function J(...M) {
    return V((j) => Reflect.apply(Dl, null, [j, ...M]), () => bo(...M), "translate", (j) => Reflect.apply(j.t, j, [...M]), (j) => j, (j) => le(j));
  }
  function ie(...M) {
    const [j, oe, de] = M;
    if (de && !ye(de)) throw yt(ut.INVALID_ARGUMENT);
    return J(j, oe, Ve({ resolvedMessage: true }, de || {}));
  }
  function te(...M) {
    return V((j) => Reflect.apply(Pl, null, [j, ...M]), () => _o(...M), "datetime format", (j) => Reflect.apply(j.d, j, [...M]), () => Il, (j) => le(j));
  }
  function se(...M) {
    return V((j) => Reflect.apply(xl, null, [j, ...M]), () => yo(...M), "number format", (j) => Reflect.apply(j.n, j, [...M]), () => Il, (j) => le(j));
  }
  function Z(M) {
    return M.map((j) => le(j) || xe(j) || Pe(j) ? Ul(String(j)) : j);
  }
  const ce = { normalize: Z, interpolate: (M) => M, type: "vnode" };
  function G(...M) {
    return V((j) => {
      let oe;
      const de = j;
      try {
        de.processor = ce, oe = Reflect.apply(Dl, null, [de, ...M]);
      } finally {
        de.processor = null;
      }
      return oe;
    }, () => bo(...M), "translate", (j) => j[vo](...M), (j) => [Ul(j)], (j) => Ue(j));
  }
  function ee(...M) {
    return V((j) => Reflect.apply(xl, null, [j, ...M]), () => yo(...M), "number format", (j) => j[Ao](...M), Hl, (j) => le(j) || Ue(j));
  }
  function z(...M) {
    return V((j) => Reflect.apply(Pl, null, [j, ...M]), () => _o(...M), "datetime format", (j) => j[Eo](...M), Hl, (j) => le(j) || Ue(j));
  }
  function ne(M) {
    E = M, L.pluralRules = E;
  }
  function fe(M, j) {
    return V(() => {
      if (!M) return false;
      const oe = le(j) ? j : l.value, de = $(oe), ue = L.messageResolver(de, M);
      return wt(ue) || lt(ue) || le(ue);
    }, () => [M], "translate exists", (oe) => Reflect.apply(oe.te, oe, [M, j]), Xg, (oe) => Pe(oe));
  }
  function I(M) {
    let j = null;
    const oe = Xa(L, a.value, l.value);
    for (let de = 0; de < oe.length; de++) {
      const ue = d.value[oe[de]] || {}, we = L.messageResolver(ue, M);
      if (we != null) {
        j = we;
        break;
      }
    }
    return j;
  }
  function N(M) {
    const j = I(M);
    return j ?? (t ? t.tm(M) || {} : {});
  }
  function $(M) {
    return d.value[M] || {};
  }
  function K(M, j) {
    if (s) {
      const oe = { [M]: j };
      for (const de in oe) dt(oe, de) && hr(oe[de]);
      j = oe[M];
    }
    d.value[M] = j, L.messages = d.value;
  }
  function X(M, j) {
    d.value[M] = d.value[M] || {};
    const oe = { [M]: j };
    if (s) for (const de in oe) dt(oe, de) && hr(oe[de]);
    j = oe[M], Ur(j, d.value[M]), L.messages = d.value;
  }
  function Y(M) {
    return c.value[M] || {};
  }
  function A(M, j) {
    c.value[M] = j, L.datetimeFormats = c.value, Nl(L, M, j);
  }
  function C(M, j) {
    c.value[M] = Ve(c.value[M] || {}, j), L.datetimeFormats = c.value, Nl(L, M, j);
  }
  function D(M) {
    return u.value[M] || {};
  }
  function H(M, j) {
    u.value[M] = j, L.numberFormats = u.value, Fl(L, M, j);
  }
  function re(M, j) {
    u.value[M] = Ve(u.value[M] || {}, j), L.numberFormats = u.value, Fl(L, M, j);
  }
  Vl++, t && Zr && (St(t.locale, (M) => {
    i && (l.value = M, L.locale = M, Gn(L, l.value, a.value));
  }), St(t.fallbackLocale, (M) => {
    i && (a.value = M, L.fallbackLocale = M, Gn(L, l.value, a.value));
  }));
  const q = { id: Vl, locale: P, fallbackLocale: F, get inheritLocale() {
    return i;
  }, set inheritLocale(M) {
    i = M, M && t && (l.value = t.locale.value, a.value = t.fallbackLocale.value, Gn(L, l.value, a.value));
  }, get availableLocales() {
    return Object.keys(d.value).sort();
  }, messages: R, get modifiers() {
    return x;
  }, get pluralRules() {
    return E || {};
  }, get isGlobal() {
    return r;
  }, get missingWarn() {
    return f;
  }, set missingWarn(M) {
    f = M, L.missingWarn = f;
  }, get fallbackWarn() {
    return h;
  }, set fallbackWarn(M) {
    h = M, L.fallbackWarn = h;
  }, get fallbackRoot() {
    return g;
  }, set fallbackRoot(M) {
    g = M;
  }, get fallbackFormat() {
    return y;
  }, set fallbackFormat(M) {
    y = M, L.fallbackFormat = y;
  }, get warnHtmlMessage() {
    return w;
  }, set warnHtmlMessage(M) {
    w = M, L.warnHtmlMessage = M;
  }, get escapeParameter() {
    return _;
  }, set escapeParameter(M) {
    _ = M, L.escapeParameter = M;
  }, t: J, getLocaleMessage: $, setLocaleMessage: K, mergeLocaleMessage: X, getPostTranslationHandler: W, setPostTranslationHandler: T, getMissingHandler: v, setMissingHandler: B, [Gg]: ne };
  return q.datetimeFormats = U, q.numberFormats = k, q.rt = ie, q.te = fe, q.tm = N, q.d = te, q.n = se, q.getDateTimeFormat = Y, q.setDateTimeFormat = A, q.mergeDateTimeFormat = C, q.getNumberFormat = D, q.setNumberFormat = H, q.mergeNumberFormat = re, q[Yg] = n, q[vo] = G, q[Eo] = z, q[Ao] = ee, q;
}
const si = { tag: { type: [String, Object] }, locale: { type: String }, scope: { type: String, validator: (e) => e === "parent" || e === "global", default: "parent" }, i18n: { type: Object } };
function Jg({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [...r, ...s.type === Be ? s.children : [s]], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, Ae());
}
function cu() {
  return Be;
}
const zg = /* @__PURE__ */ $n({ name: "i18n-t", props: Ve({ keypath: { type: String, required: true }, plural: { type: [Number, String], validator: (e) => xe(e) || !isNaN(e) } }, si), setup(e, t) {
  const { slots: n, attrs: r } = t, s = e.i18n || oi({ useScope: e.scope, __useComponent: true });
  return () => {
    const o = Object.keys(n).filter((u) => u !== "_"), i = Ae();
    e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = le(e.plural) ? +e.plural : e.plural);
    const l = Jg(t, o), a = s[vo](e.keypath, l, i), d = Ve(Ae(), r), c = le(e.tag) || ye(e.tag) ? e.tag : cu();
    return Er(c, d, a);
  };
} }), jl = zg;
function Zg(e) {
  return Ue(e) && !le(e[0]);
}
function au(e, t, n, r) {
  const { slots: s, attrs: o } = t;
  return () => {
    const i = { part: true };
    let l = Ae();
    e.locale && (i.locale = e.locale), le(e.format) ? i.key = e.format : ye(e.format) && (le(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((f, h) => n.includes(h) ? Ve(Ae(), f, { [h]: e.format[h] }) : f, Ae()));
    const a = r(e.value, i, l);
    let d = [i.key];
    Ue(a) ? d = a.map((f, h) => {
      const g = s[f.type], y = g ? g({ [f.type]: f.value, index: h, parts: a }) : [f.value];
      return Zg(y) && (y[0].key = `${f.type}-${h}`), y;
    }) : le(a) && (d = [a]);
    const c = Ve(Ae(), o), u = le(e.tag) || ye(e.tag) ? e.tag : cu();
    return Er(u, c, d);
  };
}
const em = /* @__PURE__ */ $n({ name: "i18n-n", props: Ve({ value: { type: Number, required: true }, format: { type: [String, Object] } }, si), setup(e, t) {
  const n = e.i18n || oi({ useScope: e.scope, __useComponent: true });
  return au(e, t, nu, (...r) => n[Ao](...r));
} }), Bl = em;
function tm(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function nm(e) {
  const t = (i) => {
    const { instance: l, value: a } = i;
    if (!l || !l.$) throw yt(ut.UNEXPECTED_ERROR);
    const d = tm(e, l.$), c = Kl(a);
    return [Reflect.apply(d.t, d, [...Gl(c)]), d];
  };
  return { created: (i, l) => {
    const [a, d] = t(l);
    Zr && e.global === d && (i.__i18nWatcher = St(d.locale, () => {
      l.instance && l.instance.$forceUpdate();
    })), i.__composer = d, i.textContent = a;
  }, unmounted: (i) => {
    Zr && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
  }, beforeUpdate: (i, { value: l }) => {
    if (i.__composer) {
      const a = i.__composer, d = Kl(l);
      i.textContent = Reflect.apply(a.t, a, [...Gl(d)]);
    }
  }, getSSRProps: (i) => {
    const [l] = t(i);
    return { textContent: l };
  } };
}
function Kl(e) {
  if (le(e)) return { path: e };
  if (me(e)) {
    if (!("path" in e)) throw yt(ut.REQUIRED_VALUE, "path");
    return e;
  } else throw yt(ut.INVALID_VALUE);
}
function Gl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e, i = {}, l = r || {};
  return le(n) && (i.locale = n), xe(s) && (i.plural = s), xe(o) && (i.plural = o), [t, l, i];
}
function rm(e, t, ...n) {
  const r = me(n[0]) ? n[0] : {};
  (Pe(r.globalInstall) ? r.globalInstall : true) && ([jl.name, "I18nT"].forEach((o) => e.component(o, jl)), [Bl.name, "I18nN"].forEach((o) => e.component(o, Bl)), [ql.name, "I18nD"].forEach((o) => e.component(o, ql))), e.directive("t", nm(t));
}
const sm = tn("global-vue-i18n");
function e0(e = {}) {
  const t = Pe(e.globalInjection) ? e.globalInjection : true, n = /* @__PURE__ */ new Map(), [r, s] = om(e), o = tn("");
  function i(c) {
    return n.get(c) || null;
  }
  function l(c, u) {
    n.set(c, u);
  }
  function a(c) {
    n.delete(c);
  }
  const d = { get mode() {
    return "composition";
  }, async install(c, ...u) {
    if (c.__VUE_I18N_SYMBOL__ = o, c.provide(c.__VUE_I18N_SYMBOL__, d), me(u[0])) {
      const g = u[0];
      d.__composerExtend = g.__composerExtend, d.__vueI18nExtend = g.__vueI18nExtend;
    }
    let f = null;
    t && (f = hm(c, d.global)), rm(c, d, ...u);
    const h = c.unmount;
    c.unmount = () => {
      f && f(), d.dispose(), h();
    };
  }, get global() {
    return s;
  }, dispose() {
    r.stop();
  }, __instances: n, __getInstance: i, __setInstance: l, __deleteInstance: a };
  return d;
}
function oi(e = {}) {
  const t = Ut();
  if (t == null) throw yt(ut.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw yt(ut.NOT_INSTALLED);
  const n = im(t), r = cm(n), s = iu(t), o = lm(e, s);
  if (o === "global") return qg(r, e, s), r;
  if (o === "parent") {
    let a = am(n, t, e.__useComponent);
    return a == null && (a = r), a;
  }
  const i = n;
  let l = i.__getInstance(t);
  if (l == null) {
    const a = Ve({}, e);
    "__i18n" in s && (a.__i18n = s.__i18n), r && (a.__root = r), l = lu(a), i.__composerExtend && (l[So] = i.__composerExtend(l)), fm(i, t, l), i.__setInstance(t, l);
  }
  return l;
}
function om(e, t) {
  const n = Po(), r = n.run(() => lu(e));
  if (r == null) throw yt(ut.UNEXPECTED_ERROR);
  return [n, r];
}
function im(e) {
  const t = rt(e.isCE ? sm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw yt(e.isCE ? ut.NOT_INSTALLED_WITH_PROVIDE : ut.UNEXPECTED_ERROR);
  return t;
}
function lm(e, t) {
  return vs(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function cm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function am(e, t, n = false) {
  let r = null;
  const s = t.root;
  let o = um(t, n);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition" && (r = i.__getInstance(o)), r != null || s === o) break;
    o = o.parent;
  }
  return r;
}
function um(e, t = false) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function fm(e, t, n) {
  yr(() => {
  }, t), ps(() => {
    const r = n;
    e.__deleteInstance(t);
    const s = r[So];
    s && (s(), delete r[So]);
  }, t);
}
const dm = ["locale", "fallbackLocale", "availableLocales"], Yl = ["t", "rt", "d", "n", "tm", "te"];
function hm(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return dm.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o) throw yt(ut.UNEXPECTED_ERROR);
    const i = Re(o.value) ? { get() {
      return o.value.value;
    }, set(l) {
      o.value.value = l;
    } } : { get() {
      return o.get && o.get();
    } };
    Object.defineProperty(n, s, i);
  }), e.config.globalProperties.$i18n = n, Yl.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value) throw yt(ut.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, Yl.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
const pm = /* @__PURE__ */ $n({ name: "i18n-d", props: Ve({ value: { type: [Number, Date], required: true }, format: { type: [String, Object] } }, si), setup(e, t) {
  const n = e.i18n || oi({ useScope: e.scope, __useComponent: true });
  return au(e, t, tu, (...r) => n[Eo](...r));
} }), ql = pm;
Kg();
Sg(sg);
wg(vg);
Cg(Xa);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Jo();
  e.__INTLIFY__ = true, og(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
function gm(e, t) {
  return t.forEach(function(n) {
    n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(r) {
      if (r !== "default" && !(r in e)) {
        var s = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(e, r, s.get ? s : { enumerable: true, get: function() {
          return n[r];
        } });
      }
    });
  }), Object.freeze(e);
}
function uu(e, t) {
  return new Promise(function(n, r) {
    let s;
    return mm(e).then(function(o) {
      try {
        return s = o, n(new Blob([t.slice(0, 2), s, t.slice(2)], { type: "image/jpeg" }));
      } catch (i) {
        return r(i);
      }
    }, r);
  });
}
const mm = (e) => new Promise((t, n) => {
  const r = new FileReader();
  r.addEventListener("load", ({ target: { result: s } }) => {
    const o = new DataView(s);
    let i = 0;
    if (o.getUint16(i) !== 65496) return n("not a valid JPEG");
    for (i += 2; ; ) {
      const l = o.getUint16(i);
      if (l === 65498) break;
      const a = o.getUint16(i + 2);
      if (l === 65505 && o.getUint32(i + 4) === 1165519206) {
        const d = i + 10;
        let c;
        switch (o.getUint16(d)) {
          case 18761:
            c = true;
            break;
          case 19789:
            c = false;
            break;
          default:
            return n("TIFF header contains invalid endian");
        }
        if (o.getUint16(d + 2, c) !== 42) return n("TIFF header contains invalid version");
        const u = o.getUint32(d + 4, c), f = d + u + 2 + 12 * o.getUint16(d + u, c);
        for (let h = d + u + 2; h < f; h += 12) if (o.getUint16(h, c) == 274) {
          if (o.getUint16(h + 2, c) !== 3) return n("Orientation data type is invalid");
          if (o.getUint32(h + 4, c) !== 1) return n("Orientation data count is invalid");
          o.setUint16(h + 8, 1, c);
          break;
        }
        return t(s.slice(i, i + 2 + a));
      }
      i += 2 + a;
    }
    return t(new Blob());
  }), r.readAsArrayBuffer(e);
});
var ns = {}, _m = { get exports() {
  return ns;
}, set exports(e) {
  ns = e;
} };
(function(e) {
  var t, n, r = {};
  _m.exports = r, r.parse = function(s, o) {
    for (var i = r.bin.readUshort, l = r.bin.readUint, a = 0, d = {}, c = new Uint8Array(s), u = c.length - 4; l(c, u) != 101010256; ) u--;
    a = u, a += 4;
    var f = i(c, a += 4);
    i(c, a += 2);
    var h = l(c, a += 2), g = l(c, a += 4);
    a += 4, a = g;
    for (var y = 0; y < f; y++) {
      l(c, a), a += 4, a += 4, a += 4, l(c, a += 4), h = l(c, a += 4);
      var O = l(c, a += 4), p = i(c, a += 4), S = i(c, a + 2), w = i(c, a + 4);
      a += 6;
      var _ = l(c, a += 8);
      a += 4, a += p + S + w, r._readLocal(c, _, d, h, O, o);
    }
    return d;
  }, r._readLocal = function(s, o, i, l, a, d) {
    var c = r.bin.readUshort, u = r.bin.readUint;
    u(s, o), c(s, o += 4), c(s, o += 2);
    var f = c(s, o += 2);
    u(s, o += 2), u(s, o += 4), o += 4;
    var h = c(s, o += 8), g = c(s, o += 2);
    o += 2;
    var y = r.bin.readUTF8(s, o, h);
    if (o += h, o += g, d) i[y] = { size: a, csize: l };
    else {
      var O = new Uint8Array(s.buffer, o);
      if (f == 0) i[y] = new Uint8Array(O.buffer.slice(o, o + l));
      else {
        if (f != 8) throw "unknown compression method: " + f;
        var p = new Uint8Array(a);
        r.inflateRaw(O, p), i[y] = p;
      }
    }
  }, r.inflateRaw = function(s, o) {
    return r.F.inflate(s, o);
  }, r.inflate = function(s, o) {
    return s[0], s[1], r.inflateRaw(new Uint8Array(s.buffer, s.byteOffset + 2, s.length - 6), o);
  }, r.deflate = function(s, o) {
    o == null && (o = { level: 6 });
    var i = 0, l = new Uint8Array(50 + Math.floor(1.1 * s.length));
    l[i] = 120, l[i + 1] = 156, i += 2, i = r.F.deflateRaw(s, l, i, o.level);
    var a = r.adler(s, 0, s.length);
    return l[i + 0] = a >>> 24 & 255, l[i + 1] = a >>> 16 & 255, l[i + 2] = a >>> 8 & 255, l[i + 3] = a >>> 0 & 255, new Uint8Array(l.buffer, 0, i + 4);
  }, r.deflateRaw = function(s, o) {
    o == null && (o = { level: 6 });
    var i = new Uint8Array(50 + Math.floor(1.1 * s.length)), l = r.F.deflateRaw(s, i, l, o.level);
    return new Uint8Array(i.buffer, 0, l);
  }, r.encode = function(s, o) {
    o == null && (o = false);
    var i = 0, l = r.bin.writeUint, a = r.bin.writeUshort, d = {};
    for (var c in s) {
      var u = !r._noNeed(c) && !o, f = s[c], h = r.crc.crc(f, 0, f.length);
      d[c] = { cpr: u, usize: f.length, crc: h, file: u ? r.deflateRaw(f) : f };
    }
    for (var c in d) i += d[c].file.length + 30 + 46 + 2 * r.bin.sizeUTF8(c);
    i += 22;
    var g = new Uint8Array(i), y = 0, O = [];
    for (var c in d) {
      var p = d[c];
      O.push(y), y = r._writeHeader(g, y, c, p, 0);
    }
    var S = 0, w = y;
    for (var c in d) p = d[c], O.push(y), y = r._writeHeader(g, y, c, p, 1, O[S++]);
    var _ = y - w;
    return l(g, y, 101010256), y += 4, a(g, y += 4, S), a(g, y += 2, S), l(g, y += 2, _), l(g, y += 4, w), y += 4, y += 2, g.buffer;
  }, r._noNeed = function(s) {
    var o = s.split(".").pop().toLowerCase();
    return "png,jpg,jpeg,zip".indexOf(o) != -1;
  }, r._writeHeader = function(s, o, i, l, a, d) {
    var c = r.bin.writeUint, u = r.bin.writeUshort, f = l.file;
    return c(s, o, a == 0 ? 67324752 : 33639248), o += 4, a == 1 && (o += 2), u(s, o, 20), u(s, o += 2, 0), u(s, o += 2, l.cpr ? 8 : 0), c(s, o += 2, 0), c(s, o += 4, l.crc), c(s, o += 4, f.length), c(s, o += 4, l.usize), u(s, o += 4, r.bin.sizeUTF8(i)), u(s, o += 2, 0), o += 2, a == 1 && (o += 2, o += 2, c(s, o += 6, d), o += 4), o += r.bin.writeUTF8(s, o, i), a == 0 && (s.set(f, o), o += f.length), o;
  }, r.crc = { table: function() {
    for (var s = new Uint32Array(256), o = 0; o < 256; o++) {
      for (var i = o, l = 0; l < 8; l++) 1 & i ? i = 3988292384 ^ i >>> 1 : i >>>= 1;
      s[o] = i;
    }
    return s;
  }(), update: function(s, o, i, l) {
    for (var a = 0; a < l; a++) s = r.crc.table[255 & (s ^ o[i + a])] ^ s >>> 8;
    return s;
  }, crc: function(s, o, i) {
    return 4294967295 ^ r.crc.update(4294967295, s, o, i);
  } }, r.adler = function(s, o, i) {
    for (var l = 1, a = 0, d = o, c = o + i; d < c; ) {
      for (var u = Math.min(d + 5552, c); d < u; ) a += l += s[d++];
      l %= 65521, a %= 65521;
    }
    return a << 16 | l;
  }, r.bin = { readUshort: function(s, o) {
    return s[o] | s[o + 1] << 8;
  }, writeUshort: function(s, o, i) {
    s[o] = 255 & i, s[o + 1] = i >> 8 & 255;
  }, readUint: function(s, o) {
    return 16777216 * s[o + 3] + (s[o + 2] << 16 | s[o + 1] << 8 | s[o]);
  }, writeUint: function(s, o, i) {
    s[o] = 255 & i, s[o + 1] = i >> 8 & 255, s[o + 2] = i >> 16 & 255, s[o + 3] = i >> 24 & 255;
  }, readASCII: function(s, o, i) {
    for (var l = "", a = 0; a < i; a++) l += String.fromCharCode(s[o + a]);
    return l;
  }, writeASCII: function(s, o, i) {
    for (var l = 0; l < i.length; l++) s[o + l] = i.charCodeAt(l);
  }, pad: function(s) {
    return s.length < 2 ? "0" + s : s;
  }, readUTF8: function(s, o, i) {
    for (var l, a = "", d = 0; d < i; d++) a += "%" + r.bin.pad(s[o + d].toString(16));
    try {
      l = decodeURIComponent(a);
    } catch {
      return r.bin.readASCII(s, o, i);
    }
    return l;
  }, writeUTF8: function(s, o, i) {
    for (var l = i.length, a = 0, d = 0; d < l; d++) {
      var c = i.charCodeAt(d);
      if ((4294967168 & c) == 0) s[o + a] = c, a++;
      else if ((4294965248 & c) == 0) s[o + a] = 192 | c >> 6, s[o + a + 1] = 128 | c >> 0 & 63, a += 2;
      else if ((4294901760 & c) == 0) s[o + a] = 224 | c >> 12, s[o + a + 1] = 128 | c >> 6 & 63, s[o + a + 2] = 128 | c >> 0 & 63, a += 3;
      else {
        if ((4292870144 & c) != 0) throw "e";
        s[o + a] = 240 | c >> 18, s[o + a + 1] = 128 | c >> 12 & 63, s[o + a + 2] = 128 | c >> 6 & 63, s[o + a + 3] = 128 | c >> 0 & 63, a += 4;
      }
    }
    return a;
  }, sizeUTF8: function(s) {
    for (var o = s.length, i = 0, l = 0; l < o; l++) {
      var a = s.charCodeAt(l);
      if ((4294967168 & a) == 0) i++;
      else if ((4294965248 & a) == 0) i += 2;
      else if ((4294901760 & a) == 0) i += 3;
      else {
        if ((4292870144 & a) != 0) throw "e";
        i += 4;
      }
    }
    return i;
  } }, r.F = {}, r.F.deflateRaw = function(s, o, i, l) {
    var a = [[0, 0, 0, 0, 0], [4, 4, 8, 4, 0], [4, 5, 16, 8, 0], [4, 6, 16, 16, 0], [4, 10, 16, 32, 0], [8, 16, 32, 32, 0], [8, 16, 128, 128, 0], [8, 32, 128, 256, 0], [32, 128, 258, 1024, 1], [32, 258, 258, 4096, 1]][l], d = r.F.U, c = r.F._goodIndex;
    r.F._hash;
    var u = r.F._putsE, f = 0, h = i << 3, g = 0, y = s.length;
    if (l == 0) {
      for (; f < y; ) u(o, h, f + (F = Math.min(65535, y - f)) == y ? 1 : 0), h = r.F._copyExact(s, f, F, o, h + 8), f += F;
      return h >>> 3;
    }
    var O = d.lits, p = d.strt, S = d.prev, w = 0, _ = 0, x = 0, E = 0, L = 0, b = 0;
    for (y > 2 && (p[b = r.F._hash(s, 0)] = 0), f = 0; f < y; f++) {
      if (L = b, f + 1 < y - 2) {
        b = r.F._hash(s, f + 1);
        var m = f + 1 & 32767;
        S[m] = p[b], p[b] = m;
      }
      if (g <= f) {
        (w > 14e3 || _ > 26697) && y - f > 100 && (g < f && (O[w] = f - g, w += 2, g = f), h = r.F._writeBlock(f == y - 1 || g == y ? 1 : 0, O, w, E, s, x, f - x, o, h), w = _ = E = 0, x = f);
        var P = 0;
        f < y - 2 && (P = r.F._bestMatch(s, f, S, L, Math.min(a[2], y - f), a[3]));
        var F = P >>> 16, R = 65535 & P;
        if (P != 0) {
          R = 65535 & P;
          var U = c(F = P >>> 16, d.of0);
          d.lhst[257 + U]++;
          var k = c(R, d.df0);
          d.dhst[k]++, E += d.exb[U] + d.dxb[k], O[w] = F << 23 | f - g, O[w + 1] = R << 16 | U << 8 | k, w += 2, g = f + F;
        } else d.lhst[s[f]]++;
        _++;
      }
    }
    for (x == f && s.length != 0 || (g < f && (O[w] = f - g, w += 2, g = f), h = r.F._writeBlock(1, O, w, E, s, x, f - x, o, h), w = 0, _ = 0, w = _ = E = 0, x = f); (7 & h) != 0; ) h++;
    return h >>> 3;
  }, r.F._bestMatch = function(s, o, i, l, a, d) {
    var c = 32767 & o, u = i[c], f = c - u + 32768 & 32767;
    if (u == c || l != r.F._hash(s, o - f)) return 0;
    for (var h = 0, g = 0, y = Math.min(32767, o); f <= y && --d != 0 && u != c; ) {
      if (h == 0 || s[o + h] == s[o + h - f]) {
        var O = r.F._howLong(s, o, f);
        if (O > h) {
          if (g = f, (h = O) >= a) break;
          f + 2 < O && (O = f + 2);
          for (var p = 0, S = 0; S < O - 2; S++) {
            var w = o - f + S + 32768 & 32767, _ = w - i[w] + 32768 & 32767;
            _ > p && (p = _, u = w);
          }
        }
      }
      f += (c = u) - (u = i[c]) + 32768 & 32767;
    }
    return h << 16 | g;
  }, r.F._howLong = function(s, o, i) {
    if (s[o] != s[o - i] || s[o + 1] != s[o + 1 - i] || s[o + 2] != s[o + 2 - i]) return 0;
    var l = o, a = Math.min(s.length, o + 258);
    for (o += 3; o < a && s[o] == s[o - i]; ) o++;
    return o - l;
  }, r.F._hash = function(s, o) {
    return (s[o] << 8 | s[o + 1]) + (s[o + 2] << 4) & 65535;
  }, r.saved = 0, r.F._writeBlock = function(s, o, i, l, a, d, c, u, f) {
    var h, g, y, O, p, S, w, _, x, E = r.F.U, L = r.F._putsF, b = r.F._putsE;
    E.lhst[256]++, g = (h = r.F.getTrees())[0], y = h[1], O = h[2], p = h[3], S = h[4], w = h[5], _ = h[6], x = h[7];
    var m = 32 + ((f + 3 & 7) == 0 ? 0 : 8 - (f + 3 & 7)) + (c << 3), P = l + r.F.contSize(E.fltree, E.lhst) + r.F.contSize(E.fdtree, E.dhst), F = l + r.F.contSize(E.ltree, E.lhst) + r.F.contSize(E.dtree, E.dhst);
    F += 14 + 3 * w + r.F.contSize(E.itree, E.ihst) + (2 * E.ihst[16] + 3 * E.ihst[17] + 7 * E.ihst[18]);
    for (var R = 0; R < 286; R++) E.lhst[R] = 0;
    for (R = 0; R < 30; R++) E.dhst[R] = 0;
    for (R = 0; R < 19; R++) E.ihst[R] = 0;
    var U = m < P && m < F ? 0 : P < F ? 1 : 2;
    if (L(u, f, s), L(u, f + 1, U), f += 3, U == 0) {
      for (; (7 & f) != 0; ) f++;
      f = r.F._copyExact(a, d, c, u, f);
    } else {
      var k, W;
      if (U == 1 && (k = E.fltree, W = E.fdtree), U == 2) {
        r.F.makeCodes(E.ltree, g), r.F.revCodes(E.ltree, g), r.F.makeCodes(E.dtree, y), r.F.revCodes(E.dtree, y), r.F.makeCodes(E.itree, O), r.F.revCodes(E.itree, O), k = E.ltree, W = E.dtree, b(u, f, p - 257), b(u, f += 5, S - 1), b(u, f += 5, w - 4), f += 4;
        for (var T = 0; T < w; T++) b(u, f + 3 * T, E.itree[1 + (E.ordr[T] << 1)]);
        f += 3 * w, f = r.F._codeTiny(_, E.itree, u, f), f = r.F._codeTiny(x, E.itree, u, f);
      }
      for (var v = d, B = 0; B < i; B += 2) {
        for (var V = o[B], J = V >>> 23, ie = v + (8388607 & V); v < ie; ) f = r.F._writeLit(a[v++], k, u, f);
        if (J != 0) {
          var te = o[B + 1], se = te >> 16, Z = te >> 8 & 255, Q = 255 & te;
          b(u, f = r.F._writeLit(257 + Z, k, u, f), J - E.of0[Z]), f += E.exb[Z], L(u, f = r.F._writeLit(Q, W, u, f), se - E.df0[Q]), f += E.dxb[Q], v += J;
        }
      }
      f = r.F._writeLit(256, k, u, f);
    }
    return f;
  }, r.F._copyExact = function(s, o, i, l, a) {
    var d = a >>> 3;
    return l[d] = i, l[d + 1] = i >>> 8, l[d + 2] = 255 - l[d], l[d + 3] = 255 - l[d + 1], d += 4, l.set(new Uint8Array(s.buffer, o, i), d), a + (i + 4 << 3);
  }, r.F.getTrees = function() {
    for (var s = r.F.U, o = r.F._hufTree(s.lhst, s.ltree, 15), i = r.F._hufTree(s.dhst, s.dtree, 15), l = [], a = r.F._lenCodes(s.ltree, l), d = [], c = r.F._lenCodes(s.dtree, d), u = 0; u < l.length; u += 2) s.ihst[l[u]]++;
    for (u = 0; u < d.length; u += 2) s.ihst[d[u]]++;
    for (var f = r.F._hufTree(s.ihst, s.itree, 7), h = 19; h > 4 && s.itree[1 + (s.ordr[h - 1] << 1)] == 0; ) h--;
    return [o, i, f, a, c, h, l, d];
  }, r.F.getSecond = function(s) {
    for (var o = [], i = 0; i < s.length; i += 2) o.push(s[i + 1]);
    return o;
  }, r.F.nonZero = function(s) {
    for (var o = "", i = 0; i < s.length; i += 2) s[i + 1] != 0 && (o += (i >> 1) + ",");
    return o;
  }, r.F.contSize = function(s, o) {
    for (var i = 0, l = 0; l < o.length; l++) i += o[l] * s[1 + (l << 1)];
    return i;
  }, r.F._codeTiny = function(s, o, i, l) {
    for (var a = 0; a < s.length; a += 2) {
      var d = s[a], c = s[a + 1];
      l = r.F._writeLit(d, o, i, l);
      var u = d == 16 ? 2 : d == 17 ? 3 : 7;
      d > 15 && (r.F._putsE(i, l, c, u), l += u);
    }
    return l;
  }, r.F._lenCodes = function(s, o) {
    for (var i = s.length; i != 2 && s[i - 1] == 0; ) i -= 2;
    for (var l = 0; l < i; l += 2) {
      var a = s[l + 1], d = l + 3 < i ? s[l + 3] : -1, c = l + 5 < i ? s[l + 5] : -1, u = l == 0 ? -1 : s[l - 1];
      if (a == 0 && d == a && c == a) {
        for (var f = l + 5; f + 2 < i && s[f + 2] == a; ) f += 2;
        (h = Math.min(f + 1 - l >>> 1, 138)) < 11 ? o.push(17, h - 3) : o.push(18, h - 11), l += 2 * h - 2;
      } else if (a == u && d == a && c == a) {
        for (f = l + 5; f + 2 < i && s[f + 2] == a; ) f += 2;
        var h = Math.min(f + 1 - l >>> 1, 6);
        o.push(16, h - 3), l += 2 * h - 2;
      } else o.push(a, 0);
    }
    return i >>> 1;
  }, r.F._hufTree = function(s, o, i) {
    var l = [], a = s.length, d = o.length, c = 0;
    for (c = 0; c < d; c += 2) o[c] = 0, o[c + 1] = 0;
    for (c = 0; c < a; c++) s[c] != 0 && l.push({ lit: c, f: s[c] });
    var u = l.length, f = l.slice(0);
    if (u == 0) return 0;
    if (u == 1) {
      var h = l[0].lit;
      return f = h == 0 ? 1 : 0, o[1 + (h << 1)] = 1, o[1 + (f << 1)] = 1, 1;
    }
    l.sort(function(_, x) {
      return _.f - x.f;
    });
    var g = l[0], y = l[1], O = 0, p = 1, S = 2;
    for (l[0] = { lit: -1, f: g.f + y.f, l: g, r: y, d: 0 }; p != u - 1; ) g = O != p && (S == u || l[O].f < l[S].f) ? l[O++] : l[S++], y = O != p && (S == u || l[O].f < l[S].f) ? l[O++] : l[S++], l[p++] = { lit: -1, f: g.f + y.f, l: g, r: y };
    var w = r.F.setDepth(l[p - 1], 0);
    for (w > i && (r.F.restrictDepth(f, i, w), w = i), c = 0; c < u; c++) o[1 + (f[c].lit << 1)] = f[c].d;
    return w;
  }, r.F.setDepth = function(s, o) {
    return s.lit != -1 ? (s.d = o, o) : Math.max(r.F.setDepth(s.l, o + 1), r.F.setDepth(s.r, o + 1));
  }, r.F.restrictDepth = function(s, o, i) {
    var l = 0, a = 1 << i - o, d = 0;
    for (s.sort(function(u, f) {
      return f.d == u.d ? u.f - f.f : f.d - u.d;
    }), l = 0; l < s.length && s[l].d > o; l++) {
      var c = s[l].d;
      s[l].d = o, d += a - (1 << i - c);
    }
    for (d >>>= i - o; d > 0; ) (c = s[l].d) < o ? (s[l].d++, d -= 1 << o - c - 1) : l++;
    for (; l >= 0; l--) s[l].d == o && d < 0 && (s[l].d--, d++);
    d != 0;
  }, r.F._goodIndex = function(s, o) {
    var i = 0;
    return o[16 | i] <= s && (i |= 16), o[8 | i] <= s && (i |= 8), o[4 | i] <= s && (i |= 4), o[2 | i] <= s && (i |= 2), o[1 | i] <= s && (i |= 1), i;
  }, r.F._writeLit = function(s, o, i, l) {
    return r.F._putsF(i, l, o[s << 1]), l + o[1 + (s << 1)];
  }, r.F.inflate = function(s, o) {
    var i = Uint8Array;
    if (s[0] == 3 && s[1] == 0) return o || new i(0);
    var l = r.F, a = l._bitsF, d = l._bitsE, c = l._decodeTiny, u = l.makeCodes, f = l.codes2map, h = l._get17, g = l.U, y = o == null;
    y && (o = new i(s.length >>> 2 << 3));
    for (var O, p, S = 0, w = 0, _ = 0, x = 0, E = 0, L = 0, b = 0, m = 0, P = 0; S == 0; ) if (S = a(s, P, 1), w = a(s, P + 1, 2), P += 3, w != 0) {
      if (y && (o = r.F._check(o, m + (1 << 17))), w == 1 && (O = g.flmap, p = g.fdmap, L = 511, b = 31), w == 2) {
        _ = d(s, P, 5) + 257, x = d(s, P + 5, 5) + 1, E = d(s, P + 10, 4) + 4, P += 14;
        for (var F = 0; F < 38; F += 2) g.itree[F] = 0, g.itree[F + 1] = 0;
        var R = 1;
        for (F = 0; F < E; F++) {
          var U = d(s, P + 3 * F, 3);
          g.itree[1 + (g.ordr[F] << 1)] = U, U > R && (R = U);
        }
        P += 3 * E, u(g.itree, R), f(g.itree, R, g.imap), O = g.lmap, p = g.dmap, P = c(g.imap, (1 << R) - 1, _ + x, s, P, g.ttree);
        var k = l._copyOut(g.ttree, 0, _, g.ltree);
        L = (1 << k) - 1;
        var W = l._copyOut(g.ttree, _, x, g.dtree);
        b = (1 << W) - 1, u(g.ltree, k), f(g.ltree, k, O), u(g.dtree, W), f(g.dtree, W, p);
      }
      for (; ; ) {
        var T = O[h(s, P) & L];
        P += 15 & T;
        var v = T >>> 4;
        if (!(v >>> 8)) o[m++] = v;
        else {
          if (v == 256) break;
          var B = m + v - 254;
          if (v > 264) {
            var V = g.ldef[v - 257];
            B = m + (V >>> 3) + d(s, P, 7 & V), P += 7 & V;
          }
          var J = p[h(s, P) & b];
          P += 15 & J;
          var ie = J >>> 4, te = g.ddef[ie], se = (te >>> 4) + a(s, P, 15 & te);
          for (P += 15 & te, y && (o = r.F._check(o, m + (1 << 17))); m < B; ) o[m] = o[m++ - se], o[m] = o[m++ - se], o[m] = o[m++ - se], o[m] = o[m++ - se];
          m = B;
        }
      }
    } else {
      (7 & P) != 0 && (P += 8 - (7 & P));
      var Z = 4 + (P >>> 3), Q = s[Z - 4] | s[Z - 3] << 8;
      y && (o = r.F._check(o, m + Q)), o.set(new i(s.buffer, s.byteOffset + Z, Q), m), P = Z + Q << 3, m += Q;
    }
    return o.length == m ? o : o.slice(0, m);
  }, r.F._check = function(s, o) {
    var i = s.length;
    if (o <= i) return s;
    var l = new Uint8Array(Math.max(i << 1, o));
    return l.set(s, 0), l;
  }, r.F._decodeTiny = function(s, o, i, l, a, d) {
    for (var c = r.F._bitsE, u = r.F._get17, f = 0; f < i; ) {
      var h = s[u(l, a) & o];
      a += 15 & h;
      var g = h >>> 4;
      if (g <= 15) d[f] = g, f++;
      else {
        var y = 0, O = 0;
        g == 16 ? (O = 3 + c(l, a, 2), a += 2, y = d[f - 1]) : g == 17 ? (O = 3 + c(l, a, 3), a += 3) : g == 18 && (O = 11 + c(l, a, 7), a += 7);
        for (var p = f + O; f < p; ) d[f] = y, f++;
      }
    }
    return a;
  }, r.F._copyOut = function(s, o, i, l) {
    for (var a = 0, d = 0, c = l.length >>> 1; d < i; ) {
      var u = s[d + o];
      l[d << 1] = 0, l[1 + (d << 1)] = u, u > a && (a = u), d++;
    }
    for (; d < c; ) l[d << 1] = 0, l[1 + (d << 1)] = 0, d++;
    return a;
  }, r.F.makeCodes = function(s, o) {
    for (var i, l, a, d, c = r.F.U, u = s.length, f = c.bl_count, h = 0; h <= o; h++) f[h] = 0;
    for (h = 1; h < u; h += 2) f[s[h]]++;
    var g = c.next_code;
    for (i = 0, f[0] = 0, l = 1; l <= o; l++) i = i + f[l - 1] << 1, g[l] = i;
    for (a = 0; a < u; a += 2) (d = s[a + 1]) != 0 && (s[a] = g[d], g[d]++);
  }, r.F.codes2map = function(s, o, i) {
    for (var l = s.length, a = r.F.U.rev15, d = 0; d < l; d += 2) if (s[d + 1] != 0) for (var c = d >> 1, u = s[d + 1], f = c << 4 | u, h = o - u, g = s[d] << h, y = g + (1 << h); g != y; ) i[a[g] >>> 15 - o] = f, g++;
  }, r.F.revCodes = function(s, o) {
    for (var i = r.F.U.rev15, l = 15 - o, a = 0; a < s.length; a += 2) {
      var d = s[a] << o - s[a + 1];
      s[a] = i[d] >>> l;
    }
  }, r.F._putsE = function(s, o, i) {
    i <<= 7 & o;
    var l = o >>> 3;
    s[l] |= i, s[l + 1] |= i >>> 8;
  }, r.F._putsF = function(s, o, i) {
    i <<= 7 & o;
    var l = o >>> 3;
    s[l] |= i, s[l + 1] |= i >>> 8, s[l + 2] |= i >>> 16;
  }, r.F._bitsE = function(s, o, i) {
    return (s[o >>> 3] | s[1 + (o >>> 3)] << 8) >>> (7 & o) & (1 << i) - 1;
  }, r.F._bitsF = function(s, o, i) {
    return (s[o >>> 3] | s[1 + (o >>> 3)] << 8 | s[2 + (o >>> 3)] << 16) >>> (7 & o) & (1 << i) - 1;
  }, r.F._get17 = function(s, o) {
    return (s[o >>> 3] | s[1 + (o >>> 3)] << 8 | s[2 + (o >>> 3)] << 16) >>> (7 & o);
  }, r.F._get25 = function(s, o) {
    return (s[o >>> 3] | s[1 + (o >>> 3)] << 8 | s[2 + (o >>> 3)] << 16 | s[3 + (o >>> 3)] << 24) >>> (7 & o);
  }, r.F.U = (t = Uint16Array, n = Uint32Array, { next_code: new t(16), bl_count: new t(16), ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], ldef: new t(32), df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], ddef: new n(32), flmap: new t(512), fltree: [], fdmap: new t(32), fdtree: [], lmap: new t(32768), ltree: [], ttree: [], dmap: new t(32768), dtree: [], imap: new t(512), itree: [], rev15: new t(32768), lhst: new n(286), dhst: new n(30), ihst: new n(19), lits: new n(15e3), strt: new t(65536), prev: new t(32768) }), function() {
    for (var s = r.F.U, o = 0; o < 32768; o++) {
      var i = o;
      i = (4278255360 & (i = (4042322160 & (i = (3435973836 & (i = (2863311530 & i) >>> 1 | (1431655765 & i) << 1)) >>> 2 | (858993459 & i) << 2)) >>> 4 | (252645135 & i) << 4)) >>> 8 | (16711935 & i) << 8, s.rev15[o] = (i >>> 16 | i << 16) >>> 17;
    }
    function l(a, d, c) {
      for (; d-- != 0; ) a.push(0, c);
    }
    for (o = 0; o < 32; o++) s.ldef[o] = s.of0[o] << 3 | s.exb[o], s.ddef[o] = s.df0[o] << 4 | s.dxb[o];
    l(s.fltree, 144, 8), l(s.fltree, 112, 9), l(s.fltree, 24, 7), l(s.fltree, 8, 8), r.F.makeCodes(s.fltree, 9), r.F.codes2map(s.fltree, 9, s.flmap), r.F.revCodes(s.fltree, 9), l(s.fdtree, 32, 5), r.F.makeCodes(s.fdtree, 5), r.F.codes2map(s.fdtree, 5, s.fdmap), r.F.revCodes(s.fdtree, 5), l(s.itree, 19, 0), l(s.ltree, 286, 0), l(s.dtree, 30, 0), l(s.ttree, 320, 0);
  }();
})();
var ym = gm({ __proto__: null, default: ns }, [ns]);
const ft = function() {
  var e = { nextZero(c, u) {
    for (; c[u] != 0; ) u++;
    return u;
  }, readUshort: (c, u) => c[u] << 8 | c[u + 1], writeUshort(c, u, f) {
    c[u] = f >> 8 & 255, c[u + 1] = 255 & f;
  }, readUint: (c, u) => 16777216 * c[u] + (c[u + 1] << 16 | c[u + 2] << 8 | c[u + 3]), writeUint(c, u, f) {
    c[u] = f >> 24 & 255, c[u + 1] = f >> 16 & 255, c[u + 2] = f >> 8 & 255, c[u + 3] = 255 & f;
  }, readASCII(c, u, f) {
    let h = "";
    for (let g = 0; g < f; g++) h += String.fromCharCode(c[u + g]);
    return h;
  }, writeASCII(c, u, f) {
    for (let h = 0; h < f.length; h++) c[u + h] = f.charCodeAt(h);
  }, readBytes(c, u, f) {
    const h = [];
    for (let g = 0; g < f; g++) h.push(c[u + g]);
    return h;
  }, pad: (c) => c.length < 2 ? `0${c}` : c, readUTF8(c, u, f) {
    let h, g = "";
    for (let y = 0; y < f; y++) g += `%${e.pad(c[u + y].toString(16))}`;
    try {
      h = decodeURIComponent(g);
    } catch {
      return e.readASCII(c, u, f);
    }
    return h;
  } };
  function t(c, u, f, h) {
    const g = u * f, y = o(h), O = Math.ceil(u * y / 8), p = new Uint8Array(4 * g), S = new Uint32Array(p.buffer), { ctype: w } = h, { depth: _ } = h, x = e.readUshort;
    if (w == 6) {
      const V = g << 2;
      if (_ == 8) for (var E = 0; E < V; E += 4) p[E] = c[E], p[E + 1] = c[E + 1], p[E + 2] = c[E + 2], p[E + 3] = c[E + 3];
      if (_ == 16) for (E = 0; E < V; E++) p[E] = c[E << 1];
    } else if (w == 2) {
      const V = h.tabs.tRNS;
      if (V == null) {
        if (_ == 8) for (E = 0; E < g; E++) {
          var L = 3 * E;
          S[E] = 255 << 24 | c[L + 2] << 16 | c[L + 1] << 8 | c[L];
        }
        if (_ == 16) for (E = 0; E < g; E++) L = 6 * E, S[E] = 255 << 24 | c[L + 4] << 16 | c[L + 2] << 8 | c[L];
      } else {
        var b = V[0];
        const J = V[1], ie = V[2];
        if (_ == 8) for (E = 0; E < g; E++) {
          var m = E << 2;
          L = 3 * E, S[E] = 255 << 24 | c[L + 2] << 16 | c[L + 1] << 8 | c[L], c[L] == b && c[L + 1] == J && c[L + 2] == ie && (p[m + 3] = 0);
        }
        if (_ == 16) for (E = 0; E < g; E++) m = E << 2, L = 6 * E, S[E] = 255 << 24 | c[L + 4] << 16 | c[L + 2] << 8 | c[L], x(c, L) == b && x(c, L + 2) == J && x(c, L + 4) == ie && (p[m + 3] = 0);
      }
    } else if (w == 3) {
      const V = h.tabs.PLTE, J = h.tabs.tRNS, ie = J ? J.length : 0;
      if (_ == 1) for (var P = 0; P < f; P++) {
        var F = P * O, R = P * u;
        for (E = 0; E < u; E++) {
          m = R + E << 2;
          var U = 3 * (k = c[F + (E >> 3)] >> 7 - ((7 & E) << 0) & 1);
          p[m] = V[U], p[m + 1] = V[U + 1], p[m + 2] = V[U + 2], p[m + 3] = k < ie ? J[k] : 255;
        }
      }
      if (_ == 2) for (P = 0; P < f; P++) for (F = P * O, R = P * u, E = 0; E < u; E++) m = R + E << 2, U = 3 * (k = c[F + (E >> 2)] >> 6 - ((3 & E) << 1) & 3), p[m] = V[U], p[m + 1] = V[U + 1], p[m + 2] = V[U + 2], p[m + 3] = k < ie ? J[k] : 255;
      if (_ == 4) for (P = 0; P < f; P++) for (F = P * O, R = P * u, E = 0; E < u; E++) m = R + E << 2, U = 3 * (k = c[F + (E >> 1)] >> 4 - ((1 & E) << 2) & 15), p[m] = V[U], p[m + 1] = V[U + 1], p[m + 2] = V[U + 2], p[m + 3] = k < ie ? J[k] : 255;
      if (_ == 8) for (E = 0; E < g; E++) {
        var k;
        m = E << 2, U = 3 * (k = c[E]), p[m] = V[U], p[m + 1] = V[U + 1], p[m + 2] = V[U + 2], p[m + 3] = k < ie ? J[k] : 255;
      }
    } else if (w == 4) {
      if (_ == 8) for (E = 0; E < g; E++) {
        m = E << 2;
        var W = c[T = E << 1];
        p[m] = W, p[m + 1] = W, p[m + 2] = W, p[m + 3] = c[T + 1];
      }
      if (_ == 16) for (E = 0; E < g; E++) {
        var T;
        m = E << 2, W = c[T = E << 2], p[m] = W, p[m + 1] = W, p[m + 2] = W, p[m + 3] = c[T + 2];
      }
    } else if (w == 0) for (b = h.tabs.tRNS ? h.tabs.tRNS : -1, P = 0; P < f; P++) {
      const V = P * O, J = P * u;
      if (_ == 1) for (var v = 0; v < u; v++) {
        var B = (W = 255 * (c[V + (v >>> 3)] >>> 7 - (7 & v) & 1)) == 255 * b ? 0 : 255;
        S[J + v] = B << 24 | W << 16 | W << 8 | W;
      }
      else if (_ == 2) for (v = 0; v < u; v++) B = (W = 85 * (c[V + (v >>> 2)] >>> 6 - ((3 & v) << 1) & 3)) == 85 * b ? 0 : 255, S[J + v] = B << 24 | W << 16 | W << 8 | W;
      else if (_ == 4) for (v = 0; v < u; v++) B = (W = 17 * (c[V + (v >>> 1)] >>> 4 - ((1 & v) << 2) & 15)) == 17 * b ? 0 : 255, S[J + v] = B << 24 | W << 16 | W << 8 | W;
      else if (_ == 8) for (v = 0; v < u; v++) B = (W = c[V + v]) == b ? 0 : 255, S[J + v] = B << 24 | W << 16 | W << 8 | W;
      else if (_ == 16) for (v = 0; v < u; v++) W = c[V + (v << 1)], B = x(c, V + (v << 1)) == b ? 0 : 255, S[J + v] = B << 24 | W << 16 | W << 8 | W;
    }
    return p;
  }
  function n(c, u, f, h) {
    const g = o(c), y = Math.ceil(f * g / 8), O = new Uint8Array((y + 1 + c.interlace) * h);
    return u = c.tabs.CgBI ? s(u, O) : r(u, O), c.interlace == 0 ? u = i(u, c, 0, f, h) : c.interlace == 1 && (u = function(S, w) {
      const _ = w.width, x = w.height, E = o(w), L = E >> 3, b = Math.ceil(_ * E / 8), m = new Uint8Array(x * b);
      let P = 0;
      const F = [0, 0, 4, 0, 2, 0, 1], R = [0, 4, 0, 2, 0, 1, 0], U = [8, 8, 8, 4, 4, 2, 2], k = [8, 8, 4, 4, 2, 2, 1];
      let W = 0;
      for (; W < 7; ) {
        const v = U[W], B = k[W];
        let V = 0, J = 0, ie = F[W];
        for (; ie < x; ) ie += v, J++;
        let te = R[W];
        for (; te < _; ) te += B, V++;
        const se = Math.ceil(V * E / 8);
        i(S, w, P, V, J);
        let Z = 0, Q = F[W];
        for (; Q < x; ) {
          let ce = R[W], G = P + Z * se << 3;
          for (; ce < _; ) {
            var T;
            if (E == 1 && (T = (T = S[G >> 3]) >> 7 - (7 & G) & 1, m[Q * b + (ce >> 3)] |= T << 7 - ((7 & ce) << 0)), E == 2 && (T = (T = S[G >> 3]) >> 6 - (7 & G) & 3, m[Q * b + (ce >> 2)] |= T << 6 - ((3 & ce) << 1)), E == 4 && (T = (T = S[G >> 3]) >> 4 - (7 & G) & 15, m[Q * b + (ce >> 1)] |= T << 4 - ((1 & ce) << 2)), E >= 8) {
              const ee = Q * b + ce * L;
              for (let z = 0; z < L; z++) m[ee + z] = S[(G >> 3) + z];
            }
            G += E, ce += B;
          }
          Z++, Q += v;
        }
        V * J != 0 && (P += J * (1 + se)), W += 1;
      }
      return m;
    }(u, c)), u;
  }
  function r(c, u) {
    return s(new Uint8Array(c.buffer, 2, c.length - 6), u);
  }
  var s = function() {
    const c = { H: {} };
    return c.H.N = function(u, f) {
      const h = Uint8Array;
      let g, y, O = 0, p = 0, S = 0, w = 0, _ = 0, x = 0, E = 0, L = 0, b = 0;
      if (u[0] == 3 && u[1] == 0) return f || new h(0);
      const m = c.H, P = m.b, F = m.e, R = m.R, U = m.n, k = m.A, W = m.Z, T = m.m, v = f == null;
      for (v && (f = new h(u.length >>> 2 << 5)); O == 0; ) if (O = P(u, b, 1), p = P(u, b + 1, 2), b += 3, p != 0) {
        if (v && (f = c.H.W(f, L + (1 << 17))), p == 1 && (g = T.J, y = T.h, x = 511, E = 31), p == 2) {
          S = F(u, b, 5) + 257, w = F(u, b + 5, 5) + 1, _ = F(u, b + 10, 4) + 4, b += 14;
          let V = 1;
          for (var B = 0; B < 38; B += 2) T.Q[B] = 0, T.Q[B + 1] = 0;
          for (B = 0; B < _; B++) {
            const te = F(u, b + 3 * B, 3);
            T.Q[1 + (T.X[B] << 1)] = te, te > V && (V = te);
          }
          b += 3 * _, U(T.Q, V), k(T.Q, V, T.u), g = T.w, y = T.d, b = R(T.u, (1 << V) - 1, S + w, u, b, T.v);
          const J = m.V(T.v, 0, S, T.C);
          x = (1 << J) - 1;
          const ie = m.V(T.v, S, w, T.D);
          E = (1 << ie) - 1, U(T.C, J), k(T.C, J, g), U(T.D, ie), k(T.D, ie, y);
        }
        for (; ; ) {
          const V = g[W(u, b) & x];
          b += 15 & V;
          const J = V >>> 4;
          if (!(J >>> 8)) f[L++] = J;
          else {
            if (J == 256) break;
            {
              let ie = L + J - 254;
              if (J > 264) {
                const ce = T.q[J - 257];
                ie = L + (ce >>> 3) + F(u, b, 7 & ce), b += 7 & ce;
              }
              const te = y[W(u, b) & E];
              b += 15 & te;
              const se = te >>> 4, Z = T.c[se], Q = (Z >>> 4) + P(u, b, 15 & Z);
              for (b += 15 & Z; L < ie; ) f[L] = f[L++ - Q], f[L] = f[L++ - Q], f[L] = f[L++ - Q], f[L] = f[L++ - Q];
              L = ie;
            }
          }
        }
      } else {
        (7 & b) != 0 && (b += 8 - (7 & b));
        const V = 4 + (b >>> 3), J = u[V - 4] | u[V - 3] << 8;
        v && (f = c.H.W(f, L + J)), f.set(new h(u.buffer, u.byteOffset + V, J), L), b = V + J << 3, L += J;
      }
      return f.length == L ? f : f.slice(0, L);
    }, c.H.W = function(u, f) {
      const h = u.length;
      if (f <= h) return u;
      const g = new Uint8Array(h << 1);
      return g.set(u, 0), g;
    }, c.H.R = function(u, f, h, g, y, O) {
      const p = c.H.e, S = c.H.Z;
      let w = 0;
      for (; w < h; ) {
        const _ = u[S(g, y) & f];
        y += 15 & _;
        const x = _ >>> 4;
        if (x <= 15) O[w] = x, w++;
        else {
          let E = 0, L = 0;
          x == 16 ? (L = 3 + p(g, y, 2), y += 2, E = O[w - 1]) : x == 17 ? (L = 3 + p(g, y, 3), y += 3) : x == 18 && (L = 11 + p(g, y, 7), y += 7);
          const b = w + L;
          for (; w < b; ) O[w] = E, w++;
        }
      }
      return y;
    }, c.H.V = function(u, f, h, g) {
      let y = 0, O = 0;
      const p = g.length >>> 1;
      for (; O < h; ) {
        const S = u[O + f];
        g[O << 1] = 0, g[1 + (O << 1)] = S, S > y && (y = S), O++;
      }
      for (; O < p; ) g[O << 1] = 0, g[1 + (O << 1)] = 0, O++;
      return y;
    }, c.H.n = function(u, f) {
      const h = c.H.m, g = u.length;
      let y, O, p, S;
      const w = h.j;
      for (var _ = 0; _ <= f; _++) w[_] = 0;
      for (_ = 1; _ < g; _ += 2) w[u[_]]++;
      const x = h.K;
      for (y = 0, w[0] = 0, O = 1; O <= f; O++) y = y + w[O - 1] << 1, x[O] = y;
      for (p = 0; p < g; p += 2) S = u[p + 1], S != 0 && (u[p] = x[S], x[S]++);
    }, c.H.A = function(u, f, h) {
      const g = u.length, y = c.H.m.r;
      for (let O = 0; O < g; O += 2) if (u[O + 1] != 0) {
        const p = O >> 1, S = u[O + 1], w = p << 4 | S, _ = f - S;
        let x = u[O] << _;
        const E = x + (1 << _);
        for (; x != E; ) h[y[x] >>> 15 - f] = w, x++;
      }
    }, c.H.l = function(u, f) {
      const h = c.H.m.r, g = 15 - f;
      for (let y = 0; y < u.length; y += 2) {
        const O = u[y] << f - u[y + 1];
        u[y] = h[O] >>> g;
      }
    }, c.H.M = function(u, f, h) {
      h <<= 7 & f;
      const g = f >>> 3;
      u[g] |= h, u[g + 1] |= h >>> 8;
    }, c.H.I = function(u, f, h) {
      h <<= 7 & f;
      const g = f >>> 3;
      u[g] |= h, u[g + 1] |= h >>> 8, u[g + 2] |= h >>> 16;
    }, c.H.e = function(u, f, h) {
      return (u[f >>> 3] | u[1 + (f >>> 3)] << 8) >>> (7 & f) & (1 << h) - 1;
    }, c.H.b = function(u, f, h) {
      return (u[f >>> 3] | u[1 + (f >>> 3)] << 8 | u[2 + (f >>> 3)] << 16) >>> (7 & f) & (1 << h) - 1;
    }, c.H.Z = function(u, f) {
      return (u[f >>> 3] | u[1 + (f >>> 3)] << 8 | u[2 + (f >>> 3)] << 16) >>> (7 & f);
    }, c.H.i = function(u, f) {
      return (u[f >>> 3] | u[1 + (f >>> 3)] << 8 | u[2 + (f >>> 3)] << 16 | u[3 + (f >>> 3)] << 24) >>> (7 & f);
    }, c.H.m = function() {
      const u = Uint16Array, f = Uint32Array;
      return { K: new u(16), j: new u(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new u(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new f(32), J: new u(512), _: [], h: new u(32), $: [], w: new u(32768), C: [], v: [], d: new u(32768), D: [], u: new u(512), Q: [], r: new u(32768), s: new f(286), Y: new f(30), a: new f(19), t: new f(15e3), k: new u(65536), g: new u(32768) };
    }(), function() {
      const u = c.H.m;
      for (var f = 0; f < 32768; f++) {
        let g = f;
        g = (2863311530 & g) >>> 1 | (1431655765 & g) << 1, g = (3435973836 & g) >>> 2 | (858993459 & g) << 2, g = (4042322160 & g) >>> 4 | (252645135 & g) << 4, g = (4278255360 & g) >>> 8 | (16711935 & g) << 8, u.r[f] = (g >>> 16 | g << 16) >>> 17;
      }
      function h(g, y, O) {
        for (; y-- != 0; ) g.push(0, O);
      }
      for (f = 0; f < 32; f++) u.q[f] = u.S[f] << 3 | u.T[f], u.c[f] = u.p[f] << 4 | u.z[f];
      h(u._, 144, 8), h(u._, 112, 9), h(u._, 24, 7), h(u._, 8, 8), c.H.n(u._, 9), c.H.A(u._, 9, u.J), c.H.l(u._, 9), h(u.$, 32, 5), c.H.n(u.$, 5), c.H.A(u.$, 5, u.h), c.H.l(u.$, 5), h(u.Q, 19, 0), h(u.C, 286, 0), h(u.D, 30, 0), h(u.v, 320, 0);
    }(), c.H.N;
  }();
  function o(c) {
    return [1, null, 3, 1, 2, null, 4][c.ctype] * c.depth;
  }
  function i(c, u, f, h, g) {
    let y = o(u);
    const O = Math.ceil(h * y / 8);
    let p, S;
    y = Math.ceil(y / 8);
    let w = c[f], _ = 0;
    if (w > 1 && (c[f] = [0, 0, 1][w - 2]), w == 3) for (_ = y; _ < O; _++) c[_ + 1] = c[_ + 1] + (c[_ + 1 - y] >>> 1) & 255;
    for (let x = 0; x < g; x++) if (p = f + x * O, S = p + x + 1, w = c[S - 1], _ = 0, w == 0) for (; _ < O; _++) c[p + _] = c[S + _];
    else if (w == 1) {
      for (; _ < y; _++) c[p + _] = c[S + _];
      for (; _ < O; _++) c[p + _] = c[S + _] + c[p + _ - y];
    } else if (w == 2) for (; _ < O; _++) c[p + _] = c[S + _] + c[p + _ - O];
    else if (w == 3) {
      for (; _ < y; _++) c[p + _] = c[S + _] + (c[p + _ - O] >>> 1);
      for (; _ < O; _++) c[p + _] = c[S + _] + (c[p + _ - O] + c[p + _ - y] >>> 1);
    } else {
      for (; _ < y; _++) c[p + _] = c[S + _] + l(0, c[p + _ - O], 0);
      for (; _ < O; _++) c[p + _] = c[S + _] + l(c[p + _ - y], c[p + _ - O], c[p + _ - y - O]);
    }
    return c;
  }
  function l(c, u, f) {
    const h = c + u - f, g = h - c, y = h - u, O = h - f;
    return g * g <= y * y && g * g <= O * O ? c : y * y <= O * O ? u : f;
  }
  function a(c, u, f) {
    f.width = e.readUint(c, u), u += 4, f.height = e.readUint(c, u), u += 4, f.depth = c[u], u++, f.ctype = c[u], u++, f.compress = c[u], u++, f.filter = c[u], u++, f.interlace = c[u], u++;
  }
  function d(c, u, f, h, g, y, O, p, S) {
    const w = Math.min(u, g), _ = Math.min(f, y);
    let x = 0, E = 0;
    for (let W = 0; W < _; W++) for (let T = 0; T < w; T++) if (O >= 0 && p >= 0 ? (x = W * u + T << 2, E = (p + W) * g + O + T << 2) : (x = (-p + W) * u - O + T << 2, E = W * g + T << 2), S == 0) h[E] = c[x], h[E + 1] = c[x + 1], h[E + 2] = c[x + 2], h[E + 3] = c[x + 3];
    else if (S == 1) {
      var L = c[x + 3] * 0.00392156862745098, b = c[x] * L, m = c[x + 1] * L, P = c[x + 2] * L, F = h[E + 3] * (1 / 255), R = h[E] * F, U = h[E + 1] * F, k = h[E + 2] * F;
      const v = 1 - L, B = L + F * v, V = B == 0 ? 0 : 1 / B;
      h[E + 3] = 255 * B, h[E + 0] = (b + R * v) * V, h[E + 1] = (m + U * v) * V, h[E + 2] = (P + k * v) * V;
    } else if (S == 2) L = c[x + 3], b = c[x], m = c[x + 1], P = c[x + 2], F = h[E + 3], R = h[E], U = h[E + 1], k = h[E + 2], L == F && b == R && m == U && P == k ? (h[E] = 0, h[E + 1] = 0, h[E + 2] = 0, h[E + 3] = 0) : (h[E] = b, h[E + 1] = m, h[E + 2] = P, h[E + 3] = L);
    else if (S == 3) {
      if (L = c[x + 3], b = c[x], m = c[x + 1], P = c[x + 2], F = h[E + 3], R = h[E], U = h[E + 1], k = h[E + 2], L == F && b == R && m == U && P == k) continue;
      if (L < 220 && F > 20) return false;
    }
    return true;
  }
  return { decode: function(u) {
    const f = new Uint8Array(u);
    let h = 8;
    const g = e, y = g.readUshort, O = g.readUint, p = { tabs: {}, frames: [] }, S = new Uint8Array(f.length);
    let w, _ = 0, x = 0;
    const E = [137, 80, 78, 71, 13, 10, 26, 10];
    for (var L = 0; L < 8; L++) if (f[L] != E[L]) throw "The input is not a PNG file!";
    for (; h < f.length; ) {
      const W = g.readUint(f, h);
      h += 4;
      const T = g.readASCII(f, h, 4);
      if (h += 4, T == "IHDR") a(f, h, p);
      else if (T == "iCCP") {
        for (var b = h; f[b] != 0; ) b++;
        g.readASCII(f, h, b - h), f[b + 1];
        const v = f.slice(b + 2, h + W);
        let B = null;
        try {
          B = r(v);
        } catch {
          B = s(v);
        }
        p.tabs[T] = B;
      } else if (T == "CgBI") p.tabs[T] = f.slice(h, h + 4);
      else if (T == "IDAT") {
        for (L = 0; L < W; L++) S[_ + L] = f[h + L];
        _ += W;
      } else if (T == "acTL") p.tabs[T] = { num_frames: O(f, h), num_plays: O(f, h + 4) }, w = new Uint8Array(f.length);
      else if (T == "fcTL") {
        x != 0 && ((k = p.frames[p.frames.length - 1]).data = n(p, w.slice(0, x), k.rect.width, k.rect.height), x = 0);
        const v = { x: O(f, h + 12), y: O(f, h + 16), width: O(f, h + 4), height: O(f, h + 8) };
        let B = y(f, h + 22);
        B = y(f, h + 20) / (B == 0 ? 100 : B);
        const V = { rect: v, delay: Math.round(1e3 * B), dispose: f[h + 24], blend: f[h + 25] };
        p.frames.push(V);
      } else if (T == "fdAT") {
        for (L = 0; L < W - 4; L++) w[x + L] = f[h + L + 4];
        x += W - 4;
      } else if (T == "pHYs") p.tabs[T] = [g.readUint(f, h), g.readUint(f, h + 4), f[h + 8]];
      else if (T == "cHRM") for (p.tabs[T] = [], L = 0; L < 8; L++) p.tabs[T].push(g.readUint(f, h + 4 * L));
      else if (T == "tEXt" || T == "zTXt") {
        p.tabs[T] == null && (p.tabs[T] = {});
        var m = g.nextZero(f, h), P = g.readASCII(f, h, m - h), F = h + W - m - 1;
        if (T == "tEXt") U = g.readASCII(f, m + 1, F);
        else {
          var R = r(f.slice(m + 2, m + 2 + F));
          U = g.readUTF8(R, 0, R.length);
        }
        p.tabs[T][P] = U;
      } else if (T == "iTXt") {
        p.tabs[T] == null && (p.tabs[T] = {}), m = 0, b = h, m = g.nextZero(f, b), P = g.readASCII(f, b, m - b);
        const v = f[b = m + 1];
        var U;
        f[b + 1], b += 2, m = g.nextZero(f, b), g.readASCII(f, b, m - b), b = m + 1, m = g.nextZero(f, b), g.readUTF8(f, b, m - b), F = W - ((b = m + 1) - h), v == 0 ? U = g.readUTF8(f, b, F) : (R = r(f.slice(b, b + F)), U = g.readUTF8(R, 0, R.length)), p.tabs[T][P] = U;
      } else if (T == "PLTE") p.tabs[T] = g.readBytes(f, h, W);
      else if (T == "hIST") {
        const v = p.tabs.PLTE.length / 3;
        for (p.tabs[T] = [], L = 0; L < v; L++) p.tabs[T].push(y(f, h + 2 * L));
      } else if (T == "tRNS") p.ctype == 3 ? p.tabs[T] = g.readBytes(f, h, W) : p.ctype == 0 ? p.tabs[T] = y(f, h) : p.ctype == 2 && (p.tabs[T] = [y(f, h), y(f, h + 2), y(f, h + 4)]);
      else if (T == "gAMA") p.tabs[T] = g.readUint(f, h) / 1e5;
      else if (T == "sRGB") p.tabs[T] = f[h];
      else if (T == "bKGD") p.ctype == 0 || p.ctype == 4 ? p.tabs[T] = [y(f, h)] : p.ctype == 2 || p.ctype == 6 ? p.tabs[T] = [y(f, h), y(f, h + 2), y(f, h + 4)] : p.ctype == 3 && (p.tabs[T] = f[h]);
      else if (T == "IEND") break;
      h += W, g.readUint(f, h), h += 4;
    }
    var k;
    return x != 0 && ((k = p.frames[p.frames.length - 1]).data = n(p, w.slice(0, x), k.rect.width, k.rect.height)), p.data = n(p, S, p.width, p.height), delete p.compress, delete p.interlace, delete p.filter, p;
  }, toRGBA8: function(u) {
    const f = u.width, h = u.height;
    if (u.tabs.acTL == null) return [t(u.data, f, h, u).buffer];
    const g = [];
    u.frames[0].data == null && (u.frames[0].data = u.data);
    const y = f * h * 4, O = new Uint8Array(y), p = new Uint8Array(y), S = new Uint8Array(y);
    for (let _ = 0; _ < u.frames.length; _++) {
      const x = u.frames[_], E = x.rect.x, L = x.rect.y, b = x.rect.width, m = x.rect.height, P = t(x.data, b, m, u);
      if (_ != 0) for (var w = 0; w < y; w++) S[w] = O[w];
      if (x.blend == 0 ? d(P, b, m, O, f, h, E, L, 0) : x.blend == 1 && d(P, b, m, O, f, h, E, L, 1), g.push(O.buffer.slice(0)), x.dispose != 0) {
        if (x.dispose == 1) d(p, b, m, O, f, h, E, L, 0);
        else if (x.dispose == 2) for (w = 0; w < y; w++) O[w] = S[w];
      }
    }
    return g;
  }, _paeth: l, _copyTile: d, _bin: e };
}();
(function() {
  const { _copyTile: e } = ft, { _bin: t } = ft, n = ft._paeth;
  var r = { table: function() {
    const b = new Uint32Array(256);
    for (let m = 0; m < 256; m++) {
      let P = m;
      for (let F = 0; F < 8; F++) 1 & P ? P = 3988292384 ^ P >>> 1 : P >>>= 1;
      b[m] = P;
    }
    return b;
  }(), update(b, m, P, F) {
    for (let R = 0; R < F; R++) b = r.table[255 & (b ^ m[P + R])] ^ b >>> 8;
    return b;
  }, crc: (b, m, P) => 4294967295 ^ r.update(4294967295, b, m, P) };
  function s(b, m, P, F) {
    m[P] += b[0] * F >> 4, m[P + 1] += b[1] * F >> 4, m[P + 2] += b[2] * F >> 4, m[P + 3] += b[3] * F >> 4;
  }
  function o(b) {
    return Math.max(0, Math.min(255, b));
  }
  function i(b, m) {
    const P = b[0] - m[0], F = b[1] - m[1], R = b[2] - m[2], U = b[3] - m[3];
    return P * P + F * F + R * R + U * U;
  }
  function l(b, m, P, F, R, U, k) {
    k == null && (k = 1);
    const W = F.length, T = [];
    for (var v = 0; v < W; v++) {
      const Q = F[v];
      T.push([Q >>> 0 & 255, Q >>> 8 & 255, Q >>> 16 & 255, Q >>> 24 & 255]);
    }
    for (v = 0; v < W; v++) {
      let Q = 4294967295;
      for (var B = 0, V = 0; V < W; V++) {
        var J = i(T[v], T[V]);
        V != v && J < Q && (Q = J, B = V);
      }
    }
    const ie = new Uint32Array(R.buffer), te = new Int16Array(m * P * 4), se = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    for (v = 0; v < se.length; v++) se[v] = 255 * ((se[v] + 0.5) / 16 - 0.5);
    for (let Q = 0; Q < P; Q++) for (let ce = 0; ce < m; ce++) {
      var Z;
      v = 4 * (Q * m + ce), k != 2 ? Z = [o(b[v] + te[v]), o(b[v + 1] + te[v + 1]), o(b[v + 2] + te[v + 2]), o(b[v + 3] + te[v + 3])] : (J = se[4 * (3 & Q) + (3 & ce)], Z = [o(b[v] + J), o(b[v + 1] + J), o(b[v + 2] + J), o(b[v + 3] + J)]), B = 0;
      let G = 16777215;
      for (V = 0; V < W; V++) {
        const ne = i(Z, T[V]);
        ne < G && (G = ne, B = V);
      }
      const ee = T[B], z = [Z[0] - ee[0], Z[1] - ee[1], Z[2] - ee[2], Z[3] - ee[3]];
      k == 1 && (ce != m - 1 && s(z, te, v + 4, 7), Q != P - 1 && (ce != 0 && s(z, te, v + 4 * m - 4, 3), s(z, te, v + 4 * m, 5), ce != m - 1 && s(z, te, v + 4 * m + 4, 1))), U[v >> 2] = B, ie[v >> 2] = F[B];
    }
  }
  function a(b, m, P, F, R) {
    R == null && (R = {});
    const { crc: U } = r, k = t.writeUint, W = t.writeUshort, T = t.writeASCII;
    let v = 8;
    const B = b.frames.length > 1;
    let V, J = false, ie = 33 + (B ? 20 : 0);
    if (R.sRGB != null && (ie += 13), R.pHYs != null && (ie += 21), R.iCCP != null && (V = pako.deflate(R.iCCP), ie += 21 + V.length + 4), b.ctype == 3) {
      for (var te = b.plte.length, se = 0; se < te; se++) b.plte[se] >>> 24 != 255 && (J = true);
      ie += 8 + 3 * te + 4 + (J ? 8 + 1 * te + 4 : 0);
    }
    for (var Z = 0; Z < b.frames.length; Z++) B && (ie += 38), ie += (ee = b.frames[Z]).cimg.length + 12, Z != 0 && (ie += 4);
    ie += 12;
    const Q = new Uint8Array(ie), ce = [137, 80, 78, 71, 13, 10, 26, 10];
    for (se = 0; se < 8; se++) Q[se] = ce[se];
    if (k(Q, v, 13), v += 4, T(Q, v, "IHDR"), v += 4, k(Q, v, m), v += 4, k(Q, v, P), v += 4, Q[v] = b.depth, v++, Q[v] = b.ctype, v++, Q[v] = 0, v++, Q[v] = 0, v++, Q[v] = 0, v++, k(Q, v, U(Q, v - 17, 17)), v += 4, R.sRGB != null && (k(Q, v, 1), v += 4, T(Q, v, "sRGB"), v += 4, Q[v] = R.sRGB, v++, k(Q, v, U(Q, v - 5, 5)), v += 4), R.iCCP != null) {
      const z = 13 + V.length;
      k(Q, v, z), v += 4, T(Q, v, "iCCP"), v += 4, T(Q, v, "ICC profile"), v += 11, v += 2, Q.set(V, v), v += V.length, k(Q, v, U(Q, v - (z + 4), z + 4)), v += 4;
    }
    if (R.pHYs != null && (k(Q, v, 9), v += 4, T(Q, v, "pHYs"), v += 4, k(Q, v, R.pHYs[0]), v += 4, k(Q, v, R.pHYs[1]), v += 4, Q[v] = R.pHYs[2], v++, k(Q, v, U(Q, v - 13, 13)), v += 4), B && (k(Q, v, 8), v += 4, T(Q, v, "acTL"), v += 4, k(Q, v, b.frames.length), v += 4, k(Q, v, R.loop != null ? R.loop : 0), v += 4, k(Q, v, U(Q, v - 12, 12)), v += 4), b.ctype == 3) {
      for (k(Q, v, 3 * (te = b.plte.length)), v += 4, T(Q, v, "PLTE"), v += 4, se = 0; se < te; se++) {
        const z = 3 * se, ne = b.plte[se], fe = 255 & ne, I = ne >>> 8 & 255, N = ne >>> 16 & 255;
        Q[v + z + 0] = fe, Q[v + z + 1] = I, Q[v + z + 2] = N;
      }
      if (v += 3 * te, k(Q, v, U(Q, v - 3 * te - 4, 3 * te + 4)), v += 4, J) {
        for (k(Q, v, te), v += 4, T(Q, v, "tRNS"), v += 4, se = 0; se < te; se++) Q[v + se] = b.plte[se] >>> 24 & 255;
        v += te, k(Q, v, U(Q, v - te - 4, te + 4)), v += 4;
      }
    }
    let G = 0;
    for (Z = 0; Z < b.frames.length; Z++) {
      var ee = b.frames[Z];
      B && (k(Q, v, 26), v += 4, T(Q, v, "fcTL"), v += 4, k(Q, v, G++), v += 4, k(Q, v, ee.rect.width), v += 4, k(Q, v, ee.rect.height), v += 4, k(Q, v, ee.rect.x), v += 4, k(Q, v, ee.rect.y), v += 4, W(Q, v, F[Z]), v += 2, W(Q, v, 1e3), v += 2, Q[v] = ee.dispose, v++, Q[v] = ee.blend, v++, k(Q, v, U(Q, v - 30, 30)), v += 4);
      const z = ee.cimg;
      k(Q, v, (te = z.length) + (Z == 0 ? 0 : 4)), v += 4;
      const ne = v;
      T(Q, v, Z == 0 ? "IDAT" : "fdAT"), v += 4, Z != 0 && (k(Q, v, G++), v += 4), Q.set(z, v), v += te, k(Q, v, U(Q, ne, v - ne)), v += 4;
    }
    return k(Q, v, 0), v += 4, T(Q, v, "IEND"), v += 4, k(Q, v, U(Q, v - 4, 4)), v += 4, Q.buffer;
  }
  function d(b, m, P) {
    for (let F = 0; F < b.frames.length; F++) {
      const R = b.frames[F];
      R.rect.width;
      const U = R.rect.height, k = new Uint8Array(U * R.bpl + U);
      R.cimg = h(R.img, U, R.bpp, R.bpl, k, m, P);
    }
  }
  function c(b, m, P, F, R) {
    const U = R[0], k = R[1], W = R[2], T = R[3], v = R[4], B = R[5];
    let V = 6, J = 8, ie = 255;
    for (var te = 0; te < b.length; te++) {
      const X = new Uint8Array(b[te]);
      for (var se = X.length, Z = 0; Z < se; Z += 4) ie &= X[Z + 3];
    }
    const Q = ie != 255, ce = function(Y, A, C, D, H, re) {
      const q = [];
      for (var M = 0; M < Y.length; M++) {
        const pe = new Uint8Array(Y[M]), Te = new Uint32Array(pe.buffer);
        var j;
        let Ie = 0, Ge = 0, tt = A, Ne = C, ze = D ? 1 : 0;
        if (M != 0) {
          const Ar = re || D || M == 1 || q[M - 2].dispose != 0 ? 1 : 2;
          let ws = 0, ci = 1e9;
          for (let Hn = 0; Hn < Ar; Hn++) {
            var oe = new Uint8Array(Y[M - 1 - Hn]);
            const Eu = new Uint32Array(Y[M - 1 - Hn]);
            let $t = A, Ht = C, yn = -1, Vn = -1;
            for (let sn = 0; sn < C; sn++) for (let on = 0; on < A; on++) Te[ue = sn * A + on] != Eu[ue] && (on < $t && ($t = on), on > yn && (yn = on), sn < Ht && (Ht = sn), sn > Vn && (Vn = sn));
            yn == -1 && ($t = Ht = yn = Vn = 0), H && ((1 & $t) == 1 && $t--, (1 & Ht) == 1 && Ht--);
            const ai = (yn - $t + 1) * (Vn - Ht + 1);
            ai < ci && (ci = ai, ws = Hn, Ie = $t, Ge = Ht, tt = yn - $t + 1, Ne = Vn - Ht + 1);
          }
          oe = new Uint8Array(Y[M - 1 - ws]), ws == 1 && (q[M - 1].dispose = 2), j = new Uint8Array(tt * Ne * 4), e(oe, A, C, j, tt, Ne, -Ie, -Ge, 0), ze = e(pe, A, C, j, tt, Ne, -Ie, -Ge, 3) ? 1 : 0, ze == 1 ? f(pe, A, C, j, { x: Ie, y: Ge, width: tt, height: Ne }) : e(pe, A, C, j, tt, Ne, -Ie, -Ge, 0);
        } else j = pe.slice(0);
        q.push({ rect: { x: Ie, y: Ge, width: tt, height: Ne }, img: j, blend: ze, dispose: 0 });
      }
      if (D) for (M = 0; M < q.length; M++) {
        if ((we = q[M]).blend == 1) continue;
        const pe = we.rect, Te = q[M - 1].rect, Ie = Math.min(pe.x, Te.x), Ge = Math.min(pe.y, Te.y), tt = { x: Ie, y: Ge, width: Math.max(pe.x + pe.width, Te.x + Te.width) - Ie, height: Math.max(pe.y + pe.height, Te.y + Te.height) - Ge };
        q[M - 1].dispose = 1, M - 1 != 0 && u(Y, A, C, q, M - 1, tt, H), u(Y, A, C, q, M, tt, H);
      }
      let de = 0;
      if (Y.length != 1) for (var ue = 0; ue < q.length; ue++) {
        var we;
        de += (we = q[ue]).rect.width * we.rect.height;
      }
      return q;
    }(b, m, P, U, k, W), G = {}, ee = [], z = [];
    if (F != 0) {
      const X = [];
      for (Z = 0; Z < ce.length; Z++) X.push(ce[Z].img.buffer);
      const Y = function(H) {
        let re = 0;
        for (var q = 0; q < H.length; q++) re += H[q].byteLength;
        const M = new Uint8Array(re);
        let j = 0;
        for (q = 0; q < H.length; q++) {
          const oe = new Uint8Array(H[q]), de = oe.length;
          for (let ue = 0; ue < de; ue += 4) {
            let we = oe[ue], pe = oe[ue + 1], Te = oe[ue + 2];
            const Ie = oe[ue + 3];
            Ie == 0 && (we = pe = Te = 0), M[j + ue] = we, M[j + ue + 1] = pe, M[j + ue + 2] = Te, M[j + ue + 3] = Ie;
          }
          j += de;
        }
        return M.buffer;
      }(X), A = y(Y, F);
      for (Z = 0; Z < A.plte.length; Z++) ee.push(A.plte[Z].est.rgba);
      let C = 0;
      for (Z = 0; Z < ce.length; Z++) {
        const D = (fe = ce[Z]).img.length;
        var ne = new Uint8Array(A.inds.buffer, C >> 2, D >> 2);
        z.push(ne);
        const H = new Uint8Array(A.abuf, C, D);
        B && l(fe.img, fe.rect.width, fe.rect.height, ee, H, ne), fe.img.set(H), C += D;
      }
    } else for (te = 0; te < ce.length; te++) {
      var fe = ce[te];
      const X = new Uint32Array(fe.img.buffer);
      var I = fe.rect.width;
      for (se = X.length, ne = new Uint8Array(se), z.push(ne), Z = 0; Z < se; Z++) {
        const Y = X[Z];
        if (Z != 0 && Y == X[Z - 1]) ne[Z] = ne[Z - 1];
        else if (Z > I && Y == X[Z - I]) ne[Z] = ne[Z - I];
        else {
          let A = G[Y];
          if (A == null && (G[Y] = A = ee.length, ee.push(Y), ee.length >= 300)) break;
          ne[Z] = A;
        }
      }
    }
    const N = ee.length;
    for (N <= 256 && v == 0 && (J = N <= 2 ? 1 : N <= 4 ? 2 : N <= 16 ? 4 : 8, J = Math.max(J, T)), te = 0; te < ce.length; te++) {
      (fe = ce[te]).rect.x, fe.rect.y, I = fe.rect.width;
      const X = fe.rect.height;
      let Y = fe.img;
      new Uint32Array(Y.buffer);
      let A = 4 * I, C = 4;
      if (N <= 256 && v == 0) {
        A = Math.ceil(J * I / 8);
        var $ = new Uint8Array(A * X);
        const D = z[te];
        for (let H = 0; H < X; H++) {
          Z = H * A;
          const re = H * I;
          if (J == 8) for (var K = 0; K < I; K++) $[Z + K] = D[re + K];
          else if (J == 4) for (K = 0; K < I; K++) $[Z + (K >> 1)] |= D[re + K] << 4 - 4 * (1 & K);
          else if (J == 2) for (K = 0; K < I; K++) $[Z + (K >> 2)] |= D[re + K] << 6 - 2 * (3 & K);
          else if (J == 1) for (K = 0; K < I; K++) $[Z + (K >> 3)] |= D[re + K] << 7 - 1 * (7 & K);
        }
        Y = $, V = 3, C = 1;
      } else if (Q == 0 && ce.length == 1) {
        $ = new Uint8Array(I * X * 3);
        const D = I * X;
        for (Z = 0; Z < D; Z++) {
          const H = 3 * Z, re = 4 * Z;
          $[H] = Y[re], $[H + 1] = Y[re + 1], $[H + 2] = Y[re + 2];
        }
        Y = $, V = 2, C = 3, A = 3 * I;
      }
      fe.img = Y, fe.bpl = A, fe.bpp = C;
    }
    return { ctype: V, depth: J, plte: ee, frames: ce };
  }
  function u(b, m, P, F, R, U, k) {
    const W = Uint8Array, T = Uint32Array, v = new W(b[R - 1]), B = new T(b[R - 1]), V = R + 1 < b.length ? new W(b[R + 1]) : null, J = new W(b[R]), ie = new T(J.buffer);
    let te = m, se = P, Z = -1, Q = -1;
    for (let G = 0; G < U.height; G++) for (let ee = 0; ee < U.width; ee++) {
      const z = U.x + ee, ne = U.y + G, fe = ne * m + z, I = ie[fe];
      I == 0 || F[R - 1].dispose == 0 && B[fe] == I && (V == null || V[4 * fe + 3] != 0) || (z < te && (te = z), z > Z && (Z = z), ne < se && (se = ne), ne > Q && (Q = ne));
    }
    Z == -1 && (te = se = Z = Q = 0), k && ((1 & te) == 1 && te--, (1 & se) == 1 && se--), U = { x: te, y: se, width: Z - te + 1, height: Q - se + 1 };
    const ce = F[R];
    ce.rect = U, ce.blend = 1, ce.img = new Uint8Array(U.width * U.height * 4), F[R - 1].dispose == 0 ? (e(v, m, P, ce.img, U.width, U.height, -U.x, -U.y, 0), f(J, m, P, ce.img, U)) : e(J, m, P, ce.img, U.width, U.height, -U.x, -U.y, 0);
  }
  function f(b, m, P, F, R) {
    e(b, m, P, F, R.width, R.height, -R.x, -R.y, 2);
  }
  function h(b, m, P, F, R, U, k) {
    const W = [];
    let T, v = [0, 1, 2, 3, 4];
    U != -1 ? v = [U] : (m * F > 5e5 || P == 1) && (v = [0]), k && (T = { level: 0 });
    const B = ym;
    for (var V = 0; V < v.length; V++) {
      for (let te = 0; te < m; te++) g(R, b, te, F, P, v[V]);
      W.push(B.deflate(R, T));
    }
    let J, ie = 1e9;
    for (V = 0; V < W.length; V++) W[V].length < ie && (J = V, ie = W[V].length);
    return W[J];
  }
  function g(b, m, P, F, R, U) {
    const k = P * F;
    let W = k + P;
    if (b[W] = U, W++, U == 0) if (F < 500) for (var T = 0; T < F; T++) b[W + T] = m[k + T];
    else b.set(new Uint8Array(m.buffer, k, F), W);
    else if (U == 1) {
      for (T = 0; T < R; T++) b[W + T] = m[k + T];
      for (T = R; T < F; T++) b[W + T] = m[k + T] - m[k + T - R] + 256 & 255;
    } else if (P == 0) {
      for (T = 0; T < R; T++) b[W + T] = m[k + T];
      if (U == 2) for (T = R; T < F; T++) b[W + T] = m[k + T];
      if (U == 3) for (T = R; T < F; T++) b[W + T] = m[k + T] - (m[k + T - R] >> 1) + 256 & 255;
      if (U == 4) for (T = R; T < F; T++) b[W + T] = m[k + T] - n(m[k + T - R], 0, 0) + 256 & 255;
    } else {
      if (U == 2) for (T = 0; T < F; T++) b[W + T] = m[k + T] + 256 - m[k + T - F] & 255;
      if (U == 3) {
        for (T = 0; T < R; T++) b[W + T] = m[k + T] + 256 - (m[k + T - F] >> 1) & 255;
        for (T = R; T < F; T++) b[W + T] = m[k + T] + 256 - (m[k + T - F] + m[k + T - R] >> 1) & 255;
      }
      if (U == 4) {
        for (T = 0; T < R; T++) b[W + T] = m[k + T] + 256 - n(0, m[k + T - F], 0) & 255;
        for (T = R; T < F; T++) b[W + T] = m[k + T] + 256 - n(m[k + T - R], m[k + T - F], m[k + T - R - F]) & 255;
      }
    }
  }
  function y(b, m) {
    const P = new Uint8Array(b), F = P.slice(0), R = new Uint32Array(F.buffer), U = O(F, m), k = U[0], W = U[1], T = P.length, v = new Uint8Array(T >> 2);
    let B;
    if (P.length < 2e7) for (var V = 0; V < T; V += 4) B = p(k, J = P[V] * (1 / 255), ie = P[V + 1] * (1 / 255), te = P[V + 2] * (1 / 255), se = P[V + 3] * (1 / 255)), v[V >> 2] = B.ind, R[V >> 2] = B.est.rgba;
    else for (V = 0; V < T; V += 4) {
      var J = P[V] * 0.00392156862745098, ie = P[V + 1] * (1 / 255), te = P[V + 2] * (1 / 255), se = P[V + 3] * (1 / 255);
      for (B = k; B.left; ) B = S(B.est, J, ie, te, se) <= 0 ? B.left : B.right;
      v[V >> 2] = B.ind, R[V >> 2] = B.est.rgba;
    }
    return { abuf: F.buffer, inds: v, plte: W };
  }
  function O(b, m, P) {
    P == null && (P = 1e-4);
    const F = new Uint32Array(b.buffer), R = { i0: 0, i1: b.length, bst: null, est: null, tdst: 0, left: null, right: null };
    R.bst = x(b, R.i0, R.i1), R.est = E(R.bst);
    const U = [R];
    for (; U.length < m; ) {
      let W = 0, T = 0;
      for (var k = 0; k < U.length; k++) U[k].est.L > W && (W = U[k].est.L, T = k);
      if (W < P) break;
      const v = U[T], B = w(b, F, v.i0, v.i1, v.est.e, v.est.eMq255);
      if (v.i0 >= B || v.i1 <= B) {
        v.est.L = 0;
        continue;
      }
      const V = { i0: v.i0, i1: B, bst: null, est: null, tdst: 0, left: null, right: null };
      V.bst = x(b, V.i0, V.i1), V.est = E(V.bst);
      const J = { i0: B, i1: v.i1, bst: null, est: null, tdst: 0, left: null, right: null };
      for (J.bst = { R: [], m: [], N: v.bst.N - V.bst.N }, k = 0; k < 16; k++) J.bst.R[k] = v.bst.R[k] - V.bst.R[k];
      for (k = 0; k < 4; k++) J.bst.m[k] = v.bst.m[k] - V.bst.m[k];
      J.est = E(J.bst), v.left = V, v.right = J, U[T] = V, U.push(J);
    }
    for (U.sort((W, T) => T.bst.N - W.bst.N), k = 0; k < U.length; k++) U[k].ind = k;
    return [R, U];
  }
  function p(b, m, P, F, R) {
    if (b.left == null) return b.tdst = function(V, J, ie, te, se) {
      const Z = J - V[0], Q = ie - V[1], ce = te - V[2], G = se - V[3];
      return Z * Z + Q * Q + ce * ce + G * G;
    }(b.est.q, m, P, F, R), b;
    const U = S(b.est, m, P, F, R);
    let k = b.left, W = b.right;
    U > 0 && (k = b.right, W = b.left);
    const T = p(k, m, P, F, R);
    if (T.tdst <= U * U) return T;
    const v = p(W, m, P, F, R);
    return v.tdst < T.tdst ? v : T;
  }
  function S(b, m, P, F, R) {
    const { e: U } = b;
    return U[0] * m + U[1] * P + U[2] * F + U[3] * R - b.eMq;
  }
  function w(b, m, P, F, R, U) {
    for (F -= 4; P < F; ) {
      for (; _(b, P, R) <= U; ) P += 4;
      for (; _(b, F, R) > U; ) F -= 4;
      if (P >= F) break;
      const k = m[P >> 2];
      m[P >> 2] = m[F >> 2], m[F >> 2] = k, P += 4, F -= 4;
    }
    for (; _(b, P, R) > U; ) P -= 4;
    return P + 4;
  }
  function _(b, m, P) {
    return b[m] * P[0] + b[m + 1] * P[1] + b[m + 2] * P[2] + b[m + 3] * P[3];
  }
  function x(b, m, P) {
    const F = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], R = [0, 0, 0, 0], U = P - m >> 2;
    for (let k = m; k < P; k += 4) {
      const W = b[k] * 0.00392156862745098, T = b[k + 1] * (1 / 255), v = b[k + 2] * (1 / 255), B = b[k + 3] * (1 / 255);
      R[0] += W, R[1] += T, R[2] += v, R[3] += B, F[0] += W * W, F[1] += W * T, F[2] += W * v, F[3] += W * B, F[5] += T * T, F[6] += T * v, F[7] += T * B, F[10] += v * v, F[11] += v * B, F[15] += B * B;
    }
    return F[4] = F[1], F[8] = F[2], F[9] = F[6], F[12] = F[3], F[13] = F[7], F[14] = F[11], { R: F, m: R, N: U };
  }
  function E(b) {
    const { R: m } = b, { m: P } = b, { N: F } = b, R = P[0], U = P[1], k = P[2], W = P[3], T = F == 0 ? 0 : 1 / F, v = [m[0] - R * R * T, m[1] - R * U * T, m[2] - R * k * T, m[3] - R * W * T, m[4] - U * R * T, m[5] - U * U * T, m[6] - U * k * T, m[7] - U * W * T, m[8] - k * R * T, m[9] - k * U * T, m[10] - k * k * T, m[11] - k * W * T, m[12] - W * R * T, m[13] - W * U * T, m[14] - W * k * T, m[15] - W * W * T], B = v, V = L;
    let J = [Math.random(), Math.random(), Math.random(), Math.random()], ie = 0, te = 0;
    if (F != 0) for (let Z = 0; Z < 16 && (J = V.multVec(B, J), te = Math.sqrt(V.dot(J, J)), J = V.sml(1 / te, J), !(Z != 0 && Math.abs(te - ie) < 1e-9)); Z++) ie = te;
    const se = [R * T, U * T, k * T, W * T];
    return { Cov: v, q: se, e: J, L: ie, eMq255: V.dot(V.sml(255, se), J), eMq: V.dot(J, se), rgba: (Math.round(255 * se[3]) << 24 | Math.round(255 * se[2]) << 16 | Math.round(255 * se[1]) << 8 | Math.round(255 * se[0]) << 0) >>> 0 };
  }
  var L = { multVec: (b, m) => [b[0] * m[0] + b[1] * m[1] + b[2] * m[2] + b[3] * m[3], b[4] * m[0] + b[5] * m[1] + b[6] * m[2] + b[7] * m[3], b[8] * m[0] + b[9] * m[1] + b[10] * m[2] + b[11] * m[3], b[12] * m[0] + b[13] * m[1] + b[14] * m[2] + b[15] * m[3]], dot: (b, m) => b[0] * m[0] + b[1] * m[1] + b[2] * m[2] + b[3] * m[3], sml: (b, m) => [b * m[0], b * m[1], b * m[2], b * m[3]] };
  ft.encode = function(m, P, F, R, U, k, W) {
    R == null && (R = 0), W == null && (W = false);
    const T = c(m, P, F, R, [false, false, false, 0, W, false]);
    return d(T, -1), a(T, P, F, U, k);
  }, ft.encodeLL = function(m, P, F, R, U, k, W, T) {
    const v = { ctype: 0 + (R == 1 ? 0 : 2) + (U == 0 ? 0 : 4), depth: k, frames: [] }, B = (R + U) * k, V = B * P;
    for (let J = 0; J < m.length; J++) v.frames.push({ rect: { x: 0, y: 0, width: P, height: F }, img: new Uint8Array(m[J]), blend: 0, dispose: 1, bpp: Math.ceil(B / 8), bpl: Math.ceil(V / 8) });
    return d(v, 0, true), a(v, P, F, W, T);
  }, ft.encode.compress = c, ft.encode.dither = l, ft.quantize = y, ft.quantize.getKDtree = O, ft.quantize.getNearest = p;
})();
const fu = { toArrayBuffer(e, t) {
  const n = e.width, r = e.height, s = n << 2, o = e.getContext("2d").getImageData(0, 0, n, r), i = new Uint32Array(o.data.buffer), l = (32 * n + 31) / 32 << 2, a = l * r, d = 122 + a, c = new ArrayBuffer(d), u = new DataView(c), f = 1 << 20;
  let h, g, y, O, p = f, S = 0, w = 0, _ = 0;
  function x(b) {
    u.setUint16(w, b, true), w += 2;
  }
  function E(b) {
    u.setUint32(w, b, true), w += 4;
  }
  function L(b) {
    w += b;
  }
  x(19778), E(d), L(4), E(122), E(108), E(n), E(-r >>> 0), x(1), x(32), E(3), E(a), E(2835), E(2835), L(8), E(16711680), E(65280), E(255), E(4278190080), E(1466527264), function b() {
    for (; S < r && p > 0; ) {
      for (O = 122 + S * l, h = 0; h < s; ) p--, g = i[_++], y = g >>> 24, u.setUint32(O + h, g << 8 | y), h += 4;
      S++;
    }
    _ < i.length ? (p = f, setTimeout(b, fu._dly)) : t(c);
  }();
}, toBlob(e, t) {
  this.toArrayBuffer(e, (n) => {
    t(new Blob([n], { type: "image/bmp" }));
  });
}, _dly: 9 };
var et = { CHROME: "CHROME", FIREFOX: "FIREFOX", DESKTOP_SAFARI: "DESKTOP_SAFARI", IE: "IE", IOS: "IOS", ETC: "ETC" }, bm = { [et.CHROME]: 16384, [et.FIREFOX]: 11180, [et.DESKTOP_SAFARI]: 16384, [et.IE]: 8192, [et.IOS]: 4096, [et.ETC]: 8192 };
const ii = typeof window < "u", du = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope, rs = ii && window.cordova && window.cordova.require && window.cordova.require("cordova/modulemapper"), vm = (ii || du) && (rs && rs.getOriginalSymbol(window, "File") || typeof File < "u" && File), hu = (ii || du) && (rs && rs.getOriginalSymbol(window, "FileReader") || typeof FileReader < "u" && FileReader);
function li(e, t, n = Date.now()) {
  return new Promise((r) => {
    const s = e.split(","), o = s[0].match(/:(.*?);/)[1], i = globalThis.atob(s[1]);
    let l = i.length;
    const a = new Uint8Array(l);
    for (; l--; ) a[l] = i.charCodeAt(l);
    const d = new Blob([a], { type: o });
    d.name = t, d.lastModified = n, r(d);
  });
}
function pu(e) {
  return new Promise((t, n) => {
    const r = new hu();
    r.onload = () => t(r.result), r.onerror = (s) => n(s), r.readAsDataURL(e);
  });
}
function gu(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.onload = () => t(r), r.onerror = (s) => n(s), r.src = e;
  });
}
function dn() {
  if (dn.cachedResult !== void 0) return dn.cachedResult;
  let e = et.ETC;
  const { userAgent: t } = navigator;
  return /Chrom(e|ium)/i.test(t) ? e = et.CHROME : /iP(ad|od|hone)/i.test(t) && /WebKit/i.test(t) ? e = et.IOS : /Safari/i.test(t) ? e = et.DESKTOP_SAFARI : /Firefox/i.test(t) ? e = et.FIREFOX : (/MSIE/i.test(t) || document.documentMode) && (e = et.IE), dn.cachedResult = e, dn.cachedResult;
}
function mu(e, t) {
  const n = dn(), r = bm[n];
  let s = e, o = t, i = s * o;
  const l = s > o ? o / s : s / o;
  for (; i > r * r; ) {
    const a = (r + s) / 2, d = (r + o) / 2;
    a < d ? (o = d, s = d * l) : (o = a * l, s = a), i = s * o;
  }
  return { width: s, height: o };
}
function Ss(e, t) {
  let n, r;
  try {
    if (n = new OffscreenCanvas(e, t), r = n.getContext("2d"), r === null) throw new Error("getContext of OffscreenCanvas returns null");
  } catch {
    n = document.createElement("canvas"), r = n.getContext("2d");
  }
  return n.width = e, n.height = t, [n, r];
}
function _u(e, t) {
  const { width: n, height: r } = mu(e.width, e.height), [s, o] = Ss(n, r);
  return t && /jpe?g/.test(t) && (o.fillStyle = "white", o.fillRect(0, 0, s.width, s.height)), o.drawImage(e, 0, 0, s.width, s.height), s;
}
function $r() {
  return $r.cachedResult !== void 0 || ($r.cachedResult = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && typeof document < "u" && "ontouchend" in document), $r.cachedResult;
}
function ss(e, t = {}) {
  return new Promise(function(n, r) {
    let s, o;
    var i = function() {
      try {
        return o = _u(s, t.fileType || e.type), n([s, o]);
      } catch (a) {
        return r(a);
      }
    }, l = function(a) {
      try {
        var d = function(c) {
          try {
            throw c;
          } catch (u) {
            return r(u);
          }
        };
        try {
          let c;
          return pu(e).then(function(u) {
            try {
              return c = u, gu(c).then(function(f) {
                try {
                  return s = f, function() {
                    try {
                      return i();
                    } catch (h) {
                      return r(h);
                    }
                  }();
                } catch (h) {
                  return d(h);
                }
              }, d);
            } catch (f) {
              return d(f);
            }
          }, d);
        } catch (c) {
          d(c);
        }
      } catch (c) {
        return r(c);
      }
    };
    try {
      if ($r() || [et.DESKTOP_SAFARI, et.MOBILE_SAFARI].includes(dn())) throw new Error("Skip createImageBitmap on IOS and Safari");
      return createImageBitmap(e).then(function(a) {
        try {
          return s = a, i();
        } catch {
          return l();
        }
      }, l);
    } catch {
      l();
    }
  });
}
function os(e, t, n, r, s = 1) {
  return new Promise(function(o, i) {
    let l;
    if (t === "image/png") {
      let d, c, u;
      return d = e.getContext("2d"), { data: c } = d.getImageData(0, 0, e.width, e.height), u = ft.encode([c.buffer], e.width, e.height, 4096 * s), l = new Blob([u], { type: t }), l.name = n, l.lastModified = r, a.call(this);
    }
    {
      let d = function() {
        return a.call(this);
      };
      if (t === "image/bmp") return new Promise((c) => fu.toBlob(e, c)).then((function(c) {
        try {
          return l = c, l.name = n, l.lastModified = r, d.call(this);
        } catch (u) {
          return i(u);
        }
      }).bind(this), i);
      {
        let c = function() {
          return d.call(this);
        };
        if (typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas) return e.convertToBlob({ type: t, quality: s }).then((function(u) {
          try {
            return l = u, l.name = n, l.lastModified = r, c.call(this);
          } catch (f) {
            return i(f);
          }
        }).bind(this), i);
        {
          let u;
          return u = e.toDataURL(t, s), li(u, n, r).then((function(f) {
            try {
              return l = f, c.call(this);
            } catch (h) {
              return i(h);
            }
          }).bind(this), i);
        }
      }
    }
    function a() {
      return o(l);
    }
  });
}
function At(e) {
  e.width = 0, e.height = 0;
}
function wn() {
  return new Promise(function(e, t) {
    let n, r, s, o;
    return wn.cachedResult !== void 0 ? e(wn.cachedResult) : li("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==", "test.jpg", Date.now()).then(function(i) {
      try {
        return n = i, ss(n).then(function(l) {
          try {
            return r = l[1], os(r, n.type, n.name, n.lastModified).then(function(a) {
              try {
                return s = a, At(r), ss(s).then(function(d) {
                  try {
                    return o = d[0], wn.cachedResult = o.width === 1 && o.height === 2, e(wn.cachedResult);
                  } catch (c) {
                    return t(c);
                  }
                }, t);
              } catch (d) {
                return t(d);
              }
            }, t);
          } catch (a) {
            return t(a);
          }
        }, t);
      } catch (l) {
        return t(l);
      }
    }, t);
  });
}
function yu(e) {
  return new Promise((t, n) => {
    const r = new hu();
    r.onload = (s) => {
      const o = new DataView(s.target.result);
      if (o.getUint16(0, false) != 65496) return t(-2);
      const i = o.byteLength;
      let l = 2;
      for (; l < i; ) {
        if (o.getUint16(l + 2, false) <= 8) return t(-1);
        const a = o.getUint16(l, false);
        if (l += 2, a == 65505) {
          if (o.getUint32(l += 2, false) != 1165519206) return t(-1);
          const d = o.getUint16(l += 6, false) == 18761;
          l += o.getUint32(l + 4, d);
          const c = o.getUint16(l, d);
          l += 2;
          for (let u = 0; u < c; u++) if (o.getUint16(l + 12 * u, d) == 274) return t(o.getUint16(l + 12 * u + 8, d));
        } else {
          if ((65280 & a) != 65280) break;
          l += o.getUint16(l, false);
        }
      }
      return t(-1);
    }, r.onerror = (s) => n(s), r.readAsArrayBuffer(e);
  });
}
function bu(e, t) {
  const { width: n } = e, { height: r } = e, { maxWidthOrHeight: s } = t;
  let o, i = e;
  return isFinite(s) && (n > s || r > s) && ([i, o] = Ss(n, r), n > r ? (i.width = s, i.height = r / n * s) : (i.width = n / r * s, i.height = s), o.drawImage(e, 0, 0, i.width, i.height), At(e)), i;
}
function vu(e, t) {
  const { width: n } = e, { height: r } = e, [s, o] = Ss(n, r);
  switch (t > 4 && t < 9 ? (s.width = r, s.height = n) : (s.width = n, s.height = r), t) {
    case 2:
      o.transform(-1, 0, 0, 1, n, 0);
      break;
    case 3:
      o.transform(-1, 0, 0, -1, n, r);
      break;
    case 4:
      o.transform(1, 0, 0, -1, 0, r);
      break;
    case 5:
      o.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      o.transform(0, 1, -1, 0, r, 0);
      break;
    case 7:
      o.transform(0, -1, -1, 0, r, n);
      break;
    case 8:
      o.transform(0, -1, 1, 0, 0, n);
  }
  return o.drawImage(e, 0, 0, n, r), At(e), s;
}
function Xl(e, t, n = 0) {
  return new Promise(function(r, s) {
    let o, i, l, a, d, c, u, f, h, g, y, O, p, S, w, _, x, E, L, b;
    function m(F = 5) {
      if (t.signal && t.signal.aborted) throw t.signal.reason;
      o += F, t.onProgress(Math.min(o, 100));
    }
    function P(F) {
      if (t.signal && t.signal.aborted) throw t.signal.reason;
      o = Math.min(Math.max(F, o), 100), t.onProgress(o);
    }
    return o = n, i = t.maxIteration || 10, l = 1024 * t.maxSizeMB * 1024, m(), ss(e, t).then((function(F) {
      try {
        return [, a] = F, m(), d = bu(a, t), m(), new Promise(function(R, U) {
          var k;
          if (!(k = t.exifOrientation)) return yu(e).then((function(T) {
            try {
              return k = T, W.call(this);
            } catch (v) {
              return U(v);
            }
          }).bind(this), U);
          function W() {
            return R(k);
          }
          return W.call(this);
        }).then((function(R) {
          try {
            return c = R, m(), wn().then((function(U) {
              try {
                return u = U ? d : vu(d, c), m(), f = t.initialQuality || 1, h = t.fileType || e.type, os(u, h, e.name, e.lastModified, f).then((function(k) {
                  try {
                    {
                      let T = function() {
                        if (i-- && (w > l || w > p)) {
                          let B, V;
                          return B = b ? 0.95 * L.width : L.width, V = b ? 0.95 * L.height : L.height, [x, E] = Ss(B, V), E.drawImage(L, 0, 0, B, V), f *= h === "image/png" ? 0.85 : 0.95, os(x, h, e.name, e.lastModified, f).then(function(J) {
                            try {
                              return _ = J, At(L), L = x, w = _.size, P(Math.min(99, Math.floor((S - w) / (S - l) * 100))), T;
                            } catch (ie) {
                              return s(ie);
                            }
                          }, s);
                        }
                        return [1];
                      }, v = function() {
                        return At(L), At(x), At(d), At(u), At(a), P(100), r(_);
                      };
                      if (g = k, m(), y = g.size > l, O = g.size > e.size, !y && !O) return P(100), r(g);
                      var W;
                      return p = e.size, S = g.size, w = S, L = u, b = !t.alwaysKeepResolution && y, (W = (function(B) {
                        for (; B; ) {
                          if (B.then) return void B.then(W, s);
                          try {
                            if (B.pop) {
                              if (B.length) return B.pop() ? v.call(this) : B;
                              B = T;
                            } else B = B.call(this);
                          } catch (V) {
                            return s(V);
                          }
                        }
                      }).bind(this))(T);
                    }
                  } catch (T) {
                    return s(T);
                  }
                }).bind(this), s);
              } catch (k) {
                return s(k);
              }
            }).bind(this), s);
          } catch (U) {
            return s(U);
          }
        }).bind(this), s);
      } catch (R) {
        return s(R);
      }
    }).bind(this), s);
  });
}
const Em = `
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;
let Gs;
function Am(e, t) {
  return new Promise((n, r) => {
    Gs || (Gs = function(i) {
      const l = [];
      return l.push(i), URL.createObjectURL(new Blob(l));
    }(Em));
    const s = new Worker(Gs);
    s.addEventListener("message", function(i) {
      if (t.signal && t.signal.aborted) s.terminate();
      else if (i.data.progress === void 0) {
        if (i.data.error) return r(new Error(i.data.error)), void s.terminate();
        n(i.data.file), s.terminate();
      } else t.onProgress(i.data.progress);
    }), s.addEventListener("error", r), t.signal && t.signal.addEventListener("abort", () => {
      r(t.signal.reason), s.terminate();
    }), s.postMessage({ file: e, imageCompressionLibUrl: t.libURL, options: { ...t, onProgress: void 0, signal: void 0 } });
  });
}
function Ye(e, t) {
  return new Promise(function(n, r) {
    let s, o, i, l, a, d;
    if (s = { ...t }, i = 0, { onProgress: l } = s, s.maxSizeMB = s.maxSizeMB || Number.POSITIVE_INFINITY, a = typeof s.useWebWorker != "boolean" || s.useWebWorker, delete s.useWebWorker, s.onProgress = (h) => {
      i = h, typeof l == "function" && l(i);
    }, !(e instanceof Blob || e instanceof vm)) return r(new Error("The file given is not an instance of Blob or File"));
    if (!/^image/.test(e.type)) return r(new Error("The file given is not an image"));
    if (d = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope, !a || typeof Worker != "function" || d) return Xl(e, s).then((function(h) {
      try {
        return o = h, f.call(this);
      } catch (g) {
        return r(g);
      }
    }).bind(this), r);
    var c = (function() {
      try {
        return f.call(this);
      } catch (h) {
        return r(h);
      }
    }).bind(this), u = function(h) {
      try {
        return Xl(e, s).then(function(g) {
          try {
            return o = g, c();
          } catch (y) {
            return r(y);
          }
        }, r);
      } catch (g) {
        return r(g);
      }
    };
    try {
      return s.libURL = s.libURL || "https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js", Am(e, s).then(function(h) {
        try {
          return o = h, c();
        } catch {
          return u();
        }
      }, u);
    } catch {
      u();
    }
    function f() {
      try {
        o.name = e.name, o.lastModified = e.lastModified;
      } catch {
      }
      try {
        s.preserveExif && e.type === "image/jpeg" && (!s.fileType || s.fileType && s.fileType === e.type) && (o = uu(e, o));
      } catch {
      }
      return n(o);
    }
  });
}
Ye.getDataUrlFromFile = pu, Ye.getFilefromDataUrl = li, Ye.loadImage = gu, Ye.drawImageInCanvas = _u, Ye.drawFileInCanvas = ss, Ye.canvasToFile = os, Ye.getExifOrientation = yu, Ye.handleMaxWidthOrHeight = bu, Ye.followExifOrientation = vu, Ye.cleanupCanvasMemory = At, Ye.isAutoOrientationInBrowser = wn, Ye.approximateBelowMaximumCanvasSizeOfBrowser = mu, Ye.copyExifWithoutOrientation = uu, Ye.getBrowserName = dn, Ye.version = "2.0.2";
export {
  Cf as $,
  ge as A,
  Gm as B,
  km as C,
  Rn as D,
  rt as E,
  Qm as F,
  Be as G,
  Dm as H,
  Lm as I,
  xm as J,
  Fm as K,
  Cm as L,
  $m as M,
  Tm as N,
  Du as O,
  bc as P,
  Wm as Q,
  e0 as R,
  Im as S,
  wm as T,
  oi as U,
  Rf as V,
  Pm as W,
  fd as X,
  Sm as Y,
  Um as Z,
  Yi as _,
  Mm as a,
  Rm as a0,
  vc as a1,
  Ye as a2,
  Xm as a3,
  qm as a4,
  jm as a5,
  Bm as a6,
  Ym as a7,
  Hm as a8,
  ro as b,
  He as c,
  $n as d,
  ua as e,
  Oo as f,
  Vm as g,
  Ro as h,
  yr as i,
  De as j,
  Om as k,
  yf as l,
  so as m,
  ds as n,
  Wo as o,
  Nm as p,
  Km as q,
  Qt as r,
  Zm as s,
  ku as t,
  Jm as u,
  zm as v,
  St as w,
  Re as x,
  Do as y,
  Mt as z
};
