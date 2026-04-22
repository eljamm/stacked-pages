import { classNames } from '@quartz-community/utils/lang';
import { jsx } from 'preact/jsx-runtime';

// src/util/lang.ts

// src/components/styles/example.scss
var example_default = ".example-component {\n  padding: 8px 16px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 4px;\n  font-weight: 600;\n  display: inline-block;\n}";

// src/components/scripts/example.inline.ts
var example_inline_default = 'function l(){let e=window.location.pathname;return e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1)),e||"index"}function r(){let e=document.querySelectorAll(".example-component");if(e.length===0)return;let t=[];function o(n){(n.ctrlKey||n.metaKey)&&n.shiftKey&&n.key.toLowerCase()==="e"&&(n.preventDefault(),console.log("[ExampleComponent] Keyboard shortcut triggered!"))}document.addEventListener("keydown",o),t.push(()=>document.removeEventListener("keydown",o));for(let n of e){let i=()=>{console.log("[ExampleComponent] Clicked!")};n.addEventListener("click",i),t.push(()=>n.removeEventListener("click",i))}typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>{t.forEach(n=>n())}),console.log("[ExampleComponent] Initialized with",e.length,"component(s)")}document.addEventListener("nav",e=>{let t=e.detail?.url||l();console.log("[ExampleComponent] Navigation to:",t),r()});document.addEventListener("render",()=>{console.log("[ExampleComponent] Render event - re-initializing"),r()});document.addEventListener("prenav",()=>{let e=document.querySelector(".example-component");e&&sessionStorage.setItem("exampleScrollTop",e.scrollTop?.toString()||"0")});\n';
var ExampleComponent_default = ((opts) => {
  const { prefix = "", suffix = "", className = "example-component" } = opts ?? {};
  const Component = (props) => {
    const frontmatter = props.fileData?.frontmatter;
    const title = frontmatter?.title ?? "Untitled";
    const fullText = `${prefix}${title}${suffix}`;
    return /* @__PURE__ */ jsx("div", { class: classNames(className), children: fullText });
  };
  Component.css = example_default;
  Component.afterDOMLoaded = example_inline_default;
  return Component;
});

// src/components/styles/stacked.scss
var stacked_default = `#stacked-pages-container:not(.binder-active) {
  display: none;
}
#stacked-pages-container.binder-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

body.has-binder-left .page {
  padding-left: 44px;
}

body.has-binder-right .page {
  padding-right: 44px;
}

.binder-strip {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 8px 0;
  justify-content: stretch;
  align-items: stretch;
  z-index: 100;
  width: 44px;
  height: 100%;
}

.binder-strip-left {
  align-self: flex-start;
  padding-left: 4px;
}

.binder-strip-right {
  align-self: flex-end;
  margin-left: auto;
  padding-right: 4px;
}

.binder-tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 0;
  cursor: pointer;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E") repeat, linear-gradient(175deg, var(--light) 0%, var(--lightgray) 100%);
  background-blend-mode: overlay, normal;
  border: 1px solid var(--lightgray);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: background-color 150ms ease-out, transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms ease-out, border-color 150ms ease-out;
  width: 100%;
  flex: 1;
  position: relative;
  writing-mode: vertical-lr;
  overflow: hidden;
  border-radius: 0;
  user-select: none;
}
.binder-tab:hover {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E") repeat, linear-gradient(175deg, var(--light) 0%, var(--light) 100%);
  background-blend-mode: overlay, normal;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  transform: scale(1.02);
}
.binder-tab:active {
  transform: scale(0.98);
}

.binder-tab.binder-tab-dragging {
  opacity: 0.5;
  transform: scale(0.95);
}

.binder-tab.binder-tab-drag-over {
  border-color: var(--secondary);
  box-shadow: 0 0 0 2px var(--secondary), 0 0 20px rgba(var(--secondary-rgb), 0.15);
}

.binder-tab.binder-tab-active {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E") repeat, var(--light);
  background-blend-mode: overlay;
  z-index: 101;
  cursor: default;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08);
}
.binder-tab.binder-tab-active:hover {
  transform: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08);
}
.binder-tab.binder-tab-active.binder-tab-left {
  border-right: none;
  border-left: 3px solid var(--secondary);
  border-radius: 6px 0 0 6px;
}
.binder-tab.binder-tab-active.binder-tab-right {
  border-left: none;
  border-right: 3px solid var(--secondary);
  border-radius: 0 6px 6px 0;
}

.binder-tab:not(.binder-tab-active) {
  color: var(--gray);
}
.binder-tab:not(.binder-tab-active).binder-tab-left {
  border-radius: 6px 0 0 6px;
  border-right: 2px solid var(--secondary);
  border-left: 1px solid var(--lightgray);
}
.binder-tab:not(.binder-tab-active).binder-tab-right {
  border-radius: 0 6px 6px 0;
  border-left: 2px solid var(--secondary);
  border-right: 1px solid var(--lightgray);
}

.binder-spine {
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: 3px;
  background: var(--secondary);
  border-radius: 2px;
  opacity: 0.7;
  transition: opacity 150ms ease-out, transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.binder-tab-left .binder-spine {
  right: 4px;
}
.binder-tab-right .binder-spine {
  left: 4px;
}
.binder-tab:hover .binder-spine {
  opacity: 1;
  transform: scaleY(1.1);
}
.binder-tab-active .binder-spine {
  opacity: 1;
  width: 4px;
}

.binder-label {
  font-family: var(--font-display, system-ui);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--darkgray);
  user-select: none;
  transform: rotate(180deg);
  text-align: left;
  padding: 0 2px;
}

.binder-tab-active .binder-label {
  font-weight: 600;
  color: var(--dark);
}

.binder-close {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  color: var(--gray);
  padding: 2px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 150ms ease-out, color 150ms ease-out, background-color 150ms ease-out;
  transform: rotate(180deg);
}
.binder-close:hover {
  color: var(--dark);
  background: rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.binder-tab:hover .binder-close {
  opacity: 1;
}

.binder-page-out {
  animation: binder-page-out 300ms forwards;
}

.binder-page-in {
  animation: binder-page-in 300ms forwards;
}

@keyframes binder-page-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-10px);
  }
}
@keyframes binder-page-in {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 800px) {
  #stacked-pages-container {
    display: none;
  }
  body.has-binder-left .page,
  body.has-binder-right .page {
    padding-left: 0;
    padding-right: 0;
  }
}`;

