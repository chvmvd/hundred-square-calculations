(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4790:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inner-product",function(){return t(2564)}])},9362:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(5893),i=t(7294),c=t(7617);t(8594);var a=t(7906),o=t(295),s=t(3816),l=t(3252),u=t(7357);function d(n){let{mathOperator:e,leftItems:t,topItems:i,inputItemTeXView:d,outputItemTeXView:m,calculateFunction:h,willShowAnswer:x=!0}=n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:e})},"0, 0"),i.map((n,e)=>(0,r.jsx)(l.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(n)})},"0, ".concat(e)))]},0),t.map((n,e)=>(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{align:"center",component:"th",sx:{border:1},children:(0,r.jsx)(c.InlineMath,{children:d(n)})},"".concat(e,", 0")),i.map((t,i)=>(0,r.jsx)(l.Z,{align:"center",sx:{border:1},children:(0,r.jsx)(u.Z,{sx:{color:"red"},children:(0,r.jsx)(c.InlineMath,{children:"".concat(x?m(h(n,t)):"")})})},"".concat(e,", ").concat(i)))]},e))]})})})}var m=t(5861);function h(n){let{leftItems:e,topItems:t,howToCalculate:a}=n;return(0,r.jsx)(r.Fragment,{children:e.map((n,e)=>t.map((t,o)=>(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(m.Z,{variant:"body1",component:"div",children:["row".concat(e+1,", column").concat(o+1),(0,r.jsx)(c.BlockMath,{children:a(n,t)})]})},"".concat(e,",").concat(o))))})}var x=t(629),p=t(1536),j=t(3321);function f(n){let{title:e,mathOperator:t,inputItemTeXView:c,outputItemTeXView:a,howToCalculate:o,calculateFunction:s,createRandomItemFunction:l}=n,[f,w]=(0,i.useState)([...Array(10)].map(()=>l())),[Z,b]=(0,i.useState)([...Array(10)].map(()=>l())),[g,v]=(0,i.useState)(!1),I=(0,i.useCallback)(()=>{w([...Array(10)].map(()=>l())),b([...Array(10)].map(()=>l()))},[l]);return(0,i.useEffect)(()=>{I()},[I]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(x.Z,{sx:{p:2},children:[(0,r.jsxs)(p.Z,{direction:"row",spacing:2,pl:2,mb:1,children:[(0,r.jsx)(m.Z,{variant:"h5",component:"h2",flexGrow:1,children:e}),(0,r.jsx)(j.Z,{variant:"outlined",onClick:I,children:"Reset"}),(0,r.jsx)(j.Z,{variant:"outlined",onClick:()=>{v(!g)},children:g?"Hide Answer":"Show Answer"})]}),(0,r.jsx)(d,{mathOperator:t,leftItems:f,topItems:Z,inputItemTeXView:c,outputItemTeXView:a,calculateFunction:s,willShowAnswer:g}),g&&(0,r.jsxs)(u.Z,{p:2,children:[(0,r.jsx)(m.Z,{variant:"h6",component:"h3",pt:1,pb:1,children:"Answer"}),(0,r.jsx)(h,{leftItems:f,topItems:Z,howToCalculate:o})]})]})})}},2564:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(7297),i=t(5893),c=t(9362);function a(){let n=(0,r.Z)(["\begin{pmatrix} "," \\ "," \\ "," end{pmatrix}"],["\\begin{pmatrix} "," \\\\ "," \\\\ "," \\end{pmatrix}"]);return a=function(){return n},n}function o(){let n=(0,r.Z)(["\begin{pmatrix} "," \\ "," \\ "," end{pmatrix} cdot \begin{pmatrix} "," \\ "," \\ "," end{pmatrix} = ","	imes "," + ","	imes "," + ","	imes "," = ",""],["\\begin{pmatrix} "," \\\\ "," \\\\ "," \\end{pmatrix} \\cdot \\begin{pmatrix} "," \\\\ "," \\\\ "," \\end{pmatrix} = ","\\times "," + ","\\times "," + ","\\times "," = ",""]);return o=function(){return n},n}function s(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{title:"Inner Product",mathOperator:"\\cdot",inputItemTeXView:n=>String.raw(a(),n[0],n[1],n[2]),outputItemTeXView:n=>"".concat(n),howToCalculate:(n,e)=>String.raw(o(),n[0],n[1],n[2],e[0],e[1],e[2],n[0],e[0],n[1],e[1],n[2],e[2],n[0]*e[0]+n[1]*e[1]+n[2]*e[2]),calculateFunction:(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],createRandomItemFunction:()=>[void 0,void 0,void 0].map(()=>Math.ceil(9*Math.random()))})})}},7297:function(n,e,t){"use strict";function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[573,850,659,774,888,179],function(){return n(n.s=4790)}),_N_E=n.O()}]);