
// --------------------
// Request: /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohmyfetch ($id_4T3an2dV6G)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/paths.mjs ($id_dKVuEnalik)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/css.mjs ($id_wjpimkMWTD)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/root-component.mjs ($id_UhOc0Ip3mu)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/app-component.mjs ($id_vYx22mgvHo)
// --------------------
const $id_eaKVhKnHkW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohmyfetch");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs ($id_Rm7cDADAVO)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/contact.vue?macro=true ($id_ti9Tlvad9S)
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/contact.vue ($id_c1pJl5yWum)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs ($id_1cpGWK3U9d)
// - /components/Inc/UprNavbar.vue ($id_NxVdIJY0ws)
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - @vue/runtime-dom ($id_xcKel6nH2q)
// --------------------
const $id_G33erDMZ5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/runtime-dom");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/runtime-dom");
__vite_ssr_exportAll__(__vite_ssr_import_1__);

function initDev() {
    {
        __vite_ssr_import_0__.initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_0__.warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};


Object.defineProperty(__vite_ssr_exports__, "compile", { enumerable: true, configurable: true, get(){ return compile }});
;
}


// --------------------
// Request: @vue/runtime-dom
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_9sriful2d8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/runtime-dom")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/runtime-dom\".")
  })


// --------------------
// Request: ohmyfetch
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 

// --------------------
const $id_kLE5W6MKaY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohmyfetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohmyfetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/paths.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// --------------------
const $id_PSJT49I6pl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"meta":[],"link":[],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
globalThis.__buildAssetsURL = buildAssetsURL
globalThis.__publicAssetsURL = publicAssetsURL;
}


// --------------------
// Request: ufo
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/paths.mjs ($id_dKVuEnalik)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs ($id_Rm7cDADAVO)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_fgrt3UeQEL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_lfCjBrgcte = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");

const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_YvAaozTraC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.setResponseStatus }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_XTtQ30wmO3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$BblPDwLpsD');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BHNdDlA1Pk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
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
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
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
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
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
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_6bgT8vIFHQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_oMJXouc9nw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_kP3GBeDzaR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_0OCs51rfoK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const throwError = showError;
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => err && typeof err === "object" && "__nuxt_error" in err;
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_zYOrYjkwm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

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
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
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
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$2Qpjr020wX');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  , '$O2v9FOrXIM');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XUZhFBVStH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");

