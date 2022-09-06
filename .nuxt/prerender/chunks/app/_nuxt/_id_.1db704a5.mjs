import { v as vue_cjs_prod, u as useRoute, n as _sfc_main$3, b as _sfc_main$f, o as _sfc_main$2, p as __nuxt_component_0$1, c as __nuxt_component_4$1, d as _sfc_main$d } from '../server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTab = vue_cjs_prod.ref("description");
    const products = vue_cjs_prod.ref([]);
    const selectedProduct = vue_cjs_prod.ref(null);
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PartDatePicker = _sfc_main$3;
      const _component_PartBreadcrumb = _sfc_main$f;
      const _component_PartProductCardRating = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_PartProductContainer = __nuxt_component_4$1;
      const _component_PartProductCart = _sfc_main$d;
      _push(`<main${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "product-page" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartDatePicker, { show: false }, null, _parent));
      _push(`<div class="container-fluid">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ["Home", "Category", "Product"] }, null, _parent));
      if (selectedProduct.value) {
        _push(`<div class="product-page-body"><div class="product-page-image"><img${serverRenderer.exports.ssrRenderAttr("src", `http://3.111.70.214:1337${selectedProduct.value[0].image.url}`)} alt class="img-fluid"></div><div class="product-page-content"><label for>25%</label><h2 class="product-page-content-title">${serverRenderer.exports.ssrInterpolate(selectedProduct.value[0].title)}</h2><h4 class="product-page-content-price"><i class="fa-solid fa-indian-rupee-sign"></i> 2,500 <del><i class="fa-solid fa-indian-rupee-sign"></i> ${serverRenderer.exports.ssrInterpolate(selectedProduct.value[0].price)}</del></h4>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_PartProductCardRating, {
          stars: 5,
          rating: 2
        }, null, _parent));
        _push(`<p>${serverRenderer.exports.ssrInterpolate(selectedProduct.value[0].content)}</p><div class="product-page-content-buttons"><button class="btn btn-book"><i class="fa-solid fa-cart-shopping"></i> Book Now </button><button class="btn btn-heart"><i class="fa-solid fa-heart"></i></button></div><div class="product-page-content-icons"> Share : `);
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-brands fa-facebook"${_scopeId}></i>`);
            } else {
              return [
                vue_cjs_prod.createVNode("i", { class: "fa-brands fa-facebook" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-brands fa-linkedin"${_scopeId}></i>`);
            } else {
              return [
                vue_cjs_prod.createVNode("i", { class: "fa-brands fa-linkedin" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-brands fa-twitter"${_scopeId}></i>`);
            } else {
              return [
                vue_cjs_prod.createVNode("i", { class: "fa-brands fa-twitter" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-brands fa-instagram"${_scopeId}></i>`);
            } else {
              return [
                vue_cjs_prod.createVNode("i", { class: "fa-brands fa-instagram" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (selectedProduct.value) {
        _push(`<div class="product-page-description"><div class="container-fluid"><div class="product-page-description-tabs"><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "description" ? "active" : ""], "product-page-description-tabs-btn"])}">Descirption</div><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "information" ? "active" : ""], "product-page-description-tabs-btn"])}">Additional Information</div><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "review" ? "active" : ""], "product-page-description-tabs-btn"])}">Reviews(5)</div></div><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "description" ? "active" : ""], "product-page-description-content"])}">${selectedProduct.value[0].Description}</div><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "information" ? "active" : ""], "product-page-description-content"])}">${selectedProduct.value[0].information}</div><div class="${serverRenderer.exports.ssrRenderClass([[selectedTab.value == "review" ? "active" : ""], "product-page-description-content"])}"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt necessitatibus soluta tempora eum delectus at incidunt odit maxime, explicabo ad eligendi fugiat asperiores quia adipisci architecto nisi, eveniet repellat temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minima deleniti. Sed ad quam, voluptates, temporibus quas dolores, quod accusamus mollitia ea itaque iure? Sint at quae excepturi cumque reprehenderit!</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-page-related-products"><div class="container-fluid"><h2>Related Products</h2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_PartProductContainer, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(products.value, (product) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_PartProductCart, {
                key: `product-${product == null ? void 0 : product.id}`,
                product
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(products.value, (product) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_PartProductCart, {
                  key: `product-${product == null ? void 0 : product.id}`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.1db704a5.mjs.map
