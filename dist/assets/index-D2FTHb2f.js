const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/SignEncryption-DppJ7wPW.js","../chunks/SignPassword.vue_vue_type_script_setup_true_lang-R72PkFQp.js","../chunks/vendor-C8V6AyHD.js","../chunks/@component-hook/pdf-canvas-DoR1skRj.js","../chunks/UploadPassword-B7R4VJtG.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { d as A, r as S, c as U, a as _, f as F, e as o, b as n, u as be, t as c, j as dt, k as y, l as fe, m as G, p as Z, q as L, F as X, s as at, v as l, T as Jt, i as Lt, x as me, g as J, y as Dt, z as Fe, A as Le, B as Ae, C as Ee, D as Ie, E as Ze, G as nt, h as he, H as Oe, I as Qt, J as qe, K as ge, L as ft, M as it, N as Re, O as Ve, P as ve, w as zt, n as Wt, Q as He, R as Ue, S as ce, U as Ne, V as gt, W as We, o as te, X as yt, Y as st, Z as ct, _ as ee, $ as Ge, a0 as Ke, a1 as de, a2 as ue, a3 as Ye, a4 as Xe, a5 as Je, a6 as Qe, a7 as ti } from "../chunks/vendor-C8V6AyHD.js";
import { useFabric as ei, __tla as __tla_0 } from "../chunks/@component-hook/pdf-canvas-DoR1skRj.js";
let we, vt, W, O, Ct, mt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _t;
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
      for (const a of s) if (a.type === "childList") for (const u of a.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(s) {
      const a = {};
      return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function r(s) {
      if (s.ep) return;
      s.ep = true;
      const a = i(s);
      fetch(s.href, a);
    }
  })();
  let ii, si, ri, oi, ai, Ft, ni, li, ci, di;
  ii = "" + new URL("logo_darkbg_horizontal-OYE7k2dq.png", import.meta.url).href;
  si = [
    "title"
  ];
  ri = [
    "href",
    "fill"
  ];
  O = A({
    __name: "SignIcon",
    props: {
      name: {},
      hoverColor: {
        default: "hover:text-primary"
      },
      prefix: {
        default: "icon"
      },
      color: {
        default: "#4D4D4D"
      },
      hoverChangeSvg: {
        type: Boolean,
        default: false
      }
    },
    setup(t) {
      const e = S(false), i = U(() => {
        const r = `#${t.prefix}-ic_${t.name}`;
        return t.hoverChangeSvg && e.value && !t.name.includes("_h") ? `${r}_h` : r;
      });
      return (r, s) => (n(), _("svg", {
        "aria-hidden": "true",
        title: i.value,
        class: F([
          "cursor-pointer",
          {
            [`transition-[color_transform] ${r.hoverColor}`]: !r.hoverChangeSvg
          }
        ]),
        onMouseenter: s[0] || (s[0] = (a) => e.value = true),
        onMouseleave: s[1] || (s[1] = (a) => e.value = false)
      }, [
        o("use", {
          href: i.value,
          fill: r.color
        }, null, 8, ri)
      ], 42, si));
    }
  });
  oi = 20 * 1024 * 1024;
  ai = {
    "en-US": "English",
    "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "ja-JP": "\u65E5\u672C\u8A9E",
    "ko-KR": "\uD55C\uAD6D\uC5B4",
    "fr-FR": "Fran\xE7ais",
    "de-DE": "Deutsch",
    "es-ES": "Espa\xF1ol",
    "it-IT": "Italiano",
    "ru-RU": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    "pt-PT": "Portugu\xEAs",
    "nl-NL": "Nederlands",
    "sv-SE": "Svenska",
    "no-NO": "Norsk",
    "da-DK": "Dansk",
    "fi-FI": "Suomi",
    "pl-PL": "Polski",
    "tr-TR": "T\xFCrk\xE7e",
    "ar-SA": "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    "he-IL": "\u05E2\u05D1\u05E8\u05D9\u05EA",
    "hi-IN": "\u0939\u093F\u0928\u094D\u0926\u0940"
  };
  Ft = 15;
  ni = Array.isArray;
  li = (t) => Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
  ci = (t) => li(t) === "object";
  di = (t, e) => Object.hasOwn(t, e);
  function ui(t, e = 500) {
    if (typeof t != "function") throw new TypeError("The first argument is not a function.");
    let i = 0;
    return function(...r) {
      const s = Date.now();
      s - i < e || (t.apply(this, r), i = s);
    };
  }
  Ct = function(t = 500) {
    return new Promise((e) => setTimeout(e, t));
  };
  function ie() {
    return window.innerWidth > 768;
  }
  function _i(t) {
    const [e, i] = new Date(t).toLocaleString("en-GB").split(","), [r, s, a] = e.split("/");
    return `${a}-${s}-${r} ${i}`;
  }
  function pi(t) {
    let e = window.devicePixelRatio;
    const i = window.matchMedia(`(resolution: ${e}dppx)`), r = () => {
      const s = window.devicePixelRatio;
      s !== e && (e = s, t(s));
    };
    return i.addEventListener("change", r), () => {
      i.removeEventListener("change", r);
    };
  }
  let bi, fi, mi, N, hi, gi, vi, ki, wi, yi, Ci, xi, Pi, Si, $i, Di, ke, ji, Mi, Bi, ye, Ti, zi, Vt, Fi, jt, lt;
  bi = [
    "value"
  ];
  fi = [
    "value"
  ];
  mi = A({
    __name: "SignStep",
    setup(t) {
      const e = be(), i = U(() => e.name === "upload"), r = U(() => e.name === "signature"), s = U(() => e.name === "complete");
      return (a, u) => (n(), _("div", {
        class: F([
          "sign-step",
          {
            "opacity-0": !i.value && !r.value && !s.value
          }
        ])
      }, [
        o("div", {
          class: F([
            "sign-step-dot",
            {
              "sign-step-dot-light": i.value
            },
            {
              "sign-step-dot-complete": r.value || s.value
            }
          ])
        }, [
          o("span", {
            class: F([
              "sign-step-text",
              i.value ? "text-primary" : "text-gray-40"
            ])
          }, c(a.$t("upload_file_lower")), 3)
        ], 2),
        o("progress", {
          class: "sign-step-bar",
          value: r.value || s.value ? 100 : 0,
          max: "100"
        }, null, 8, bi),
        o("div", {
          class: F([
            "sign-step-dot",
            {
              "sign-step-dot-light": r.value
            },
            {
              "sign-step-dot-complete": s.value
            }
          ])
        }, [
          o("span", {
            class: F([
              "sign-step-text",
              r.value ? "text-primary" : "text-gray-40"
            ])
          }, c(a.$t("sign_file_lower")), 3)
        ], 2),
        o("progress", {
          class: "sign-step-bar",
          value: s.value ? 100 : 0,
          max: "100"
        }, null, 8, fi),
        o("div", {
          class: F([
            "sign-step-dot",
            {
              "sign-step-dot-light": s.value
            }
          ])
        }, [
          o("span", {
            class: F([
              "sign-step-text",
              s.value ? "text-primary" : "text-gray-40"
            ])
          }, c(a.$t("sign_completed_lower")), 3)
        ], 2)
      ], 2));
    }
  });
  N = (t, e) => {
    const i = t.__vccOpts || t;
    for (const [r, s] of e) i[r] = s;
    return i;
  };
  hi = N(mi, [
    [
      "__scopeId",
      "data-v-daabe63b"
    ]
  ]);
  gi = {
    class: "app-header"
  };
  vi = {
    class: "flex items-center gap-2 md:gap-4"
  };
  ki = {
    class: "app-header-language"
  };
  wi = [
    "onClick"
  ];
  yi = {
    href: "https://github.com/tzuyi0817/PDF-signature",
    target: "_blank",
    rel: "noopener noreferrer"
  };
  Ci = A({
    name: "AppHeader",
    __name: "index",
    setup(t) {
      const e = S(false), i = S(false), { locale: r } = dt();
      let s = null, a = false;
      async function u(f) {
        r.value = f, localStorage.setItem("pdf-signature-i18n", f), a = true, await Ct(0), e.value = false;
      }
      async function b() {
        a || (s && (clearTimeout(s), s = null), i.value = true, await Ct(0), e.value = true);
      }
      function p() {
        s = setTimeout(() => {
          e.value = false;
        }, 150);
      }
      function v(f) {
        f.propertyName !== "scale" || e.value || (i.value = false, a = false);
      }
      return (f, C) => {
        const k = fe("router-link");
        return n(), _("header", gi, [
          y(k, {
            to: "/"
          }, {
            default: G(() => C[0] || (C[0] = [
              o("img", {
                src: ii,
                class: "w-36 md:w-[228px]",
                alt: "logo"
              }, null, -1)
            ])),
            _: 1
          }),
          y(hi),
          o("div", vi, [
            o("div", {
              class: "relative",
              onMouseover: b,
              onMouseleave: p
            }, [
              y(O, {
                name: "global",
                class: "app-header-icon text-gray-40 mt-0.5"
              }),
              i.value ? (n(), _("div", {
                key: 0,
                class: F([
                  "app-header-menu-arrow app-header-transition",
                  {
                    "opacity-0 scale-y-0": !e.value
                  }
                ])
              }, null, 2)) : Z("", true),
              (n(), L(Jt, {
                to: "body"
              }, [
                i.value ? (n(), _("div", {
                  key: 0,
                  class: F([
                    "app-header-menu app-header-transition",
                    {
                      "scale-y-0 opacity-0": !e.value
                    }
                  ]),
                  onTransitionend: v,
                  onMouseover: b,
                  onMouseleave: p
                }, [
                  o("ul", ki, [
                    (n(true), _(X, null, at(l(ai), ($, w) => (n(), _("li", {
                      key: w,
                      class: F([
                        "text-gray-50",
                        {
                          "text-black bg-primary": l(r) === w
                        }
                      ]),
                      onClick: (x) => u(w)
                    }, c($), 11, wi))), 128))
                  ])
                ], 34)) : Z("", true)
              ]))
            ], 32),
            o("a", yi, [
              y(O, {
                name: "github",
                class: "app-header-icon text-gray-40"
              })
            ])
          ])
        ]);
      };
    }
  });
  xi = N(Ci, [
    [
      "__scopeId",
      "data-v-ac66d94b"
    ]
  ]);
  Pi = "" + new URL("bg_decorate-CGBiDQAU.svg", import.meta.url).href;
  Si = {
    class: "app-footer"
  };
  $i = A({
    name: "AppFooter",
    __name: "index",
    setup(t) {
      return (e, i) => (n(), _("div", Si, i[0] || (i[0] = [
        o("img", {
          src: Pi,
          alt: "background decorate"
        }, null, -1)
      ])));
    }
  });
  Di = N($i, [
    [
      "__scopeId",
      "data-v-16975abc"
    ]
  ]);
  ke = "" + new URL("loading-ClOqHxNk.gif", import.meta.url).href;
  ji = {
    class: "sign-popup-box"
  };
  Mi = {
    class: "border-b-2 border-primary py-1 px-4 text-center font-medium md:pb-4"
  };
  Bi = A({
    __name: "SignPopup",
    props: {
      title: {}
    },
    emits: [
      "childMounted",
      "closePopup"
    ],
    setup(t, { emit: e }) {
      const i = e;
      return Lt(() => i("childMounted")), (r, s) => (n(), L(Jt, {
        to: "body"
      }, [
        o("div", {
          class: "sign-popup mask",
          onClick: s[0] || (s[0] = J((a) => r.$emit("closePopup"), [
            "self"
          ]))
        }, [
          o("div", ji, [
            o("h5", Mi, c(r.title), 1),
            me(r.$slots, "default", {}, void 0)
          ])
        ])
      ]));
    }
  });
  we = N(Bi, [
    [
      "__scopeId",
      "data-v-61522e0f"
    ]
  ]);
  ye = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: we
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ti = {
    loading: {
      isShow: false,
      title: "",
      content: "",
      isProcess: false,
      completeness: 0
    },
    filePassword: ""
  };
  mt = Dt("pdf_signature_config", {
    state: () => ({
      ...Ti
    }),
    actions: {
      toggleLoading({ isShow: t, title: e = "", content: i = "", isProcess: r = false, completeness: s = 0 }) {
        this.loading = {
          isShow: t,
          title: e,
          content: i,
          isProcess: r,
          completeness: s
        };
      },
      setLoadingCompleteness(t) {
        this.loading.completeness = t;
      },
      updateFilePassword(t) {
        this.filePassword = t;
      }
    }
  });
  zi = {
    imageList: []
  };
  Vt = Dt("pdf_signature_image", {
    state: () => ({
      ...zi
    }),
    actions: {
      addImage(t) {
        this.imageList.unshift(t);
      },
      deleteImage(t) {
        this.imageList = this.imageList.filter((e) => e !== t);
      }
    },
    persist: {
      storage: localStorage,
      pick: [
        "imageList"
      ]
    }
  });
  Fi = {
    literalList: []
  };
  jt = Dt("pdf_signature_literal", {
    state: () => ({
      ...Fi
    }),
    actions: {
      addLiteral(t) {
        this.literalList.unshift(t);
      },
      deleteLiteral(t) {
        this.literalList = this.literalList.filter((e) => e !== t);
      }
    },
    persist: {
      storage: localStorage,
      pick: [
        "literalList"
      ]
    }
  });
  lt = {
    CURRENT_PDF: "pdf_signature_currentPDF",
    PDF_LIST: "pdf_signature_PDF",
    ARCHIVE_LIST: "pdf_signature_archive",
    TRASH_LIST: "pdf_signature_trash"
  };
  function Mt(t, e) {
    return Le(t, e);
  }
  function Bt(t, e, i) {
    return Fe(t, Tt(e), i);
  }
  function Tt(t) {
    return ni(t) ? t.map((e) => Tt(e)) : Ae(t) || Ee(t) || Ie(t) ? Tt(Ze(t)) : ci(t) ? Object.keys(t).reduce((e, i) => (di(t, i) && (e[i] = Tt(t[i])), e), {}) : t;
  }
  const Li = {
    currentPDF: {
      PDFId: "",
      name: "",
      updateDate: 0,
      PDFBase64: "",
      pages: 0,
      canvas: [],
      trashDate: 0,
      isUpdate: false
    },
    PDFList: [],
    archiveList: [],
    trashList: []
  }, Ai = Dt("pdf_signature_pdf", {
    state: () => ({
      ...Li
    }),
    getters: {},
    actions: {
      async getCurrentPDF() {
        const t = await Mt(lt.CURRENT_PDF);
        t && (this.currentPDF = t);
      },
      setCurrentPDF(t) {
        return this.currentPDF = t, this.updateCurrentPDFIdb();
      },
      clearCurrentPDF() {
        return this.currentPDF = {
          PDFId: "",
          name: "",
          updateDate: 0,
          PDFBase64: "",
          pages: 0,
          canvas: []
        }, this.updateCurrentPDFIdb();
      },
      setCurrentPDFName(t) {
        return this.currentPDF.name = t, this.updateCurrentPDFIdb();
      },
      setCurrentPDFCanvas(t) {
        return this.currentPDF.canvas = t, this.updateCurrentPDFIdb();
      },
      updateCurrentPDFIdb() {
        return Bt(lt.CURRENT_PDF, this.currentPDF);
      },
      async getPDF() {
        const t = await Mt(lt.PDF_LIST);
        t && (this.PDFList = t);
      },
      addPDF(t) {
        return this.PDFList.unshift({
          ...t
        }), this.updatePDFIdb();
      },
      updatePDF(t) {
        const e = this.PDFList.findIndex((i) => i.PDFId === t.PDFId);
        if (e !== -1) return this.PDFList[e] = t, this.updatePDFIdb();
      },
      deletePDF(t) {
        return this.PDFList = this.PDFList.filter(({ PDFId: e }) => t !== e), this.updatePDFIdb();
      },
      updatePDFIdb() {
        return Bt(lt.PDF_LIST, this.PDFList);
      },
      async getArchive() {
        const t = await Mt(lt.ARCHIVE_LIST);
        t && (this.archiveList = t);
      },
      addArchive(t) {
        return this.deletePDF(t.PDFId), this.archiveList.unshift(t), this.updateArchiveIdb();
      },
      batchAddArchive(t) {
        for (const e of t) this.PDFList = this.PDFList.filter(({ PDFId: i }) => e.PDFId !== i), this.archiveList.unshift(e);
        return Promise.all([
          this.updatePDFIdb(),
          this.updateArchiveIdb()
        ]);
      },
      deleteArchive(t) {
        return this.archiveList = this.archiveList.filter(({ PDFId: e }) => t !== e), this.updateArchiveIdb();
      },
      batchReductionArchive(t) {
        for (const e of t) this.archiveList = this.archiveList.filter(({ PDFId: i }) => e.PDFId !== i), this.PDFList.unshift(e);
        return Promise.all([
          this.updatePDFIdb(),
          this.updateArchiveIdb()
        ]);
      },
      updateArchiveIdb() {
        return Bt(lt.ARCHIVE_LIST, this.archiveList);
      },
      async getTrash() {
        const t = await Mt(lt.TRASH_LIST);
        t && (this.trashList = t);
      },
      addTrash(t, e) {
        return (!e || e === "file") && this.deletePDF(t.PDFId), (!e || e === "archive") && this.deleteArchive(t.PDFId), this.trashList.unshift({
          ...t,
          trashDate: Date.now()
        }), this.updateTrashIdb();
      },
      batchAddTrash(t, e) {
        for (const i of t) e === "file" && (this.PDFList = this.PDFList.filter(({ PDFId: r }) => i.PDFId !== r)), e === "archive" && (this.archiveList = this.archiveList.filter(({ PDFId: r }) => i.PDFId !== r)), this.trashList.unshift({
          ...i,
          trashDate: Date.now()
        });
        return Promise.all([
          this.updatePDFIdb(),
          this.updateArchiveIdb(),
          this.updateTrashIdb()
        ]);
      },
      deleteTrash(t) {
        if (t) return this.trashList = this.trashList.filter(({ PDFId: e }) => t !== e), this.updateTrashIdb();
      },
      batchDeleteTrash(t) {
        for (const e of t) this.trashList = this.trashList.filter(({ PDFId: i }) => e.PDFId !== i);
        return this.updateTrashIdb();
      },
      batchReductionTrash(t) {
        for (const e of t) this.trashList = this.trashList.filter(({ PDFId: i }) => e.PDFId !== i), this.PDFList.unshift(e);
        return Promise.all([
          this.updatePDFIdb(),
          this.updateTrashIdb()
        ]);
      },
      filterTrash() {
        const e = Date.now();
        return this.trashList = this.trashList.filter(({ trashDate: i }) => i ? e - i < 2592e6 : true), this.updateTrashIdb();
      },
      updateTrashIdb() {
        return Bt(lt.TRASH_LIST, this.trashList);
      }
    }
  }), Ei = Object.freeze(Object.defineProperty({
    __proto__: null,
    usePdfStore: Ai
  }, Symbol.toStringTag, {
    value: "Module"
  })), Ii = {
    signatureList: []
  }, Gt = Dt("pdf_signature_signature", {
    state: () => ({
      ...Ii
    }),
    actions: {
      addSignature(t) {
        this.signatureList.unshift(t);
      },
      deleteSignature(t) {
        this.signatureList = this.signatureList.filter((e) => e !== t);
      }
    },
    persist: {
      storage: localStorage,
      pick: [
        "signatureList"
      ]
    }
  }), { usePdfStore: Y } = Ei, Zi = {
    class: "flex flex-col gap-8 items-center py-8"
  }, Oi = {
    class: "text-center text-gray-40"
  }, qi = {
    key: 0,
    class: "w-[90%] h-2 rounded bg-gray-30"
  }, Ri = {
    class: "text-center mt-1 text-sm md:text-base"
  }, Vi = A({
    __name: "SignLoading",
    setup(t) {
      const { loading: e } = nt(mt());
      return (i, r) => l(e).isShow ? (n(), L(we, {
        key: 0,
        title: i.$t(l(e).title)
      }, {
        default: G(() => [
          o("div", Zi, [
            r[0] || (r[0] = o("img", {
              src: ke,
              class: "w-[60%]",
              alt: "loading gif"
            }, null, -1)),
            o("h5", Oi, c(i.$t(l(e).content)), 1),
            l(e).isProcess ? (n(), _("div", qi, [
              o("div", {
                class: "h-full bg-primary transition-all rounded",
                style: he({
                  width: `${l(e).completeness}%`
                })
              }, null, 4),
              o("p", Ri, c(`${i.$t("download_progress")} ${Math.floor(l(e).completeness)}%`), 1)
            ])) : Z("", true)
          ])
        ]),
        _: 1
      }, 8, [
        "title"
      ])) : Z("", true);
    }
  }), Hi = A({
    __name: "SignReload",
    setup(t) {
      function e() {
        window.location.reload();
      }
      return (i, r) => (n(), L(Jt, {
        to: "#loading-reload"
      }, [
        o("button", {
          class: "btn btn-primary w-fit max-w-[560px] mx-2 h-fit whitespace-normal break-words",
          onClick: e
        }, c(i.$t("prompt.error_occurred")), 1)
      ]));
    }
  }), Ce = Symbol("inject-router");
  class Ui {
    constructor() {
      __privateAdd(this, _t, /* @__PURE__ */ new Map());
    }
    publish(e) {
      var _a;
      if (!__privateGet(this, _t).has(e)) return;
      (_a = __privateGet(this, _t).get(e)) == null ? void 0 : _a.forEach((r) => r());
    }
    subscribe(e, i) {
      const r = __privateGet(this, _t).get(e);
      r ? r.add(i) : __privateGet(this, _t).set(e, /* @__PURE__ */ new Set([
        i
      ]));
    }
    unsubscribe(e, i) {
      var _a;
      (_a = __privateGet(this, _t).get(e)) == null ? void 0 : _a.delete(i);
    }
    clearEvents() {
      __privateGet(this, _t).forEach((e) => {
        e.clear();
      });
    }
  }
  _t = new WeakMap();
  const Kt = new Ui(), Yt = Ni("onAfterLeave");
  function Ni(t) {
    return (e) => {
      var _a;
      const r = (_a = Oe(Ce).value) == null ? void 0 : _a.name;
      if (!r) throw new Error("Route name is not defined");
      const s = `${t}-${String(r)}`, a = () => {
        e(), Kt.unsubscribe(s, a);
      };
      Kt.subscribe(s, a);
    };
  }
  function wt(t, e) {
    Kt.publish(`${t}-${e}`);
  }
  const Wi = A({
    __name: "App",
    setup(t) {
      const e = Qt(), i = S(""), r = S("");
      return e.beforeEach((s, a) => {
        i.value = String(s.name), r.value = String(a.name);
      }), (s, a) => {
        const u = fe("router-view");
        return n(), _(X, null, [
          y(l(xi)),
          y(u, null, {
            default: G(({ Component: b }) => [
              y(qe, {
                name: "slide-fade",
                mode: "out-in",
                onBeforeEnter: a[0] || (a[0] = (p) => l(wt)("onBeforeEnter", i.value)),
                onEnter: a[1] || (a[1] = (p) => l(wt)("onEnter", i.value)),
                onAfterEnter: a[2] || (a[2] = (p) => l(wt)("onAfterEnter", i.value)),
                onBeforeLeave: a[3] || (a[3] = (p) => l(wt)("onBeforeLeave", r.value)),
                onLeave: a[4] || (a[4] = (p) => l(wt)("onLeave", r.value)),
                onAfterLeave: a[5] || (a[5] = (p) => l(wt)("onAfterLeave", r.value))
              }, {
                default: G(() => [
                  (n(), L(ge(b)))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }),
          y(l(Di)),
          y(Vi),
          y(Hi)
        ], 64);
      };
    }
  }), Gi = {
    class: "flex gap-3"
  }, Ki = A({
    name: "BatchOperation",
    __name: "index",
    props: {
      type: {},
      batch: {}
    },
    emits: [
      "clearBatch",
      "openWarnPopup"
    ],
    setup(t, { emit: e }) {
      const i = e, { batchAddArchive: r, batchAddTrash: s, batchReductionArchive: a, batchReductionTrash: u } = Y();
      async function b() {
        await r(t.batch), i("clearBatch");
      }
      async function p() {
        await s(t.batch, t.type), i("clearBatch");
      }
      async function v() {
        t.type === "archive" ? await a(t.batch) : await u(t.batch), i("clearBatch");
      }
      return (f, C) => (n(), _("div", Gi, [
        f.type === "file" ? (n(), L(O, {
          key: 0,
          name: "archive",
          class: "w-6 h-6",
          onClick: b
        })) : Z("", true),
        f.type === "archive" || f.type === "trash" ? (n(), L(O, {
          key: 1,
          name: "reduction",
          class: "w-6 h-6",
          onClick: v
        })) : Z("", true),
        f.type === "file" || f.type === "archive" ? (n(), L(O, {
          key: 2,
          name: "trash",
          class: "w-6 h-6",
          onClick: p
        })) : Z("", true),
        f.type === "trash" ? (n(), L(O, {
          key: 3,
          name: "trash",
          class: "w-6 h-6",
          onClick: C[0] || (C[0] = (k) => f.$emit("openWarnPopup"))
        })) : Z("", true)
      ]));
    }
  }), Yi = [
    "id",
    "aria-checked"
  ], Xi = A({
    name: "Checkbox",
    __name: "index",
    props: {
      modelValue: {
        type: [
          Boolean,
          String
        ]
      },
      modelModifiers: {}
    },
    emits: ft([
      "change"
    ], [
      "update:modelValue"
    ]),
    setup(t, { emit: e }) {
      const i = it(t, "modelValue"), r = e, s = Re();
      function a() {
        i.value === true || i.value === "mixed" ? i.value = false : i.value = true, r("change", i.value);
      }
      return (u, b) => (n(), _("label", {
        id: l(s),
        class: F([
          "checkbox-container",
          {
            checked: i.value === true,
            mixed: i.value === "mixed"
          }
        ]),
        "aria-checked": i.value,
        role: "checkbox",
        onClick: a
      }, b[0] || (b[0] = [
        o("span", {
          class: "checkmark"
        }, null, -1)
      ]), 10, Yi));
    }
  }), Ji = N(Xi, [
    [
      "__scopeId",
      "data-v-7ce7a363"
    ]
  ]), Qi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20'%20cy='20'%20r='10.75'%20stroke='white'%20stroke-width='2.5'/%3e%3cpath%20d='M16%2024L23.7782%2016.2218'%20stroke='white'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M24%2024L16.2218%2016.2218'%20stroke='white'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", ts = 2e3, es = 8, is = 50, ss = [
    "data-id"
  ], rs = {
    class: "highlight text-white truncate w-fit"
  }, os = A({
    name: "Toast",
    __name: "index",
    props: {
      message: {
        default: ""
      },
      duration: {
        default: ts
      },
      id: {},
      zIndex: {
        default: is
      },
      type: {
        default: "success"
      }
    },
    emits: [
      "close",
      "closed",
      "mounted"
    ],
    setup(t, { expose: e, emit: i }) {
      Ve((h) => ({
        "13ac8a4e": h.zIndex,
        "3c5118be": $.value
      }));
      const r = t, s = i, a = S(false), u = S(0), b = S(false), p = ve("toastRef");
      let v = new ResizeObserver(g), f = null;
      const C = U(() => {
        var _a, _b;
        const h = ds(r.id);
        if (!h) return 0;
        const { component: D } = h;
        return (((_b = (_a = D.exposed) == null ? void 0 : _a.offsetBottom) == null ? void 0 : _b.value) ?? 0) + es;
      }), k = U(() => C.value + u.value), $ = U(() => `${C.value}px`), w = U(() => b.value ? "fade-leave-to" : a.value ? "fade-enter-to" : "fade-enter-from");
      function x() {
        r.duration !== 0 && (f = setTimeout(() => {
          M();
        }, r.duration));
      }
      function M() {
        b.value = true, s("close"), f && (clearTimeout(f), f = null);
      }
      function T() {
        b.value && s("closed");
      }
      function g() {
        p.value && (u.value = p.value.offsetHeight);
      }
      return zt(p, (h, D) => {
        D && (v == null ? void 0 : v.unobserve(D)), h && (v == null ? void 0 : v.observe(h));
      }), Lt(async () => {
        p.value && (await Wt(), s("mounted", p.value.getBoundingClientRect().height), await Wt(), x(), a.value = true);
      }), He(() => {
        v && (v.disconnect(), v = null);
      }), e({
        close: M,
        offsetBottom: k
      }), (h, D) => (n(), _("div", {
        ref_key: "toastRef",
        ref: p,
        class: F([
          "toast",
          h.type,
          w.value
        ]),
        "data-id": h.id,
        role: "alert",
        onTransitionend: T
      }, [
        o("p", rs, c(h.message), 1),
        o("img", {
          src: Qi,
          class: "cursor-pointer w-10 h-10",
          alt: "close toast icon",
          onClick: M
        })
      ], 42, ss));
    }
  }), as = N(os, [
    [
      "__scopeId",
      "data-v-e24dbb69"
    ]
  ]), $t = Ue([]);
  let ns = 0;
  function ls(t) {
    var _a;
    const e = `toast-${++ns}`, i = typeof t == "string" ? {
      message: t
    } : t;
    let r = document.createElement("div");
    const s = {
      ...i,
      id: e,
      onClose: () => {
      },
      onClosed: () => {
        var _a2;
        r && ce(null, r), r = null, cs(e), (_a2 = i.onClosed) == null ? void 0 : _a2.call(i);
      },
      onMounted: () => {
      }
    }, a = y(as, s);
    ce(a, r), r.firstElementChild && document.body.append(r.firstElementChild);
    const u = a.component, b = ((_a = u.exposed) == null ? void 0 : _a.close) ?? (() => {
    });
    return {
      id: e,
      component: u,
      close: b
    };
  }
  W = function(t) {
    const e = ls(t);
    return $t.push(e), {
      close: e.close
    };
  };
  function cs(t) {
    const e = $t.findIndex((i) => i.id === t);
    e !== -1 && $t.splice(e, 1);
  }
  function ds(t) {
    const e = $t.findIndex((i) => i.id === t);
    return e <= 0 ? null : $t[e - 1];
  }
  const Ht = (t) => t && typeof t == "object" && !Array.isArray(t), Xt = (t, ...e) => {
    if (!e.length) return t;
    const i = e.shift();
    if (Ht(t) && Ht(i)) for (const r in i) Ht(i[r]) ? (t[r] || Object.assign(t, {
      [r]: {}
    }), Xt(t[r], i[r])) : Object.assign(t, {
      [r]: i[r]
    });
    return Xt(t, ...e);
  }, us = Xt({}, {
    "ar-SA": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0636\u0627\u0641\u0629 \u0646\u0635 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0634\u0643\u0644 \u0634\u0627\u0626\u0639"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0641 \u062A\u0648\u0642\u064A\u0639"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0636\u0627\u0641\u0629 \u0646\u0635"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u0641\u0639\u0627\u062A"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0644\u063A\u0627\u0621"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u0623\u0643\u064A\u062F"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641 \u062A\u0648\u0642\u064A\u0639"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062D\u0630\u0641"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u0645\u064A\u0644"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u0642\u062F\u0645 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062D\u0627\u0644\u064A"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0646\u0635"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u062A\u0634\u0641\u064A\u0631"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u0645\u0644\u0641"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u062A\u062E\u0644\u064A"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062F\u0645\u062C \u0627\u0644\u0645\u0644\u0641\u0627\u062A..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0645\u0644\u0641\u0627\u062A\u064A"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0644\u064A\u0633 \u0628\u0639\u062F"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u0635\u0641\u062D\u0629"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u0635\u0641\u062D\u0627\u062A"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u0635\u0641\u062D\u0627\u062A"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0635\u0648\u0631\u0629"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u0639\u0627\u062F\u0629 \u0625\u062F\u062E\u0627\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u0633\u0627\u0628\u0642"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0633\u064A\u062A\u0645 \u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629 \u0647\u0646\u0627"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0628\u0639\u062F \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621\u060C \u0633\u064A\u062A\u0645 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0625\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629. \u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0647\u0646\u0627\u0643 \u0635\u0641\u062D\u0629 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u062A\u0623\u0643\u064A\u062F."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0639\u0627\u0644 \u0648\u0623\u0646\u0634\u0626 \u0645\u0644\u0641\u064B\u0627 \u062C\u062F\u064A\u062F\u064B\u0627"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0633\u064A\u062A\u0645 \u0639\u0631\u0636 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062D\u0630\u0648\u0641\u0629 \u0647\u0646\u0627"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0644\u062D\u0645\u0627\u064A\u0629 \u0645\u0644\u0641 PDF \u0627\u0644\u062E\u0627\u0635 \u0628\u0643"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u060C \u064A\u0631\u062C\u0649 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0641\u062D\u0629 \u0648\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645\u062A \u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0644\u0641 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u064A\u062A\u062C\u0627\u0648\u0632 20 \u0645\u064A\u062C\u0627 \u0628\u0627\u064A\u062A"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0627\u0644\u062A\u062E\u0644\u064A \u0639\u0646 \u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0645\u0644\u0641\u061F"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0646\u0627\u0635\u0631"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0627\u0646\u062A\u0647\u062A \u0645\u0647\u0644\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0623\u0648 \u0627\u0633\u062D\u0628 \u0627\u0644\u0645\u0644\u0641 \u0647\u0646\u0627"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0630\u0647 \u0627\u0644\u0635\u0648\u0631\u0629 \u0645\u0648\u062C\u0648\u062F\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0641\u0634\u0644 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0645\u062D\u0645\u064A \u0628\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0641 \u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062D\u0630\u0641 \u0645\u0644\u0641 \u0627\u0644\u062A\u0648\u0642\u064A\u0639 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u064A\u062F\u0639\u0645 \u0641\u0642\u0637 \u0645\u0644\u0641\u0627\u062A "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "\u060C \u0648\u0627\u0644\u062D\u062C\u0645 \u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 20 \u0645\u064A\u062C\u0627 \u0628\u0627\u064A\u062A."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0623\u0631\u0634\u0641\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641\u061F"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u0623\u0643\u0645\u0644\u062A \u062A\u0648\u0642\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u061F"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641\u061F"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0635\u0648\u0631\u0629\u061F"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u062A\u0648\u0642\u064A\u0639\u061F"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635\u061F"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0627\u0644\u062A\u062E\u0644\u064A \u0639\u0646 \u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0645\u062D\u062A\u0648\u0649\u061F"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0646\u0635 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0648\u062C\u0648\u062F \u0628\u0627\u0644\u0641\u0639\u0644"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0646\u0635 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u062A\u0645 \u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0646\u0635 \u0628\u0646\u062C\u0627\u062D"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0633\u064A\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0633\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0644\u0627\u062A \u0628\u0634\u0643\u0644 \u062F\u0627\u0626\u0645 \u0628\u0639\u062F 30 \u064A\u0648\u0645\u064B\u0627"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u064A\u0631\u062C\u0649 \u062A\u062C\u0631\u0628\u0629 \u0645\u0635\u0637\u0644\u062D \u0628\u062D\u062B \u0622\u062E\u0631"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0623\u064A \u0639\u0646\u0627\u0635\u0631 \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0628\u062D\u062B"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u062F\u064A\u062F"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u062F\u064A\u062F \u0645\u0644\u0641"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u062F\u064A\u062F \u0635\u0641\u062D\u0629"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0642\u062A"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u0648\u0642\u064A\u0639"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u062A\u0648\u0642\u064A\u0639"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u0627\u0643\u062A\u0645\u0644"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u0627\u0644\u062A\u0648\u0642\u064A\u0639"
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u0648\u0642\u064A\u0639 \u0645\u0644\u0641"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u062A\u0648\u0642\u064A\u0639"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u0645\u0644\u0641"
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0645\u0644\u0641 \u0627\u0644\u062A\u0648\u0642\u064A\u0639"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0646\u0635"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u0646\u0635\u0648\u0635"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0633\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0644\u0627\u062A"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u062A\u062D\u0645\u064A\u0644"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u0645\u0644\u0641"
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0627\u0646\u062A\u0638\u0631"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u062A\u062D\u0630\u064A\u0631"
        }
      }
    }
  }, {
    "da-DK": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tilf\xF8j almindelig anvendt tekst"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tilf\xF8j billede"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tilf\xF8j signaturfil"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tilf\xF8j tekst"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arkiverede filer"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Batchoperation"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Annuller"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bekr\xE6ft"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opret fil"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opret signaturfil"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Slet"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Download"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nuv\xE6rende downloadstatus"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Rediger tekst"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kryptering"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fil fuldf\xF8rt"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Downloader fil..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Uploader fil..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Giv op"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Samler filer..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mine filer"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "N\xE6ste trin"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Endnu ikke"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " side"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sider"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sider"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adgangskoderne stemmer ikke overens"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adgangskode kr\xE6ves"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Billede"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Billedgalleri"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Indtast adgangskoden igen"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Indtast s\xF8geord"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Indtast adgangskode"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Forrige"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Projektnavn"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arkiverede projekter vises her"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Efter afslutning hopper sk\xE6rmen automatisk. Hvis der ikke er nogen hoppe-side, tryk p\xE5 bekr\xE6ft-knappen."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kom og opret en ny fil"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Slettede elementer vises her"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Angiv en adgangskode for at beskytte din PDF-fil"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Der opstod en ukendt fejl, venligst opdater siden og pr\xF8v igen"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil arkiveret med succes"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil oprettet med succes"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil slettet med succes"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filformat matcher ikke"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil upload mislykkedes"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil uploadet med succes"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filst\xF8rrelsen overstiger 20 MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil give op med at redigere filen?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Forkert adgangskode"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ingen elementer"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Handlingen timeede ud, pr\xF8v igen"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Eller tr\xE6k filen her"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Billede tilf\xF8jet med succes"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dette billede findes allerede"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Billede slettet med succes"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Billede upload mislykkedes"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Denne fil er beskyttet af adgangskode"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfil tilf\xF8jet med succes"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfil slettet med succes"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Underst\xF8tter kun "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "-filer, og st\xF8rrelsen overskrider ikke 20 MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil arkivere denne fil?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du har afsluttet underskrivelsen af dokumentet?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil slette denne fil?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil slette dette billede?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil slette denne signatur?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil slette denne tekst?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5, at du vil kassere det redigerede indhold?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst tilf\xF8jet med succes"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Denne tekst findes allerede"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst slettet med succes"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst redigeret med succes"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Elementer i papirkurven slettes permanent efter 30 dage"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Pr\xF8v et andet s\xF8geord"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ingen elementer fundet, der matcher s\xF8gekriterierne"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "G\xE5 tilbage til hjemmesiden"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE6lg"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE6lg fil"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE6lg side"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ops\xE6tningstid"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Underskriv"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Underskrivelse afsluttet"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Underskriv fil"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturfil"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekst"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekstbibliotek"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Papirkurv"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Upload fil"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Brug"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Vent"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Advar"
        }
      }
    }
  }, {
    "de-DE": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "H\xE4ufig verwendeten Text hinzuf\xFCgen"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bild hinzuf\xFCgen"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturdatei hinzuf\xFCgen"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text hinzuf\xFCgen"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archivierte Dateien"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Stapelverarbeitung"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Abbrechen"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Best\xE4tigen"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei erstellen"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturdatei erstellen"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xF6schen"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Herunterladen"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aktueller Download-Fortschritt"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text bearbeiten"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Verschl\xFCsselung"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei abgeschlossen"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei wird heruntergeladen..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei wird hochgeladen..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aufgeben"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dateien werden zusammengef\xFChrt..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Meine Dateien"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "N\xE4chster Schritt"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Noch nicht"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: " Seite"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seiten"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passw\xF6rter stimmen nicht \xFCberein"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passwort erforderlich"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bild"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bildergalerie"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bitte geben Sie das Passwort erneut ein"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bitte Schl\xFCsselwort eingeben"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bitte Passwort eingeben"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Zur\xFCck"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Projektname"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivierte Projekte werden hier angezeigt"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nach Abschluss wird der Bildschirm automatisch wechseln. Wenn der Seitenwechsel nicht erfolgt, dr\xFCcken Sie die Best\xE4tigungstaste."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Lassen Sie uns eine neue Datei erstellen"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Gel\xF6schte Elemente werden hier angezeigt"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Legen Sie ein Passwort fest, um die PDF-Datei zu sch\xFCtzen"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ein unbekannter Fehler ist aufgetreten. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut."
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Datei erfolgreich archiviert"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Datei erfolgreich erstellt"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Datei erfolgreich gel\xF6scht"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dateiformat stimmt nicht \xFCberein"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Datei-Upload fehlgeschlagen"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Datei erfolgreich hochgeladen"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dateigr\xF6\xDFe \xFCberschreitet 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie die Bearbeitung der Datei aufgeben?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Falsches Passwort"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Keine Elemente"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vorgang zeit\xFCberschreitung, bitte erneut versuchen"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oder ziehen Sie die Datei hierher"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bild erfolgreich hinzugef\xFCgt"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dieses Bild existiert bereits"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bild erfolgreich gel\xF6scht"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bild-Upload fehlgeschlagen"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Diese Datei ist passwortgesch\xFCtzt"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturdatei erfolgreich hinzugef\xFCgt"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturdatei erfolgreich gel\xF6scht"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Unterst\xFCtzte Dateitypen sind "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", die Gr\xF6\xDFe darf 20MB nicht \xFCberschreiten."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie diese Datei archivieren?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dokumentensignatur abgeschlossen?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie diese Datei l\xF6schen?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie dieses Bild l\xF6schen?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie diese Signatur l\xF6schen?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie diesen Text l\xF6schen?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "M\xF6chten Sie den bearbeiteten Inhalt verwerfen?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text erfolgreich hinzugef\xFCgt"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dieser Text existiert bereits"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text erfolgreich gel\xF6scht"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text erfolgreich bearbeitet"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Elemente im Papierkorb werden nach 30 Tagen endg\xFCltig gel\xF6scht"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Versuchen Sie ein anderes Suchwort"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Keine den Suchkriterien entsprechenden Elemente gefunden"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Zur\xFCck zur Startseite"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ausw\xE4hlen"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei ausw\xE4hlen"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seite ausw\xE4hlen"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Uhrzeit einstellen"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signieren"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signierung abgeschlossen"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "signierung abgeschlossen"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturdatei"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "signaturdatei"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturdatei"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Textbibliothek"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Papierkorb"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Datei hochladen"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "datei hochladen"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Verwenden"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Warten"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Warnung"
        }
      }
    }
  }, {
    "en-US": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Add commonly used text"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Add picture"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Add signature file"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Add text"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Batch Operation"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archived Files"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cancel"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Confirm"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Create File"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Create signature file"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Delete"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Download"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Current download progress"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Edit Text"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Encryption"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File completed"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File downloading..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File uploading..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Give up"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Merging files..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "My Files"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Next Step"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Not yet"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " page"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " pages"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pages"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passwords are inconsistent"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Password is required"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Picture"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Picture Gallery"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Please enter password again"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Please enter keywords"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Please enter password"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Previous"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Project Name"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archived projects will be displayed here"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "After completion, the screen will jump automatically. If there is no jump page, please press the confirm button."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Come and create a new file"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Deleted items will be displayed here"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Set a password to protect your PDF file"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "An unknown error occurred. Please refresh the page and try again"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File archived successfully"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File created successfully"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File deleted successfully"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File format does not match"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File upload failed"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File uploaded successfully"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File size exceeds 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to give up editing the file?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Incorrect password"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "No items"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "The operation timed out, please try again"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Or drag the file here"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Picture added successfully"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "This picture already exists"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Picture deleted successfully"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "picture upload failed"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "This file is password protected"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signature file added successfully"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signature file deleted successfully"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Only supports "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: " files, and the size does not exceed 20MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to archive this file?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you have completed signing the document?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to delete this file?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to delete this picture?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to delete this signature?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to delete this text?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Are you sure you want to discard your edited content?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text added successfully"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "This text already exists"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text deleted successfully"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text Edited Successfully"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Items in the Trash will be permanently deleted after 30 days"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Please try another search term"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "No items found matching search criteria"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Return to home page"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Select"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Select File"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Select Page"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Setup Time"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sign"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sign Completed"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sign File"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signature File"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text Library"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Trash Bin"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Upload File"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Use"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wait"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Warn"
        }
      }
    }
  }, {
    "es-ES": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Agregar texto com\xFAnmente utilizado"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Agregar imagen"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Agregar archivo de firma"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Agregar texto"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archivos archivados"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Operaci\xF3n por lotes"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cancelar"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Confirmar"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Crear archivo"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Crear archivo de firma"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Eliminar"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Descargar"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Progreso de descarga actual"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Editar texto"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Encriptaci\xF3n"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archivo completado"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Descargando archivo..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Subiendo archivo..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Abandonar"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Combinando archivos..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mis archivos"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Siguiente paso"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "A\xFAn no"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " p\xE1gina"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " p\xE1ginas"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "P\xE1ginas"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Las contrase\xF1as no coinciden"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Se requiere contrase\xF1a"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Imagen"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Galer\xEDa de im\xE1genes"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, ingrese la contrase\xF1a nuevamente"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, ingrese palabras clave"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, ingrese la contrase\xF1a"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Anterior"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nombre del proyecto"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Los proyectos archivados se mostrar\xE1n aqu\xED"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Despu\xE9s de completar, la pantalla saltar\xE1 autom\xE1ticamente. Si no hay una p\xE1gina de salto, por favor presione el bot\xF3n de confirmaci\xF3n."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ven y crea un nuevo archivo"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Los elementos eliminados se mostrar\xE1n aqu\xED"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Configure una contrase\xF1a para proteger su archivo PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ocurri\xF3 un error desconocido. Por favor, refresca la p\xE1gina y vuelve a intentarlo"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo archivado exitosamente"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo creado exitosamente"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo eliminado exitosamente"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "El formato del archivo no coincide"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fallo al cargar archivo"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo cargado exitosamente"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "El tama\xF1o del archivo supera los 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea abandonar la edici\xF3n del archivo?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Contrase\xF1a incorrecta"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "No hay elementos"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "La operaci\xF3n ha caducado, por favor int\xE9ntelo de nuevo"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "O arrastre el archivo aqu\xED"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Imagen agregada exitosamente"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Esta imagen ya existe"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Imagen eliminada exitosamente"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fallo al cargar imagen"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Este archivo est\xE1 protegido por contrase\xF1a"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo de firma agregado exitosamente"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivo de firma eliminado exitosamente"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Solo admite archivos "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", y el tama\xF1o no supera los 20MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea archivar este archivo?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que ha completado la firma del documento?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea eliminar este archivo?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea eliminar esta imagen?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea eliminar esta firma?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea eliminar este texto?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xBFEst\xE1 seguro de que desea descartar su contenido editado?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto agregado exitosamente"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Este texto ya existe"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto eliminado exitosamente"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto editado exitosamente"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Los elementos en la Papelera ser\xE1n eliminados permanentemente despu\xE9s de 30 d\xEDas"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, pruebe con otro t\xE9rmino de b\xFAsqueda"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "No se encontraron elementos que coincidan con los criterios de b\xFAsqueda"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Volver a la p\xE1gina de inicio"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleccionar"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleccionar archivo"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleccionar p\xE1gina"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tiempo de configuraci\xF3n"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firmar"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firma completada"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "firma completada"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firmar archivo"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "firmar archivo"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archivo de firma"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Texto"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Biblioteca de textos"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Papelera"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Subir archivo"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "subir archivo"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Usar"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Esperar"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Advertir"
        }
      }
    }
  }, {
    "fi-FI": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lis\xE4\xE4 yleisesti k\xE4ytetty teksti"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lis\xE4\xE4 kuva"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lis\xE4\xE4 allekirjoitus tiedosto"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lis\xE4\xE4 teksti"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arkistoidut tiedostot"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Er\xE4toiminto"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Peruuta"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Vahvista"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Luo tiedosto"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Luo allekirjoitus tiedosto"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Poista"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lataa"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nykyinen lataus edistyminen"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Muokkaa teksti\xE4"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Salakirjoitus"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tiedosto valmis"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tiedoston lataaminen..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tiedoston lataaminen..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Luovuta"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tiedostojen yhdist\xE4minen..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Omat tiedostot"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seuraava vaihe"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ei viel\xE4"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sivu"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sivua"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sivut"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Salasanat eiv\xE4t t\xE4sm\xE4\xE4"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Salasana vaaditaan"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kuva"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kuvagalleria"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sy\xF6t\xE4 salasana uudelleen"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sy\xF6t\xE4 hakusana"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sy\xF6t\xE4 salasana"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Edellinen"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Projektin nimi"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arkistoidut projektit n\xE4ytet\xE4\xE4n t\xE4\xE4ll\xE4"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Valmistumisen j\xE4lkeen n\xE4ytt\xF6 hypp\xE4\xE4 automaattisesti. Jos hyppysivua ei ole, paina vahvista-painiketta."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tule ja luo uusi tiedosto"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Poistetut kohteet n\xE4ytet\xE4\xE4n t\xE4\xE4ll\xE4"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Aseta salasana suojataksesi PDF-tiedostosi"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tapahtui tuntematon virhe. P\xE4ivit\xE4 sivu ja yrit\xE4 uudelleen"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedosto arkistoitu onnistuneesti"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedosto luotu onnistuneesti"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedosto poistettu onnistuneesti"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedostomuoto ei vastaa"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedoston lataaminen ep\xE4onnistui"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedosto ladattu onnistuneesti"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tiedoston koko ylitt\xE4\xE4 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat luovuttaa tiedoston muokkaamisen?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "V\xE4\xE4r\xE4 salasana"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ei kohteita"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Toiminto aikakatkaistu, yrit\xE4 uudelleen"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tai ved\xE4 tiedosto t\xE4h\xE4n"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kuva lis\xE4tty onnistuneesti"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "T\xE4m\xE4 kuva on jo olemassa"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kuva poistettu onnistuneesti"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kuvan lataaminen ep\xE4onnistui"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "T\xE4m\xE4 tiedosto on salasanasuojattu"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Allekirjoitus tiedosto lis\xE4tty onnistuneesti"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Allekirjoitus tiedosto poistettu onnistuneesti"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Tuetaan vain "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "-tiedostoja, eik\xE4 koko saa ylitt\xE4\xE4 20MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat arkistoida t\xE4m\xE4n tiedoston?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 olet allekirjoittanut dokumentin valmiiksi?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat poistaa t\xE4m\xE4n tiedoston?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat poistaa t\xE4m\xE4n kuvan?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat poistaa t\xE4m\xE4n allekirjoituksen?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat poistaa t\xE4m\xE4n tekstin?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oletko varma, ett\xE4 haluat hyl\xE4t\xE4 muokatun sis\xE4ll\xF6n?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Teksti lis\xE4tty onnistuneesti"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "T\xE4m\xE4 teksti on jo olemassa"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Teksti poistettu onnistuneesti"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Teksti muokattu onnistuneesti"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Roskakorin kohteet poistetaan pysyv\xE4sti 30 p\xE4iv\xE4n kuluttua"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Yrit\xE4 toista hakusanaa"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ei kohteita, jotka vastaavat hakuehtoja"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Palaa etusivulle"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Valitse"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Valitse tiedosto"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Valitse sivu"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Asennusaika"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Allekirjoita"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Allekirjoitus valmis"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Allekirjoita tiedosto"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Allekirjoitus tiedosto"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Teksti"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekstikirjasto"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Roskakori"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lataa tiedosto"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "K\xE4yt\xE4"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Odota"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Varoitus"
        }
      }
    }
  }, {
    "fr-FR": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ajouter du texte couramment utilis\xE9"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ajouter une image"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ajouter un fichier de signature"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ajouter du texte"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fichiers archiv\xE9s"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Op\xE9ration par lots"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Annuler"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Confirmer"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cr\xE9er un fichier"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cr\xE9er un fichier de signature"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Supprimer"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "T\xE9l\xE9charger"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Progression du t\xE9l\xE9chargement"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Modifier le texte"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Chiffrement"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fichier termin\xE9"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "T\xE9l\xE9chargement du fichier..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "T\xE9l\xE9chargement du fichier..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Abandonner"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fusion des fichiers..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mes fichiers"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\xC9tape suivante"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pas encore"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: " page"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "pages"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Les mots de passe ne correspondent pas"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mot de passe requis"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Image"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Galerie d'images"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Veuillez entrer le mot de passe \xE0 nouveau"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Veuillez entrer un mot-cl\xE9"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Veuillez entrer le mot de passe"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pr\xE9c\xE9dent"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nom du projet"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Les projets archiv\xE9s appara\xEEtront ici"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Apr\xE8s avoir termin\xE9, l'\xE9cran passera automatiquement. S'il n'y a pas de saut de page, appuyez sur le bouton de confirmation."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Cr\xE9ons un nouveau fichier"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Les \xE9l\xE9ments supprim\xE9s appara\xEEtront ici"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "D\xE9finir un mot de passe pour prot\xE9ger le fichier PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Une erreur inconnue s'est produite. Veuillez rafra\xEEchir la page et r\xE9essayer"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Archivage du fichier r\xE9ussi"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Cr\xE9ation du fichier r\xE9ussie"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Suppression du fichier r\xE9ussie"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Le format du fichier ne correspond pas"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC9chec du t\xE9l\xE9chargement du fichier"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "T\xE9l\xE9chargement du fichier r\xE9ussi"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "La taille du fichier d\xE9passe 20 Mo"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous abandonner l'\xE9dition du fichier ?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Mot de passe incorrect"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Aucun \xE9l\xE9ment"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "L'op\xE9ration a expir\xE9, veuillez r\xE9essayer"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ou faites glisser le fichier ici"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ajout d'image r\xE9ussi"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Cette image existe d\xE9j\xE0"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Suppression d'image r\xE9ussie"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC9chec du t\xE9l\xE9chargement de l'image"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ce fichier est prot\xE9g\xE9 par mot de passe"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ajout de fichier de signature r\xE9ussi"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Suppression de fichier de signature r\xE9ussie"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Les types de fichiers pris en charge sont "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", et la taille ne d\xE9passe pas 20 Mo."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous archiver ce fichier ?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "La signature du document est-elle termin\xE9e ?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous supprimer ce fichier ?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous supprimer cette image ?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous supprimer cette signature ?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous supprimer ce texte ?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voulez-vous abandonner le contenu \xE9dit\xE9 ?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ajout de texte r\xE9ussi"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ce texte existe d\xE9j\xE0"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Suppression de texte r\xE9ussie"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texte \xE9dit\xE9 avec succ\xE8s"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Les \xE9l\xE9ments de la corbeille seront supprim\xE9s d\xE9finitivement apr\xE8s 30 jours"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Essayez un autre mot-cl\xE9"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Aucun \xE9l\xE9ment correspondant aux crit\xE8res de recherche"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Retour \xE0 l'accueil"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "S\xE9lectionner"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "S\xE9lectionner un fichier"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "S\xE9lectionner une page"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "D\xE9finir l'heure"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signer"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signature termin\xE9e"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "signature termin\xE9e"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fichier de signature"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "fichier de signature"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fichier de signature"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Texte"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Biblioth\xE8que de textes"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Corbeille"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "T\xE9l\xE9verser un fichier"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "t\xE9l\xE9verser un fichier"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Utiliser"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Attendre"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Avertissement"
        }
      }
    }
  }, {
    "he-IL": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D5\u05E1\u05E3 \u05D8\u05E7\u05E1\u05D8 \u05E0\u05E4\u05D5\u05E5"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DE\u05D5\u05E0\u05D4"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D5\u05E1\u05E3 \u05E7\u05D5\u05D1\u05E5 \u05D7\u05EA\u05D9\u05DE\u05D4"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D5\u05E1\u05E3 \u05D8\u05E7\u05E1\u05D8"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E7\u05D1\u05E6\u05D9\u05DD \u05D1\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E4\u05E2\u05D5\u05DC\u05D4 \u05D1\u05D0\u05E6\u05D5\u05D5\u05D4"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D1\u05D8\u05DC"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D0\u05E9\u05E8"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E6\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E6\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05D7\u05EA\u05D9\u05DE\u05D4"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05DE\u05D7\u05E7"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D5\u05E8\u05D3"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D4\u05D5\u05E8\u05D3\u05D4 \u05E0\u05D5\u05DB\u05D7\u05D9\u05EA"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E2\u05E8\u05D5\u05DA \u05D8\u05E7\u05E1\u05D8"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E6\u05E4\u05E0\u05D4"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D5\u05E9\u05DC\u05DD"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05DE\u05D5\u05E8\u05D9\u05D3 \u05E7\u05D5\u05D1\u05E5..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05DE\u05E2\u05DC\u05D4 \u05E7\u05D5\u05D1\u05E5..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D5\u05D5\u05EA\u05E8"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05DE\u05DE\u05D6\u05D2 \u05E7\u05D1\u05E6\u05D9\u05DD..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E7\u05D1\u05E6\u05D9\u05DD \u05E9\u05DC\u05D9"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u05E2\u05DE\u05D5\u05D3"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u05E2\u05DE\u05D5\u05D3\u05D9\u05DD"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E1\u05D9\u05E1\u05DE\u05D0\u05D5\u05EA \u05D0\u05D9\u05E0\u05DF \u05EA\u05D5\u05D0\u05DE\u05D5\u05EA"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E0\u05D3\u05E8\u05E9\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05EA\u05DE\u05D5\u05E0\u05D4"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF \u05E9\u05D5\u05D1 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF \u05DE\u05D9\u05DC\u05D5\u05EA \u05DE\u05E4\u05EA\u05D7"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05E0\u05D0 \u05D4\u05D6\u05DF \u05E1\u05D9\u05E1\u05DE\u05D4"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E7\u05D5\u05D3\u05DD"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E9\u05DD \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05D1\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05DB\u05D0\u05DF"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05DC\u05D0\u05D7\u05E8 \u05D4\u05D4\u05E9\u05DC\u05DE\u05D4, \u05D4\u05DE\u05E1\u05DA \u05D9\u05E7\u05E4\u05D5\u05E5 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA. \u05D0\u05DD \u05D0\u05D9\u05DF \u05D3\u05E3 \u05E7\u05E4\u05D9\u05E6\u05D4, \u05D0\u05E0\u05D0 \u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D5\u05E8."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D1\u05D5\u05D0\u05D5 \u05D5\u05E6\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05D7\u05D3\u05E9"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E9\u05E0\u05DE\u05D7\u05E7\u05D5 \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05DB\u05D0\u05DF"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E7\u05D1\u05E2 \u05E1\u05D9\u05E1\u05DE\u05D4 \u05DC\u05D4\u05D2\u05E0\u05D4 \u05E2\u05DC \u05E7\u05D5\u05D1\u05E5 \u05D4-PDF \u05E9\u05DC\u05DA"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05D9\u05E8\u05E2\u05D4 \u05E9\u05D2\u05D9\u05D0\u05D4 \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2\u05D4, \u05E0\u05D0 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05D3\u05E3 \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D5\u05E2\u05D1\u05E8 \u05DC\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E7\u05D5\u05D1\u05E5 \u05E0\u05D5\u05E6\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E7\u05D5\u05D1\u05E5 \u05E0\u05DE\u05D7\u05E7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E4\u05D5\u05E8\u05DE\u05D8 \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05D0\u05DD"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E2\u05DC\u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05E0\u05DB\u05E9\u05DC\u05D4"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D5\u05E2\u05DC\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D2\u05D5\u05D3\u05DC \u05D4\u05E7\u05D5\u05D1\u05E5 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC 20 \u05DE\u05D2\u05D4-\u05D1\u05D9\u05D9\u05D8"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC \u05E2\u05E8\u05D9\u05DB\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05D2\u05D5\u05D9\u05D4"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05D9\u05DF \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E4\u05E2\u05D5\u05DC\u05D4 \u05E0\u05DE\u05E9\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05D6\u05DE\u05DF, \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05D5 \u05D2\u05E8\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05DB\u05D0\u05DF"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E0\u05D5\u05E1\u05E4\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D6\u05D5 \u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DE\u05EA"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E0\u05DE\u05D7\u05E7\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05E2\u05DC\u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E7\u05D5\u05D1\u05E5 \u05D6\u05D4 \u05DE\u05D5\u05D2\u05DF \u05D1\u05E1\u05D9\u05E1\u05DE\u05D4"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E0\u05DE\u05D7\u05E7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u05EA\u05D5\u05DE\u05DA \u05E8\u05E7 \u05D1\u05E7\u05D1\u05E6\u05D9 "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", \u05D5\u05D4\u05D2\u05D5\u05D3\u05DC \u05D0\u05D9\u05E0\u05D5 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC 20 \u05DE\u05D2\u05D4-\u05D1\u05D9\u05D9\u05D8."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05D6\u05D4 \u05DC\u05D0\u05E8\u05DB\u05D9\u05D5\u05DF?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D4\u05E9\u05DC\u05DE\u05EA \u05D0\u05EA \u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05E2\u05DC \u05D4\u05DE\u05E1\u05DE\u05DA?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05E7\u05D5\u05D1\u05E5 \u05D6\u05D4?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D6\u05D5?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D7\u05EA\u05D9\u05DE\u05D4 \u05D6\u05D5?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D8\u05E7\u05E1\u05D8 \u05D6\u05D4?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC \u05E2\u05E8\u05D9\u05DB\u05EA \u05D4\u05EA\u05D5\u05DB\u05DF?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D8\u05E7\u05E1\u05D8 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D8\u05E7\u05E1\u05D8 \u05D6\u05D4 \u05DB\u05D1\u05E8 \u05E7\u05D9\u05D9\u05DD"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D8\u05E7\u05E1\u05D8 \u05E0\u05DE\u05D7\u05E7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D4\u05D8\u05E7\u05E1\u05D8 \u05E2\u05D5\u05E8\u05DA \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D1\u05E1\u05DC \u05D4\u05DE\u05D9\u05D7\u05D6\u05D5\u05E8 \u05D9\u05D9\u05DE\u05D7\u05E7\u05D5 \u05DC\u05E6\u05DE\u05D9\u05EA\u05D5\u05EA \u05DC\u05D0\u05D7\u05E8 30 \u05D9\u05DE\u05D9\u05DD"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DE\u05D5\u05E0\u05D7 \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D7\u05E8"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D4\u05EA\u05D5\u05D0\u05DE\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05E0\u05D9\u05DD \u05DC\u05D7\u05D9\u05E4\u05D5\u05E9"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D1\u05D7\u05E8"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D1\u05D7\u05E8 \u05E7\u05D5\u05D1\u05E5"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D1\u05D7\u05E8 \u05E2\u05DE\u05D5\u05D3"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D2\u05D3\u05E8 \u05D6\u05DE\u05DF"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D7\u05EA\u05D5\u05DD"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D7\u05EA\u05D9\u05DE\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u05D4\u05D7\u05EA\u05D9\u05DE\u05D4"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4"
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D7\u05EA\u05D5\u05DD \u05E2\u05DC \u05E7\u05D5\u05D1\u05E5"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u05D7\u05EA\u05D5\u05DD"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u05E2\u05DC \u05E7\u05D5\u05D1\u05E5"
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E7\u05D5\u05D1\u05E5 \u05D7\u05EA\u05D9\u05DE\u05D4"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D8\u05E7\u05E1\u05D8"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E1\u05E4\u05E8\u05D9\u05D9\u05EA \u05D8\u05E7\u05E1\u05D8\u05D9\u05DD"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05E1\u05DC \u05D4\u05DE\u05D9\u05D7\u05D6\u05D5\u05E8"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E2\u05DC\u05D4 \u05E7\u05D5\u05D1\u05E5"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u05D4\u05E2\u05DC\u05D4"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u05E7\u05D5\u05D1\u05E5"
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05E9\u05EA\u05DE\u05E9"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05DE\u05EA\u05DF"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u05D4\u05D6\u05D4\u05E8"
        }
      }
    }
  }, {
    "hi-IN": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0938\u093E\u092E\u093E\u0928\u094D\u092F\u0924\u0903 \u0909\u092A\u092F\u094B\u0917 \u0939\u094B\u0928\u0947 \u0935\u093E\u0932\u093E \u092A\u093E\u0920 \u091C\u094B\u0921\u093C\u0947\u0902"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091A\u093F\u0924\u094D\u0930 \u091C\u094B\u0921\u093C\u0947\u0902"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092B\u093C\u093E\u0907\u0932 \u091C\u094B\u0921\u093C\u0947\u0902"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0920 \u091C\u094B\u0921\u093C\u0947\u0902"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0906\u0930\u094D\u0915\u093E\u0907\u0935 \u0915\u0940 \u0917\u0908 \u092B\u093E\u0907\u0932\u0947\u0902"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092C\u0948\u091A \u0938\u0902\u091A\u093E\u0932\u0928"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u0941\u0937\u094D\u091F\u093F \u0915\u0930\u0947\u0902"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093E\u0907\u0932 \u092C\u0928\u093E\u090F\u0901"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092B\u093C\u093E\u0907\u0932 \u092C\u0928\u093E\u090F\u0901"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u091F\u093E\u090F\u0901"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0921\u093E\u0909\u0928\u0932\u094B\u0921"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u092A\u094D\u0930\u0917\u0924\u093F"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0920 \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u090F\u0928\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u0936\u0928"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u092A\u0942\u0930\u094D\u0923 \u0939\u0941\u0908"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u0940 \u0939\u0948..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u0905\u092A\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u0940 \u0939\u0948..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091B\u094B\u0921\u093C\u0947\u0902"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093E\u0907\u0932\u0947\u0902 \u092E\u093F\u0932\u093E\u0908 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948\u0902..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092E\u0947\u0930\u0940 \u092B\u093E\u0907\u0932\u0947\u0902"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0905\u0917\u0932\u093E \u0915\u0926\u092E"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0905\u092D\u0940 \u0928\u0939\u0940\u0902"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u092A\u0943\u0937\u094D\u0920"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u092A\u0943\u0937\u094D\u0920"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u0943\u0937\u094D\u0920"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093E\u0924\u0947"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091A\u093F\u0924\u094D\u0930"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091A\u093F\u0924\u094D\u0930 \u0917\u0948\u0932\u0930\u0940"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u0943\u092A\u092F\u093E \u0915\u0940\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u0943\u092A\u092F\u093E \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u0939\u0932\u093E"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u0915\u093E \u0928\u093E\u092E"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0906\u0930\u094D\u0915\u093E\u0907\u0935 \u0915\u093F\u090F \u0917\u090F \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u092F\u0939\u093E\u0902 \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924 \u0939\u094B\u0902\u0917\u0947"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0938\u092E\u093E\u092A\u094D\u0924\u093F \u0915\u0947 \u092C\u093E\u0926, \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0938\u094D\u0935\u091A\u093E\u0932\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u092C\u0926\u0932 \u091C\u093E\u090F\u0917\u0940\u0964 \u092F\u0926\u093F \u0915\u094B\u0908 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u0928 \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u093E, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0937\u094D\u091F\u093F \u092C\u091F\u0928 \u0926\u092C\u093E\u090F\u0901\u0964"
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0906\u0913 \u0914\u0930 \u0928\u0908 \u092B\u093E\u0907\u0932 \u092C\u0928\u093E\u090F\u0902"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0939\u091F\u093E\u090F \u0917\u090F \u0906\u0907\u091F\u092E \u092F\u0939\u093E\u0902 \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924 \u0939\u094B\u0902\u0917\u0947"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0905\u092A\u0928\u0940 PDF \u092B\u093C\u093E\u0907\u0932 \u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0947 \u0932\u093F\u090F \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0938\u0947\u091F \u0915\u0930\u0947\u0902"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u090F\u0915 \u0905\u091C\u094D\u091E\u093E\u0924 \u0924\u094D\u0930\u0941\u091F\u093F \u0939\u0941\u0908 \u0939\u0948, \u0915\u0943\u092A\u092F\u093E \u092A\u0943\u0937\u094D\u0920 \u0915\u094B \u0930\u0940\u092B\u094D\u0930\u0947\u0936 \u0915\u0930\u0947\u0902 \u0914\u0930 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0906\u0930\u094D\u0915\u093E\u0907\u0935 \u0915\u0940 \u0917\u0908"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u092C\u0928\u093E\u0908 \u0917\u0908"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0939\u091F\u093E\u0908 \u0917\u0908"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u092A\u094D\u0930\u093E\u0930\u0942\u092A \u092E\u0947\u0932 \u0928\u0939\u0940\u0902 \u0916\u093E\u0924\u093E"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0905\u092A\u0932\u094B\u0921 \u0935\u093F\u092B\u0932"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0905\u092A\u0932\u094B\u0921"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092B\u093C\u093E\u0907\u0932 \u0915\u093E \u0906\u0915\u093E\u0930 20MB \u0938\u0947 \u0905\u0927\u093F\u0915 \u0939\u0948"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u092B\u093C\u093E\u0907\u0932 \u0938\u0902\u092A\u093E\u0926\u0928 \u091B\u094B\u0921\u093C\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0917\u0932\u0924 \u092A\u093E\u0938\u0935\u0930\u094D\u0921"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094B\u0908 \u0906\u0907\u091F\u092E \u0928\u0939\u0940\u0902"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0911\u092A\u0930\u0947\u0936\u0928 \u0915\u093E \u0938\u092E\u092F \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u094B \u0917\u092F\u093E, \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092F\u093E \u092B\u093C\u093E\u0907\u0932 \u0915\u094B \u092F\u0939\u093E\u0902 \u0916\u0940\u0902\u091A\u0947\u0902"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u091A\u093F\u0924\u094D\u0930 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092F\u0939 \u091A\u093F\u0924\u094D\u0930 \u092A\u0939\u0932\u0947 \u0938\u0947 \u092E\u094C\u091C\u0942\u0926 \u0939\u0948"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u091A\u093F\u0924\u094D\u0930 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0939\u091F\u093E\u092F\u093E \u0917\u092F\u093E"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u091A\u093F\u0924\u094D\u0930 \u0905\u092A\u0932\u094B\u0921 \u0935\u093F\u092B\u0932"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092F\u0939 \u092B\u093C\u093E\u0907\u0932 \u092A\u093E\u0938\u0935\u0930\u094D\u0921 \u0926\u094D\u0935\u093E\u0930\u093E \u0938\u0902\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u091C\u094B\u0921\u093C\u0940 \u0917\u0908"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092B\u093C\u093E\u0907\u0932 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0939\u091F\u093E\u0908 \u0917\u0908"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u0915\u0947\u0935\u0932 "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: " \u092B\u093C\u093E\u0907\u0932\u094B\u0902 \u0915\u093E \u0938\u092E\u0930\u094D\u0925\u0928 \u0915\u0930\u0924\u093E \u0939\u0948, \u0914\u0930 \u0906\u0915\u093E\u0930 20MB \u0938\u0947 \u0905\u0927\u093F\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964"
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0907\u0938 \u092B\u093C\u093E\u0907\u0932 \u0915\u094B \u0906\u0930\u094D\u0915\u093E\u0907\u0935 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092A\u0930 \u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092A\u0942\u0930\u093E \u0915\u0930 \u091A\u0941\u0915\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0907\u0938 \u092B\u093C\u093E\u0907\u0932 \u0915\u094B \u0939\u091F\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0907\u0938 \u091A\u093F\u0924\u094D\u0930 \u0915\u094B \u0939\u091F\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0907\u0938 \u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u0915\u094B \u0939\u091F\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0907\u0938 \u092A\u093E\u0920 \u0915\u094B \u0939\u091F\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094D\u092F\u093E \u0906\u092A \u0935\u093E\u0915\u0908 \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0915\u094B \u091B\u094B\u0921\u093C\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092A\u093E\u0920 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u091C\u094B\u0921\u093C\u093E \u0917\u092F\u093E"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092F\u0939 \u092A\u093E\u0920 \u092A\u0939\u0932\u0947 \u0938\u0947 \u092E\u094C\u091C\u0942\u0926 \u0939\u0948"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092A\u093E\u0920 \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0939\u091F\u093E\u092F\u093E \u0917\u092F\u093E"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u092A\u093E\u0920 \u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0928\u0947 \u092E\u0947\u0902 \u0938\u092B\u0932\u0924\u093E"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u091A\u0930\u0947 \u092E\u0947\u0902 \u0906\u0907\u091F\u092E 30 \u0926\u093F\u0928\u094B\u0902 \u0915\u0947 \u092C\u093E\u0926 \u0938\u094D\u0925\u093E\u092F\u0940 \u0930\u0942\u092A \u0938\u0947 \u0939\u091F\u093E \u0926\u093F\u090F \u091C\u093E\u090F\u0902\u0917\u0947"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u0943\u092A\u092F\u093E \u0926\u0942\u0938\u0930\u093E \u0916\u094B\u091C \u0936\u092C\u094D\u0926 \u0906\u091C\u093C\u092E\u093E\u090F\u0902"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0915\u094B\u0908 \u0906\u0907\u091F\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E \u091C\u094B \u0916\u094B\u091C \u092E\u093E\u0928\u0926\u0902\u0921\u094B\u0902 \u0938\u0947 \u092E\u0947\u0932 \u0916\u093E\u0924\u093E \u0939\u094B"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092E\u0941\u0916 \u092A\u0943\u0937\u094D\u0920 \u092A\u0930 \u0932\u094C\u091F\u0947\u0902"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091A\u0941\u0928\u0947\u0902"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u091A\u0941\u0928\u0947\u0902"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u0943\u0937\u094D\u0920 \u091A\u0941\u0928\u0947\u0902"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0938\u092E\u092F \u0938\u0947\u091F \u0915\u0930\u0947\u0902"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092A\u0942\u0930\u093E \u0939\u0941\u0906"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u092A\u0942\u0930\u093E \u0939\u0941\u0906"
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u092A\u0930 \u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u0915\u0930\u0947\u0902"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u092B\u093C\u093E\u0907\u0932"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u092A\u0930 \u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u0915\u0930\u0947\u0902"
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0939\u0938\u094D\u0924\u093E\u0915\u094D\u0937\u0930 \u092B\u093C\u093E\u0907\u0932"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0920"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u093E\u0920 \u092A\u0941\u0938\u094D\u0924\u0915\u093E\u0932\u092F"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0915\u091A\u0930\u093E \u0921\u093F\u092C\u094D\u092C\u093E"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092B\u093C\u093E\u0907\u0932 \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "\u092B\u093C\u093E\u0907\u0932"
              },
              m: {
                t: 8,
                v: "lower"
              }
            },
            {
              t: 3,
              v: " \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902"
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u091A\u0947\u0924\u093E\u0935\u0928\u0940"
        }
      }
    }
  }, {
    "it-IT": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aggiungi testo comunemente usato"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aggiungi immagine"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aggiungi file di firma"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aggiungi testo"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File archiviati"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Operazione batch"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Annulla"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Conferma"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Crea file"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Crea file di firma"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Elimina"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Scarica"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Progresso di download attuale"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Modifica testo"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Crittografia"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File completato"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Download del file..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Caricamento del file..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Abbandona"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Unione file..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "I miei file"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passaggio successivo"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Non ancora"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " pagina"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " pagine"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pagine"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Le password non corrispondono"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Password obbligatoria"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Immagine"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Galleria di immagini"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Inserisci nuovamente la password"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Inserisci parole chiave"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Inserisci la password"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Precedente"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nome del progetto"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "I progetti archiviati saranno visualizzati qui"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dopo il completamento, lo schermo passer\xE0 automaticamente. Se non c'\xE8 una pagina di salto, premi il pulsante di conferma."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vieni a creare un nuovo file"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Gli elementi eliminati saranno visualizzati qui"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Imposta una password per proteggere il tuo file PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Si \xE8 verificato un errore sconosciuto. Si prega di aggiornare la pagina e riprovare"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File archiviato con successo"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File creato con successo"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File eliminato con successo"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Il formato del file non corrisponde"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Caricamento del file fallito"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File caricato con successo"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Il file supera i 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler abbandonare la modifica del file?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Password incorretta"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nessun elemento"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Operazione scaduta, riprova"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Oppure trascina il file qui"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Immagine aggiunta con successo"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Questa immagine esiste gi\xE0"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Immagine eliminata con successo"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Caricamento dell'immagine fallito"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Questo file \xE8 protetto da password"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File di firma aggiunto con successo"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "File di firma eliminato con successo"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Supporta solo file "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", e le dimensioni non superano i 20MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler archiviare questo file?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di aver completato la firma del documento?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler eliminare questo file?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler eliminare questa immagine?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler eliminare questa firma?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler eliminare questo testo?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sei sicuro di voler eliminare il contenuto modificato?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Testo aggiunto con successo"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Questo testo esiste gi\xE0"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Testo eliminato con successo"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Modifica del testo completata con successo"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Gli elementi nel Cestino verranno eliminati definitivamente dopo 30 giorni"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Prova un'altra parola chiave"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nessun elemento trovato corrispondente ai criteri di ricerca"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Torna alla pagina principale"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleziona"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleziona file"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Seleziona pagina"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tempo di configurazione"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firma"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firma completata"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "firma completata"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Firma file"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "firma file"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "File di firma"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Testo"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Libreria di testi"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cestino"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Carica file"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "carica file"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Usa"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Attendere"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Avviso"
        }
      }
    }
  }, {
    "ja-JP": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u3088\u304F\u4F7F\u3046\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u753B\u50CF\u3092\u8FFD\u52A0"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB\u3092\u8FFD\u52A0"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D0\u30C3\u30C1\u64CD\u4F5C"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30AD\u30E3\u30F3\u30BB\u30EB"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u78BA\u8A8D"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u524A\u9664"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u73FE\u5728\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u9032\u884C\u72B6\u6CC1"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30C6\u30AD\u30B9\u30C8\u3092\u7DE8\u96C6"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6697\u53F7\u5316"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u5B8C\u4E86"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4E2D..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8AE6\u3081\u308B"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u30DE\u30FC\u30B8\u4E2D..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u79C1\u306E\u30D5\u30A1\u30A4\u30EB"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6B21\u306E\u30B9\u30C6\u30C3\u30D7"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u307E\u3060"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: " \u30DA\u30FC\u30B8"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30DA\u30FC\u30B8"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u753B\u50CF"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u753B\u50CF\u30AE\u30E3\u30E9\u30EA\u30FC"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3082\u3046\u4E00\u5EA6\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u524D"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5B8C\u4E86\u5F8C\u3001\u753B\u9762\u304C\u81EA\u52D5\u7684\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002\u30B8\u30E3\u30F3\u30D7\u30DA\u30FC\u30B8\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u78BA\u8A8D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3057\u3087\u3046"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u524A\u9664\u3055\u308C\u305F\u30A2\u30A4\u30C6\u30E0\u306F\u3053\u3053\u306B\u8868\u793A\u3055\u308C\u307E\u3059"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "PDF\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u8B77\u3059\u308B\u305F\u3081\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u307E\u3059"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u4F5C\u6210\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u524A\u9664\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u304C20MB\u3092\u8D85\u3048\u3066\u3044\u307E\u3059"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D5\u30A1\u30A4\u30EB\u306E\u7DE8\u96C6\u3092\u8AE6\u3081\u307E\u3059\u304B\uFF1F"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30A2\u30A4\u30C6\u30E0\u304C\u3042\u308A\u307E\u305B\u3093"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u64CD\u4F5C\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u307E\u305F\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u3092\u3053\u3053\u306B\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u753B\u50CF\u306E\u8FFD\u52A0\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u753B\u50CF\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u753B\u50CF\u306E\u524A\u9664\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u3067\u4FDD\u8B77\u3055\u308C\u3066\u3044\u307E\u3059"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB\u306E\u8FFD\u52A0\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB\u306E\u524A\u9664\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u306F "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: " \u3067\u3001\u30B5\u30A4\u30BA\u306F20MB\u3092\u8D85\u3048\u307E\u305B\u3093\u3002"
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u7F72\u540D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u304B\uFF1F"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u753B\u50CF\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u7F72\u540D\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7DE8\u96C6\u3057\u305F\u5185\u5BB9\u3092\u7834\u68C4\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30C6\u30AD\u30B9\u30C8\u306E\u8FFD\u52A0\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30C6\u30AD\u30B9\u30C8\u306E\u524A\u9664\u306B\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30C6\u30AD\u30B9\u30C8\u306E\u7DE8\u96C6\u304C\u6210\u529F\u3057\u307E\u3057\u305F"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u30B4\u30DF\u7BB1\u5185\u306E\u30A2\u30A4\u30C6\u30E0\u306F30\u65E5\u5F8C\u306B\u5B8C\u5168\u306B\u524A\u9664\u3055\u308C\u307E\u3059"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5225\u306E\u691C\u7D22\u7528\u8A9E\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u691C\u7D22\u6761\u4EF6\u306B\u4E00\u81F4\u3059\u308B\u30A2\u30A4\u30C6\u30E0\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u306B\u623B\u308B"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9078\u629E"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30DA\u30FC\u30B8\u3092\u9078\u629E"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6642\u9593\u3092\u8A2D\u5B9A"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u5B8C\u4E86"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u5B8C\u4E86"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F72\u540D\u30D5\u30A1\u30A4\u30EB"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30C6\u30AD\u30B9\u30C8"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30C6\u30AD\u30B9\u30C8\u30E9\u30A4\u30D6\u30E9\u30EA"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30B4\u30DF\u7BB1"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4F7F\u7528\u3059\u308B"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5F85\u3064"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8B66\u544A"
        }
      }
    }
  }, {
    "ko-KR": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uD14D\uC2A4\uD2B8 \uCD94\uAC00"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC0AC\uC9C4 \uCD94\uAC00"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uD30C\uC77C \uCD94\uAC00"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD14D\uC2A4\uD2B8 \uCD94\uAC00"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uBCF4\uAD00\uB41C \uD30C\uC77C"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uBC30\uCE58 \uC791\uC5C5"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uCDE8\uC18C"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD655\uC778"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC0DD\uC131"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uD30C\uC77C \uC0DD\uC131"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC0AD\uC81C"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uB2E4\uC6B4\uB85C\uB4DC"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD604\uC7AC \uB2E4\uC6B4\uB85C\uB4DC \uC9C4\uD589 \uC0C1\uD669"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD14D\uC2A4\uD2B8 \uD3B8\uC9D1"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC554\uD638\uD654"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC644\uB8CC"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC \uC911..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC5C5\uB85C\uB4DC \uC911..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD3EC\uAE30"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uBCD1\uD569 \uC911..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uB0B4 \uD30C\uC77C"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uB2E4\uC74C \uB2E8\uACC4"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC544\uC9C1"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: " \uD398\uC774\uC9C0"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD398\uC774\uC9C0"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uBE44\uBC00\uBC88\uD638\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC0AC\uC9C4"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC0AC\uC9C4 \uAC24\uB7EC\uB9AC"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC774\uC804"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uBCF4\uAD00\uB41C \uD504\uB85C\uC81D\uD2B8\uB294 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC644\uB8CC \uD6C4 \uD654\uBA74\uC774 \uC790\uB3D9\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uC774\uB3D9\uD558\uC9C0 \uC54A\uC73C\uBA74 \uD655\uC778 \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC0C8 \uD30C\uC77C\uC744 \uB9CC\uB4ED\uB2C8\uB2E4"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC0AD\uC81C\uB41C \uD56D\uBAA9\uC740 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "PDF \uD30C\uC77C\uC744 \uBCF4\uD638\uD560 \uBE44\uBC00\uBC88\uD638\uB97C \uC124\uC815\uD558\uC138\uC694"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uBCF4\uAD00 \uC131\uACF5"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uC0DD\uC131 \uC131\uACF5"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uC0AD\uC81C \uC131\uACF5"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uD615\uC2DD\uC774 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uC5C5\uB85C\uB4DC \uC2E4\uD328"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uC5C5\uB85C\uB4DC \uC131\uACF5"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uD06C\uAE30\uAC00 20MB\uB97C \uCD08\uACFC\uD569\uB2C8\uB2E4"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD30C\uC77C \uD3B8\uC9D1\uC744 \uD3EC\uAE30\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC791\uC5C5 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uB610\uB294 \uD30C\uC77C\uC744 \uC5EC\uAE30\uC5D0 \uB4DC\uB798\uADF8\uD558\uC138\uC694"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC0AC\uC9C4 \uCD94\uAC00 \uC131\uACF5"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uC0AC\uC9C4\uC740 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC0AC\uC9C4 \uC0AD\uC81C \uC131\uACF5"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC0AC\uC9C4 \uC5C5\uB85C\uB4DC \uC2E4\uD328"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uD30C\uC77C\uC740 \uBE44\uBC00\uBC88\uD638\uB85C \uBCF4\uD638\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC11C\uBA85 \uD30C\uC77C \uCD94\uAC00 \uC131\uACF5"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC11C\uBA85 \uD30C\uC77C \uC0AD\uC81C \uC131\uACF5"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\uC9C0\uC6D0\uB418\uB294 \uD30C\uC77C \uD615\uC2DD\uC740 "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "\uC774\uBA70, \uD06C\uAE30\uB294 20MB\uB97C \uCD08\uACFC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uD30C\uC77C\uC744 \uBCF4\uAD00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uBB38\uC11C \uC11C\uBA85\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uC0AC\uC9C4\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uC11C\uBA85\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uD14D\uC2A4\uD2B8\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD3B8\uC9D1\uD55C \uB0B4\uC6A9\uC744 \uBC84\uB9AC\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD14D\uC2A4\uD2B8 \uCD94\uAC00 \uC131\uACF5"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uC774 \uD14D\uC2A4\uD2B8\uB294 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD14D\uC2A4\uD2B8 \uC0AD\uC81C \uC131\uACF5"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD14D\uC2A4\uD2B8 \uD3B8\uC9D1\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uD734\uC9C0\uD1B5\uC758 \uD56D\uBAA9\uC740 30\uC77C \uD6C4\uC5D0 \uC601\uAD6C \uC0AD\uC81C\uB429\uB2C8\uB2E4"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB97C \uC2DC\uB3C4\uD558\uC138\uC694"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\uAC80\uC0C9 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uD56D\uBAA9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC120\uD0DD"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC120\uD0DD"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD398\uC774\uC9C0 \uC120\uD0DD"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC124\uC815 \uC2DC\uAC04"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uC644\uB8CC"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uC644\uB8CC"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uD30C\uC77C"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uD30C\uC77C"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC11C\uBA85 \uD30C\uC77C"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD14D\uC2A4\uD2B8"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD14D\uC2A4\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD734\uC9C0\uD1B5"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC5C5\uB85C\uB4DC"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uD30C\uC77C \uC5C5\uB85C\uB4DC"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uC0AC\uC6A9"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uAE30\uB2E4\uB9AC\uC138\uC694"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\uACBD\uACE0"
        }
      }
    }
  }, {
    "nl-NL": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Voeg veelgebruikte tekst toe"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Afbeelding toevoegen"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Handtekeningbestand toevoegen"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekst toevoegen"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Gearchiveerde bestanden"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Batchbewerking"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Annuleren"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bevestigen"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand aanmaken"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Handtekeningbestand maken"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Verwijderen"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Downloaden"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Huidige downloadvoortgang"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bewerk tekst"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Versleuteling"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand voltooid"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand downloaden..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand uploaden..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opgeven"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Samenvoegen van bestanden..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mijn bestanden"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Volgende stap"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nog niet"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " pagina"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " pagina's"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pagina's"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wachtwoorden komen niet overeen"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wachtwoord vereist"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Afbeelding"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Afbeeldingengalerij"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voer het wachtwoord opnieuw in"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voer trefwoorden in"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Voer het wachtwoord in"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Vorige"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Projectnaam"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Gearchiveerde projecten worden hier weergegeven"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Na voltooiing springt het scherm automatisch. Als er geen sprongpagina is, druk dan op de bevestigingsknop."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kom en maak een nieuw bestand aan"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Verwijderde items worden hier weergegeven"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Stel een wachtwoord in om uw PDF-bestand te beschermen"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er is een onbekende fout opgetreden. Vernieuw de pagina en probeer opnieuw"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestand succesvol gearchiveerd"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestand succesvol aangemaakt"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestand succesvol verwijderd"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestandsindeling komt niet overeen"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Uploaden van bestand mislukt"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestand succesvol ge\xFCpload"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bestandsgrootte overschrijdt 20 MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je het bewerken van het bestand wilt opgeven?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Onjuist wachtwoord"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Geen items"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "De bewerking is verlopen, probeer het opnieuw"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Of sleep het bestand hierheen"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Afbeelding succesvol toegevoegd"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Deze afbeelding bestaat al"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Afbeelding succesvol verwijderd"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Uploaden van afbeelding mislukt"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dit bestand is beveiligd met een wachtwoord"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Handtekeningbestand succesvol toegevoegd"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Handtekeningbestand succesvol verwijderd"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Ondersteunt alleen "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "-bestanden en de grootte overschrijdt niet 20 MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je dit bestand wilt archiveren?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je het document hebt ondertekend?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je dit bestand wilt verwijderen?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je deze afbeelding wilt verwijderen?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je deze handtekening wilt verwijderen?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je deze tekst wilt verwijderen?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Weet je zeker dat je je bewerkte inhoud wilt negeren?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst succesvol toegevoegd"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Deze tekst bestaat al"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst succesvol verwijderd"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst succesvol bewerkt"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Items in de Prullenbak worden permanent verwijderd na 30 dagen"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Probeer een ander zoekwoord"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Geen items gevonden die overeenkomen met de zoekcriteria"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Terug naar de startpagina"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecteren"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecteer bestand"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecteer pagina"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Insteltijd"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ondertekenen"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ondertekening voltooid"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "ondertekening voltooid"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand ondertekenen"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "bestand ondertekenen"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Handtekeningbestand"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekst"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekstbibliotheek"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Prullenbak"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bestand uploaden"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "bestand uploaden"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Gebruiken"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wachten"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Waarschuwing"
        }
      }
    }
  }, {
    "no-NO": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Legg til vanlig brukstekst"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Legg til bilde"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Legg til signaturfil"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Legg til tekst"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arkiverte filer"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Batchoperasjon"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Avbryt"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bekreft"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opprett fil"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opprett signaturfil"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Slett"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Last ned"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nedlastingsstatus"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Rediger tekst"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kryptering"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fil fullf\xF8rt"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Laster ned fil..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Laster opp fil..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Gi opp"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sl\xE5r sammen filer..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mine filer"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Neste trinn"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ikke enn\xE5"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " side"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sider"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sider"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passordene stemmer ikke"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Passord er p\xE5krevd"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bilde"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bildegalleri"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vennligst skriv inn passordet p\xE5 nytt"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vennligst skriv inn s\xF8keord"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vennligst skriv inn passord"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Forrige"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Prosjektnavn"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arkiverte prosjekter vil vises her"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Etter fullf\xF8ring, vil skjermen hoppe automatisk. Hvis det ikke er noen hoppeside, trykk p\xE5 bekreft-knappen."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kom og opprett en ny fil"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Slettede elementer vil vises her"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Angi et passord for \xE5 beskytte PDF-filen din"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Det oppstod en ukjent feil. Vennligst oppdater siden og pr\xF8v igjen"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil arkivert vellykket"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil opprettet vellykket"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil slettet vellykket"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filformatet stemmer ikke"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Opplasting av fil mislyktes"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fil lastet opp vellykket"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filst\xF8rrelsen overstiger 20 MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil gi opp redigeringen av filen?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Feil passord"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ingen elementer"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Operasjonen ble tidsavbrutt, pr\xF8v igjen"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Eller dra filen hit"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilde lagt til vellykket"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dette bildet finnes allerede"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilde slettet vellykket"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Opplasting av bilde mislyktes"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Denne filen er passordbeskyttet"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfil lagt til vellykket"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfil slettet vellykket"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "St\xF8tter bare "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "-filer, og st\xF8rrelsen overskrider ikke 20 MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil arkivere denne filen?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du har fullf\xF8rt signeringen av dokumentet?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil slette denne filen?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil slette dette bildet?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil slette denne signaturen?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil slette denne teksten?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Er du sikker p\xE5 at du vil kaste den redigerte innholdet?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst lagt til vellykket"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Denne teksten finnes allerede"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst slettet vellykket"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst redigert vellykket"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Elementer i papirkurven slettes permanent etter 30 dager"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Vennligst pr\xF8v et annet s\xF8keord"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ingen elementer funnet som samsvarer med s\xF8kekriteriene"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "G\xE5 tilbake til hjemmesiden"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Velg"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Velg fil"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Velg side"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Oppsettstid"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signer"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signering fullf\xF8rt"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signer fil"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturfil"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekst"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekstbibliotek"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Papirkurv"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Last opp fil"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bruk"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Vent"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Advar"
        }
      }
    }
  }, {
    "pl-PL": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dodaj cz\u0119sto u\u017Cywany tekst"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dodaj obraz"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dodaj plik sygnatury"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dodaj tekst"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Archiwalne pliki"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Operacja wsadowa"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Anuluj"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Potwierd\u017A"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Utw\xF3rz plik"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Utw\xF3rz plik sygnatury"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Usu\u0144"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pobierz"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aktualny post\u0119p pobierania"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Edytuj tekst"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Szyfrowanie"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Plik uko\u0144czony"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pobieranie pliku..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Przesy\u0142anie pliku..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Porzu\u0107"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0141\u0105czenie plik\xF3w..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Moje pliki"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nast\u0119pny krok"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Jeszcze nie"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " strona"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " strony"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Strony"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Has\u0142a nie s\u0105 zgodne"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Has\u0142o jest wymagane"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Obraz"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Galeria obraz\xF3w"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Prosz\u0119 ponownie wprowadzi\u0107 has\u0142o"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Wprowad\u017A s\u0142owa kluczowe"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Wprowad\u017A has\u0142o"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Poprzedni"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nazwa projektu"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Zarchiwizowane projekty b\u0119d\u0105 wy\u015Bwietlane tutaj"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Po zako\u0144czeniu ekran automatycznie przeskoczy. Je\u015Bli brak strony skoku, prosz\u0119 nacisn\u0105\u0107 przycisk potwierdzenia."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Przyjd\u017A i utw\xF3rz nowy plik"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Usuni\u0119te elementy b\u0119d\u0105 wy\u015Bwietlane tutaj"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ustaw has\u0142o, aby chroni\u0107 plik PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Wyst\u0105pi\u0142 nieznany b\u0142\u0105d. Prosz\u0119 od\u015Bwie\u017Cy\u0107 stron\u0119 i spr\xF3bowa\u0107 ponownie"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik zosta\u0142 pomy\u015Blnie zarchiwizowany"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik zosta\u0142 pomy\u015Blnie utworzony"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik zosta\u0142 pomy\u015Blnie usuni\u0119ty"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Format pliku nie pasuje"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Przesy\u0142anie pliku nie powiod\u0142o si\u0119"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik zosta\u0142 pomy\u015Blnie przes\u0142any"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Rozmiar pliku przekracza 20 MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz zrezygnowa\u0107 z edycji pliku?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nieprawid\u0142owe has\u0142o"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Brak element\xF3w"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czas operacji min\u0105\u0142, spr\xF3buj ponownie"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Lub przeci\u0105gnij plik tutaj"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Obraz zosta\u0142 pomy\u015Blnie dodany"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ten obraz ju\u017C istnieje"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Obraz zosta\u0142 pomy\u015Blnie usuni\u0119ty"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Przesy\u0142anie obrazu nie powiod\u0142o si\u0119"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ten plik jest chroniony has\u0142em"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik sygnatury zosta\u0142 pomy\u015Blnie dodany"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Plik sygnatury zosta\u0142 pomy\u015Blnie usuni\u0119ty"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Obs\u0142ugiwane s\u0105 tylko pliki "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", kt\xF3rych rozmiar nie przekracza 20 MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz zarchiwizowa\u0107 ten plik?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno uko\u0144czy\u0142e\u015B podpisywanie dokumentu?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz usun\u0105\u0107 ten plik?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz usun\u0105\u0107 ten obraz?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz usun\u0105\u0107 t\u0119 sygnatur\u0119?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz usun\u0105\u0107 ten tekst?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Czy na pewno chcesz odrzuci\u0107 swoj\u0105 edytowan\u0105 zawarto\u015B\u0107?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst zosta\u0142 pomy\u015Blnie dodany"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ten tekst ju\u017C istnieje"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst zosta\u0142 pomy\u015Blnie usuni\u0119ty"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tekst zosta\u0142 pomy\u015Blnie edytowany"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Elementy w koszu zostan\u0105 trwale usuni\u0119te po 30 dniach"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Prosz\u0119 spr\xF3bowa\u0107 innego terminu wyszukiwania"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nie znaleziono element\xF3w pasuj\u0105cych do kryteri\xF3w wyszukiwania"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Powr\xF3t do strony g\u0142\xF3wnej"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wybierz"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wybierz plik"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Wybierz stron\u0119"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Czas ustawienia"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Podpisz"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Podpisanie zako\u0144czone"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Podpisz plik"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Plik sygnatury"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tekst"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Biblioteka tekst\xF3w"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kosz"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Prze\u015Blij plik"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "U\u017Cyj"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Czekaj"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ostrze\u017Cenie"
        }
      }
    }
  }, {
    "pt-PT": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adicionar texto comum"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adicionar imagem"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adicionar arquivo de assinatura"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Adicionar texto"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arquivos arquivados"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Opera\xE7\xE3o em lote"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Cancelar"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Confirmar"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Criar arquivo"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Criar arquivo de assinatura"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Eliminar"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Baixar"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Progresso de download atual"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Editar texto"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Criptografia"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arquivo conclu\xEDdo"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Baixando arquivo..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Carregando arquivo..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Desistir"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mesclando arquivos..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Meus arquivos"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Pr\xF3xima etapa"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ainda n\xE3o"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " p\xE1gina"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " p\xE1ginas"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "P\xE1ginas"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "As senhas n\xE3o correspondem"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Senha necess\xE1ria"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Imagem"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Galeria de imagens"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, insira a senha novamente"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, insira palavras-chave"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, insira a senha"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Anterior"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Nome do projeto"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Projetos arquivados ser\xE3o exibidos aqui"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ap\xF3s a conclus\xE3o, a tela avan\xE7ar\xE1 automaticamente. Se n\xE3o houver p\xE1gina de avan\xE7o, pressione o bot\xE3o de confirma\xE7\xE3o."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Venha e crie um novo arquivo"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Itens exclu\xEDdos ser\xE3o exibidos aqui"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Defina uma senha para proteger seu arquivo PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ocorreu um erro desconhecido. Por favor, atualize a p\xE1gina e tente novamente"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo arquivado com sucesso"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo criado com sucesso"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo exclu\xEDdo com sucesso"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Formato de arquivo n\xE3o corresponde"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Falha ao carregar arquivo"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo carregado com sucesso"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "O tamanho do arquivo excede 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja desistir de editar o arquivo?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Senha incorreta"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Sem itens"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "A opera\xE7\xE3o expirou, por favor, tente novamente"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ou arraste o arquivo aqui"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Imagem adicionada com sucesso"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Esta imagem j\xE1 existe"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Imagem exclu\xEDda com sucesso"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Falha ao carregar imagem"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Este arquivo \xE9 protegido por senha"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo de assinatura adicionado com sucesso"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arquivo de assinatura exclu\xEDdo com sucesso"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Apenas suporta arquivos "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", e o tamanho n\xE3o excede 20MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja arquivar este arquivo?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que concluiu a assinatura do documento?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja excluir este arquivo?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja excluir esta imagem?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja excluir esta assinatura?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja excluir este texto?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tem certeza de que deseja descartar seu conte\xFAdo editado?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto adicionado com sucesso"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Este texto j\xE1 existe"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto exclu\xEDdo com sucesso"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texto editado com sucesso"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Os itens na Lixeira ser\xE3o exclu\xEDdos permanentemente ap\xF3s 30 dias"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Por favor, tente outra palavra-chave"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Nenhum item encontrado que corresponda aos crit\xE9rios de pesquisa"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Voltar para a p\xE1gina inicial"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecionar"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecionar arquivo"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Selecionar p\xE1gina"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Tempo de configura\xE7\xE3o"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Assinar"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Assinatura conclu\xEDda"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "assinatura conclu\xEDda"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Assinar arquivo"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "assinar arquivo"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arquivo de assinatura"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Texto"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Biblioteca de texto"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Lixeira"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Carregar arquivo"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "carregar arquivo"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Usar"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aguarde"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aviso"
        }
      }
    }
  }, {
    "ru-RU": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u043A\u0441\u0442"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0438"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u0430\u043A\u0435\u0442\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041E\u0442\u043C\u0435\u043D\u0430"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0438"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0428\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0424\u0430\u0439\u043B \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u0430..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u0430..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041C\u043E\u0438 \u0444\u0430\u0439\u043B\u044B"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0415\u0449\u0435 \u043D\u0435\u0442"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0430\u0440\u043E\u043B\u044C"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0437\u0434\u0435\u0441\u044C"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0438 \u044D\u043A\u0440\u0430\u043D \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0435\u0442. \u0415\u0441\u043B\u0438 \u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0437\u0434\u0435\u0441\u044C"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u0432\u0430\u0448\u0435\u0433\u043E \u0444\u0430\u0439\u043B\u0430 PDF"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u0430"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 20 \u041C\u0411"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0418\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0430"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u042D\u0442\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u042D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0437\u0430\u0449\u0438\u0449\u0435\u043D \u043F\u0430\u0440\u043E\u043B\u0435\u043C"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0424\u0430\u0439\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u0439\u043B\u044B "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: ", \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 20 \u041C\u0411."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u043E\u0434\u043F\u0438\u0441\u044C?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0422\u0435\u043A\u0441\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u042D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0422\u0435\u043A\u0441\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0422\u0435\u043A\u0441\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 30 \u0434\u043D\u0435\u0439"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C \u043F\u043E\u0438\u0441\u043A\u0430"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0424\u0430\u0439\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0438"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0422\u0435\u043A\u0441\u0442"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0442\u0435\u043A\u0441\u0442\u043E\u0432"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"
        }
      }
    }
  }, {
    "sv-SE": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xE4gg till vanligt anv\xE4nd text"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xE4gg till bild"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xE4gg till signaturfil"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xE4gg till text"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Arkiverade filer"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Batchoperation"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Avbryt"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bekr\xE4fta"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Skapa fil"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Skapa signaturfil"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Radera"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ladda ner"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Aktuell nedladdningsstatus"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Redigera text"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kryptering"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Fil klar"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Laddar ner fil..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Laddar upp fil..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ge upp"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sammanfogar filer..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mina filer"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "N\xE4sta steg"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Inte \xE4n"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sida"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sidor"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sidor"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xF6senorden matchar inte"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "L\xF6senord kr\xE4vs"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bild"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bildgalleri"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ange l\xF6senordet igen"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ange s\xF6kord"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ange l\xF6senord"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "F\xF6reg\xE5ende"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Projektnamn"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arkiverade projekt visas h\xE4r"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Efter avslutat hoppar sk\xE4rmen automatiskt. Om det inte finns n\xE5gon hoppa sida, tryck p\xE5 bekr\xE4fta-knappen."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Kom och skapa en ny fil"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Borttagna objekt visas h\xE4r"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ange ett l\xF6senord f\xF6r att skydda din PDF-fil"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ett ok\xE4nt fel intr\xE4ffade. V\xE4nligen uppdatera sidan och f\xF6rs\xF6k igen"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filen har arkiverats"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filen har skapats"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filen har raderats"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filformatet matchar inte"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filuppladdning misslyckades"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filuppladdning lyckades"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Filstorleken \xF6verstiger 20 MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill ge upp redigeringen av filen?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Fel l\xF6senord"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Inga objekt"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Operationen tog f\xF6r l\xE5ng tid, f\xF6rs\xF6k igen"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Eller dra filen hit"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilden har lagts till"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilden finns redan"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilden har raderats"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilduppladdning misslyckades"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Denna fil \xE4r skyddad med l\xF6senord"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfilen har lagts till"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Signaturfilen har raderats"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Endast "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "-filer st\xF6ds och filstorleken f\xE5r inte \xF6verstiga 20 MB."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill arkivera den h\xE4r filen?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du har undertecknat dokumentet?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill radera den h\xE4r filen?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill radera den h\xE4r bilden?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill radera den h\xE4r signaturfilen?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill radera den h\xE4r texten?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC4r du s\xE4ker p\xE5 att du vill kasta det redigerade inneh\xE5llet?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texten har lagts till"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texten finns redan"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Texten har raderats"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Text redigerad framg\xE5ngsrikt"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Objekt i papperskorgen raderas permanent efter 30 dagar"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "F\xF6rs\xF6k med ett annat s\xF6kord"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Inga objekt hittades som matchar s\xF6kkriterierna"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "G\xE5 tillbaka till startsidan"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE4lj"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE4lj fil"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE4lj sida"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Inst\xE4llningstid"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Underteckna"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Undertecknande slutf\xF6rt"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "undertecknande slutf\xF6rt"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Underteckna fil"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "underteckna fil"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Signaturfil"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Text"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Textbibliotek"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Papperskorg"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ladda upp fil"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "ladda upp fil"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Anv\xE4nd"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "V\xE4nta"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Varna"
        }
      }
    }
  }, {
    "tr-TR": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "S\u0131k\xE7a kullan\u0131lan metin ekle"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Resim ekle"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130mza dosyas\u0131 ekle"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Metin ekle"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ar\u015Fivlenmi\u015F Dosyalar"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Parti i\u015Flemi"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130ptal"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Onayla"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya Olu\u015Ftur"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130mza dosyas\u0131 olu\u015Ftur"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sil"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130ndir"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Mevcut indirme ilerlemesi"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Metni D\xFCzenle"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u015Eifreleme"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya tamamland\u0131"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya indiriliyor..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya y\xFCkleniyor..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Vazge\xE7"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosyalar birle\u015Ftiriliyor..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosyalar\u0131m"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sonraki Ad\u0131m"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Hen\xFCz de\u011Fil"
        }
      },
      page: {
        t: 0,
        b: {
          t: 1,
          c: [
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sayfa"
                }
              ]
            },
            {
              t: 2,
              i: [
                {
                  t: 4,
                  k: "count"
                },
                {
                  t: 3,
                  v: " sayfalar"
                }
              ]
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sayfalar"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u015Eifreler uyu\u015Fmuyor"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u015Eifre gereklidir"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Resim"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Resim Galerisi"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "L\xFCtfen \u015Fifreyi tekrar girin"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "L\xFCtfen anahtar kelimeleri girin"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "L\xFCtfen \u015Fifre girin"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\xD6nceki"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Proje Ad\u0131"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ar\u015Fivlenen projeler burada g\xF6r\xFCnt\xFClenecektir"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Tamamland\u0131ktan sonra ekran otomatik olarak atlayacakt\u0131r. Atlayacak bir sayfa yoksa, l\xFCtfen onay d\xFC\u011Fmesine bas\u0131n."
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Gel ve yeni bir dosya olu\u015Ftur"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Silinmi\u015F \xF6\u011Feler burada g\xF6r\xFCnt\xFClenecektir"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "PDF dosyan\u0131z\u0131 korumak i\xE7in bir \u015Fifre belirleyin"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bilinmeyen bir hata olu\u015Ftu. L\xFCtfen sayfay\u0131 yenileyip tekrar deneyin"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya ba\u015Far\u0131yla ar\u015Fivlendi"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya ba\u015Far\u0131yla olu\u015Fturuldu"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya ba\u015Far\u0131yla silindi"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya format\u0131 uyu\u015Fmuyor"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya y\xFCkleme ba\u015Far\u0131s\u0131z oldu"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya ba\u015Far\u0131yla y\xFCklendi"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya boyutu 20MB'yi a\u015F\u0131yor"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Dosya d\xFCzenlemeyi vazge\xE7mek istedi\u011Finizden emin misiniz?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Yanl\u0131\u015F \u015Fifre"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xD6\u011Fe bulunamad\u0131"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0130\u015Flem zaman a\u015F\u0131m\u0131na u\u011Frad\u0131, l\xFCtfen tekrar deneyin"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Ya da dosyay\u0131 buraya s\xFCr\xFCkleyin"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Resim ba\u015Far\u0131yla eklendi"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu resim zaten mevcut"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Resim ba\u015Far\u0131yla silindi"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Resim y\xFCkleme ba\u015Far\u0131s\u0131z oldu"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu dosya \u015Fifre korumal\u0131d\u0131r"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0130mza dosyas\u0131 ba\u015Far\u0131yla eklendi"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u0130mza dosyas\u0131 ba\u015Far\u0131yla silindi"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "Yaln\u0131zca "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: " dosyalar\u0131n\u0131 destekler ve boyutu 20MB'yi ge\xE7emez."
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu dosyay\u0131 ar\u015Fivlemek istedi\u011Finizden emin misiniz?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Belgeyi imzalama i\u015Flemini tamamlad\u0131\u011F\u0131n\u0131za emin misiniz?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu dosyay\u0131 silmek istedi\u011Finizden emin misiniz?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu resmi silmek istedi\u011Finizden emin misiniz?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu imza dosyas\u0131n\u0131 silmek istedi\u011Finizden emin misiniz?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu metni silmek istedi\u011Finizden emin misiniz?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "D\xFCzenlenmi\u015F i\xE7eri\u011Fi silmek istedi\u011Finizden emin misiniz?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Metin ba\u015Far\u0131yla eklendi"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Bu metin zaten mevcut"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Metin ba\u015Far\u0131yla silindi"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Metin d\xFCzenleme ba\u015Far\u0131l\u0131"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\xC7\xF6p kutusundaki \xF6\u011Feler 30 g\xFCn sonra kal\u0131c\u0131 olarak silinecektir"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "L\xFCtfen ba\u015Fka bir arama terimi deneyin"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "Arama kriterlerine uyan \xF6\u011Fe bulunamad\u0131"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Ana sayfaya d\xF6n"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Se\xE7"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya Se\xE7"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Sayfa Se\xE7"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kurulum S\xFCresi"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130mzala"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130mzalama Tamamland\u0131"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosyay\u0131 \u0130mzala"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u0130mza Dosyas\u0131"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Metin"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Metin K\xFCt\xFCphanesi"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\xC7\xF6p Kutusu"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Dosya Y\xFCkle"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Kullan"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Bekle"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "Uyar\u0131"
        }
      }
    }
  }, {
    "zh-CN": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6DFB\u52A0\u5E38\u7528\u6587\u672C"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6DFB\u52A0\u56FE\u7247"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6DFB\u52A0\u7B7E\u540D\u6587\u4EF6"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6DFB\u52A0\u6587\u672C"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5DF2\u5F52\u6863\u6587\u4EF6"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6279\u91CF\u64CD\u4F5C"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u53D6\u6D88"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u786E\u8BA4"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u521B\u5EFA\u6587\u4EF6"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u521B\u5EFA\u7B7E\u540D\u6587\u4EF6"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5220\u9664"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0B\u8F7D"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5F53\u524D\u4E0B\u8F7D\u8FDB\u5EA6"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7F16\u8F91\u6587\u672C"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u52A0\u5BC6"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u4EF6\u5B8C\u6210"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u4EF6\u4E0B\u8F7D\u4E2D..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u4EF6\u4E0A\u4F20\u4E2D..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u653E\u5F03"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6B63\u5728\u5408\u5E76\u6587\u4EF6..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6211\u7684\u6587\u4EF6"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0B\u4E00\u6B65"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8FD8\u6CA1\u6709"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: " \u9875"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9875"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5BC6\u7801\u4E0D\u5339\u914D"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9700\u8981\u5BC6\u7801"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u56FE\u7247"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u56FE\u7247\u5E93"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8BF7\u8F93\u5165\u5BC6\u7801"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0A\u4E00\u6B65"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9879\u76EE\u540D\u79F0"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5DF2\u5F52\u6863\u7684\u9879\u76EE\u5C06\u663E\u793A\u5728\u6B64\u5904"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5B8C\u6210\u540E\uFF0C\u5C4F\u5E55\u5C06\u81EA\u52A8\u8DF3\u8F6C\u3002\u5982\u679C\u6CA1\u6709\u8DF3\u8F6C\u9875\u9762\uFF0C\u8BF7\u6309\u786E\u8BA4\u6309\u94AE\u3002"
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5DF2\u5220\u9664\u7684\u9879\u76EE\u5C06\u663E\u793A\u5728\u6B64\u5904"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8BBE\u7F6E\u5BC6\u7801\u4EE5\u4FDD\u62A4 PDF \u6587\u4EF6"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u53D1\u751F\u672A\u77E5\u9519\u8BEF\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u5C1D\u8BD5"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u6210\u529F\u5F52\u6863"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u521B\u5EFA\u6210\u529F"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u5220\u9664\u6210\u529F"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u683C\u5F0F\u4E0D\u5339\u914D"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u4E0A\u4F20\u6210\u529F"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7 20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u662F\u5426\u653E\u5F03\u7F16\u8F91\u6587\u4EF6\uFF1F"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5BC6\u7801\u4E0D\u6B63\u786E"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6CA1\u6709\u9879\u76EE"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u64CD\u4F5C\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6216\u5C06\u6587\u4EF6\u62D6\u5230\u8FD9\u91CC"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u56FE\u7247\u6DFB\u52A0\u6210\u529F"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u56FE\u7247\u5DF2\u5B58\u5728"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u56FE\u7247\u5220\u9664\u6210\u529F"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u6587\u4EF6\u53D7\u5BC6\u7801\u4FDD\u62A4"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7B7E\u540D\u6587\u4EF6\u6DFB\u52A0\u6210\u529F"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7B7E\u540D\u6587\u4EF6\u5220\u9664\u6210\u529F"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\u4E3A "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: "\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC7 20MB\u3002"
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u5F52\u6863\u6B64\u6587\u4EF6\u5417\uFF1F"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u6863\u7B7E\u540D\u5B8C\u6210\u4E86\u5417\uFF1F"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6587\u4EF6\u5417\uFF1F"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u56FE\u7247\u5417\uFF1F"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7B7E\u540D\u5417\uFF1F"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6587\u672C\u5417\uFF1F"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u786E\u5B9A\u8981\u653E\u5F03\u7F16\u8F91\u7684\u5185\u5BB9\u5417\uFF1F"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u672C\u6DFB\u52A0\u6210\u529F"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u6587\u672C\u5DF2\u5B58\u5728"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u672C\u5220\u9664\u6210\u529F"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u672C\u7F16\u8F91\u6210\u529F"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5783\u573E\u7BB1\u4E2D\u7684\u9879\u76EE\u5C06\u5728 30 \u5929\u540E\u6C38\u4E45\u5220\u9664"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5C1D\u8BD5\u53E6\u4E00\u4E2A\u641C\u7D22\u8BCD"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u672A\u627E\u5230\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u9879\u76EE"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8FD4\u56DE\u9996\u9875"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9009\u62E9"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9009\u62E9\u6587\u4EF6"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9009\u62E9\u9875\u9762"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8BBE\u7F6E\u65F6\u95F4"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D\u5B8C\u6210"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D\u5B8C\u6210"
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D\u6587\u4EF6"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D\u6587\u4EF6"
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B7E\u540D\u6587\u4EF6"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u672C"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u672C\u5E93"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5783\u573E\u7BB1"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0A\u4F20\u6587\u4EF6"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0A\u4F20\u6587\u4EF6"
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4F7F\u7528"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B49\u5F85"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8B66\u544A"
        }
      }
    }
  }, {
    "zh-TW": {
      add_commonly_use_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u65B0\u589E\u5E38\u7528\u6587\u5B57"
        }
      },
      add_picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u65B0\u589E\u5716\u7247"
        }
      },
      add_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u65B0\u589E\u7C3D\u540D\u6A94"
        }
      },
      add_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u65B0\u589E\u6587\u5B57"
        }
      },
      archived_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5DF2\u5C01\u5B58\u7684\u6587\u4EF6"
        }
      },
      batch_operation: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6279\u91CF\u64CD\u4F5C"
        }
      },
      cancel: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u53D6\u6D88"
        }
      },
      confirm: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u78BA\u5B9A"
        }
      },
      create_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5275\u5EFA\u6A94\u6848"
        }
      },
      create_signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5EFA\u7ACB\u7C3D\u540D\u6A94"
        }
      },
      delete: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u522A\u9664"
        }
      },
      download: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0B\u8F09\u6A94\u6848"
        }
      },
      download_progress: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7576\u524D\u4E0B\u8F09\u9032\u5EA6"
        }
      },
      edit_text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7DE8\u8F2F\u6587\u5B57"
        }
      },
      encryption: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u52A0\u5BC6"
        }
      },
      file_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6A94\u6848\u5DF2\u5B8C\u6210"
        }
      },
      file_downloading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6A94\u6848\u4E0B\u8F09\u4E2D..."
        }
      },
      file_uploading: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6A94\u6848\u4E0A\u50B3\u4E2D..."
        }
      },
      give_up: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u653E\u68C4"
        }
      },
      merging_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5408\u4F75\u6A94\u6848\u4E2D..."
        }
      },
      my_files: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6211\u7684\u6587\u4EF6"
        }
      },
      next_step: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0B\u4E00\u6B65"
        }
      },
      not_yet: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5148\u4E0D\u8981"
        }
      },
      page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 4,
              k: "count"
            },
            {
              t: 3,
              v: "\u9801"
            }
          ]
        }
      },
      pages: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9801\u6578"
        }
      },
      password_not_match: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5BC6\u78BC\u4E0D\u4E00\u81F4"
        }
      },
      password_required: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5BC6\u78BC\u70BA\u5FC5\u586B"
        }
      },
      picture: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5716\u7247"
        }
      },
      picture_gallery: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5716\u7247\u5EAB"
        }
      },
      placeholder: {
        confirm_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC"
          }
        },
        keyword: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"
          }
        },
        password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8ACB\u8F38\u5165\u5BC6\u78BC"
          }
        }
      },
      previous: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0A\u4E00\u6B65"
        }
      },
      project_name: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5C08\u6848\u540D\u7A31"
        }
      },
      prompt: {
        archived_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5C01\u5B58\u7684\u9805\u76EE\u6703\u986F\u793A\u5728\u9019\u88E1"
          }
        },
        auto_jump_screen: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5B8C\u6210\u5F8C\u756B\u9762\u81EA\u52D5\u8DF3\u8F49, \u5982\u7121\u8DF3\u8F49\u9801\u9762\u8ACB\u6309\u78BA\u5B9A\u6309\u9215\u3002"
          }
        },
        create_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5FEB\u4F86\u5EFA\u7ACB\u65B0\u6A94\u5427"
          }
        },
        deleted_projects: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u522A\u9664\u7684\u9805\u76EE\u6703\u986F\u793A\u5728\u9019\u88E1"
          }
        },
        encryption_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8A2D\u7F6E\u4E00\u500B\u5BC6\u78BC\u4F86\u4FDD\u8B77\u4F60\u7684PDF\u6A94\u6848"
          }
        },
        error_occurred: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u767C\u751F\u672A\u77E5\u7684\u932F\u8AA4, \u8ACB\u5237\u65B0\u9801\u9762\u91CD\u65B0\u5617\u8A66"
          }
        },
        file_archived_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u5C01\u5B58\u6210\u529F"
          }
        },
        file_created_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u5EFA\u7ACB\u6210\u529F"
          }
        },
        file_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u522A\u9664\u6210\u529F"
          }
        },
        file_format_not_match: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"
          }
        },
        file_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u4E0A\u50B3\u5931\u6557"
          }
        },
        file_upload_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u4E0A\u50B3\u6210\u529F"
          }
        },
        file_size_exceed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6A94\u6848\u5927\u5C0F\u8D85\u904E20MB"
          }
        },
        give_up_edit: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u653E\u68C4\u7DE8\u8F2F\u6587\u4EF6?"
          }
        },
        incorrect_password: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5BC6\u78BC\u8F38\u5165\u932F\u8AA4"
          }
        },
        no_items: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6C92\u6709\u4EFB\u4F55\u9805\u76EE"
          }
        },
        operation_timed_out: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u64CD\u4F5C\u903E\u6642, \u8ACB\u91CD\u65B0\u64CD\u4F5C"
          }
        },
        or_drag_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6216\u8005\u5C07\u6A94\u6848\u62D6\u66F3\u5230\u9019\u88E1"
          }
        },
        picture_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5716\u7247\u65B0\u589E\u6210\u529F"
          }
        },
        picture_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u7167\u7247\u5DF2\u5B58\u5728"
          }
        },
        picture_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5716\u7247\u522A\u9664\u6210\u529F"
          }
        },
        picture_upload_failed: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5716\u7247\u4E0A\u50B3\u5931\u6557"
          }
        },
        protected_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u6587\u4EF6\u53D7\u5BC6\u78BC\u4FDD\u8B77"
          }
        },
        signature_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7C3D\u540D\u6A94\u65B0\u589E\u6210\u529F"
          }
        },
        signature_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u7C3D\u540D\u6A94\u522A\u9664\u6210\u529F"
          }
        },
        support_filetype: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3,
                v: "\u50C5\u652F\u63F4 "
              },
              {
                t: 4,
                k: "type"
              },
              {
                t: 3,
                v: " \u6A94\u6848 , \u4E14\u5BB9\u91CF\u4E0D\u8D85\u904E 20MB\u3002"
              }
            ]
          }
        },
        sure_archive_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u5C01\u5B58\u6B64\u6A94\u6848?"
          }
        },
        sure_completed_sign: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u5DF2\u5B8C\u6210\u7C3D\u7F72\u6587\u4EF6?"
          }
        },
        sure_delete_file: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u6A94\u6848?"
          }
        },
        sure_delete_picture: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u5716\u7247?"
          }
        },
        sure_delete_signature: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u7C3D\u540D?"
          }
        },
        sure_delete_text: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u6587\u5B57?"
          }
        },
        sure_discard_edited_content: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u78BA\u5B9A\u8981\u653E\u68C4\u5DF2\u7DE8\u8F2F\u7684\u5167\u5BB9?"
          }
        },
        text_add_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u5B57\u65B0\u589E\u6210\u529F"
          }
        },
        text_already_exists: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6B64\u6587\u5B57\u5DF2\u5B58\u5728"
          }
        },
        text_delete_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u5B57\u522A\u9664\u6210\u529F"
          }
        },
        text_edit_success: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u6587\u5B57\u7DE8\u8F2F\u6210\u529F"
          }
        },
        trash_shelf_life: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u5783\u573E\u6876\u4E2D\u7684\u9805\u76EE\u6703\u5728 30 \u5929\u5F8C\u6C38\u4E45\u522A\u9664"
          }
        },
        try_another: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u8ACB\u5617\u8A66\u5176\u4ED6\u641C\u5C0B\u8A5E"
          }
        },
        un_found: {
          t: 0,
          b: {
            t: 2,
            i: [
              {
                t: 3
              }
            ],
            s: "\u627E\u4E0D\u5230\u4EFB\u4F55\u7B26\u5408\u641C\u5C0B\u689D\u4EF6\u7684\u9805\u76EE"
          }
        }
      },
      return_home: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u56DE\u9996\u9801"
        }
      },
      select: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9078\u64C7"
        }
      },
      select_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9078\u64C7\u6A94\u6848"
        }
      },
      select_page: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u9078\u64C7\u9801\u9762"
        }
      },
      setup_time: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5EFA\u7ACB\u6642\u9593"
        }
      },
      sign: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7C3D\u540D"
        }
      },
      sign_completed: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7C3D\u7F72\u5B8C\u6210"
        }
      },
      sign_completed_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_completed"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      sign_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7C3D\u7F72\u6587\u4EF6"
        }
      },
      sign_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "sign_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      signature_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7C3D\u540D\u6A94"
        }
      },
      text: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u5B57"
        }
      },
      text_library: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u6587\u5B57\u5EAB"
        }
      },
      trash_bin: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u5783\u573E\u6876"
        }
      },
      upload_file: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4E0A\u50B3\u6A94\u6848"
        }
      },
      upload_file_lower: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 6,
              k: {
                t: 7,
                v: "upload_file"
              },
              m: {
                t: 8,
                v: "lower"
              }
            }
          ]
        }
      },
      use: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u4F7F\u7528"
        }
      },
      wait: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u7B49\u4E00\u4E0B"
        }
      },
      warn: {
        t: 0,
        b: {
          t: 2,
          i: [
            {
              t: 3
            }
          ],
          s: "\u8B66\u544A"
        }
      }
    }
  }), se = Ne({
    locale: localStorage.getItem("pdf-signature-i18n") ?? navigator.language,
    fallbackLocale: "en-US",
    messages: us
  }), _s = {
    install(t) {
      t.config.errorHandler = (e, i, r) => {
        console.error("Global error handling:", e), console.error("The error occurred in:", i), console.error("The error message:", r), Ut();
      }, window.addEventListener("error", ({ message: e, filename: i, lineno: r, colno: s, error: a }) => (console.error("Error caught:", {
        message: e,
        filename: i,
        lineno: r,
        colno: s,
        error: a
      }), Ut(), true)), window.addEventListener("unhandledrejection", (e) => {
        console.error("Catch errors thrown by unhandled Promise", e.reason), Ut();
      });
    }
  };
  function Ut() {
    const { t } = se.global, e = document.querySelector("#loading-reload");
    W({
      message: t("prompt.error_occurred"),
      type: "error"
    }), !(!e || !(e instanceof HTMLElement)) && (e.style.display = "flex");
  }
  function ps(t, e) {
    return new FontFace(t, `url(/font/${e})`).load().then((r) => {
      document.fonts.add(r), document.body.style.fontFamily = t;
    });
  }
  const bs = "" + new URL("bg_decorate-CGBiDQAU.svg", import.meta.url).href, fs = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.8973%2042.2716C21.2028%2043.1178%2022.1265%2043.5723%2025.0593%2043.5723H47.0189C67.1022%2043.5723%2089.5156%2043.9242%20107.696%2043.5723C114.329%2043.4438%20118.962%2044.1761%20124.223%2041.1697C126.179%2040.0522%20128.077%2037.0964%20129.181%2035.1097C130.391%2032.9321%20130.808%2029.873%20129.966%2026.6729C129.024%2023.0934%20126.834%2019.9659%20123.672%2018.5824C118.535%2016.3352%20117.924%2017.1843%20113.756%2016.6737C108.844%2016.072%20104.735%2016.7564%20101.085%2016.7564H92.8207C91.3333%2016.7564%2088.2136%2016.6737%2088.2136%2016.6737C88.2136%2016.6737%2078.4404%2016.3845%2073.6695%2016.3845C68.1405%2016.3845%2062.5234%2016.3787%2057.012%2016.3787C46.5387%2016.3787%2036.5998%2015.5266%2026.161%2016.3787C20.1295%2016.8711%2015.2647%2016.9713%2011.8374%2021.8878C9.44848%2025.3147%209.08273%2029.0498%209.6337%2032.3552C10.2413%2036.0006%2011.8373%2037.8643%2014.1499%2040.0395C14.7658%2040.6189%2015.3852%2041.3566%2017.8973%2042.2716Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M22.8557%2040.3027C22.708%2046.6555%2022.8419%2058.072%2022.8419%2064.4318C22.8419%2071.7728%2022.8419%2079.1137%2022.8419%2086.4547C22.8419%2090.924%2022.8419%2095.3933%2022.8419%2099.8626C22.8419%20103.911%2022.5759%20111.245%2024.5417%20116.094C27.6074%20123.656%2034.6737%20123.511%2041.2895%20123.511C50.5931%20123.511%2059.8967%20123.511%2069.2003%20123.511C74.4607%20123.511%2079.7266%20123.883%2085.0047%20123.883C90.4346%20123.883%2099.3066%20124.95%20104.39%20123.256C110.135%20121.341%20113.391%20120.11%20115.408%20116.094C116.793%20113.339%20117.544%20102.224%20117.164%2096.2612C116.872%2091.669%20117.028%2087.9876%20117.164%2084.4783C117.559%2074.2948%20117.064%2067.1636%20117.522%2058.4475C117.662%2055.8026%20117.019%2053.9924%20117.164%2051.3682C117.3%2048.9218%20116.793%2041.7082%20116.793%2039.3027'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M55.9294%2070.9037C57.1749%2070.837%2059.314%2070.9948%2061.4306%2070.6091C64.1624%2070.1113%2065.6913%2070.3807%2068.032%2070.2553C70.5148%2070.1223%2072.0634%2070.1702%2075.1836%2069.8723C80.1236%2069.4008%2080.4168%2069.7574%2083.4442%2069.5952'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", ms = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0571%2012.4497C23.3897%2011.0975%2027.3055%209.85066%2030.0895%209.27763C33.473%208.5812%2037.1868%208.79672%2040.632%208.83179C50.3019%208.93023%2063.6079%208.78722%2073.2636%208.83178C91.2312%208.9147%2094.1866%208.05573%20104.891%209.27763C115.596%2010.4995%20117.736%2011.7005%20122.467%2017.419C125.474%2021.0532%20126.305%2031.474%20126.305%2035.034V72.6746C126.305%2083.8705%20126.98%2090.4195%20125.976%20105.476C125.339%20109.861%20125.496%20115.414%20123.466%20119.28C119.649%20126.549%20109.409%20130.211%20104.891%20130.211H79.7899C66.8103%20130.211%2060.713%20131.286%2047.6604%20131.286C37.9108%20131.286%2031.8379%20132.176%2025.5713%20128.598C19.9386%20125.382%2017.5389%20122.683%2014.5268%20115.692C12.6731%20111.391%2013.1066%20105.221%2012.9993%20103.325C12.6677%2097.4641%2013.1783%2092.0674%2012.9666%2086.1717C12.4731%2072.4258%2012.1979%2058.4031%2012.9993%2044.6682C13.5373%2035.4483%2012.2062%2028.3163%2015.9875%2019.9778C17.3264%2015.676%2020.7364%2013.7899%2022.0571%2012.4497Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M8%20100.636C18.0405%2089.9465%2024.3907%2080.6421%2031.04%2074.8218C33.7043%2072.4898%2036.6642%2070.634%2039.5746%2068.692C40.9639%2067.765%2042.4043%2066.8967%2044.016%2066.5332C45.5391%2066.1898%2047.1386%2065.7111%2048.6814%2066.3467C51.5019%2067.5086%2053.6106%2070.5957%2055.4618%2073.0095C57.7258%2075.9617%2059.7103%2079.5336%2061.1722%2083.0038C62.4308%2085.9914%2064.2267%2089.9465%2064.2267%2089.9465C64.2267%2089.9465%2067.5687%2095.2586%2068.7449%2096.8226C69.3019%2097.5632%2072.5017%2098.2443%2073.2632%2097.9477C76.6962%2096.6106%2076.7751%2096.8085%2079.2875%2094.1174C80.284%2093.05%2082.7413%2089.9465%2084.8097%2087.731C86.3158%2086.1178%2088.505%2084.0366%2090.8316%2082.7906C93.0767%2081.5882%2096.0472%2081.7048%2098.3644%2082.7906C101.602%2084.3078%20103.226%2086.0187%20105.761%2088.7339C108.578%2091.7509%20111.815%2094.5458%20115.191%2096.8226C116.424%2097.6543%20117.9%2098.4279%20119.259%2099.0213C120.245%2099.4516%20120.955%2099.5609%20123.968%20100.636C127.084%20101.749%20128.5%20103.385%20132%20103.863'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M78.9387%2042.3295C77.7432%2044.0368%2077.334%2046.4893%2077.2789%2049.2967C77.2377%2051.3993%2078.0288%2054.6216%2078.0288%2054.6216C78.3143%2056.3035%2081.4702%2059.8159%2082.9152%2060.3076C84.5561%2060.8658%2086.1122%2062.0229%2087.8211%2062.156C90.373%2062.3548%2092.7922%2062.7052%2094.8495%2061.3831C99.8697%2058.1567%20101.101%2055.2912%20101.376%2049.5532C101.522%2046.5053%20100.591%2044.5412%2098.8657%2042.0249C96.1276%2038.0311%2092.8414%2036.6478%2088.2815%2036.3276C85.9331%2036.1627%2083.7024%2037.0765%2081.7968%2038.7987C80.4711%2039.9969%2079.9754%2040.8489%2078.9387%2042.3295Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", hs = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.2158%2092.7849C33.807%2094.5848%2037.064%2099.4962%2042.8388%20102.884C47.0091%20105.33%2050.301%20106.453%2055.4121%20107.669C62.4685%20109.348%2067.8268%20108.854%2073.9589%20108.662C80.5079%20108.457%2082.8997%20105.351%2089.1425%20103.341C91.118%20102.705%2093.2034%20101.975%2094.9794%20100.886C97.2727%2099.4783%2099.2495%2095.1507%20101.291%2093.4103C105.528%2089.7982%20109.179%2085.2878%20110.776%2079.9067C113.024%2072.3335%20113.625%2061.4052%20113.023%2053.511C112.68%2049.0131%20110.526%2045.2867%20108.657%2041.3045C107.684%2039.2331%20106.694%2037.1631%20105.217%2035.3981C104.057%2034.0116%20102.67%2032.8514%20101.395%2031.5763C99.282%2029.463%2096.847%2026.9934%2094.493%2025.233C91.656%2021.9564%2086.894%2020.8771%2083.555%2019.5814C75.8728%2016.6002%2067.4696%2014.9132%2059.1535%2016.7872C53.9676%2017.9559%2048.6984%2020.4413%2044.0402%2022.9368C39.1748%2025.5433%2034.9565%2029.24%2031.1735%2033.244C27.6174%2037.008%2026.3651%2041.0554%2023.4891%2045.3695C22.0727%2047.4941%2020.5128%2054.2416%2020.5128%2056.8804C20.5128%2063.6727%2019.7441%2069.0489%2021.816%2075.4827C23.1147%2079.5155%2025.1002%2083.212%2027.5023%2086.6585C28.9532%2088.7402%2030.5328%2090.8812%2032.2158%2092.7849Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M95.5413%2095.6855C98.4422%2099.4567%20101.772%20100.647%20104.459%20104.574C105.743%20106.452%20110.384%20112.105%20112.339%20113.309C114.61%20114.706%20116.287%20117.973%20119.114%20120.301'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M77.594%2027.3027C79.4731%2027.6685%2081.3555%2028.0267%2083.1563%2028.7522C85.3903%2029.6523%2087.3708%2031.0914%2089.37%2032.4975C92.2609%2034.5308%2095.2121%2036.755%2097.3579%2039.787C100.402%2044.0878%20102.603%2047.9394%20103.756%2053.8685C104.702%2058.7391%20104.737%2063.3802%20103.756%2066.5739'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M37.426%2085.0547C40.3347%2091.2008%2046.2391%2094.2199%2052.0576%2097.2882'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", gs = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2039.8833C17.5%2039.8833%2020.5%2039.7924%2020.5%2039.7924C20.5%2039.7924%2029.872%2039.5742%2034.0063%2039.5742C39.9053%2039.5742%2045.8044%2039.5742%2051.7035%2039.5742C56.1682%2039.5742%2062.6329%2039.5742%2067.0976%2039.5742C75.7673%2039.5742%2078.4247%2039.7924%2087.0858%2039.7924C100.603%2039.7924%20112.436%2039.8832%20126%2039.8832'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M48.0752%2039C48.0752%2033.3427%2047.906%2026.7393%2048.0752%2021.0968C48.1078%2020.0094%2048.4693%2018.9773%2048.5114%2017.9076C48.5661%2016.5158%2048.9123%2016.8415%2051.4741%2016.4087C53.5724%2015.8274%2055.7756%2016.0367%2057.9681%2016.0367C61.4896%2016.0367%2064.9903%2016.0123%2068.4966%2016.2174C70.0828%2016.3102%2071.6934%2016.2102%2073.2823%2016.228C74.9405%2016.2467%2076.5969%2016.5518%2078.2618%2016.6214C80.484%2016.7142%2082.6812%2016.8021%2084.9133%2016.8021C87.1525%2016.8021%2090.3764%2016.4928%2092.5526%2016.4194C93.8768%2016.3747%2093.5943%2021.7948%2093.6794%2022.9146C93.9248%2026.1444%2094%2030.2186%2094%2033.4509C94%2035.3088%2093.7819%2041.1797%2093.7819%2043'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M30%2035C30%2036.1871%2030.2187%2043.3205%2030.2187%2044.5345C30.2187%2046.8984%2030.1856%2049.5525%2030.5467%2051.893C31.4233%2057.5754%2030.8747%2063.5893%2030.8747%2069.3172C30.8747%2071.8369%2031.2303%2074.353%2031.3242%2076.8726C31.4959%2081.4807%2032.2162%2085.3052%2032.5147%2090.7282C32.8968%2097.6671%2032.3462%20101.587%2032.7942%20108.522C33.1104%20113.417%2033.7904%20120.39%2034.9019%20122.131C36.0134%20123.872%2043.3799%20123.762%2044.4688%20123.762C48.0403%20122.857%2055.1129%20123.762%2058.9316%20123.762C66.8081%20123.762%2071.848%20123.261%2079.6994%20123.872C84.4124%20124.24%2089.051%20123.716%2093.7309%20123.54C96.6568%20123.43%20102.98%20124.357%20105.669%20123.146C107.679%20122.241%20107.799%20117.622%20107.799%20113.001C107.799%20108.991%20107.953%20105.124%20108.145%20101.809C108.579%2094.3379%20108.899%2088.7109%20109.378%2080.318C109.979%2069.8038%20110.056%2062.6519%20110.179%2053.6668C110.231%2049.8878%20111%2043.8477%20111%2040.0923'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M58.6807%2065.4473C58.6807%2068.815%2059.2792%2072.1775%2059.5534%2075.5322C60.0362%2081.4398%2059.9898%2087.4023%2059.9898%2093.3264C59.9898%2097.933%2060.208%20102.514%2060.208%20107.121'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M80.9521%2067.1855C80.4987%2076.9134%2080.4748%2086.6247%2080.2479%2096.3484C80.2084%2098.0434%2080.5278%2099.7148%2080.4468%20101.454'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", vs = "" + new URL("loading-ClOqHxNk.gif", import.meta.url).href, ks = "" + new URL("sign_pic-CrpHI1KR.jpg", import.meta.url).href;
  function ws(t) {
    return new Promise((e, i) => {
      const r = window.URL.createObjectURL(t), s = new Image();
      s.src = r, s.addEventListener("load", async () => {
        window.URL.revokeObjectURL(r), e(await ys(s));
      }), s.addEventListener("error", (a) => {
        window.URL.revokeObjectURL(r), i(a);
      });
    });
  }
  function ys(t) {
    return new Promise((e) => {
      const i = document.createElement("canvas"), r = i.getContext("2d"), { naturalWidth: s, naturalHeight: a } = t;
      i.width = s, i.height = a, r == null ? void 0 : r.drawImage(t, 0, 0, s, a), e(i.toDataURL("image/jpeg", 0.8));
    });
  }
  function Cs(t, e = "image/png", i = 1, r = "image.png") {
    return new Promise((s) => {
      t.toBlob((a) => {
        if (!a) throw new Error("Failed to convert canvas to blob");
        const u = new File([
          a
        ], r, {
          type: e
        });
        s(u);
      }, e, i);
    });
  }
  function xs(t) {
    return new Promise((e, i) => {
      const r = new Image();
      r.addEventListener("load", e), r.addEventListener("error", i), r.src = t;
    });
  }
  function Ps() {
    const { getCurrentPDF: t, getPDF: e, getArchive: i, getTrash: r } = Y();
    return Promise.all([
      t(),
      e(),
      i(),
      r()
    ]);
  }
  function Ss() {
    const e = Object.values(Object.assign({
      "/src/assets/img/bg_decorate.svg": bs,
      "/src/assets/img/img_archive.svg": fs,
      "/src/assets/img/img_photo.svg": ms,
      "/src/assets/img/img_search.svg": hs,
      "/src/assets/img/img_trash.svg": gs,
      "/src/assets/img/loading.gif": vs,
      "/src/assets/img/sign_pic.jpg": ks
    })).map(xs);
    return Promise.allSettled(e);
  }
  const $s = {
    install() {
      const t = [
        ps("Gen Jyuu Gothic P", "GenJyuuGothic-P.woff2"),
        Ps(),
        Ss()
      ];
      Promise.all(t).then(() => {
        Ds();
      });
    }
  };
  function Ds() {
    const t = document.querySelector("#loading-screen");
    !t || !(t instanceof HTMLElement) || (t.style.display = "none");
  }
  let js, Ms, _e, Bs, At;
  js = "modulepreload";
  Ms = function(t, e) {
    return new URL(t, e).href;
  };
  _e = {};
  vt = function(e, i, r) {
    let s = Promise.resolve();
    if (i && i.length > 0) {
      let u = function(f) {
        return Promise.all(f.map((C) => Promise.resolve(C).then((k) => ({
          status: "fulfilled",
          value: k
        }), (k) => ({
          status: "rejected",
          reason: k
        }))));
      };
      const b = document.getElementsByTagName("link"), p = document.querySelector("meta[property=csp-nonce]"), v = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
      s = u(i.map((f) => {
        if (f = Ms(f, r), f in _e) return;
        _e[f] = true;
        const C = f.endsWith(".css"), k = C ? '[rel="stylesheet"]' : "";
        if (!!r) for (let x = b.length - 1; x >= 0; x--) {
          const M = b[x];
          if (M.href === f && (!C || M.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${f}"]${k}`)) return;
        const w = document.createElement("link");
        if (w.rel = C ? "stylesheet" : js, C || (w.as = "script"), w.crossOrigin = "", w.href = f, v && w.setAttribute("nonce", v), document.head.appendChild(w), C) return new Promise((x, M) => {
          w.addEventListener("load", x), w.addEventListener("error", () => M(new Error(`Unable to preload CSS for ${f}`)));
        });
      }));
    }
    function a(u) {
      const b = new Event("vite:preloadError", {
        cancelable: true
      });
      if (b.payload = u, window.dispatchEvent(b), !b.defaultPrevented) throw u;
    }
    return s.then((u) => {
      for (const b of u || []) b.status === "rejected" && a(b.reason);
      return e().catch(a);
    });
  };
  Bs = {
    class: "absolute bottom-1 right-3 text-xs text-gray-40 md:bottom-2"
  };
  At = A({
    __name: "SignVersion",
    setup(t) {
      const e = "0.5.1";
      return (i, r) => (n(), _("p", Bs, "ver: " + c(l(e)), 1));
    }
  });
  function re() {
    const t = Qt(), e = be();
    function i(s) {
      t.push({
        name: s
      });
    }
    function r() {
      t.go(-1);
    }
    return {
      goPage: i,
      goBack: r,
      route: e
    };
  }
  function ut() {
    const t = S(false), e = gt(() => vt(() => Promise.resolve().then(() => ye), void 0, import.meta.url)), { goBack: i, goPage: r } = re();
    function s(a) {
      t.value = a;
    }
    return {
      isShowWarnPopup: t,
      SignPopup: e,
      goBack: i,
      goPage: r,
      toggleWarnPopup: s
    };
  }
  const Ts = {
    class: "complete-content content"
  }, zs = {
    class: "title text-center w-full"
  }, Fs = {
    class: "toolbar md:absolute md:right-10 md:top-5"
  }, Ls = {
    class: "complete-content-file"
  }, As = {
    class: "w-fit h-fit py-5 px-3 scale-150 origin-top-left flex flex-col gap-5 md:scale-100 md:py-10 md:px-14"
  }, Es = [
    "src"
  ], Is = {
    class: "text-center"
  }, Zs = {
    class: "flex justify-between md:justify-evenly"
  }, Os = A({
    __name: "CompleteContent",
    setup(t) {
      const e = S("archive"), i = S(false), { currentPDF: r } = nt(Y()), { t: s } = dt(), { isShowWarnPopup: a, SignPopup: u, goPage: b, toggleWarnPopup: p } = ut(), v = gt(() => vt(() => import("../chunks/SignEncryption-DppJ7wPW.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((w) => w.S), __vite__mapDeps([0,1,2]), import.meta.url)), f = U(() => ({
        archive: "prompt.sure_archive_file",
        trash: "prompt.sure_delete_file"
      })[e.value]);
      function C(w) {
        e.value = w, p(true);
      }
      function k() {
        const { addArchive: w, addTrash: x } = Y(), M = e.value === "archive";
        M ? w(r.value) : x(r.value), W(s(M ? "prompt.file_archived_success" : "prompt.file_delete_success")), p(false), !M && b("home");
      }
      function $(w) {
        i.value = w;
      }
      return We(() => mt().updateFilePassword("")), te(() => {
        Y().clearCurrentPDF();
      }), (w, x) => (n(), _("div", Ts, [
        o("h5", zs, c(w.$t("sign_completed")), 1),
        o("ul", Fs, [
          o("li", null, [
            y(O, {
              name: "download",
              class: "w-9 h-9",
              onClick: x[0] || (x[0] = (M) => $(true))
            })
          ]),
          o("li", null, [
            y(O, {
              name: "archive",
              class: "w-9 h-9",
              onClick: x[1] || (x[1] = (M) => C("archive"))
            })
          ]),
          o("li", null, [
            y(O, {
              name: "trash",
              class: "w-9 h-9",
              onClick: x[2] || (x[2] = (M) => C("trash"))
            })
          ])
        ]),
        o("div", Ls, [
          o("div", As, [
            (n(true), _(X, null, at(l(r).canvas, (M) => (n(), _("img", {
              key: M,
              src: M,
              alt: "PDF document"
            }, null, 8, Es))), 128))
          ])
        ]),
        o("button", {
          class: "btn btn-primary md:absolute md:left-10 md:top-7",
          disabled: false,
          onClick: x[3] || (x[3] = (M) => l(b)("home"))
        }, [
          x[6] || (x[6] = o("span", {
            class: "text-4xl font-thin"
          }, "\u2190", -1)),
          yt(c(w.$t("return_home")), 1)
        ]),
        y(At),
        l(a) ? (n(), L(l(u), {
          key: 0,
          title: w.$t("warn")
        }, {
          default: G(() => [
            o("p", Is, c(w.$t(f.value)), 1),
            o("div", Zs, [
              o("button", {
                class: "btn btn-base",
                onClick: x[4] || (x[4] = (M) => l(p)(false))
              }, c(w.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: k
              }, c(w.$t("confirm")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true),
        i.value ? (n(), L(l(v), {
          key: 1,
          file: l(r),
          onCloseEncryptPopup: x[5] || (x[5] = (M) => $(false))
        }, null, 8, [
          "file"
        ])) : Z("", true)
      ]));
    }
  }), qs = N(Os, [
    [
      "__scopeId",
      "data-v-d1394b11"
    ]
  ]), Rs = {
    class: "complete layout step"
  }, Vs = A({
    __name: "index",
    setup(t) {
      return (e, i) => (n(), _("div", Rs, [
        y(qs)
      ]));
    }
  }), Hs = "data:image/svg+xml,%3csvg%20width='156'%20height='156'%20viewBox='0%200%20156%20156'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_73_7059)'%3e%3ccircle%20cx='78'%20cy='74'%20r='67'%20fill='%23B7EC5D'%20stroke='%23333333'%20stroke-width='2'/%3e%3cpath%20d='M72.2%2052.6591C72.8459%2047.6538%2072.1627%2042.8045%2073.0643%2037.8457C73.5607%2036.3566%2078.0278%2036.8528%2078.0278%2036.8528C78.0278%2036.8528%2081.4729%2037.3493%2082.495%2037.3493C83.6642%2037.3493%2082.9339%2047.5016%2082.9913%2048.7656C83.2243%2053.8908%2083.3805%2055.5021%2083.3805%2060.6436C83.3805%2064.1819%2083.18%2066.6342%2083.3805%2068.5389C83.3805%2069.6123%2088.4808%2069.5603%2089.4439%2069.6123C92.8447%2069.7962%2095.6529%2069.9421%2099.2491%2069.9421C102.845%2069.9421%20105.68%2069.7601%20109.794%2069.9421C112.12%2070.0449%20113.587%2069.581%20114.851%2069.9421C115.34%2070.082%20115.254%2074.5758%20115.254%2074.5758C115.254%2074.5758%20114.9%2078.1452%20114.851%2079.9644C114.835%2080.5251%20114.864%2080.9666%20114.149%2080.9666C107.223%2080.9666%20100.271%2081.1452%2093.3471%2080.9555C92.1535%2080.9228%2083.3805%2079.3765%2083.3805%2080.6771C83.3805%2082.6381%2083.5916%2084.7265%2083.2802%2086.657C83.0315%2088.199%2083.18%2089.8302%2083.18%2091.3898C83.18%2093.2583%2083.5608%2094.5717%2083.2802%2096.4153C83.3805%2098.31%2082.7903%20100.993%2083.18%20104.853C83.3805%20106.839%2083.6533%20109.97%2082.7903%20110.833C82.2495%20111.374%2079.302%20110.833%2078.592%20110.833C77.78%20110.833%2077.0104%20111.034%2076.1867%20111.034C75.7049%20111.034%2072.6647%20111.347%2073.0643%20110.388C73.3187%20109.777%2073.1645%20108.848%2073.1645%20108.183C73.1645%20106.122%2072.9275%20103.92%2073.1645%20101.875C73.5682%2098.3939%2072.7283%2094.8761%2073.0643%2091.3898C73.4212%2087.6876%2073.1645%2084.4013%2073.1645%2080.6771C73.1645%2079.8525%2072.3089%2079.3185%2071.4051%2079.3185H67.8022C62.1897%2079.3185%2059.6833%2079.363%2054.0708%2079.363C51.7768%2079.363%2053.1621%2079.3185%2050.8681%2079.3185H43.2832C42.6342%2079.3185%2041.3151%2079.1483%2041.1451%2078.8508C40.8476%2078.3301%2040.7099%2077.7626%2040.8014%2077.0576C41.0019%2075.5126%2040.9678%2073.39%2041.0019%2071.5456C41.0109%2071.0615%2040.8661%2068.9398%2041.503%2068.9398H47.5574C49.7132%2068.9398%2052.6454%2068.7394%2057.7234%2068.7394C62.3095%2068.7394%2067.0091%2069.0439%2071.5542%2068.5389C72.4266%2068.442%2071.955%2063.9746%2071.955%2063.3051C71.955%2059.8085%2071.7527%2056.1261%2072.2%2052.6591Z'%20stroke='%234D4D4D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_73_7059'%20x='0'%20y='0'%20width='156'%20height='156'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_73_7059'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_73_7059'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e", Us = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.8973%2042.2716C21.2028%2043.1178%2022.1265%2043.5723%2025.0593%2043.5723H47.0189C67.1022%2043.5723%2089.5156%2043.9242%20107.696%2043.5723C114.329%2043.4438%20118.962%2044.1761%20124.223%2041.1697C126.179%2040.0522%20128.077%2037.0964%20129.181%2035.1097C130.391%2032.9321%20130.808%2029.873%20129.966%2026.6729C129.024%2023.0934%20126.834%2019.9659%20123.672%2018.5824C118.535%2016.3352%20117.924%2017.1843%20113.756%2016.6737C108.844%2016.072%20104.735%2016.7564%20101.085%2016.7564H92.8207C91.3333%2016.7564%2088.2136%2016.6737%2088.2136%2016.6737C88.2136%2016.6737%2078.4404%2016.3845%2073.6695%2016.3845C68.1405%2016.3845%2062.5234%2016.3787%2057.012%2016.3787C46.5387%2016.3787%2036.5998%2015.5266%2026.161%2016.3787C20.1295%2016.8711%2015.2647%2016.9713%2011.8374%2021.8878C9.44848%2025.3147%209.08273%2029.0498%209.6337%2032.3552C10.2413%2036.0006%2011.8373%2037.8643%2014.1499%2040.0395C14.7658%2040.6189%2015.3852%2041.3566%2017.8973%2042.2716Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M22.8557%2040.3027C22.708%2046.6555%2022.8419%2058.072%2022.8419%2064.4318C22.8419%2071.7728%2022.8419%2079.1137%2022.8419%2086.4547C22.8419%2090.924%2022.8419%2095.3933%2022.8419%2099.8626C22.8419%20103.911%2022.5759%20111.245%2024.5417%20116.094C27.6074%20123.656%2034.6737%20123.511%2041.2895%20123.511C50.5931%20123.511%2059.8967%20123.511%2069.2003%20123.511C74.4607%20123.511%2079.7266%20123.883%2085.0047%20123.883C90.4346%20123.883%2099.3066%20124.95%20104.39%20123.256C110.135%20121.341%20113.391%20120.11%20115.408%20116.094C116.793%20113.339%20117.544%20102.224%20117.164%2096.2612C116.872%2091.669%20117.028%2087.9876%20117.164%2084.4783C117.559%2074.2948%20117.064%2067.1636%20117.522%2058.4475C117.662%2055.8026%20117.019%2053.9924%20117.164%2051.3682C117.3%2048.9218%20116.793%2041.7082%20116.793%2039.3027'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M55.9294%2070.9037C57.1749%2070.837%2059.314%2070.9948%2061.4306%2070.6091C64.1624%2070.1113%2065.6913%2070.3807%2068.032%2070.2553C70.5148%2070.1223%2072.0634%2070.1702%2075.1836%2069.8723C80.1236%2069.4008%2080.4168%2069.7574%2083.4442%2069.5952'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", Ns = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.2158%2092.7849C33.807%2094.5848%2037.064%2099.4962%2042.8388%20102.884C47.0091%20105.33%2050.301%20106.453%2055.4121%20107.669C62.4685%20109.348%2067.8268%20108.854%2073.9589%20108.662C80.5079%20108.457%2082.8997%20105.351%2089.1425%20103.341C91.118%20102.705%2093.2034%20101.975%2094.9794%20100.886C97.2727%2099.4783%2099.2495%2095.1507%20101.291%2093.4103C105.528%2089.7982%20109.179%2085.2878%20110.776%2079.9067C113.024%2072.3335%20113.625%2061.4052%20113.023%2053.511C112.68%2049.0131%20110.526%2045.2867%20108.657%2041.3045C107.684%2039.2331%20106.694%2037.1631%20105.217%2035.3981C104.057%2034.0116%20102.67%2032.8514%20101.395%2031.5763C99.282%2029.463%2096.847%2026.9934%2094.493%2025.233C91.656%2021.9564%2086.894%2020.8771%2083.555%2019.5814C75.8728%2016.6002%2067.4696%2014.9132%2059.1535%2016.7872C53.9676%2017.9559%2048.6984%2020.4413%2044.0402%2022.9368C39.1748%2025.5433%2034.9565%2029.24%2031.1735%2033.244C27.6174%2037.008%2026.3651%2041.0554%2023.4891%2045.3695C22.0727%2047.4941%2020.5128%2054.2416%2020.5128%2056.8804C20.5128%2063.6727%2019.7441%2069.0489%2021.816%2075.4827C23.1147%2079.5155%2025.1002%2083.212%2027.5023%2086.6585C28.9532%2088.7402%2030.5328%2090.8812%2032.2158%2092.7849Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M95.5413%2095.6855C98.4422%2099.4567%20101.772%20100.647%20104.459%20104.574C105.743%20106.452%20110.384%20112.105%20112.339%20113.309C114.61%20114.706%20116.287%20117.973%20119.114%20120.301'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M77.594%2027.3027C79.4731%2027.6685%2081.3555%2028.0267%2083.1563%2028.7522C85.3903%2029.6523%2087.3708%2031.0914%2089.37%2032.4975C92.2609%2034.5308%2095.2121%2036.755%2097.3579%2039.787C100.402%2044.0878%20102.603%2047.9394%20103.756%2053.8685C104.702%2058.7391%20104.737%2063.3802%20103.756%2066.5739'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M37.426%2085.0547C40.3347%2091.2008%2046.2391%2094.2199%2052.0576%2097.2882'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", Ws = {}, Gs = {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "hidden transition-colors md:block",
    title: "list icon"
  };
  function Ks(t, e) {
    return n(), _("svg", Gs, e[0] || (e[0] = [
      o("rect", {
        x: "13",
        y: "12",
        width: "14",
        height: "16",
        rx: "2",
        stroke: "#4D4D4D",
        "stroke-width": "2"
      }, null, -1),
      o("path", {
        d: "M17 16H23",
        stroke: "#4D4D4D",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }, null, -1),
      o("path", {
        d: "M17 20H23",
        stroke: "#4D4D4D",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }, null, -1),
      o("path", {
        d: "M17 24H21",
        stroke: "#4D4D4D",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }, null, -1)
    ]));
  }
  const Ys = N(Ws, [
    [
      "render",
      Ks
    ]
  ]), Xs = {
    class: "sign-file-more bg-white"
  }, Js = [
    "src"
  ], Qs = [
    "innerHTML"
  ], t0 = A({
    __name: "SignFile",
    props: {
      file: {},
      index: {},
      type: {},
      isListStatus: {
        type: Boolean
      },
      keyword: {},
      isSelectAll: {
        type: [
          Boolean,
          String
        ]
      }
    },
    emits: [
      "openWarnPopup",
      "openEncryptPopup",
      "selectFile"
    ],
    setup(t, { emit: e }) {
      const i = e, r = S(false), s = S(false), a = Qt(), { addPDF: u, addArchive: b, addTrash: p, deleteArchive: v, deleteTrash: f, setCurrentPDF: C } = Y(), k = U(() => _i(t.file.updateDate)), $ = U(() => ({
        file: [
          {
            icon: "download",
            feat: () => w()
          },
          {
            icon: "sign",
            feat: () => x()
          },
          {
            icon: "archive",
            feat: () => M()
          },
          {
            icon: "trash",
            feat: () => T()
          }
        ],
        archive: [
          {
            icon: "reduction",
            feat: () => g()
          },
          {
            icon: "trash",
            feat: () => T()
          }
        ],
        trash: [
          {
            icon: "reduction",
            feat: () => h()
          },
          {
            icon: "trash",
            feat: () => D()
          }
        ]
      })[t.type]);
      function w() {
        q(false), i("openEncryptPopup", t.file);
      }
      function x() {
        C({
          ...t.file,
          isUpdate: true
        }), a.push({
          name: "signature"
        });
      }
      function M() {
        b(t.file), i("selectFile", t.file, false);
      }
      function T() {
        p(t.file, t.type), i("selectFile", t.file, false);
      }
      function g() {
        v(t.file.PDFId), i("selectFile", t.file, false), u(t.file);
      }
      function h() {
        f(t.file.PDFId), i("selectFile", t.file, false), u(t.file);
      }
      function D() {
        q(false), i("openWarnPopup", t.file);
      }
      function q(d) {
        r.value = d;
      }
      function j(d) {
        const B = d.toLowerCase().indexOf(t.keyword.toLowerCase()), P = B + t.keyword.length;
        return [
          d.slice(0, B),
          d.slice(B, P),
          d.slice(P)
        ].reduce((K, rt, ot) => rt ? `${K}<span class="${ot === 1 ? "text-primary" : ""}">${rt}</span>` : K, "");
      }
      function m() {
        s.value = !s.value, i("selectFile", t.file, s.value);
      }
      return zt(() => t.isSelectAll, (d) => {
        d !== "mixed" && (s.value = d);
      }), (d, B) => {
        var _a;
        return n(), _("li", {
          class: F([
            "sign-file flex flex-col",
            d.isListStatus ? "md:flex-row" : "md:w-[316px] md:flex-shrink-0 md:h-fit",
            {
              active: s.value
            }
          ]),
          onClick: m
        }, [
          o("div", {
            class: F([
              "transition-opacity md:hidden",
              r.value ? "opacity-100 z-10" : "opacity-0 -z-[1]"
            ])
          }, [
            r.value ? (n(), _(X, {
              key: 0
            }, [
              o("div", {
                class: "mask",
                onClick: B[0] || (B[0] = J((P) => q(false), [
                  "stop"
                ]))
              }),
              o("ul", Xs, [
                (n(true), _(X, null, at($.value, (P) => (n(), _("li", {
                  key: P.icon
                }, [
                  y(O, {
                    name: P.icon,
                    class: "w-10 h-10",
                    onClick: J(P.feat, [
                      "stop"
                    ])
                  }, null, 8, [
                    "name",
                    "onClick"
                  ])
                ]))), 128))
              ])
            ], 64)) : Z("", true)
          ], 2),
          $.value.length ? (n(), L(O, {
            key: 0,
            name: "more",
            class: F(`absolute w-10 h-10 right-2 top-1 ${r.value ? "opacity-0" : "opacity-100"} md:hidden`),
            onClick: B[1] || (B[1] = J((P) => q(true), [
              "stop"
            ]))
          }, null, 8, [
            "class"
          ])) : (n(), L(O, {
            key: 1,
            name: "reduction",
            class: "absolute w-10 h-10 right-2 top-1 md:hidden",
            onClick: J(h, [
              "stop"
            ])
          })),
          o("div", {
            class: F([
              "w-1/3 h-[150px] flex items-center justify-center",
              {
                "md:hidden": d.isListStatus
              }
            ])
          }, [
            o("img", {
              src: (_a = d.file.canvas) == null ? void 0 : _a.at(0),
              class: "border-2 border-gray-20 w-full",
              alt: "file"
            }, null, 8, Js)
          ], 2),
          o("div", {
            class: F([
              "sign-file-content flex-col mt-4 text-center",
              {
                "md:mt-0 md:flex-row md:items-center md:w-full md:text-start": d.isListStatus
              }
            ])
          }, [
            o("div", {
              class: F({
                "md:flex md:flex-row-reverse md:items-center md:gap-1 md:flex-1": d.isListStatus
              })
            }, [
              o("p", {
                class: "flex-1",
                innerHTML: j(d.file.name)
              }, null, 8, Qs),
              o("p", {
                class: F([
                  "text-gray-40",
                  {
                    "md:text-black md:w-[236px]": d.isListStatus
                  }
                ])
              }, c(k.value), 3),
              d.isListStatus ? (n(), L(Ys, {
                key: 0
              })) : Z("", true)
            ], 2),
            o("ul", {
              class: F([
                "flex-row gap-1 hidden justify-center md:flex",
                {
                  "mt-4": !d.isListStatus
                }
              ])
            }, [
              (n(true), _(X, null, at($.value, (P) => (n(), _("li", {
                key: P.icon
              }, [
                y(O, {
                  name: P.icon,
                  class: "w-10 h-10",
                  onClick: J(P.feat, [
                    "stop"
                  ])
                }, null, 8, [
                  "name",
                  "onClick"
                ])
              ]))), 128))
            ], 2)
          ], 2)
        ], 2);
      };
    }
  }), e0 = N(t0, [
    [
      "__scopeId",
      "data-v-1e978b50"
    ]
  ]), i0 = {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "absolute left-1 top-0 transition-colors",
    title: "search icon"
  }, s0 = [
    "stroke"
  ], r0 = [
    "stroke"
  ], o0 = A({
    __name: "SvgSearch",
    props: {
      color: {}
    },
    setup(t) {
      return (e, i) => (n(), _("svg", i0, [
        o("circle", {
          cx: "19",
          cy: "19",
          r: "8.75",
          stroke: e.color,
          "stroke-width": "2.5"
        }, null, 8, s0),
        o("path", {
          d: "M25 26L30 31",
          stroke: e.color,
          "stroke-width": "2.5",
          "stroke-linecap": "round"
        }, null, 8, r0)
      ]));
    }
  }), a0 = {
    class: "w-[90%] relative m-3 max-w-[400px] md:absolute md:-top-16"
  }, n0 = [
    "placeholder"
  ], l0 = A({
    __name: "HomeSearch",
    props: {
      modelValue: {},
      modelModifiers: {}
    },
    emits: [
      "update:modelValue"
    ],
    setup(t) {
      const e = it(t, "modelValue"), i = S("#CCCCCC"), r = U(() => e.value);
      function s() {
        i.value = "#B7EC5D";
      }
      function a() {
        i.value = "#CCCCCC";
      }
      function u() {
        e.value = "";
      }
      return (b, p) => (n(), _("label", a0, [
        y(o0, {
          color: i.value
        }, null, 8, [
          "color"
        ]),
        st(y(O, {
          name: "close_s",
          class: "absolute right-1 top-0 w-10 h-10",
          onClick: u
        }, null, 512), [
          [
            ct,
            r.value
          ]
        ]),
        st(o("input", {
          "onUpdate:modelValue": p[0] || (p[0] = (v) => e.value = v),
          type: "text",
          class: "input pl-12",
          placeholder: b.$t("placeholder.keyword"),
          onFocus: s,
          onBlur: a
        }, null, 40, n0), [
          [
            ee,
            e.value,
            void 0,
            {
              trim: true
            }
          ]
        ])
      ]));
    }
  }), c0 = {
    class: "sign-files"
  }, d0 = {
    class: "hidden md:flex items-end w-full px-4 py-5"
  }, u0 = {
    class: "w-[300px] flex items-center pl-6 gap-5 h-6"
  }, _0 = {
    class: "w-7 h-8 flex items-center justify-center hover:bg-gray-50/15 cursor-pointer transition-colors rounded"
  }, p0 = {
    class: "flex justify-between items-end flex-1"
  }, b0 = {
    class: "flex gap-1"
  }, f0 = {
    key: 1,
    class: "w-[80%] h-[calc(100%-60px)] flex flex-col items-center justify-center"
  }, m0 = {
    class: "text-gray-40 text-center mb-3"
  }, h0 = {
    class: "text-gray-40 text-center"
  }, g0 = {
    class: "text-center"
  }, v0 = {
    class: "flex justify-between md:justify-evenly"
  }, k0 = A({
    __name: "HomeSignFiles",
    props: {
      type: {},
      list: {}
    },
    setup(t) {
      const e = S(""), i = S("list"), r = S(false), s = S(false), a = S(null), u = /* @__PURE__ */ new Set(), { deleteTrash: b, batchDeleteTrash: p } = Y(), { isShowWarnPopup: v, SignPopup: f, toggleWarnPopup: C } = ut(), k = gt(() => vt(() => import("../chunks/SignEncryption-DppJ7wPW.js").then(async (m3) => {
        await m3.__tla;
        return m3;
      }).then((P) => P.S), __vite__mapDeps([0,1,2]), import.meta.url)), $ = U(() => i.value === "list"), w = U(() => $.value && s.value === false), x = U(() => {
        const P = e.value.toLowerCase();
        return t.list.filter(({ name: H }) => H.toLowerCase().includes(P));
      });
      function M(P) {
        i.value = P;
      }
      function T(P) {
        C(true), P && (a.value = P);
      }
      function g() {
        C(false), a.value = null;
      }
      function h(P) {
        r.value = true, a.value = P;
      }
      function D() {
        r.value = false, a.value = null;
      }
      function q() {
        a.value ? (b(a.value.PDFId), j(a.value, false)) : (p(u), d()), g();
      }
      function j(P, H) {
        H ? u.add(P) : u.delete(P), B();
      }
      function m() {
        if (!s.value) {
          u.clear();
          return;
        }
        t.list.forEach((P) => u.add(P));
      }
      function d() {
        u.clear(), B();
      }
      async function B() {
        if (await Wt(), !u.size) {
          s.value = false;
          return;
        }
        s.value = u.size === t.list.length ? true : "mixed";
      }
      return Ge(B), (P, H) => (n(), _("div", c0, [
        y(l0, {
          modelValue: e.value,
          "onUpdate:modelValue": H[0] || (H[0] = (K) => e.value = K)
        }, null, 8, [
          "modelValue"
        ]),
        o("div", d0, [
          o("div", u0, [
            o("div", _0, [
              y(l(Ji), {
                modelValue: s.value,
                "onUpdate:modelValue": H[1] || (H[1] = (K) => s.value = K),
                onChange: m
              }, null, 8, [
                "modelValue"
              ])
            ]),
            s.value ? (n(), L(l(Ki), {
              key: 0,
              type: P.type,
              batch: l(u),
              onClearBatch: d,
              onOpenWarnPopup: T
            }, null, 8, [
              "type",
              "batch"
            ])) : Z("", true),
            o("p", {
              class: F([
                "text-sm",
                {
                  "opacity-0": s.value
                }
              ])
            }, c(w.value ? P.$t("setup_time") : P.$t("batch_operation")), 3)
          ]),
          o("div", p0, [
            o("p", {
              class: F([
                "text-sm h-6",
                {
                  "opacity-0": !w.value
                }
              ])
            }, c(P.$t("project_name")), 3),
            o("div", b0, [
              y(O, {
                name: "list",
                class: F([
                  "w-10 h-10",
                  {
                    "text-primary": $.value
                  }
                ]),
                onClick: H[2] || (H[2] = (K) => M("list"))
              }, null, 8, [
                "class"
              ]),
              y(O, {
                name: "card",
                class: F([
                  "w-10 h-10",
                  {
                    "text-primary": i.value === "card"
                  }
                ]),
                onClick: H[3] || (H[3] = (K) => M("card"))
              }, null, 8, [
                "class"
              ])
            ])
          ])
        ]),
        x.value.length ? (n(), _("ul", {
          key: 0,
          class: F([
            "w-full h-[calc(100%-60px)] overflow-y-auto gap-6 px-4",
            {
              "md:flex md:flex-row md:flex-wrap md:gap-4": !$.value
            }
          ])
        }, [
          (n(true), _(X, null, at(x.value, (K, rt) => (n(), L(e0, {
            key: K.PDFId,
            file: K,
            index: rt,
            type: P.type,
            "is-list-status": $.value,
            keyword: e.value,
            "is-select-all": s.value,
            onOpenWarnPopup: T,
            onOpenEncryptPopup: h,
            onSelectFile: j
          }, null, 8, [
            "file",
            "index",
            "type",
            "is-list-status",
            "keyword",
            "is-select-all"
          ]))), 128))
        ], 2)) : (n(), _("div", f0, [
          H[4] || (H[4] = o("img", {
            src: Ns,
            alt: "Search Icon",
            class: "mb-10"
          }, null, -1)),
          o("h3", m0, c(P.$t("prompt.un_found")), 1),
          o("p", h0, c(P.$t("prompt.try_another")), 1)
        ])),
        l(v) ? (n(), L(l(f), {
          key: 2,
          title: P.$t("warn")
        }, {
          default: G(() => [
            o("p", g0, c(P.$t("prompt.sure_delete_file")), 1),
            o("div", v0, [
              o("button", {
                class: "btn btn-base",
                onClick: g
              }, c(P.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: q
              }, c(P.$t("confirm")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true),
        r.value ? (n(), L(l(k), {
          key: 3,
          file: a.value,
          onCloseEncryptPopup: D
        }, null, 8, [
          "file"
        ])) : Z("", true)
      ]));
    }
  }), oe = N(k0, [
    [
      "__scopeId",
      "data-v-e745338c"
    ]
  ]), w0 = {
    class: "index-archives index-container"
  }, y0 = {
    key: 1,
    class: "h-full flex flex-col items-center justify-center gap-[35px]"
  }, C0 = {
    class: "text-gray-40 text-center"
  }, x0 = {
    class: "mb-2"
  }, P0 = A({
    __name: "HomeArchives",
    setup(t) {
      const { archiveList: e } = nt(Y());
      return (i, r) => (n(), _("div", w0, [
        l(e).length ? (n(), L(oe, {
          key: 0,
          type: "archive",
          list: l(e)
        }, null, 8, [
          "list"
        ])) : (n(), _("div", y0, [
          r[0] || (r[0] = o("img", {
            src: Us,
            alt: "archive icon"
          }, null, -1)),
          o("div", C0, [
            o("h5", x0, c(i.$t("prompt.no_items")), 1),
            o("p", null, c(i.$t("prompt.archived_projects")), 1)
          ])
        ]))
      ]));
    }
  }), ht = "data:image/svg+xml,%3csvg%20width='136'%20height='136'%20viewBox='0%200%20136%20136'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='68'%20cy='68'%20r='67'%20fill='%234D4D4D'%20stroke='%23B7EC5D'%20stroke-width='2'/%3e%3cpath%20d='M62.2%2046.6591C62.8459%2041.6538%2062.1627%2036.8045%2063.0643%2031.8457C63.5607%2030.3566%2068.0278%2030.8528%2068.0278%2030.8528C68.0278%2030.8528%2071.4729%2031.3493%2072.495%2031.3493C73.6642%2031.3493%2072.9339%2041.5016%2072.9913%2042.7656C73.2243%2047.8908%2073.3805%2049.5021%2073.3805%2054.6436C73.3805%2058.1819%2073.18%2060.6342%2073.3805%2062.5389C73.3805%2063.6123%2078.4808%2063.5603%2079.4439%2063.6123C82.8447%2063.7962%2085.6529%2063.9421%2089.2491%2063.9421C92.8453%2063.9421%2095.6801%2063.7601%2099.7943%2063.9421C102.12%2064.0449%20103.587%2063.581%20104.851%2063.9421C105.34%2064.082%20105.254%2068.5758%20105.254%2068.5758C105.254%2068.5758%20104.9%2072.1452%20104.851%2073.9644C104.835%2074.5251%20104.864%2074.9666%20104.149%2074.9666C97.2232%2074.9666%2090.271%2075.1452%2083.3471%2074.9555C82.1535%2074.9228%2073.3805%2073.3765%2073.3805%2074.6771C73.3805%2076.6381%2073.5916%2078.7265%2073.2802%2080.657C73.0315%2082.199%2073.18%2083.8302%2073.18%2085.3898C73.18%2087.2583%2073.5608%2088.5717%2073.2802%2090.4153C73.3805%2092.31%2072.7903%2094.9927%2073.18%2098.8532C73.3805%20100.839%2073.6533%20103.97%2072.7903%20104.833C72.2495%20105.374%2069.302%20104.833%2068.592%20104.833C67.78%20104.833%2067.0104%20105.034%2066.1867%20105.034C65.7049%20105.034%2062.6647%20105.347%2063.0643%20104.388C63.3187%20103.777%2063.1645%20102.848%2063.1645%20102.183C63.1645%20100.122%2062.9275%2097.9198%2063.1645%2095.8751C63.5682%2092.3939%2062.7283%2088.8761%2063.0643%2085.3898C63.4212%2081.6876%2063.1645%2078.4013%2063.1645%2074.6771C63.1645%2073.8525%2062.3089%2073.3185%2061.4051%2073.3185H57.8022C52.1897%2073.3185%2049.6833%2073.363%2044.0708%2073.363C41.7768%2073.363%2043.1621%2073.3185%2040.8681%2073.3185H33.2832C32.6342%2073.3185%2031.3151%2073.1483%2031.1451%2072.8508C30.8476%2072.3301%2030.7099%2071.7626%2030.8014%2071.0576C31.0019%2069.5126%2030.9678%2067.39%2031.0019%2065.5456C31.0109%2065.0615%2030.8661%2062.9398%2031.503%2062.9398H37.5574C39.7132%2062.9398%2042.6454%2062.7394%2047.7234%2062.7394C52.3095%2062.7394%2057.0091%2063.0439%2061.5542%2062.5389C62.4266%2062.442%2061.955%2057.9746%2061.955%2057.3051C61.955%2053.8085%2061.7527%2050.1261%2062.2%2046.6591Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", S0 = {
    class: "index-files index-container"
  }, $0 = {
    key: 1,
    class: "h-full flex flex-col items-center justify-center gap-5"
  }, D0 = {
    class: "text-center"
  }, j0 = A({
    __name: "HomeFiles",
    setup(t) {
      const { goPage: e } = re(), { PDFList: i } = nt(Y());
      return (r, s) => (n(), _("div", S0, [
        l(i).length ? (n(), L(oe, {
          key: 0,
          type: "file",
          list: l(i)
        }, null, 8, [
          "list"
        ])) : (n(), _("div", $0, [
          o("img", {
            src: ht,
            alt: "create file",
            class: "iconScale w-[80px] h-[80] md:w-[136px] md:h-[136px]",
            onClick: s[0] || (s[0] = (a) => l(e)("upload"))
          }),
          o("h3", D0, c(r.$t("prompt.create_file")), 1)
        ]))
      ]));
    }
  }), M0 = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2039.8833C17.5%2039.8833%2020.5%2039.7924%2020.5%2039.7924C20.5%2039.7924%2029.872%2039.5742%2034.0063%2039.5742C39.9053%2039.5742%2045.8044%2039.5742%2051.7035%2039.5742C56.1682%2039.5742%2062.6329%2039.5742%2067.0976%2039.5742C75.7673%2039.5742%2078.4247%2039.7924%2087.0858%2039.7924C100.603%2039.7924%20112.436%2039.8832%20126%2039.8832'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M48.0752%2039C48.0752%2033.3427%2047.906%2026.7393%2048.0752%2021.0968C48.1078%2020.0094%2048.4693%2018.9773%2048.5114%2017.9076C48.5661%2016.5158%2048.9123%2016.8415%2051.4741%2016.4087C53.5724%2015.8274%2055.7756%2016.0367%2057.9681%2016.0367C61.4896%2016.0367%2064.9903%2016.0123%2068.4966%2016.2174C70.0828%2016.3102%2071.6934%2016.2102%2073.2823%2016.228C74.9405%2016.2467%2076.5969%2016.5518%2078.2618%2016.6214C80.484%2016.7142%2082.6812%2016.8021%2084.9133%2016.8021C87.1525%2016.8021%2090.3764%2016.4928%2092.5526%2016.4194C93.8768%2016.3747%2093.5943%2021.7948%2093.6794%2022.9146C93.9248%2026.1444%2094%2030.2186%2094%2033.4509C94%2035.3088%2093.7819%2041.1797%2093.7819%2043'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M30%2035C30%2036.1871%2030.2187%2043.3205%2030.2187%2044.5345C30.2187%2046.8984%2030.1856%2049.5525%2030.5467%2051.893C31.4233%2057.5754%2030.8747%2063.5893%2030.8747%2069.3172C30.8747%2071.8369%2031.2303%2074.353%2031.3242%2076.8726C31.4959%2081.4807%2032.2162%2085.3052%2032.5147%2090.7282C32.8968%2097.6671%2032.3462%20101.587%2032.7942%20108.522C33.1104%20113.417%2033.7904%20120.39%2034.9019%20122.131C36.0134%20123.872%2043.3799%20123.762%2044.4688%20123.762C48.0403%20122.857%2055.1129%20123.762%2058.9316%20123.762C66.8081%20123.762%2071.848%20123.261%2079.6994%20123.872C84.4124%20124.24%2089.051%20123.716%2093.7309%20123.54C96.6568%20123.43%20102.98%20124.357%20105.669%20123.146C107.679%20122.241%20107.799%20117.622%20107.799%20113.001C107.799%20108.991%20107.953%20105.124%20108.145%20101.809C108.579%2094.3379%20108.899%2088.7109%20109.378%2080.318C109.979%2069.8038%20110.056%2062.6519%20110.179%2053.6668C110.231%2049.8878%20111%2043.8477%20111%2040.0923'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M58.6807%2065.4473C58.6807%2068.815%2059.2792%2072.1775%2059.5534%2075.5322C60.0362%2081.4398%2059.9898%2087.4023%2059.9898%2093.3264C59.9898%2097.933%2060.208%20102.514%2060.208%20107.121'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M80.9521%2067.1855C80.4987%2076.9134%2080.4748%2086.6247%2080.2479%2096.3484C80.2084%2098.0434%2080.5278%2099.7148%2080.4468%20101.454'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e", B0 = {
    class: "index-trash index-container"
  }, T0 = {
    key: 1,
    class: "h-full flex flex-col items-center justify-center gap-[35px]"
  }, z0 = {
    class: "text-gray-40 text-center"
  }, F0 = {
    class: "mb-2"
  }, L0 = {
    class: "absolute w-full flex justify-center left-0 -bottom-4 md:-bottom-3"
  }, A0 = {
    class: "index-trash-warn shadow shadow-primary"
  }, E0 = A({
    __name: "HomeTrash",
    setup(t) {
      const { trashList: e } = nt(Y());
      return Y().filterTrash(), (i, r) => (n(), _("div", B0, [
        l(e).length ? (n(), L(oe, {
          key: 0,
          type: "trash",
          list: l(e)
        }, null, 8, [
          "list"
        ])) : (n(), _("div", T0, [
          r[0] || (r[0] = o("img", {
            src: M0,
            alt: "trash icon"
          }, null, -1)),
          o("div", z0, [
            o("h5", F0, c(i.$t("prompt.no_items")), 1),
            o("p", null, c(i.$t("prompt.deleted_projects")), 1)
          ])
        ])),
        o("div", L0, [
          o("p", A0, c(i.$t("prompt.trash_shelf_life")), 1)
        ])
      ]));
    }
  }), I0 = N(E0, [
    [
      "__scopeId",
      "data-v-69281099"
    ]
  ]), Z0 = {
    class: "index-content content"
  }, O0 = {
    class: "title"
  }, q0 = A({
    __name: "HomeContent",
    props: {
      currentTab: {}
    },
    setup(t) {
      const { goPage: e } = re(), i = U(() => ({
        file: "my_files",
        archive: "archived_files",
        trash: "trash_bin"
      })[t.currentTab]), r = U(() => ({
        file: j0,
        archive: P0,
        trash: I0
      })[t.currentTab]);
      return (s, a) => (n(), _("div", Z0, [
        o("img", {
          src: Hs,
          alt: "Add File Svg",
          class: "index-content-add iconScale",
          onClick: a[0] || (a[0] = (u) => l(e)("upload"))
        }),
        o("h5", O0, c(s.$t(i.value)), 1),
        y(At),
        (n(), L(Ke, null, [
          (n(), L(ge(r.value)))
        ], 1024))
      ]));
    }
  }), R0 = N(q0, [
    [
      "__scopeId",
      "data-v-17dc7c8b"
    ]
  ]), V0 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9523%205H14.9997C11.857%205%2010.2856%205%209.30932%205.97631C8.33301%206.95262%208.33301%208.52397%208.33301%2011.6667V28.3333C8.33301%2031.476%208.33301%2033.0474%209.30932%2034.0237C10.2856%2035%2011.857%2035%2014.9997%2035H24.9997C28.1424%2035%2029.7137%2035%2030.69%2034.0237C31.6663%2033.0474%2031.6663%2031.476%2031.6663%2028.3333V14.714C31.6663%2014.0328%2031.6663%2013.6922%2031.5395%2013.3859C31.4126%2013.0796%2031.1717%2012.8387%2030.69%2012.357L24.3093%205.97631C23.8276%205.49459%2023.5867%205.25373%2023.2805%205.12687C22.9742%205%2022.6335%205%2021.9523%205Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'/%3e%3cpath%20d='M15%2021.666L25%2021.666'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M15%2028.334L21.6667%2028.334'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M21.667%205V11.6667C21.667%2013.238%2021.667%2014.0237%2022.1551%2014.5118C22.6433%2015%2023.429%2015%2025.0003%2015H31.667'%20stroke='%23B7EC5D'%20stroke-width='2.5'/%3e%3c/svg%3e", H0 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_73_12300)'%3e%3cpath%20d='M31.6667%207.61914H8.33333C6.49238%207.61914%205%209.11152%205%2010.9525C5%2012.7934%206.49238%2014.2858%208.33333%2014.2858H31.6667C33.5076%2014.2858%2035%2012.7934%2035%2010.9525C35%209.11152%2033.5076%207.61914%2031.6667%207.61914Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.33301%2014.2852V30.9518C8.33301%2031.8359%208.6842%2032.6837%209.30932%2033.3088C9.93444%2033.934%2010.7823%2034.2852%2011.6663%2034.2852H28.333C29.2171%2034.2852%2030.0649%2033.934%2030.69%2033.3088C31.3152%2032.6837%2031.6663%2031.8359%2031.6663%2030.9518V14.2852'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.667%2020.9531H23.3337'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_73_12300'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", U0 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='path-1-inside-1_73_12301'%20fill='white'%3e%3crect%20x='13.333'%20y='4.76172'%20width='13.3333'%20height='8.57143'%20rx='2'/%3e%3c/mask%3e%3crect%20x='13.333'%20y='4.76172'%20width='13.3333'%20height='8.57143'%20rx='2'%20stroke='%23B7EC5D'%20stroke-width='5'%20mask='url(%23path-1-inside-1_73_12301)'/%3e%3cpath%20d='M4.76191%2012.3809H35.2381'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.734%2032.3135L9.87715%2012.6777H30.1228L29.266%2032.3135C29.2251%2033.2495%2028.4545%2033.9873%2027.5176%2033.9873H12.4823C11.5455%2033.9873%2010.7748%2033.2495%2010.734%2032.3135Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'/%3e%3cpath%20d='M17.1426%2019.0469V28.5707'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22.8574%2019.0469V28.5707'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", N0 = {
    class: "index-menu"
  }, W0 = A({
    __name: "HomeMenu",
    props: {
      currentTab: {},
      currentTabModifiers: {}
    },
    emits: [
      "update:currentTab"
    ],
    setup(t) {
      const e = it(t, "currentTab");
      function i(r) {
        e.value = r;
      }
      return (r, s) => (n(), _("ul", N0, [
        o("li", {
          class: F(e.value === "file" ? "bg-white" : "bg-gray-60"),
          onClick: s[0] || (s[0] = (a) => i("file"))
        }, s[3] || (s[3] = [
          o("img", {
            src: V0,
            alt: "file icon"
          }, null, -1)
        ]), 2),
        o("li", {
          class: F(e.value === "archive" ? "bg-white" : "bg-gray-60"),
          onClick: s[1] || (s[1] = (a) => i("archive"))
        }, s[4] || (s[4] = [
          o("img", {
            src: H0,
            alt: "archive icon"
          }, null, -1)
        ]), 2),
        o("li", {
          class: F(e.value === "trash" ? "bg-white" : "bg-gray-60"),
          onClick: s[2] || (s[2] = (a) => i("trash"))
        }, s[5] || (s[5] = [
          o("img", {
            src: U0,
            alt: "trash icon"
          }, null, -1)
        ]), 2)
      ]));
    }
  }), G0 = N(W0, [
    [
      "__scopeId",
      "data-v-9304ff59"
    ]
  ]), K0 = {
    class: "index layout md:-translate-x-10"
  }, Y0 = A({
    __name: "index",
    setup(t) {
      const e = S("file");
      return (i, r) => (n(), _("div", K0, [
        y(G0, {
          "current-tab": e.value,
          "onUpdate:currentTab": r[0] || (r[0] = (s) => e.value = s)
        }, null, 8, [
          "current-tab"
        ]),
        y(R0, {
          "current-tab": e.value
        }, null, 8, [
          "current-tab"
        ])
      ]));
    }
  }), X0 = {
    class: "sign-step-btn"
  }, J0 = [
    "disabled"
  ], Q0 = [
    "disabled"
  ], t2 = A({
    __name: "SignStepBtn",
    props: {
      isPrevDisabled: {
        type: Boolean
      },
      isNextDisabled: {
        type: Boolean
      }
    },
    emits: [
      "prevStep",
      "nextStep"
    ],
    setup(t, { emit: e }) {
      const i = e;
      return (r, s) => (n(), _("div", X0, [
        o("button", {
          class: "btn",
          disabled: r.isPrevDisabled,
          onClick: s[0] || (s[0] = (a) => i("prevStep"))
        }, [
          s[2] || (s[2] = o("span", {
            class: "text-4xl font-thin"
          }, "\u2190", -1)),
          yt(c(r.$t("previous")), 1)
        ], 8, J0),
        o("button", {
          class: "btn btn-primary",
          disabled: r.isNextDisabled,
          onClick: s[1] || (s[1] = (a) => i("nextStep"))
        }, [
          yt(c(r.$t("next_step")), 1),
          s[3] || (s[3] = o("span", {
            class: "text-4xl font-thin"
          }, "\u2192", -1))
        ], 8, Q0)
      ]));
    }
  }), xe = N(t2, [
    [
      "__scopeId",
      "data-v-d68fbba4"
    ]
  ]);
  function Pe(t, e = false) {
    const i = S([]), r = S(-1), s = S(null), a = S({
      height: 0,
      width: 0
    }), u = new ResizeObserver(C), b = U(() => r.value >= t.value.pages), p = ui(async () => {
      r.value && (r.value = 0, await f(0));
    }, 1e3);
    async function v(k) {
      await Ct(100), i.value[k] = true, r.value += 1;
    }
    async function f(k) {
      var _a;
      k >= t.value.pages || (await ((_a = s.value) == null ? void 0 : _a[k].reload()), await Ct(300), await f(k + 1));
    }
    function C(k) {
      k.forEach(({ contentRect: $ }) => {
        a.value.height = $.height, a.value.width = $.width;
      });
    }
    return zt(() => {
      var _a;
      return (_a = t.value) == null ? void 0 : _a.pages;
    }, (k) => {
      k && (r.value = 0, i.value = Array.from({
        length: t.value.pages + 1
      }, () => false), i.value[0] = true);
    }, {
      immediate: true
    }), e && zt(() => {
      var _a, _b;
      return (_b = (_a = s.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.canvasRef;
    }, (k, $) => {
      $ && u.unobserve($), k && u.observe(k);
    }), te(() => {
      u.disconnect();
    }), {
      canvasItems: s,
      loadedState: de(i),
      canvasRect: de(a),
      isCompleted: b,
      handleCanvasLoaded: v,
      handleCanvasReload: p
    };
  }
  function e2(t) {
    let e = false, i = null;
    function r() {
      e = true;
    }
    function s() {
      i && (cancelAnimationFrame(i), i = null);
    }
    function a(v, f, C) {
      if (!t.value) return;
      const { scrollTop: k, scrollLeft: $, scrollHeight: w, scrollWidth: x, clientHeight: M, clientWidth: T } = t.value, g = k + f, h = $ + v;
      if (g < 0 || h < 0 || g + M > w || h + T > x) {
        s();
        return;
      }
      i = requestAnimationFrame(() => {
        var _a;
        (_a = t.value) == null ? void 0 : _a.scrollTo({
          top: g,
          left: h
        }), i2(v, f, C), a(v, f, C);
      });
    }
    function u(v) {
      if (!e || !t.value) return;
      const { clientX: f, clientY: C } = v.e instanceof TouchEvent ? v.e.touches[0] : v.e, k = b(f, C, v.transform);
      let $ = 0, w = 0;
      s(), ((k == null ? void 0 : k.left) || (k == null ? void 0 : k.right)) && ($ = k.left ? -15 : Ft), ((k == null ? void 0 : k.top) || (k == null ? void 0 : k.bottom)) && (w = k.top ? -15 : Ft), !(!$ && !w) && (i = window.requestAnimationFrame(() => {
        a($, w, v.target);
      }));
    }
    function b(v, f, C) {
      if (!t.value) return null;
      const k = t.value.getBoundingClientRect(), { height: $ = 0, width: w = 0, scaleX: x = 0, scaleY: M = 0, target: T } = C ?? {}, g = 20, h = (T == null ? void 0 : T.borderScaleFactor) ?? 1, D = (T == null ? void 0 : T.angle) ?? 0, { width: q, height: j } = s2(w * x, $ * M, D), m = (C == null ? void 0 : C.offsetX) ? (C.offsetX + q) % q : 0, d = (C == null ? void 0 : C.offsetY) ? (C.offsetY + j) % j : 0, B = d / h || g, P = (j - d) / h || g, H = m / h || g, K = (q - m) / h || g, rt = f <= k.top + B, ot = f >= k.bottom - P, R = v <= k.left + H, E = v >= k.right - K;
      return {
        top: rt,
        bottom: ot,
        left: R,
        right: E
      };
    }
    function p() {
      s(), e = false;
    }
    return {
      handlePointerDown: r,
      handlePointerMove: u,
      handlePointerUp: p
    };
  }
  function i2(t, e, i) {
    var _a;
    i && (i.left += t * i.borderScaleFactor, i.top += e * i.borderScaleFactor, i.setCoords(), (_a = i.canvas) == null ? void 0 : _a.renderAll());
  }
  function s2(t, e, i) {
    const r = i * Math.PI / 180, s = Math.abs(t * Math.cos(r)) + Math.abs(e * Math.sin(r)), a = Math.abs(t * Math.sin(r)) + Math.abs(e * Math.cos(r));
    return {
      width: s,
      height: a
    };
  }
  const Se = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0571%2012.4497C23.3897%2011.0975%2027.3055%209.85066%2030.0895%209.27763C33.473%208.5812%2037.1868%208.79672%2040.632%208.83179C50.3019%208.93023%2063.6079%208.78722%2073.2636%208.83178C91.2312%208.9147%2094.1866%208.05573%20104.891%209.27763C115.596%2010.4995%20117.736%2011.7005%20122.467%2017.419C125.474%2021.0532%20126.305%2031.474%20126.305%2035.034V72.6746C126.305%2083.8705%20126.98%2090.4195%20125.976%20105.476C125.339%20109.861%20125.496%20115.414%20123.466%20119.28C119.649%20126.549%20109.409%20130.211%20104.891%20130.211H79.7899C66.8103%20130.211%2060.713%20131.286%2047.6604%20131.286C37.9108%20131.286%2031.8379%20132.176%2025.5713%20128.598C19.9386%20125.382%2017.5389%20122.683%2014.5268%20115.692C12.6731%20111.391%2013.1066%20105.221%2012.9993%20103.325C12.6677%2097.4641%2013.1783%2092.0674%2012.9666%2086.1717C12.4731%2072.4258%2012.1979%2058.4031%2012.9993%2044.6682C13.5373%2035.4483%2012.2062%2028.3163%2015.9875%2019.9778C17.3264%2015.676%2020.7364%2013.7899%2022.0571%2012.4497Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M8%20100.636C18.0405%2089.9465%2024.3907%2080.6421%2031.04%2074.8218C33.7043%2072.4898%2036.6642%2070.634%2039.5746%2068.692C40.9639%2067.765%2042.4043%2066.8967%2044.016%2066.5332C45.5391%2066.1898%2047.1386%2065.7111%2048.6814%2066.3467C51.5019%2067.5086%2053.6106%2070.5957%2055.4618%2073.0095C57.7258%2075.9617%2059.7103%2079.5336%2061.1722%2083.0038C62.4308%2085.9914%2064.2267%2089.9465%2064.2267%2089.9465C64.2267%2089.9465%2067.5687%2095.2586%2068.7449%2096.8226C69.3019%2097.5632%2072.5017%2098.2443%2073.2632%2097.9477C76.6962%2096.6106%2076.7751%2096.8085%2079.2875%2094.1174C80.284%2093.05%2082.7413%2089.9465%2084.8097%2087.731C86.3158%2086.1178%2088.505%2084.0366%2090.8316%2082.7906C93.0767%2081.5882%2096.0472%2081.7048%2098.3644%2082.7906C101.602%2084.3078%20103.226%2086.0187%20105.761%2088.7339C108.578%2091.7509%20111.815%2094.5458%20115.191%2096.8226C116.424%2097.6543%20117.9%2098.4279%20119.259%2099.0213C120.245%2099.4516%20120.955%2099.5609%20123.968%20100.636C127.084%20101.749%20128.5%20103.385%20132%20103.863'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3cpath%20d='M78.9387%2042.3295C77.7432%2044.0368%2077.334%2046.4893%2077.2789%2049.2967C77.2377%2051.3993%2078.0288%2054.6216%2078.0288%2054.6216C78.3143%2056.3035%2081.4702%2059.8159%2082.9152%2060.3076C84.5561%2060.8658%2086.1122%2062.0229%2087.8211%2062.156C90.373%2062.3548%2092.7922%2062.7052%2094.8495%2061.3831C99.8697%2058.1567%20101.101%2055.2912%20101.376%2049.5532C101.522%2046.5053%20100.591%2044.5412%2098.8657%2042.0249C96.1276%2038.0311%2092.8414%2036.6478%2088.2815%2036.3276C85.9331%2036.1627%2083.7024%2037.0765%2081.7968%2038.7987C80.4711%2039.9969%2079.9754%2040.8489%2078.9387%2042.3295Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
  function $e(t, e, i = oi) {
    if (!t) return;
    const { t: r } = se.global, s = t[0];
    if (!e.test(s.type)) {
      W({
        message: r("prompt.file_format_not_match"),
        type: "error"
      });
      return;
    }
    if (s.size > i) {
      W({
        message: r("prompt.file_size_exceed"),
        type: "error"
      });
      return;
    }
    return s;
  }
  const r2 = A({
    __name: "SignatureMask",
    props: {
      isShowMask: {
        type: Boolean
      }
    },
    emits: [
      "close"
    ],
    setup(t, { emit: e }) {
      const i = e;
      return (r, s) => (n(), _("div", {
        class: F([
          "mask bg-black/50 md:hidden",
          r.isShowMask ? "opacity-100 z-1" : "opacity-0 -z-[1]"
        ]),
        onClick: s[0] || (s[0] = (a) => i("close", false))
      }, null, 2));
    }
  }), o2 = {
    class: "title text-center md:hidden"
  }, a2 = {
    class: "signature-popup-content"
  }, n2 = {
    class: "flex justify-center gap-5 md:hidden"
  }, l2 = [
    "disabled"
  ], c2 = A({
    __name: "SignaturePopup",
    props: {
      isShowPopup: {
        type: Boolean
      },
      title: {},
      isDisabled: {
        type: Boolean
      },
      customUseBtnName: {}
    },
    emits: [
      "close",
      "use"
    ],
    setup(t, { emit: e }) {
      const i = e;
      function r() {
        i("close", false);
      }
      return (s, a) => (n(), _(X, null, [
        y(r2, {
          "is-show-mask": s.isShowPopup,
          onClose: r
        }, null, 8, [
          "is-show-mask"
        ]),
        o("div", {
          class: F([
            "signature-popup z-[1]",
            s.isShowPopup ? "translate-y-0 md:block" : "translate-y-[100%] md:hidden"
          ])
        }, [
          o("h5", o2, c(s.title), 1),
          o("div", a2, [
            me(s.$slots, "default", {}, void 0)
          ]),
          o("div", n2, [
            o("button", {
              class: "btn btn-base",
              onClick: r
            }, c(s.$t("cancel")), 1),
            o("button", {
              class: "btn btn-primary",
              disabled: s.isDisabled,
              onClick: a[0] || (a[0] = (u) => i("use"))
            }, c(s.customUseBtnName ?? s.$t("use")), 9, l2)
          ])
        ], 2)
      ], 64));
    }
  }), Et = N(c2, [
    [
      "__scopeId",
      "data-v-b4aa668c"
    ]
  ]), d2 = {
    key: 0,
    class: "signature-list"
  }, u2 = [
    "onClick"
  ], _2 = [
    "src"
  ], p2 = {
    key: 1,
    class: "signature-list justify-center"
  }, b2 = {
    class: "text-secondary text-center"
  }, f2 = {
    class: "btn btn-primary"
  }, m2 = {
    class: "text-center"
  }, h2 = {
    class: "text-gray-40 mb-3 hidden md:block"
  }, g2 = {
    class: "text-gray-40 px-4 text-center"
  }, v2 = {
    class: "text-center"
  }, k2 = {
    class: "flex justify-between md:justify-evenly"
  }, w2 = A({
    __name: "SignatureImage",
    props: {
      currentTool: {},
      currentToolModifiers: {},
      dragOffset: {
        required: true
      },
      dragOffsetModifiers: {}
    },
    emits: ft([
      "useImage"
    ], [
      "update:currentTool",
      "update:dragOffset"
    ]),
    setup(t, { emit: e }) {
      const i = e, r = it(t, "currentTool"), s = it(t, "dragOffset"), a = S(""), u = S(false), { imageList: b } = nt(Vt()), { t: p, locale: v } = dt(), { isShowWarnPopup: f, SignPopup: C, toggleWarnPopup: k } = ut(), { toggleLoading: $ } = mt();
      function w() {
        i("useImage", a.value), j();
      }
      function x(m) {
        a.value = m;
      }
      function M() {
        Vt().deleteImage(a.value), W(p("prompt.picture_delete_success")), k(false), a.value = "";
      }
      function T(m) {
        u.value = m;
      }
      async function g(m) {
        const d = m.target, { files: B } = d;
        await D(B), d.value = "";
      }
      function h(m) {
        const { dataTransfer: d } = m, B = d == null ? void 0 : d.files;
        D(B);
      }
      async function D(m) {
        try {
          const d = $e(m, /.png|.jpg|.jpeg/);
          if (!d) return;
          $({
            isShow: true,
            title: "upload_file",
            content: "file_uploading"
          });
          const B = await ws(d);
          if (b.value.includes(B)) {
            W({
              message: p("prompt.picture_already_exists"),
              type: "error"
            });
            return;
          }
          Vt().addImage(B), T(false), W(p("prompt.picture_add_success"));
        } catch {
          W({
            message: p("prompt.picture_upload_failed"),
            type: "error"
          });
        } finally {
          $({
            isShow: false
          });
        }
      }
      function q(m) {
        var _a, _b;
        const { src: d, offsetHeight: B, offsetWidth: P } = m.target, H = m.offsetX / P, K = m.offsetY / B;
        (_a = m.dataTransfer) == null ? void 0 : _a.setData("text/uri-list", d), (_b = m.dataTransfer) == null ? void 0 : _b.setData("custom/offset", JSON.stringify({
          offsetX: H,
          offsetY: K
        })), s.value = {
          x: m.offsetX,
          y: m.offsetY,
          width: P,
          height: B
        };
      }
      function j() {
        r.value = "";
      }
      return (m, d) => (n(), _(X, null, [
        y(Et, {
          "is-show-popup": r.value === "image",
          title: m.$t("picture_gallery"),
          "is-disabled": !a.value,
          onClose: j,
          onUse: w
        }, {
          default: G(() => [
            l(b).length ? (n(), _("ul", d2, [
              o("img", {
                src: ht,
                alt: "add dark icon",
                width: "60",
                height: "60",
                class: "iconScale mb-3",
                onClick: d[0] || (d[0] = (B) => T(true))
              }),
              (n(true), _(X, null, at(l(b), (B) => (n(), _("li", {
                key: B,
                class: F([
                  "rounded-[20px] relative w-full flex justify-center cursor-pointer h-[180px]",
                  a.value === B ? "bg-primary opacity-70" : "bg-white"
                ]),
                onClick: (P) => x(B)
              }, [
                o("img", {
                  src: B,
                  alt: "image",
                  class: "object-cover rounded-[20px]",
                  onDragstart: q
                }, null, 40, _2),
                st(y(O, {
                  name: "close_s",
                  class: "absolute top-1 right-1 w-8 h-8 text-gray-80 drop-shadow-md",
                  "hover-color": "hover:text-danger",
                  onClick: d[1] || (d[1] = (P) => l(k)(true))
                }, null, 512), [
                  [
                    ct,
                    a.value === B
                  ]
                ])
              ], 10, u2))), 128))
            ])) : (n(), _("div", p2, [
              o("img", {
                src: ht,
                alt: "add dark icon",
                width: "80",
                height: "80",
                class: "iconScale mb-5",
                onClick: d[2] || (d[2] = (B) => T(true))
              }),
              o("h5", b2, c(m.$t("add_picture")), 1)
            ]))
          ]),
          _: 1
        }, 8, [
          "is-show-popup",
          "title",
          "is-disabled"
        ]),
        u.value ? (n(), L(l(C), {
          key: 0,
          title: m.$t("add_picture")
        }, {
          default: G(() => [
            o("div", {
              class: "signature-image-add",
              onDragover: d[3] || (d[3] = J(() => {
              }, [
                "stop",
                "prevent"
              ])),
              onDragenter: d[4] || (d[4] = J(() => {
              }, [
                "stop",
                "prevent"
              ])),
              onDrop: J(h, [
                "stop",
                "prevent"
              ])
            }, [
              d[7] || (d[7] = o("img", {
                src: Se,
                alt: ""
              }, null, -1)),
              o("button", f2, [
                o("input", {
                  type: "file",
                  accept: "application/.jpg, .png",
                  class: "opacity-0 absolute w-[131px] h-[41px] cursor-pointer",
                  onChange: g
                }, null, 32),
                yt(c(m.$t("select_file")), 1)
              ]),
              o("div", m2, [
                o("h5", h2, c(m.$t("prompt.or_drag_file")), 1),
                o("p", g2, c(m.$t("prompt.support_filetype", {
                  type: l(v) === "en-US" ? "JPG and PNG" : "JPG\u3001PNG"
                })), 1)
              ])
            ], 32),
            o("button", {
              class: "btn btn-base",
              onClick: d[5] || (d[5] = (B) => T(false))
            }, c(m.$t("cancel")), 1)
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true),
        l(f) ? (n(), L(l(C), {
          key: 1,
          title: m.$t("warn")
        }, {
          default: G(() => [
            o("p", v2, c(m.$t("prompt.sure_delete_picture")), 1),
            o("div", k2, [
              o("button", {
                class: "btn btn-base",
                onClick: d[6] || (d[6] = (B) => l(k)(false))
              }, c(m.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: M
              }, c(m.$t("delete")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true)
      ], 64));
    }
  }), y2 = N(w2, [
    [
      "__scopeId",
      "data-v-22c02e71"
    ]
  ]), C2 = {
    key: 0,
    class: "signature-list"
  }, x2 = [
    "onClick"
  ], P2 = {
    class: "whitespace-pre-wrap w-full text-ellipsis overflow-hidden"
  }, S2 = {
    class: "inline"
  }, $2 = {
    key: 1,
    class: "signature-list justify-center"
  }, D2 = {
    class: "text-secondary text-center"
  }, j2 = {
    class: "flex justify-between md:justify-evenly"
  }, M2 = [
    "disabled"
  ], B2 = {
    class: "text-center"
  }, T2 = {
    class: "flex justify-between md:justify-evenly"
  }, z2 = A({
    __name: "SignatureLiteral",
    props: {
      currentTool: {},
      currentToolModifiers: {},
      dragOffset: {
        required: true
      },
      dragOffsetModifiers: {}
    },
    emits: ft([
      "useLiteral"
    ], [
      "update:currentTool",
      "update:dragOffset"
    ]),
    setup(t, { emit: e }) {
      const i = e, r = it(t, "currentTool"), s = it(t, "dragOffset"), a = S(""), u = S(false), b = S(""), p = S(false), { literalList: v } = nt(jt()), { t: f } = dt(), { isShowWarnPopup: C, SignPopup: k, toggleWarnPopup: $ } = ut();
      function w() {
        i("useLiteral", a.value, "text"), q();
      }
      function x(j) {
        a.value = j;
      }
      function M() {
        if (v.value.includes(b.value)) {
          W({
            message: f("prompt.text_already_exists"),
            type: "error"
          });
          return;
        }
        jt().addLiteral(b.value), W(f("prompt.text_add_success")), h(false);
      }
      function T() {
        if (a.value === b.value) {
          h(false);
          return;
        }
        if (v.value.includes(b.value)) {
          W({
            message: f("prompt.text_already_exists"),
            type: "error"
          });
          return;
        }
        const { addLiteral: j, deleteLiteral: m } = jt();
        j(b.value), m(a.value), W(f("prompt.text_edit_success")), a.value = b.value, h(false);
      }
      function g() {
        jt().deleteLiteral(a.value), W(f("prompt.text_delete_success")), $(false), a.value = "";
      }
      function h(j, m = false) {
        p.value = m, u.value = j, b.value = m ? a.value : "";
      }
      function D(j) {
        var _a, _b;
        const { textContent: m, offsetHeight: d, offsetWidth: B } = j.target, P = j.offsetX / B, H = j.offsetY / d;
        (_a = j.dataTransfer) == null ? void 0 : _a.setData("text/plain", m ?? ""), (_b = j.dataTransfer) == null ? void 0 : _b.setData("custom/offset", JSON.stringify({
          offsetX: P,
          offsetY: H
        })), s.value = {
          x: j.offsetX,
          y: j.offsetY,
          width: B,
          height: d
        };
      }
      function q() {
        r.value = "";
      }
      return (j, m) => (n(), _(X, null, [
        y(Et, {
          "is-show-popup": r.value === "literal",
          title: j.$t("text_library"),
          "is-disabled": !a.value,
          onClose: q,
          onUse: w
        }, {
          default: G(() => [
            l(v).length ? (n(), _("ul", C2, [
              o("img", {
                src: ht,
                alt: "add dark icon",
                width: "60",
                height: "60",
                class: "iconScale mb-3",
                onClick: m[0] || (m[0] = (d) => h(true))
              }),
              (n(true), _(X, null, at(l(v), (d) => (n(), _("li", {
                key: d,
                class: F([
                  "rounded-[20px] relative w-full flex cursor-pointer px-3 py-4",
                  a.value === d ? "bg-primary opacity-70" : "bg-white"
                ]),
                draggable: "true",
                onDragstart: D,
                onClick: (B) => x(d)
              }, [
                o("p", P2, [
                  o("span", S2, c(d), 1),
                  st(y(O, {
                    name: "edit",
                    class: "w-5 h-5 text-gray-80 inline relative scale-150 -top-[2px]",
                    "hover-color": "hover:text-green-600",
                    onClick: m[1] || (m[1] = (B) => h(true, true))
                  }, null, 512), [
                    [
                      ct,
                      a.value === d
                    ]
                  ])
                ]),
                st(y(O, {
                  name: "close_s",
                  class: "absolute top-1 right-1 w-8 h-8 text-gray-80",
                  "hover-color": "hover:text-danger",
                  onClick: m[2] || (m[2] = (B) => l($)(true))
                }, null, 512), [
                  [
                    ct,
                    a.value === d
                  ]
                ])
              ], 42, x2))), 128))
            ])) : (n(), _("div", $2, [
              o("img", {
                src: ht,
                alt: "add dark icon",
                width: "80",
                height: "80",
                class: "iconScale mb-5",
                onClick: m[3] || (m[3] = (d) => h(true))
              }),
              o("h5", D2, c(j.$t("add_commonly_use_text")), 1)
            ]))
          ]),
          _: 1
        }, 8, [
          "is-show-popup",
          "title",
          "is-disabled"
        ]),
        u.value ? (n(), L(l(k), {
          key: 0,
          title: p.value ? j.$t("edit_text") : j.$t("add_text")
        }, {
          default: G(() => [
            st(o("textarea", {
              "onUpdate:modelValue": m[4] || (m[4] = (d) => b.value = d),
              class: "input my-5 h-[40dvh] rounded-[20px]"
            }, null, 512), [
              [
                ee,
                b.value
              ]
            ]),
            o("div", j2, [
              o("button", {
                class: "btn btn-base",
                onClick: m[5] || (m[5] = (d) => h(false))
              }, c(j.$t("cancel")), 1),
              o("button", {
                class: "btn btn-primary",
                disabled: !b.value,
                onClick: m[6] || (m[6] = () => p.value ? T() : M())
              }, c(j.$t("confirm")), 9, M2)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true),
        l(C) ? (n(), L(l(k), {
          key: 1,
          title: j.$t("warn")
        }, {
          default: G(() => [
            o("p", B2, c(j.$t("prompt.sure_delete_text")), 1),
            o("div", T2, [
              o("button", {
                class: "btn btn-base",
                onClick: m[7] || (m[7] = (d) => l($)(false))
              }, c(j.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: g
              }, c(j.$t("delete")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true)
      ], 64));
    }
  }), F2 = "" + new URL("logo_lightbg_horizontal-BI7KWlpK.png", import.meta.url).href, L2 = {}, A2 = {
    class: "w-full h-full flex items-center justify-center animate-pulse"
  };
  function E2(t, e) {
    return n(), _("div", A2, e[0] || (e[0] = [
      o("img", {
        src: F2,
        class: "animate-bounce w-2/3 max-w-[400px]",
        alt: "logo"
      }, null, -1)
    ]));
  }
  const I2 = N(L2, [
    [
      "render",
      E2
    ]
  ]), Z2 = {
    class: "flex flex-col gap-8 items-center py-8"
  }, O2 = {
    key: 0,
    class: "text-center"
  }, q2 = {
    class: "text-primary mb-[18px]"
  }, R2 = {
    class: "text-gray-40"
  }, V2 = {
    key: 1,
    class: "text-center text-gray-40"
  }, H2 = {
    class: "flex justify-between md:justify-evenly"
  }, U2 = A({
    __name: "SignatureMergePopup",
    props: {
      isShowMergePopup: {
        type: Boolean
      },
      cancelMergeFile: {
        type: Function
      }
    },
    setup(t) {
      const e = S(false), { SignPopup: i, goPage: r } = ut();
      return (s, a) => s.isShowMergePopup ? (n(), L(l(i), {
        key: 0,
        title: s.$t("create_file")
      }, {
        default: G(() => [
          o("div", Z2, [
            a[2] || (a[2] = o("img", {
              src: ke,
              class: "w-[60%]",
              alt: "loading gif"
            }, null, -1)),
            e.value ? (n(), _("div", O2, [
              o("h5", q2, c(s.$t("file_completed")), 1),
              o("p", R2, c(s.$t("prompt.auto_jump_screen")), 1)
            ])) : (n(), _("h5", V2, c(s.$t("merging_files")), 1))
          ]),
          o("div", H2, [
            e.value ? (n(), _("button", {
              key: 0,
              class: "btn btn-primary w-full",
              onClick: a[0] || (a[0] = (u) => l(r)("complete"))
            }, c(s.$t("confirm")), 1)) : (n(), _("button", {
              key: 1,
              class: "btn btn-base w-full",
              onClick: a[1] || (a[1] = (...u) => s.cancelMergeFile && s.cancelMergeFile(...u))
            }, c(s.$t("cancel")), 1))
          ])
        ]),
        _: 1
      }, 8, [
        "title"
      ])) : Z("", true);
    }
  }), N2 = {
    class: "signature-list"
  }, W2 = [
    "onClick"
  ], G2 = {
    key: 1,
    class: "absolute h-28 animate-pulse leading-[112px] text-center"
  }, K2 = {
    class: "highlight absolute left-4 top-2"
  }, Y2 = {
    class: "absolute right-3 top-3 rounded-full bg-danger w-2 h-2"
  }, X2 = A({
    __name: "SignaturePage",
    props: {
      currentTool: {},
      currentToolModifiers: {}
    },
    emits: ft([
      "usePage"
    ], [
      "update:currentTool"
    ]),
    setup(t, { emit: e }) {
      const i = e, r = it(t, "currentTool"), s = S(1), a = S(window.devicePixelRatio), { currentPDF: u } = nt(Y()), b = mt(), { loadedState: p, canvasItems: v, handleCanvasLoaded: f, handleCanvasReload: C } = Pe(u), k = gt(() => vt(() => import("../chunks/@component-hook/pdf-canvas-DoR1skRj.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([3,2]), import.meta.url)), $ = pi(T);
      function w(g) {
        s.value = g, ie() && i("usePage", s.value);
      }
      function x() {
        i("usePage", s.value), M();
      }
      function M() {
        r.value = "";
      }
      function T() {
        a.value = window.devicePixelRatio;
      }
      return te(() => {
        $();
      }), (g, h) => (n(), L(Et, {
        "is-show-popup": r.value === "page",
        title: g.$t("select_page"),
        "is-disabled": false,
        "custom-use-btn-name": g.$t("select"),
        onClose: M,
        onUse: x
      }, {
        default: G(() => [
          o("ul", N2, [
            (n(true), _(X, null, at(l(u).pages, (D) => (n(), _("li", {
              key: D,
              class: F([
                "rounded-[20px] relative w-full flex flex-shrink-0 justify-center py-3 cursor-pointer overflow-hidden min-h-32",
                s.value === D ? "bg-primary opacity-70" : "bg-white"
              ]),
              onClick: (q) => w(D)
            }, [
              l(p)[D - 1] ? (n(), L(l(k), {
                key: 0,
                ref_for: true,
                ref_key: "canvasItems",
                ref: v,
                class: "pointer-events-none",
                file: l(u),
                "canvas-id": "PDF-page-canvas",
                page: D,
                "canvas-class": l(p)[D] ? "border-2 border-gray-20" : void 0,
                "file-scale": a.value * 0.3,
                password: l(b).filePassword,
                "manual-reload": "",
                onLoaded: (q) => l(f)(D),
                onReload: l(C)
              }, null, 8, [
                "file",
                "page",
                "canvas-class",
                "file-scale",
                "password",
                "onLoaded",
                "onReload"
              ])) : Z("", true),
              l(p)[D] ? Z("", true) : (n(), _("div", G2, " Loading... ")),
              o("span", K2, c(`${D}.`), 1),
              st(o("div", Y2, null, 512), [
                [
                  ct,
                  s.value === D
                ]
              ])
            ], 10, W2))), 128))
          ])
        ]),
        _: 1
      }, 8, [
        "is-show-popup",
        "title",
        "custom-use-btn-name"
      ]));
    }
  }), J2 = {
    class: "signature-panel"
  }, Q2 = [
    "disabled"
  ], tr = [
    "disabled"
  ], er = [
    "disabled"
  ], ir = [
    "disabled"
  ], sr = 1.5, rr = 0.5, or = A({
    __name: "SignaturePanel",
    props: ft({
      isActivatedFabric: {
        type: Boolean
      }
    }, {
      fileZoom: {
        required: true
      },
      fileZoomModifiers: {}
    }),
    emits: ft([
      "copyFabric",
      "deleteFabric"
    ], [
      "update:fileZoom"
    ]),
    setup(t) {
      const e = it(t, "fileZoom");
      function i(r) {
        e.value += r;
      }
      return (r, s) => (n(), _("div", J2, [
        o("button", {
          class: "btn-small btn-primary",
          disabled: !r.isActivatedFabric,
          onClick: s[0] || (s[0] = (a) => r.$emit("copyFabric"))
        }, [
          y(O, {
            name: "file",
            class: "w-4.5 h-4.5 text-primary"
          })
        ], 8, Q2),
        o("button", {
          class: "btn-small btn-primary",
          disabled: !r.isActivatedFabric,
          onClick: s[1] || (s[1] = (a) => r.$emit("deleteFabric"))
        }, [
          y(O, {
            name: "trash",
            class: "w-4.5 h-4.5 text-primary"
          })
        ], 8, tr),
        o("button", {
          class: "btn-small btn-primary text-xs",
          disabled: e.value >= sr,
          onClick: s[2] || (s[2] = (a) => i(0.1))
        }, " \u2795 ", 8, er),
        o("button", {
          class: "btn-small btn-primary text-xs",
          disabled: e.value <= rr,
          onClick: s[3] || (s[3] = (a) => i(-0.1))
        }, " \u2796 ", 8, ir)
      ]));
    }
  }), ar = N(or, [
    [
      "__scopeId",
      "data-v-afdfee97"
    ]
  ]), nr = {
    class: "toolbar"
  }, lr = {
    class: "flex justify-between md:justify-evenly"
  }, cr = [
    "disabled"
  ], dr = A({
    __name: "SignatureDrawPopup",
    emits: [
      "close"
    ],
    setup(t, { emit: e }) {
      const i = e, r = S(null), s = S("black"), a = S(false), { t: u } = dt(), b = gt(() => vt(() => Promise.resolve().then(() => ye), void 0, import.meta.url)), p = {
        ctx: null,
        isPainting: false
      };
      function v(T) {
        s.value = T, p.ctx && (p.ctx.strokeStyle = T);
      }
      function f() {
        var _a;
        const T = (_a = r.value) == null ? void 0 : _a.toDataURL("image/png");
        T && (Gt().addSignature(T), i("close"), W(u("signature_add_success")));
      }
      function C() {
        var _a;
        r.value && (ie() ? (r.value.height = 235, r.value.width = 466) : r.value.height = window.innerHeight - 400, p.ctx = (_a = r.value) == null ? void 0 : _a.getContext("2d"), p.ctx && (p.ctx.lineWidth = 2, p.ctx.lineCap = "round"));
      }
      function k(T) {
        if (!r.value) return {
          x: 0,
          y: 0
        };
        const { left: g, top: h } = r.value.getBoundingClientRect();
        if (T.type === "mousemove") {
          const { clientX: q, clientY: j } = T;
          return {
            x: q - g,
            y: j - h
          };
        }
        const { touches: D } = T;
        return {
          x: D[0].clientX - g,
          y: D[0].clientY - h
        };
      }
      function $() {
        var _a;
        p.isPainting = true, (_a = p.ctx) == null ? void 0 : _a.beginPath();
      }
      function w() {
        var _a;
        p.isPainting = false, (_a = p.ctx) == null ? void 0 : _a.closePath();
      }
      function x(T) {
        var _a, _b;
        if (!p.isPainting) return;
        const { x: g, y: h } = k(T);
        (_a = p.ctx) == null ? void 0 : _a.lineTo(g, h), (_b = p.ctx) == null ? void 0 : _b.stroke(), a.value = true;
      }
      function M() {
        var _a;
        r.value && ((_a = p.ctx) == null ? void 0 : _a.clearRect(0, 0, r.value.width, r.value.height), a.value = false);
      }
      return (T, g) => (n(), L(l(b), {
        title: T.$t("create_signature_file"),
        onChildMounted: C
      }, {
        default: G(() => [
          o("ul", nr, [
            o("li", null, [
              y(O, {
                name: s.value === "black" ? "color_black_h" : "color_black",
                class: "w-7 h-7",
                "hover-change-svg": "",
                onClick: g[0] || (g[0] = (h) => v("black"))
              }, null, 8, [
                "name"
              ])
            ]),
            o("li", null, [
              y(O, {
                name: s.value === "blue" ? "color_blue_h" : "color_blue",
                class: "w-7 h-7",
                "hover-change-svg": "",
                onClick: g[1] || (g[1] = (h) => v("blue"))
              }, null, 8, [
                "name"
              ])
            ]),
            o("li", null, [
              y(O, {
                name: s.value === "red" ? "color_red_h" : "color_red",
                class: "w-7 h-7",
                "hover-change-svg": "",
                onClick: g[2] || (g[2] = (h) => v("red"))
              }, null, 8, [
                "name"
              ])
            ]),
            o("li", null, [
              y(O, {
                name: "trash",
                class: "w-7 h-7",
                onClick: M
              })
            ])
          ]),
          o("canvas", {
            ref_key: "canvasDraw",
            ref: r,
            class: "bg-secondary-tint border-2 border-gray-30 rounded-[20px] mb-6",
            onMousedown: J($, [
              "prevent"
            ]),
            onMouseup: w,
            onMouseleave: w,
            onMousemove: x,
            onTouchstart: J($, [
              "prevent"
            ]),
            onTouchend: w,
            onTouchcancel: w,
            onTouchmove: x
          }, null, 544),
          o("div", lr, [
            o("button", {
              class: "btn btn-base",
              onClick: g[3] || (g[3] = (h) => i("close"))
            }, c(T.$t("cancel")), 1),
            o("button", {
              class: "btn btn-primary",
              disabled: !a.value,
              onClick: f
            }, c(T.$t("confirm")), 9, cr)
          ])
        ]),
        _: 1
      }, 8, [
        "title"
      ]));
    }
  }), ur = {
    key: 0,
    class: "signature-list"
  }, _r = [
    "onClick"
  ], pr = [
    "src"
  ], br = {
    key: 1,
    class: "signature-list justify-center"
  }, fr = {
    class: "text-secondary text-center"
  }, mr = {
    class: "text-center"
  }, hr = {
    class: "flex justify-between"
  }, gr = A({
    __name: "SignatureSign",
    props: {
      currentTool: {},
      currentToolModifiers: {},
      dragOffset: {
        required: true
      },
      dragOffsetModifiers: {}
    },
    emits: ft([
      "useSignature"
    ], [
      "update:currentTool",
      "update:dragOffset"
    ]),
    setup(t, { emit: e }) {
      const i = e, r = it(t, "currentTool"), s = it(t, "dragOffset"), a = S(""), u = S(false), { signatureList: b } = nt(Gt()), { t: p } = dt(), { isShowWarnPopup: v, SignPopup: f, toggleWarnPopup: C } = ut();
      function k() {
        i("useSignature", a.value), T();
      }
      function $(g) {
        a.value = g;
      }
      function w() {
        Gt().deleteSignature(a.value), W(p("prompt.signature_delete_success")), C(false), a.value = "";
      }
      function x(g) {
        u.value = g;
      }
      function M(g) {
        var _a, _b;
        const { src: h, offsetHeight: D, offsetWidth: q } = g.target, j = g.offsetX / q, m = g.offsetY / D;
        (_a = g.dataTransfer) == null ? void 0 : _a.setData("text/uri-list", h), (_b = g.dataTransfer) == null ? void 0 : _b.setData("custom/offset", JSON.stringify({
          offsetX: j,
          offsetY: m
        })), s.value = {
          x: g.offsetX,
          y: g.offsetY,
          width: q,
          height: D
        };
      }
      function T() {
        r.value = "";
      }
      return (g, h) => (n(), _(X, null, [
        y(Et, {
          "is-show-popup": r.value === "sign",
          title: g.$t("signature_file"),
          "is-disabled": !a.value,
          onClose: T,
          onUse: k
        }, {
          default: G(() => [
            l(b).length ? (n(), _("ul", ur, [
              o("img", {
                src: ht,
                alt: "add dark icon",
                width: "60",
                height: "60",
                class: "iconScale mb-3",
                onClick: h[0] || (h[0] = (D) => x(true))
              }),
              (n(true), _(X, null, at(l(b), (D) => (n(), _("li", {
                key: D,
                class: F([
                  "rounded-[20px] relative w-full flex justify-center cursor-pointer h-[98px]",
                  a.value === D ? "bg-primary opacity-70" : "bg-white"
                ]),
                onClick: (q) => $(D)
              }, [
                o("img", {
                  src: D,
                  alt: "signature icon",
                  class: "object-contain rounded-[20px]",
                  onDragstart: M
                }, null, 40, pr),
                st(y(O, {
                  name: "close_s",
                  class: "absolute top-1 right-1 w-8 h-8 text-gray-80",
                  "hover-color": "hover:text-danger",
                  onClick: h[1] || (h[1] = (q) => l(C)(true))
                }, null, 512), [
                  [
                    ct,
                    a.value === D
                  ]
                ])
              ], 10, _r))), 128))
            ])) : (n(), _("div", br, [
              o("img", {
                src: ht,
                alt: "",
                width: "80",
                height: "80",
                class: "iconScale mb-5",
                onClick: h[2] || (h[2] = (D) => x(true))
              }),
              o("h5", fr, c(g.$t("add_signature_file")), 1)
            ]))
          ]),
          _: 1
        }, 8, [
          "is-show-popup",
          "title",
          "is-disabled"
        ]),
        u.value ? (n(), L(dr, {
          key: 0,
          onClose: h[3] || (h[3] = (D) => x(false))
        })) : Z("", true),
        l(v) ? (n(), L(l(f), {
          key: 1,
          title: g.$t("warn")
        }, {
          default: G(() => [
            o("p", mr, c(g.$t("prompt.sure_delete_signature")), 1),
            o("div", hr, [
              o("button", {
                class: "btn btn-base",
                onClick: h[4] || (h[4] = (D) => l(C)(false))
              }, c(g.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: w
              }, c(g.$t("delete")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true)
      ], 64));
    }
  }), vr = {
    class: "toolbar signature-toolbar"
  }, kr = A({
    __name: "SignatureToolbar",
    props: {
      currentTool: {},
      currentToolModifiers: {}
    },
    emits: [
      "update:currentTool"
    ],
    setup(t) {
      const e = it(t, "currentTool");
      function i(r) {
        e.value = r;
      }
      return Lt(() => {
        ie() && i("sign");
      }), (r, s) => (n(), _("ul", vr, [
        o("li", {
          onClick: s[0] || (s[0] = (a) => i("sign"))
        }, [
          y(O, {
            name: "sign",
            class: F([
              "w-7 h-7",
              {
                "text-primary": e.value === "sign"
              }
            ])
          }, null, 8, [
            "class"
          ]),
          o("p", null, c(r.$t("sign")), 1)
        ]),
        o("li", {
          onClick: s[1] || (s[1] = (a) => i("image"))
        }, [
          y(O, {
            name: "pic",
            class: F([
              "w-7 h-7",
              {
                "text-primary": e.value === "image"
              }
            ])
          }, null, 8, [
            "class"
          ]),
          o("p", null, c(r.$t("picture")), 1)
        ]),
        o("li", {
          onClick: s[2] || (s[2] = (a) => i("literal"))
        }, [
          y(O, {
            name: "text",
            class: F([
              "w-7 h-7",
              {
                "text-primary": e.value === "literal"
              }
            ])
          }, null, 8, [
            "class"
          ]),
          o("p", null, c(r.$t("text")), 1)
        ]),
        o("li", {
          onClick: s[3] || (s[3] = (a) => i("page"))
        }, [
          y(O, {
            name: "page",
            class: F([
              "w-7 h-7",
              {
                "text-primary": e.value === "page"
              }
            ])
          }, null, 8, [
            "class"
          ]),
          o("p", null, c(r.$t("pages")), 1)
        ])
      ]));
    }
  }), wr = N(kr, [
    [
      "__scopeId",
      "data-v-72e15082"
    ]
  ]), yr = {
    class: "signature-content content flex flex-col"
  }, Cr = {
    key: 0,
    class: "text-xs text-gray-60 md:text-sm"
  }, xr = {
    class: "flex flex-col min-h-0 flex-1 md:flex-row"
  }, Pr = {
    class: "md:border-r-2 md:border-primary md:py-4 md:px-6"
  }, Sr = {
    class: "signature-content-file"
  }, $r = {
    class: "text-center"
  }, Dr = {
    class: "flex justify-between md:justify-evenly"
  }, jr = {
    class: "text-center"
  }, Mr = {
    class: "flex justify-between md:justify-evenly"
  }, Nt = 0.6, Br = A({
    __name: "SignatureContent",
    setup(t) {
      const e = gt(() => vt(() => import("../chunks/@component-hook/pdf-canvas-DoR1skRj.js").then(async (m3) => {
        await m3.__tla;
        return m3;
      }), __vite__mapDeps([3,2]), import.meta.url)), i = S(""), r = S(false), s = S(1), a = S(false), u = S(false), b = ve("fileContainer"), p = S(1), v = S({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }), f = S(false), { currentPDF: C } = nt(Y()), k = mt(), { t: $ } = dt(), { isShowWarnPopup: w, SignPopup: x, goBack: M, goPage: T, toggleWarnPopup: g } = ut(), { handlePointerDown: h, handlePointerMove: D, handlePointerUp: q } = e2(b), { canvasItems: j, loadedState: m, isCompleted: d, canvasRect: B, handleCanvasLoaded: P, handleCanvasReload: H } = Pe(C, true), K = U(() => `${B.value.width * p.value * Nt}px`), rt = U(() => `${B.value.height * p.value * Nt}px`), ot = U(() => j.value ? j.value.at(s.value - 1) : null);
      let R = false, E = null;
      async function Q() {
        It(false), Zt(true), await Ct(), window.requestAnimationFrame(async () => {
          try {
            if (!j.value) return;
            const { setCurrentPDFCanvas: V, addPDF: z, updatePDF: I } = Y(), tt = j.value.map(async ({ canvasRef: et }) => {
              if (!et) return "";
              const bt = await Cs(et);
              return ue(bt, {
                useWebWorker: true
              });
            }), kt = (await Promise.all(tt)).map((et) => et && ue.getDataUrlFromFile(et)), St = await Promise.all(kt);
            if (r.value) {
              r.value = false;
              return;
            }
            V(St);
            const pt = {
              ...C.value,
              PDFBase64: "",
              updateDate: Date.now()
            };
            pt.isUpdate ? I(pt) : z(pt), W($("prompt.file_created_success")), T("complete");
          } catch {
            W({
              message: $("prompt.operation_timed_out"),
              type: "error"
            });
          } finally {
            Zt(false);
          }
        });
      }
      function _t2(V, z) {
        const I = ot.value;
        if (!I) return;
        (z === "text" ? I.addText : I.addImage)(V);
      }
      function je(V) {
        var _a;
        (_a = ot.value) == null ? void 0 : _a.clearActive(), s.value = V, ae({
          top: 0,
          left: 0
        });
      }
      function ae(V) {
        b.value && b.value.scrollTo(V);
      }
      function It(V) {
        var _a;
        (_a = j.value) == null ? void 0 : _a.forEach(({ clearActive: z }) => z()), a.value = V;
      }
      function Zt(V) {
        u.value = V;
      }
      function Me() {
        R = true, M();
      }
      function Be() {
        r.value = true, Zt(false);
      }
      function Te(V) {
        if (!b.value) return;
        const { clientX: z, clientY: I } = V, tt = b.value.getBoundingClientRect(), { x: Pt, y: kt, height: St, width: pt } = v.value, et = I <= tt.top + kt, bt = I >= tt.bottom - (St - kt), le = z <= tt.left + Pt, ze = z >= tt.right - (pt - Pt);
        let qt = 0, Rt = 0;
        Ot(), (le || ze) && (qt = le ? -15 : Ft), (et || bt) && (Rt = et ? -15 : Ft), !(!qt && !Rt) && (E = window.requestAnimationFrame(() => {
          ne(qt, Rt);
        }));
      }
      function ne(V, z) {
        if (!b.value) return;
        const { scrollTop: I, scrollLeft: tt, scrollHeight: Pt, scrollWidth: kt, clientHeight: St, clientWidth: pt } = b.value, et = I + z, bt = tt + V;
        if (et < 0 || bt < 0 || et + St > Pt || bt + pt > kt) {
          Ot();
          return;
        }
        E = requestAnimationFrame(() => {
          ae({
            top: et,
            left: bt
          }), ne(V, z);
        });
      }
      function Ot() {
        E && (cancelAnimationFrame(E), E = null);
      }
      return Yt(() => {
        R && Y().clearCurrentPDF();
      }), (V, z) => {
        var _a, _b;
        return n(), _("div", yr, [
          o("h5", {
            class: F([
              "title text-center",
              {
                "animate-pulse": !l(d)
              }
            ])
          }, [
            yt(c(V.$t("sign_file")) + " ", 1),
            l(d) ? Z("", true) : (n(), _("span", Cr, "(" + c(V.$t("file_uploading")) + ")", 1))
          ], 2),
          o("div", xr, [
            o("div", Pr, [
              y(wr, {
                "current-tool": i.value,
                "onUpdate:currentTool": z[0] || (z[0] = (I) => i.value = I)
              }, null, 8, [
                "current-tool"
              ]),
              y(gr, {
                "current-tool": i.value,
                "onUpdate:currentTool": z[1] || (z[1] = (I) => i.value = I),
                "drag-offset": v.value,
                "onUpdate:dragOffset": z[2] || (z[2] = (I) => v.value = I),
                onUseSignature: _t2
              }, null, 8, [
                "current-tool",
                "drag-offset"
              ]),
              y(y2, {
                "current-tool": i.value,
                "onUpdate:currentTool": z[3] || (z[3] = (I) => i.value = I),
                "drag-offset": v.value,
                "onUpdate:dragOffset": z[4] || (z[4] = (I) => v.value = I),
                onUseImage: _t2
              }, null, 8, [
                "current-tool",
                "drag-offset"
              ]),
              y(z2, {
                "current-tool": i.value,
                "onUpdate:currentTool": z[5] || (z[5] = (I) => i.value = I),
                "drag-offset": v.value,
                "onUpdate:dragOffset": z[6] || (z[6] = (I) => v.value = I),
                onUseLiteral: _t2
              }, null, 8, [
                "current-tool",
                "drag-offset"
              ]),
              y(X2, {
                "current-tool": i.value,
                "onUpdate:currentTool": z[7] || (z[7] = (I) => i.value = I),
                onUsePage: je
              }, null, 8, [
                "current-tool"
              ])
            ]),
            o("div", Sr, [
              o("div", {
                ref: "fileContainer",
                class: "relative w-full h-full overflow-auto touch-pan-x touch-pan-y pt-3 px-2 pb-11 md:pt-6 md:px-8",
                onDragover: J(Te, [
                  "stop",
                  "prevent"
                ]),
                onDragleave: J(Ot, [
                  "stop",
                  "prevent"
                ])
              }, [
                o("div", {
                  style: he({
                    width: K.value,
                    height: rt.value
                  })
                }, [
                  (n(true), _(X, null, at(l(C).pages, (I) => (n(), _(X, {
                    key: I
                  }, [
                    l(m)[I - 1] ? st((n(), L(l(e), {
                      key: 0,
                      ref_for: true,
                      ref_key: "signatureCanvasItems",
                      ref: j,
                      class: "origin-top-left absolute",
                      file: l(C),
                      "file-zoom": p.value,
                      "file-scale": 6.8,
                      page: I,
                      "canvas-scale": Nt,
                      password: l(k).filePassword,
                      "is-drop": "",
                      "manual-reload": "",
                      "close-svg-options": {
                        src: ""
                      },
                      "on-destroy": l(Yt),
                      onLoaded: (tt) => l(P)(I),
                      onReload: l(H),
                      onPointerDown: l(h),
                      onPointerMove: l(D),
                      onPointerUp: l(q),
                      onSelectionCreated: z[8] || (z[8] = (tt) => f.value = true),
                      onSelectionCleared: z[9] || (z[9] = (tt) => f.value = false)
                    }, null, 8, [
                      "file",
                      "file-zoom",
                      "page",
                      "password",
                      "on-destroy",
                      "onLoaded",
                      "onReload",
                      "onPointerDown",
                      "onPointerMove",
                      "onPointerUp"
                    ])), [
                      [
                        ct,
                        s.value === I
                      ]
                    ]) : Z("", true)
                  ], 64))), 128))
                ], 4),
                l(m)[s.value] ? Z("", true) : (n(), L(I2, {
                  key: 0,
                  class: "absolute"
                }))
              ], 544),
              y(ar, {
                "file-zoom": p.value,
                "onUpdate:fileZoom": z[10] || (z[10] = (I) => p.value = I),
                "is-activated-fabric": f.value,
                onCopyFabric: (_a = ot.value) == null ? void 0 : _a.copyActiveFabric,
                onDeleteFabric: (_b = ot.value) == null ? void 0 : _b.deleteActiveFabric
              }, null, 8, [
                "file-zoom",
                "is-activated-fabric",
                "onCopyFabric",
                "onDeleteFabric"
              ])
            ])
          ]),
          y(xe, {
            class: "pb-2.5",
            "is-prev-disabled": !l(d),
            "is-next-disabled": !l(d),
            onNextStep: z[11] || (z[11] = (I) => It(true)),
            onPrevStep: z[12] || (z[12] = (I) => l(g)(true))
          }, null, 8, [
            "is-prev-disabled",
            "is-next-disabled"
          ]),
          y(At),
          l(w) ? (n(), L(l(x), {
            key: 0,
            title: V.$t("warn")
          }, {
            default: G(() => [
              o("p", $r, c(V.$t("prompt.sure_discard_edited_content")), 1),
              o("div", Dr, [
                o("button", {
                  class: "btn btn-base",
                  onClick: z[13] || (z[13] = (I) => l(g)(false))
                }, c(V.$t("not_yet")), 1),
                o("button", {
                  class: "btn btn-primary",
                  onClick: Me
                }, c(V.$t("give_up")), 1)
              ])
            ]),
            _: 1
          }, 8, [
            "title"
          ])) : Z("", true),
          a.value ? (n(), L(l(x), {
            key: 1,
            title: V.$t("create_file")
          }, {
            default: G(() => [
              o("p", jr, c(V.$t("prompt.sure_completed_sign")), 1),
              o("div", Mr, [
                o("button", {
                  class: "btn btn-base",
                  onClick: z[14] || (z[14] = (I) => It(false))
                }, c(V.$t("wait")), 1),
                o("button", {
                  class: "btn btn-primary",
                  onClick: Q
                }, c(V.$t("confirm")), 1)
              ])
            ]),
            _: 1
          }, 8, [
            "title"
          ])) : Z("", true),
          y(U2, {
            "is-show-merge-popup": u.value,
            "cancel-merge-file": Be
          }, null, 8, [
            "is-show-merge-popup"
          ])
        ]);
      };
    }
  }), Tr = N(Br, [
    [
      "__scopeId",
      "data-v-101eeed7"
    ]
  ]), zr = {
    class: "signature layout step"
  }, Fr = A({
    __name: "index",
    setup(t) {
      return (e, i) => (n(), _("div", zr, [
        y(Tr)
      ]));
    }
  }), Lr = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.4481%2010.7981L29.7625%2013.1125C30.0554%2013.4054%2030.0554%2013.8803%2029.7625%2014.1732L16.8025%2027.1333L11.5196%2029.0411L13.4274%2023.7582L26.3875%2010.7981C26.6803%2010.5052%2027.1552%2010.5052%2027.4481%2010.7981Z'%20stroke='%23B7EC5D'%20stroke-width='2.5'/%3e%3c/svg%3e", Ar = {
    class: "upload-content content"
  }, Er = {
    class: "title text-center"
  }, Ir = {
    class: "upload-content-box h-[calc(100%-128px)] w-full my-5"
  }, Zr = {
    class: "flex flex-col gap-2 items-center w-full h-fit"
  }, Or = {
    class: "relative h-fit"
  }, qr = {
    class: "w-full text-ellipsis overflow-hidden whitespace-nowrap text-center"
  }, Rr = {
    class: "text-gray-40"
  }, Vr = {
    class: "w-full flex flex-col gap-4 items-center"
  }, Hr = {
    class: "w-[90%] relative max-w-[400px]"
  }, Ur = {
    key: 0,
    class: "border-dashed border-secondary border rounded-[20px] my-5 p-3 h-[calc(100%-128px)] w-full"
  }, Nr = {
    class: "btn btn-primary"
  }, Wr = {
    class: "text-center"
  }, Gr = {
    class: "text-gray-40 mb-3 hidden md:block"
  }, Kr = {
    class: "text-gray-40 px-4 text-center"
  }, Yr = {
    class: "text-center"
  }, Xr = {
    class: "flex justify-between md:justify-around"
  }, Jr = A({
    __name: "UploadContent",
    setup(t) {
      const e = S(""), i = S(""), r = S(true), s = S(false), a = S(1), { t: u, locale: b } = dt(), { createCanvas: p, deleteCanvas: v, loadFile: f } = ei({
        id: "canvas"
      }), { isShowWarnPopup: C, SignPopup: k, goBack: $, goPage: w, toggleWarnPopup: x } = ut(), { toggleLoading: M, updateFilePassword: T } = mt(), g = gt(() => vt(() => import("../chunks/UploadPassword-B7R4VJtG.js"), __vite__mapDeps([4,1,2,3]), import.meta.url)), h = /.pdf|.png|.jpg|.jpeg/;
      let D = null;
      const q = U(() => !e.value);
      async function j(R) {
        const E = R.target, { files: Q } = E;
        await d(Q), E.value = "";
      }
      function m(R) {
        const { dataTransfer: E } = R, Q = E == null ? void 0 : E.files;
        d(Q);
      }
      function d(R) {
        const E = $e(R, h);
        if (E) return D = E, B(E);
      }
      async function B(R) {
        try {
          const { setCurrentPDF: E } = Y(), { filePassword: Q } = mt();
          M({
            isShow: true,
            title: "upload_file",
            content: "file_uploading"
          }), await Ct();
          const _t2 = await f(R, Q);
          if (!_t2) throw new Error("File content is empty");
          E(_t2), a.value = _t2.pages, W(u("prompt.file_upload_success")), e.value = R.name, i.value = R.name.replace(h, "");
        } catch (E) {
          if (`${E}`.includes("PasswordException")) {
            if (s.value = true, `${E}` != "PasswordException: Incorrect Password") return;
            W({
              message: u("prompt.incorrect_password"),
              type: "error"
            }), T("");
            return;
          }
          W({
            message: u("prompt.file_upload_failed"),
            type: "error"
          });
        } finally {
          M({
            isShow: false
          });
        }
      }
      function P(R = false) {
        s.value = false, !(!R || !D) && B(D);
      }
      function H() {
        e.value = "", Y().clearCurrentPDF(), T("");
      }
      function K() {
        H(), $();
      }
      function rt() {
        r.value = false;
      }
      function ot() {
        r.value = true, Y().setCurrentPDFName(i.value);
      }
      return Lt(p), Yt(v), (R, E) => (n(), _("div", Ar, [
        o("h5", Er, c(R.$t("upload_file")), 1),
        st(o("div", Ir, [
          o("div", Zr, [
            o("div", Or, [
              y(O, {
                name: "close",
                class: "absolute -right-8 -top-2 cursor-pointer w-7 h-7 md:w-9 md:h-9 md:-right-12 md:-top-4",
                onClick: H
              }),
              E[6] || (E[6] = o("canvas", {
                id: "canvas",
                class: "border-2 border-gray-20 w-full"
              }, null, -1))
            ]),
            o("h5", qr, c(e.value), 1),
            o("p", Rr, c(R.$t("page", a.value)), 1)
          ]),
          o("div", Vr, [
            o("p", null, c(R.$t("project_name")), 1),
            o("label", Hr, [
              st(o("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (Q) => i.value = Q),
                type: "text",
                class: "input",
                onFocus: rt,
                onBlur: ot
              }, null, 544), [
                [
                  ee,
                  i.value,
                  void 0,
                  {
                    trim: true
                  }
                ]
              ]),
              o("img", {
                src: Lr,
                alt: "edit icon",
                class: F([
                  "absolute right-1 top-[2px] w-9 h-9 transition-all pointer-events-none",
                  r.value ? "opacity-100" : "opacity-0"
                ])
              }, null, 2)
            ])
          ])
        ], 512), [
          [
            ct,
            e.value
          ]
        ]),
        e.value ? Z("", true) : (n(), _("div", Ur, [
          o("div", {
            class: "upload-content-box justify-center h-full w-full",
            onDragover: E[1] || (E[1] = J(() => {
            }, [
              "stop",
              "prevent"
            ])),
            onDragenter: E[2] || (E[2] = J(() => {
            }, [
              "stop",
              "prevent"
            ])),
            onDrop: J(m, [
              "stop",
              "prevent"
            ])
          }, [
            E[7] || (E[7] = o("img", {
              src: Se,
              alt: "photo icon"
            }, null, -1)),
            o("button", Nr, [
              o("input", {
                type: "file",
                accept: "application/pdf, .jpg, .png",
                class: "opacity-0 absolute w-[131px] h-[41px] cursor-pointer",
                onChange: j
              }, null, 32),
              yt(c(R.$t("select_file")), 1)
            ]),
            o("div", Wr, [
              o("h5", Gr, c(R.$t("prompt.or_drag_file")), 1),
              o("p", Kr, c(R.$t("prompt.support_filetype", {
                type: l(b) === "en-US" ? "PDF, JPG, and PNG" : "PDF\u3001JPG\u3001PNG"
              })), 1)
            ])
          ], 32)
        ])),
        y(xe, {
          "is-next-disabled": q.value,
          onNextStep: E[3] || (E[3] = (Q) => l(w)("signature")),
          onPrevStep: E[4] || (E[4] = (Q) => l(x)(true))
        }, null, 8, [
          "is-next-disabled"
        ]),
        y(At),
        l(C) ? (n(), L(l(k), {
          key: 1,
          title: R.$t("warn")
        }, {
          default: G(() => [
            o("p", Yr, c(R.$t("prompt.give_up_edit")), 1),
            o("div", Xr, [
              o("button", {
                class: "btn btn-base",
                onClick: E[5] || (E[5] = (Q) => l(x)(false))
              }, c(R.$t("not_yet")), 1),
              o("button", {
                class: "btn btn-primary",
                onClick: K
              }, c(R.$t("give_up")), 1)
            ])
          ]),
          _: 1
        }, 8, [
          "title"
        ])) : Z("", true),
        s.value ? (n(), L(l(g), {
          key: 2,
          onClosePassword: P
        })) : Z("", true)
      ]));
    }
  }), Qr = N(Jr, [
    [
      "__scopeId",
      "data-v-e6f557ca"
    ]
  ]), to = {
    class: "upload layout step"
  }, eo = A({
    __name: "index",
    setup(t) {
      return (e, i) => (n(), _("div", to, [
        y(Qr)
      ]));
    }
  }), io = [
    {
      path: "/:catchAll(.*)",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Y0
    },
    {
      path: "/upload",
      name: "upload",
      component: eo
    },
    {
      path: "/signature",
      name: "signature",
      component: Fr
    },
    {
      path: "/complete",
      name: "complete",
      component: Vs
    }
  ], pe = Ye({
    history: Xe(),
    routes: io
  }), so = {
    install(t) {
      t.provide(Ce, pe.currentRoute), t.use(pe);
    }
  };
  if (typeof window < "u") {
    let t = function() {
      var e = document.body, i = document.getElementById("__svg__icons__dom__");
      i || (i = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.id = "__svg__icons__dom__", i.setAttribute("xmlns", "http://www.w3.org/2000/svg"), i.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink")), i.innerHTML = '<symbol fill="none"  viewBox="0 0 136 136" id="icon-ic_add_dark"><circle cx="68" cy="68" r="67" fill="#4D4D4D" stroke="currentColor" stroke-width="2" /><path d="M62.2 46.66c.646-5.006-.037-9.855.864-14.814.497-1.49 4.964-.993 4.964-.993s3.445.496 4.467.496c1.17 0 .439 10.153.496 11.417.233 5.125.39 6.736.39 11.878 0 3.538-.201 5.99 0 7.895 0 1.073 5.1 1.021 6.063 1.073 3.4.184 6.209.33 9.805.33s6.431-.182 10.545 0c2.326.103 3.793-.361 5.057 0 .489.14.403 4.634.403 4.634s-.354 3.57-.403 5.388c-.016.561.013 1.003-.702 1.003-6.926 0-13.878.178-20.802-.011-1.194-.033-9.966-1.58-9.966-.279 0 1.961.21 4.05-.1 5.98-.25 1.542-.101 3.173-.101 4.733 0 1.868.38 3.182.1 5.025.1 1.895-.49 4.578-.1 8.438.2 1.986.473 5.117-.39 5.98-.54.541-3.488 0-4.198 0-.812 0-1.582.201-2.405.201-.482 0-3.522.313-3.123-.646.255-.611.1-1.54.1-2.205 0-2.061-.236-4.263 0-6.308.404-3.481-.436-6.999-.1-10.485.357-3.702.1-6.989.1-10.713 0-.825-.855-1.359-1.759-1.359h-3.603c-5.612 0-8.119.045-13.731.045-2.294 0-.909-.044-3.203-.044h-7.585c-.649 0-1.968-.17-2.138-.468-.297-.52-.435-1.088-.344-1.793.2-1.545.167-3.668.2-5.512.01-.485-.135-2.606.502-2.606h6.054c2.156 0 5.088-.2 10.166-.2 4.587 0 9.286.304 13.831-.201.873-.097.401-4.564.401-5.234 0-3.496-.202-7.179.245-10.646Z" stroke="#B7EC5D" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 156 156" id="icon-ic_add_tint"><g filter="url(#icon-ic_add_tint_a)"><circle cx="78" cy="74" r="67" fill="#B7EC5D" stroke="currentColor" stroke-width="2" /><path d="M72.2 52.66c.646-5.006-.037-9.855.864-14.814.497-1.49 4.964-.993 4.964-.993s3.445.496 4.467.496c1.17 0 .439 10.153.496 11.417.233 5.125.39 6.736.39 11.878 0 3.538-.201 5.99 0 7.895 0 1.073 5.1 1.021 6.063 1.073 3.4.184 6.209.33 9.805.33s6.431-.182 10.545 0c2.326.103 3.793-.361 5.057 0 .489.14.403 4.634.403 4.634s-.354 3.57-.403 5.388c-.016.561.013 1.003-.702 1.003-6.926 0-13.878.178-20.802-.011-1.194-.033-9.966-1.58-9.966-.279 0 1.961.21 4.05-.1 5.98-.25 1.542-.101 3.173-.101 4.733 0 1.868.38 3.182.1 5.025.1 1.895-.49 4.578-.1 8.438.2 1.986.473 5.117-.39 5.98-.54.541-3.488 0-4.198 0-.812 0-1.582.201-2.405.201-.482 0-3.522.313-3.123-.646.255-.611.1-1.54.1-2.205 0-2.061-.237-4.263 0-6.308.404-3.481-.436-6.999-.1-10.485.357-3.702.1-6.989.1-10.713 0-.825-.855-1.359-1.759-1.359h-3.603c-5.612 0-8.119.045-13.731.045-2.294 0-.909-.044-3.203-.044h-7.585c-.649 0-1.968-.17-2.138-.468-.297-.52-.435-1.088-.344-1.793.2-1.545.167-3.668.2-5.512.01-.485-.135-2.606.502-2.606h6.054c2.156 0 5.088-.2 10.166-.2 4.587 0 9.286.304 13.831-.201.873-.097.401-4.564.401-5.234 0-3.496-.202-7.179.245-10.646Z" stroke="#4D4D4D" stroke-width="2.5" stroke-linecap="round" /></g><defs><filter id="icon-ic_add_tint_a" x="0" y="0" width="156" height="156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_73_7059"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_73_7059" result="shape"></feBlend></filter></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_archive"><g clip-path="url(#icon-ic_archive_a)" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M31.667 7.62H8.333a3.333 3.333 0 0 0 0 6.666h23.334a3.333 3.333 0 0 0 0-6.667Z" /><path d="M8.333 14.285v16.667a3.333 3.333 0 0 0 3.333 3.333h16.667a3.333 3.333 0 0 0 3.333-3.333V14.285M16.667 20.953h6.667" /></g><defs><clipPath id="icon-ic_archive_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_archive_h"><g clip-path="url(#icon-ic_archive_h_a)" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M31.667 7.62H8.333a3.333 3.333 0 0 0 0 6.666h23.334a3.333 3.333 0 0 0 0-6.667Z" /><path d="M8.333 14.285v16.667a3.333 3.333 0 0 0 3.333 3.333h16.667a3.333 3.333 0 0 0 3.333-3.333V14.285M16.667 20.953h6.667" /></g><defs><clipPath id="icon-ic_archive_h_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_card"><g clip-path="url(#icon-ic_card_a)" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6.667" y="6.666" width="10.476" height="10.476" rx="3" /><rect x="21.904" y="6.666" width="10.476" height="10.476" rx="3" /><rect x="21.904" y="21.904" width="10.476" height="10.476" rx="3" /><rect x="6.667" y="21.904" width="10.476" height="10.476" rx="3" /></g><defs><clipPath id="icon-ic_card_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_close"><circle cx="20" cy="20" r="12.75" stroke="currentColor" stroke-width="2.5" /><path d="m16 24 7.778-7.778M24 24l-7.778-7.778" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_close_s"><circle cx="20" cy="20" r="10.75" stroke="currentColor" stroke-width="2.5" /><path d="m16 24 7.778-7.778M24 24l-7.778-7.778" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_close_s_white"><circle cx="20" cy="20" r="10.75" stroke="currentColor" stroke-width="2.5" /><path d="m16 24 7.778-7.778M24 24l-7.778-7.778" stroke="#fff" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_color_black"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.81 16.62c-.744.655-1.73 1.74-2.732 3.25-1.318 1.988-2.517 4.497-3.17 7.279a3.5 3.5 0 1 1-6.815-1.6c.868-3.695 2.438-6.963 4.15-9.547 1.676-2.526 3.643-4.628 5.474-5.804 2.095-1.345 5.039-1.88 7.456.128 2.048 1.7 2.665 4.447 2.665 6.944 0 1.056-.145 2.044-.286 2.85-.069.393-.128.704-.181.982-.034.176-.065.338-.094.5a25.154 25.154 0 0 0 1.714-2.268c1.176-1.73 2.263-3.646 3.067-5.16a70.98 70.98 0 0 0 1.255-2.48l.014-.03.002-.005a3.5 3.5 0 0 1 6.34 2.967l-3.17-1.483 3.17 1.484-.01.02-.02.045-.078.162a77.906 77.906 0 0 1-1.321 2.603c-.865 1.629-2.086 3.791-3.461 5.813-1.31 1.925-3.01 4.106-4.902 5.413-.954.66-2.345 1.37-4.013 1.314-1.873-.064-3.346-1.058-4.334-2.384-1.707-2.293-1.513-4.831-1.277-6.433.073-.498.188-1.107.284-1.617.047-.248.089-.472.12-.65.118-.674.181-1.193.181-1.643 0-.244-.01-.46-.027-.65Zm4.865 6.438Z" fill="#000" /></symbol><symbol fill="none"  viewBox="0 0 42 40" id="icon-ic_color_black_h"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 17.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#000" /><path d="M37.011 17.628a64.673 64.673 0 0 1-.95 1.713c-.786 1.368-1.916 3.225-3.213 4.988-1.184 1.611-2.942 3.76-5.09 5.133-1.092.698-2.915 1.607-5.222 1.534-2.646-.084-4.71-1.403-6.034-3.047a8.78 8.78 0 0 1-.703-1.01c-1.033 2.933-4.195 4.42-7.073 3.795-3.1-.674-5.406-3.71-4.552-7.076.865-3.408 2.42-6.39 4.1-8.737 1.62-2.259 3.627-4.3 5.696-5.53 2.463-1.464 6.455-2.332 9.885.304a8.332 8.332 0 0 1 2.3 2.73l.074-.136.536.287m10.246 5.052-10.524-5.83s0 0 0 0 0 0 0 0h0l-.008.016-.001.001-.046.09-.203.384.536.287m10.246 5.052c.114-.213.204-.384.267-.507l-.267.507Zm-10.246-5.052c.463.915 1.096 1.46 1.758 1.774 0 0 0 0 0 0-.811-.459-1.345-1.17-1.663-1.723m-.095-.051.095.05m-.095-.05s0 0 0 0m.095.05 1.884 1.007-1.884-1.006m0 0s0 0 0 0m0 0a5.19 5.19 0 0 1-.324-.668 2.338 2.338 0 0 1-.05-.138l-.009-.004a7.2 7.2 0 0 1-.015.031 5.996 5.996 0 0 0 .303.728m.095.05-.095-.05m10.618 4.341-.006.012-.003.006-.019.037-.001.003-.076.146.105-.204Zm0 0 .002-.003-.002.003Zm.003-.005.002-.003c1.565-3.095.013-6.587-2.961-7.874-2.868-1.242-6.447-.183-7.939 2.76h0l10.898 5.117Zm-10.865-5.18c1.4-.434 2.47-.231 3.272.218-1.568-.737-3.292-.18-3.296-.172l-.002.004.026-.05Zm-.036.085-.006-.003.003-.007.003.01Z" stroke="currentColor" stroke-opacity=".3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" /><path d="M36.495 16.459v-.002c1.283-2.535.028-5.425-2.465-6.505-2.423-1.049-5.417-.139-6.65 2.296l-.001.001m0 0s0 0 0 0h0Zm-9.38 4.073.002.003" fill="#000" stroke="#B7EC5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M28.355 12.903c.098.19.287.475.596.65m-.596-.65.596.65m-.596-.65a1.589 1.589 0 0 1-.074-.165l-.014-.007m.088.172-.088-.172m.684.822c-.237-.113-.464-.314-.62-.663a1.92 1.92 0 0 1-.064-.159m.684.822-.684-.822m-2.91 4.908c-.009-2.145-.59-4.72-2.721-6.359-2.553-1.962-5.601-1.384-7.644-.17-1.758 1.045-3.575 2.86-5.092 4.976-1.56 2.177-2.993 4.935-3.787 8.065-.543 2.137.907 4.166 3.038 4.628 2.11.46 4.328-.736 4.863-2.841.536-2.113 1.525-4.032 2.617-5.556.07-.098.14-.195.211-.288-.04.209-.078.418-.108.61-.217 1.36-.446 3.789 1.326 5.99 1.017 1.265 2.565 2.24 4.54 2.303 1.741.055 3.16-.631 4.081-1.22 1.82-1.164 3.398-3.057 4.556-4.632 1.234-1.68 2.323-3.466 3.09-4.8.34-.593.625-1.11.837-1.505l.014.006.416-.822.008-.016h0v-.002c1-1.976.043-4.265-1.97-5.136-1.977-.856-4.386-.095-5.36 1.831h-.001v.001h0l-.001.002h0l-.011.021-.052.101c-.047.091-.12.23-.214.406l.882.471-.882-.471c-.19.354-.466.86-.81 1.458l.743.426-.742-.426a49.689 49.689 0 0 1-1.826 2.949Zm2.913-4.935.01.033-.013-.007-.004-.012.007-.014Zm1.102.047c-.52-.244-1.092-.06-1.098-.057l.008-.015c.466-.144.823-.077 1.09.072Z" fill="#000" stroke="#000" stroke-width="2" stroke-linecap="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 17.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_color_blue"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.81 16.62c-.744.655-1.73 1.74-2.732 3.25-1.318 1.988-2.517 4.497-3.17 7.279a3.5 3.5 0 1 1-6.815-1.6c.868-3.695 2.438-6.963 4.15-9.547 1.676-2.526 3.643-4.628 5.474-5.804 2.095-1.345 5.039-1.88 7.456.128 2.048 1.7 2.665 4.447 2.665 6.944 0 1.056-.145 2.044-.286 2.85-.069.393-.128.704-.181.982-.034.176-.065.338-.094.5a25.154 25.154 0 0 0 1.714-2.268c1.176-1.73 2.263-3.646 3.067-5.16a70.98 70.98 0 0 0 1.255-2.48l.014-.03.002-.005a3.5 3.5 0 0 1 6.34 2.967l-3.17-1.483 3.17 1.484-.01.02-.02.045-.078.162a77.906 77.906 0 0 1-1.321 2.603c-.865 1.629-2.086 3.791-3.461 5.813-1.31 1.925-3.01 4.106-4.902 5.413-.954.66-2.345 1.37-4.013 1.314-1.873-.064-3.346-1.058-4.334-2.384-1.707-2.293-1.513-4.831-1.277-6.433.073-.498.188-1.107.284-1.617.047-.248.089-.472.12-.65.118-.674.181-1.193.181-1.643 0-.244-.01-.46-.027-.65Zm4.865 6.438Z" fill="#06F" /></symbol><symbol fill="none"  viewBox="0 0 42 40" id="icon-ic_color_blue_h"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 17.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#000" /><path d="M37.011 17.628a64.673 64.673 0 0 1-.95 1.713c-.786 1.368-1.916 3.225-3.213 4.988-1.184 1.611-2.942 3.76-5.09 5.133-1.092.698-2.915 1.607-5.222 1.534-2.646-.084-4.71-1.403-6.034-3.047a8.78 8.78 0 0 1-.703-1.01c-1.033 2.933-4.195 4.42-7.073 3.795-3.1-.674-5.406-3.71-4.552-7.076.865-3.408 2.42-6.39 4.1-8.737 1.62-2.259 3.627-4.3 5.696-5.53 2.463-1.464 6.455-2.332 9.885.304a8.332 8.332 0 0 1 2.3 2.73l.074-.136.536.287m10.246 5.052-10.524-5.83s0 0 0 0 0 0 0 0h0l-.008.016-.001.001-.046.09-.203.384.536.287m10.246 5.052c.114-.213.204-.384.267-.507l-.267.507Zm-10.246-5.052c.463.915 1.096 1.46 1.758 1.774 0 0 0 0 0 0-.811-.459-1.345-1.17-1.663-1.723m-.095-.051.095.05m-.095-.05s0 0 0 0m.095.05 1.884 1.007-1.884-1.006m0 0s0 0 0 0m0 0a5.19 5.19 0 0 1-.324-.668 2.338 2.338 0 0 1-.05-.138l-.009-.004a7.2 7.2 0 0 1-.015.031 5.996 5.996 0 0 0 .303.728m.095.05-.095-.05m10.618 4.341-.006.012-.003.006-.019.037-.001.003-.076.146.105-.204Zm0 0 .002-.003-.002.003Zm.003-.005.002-.003c1.565-3.095.013-6.587-2.961-7.874-2.868-1.242-6.447-.183-7.939 2.76h0l10.898 5.117Zm-10.865-5.18c1.4-.434 2.47-.231 3.272.218-1.568-.737-3.292-.18-3.296-.172l-.002.004.026-.05Zm-.036.085-.006-.003.003-.007.003.01Z" stroke="currentColor" stroke-opacity=".3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" /><path d="M36.495 16.459v-.002c1.283-2.535.028-5.425-2.465-6.505-2.423-1.049-5.417-.139-6.65 2.296l-.001.001m0 0s0 0 0 0h0Zm-9.38 4.073.002.003" fill="#000" stroke="#B7EC5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="m28.257 13.373-.264-.141.214-.406.01.005-.01-.005.052-.1s0 0 0 0l.01-.022h.001v-.002h.001c.975-1.927 3.384-2.688 5.361-1.832 2.013.871 2.97 3.16 1.97 5.136v.002h0l-.008.016-.416.822-.014-.006c-.212.395-.497.912-.837 1.505l-.867-.498.867.498c-.767 1.334-1.856 3.12-3.09 4.8-1.158 1.575-2.736 3.468-4.556 4.632-.92.589-2.34 1.275-4.082 1.22-1.974-.062-3.522-1.038-4.539-2.302-1.772-2.202-1.543-4.63-1.326-5.992.03-.191.068-.4.108-.61-.07.095-.14.19-.211.29-1.092 1.523-2.081 3.442-2.617 5.555-.535 2.105-2.752 3.3-4.863 2.841-2.131-.462-3.581-2.491-3.038-4.628.794-3.13 2.228-5.888 3.787-8.065 1.517-2.117 3.334-3.931 5.092-4.976 2.043-1.214 5.09-1.792 7.644.17 2.131 1.638 2.712 4.214 2.722 6.359a49.689 49.689 0 0 0 1.826-2.949l.867.498-.867-.498c.343-.597.62-1.104.809-1.458l.264.14Zm0 0c.012.02.026.038.041.058a1.362 1.362 0 0 1-.122-.405 1.59 1.59 0 0 0-.012.143.619.619 0 0 0 .093.204Zm-.049-.515a1.58 1.58 0 0 0-.007.022l.007-.022Zm.019-.055-.007.017.004-.01c0-.003.002-.005.003-.007Zm.01-.028-.005.015.004-.012.001-.003Zm1.34-.532c.055.044.105.094.151.147a2.935 2.935 0 0 0-.112.114 1.603 1.603 0 0 0-.61-.249c.18-.034.383-.047.572-.012Zm-1.132.214a.26.26 0 0 1 .043-.03c-.035.03-.064.057-.082.075l.039-.045Zm-.094.112a.488.488 0 0 1-.008.011l.008-.01Zm-.028.042a.27.27 0 0 1 .004-.007l-.006.01.002-.003Zm-.014.022.002-.003-.003.005.001-.002Zm7.194 3.567s0 0 0 0l-.875-.454.875.454Z" fill="#000" stroke="#06F" stroke-width="2" stroke-linecap="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 17.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_color_red"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.811 16.62c-.745.655-1.731 1.74-2.733 3.251-1.318 1.988-2.517 4.498-3.17 7.28a3.5 3.5 0 1 1-6.815-1.601c.868-3.695 2.438-6.963 4.15-9.547 1.676-2.527 3.643-4.629 5.475-5.805 2.094-1.345 5.039-1.88 7.456.128 2.048 1.7 2.665 4.447 2.665 6.944 0 1.057-.145 2.045-.286 2.851-.069.393-.128.705-.181.982-.034.176-.065.338-.094.5a25.143 25.143 0 0 0 1.714-2.268c1.176-1.73 2.263-3.647 3.067-5.161a71.448 71.448 0 0 0 1.255-2.48l.014-.03.003-.005a3.5 3.5 0 0 1 6.34 2.968l-3.17-1.484 3.17 1.485-.01.019-.021.045a37.872 37.872 0 0 1-.364.75 78.372 78.372 0 0 1-1.035 2.017c-.865 1.628-2.085 3.79-3.461 5.813-1.309 1.924-3.01 4.106-4.902 5.413-.954.66-2.345 1.37-4.014 1.314-1.872-.064-3.345-1.058-4.333-2.384-1.707-2.293-1.513-4.832-1.277-6.433.073-.499.188-1.108.284-1.618.046-.248.089-.472.12-.65.118-.675.18-1.194.18-1.644 0-.244-.01-.46-.027-.65Zm4.865 6.439.015-.006a.082.082 0 0 1-.015.006Z" fill="#F93819" /></symbol><symbol fill="none"  viewBox="0 0 42 40" id="icon-ic_color_red_h"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 18.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#000" /><path d="M37.011 18.628a64.673 64.673 0 0 1-.95 1.713c-.786 1.368-1.916 3.225-3.213 4.988-1.184 1.611-2.942 3.76-5.09 5.133-1.092.698-2.915 1.607-5.222 1.534-2.646-.084-4.71-1.403-6.034-3.047a8.78 8.78 0 0 1-.703-1.01c-1.033 2.933-4.195 4.42-7.073 3.795-3.1-.674-5.406-3.71-4.552-7.076.865-3.408 2.42-6.39 4.1-8.737 1.62-2.259 3.627-4.3 5.696-5.53 2.463-1.464 6.455-2.332 9.885.303a8.332 8.332 0 0 1 2.3 2.731l.074-.136.536.287m10.246 5.052-10.524-5.83s0 0 0 0 0 0 0 0h0l-.008.016-.001.001-.046.09-.203.384.536.287m10.246 5.052c.114-.213.204-.384.267-.507l-.267.507Zm-10.246-5.052c.463.915 1.096 1.46 1.758 1.774 0 0 0 0 0 0-.811-.459-1.345-1.17-1.663-1.723m-.095-.051.095.05m-.095-.05s0 0 0 0m.095.05 1.884 1.007-1.884-1.006m0 0s0 0 0 0m0 0a5.19 5.19 0 0 1-.324-.668 2.338 2.338 0 0 1-.05-.138l-.009-.004a7.2 7.2 0 0 1-.015.031 5.996 5.996 0 0 0 .303.728m.095.05-.095-.05m10.618 4.341-.006.012-.003.006-.019.037-.001.003-.076.146.105-.204Zm0 0 .002-.003-.002.003Zm.003-.005.002-.003c1.565-3.095.013-6.587-2.961-7.874-2.868-1.242-6.447-.183-7.939 2.76h0l10.898 5.117Zm-10.865-5.18c1.4-.434 2.47-.231 3.272.218-1.568-.737-3.292-.18-3.296-.172l-.002.004.026-.05Zm-.036.085-.006-.003.003-.007.003.01Z" stroke="currentColor" stroke-opacity=".3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" /><path d="M36.495 17.459v-.002c1.283-2.535.028-5.425-2.465-6.505-2.423-1.049-5.417-.139-6.65 2.296l-.001.001m0 0s0 0 0 0h0Zm-9.38 4.073.002.003" fill="#000" stroke="#B7EC5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M28.355 13.903c.098.19.287.475.596.65m-.596-.65.596.65m-.596-.65a1.589 1.589 0 0 1-.074-.165l-.014-.007m.088.172-.088-.172m.684.822c-.237-.113-.464-.314-.62-.663a1.92 1.92 0 0 1-.064-.159m.684.822-.684-.822m-2.91 4.908c-.009-2.145-.59-4.72-2.721-6.359-2.553-1.962-5.601-1.384-7.644-.17-1.758 1.045-3.575 2.86-5.092 4.976-1.56 2.177-2.993 4.935-3.787 8.065-.543 2.137.907 4.166 3.038 4.628 2.11.46 4.328-.736 4.863-2.841.536-2.113 1.525-4.032 2.617-5.556.07-.098.14-.195.211-.288-.04.209-.078.418-.108.61-.217 1.36-.446 3.789 1.326 5.99 1.017 1.265 2.565 2.24 4.54 2.303 1.741.055 3.16-.631 4.081-1.22 1.82-1.164 3.398-3.057 4.556-4.632 1.234-1.68 2.323-3.466 3.09-4.8.34-.593.625-1.11.837-1.505l.014.006.416-.822.008-.016h0v-.002c1-1.976.043-4.265-1.97-5.136-1.977-.856-4.386-.095-5.36 1.831h-.001v.001h0l-.001.002h0l-.011.021-.052.101c-.047.091-.12.23-.214.406l.882.471-.882-.471c-.19.354-.466.86-.81 1.458l.743.426-.742-.426a49.689 49.689 0 0 1-1.826 2.949Zm2.913-4.935.01.033-.013-.007-.004-.012.007-.014Zm1.102.047c-.52-.244-1.092-.06-1.098-.057l.008-.015c.466-.144.823-.077 1.09.072Z" fill="#000" stroke="#F93819" stroke-width="2" stroke-linecap="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.21 18.169c-.652.53-1.515 1.407-2.392 2.63-1.153 1.61-2.202 3.641-2.774 5.893-.386 1.523-2.035 2.468-3.681 2.11-1.647-.357-2.668-1.882-2.281-3.405.759-2.991 2.132-5.637 3.631-7.728 1.466-2.046 3.187-3.747 4.79-4.7 1.832-1.088 4.409-1.521 6.524.104 1.791 1.377 2.33 3.6 2.33 5.622 0 .855-.126 1.654-.25 2.307-.06.318-.111.57-.158.795l-.082.404a20.61 20.61 0 0 0 1.5-1.835c1.03-1.4 1.98-2.952 2.684-4.178a56.221 56.221 0 0 0 1.098-2.007l.012-.024.002-.004c.717-1.417 2.54-2.029 4.072-1.365 1.532.663 2.192 2.35 1.476 3.767l-2.774-1.201c2.774 1.2 2.773 1.2 2.773 1.201l-.008.016-.018.037a27.038 27.038 0 0 1-.319.606c-.215.403-.524.969-.905 1.633-.757 1.318-1.825 3.068-3.029 4.705-1.145 1.558-2.633 3.324-4.289 4.382-.835.534-2.052 1.11-3.511 1.063-1.639-.051-2.928-.855-3.792-1.93-1.493-1.855-1.324-3.91-1.118-5.207.065-.403.165-.896.249-1.309.04-.2.078-.382.105-.525.103-.547.158-.967.158-1.331 0-.198-.009-.373-.024-.526Zm4.256 5.21.013-.004a.079.079 0 0 1-.013.005Z" fill="#fff" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_download"><path d="M8.571 24.715v5.571a3 3 0 0 0 3 3H28.43a3 3 0 0 0 3-3v-5.571M20 7.5v17m0 0-4.762-4.349M20 24.5l4.762-4.349" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_edit"><path d="m27.448 10.798 2.314 2.315a.75.75 0 0 1 0 1.06l-12.96 12.96-5.282 1.908 1.907-5.283 12.96-12.96a.75.75 0 0 1 1.061 0Z" stroke="currentColor" stroke-width="2.5" /></symbol><symbol  viewBox="0 0 256 256" id="icon-ic_eye_closed"><path fill="none" d="M0 0h256v256H0z" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="m201.15 127.305 22.81 39.508M154.182 149.263l7.114 40.344M101.73 149.244l-7.115 40.35M54.809 127.272l-22.92 39.699M32 104.875C48.811 125.685 79.633 152 128 152s79.188-26.314 96-47.125" /></symbol><symbol  fill="currentColor" viewBox="0 0 1792 1792" id="icon-ic_eye_open"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5T896 1280t-316.5-131.5T448 832q0-121 61-225-229 117-381 353 133 205 333.5 326.5T896 1408t434.5-121.5T1664 960zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5T592 832q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5T896 1536t-499.5-139T20 1029Q0 994 0 960t20-69q140-229 376.5-368T896 384t499.5 139T1772 891q20 35 20 69z" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_file"><path d="M21.952 5H15c-3.143 0-4.714 0-5.69.976-.977.977-.977 2.548-.977 5.69v16.667c0 3.143 0 4.714.976 5.69C10.286 35 11.857 35 15 35h10c3.143 0 4.715 0 5.691-.976.976-.977.976-2.548.976-5.69v-13.62c0-.681 0-1.022-.127-1.328-.126-.306-.367-.547-.849-1.029l-6.38-6.38c-.482-.482-.723-.723-1.03-.85C22.974 5 22.634 5 21.953 5Z" stroke="currentColor" stroke-width="2.5" /><path d="M15 21.666h10M15 28.334h6.667" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /><path d="M21.667 5v6.667c0 1.571 0 2.357.488 2.845S23.43 15 25 15h6.667" stroke="currentColor" stroke-width="2.5" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_file_h"><path d="M21.952 5H15c-3.143 0-4.714 0-5.69.976-.977.977-.977 2.548-.977 5.69v16.667c0 3.143 0 4.714.976 5.69C10.286 35 11.857 35 15 35h10c3.143 0 4.715 0 5.691-.976.976-.977.976-2.548.976-5.69v-13.62c0-.681 0-1.022-.127-1.328-.126-.306-.367-.547-.849-1.029l-6.38-6.38c-.482-.482-.723-.723-1.03-.85C22.974 5 22.634 5 21.953 5Z" stroke="currentColor" stroke-width="2.5" /><path d="M15 21.666h10M15 28.334h6.667" stroke="#B7EC5D" stroke-width="2.5" stroke-linecap="round" /><path d="M21.667 5v6.667c0 1.571 0 2.357.488 2.845S23.43 15 25 15h6.667" stroke="#B7EC5D" stroke-width="2.5" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_file_item"><rect x="13" y="12" width="14" height="16" rx="2" stroke="currentColor" stroke-width="2" /><path d="M17 16h6M17 20h6M17 24h4" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_file_item_h"><rect x="13" y="12" width="14" height="16" rx="2" stroke="currentColor" stroke-width="2" /><path d="M17 16h6M17 20h6M17 24h4" stroke="#B7EC5D" stroke-width="2" stroke-linecap="round" /></symbol><symbol  viewBox="0 0 98 96" id="icon-ic_github"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></symbol><symbol  viewBox="0 0 80 80" fill="currentColor" id="icon-ic_global"><path d="M40 5C20.701 5 5 20.701 5 40s15.701 35 35 35 35-15.701 35-35S59.299 5 40 5zM9.071 42h12.46c.132 4.655.725 9.039 1.695 13H12.883A30.773 30.773 0 0 1 9.07 42zM42 21V9.332c3.533 1.16 6.998 5.321 9.381 11.668H42zm10.653 4c1.016 3.804 1.672 8.177 1.815 13H42V25h10.653zM38 9.332V21h-9.381C31.002 14.653 34.467 10.493 38 9.332zM38 25v13H25.532c.143-4.823.799-9.196 1.815-13H38zM21.53 38H9.071a30.773 30.773 0 0 1 3.812-13h10.343c-.97 3.961-1.563 8.345-1.696 13zm4.002 4H38v13H27.347c-1.016-3.804-1.672-8.177-1.815-13zM38 59v11.668c-3.533-1.16-6.998-5.321-9.381-11.668H38zm4 11.668V59h9.381C48.998 65.347 45.533 69.507 42 70.668zM42 55V42h12.468c-.143 4.823-.799 9.196-1.815 13H42zm16.47-13h12.459a30.773 30.773 0 0 1-3.812 13H56.774c.97-3.961 1.563-8.345 1.696-13zm0-4c-.133-4.655-.726-9.039-1.696-13h10.343a30.773 30.773 0 0 1 3.812 13h-12.46zm5.999-17h-8.852c-1.373-4.085-3.181-7.57-5.315-10.233A31.125 31.125 0 0 1 64.47 21zM29.698 10.767C27.564 13.43 25.756 16.915 24.383 21h-8.852a31.125 31.125 0 0 1 14.167-10.233zM15.53 59h8.852c1.373 4.085 3.181 7.57 5.315 10.233A31.125 31.125 0 0 1 15.53 59zm34.771 10.233c2.134-2.663 3.942-6.148 5.315-10.233h8.852a31.125 31.125 0 0 1-14.167 10.233z" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_help"><path fill-rule="evenodd" clip-rule="evenodd" d="M33.5 19c0 7.456-6.044 13.5-13.5 13.5S6.5 26.456 6.5 19 12.544 5.5 20 5.5 33.5 11.544 33.5 19Zm2.5 0c0 8.837-7.163 16-16 16S4 27.837 4 19 11.163 3 20 3s16 7.163 16 16Zm-15.48 3.249a1.52 1.52 0 0 0 .426-.809c.105-.479.3-.95.584-1.415.285-.479.592-.913.921-1.302.345-.39.681-.787 1.01-1.19.33-.42.607-.884.832-1.393.225-.51.337-1.034.337-1.573 0-1.317-.42-2.343-1.258-3.077-.823-.748-1.917-1.123-3.28-1.123-1.437 0-2.724.494-3.862 1.483a.854.854 0 0 0-.293.651c0 .3.105.546.315.741.21.18.45.27.719.27h.022c.27-.015.524-.105.764-.27.629-.479 1.31-.719 2.044-.719.704 0 1.25.21 1.64.63.404.419.606.95.606 1.594 0 .42-.112.839-.337 1.258-.225.42-.502.823-.831 1.213-.315.39-.637.786-.966 1.19-.33.404-.621.869-.876 1.393-.314.644-.472 1.228-.472 1.752 0 .27.105.501.315.696.24.225.532.337.876.337.3 0 .554-.112.764-.337Zm-2 5.525c.345.345.772.517 1.28.517.495 0 .907-.172 1.236-.517.345-.344.517-.778.517-1.302 0-.54-.172-.989-.517-1.348a1.578 1.578 0 0 0-1.235-.561c-.51 0-.936.18-1.28.539-.33.359-.495.808-.495 1.347 0 .54.165.981.494 1.325Z" fill="#B7EC5D" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_help_h"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 35c8.837 0 16-7.163 16-16S28.837 3 20 3 4 10.163 4 19s7.163 16 16 16Zm.52-12.751a1.52 1.52 0 0 0 .426-.809c.105-.479.3-.95.584-1.415.285-.479.592-.913.921-1.302.345-.39.681-.787 1.01-1.19.33-.42.607-.884.832-1.393.225-.51.337-1.034.337-1.573 0-1.317-.42-2.343-1.258-3.077-.823-.748-1.917-1.123-3.28-1.123-1.437 0-2.724.494-3.862 1.483a.854.854 0 0 0-.293.651c0 .3.105.546.315.741.21.18.45.27.719.27h.022c.27-.015.524-.105.764-.27.629-.479 1.31-.719 2.044-.719.704 0 1.25.21 1.64.63.404.419.606.95.606 1.594 0 .42-.112.839-.337 1.258-.225.42-.502.823-.831 1.213-.315.39-.637.786-.966 1.19-.33.404-.621.869-.876 1.393-.314.644-.472 1.228-.472 1.752 0 .27.105.501.315.696.24.225.532.337.876.337.3 0 .554-.112.764-.337Zm-2 5.525c.345.345.772.517 1.28.517.495 0 .907-.172 1.236-.517.345-.344.517-.778.517-1.302 0-.54-.172-.989-.517-1.348a1.578 1.578 0 0 0-1.235-.561c-.51 0-.936.18-1.28.539-.33.359-.495.808-.495 1.347 0 .54.165.981.494 1.325Z" fill="#B7EC5D" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_list"><g clip-path="url(#icon-ic_list_a)" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6.667" y="7.619" width="26.667" height="9.524" rx="3" /><rect x="6.667" y="21.904" width="26.667" height="9.524" rx="3" /></g><defs><clipPath id="icon-ic_list_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_more"><g clip-path="url(#icon-ic_more_a)" fill="#4D4D4D"><circle cx="20" cy="20" r="3" /><circle cx="10" cy="20" r="3" /><circle cx="30" cy="20" r="3" /></g><defs><clipPath id="icon-ic_more_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_more_h"><g clip-path="url(#icon-ic_more_h_a)" fill="#B7EC5D"><circle cx="20" cy="20" r="3" /><circle cx="10" cy="20" r="3" /><circle cx="30" cy="20" r="3" /></g><defs><clipPath id="icon-ic_more_h_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_page"><mask id="icon-ic_page_a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 5a4 4 0 0 0-4 4v21a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7.593c0-1.193.805-2.197 1.9-2.5A4.014 4.014 0 0 0 32.037 5H11Z" /></mask><path d="m32.9 5.093.666 2.41-.128-4.851-.538 2.441ZM9.5 9A1.5 1.5 0 0 1 11 7.5v-5A6.5 6.5 0 0 0 4.5 9h5Zm0 10.5V9h-5v10.5h5Zm0 10.5V19.5h-5V30h5Zm1.5 1.5A1.5 1.5 0 0 1 9.5 30h-5a6.5 6.5 0 0 0 6.5 6.5v-5Zm16 0H11v5h16v-5Zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v5a6.5 6.5 0 0 0 6.5-6.5h-5Zm5 0V17.185h-5V30h5Zm0-12.815V7.593h-5v9.592h5Zm0-9.592a.09.09 0 0 1 .005-.031.096.096 0 0 1 .062-.059l-1.333-4.82a5.094 5.094 0 0 0-3.734 4.91h5ZM32.037 7.5c.115 0 .224.012.326.035l1.075-4.883a6.514 6.514 0 0 0-1.401-.152v5ZM11 7.5h21.037v-5H11v5Z" fill="currentColor" mask="url(#icon-ic_page_a)" /><path d="M34.75 8.75V11a.75.75 0 0 1-.75.75h-4.25v-3a2.5 2.5 0 0 1 5 0Z" stroke="currentColor" stroke-width="2.5" /><path d="M13.5 12h11M13.5 19h11M13.5 26h5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_pic"><rect x="6" y="6.5" width="27" height="27" rx="4" stroke="currentColor" stroke-width="2.5" /><path d="M21.188 25.662C18.938 25.17 15 12.786 6 21.744V29.5a4 4 0 0 0 4 4h19a4 4 0 0 0 4-4v-1.598c-5.625-9.517-9.563-1.747-11.813-2.24Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /><circle cx="24.5" cy="14.5" r="3.25" stroke="currentColor" stroke-width="2.5" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_reduction"><g clip-path="url(#icon-ic_reduction_a)"><path d="M31.756 27.134a1.25 1.25 0 0 0-2.317-.938l2.317.938ZM20 32.559c-5.621 0-10.179-4.557-10.179-10.178h-2.5c0 7.002 5.677 12.678 12.679 12.678v-2.5ZM9.821 22.38C9.821 16.758 14.38 12.2 20 12.2v-2.5c-7.002 0-12.679 5.677-12.679 12.679h2.5Zm19.618 3.816A10.182 10.182 0 0 1 20 32.558v2.5c5.323 0 9.877-3.28 11.756-7.924l-2.317-.938ZM20 12.201c4.27 0 7.928 2.63 9.44 6.362l2.316-.938C29.877 12.981 25.323 9.701 20 9.701v2.5Z" fill="currentColor" /><path d="M31.428 10.951v5.667a1 1 0 0 1-1 1h-5.666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></g><defs><clipPath id="icon-ic_reduction_a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath></defs></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_search"><circle cx="19" cy="19" r="8.75" stroke="currentColor" stroke-width="2.5" /><path d="m25 26 5 5" stroke="#CCC" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_search_h"><circle cx="19" cy="19" r="8.75" stroke="currentColor" stroke-width="2.5" /><path d="m25 26 5 5" stroke="#B7EC5D" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_sign"><path d="m30.905 6.298 2.796 2.796a.75.75 0 0 1 0 1.06L19.878 23.979 13.97 26.03l2.052-5.909L29.845 6.298a.75.75 0 0 1 1.06 0Z" stroke="currentColor" stroke-width="2.5" /><path d="M18.375 6.771H10a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h19a4 4 0 0 0 4-4v-8.375" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_text"><path d="M26 7h3a4 4 0 0 1 4 4v2M7 13v-2a4 4 0 0 1 4-4h2M13 33h-2a4 4 0 0 1-4-4v-3M33 26v3a4 4 0 0 1-4 4h-3M14 14h12M20 14.453v14.548" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_trash"><mask id="icon-ic_trash_a" fill="#fff"><rect x="13.333" y="4.762" width="13.333" height="8.571" rx="2" /></mask><rect x="13.333" y="4.762" width="13.333" height="8.571" rx="2" stroke="currentColor" stroke-width="5" mask="url(#icon-ic_trash_a)" /><path d="M4.762 12.38h30.476" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><path d="m10.734 32.313-.857-19.635h20.246l-.857 19.635a1.75 1.75 0 0 1-1.748 1.674H12.482a1.75 1.75 0 0 1-1.748-1.674Z" stroke="currentColor" stroke-width="2.5" /><path d="M17.143 19.047v9.524M22.857 19.047v9.524" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none"  viewBox="0 0 40 40" id="icon-ic_trash_h"><mask id="icon-ic_trash_h_a" fill="#fff"><rect x="13.333" y="4.762" width="13.333" height="8.571" rx="2" /></mask><rect x="13.333" y="4.762" width="13.333" height="8.571" rx="2" stroke="currentColor" stroke-width="5" mask="url(#icon-ic_trash_h_a)" /><path d="M4.762 12.38h30.476" stroke="#B7EC5D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><path d="m10.734 32.313-.857-19.635h20.246l-.857 19.635a1.75 1.75 0 0 1-1.748 1.674H12.482a1.75 1.75 0 0 1-1.748-1.674Z" stroke="#B7EC5D" stroke-width="2.5" /><path d="M17.143 19.047v9.524M22.857 19.047v9.524" stroke="#B7EC5D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol fill="none"  viewBox="0 0 50 50" id="icon-ic_user"><circle cx="25" cy="16" r="6.75" stroke="currentColor" stroke-width="2.5" /><mask id="icon-ic_user_a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.258 45.193A14.105 14.105 0 0 1 10 42.5C10 34.492 16.716 28 25 28c8.284 0 15 6.492 15 14.5 0 .92-.089 1.82-.258 2.693A24.887 24.887 0 0 1 25 50a24.887 24.887 0 0 1-14.742-4.807Z" /></mask><path d="m10.258 45.193-2.454.477.187.962.792.58 1.475-2.019Zm29.484 0 1.475 2.018.792-.578.187-.963-2.454-.477Zm-27.03-.477A11.602 11.602 0 0 1 12.5 42.5h-5c0 1.081.104 2.141.304 3.17l4.908-.954ZM12.5 42.5c0-6.548 5.516-12 12.5-12v-5c-9.584 0-17.5 7.532-17.5 17h5Zm12.5-12c6.984 0 12.5 5.452 12.5 12h5c0-9.468-7.916-17-17.5-17v5Zm12.5 12c0 .76-.073 1.5-.212 2.216l4.908.954c.2-1.029.304-2.089.304-3.17h-5Zm.766.675A22.388 22.388 0 0 1 25 47.5v5c6.06 0 11.67-1.964 16.217-5.289l-2.951-4.036ZM25 47.5a22.388 22.388 0 0 1-13.266-4.325l-2.951 4.036A27.387 27.387 0 0 0 25 52.5v-5Z" fill="#B7EC5D" mask="url(#icon-ic_user_a)" /><circle cx="25" cy="16" r="6.75" stroke="#B7EC5D" stroke-width="2.5" /><circle cx="25" cy="25" r="23.75" stroke="#B7EC5D" stroke-width="2.5" /></symbol><symbol fill="none"  viewBox="0 0 50 50" id="icon-ic_user_h"><circle cx="25" cy="25" r="23.75" stroke="currentColor" stroke-width="2.5" /><mask id="icon-ic_user_h_a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 25c0 8.294-4.04 15.645-10.258 20.193.17-.872.258-1.773.258-2.693C40 34.492 33.284 28 25 28c-8.284 0-15 6.492-15 14.5 0 .92.089 1.82.258 2.693C4.04 40.646 0 33.295 0 25 0 11.193 11.193 0 25 0s25 11.193 25 25Zm-25-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M50 25c0 8.294-4.04 15.645-10.258 20.193.17-.872.258-1.773.258-2.693C40 34.492 33.284 28 25 28c-8.284 0-15 6.492-15 14.5 0 .92.089 1.82.258 2.693C4.04 40.646 0 33.295 0 25 0 11.193 11.193 0 25 0s25 11.193 25 25Zm-25-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" fill="#B7EC5D" /><path d="m39.742 45.193-2.454-.477-1.216 6.258 5.145-3.763-1.475-2.018Zm-29.484 0-1.475 2.018 5.145 3.763-1.216-6.258-2.454.477Zm30.96 2.018C48.051 42.213 52.5 34.126 52.5 25h-5c0 7.463-3.631 14.078-9.234 18.175l2.951 4.036ZM37.5 42.5c0 .76-.073 1.5-.212 2.216l4.908.954c.2-1.029.304-2.089.304-3.17h-5ZM25 30.5c6.984 0 12.5 5.452 12.5 12h5c0-9.468-7.916-17-17.5-17v5Zm-12.5 12c0-6.548 5.516-12 12.5-12v-5c-9.584 0-17.5 7.532-17.5 17h5Zm.212 2.216A11.602 11.602 0 0 1 12.5 42.5h-5c0 1.081.104 2.141.304 3.17l4.908-.954ZM-2.5 25c0 9.126 4.448 17.213 11.283 22.211l2.951-4.036C6.131 39.078 2.5 32.463 2.5 25h-5ZM25-2.5C9.812-2.5-2.5 9.812-2.5 25h5C2.5 12.574 12.574 2.5 25 2.5v-5ZM52.5 25C52.5 9.812 40.188-2.5 25-2.5v5c12.426 0 22.5 10.074 22.5 22.5h5Zm-22-9a5.5 5.5 0 0 1-5.5 5.5v5c5.799 0 10.5-4.701 10.5-10.5h-5ZM25 10.5a5.5 5.5 0 0 1 5.5 5.5h5c0-5.799-4.701-10.5-10.5-10.5v5ZM19.5 16a5.5 5.5 0 0 1 5.5-5.5v-5c-5.799 0-10.5 4.701-10.5 10.5h5Zm5.5 5.5a5.5 5.5 0 0 1-5.5-5.5h-5c0 5.799 4.701 10.5 10.5 10.5v-5Z" fill="#B7EC5D" mask="url(#icon-ic_user_h_a)" /></symbol>', e.insertBefore(i, e.lastChild);
    };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
  }
  const xt = Je(Wi), De = Qe();
  De.use(ti);
  xt.use(De);
  xt.use(so);
  xt.use(se);
  xt.use($s);
  xt.use(_s);
  xt.mount("#app");
});
export {
  we as S,
  vt as _,
  __tla,
  W as a,
  O as b,
  Ct as s,
  mt as u
};
