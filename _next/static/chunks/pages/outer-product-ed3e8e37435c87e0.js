(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{7803:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/outer-product",function(){return t(5250)}])},7421:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(5893),i=t(7294),c=t(7617);t(8594);var a=t(7906),o=t(295),u=t(3816),s=t(3252),l=t(7357);function d(e){let{mathOperator:n,leftItems:t,topItems:i,inputItemTeXView:d,outputItemTeXView:h,calculateFunction:x,willShowAnswer:m=!0}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(s.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:n})},"0, 0"),i.map((e,n)=>(0,r.jsx)(s.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(e)})},"0, ".concat(n)))]},0),t.map((e,n)=>(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(s.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(e)})},"".concat(n,", 0")),i.map((t,i)=>(0,r.jsx)(s.Z,{align:"center",sx:{border:1},children:(0,r.jsx)(l.Z,{sx:{color:"red"},children:(0,r.jsx)(c.InlineMath,{children:"".concat(m?h(x(e,t)):"")})})},"".concat(n,", ").concat(i)))]},n))]})})})}var h=t(629),x=t(1536),m=t(5861),p=t(3321);function f(e){let{title:n,mathOperator:t,inputItemTeXView:c,outputItemTeXView:a,calculateFunction:o,createRandomItemFunction:u}=e,[s,l]=(0,i.useState)([...Array(9)].map(()=>u())),[f,j]=(0,i.useState)([...Array(9)].map(()=>u())),[w,Z]=(0,i.useState)(!1),b=(0,i.useCallback)(()=>{l([...Array(9)].map(()=>u())),j([...Array(9)].map(()=>u()))},[u]);return(0,i.useEffect)(()=>{b()},[b]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h.Z,{sx:{p:2},children:[(0,r.jsxs)(x.Z,{direction:"row",spacing:2,pl:2,mb:1,children:[(0,r.jsx)(m.Z,{variant:"h5",component:"h2",flexGrow:1,children:n}),(0,r.jsx)(p.Z,{variant:"outlined",onClick:b,children:"Reset"}),(0,r.jsx)(p.Z,{variant:"outlined",onClick:()=>{Z(!w)},children:w?"Hide Answer":"Show Answer"})]}),(0,r.jsx)(d,{mathOperator:t,leftItems:s,topItems:f,inputItemTeXView:c,outputItemTeXView:a,calculateFunction:o,willShowAnswer:w})]})})}},5250:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(7297),i=t(5893),c=t(7421);function a(){let e=(0,r.Z)(["\begin{pmatrix} "," \\ "," \\ "," end{pmatrix}"],["\\begin{pmatrix} "," \\\\ "," \\\\ "," \\end{pmatrix}"]);return a=function(){return e},e}function o(){let e=(0,r.Z)(["\begin{pmatrix} "," \\ "," \\ "," end{pmatrix}"],["\\begin{pmatrix} "," \\\\ "," \\\\ "," \\end{pmatrix}"]);return o=function(){return e},e}function u(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{title:"Outer Product",mathOperator:"\\times",calculateFunction:(e,n)=>[e[0]*n[1]-e[1]*n[0],e[2]*n[0]-e[0]*n[2],e[1]*n[2]-e[2]*n[1]],inputItemTeXView:e=>String.raw(a(),e[0],e[1],e[2]),outputItemTeXView:e=>String.raw(o(),e[0],e[1],e[2]),createRandomItemFunction:()=>[void 0,void 0,void 0].map(()=>Math.ceil(9*Math.random()))})})}},7297:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[573,850,659,774,888,179],function(){return e(e.s=7803)}),_N_E=e.O()}]);