const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_6__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_7__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_5__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_5__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BjnOCDcfIZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function setResponseStatus(code, message) {
  const event = true && useRequestEvent();
  if (event) {
    event.res.statusCode = code;
    if (message) {
      event.res.statusMessage = message;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_72OrpZA28S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (__vite_ssr_import_0__.getCurrentInstance()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_2__.joinURL(__vite_ssr_import_3__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_1__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_HRAmKRepZ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_aAoWaPsGgE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_DBzckdbLOm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - @vue/shared ($id_FcJYoqIAB0)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_TG3cDPMBp5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/shared");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/css.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 
// - /assets/scss/main.scss ($id_7UXuSeL0Ze)
// --------------------
const $id_GQxPI5e2AK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/scss/main.scss");
;
}


// --------------------
// Request: /assets/scss/main.scss
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/css.mjs ($id_wjpimkMWTD)
// Dependencies: 

// --------------------
const $id_tuXFGNS8CT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");\n/*!\n * Bootstrap  v5.2.0 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6839CC;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #FA782D;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #666;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #F90E4C;\n  --bs-light: #f6f6f6;\n  --bs-dark: #100428;\n  --bs-primary-rgb: 13, 110, 253;\n  --bs-secondary-rgb: 102, 102, 102;\n  --bs-success-rgb: 25, 135, 84;\n  --bs-info-rgb: 13, 202, 240;\n  --bs-warning-rgb: 255, 193, 7;\n  --bs-danger-rgb: 249, 14, 76;\n  --bs-light-rgb: 246, 246, 246;\n  --bs-dark-rgb: 16, 4, 40;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-bg: #fff;\n  --bs-border-width: 1px;\n  --bs-border-style: solid;\n  --bs-border-color: #dee2e6;\n  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);\n  --bs-border-radius: 0.375rem;\n  --bs-border-radius-sm: 0.25rem;\n  --bs-border-radius-lg: 0.5rem;\n  --bs-border-radius-xl: 1rem;\n  --bs-border-radius-2xl: 2rem;\n  --bs-border-radius-pill: 50rem;\n  --bs-link-color: #0d6efd;\n  --bs-link-hover-color: #0a58ca;\n  --bs-code-color: #d63384;\n  --bs-highlight-bg: #fff3cd;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\nbody {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  border: 0;\n  border-top: 1px solid;\n  opacity: 0.25;\n}\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\nh5, .h5 {\n  font-size: 1.25rem;\n}\nh6, .h6 {\n  font-size: 1rem;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol,\nul {\n  padding-left: 2rem;\n}\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\ndt {\n  font-weight: 700;\n}\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\nblockquote {\n  margin: 0 0 1rem;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\nsmall, .small {\n  font-size: 0.875em;\n}\nmark, .mark {\n  padding: 0.1875em;\n  background-color: var(--bs-highlight-bg);\n}\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\na {\n  color: var(--bs-link-color);\n  text-decoration: underline;\n}\na:hover {\n  color: var(--bs-link-hover-color);\n}\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n}\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\ncode {\n  font-size: 0.875em;\n  color: var(--bs-code-color);\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\nkbd {\n  padding: 0.1875rem 0.375rem;\n  font-size: 0.875em;\n  color: var(--bs-body-bg);\n  background-color: var(--bs-body-color);\n  border-radius: 0.25rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n}\nfigure {\n  margin: 0 0 1rem;\n}\nimg,\nsvg {\n  vertical-align: middle;\n}\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n}\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\nlabel {\n  display: inline-block;\n}\nbutton {\n  border-radius: 0;\n}\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton,\nselect {\n  text-transform: none;\n}\n[role=button] {\n  cursor: pointer;\n}\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ntextarea {\n  resize: vertical;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n::-webkit-inner-spin-button {\n  height: auto;\n}\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n::file-selector-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput {\n  display: inline-block;\n}\niframe {\n  border: 0;\n}\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\nprogress {\n  vertical-align: baseline;\n}\n[hidden] {\n  display: none !important;\n}\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.375rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure {\n  display: inline-block;\n}\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n.col {\n  flex: 1 0 0%;\n}\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n.offset-3 {\n  margin-left: 25%;\n}\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n.offset-6 {\n  margin-left: 50%;\n}\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n.offset-9 {\n  margin-left: 75%;\n}\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-sm-0,\n.gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-sm-0,\n.gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-sm-1,\n.gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n.gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n.gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n.gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n.gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-sm-3,\n.gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-sm-4,\n.gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n.gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n.gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-sm-5,\n.gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-md-0,\n.gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-md-0,\n.gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-md-1,\n.gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n.gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n.gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n.gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n.gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-md-3,\n.gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-md-4,\n.gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n.gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n.gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-md-5,\n.gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-lg-0,\n.gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-lg-0,\n.gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-lg-1,\n.gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n.gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n.gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n.gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n.gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-lg-3,\n.gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-lg-4,\n.gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n.gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n.gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-lg-5,\n.gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xl-0,\n.gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xl-0,\n.gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xl-1,\n.gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n.gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n.gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n.gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n.gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xl-3,\n.gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xl-4,\n.gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n.gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n.gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xl-5,\n.gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xxl-0,\n.gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xxl-0,\n.gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xxl-1,\n.gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n.gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n.gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n.gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n.gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n.gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n.gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n.gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n.gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n.gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.table {\n  --bs-table-color: var(--bs-body-color);\n  --bs-table-bg: transparent;\n  --bs-table-border-color: var(--bs-border-color);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--bs-body-color);\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\n  --bs-table-active-color: var(--bs-body-color);\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\n  --bs-table-hover-color: var(--bs-body-color);\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  color: var(--bs-table-color);\n  vertical-align: top;\n  border-color: var(--bs-table-border-color);\n}\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  background-color: var(--bs-table-bg);\n  border-bottom-width: 1px;\n  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);\n}\n.table > tbody {\n  vertical-align: inherit;\n}\n.table > thead {\n  vertical-align: bottom;\n}\n.table-group-divider {\n  border-top: 2px solid currentcolor;\n}\n.caption-top {\n  caption-side: top;\n}\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem;\n}\n.table-bordered > :not(caption) > * {\n  border-width: 1px 0;\n}\n.table-bordered > :not(caption) > * > * {\n  border-width: 0 1px;\n}\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0;\n}\n.table-borderless > :not(:first-child) {\n  border-top-width: 0;\n}\n.table-striped > tbody > tr:nth-of-type(odd) > * {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n.table-striped-columns > :not(caption) > tr > :nth-child(even) {\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\n  color: var(--bs-table-striped-color);\n}\n.table-active {\n  --bs-table-accent-bg: var(--bs-table-active-bg);\n  color: var(--bs-table-active-color);\n}\n.table-hover > tbody > tr:hover > * {\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\n  color: var(--bs-table-hover-color);\n}\n.table-primary {\n  --bs-table-color: #000;\n  --bs-table-bg: #cfe2ff;\n  --bs-table-border-color: #bacbe6;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-secondary {\n  --bs-table-color: #000;\n  --bs-table-bg: #e0e0e0;\n  --bs-table-border-color: #cacaca;\n  --bs-table-striped-bg: #d5d5d5;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cacaca;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #cfcfcf;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-success {\n  --bs-table-color: #000;\n  --bs-table-bg: #d1e7dd;\n  --bs-table-border-color: #bcd0c7;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-info {\n  --bs-table-color: #000;\n  --bs-table-bg: #cff4fc;\n  --bs-table-border-color: #badce3;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-warning {\n  --bs-table-color: #000;\n  --bs-table-bg: #fff3cd;\n  --bs-table-border-color: #e6dbb9;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-danger {\n  --bs-table-color: #000;\n  --bs-table-bg: #fecfdb;\n  --bs-table-border-color: #e5bac5;\n  --bs-table-striped-bg: #f1c5d0;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e5bac5;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ebbfcb;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-light {\n  --bs-table-color: #000;\n  --bs-table-bg: #f6f6f6;\n  --bs-table-border-color: #dddddd;\n  --bs-table-striped-bg: #eaeaea;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dddddd;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e4e4e4;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-dark {\n  --bs-table-color: #fff;\n  --bs-table-bg: #100428;\n  --bs-table-border-color: #281d3e;\n  --bs-table-striped-bg: #1c1133;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #281d3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #221738;\n  --bs-table-hover-color: #fff;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.form-label {\n  margin-bottom: 0.5rem;\n}\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n          margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n  .form-control::file-selector-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #dde0e3;\n}\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext:focus {\n  outline: 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n.form-control-color {\n  width: 3rem;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  border: 0 !important;\n  border-radius: 0.375rem;\n}\n.form-control-color::-webkit-color-swatch {\n  border-radius: 0.375rem;\n}\n.form-control-color.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.form-control-color.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n}\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-select {\n    transition: none;\n  }\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: #e9ecef;\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #212529;\n}\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n.form-check-reverse {\n  padding-right: 1.5em;\n  padding-left: 0;\n  text-align: right;\n}\n.form-check-reverse .form-check-input {\n  float: right;\n  margin-right: -1.5em;\n  margin-left: 0;\n}\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  cursor: default;\n  opacity: 0.5;\n}\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-switch.form-check-reverse {\n  padding-right: 2.5em;\n  padding-left: 0;\n}\n.form-switch.form-check-reverse .form-check-input {\n  margin-right: -2.5em;\n  margin-left: 0;\n}\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-control-plaintext,\n.form-floating > .form-select {\n  height: calc(3.5rem + 2px);\n  line-height: 1.25;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  border: 1px solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    transition: none;\n  }\n}\n.form-floating > .form-control,\n.form-floating > .form-control-plaintext {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control::-moz-placeholder, .form-floating > .form-control-plaintext::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::placeholder,\n.form-floating > .form-control-plaintext::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown), .form-floating > .form-control-plaintext:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),\n.form-floating > .form-control-plaintext:focus,\n.form-floating > .form-control-plaintext:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill,\n.form-floating > .form-control-plaintext:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-control-plaintext ~ label,\n.form-floating > .form-select ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control-plaintext ~ label {\n  border-width: 1px 0;\n}\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select,\n.input-group > .form-floating {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus,\n.input-group > .form-floating:focus-within {\n  z-index: 3;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 3;\n}\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback),\n.input-group > .form-floating:not(:first-child) > .form-control,\n.input-group > .form-floating:not(:first-child) > .form-select {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754;\n}\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.375rem;\n}\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-control-color:valid, .form-control-color.is-valid {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: #198754;\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #198754;\n}\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,\n.was-validated .input-group .form-select:valid,\n.input-group .form-select.is-valid {\n  z-index: 1;\n}\n.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,\n.was-validated .input-group .form-select:valid:focus,\n.input-group .form-select.is-valid:focus {\n  z-index: 3;\n}\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #F90E4C;\n}\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #000;\n  background-color: rgba(249, 14, 76, 0.9);\n  border-radius: 0.375rem;\n}\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #F90E4C;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23F90E4C'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23F90E4C' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #F90E4C;\n  box-shadow: 0 0 0 0.25rem rgba(249, 14, 76, 0.25);\n}\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #F90E4C;\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23F90E4C'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23F90E4C' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: #F90E4C;\n  box-shadow: 0 0 0 0.25rem rgba(249, 14, 76, 0.25);\n}\n.was-validated .form-control-color:invalid, .form-control-color.is-invalid {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #F90E4C;\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: #F90E4C;\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(249, 14, 76, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #F90E4C;\n}\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,\n.was-validated .input-group .form-select:invalid,\n.input-group .form-select.is-invalid {\n  z-index: 2;\n}\n.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,\n.was-validated .input-group .form-select:invalid:focus,\n.input-group .form-select.is-invalid:focus {\n  z-index: 3;\n}\n.btn {\n  --bs-btn-padding-x: 0.75rem;\n  --bs-btn-padding-y: 0.375rem;\n  --bs-btn-font-family: ;\n  --bs-btn-font-size: 1rem;\n  --bs-btn-font-weight: 400;\n  --bs-btn-line-height: 1.5;\n  --bs-btn-color: #212529;\n  --bs-btn-bg: transparent;\n  --bs-btn-border-width: 1px;\n  --bs-btn-border-color: transparent;\n  --bs-btn-border-radius: 0.375rem;\n  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  --bs-btn-disabled-opacity: 0.65;\n  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);\n  display: inline-block;\n  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);\n  font-family: var(--bs-btn-font-family);\n  font-size: var(--bs-btn-font-size);\n  font-weight: var(--bs-btn-font-weight);\n  line-height: var(--bs-btn-line-height);\n  color: var(--bs-btn-color);\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);\n  border-radius: var(--bs-btn-border-radius);\n  background-color: var(--bs-btn-bg);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n}\n.btn-check:focus + .btn, .btn:focus {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:checked + .btn, .btn-check:active + .btn, .btn:active, .btn.active, .btn.show {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: var(--bs-btn-active-border-color);\n}\n.btn-check:checked + .btn:focus, .btn-check:active + .btn:focus, .btn:active:focus, .btn.active:focus, .btn.show:focus {\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  color: var(--bs-btn-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-btn-disabled-bg);\n  border-color: var(--bs-btn-disabled-border-color);\n  opacity: var(--bs-btn-disabled-opacity);\n}\n.btn-primary {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0b5ed7;\n  --bs-btn-hover-border-color: #0a58ca;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0a58ca;\n  --bs-btn-active-border-color: #0a53be;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #0d6efd;\n  --bs-btn-disabled-border-color: #0d6efd;\n}\n.btn-secondary {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #666;\n  --bs-btn-border-color: #666;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #575757;\n  --bs-btn-hover-border-color: #525252;\n  --bs-btn-focus-shadow-rgb: 125, 125, 125;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #525252;\n  --bs-btn-active-border-color: #4d4d4d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #666;\n  --bs-btn-disabled-border-color: #666;\n}\n.btn-success {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #157347;\n  --bs-btn-hover-border-color: #146c43;\n  --bs-btn-focus-shadow-rgb: 60, 153, 110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #146c43;\n  --bs-btn-active-border-color: #13653f;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #198754;\n  --bs-btn-disabled-border-color: #198754;\n}\n.btn-info {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #31d2f2;\n  --bs-btn-hover-border-color: #25cff2;\n  --bs-btn-focus-shadow-rgb: 11, 172, 204;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #3dd5f3;\n  --bs-btn-active-border-color: #25cff2;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #0dcaf0;\n  --bs-btn-disabled-border-color: #0dcaf0;\n}\n.btn-warning {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffca2c;\n  --bs-btn-hover-border-color: #ffc720;\n  --bs-btn-focus-shadow-rgb: 217, 164, 6;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffcd39;\n  --bs-btn-active-border-color: #ffc720;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #ffc107;\n  --bs-btn-disabled-border-color: #ffc107;\n}\n.btn-danger {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #F90E4C;\n  --bs-btn-border-color: #F90E4C;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #fa3267;\n  --bs-btn-hover-border-color: #fa265e;\n  --bs-btn-focus-shadow-rgb: 212, 12, 65;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #fa3e70;\n  --bs-btn-active-border-color: #fa265e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #F90E4C;\n  --bs-btn-disabled-border-color: #F90E4C;\n}\n.btn-light {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #f6f6f6;\n  --bs-btn-border-color: #f6f6f6;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #d1d1d1;\n  --bs-btn-hover-border-color: #c5c5c5;\n  --bs-btn-focus-shadow-rgb: 209, 209, 209;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #c5c5c5;\n  --bs-btn-active-border-color: #b9b9b9;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #f6f6f6;\n  --bs-btn-disabled-border-color: #f6f6f6;\n}\n.btn-dark {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #100428;\n  --bs-btn-border-color: #100428;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #342a48;\n  --bs-btn-hover-border-color: #281d3e;\n  --bs-btn-focus-shadow-rgb: 52, 42, 72;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #403653;\n  --bs-btn-active-border-color: #281d3e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #100428;\n  --bs-btn-disabled-border-color: #100428;\n}\n.btn-outline-primary {\n  --bs-btn-color: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0d6efd;\n  --bs-btn-hover-border-color: #0d6efd;\n  --bs-btn-focus-shadow-rgb: 13, 110, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0d6efd;\n  --bs-btn-active-border-color: #0d6efd;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0d6efd;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0d6efd;\n  --bs-gradient: none;\n}\n.btn-outline-secondary {\n  --bs-btn-color: #666;\n  --bs-btn-border-color: #666;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #666;\n  --bs-btn-hover-border-color: #666;\n  --bs-btn-focus-shadow-rgb: 102, 102, 102;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #666;\n  --bs-btn-active-border-color: #666;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #666;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #666;\n  --bs-gradient: none;\n}\n.btn-outline-success {\n  --bs-btn-color: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #198754;\n  --bs-btn-hover-border-color: #198754;\n  --bs-btn-focus-shadow-rgb: 25, 135, 84;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #198754;\n  --bs-btn-active-border-color: #198754;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #198754;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #198754;\n  --bs-gradient: none;\n}\n.btn-outline-info {\n  --bs-btn-color: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #0dcaf0;\n  --bs-btn-hover-border-color: #0dcaf0;\n  --bs-btn-focus-shadow-rgb: 13, 202, 240;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #0dcaf0;\n  --bs-btn-active-border-color: #0dcaf0;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0dcaf0;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0dcaf0;\n  --bs-gradient: none;\n}\n.btn-outline-warning {\n  --bs-btn-color: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffc107;\n  --bs-btn-hover-border-color: #ffc107;\n  --bs-btn-focus-shadow-rgb: 255, 193, 7;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffc107;\n  --bs-btn-active-border-color: #ffc107;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #ffc107;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #ffc107;\n  --bs-gradient: none;\n}\n.btn-outline-danger {\n  --bs-btn-color: #F90E4C;\n  --bs-btn-border-color: #F90E4C;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #F90E4C;\n  --bs-btn-hover-border-color: #F90E4C;\n  --bs-btn-focus-shadow-rgb: 249, 14, 76;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #F90E4C;\n  --bs-btn-active-border-color: #F90E4C;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #F90E4C;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #F90E4C;\n  --bs-gradient: none;\n}\n.btn-outline-light {\n  --bs-btn-color: #f6f6f6;\n  --bs-btn-border-color: #f6f6f6;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #f6f6f6;\n  --bs-btn-hover-border-color: #f6f6f6;\n  --bs-btn-focus-shadow-rgb: 246, 246, 246;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #f6f6f6;\n  --bs-btn-active-border-color: #f6f6f6;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #f6f6f6;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #f6f6f6;\n  --bs-gradient: none;\n}\n.btn-outline-dark {\n  --bs-btn-color: #100428;\n  --bs-btn-border-color: #100428;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #100428;\n  --bs-btn-hover-border-color: #100428;\n  --bs-btn-focus-shadow-rgb: 16, 4, 40;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #100428;\n  --bs-btn-active-border-color: #100428;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #100428;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #100428;\n  --bs-gradient: none;\n}\n.btn-link {\n  --bs-btn-font-weight: 400;\n  --bs-btn-color: var(--bs-link-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: transparent;\n  --bs-btn-hover-color: var(--bs-link-hover-color);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-active-color: var(--bs-link-hover-color);\n  --bs-btn-active-border-color: transparent;\n  --bs-btn-disabled-color: #6c757d;\n  --bs-btn-disabled-border-color: transparent;\n  --bs-btn-box-shadow: none;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  text-decoration: underline;\n}\n.btn-link:focus {\n  color: var(--bs-btn-color);\n}\n.btn-link:hover {\n  color: var(--bs-btn-hover-color);\n}\n.btn-lg, .btn-group-lg > .btn {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-padding-x: 1rem;\n  --bs-btn-font-size: 1.25rem;\n  --bs-btn-border-radius: 0.5rem;\n}\n.btn-sm, .btn-group-sm > .btn {\n  --bs-btn-padding-y: 0.25rem;\n  --bs-btn-padding-x: 0.5rem;\n  --bs-btn-font-size: 0.875rem;\n  --bs-btn-border-radius: 0.25rem;\n}\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n.collapse:not(.show) {\n  display: none;\n}\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n.collapsing.collapse-horizontal {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.collapse-horizontal {\n    transition: none;\n  }\n}\n.dropup,\n.dropend,\n.dropdown,\n.dropstart,\n.dropup-center,\n.dropdown-center {\n  position: relative;\n}\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu {\n  --bs-dropdown-min-width: 10rem;\n  --bs-dropdown-padding-x: 0;\n  --bs-dropdown-padding-y: 0.5rem;\n  --bs-dropdown-spacer: 0.125rem;\n  --bs-dropdown-font-size: 1rem;\n  --bs-dropdown-color: #212529;\n  --bs-dropdown-bg: #fff;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-border-radius: 0.375rem;\n  --bs-dropdown-border-width: 1px;\n  --bs-dropdown-inner-border-radius: calc(0.375rem - 1px);\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-divider-margin-y: 0.5rem;\n  --bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-dropdown-link-color: #212529;\n  --bs-dropdown-link-hover-color: #1e2125;\n  --bs-dropdown-link-hover-bg: #e9ecef;\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-item-padding-x: 1rem;\n  --bs-dropdown-item-padding-y: 0.25rem;\n  --bs-dropdown-header-color: #6c757d;\n  --bs-dropdown-header-padding-x: 1rem;\n  --bs-dropdown-header-padding-y: 0.5rem;\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: var(--bs-dropdown-min-width);\n  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);\n  margin: 0;\n  font-size: var(--bs-dropdown-font-size);\n  color: var(--bs-dropdown-color);\n  text-align: left;\n  list-style: none;\n  background-color: var(--bs-dropdown-bg);\n  background-clip: padding-box;\n  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n  border-radius: var(--bs-dropdown-border-radius);\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: var(--bs-dropdown-spacer);\n}\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: var(--bs-dropdown-spacer);\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: var(--bs-dropdown-spacer);\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: var(--bs-dropdown-spacer);\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle::after {\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n.dropdown-divider {\n  height: 0;\n  margin: var(--bs-dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--bs-dropdown-divider-bg);\n  opacity: 1;\n}\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  clear: both;\n  font-weight: 400;\n  color: var(--bs-dropdown-link-color);\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: var(--bs-dropdown-link-hover-color);\n  background-color: var(--bs-dropdown-link-hover-bg);\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: var(--bs-dropdown-link-active-color);\n  text-decoration: none;\n  background-color: var(--bs-dropdown-link-active-bg);\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: var(--bs-dropdown-link-disabled-color);\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.dropdown-header {\n  display: block;\n  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: var(--bs-dropdown-header-color);\n  white-space: nowrap;\n}\n.dropdown-item-text {\n  display: block;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  color: var(--bs-dropdown-link-color);\n}\n.dropdown-menu-dark {\n  --bs-dropdown-color: #dee2e6;\n  --bs-dropdown-bg: #343a40;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #dee2e6;\n  --bs-dropdown-link-hover-color: #fff;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn,\n.btn-group > .btn-check:focus + .btn,\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn-check:checked + .btn,\n.btn-group-vertical > .btn-check:focus + .btn,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n.btn-group {\n  border-radius: 0.375rem;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn.dropdown-toggle-split:first-child,\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn,\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav {\n  --bs-nav-link-padding-x: 1rem;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-link-color);\n  --bs-nav-link-hover-color: var(--bs-link-hover-color);\n  --bs-nav-link-disabled-color: #6c757d;\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link {\n  display: block;\n  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);\n  font-size: var(--bs-nav-link-font-size);\n  font-weight: var(--bs-nav-link-font-weight);\n  color: var(--bs-nav-link-color);\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: var(--bs-nav-link-hover-color);\n}\n.nav-link.disabled {\n  color: var(--bs-nav-link-disabled-color);\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs {\n  --bs-nav-tabs-border-width: 1px;\n  --bs-nav-tabs-border-color: #dee2e6;\n  --bs-nav-tabs-border-radius: 0.375rem;\n  --bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;\n  --bs-nav-tabs-link-active-color: #495057;\n  --bs-nav-tabs-link-active-bg: #fff;\n  --bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;\n  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);\n}\n.nav-tabs .nav-link {\n  margin-bottom: calc(var(--bs-nav-tabs-border-width) * -1);\n  background: none;\n  border: var(--bs-nav-tabs-border-width) solid transparent;\n  border-top-left-radius: var(--bs-nav-tabs-border-radius);\n  border-top-right-radius: var(--bs-nav-tabs-border-radius);\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  isolation: isolate;\n  border-color: var(--bs-nav-tabs-link-hover-border-color);\n}\n.nav-tabs .nav-link.disabled, .nav-tabs .nav-link:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: var(--bs-nav-tabs-link-active-color);\n  background-color: var(--bs-nav-tabs-link-active-bg);\n  border-color: var(--bs-nav-tabs-link-active-border-color);\n}\n.nav-tabs .dropdown-menu {\n  margin-top: calc(var(--bs-nav-tabs-border-width) * -1);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills {\n  --bs-nav-pills-border-radius: 0.375rem;\n  --bs-nav-pills-link-active-color: #fff;\n  --bs-nav-pills-link-active-bg: #0d6efd;\n}\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: var(--bs-nav-pills-border-radius);\n}\n.nav-pills .nav-link:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: var(--bs-nav-pills-link-active-color);\n  background-color: var(--bs-nav-pills-link-active-bg);\n}\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.navbar {\n  --bs-navbar-padding-x: 0;\n  --bs-navbar-padding-y: 0.5rem;\n  --bs-navbar-color: rgba(0, 0, 0, 0.55);\n  --bs-navbar-hover-color: rgba(0, 0, 0, 0.7);\n  --bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);\n  --bs-navbar-active-color: rgba(0, 0, 0, 0.9);\n  --bs-navbar-brand-padding-y: 0.3125rem;\n  --bs-navbar-brand-margin-end: 1rem;\n  --bs-navbar-brand-font-size: 1.25rem;\n  --bs-navbar-brand-color: rgba(0, 0, 0, 0.9);\n  --bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);\n  --bs-navbar-nav-link-padding-x: 0.5rem;\n  --bs-navbar-toggler-padding-y: 0.25rem;\n  --bs-navbar-toggler-padding-x: 0.75rem;\n  --bs-navbar-toggler-font-size: 1.25rem;\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n  --bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);\n  --bs-navbar-toggler-border-radius: 0.375rem;\n  --bs-navbar-toggler-focus-width: 0.25rem;\n  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);\n}\n.navbar > .container,\n.navbar > .container-fluid,\n.navbar > .container-sm,\n.navbar > .container-md,\n.navbar > .container-lg,\n.navbar > .container-xl,\n.navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  padding-top: var(--bs-navbar-brand-padding-y);\n  padding-bottom: var(--bs-navbar-brand-padding-y);\n  margin-right: var(--bs-navbar-brand-margin-end);\n  font-size: var(--bs-navbar-brand-font-size);\n  color: var(--bs-navbar-brand-color);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  color: var(--bs-navbar-brand-hover-color);\n}\n.navbar-nav {\n  --bs-nav-link-padding-x: 0;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-navbar-color);\n  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .show > .nav-link,\n.navbar-nav .nav-link.active {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-navbar-color);\n}\n.navbar-text a,\n.navbar-text a:hover,\n.navbar-text a:focus {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler {\n  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);\n  font-size: var(--bs-navbar-toggler-font-size);\n  line-height: 1;\n  color: var(--bs-navbar-color);\n  background-color: transparent;\n  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);\n  border-radius: var(--bs-navbar-toggler-border-radius);\n  transition: var(--bs-navbar-toggler-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .navbar-toggler {\n    transition: none;\n  }\n}\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);\n}\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--bs-navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n.navbar-nav-scroll {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-sm .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-md .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-lg .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-xl .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xxl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xxl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xxl .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-xxl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xxl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xxl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-xxl .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: var(--bs-navbar-nav-link-padding-x);\n  padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .offcanvas {\n  position: static;\n  z-index: auto;\n  flex-grow: 1;\n  width: auto !important;\n  height: auto !important;\n  visibility: visible !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  transform: none !important;\n  transition: none;\n}\n.navbar-expand .offcanvas .offcanvas-header {\n  display: none;\n}\n.navbar-expand .offcanvas .offcanvas-body {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n.navbar-dark {\n  --bs-navbar-color: rgba(255, 255, 255, 0.55);\n  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);\n  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);\n  --bs-navbar-active-color: #fff;\n  --bs-navbar-brand-color: #fff;\n  --bs-navbar-brand-hover-color: #fff;\n  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.card {\n  --bs-card-spacer-y: 1rem;\n  --bs-card-spacer-x: 1rem;\n  --bs-card-title-spacer-y: 0.5rem;\n  --bs-card-border-width: 1px;\n  --bs-card-border-color: var(--bs-border-color-translucent);\n  --bs-card-border-radius: 0.375rem;\n  --bs-card-box-shadow: ;\n  --bs-card-inner-border-radius: calc(0.375rem - 1px);\n  --bs-card-cap-padding-y: 0.5rem;\n  --bs-card-cap-padding-x: 1rem;\n  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);\n  --bs-card-cap-color: ;\n  --bs-card-height: ;\n  --bs-card-color: ;\n  --bs-card-bg: #fff;\n  --bs-card-img-overlay-padding: 1rem;\n  --bs-card-group-margin: 0.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: var(--bs-card-height);\n  word-wrap: break-word;\n  background-color: var(--bs-card-bg);\n  background-clip: border-box;\n  border: var(--bs-card-border-width) solid var(--bs-card-border-color);\n  border-radius: var(--bs-card-border-radius);\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n.card-body {\n  flex: 1 1 auto;\n  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);\n  color: var(--bs-card-color);\n}\n.card-title {\n  margin-bottom: var(--bs-card-title-spacer-y);\n}\n.card-subtitle {\n  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));\n  margin-bottom: 0;\n}\n.card-text:last-child {\n  margin-bottom: 0;\n}\n.card-link + .card-link {\n  margin-left: var(--bs-card-spacer-x);\n}\n.card-header {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  margin-bottom: 0;\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-header:first-child {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n}\n.card-footer {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-footer:last-child {\n  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);\n}\n.card-header-tabs {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n  border-bottom: 0;\n}\n.card-header-tabs .nav-link.active {\n  background-color: var(--bs-card-bg);\n  border-bottom-color: var(--bs-card-bg);\n}\n.card-header-pills {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n}\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--bs-card-img-overlay-padding);\n  border-radius: var(--bs-card-inner-border-radius);\n}\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%;\n}\n.card-img,\n.card-img-top {\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n.card-group > .card {\n  margin-bottom: var(--bs-card-group-margin);\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n.accordion {\n  --bs-accordion-color: #000;\n  --bs-accordion-bg: #fff;\n  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n  --bs-accordion-border-color: var(--bs-border-color);\n  --bs-accordion-border-width: 1px;\n  --bs-accordion-border-radius: 0.375rem;\n  --bs-accordion-inner-border-radius: calc(0.375rem - 1px);\n  --bs-accordion-btn-padding-x: 1.25rem;\n  --bs-accordion-btn-padding-y: 1rem;\n  --bs-accordion-btn-color: var(--bs-body-color);\n  --bs-accordion-btn-bg: var(--bs-accordion-bg);\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-icon-width: 1.25rem;\n  --bs-accordion-btn-icon-transform: rotate(-180deg);\n  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-focus-border-color: #86b7fe;\n  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-accordion-body-padding-x: 1.25rem;\n  --bs-accordion-body-padding-y: 1rem;\n  --bs-accordion-active-color: #0c63e4;\n  --bs-accordion-active-bg: #e7f1ff;\n}\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);\n  font-size: 1rem;\n  color: var(--bs-accordion-btn-color);\n  text-align: left;\n  background-color: var(--bs-accordion-btn-bg);\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: var(--bs-accordion-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button {\n    transition: none;\n  }\n}\n.accordion-button:not(.collapsed) {\n  color: var(--bs-accordion-active-color);\n  background-color: var(--bs-accordion-active-bg);\n  box-shadow: inset 0 calc(var(--bs-accordion-border-width) * -1) 0 var(--bs-accordion-border-color);\n}\n.accordion-button:not(.collapsed)::after {\n  background-image: var(--bs-accordion-btn-active-icon);\n  transform: var(--bs-accordion-btn-icon-transform);\n}\n.accordion-button::after {\n  flex-shrink: 0;\n  width: var(--bs-accordion-btn-icon-width);\n  height: var(--bs-accordion-btn-icon-width);\n  margin-left: auto;\n  content: \"\";\n  background-image: var(--bs-accordion-btn-icon);\n  background-repeat: no-repeat;\n  background-size: var(--bs-accordion-btn-icon-width);\n  transition: var(--bs-accordion-btn-icon-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button::after {\n    transition: none;\n  }\n}\n.accordion-button:hover {\n  z-index: 2;\n}\n.accordion-button:focus {\n  z-index: 3;\n  border-color: var(--bs-accordion-btn-focus-border-color);\n  outline: 0;\n  box-shadow: var(--bs-accordion-btn-focus-box-shadow);\n}\n.accordion-header {\n  margin-bottom: 0;\n}\n.accordion-item {\n  color: var(--bs-accordion-color);\n  background-color: var(--bs-accordion-bg);\n  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);\n}\n.accordion-item:first-of-type {\n  border-top-left-radius: var(--bs-accordion-border-radius);\n  border-top-right-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: var(--bs-accordion-inner-border-radius);\n  border-top-right-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item:last-of-type {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n.accordion-body {\n  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);\n}\n.accordion-flush .accordion-collapse {\n  border-width: 0;\n}\n.accordion-flush .accordion-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush .accordion-item:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item:last-child {\n  border-bottom: 0;\n}\n.accordion-flush .accordion-item .accordion-button {\n  border-radius: 0;\n}\n.breadcrumb {\n  --bs-breadcrumb-padding-x: 0;\n  --bs-breadcrumb-padding-y: 0;\n  --bs-breadcrumb-margin-bottom: 1rem;\n  --bs-breadcrumb-bg: ;\n  --bs-breadcrumb-border-radius: ;\n  --bs-breadcrumb-divider-color: #6c757d;\n  --bs-breadcrumb-item-padding-x: 0.5rem;\n  --bs-breadcrumb-item-active-color: #6c757d;\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);\n  margin-bottom: var(--bs-breadcrumb-margin-bottom);\n  font-size: var(--bs-breadcrumb-font-size);\n  list-style: none;\n  background-color: var(--bs-breadcrumb-bg);\n  border-radius: var(--bs-breadcrumb-border-radius);\n}\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: var(--bs-breadcrumb-item-padding-x);\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: var(--bs-breadcrumb-item-padding-x);\n  color: var(--bs-breadcrumb-divider-color);\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active {\n  color: var(--bs-breadcrumb-item-active-color);\n}\n.pagination {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: var(--bs-link-color);\n  --bs-pagination-bg: #fff;\n  --bs-pagination-border-width: 1px;\n  --bs-pagination-border-color: #dee2e6;\n  --bs-pagination-border-radius: 0.375rem;\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: #e9ecef;\n  --bs-pagination-hover-border-color: #dee2e6;\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: #e9ecef;\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: #6c757d;\n  --bs-pagination-disabled-bg: #fff;\n  --bs-pagination-disabled-border-color: #dee2e6;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n.page-link {\n  position: relative;\n  display: block;\n  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);\n  font-size: var(--bs-pagination-font-size);\n  color: var(--bs-pagination-color);\n  text-decoration: none;\n  background-color: var(--bs-pagination-bg);\n  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-link {\n    transition: none;\n  }\n}\n.page-link:hover {\n  z-index: 2;\n  color: var(--bs-pagination-hover-color);\n  background-color: var(--bs-pagination-hover-bg);\n  border-color: var(--bs-pagination-hover-border-color);\n}\n.page-link:focus {\n  z-index: 3;\n  color: var(--bs-pagination-focus-color);\n  background-color: var(--bs-pagination-focus-bg);\n  outline: 0;\n  box-shadow: var(--bs-pagination-focus-box-shadow);\n}\n.page-link.active, .active > .page-link {\n  z-index: 3;\n  color: var(--bs-pagination-active-color);\n  background-color: var(--bs-pagination-active-bg);\n  border-color: var(--bs-pagination-active-border-color);\n}\n.page-link.disabled, .disabled > .page-link {\n  color: var(--bs-pagination-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-pagination-disabled-bg);\n  border-color: var(--bs-pagination-disabled-border-color);\n}\n.page-item:not(:first-child) .page-link {\n  margin-left: -1px;\n}\n.page-item:first-child .page-link {\n  border-top-left-radius: var(--bs-pagination-border-radius);\n  border-bottom-left-radius: var(--bs-pagination-border-radius);\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: var(--bs-pagination-border-radius);\n  border-bottom-right-radius: var(--bs-pagination-border-radius);\n}\n.pagination-lg {\n  --bs-pagination-padding-x: 1.5rem;\n  --bs-pagination-padding-y: 0.75rem;\n  --bs-pagination-font-size: 1.25rem;\n  --bs-pagination-border-radius: 0.5rem;\n}\n.pagination-sm {\n  --bs-pagination-padding-x: 0.5rem;\n  --bs-pagination-padding-y: 0.25rem;\n  --bs-pagination-font-size: 0.875rem;\n  --bs-pagination-border-radius: 0.25rem;\n}\n.badge {\n  --bs-badge-padding-x: 0.65em;\n  --bs-badge-padding-y: 0.35em;\n  --bs-badge-font-size: 0.75em;\n  --bs-badge-font-weight: 700;\n  --bs-badge-color: #fff;\n  --bs-badge-border-radius: 0.375rem;\n  display: inline-block;\n  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);\n  font-size: var(--bs-badge-font-size);\n  font-weight: var(--bs-badge-font-weight);\n  line-height: 1;\n  color: var(--bs-badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: var(--bs-badge-border-radius);\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.alert {\n  --bs-alert-bg: transparent;\n  --bs-alert-padding-x: 1rem;\n  --bs-alert-padding-y: 1rem;\n  --bs-alert-margin-bottom: 1rem;\n  --bs-alert-color: inherit;\n  --bs-alert-border-color: transparent;\n  --bs-alert-border: 1px solid var(--bs-alert-border-color);\n  --bs-alert-border-radius: 0.375rem;\n  position: relative;\n  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);\n  margin-bottom: var(--bs-alert-margin-bottom);\n  color: var(--bs-alert-color);\n  background-color: var(--bs-alert-bg);\n  border: var(--bs-alert-border);\n  border-radius: var(--bs-alert-border-radius);\n}\n.alert-heading {\n  color: inherit;\n}\n.alert-link {\n  font-weight: 700;\n}\n.alert-dismissible {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n.alert-primary {\n  --bs-alert-color: #084298;\n  --bs-alert-bg: #cfe2ff;\n  --bs-alert-border-color: #b6d4fe;\n}\n.alert-primary .alert-link {\n  color: #06357a;\n}\n.alert-secondary {\n  --bs-alert-color: #3d3d3d;\n  --bs-alert-bg: #e0e0e0;\n  --bs-alert-border-color: #d1d1d1;\n}\n.alert-secondary .alert-link {\n  color: #313131;\n}\n.alert-success {\n  --bs-alert-color: #0f5132;\n  --bs-alert-bg: #d1e7dd;\n  --bs-alert-border-color: #badbcc;\n}\n.alert-success .alert-link {\n  color: #0c4128;\n}\n.alert-info {\n  --bs-alert-color: #055160;\n  --bs-alert-bg: #cff4fc;\n  --bs-alert-border-color: #b6effb;\n}\n.alert-info .alert-link {\n  color: #04414d;\n}\n.alert-warning {\n  --bs-alert-color: #664d03;\n  --bs-alert-bg: #fff3cd;\n  --bs-alert-border-color: #ffecb5;\n}\n.alert-warning .alert-link {\n  color: #523e02;\n}\n.alert-danger {\n  --bs-alert-color: #95082e;\n  --bs-alert-bg: #fecfdb;\n  --bs-alert-border-color: #fdb7c9;\n}\n.alert-danger .alert-link {\n  color: #770625;\n}\n.alert-light {\n  --bs-alert-color: #626262;\n  --bs-alert-bg: #fdfdfd;\n  --bs-alert-border-color: #fcfcfc;\n}\n.alert-light .alert-link {\n  color: #4e4e4e;\n}\n.alert-dark {\n  --bs-alert-color: #0a0218;\n  --bs-alert-bg: #cfcdd4;\n  --bs-alert-border-color: #b7b4bf;\n}\n.alert-dark .alert-link {\n  color: #080213;\n}\n@-webkit-keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n.progress {\n  --bs-progress-height: 1rem;\n  --bs-progress-font-size: 0.75rem;\n  --bs-progress-bg: #e9ecef;\n  --bs-progress-border-radius: 0.375rem;\n  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #0d6efd;\n  --bs-progress-bar-transition: width 0.6s ease;\n  display: flex;\n  height: var(--bs-progress-height);\n  overflow: hidden;\n  font-size: var(--bs-progress-font-size);\n  background-color: var(--bs-progress-bg);\n  border-radius: var(--bs-progress-border-radius);\n}\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--bs-progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-progress-bar-bg);\n  transition: var(--bs-progress-bar-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: var(--bs-progress-height) var(--bs-progress-height);\n}\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n          animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n.list-group {\n  --bs-list-group-color: #212529;\n  --bs-list-group-bg: #fff;\n  --bs-list-group-border-color: rgba(0, 0, 0, 0.125);\n  --bs-list-group-border-width: 1px;\n  --bs-list-group-border-radius: 0.375rem;\n  --bs-list-group-item-padding-x: 1rem;\n  --bs-list-group-item-padding-y: 0.5rem;\n  --bs-list-group-action-color: #495057;\n  --bs-list-group-action-hover-color: #495057;\n  --bs-list-group-action-hover-bg: #f8f9fa;\n  --bs-list-group-action-active-color: #212529;\n  --bs-list-group-action-active-bg: #e9ecef;\n  --bs-list-group-disabled-color: #6c757d;\n  --bs-list-group-disabled-bg: #fff;\n  --bs-list-group-active-color: #fff;\n  --bs-list-group-active-bg: #0d6efd;\n  --bs-list-group-active-border-color: #0d6efd;\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: var(--bs-list-group-border-radius);\n}\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > .list-group-item::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n.list-group-item-action {\n  width: 100%;\n  color: var(--bs-list-group-action-color);\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: var(--bs-list-group-action-hover-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-action-hover-bg);\n}\n.list-group-item-action:active {\n  color: var(--bs-list-group-action-active-color);\n  background-color: var(--bs-list-group-action-active-bg);\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);\n  color: var(--bs-list-group-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-bg);\n  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: var(--bs-list-group-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-list-group-disabled-bg);\n}\n.list-group-item.active {\n  z-index: 2;\n  color: var(--bs-list-group-active-color);\n  background-color: var(--bs-list-group-active-bg);\n  border-color: var(--bs-list-group-active-border-color);\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: calc(var(--bs-list-group-border-width) * -1);\n  border-top-width: var(--bs-list-group-border-width);\n}\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: var(--bs-list-group-border-radius);\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: var(--bs-list-group-border-radius);\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: var(--bs-list-group-border-width);\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: calc(var(--bs-list-group-border-width) * -1);\n  border-left-width: var(--bs-list-group-border-width);\n}\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: calc(var(--bs-list-group-border-width) * -1);\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: calc(var(--bs-list-group-border-width) * -1);\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: calc(var(--bs-list-group-border-width) * -1);\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: calc(var(--bs-list-group-border-width) * -1);\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xxl > .list-group-item:first-child {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item:last-child {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n    margin-left: calc(var(--bs-list-group-border-width) * -1);\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 var(--bs-list-group-border-width);\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n.list-group-item-primary {\n  color: #084298;\n  background-color: #cfe2ff;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #084298;\n  background-color: #bacbe6;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #084298;\n  border-color: #084298;\n}\n.list-group-item-secondary {\n  color: #3d3d3d;\n  background-color: #e0e0e0;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #3d3d3d;\n  background-color: #cacaca;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #3d3d3d;\n  border-color: #3d3d3d;\n}\n.list-group-item-success {\n  color: #0f5132;\n  background-color: #d1e7dd;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #0f5132;\n  background-color: #bcd0c7;\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #0f5132;\n  border-color: #0f5132;\n}\n.list-group-item-info {\n  color: #055160;\n  background-color: #cff4fc;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #055160;\n  background-color: #badce3;\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #055160;\n  border-color: #055160;\n}\n.list-group-item-warning {\n  color: #664d03;\n  background-color: #fff3cd;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #664d03;\n  background-color: #e6dbb9;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #664d03;\n  border-color: #664d03;\n}\n.list-group-item-danger {\n  color: #95082e;\n  background-color: #fecfdb;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #95082e;\n  background-color: #e5bac5;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #95082e;\n  border-color: #95082e;\n}\n.list-group-item-light {\n  color: #626262;\n  background-color: #fdfdfd;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #626262;\n  background-color: #e4e4e4;\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #626262;\n  border-color: #626262;\n}\n.list-group-item-dark {\n  color: #0a0218;\n  background-color: #cfcdd4;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #0a0218;\n  background-color: #bab9bf;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #0a0218;\n  border-color: #0a0218;\n}\n.btn-close {\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: #000;\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.375rem;\n  opacity: 0.5;\n}\n.btn-close:hover {\n  color: #000;\n  text-decoration: none;\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  opacity: 1;\n}\n.btn-close:disabled, .btn-close.disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  opacity: 0.25;\n}\n.btn-close-white {\n  filter: invert(1) grayscale(100%) brightness(200%);\n}\n.toast {\n  --bs-toast-padding-x: 0.75rem;\n  --bs-toast-padding-y: 0.5rem;\n  --bs-toast-spacing: 1.5rem;\n  --bs-toast-max-width: 350px;\n  --bs-toast-font-size: 0.875rem;\n  --bs-toast-color: ;\n  --bs-toast-bg: rgba(255, 255, 255, 0.85);\n  --bs-toast-border-width: 1px;\n  --bs-toast-border-color: var(--bs-border-color-translucent);\n  --bs-toast-border-radius: 0.375rem;\n  --bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-toast-header-color: #6c757d;\n  --bs-toast-header-bg: rgba(255, 255, 255, 0.85);\n  --bs-toast-header-border-color: rgba(0, 0, 0, 0.05);\n  width: var(--bs-toast-max-width);\n  max-width: 100%;\n  font-size: var(--bs-toast-font-size);\n  color: var(--bs-toast-color);\n  pointer-events: auto;\n  background-color: var(--bs-toast-bg);\n  background-clip: padding-box;\n  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);\n  box-shadow: var(--bs-toast-box-shadow);\n  border-radius: var(--bs-toast-border-radius);\n}\n.toast.showing {\n  opacity: 0;\n}\n.toast:not(.show) {\n  display: none;\n}\n.toast-container {\n  position: absolute;\n  z-index: 1090;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container > :not(:last-child) {\n  margin-bottom: var(--bs-toast-spacing);\n}\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);\n  color: var(--bs-toast-header-color);\n  background-color: var(--bs-toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);\n  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n}\n.toast-header .btn-close {\n  margin-right: calc(var(--bs-toast-padding-x) * -0.5);\n  margin-left: var(--bs-toast-padding-x);\n}\n.toast-body {\n  padding: var(--bs-toast-padding-x);\n  word-wrap: break-word;\n}\n.modal {\n  --bs-modal-zindex: 1055;\n  --bs-modal-width: 500px;\n  --bs-modal-padding: 1rem;\n  --bs-modal-margin: 0.5rem;\n  --bs-modal-color: ;\n  --bs-modal-bg: #fff;\n  --bs-modal-border-color: var(--bs-border-color-translucent);\n  --bs-modal-border-width: 1px;\n  --bs-modal-border-radius: 0.5rem;\n  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  --bs-modal-inner-border-radius: calc(0.5rem - 1px);\n  --bs-modal-header-padding-x: 1rem;\n  --bs-modal-header-padding-y: 1rem;\n  --bs-modal-header-padding: 1rem 1rem;\n  --bs-modal-header-border-color: var(--bs-border-color);\n  --bs-modal-header-border-width: 1px;\n  --bs-modal-title-line-height: 1.5;\n  --bs-modal-footer-gap: 0.5rem;\n  --bs-modal-footer-bg: ;\n  --bs-modal-footer-border-color: var(--bs-border-color);\n  --bs-modal-footer-border-width: 1px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: var(--bs-modal-margin);\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n.modal-dialog-scrollable {\n  height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: var(--bs-modal-color);\n  pointer-events: auto;\n  background-color: var(--bs-modal-bg);\n  background-clip: padding-box;\n  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);\n  border-radius: var(--bs-modal-border-radius);\n  outline: 0;\n}\n.modal-backdrop {\n  --bs-backdrop-zindex: 1050;\n  --bs-backdrop-bg: #000;\n  --bs-backdrop-opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-backdrop-zindex);\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bs-backdrop-bg);\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: var(--bs-backdrop-opacity);\n}\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-modal-header-padding);\n  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);\n  border-top-left-radius: var(--bs-modal-inner-border-radius);\n  border-top-right-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-header .btn-close {\n  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);\n  margin: calc(var(--bs-modal-header-padding-y) * -0.5) calc(var(--bs-modal-header-padding-x) * -0.5) calc(var(--bs-modal-header-padding-y) * -0.5) auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: var(--bs-modal-title-line-height);\n}\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: var(--bs-modal-padding);\n}\n.modal-footer {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-footer > * {\n  margin: calc(var(--bs-modal-footer-gap) * 0.5);\n}\n@media (min-width: 576px) {\n  .modal {\n    --bs-modal-margin: 1.75rem;\n    --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  }\n  .modal-dialog {\n    max-width: var(--bs-modal-width);\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .modal-sm {\n    --bs-modal-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    --bs-modal-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    --bs-modal-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header,\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header,\n.modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header,\n.modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header,\n.modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header,\n.modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header,\n.modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n}\n.tooltip {\n  --bs-tooltip-zindex: 1080;\n  --bs-tooltip-max-width: 200px;\n  --bs-tooltip-padding-x: 0.5rem;\n  --bs-tooltip-padding-y: 0.25rem;\n  --bs-tooltip-margin: ;\n  --bs-tooltip-font-size: 0.875rem;\n  --bs-tooltip-color: #fff;\n  --bs-tooltip-bg: #000;\n  --bs-tooltip-border-radius: 0.375rem;\n  --bs-tooltip-opacity: 0.9;\n  --bs-tooltip-arrow-width: 0.8rem;\n  --bs-tooltip-arrow-height: 0.4rem;\n  z-index: var(--bs-tooltip-zindex);\n  display: block;\n  padding: var(--bs-tooltip-arrow-height);\n  margin: var(--bs-tooltip-margin);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-tooltip-font-size);\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: var(--bs-tooltip-opacity);\n}\n.tooltip .tooltip-arrow {\n  display: block;\n  width: var(--bs-tooltip-arrow-width);\n  height: var(--bs-tooltip-arrow-height);\n}\n.tooltip .tooltip-arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  top: -1px;\n  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-top-color: var(--bs-tooltip-bg);\n}\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\n  left: 0;\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\n  right: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-right-color: var(--bs-tooltip-bg);\n}\n/* rtl:end:ignore */\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  bottom: -1px;\n  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-bottom-color: var(--bs-tooltip-bg);\n}\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\n  right: 0;\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\n  left: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-left-color: var(--bs-tooltip-bg);\n}\n/* rtl:end:ignore */\n.tooltip-inner {\n  max-width: var(--bs-tooltip-max-width);\n  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);\n  color: var(--bs-tooltip-color);\n  text-align: center;\n  background-color: var(--bs-tooltip-bg);\n  border-radius: var(--bs-tooltip-border-radius);\n}\n.popover {\n  --bs-popover-zindex: 1070;\n  --bs-popover-max-width: 276px;\n  --bs-popover-font-size: 0.875rem;\n  --bs-popover-bg: #fff;\n  --bs-popover-border-width: 1px;\n  --bs-popover-border-color: var(--bs-border-color-translucent);\n  --bs-popover-border-radius: 0.5rem;\n  --bs-popover-inner-border-radius: calc(0.5rem - 1px);\n  --bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-popover-header-padding-x: 1rem;\n  --bs-popover-header-padding-y: 0.5rem;\n  --bs-popover-header-font-size: 1rem;\n  --bs-popover-header-color: var(--bs-heading-color);\n  --bs-popover-header-bg: #f0f0f0;\n  --bs-popover-body-padding-x: 1rem;\n  --bs-popover-body-padding-y: 1rem;\n  --bs-popover-body-color: #212529;\n  --bs-popover-arrow-width: 1rem;\n  --bs-popover-arrow-height: 0.5rem;\n  --bs-popover-arrow-border: var(--bs-popover-border-color);\n  z-index: var(--bs-popover-zindex);\n  display: block;\n  max-width: var(--bs-popover-max-width);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-popover-font-size);\n  word-wrap: break-word;\n  background-color: var(--bs-popover-bg);\n  background-clip: padding-box;\n  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-radius: var(--bs-popover-border-radius);\n}\n.popover .popover-arrow {\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  height: var(--bs-popover-arrow-height);\n}\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n  border-width: 0;\n}\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\n  bottom: calc(var(--bs-popover-arrow-height) * -1 - var(--bs-popover-border-width));\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\n  bottom: 0;\n  border-top-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  bottom: var(--bs-popover-border-width);\n  border-top-color: var(--bs-popover-bg);\n}\n/* rtl:begin:ignore */\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\n  left: calc(var(--bs-popover-arrow-height) * -1 - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\n  left: 0;\n  border-right-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  left: var(--bs-popover-border-width);\n  border-right-color: var(--bs-popover-bg);\n}\n/* rtl:end:ignore */\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\n  top: calc(var(--bs-popover-arrow-height) * -1 - var(--bs-popover-border-width));\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\n  top: 0;\n  border-bottom-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  top: var(--bs-popover-border-width);\n  border-bottom-color: var(--bs-popover-bg);\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  margin-left: calc(var(--bs-popover-arrow-width) * -0.5);\n  content: \"\";\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);\n}\n/* rtl:begin:ignore */\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\n  right: calc(var(--bs-popover-arrow-height) * -1 - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\n  right: 0;\n  border-left-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  right: var(--bs-popover-border-width);\n  border-left-color: var(--bs-popover-bg);\n}\n/* rtl:end:ignore */\n.popover-header {\n  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);\n  margin-bottom: 0;\n  font-size: var(--bs-popover-header-font-size);\n  color: var(--bs-popover-header-color);\n  background-color: var(--bs-popover-header-bg);\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-top-left-radius: var(--bs-popover-inner-border-radius);\n  border-top-right-radius: var(--bs-popover-inner-border-radius);\n}\n.popover-header:empty {\n  display: none;\n}\n.popover-body {\n  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);\n  color: var(--bs-popover-body-color);\n}\n.carousel {\n  position: relative;\n}\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n    transition: none;\n  }\n}\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev {\n  left: 0;\n}\n.carousel-control-next {\n  right: 0;\n}\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n.spinner-grow,\n.spinner-border {\n  display: inline-block;\n  width: var(--bs-spinner-width);\n  height: var(--bs-spinner-height);\n  vertical-align: var(--bs-spinner-vertical-align);\n  border-radius: 50%;\n  -webkit-animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);\n          animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);\n}\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n.spinner-border {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-border-width: 0.25em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-border;\n  border: var(--bs-spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n.spinner-border-sm {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n  --bs-spinner-border-width: 0.2em;\n}\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.spinner-grow {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-grow;\n  background-color: currentcolor;\n  opacity: 0;\n}\n.spinner-grow-sm {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n.spinner-grow {\n    --bs-spinner-animation-speed: 1.5s;\n  }\n}\n.offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {\n  --bs-offcanvas-width: 400px;\n  --bs-offcanvas-height: 30vh;\n  --bs-offcanvas-padding-x: 1rem;\n  --bs-offcanvas-padding-y: 1rem;\n  --bs-offcanvas-color: ;\n  --bs-offcanvas-bg: #fff;\n  --bs-offcanvas-border-width: 1px;\n  --bs-offcanvas-border-color: var(--bs-border-color-translucent);\n  --bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm {\n    position: fixed;\n    bottom: 0;\n    z-index: 1045;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n}\n@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-sm {\n    transition: none;\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {\n    transform: none;\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 576px) {\n  .offcanvas-sm {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-sm .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-sm .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md {\n    position: fixed;\n    bottom: 0;\n    z-index: 1045;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n}\n@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-md {\n    transition: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {\n    transform: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 768px) {\n  .offcanvas-md {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-md .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-md .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg {\n    position: fixed;\n    bottom: 0;\n    z-index: 1045;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n}\n@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-lg {\n    transition: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {\n    transform: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 992px) {\n  .offcanvas-lg {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-lg .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-lg .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl {\n    position: fixed;\n    bottom: 0;\n    z-index: 1045;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n}\n@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-xl {\n    transition: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {\n    transform: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .offcanvas-xl {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-xl .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-xl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl {\n    position: fixed;\n    bottom: 0;\n    z-index: 1045;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: transform 0.3s ease-in-out;\n  }\n}\n@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-xxl {\n    transition: none;\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.showing, .offcanvas-xxl.show:not(.hiding) {\n    transform: none;\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.showing, .offcanvas-xxl.hiding, .offcanvas-xxl.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 1400px) {\n  .offcanvas-xxl {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-xxl .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-xxl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n.offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: 1045;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: var(--bs-offcanvas-color);\n  visibility: hidden;\n  background-color: var(--bs-offcanvas-bg);\n  background-clip: padding-box;\n  outline: 0;\n  transition: transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .offcanvas {\n    transition: none;\n  }\n}\n.offcanvas.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: var(--bs-offcanvas-width);\n  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(-100%);\n}\n.offcanvas.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: var(--bs-offcanvas-width);\n  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(100%);\n}\n.offcanvas.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(-100%);\n}\n.offcanvas.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(100%);\n}\n.offcanvas.showing, .offcanvas.show:not(.hiding) {\n  transform: none;\n}\n.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {\n  visibility: visible;\n}\n.offcanvas-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade {\n  opacity: 0;\n}\n.offcanvas-backdrop.show {\n  opacity: 0.5;\n}\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n}\n.offcanvas-header .btn-close {\n  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);\n  margin-top: calc(var(--bs-offcanvas-padding-y) * -0.5);\n  margin-right: calc(var(--bs-offcanvas-padding-x) * -0.5);\n  margin-bottom: calc(var(--bs-offcanvas-padding-y) * -0.5);\n}\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.offcanvas-body {\n  flex-grow: 1;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n  overflow-y: auto;\n}\n.placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: 0.5;\n}\n.placeholder.btn::before {\n  display: inline-block;\n  content: \"\";\n}\n.placeholder-xs {\n  min-height: 0.6em;\n}\n.placeholder-sm {\n  min-height: 0.8em;\n}\n.placeholder-lg {\n  min-height: 1.2em;\n}\n.placeholder-glow .placeholder {\n  -webkit-animation: placeholder-glow 2s ease-in-out infinite;\n          animation: placeholder-glow 2s ease-in-out infinite;\n}\n@-webkit-keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n@keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n.placeholder-wave {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n          mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n          mask-size: 200% 100%;\n  -webkit-animation: placeholder-wave 2s linear infinite;\n          animation: placeholder-wave 2s linear infinite;\n}\n@-webkit-keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n            mask-position: -200% 0%;\n  }\n}\n@keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n            mask-position: -200% 0%;\n  }\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.text-bg-primary {\n  color: #fff !important;\n  background-color: RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-secondary {\n  color: #fff !important;\n  background-color: RGBA(102, 102, 102, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-success {\n  color: #fff !important;\n  background-color: RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-info {\n  color: #000 !important;\n  background-color: RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-warning {\n  color: #000 !important;\n  background-color: RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-danger {\n  color: #000 !important;\n  background-color: RGBA(249, 14, 76, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-light {\n  color: #000 !important;\n  background-color: RGBA(246, 246, 246, var(--bs-bg-opacity, 1)) !important;\n}\n.text-bg-dark {\n  color: #fff !important;\n  background-color: RGBA(16, 4, 40, var(--bs-bg-opacity, 1)) !important;\n}\n.link-primary {\n  color: #0d6efd !important;\n}\n.link-primary:hover, .link-primary:focus {\n  color: #0a58ca !important;\n}\n.link-secondary {\n  color: #666 !important;\n}\n.link-secondary:hover, .link-secondary:focus {\n  color: #525252 !important;\n}\n.link-success {\n  color: #198754 !important;\n}\n.link-success:hover, .link-success:focus {\n  color: #146c43 !important;\n}\n.link-info {\n  color: #0dcaf0 !important;\n}\n.link-info:hover, .link-info:focus {\n  color: #3dd5f3 !important;\n}\n.link-warning {\n  color: #ffc107 !important;\n}\n.link-warning:hover, .link-warning:focus {\n  color: #ffcd39 !important;\n}\n.link-danger {\n  color: #F90E4C !important;\n}\n.link-danger:hover, .link-danger:focus {\n  color: #fa3e70 !important;\n}\n.link-light {\n  color: #f6f6f6 !important;\n}\n.link-light:hover, .link-light:focus {\n  color: #f8f8f8 !important;\n}\n.link-dark {\n  color: #100428 !important;\n}\n.link-dark:hover, .link-dark:focus {\n  color: #0d0320 !important;\n}\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 1020;\n}\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-sm-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-md-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-lg-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-xl-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-xxl-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vr {\n  display: inline-block;\n  align-self: stretch;\n  width: 1px;\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: 0.25;\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n.align-top {\n  vertical-align: top !important;\n}\n.align-middle {\n  vertical-align: middle !important;\n}\n.align-bottom {\n  vertical-align: bottom !important;\n}\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n.align-text-top {\n  vertical-align: text-top !important;\n}\n.float-start {\n  float: left !important;\n}\n.float-end {\n  float: right !important;\n}\n.float-none {\n  float: none !important;\n}\n.opacity-0 {\n  opacity: 0 !important;\n}\n.opacity-25 {\n  opacity: 0.25 !important;\n}\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n.opacity-100 {\n  opacity: 1 !important;\n}\n.overflow-auto {\n  overflow: auto !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.overflow-visible {\n  overflow: visible !important;\n}\n.overflow-scroll {\n  overflow: scroll !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.d-inline-block {\n  display: inline-block !important;\n}\n.d-block {\n  display: block !important;\n}\n.d-grid {\n  display: grid !important;\n}\n.d-table {\n  display: table !important;\n}\n.d-table-row {\n  display: table-row !important;\n}\n.d-table-cell {\n  display: table-cell !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.d-inline-flex {\n  display: inline-flex !important;\n}\n.d-none {\n  display: none !important;\n}\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none {\n  box-shadow: none !important;\n}\n.position-static {\n  position: static !important;\n}\n.position-relative {\n  position: relative !important;\n}\n.position-absolute {\n  position: absolute !important;\n}\n.position-fixed {\n  position: fixed !important;\n}\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n.top-0 {\n  top: 0 !important;\n}\n.top-50 {\n  top: 50% !important;\n}\n.top-100 {\n  top: 100% !important;\n}\n.bottom-0 {\n  bottom: 0 !important;\n}\n.bottom-50 {\n  bottom: 50% !important;\n}\n.bottom-100 {\n  bottom: 100% !important;\n}\n.start-0 {\n  left: 0 !important;\n}\n.start-50 {\n  left: 50% !important;\n}\n.start-100 {\n  left: 100% !important;\n}\n.end-0 {\n  right: 0 !important;\n}\n.end-50 {\n  right: 50% !important;\n}\n.end-100 {\n  right: 100% !important;\n}\n.translate-middle {\n  transform: translate(-50%, -50%) !important;\n}\n.translate-middle-x {\n  transform: translateX(-50%) !important;\n}\n.translate-middle-y {\n  transform: translateY(-50%) !important;\n}\n.border {\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-0 {\n  border: 0 !important;\n}\n.border-top {\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-top-0 {\n  border-top: 0 !important;\n}\n.border-end {\n  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-end-0 {\n  border-right: 0 !important;\n}\n.border-bottom {\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n.border-start {\n  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n.border-start-0 {\n  border-left: 0 !important;\n}\n.border-primary {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-secondary {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;\n}\n.border-success {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\n}\n.border-info {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;\n}\n.border-warning {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;\n}\n.border-danger {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;\n}\n.border-light {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;\n}\n.border-dark {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;\n}\n.border-white {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;\n}\n.border-1 {\n  --bs-border-width: 1px;\n}\n.border-2 {\n  --bs-border-width: 2px;\n}\n.border-3 {\n  --bs-border-width: 3px;\n}\n.border-4 {\n  --bs-border-width: 4px;\n}\n.border-5 {\n  --bs-border-width: 5px;\n}\n.border-opacity-10 {\n  --bs-border-opacity: 0.1;\n}\n.border-opacity-25 {\n  --bs-border-opacity: 0.25;\n}\n.border-opacity-50 {\n  --bs-border-opacity: 0.5;\n}\n.border-opacity-75 {\n  --bs-border-opacity: 0.75;\n}\n.border-opacity-100 {\n  --bs-border-opacity: 1;\n}\n.w-25 {\n  width: 25% !important;\n}\n.w-50 {\n  width: 50% !important;\n}\n.w-75 {\n  width: 75% !important;\n}\n.w-100 {\n  width: 100% !important;\n}\n.w-auto {\n  width: auto !important;\n}\n.mw-100 {\n  max-width: 100% !important;\n}\n.vw-100 {\n  width: 100vw !important;\n}\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n.h-25 {\n  height: 25% !important;\n}\n.h-50 {\n  height: 50% !important;\n}\n.h-75 {\n  height: 75% !important;\n}\n.h-100 {\n  height: 100% !important;\n}\n.h-auto {\n  height: auto !important;\n}\n.mh-100 {\n  max-height: 100% !important;\n}\n.vh-100 {\n  height: 100vh !important;\n}\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n.flex-row {\n  flex-direction: row !important;\n}\n.flex-column {\n  flex-direction: column !important;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n.justify-content-center {\n  justify-content: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.justify-content-around {\n  justify-content: space-around !important;\n}\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.align-items-start {\n  align-items: flex-start !important;\n}\n.align-items-end {\n  align-items: flex-end !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.align-items-baseline {\n  align-items: baseline !important;\n}\n.align-items-stretch {\n  align-items: stretch !important;\n}\n.align-content-start {\n  align-content: flex-start !important;\n}\n.align-content-end {\n  align-content: flex-end !important;\n}\n.align-content-center {\n  align-content: center !important;\n}\n.align-content-between {\n  align-content: space-between !important;\n}\n.align-content-around {\n  align-content: space-around !important;\n}\n.align-content-stretch {\n  align-content: stretch !important;\n}\n.align-self-auto {\n  align-self: auto !important;\n}\n.align-self-start {\n  align-self: flex-start !important;\n}\n.align-self-end {\n  align-self: flex-end !important;\n}\n.align-self-center {\n  align-self: center !important;\n}\n.align-self-baseline {\n  align-self: baseline !important;\n}\n.align-self-stretch {\n  align-self: stretch !important;\n}\n.order-first {\n  order: -1 !important;\n}\n.order-0 {\n  order: 0 !important;\n}\n.order-1 {\n  order: 1 !important;\n}\n.order-2 {\n  order: 2 !important;\n}\n.order-3 {\n  order: 3 !important;\n}\n.order-4 {\n  order: 4 !important;\n}\n.order-5 {\n  order: 5 !important;\n}\n.order-last {\n  order: 6 !important;\n}\n.m-0 {\n  margin: 0 !important;\n}\n.m-1 {\n  margin: 0.25rem !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.m-3 {\n  margin: 1rem !important;\n}\n.m-4 {\n  margin: 1.5rem !important;\n}\n.m-5 {\n  margin: 3rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n.mt-3 {\n  margin-top: 1rem !important;\n}\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n.mt-5 {\n  margin-top: 3rem !important;\n}\n.mt-auto {\n  margin-top: auto !important;\n}\n.me-0 {\n  margin-right: 0 !important;\n}\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n.me-3 {\n  margin-right: 1rem !important;\n}\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n.me-5 {\n  margin-right: 3rem !important;\n}\n.me-auto {\n  margin-right: auto !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n.mb-auto {\n  margin-bottom: auto !important;\n}\n.ms-0 {\n  margin-left: 0 !important;\n}\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n.ms-3 {\n  margin-left: 1rem !important;\n}\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n.ms-5 {\n  margin-left: 3rem !important;\n}\n.ms-auto {\n  margin-left: auto !important;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.p-4 {\n  padding: 1.5rem !important;\n}\n.p-5 {\n  padding: 3rem !important;\n}\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n.pt-0 {\n  padding-top: 0 !important;\n}\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n.pt-3 {\n  padding-top: 1rem !important;\n}\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n.pt-5 {\n  padding-top: 3rem !important;\n}\n.pe-0 {\n  padding-right: 0 !important;\n}\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n.pe-3 {\n  padding-right: 1rem !important;\n}\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n.pe-5 {\n  padding-right: 3rem !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n.ps-0 {\n  padding-left: 0 !important;\n}\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n.ps-3 {\n  padding-left: 1rem !important;\n}\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n.ps-5 {\n  padding-left: 3rem !important;\n}\n.gap-0 {\n  gap: 0 !important;\n}\n.gap-1 {\n  gap: 0.25rem !important;\n}\n.gap-2 {\n  gap: 0.5rem !important;\n}\n.gap-3 {\n  gap: 1rem !important;\n}\n.gap-4 {\n  gap: 1.5rem !important;\n}\n.gap-5 {\n  gap: 3rem !important;\n}\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n.fs-6 {\n  font-size: 1rem !important;\n}\n.fst-italic {\n  font-style: italic !important;\n}\n.fst-normal {\n  font-style: normal !important;\n}\n.fw-light {\n  font-weight: 300 !important;\n}\n.fw-lighter {\n  font-weight: lighter !important;\n}\n.fw-normal {\n  font-weight: 400 !important;\n}\n.fw-bold {\n  font-weight: 700 !important;\n}\n.fw-semibold {\n  font-weight: 600 !important;\n}\n.fw-bolder {\n  font-weight: bolder !important;\n}\n.lh-1 {\n  line-height: 1 !important;\n}\n.lh-sm {\n  line-height: 1.25 !important;\n}\n.lh-base {\n  line-height: 1.5 !important;\n}\n.lh-lg {\n  line-height: 2 !important;\n}\n.text-start {\n  text-align: left !important;\n}\n.text-end {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n/* rtl:end:remove */\n.text-primary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-secondary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n.text-success {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n.text-info {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n.text-warning {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n.text-danger {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n.text-light {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n.text-dark {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n.text-black {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n.text-white {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n.text-body {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n.text-muted {\n  --bs-text-opacity: 1;\n  color: #6c757d !important;\n}\n.text-black-50 {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-reset {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n.text-opacity-25 {\n  --bs-text-opacity: 0.25;\n}\n.text-opacity-50 {\n  --bs-text-opacity: 0.5;\n}\n.text-opacity-75 {\n  --bs-text-opacity: 0.75;\n}\n.text-opacity-100 {\n  --bs-text-opacity: 1;\n}\n.bg-primary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-secondary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-success {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-info {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-warning {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-danger {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-light {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-dark {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-black {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-body {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n.bg-transparent {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n.bg-opacity-10 {\n  --bs-bg-opacity: 0.1;\n}\n.bg-opacity-25 {\n  --bs-bg-opacity: 0.25;\n}\n.bg-opacity-50 {\n  --bs-bg-opacity: 0.5;\n}\n.bg-opacity-75 {\n  --bs-bg-opacity: 0.75;\n}\n.bg-opacity-100 {\n  --bs-bg-opacity: 1;\n}\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n}\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.pe-none {\n  pointer-events: none !important;\n}\n.pe-auto {\n  pointer-events: auto !important;\n}\n.rounded {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-0 {\n  border-radius: 0 !important;\n}\n.rounded-1 {\n  border-radius: var(--bs-border-radius-sm) !important;\n}\n.rounded-2 {\n  border-radius: var(--bs-border-radius) !important;\n}\n.rounded-3 {\n  border-radius: var(--bs-border-radius-lg) !important;\n}\n.rounded-4 {\n  border-radius: var(--bs-border-radius-xl) !important;\n}\n.rounded-5 {\n  border-radius: var(--bs-border-radius-2xl) !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.rounded-pill {\n  border-radius: var(--bs-border-radius-pill) !important;\n}\n.rounded-top {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-end {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n.rounded-bottom {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n.rounded-start {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n.visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden !important;\n}\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n  .float-sm-end {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-grid {\n    display: grid !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-sm-none {\n    display: none !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n  .order-sm-first {\n    order: -1 !important;\n  }\n  .order-sm-0 {\n    order: 0 !important;\n  }\n  .order-sm-1 {\n    order: 1 !important;\n  }\n  .order-sm-2 {\n    order: 2 !important;\n  }\n  .order-sm-3 {\n    order: 3 !important;\n  }\n  .order-sm-4 {\n    order: 4 !important;\n  }\n  .order-sm-5 {\n    order: 5 !important;\n  }\n  .order-sm-last {\n    order: 6 !important;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n  .text-sm-start {\n    text-align: left !important;\n  }\n  .text-sm-end {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n  .float-md-end {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-grid {\n    display: grid !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-md-none {\n    display: none !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n  .order-md-first {\n    order: -1 !important;\n  }\n  .order-md-0 {\n    order: 0 !important;\n  }\n  .order-md-1 {\n    order: 1 !important;\n  }\n  .order-md-2 {\n    order: 2 !important;\n  }\n  .order-md-3 {\n    order: 3 !important;\n  }\n  .order-md-4 {\n    order: 4 !important;\n  }\n  .order-md-5 {\n    order: 5 !important;\n  }\n  .order-md-last {\n    order: 6 !important;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n  .text-md-start {\n    text-align: left !important;\n  }\n  .text-md-end {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n  .float-lg-end {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-grid {\n    display: grid !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-lg-none {\n    display: none !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n  .order-lg-first {\n    order: -1 !important;\n  }\n  .order-lg-0 {\n    order: 0 !important;\n  }\n  .order-lg-1 {\n    order: 1 !important;\n  }\n  .order-lg-2 {\n    order: 2 !important;\n  }\n  .order-lg-3 {\n    order: 3 !important;\n  }\n  .order-lg-4 {\n    order: 4 !important;\n  }\n  .order-lg-5 {\n    order: 5 !important;\n  }\n  .order-lg-last {\n    order: 6 !important;\n  }\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n  .text-lg-start {\n    text-align: left !important;\n  }\n  .text-lg-end {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n  .float-xl-end {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-grid {\n    display: grid !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xl-none {\n    display: none !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xl-first {\n    order: -1 !important;\n  }\n  .order-xl-0 {\n    order: 0 !important;\n  }\n  .order-xl-1 {\n    order: 1 !important;\n  }\n  .order-xl-2 {\n    order: 2 !important;\n  }\n  .order-xl-3 {\n    order: 3 !important;\n  }\n  .order-xl-4 {\n    order: 4 !important;\n  }\n  .order-xl-5 {\n    order: 5 !important;\n  }\n  .order-xl-last {\n    order: 6 !important;\n  }\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n  .text-xl-start {\n    text-align: left !important;\n  }\n  .text-xl-end {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n  .float-xxl-end {\n    float: right !important;\n  }\n  .float-xxl-none {\n    float: none !important;\n  }\n  .d-xxl-inline {\n    display: inline !important;\n  }\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xxl-block {\n    display: block !important;\n  }\n  .d-xxl-grid {\n    display: grid !important;\n  }\n  .d-xxl-table {\n    display: table !important;\n  }\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xxl-flex {\n    display: flex !important;\n  }\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xxl-none {\n    display: none !important;\n  }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xxl-first {\n    order: -1 !important;\n  }\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n  .order-xxl-last {\n    order: 6 !important;\n  }\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n  .text-xxl-start {\n    text-align: left !important;\n  }\n  .text-xxl-end {\n    text-align: right !important;\n  }\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-grid {\n    display: grid !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-print-none {\n    display: none !important;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 1.6rem;\n  transition: all 0.3s linear;\n}\nhtml,\nbody {\n  font-size: 62.5%;\n  font-family: \"Comic Neue\", cursive;\n}\nhtml main,\nbody main {\n  min-height: 70vh;\n}\nhtml .container-fluid, html .container-sm, html .container-md, html .container-lg, html .container-xl, html .container-xxl,\nbody .container-fluid,\nbody .container-sm,\nbody .container-md,\nbody .container-lg,\nbody .container-xl,\nbody .container-xxl {\n  padding: 0rem 2rem;\n  margin: auto;\n}\nhtml .container-fluid h2, html .container-sm h2, html .container-md h2, html .container-lg h2, html .container-xl h2, html .container-xxl h2, html .container-fluid .h2, html .container-sm .h2, html .container-md .h2, html .container-lg .h2, html .container-xl .h2, html .container-xxl .h2,\nbody .container-fluid h2,\nbody .container-sm h2,\nbody .container-md h2,\nbody .container-lg h2,\nbody .container-xl h2,\nbody .container-xxl h2,\nbody .container-fluid .h2,\nbody .container-sm .h2,\nbody .container-md .h2,\nbody .container-lg .h2,\nbody .container-xl .h2,\nbody .container-xxl .h2 {\n  text-align: center;\n  font-size: 3.6rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\nhtml a,\nbody a {\n  text-decoration: none;\n}\n.page-enter-active,\n.page-leave-active {\n  transition: all 1s ease-in-out;\n}\n/* delay leave of parent element */\n.page-leave-active {\n  transition-delay: 0.25s;\n}\n.page-enter-from,\n.page-leave-to {\n  transform: translateY(30px);\n  opacity: 0;\n}\n/* we can also transition page elements using page selectors */\n.page-enter-active main,\n.page-leave-active main {\n  transition: all 0.3s ease-in-out;\n}\n/* delay enter of page element */\n.page-enter-active main {\n  transition-delay: 0.25s;\n}\n.page-enter-from main,\n.page-leave-to main {\n  transform: translateX(30px);\n  /*\n  \tHack around a Chrome 96 bug in handling page opacity transitions.\n    This is not needed in other browsers or Chrome 99+ where the bug\n    has been fixed.\n  */\n  opacity: 0.001;\n}\n.navbar {\n  height: 7rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #100428;\n  background-color: #fff;\n  transition: all 0.3s linear;\n  background-image: linear-gradient(to right, #F90E4C 60%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 1rem 1px;\n  background-repeat: repeat-x;\n}\n.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl, .navbar .container-xxl {\n  display: grid;\n  grid-template-columns: 10rem auto 40rem auto;\n}\n.navbar .container-fluid [class*=navbar-], .navbar .container-sm [class*=navbar-], .navbar .container-md [class*=navbar-], .navbar .container-lg [class*=navbar-], .navbar .container-xl [class*=navbar-], .navbar .container-xxl [class*=navbar-] {\n  display: flex;\n  grid-gap: 1rem;\n  align-items: center;\n  font-size: 1.6rem;\n}\n.navbar-menu a {\n  color: #100428;\n  font-weight: bold;\n  padding: 0rem 1rem;\n}\n.navbar-buttons-box {\n  width: 5rem;\n}\n.navbar-search {\n  position: relative;\n}\n.navbar-search .fa-solid {\n  position: absolute;\n  right: 0.5rem;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 3rem;\n  width: 3rem;\n  border-radius: 100%;\n  background-color: #6839CC;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navbar-search .form-control {\n  height: 4rem;\n  font-size: 1.4rem;\n  border-radius: 4rem;\n  border-color: #6839CC;\n}\n.upr-navbar {\n  background-color: #6839CC;\n  color: #fff;\n  font-size: 1.4rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upr-navbar .container-fluid, .upr-navbar .container-sm, .upr-navbar .container-md, .upr-navbar .container-lg, .upr-navbar .container-xl, .upr-navbar .container-xxl {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.upr-navbar-left {\n  display: flex;\n  grid-gap: 1.5rem;\n}\n.upr-navbar-left i {\n  font-size: 1.4rem;\n  margin-right: 0.5rem;\n}\n.upr-navbar-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upr-navbar-center .badge {\n  background-color: #FA782D;\n  border-radius: 1rem;\n  margin-right: 0.5rem;\n}\n.upr-navbar-center i {\n  margin-right: 0.5rem;\n}\n.upr-navbar-right {\n  display: flex;\n  grid-gap: 1rem;\n  justify-content: flex-end;\n}\n.upr-navbar-right .form-select {\n  background-color: transparent;\n  color: #fff;\n  border-color: transparent;\n  width: 9rem;\n  font-size: 1.3rem;\n}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs ($id_Rm7cDADAVO)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// --------------------
const $id_0iup2zVHsf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1SAEi7QN5N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_ERlXuI58HG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - vue ($id_VkOCJnUZrn)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_wRsEVKfW1P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta = __vite_ssr_import_0__.renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_19kbcSkZ7c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template(__vite_ssr_import_0__.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(__vite_ssr_import_0__.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => __vite_ssr_import_0__.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(__vite_ssr_import_0__.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = __vite_ssr_import_0__.ref(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = __spreadProps(__spreadValues({}, node.props), {
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  });
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/meta.config.mjs ($id_gEN4Blna9q)
// --------------------
const $id_72hUrj443r = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_PE2LM6mDyc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const NoScript = __vite_ssr_import_0__.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    const noscript = { ...props };
    const textContent = (slots.default?.() || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "NoScript", { enumerable: true, configurable: true, get(){ return NoScript }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_8KlkmjT0xk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[],"link":[],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/router.options.mjs ($id_SCJom7ue9w)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/middleware.mjs ($id_ZH7LAkARB8)
// --------------------
const $id_MTJBSoyeFQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/router.options.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_6__.defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_5__.default);
  const baseURL = __vite_ssr_import_6__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_2__.createWebHistory(baseURL) : __vite_ssr_import_2__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_2__.createRouter({
    ...__vite_ssr_import_8__.default,
    history: routerHistory,
    routes: __vite_ssr_import_7__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_1__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_6__.useError();
  try {
    if (true) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_1__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_9__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_9__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_9__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_6__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_3__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [__vite_ssr_import_3__.createError({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_4__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_L9I1eoE7dW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps);
          return __vite_ssr_import_4__._wrapIf(
            __vite_ssr_import_0__.Transition,
            routeProps.route.meta.pageTransition ?? defaultPageTransition,
            __vite_ssr_import_2__.wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = __vite_ssr_import_0__.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    return () => __vite_ssr_import_0__.h(props.routeProps.Component);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_ZR0LUqwyer = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_NgApSiB2xA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/contact.vue?macro=true ($id_ti9Tlvad9S)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/contact.vue ($id_c1pJl5yWum)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// --------------------
const $id_9f7Q7dUrSO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/category.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/contact.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/product/[id].vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "about",
    path: "/about",
    file: "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/about.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/about.vue").then(m => m.default || m)
  },
  {
    name: "category",
    path: "/category",
    file: "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/category.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/category.vue").then(m => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    file: "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/contact.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/contact.vue").then(m => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/index.vue").then(m => m.default || m)
  },
  {
    name: "product-id",
    path: "/product/:id",
    file: "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/product/[id].vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/product/[id].vue").then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/about.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_h4HZY2CriC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}></main>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/about.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/contact.vue?macro=true ($id_ti9Tlvad9S)
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/contact.vue ($id_c1pJl5yWum)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/Inc/UprNavbar.vue ($id_NxVdIJY0ws)
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/contact.vue?macro=true ($id_ti9Tlvad9S)
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/contact.vue ($id_c1pJl5yWum)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/Inc/UprNavbar.vue ($id_NxVdIJY0ws)
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/category.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - vue ($id_VkOCJnUZrn)
// - /assets/data/products.json ($id_uC0ly54lTX)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_LfSdnO1G5A = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Part/ProductFilter.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Part/breadcrumb.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/productContainer.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Part/productCart.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/data/products.json");


const _sfc_main = {
  __name: 'category',
  setup(__props, { expose }) {
  expose();

const filterClose = __vite_ssr_import_4__.ref(false);
// const products = ref([]);

function onFilterClick(value) {
  filterClose.value = value;
}
// const data = await useFetch("http://3.111.70.214:1337/products");
// const products = data.data._rawValue;
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/products")
//     .then((res) => res.json())
//     .then((data) => (products.value = data))
//     .catch((err) => console.log(err.message));
// });

const __returned__ = { filterClose, onFilterClick, products: __vite_ssr_import_5__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PartProductFilter = __vite_ssr_import_0__.default
  const _component_PartBreadcrumb = __vite_ssr_import_1__.default
  const _component_PartProductContainer = __vite_ssr_import_2__.default
  const _component_PartProductCart = __vite_ssr_import_3__.default

  _push(`<main${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}><div class="container-fluid"><!-- Product Filters -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductFilter, {
    close: $setup.filterClose,
    onClose: $setup.onFilterClick
  }, null, _parent))
  _push(`<!-- Page Breadcrumb -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ['Home', 'Category'] }, null, _parent))
  _push(`<!-- Page Sorting Filter --><div class="filter-section"><div class="filter-section-left"><label><i class="fa-solid fa-filter"></i> Filter </label><div class="form-group"><select name id class="form-select"><option value>Default Sorting</option></select></div></div><div class="filter-section-right">showing 1 - 16 of 19 results</div></div><!-- Product Container -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductCart, {
            key: product.title,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_PartProductCart, {
              key: product.title,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="${__vite_ssr_import_7__.ssrRenderClass([[$setup.products?.count ? '' : 'd-none'], "pagination-section"])}"><div class="pagination-section-box">1</div><div class="pagination-section-box">2</div><div class="pagination-section-box"><i class="fa-solid fa-angle-right"></i></div></div><!-- Relatedable Products --><div class="relatable-product"><h2>Top Rated Products</h2>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductCart, {
            key: product.title,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_PartProductCart, {
              key: product.title,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></main>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/category.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/category.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Part/ProductFilter.vue
// Parents: 
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/category.vue ($id_PpKinrdwfg)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - /assets/data/categories.json ($id_mA6QsOKSh7)
// - /assets/data/occasions.json ($id_7JDKS4evoL)
// - /assets/data/relations.json ($id_A3jBKqxk2W)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/ProductFilter.vue?vue&type=style&index=0&lang.scss ($id_q65dL1EDeX)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_rBYCXqctR2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/categories.json");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/data/occasions.json");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/data/relations.json");

// const categories = await useFetch("http://3.111.70.214:1337/categories").data
//   ._rawValue;
// const occasions = await useFetch("http://3.111.70.214:1337/occasions").data
//   ._rawValue;
// const relations = await useFetch("http://3.111.70.214:1337/relations").data
//   ._rawValue;
// const categories = ref([]);
// const occasions = ref([]);
// const relations = ref([]);

// onMounted(() => {
//   fetch("http://3.111.70.214:1337/categories")
//     .then((res) => res.json())
//     .then((data) => (categories.value = data))
//     .catch((err) => console.log(err.message));

//   fetch("http://3.111.70.214:1337/occasions")
//     .then((res) => res.json())
//     .then((data) => (occasions.value = data))
//     .catch((err) => console.log(err.message));

//   fetch("http://3.111.70.214:1337/relations")
//     .then((res) => res.json())
//     .then((data) => (relations.value = data))
//     .catch((err) => console.log(err.message));
// });


const _sfc_main = {
  __name: 'ProductFilter',
  props: {
  close: Boolean,
},
  setup(__props, { expose }) {
  expose();

const props = __props



__vite_ssr_import_1__.computed(() => {
  var close = __vite_ssr_import_1__.ref(props.close);
});

const __returned__ = { props, categories: __vite_ssr_import_2__.default, occasions: __vite_ssr_import_3__.default, relations: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_6__.ssrRenderAttrs(_attrs)
  }><div class="${
    __vite_ssr_import_6__.ssrRenderClass([[$props.close ? 'display' : ''], "product-filter"])
  }"><div class="container-fluid"><h2 class="sticky-top"> Product Categories <div class="product-filter-close"><i class="fa-solid fa-xmark"></i></div></h2><div class="product-filter-categories"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.categories, (category) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_nuxt_link, {
      key: category.Title,
      to: "/"
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${
            __vite_ssr_import_6__.ssrInterpolate(category.Title)
          } <span${
            _scopeId
          }>(5)</span>`)
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(category.Title) + " ", 1 /* TEXT */),
            __vite_ssr_import_5__.createVNode("span", null, "(5)")
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></div><h2>Filter By Price</h2><div class="product-filter-price"><input type="range" class="form-range" id="customRange1"><div class="product-filter-price-show"><span> Price: <i class="fa-solid fa-indian-rupee-sign"></i>100 - <i class="fa-solid fa-indian-rupee-sign"></i> 1000 </span><button class="btn btn-primary"> Filter <i class="fa-solid fa-angle-right"></i></button></div></div><h2>Filter By Ocassions</h2><div class="product-filter-categories"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.occasions, (occasion) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_nuxt_link, {
      key: occasion.Title,
      to: "/"
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_6__.ssrInterpolate(occasion.Title)}`)
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(occasion.Title), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></div><h2>Filter By Relations</h2><div class="product-filter-tags"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.relations, (relation) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_nuxt_link, {
      key: relation.Title,
      to: "/"
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_6__.ssrInterpolate(relation.Title)}`)
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(relation.Title), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></div></div></div></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Part/ProductFilter.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/ProductFilter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/ProductFilter.vue"]]);
}


// --------------------
// Request: /assets/data/categories.json
// Parents: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// Dependencies: 

// --------------------
const $id_6bkbomDiit = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		Title: "Room Decoration",
		published_at: "2022-08-31T06:16:59.465Z",
		created_at: "2022-08-31T06:16:56.222Z",
		updated_at: "2022-08-31T06:16:59.484Z",
		occasions: [
			{
				id: 1,
				Title: "Birthday",
				category: 1,
				featured: true,
				published_at: "2022-08-31T05:50:48.303Z",
				created_at: "2022-08-31T05:50:46.234Z",
				updated_at: "2022-08-31T06:25:39.965Z",
				icon: {
					id: 6,
					name: "3fc0a78fe1d534a6b001fef0fea650b4.webp",
					alternativeText: "",
					caption: "",
					width: 400,
					height: 300,
					formats: {
						thumbnail: {
							name: "thumbnail_3fc0a78fe1d534a6b001fef0fea650b4.webp",
							hash: "thumbnail_3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60",
							ext: ".webp",
							mime: "image/webp",
							width: 208,
							height: 156,
							size: 5.26,
							path: null,
							url: "/uploads/thumbnail_3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60.webp"
						}
					},
					hash: "3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60",
					ext: ".webp",
					mime: "image/webp",
					size: 11.28,
					url: "/uploads/3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60.webp",
					previewUrl: null,
					provider: "local",
					provider_metadata: null,
					created_at: "2022-08-31T06:25:36.898Z",
					updated_at: "2022-08-31T06:25:36.909Z"
				}
			},
			{
				id: 2,
				Title: "Anniversary",
				category: 1,
				featured: true,
				published_at: "2022-08-31T05:51:00.098Z",
				created_at: "2022-08-31T05:50:58.446Z",
				updated_at: "2022-08-31T06:28:24.955Z",
				icon: {
					id: 7,
					name: "anniversary.png",
					alternativeText: "",
					caption: "",
					width: 128,
					height: 128,
					formats: null,
					hash: "anniversary_55b7d6ffd5",
					ext: ".png",
					mime: "image/png",
					size: 8.04,
					url: "/uploads/anniversary_55b7d6ffd5.png",
					previewUrl: null,
					provider: "local",
					provider_metadata: null,
					created_at: "2022-08-31T06:28:21.584Z",
					updated_at: "2022-08-31T06:28:21.595Z"
				}
			},
			{
				id: 7,
				Title: "Wedding",
				category: 1,
				featured: null,
				published_at: "2022-08-31T05:52:01.880Z",
				created_at: "2022-08-31T05:51:59.937Z",
				updated_at: "2022-08-31T06:16:56.236Z",
				icon: null
			}
		],
		relation: [
			{
				id: 2,
				Title: "Wife",
				category: 1,
				published_at: "2022-08-31T06:01:06.188Z",
				created_at: "2022-08-31T06:01:04.327Z",
				updated_at: "2022-08-31T06:16:56.237Z"
			},
			{
				id: 3,
				Title: "Girlfriend",
				category: 1,
				published_at: "2022-08-31T06:01:14.925Z",
				created_at: "2022-08-31T06:01:12.962Z",
				updated_at: "2022-08-31T06:16:56.237Z"
			},
			{
				id: 4,
				Title: "Boyfriend",
				category: 1,
				published_at: "2022-08-31T06:01:24.281Z",
				created_at: "2022-08-31T06:01:22.459Z",
				updated_at: "2022-08-31T06:16:56.237Z"
			}
		]
	},
	{
		id: 2,
		Title: "Stae Decoration",
		published_at: "2022-08-31T07:35:30.594Z",
		created_at: "2022-08-31T07:35:27.877Z",
		updated_at: "2022-08-31T07:35:30.610Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 3,
		Title: "Candle Light Dinner",
		published_at: "2022-08-31T07:36:06.094Z",
		created_at: "2022-08-31T07:36:04.100Z",
		updated_at: "2022-08-31T07:36:06.109Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 4,
		Title: "Welcome Baby",
		published_at: "2022-08-31T07:36:17.530Z",
		created_at: "2022-08-31T07:36:15.616Z",
		updated_at: "2022-08-31T07:36:17.545Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 5,
		Title: "Terrace Decoration",
		published_at: "2022-08-31T07:36:31.919Z",
		created_at: "2022-08-31T07:36:29.500Z",
		updated_at: "2022-08-31T07:36:31.936Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 6,
		Title: "Car Decoration",
		published_at: "2022-08-31T07:36:43.226Z",
		created_at: "2022-08-31T07:36:41.290Z",
		updated_at: "2022-08-31T07:36:43.241Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 7,
		Title: "Proposal Decoration",
		published_at: "2022-08-31T07:36:56.798Z",
		created_at: "2022-08-31T07:36:54.823Z",
		updated_at: "2022-08-31T07:36:56.829Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 8,
		Title: "Cobana Decoration",
		published_at: "2022-08-31T07:37:12.062Z",
		created_at: "2022-08-31T07:37:09.896Z",
		updated_at: "2022-08-31T07:37:12.077Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 9,
		Title: "Wedding Night Decoration",
		published_at: "2022-08-31T07:37:33.035Z",
		created_at: "2022-08-31T07:37:31.031Z",
		updated_at: "2022-08-31T07:37:33.051Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 10,
		Title: "Bachelorette Decoration",
		published_at: "2022-08-31T07:37:57.542Z",
		created_at: "2022-08-31T07:37:54.766Z",
		updated_at: "2022-08-31T07:37:57.557Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 11,
		Title: "Hotel Room Decoration",
		published_at: "2022-08-31T07:38:11.841Z",
		created_at: "2022-08-31T07:38:09.669Z",
		updated_at: "2022-08-31T07:38:11.859Z",
		occasions: [
		],
		relation: [
		]
	},
	{
		id: 12,
		Title: "Ballon Bouquets",
		published_at: "2022-08-31T07:38:41.184Z",
		created_at: "2022-08-31T07:38:39.017Z",
		updated_at: "2022-08-31T07:38:41.198Z",
		occasions: [
		],
		relation: [
		]
	}
];;
}


// --------------------
// Request: /assets/data/occasions.json
// Parents: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// Dependencies: 

// --------------------
const $id_0LnRpa30qO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		Title: "Birthday",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		featured: true,
		published_at: "2022-08-31T05:50:48.303Z",
		created_at: "2022-08-31T05:50:46.234Z",
		updated_at: "2022-08-31T06:25:39.965Z",
		icon: {
			id: 6,
			name: "3fc0a78fe1d534a6b001fef0fea650b4.webp",
			alternativeText: "",
			caption: "",
			width: 400,
			height: 300,
			formats: {
				thumbnail: {
					name: "thumbnail_3fc0a78fe1d534a6b001fef0fea650b4.webp",
					hash: "thumbnail_3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60",
					ext: ".webp",
					mime: "image/webp",
					width: 208,
					height: 156,
					size: 5.26,
					path: null,
					url: "/uploads/thumbnail_3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60.webp"
				}
			},
			hash: "3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60",
			ext: ".webp",
			mime: "image/webp",
			size: 11.28,
			url: "/uploads/3fc0a78fe1d534a6b001fef0fea650b4_7416ce4f60.webp",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T06:25:36.898Z",
			updated_at: "2022-08-31T06:25:36.909Z"
		}
	},
	{
		id: 2,
		Title: "Anniversary",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		featured: true,
		published_at: "2022-08-31T05:51:00.098Z",
		created_at: "2022-08-31T05:50:58.446Z",
		updated_at: "2022-08-31T06:28:24.955Z",
		icon: {
			id: 7,
			name: "anniversary.png",
			alternativeText: "",
			caption: "",
			width: 128,
			height: 128,
			formats: null,
			hash: "anniversary_55b7d6ffd5",
			ext: ".png",
			mime: "image/png",
			size: 8.04,
			url: "/uploads/anniversary_55b7d6ffd5.png",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T06:28:21.584Z",
			updated_at: "2022-08-31T06:28:21.595Z"
		}
	},
	{
		id: 3,
		Title: "Baby Shower",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:51:11.432Z",
		created_at: "2022-08-31T05:51:09.185Z",
		updated_at: "2022-08-31T05:51:11.444Z",
		icon: null
	},
	{
		id: 4,
		Title: "Welcome Baby",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:51:24.731Z",
		created_at: "2022-08-31T05:51:22.255Z",
		updated_at: "2022-08-31T05:51:24.741Z",
		icon: null
	},
	{
		id: 5,
		Title: "Rice Ceremony",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:51:38.348Z",
		created_at: "2022-08-31T05:51:36.078Z",
		updated_at: "2022-08-31T05:51:38.359Z",
		icon: null
	},
	{
		id: 6,
		Title: "Bachelor Party",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:51:50.187Z",
		created_at: "2022-08-31T05:51:48.530Z",
		updated_at: "2022-08-31T05:51:50.200Z",
		icon: null
	},
	{
		id: 7,
		Title: "Wedding",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		featured: null,
		published_at: "2022-08-31T05:52:01.880Z",
		created_at: "2022-08-31T05:51:59.937Z",
		updated_at: "2022-08-31T06:16:56.236Z",
		icon: null
	},
	{
		id: 8,
		Title: "Haldi",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:52:12.784Z",
		created_at: "2022-08-31T05:52:09.109Z",
		updated_at: "2022-08-31T05:52:12.793Z",
		icon: null
	},
	{
		id: 9,
		Title: "Proposal",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:52:24.446Z",
		created_at: "2022-08-31T05:52:21.634Z",
		updated_at: "2022-08-31T05:52:24.457Z",
		icon: null
	},
	{
		id: 10,
		Title: "Festival",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:52:39.946Z",
		created_at: "2022-08-31T05:52:37.785Z",
		updated_at: "2022-08-31T06:23:27.861Z",
		icon: null
	},
	{
		id: 11,
		Title: "Others",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:52:48.990Z",
		created_at: "2022-08-31T05:52:46.738Z",
		updated_at: "2022-08-31T05:52:49.001Z",
		icon: null
	},
	{
		id: 12,
		Title: "Corporate Event",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:53:23.314Z",
		created_at: "2022-08-31T05:53:20.641Z",
		updated_at: "2022-08-31T05:53:23.329Z",
		icon: null
	},
	{
		id: 13,
		Title: "Shop Opening",
		category: null,
		featured: null,
		published_at: "2022-08-31T05:53:36.826Z",
		created_at: "2022-08-31T05:53:33.456Z",
		updated_at: "2022-08-31T05:53:36.841Z",
		icon: null
	},
	{
		id: 14,
		Title: "Kids",
		category: null,
		featured: true,
		published_at: "2022-08-31T06:22:27.090Z",
		created_at: "2022-08-31T06:22:23.439Z",
		updated_at: "2022-08-31T06:30:06.593Z",
		icon: {
			id: 8,
			name: "playtime.png",
			alternativeText: "",
			caption: "",
			width: 128,
			height: 128,
			formats: null,
			hash: "playtime_d9c4f12788",
			ext: ".png",
			mime: "image/png",
			size: 7.84,
			url: "/uploads/playtime_d9c4f12788.png",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T06:30:02.394Z",
			updated_at: "2022-08-31T06:30:02.406Z"
		}
	},
	{
		id: 15,
		Title: "Dinner",
		category: null,
		featured: true,
		published_at: "2022-08-31T06:22:42.267Z",
		created_at: "2022-08-31T06:22:37.543Z",
		updated_at: "2022-08-31T06:31:09.902Z",
		icon: {
			id: 9,
			name: "dinner.png",
			alternativeText: "",
			caption: "",
			width: 128,
			height: 128,
			formats: null,
			hash: "dinner_6f36f36aa5",
			ext: ".png",
			mime: "image/png",
			size: 6.28,
			url: "/uploads/dinner_6f36f36aa5.png",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T06:31:06.606Z",
			updated_at: "2022-08-31T06:31:06.615Z"
		}
	}
];;
}


// --------------------
// Request: /assets/data/relations.json
// Parents: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// Dependencies: 

// --------------------
const $id_TNeBIqk9SR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		Title: "Dad",
		category: null,
		published_at: "2022-08-31T06:00:58.613Z",
		created_at: "2022-08-31T06:00:56.890Z",
		updated_at: "2022-08-31T06:00:58.626Z"
	},
	{
		id: 2,
		Title: "Wife",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		published_at: "2022-08-31T06:01:06.188Z",
		created_at: "2022-08-31T06:01:04.327Z",
		updated_at: "2022-08-31T06:16:56.237Z"
	},
	{
		id: 3,
		Title: "Girlfriend",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		published_at: "2022-08-31T06:01:14.925Z",
		created_at: "2022-08-31T06:01:12.962Z",
		updated_at: "2022-08-31T06:16:56.237Z"
	},
	{
		id: 4,
		Title: "Boyfriend",
		category: {
			id: 1,
			Title: "Room Decoration",
			published_at: "2022-08-31T06:16:59.465Z",
			created_at: "2022-08-31T06:16:56.222Z",
			updated_at: "2022-08-31T06:16:59.484Z"
		},
		published_at: "2022-08-31T06:01:24.281Z",
		created_at: "2022-08-31T06:01:22.459Z",
		updated_at: "2022-08-31T06:16:56.237Z"
	},
	{
		id: 5,
		Title: "Brother",
		category: null,
		published_at: "2022-08-31T06:01:35.296Z",
		created_at: "2022-08-31T06:01:33.432Z",
		updated_at: "2022-08-31T06:01:35.315Z"
	},
	{
		id: 6,
		Title: "Sister",
		category: null,
		published_at: "2022-08-31T06:01:43.120Z",
		created_at: "2022-08-31T06:01:41.276Z",
		updated_at: "2022-08-31T06:01:43.131Z"
	},
	{
		id: 7,
		Title: "Grandparents",
		category: null,
		published_at: "2022-08-31T06:01:55.739Z",
		created_at: "2022-08-31T06:01:53.851Z",
		updated_at: "2022-08-31T06:01:55.752Z"
	},
	{
		id: 8,
		Title: "Mom",
		category: null,
		published_at: "2022-08-31T06:02:04.837Z",
		created_at: "2022-08-31T06:02:02.918Z",
		updated_at: "2022-08-31T06:02:04.881Z"
	},
	{
		id: 9,
		Title: "Husband",
		category: null,
		published_at: "2022-08-31T06:02:15.160Z",
		created_at: "2022-08-31T06:02:12.853Z",
		updated_at: "2022-08-31T06:02:15.170Z"
	},
	{
		id: 10,
		Title: "Baby",
		category: null,
		published_at: "2022-08-31T06:02:24.633Z",
		created_at: "2022-08-31T06:02:22.983Z",
		updated_at: "2022-08-31T06:02:24.642Z"
	},
	{
		id: 11,
		Title: "Relative",
		category: null,
		published_at: "2022-08-31T06:02:33.149Z",
		created_at: "2022-08-31T06:02:31.340Z",
		updated_at: "2022-08-31T06:02:33.160Z"
	},
	{
		id: 12,
		Title: "Friend",
		category: null,
		published_at: "2022-08-31T06:02:43.366Z",
		created_at: "2022-08-31T06:02:41.502Z",
		updated_at: "2022-08-31T06:02:43.376Z"
	}
];;
}


// --------------------
// Request: /components/Part/ProductFilter.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// Dependencies: 

// --------------------
const $id_sVn0okCZxK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".product-filter.display {\n  transform: translateX(0%);\n}\n.product-filter {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background-color: rgba(16, 4, 40, 0.6);\n  z-index: 10;\n  transform: translateX(-100%);\n}\n.product-filter .container-fluid {\n  background-color: #fff;\n  width: 25%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  overflow-y: auto;\n}\n.product-filter .container-fluid h2 {\n  font-size: 2rem;\n  padding-top: 2rem;\n  text-align: left;\n  padding-bottom: 2rem;\n  border-bottom: 0.1rem dashed #9f9f9f;\n  background-color: #fff;\n}\n.product-filter-categories {\n  display: flex;\n  flex-direction: column;\n}\n.product-filter-categories a {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n  color: #9f9f9f;\n}\n.product-filter-price-show {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.product-filter-price-show .btn {\n  background-color: #6839CC;\n  border-color: #6839CC;\n  font-size: 1.5rem;\n  width: 7rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.product-filter-tags a {\n  display: inline-block;\n  padding: 0.5rem;\n  border: 0.1rem dashed #9f9f9f;\n  color: #9f9f9f;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-radius: 0.4rem;\n}\n.product-filter-close {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  cursor: pointer;\n}";
}


