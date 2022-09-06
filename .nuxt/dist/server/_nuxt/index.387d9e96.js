import { _ as _export_sfc, v as vue_cjs_prod, e as _sfc_main$1, f as _sfc_main$2, g as _sfc_main$3, h as _sfc_main$4, i as __nuxt_component_4, j as _sfc_main$5, k as _sfc_main$6, l as __nuxt_component_7, m as _sfc_main$7 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "@vue/server-renderer";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "h3";
import "defu";
import "vue3-carousel";
import "jquery";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeHero = _sfc_main$1;
  const _component_HomeFindPackage = _sfc_main$2;
  const _component_HomeOccation = _sfc_main$3;
  const _component_HomeTodayDeal = _sfc_main$4;
  const _component_HomeWeekDeal = __nuxt_component_4;
  const _component_HomeTrending = _sfc_main$5;
  const _component_HomeReview = _sfc_main$6;
  const _component_HomeSubscribe = __nuxt_component_7;
  const _component_HomeFeaturedIn = _sfc_main$7;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFindPackage, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeOccation, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTodayDeal, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeWeekDeal, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeTrending, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeReview, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeSubscribe, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFeaturedIn, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