// src/components/scripts/stacked.inline.ts
var stacked_inline_default = 'var T=Object.hasOwnProperty;function b(){return typeof document>"u"?"":document.body?.dataset?.basepath??""}function d(u,D){let i=D??b(),e=u.startsWith("/")?u:"/"+u;return i+e}var g="stacked-pages-state";function h(){let u=window.location.pathname;return u.startsWith("/")&&(u=u.slice(1)),u.endsWith("/")&&(u=u.slice(0,-1)),u||"index"}function v(){return document.querySelector("h1")?.textContent?.trim()||document.title||h()}function E(){try{let u=sessionStorage.getItem(g);if(u){let D=JSON.parse(u);if(Array.isArray(D.tabs)&&typeof D.activeIndex=="number")return D}}catch{}return{tabs:[],activeIndex:-1}}function C(u){try{sessionStorage.setItem(g,JSON.stringify(u))}catch{}}function m(u){return{maxTabs:parseInt(u.dataset.maxTabs||"8",10),mobileBreakpoint:parseInt(u.dataset.mobileBreakpoint||"800",10),showSpines:u.dataset.showSpines!=="false",animate:u.dataset.animate!=="false"}}function c(u,D){let i=m(u);if(window.innerWidth<i.mobileBreakpoint){u.style.display="none",document.body.classList.remove("has-binder-left","has-binder-right");return}if(u.style.display="",D.tabs.length<=1){u.innerHTML="",u.classList.remove("binder-active"),document.body.classList.remove("has-binder-left","has-binder-right");return}u.classList.add("binder-active");let e=D.tabs.slice(0,D.activeIndex+1),a=D.tabs.slice(D.activeIndex+1);if(u.innerHTML="",e.length>0){let F=document.createElement("div");F.className="binder-strip binder-strip-left";for(let n=0;n<e.length;n++){let t=e[n];F.appendChild(B(t,n,"left",D,i))}u.appendChild(F)}if(a.length>0){let F=document.createElement("div");F.className="binder-strip binder-strip-right";for(let n=0;n<a.length;n++){let t=D.activeIndex+1+n,r=a[n];F.appendChild(B(r,t,"right",D,i))}u.appendChild(F)}document.body.classList.toggle("has-binder-left",e.length>0),document.body.classList.toggle("has-binder-right",a.length>0)}function B(u,D,i,e,a){let F=document.createElement("div");if(F.className=`binder-tab binder-tab-${i}`,F.draggable=!0,F.dataset.index=String(D),D===e.activeIndex&&F.classList.add("binder-tab-active"),a.showSpines){let t=document.createElement("div");t.className="binder-spine",F.appendChild(t)}let n=document.createElement("span");if(n.className="binder-label",n.textContent=u.title,n.title=u.title,F.appendChild(n),e.tabs.length>=2){let t=document.createElement("button");t.className="binder-close",t.textContent="\\xD7",t.setAttribute("aria-label",`Close ${u.title}`),t.addEventListener("click",r=>{r.stopPropagation(),x(D)}),F.appendChild(t)}return F.addEventListener("click",()=>{p(D)}),F.addEventListener("dragstart",t=>{F.classList.add("binder-tab-dragging"),t.dataTransfer?.setData("text/plain",String(D)),t.dataTransfer.effectAllowed="move"}),F.addEventListener("dragend",()=>{F.classList.remove("binder-tab-dragging"),document.querySelectorAll(".binder-tab-drag-over").forEach(t=>{t.classList.remove("binder-tab-drag-over")})}),F.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="move",F.classList.add("binder-tab-drag-over")}),F.addEventListener("dragleave",()=>{F.classList.remove("binder-tab-drag-over")}),F.addEventListener("drop",t=>{t.preventDefault(),F.classList.remove("binder-tab-drag-over");let r=parseInt(t.dataTransfer?.getData("text/plain")||"-1",10);if(r>=0&&r!==D){let s=E(),[l]=s.tabs.splice(r,1);if(l){let A=D>r?D-1:D;s.tabs.splice(A,0,l),s.activeIndex===r?s.activeIndex=A:r<s.activeIndex&&A>=s.activeIndex?s.activeIndex--:r>s.activeIndex&&A<=s.activeIndex&&s.activeIndex++,C(s),o()}}}),F}function p(u){let D=E();if(u<0||u>=D.tabs.length)return;let i=D.tabs[u];if(!i)return;D.activeIndex=u,C(D);let e=new URL(d(i.slug),window.location.origin);window.spaNavigate?window.spaNavigate(e,!1):window.location.href=e.toString()}function x(u){let D=E();if(D.tabs.length<2)return;let i=u===D.activeIndex;D.tabs.splice(u,1),i?(D.activeIndex=Math.min(u,D.tabs.length-1),C(D),p(D.activeIndex)):(u<D.activeIndex&&D.activeIndex--,C(D),o())}var f=null;function S(){let u=document.getElementById("stacked-pages-container");if(!u)return;let D=h(),i=v();if(D===f){c(u,E());return}f=D;let e=E(),a=m(u),F=e.tabs.findIndex(n=>n.slug===D);if(F>=0)e.tabs[F].title=i,e.activeIndex=F;else{let n={slug:D,title:i},t=e.activeIndex+1;for(e.tabs.splice(t,0,n),e.activeIndex=t;e.tabs.length>a.maxTabs;)e.tabs.shift(),e.activeIndex>0&&e.activeIndex--}C(e),c(u,e)}function o(){let u=document.getElementById("stacked-pages-container");u&&c(u,E())}function I(){S();let u=()=>o();window.addEventListener("resize",u),window.addCleanup&&window.addCleanup(()=>{window.removeEventListener("resize",u)})}typeof document<"u"&&(document.addEventListener("nav",()=>{I()}),document.addEventListener("render",()=>{o()}));\n';
var StackedPages_default = ((opts) => {
  const {
    maxTabs = 8,
    mobileBreakpoint = 800,
    showSpines = true,
    animateTransitions = true
  } = opts ?? {};
  const Component = (_props) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        id: "stacked-pages-container",
        "data-max-tabs": maxTabs,
        "data-mobile-breakpoint": mobileBreakpoint,
        "data-show-spines": showSpines,
        "data-animate": animateTransitions
      }
    );
  };
  Component.css = stacked_default;
  Component.afterDOMLoaded = stacked_inline_default;
  return Component;
});

export { ExampleComponent_default as ExampleComponent, StackedPages_default as StackedPages };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map