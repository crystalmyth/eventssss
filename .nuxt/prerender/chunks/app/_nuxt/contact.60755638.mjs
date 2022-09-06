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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contactUsList = [
      {
        title: "Address",
        icon: "fa-solid fa-location-dot",
        content: ["70 Washington Square South New York, NY 10012, United States"]
      },
      {
        title: "Call Us",
        icon: "fa-solid fa-phone",
        content: ["(877) 834-1434", "(877) 834-1255"]
      },
      {
        title: "Openning",
        icon: "fa-solid fa-clock",
        content: ["Monday \u2013 Friday: 8am \u2013 4pm", "Saturday \u2013 Sunday: 9am \u2013 5pm"]
      },
      {
        title: "Contact",
        icon: "fa-solid fa-envelope",
        content: ["ziggy@example.com", "info@example.com"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "contact-us" }, _attrs))}><div class="contact-us-header"><div class="container-fluid"><div class="contact-us-top"><h2>Don\u2019t hesitate to contact us if you need help.</h2><p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium olorem que laud antium id est laborum.</p></div><div class="contact-us-list"><!--[-->`);
      serverRenderer.exports.ssrRenderList(contactUsList, (contact, index) => {
        _push(`<div class="contact-us-list-box"><div class="contact-us-list-box-title"><i class="${serverRenderer.exports.ssrRenderClass(contact.icon)}"></i> ${serverRenderer.exports.ssrInterpolate(contact.title)}</div><!--[-->`);
        serverRenderer.exports.ssrRenderList(contact.content, (detail) => {
          _push(`<p>${serverRenderer.exports.ssrInterpolate(detail)}</p>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div><div class="contact-us-body"><div class="container-fluid shadow"><div class="contact-us-body-form"><h3>Got Any Questions?</h3><p>Use the form below to get in touch with the sales team</p><form action class="form"><div class="form-group"><input type="text" placeholder="Name *" class="form-control"></div><div class="form-group"><input type="email" placeholder="Contact *" class="form-control"></div><div class="form-group"><textarea name id cols="30" rows="10" class="form-control" placeholder="Message"></textarea></div><div class="form-submit"><div class="btn btn-primary"> Send Your Message <i class="fa-solid fa-angle-right"></i></div></div></form></div><div class="contact-us-body-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1043551816033!2d77.05506670806535!3d28.443124204065096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861de9d7bb9%3A0xe403eb9336f57e45!2sUNITECH%20CYBER%20PARK%2C%20Durga%20Colony%2C%20Sector%2039%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1661364046794!5m2!1sen!2sin" style="${serverRenderer.exports.ssrRenderStyle({ "border": "0" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.60755638.mjs.map