// --------------------
// Request: /components/Part/breadcrumb.vue
// Parents: 
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/breadcrumb.vue?vue&type=style&index=0&lang.scss ($id_NmFP6guFw3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_oXjHSg1EBD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'breadcrumb',
  props: {
  breadcrumbs: {
    type: Array,
    required: true,
  },
},
  setup(__props, { expose }) {
  expose();

const props = __props



const breadcrumbs = props.breadcrumbs;

const __returned__ = { props, breadcrumbs }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "breadcrumb" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($setup.breadcrumbs, (breadcrumb) => {
    _push(`<span>${__vite_ssr_import_1__.ssrInterpolate(breadcrumb)}</span>`)
  })
  _push(`<!--]--></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/breadcrumb.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/breadcrumb.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/breadcrumb.vue"]]);
}


// --------------------
// Request: /components/Part/breadcrumb.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// Dependencies: 

// --------------------
const $id_7PV4cL7rnE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".breadcrumb {\n  display: flex;\n  align-items: center;\n}\n.breadcrumb span {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  position: relative;\n  color: #100428;\n}\n.breadcrumb span:nth-last-child(1) {\n  color: #9f9f9f;\n}\n.breadcrumb span::before {\n  content: \">\";\n  position: absolute;\n  top: 50%;\n  right: -0.5rem;\n  transform: translateY(-50%);\n}\n.breadcrumb span:nth-last-child(1)::before {\n  display: none;\n}";
}


// --------------------
// Request: /components/Part/productContainer.vue
// Parents: 
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/productContainer.vue?vue&type=style&index=0&lang.scss ($id_13FpTimU2z)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_lB652KrVZ3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "product-content" }, _attrs))}>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/productContainer.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/productContainer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/productContainer.vue"]]);
}


// --------------------
// Request: /components/Part/productContainer.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// Dependencies: 

// --------------------
const $id_GchMnF56GS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".product-content {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem;\n  margin-top: 3rem;\n}";
}


// --------------------
// Request: /components/Part/productCart.vue
// Parents: 
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/productCart.vue?vue&type=style&index=0&lang.scss ($id_PZK5c5auzf)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_j9mv2klzwT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  __name: 'productCart',
  props: {
  product: {
    type: Object,
    required: true,
  },
},
  setup(__props, { expose }) {
  expose();

const data = __props


const product = data.product;

const __returned__ = { data, product }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "product-card shadow" }, _attrs))}><div class="product-card-discount">25%</div><div class="product-card-img"><div class="product-card-overlay"><div class="product-card-overlay-buttons"><i class="fa-solid fa-magnifying-glass-plus"></i><i class="fa-solid fa-heart"></i></div><div class="product-card-overlay-book">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: `/product/${$setup.product?.slug}`,
    class: "btn btn-primary"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<i class="fa-solid fa-bag-shopping"${_scopeId}></i> Book Now `)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("i", { class: "fa-solid fa-bag-shopping" }),
          __vite_ssr_import_1__.createTextVNode(" Book Now ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><img lazy="loading"${
    __vite_ssr_import_2__.ssrRenderAttr("src", `http://3.111.70.214:1337${$setup.product?.image.url}`)
  } alt class="img-fluid"></div><div class="product-card-content"><h4> 4,500 <i class="fa-solid fa-indian-rupee-sign"></i><del>${
    __vite_ssr_import_2__.ssrInterpolate($setup.product?.price)
  } <i class="fa-solid fa-indian-rupee-sign"></i></del></h4><p class="product-card-content-title">${
    __vite_ssr_import_2__.ssrInterpolate($setup.product?.title)
  }</p><div class="product-card-content-rating"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($setup.product?.rating, (n) => {
    _push(`<i class="fa-solid fa-star"></i>`)
  })
  _push(`<!--]--> (5 Reviews) </div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Part/productCart.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/productCart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/productCart.vue"]]);
}


// --------------------
// Request: /components/Part/productCart.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// Dependencies: 

// --------------------
const $id_InwuI1HY8L = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".product-card {\n  position: relative;\n  overflow: hidden;\n}\n.product-card-discount {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background-color: #F90E4C;\n  z-index: 2;\n  color: #fff;\n  font-weight: bold;\n  padding: 0rem 1rem;\n  border-radius: 0.5rem;\n}\n.product-card-img {\n  position: relative;\n}\n.product-card-img img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.product-card-overlay {\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  transform: translateX(100%);\n}\n.product-card-overlay-buttons {\n  position: inherit;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  width: 5rem;\n}\n.product-card-overlay-buttons i {\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.8);\n}\n.product-card-overlay-book {\n  position: inherit;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n}\n.product-card-overlay-book .btn {\n  width: 100%;\n  height: 4rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  background-color: #6839CC;\n  border-color: #6839CC;\n  border-radius: 4rem;\n}\n.product-card-overlay-book .btn i {\n  margin-right: 1rem;\n}\n.product-card-overlay-book .btn:hover {\n  background-color: #FA782D;\n  border-color: #FA782D;\n}\n.product-card-content {\n  padding: 2rem;\n  padding-top: 1.5rem;\n}\n.product-card-content h4 {\n  font-size: 2.4rem;\n  font-weight: bold;\n  color: #6839CC;\n}\n.product-card-content h4 i {\n  font-size: 1.6rem;\n}\n.product-card-content h4 del {\n  display: inline-block;\n  margin-left: 1.2rem;\n  font-size: 1.4rem;\n  color: #666;\n  font-weight: normal;\n}\n.product-card-content h4 del i {\n  font-size: 1.4rem;\n}\n.product-card-content-title {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n.product-card-content-rating {\n  display: flex;\n  grid-gap: 0.7rem;\n  align-items: center;\n  font-size: 1rem;\n}\n.product-card-content-rating i {\n  font-size: 1rem;\n  color: #FDCB45;\n}\n.product-card:hover {\n  cursor: pointer;\n}\n.product-card:hover .product-card-overlay {\n  transform: translateX(0%);\n}";
}


// --------------------
// Request: /assets/data/products.json
// Parents: 
// - /pages/category.vue?macro=true ($id_paRSLBdABJ)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/category.vue ($id_PpKinrdwfg)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 

// --------------------
const $id_cLRLR6QVBa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		title: "MOON AND STAR DECORATION",
		price: 5000,
		disocunt: 500,
		rating: 5,
		Description: "THIS PACKGE INCLUDE-\n\n \n\n✔ HAPPY BIRTHDAY TAG\n✔ WHITE BACKDROP\n✔ 5 FAIRY LIGHTS\n✔ AGE FOIL ON BALLOON PILLAR CONTAIN 20 BALLOONS\n✔ 7 STAR FOIL (5 SMALL STAR, 2 BIG STAR)\n✔ 1 MOON FOIL\n✔ BALLOON ARCH ON BACKDROP WITH 180 METALLIC AND PASTEL BALLOONS\n✔ 50 BALLOONS ON FLOOR AND WALL\n✔ TRAVELLING EXPENSES\n\n✔ TRAVELLING EXPENSES\n\nReady Time – 1:30 to 2:00 Hours                                         \n\n✔  These Are Normal Air Filled Balloons And Not Helium Balloons\n✔  Tool and Ladder to be provided by the Client\n✔  Decorator will not wait for more than 30 minutes\n✔ Except Balloons all things will be taken back\n✔  Though we use best quality tapes to stick balloons but we suggest removing the balloons within 24 hours after the decoration otherwise there is possibility of damages in walls and ceiling.\n\n\n \n\nPlease Fill the Instructions for color of balloons and any other information",
		information: "1. Are you an online Event Planning company?\n\nYes, 7Eventzz is an online Budget Event Planning Platform available in 200+ cities across India. Providing Professional Balloon Decoration, Party Planning, Candle light Dinner, Surprise Planning, Gifts and other events at a reasonable price. More than 5000+ Families Trust us every month.\n\n2. What type of Balloons do you guys use?\n\nWe use best quality of Balloons i.e. Metallic, Pastel and Chrome Balloons. This doesn’t harm and damaged walls as we use it with paper tapes. And we don’t use or provide Helium Balloons.\n\n3. How can I place orders?\n\nYou can place order from our website or you can connect with us on our Whatsapp number 7450960060 if you have any query or you want to customize your decoration.\n\n4. Do you guys provide Room & Decoration as well?\n\nYes, we provide rooms but in selected cities, but food and cakes are not included in it. You can bring your beverages from outside or you can order from hotel itself.  \n\n5. Travelling expenses is included in your Package?\n\nYes in every package travelling expenses is included. If your location is far from cities than travelling charges will be extra and you will be informed before only.\n\n6. How would I know my Order is confirmed?\n\nYou will receive a confirmation message from our side on your Email id. That your booking is confirmed with invoice attached on it.\n\n7. How and when do I receive the order invoice?\n\nOnce your payment is done on our website you will be receiving invoice on your given email id with all booking details.\n\n \n\n8. What if my plans cancel?\n\nIf cancellations are made -\n\nLess than 24 hours before an Event: Cancellation with no amount refund\n\n24 hours to 72 hours before an Event: Rs 1000 or 50% whichever is Lower\n\n3-7 Days before an Event: Rs 500 Flat Cancelation Charges\n\nBefore 7 Days of Event: No Cancellation charge\n\n9. Can I Reschedule my event and if Yes then How to Reschedule the Event ?\n\nYes, you can reschedule your event but exceptions are there.\n\nLess than 24 hours before Event: No Rescheduling (Re scheduling Only in Certain Cases)\n24 hours to 3 days before an Event: Rescheduling at Zero Fee.\n3 days or more before an Event: Rescheduling at Zero Fee.\nNo Rescheduling possible for experiences booked for 13th and 14th February or 25th and 31st December or any other special days for Special Packages.\n\n10. If I have already Booked a package but I want to change with another package? Then how can I proceed?\n\nNo problem with that. You can change your package but you need to inform us before 2 Days of the event. Same thing goes with your balloon color you need to inform us before only. As same day and one day before the event it is not possible.\n\n11. What are add-ons?\n\nIf you have liked a package but you need to customize it or you want add some extra stuffs you can click on our add-ons options which is available in every package on our website. Add-ons means something which can be added on packages which is not there in decoration or something, which you want personally to be added.\n\n12. Is your Decoration on rental Basis?\n\nNot every Decoration is on rental basis. It depends on decoration and packages you choose. If you are going for a basic decoration balloons and all stuffs will be yours. If you are going for Premium one like ring, floor cabana and any other premium decoration, we will take back stuffs on the very next day of the event. You will be seeing in every package it will be written if these stuffs are on rental basis or not.",
		content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt adipisci necessitatibus esse architecto assumenda non vel? Quae tempora ea placeat, omnis recusandae sunt error voluptatem quam ex velit dolores expedita?",
		slug: "moon-and-star-decoration",
		published_at: "2022-08-31T07:52:54.084Z",
		created_at: "2022-08-31T07:52:50.678Z",
		updated_at: "2022-08-31T14:12:57.965Z",
		image: {
			id: 10,
			name: "thumb_1644403383_0.jpeg",
			alternativeText: "",
			caption: "",
			width: 400,
			height: 400,
			formats: {
				thumbnail: {
					name: "thumbnail_thumb_1644403383_0.jpeg",
					hash: "thumbnail_thumb_1644403383_0_c6b9fcf1e2",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 156,
					height: 156,
					size: 9.03,
					path: null,
					url: "/uploads/thumbnail_thumb_1644403383_0_c6b9fcf1e2.jpeg"
				}
			},
			hash: "thumb_1644403383_0_c6b9fcf1e2",
			ext: ".jpeg",
			mime: "image/jpeg",
			size: 24.06,
			url: "/uploads/thumb_1644403383_0_c6b9fcf1e2.jpeg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T07:51:24.871Z",
			updated_at: "2022-08-31T07:51:24.882Z"
		}
	},
	{
		id: 2,
		title: "MINNIE MOUSE THEME DECORATION",
		price: 3500,
		disocunt: 300,
		rating: 5,
		Description: "THIS PACKAGE INCLUDES\n\n✔ BALLOON ARCH OF 150 METALLIC AND PASTEL BALLOONS\n✔ 50 BALLOONS ON FLOOR AND CEILING\n✔ 2 MINNIE MOUSE ROUND FOILS\n✔ 1 MINNIE MOUSE FOIL BALLOON PILLAR OF 30 BALLOONS\n✔ NAME FOIL [UPTO 6 ALPHABETS]\n✔ 16 INCH AGE NUMBER FOIL\n✔ HAPPY BIRTHDAY BANNER\n✔ 2 FRILL CURTAINS\n✔ FRILL RIBBONS\n✔ TRAVELLING EXPENSE\n\nReady Time – 1:30 to 2:00 HOURS   \n\n✔ These Are Normal Air Filled Balloons And Not Helium Balloons\n✔ Decorator will not wait for more than 30 minutes\n✔ Though we use best quality tapes to stick balloons but we suggest removing the balloons within 24 hours after the decoration otherwise there is possibility of damages in walls and ceiling.\n✔ Please Fill the Instructions for color of balloons and any other information",
		information: "1. Are you an online Event Planning company?\n\nYes, 7Eventzz is an online Budget Event Planning Platform available in 200+ cities across India. Providing Professional Balloon Decoration, Party Planning, Candle light Dinner, Surprise Planning, Gifts and other events at a reasonable price. More than 5000+ Families Trust us every month.\n\n2. What type of Balloons do you guys use?\n\nWe use best quality of Balloons i.e. Metallic, Pastel and Chrome Balloons. This doesn’t harm and damaged walls as we use it with paper tapes. And we don’t use or provide Helium Balloons.\n\n3. How can I place orders?\n\nYou can place order from our website or you can connect with us on our Whatsapp number 7450960060 if you have any query or you want to customize your decoration.\n\n4. Do you guys provide Room & Decoration as well?\n\nYes, we provide rooms but in selected cities, but food and cakes are not included in it. You can bring your beverages from outside or you can order from hotel itself.  \n\n5. Travelling expenses is included in your Package?\n\nYes in every package travelling expenses is included. If your location is far from cities than travelling charges will be extra and you will be informed before only.\n\n6. How would I know my Order is confirmed?\n\nYou will receive a confirmation message from our side on your Email id. That your booking is confirmed with invoice attached on it.\n\n7. How and when do I receive the order invoice?\n\nOnce your payment is done on our website you will be receiving invoice on your given email id with all booking details.\n\n \n\n8. What if my plans cancel?\n\nIf cancellations are made -\n\nLess than 24 hours before an Event: Cancellation with no amount refund\n\n24 hours to 72 hours before an Event: Rs 1000 or 50% whichever is Lower\n\n3-7 Days before an Event: Rs 500 Flat Cancelation Charges\n\nBefore 7 Days of Event: No Cancellation charge\n\n9. Can I Reschedule my event and if Yes then How to Reschedule the Event ?\n\nYes, you can reschedule your event but exceptions are there.\n\nLess than 24 hours before Event: No Rescheduling (Re scheduling Only in Certain Cases)\n24 hours to 3 days before an Event: Rescheduling at Zero Fee.\n3 days or more before an Event: Rescheduling at Zero Fee.\nNo Rescheduling possible for experiences booked for 13th and 14th February or 25th and 31st December or any other special days for Special Packages.\n\n10. If I have already Booked a package but I want to change with another package? Then how can I proceed?\n\nNo problem with that. You can change your package but you need to inform us before 2 Days of the event. Same thing goes with your balloon color you need to inform us before only. As same day and one day before the event it is not possible.\n\n11. What are add-ons?\n\nIf you have liked a package but you need to customize it or you want add some extra stuffs you can click on our add-ons options which is available in every package on our website. Add-ons means something which can be added on packages which is not there in decoration or something, which you want personally to be added.\n\n12. Is your Decoration on rental Basis?\n\nNot every Decoration is on rental basis. It depends on decoration and packages you choose. If you are going for a basic decoration balloons and all stuffs will be yours. If you are going for Premium one like ring, floor cabana and any other premium decoration, we will take back stuffs on the very next day of the event. You will be seeing in every package it will be written if these stuffs are on rental basis or not.",
		content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt adipisci necessitatibus esse architecto assumenda non vel? Quae tempora ea placeat, omnis recusandae sunt error voluptatem quam ex velit dolores expedita?",
		slug: "minnie-mouse-theme-decoration",
		published_at: "2022-08-31T14:10:28.122Z",
		created_at: "2022-08-31T14:10:24.754Z",
		updated_at: "2022-08-31T14:12:36.938Z",
		image: {
			id: 18,
			name: "1644302878_0.jpeg",
			alternativeText: "",
			caption: "",
			width: 1080,
			height: 1080,
			formats: {
				thumbnail: {
					name: "thumbnail_1644302878_0.jpeg",
					hash: "thumbnail_1644302878_0_2d0f77fd05",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 156,
					height: 156,
					size: 8.59,
					path: null,
					url: "/uploads/thumbnail_1644302878_0_2d0f77fd05.jpeg"
				},
				large: {
					name: "large_1644302878_0.jpeg",
					hash: "large_1644302878_0_2d0f77fd05",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 1000,
					height: 1000,
					size: 173.93,
					path: null,
					url: "/uploads/large_1644302878_0_2d0f77fd05.jpeg"
				},
				medium: {
					name: "medium_1644302878_0.jpeg",
					hash: "medium_1644302878_0_2d0f77fd05",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 750,
					height: 750,
					size: 113.02,
					path: null,
					url: "/uploads/medium_1644302878_0_2d0f77fd05.jpeg"
				},
				small: {
					name: "small_1644302878_0.jpeg",
					hash: "small_1644302878_0_2d0f77fd05",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 500,
					height: 500,
					size: 58.84,
					path: null,
					url: "/uploads/small_1644302878_0_2d0f77fd05.jpeg"
				}
			},
			hash: "1644302878_0_2d0f77fd05",
			ext: ".jpeg",
			mime: "image/jpeg",
			size: 124.6,
			url: "/uploads/1644302878_0_2d0f77fd05.jpeg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T14:10:20.606Z",
			updated_at: "2022-08-31T14:10:20.621Z"
		}
	}
];;
}


// --------------------
// Request: /pages/contact.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Pmy3VjLUXs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'contact',
  setup(__props, { expose }) {
  expose();

const contactUsList = [
  {
    title: "Address",
    icon: "fa-solid fa-location-dot",
    content: ["70 Washington Square South New York, NY 10012, United States"],
  },
  {
    title: "Call Us",
    icon: "fa-solid fa-phone",
    content: ["(877) 834-1434", "(877) 834-1255"],
  },
  {
    title: "Openning",
    icon: "fa-solid fa-clock",
    content: ["Monday – Friday: 8am – 4pm", "Saturday – Sunday: 9am – 5pm"],
  },
  {
    title: "Contact",
    icon: "fa-solid fa-envelope",
    content: ["ziggy@example.com", "info@example.com"],
  },
];

const __returned__ = { contactUsList }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "contact-us" }, _attrs))}><div class="contact-us-header"><div class="container-fluid"><div class="contact-us-top"><h2>Don’t hesitate to contact us if you need help.</h2><p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium olorem que laud antium id est laborum.</p></div><div class="contact-us-list"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($setup.contactUsList, (contact, index) => {
    _push(`<div class="contact-us-list-box"><div class="contact-us-list-box-title"><i class="${
      __vite_ssr_import_1__.ssrRenderClass(contact.icon)
    }"></i> ${
      __vite_ssr_import_1__.ssrInterpolate(contact.title)
    }</div><!--[-->`)
    __vite_ssr_import_1__.ssrRenderList(contact.content, (detail) => {
      _push(`<p>${__vite_ssr_import_1__.ssrInterpolate(detail)}</p>`)
    })
    _push(`<!--]--></div>`)
  })
  _push(`<!--]--></div></div></div><div class="contact-us-body"><div class="container-fluid shadow"><div class="contact-us-body-form"><h3>Got Any Questions?</h3><p>Use the form below to get in touch with the sales team</p><form action class="form"><div class="form-group"><input type="text" placeholder="Name *" class="form-control"></div><div class="form-group"><input type="email" placeholder="Contact *" class="form-control"></div><div class="form-group"><textarea name id cols="30" rows="10" class="form-control" placeholder="Message"></textarea></div><div class="form-submit"><div class="btn btn-primary"> Send Your Message <i class="fa-solid fa-angle-right"></i></div></div></form></div><div class="contact-us-body-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1043551816033!2d77.05506670806535!3d28.443124204065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861de9d7bb9%3A0xe403eb9336f57e45!2sUNITECH%20CYBER%20PARK%2C%20Durga%20Colony%2C%20Sector%2039%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1661364046794!5m2!1sen!2sin" style="${__vite_ssr_import_1__.ssrRenderStyle({"border":"0"})}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></main>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/contact.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/contact.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_bhjnf7OaUK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Home/Hero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Home/FindPackage.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Home/Occation.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Home/TodayDeal.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Home/WeekDeal.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/Trending.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Home/Review.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Home/Subscribe.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/Home/FeaturedIn.vue");


