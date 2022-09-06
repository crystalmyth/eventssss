import { _ as _export_sfc, v as vue_cjs_prod, p as __nuxt_component_0$1, q as useNuxtApp } from '../server.mjs';
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

const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_d = (_c = options.lazy) != null ? _c : options.defer) != null ? _d : false;
  options.initialCache = (_e = options.initialCache) != null ? _e : true;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: wrapInRef((_f = nuxt.payload.data[key]) != null ? _f : options.default()),
    pending: vue_cjs_prod.ref(!useInitialCache()),
    error: vue_cjs_prod.ref((_g = nuxt.payload._errors[key]) != null ? _g : null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = vue_cjs_prod.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = initialFetch();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = vue_cjs_prod.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return vue_cjs_prod.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, "$2Qpjr020wX");
  return asyncData;
}
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "upr-navbar" }, _attrs))}><div class="container-fluid"><div class="upr-navbar-left"><div class="upr-navbar-left-box"><i class="fa-solid fa-location-dot"></i> Location </div><div class="upr-navbar-left-box"><i class="fa-solid fa-truck-fast"></i> Order Tracking </div></div><div class="upr-navbar-center"><span class="badge">15% OFF</span><i class="fa-solid fa-indian-rupee-sign"></i> 1000+ when you buy online &amp; pick up in-store </div><div class="upr-navbar-right"><div class="upr-navbar-right-box"><select name id class="form-select"><option value>EURO</option></select></div><div class="upr-navbar-right-box"><select name id class="form-select"><option value>English</option></select></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inc/UprNavbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch("http://3.111.70.214:1337/web-profile", "$YpF0z4Mkl3")), __temp = await __temp, __restore(), __temp);
    const profile = data.data._rawValue;
    const Logo = `http://3.111.70.214:1337${profile.Logo.url}`;
    const menu = [
      { name: "Home", link: "/" },
      { name: "Category", link: "/category" },
      { name: "About", link: "/about" },
      { name: "Contact Us", link: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IncUprNavbar = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_IncUprNavbar, null, null, _parent));
      _push(`<nav class="navbar"><div class="container-fluid"><div class="navbar-logo"><img lazy="loading"${serverRenderer.exports.ssrRenderAttr("src", Logo)} alt class="img-fluid"></div><div class="navbar-menu"><!--[-->`);
      serverRenderer.exports.ssrRenderList(menu, (link, index) => {
        _push(`<div class="navbar-menu-box">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
          to: link.link
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(link.name)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="navbar-search"><input type="text" placeholder="Search..." class="form-control"><i class="fa-solid fa-magnifying-glass"></i></div><div class="navbar-buttons"><div class="navbar-buttons-box"><i class="fa-solid fa-user"></i></div><div class="navbar-buttons-box"><i class="fa-solid fa-heart"></i></div><div class="navbar-buttons-box"><i class="fa-solid fa-cart-shopping"></i></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inc/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "footer" }, _attrs))}><div class="container-fluid"><div class="footer-left"><h4>STAY UP TO DATE ON OUR LATEST TIPS</h4><p> Subscrible &amp; get <span>10%</span> discount. Get E-mail updates about our latest shop and `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`special offers.`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("special offers.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><form action="#" class="form"><div class="form-group"><input type="email" placeholder="Enter your email..." class="form-control"><i class="fa-solid fa-envelope-circle-check"></i></div></form></div><div class="footer-right"><div class="footer-useful"><h5>USEFUL LINKS</h5><div class="footer-uselful-links">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`New Products`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("New Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Best Sellers`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Best Sellers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bundle &amp; Save`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Bundle & Save")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Online Gift Card`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Online Gift Card")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Discount`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Discount")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pet Store Locator`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Pet Store Locator")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="footer-account"><h5>MY ACCOUNT</h5><div class="footer-account-links">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Profile`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("My Profile")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Order History`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("My Order History")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`My Wish List`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("My Wish List")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Order Tracking`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Order Tracking")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shipping Info`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Shipping Info")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shopping Cart`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Shopping Cart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="footer-company"><h5>Company</h5><div class="footer-company-links">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Careers`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Careers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Affiliate`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Affiliate")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gift Cards`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Gift Cards")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Inc/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IncNavbar = _sfc_main$2;
  const _component_IncFooter = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_IncNavbar, null, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(serverRenderer.exports.ssrRenderComponent(_component_IncFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.05f935de.mjs.map
