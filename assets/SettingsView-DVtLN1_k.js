import{T as m,I as r}from"./TheHeader-D1axMtIO.js";import{I as g}from"./InputButtonDelete-OxfIkSu4.js";import{o as u,c as p,a as o,_,u as L,b as w,d as I,e,f as a,I as b,w as i,L as x}from"./index-DR3xjQ7c.js";import{I as h}from"./Export-Dehn_vaY.js";const v={class:"icon",width:"45",height:"45",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg"};function C(d,t){return u(),p("svg",v,t[0]||(t[0]=[o("path",{d:"M15,30 L30,30 L30,29 L15,29 L15,30 Z M22.5,14.2928932 L27.3535534,19.1464466 L26.6464466,19.8535534 L23,16.2068932 L23,26.5 L22,26.5 L22,16.2068932 L18.3535534,19.8535534 L17.6464466,19.1464466 L22.5,14.2928932 Z",fill:"currentColor"},null,-1)]))}const S={name:"base-Import",render:C},V={class:"settings-view"},B={class:"button-group"},j={__name:"SettingsView",setup(d){const t=L();w();const n=I();async function c(s){await n.importProject(s.target.files[0]),t.mode==="public"&&(t.mode="edit"),s.target.value=null}return(s,l)=>(u(),p("div",V,[e(m),o("main",null,[o("ul",null,[o("li",null,[l[1]||(l[1]=o("span",{class:"label"},"editing",-1)),e(b,{horizontal:"","equal-size":"",modelValue:a(t).enableEditing,"onUpdate:modelValue":l[0]||(l[0]=f=>a(t).enableEditing=f),options:[{value:!1,label:"off"},{value:!0,label:"on"}]},null,8,["modelValue"])]),o("li",B,[e(x,{class:"extend",horizontal:"","equal-size":""},{default:i(()=>[e(r,{onClick:a(n).exportProject,title:"export data"},{default:i(()=>[e(a(h))]),_:1},8,["onClick"]),e(r,{tag:"label",title:"import data",for:"file-import",type:"file",accept:"application/json"},{default:i(()=>[e(a(S))]),_:1}),e(g,{onConfirmed:a(n).deleteLocalChanges,title:"delete edits"},null,8,["onConfirmed"])]),_:1})]),o("input",{id:"file-import",type:"file",accept:"application/json",onChange:c},null,32)])])]))}},P=_(j,[["__scopeId","data-v-ebe9f601"]]);export{P as default};
