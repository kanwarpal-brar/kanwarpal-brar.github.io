import{c as I,z as C,A as q,a as H,h as v,b as h,g as D,Y as b,r as _,o as $,a5 as B,Z as T,a6 as g,a7 as P,a8 as S,ad as k,$ as j,a0 as i,a1 as n,a4 as f,ae as c,R as d,af as m,ag as w,aa as x,ah as E}from"./index.4551cfbe.js";import{Q}from"./QPage.fb2fb994.js";var N=I({name:"QBanner",props:{...C,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(a,{slots:t}){const{proxy:{$q:s}}=D(),r=q(a,s),e=H(()=>"q-banner row items-center"+(a.dense===!0?" q-banner--dense":"")+(r.value===!0?" q-banner--dark q-dark":"")+(a.rounded===!0?" rounded-borders":"")),l=H(()=>`q-banner__actions row items-center justify-end col-${a.inlineActions===!0?"auto":"all"}`);return()=>{const p=[v("div",{class:"q-banner__avatar col-auto row items-center self-start"},h(t.avatar)),v("div",{class:"q-banner__content col text-body2"},h(t.default))],u=h(t.action);return u!==void 0&&p.push(v("div",{class:l.value},u)),v("div",{class:e.value+(a.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},p)}}});const R=b({__name:"TypedText",props:{textArray:null,typeTime:null},emits:["doneTyping"],setup(a,{emit:t}){const s=a,r=_("");return $(async()=>{for(const e of s.textArray)await new Promise(l=>{setTimeout(()=>{r.value=e,l()},s.typeTime)});t("doneTyping")}),(e,l)=>B(r.value)}}),A=b({__name:"SplitText",props:{text:null,class:null,containerClass:null},setup(a){const t=a;return(s,r)=>(T(),g("span",{class:k(t.containerClass)},[(T(!0),g(P,null,S(t.text,e=>(T(),g("span",{class:k(t.class),key:e},B(e),3))),128))],2))}});const F={class:"homepage-text-container"},V={class:"homepage-intro-text"},U=b({__name:"TemporaryHomePage",emits:["doneAnimation"],setup(a,{emit:t}){const s=_(!1),r=_(!1),e=_(!1),l=["|","H|","Hi|","Hi |","Hi T|","Hi Th|","Hi Thr|","Hi Th|","Hi The|","Hi Ther|","Hi There.|","Hi There. I|","Hi There. I'|","Hi There. I'm|","Hi There. I'm","Hi There. I'm|","Hi There. I'm"];function p(){setTimeout(()=>{r.value=!0},200)}function u(){setTimeout(()=>{t("doneAnimation")},200)}return(z,o)=>(T(),j(Q,{class:"column items-center justify-evenly",style:{overflow:"hidden"}},{default:i(()=>[n(N,{class:"warning-banner absolute-bottom"},{default:i(()=>[f("Notice: This Website is still under Construction")]),_:1}),c("div",F,[c("h2",V,[n(R,{textArray:l,typeTime:150,onDoneTyping:o[0]||(o[0]=y=>s.value=!0)})]),n(w,{class:"homepage-name-text","enter-active-class":"animated bounceInUp",style:{"animation-duration":"2s"},onAfterEnter:o[1]||(o[1]=y=>p())},{default:i(()=>[d(c("h1",null,[n(A,{text:"Kanwarpal",class:"name-letter","container-class":"firstname"}),n(A,{text:" Brar",class:"name-letter"})],512),[[m,s.value]])]),_:1}),n(w,{class:"homepage-paragraph-text","enter-active-class":"animated fadeIn",style:{"animation-duration":"2s"},onAfterEnter:o[2]||(o[2]=y=>e.value=!0)},{default:i(()=>[d(c("p",null," Fullstack developer and University of Waterloo Computer Science student with a passion for designing and implementing RESTful and event-driven microservices. Continuously seeking to expand my knowledge and skills. ",512),[[m,r.value]])]),_:1}),c("span",null,[n(E,{class:"homepage-button-row","enter-active-class":"animated fadeIn",style:{"animation-duration":"1s"},onAfterEnter:o[3]||(o[3]=y=>u())},{default:i(()=>[d(n(x,{key:"resume-button",href:"Kanwarpal Brar Resume.pdf"},{default:i(()=>[f("Resume")]),_:1},512),[[m,e.value]]),d(n(x,{key:"about-me-button",to:"about"},{default:i(()=>[f("About Me")]),_:1},512),[[m,e.value]]),d(n(x,{key:"projects-button",to:"projects"},{default:i(()=>[f("Projects")]),_:1},512),[[m,e.value]])]),_:1})])])]),_:1}))}});export{U as default};
