import{o as d,c as u,a as s,_ as x,u as C,b as I,d as S,e as y,r as k,f as V,w as j,g as n,h as o,I as B,i as r,L as E,F as P,j as z,k as D,l as M,t as h,m as N,n as v,p as q,s as F,q as T}from"./index-B-eKHfWI.js";import{T as $,I as f}from"./TheHeader-DoCYjV_S.js";import{I as H,a as O}from"./Edit-fcklCilC.js";import{I as R}from"./Export-E9ebvpID.js";const Z={class:"icon",width:"45",height:"45",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg"};function A(L,l){return d(),u("svg",Z,l[0]||(l[0]=[s("path",{d:"M15,30 L30,30 L30,29 L15,29 L15,30 Z M22.5,14.2928932 L27.3535534,19.1464466 L26.6464466,19.8535534 L23,16.2068932 L23,26.5 L22,26.5 L22,16.2068932 L18.3535534,19.8535534 L17.6464466,19.1464466 L22.5,14.2928932 Z",fill:"currentColor"},null,-1)]))}const U={name:"base-Import",render:A},W={class:"settings-view"},G={class:"button-group"},J={key:0,class:"missing"},K=["href"],Q={__name:"SettingsView",setup(L){const l=C();I();const p=S(),b=y(),c=k([]);async function w(e){await p.importProject(e.target.files[0]),l.mode==="public"&&(l.mode="edit"),e.target.value=null}const g=V(()=>p.nodes.map(e=>Object.entries(F[e.type]).filter(([t,m])=>m.type!=null).map(([t])=>t).map(t=>_(e,t)).map(t=>typeof t=="object"?Object.values(t):t).flat().map(t=>({url:t,node:e}))).filter(({length:e})=>e>0).flat(2));j(g,async()=>{c.value=[],Promise.allSettled(g.value.map(e=>new Promise((a,i)=>{fetch(v(e.url),{method:"HEAD"}).then(()=>i(e)).catch(()=>a(e))}))).then(e=>c.value=e.filter(a=>a.status==="fulfilled").map(a=>a.value))},{immediate:!0});function _(e,a){const i=a.split(/\.(.*)/s);return i.length>1?_(e[i[0]],i[1]):e==null?void 0:e[a]}return(e,a)=>{const i=T("RouterLink");return d(),u("div",W,[n($),s("main",null,[s("ul",null,[s("li",null,[a[1]||(a[1]=s("span",{class:"label"},"editing",-1)),n(B,{horizontal:"","equal-size":"",modelValue:o(l).enableEditing,"onUpdate:modelValue":a[0]||(a[0]=t=>o(l).enableEditing=t),options:[{value:!1,label:"off"},{value:!0,label:"on"}]},null,8,["modelValue"])]),s("li",G,[n(E,{class:"extend",horizontal:"","equal-size":""},{default:r(()=>[n(f,{onClick:o(p).exportProject,title:"export data"},{default:r(()=>[n(o(R))]),_:1},8,["onClick"]),n(f,{tag:"label",title:"import data",for:"file-import",type:"file",accept:"application/json"},{default:r(()=>[n(o(U))]),_:1}),n(H,{onConfirmed:o(p).deleteLocalChanges,title:"delete edits"},null,8,["onConfirmed"])]),_:1})]),s("input",{id:"file-import",type:"file",accept:"application/json",onChange:w},null,32)]),c.value.length?(d(),u("ul",J,[a[2]||(a[2]=s("li",null,"missing media",-1)),(d(!0),u(P,null,z(c.value,(t,m)=>(d(),u("li",{class:"files",key:m},[s("div",null,[s("span",null,[M(h(t.node.type)+": ",1),n(i,{to:{name:"graph",params:{type:t.node.type,id:t.node.id}}},{default:r(()=>[n(N,{text:t.node.label},null,8,["text"])]),_:2},1032,["to"])]),s("a",{href:o(v)(t.url)},h(t.url),9,K)]),n(f,{title:"edit",onClick:q(X=>o(b).open(t.node.id,"node"),["stop","prevent"]),"disable-padding":"",disabled:!o(l).edit},{default:r(()=>[n(o(O))]),_:2},1032,["onClick","disabled"])]))),128))])):D("",!0)])])}}},ne=x(Q,[["__scopeId","data-v-8cb33ee4"]]);export{ne as default};
