(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{4472:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2x2-matrix",function(){return t(1717)}])},7421:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(5893),i=t(7294),c=t(7617);t(8594);var a=t(7906),o=t(295),s=t(3816),u=t(3252),l=t(7357);function d(n){let{mathOperator:e,leftItems:t,topItems:i,inputItemTeXView:d,outputItemTeXView:x,calculateFunction:h,willShowAnswer:m=!0}=n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:e})},"0, 0"),i.map((n,e)=>(0,r.jsx)(u.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(n)})},"0, ".concat(e)))]},0),t.map((n,e)=>(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(n)})},"".concat(e,", 0")),i.map((t,i)=>(0,r.jsx)(u.Z,{align:"center",sx:{border:1},children:(0,r.jsx)(l.Z,{sx:{color:"red"},children:(0,r.jsx)(c.InlineMath,{children:"".concat(m?x(h(n,t)):"")})})},"".concat(e,", ").concat(i)))]},e))]})})})}var x=t(629),h=t(1536),m=t(5861),p=t(3321);function f(n){let{title:e,mathOperator:t,inputItemTeXView:c,outputItemTeXView:a,calculateFunction:o,createRandomItemFunction:s}=n,[u,l]=(0,i.useState)([...Array(9)].map(()=>s())),[f,j]=(0,i.useState)([...Array(9)].map(()=>s())),[w,Z]=(0,i.useState)(!1),b=(0,i.useCallback)(()=>{l([...Array(9)].map(()=>s())),j([...Array(9)].map(()=>s()))},[s]);return(0,i.useEffect)(()=>{b()},[b]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(x.Z,{sx:{p:2},children:[(0,r.jsxs)(h.Z,{direction:"row",spacing:2,pl:2,mb:1,children:[(0,r.jsx)(m.Z,{variant:"h5",component:"h2",flexGrow:1,children:e}),(0,r.jsx)(p.Z,{variant:"outlined",onClick:b,children:"Reset"}),(0,r.jsx)(p.Z,{variant:"outlined",onClick:()=>{Z(!w)},children:w?"Hide Answer":"Show Answer"})]}),(0,r.jsx)(d,{mathOperator:t,leftItems:u,topItems:f,inputItemTeXView:c,outputItemTeXView:a,calculateFunction:o,willShowAnswer:w})]})})}},1717:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(7297),i=t(5893),c=t(7421);function a(){let n=(0,r.Z)(["\begin{pmatrix} "," & "," \\ "," & "," end{pmatrix}"],["\\begin{pmatrix} "," & "," \\\\ "," & "," \\end{pmatrix}"]);return a=function(){return n},n}function o(){let n=(0,r.Z)(["\begin{pmatrix} "," & "," \\ "," & "," end{pmatrix}"],["\\begin{pmatrix} "," & "," \\\\ "," & "," \\end{pmatrix}"]);return o=function(){return n},n}function s(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{title:"2x2 Matrix",mathOperator:"",calculateFunction:(n,e)=>[[n[0][0]*e[0][0]+n[0][1]*e[1][0],n[0][0]*e[0][1]+n[0][1]*e[1][1]],[n[1][0]*e[0][0]+n[1][1]*e[1][0],n[1][0]*e[0][1]+n[1][1]*e[1][1]]],inputItemTeXView:n=>String.raw(a(),n[0][0],n[0][1],n[1][0],n[1][1]),outputItemTeXView:n=>String.raw(o(),n[0][0],n[0][1],n[1][0],n[1][1]),createRandomItemFunction:()=>[void 0,void 0].map(()=>[void 0,void 0].map(()=>Math.ceil(9*Math.random())))})})}},7297:function(n,e,t){"use strict";function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[573,850,659,774,888,179],function(){return n(n.s=4472)}),_N_E=n.O()}]);