const _sfc_main = {};

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_10__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeHero = __vite_ssr_import_0__.default
  const _component_HomeFindPackage = __vite_ssr_import_1__.default
  const _component_HomeOccation = __vite_ssr_import_2__.default
  const _component_HomeTodayDeal = __vite_ssr_import_3__.default
  const _component_HomeWeekDeal = __vite_ssr_import_4__.default
  const _component_HomeTrending = __vite_ssr_import_5__.default
  const _component_HomeReview = __vite_ssr_import_6__.default
  const _component_HomeSubscribe = __vite_ssr_import_7__.default
  const _component_HomeFeaturedIn = __vite_ssr_import_8__.default

  _push(`<main${__vite_ssr_import_10__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeHero, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeFindPackage, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeOccation, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeTodayDeal, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeWeekDeal, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeTrending, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeReview, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeSubscribe, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeFeaturedIn, null, null, _parent))
  _push(`</main>`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Home/Hero.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/vue3-carousel/dist/carousel.css ($id_99VGExmnIc)
// - vue3-carousel ($id_lGRnm8V0xu)
// - /assets/data/carousels.json ($id_y08cx3a0l6)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/Hero.vue?vue&type=style&index=0&lang.scss ($id_6FTnKUYXWh)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_pjoviJXDa0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue3-carousel/dist/carousel.css");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue3-carousel");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/data/carousels.json");

// const data = await useFetch("http://3.111.70.214:1337/carousels");
// const carousels = data.data._rawValue;

// const carousels = ref([]);

const _sfc_main = {
  __name: 'Hero',
  setup(__props, { expose }) {
  expose();

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
__vite_ssr_import_0__.onMounted(() => {
  // fetch("http://3.111.70.214:1337/carousels")
  //   .then((res) => res.json())
  //   .then((data) => (carousels.value = data))
  //   .catch((err) => console.log(err.message));
});

const __returned__ = { Carousel: __vite_ssr_import_2__.Carousel, Slide: __vite_ssr_import_2__.Slide, Pagination: __vite_ssr_import_2__.Pagination, Navigation: __vite_ssr_import_2__.Navigation, carousels: __vite_ssr_import_3__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "hero-section" }, _attrs))}><div class="container-fluid">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Carousel"], { "items-to-show": 1 }, {
    addons: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Navigation"], null, null, _parent, _scopeId))
        _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Pagination"], null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_4__.createVNode($setup["Navigation"]),
          __vite_ssr_import_4__.createVNode($setup["Pagination"])
        ]
      }
    }),
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_5__.ssrRenderList($setup.carousels, (slide) => {
          _push(__vite_ssr_import_5__.ssrRenderComponent($setup["Slide"], {
            key: slide.Title
          }, {
            default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<img lazy="loading"${
                  __vite_ssr_import_5__.ssrRenderAttr("src", `http://3.111.70.214:1337${slide.Banner.url}`)
                } alt class="img-fluid"${
                  _scopeId
                }>`)
              } else {
                return [
                  __vite_ssr_import_4__.createVNode("img", {
                    lazy: "loading",
                    src: `http://3.111.70.214:1337${slide.Banner.url}`,
                    alt: "",
                    class: "img-fluid"
                  }, null, 8 /* PROPS */, ["src"])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_4__.openBlock(true), __vite_ssr_import_4__.createBlock(__vite_ssr_import_4__.Fragment, null, __vite_ssr_import_4__.renderList($setup.carousels, (slide) => {
            return (__vite_ssr_import_4__.openBlock(), __vite_ssr_import_4__.createBlock($setup["Slide"], {
              key: slide.Title
            }, {
              default: __vite_ssr_import_4__.withCtx(() => [
                __vite_ssr_import_4__.createVNode("img", {
                  lazy: "loading",
                  src: `http://3.111.70.214:1337${slide.Banner.url}`,
                  alt: "",
                  class: "img-fluid"
                }, null, 8 /* PROPS */, ["src"])
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></section>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Home/Hero.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/Hero.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/Hero.vue"]]);
}


// --------------------
// Request: /node_modules/vue3-carousel/dist/carousel.css
// Parents: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// Dependencies: 

// --------------------
const $id_iJ8GOc7FRT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root {\n  /* Color */\n  --vc-clr-primary: #642afb;\n  --vc-clr-secondary: #8e98f3;\n  --vc-clr-white: #ffffff;\n\n  /* Icon */\n  --vc-icn-width: 1.2em;\n\n  /* Navigation */\n  --vc-nav-width: 30px;\n  --vc-nav-color: #ffffff;\n  --vc-nav-background-color: var(--vc-clr-primary);\n\n  /* Pagination */\n  --vc-pgn-width: 10px;\n  --vc-pgn-height: 5px;\n  --vc-pgn-margin: 5px;\n  --vc-pgn-border-radius: 0;\n  --vc-pgn-background-color: var(--vc-clr-secondary);\n  --vc-pgn-active-color: var(--vc-clr-primary);\n}\n.carousel__prev,\n.carousel__next {\n  background-color: var(--vc-nav-background-color);\n  border-radius: var(--vc-nav-width);\n  width: var(--vc-nav-width);\n  height: var(--vc-nav-width);\n  text-align: center;\n  font-size: calc(var(--vc-nav-width) * 2 / 3);\n  padding: 0;\n  color: var(--vc-nav-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border: 0;\n  cursor: pointer;\n}\n.carousel__prev {\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.carousel__next {\n  top: 50%;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.carousel--rtl .carousel__prev {\n  left: auto;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.carousel--rtl .carousel__next {\n  right: auto;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.carousel__pagination {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n}\n.carousel__pagination-button {\n  margin: var(--vc-pgn-margin);\n  width: var(--vc-pgn-width);\n  height: var(--vc-pgn-height);\n  border-radius: var(--vc-pgn-height);\n  border: 0;\n  cursor: pointer;\n  background-color: var(--vc-pgn-background-color);\n}\n.carousel__pagination-button--active {\n  background-color: var(--vc-pgn-active-color);\n}\n.carousel__slide {\n  scroll-snap-stop: auto;\n  flex-shrink: 0;\n  margin: 0;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel {\n  position: relative;\n  text-align: center;\n  box-sizing: border-box;\n}\n.carousel * {\n  box-sizing: border-box;\n}\n.carousel__track {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.carousel__viewport {\n  overflow: hidden;\n}\n.carousel__icon {\n  width: var(--vc-icn-width);\n  height: var(--vc-icn-width);\n  fill: currentColor;\n}\n";
}


// --------------------
// Request: vue3-carousel
// Parents: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// Dependencies: 

// --------------------
const $id_TI5XH8l02y = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue3-carousel")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue3-carousel\".")
  })


// --------------------
// Request: /assets/data/carousels.json
// Parents: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// Dependencies: 

// --------------------
const $id_9axm7jiQKV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		Title: "Carousel 1",
		published_at: "2022-08-31T05:42:22.987Z",
		created_at: "2022-08-31T05:42:20.517Z",
		updated_at: "2022-08-31T05:42:23.005Z",
		Banner: {
			id: 5,
			name: "1660379387_0.jpeg",
			alternativeText: "",
			caption: "",
			width: 1583,
			height: 500,
			formats: {
				thumbnail: {
					name: "thumbnail_1660379387_0.jpeg",
					hash: "thumbnail_1660379387_0_45f674a878",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 245,
					height: 77,
					size: 6.85,
					path: null,
					url: "/uploads/thumbnail_1660379387_0_45f674a878.jpeg"
				},
				large: {
					name: "large_1660379387_0.jpeg",
					hash: "large_1660379387_0_45f674a878",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 1000,
					height: 316,
					size: 62.7,
					path: null,
					url: "/uploads/large_1660379387_0_45f674a878.jpeg"
				},
				medium: {
					name: "medium_1660379387_0.jpeg",
					hash: "medium_1660379387_0_45f674a878",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 750,
					height: 237,
					size: 39.04,
					path: null,
					url: "/uploads/medium_1660379387_0_45f674a878.jpeg"
				},
				small: {
					name: "small_1660379387_0.jpeg",
					hash: "small_1660379387_0_45f674a878",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 500,
					height: 158,
					size: 21.81,
					path: null,
					url: "/uploads/small_1660379387_0_45f674a878.jpeg"
				}
			},
			hash: "1660379387_0_45f674a878",
			ext: ".jpeg",
			mime: "image/jpeg",
			size: 102.64,
			url: "/uploads/1660379387_0_45f674a878.jpeg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T05:42:04.934Z",
			updated_at: "2022-08-31T05:42:04.943Z"
		}
	},
	{
		id: 2,
		Title: "Carousel 2",
		published_at: "2022-08-31T05:42:44.344Z",
		created_at: "2022-08-31T05:42:42.189Z",
		updated_at: "2022-08-31T05:42:44.361Z",
		Banner: {
			id: 4,
			name: "1654344959_0.jpeg",
			alternativeText: "",
			caption: "",
			width: 1583,
			height: 500,
			formats: {
				thumbnail: {
					name: "thumbnail_1654344959_0.jpeg",
					hash: "thumbnail_1654344959_0_154705ec07",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 245,
					height: 77,
					size: 4.18,
					path: null,
					url: "/uploads/thumbnail_1654344959_0_154705ec07.jpeg"
				},
				large: {
					name: "large_1654344959_0.jpeg",
					hash: "large_1654344959_0_154705ec07",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 1000,
					height: 316,
					size: 33.99,
					path: null,
					url: "/uploads/large_1654344959_0_154705ec07.jpeg"
				},
				medium: {
					name: "medium_1654344959_0.jpeg",
					hash: "medium_1654344959_0_154705ec07",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 750,
					height: 237,
					size: 21.41,
					path: null,
					url: "/uploads/medium_1654344959_0_154705ec07.jpeg"
				},
				small: {
					name: "small_1654344959_0.jpeg",
					hash: "small_1654344959_0_154705ec07",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 500,
					height: 158,
					size: 11.86,
					path: null,
					url: "/uploads/small_1654344959_0_154705ec07.jpeg"
				}
			},
			hash: "1654344959_0_154705ec07",
			ext: ".jpeg",
			mime: "image/jpeg",
			size: 67.37,
			url: "/uploads/1654344959_0_154705ec07.jpeg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T05:42:04.900Z",
			updated_at: "2022-08-31T05:42:04.909Z"
		}
	},
	{
		id: 3,
		Title: "Carousel 3",
		published_at: "2022-08-31T05:42:59.015Z",
		created_at: "2022-08-31T05:42:55.449Z",
		updated_at: "2022-08-31T05:42:59.031Z",
		Banner: {
			id: 3,
			name: "1645449113_1 (1).png",
			alternativeText: "",
			caption: "",
			width: 1583,
			height: 500,
			formats: {
				thumbnail: {
					name: "thumbnail_1645449113_1 (1).png",
					hash: "thumbnail_1645449113_1_1_f8e3df9b74",
					ext: ".png",
					mime: "image/png",
					width: 245,
					height: 77,
					size: 15.8,
					path: null,
					url: "/uploads/thumbnail_1645449113_1_1_f8e3df9b74.png"
				},
				large: {
					name: "large_1645449113_1 (1).png",
					hash: "large_1645449113_1_1_f8e3df9b74",
					ext: ".png",
					mime: "image/png",
					width: 1000,
					height: 316,
					size: 96.27,
					path: null,
					url: "/uploads/large_1645449113_1_1_f8e3df9b74.png"
				},
				medium: {
					name: "medium_1645449113_1 (1).png",
					hash: "medium_1645449113_1_1_f8e3df9b74",
					ext: ".png",
					mime: "image/png",
					width: 750,
					height: 237,
					size: 66.54,
					path: null,
					url: "/uploads/medium_1645449113_1_1_f8e3df9b74.png"
				},
				small: {
					name: "small_1645449113_1 (1).png",
					hash: "small_1645449113_1_1_f8e3df9b74",
					ext: ".png",
					mime: "image/png",
					width: 500,
					height: 158,
					size: 39.55,
					path: null,
					url: "/uploads/small_1645449113_1_1_f8e3df9b74.png"
				}
			},
			hash: "1645449113_1_1_f8e3df9b74",
			ext: ".png",
			mime: "image/png",
			size: 46.14,
			url: "/uploads/1645449113_1_1_f8e3df9b74.png",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T05:42:04.835Z",
			updated_at: "2022-08-31T05:42:04.867Z"
		}
	}
];;
}


// --------------------
// Request: /components/Home/Hero.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// Dependencies: 

// --------------------
const $id_yGzbWzH1Gv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".hero-section {\n  padding-top: 1rem;\n}\n.hero-section .container-fluid img {\n  width: 100%;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}";
}


