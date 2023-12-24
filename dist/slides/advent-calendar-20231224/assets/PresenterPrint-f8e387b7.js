import{h as _,j as d,k as p,ak as u,c as m,al as h,m as n,am as t,an as s,z as o,F as f,ao as g,ap as v,aq as x,q as r,ar as y,as as k,n as b,at as N,au as P,_ as j}from"./nav-c1540789.js";import{N as w}from"./NoteDisplay-cc6a5152.js";import{u as S}from"./index-c44a28d6.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),S({title:`Notes - ${m.title}`});const l=h(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(o(P))},[t("div",V,[t("div",L,[t("h1",T,s(o(m).title),1),t("div",z,s(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(o(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(o(y)),1),k(" "+s(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(l).length-1?(r(),n("hr",q)):N("v-if",!0)]))),128))])],4))}}),U=j(F,[["__file","/Users/hiroyuki.takamura/pj/personal/private-slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{U as default};
