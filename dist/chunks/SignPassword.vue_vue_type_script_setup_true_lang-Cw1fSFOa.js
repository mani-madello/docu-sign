import { d as n, K as p, L as u, r as c, c as i, a as m, b as f, Y as w, k as _, a8 as v, e as h } from "./vendor-DdwyfI_m.js";
import { b as y } from "../assets/index-tgQT_U_k.js";
const g = { class: "relative w-full max-w-96 flex justify-center" }, V = ["type", "placeholder"], M = n({ __name: "SignPassword", props: p({ placeholder: {} }, { modelValue: { required: true }, modelModifiers: {} }), emits: ["update:modelValue"], setup(l) {
  const a = u(l, "modelValue"), e = c("password"), t = i(() => e.value === "password" ? "eye_closed" : "eye_open");
  function r() {
    e.value = e.value === "password" ? "text" : "password";
  }
  return (s, o) => (f(), m("label", g, [w(h("input", { "onUpdate:modelValue": o[0] || (o[0] = (d) => a.value = d), type: e.value, class: "input-password", placeholder: s.$t(s.placeholder) }, null, 8, V), [[v, a.value]]), _(y, { name: t.value, class: "w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 md:right-3", onClick: r }, null, 8, ["name"])]));
} });
export {
  M as _
};