// --------------------
// Request: /components/Home/FindPackage.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /assets/data/occasions.json ($id_7JDKS4evoL)
// - /assets/data/relations.json ($id_A3jBKqxk2W)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/FindPackage.vue?vue&type=style&index=0&lang.scss ($id_RbPsAvl1fG)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_7kawc2jp0V = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/data/occasions.json");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/relations.json");

// const data = await useFetch("http://3.111.70.214:1337/occasions");
// const occasions = data.data._rawValue;

// const data1 = await useFetch("http://3.111.70.214:1337/relations");
// const relations = data1.data._rawValue;

// const occasions = ref([]);
// const relations = ref([]);


const _sfc_main = {
  __name: 'FindPackage',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_0__.onMounted(() => {
  // fetch("http://3.111.70.214:1337/occasions")
  //   .then((res) => res.json())
  //   .then((data) => (occasions.value = data))
  //   .catch((err) => console.log(err.message));
  // fetch("http://3.111.70.214:1337/relations")
  //   .then((res) => res.json())
  //   .then((data) => (relations.value = data))
  //   .catch((err) => console.log(err.message));
});

const __returned__ = { occasions: __vite_ssr_import_1__.default, relations: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "find-package shadow" }, _attrs))}><div class="container-fluid"><h4>Find Package</h4><form action="#" class="form"><div class="form-group"><select name id class="form-select rounded-0 shadow"><optgroup label="Occasions"><option value>Occasion</option><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.occasions, (occasion) => {
    _push(`<option${
      __vite_ssr_import_4__.ssrRenderAttr("value", occasion.Title)
    }>${
      __vite_ssr_import_4__.ssrInterpolate(occasion.Title)
    }</option>`)
  })
  _push(`<!--]--></optgroup></select></div><div class="form-group"><select name id class="form-select rounded-0 shadow"><optgroup label="Relations"><option value>Relations</option><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.relations, (relation) => {
    _push(`<option${
      __vite_ssr_import_4__.ssrRenderAttr("value", relation.Title)
    }>${
      __vite_ssr_import_4__.ssrInterpolate(relation.Title)
    }</option>`)
  })
  _push(`<!--]--></optgroup></select></div><div class="form-group"><button class="btn btn-danger rounded-0 shadow">Search</button></div></form></div></section>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/FindPackage.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/FindPackage.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/FindPackage.vue"]]);
}


// --------------------
// Request: /components/Home/FindPackage.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// Dependencies: 

// --------------------
const $id_z3ggHEOAVo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".find-package {\n  padding: 4rem 2rem;\n  position: relative;\n  top: -7rem;\n  z-index: 2;\n  width: 80%;\n  margin: auto;\n  background-color: #fff;\n}\n.find-package .container-fluid h4 {\n  font-size: 2.4rem;\n  margin-bottom: 2rem;\n  font-weight: bold;\n}\n.find-package .container-fluid .form {\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 1fr 10rem;\n}\n.find-package .container-fluid .form-select {\n  font-size: 1.6rem;\n  height: 4rem;\n}\n.find-package .container-fluid .form .btn {\n  height: 4rem;\n  width: 100%;\n  color: #fff;\n  font-size: 1.8rem;\n  font-weight: bold;\n}";
}


// --------------------
// Request: /components/Home/Occation.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/vue3-carousel/dist/carousel.css ($id_99VGExmnIc)
// - vue3-carousel ($id_lGRnm8V0xu)
// - /assets/data/occasions.json ($id_7JDKS4evoL)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/Occation.vue?vue&type=style&index=0&lang.scss ($id_36oxaXUAJX)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_wtUhaxHbmI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue3-carousel/dist/carousel.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue3-carousel");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/occasions.json");

// const data = await useFetch("http://3.111.70.214:1337/occasions?featured=true");
// const occasions = data.data._rawValue;


const _sfc_main = {
  __name: 'Occation',
  setup(__props, { expose }) {
  expose();

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
const occasions = __vite_ssr_import_2__.default.filter(function (o) {
  return o.featured === true;
});
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/occasions?featured=true")
//     .then((res) => res.json())
//     .then((data) => (occasions.value = data))
//     .catch((err) => console.log(err.message));
// });

const __returned__ = { occasions, Carousel: __vite_ssr_import_1__.Carousel, Slide: __vite_ssr_import_1__.Slide, Pagination: __vite_ssr_import_1__.Pagination, Navigation: __vite_ssr_import_1__.Navigation, data: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "occation-section" }, _attrs))}><div class="container-fluid"><h2>Find By Occation</h2><div class="occation-section-list">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Carousel"], { "items-to-show": 4 }, {
    addons: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!-- <navigation /> -->`)
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Pagination"], null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_3__.createCommentVNode(" <navigation /> "),
          __vite_ssr_import_3__.createVNode($setup["Pagination"])
        ]
      }
    }),
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_4__.ssrRenderList($setup.occasions, (slide) => {
          _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Slide"], {
            key: slide.Title
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="occation-section-list-box shadow"${
                  _scopeId
                }><img lazy="loading"${
                  __vite_ssr_import_4__.ssrRenderAttr("src", `http://3.111.70.214:1337${slide.icon.url}`)
                } alt class="img-fluid"${
                  _scopeId
                }><div class="occation-section-list-box-content"${
                  _scopeId
                }><h4${
                  _scopeId
                }>${
                  __vite_ssr_import_4__.ssrInterpolate(slide.Title)
                }</h4><span${
                  _scopeId
                }>Products(4)</span></div><i class="fa-solid fa-angle-right"${
                  _scopeId
                }></i></div>`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode("div", { class: "occation-section-list-box shadow" }, [
                    __vite_ssr_import_3__.createVNode("img", {
                      lazy: "loading",
                      src: `http://3.111.70.214:1337${slide.icon.url}`,
                      alt: "",
                      class: "img-fluid"
                    }, null, 8 /* PROPS */, ["src"]),
                    __vite_ssr_import_3__.createVNode("div", { class: "occation-section-list-box-content" }, [
                      __vite_ssr_import_3__.createVNode("h4", null, __vite_ssr_import_3__.toDisplayString(slide.Title), 1 /* TEXT */),
                      __vite_ssr_import_3__.createVNode("span", null, "Products(4)")
                    ]),
                    __vite_ssr_import_3__.createVNode("i", { class: "fa-solid fa-angle-right" })
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_3__.openBlock(true), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Fragment, null, __vite_ssr_import_3__.renderList($setup.occasions, (slide) => {
            return (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock($setup["Slide"], {
              key: slide.Title
            }, {
              default: __vite_ssr_import_3__.withCtx(() => [
                __vite_ssr_import_3__.createVNode("div", { class: "occation-section-list-box shadow" }, [
                  __vite_ssr_import_3__.createVNode("img", {
                    lazy: "loading",
                    src: `http://3.111.70.214:1337${slide.icon.url}`,
                    alt: "",
                    class: "img-fluid"
                  }, null, 8 /* PROPS */, ["src"]),
                  __vite_ssr_import_3__.createVNode("div", { class: "occation-section-list-box-content" }, [
                    __vite_ssr_import_3__.createVNode("h4", null, __vite_ssr_import_3__.toDisplayString(slide.Title), 1 /* TEXT */),
                    __vite_ssr_import_3__.createVNode("span", null, "Products(4)")
                  ]),
                  __vite_ssr_import_3__.createVNode("i", { class: "fa-solid fa-angle-right" })
                ])
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></section>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/Occation.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/Occation.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/Occation.vue"]]);
}


// --------------------
// Request: /components/Home/Occation.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// Dependencies: 

// --------------------
const $id_OYBpO53h7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".occation-section h2 {\n  text-align: center;\n  font-size: 3.6rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.occation-section-list-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  grid-gap: 1rem;\n  width: 100%;\n  padding: 1.5rem;\n  transform: scale(0.95);\n  transform-origin: center;\n  margin: 2rem 0rem;\n}\n.occation-section-list-box h4 {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.occation-section-list-box span {\n  font-size: 1.4rem;\n}\n.occation-section-list-box i {\n  font-size: 1.6rem;\n  height: 2.4rem;\n  width: 2.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(250, 120, 45, 0.6);\n  color: #fff;\n  border-radius: 100%;\n}\n.occation-section-list-box img {\n  height: 10rem;\n  width: 10rem;\n  border-radius: 100%;\n  border: 0.1rem dashed #F90E4C;\n}";
}


// --------------------
// Request: /components/Home/TodayDeal.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/vue3-carousel/dist/carousel.css ($id_99VGExmnIc)
// - vue3-carousel ($id_lGRnm8V0xu)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/TodayDeal.vue?vue&type=style&index=0&lang.scss ($id_fx0Yweg1C0)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_UwuqxHFtV5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue3-carousel/dist/carousel.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue3-carousel");


const _sfc_main = {
  __name: 'TodayDeal',
  setup(__props, { expose }) {
  expose();


const __returned__ = { Carousel: __vite_ssr_import_1__.Carousel, Slide: __vite_ssr_import_1__.Slide, Pagination: __vite_ssr_import_1__.Pagination, Navigation: __vite_ssr_import_1__.Navigation }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "today-deal" }, _attrs))}><div class="container-fluid"><h2>Today&#39;s Best Deals</h2><div class="today-deal-list">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent($setup["Carousel"], { "items-to-show": 1 }, {
    addons: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["Navigation"], null, null, _parent, _scopeId))
        _push(`<!-- <pagination /> -->`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode($setup["Navigation"]),
          __vite_ssr_import_2__.createCommentVNode(" <pagination /> ")
        ]
      }
    }),
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_3__.ssrRenderList(10, (slide) => {
          _push(__vite_ssr_import_3__.ssrRenderComponent($setup["Slide"], { key: slide }, {
            default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="today-deal-list-box"${
                  _scopeId
                }><img lazy="loading" src="http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/product-19-1-350x350.jpg" alt class="img-fluid"${
                  _scopeId
                }><div class="today-deal-list-box-content"${
                  _scopeId
                }><h4 class="today-deal-list-box-content-title"${
                  _scopeId
                }>Title</h4><div class="today-deal-list-box-content-price"${
                  _scopeId
                }><h5${
                  _scopeId
                }><i class="fa-solid fa-indian-rupee-sign"${
                  _scopeId
                }></i> 2,500 </h5><del${
                  _scopeId
                }><i class="fa-solid fa-indian-rupee-sign"${
                  _scopeId
                }></i> 3,200 </del></div><div class="today-deal-list-box-content-rating"${
                  _scopeId
                }><i class="fa-solid fa-star"${
                  _scopeId
                }></i><i class="fa-solid fa-star"${
                  _scopeId
                }></i><i class="fa-solid fa-star"${
                  _scopeId
                }></i><i class="fa-solid fa-star"${
                  _scopeId
                }></i><i class="fa-solid fa-star"${
                  _scopeId
                }></i> (5 Reviews) </div><div class="today-deal-list-box-content-description"${
                  _scopeId
                }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint ratione error sed aliquam facere ab officiis sapiente saepe, laborum, possimus voluptas nemo ut consectetur. Fuga quod molestiae sapiente officia?</div><div class="today-deal-list-box-content-hurry"${
                  _scopeId
                }><p${
                  _scopeId
                }>Hurry up! Sales end in:</p><div class="today-deal-list-box-content-hurry-list"${
                  _scopeId
                }><div class="today-deal-list-box-content-hurry-list-box"${
                  _scopeId
                }>208</div><div class="today-deal-list-box-content-hurry-list-box"${
                  _scopeId
                }>12</div><div class="today-deal-list-box-content-hurry-list-box"${
                  _scopeId
                }>08</div><div class="today-deal-list-box-content-hurry-list-box"${
                  _scopeId
                }>06</div></div><div class="progress mt-3"${
                  _scopeId
                }><div class="progress-bar" role="progressbar" style="${
                  __vite_ssr_import_3__.ssrRenderStyle({"width":"25%"})
                }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"${
                  _scopeId
                }></div></div></div><div class="taday-deal-list-box-content-available"${
                  _scopeId
                }>Available: 46/81</div></div></div>`)
              } else {
                return [
                  __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box" }, [
                    __vite_ssr_import_2__.createVNode("img", {
                      lazy: "loading",
                      src: "http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/product-19-1-350x350.jpg",
                      alt: "",
                      class: "img-fluid"
                    }),
                    __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content" }, [
                      __vite_ssr_import_2__.createVNode("h4", { class: "today-deal-list-box-content-title" }, "Title"),
                      __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-price" }, [
                        __vite_ssr_import_2__.createVNode("h5", null, [
                          __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-indian-rupee-sign" }),
                          __vite_ssr_import_2__.createTextVNode(" 2,500 ")
                        ]),
                        __vite_ssr_import_2__.createVNode("del", null, [
                          __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-indian-rupee-sign" }),
                          __vite_ssr_import_2__.createTextVNode(" 3,200 ")
                        ])
                      ]),
                      __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-rating" }, [
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                        __vite_ssr_import_2__.createTextVNode(" (5 Reviews) ")
                      ]),
                      __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-description" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint ratione error sed aliquam facere ab officiis sapiente saepe, laborum, possimus voluptas nemo ut consectetur. Fuga quod molestiae sapiente officia?"),
                      __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry" }, [
                        __vite_ssr_import_2__.createVNode("p", null, "Hurry up! Sales end in:"),
                        __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list" }, [
                          __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "208"),
                          __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "12"),
                          __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "08"),
                          __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "06")
                        ]),
                        __vite_ssr_import_2__.createVNode("div", { class: "progress mt-3" }, [
                          __vite_ssr_import_2__.createVNode("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: {"width":"25%"},
                            "aria-valuenow": "25",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                          })
                        ])
                      ]),
                      __vite_ssr_import_2__.createVNode("div", { class: "taday-deal-list-box-content-available" }, "Available: 46/81")
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_2__.openBlock(), __vite_ssr_import_2__.createBlock(__vite_ssr_import_2__.Fragment, null, __vite_ssr_import_2__.renderList(10, (slide) => {
            return __vite_ssr_import_2__.createVNode($setup["Slide"], { key: slide }, {
              default: __vite_ssr_import_2__.withCtx(() => [
                __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box" }, [
                  __vite_ssr_import_2__.createVNode("img", {
                    lazy: "loading",
                    src: "http://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/product-19-1-350x350.jpg",
                    alt: "",
                    class: "img-fluid"
                  }),
                  __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content" }, [
                    __vite_ssr_import_2__.createVNode("h4", { class: "today-deal-list-box-content-title" }, "Title"),
                    __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-price" }, [
                      __vite_ssr_import_2__.createVNode("h5", null, [
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-indian-rupee-sign" }),
                        __vite_ssr_import_2__.createTextVNode(" 2,500 ")
                      ]),
                      __vite_ssr_import_2__.createVNode("del", null, [
                        __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-indian-rupee-sign" }),
                        __vite_ssr_import_2__.createTextVNode(" 3,200 ")
                      ])
                    ]),
                    __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-rating" }, [
                      __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                      __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                      __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                      __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                      __vite_ssr_import_2__.createVNode("i", { class: "fa-solid fa-star" }),
                      __vite_ssr_import_2__.createTextVNode(" (5 Reviews) ")
                    ]),
                    __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-description" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint ratione error sed aliquam facere ab officiis sapiente saepe, laborum, possimus voluptas nemo ut consectetur. Fuga quod molestiae sapiente officia?"),
                    __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry" }, [
                      __vite_ssr_import_2__.createVNode("p", null, "Hurry up! Sales end in:"),
                      __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list" }, [
                        __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "208"),
                        __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "12"),
                        __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "08"),
                        __vite_ssr_import_2__.createVNode("div", { class: "today-deal-list-box-content-hurry-list-box" }, "06")
                      ]),
                      __vite_ssr_import_2__.createVNode("div", { class: "progress mt-3" }, [
                        __vite_ssr_import_2__.createVNode("div", {
                          class: "progress-bar",
                          role: "progressbar",
                          style: {"width":"25%"},
                          "aria-valuenow": "25",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        })
                      ])
                    ]),
                    __vite_ssr_import_2__.createVNode("div", { class: "taday-deal-list-box-content-available" }, "Available: 46/81")
                  ])
                ])
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */)
          }), 64 /* STABLE_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></section>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Home/TodayDeal.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/TodayDeal.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/TodayDeal.vue"]]);
}


// --------------------
// Request: /components/Home/TodayDeal.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// Dependencies: 

// --------------------
const $id_yuj7yaSMKE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".today-deal {\n  padding: 4rem 0rem;\n}\n.today-deal h2 {\n  text-align: center;\n  font-size: 3.6rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.today-deal-list-box {\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: 40rem auto;\n  justify-content: flex-start;\n  width: 100%;\n  border: 0.2rem dashed #F90E4C;\n}\n.today-deal-list-box img {\n  height: 40rem;\n}\n.today-deal-list-box-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: left;\n  width: 100%;\n}\n.today-deal-list-box-content-available {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n.today-deal-list-box-content-title {\n  font-size: 2.4rem;\n}\n.today-deal-list-box-content-price {\n  display: flex;\n  align-items: center;\n  grid-gap: 2rem;\n}\n.today-deal-list-box-content-price h5 {\n  font-size: 3rem;\n}\n.today-deal-list-box-content-price h5 i {\n  font-size: 3rem;\n}\n.today-deal-list-box-content-rating {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.5rem;\n}\n.today-deal-list-box-content-hurry .progress {\n  width: 70%;\n  border-radius: 4rem;\n  height: 0.7rem;\n}\n.today-deal-list-box-content-hurry .progress-bar {\n  background-color: #6839CC;\n  border-radius: 4rem;\n}\n.today-deal-list-box-content-hurry-list {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n}\n.today-deal-list-box-content-hurry-list-box {\n  background-color: #6839CC;\n  padding: 1rem;\n  color: #fff;\n  border-radius: 0.5rem;\n  position: relative;\n  font-weight: bold;\n}\n.today-deal-list-box-content-hurry-list-box::before {\n  content: \":\";\n  position: absolute;\n  right: -1rem;\n  top: 0;\n  height: 100%;\n  width: 1rem;\n  color: #100428;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.today-deal-list-box-content-hurry-list-box:nth-last-child(1)::before {\n  display: none;\n}";
}


// --------------------
// Request: /components/Home/WeekDeal.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/WeekDeal.vue?vue&type=style&index=0&lang.scss ($id_QTwtIt4rjW)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_gDXjQCsUaF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "week-deal" }, _attrs))}><div class="container-fluid"><h2>This Week Deals</h2><div class="week-deal-list"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList(5, (n) => {
    _push(`<div class="week-deal-box shadow"><img lazy="loading" src="https://img.freepik.com/free-vector/people-celebration-birthday-illustration_23-2148922213.jpg?w=740&amp;t=st=1661183053~exp=1661183653~hmac=99b2dfb66649c8a91aad328b640cda6445fb6ef42786ad0dee01dc716dc9ed6c" alt class="img-fluid"><div class="week-deal-box-content"><div class="week-deal-box-discount">50%</div><h4>Birthday Decoration</h4><div class="week-deal-box-tag">Lots of fun.</div>`)
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`Book Now`)
        } else {
          return [
            __vite_ssr_import_1__.createTextVNode("Book Now")
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Home/WeekDeal.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/WeekDeal.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/WeekDeal.vue"]]);
}


// --------------------
// Request: /components/Home/WeekDeal.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// Dependencies: 

// --------------------
const $id_L9NOq2luyG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".week-deal-list {\n  display: flex;\n  flex-flow: row wrap;\n  grid-row-gap: 0.6rem;\n}\n.week-deal-box {\n  position: relative;\n  background-color: #fab02b;\n  height: 25rem;\n  padding: 2rem;\n  overflow: hidden;\n  width: 33.3%;\n  transform: scale(0.97);\n}\n.week-deal-box:nth-last-child(1) {\n  width: 50%;\n}\n.week-deal-box:nth-last-child(2) {\n  width: 50%;\n}\n.week-deal-box img {\n  position: absolute;\n  top: 0;\n  right: -5rem;\n  z-index: 1;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.3s ease-in-out;\n}\n.week-deal-box:hover img {\n  transform: translateX(10%);\n}\n.week-deal-box-content {\n  position: relative;\n  z-index: 2;\n  height: 100%;\n}\n.week-deal-box-discount {\n  font-size: 5rem;\n}\n.week-deal-box h4 {\n  font-size: 2.4rem;\n  font-weight: bold;\n}\n.week-deal-box-tag {\n  font-size: 1.4rem;\n  font-weight: medium;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}\n.week-deal-box a {\n  height: 4rem;\n  width: 15rem;\n  border: 0.1rem solid #6839CC;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3rem;\n  background-color: #6839CC;\n  color: #fff;\n  font-weight: bold;\n}";
}


// --------------------
// Request: /components/Home/Trending.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /assets/data/products.json ($id_uC0ly54lTX)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/Trending.vue?vue&type=style&index=0&lang.scss ($id_FGIUnL3oSI)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_JBFx2g2Iij = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Part/productCart.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/products.json");

// const products = ref([]);
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/products")
//     .then((res) => res.json())
//     .then((data) => (products.value = data))
//     .catch((err) => console.log(err.message));
// });

const _sfc_main = {
  __name: 'Trending',
  setup(__props, { expose }) {
  expose();


const __returned__ = { products: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PartProductCart = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default

  _push(`<section${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "trending" }, _attrs))}><div class="container-fluid"><h2>Trending Collections</h2><div class="trending-list"><div class="trending-list-box active">All Items</div><div class="trending-list-box">Sales</div><div class="trending-list-box">Featured</div><div class="trending-list-box">Best Seller</div></div><div class="trending-content"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.products, (product) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_PartProductCart, {
      key: `product-${product?.id}`,
      product: product
    }, null, _parent))
  })
  _push(`<!--]--></div><div class="trending-all-shop">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` View All Shop <i class="fa-solid fa-angle-right"${_scopeId}></i>`)
      } else {
        return [
          __vite_ssr_import_3__.createTextVNode(" View All Shop "),
          __vite_ssr_import_3__.createVNode("i", { class: "fa-solid fa-angle-right" })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></section>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/Trending.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/Trending.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/Trending.vue"]]);
}


// --------------------
// Request: /components/Home/Trending.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// Dependencies: 

// --------------------
const $id_RpFkAgJbps = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".trending {\n  margin-top: 1.5rem;\n  padding: 4rem 0rem;\n  background-color: #DFEFF9;\n}\n.trending-list {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 1rem;\n  margin-top: 3rem;\n}\n.trending-list-box {\n  width: 10rem;\n  height: 3rem;\n  transition: all 0.3s linear;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #100428;\n  border-radius: 3rem;\n  cursor: pointer;\n  font-weight: bold;\n}\n.trending-list-box:hover {\n  background-color: #6839CC;\n  color: #fff;\n}\n.trending-list-box.active {\n  background-color: #6839CC;\n  color: #fff;\n}\n.trending-content {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem;\n  margin-top: 3rem;\n}\n.trending-card {\n  position: relative;\n  overflow: hidden;\n}\n.trending-card-discount {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background-color: #F90E4C;\n  z-index: 2;\n  color: #fff;\n  font-weight: bold;\n  padding: 0rem 1rem;\n  border-radius: 0.5rem;\n}\n.trending-card-img {\n  position: relative;\n}\n.trending-card-img img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.trending-card-overlay {\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  transform: translateX(100%);\n}\n.trending-card-overlay-buttons {\n  position: inherit;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  width: 5rem;\n}\n.trending-card-overlay-buttons i {\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: rgba(16, 4, 40, 0.4);\n}\n.trending-card-overlay-book {\n  position: inherit;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n}\n.trending-card-overlay-book .btn {\n  width: 100%;\n  height: 4rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  background-color: #6839CC;\n  border-color: #6839CC;\n  border-radius: 4rem;\n}\n.trending-card-overlay-book .btn i {\n  margin-right: 1rem;\n}\n.trending-card-overlay-book .btn:hover {\n  background-color: #FA782D;\n  border-color: #FA782D;\n}\n.trending-card-content {\n  padding: 2rem;\n  padding-top: 1.5rem;\n}\n.trending-card-content h4 {\n  font-size: 2.4rem;\n  font-weight: bold;\n  color: #6839CC;\n}\n.trending-card-content h4 i {\n  font-size: 1.6rem;\n}\n.trending-card-content h4 del {\n  display: inline-block;\n  margin-left: 1.2rem;\n  font-size: 1.4rem;\n  color: #666;\n  font-weight: normal;\n}\n.trending-card-content h4 del i {\n  font-size: 1.4rem;\n}\n.trending-card-content-title {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n.trending-card-content-rating {\n  display: flex;\n  grid-gap: 0.7rem;\n  align-items: center;\n  font-size: 1rem;\n}\n.trending-card-content-rating i {\n  font-size: 1rem;\n  color: #FDCB45;\n}\n.trending-card:hover {\n  cursor: pointer;\n}\n.trending-card:hover .trending-card-overlay {\n  transform: translateX(0%);\n}\n.trending-all-shop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 4rem;\n}\n.trending-all-shop a {\n  width: 20rem;\n  background-color: #6839CC;\n  height: 4rem;\n  border-radius: 4rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-weight: bold;\n}\n.trending-all-shop a i {\n  position: absolute;\n  right: 0rem;\n  top: 50%;\n  transform: translateY(-50%) translateX(100%);\n  height: 3rem;\n  border-radius: 100%;\n  background-color: #fff;\n  width: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6839CC;\n  transition: all 0.3s linear;\n}\n.trending-all-shop a:hover i {\n  transform: translateX(-0.5rem) translateY(-50%);\n}";
}


// --------------------
// Request: /components/Home/Review.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/vue3-carousel/dist/carousel.css ($id_99VGExmnIc)
// - vue3-carousel ($id_lGRnm8V0xu)
// - /assets/data/reviews.json ($id_ED1c7jjHb3)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/Review.vue?vue&type=style&index=0&lang.scss ($id_0TgUgdG02R)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_zxsIj6dRf7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue3-carousel/dist/carousel.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue3-carousel");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/reviews.json");

// const reviews = await useFetch("http://3.111.70.214:1337/company-reviews").data
//   ._rawValue;
// const reviews = ref([]);
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/company-reviews")
//     .then((res) => res.json())
//     .then((data) => (reviews.value = data))
//     .catch((err) => console.log(err.message));
// });

const _sfc_main = {
  __name: 'Review',
  setup(__props, { expose }) {
  expose();

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

const __returned__ = { Carousel: __vite_ssr_import_1__.Carousel, Slide: __vite_ssr_import_1__.Slide, Pagination: __vite_ssr_import_1__.Pagination, Navigation: __vite_ssr_import_1__.Navigation, reviews: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "review" }, _attrs))}><div class="container-fluid"><h2>Cutomers Reviews</h2><div class="review-list">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Carousel"], { "items-to-show": 1 }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_4__.ssrRenderList($setup.reviews, (slide) => {
          _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Slide"], {
            key: slide?.name
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<div class="review-box"${
                  _scopeId
                }><div class="review-box-img"${
                  _scopeId
                }><img lazy="loading"${
                  __vite_ssr_import_4__.ssrRenderAttr("src", `http://3.111.70.214:1337${slide?.image.url}`)
                } alt class="img-fluid"${
                  _scopeId
                }><h4${
                  _scopeId
                }>${
                  __vite_ssr_import_4__.ssrInterpolate(slide?.name)
                }</h4><span${
                  _scopeId
                }>${
                  __vite_ssr_import_4__.ssrInterpolate(slide?.location)
                }</span></div><div class="review-box-content"${
                  _scopeId
                }><div class="review-box-content-rating"${
                  _scopeId
                }><!--[-->`)
                __vite_ssr_import_4__.ssrRenderList(5, (n) => {
                  _push(`<i class="fa-solid fa-star"${_scopeId}></i>`)
                })
                _push(`<!--]--></div><p${
                  _scopeId
                }>${
                  __vite_ssr_import_4__.ssrInterpolate(slide?.content)
                }</p></div></div>`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode("div", { class: "review-box" }, [
                    __vite_ssr_import_3__.createVNode("div", { class: "review-box-img" }, [
                      __vite_ssr_import_3__.createVNode("img", {
                        lazy: "loading",
                        src: `http://3.111.70.214:1337${slide?.image.url}`,
                        alt: "",
                        class: "img-fluid"
                      }, null, 8 /* PROPS */, ["src"]),
                      __vite_ssr_import_3__.createVNode("h4", null, __vite_ssr_import_3__.toDisplayString(slide?.name), 1 /* TEXT */),
                      __vite_ssr_import_3__.createVNode("span", null, __vite_ssr_import_3__.toDisplayString(slide?.location), 1 /* TEXT */)
                    ]),
                    __vite_ssr_import_3__.createVNode("div", { class: "review-box-content" }, [
                      __vite_ssr_import_3__.createVNode("div", { class: "review-box-content-rating" }, [
                        (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Fragment, null, __vite_ssr_import_3__.renderList(5, (n) => {
                          return __vite_ssr_import_3__.createVNode("i", {
                            key: `star-${n}`,
                            class: "fa-solid fa-star"
                          })
                        }), 64 /* STABLE_FRAGMENT */))
                      ]),
                      __vite_ssr_import_3__.createVNode("p", null, __vite_ssr_import_3__.toDisplayString(slide?.content), 1 /* TEXT */)
                    ])
                  ])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_3__.openBlock(true), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Fragment, null, __vite_ssr_import_3__.renderList($setup.reviews, (slide) => {
            return (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock($setup["Slide"], {
              key: slide?.name
            }, {
              default: __vite_ssr_import_3__.withCtx(() => [
                __vite_ssr_import_3__.createVNode("div", { class: "review-box" }, [
                  __vite_ssr_import_3__.createVNode("div", { class: "review-box-img" }, [
                    __vite_ssr_import_3__.createVNode("img", {
                      lazy: "loading",
                      src: `http://3.111.70.214:1337${slide?.image.url}`,
                      alt: "",
                      class: "img-fluid"
                    }, null, 8 /* PROPS */, ["src"]),
                    __vite_ssr_import_3__.createVNode("h4", null, __vite_ssr_import_3__.toDisplayString(slide?.name), 1 /* TEXT */),
                    __vite_ssr_import_3__.createVNode("span", null, __vite_ssr_import_3__.toDisplayString(slide?.location), 1 /* TEXT */)
                  ]),
                  __vite_ssr_import_3__.createVNode("div", { class: "review-box-content" }, [
                    __vite_ssr_import_3__.createVNode("div", { class: "review-box-content-rating" }, [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Fragment, null, __vite_ssr_import_3__.renderList(5, (n) => {
                        return __vite_ssr_import_3__.createVNode("i", {
                          key: `star-${n}`,
                          class: "fa-solid fa-star"
                        })
                      }), 64 /* STABLE_FRAGMENT */))
                    ]),
                    __vite_ssr_import_3__.createVNode("p", null, __vite_ssr_import_3__.toDisplayString(slide?.content), 1 /* TEXT */)
                  ])
                ])
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></section>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/Review.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/Review.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/Review.vue"]]);
}


// --------------------
// Request: /assets/data/reviews.json
// Parents: 
// - /components/Home/Review.vue ($id_npbHbTijjc)
// Dependencies: 

// --------------------
const $id_LWaHBe28gy = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		name: "Lakshya Verma",
		location: "Gurugram",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo minima. Quibusdam distinctio at quisquam ullam doloribus, tenetur totam nemo sed nobis veniam animi aut possimus, adipisci ex accusantium mollitia?",
		published_at: "2022-08-31T08:56:21.962Z",
		created_at: "2022-08-31T08:56:19.123Z",
		updated_at: "2022-08-31T08:56:21.992Z",
		image: {
			id: 17,
			name: "29663026_1452118134911054_3022145305059860867_o (1).jpeg",
			alternativeText: "",
			caption: "",
			width: 1080,
			height: 1352,
			formats: {
				thumbnail: {
					name: "thumbnail_29663026_1452118134911054_3022145305059860867_o (1).jpeg",
					hash: "thumbnail_29663026_1452118134911054_3022145305059860867_o_1_6736c03986",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 125,
					height: 156,
					size: 14.41,
					path: null,
					url: "/uploads/thumbnail_29663026_1452118134911054_3022145305059860867_o_1_6736c03986.jpeg"
				},
				large: {
					name: "large_29663026_1452118134911054_3022145305059860867_o (1).jpeg",
					hash: "large_29663026_1452118134911054_3022145305059860867_o_1_6736c03986",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 799,
					height: 1000,
					size: 189.77,
					path: null,
					url: "/uploads/large_29663026_1452118134911054_3022145305059860867_o_1_6736c03986.jpeg"
				},
				medium: {
					name: "medium_29663026_1452118134911054_3022145305059860867_o (1).jpeg",
					hash: "medium_29663026_1452118134911054_3022145305059860867_o_1_6736c03986",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 599,
					height: 750,
					size: 122.74,
					path: null,
					url: "/uploads/medium_29663026_1452118134911054_3022145305059860867_o_1_6736c03986.jpeg"
				},
				small: {
					name: "small_29663026_1452118134911054_3022145305059860867_o (1).jpeg",
					hash: "small_29663026_1452118134911054_3022145305059860867_o_1_6736c03986",
					ext: ".jpeg",
					mime: "image/jpeg",
					width: 399,
					height: 500,
					size: 64.08,
					path: null,
					url: "/uploads/small_29663026_1452118134911054_3022145305059860867_o_1_6736c03986.jpeg"
				}
			},
			hash: "29663026_1452118134911054_3022145305059860867_o_1_6736c03986",
			ext: ".jpeg",
			mime: "image/jpeg",
			size: 238.89,
			url: "/uploads/29663026_1452118134911054_3022145305059860867_o_1_6736c03986.jpeg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:55:29.520Z",
			updated_at: "2022-08-31T08:55:29.533Z"
		}
	}
];;
}


// --------------------
// Request: /components/Home/Review.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/Review.vue ($id_npbHbTijjc)
// Dependencies: 

// --------------------
const $id_HUYCjjioqK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".review {\n  padding: 5rem 0rem;\n}\n.review-list {\n  border: 0.1rem dashed #F90E4C;\n  padding: 2rem;\n}\n.review-box {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  grid-gap: 2rem;\n  align-items: center;\n  width: 100%;\n}\n.review-box-img img {\n  height: 10rem;\n  border-radius: 100%;\n  width: 10rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.review-box-img h4 {\n  font-size: 2rem;\n  margin: 1rem 0rem;\n}\n.review-box-img span {\n  font-size: 1.4rem;\n}\n.review-box-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  text-align: left;\n}\n.review-box-content i {\n  color: #FDCB45;\n  margin-right: 0.5rem;\n}\n.review-box-content p {\n  margin-top: 2rem;\n}";
}


