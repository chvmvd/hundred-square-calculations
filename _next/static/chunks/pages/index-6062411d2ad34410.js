(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8609)}])},8609:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n=r(5893),i=r(1163),o=r(7462),a=r(3366),s=r(7294),l=r(6010),u=r(4780),c=r(948),p=r(1657),d=r(629),f=r(1588),m=r(4867);function h(e){return(0,m.Z)("MuiCard",e)}(0,f.Z)("MuiCard",["root"]);let g=["className","raised"],x=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},h,t)},b=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),v=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,u=(0,a.Z)(r,g),c=(0,o.Z)({},r,{raised:s}),d=x(c);return(0,n.jsx)(b,(0,o.Z)({className:(0,l.Z)(d.root,i),elevation:s?8:void 0,ref:t,ownerState:c},u))});function y(e){return(0,m.Z)("MuiCardActionArea",e)}let w=(0,f.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var Z=r(7162);let k=["children","className","focusVisibleClassName"],$=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"],focusHighlight:["focusHighlight"]},y,t)},j=(0,c.ZP)(Z.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${w.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${w.focusVisible} .${w.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),M=(0,c.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),S=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCardActionArea"}),{children:i,className:s,focusVisibleClassName:u}=r,c=(0,a.Z)(r,k),d=$(r);return(0,n.jsxs)(j,(0,o.Z)({className:(0,l.Z)(d.root,s),focusVisibleClassName:(0,l.Z)(u,d.focusVisible),ref:t,ownerState:r},c,{children:[i,(0,n.jsx)(M,{className:d.focusHighlight,ownerState:r})]}))});function _(e){return(0,m.Z)("MuiCardContent",e)}(0,f.Z)("MuiCardContent",["root"]);let C=["className","component"],O=e=>{let{classes:t}=e;return(0,u.Z)({root:["root"]},_,t)},N=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),P=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=r,u=(0,a.Z)(r,C),c=(0,o.Z)({},r,{component:s}),d=O(c);return(0,n.jsx)(N,(0,o.Z)({as:s,className:(0,l.Z)(d.root,i),ownerState:c,ref:t},u))});var E=r(5861),T=r(5408),R=r(9707),W=r(1938),A=r(247);let H=s.createContext();function B(e){return(0,m.Z)("MuiGrid",e)}let L=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],G=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...L.map(e=>`grid-xs-${e}`),...L.map(e=>`grid-sm-${e}`),...L.map(e=>`grid-md-${e}`),...L.map(e=>`grid-lg-${e}`),...L.map(e=>`grid-xl-${e}`)]);var I=G;let z=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function V(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function D({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let n=Object.keys(e).sort((t,r)=>e[t]-e[r]);return n.slice(0,n.indexOf(r))}let F=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:n,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:u}=r,c=[];n&&(c=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let n=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&n.push(r[`spacing-${t}-${String(i)}`])}),n}(a,u,t));let p=[];return u.forEach(e=>{let n=r[e];n&&p.push(t[`grid-${e}-${String(n)}`])}),[t.root,n&&t.container,o&&t.item,l&&t.zeroMinWidth,...c,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})(({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let r=(0,T.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,T.k9)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${I.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:r,rowSpacing:n}=t,i={};if(r&&0!==n){let t;let r=(0,T.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=D({breakpoints:e.breakpoints.values,values:r})),i=(0,T.k9)({theme:e},r,(r,n)=>{var i;let o=e.spacing(r);return"0px"!==o?{marginTop:`-${V(o)}`,[`& > .${I.item}`]:{paddingTop:V(o)}}:null!=(i=t)&&i.includes(n)?{}:{marginTop:0,[`& > .${I.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:t}){let{container:r,columnSpacing:n}=t,i={};if(r&&0!==n){let t;let r=(0,T.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=D({breakpoints:e.breakpoints.values,values:r})),i=(0,T.k9)({theme:e},r,(r,n)=>{var i;let o=e.spacing(r);return"0px"!==o?{width:`calc(100% + ${V(o)})`,marginLeft:`-${V(o)}`,[`& > .${I.item}`]:{paddingLeft:V(o)}}:null!=(i=t)&&i.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${I.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((n,i)=>{let a={};if(t[i]&&(r=t[i]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,T.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof s?s[i]:s;if(null==l)return n;let u=`${Math.round(r/l*1e8)/1e6}%`,c={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${u} + ${V(r)})`;c={flexBasis:e,maxWidth:e}}}a=(0,o.Z)({flexBasis:u,flexGrow:0,maxWidth:u},c)}return 0===e.breakpoints.values[i]?Object.assign(n,a):n[e.breakpoints.up(i)]=a,n},{})}),q=e=>{let{classes:t,container:r,direction:n,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,c=[];r&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let n=e[t];if(Number(n)>0){let e=`spacing-${t}-${String(n)}`;r.push(e)}}),r}(o,l));let p=[];l.forEach(t=>{let r=e[t];r&&p.push(`grid-${t}-${String(r)}`)});let d={root:["root",r&&"container",i&&"item",s&&"zeroMinWidth",...c,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]};return(0,u.Z)(d,B,t)},U=s.forwardRef(function(e,t){let r=(0,p.Z)({props:e,name:"MuiGrid"}),{breakpoints:i}=function(){let e=(0,W.Z)(A.Z);return e}(),u=(0,R.Z)(r),{className:c,columns:d,columnSpacing:f,component:m="div",container:h=!1,direction:g="row",item:x=!1,rowSpacing:b,spacing:v=0,wrap:y="wrap",zeroMinWidth:w=!1}=u,Z=(0,a.Z)(u,z),k=s.useContext(H),$=h?d||12:k,j={},M=(0,o.Z)({},Z);i.keys.forEach(e=>{null!=Z[e]&&(j[e]=Z[e],delete M[e])});let S=(0,o.Z)({},u,{columns:$,container:h,direction:g,item:x,rowSpacing:b||v,columnSpacing:f||v,wrap:y,zeroMinWidth:w,spacing:v},j,{breakpoints:i.keys}),_=q(S);return(0,n.jsx)(H.Provider,{value:$,children:(0,n.jsx)(F,(0,o.Z)({ownerState:S,className:(0,l.Z)(_.root,c),as:m,ref:t},M))})});var X=r(7617);function Y(e){let t=(0,i.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v,{children:(0,n.jsx)(S,{onClick:async()=>{await t.push(e.href)},children:(0,n.jsxs)(P,{children:[(0,n.jsx)(E.Z,{variant:"h5",component:"h1",children:e.title}),(0,n.jsx)(E.Z,{variant:"body1",component:"p",children:e.description}),(0,n.jsxs)(E.Z,{variant:"body1",component:"div",children:["example:",(0,n.jsx)(X.BlockMath,{children:e.example})]})]})})})})}function J(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(U,{container:!0,spacing:2,children:[(0,n.jsx)(U,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,n.jsx)(Y,{title:"Addition",description:"Add the numbers in the top row to the numbers in the left column.",example:"1 + 1 = 2",href:"/addition"})}),(0,n.jsx)(U,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,n.jsx)(Y,{title:"Addition",description:"Add the numbers in the top row to the numbers in the left column.",example:"1 + 1 = 2",href:"/addition"})})]})})}r(8594)},8594:function(){},1163:function(e,t,r){e.exports=r(6885)},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7617:function(e,t,r){var n,i,o;o=function(e,t,r,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(e,{BlockMath:()=>c,InlineMath:()=>p}),t=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(t),r=i(r),n=i(n);let a=(e,{displayMode:i})=>{let o=({children:r,errorColor:o,math:a,renderError:s})=>{let l=null!=a?a:r,{html:u,error:c}=(0,t.useMemo)(()=>{try{let e=n.default.renderToString(l,{displayMode:i,errorColor:o,throwOnError:!!s});return{html:e,error:void 0}}catch(e){if(e instanceof n.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[l,o,s]);return c?s?s(c):t.default.createElement(e,{html:`${c.message}`}):t.default.createElement(e,{html:u})};return o.propTypes={children:r.default.string,errorColor:r.default.string,math:r.default.string,renderError:r.default.func},o},s={html:r.default.string.isRequired},l=({html:e})=>t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});l.propTypes=s;let u=({html:e})=>t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});u.propTypes=s;let c=a(l,{displayMode:!0}),p=a(u,{displayMode:!1})},"object"==typeof e.exports?o(t,r(7294),r(5697),r(527)):(n=[t,r(7294),r(5697),r(527)],void 0===(i=o.apply(t,n))||(e.exports=i))}},function(e){e.O(0,[573,850,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);