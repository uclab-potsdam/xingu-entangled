import{_ as v,D as y,B as _,u as T,r as h,f as L,w as r,G as S,o as x,c as B,a as u,h as o,t as P,M as k}from"./index-B-eKHfWI.js";const w={class:"video"},A=["autoplay","src"],C={class:"subtitle"},D={__name:"TheVideo",props:{letterbox:Boolean},setup(E){const e=y(),i=_(),s=T(),l=k(),n=h(null),c=L(()=>i.getLocalizedMediaUrl(e.video.file));function d(){var t;n.value!=null&&(e.time=((t=n.value)==null?void 0:t.currentTime)??0)}function p(t){t.target.currentTime=e.playFrom??0,e.playFrom=null,e.restoreTimeAfterLanguageChange&&(t.target.currentTime=e.restoreTimeAfterLanguageChange,e.restoreTimeAfterLanguageChange=null)}function m(){e.isExternalPlayer?e.requestNext():l.push({name:"graph",params:{type:"graph",id:e.next}})}function f(){n.value!=null&&(e.duration=n.value.duration)}return r(()=>e.playFrom,t=>{t!=null&&(n.value.currentTime=t,e.playFrom=null)}),r(()=>s.videoLang,()=>{e.restoreTimeAfterLanguageChange=n.value.currentTime}),r(()=>e.setPlaying,t=>{t!=null&&(t?n.value.play():n.value.pause(),e.setPlaying=null)}),r(()=>e.muted,t=>{n.value.muted=t}),S(()=>{s.mode!=="edit"&&window.addEventListener("click",()=>{n.value.currentTime===0&&n.value.play()},{once:!0})}),(t,a)=>(x(),B("main",w,[u("video",{ref_key:"video",ref:n,crossorigin:"anonymous",autoplay:!o(s).edit,src:c.value,playsinline:"",onLoadstart:p,onEnded:m,onTimeupdate:d,onPause:a[0]||(a[0]=g=>o(e).playing=!1),onPlay:a[1]||(a[1]=g=>o(e).playing=!0),onDurationchange:f},null,40,A),u("div",C,P(o(e).subtitle),1)]))}},V=v(D,[["__scopeId","data-v-075728c7"]]);export{V as T};