// --------------------
// Request: /components/Home/Subscribe.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/Subscribe.vue?vue&type=style&index=0&lang.scss ($id_Va663qi0fX)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_60MGoouoDJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const _sfc_main = {};

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "subscribe" }, _attrs))}><div class="container-fluid"><form action class="form"><h2> Subscribe &amp; Get <span>10%</span> Discont </h2><p> Get E-mail updates about our latest shop and `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`special offers.`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("special offers.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p><div class="form-group"><i class="fa-solid fa-envelope"></i><input type="email" placeholder="Enter Your Email..." class="form-control"><button class="btn btn-primary">Subscribe</button></div></form></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Home/Subscribe.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/Subscribe.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/Subscribe.vue"]]);
}


// --------------------
// Request: /components/Home/Subscribe.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// Dependencies: 

// --------------------
const $id_kH1EcYy0Cb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".subscribe {\n  padding: 5rem 0rem;\n  background-color: #EBADC0;\n  margin-bottom: 5rem;\n  background-image: url(\"https://img.freepik.com/free-photo/pink-balloons-with-blurry-circle_23-2148992996.jpg?w=900&t=st=1661202644~exp=1661203244~hmac=49bc4e6cc131655eebd7ec05fa4ec57e15a345f5d41e9c1c430a2a4beea2f7f0\");\n  background-size: cover;\n  position: relative;\n  background-attachment: fixed;\n}\n.subscribe::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(235, 173, 192, 0.6);\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.subscribe .container-fluid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  position: relative;\n  z-index: 2;\n}\n.subscribe .form {\n  width: 70%;\n}\n.subscribe .form h2 {\n  font-size: 4rem;\n}\n.subscribe .form h2 span {\n  font-size: 4rem;\n  color: #FA782D;\n}\n.subscribe .form p {\n  text-align: center;\n}\n.subscribe .form p span {\n  color: #FA782D;\n}\n.subscribe .form p a {\n  color: #FA782D;\n}\n.subscribe .form-control {\n  height: 4rem;\n  font-size: 1.6rem;\n  padding-left: 4rem;\n  border-radius: 4rem;\n  border-color: #6839CC;\n}\n.subscribe .form-group {\n  position: relative;\n}\n.subscribe .form-group .fa-envelope {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 1rem;\n}\n.subscribe .form-group .btn {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  width: 15rem;\n  height: 4rem;\n  font-size: 1.6rem;\n  border-radius: 4rem;\n  background-color: #6839CC;\n  border-color: #6839CC;\n}";
}


// --------------------
// Request: /components/Home/FeaturedIn.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /node_modules/vue3-carousel/dist/carousel.css ($id_99VGExmnIc)
// - vue3-carousel ($id_lGRnm8V0xu)
// - /assets/data/companies.json ($id_38Ge2xqZTe)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Home/FeaturedIn.vue?vue&type=style&index=0&lang.scss ($id_vZFo2Ci8Bv)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_kyTDdoo3E5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue3-carousel/dist/carousel.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue3-carousel");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/data/companies.json");

// const companies = await useFetch("http://3.111.70.214:1337/companies").data
//   ._rawValue;
// const companies = ref([]);

// onMounted(() => {
//   fetch("http://3.111.70.214:1337/companies")
//     .then((res) => res.json())
//     .then((data) => (companies.value = data))
//     .catch((err) => console.log(err.message));
// });

const _sfc_main = {
  __name: 'FeaturedIn',
  setup(__props, { expose }) {
  expose();

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

const __returned__ = { Carousel: __vite_ssr_import_1__.Carousel, Slide: __vite_ssr_import_1__.Slide, Pagination: __vite_ssr_import_1__.Pagination, Navigation: __vite_ssr_import_1__.Navigation, companies: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "featured-in" }, _attrs))}><div class="container-fluid"><div class="featured-in-list"><label for>Featured In</label>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Carousel"], { "items-to-show": 6 }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_4__.ssrRenderList($setup.companies, (slide) => {
          _push(__vite_ssr_import_4__.ssrRenderComponent($setup["Slide"], {
            key: slide?.title
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<img lazy="loading"${
                  __vite_ssr_import_4__.ssrRenderAttr("src", `http://3.111.70.214:1337${slide?.logo.url}`)
                } alt class="img-fluid"${
                  _scopeId
                }>`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode("img", {
                    lazy: "loading",
                    src: `http://3.111.70.214:1337${slide?.logo.url}`,
                    alt: "",
                    class: "img-fluid"
                  }, null, 8 /* PROPS */, ["src"])
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_3__.openBlock(true), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Fragment, null, __vite_ssr_import_3__.renderList($setup.companies, (slide) => {
            return (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock($setup["Slide"], {
              key: slide?.title
            }, {
              default: __vite_ssr_import_3__.withCtx(() => [
                __vite_ssr_import_3__.createVNode("img", {
                  lazy: "loading",
                  src: `http://3.111.70.214:1337${slide?.logo.url}`,
                  alt: "",
                  class: "img-fluid"
                }, null, 8 /* PROPS */, ["src"])
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/FeaturedIn.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Home/FeaturedIn.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Home/FeaturedIn.vue"]]);
}


// --------------------
// Request: /assets/data/companies.json
// Parents: 
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// Dependencies: 

// --------------------
const $id_YFhSLgurmL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
	{
		id: 1,
		title: "brand-1",
		published_at: "2022-08-31T08:48:06.113Z",
		created_at: "2022-08-31T08:48:04.106Z",
		updated_at: "2022-08-31T08:48:06.129Z",
		logo: {
			id: 11,
			name: "brand-1.svg",
			alternativeText: "",
			caption: "",
			width: 90,
			height: 80,
			formats: null,
			hash: "brand_1_a629e1e00d",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 35.54,
			url: "/uploads/brand_1_a629e1e00d.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:48:01.378Z",
			updated_at: "2022-08-31T08:48:01.392Z"
		}
	},
	{
		id: 2,
		title: "brand-2",
		published_at: "2022-08-31T08:48:27.548Z",
		created_at: "2022-08-31T08:48:24.899Z",
		updated_at: "2022-08-31T08:48:27.563Z",
		logo: {
			id: 12,
			name: "brand-2.svg",
			alternativeText: "",
			caption: "",
			width: 76,
			height: 80,
			formats: null,
			hash: "brand_2_2dc2358373",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 49.37,
			url: "/uploads/brand_2_2dc2358373.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:48:21.109Z",
			updated_at: "2022-08-31T08:48:21.119Z"
		}
	},
	{
		id: 3,
		title: "brand-3",
		published_at: "2022-08-31T08:48:47.353Z",
		created_at: "2022-08-31T08:48:45.273Z",
		updated_at: "2022-08-31T08:48:47.373Z",
		logo: {
			id: 13,
			name: "brand-3.svg",
			alternativeText: "",
			caption: "",
			width: 118,
			height: 80,
			formats: null,
			hash: "brand_3_dc68dbc551",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 8.45,
			url: "/uploads/brand_3_dc68dbc551.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:48:41.893Z",
			updated_at: "2022-08-31T08:48:41.904Z"
		}
	},
	{
		id: 4,
		title: "brand-4",
		published_at: "2022-08-31T08:49:07.123Z",
		created_at: "2022-08-31T08:49:03.992Z",
		updated_at: "2022-08-31T08:49:07.139Z",
		logo: {
			id: 14,
			name: "brand-4.svg",
			alternativeText: "",
			caption: "",
			width: 127,
			height: 80,
			formats: null,
			hash: "brand_4_7c2e6e8ab4",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 12.55,
			url: "/uploads/brand_4_7c2e6e8ab4.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:49:00.672Z",
			updated_at: "2022-08-31T08:49:00.683Z"
		}
	},
	{
		id: 5,
		title: "brand-5",
		published_at: "2022-08-31T08:49:26.990Z",
		created_at: "2022-08-31T08:49:24.464Z",
		updated_at: "2022-08-31T08:49:27.006Z",
		logo: {
			id: 15,
			name: "brand-5.svg",
			alternativeText: "",
			caption: "",
			width: 110,
			height: 80,
			formats: null,
			hash: "brand_5_b888f82380",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 18.63,
			url: "/uploads/brand_5_b888f82380.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:49:21.597Z",
			updated_at: "2022-08-31T08:49:21.608Z"
		}
	},
	{
		id: 6,
		title: "brand-6",
		published_at: "2022-08-31T08:49:47.164Z",
		created_at: "2022-08-31T08:49:44.151Z",
		updated_at: "2022-08-31T08:49:47.181Z",
		logo: {
			id: 16,
			name: "brand-6.svg",
			alternativeText: "",
			caption: "",
			width: 120,
			height: 80,
			formats: null,
			hash: "brand_6_41eea43432",
			ext: ".svg",
			mime: "image/svg+xml",
			size: 32.23,
			url: "/uploads/brand_6_41eea43432.svg",
			previewUrl: null,
			provider: "local",
			provider_metadata: null,
			created_at: "2022-08-31T08:49:41.707Z",
			updated_at: "2022-08-31T08:49:41.718Z"
		}
	}
];;
}


// --------------------
// Request: /components/Home/FeaturedIn.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// Dependencies: 

// --------------------
const $id_op5V7esZsR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".featured-in-list {\n  border: 0.1rem dashed #F90E4C;\n  position: relative;\n  padding: 3rem 1rem;\n}\n.featured-in-list label {\n  position: absolute;\n  height: 3rem;\n  top: -1.5rem;\n  left: 1rem;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  display: inline-block;\n  padding: 0rem 1rem;\n}";
}


// --------------------
// Request: /pages/product/[id].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /assets/data/products.json ($id_uC0ly54lTX)
// - jquery ($id_EnyM9Z8ii7)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_CqSBSJpg5H = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Part/DatePicker.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Part/breadcrumb.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/ProductCardRating.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Part/productContainer.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Part/productCart.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/data/products.json");

const __vite_ssr_import_9__ = await __vite_ssr_import__("jquery");



const _sfc_main = {
  __name: '[id]',
  setup(__props, { expose }) {
  expose();

const selectedTab = __vite_ssr_import_6__.ref("description");
// const products = ref([]);
const route = __vite_ssr_import_7__.useRoute();
const selectedProduct = __vite_ssr_import_8__.default.filter(function (product) {
  return product.slug === route.params.id;
});

const bookShow = __vite_ssr_import_6__.ref(false);

function bookNow() {
  bookShow.value = !bookShow.value;
}

function onTabClicked(index) {
  selectedTab.value = index;
}

__vite_ssr_import_6__.onMounted(() => {
  // fetch("http://3.111.70.214:1337/products")
  //   .then((res) => res.json())
  //   .then((data) => (products.value = data))
  //   .catch((err) => console.log(err.message));

  // fetch(`http://3.111.70.214:1337/products?slug=${route.params.id}`)
  //   .then((res) => res.json())
  //   .then((data) => (selectedProduct.value = data))
  //   .catch((err) => console.log(err.message));

  __vite_ssr_import_9__.default(".product-page-image").mouseenter(function () {
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({ transform: "scale(1.3)" });
  });
  __vite_ssr_import_9__.default(".product-page-image").mouseleave(function () {
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({
      transform: "scale(1)",
      left: "0px",
      top: "0px",
    });
  });
  __vite_ssr_import_9__.default(".product-page-image").mousemove(function (e) {
    let valueX = (e.pageX * -1) / 8;
    let valueY = (e.pageY * -1) / 8;
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({
      left: valueX + "px",
      top: valueY + "px",
    });
  });
});

const __returned__ = { selectedTab, route, selectedProduct, bookShow, bookNow, onTabClicked, products: __vite_ssr_import_8__.default, $: __vite_ssr_import_9__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PartDatePicker = __vite_ssr_import_0__.default
  const _component_PartBreadcrumb = __vite_ssr_import_1__.default
  const _component_PartProductCardRating = __vite_ssr_import_2__.default
  const _component_nuxt_link = __vite_ssr_import_3__.default
  const _component_PartProductContainer = __vite_ssr_import_4__.default
  const _component_PartProductCart = __vite_ssr_import_5__.default

  _push(`<main${__vite_ssr_import_11__.ssrRenderAttrs(__vite_ssr_import_10__.mergeProps({ class: "product-page" }, _attrs))}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartDatePicker, { show: $setup.bookShow }, null, _parent))
  _push(`<div class="container-fluid">`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ['Home', 'Category', 'Product'] }, null, _parent))
  if ($setup.selectedProduct) {
    _push(`<div class="product-page-body"><div class="product-page-image"><img${
      __vite_ssr_import_11__.ssrRenderAttr("src", `http://3.111.70.214:1337${$setup.selectedProduct[0].image.url}`)
    } alt class="img-fluid"></div><div class="product-page-content"><label for>25%</label><h2 class="product-page-content-title">${
      __vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].title)
    }</h2><h4 class="product-page-content-price"><i class="fa-solid fa-indian-rupee-sign"></i> 2,500 <del><i class="fa-solid fa-indian-rupee-sign"></i> ${
      __vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].price)
    }</del></h4>`)
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductCardRating, {
      stars: 5,
      rating: 2
    }, null, _parent))
    _push(`<p>${__vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].content)}</p><div class="product-page-content-buttons"><button class="btn btn-book"><i class="fa-solid fa-cart-shopping"></i> Book Now </button><button class="btn btn-heart"><i class="fa-solid fa-heart"></i></button></div><div class="product-page-content-icons"> Share : `)
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-facebook"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-facebook" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-linkedin"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-linkedin" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-twitter"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-twitter" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-instagram"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-instagram" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(`</div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
  if ($setup.selectedProduct) {
    _push(`<div class="product-page-description"><div class="container-fluid"><div class="product-page-description-tabs"><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'description' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Descirption </div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'information' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Additional Information </div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'review' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Reviews(5) </div></div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'description' ? 'active' : ''], "product-page-description-content"])
    }">${
      $setup.selectedProduct[0].Description
    }</div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'information' ? 'active' : ''], "product-page-description-content"])
    }">${
      $setup.selectedProduct[0].information
    }</div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'review' ? 'active' : ''], "product-page-description-content"])
    }"><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt necessitatibus soluta tempora eum delectus at incidunt odit maxime, explicabo ad eligendi fugiat asperiores quia adipisci architecto nisi, eveniet repellat temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minima deleniti. Sed ad quam, voluptates, temporibus quas dolores, quod accusamus mollitia ea itaque iure? Sint at quae excepturi cumque reprehenderit! </p></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="product-page-related-products"><div class="container-fluid"><h2>Related Products</h2>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_11__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductCart, {
            key: `product-${product?.id}`,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_10__.openBlock(true), __vite_ssr_import_10__.createBlock(__vite_ssr_import_10__.Fragment, null, __vite_ssr_import_10__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock(_component_PartProductCart, {
              key: `product-${product?.id}`,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></main>`)
}

const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/product/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/product/[id].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Part/DatePicker.vue
// Parents: 
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/v-calendar/dist/style.css ($id_WIcrwFXrL5)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/DatePicker.vue?vue&type=style&index=0&lang.scss ($id_9l3XOCiPyg)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_8gc0SwaHTU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/v-calendar/dist/style.css");



const _sfc_main = {
  __name: 'DatePicker',
  props: {
  show: Boolean,
},
  setup(__props, { expose }) {
  expose();

const props = __props

const date = __vite_ssr_import_0__.ref(new Date());
const timezone = __vite_ssr_import_0__.ref("");
const slide = __vite_ssr_import_0__.ref("date");



const showValue = __vite_ssr_import_0__.computed(() => __vite_ssr_import_0__.ref(props.show));

__vite_ssr_import_0__.onMounted(() => {
  date.value = new Date();
  slide.value = "date";
});

function changeSlide(index) {
  slide.value = index;
}

const __returned__ = { date, timezone, slide, props, showValue, changeSlide }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_date_picker = __vite_ssr_import_2__.resolveComponent("v-date-picker")

  _push(`<section${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
      id: "date-picker",
      class: [$setup.showValue.value ? '' : 'd-none']
    }, _attrs))
  }><div class="${
    __vite_ssr_import_3__.ssrRenderClass([[ $setup.slide == 'date' ? '' : 'd-none'], "container"])
  }"><h2>SELECT EVENT DATE &amp; TIME</h2>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_v_date_picker, {
    "min-date": new Date(),
    color: "orange",
    mode: "date",
    modelValue: $setup.date,
    "onUpdate:modelValue": $event => (($setup.date) = $event)
  }, null, _parent))
  _push(`<div class="buttons-date"><button class="btn btn-outline-danger"><i class="fa-solid fa-clock"></i> Select Time </button></div></div><div class="${__vite_ssr_import_3__.ssrRenderClass([[ $setup.slide == 'time' ? '' : 'd-none'], "container"])}"><h2>SELECT EVENT DATE &amp; TIME</h2><h4 id="date-picker-title">READY TIME?</h4><p>TAP BELOW TO SELECT TIME</p>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_v_date_picker, {
    mode: "time",
    modelValue: $setup.date,
    "onUpdate:modelValue": $event => (($setup.date) = $event),
    color: "orange",
    timezone: $setup.timezone
  }, null, _parent))
  _push(`<p>FOR SAME DAY BOOKING, KINDLY WHATSAPP US OR CALL</p><div class="buttons-icon"><div class="buttons-icon-whatsapp"><i class="fa-brands fa-whatsapp"></i> Whatsapp </div><div class="buttons-icon-call"><i class="fa-solid fa-phone"></i> (+91) 8619325471 </div></div><div class="buttons-time"><button class="btn btn-outline-danger"><i class="fa-solid fa-clock"></i> Change Date </button><button class="btn btn-outline-danger"><i class="fa-solid fa-plus"></i> Book Now </button></div></div></section>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Part/DatePicker.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/DatePicker.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/DatePicker.vue"]]);
}


// --------------------
// Request: /node_modules/v-calendar/dist/style.css
// Parents: 
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// Dependencies: 

// --------------------
const $id_3x5tEFLj0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:auto;color:var(--gray-600);border-width:2px;border-style:solid;border-radius:var(--rounded);border-color:transparent}.vc-arrow:hover{background:var(--gray-200)}.vc-arrow:focus{border-color:var(--gray-300)}.vc-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-day-popover-container{color:var(--white);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded);font-size:var(--text-xs);font-weight:var(--font-medium);padding:4px 8px;box-shadow:var(--shadow)}.vc-day-popover-header{font-size:var(--text-xs);color:var(--gray-300);font-weight:var(--font-semibold);text-align:center}.vc-arrows-container{width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:8px 10px;pointer-events:none}.vc-arrows-container.title-left{justify-content:flex-end}.vc-arrows-container.title-right{justify-content:flex-start}.vc-is-dark .vc-arrow{color:var(--white)}.vc-is-dark .vc-arrow:hover{background:var(--gray-800)}.vc-is-dark .vc-arrow:focus{border-color:var(--gray-700)}.vc-is-dark .vc-day-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-is-dark .vc-day-popover-header{color:var(--gray-700)}.vc-day{position:relative;min-height:32px;z-index:1}.vc-day.is-not-in-month *{opacity:0;pointer-events:none}.vc-day-layer{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center{display:flex;justify-content:flex-start;align-items:center;transform-origin:0% 50%}.vc-day-box-right-center{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom{display:flex;justify-content:center;align-items:flex-end}.vc-day-content{display:flex;justify-content:center;align-items:center;font-size:var(--text-sm);font-weight:var(--font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--rounded-full);-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.vc-day-content:hover{background-color:#ccd6e04d}.vc-day-content:focus{font-weight:var(--font-bold);background-color:#ccd6e066}.vc-day-content.is-disabled{color:var(--gray-400)}.vc-is-dark .vc-day-content:hover{background-color:#7281974d}.vc-is-dark .vc-day-content:focus{background-color:#72819766}.vc-is-dark .vc-day-content.is-disabled{color:var(--gray-600)}.vc-highlights{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight{width:28px;height:28px}.vc-highlight.vc-highlight-base-start{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-dots{display:flex;justify-content:center;align-items:center}.vc-dot{width:5px;height:5px;border-radius:50%;transition:all var(--day-content-transition-time)}.vc-dot:not(:last-child){margin-right:3px}.vc-bars{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar{flex-grow:1;height:3px;transition:all var(--day-content-transition-time)}.vc-nav-header{display:flex;justify-content:space-between}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;line-height:var(--leading-snug);border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded)}.vc-nav-arrow.is-left{margin-right:auto}.vc-nav-arrow.is-right{margin-left:auto}.vc-nav-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-nav-arrow:hover{background-color:var(--gray-900)}.vc-nav-arrow:focus{border-color:var(--accent-600)}.vc-nav-title{color:var(--accent-100);font-weight:var(--font-bold);line-height:var(--leading-snug);padding:4px 8px;border-radius:var(--rounded);border-width:2px;border-style:solid;border-color:transparent;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-nav-title:hover{background-color:var(--gray-900)}.vc-nav-title:focus{border-color:var(--accent-600)}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px}.vc-nav-item{width:48px;text-align:center;line-height:var(--leading-snug);font-weight:var(--font-semibold);padding:4px 0;cursor:pointer;border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded);-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-nav-item:hover{color:var(--white);background-color:var(--gray-900);box-shadow:var(--shadow-inner)}.vc-nav-item.is-active{color:var(--accent-900);background:var(--accent-100);font-weight:var(--font-bold);box-shadow:var(--shadow)}.vc-nav-item.is-current{color:var(--accent-100);font-weight:var(--bold);border-color:var(--accent-100)}.vc-nav-item:focus{border-color:var(--accent-600)}.vc-nav-item.is-disabled{opacity:.25;pointer-events:none}.vc-is-dark .vc-nav-title{color:var(--gray-900)}.vc-is-dark .vc-nav-title:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-title:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-arrow:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-arrow:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-item:hover{color:var(--gray-900);background-color:var(--gray-200);box-shadow:none}.vc-is-dark .vc-nav-item.is-active{color:var(--white);background:var(--accent-500)}.vc-is-dark .vc-nav-item.is-current{color:var(--accent-600);border-color:var(--accent-500)}.vc-is-dark .vc-nav-item:focus{border-color:var(--accent-400)}.vc-pane{min-width:250px}.vc-header{display:flex;justify-content:center;align-items:center;padding:10px 16px 0}.vc-header.align-left{justify-content:flex-start}.vc-header.align-right{justify-content:flex-end}.vc-title{font-size:var(--text-lg);color:var(--gray-800);font-weight:var(--font-semibold);line-height:28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.vc-title:hover{opacity:.75}.vc-weeknumber{display:flex;justify-content:center;align-items:center;position:relative}.vc-weeknumber-content{display:flex;justify-content:center;align-items:center;font-size:var(--text-xs);font-weight:var(--font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--gray-500);-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-weeknumber-content.is-left-outside{position:absolute;left:var(--weeknumber-offset)}.vc-weeknumber-content.is-right-outside{position:absolute;right:var(--weeknumber-offset)}.vc-weeks{display:grid;grid-template-columns:repeat(7,1fr);position:relative;-webkit-overflow-scrolling:touch;padding:6px;min-width:250px}.vc-weeks.vc-show-weeknumbers{grid-template-columns:auto repeat(7,1fr)}.vc-weeks.vc-show-weeknumbers.is-right{grid-template-columns:repeat(7,1fr) auto}.vc-weekday{text-align:center;color:var(--gray-500);font-size:var(--text-sm);font-weight:var(--font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vc-weekdays{display:flex}.vc-nav-popover-container{color:var(--white);font-size:var(--text-sm);font-weight:var(--font-semibold);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded-lg);padding:4px;box-shadow:var(--shadow)}.vc-is-dark .vc-header{color:var(--gray-200)}.vc-is-dark .vc-title{color:var(--gray-100)}.vc-is-dark .vc-weekday{color:var(--accent-200)}.vc-is-dark .vc-nav-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-none-enter-active,.vc-none-leave-active{transition-duration:0s}.vc-fade-enter-active,.vc-fade-leave-active,.vc-slide-left-enter-active,.vc-slide-left-leave-active,.vc-slide-right-enter-active,.vc-slide-right-leave-active,.vc-slide-up-enter-active,.vc-slide-up-leave-active,.vc-slide-down-enter-active,.vc-slide-down-leave-active,.vc-slide-fade-enter-active,.vc-slide-fade-leave-active{transition:transform var(--slide-duration) var(--slide-timing),opacity var(--slide-duration) var(--slide-timing);-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none}.vc-none-leave-active,.vc-fade-leave-active,.vc-slide-left-leave-active,.vc-slide-right-leave-active,.vc-slide-up-leave-active,.vc-slide-down-leave-active{position:absolute!important;width:100%}.vc-none-enter-from,.vc-none-leave-to,.vc-fade-enter-from,.vc-fade-leave-to,.vc-slide-left-enter-from,.vc-slide-left-leave-to,.vc-slide-right-enter-from,.vc-slide-right-leave-to,.vc-slide-up-enter-from,.vc-slide-up-leave-to,.vc-slide-down-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from,.vc-slide-fade-leave-to{opacity:0}.vc-slide-left-enter-from,.vc-slide-right-leave-to,.vc-slide-fade-enter-from.direction-left,.vc-slide-fade-leave-to.direction-left{transform:translate(var(--slide-translate))}.vc-slide-right-enter-from,.vc-slide-left-leave-to,.vc-slide-fade-enter-from.direction-right,.vc-slide-fade-leave-to.direction-right{transform:translate(calc(-1 * var(--slide-translate)))}.vc-slide-up-enter-from,.vc-slide-down-leave-to,.vc-slide-fade-enter-from.direction-top,.vc-slide-fade-leave-to.direction-top{transform:translateY(var(--slide-translate))}.vc-slide-down-enter-from,.vc-slide-up-leave-to,.vc-slide-fade-enter-from.direction-bottom,.vc-slide-fade-leave-to.direction-bottom{transform:translateY(calc(-1 * var(--slide-translate)))}.vc-popover-content-wrapper{--popover-horizontal-content-offset: 8px;--popover-vertical-content-offset: 10px;--popover-caret-horizontal-offset: 18px;--popover-caret-vertical-offset: 8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper:not(.is-interactive){pointer-events:none}.vc-popover-content{position:relative;outline:none;z-index:10;box-shadow:var(--shadow-lg)}.vc-popover-content.direction-bottom{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret{content:\"\";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;z-index:-1}.vc-popover-caret.direction-bottom{top:0}.vc-popover-caret.direction-bottom.align-left{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center{transform:translate(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top{top:100%}.vc-popover-caret.direction-top.align-left{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center{transform:translate(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left{left:100%}.vc-popover-caret.direction-left.align-top{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle{transform:translateY(-50%) translate(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom{transform:translate(-50%) rotate(135deg)}.vc-popover-caret.direction-right{left:0}.vc-popover-caret.direction-right.align-top{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle{transform:translateY(-50%) translate(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom{transform:translate(-50%) rotate(-45deg)}.vc-popover-caret.align-left{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center{left:50%}.vc-popover-caret.align-right{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle{top:50%}.vc-popover-caret.align-bottom{bottom:var(--popover-caret-vertical-offset)}.vc-day-popover-row{--day-content-transition-time: .13s ease-in;display:flex;align-items:center;transition:all var(--day-content-transition-time)}.vc-day-popover-row:not(:first-child){margin-top:3px}.vc-day-popover-row-indicator{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px;margin-right:3px}.vc-day-popover-row-indicator span{transition:all var(--day-content-transition-time)}.vc-day-popover-row-content{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-webkit-max-content;width:-moz-max-content;width:max-content}.vc-svg-icon{display:inline-block;stroke:currentColor;stroke-width:0}.vc-svg-icon path{fill:currentColor}.vc-time-picker{display:flex;align-items:center;padding:8px}.vc-time-picker.vc-invalid{pointer-events:none;opacity:.5}.vc-time-picker.vc-bordered{border-top:1px solid var(--gray-400)}.vc-time-icon{width:16px;height:16px;color:var(--gray-600)}.vc-time-content{margin-left:8px}.vc-time-date{display:flex;align-items:center;font-size:var(--text-sm);font-weight:var(--font-semibold);text-transform:uppercase;padding:0 0 4px 4px;margin-top:-4px;line-height:21px}.vc-time-weekday{color:var(--gray-700);letter-spacing:var(--tracking-wide)}.vc-time-month{color:var(--accent-600);margin-left:8px}.vc-time-day{color:var(--accent-600);margin-left:4px}.vc-time-year{color:var(--gray-500);margin-left:8px}.vc-time-select{display:flex;align-items:center}.vc-am-pm{display:flex;align-items:center;background:var(--gray-200);color:var(--gray-800);margin-left:8px;padding:4px;border-radius:var(--rounded);height:30px}.vc-am-pm button{font-size:var(--text-sm);font-weight:var(--font-medium);padding:0 4px;background:transparent;border:2px solid transparent;border-radius:var(--rounded);line-height:var(--leading-snug)}.vc-am-pm button:hover{color:var(--gray-600)}.vc-am-pm button:focus{border-color:var(--accent-400)}.vc-am-pm button.active{background:var(--accent-600);color:var(--white)}.vc-am-pm button.active:hover{background:var(--accent-500)}.vc-am-pm button.active:focus{border-color:var(--accent-400)}.vc-is-dark .vc-time-picker{border-color:var(--gray-700)}.vc-is-dark .vc-time-icon,.vc-is-dark .vc-time-weekday{color:var(--gray-400)}.vc-is-dark .vc-time-month,.vc-is-dark .vc-time-day{color:var(--accent-400)}.vc-is-dark .vc-time-year{color:var(--gray-500)}.vc-is-dark .vc-am-pm{background:var(--gray-700)}.vc-is-dark .vc-am-pm:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button{color:var(--gray-100)}.vc-is-dark .vc-am-pm button:hover{color:var(--gray-400)}.vc-is-dark .vc-am-pm button:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button.active{background:var(--accent-500);color:var(--white)}.vc-is-dark .vc-am-pm button.active:hover{background:var(--accent-600)}.vc-is-dark .vc-am-pm button.active:focus{border-color:var(--accent-500)}.vc-select{position:relative}.vc-select select{flex-grow:1;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:52px;height:30px;font-size:var(--text-base);font-weight:var(--font-medium);text-align:left;background-color:var(--gray-200);border:2px solid;border-color:var(--gray-200);color:var(--gray-900);padding:0 20px 0 8px;border-radius:var(--rounded);line-height:var(--leading-tight);text-indent:0px;cursor:pointer;-moz-padding-start:3px;background-image:none}.vc-select select:hover{color:var(--gray-600)}.vc-select select:focus{outline:0;border-color:var(--accent-400);background-color:var(--white)}.vc-select-arrow{display:flex;align-items:center;pointer-events:none;position:absolute;top:0;bottom:0;right:0;padding:0 4px 0 0;color:var(--gray-500)}.vc-select-arrow svg{width:16px;height:16px;fill:currentColor}.vc-is-dark select{background:var(--gray-700);color:var(--gray-100);border-color:var(--gray-700)}.vc-is-dark select:hover{color:var(--gray-400)}.vc-is-dark select:focus{border-color:var(--accent-500);background-color:var(--gray-800)}.vc-container{--white: #ffffff;--black: #000000;--gray-100: #f7fafc;--gray-200: #edf2f7;--gray-300: #e2e8f0;--gray-400: #cbd5e0;--gray-500: #a0aec0;--gray-600: #718096;--gray-700: #4a5568;--gray-800: #2d3748;--gray-900: #1a202c;--red-100: #fff5f5;--red-200: #fed7d7;--red-300: #feb2b2;--red-400: #fc8181;--red-500: #f56565;--red-600: #e53e3e;--red-700: #c53030;--red-800: #9b2c2c;--red-900: #742a2a;--orange-100: #fffaf0;--orange-200: #feebc8;--orange-300: #fbd38d;--orange-400: #f6ad55;--orange-500: #ed8936;--orange-600: #dd6b20;--orange-700: #c05621;--orange-800: #9c4221;--orange-900: #7b341e;--yellow-100: #fffff0;--yellow-200: #fefcbf;--yellow-300: #faf089;--yellow-400: #f6e05e;--yellow-500: #ecc94b;--yellow-600: #d69e2e;--yellow-700: #b7791f;--yellow-800: #975a16;--yellow-900: #744210;--green-100: #f0fff4;--green-200: #c6f6d5;--green-300: #9ae6b4;--green-400: #68d391;--green-500: #48bb78;--green-600: #38a169;--green-700: #2f855a;--green-800: #276749;--green-900: #22543d;--teal-100: #e6fffa;--teal-200: #b2f5ea;--teal-300: #81e6d9;--teal-400: #4fd1c5;--teal-500: #38b2ac;--teal-600: #319795;--teal-700: #2c7a7b;--teal-800: #285e61;--teal-900: #234e52;--blue-100: #ebf8ff;--blue-200: #bee3f8;--blue-300: #90cdf4;--blue-400: #63b3ed;--blue-500: #4299e1;--blue-600: #3182ce;--blue-700: #2b6cb0;--blue-800: #2c5282;--blue-900: #2a4365;--indigo-100: #ebf4ff;--indigo-200: #c3dafe;--indigo-300: #a3bffa;--indigo-400: #7f9cf5;--indigo-500: #667eea;--indigo-600: #5a67d8;--indigo-700: #4c51bf;--indigo-800: #434190;--indigo-900: #3c366b;--purple-100: #faf5ff;--purple-200: #e9d8fd;--purple-300: #d6bcfa;--purple-400: #b794f4;--purple-500: #9f7aea;--purple-600: #805ad5;--purple-700: #6b46c1;--purple-800: #553c9a;--purple-900: #44337a;--pink-100: #fff5f7;--pink-200: #fed7e2;--pink-300: #fbb6ce;--pink-400: #f687b3;--pink-500: #ed64a6;--pink-600: #d53f8c;--pink-700: #b83280;--pink-800: #97266d;--pink-900: #702459}.vc-container.vc-red{--accent-100: var(--red-100);--accent-200: var(--red-200);--accent-300: var(--red-300);--accent-400: var(--red-400);--accent-500: var(--red-500);--accent-600: var(--red-600);--accent-700: var(--red-700);--accent-800: var(--red-800);--accent-900: var(--red-900)}.vc-container.vc-orange{--accent-100: var(--orange-100);--accent-200: var(--orange-200);--accent-300: var(--orange-300);--accent-400: var(--orange-400);--accent-500: var(--orange-500);--accent-600: var(--orange-600);--accent-700: var(--orange-700);--accent-800: var(--orange-800);--accent-900: var(--orange-900)}.vc-container.vc-yellow{--accent-100: var(--yellow-100);--accent-200: var(--yellow-200);--accent-300: var(--yellow-300);--accent-400: var(--yellow-400);--accent-500: var(--yellow-500);--accent-600: var(--yellow-600);--accent-700: var(--yellow-700);--accent-800: var(--yellow-800);--accent-900: var(--yellow-900)}.vc-container.vc-green{--accent-100: var(--green-100);--accent-200: var(--green-200);--accent-300: var(--green-300);--accent-400: var(--green-400);--accent-500: var(--green-500);--accent-600: var(--green-600);--accent-700: var(--green-700);--accent-800: var(--green-800);--accent-900: var(--green-900)}.vc-container.vc-teal{--accent-100: var(--teal-100);--accent-200: var(--teal-200);--accent-300: var(--teal-300);--accent-400: var(--teal-400);--accent-500: var(--teal-500);--accent-600: var(--teal-600);--accent-700: var(--teal-700);--accent-800: var(--teal-800);--accent-900: var(--teal-900)}.vc-container.vc-blue{--accent-100: var(--blue-100);--accent-200: var(--blue-200);--accent-300: var(--blue-300);--accent-400: var(--blue-400);--accent-500: var(--blue-500);--accent-600: var(--blue-600);--accent-700: var(--blue-700);--accent-800: var(--blue-800);--accent-900: var(--blue-900)}.vc-container.vc-indigo{--accent-100: var(--indigo-100);--accent-200: var(--indigo-200);--accent-300: var(--indigo-300);--accent-400: var(--indigo-400);--accent-500: var(--indigo-500);--accent-600: var(--indigo-600);--accent-700: var(--indigo-700);--accent-800: var(--indigo-800);--accent-900: var(--indigo-900)}.vc-container.vc-purple{--accent-100: var(--purple-100);--accent-200: var(--purple-200);--accent-300: var(--purple-300);--accent-400: var(--purple-400);--accent-500: var(--purple-500);--accent-600: var(--purple-600);--accent-700: var(--purple-700);--accent-800: var(--purple-800);--accent-900: var(--purple-900)}.vc-container.vc-pink{--accent-100: var(--pink-100);--accent-200: var(--pink-200);--accent-300: var(--pink-300);--accent-400: var(--pink-400);--accent-500: var(--pink-500);--accent-600: var(--pink-600);--accent-700: var(--pink-700);--accent-800: var(--pink-800);--accent-900: var(--pink-900)}.vc-container{--font-normal: 400;--font-medium: 500;--font-semibold: 600;--font-bold: 700;--text-xs: 12px;--text-sm: 14px;--text-base: 16px;--text-lg: 18px;--leading-snug: 1.375;--rounded: .25rem;--rounded-lg: .5rem;--rounded-full: 9999px;--shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, .06);--slide-translate: 22px;--slide-duration: .15s;--slide-timing: ease;--day-content-transition-time: .13s ease-in;--weeknumber-offset: -34px;position:relative;display:inline-flex;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:var(--gray-900);background-color:var(--white);border:1px solid;border-color:var(--gray-400);border-radius:var(--rounded-lg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container *:focus{outline:none}.vc-container button,.vc-container [role=button]{cursor:pointer}.vc-container.vc-is-expanded{min-width:100%}.vc-container .vc-container{border:none}.vc-container.vc-is-dark{color:var(--gray-100);background-color:var(--gray-900);border-color:var(--gray-700)}\n";
}


// --------------------
// Request: /components/Part/DatePicker.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// Dependencies: 

// --------------------
const $id_IdptKEtVjz = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "#date-picker {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(-45deg, rgba(104, 57, 204, 0.9), rgba(16, 4, 40, 0.7));\n  z-index: 5;\n}\n#date-picker-title {\n  font-size: 4rem;\n  font-weight: bold;\n}\n#date-picker p {\n  font-size: 1.4rem;\n  padding: 1rem 0rem;\n}\n#date-picker .container {\n  padding: 4rem;\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  margin: 0 auto;\n  background-color: #fff;\n}\n#date-picker .container .buttons-icon {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  padding: 2rem;\n  color: #fff;\n}\n#date-picker .container .buttons-icon-whatsapp {\n  background-color: #39d366;\n  padding: 1rem 1.5rem;\n  border-radius: 0.4rem;\n}\n#date-picker .container .buttons-icon-call {\n  background-color: #FA782D;\n  padding: 1rem 1.5rem;\n  border-radius: 0.4rem;\n}\n#date-picker .container .buttons-date {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n#date-picker .container .buttons-time {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#date-picker .container .btn-outline-danger {\n  border-color: #6839CC;\n  font-size: 1.8rem;\n  color: #6839CC;\n  margin-top: 2rem;\n}\n#date-picker .container .btn-outline-danger:hover {\n  background-color: #6839CC;\n  color: #fff;\n}\n#date-picker .container h2 {\n  padding-bottom: 2rem;\n}\n#date-picker .container .vc-header {\n  padding-bottom: 2rem;\n}\n#date-picker .container .vc-container {\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n#date-picker .container [class*=vc-time-] {\n  font-size: 3rem;\n  padding-bottom: 2rem;\n}\n#date-picker .container .vc-time-picker,\n#date-picker .container .vc-time-content {\n  padding-bottom: 0rem;\n}\n#date-picker .container .vc-time-select {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#date-picker .container .vc-select,\n#date-picker .container [class*=vc-am] {\n  font-size: 1.7rem;\n  height: 7rem;\n  width: 7rem;\n}\n#date-picker .container .vc-select button,\n#date-picker .container [class*=vc-am] button {\n  height: 100%;\n}\n#date-picker .container .vc-select select,\n#date-picker .container [class*=vc-am] select {\n  height: 7rem;\n  width: 7rem;\n  font-size: 2.4rem;\n}";
}


// --------------------
// Request: /components/Part/ProductCardRating.vue
// Parents: 
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Part/ProductCardRating.vue?vue&type=style&index=0&lang.scss ($id_VckuNjk0ig)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_HS0LGC31jU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'ProductCardRating',
  props: {
  stars: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
},
  setup(__props, { expose }) {
  expose();

const props = __props



const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "product-card-rating" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($props.stars, (n) => {
    _push(`<i class="fa-solid fa-star"></i>`)
  })
  _push(`<!--]--> (${__vite_ssr_import_1__.ssrInterpolate($props.rating)} Reviews) </div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/ProductCardRating.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Part/ProductCardRating.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Part/ProductCardRating.vue"]]);
}


// --------------------
// Request: /components/Part/ProductCardRating.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// Dependencies: 

// --------------------
const $id_NqgBf13cYX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".product-card-rating {\n  display: flex;\n  grid-gap: 0.7rem;\n  align-items: center;\n  font-size: 1rem;\n}\n.product-card-rating i {\n  font-size: 1rem;\n  color: #FDCB45;\n}";
}


