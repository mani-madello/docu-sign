import { S as m, a as p, u } from "../assets/index-CCJbelsI.js";
import { _ as c } from "./SignPassword.vue_vue_type_script_setup_true_lang-BS2uRloV.js";
import { d as f, r as w, U as _, m as b, b as y, l as v, e as o, j as P, t as a } from "./vendor-2z0F1iGp.js";
import "./@component-hook/pdf-canvas-DuZ37e5K.js";
const $ = { class: "text-center my-5" }, C = { class: "flex justify-between md:justify-evenly" }, j = f({ __name: "UploadPassword", emits: ["closePassword"], setup(V, { emit: l }) {
  const r = l, e = w(""), { t: i } = _();
  function d() {
    if (!e.value) {
      p({ message: i("password_required"), type: "error" });
      return;
    }
    u().updateFilePassword(e.value), r("closePassword", true);
  }
  return (s, t) => (y(), b(m, { title: s.$t("warn") }, { default: v(() => [o("p", $, a(s.$t("prompt.protected_file")), 1), P(c, { modelValue: e.value, "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n), class: "mb-4 mx-auto", placeholder: "placeholder.password" }, null, 8, ["modelValue"]), o("div", C, [o("button", { class: "btn btn-base", onClick: t[1] || (t[1] = (n) => r("closePassword")) }, a(s.$t("not_yet")), 1), o("button", { class: "btn btn-primary", onClick: d }, a(s.$t("confirm")), 1)])]), _: 1 }, 8, ["title"]));
} });
export {
  j as default
};
