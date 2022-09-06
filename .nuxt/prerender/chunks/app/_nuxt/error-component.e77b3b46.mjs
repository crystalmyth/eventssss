import { v as vue_cjs_prod } from '../server.mjs';
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
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const _Error404 = vue_cjs_prod.defineAsyncComponent(() => import('./error-404.6aff6169.mjs'));
    const _Error = vue_cjs_prod.defineAsyncComponent(() => import('./error-500.f79fb367.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;

export { _sfc_main$1 as default };
//# sourceMappingURL=error-component.e77b3b46.mjs.map
