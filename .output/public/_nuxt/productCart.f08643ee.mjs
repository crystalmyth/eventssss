import{o as c,a as e,f as s,m as f,w as g,u as o,i as a,t as _,F as m,h as v,l as y}from"./entry.f6d7d49b.mjs";const b={class:"product-card shadow"},k=s("div",{class:"product-card-discount"},"25%",-1),x={class:"product-card-img"},w={class:"product-card-overlay"},B=s("div",{class:"product-card-overlay-buttons"},[s("i",{class:"fa-solid fa-magnifying-glass-plus"}),s("i",{class:"fa-solid fa-heart"})],-1),N={class:"product-card-overlay-book"},V=s("i",{class:"fa-solid fa-bag-shopping"},null,-1),$=a(" Book Now "),C=["src"],F={class:"product-card-content"},j=a(" 4,500 "),q=s("i",{class:"fa-solid fa-indian-rupee-sign"},null,-1),z=s("i",{class:"fa-solid fa-indian-rupee-sign"},null,-1),D={class:"product-card-content-title"},E={class:"product-card-content-rating"},L=a(" (5 Reviews) "),A={__name:"productCart",props:{product:{type:Object,required:!0}},setup(u){const t=u.product;return(R,S)=>{var d,i,n,r,l;const p=y;return c(),e("div",b,[k,s("div",x,[s("div",w,[B,s("div",N,[f(p,{to:`/product/${(d=o(t))==null?void 0:d.slug}`,class:"btn btn-primary"},{default:g(()=>[V,$]),_:1},8,["to"])])]),s("img",{lazy:"loading",src:`http://3.111.70.214:1337${(i=o(t))==null?void 0:i.image.url}`,alt:"",class:"img-fluid"},null,8,C)]),s("div",F,[s("h4",null,[j,q,s("del",null,[a(_((n=o(t))==null?void 0:n.price)+" ",1),z])]),s("p",D,_((r=o(t))==null?void 0:r.title),1),s("div",E,[(c(!0),e(m,null,v((l=o(t))==null?void 0:l.rating,h=>(c(),e("i",{key:`star-${h}`,class:"fa-solid fa-star"}))),128)),L])])])}}};export{A as _};