"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{4322:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]])},9883:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},1827:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},3589:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},5367:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},2549:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},7650:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let r=n(1024),o=r._(n(2265)),i=o.default.createContext(null)},6307:function(e,t,n){n.d(t,{M:function(){return v}});var r=n(7437),o=n(2265),i=n(781),u=n(961),l=n(4709),a=n(8243),s=n(6119),c=n(5968);function f(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class h extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,s.R)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,n=(0,s.R)(e)&&e.offsetWidth||0,r=(0,s.R)(e)&&e.offsetHeight||0,o=getComputedStyle(t),i=this.props.sizeRef.current;i.height=parseFloat(o.height),i.width=parseFloat(o.width),i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top,i.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:t,anchorX:n,anchorY:i,root:u,pop:l}){let a=(0,o.useId)(),s=(0,o.useRef)(null),p=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=(0,o.useContext)(c._),m=e.props?.ref??e?.ref,y=function(...e){return o.useCallback(function(...e){return t=>{let n=!1,r=e.map(e=>{let r=f(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():f(e[t],null)}}}}(...e),e)}(s,m);return(0,o.useInsertionEffect)(()=>{let{width:e,height:r,top:o,left:c,right:f,bottom:h,direction:m}=p.current;if(t||!1===l||!s.current||!e||!r)return;let y="rtl"===m,k="left"===n?y?`right: ${f}`:`left: ${c}`:y?`left: ${c}`:`right: ${f}`,g="bottom"===i?`bottom: ${h}`:`top: ${o}`;s.current.dataset.motionPopId=a;let v=document.createElement("style");d&&(v.nonce=d);let x=u??document.head;return x.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${k}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute("data-motion-pop-id"),x.contains(v)&&x.removeChild(v)}},[t]),(0,r.jsx)(h,{isPresent:t,childRef:s,sizeRef:p,pop:l,children:!1===l?e:o.cloneElement(e,{ref:y})})}let d=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:l,presenceAffectsLayout:s,mode:c,anchorX:f,anchorY:h,root:d})=>{let y=(0,u.h)(m),k=(0,o.useId)(),g=!0,v=(0,o.useMemo)(()=>(g=!1,{id:k,initial:t,isPresent:n,custom:l,onExitComplete:e=>{for(let t of(y.set(e,!0),y.values()))if(!t)return;i&&i()},register:e=>(y.set(e,!1),()=>y.delete(e))}),[n,y,i]);return s&&g&&(v={...v}),(0,o.useMemo)(()=>{y.forEach((e,t)=>y.set(t,!1))},[n]),o.useEffect(()=>{n||y.size||!i||i()},[n]),e=(0,r.jsx)(p,{pop:"popLayout"===c,isPresent:n,anchorX:f,anchorY:h,root:d,children:e}),(0,r.jsx)(a.O.Provider,{value:v,children:e})};function m(){return new Map}var y=n(7196);let k=e=>e.key||"";function g(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}let v=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c="sync",propagate:f=!1,anchorX:h="left",anchorY:p="top",root:m})=>{let[v,x]=(0,y.oO)(f),M=(0,o.useMemo)(()=>g(e),[e]),b=f&&!v?[]:M.map(k),C=(0,o.useRef)(!0),R=(0,o.useRef)(M),w=(0,u.h)(()=>new Map),P=(0,o.useRef)(new Set),[Z,E]=(0,o.useState)(M),[$,j]=(0,o.useState)(M);(0,l.L)(()=>{C.current=!1,R.current=M;for(let e=0;e<$.length;e++){let t=k($[e]);b.includes(t)?(w.delete(t),P.current.delete(t)):!0!==w.get(t)&&w.set(t,!1)}},[$,b.length,b.join("-")]);let _=[];if(M!==Z){let e=[...M];for(let t=0;t<$.length;t++){let n=$[t],r=k(n);b.includes(r)||(e.splice(t,0,n),_.push(n))}return"wait"===c&&_.length&&(e=_),j(g(e)),E(M),null}let{forceRender:S}=(0,o.useContext)(i.p);return(0,r.jsx)(r.Fragment,{children:$.map(e=>{let o=k(e),i=(!f||!!v)&&(M===$||b.includes(o));return(0,r.jsx)(d,{isPresent:i,initial:(!C.current||!!n)&&void 0,custom:t,presenceAffectsLayout:s,mode:c,root:m,onExitComplete:i?void 0:()=>{if(P.current.has(o)||!w.has(o))return;P.current.add(o),w.set(o,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(S?.(),j(R.current),f&&x?.(),a&&a())},anchorX:h,anchorY:p,children:e},o)})})}}}]);