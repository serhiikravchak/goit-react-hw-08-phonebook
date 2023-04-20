"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{9794:function(e,n,t){t.r(n),t.d(n,{default:function(){return ze}});var r=t(1413),i=t(9439),o=t(2791),a=t(9434),l=t(3634),c="NOT_FOUND";var u=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?u:r,o=t.maxSize,a=void 0===o?1:o,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),d=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return c}return{get:r,put:function(n,i){r(n)===c&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function f(){var n=d.get(arguments);if(n===c){if(n=e.apply(null,arguments),l){var t=d.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o,a=0,l={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(l=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=l,s=u.memoizeOptions,f=void 0===s?t:s,p=Array.isArray(f)?f:[f],m=d(r),x=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return o=x.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:x,dependencies:m,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return i}var p,m,x,v,h=f(s),b=function(e){return e.contacts.items},Z=function(e){return e.contacts.isLoading},y=function(e){return e.contacts.error},j=function(e){return e.filter.value},g=h([b,j],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),k=t(168),w=t(225),C=w.Z.section(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  padding: 20px 15px;\n"]))),S=w.Z.h1(m||(m=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 32px;\n"]))),z=w.Z.h2(x||(x=(0,k.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 32px;\n"]))),N=t(184),F=function(e){var n=e.headtitle,t=e.title,r=e.children;return(0,N.jsxs)(C,{children:[n&&(0,N.jsx)(S,{children:n}),t&&(0,N.jsx)(z,{children:t}),r]})},A=w.Z.form(v||(v=(0,k.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n"]))),I=t(8372),D=t(4554),M=t(3736);function E(e){var n=e.modalClose,t=(0,a.I0)(),r=(0,o.useState)(""),c=(0,i.Z)(r,2),u=c[0],s=c[1],d=(0,o.useState)(""),f=(0,i.Z)(d,2),p=f[0],m=f[1],x=(0,a.v9)(b).map((function(e){return e.name})),v=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":s(r);break;case"number":m(r);break;default:return}};return(0,N.jsxs)(A,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget;if(x.includes(u))return alert("".concat(u," is already in contacts"));t((0,l.uK)({name:u,number:p})),r.reset(),n()},children:[(0,N.jsx)(I.Z,{label:"Name",variant:"outlined",size:"small",name:"name",type:"text",required:!0,sx:{mb:"15px"},value:u,onChange:v}),(0,N.jsx)(I.Z,{label:"Number",variant:"outlined",size:"small",name:"number",type:"tel",required:!0,sx:{mb:"15px"},value:p,onChange:v}),(0,N.jsxs)(D.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,N.jsx)(M.Z,{variant:"contained",type:"submit",sx:{mb:2,width:"65%"},children:"Add contact"}),(0,N.jsx)(M.Z,{variant:"contained",type:"button",sx:{width:"65%"},onClick:n,children:"\u0421ancel"})]})]})}var R,q,T=t(4808),O=function(){var e=(0,a.I0)(),n=(0,a.v9)(j);return(0,N.jsx)(I.Z,{label:"Find contacts by name",variant:"outlined",size:"small",name:"filter",type:"text",required:!0,value:n,onChange:function(n){return e((0,T.Tv)(n.target.value))},sx:{mb:"15px"}})},P=w.Z.b(R||(R=(0,k.Z)(["\n"]))),B=function(){return(0,N.jsx)(P,{children:"Request in progress..."})},L=t(3044),G=t(890),V=t(5461),_=t(7247),H=t(1286),$=w.Z.form(q||(q=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));function K(e){var n=e.currName,t=e.currNumber,r=e.id,c=e.modalClose,u=(0,a.I0)(),s=(0,o.useState)(n),d=(0,i.Z)(s,2),f=d[0],p=d[1],m=(0,o.useState)(t),x=(0,i.Z)(m,2),v=x[0],h=x[1],Z=(0,a.v9)(b).map((function(e){return e.name})),y=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":p(r);break;case"number":h(r);break;default:return}};return(0,N.jsxs)($,{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;if(Z.includes(f))return alert("".concat(f," is already in contacts"));u((0,l.Tk)({name:f,number:v,id:r})),n.reset(),c()},children:[(0,N.jsx)(I.Z,{label:"Name",variant:"outlined",size:"small",name:"name",type:"text",required:!0,sx:{mb:"15px"},value:f,onChange:y}),(0,N.jsx)(I.Z,{label:"Number",variant:"outlined",size:"small",name:"number",type:"tel",required:!0,sx:{mb:"15px"},value:v,onChange:y}),(0,N.jsxs)(D.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,N.jsx)(M.Z,{variant:"contained",type:"submit",sx:{mb:2,width:"65%"},children:"Update"}),(0,N.jsx)(M.Z,{variant:"contained",type:"button",sx:{width:"65%"},onClick:c,children:"\u0421ancel"})]})]})}var U,W,J=t(9823),Q={position:"absolute",top:"50%",left:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",transform:"translate(-50%, -50%)",width:320,bgcolor:"background.paper",border:"1px solid #808080",boxShadow:24,pt:6,px:4,pb:3},X=function(e){var n=e.name,t=e.number,c=e.id,u=o.useState(!1),s=(0,i.Z)(u,2),d=s[0],f=s[1],p=(0,a.I0)(),m=function(){f(!1)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(L.Z,{sx:{mr:"10px"},children:n[0]}),(0,N.jsxs)(D.Z,{sx:{width:"176px"},children:[(0,N.jsx)(G.Z,{sx:{wordWrap:"break-word"},children:n}),(0,N.jsx)(G.Z,{sx:{wordWrap:"break-word"},children:t})]}),(0,N.jsxs)(D.Z,{sx:{ml:"auto"},children:[(0,N.jsx)(o.Fragment,{children:(0,N.jsx)(V.Z,{hideBackdrop:!0,open:d,onClose:m,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,N.jsxs)(D.Z,{sx:(0,r.Z)((0,r.Z)({},Q),{},{width:300}),children:[(0,N.jsx)(J.Z,{sx:{position:"absolute",top:"5%",left:"89%",color:"#808080","&:hover":{color:"#1976d2"}},onClick:m}),(0,N.jsx)(K,{currName:n,currNumber:t,id:c,modalClose:m})]})})}),(0,N.jsxs)(D.Z,{sx:{display:"flex",ml:"10px"},children:[(0,N.jsx)(H.Z,{"aria-label":"update",type:"button",sx:{mr:"6px",color:"#808080","&:hover":{color:"#1976d2",scale:"120%"}},onClick:function(e){f(!0)}}),(0,N.jsx)(_.Z,{"aria-label":"delete",type:"button",sx:{color:"#808080","&:hover":{color:"#1976d2",scale:"120%"}},onClick:function(){return p((0,l.GK)(c))}})]})]})]})},Y=w.Z.ul(U||(U=(0,k.Z)(["\n    width: 100%;\n"]))),ee=w.Z.li(W||(W=(0,k.Z)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 5px;\n"]))),ne=function(){var e=(0,a.v9)(g);return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(Y,{children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,N.jsx)(ee,{children:(0,N.jsx)(X,{name:t,number:r,id:n})},n)}))})})},te=t(4942),re=t(3366),ie=t(7462),oe=t(8182),ae=t(2466),le=t(4419),ce=t(1217),ue=(0,t(4046).ZP)(),se=t(7078),de=t(8519),fe=t(5080),pe=t(1184),me=t(5682),xe=["component","direction","spacing","divider","children","className","useFlexGap"],ve=(0,fe.Z)(),he=ue("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function be(e){return(0,se.Z)({props:e,name:"MuiStack",defaultTheme:ve})}function Ze(e,n){var t=o.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,i){return e.push(r),i<t.length-1&&e.push(o.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var ye=function(e){var n=e.ownerState,t=e.theme,r=(0,ie.Z)({display:"flex",flexDirection:"column"},(0,pe.k9)({theme:t},(0,pe.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,me.hB)(t),o=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),a=(0,pe.P$)({values:n.direction,base:o}),l=(0,pe.P$)({values:n.spacing,base:o});"object"===typeof a&&Object.keys(a).forEach((function(e,n,t){if(!a[e]){var r=n>0?a[t[n-1]]:"column";a[e]=r}}));r=(0,ae.Z)(r,(0,pe.k9)({theme:t},l,(function(e,t){return n.useFlexGap?{gap:(0,me.NA)(i,e)}:{"& > :not(style) + :not(style)":(0,te.Z)({margin:0},"margin".concat((r=t?a[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,me.NA)(i,e))};var r})))}return r=(0,pe.dt)(t.breakpoints,r)};var je=t(6934),ge=t(1402),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?he:n,r=e.useThemeProps,i=void 0===r?be:r,a=e.componentName,l=void 0===a?"MuiStack":a,c=function(){return(0,le.Z)({root:["root"]},(function(e){return(0,ce.Z)(l,e)}),{})},u=t(ye),s=o.forwardRef((function(e,n){var t=i(e),r=(0,de.Z)(t),o=r.component,a=void 0===o?"div":o,l=r.direction,s=void 0===l?"column":l,d=r.spacing,f=void 0===d?0:d,p=r.divider,m=r.children,x=r.className,v=r.useFlexGap,h=void 0!==v&&v,b=(0,re.Z)(r,xe),Z={direction:s,spacing:f,useFlexGap:h},y=c();return(0,N.jsx)(u,(0,ie.Z)({as:a,ownerState:Z,ref:n,className:(0,oe.Z)(y.root,x)},b,{children:p?Ze(m,p):m}))}));return s}({createStyledComponent:(0,je.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,ge.Z)({props:e,name:"MuiStack"})}}),we=ke,Ce=t(5936),Se={position:"absolute",top:"50%",left:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end",transform:"translate(-50%, -50%)",width:320,bgcolor:"background.paper",border:"1px solid #808080",boxShadow:24,pt:6,px:4,pb:3};function ze(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=n[0],c=n[1],u=(0,a.I0)(),s=(0,a.v9)(Z),d=(0,a.v9)(y);(0,o.useEffect)((function(){u((0,l.yF)())}),[u]);var f=function(){c(!1)};return(0,N.jsx)(D.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto",width:320},children:(0,N.jsxs)(F,{title:"Contacts",children:[(0,N.jsx)(O,{}),(0,N.jsx)(we,{direction:"row",spacing:2,sx:{ml:"auto"},children:(0,N.jsx)(M.Z,{size:"large",variant:"text",startIcon:(0,N.jsx)(Ce.Z,{}),onClick:function(e){c(!0)},children:"Add"})}),(0,N.jsx)(o.Fragment,{children:(0,N.jsx)(V.Z,{hideBackdrop:!0,open:t,onClose:f,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,N.jsxs)(D.Z,{sx:(0,r.Z)((0,r.Z)({},Se),{},{width:300}),children:[(0,N.jsx)(J.Z,{x:{position:"absolute",top:"5%",left:"89%",color:"#808080","&:hover":{color:"#1976d2"}},onClick:f}),(0,N.jsx)(E,{modalClose:f})]})})}),(0,N.jsx)(ne,{}),s&&!d&&(0,N.jsx)(B,{})]})})}},5936:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");n.Z=a},9823:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=a},7247:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},1286:function(e,n,t){var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=a}}]);
//# sourceMappingURL=794.52e2e868.chunk.js.map