// --------------------
// Request: jquery
// Parents: 
// - /pages/product/[id].vue?macro=true ($id_W0Ob3lvQMv)
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// Dependencies: 

// --------------------
const $id_GmZIpT1now = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("jquery")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"jquery\".")
  })


// --------------------
// Request: /pages/about.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_guGYITBqkd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}></main>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/about.vue"]]);
}


// --------------------
// Request: /pages/category.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Part/ProductFilter.vue ($id_EOyk5veGuR)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - vue ($id_VkOCJnUZrn)
// - /assets/data/products.json ($id_uC0ly54lTX)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/category.vue?vue&type=style&index=0&lang.scss ($id_khy754D8Ah)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Zn7uqYyZYX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Part/ProductFilter.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Part/breadcrumb.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/productContainer.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Part/productCart.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/data/products.json");


const _sfc_main = {
  __name: 'category',
  setup(__props, { expose }) {
  expose();

const filterClose = __vite_ssr_import_4__.ref(false);
// const products = ref([]);

function onFilterClick(value) {
  filterClose.value = value;
}
// const data = await useFetch("http://3.111.70.214:1337/products");
// const products = data.data._rawValue;
// onMounted(() => {
//   fetch("http://3.111.70.214:1337/products")
//     .then((res) => res.json())
//     .then((data) => (products.value = data))
//     .catch((err) => console.log(err.message));
// });

const __returned__ = { filterClose, onFilterClick, products: __vite_ssr_import_5__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PartProductFilter = __vite_ssr_import_0__.default
  const _component_PartBreadcrumb = __vite_ssr_import_1__.default
  const _component_PartProductContainer = __vite_ssr_import_2__.default
  const _component_PartProductCart = __vite_ssr_import_3__.default

  _push(`<main${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}><div class="container-fluid"><!-- Product Filters -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductFilter, {
    close: $setup.filterClose,
    onClose: $setup.onFilterClick
  }, null, _parent))
  _push(`<!-- Page Breadcrumb -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ['Home', 'Category'] }, null, _parent))
  _push(`<!-- Page Sorting Filter --><div class="filter-section"><div class="filter-section-left"><label><i class="fa-solid fa-filter"></i> Filter </label><div class="form-group"><select name id class="form-select"><option value>Default Sorting</option></select></div></div><div class="filter-section-right">showing 1 - 16 of 19 results</div></div><!-- Product Container -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductCart, {
            key: product.title,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_PartProductCart, {
              key: product.title,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="${__vite_ssr_import_7__.ssrRenderClass([[$setup.products?.count ? '' : 'd-none'], "pagination-section"])}"><div class="pagination-section-box">1</div><div class="pagination-section-box">2</div><div class="pagination-section-box"><i class="fa-solid fa-angle-right"></i></div></div><!-- Relatedable Products --><div class="relatable-product"><h2>Top Rated Products</h2>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PartProductCart, {
            key: product.title,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_PartProductCart, {
              key: product.title,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></main>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/category.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/category.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/category.vue"]]);
}


// --------------------
// Request: /pages/category.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /pages/category.vue ($id_PpKinrdwfg)
// Dependencies: 

// --------------------
const $id_WRzuRqioa6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".filter-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.filter-section-left {\n  display: flex;\n  align-items: center;\n  grid-gap: 2rem;\n  width: 40%;\n}\n.filter-section-left label {\n  cursor: pointer;\n}\n.filter-section-left .form-select {\n  font-size: 1.6rem;\n  border-color: transparent;\n  width: 20rem;\n}\n.pagination-section {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 3rem;\n  grid-gap: 1rem;\n}\n.pagination-section-box {\n  height: 4rem;\n  width: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0.1rem solid #9f9f9f;\n  border-radius: 0.4rem;\n}\n.pagination-section-box:nth-child(1) {\n  background-color: #9f9f9f;\n  color: #fff;\n}\n.relatable-product {\n  padding-top: 10rem;\n  margin-top: 10rem;\n  border-top: 0.2rem dashed rgba(249, 14, 76, 0.4);\n}";
}


// --------------------
// Request: /pages/contact.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/contact.vue?vue&type=style&index=0&lang.scss ($id_HdQU2wJJ8u)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_atlR534EO1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'contact',
  setup(__props, { expose }) {
  expose();

const contactUsList = [
  {
    title: "Address",
    icon: "fa-solid fa-location-dot",
    content: ["70 Washington Square South New York, NY 10012, United States"],
  },
  {
    title: "Call Us",
    icon: "fa-solid fa-phone",
    content: ["(877) 834-1434", "(877) 834-1255"],
  },
  {
    title: "Openning",
    icon: "fa-solid fa-clock",
    content: ["Monday – Friday: 8am – 4pm", "Saturday – Sunday: 9am – 5pm"],
  },
  {
    title: "Contact",
    icon: "fa-solid fa-envelope",
    content: ["ziggy@example.com", "info@example.com"],
  },
];

const __returned__ = { contactUsList }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "contact-us" }, _attrs))}><div class="contact-us-header"><div class="container-fluid"><div class="contact-us-top"><h2>Don’t hesitate to contact us if you need help.</h2><p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium olorem que laud antium id est laborum.</p></div><div class="contact-us-list"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($setup.contactUsList, (contact, index) => {
    _push(`<div class="contact-us-list-box"><div class="contact-us-list-box-title"><i class="${
      __vite_ssr_import_1__.ssrRenderClass(contact.icon)
    }"></i> ${
      __vite_ssr_import_1__.ssrInterpolate(contact.title)
    }</div><!--[-->`)
    __vite_ssr_import_1__.ssrRenderList(contact.content, (detail) => {
      _push(`<p>${__vite_ssr_import_1__.ssrInterpolate(detail)}</p>`)
    })
    _push(`<!--]--></div>`)
  })
  _push(`<!--]--></div></div></div><div class="contact-us-body"><div class="container-fluid shadow"><div class="contact-us-body-form"><h3>Got Any Questions?</h3><p>Use the form below to get in touch with the sales team</p><form action class="form"><div class="form-group"><input type="text" placeholder="Name *" class="form-control"></div><div class="form-group"><input type="email" placeholder="Contact *" class="form-control"></div><div class="form-group"><textarea name id cols="30" rows="10" class="form-control" placeholder="Message"></textarea></div><div class="form-submit"><div class="btn btn-primary"> Send Your Message <i class="fa-solid fa-angle-right"></i></div></div></form></div><div class="contact-us-body-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1043551816033!2d77.05506670806535!3d28.443124204065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861de9d7bb9%3A0xe403eb9336f57e45!2sUNITECH%20CYBER%20PARK%2C%20Durga%20Colony%2C%20Sector%2039%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1661364046794!5m2!1sen!2sin" style="${__vite_ssr_import_1__.ssrRenderStyle({"border":"0"})}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></main>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/contact.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/contact.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/contact.vue"]]);
}


// --------------------
// Request: /pages/contact.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /pages/contact.vue ($id_c1pJl5yWum)
// Dependencies: 

