import { v as vue_cjs_prod, a as _sfc_main$g, b as _sfc_main$f, c as __nuxt_component_4$1, d as _sfc_main$d } from '../server.mjs';
import { s as serverRenderer } from '../../renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/unenv/runtime/mock/proxy.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/unstorage/dist/drivers/fs.mjs';
import 'stream';

const _sfc_main = {
  __name: "category",
  __ssrInlineRender: true,
  setup(__props) {
    const filterClose = vue_cjs_prod.ref(false);
    const products = vue_cjs_prod.ref([]);
    function onFilterClick(value) {
      filterClose.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PartProductFilter = _sfc_main$g;
      const _component_PartBreadcrumb = _sfc_main$f;
      const _component_PartProductContainer = __nuxt_component_4$1;
      const _component_PartProductCart = _sfc_main$d;
      _push(`<main${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="container-fluid">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartProductFilter, {
        close: filterClose.value,
        onClose: onFilterClick
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ["Home", "Category"] }, null, _parent));
      _push(`<div class="filter-section"><div class="filter-section-left"><label><i class="fa-solid fa-filter"></i> Filter </label><div class="form-group"><select name id class="form-select"><option value>Default Sorting</option></select></div></div><div class="filter-section-right">showing 1 - 16 of 19 results</div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartProductContainer, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(products.value, (product) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_PartProductCart, {
                key: product.title,
                product
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(products.value, (product) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_PartProductCart, {
                  key: product.title,
                  product
                }, null, 8, ["product"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${serverRenderer.exports.ssrRenderClass([[((_a = products.value) == null ? void 0 : _a.count) ? "" : "d-none"], "pagination-section"])}"><div class="pagination-section-box">1</div><div class="pagination-section-box">2</div><div class="pagination-section-box"><i class="fa-solid fa-angle-right"></i></div></div><div class="relatable-product"><h2>Top Rated Products</h2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartProductContainer, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(products.value, (product) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_PartProductCart, {
                key: product.title,
                product
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(products.value, (product) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_PartProductCart, {
                  key: product.title,
                  product
                }, null, 8, ["product"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=category.c5620e0b.mjs.map