// --------------------
const $id_IC5yL4HEdd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".contact-us-header {\n  padding: 5rem 0rem;\n  background-color: #f6f2f2;\n}\n.contact-us-top {\n  display: grid;\n  grid-template-columns: 33% calc(67% - 4rem);\n  grid-gap: 4rem;\n  padding: 3rem 0rem;\n}\n.contact-us-top h2 {\n  font-weight: bolder;\n  text-align: left !important;\n}\n.contact-us-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem;\n  margin: 3rem 0rem;\n}\n.contact-us-list-box {\n  font-size: 0.7rem;\n  padding: 1rem;\n  border-radius: 0.5rem;\n}\n.contact-us-list-box-title {\n  display: flex;\n  align-items: center;\n  font-size: 2rem;\n  grid-gap: 1rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.contact-us-list-box-title i {\n  height: 3rem;\n  width: 3rem;\n  background-color: #FA782D;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.contact-us-list-box p {\n  color: #9f9f9f;\n}\n.contact-us-list-box:hover {\n  background-color: #FA782D;\n  color: #fff;\n}\n.contact-us-list-box:hover .contact-us-list-box-title i {\n  background-color: #fff;\n  color: #FA782D;\n}\n.contact-us-list-box:hover p {\n  color: #fff;\n}\n.contact-us-body {\n  position: relative;\n}\n.contact-us-body .container-fluid {\n  position: relative;\n  top: -5rem;\n  background-color: #fff;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 3rem;\n  width: 90%;\n  margin: 0 auto;\n  padding: 4rem;\n  border-radius: 0.7rem;\n}\n.contact-us-body-form h3 {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.contact-us-body-form p {\n  color: #9f9f9f;\n  margin-bottom: 3rem;\n}\n.contact-us-body .form-group {\n  margin-bottom: 1rem;\n}\n.contact-us-body .form-control {\n  font-size: 1.6rem;\n  border-radius: 0rem;\n  padding: 1rem;\n}\n.contact-us-body .form-submit .btn {\n  position: relative;\n  font-size: 1.6rem;\n  background-color: #6839CC;\n  border-color: #6839CC;\n  padding: 1rem 3rem;\n  position: relative;\n  border-radius: 3rem;\n  overflow: hidden;\n}\n.contact-us-body .form-submit .btn i {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%) translateX(150%);\n  right: 0.5rem;\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 100%;\n  color: #6839CC;\n}\n.contact-us-body .form-submit:hover i {\n  transform: translateY(-50%) translateX(0%);\n}\n.contact-us-body-map {\n  width: 100%;\n}\n.contact-us-body-map iframe {\n  width: 100%;\n  height: 100%;\n}";
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Home/Hero.vue ($id_2j0LQNLTCb)
// - /components/Home/FindPackage.vue ($id_B9r5oI8ZFe)
// - /components/Home/Occation.vue ($id_CcWvL1TpRQ)
// - /components/Home/TodayDeal.vue ($id_r1zuRze2MS)
// - /components/Home/WeekDeal.vue ($id_KO9kINmRL9)
// - /components/Home/Trending.vue ($id_YQxEKyFlmQ)
// - /components/Home/Review.vue ($id_npbHbTijjc)
// - /components/Home/Subscribe.vue ($id_JDXbIuzgrM)
// - /components/Home/FeaturedIn.vue ($id_woZjuPbobK)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_E8mr5XEDu6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Home/Hero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Home/FindPackage.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Home/Occation.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Home/TodayDeal.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Home/WeekDeal.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Home/Trending.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Home/Review.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/Home/Subscribe.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/Home/FeaturedIn.vue");


const _sfc_main = {};

const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_10__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeHero = __vite_ssr_import_0__.default
  const _component_HomeFindPackage = __vite_ssr_import_1__.default
  const _component_HomeOccation = __vite_ssr_import_2__.default
  const _component_HomeTodayDeal = __vite_ssr_import_3__.default
  const _component_HomeWeekDeal = __vite_ssr_import_4__.default
  const _component_HomeTrending = __vite_ssr_import_5__.default
  const _component_HomeReview = __vite_ssr_import_6__.default
  const _component_HomeSubscribe = __vite_ssr_import_7__.default
  const _component_HomeFeaturedIn = __vite_ssr_import_8__.default

  _push(`<main${__vite_ssr_import_10__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeHero, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeFindPackage, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeOccation, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeTodayDeal, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeWeekDeal, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeTrending, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeReview, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeSubscribe, null, null, _parent))
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_HomeFeaturedIn, null, null, _parent))
  _push(`</main>`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/index.vue"]]);
}


// --------------------
// Request: /pages/product/[id].vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs ($id_SsQ8X6I65k)
// Dependencies: 
// - /components/Part/DatePicker.vue ($id_b8kfWnQJjw)
// - /components/Part/breadcrumb.vue ($id_xGE3kXtSOI)
// - /components/Part/ProductCardRating.vue ($id_f5yJsjwO5m)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/Part/productContainer.vue ($id_UoHUBlwBmg)
// - /components/Part/productCart.vue ($id_rgUGlfIRbQ)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /assets/data/products.json ($id_uC0ly54lTX)
// - jquery ($id_EnyM9Z8ii7)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/product/[id].vue?vue&type=style&index=0&lang.scss ($id_sXTEEPF5bh)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_7r9t6oWvFj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Part/DatePicker.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Part/breadcrumb.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Part/ProductCardRating.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Part/productContainer.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Part/productCart.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/data/products.json");

const __vite_ssr_import_9__ = await __vite_ssr_import__("jquery");



const _sfc_main = {
  __name: '[id]',
  setup(__props, { expose }) {
  expose();

const selectedTab = __vite_ssr_import_6__.ref("description");
// const products = ref([]);
const route = __vite_ssr_import_7__.useRoute();
const selectedProduct = __vite_ssr_import_8__.default.filter(function (product) {
  return product.slug === route.params.id;
});

const bookShow = __vite_ssr_import_6__.ref(false);

function bookNow() {
  bookShow.value = !bookShow.value;
}

function onTabClicked(index) {
  selectedTab.value = index;
}

__vite_ssr_import_6__.onMounted(() => {
  // fetch("http://3.111.70.214:1337/products")
  //   .then((res) => res.json())
  //   .then((data) => (products.value = data))
  //   .catch((err) => console.log(err.message));

  // fetch(`http://3.111.70.214:1337/products?slug=${route.params.id}`)
  //   .then((res) => res.json())
  //   .then((data) => (selectedProduct.value = data))
  //   .catch((err) => console.log(err.message));

  __vite_ssr_import_9__.default(".product-page-image").mouseenter(function () {
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({ transform: "scale(1.3)" });
  });
  __vite_ssr_import_9__.default(".product-page-image").mouseleave(function () {
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({
      transform: "scale(1)",
      left: "0px",
      top: "0px",
    });
  });
  __vite_ssr_import_9__.default(".product-page-image").mousemove(function (e) {
    let valueX = (e.pageX * -1) / 8;
    let valueY = (e.pageY * -1) / 8;
    __vite_ssr_import_9__.default(".product-page-image .img-fluid").css({
      left: valueX + "px",
      top: valueY + "px",
    });
  });
});

const __returned__ = { selectedTab, route, selectedProduct, bookShow, bookNow, onTabClicked, products: __vite_ssr_import_8__.default, $: __vite_ssr_import_9__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PartDatePicker = __vite_ssr_import_0__.default
  const _component_PartBreadcrumb = __vite_ssr_import_1__.default
  const _component_PartProductCardRating = __vite_ssr_import_2__.default
  const _component_nuxt_link = __vite_ssr_import_3__.default
  const _component_PartProductContainer = __vite_ssr_import_4__.default
  const _component_PartProductCart = __vite_ssr_import_5__.default

  _push(`<main${__vite_ssr_import_11__.ssrRenderAttrs(__vite_ssr_import_10__.mergeProps({ class: "product-page" }, _attrs))}>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartDatePicker, { show: $setup.bookShow }, null, _parent))
  _push(`<div class="container-fluid">`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartBreadcrumb, { breadcrumbs: ['Home', 'Category', 'Product'] }, null, _parent))
  if ($setup.selectedProduct) {
    _push(`<div class="product-page-body"><div class="product-page-image"><img${
      __vite_ssr_import_11__.ssrRenderAttr("src", `http://3.111.70.214:1337${$setup.selectedProduct[0].image.url}`)
    } alt class="img-fluid"></div><div class="product-page-content"><label for>25%</label><h2 class="product-page-content-title">${
      __vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].title)
    }</h2><h4 class="product-page-content-price"><i class="fa-solid fa-indian-rupee-sign"></i> 2,500 <del><i class="fa-solid fa-indian-rupee-sign"></i> ${
      __vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].price)
    }</del></h4>`)
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductCardRating, {
      stars: 5,
      rating: 2
    }, null, _parent))
    _push(`<p>${__vite_ssr_import_11__.ssrInterpolate($setup.selectedProduct[0].content)}</p><div class="product-page-content-buttons"><button class="btn btn-book"><i class="fa-solid fa-cart-shopping"></i> Book Now </button><button class="btn btn-heart"><i class="fa-solid fa-heart"></i></button></div><div class="product-page-content-icons"> Share : `)
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-facebook"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-facebook" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-linkedin"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-linkedin" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-twitter"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-twitter" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<i class="fa-brands fa-instagram"${_scopeId}></i>`)
        } else {
          return [
            __vite_ssr_import_10__.createVNode("i", { class: "fa-brands fa-instagram" })
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(`</div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
  if ($setup.selectedProduct) {
    _push(`<div class="product-page-description"><div class="container-fluid"><div class="product-page-description-tabs"><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'description' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Descirption </div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'information' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Additional Information </div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'review' ? 'active' : ''], "product-page-description-tabs-btn"])
    }"> Reviews(5) </div></div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'description' ? 'active' : ''], "product-page-description-content"])
    }">${
      $setup.selectedProduct[0].Description
    }</div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'information' ? 'active' : ''], "product-page-description-content"])
    }">${
      $setup.selectedProduct[0].information
    }</div><div class="${
      __vite_ssr_import_11__.ssrRenderClass([[$setup.selectedTab == 'review' ? 'active' : ''], "product-page-description-content"])
    }"><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt necessitatibus soluta tempora eum delectus at incidunt odit maxime, explicabo ad eligendi fugiat asperiores quia adipisci architecto nisi, eveniet repellat temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minima deleniti. Sed ad quam, voluptates, temporibus quas dolores, quod accusamus mollitia ea itaque iure? Sint at quae excepturi cumque reprehenderit! </p></div></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="product-page-related-products"><div class="container-fluid"><h2>Related Products</h2>`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductContainer, null, {
    default: __vite_ssr_import_10__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<!--[-->`)
        __vite_ssr_import_11__.ssrRenderList($setup.products, (product) => {
          _push(__vite_ssr_import_11__.ssrRenderComponent(_component_PartProductCart, {
            key: `product-${product?.id}`,
            product: product
          }, null, _parent, _scopeId))
        })
        _push(`<!--]-->`)
      } else {
        return [
          (__vite_ssr_import_10__.openBlock(true), __vite_ssr_import_10__.createBlock(__vite_ssr_import_10__.Fragment, null, __vite_ssr_import_10__.renderList($setup.products, (product) => {
            return (__vite_ssr_import_10__.openBlock(), __vite_ssr_import_10__.createBlock(_component_PartProductCart, {
              key: `product-${product?.id}`,
              product: product
            }, null, 8 /* PROPS */, ["product"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></main>`)
}

const __vite_ssr_import_12__ = await __vite_ssr_import__("/pages/product/[id].vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_13__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_13__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/product/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_14__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_14__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/pages/product/[id].vue"]]);
}


// --------------------
// Request: /pages/product/[id].vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /pages/product/[id].vue ($id_57n4VMwSz9)
// Dependencies: 

// --------------------
const $id_piG1GGTx0v = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".product-page {\n  padding: 2rem 0rem;\n}\n.product-page-body {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n}\n.product-page-image {\n  border: 0.1rem dashed rgba(159, 159, 159, 0.6);\n  border-radius: 0.4rem;\n  overflow: hidden;\n}\n.product-page-image img {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.product-page-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.product-page-content label {\n  background-color: #F90E4C;\n  color: #fff;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  border-radius: 0.4rem;\n  width: 5rem;\n}\n.product-page-content-title {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  padding: 2rem 0rem;\n}\n.product-page-content-price {\n  font-size: 3rem;\n  font-weight: bold;\n}\n.product-page-content-price i {\n  font-size: 2.5rem;\n}\n.product-page-content-price del {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-size: 2rem;\n  font-weight: normal;\n}\n.product-page-content-price del i {\n  font-size: 1.6rem;\n}\n.product-page-content p {\n  font-size: 1.8rem;\n  padding: 2rem 0rem;\n  color: #9f9f9f;\n}\n.product-page-content-buttons {\n  display: flex;\n  align-items: center;\n  grid-gap: 2rem;\n}\n.product-page-content-buttons .btn {\n  font-size: 2rem;\n}\n.product-page-content-buttons .btn-book {\n  background-color: #6839CC;\n  color: #fff;\n  font-weight: bold;\n  padding: 1rem 3rem;\n  border-radius: 3rem;\n  margin-right: 3rem;\n}\n.product-page-content-buttons .btn-heart i {\n  font-size: 3rem;\n  color: #9f9f9f;\n}\n.product-page-content-icons {\n  display: flex;\n  justify-content: flex-end;\n  grid-gap: 1rem;\n}\n.product-page-content-icons i {\n  font-size: 2rem;\n  color: #6839CC;\n}\n.product-page-description {\n  background-color: #F2EAEA;\n  padding: 5rem 0rem;\n  margin-top: 4rem;\n  overflow: hidden;\n}\n.product-page-description-tabs {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  justify-content: center;\n}\n.product-page-description-tabs-btn {\n  padding: 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  font-weight: bold;\n}\n.product-page-description-tabs-btn:hover {\n  background-color: #FA782D;\n  color: #fff;\n}\n.product-page-description-tabs-btn.active {\n  background-color: #FA782D;\n  color: #fff;\n}\n.product-page-description-content {\n  background-color: #fff;\n  margin-top: 3rem;\n  padding: 2rem;\n  position: relative;\n  display: none;\n  transform: translateY(100%);\n}\n.product-page-description-content.active {\n  display: block;\n  transition: all 0.5s linear;\n  transform: translateY(0%);\n}\n.product-page-related-products {\n  padding-top: 5rem;\n}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_9NNhI2s0kb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_BTeyAlrFvl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs ($id_DXukxskRJb)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - pinia ($id_08NwGtDtAK)
// --------------------
const $id_wcjqAwSegi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("pinia");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  const pinia = __vite_ssr_import_1__.createPinia();
  nuxtApp.vueApp.use(pinia);
  __vite_ssr_import_1__.setActivePinia(pinia);
  if (true) {
    nuxtApp.payload.pinia = pinia.state.value;
  } else if (nuxtApp.payload && nuxtApp.payload.pinia) {
    pinia.state.value = nuxtApp.payload.pinia;
  }
  return {
    provide: {
      pinia
    }
  };
});
;
}


// --------------------
// Request: pinia
// Parents: 
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// Dependencies: 

// --------------------
const $id_jzLU7WEUI3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("pinia")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"pinia\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/root-component.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_vLo6VYYNp7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/root-component.mjs ($id_UhOc0Ip3mu)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/error-component.mjs ($id_lEjTtbpUwB)
// --------------------
const $id_NYDpfMpt6a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/error-component.mjs"))

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_1__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_1__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, provide: __vite_ssr_import_0__.provide, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, isNuxtError: __vite_ssr_import_1__.isNuxtError, showError: __vite_ssr_import_1__.showError, useError: __vite_ssr_import_1__.useError, useRoute: __vite_ssr_import_1__.useRoute, useNuxtApp: __vite_ssr_import_1__.useNuxtApp }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_2__.resolveComponent("App")

  __vite_ssr_import_3__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_zxcxx1SL1o = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/error-component.mjs ($id_lEjTtbpUwB)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_8pzzXfk4KX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"))
const _Error = true
  ? __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"))
  : __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vGcOn6TOWW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_iyWce2ID66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vRSWtmwocO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/app-component.mjs
// Parents: 
// - /Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry ($id_15qD1POdgk)
// Dependencies: 
// - /app.vue ($id_K0boQqLzfo)
// --------------------
const $id_Q1KAydPfuX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/app-component.mjs ($id_vYx22mgvHo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ZRFey8EC2z = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'app',
  setup(__props, { expose }) {
  expose();

__vite_ssr_import_1__.useHead({
  script: [
    {
      src: "https://kit.fontawesome.com/bd1e2f92cb.js",
    },
  ],
});

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_2__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs ($id_1cpGWK3U9d)
// --------------------
const $id_aZjRm00auH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(
        __vite_ssr_import_0__.Transition,
        hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition),
        __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /layouts/default.vue ($id_dononVQSck)
// --------------------
const $id_WSLFNcueRI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/layouts/default.vue"))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs ($id_1cpGWK3U9d)
// Dependencies: 
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_xahehznNlo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Inc/Navbar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Inc/Footer.vue");


const _sfc_main = {};

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IncNavbar = __vite_ssr_import_0__.default
  const _component_IncFooter = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_IncNavbar, null, null, _parent))
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_IncFooter, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/layouts/default.vue"]]);
}


// --------------------
// Request: /components/Inc/Navbar.vue
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 
// - /components/Inc/UprNavbar.vue ($id_NxVdIJY0ws)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - /assets/data/web-profile.json ($id_aD81X26IZ6)
// - jquery ($id_EnyM9Z8ii7)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_WJImfss3oU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Inc/UprNavbar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/data/web-profile.json");

const __vite_ssr_import_4__ = await __vite_ssr_import__("jquery");


// const data = await useFetch("http://3.111.70.214:1337/web-profile");
// const profile = data.data._rawValue;

const _sfc_main = {
  __name: 'Navbar',
  setup(__props, { expose }) {
  expose();

const profile = __vite_ssr_import_3__.default;
const Logo = `http://3.111.70.214:1337${profile.Logo.url}`;

const menu = [
  { name: "Home", link: "/" },
  { name: "Category", link: "/category" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];

__vite_ssr_import_2__.onMounted(() => {
  __vite_ssr_import_4__.default(document).ready(() => {
    window.onscroll = function (event) {
      var scroll = window.pageYOffset;
      if (scroll > 100) {
        __vite_ssr_import_4__.default(".navbar").css({
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          "z-index": 5,
        });
      } else {
        __vite_ssr_import_4__.default(".navbar").css({
          position: "relative",
          width: "100%",
          top: "0",
          left: "0",
        });
      }
    };
  });
});

const __returned__ = { profile, Logo, menu, data: __vite_ssr_import_3__.default, $: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IncUprNavbar = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_IncUprNavbar, null, null, _parent))
  _push(`<nav class="navbar"><div class="container-fluid"><!-- Navbar Logo --><div class="navbar-logo"><img lazy="loading"${__vite_ssr_import_6__.ssrRenderAttr("src", $setup.Logo)} alt class="img-fluid"></div><!-- Navbar Menu --><div class="navbar-menu"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.menu, (link, index) => {
    _push(`<div class="navbar-menu-box">`)
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_nuxt_link, {
      to: link.link
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_6__.ssrInterpolate(link.name)}`)
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(link.name), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div>`)
  })
  _push(`<!--]--></div><!-- Navbar Search --><div class="navbar-search"><input type="text" placeholder="Search..." class="form-control"><i class="fa-solid fa-magnifying-glass"></i></div><!-- Navbar Buttons --><div class="navbar-buttons"><div class="navbar-buttons-box"><i class="fa-solid fa-user"></i></div><div class="navbar-buttons-box"><i class="fa-solid fa-heart"></i></div><div class="navbar-buttons-box"><i class="fa-solid fa-cart-shopping"></i></div></div></div></nav></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Inc/Navbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Inc/Navbar.vue"]]);
}


// --------------------
// Request: /components/Inc/UprNavbar.vue
// Parents: 
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_f7LiRDuBLe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "upr-navbar" }, _attrs))}><div class="container-fluid"><div class="upr-navbar-left"><div class="upr-navbar-left-box"><i class="fa-solid fa-location-dot"></i> Location </div><div class="upr-navbar-left-box"><i class="fa-solid fa-truck-fast"></i> Order Tracking </div></div><div class="upr-navbar-center"><span class="badge">15% OFF</span><i class="fa-solid fa-indian-rupee-sign"></i> 1000+ when you buy online &amp; pick up in-store </div><div class="upr-navbar-right"><div class="upr-navbar-right-box"><select name id class="form-select"><option value>EURO</option></select></div><div class="upr-navbar-right-box"><select name id class="form-select"><option value>English</option></select></div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Inc/UprNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Inc/UprNavbar.vue"]]);
}


// --------------------
// Request: /assets/data/web-profile.json
// Parents: 
// - /components/Inc/Navbar.vue ($id_HtVBR2Q4ny)
// Dependencies: 

// --------------------
const $id_fr4inQH8yI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const id = 1;
Object.defineProperty(__vite_ssr_exports__, "id", { enumerable: true, configurable: true, get(){ return id }});
const Title = "Event Application";
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const published_at = "2022-08-31T04:14:28.582Z";
Object.defineProperty(__vite_ssr_exports__, "published_at", { enumerable: true, configurable: true, get(){ return published_at }});
const created_at = "2022-08-31T04:14:26.057Z";
Object.defineProperty(__vite_ssr_exports__, "created_at", { enumerable: true, configurable: true, get(){ return created_at }});
const updated_at = "2022-08-31T04:14:28.601Z";
Object.defineProperty(__vite_ssr_exports__, "updated_at", { enumerable: true, configurable: true, get(){ return updated_at }});
const Logo = {
	id: 2,
	name: "ZDF_logo!_Logo_2021.svg.png",
	alternativeText: "",
	caption: "",
	width: 640,
	height: 273,
	formats: {
		thumbnail: {
			name: "thumbnail_ZDF_logo!_Logo_2021.svg.png",
			hash: "thumbnail_ZDF_logo_Logo_2021_svg_d920ea9d19",
			ext: ".png",
			mime: "image/png",
			width: 245,
			height: 105,
			size: 10.75,
			path: null,
			url: "/uploads/thumbnail_ZDF_logo_Logo_2021_svg_d920ea9d19.png"
		},
		small: {
			name: "small_ZDF_logo!_Logo_2021.svg.png",
			hash: "small_ZDF_logo_Logo_2021_svg_d920ea9d19",
			ext: ".png",
			mime: "image/png",
			width: 500,
			height: 213,
			size: 26.52,
			path: null,
			url: "/uploads/small_ZDF_logo_Logo_2021_svg_d920ea9d19.png"
		}
	},
	hash: "ZDF_logo_Logo_2021_svg_d920ea9d19",
	ext: ".png",
	mime: "image/png",
	size: 16.69,
	url: "/uploads/ZDF_logo_Logo_2021_svg_d920ea9d19.png",
	previewUrl: null,
	provider: "local",
	provider_metadata: null,
	created_at: "2022-08-31T04:14:21.926Z",
	updated_at: "2022-08-31T04:14:21.938Z"
};
Object.defineProperty(__vite_ssr_exports__, "Logo", { enumerable: true, configurable: true, get(){ return Logo }});
__vite_ssr_exports__.default = {
	id: id,
	Title: Title,
	published_at: published_at,
	created_at: created_at,
	updated_at: updated_at,
	Logo: Logo
};
;
}


// --------------------
// Request: /components/Inc/Footer.vue
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Inc/Footer.vue?vue&type=style&index=0&lang.scss ($id_U82vIKwVVc)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vSC0bsI3Z3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const _sfc_main = {};

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<footer${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "footer" }, _attrs))}><div class="container-fluid"><div class="footer-left"><h4>STAY UP TO DATE ON OUR LATEST TIPS</h4><p> Subscrible &amp; get <span>10%</span> discount. Get E-mail updates about our latest shop and `)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`special offers.`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("special offers.")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</p><form action="#" class="form"><div class="form-group"><input type="email" placeholder="Enter your email..." class="form-control"><i class="fa-solid fa-envelope-circle-check"></i></div></form></div><div class="footer-right"><div class="footer-useful"><h5>USEFUL LINKS</h5><div class="footer-uselful-links">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`New Products`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("New Products")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Best Sellers`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Best Sellers")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Bundle &amp; Save`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Bundle & Save")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Online Gift Card`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Online Gift Card")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Discount`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Discount")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Pet Store Locator`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Pet Store Locator")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><div class="footer-account"><h5>MY ACCOUNT</h5><div class="footer-account-links">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`My Profile`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("My Profile")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`My Order History`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("My Order History")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`My Wish List`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("My Wish List")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Order Tracking`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Order Tracking")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Shipping Info`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Shipping Info")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Shopping Cart`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Shopping Cart")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><div class="footer-company"><h5>Company</h5><div class="footer-company-links">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`About Us`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("About Us")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Careers`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Careers")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Blog`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Blog")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Affiliate`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Affiliate")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Contact Us`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Contact Us")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Gift Cards`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Gift Cards")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></div></footer>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Inc/Footer.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Inc/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/components/Inc/Footer.vue"]]);
}


// --------------------
// Request: /components/Inc/Footer.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Inc/Footer.vue ($id_KvO1VGVQFo)
// Dependencies: 

// --------------------
const $id_E1S9o9kF9S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".footer {\n  background-color: #100428;\n  color: #fff;\n  padding: 5rem 0rem;\n  margin-top: 4rem;\n}\n.footer p {\n  margin: 0;\n  color: #666;\n}\n.footer p span {\n  color: #FA782D;\n}\n.footer p a {\n  color: #FA782D;\n}\n.footer .container-fluid {\n  display: grid;\n  grid-template-columns: 40% 1fr;\n  grid-gap: 4rem;\n}\n.footer-left .form {\n  margin-top: 3rem;\n}\n.footer-left .form-control {\n  height: 4rem;\n  border-radius: 4rem;\n  font-size: 1.4rem;\n  padding-left: 2rem;\n  border-color: #6839CC;\n}\n.footer-left .form-group {\n  position: relative;\n}\n.footer-left .form-group i {\n  height: 4rem;\n  width: 4rem;\n  background-color: #6839CC;\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  right: 0rem;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n}\n.footer-right {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.footer-right h5 {\n  padding-bottom: 2rem;\n  font-size: 1.6rem;\n}\n.footer-right a {\n  display: block;\n  color: #666;\n  padding: 1rem 0rem;\n}\n.footer-right a:hover {\n  color: #FA782D;\n}";
}


const __modules__ = {
  "/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry": $id_eaKVhKnHkW,
  vue: $id_G33erDMZ5a,
  "@vue/runtime-dom": $id_9sriful2d8,
  ohmyfetch: $id_kLE5W6MKaY,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/paths.mjs": $id_PSJT49I6pl,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/index.mjs": $id_fgrt3UeQEL,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_lfCjBrgcte,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_YvAaozTraC,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_XTtQ30wmO3,
  "vue-router": $id_7dT9jx0uwT,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_BHNdDlA1Pk,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_6bgT8vIFHQ,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_oMJXouc9nw,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_kP3GBeDzaR,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_0OCs51rfoK,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_zYOrYjkwm9,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_XUZhFBVStH,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_BjnOCDcfIZ,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_72OrpZA28S,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_HRAmKRepZ0,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_aAoWaPsGgE,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_DBzckdbLOm,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_TG3cDPMBp5,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/css.mjs": $id_GQxPI5e2AK,
  "/assets/scss/main.scss": $id_tuXFGNS8CT,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/plugins/server.mjs": $id_0iup2zVHsf,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_1SAEi7QN5N,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/components.plugin.mjs": $id_ERlXuI58HG,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_wRsEVKfW1P,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_19kbcSkZ7c,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_72hUrj443r,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_PE2LM6mDyc,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/meta.config.mjs": $id_8KlkmjT0xk,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_MTJBSoyeFQ,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_L9I1eoE7dW,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_ZR0LUqwyer,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_NgApSiB2xA,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/routes.mjs": $id_9f7Q7dUrSO,
  "/pages/about.vue?macro=true": $id_h4HZY2CriC,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/pages/category.vue?macro=true": $id_LfSdnO1G5A,
  "/components/Part/ProductFilter.vue": $id_rBYCXqctR2,
  "/assets/data/categories.json": $id_6bkbomDiit,
  "/assets/data/occasions.json": $id_0LnRpa30qO,
  "/assets/data/relations.json": $id_TNeBIqk9SR,
  "/components/Part/ProductFilter.vue?vue&type=style&index=0&lang.scss": $id_sVn0okCZxK,
  "/components/Part/breadcrumb.vue": $id_oXjHSg1EBD,
  "/components/Part/breadcrumb.vue?vue&type=style&index=0&lang.scss": $id_7PV4cL7rnE,
  "/components/Part/productContainer.vue": $id_lB652KrVZ3,
  "/components/Part/productContainer.vue?vue&type=style&index=0&lang.scss": $id_GchMnF56GS,
  "/components/Part/productCart.vue": $id_j9mv2klzwT,
  "/components/Part/productCart.vue?vue&type=style&index=0&lang.scss": $id_InwuI1HY8L,
  "/assets/data/products.json": $id_cLRLR6QVBa,
  "/pages/contact.vue?macro=true": $id_Pmy3VjLUXs,
  "/pages/index.vue?macro=true": $id_bhjnf7OaUK,
  "/components/Home/Hero.vue": $id_pjoviJXDa0,
  "/node_modules/vue3-carousel/dist/carousel.css": $id_iJ8GOc7FRT,
  "vue3-carousel": $id_TI5XH8l02y,
  "/assets/data/carousels.json": $id_9axm7jiQKV,
  "/components/Home/Hero.vue?vue&type=style&index=0&lang.scss": $id_yGzbWzH1Gv,
  "/components/Home/FindPackage.vue": $id_7kawc2jp0V,
  "/components/Home/FindPackage.vue?vue&type=style&index=0&lang.scss": $id_z3ggHEOAVo,
  "/components/Home/Occation.vue": $id_wtUhaxHbmI,
  "/components/Home/Occation.vue?vue&type=style&index=0&lang.scss": $id_OYBpO53h7f,
  "/components/Home/TodayDeal.vue": $id_UwuqxHFtV5,
  "/components/Home/TodayDeal.vue?vue&type=style&index=0&lang.scss": $id_yuj7yaSMKE,
  "/components/Home/WeekDeal.vue": $id_gDXjQCsUaF,
  "/components/Home/WeekDeal.vue?vue&type=style&index=0&lang.scss": $id_L9NOq2luyG,
  "/components/Home/Trending.vue": $id_JBFx2g2Iij,
  "/components/Home/Trending.vue?vue&type=style&index=0&lang.scss": $id_RpFkAgJbps,
  "/components/Home/Review.vue": $id_zxsIj6dRf7,
  "/assets/data/reviews.json": $id_LWaHBe28gy,
  "/components/Home/Review.vue?vue&type=style&index=0&lang.scss": $id_HUYCjjioqK,
  "/components/Home/Subscribe.vue": $id_60MGoouoDJ,
  "/components/Home/Subscribe.vue?vue&type=style&index=0&lang.scss": $id_kH1EcYy0Cb,
  "/components/Home/FeaturedIn.vue": $id_kyTDdoo3E5,
  "/assets/data/companies.json": $id_YFhSLgurmL,
  "/components/Home/FeaturedIn.vue?vue&type=style&index=0&lang.scss": $id_op5V7esZsR,
  "/pages/product/[id].vue?macro=true": $id_CqSBSJpg5H,
  "/components/Part/DatePicker.vue": $id_8gc0SwaHTU,
  "/node_modules/v-calendar/dist/style.css": $id_3x5tEFLj0f,
  "/components/Part/DatePicker.vue?vue&type=style&index=0&lang.scss": $id_IdptKEtVjz,
  "/components/Part/ProductCardRating.vue": $id_HS0LGC31jU,
  "/components/Part/ProductCardRating.vue?vue&type=style&index=0&lang.scss": $id_NqgBf13cYX,
  jquery: $id_GmZIpT1now,
  "/pages/about.vue": $id_guGYITBqkd,
  "/pages/category.vue": $id_Zn7uqYyZYX,
  "/pages/category.vue?vue&type=style&index=0&lang.scss": $id_WRzuRqioa6,
  "/pages/contact.vue": $id_atlR534EO1,
  "/pages/contact.vue?vue&type=style&index=0&lang.scss": $id_IC5yL4HEdd,
  "/pages/index.vue": $id_E8mr5XEDu6,
  "/pages/product/[id].vue": $id_7r9t6oWvFj,
  "/pages/product/[id].vue?vue&type=style&index=0&lang.scss": $id_piG1GGTx0v,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/router.options.mjs": $id_9NNhI2s0kb,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/middleware.mjs": $id_BTeyAlrFvl,
  "/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs": $id_wcjqAwSegi,
  pinia: $id_jzLU7WEUI3,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/root-component.mjs": $id_vLo6VYYNp7,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_NYDpfMpt6a,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/error-component.mjs": $id_zxcxx1SL1o,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8pzzXfk4KX,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_vGcOn6TOWW,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_iyWce2ID66,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_vRSWtmwocO,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/app-component.mjs": $id_Q1KAydPfuX,
  "/app.vue": $id_ZRFey8EC2z,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_aZjRm00auH,
  "/@id/virtual:nuxt:/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/.nuxt/layouts.mjs": $id_WSLFNcueRI,
  "/layouts/default.vue": $id_xahehznNlo,
  "/components/Inc/Navbar.vue": $id_WJImfss3oU,
  "/components/Inc/UprNavbar.vue": $id_f7LiRDuBLe,
  "/assets/data/web-profile.json": $id_fr4inQH8yI,
  "/components/Inc/Footer.vue": $id_vSC0bsI3Z3,
  "/components/Inc/Footer.vue?vue&type=style&index=0&lang.scss": $id_E1S9o9kF9S
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Applications/XAMPP/xamppfiles/htdocs/paean/ecommerce/frontend/node_modules/nuxt/dist/app/entry")