"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[267],{9267:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var a=r(2791),t=r(4420),o=r(4270),i=r(4942),l=r(1413),s=r(9439),u=r(3634),c=function(e){return e.contacts},d=function(e){return e.filter},m=function(e){return e.contacts.isLoading},p=r(824),h=r(5350),f=r(7438),x=r(7236),g=r(9055),v=r(3329),b=function(){var e=(0,t.v9)(c),n=(0,t.I0)(),r=(0,a.useState)({name:"",number:""}),o=(0,s.Z)(r,2),d=o[0],m=o[1],b=function(e){var n=e.target,r=n.name,a=n.value;m((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},r,a))}))};return(0,v.jsxs)(p.xu,{as:"form",onSubmit:function(r){r.preventDefault();var a=d.name,t=d.number;if(e&&Array.isArray(e.list))if(e.list.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})))alert("Contact with this name already exists!");else{var o={name:a,phone:t};n((0,u.rE)(o)),m({name:"",number:""})}else console.error("Error: contacts is not an array or is undefined")},my:"10",children:[(0,v.jsxs)(h.NI,{children:[(0,v.jsx)(f.l,{htmlFor:"number",children:"Number"}),(0,v.jsx)(x.I,{type:"tel",name:"number",maxLength:"30",pattern:"(-)?\\d{1,}|(-)?\\d{1,}(\\.)\\d{1,}|(-)?\\d{1,}(\\s)(-)?\\d{1,}|(-)?\\d{1,}(\\s)(-)?\\d{1,}(\\s)(-)?\\d{1,}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"e.g. 123-456-789",required:!0,mb:"4",value:d.number,onChange:b})]}),(0,v.jsxs)(h.NI,{children:[(0,v.jsx)(f.l,{htmlFor:"name",children:"Name"}),(0,v.jsx)(x.I,{type:"text",name:"name",maxLength:"30",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"e.g. John Doe",required:!0,mb:"4",value:d.name,onChange:b}),(0,v.jsx)(g.z,{type:"submit",children:"Add contact"})]})]})},j=r(1538),w=r(884),y=r(4925),C=r(5597),A=r(5113),G=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],R=(0,C.G)((function(e,n){var r=e.templateAreas,a=e.gap,t=e.rowGap,o=e.columnGap,i=e.column,s=e.row,u=e.autoFlow,c=e.autoRows,d=e.templateRows,m=e.autoColumns,p=e.templateColumns,h=(0,y.Z)(e,G),f={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:t,gridColumnGap:o,gridAutoColumns:m,gridColumn:i,gridRow:s,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return(0,v.jsx)(A.m.div,(0,l.Z)({ref:n,__css:f},h))}));R.displayName="Grid";var F=r(2552),I=r(2884),Z=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function N(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,Z.Kn)(e)?Object.keys(e).reduce((function(r,a){return r[a]=n(e[a]),r}),{}):null!=e?n(e):null}var _=["columns","spacingX","spacingY","spacing","minChildWidth"],k=(0,C.G)((function(e,n){var r=e.columns,a=e.spacingX,t=e.spacingY,o=e.spacing,i=e.minChildWidth,s=(0,y.Z)(e,_),u=(0,F.F)(),c=i?function(e,n){return N(e,(function(e){var r,a=(0,I.LP)("sizes",e,"number"===typeof(r=e)?"".concat(r,"px"):r)(n);return null===e?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(i,u):N(r,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")}));return(0,v.jsx)(R,(0,l.Z)({ref:n,gap:o,columnGap:a,rowGap:t,templateColumns:c},s))}));k.displayName="SimpleGrid";var L=["icon","children","isRound","aria-label"],E=(0,C.G)((function(e,n){var r=e.icon,t=e.children,o=e.isRound,i=e["aria-label"],s=(0,y.Z)(e,L),u=r||t,c=(0,a.isValidElement)(u)?(0,a.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return(0,v.jsx)(g.z,(0,l.Z)((0,l.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":i},s),{},{children:c}))}));E.displayName="IconButton";var q=r(4934),z=function(){var e=(0,t.v9)(j.Af),n=(0,t.v9)(j.AD),r=(0,t.v9)(m),o=(0,t.I0)();(0,a.useEffect)((function(){o((0,u.yF)())}),[o]);var i=Array.isArray(e)?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.phone.replace(/-|\s/g,"").includes(n.replace(/-|\s/g,""))})):[];return(0,v.jsx)(v.Fragment,{children:r?(0,v.jsx)(w.x,{children:"Loading..."}):(0,v.jsx)(k,{columns:5,spacing:10,overflow:"hidden",children:i.length>0?i.map((function(e){var n=e.id,r=e.name,a=e.phone;return(0,v.jsx)(p.xu,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:(0,v.jsxs)(p.xu,{p:"4",children:[(0,v.jsx)(E,{icon:(0,v.jsx)(q.P,{}),onClick:function(){return e=n,void o((0,u.GK)(e));var e}}),(0,v.jsx)(w.x,{children:r}),(0,v.jsx)(w.x,{children:a})]})},n)})):(0,v.jsx)(w.x,{children:"No contacts found"})})})},P=function(){var e=(0,t.I0)(),n=(0,t.v9)(d);return(0,v.jsxs)(h.NI,{id:"filter",mb:"5",children:[(0,v.jsx)(f.l,{children:"Search list:"}),(0,v.jsx)(x.I,{type:"search",name:"filter",value:n,onChange:function(n){e((0,j.Tv)(n.target.value))},placeholder:"Find contacts by name or phone number",required:!0})]})},S=function(){var e=(0,t.I0)(),n=(0,t.v9)(m);return(0,a.useEffect)((function(){e((0,u.yF)())}),[e]),(0,v.jsxs)("div",{children:[(0,v.jsx)(o.q,{children:(0,v.jsx)("h1",{children:"Phonebook"})}),(0,v.jsx)(b,{}),(0,v.jsx)("div",{children:n&&"Request in progress..."}),n?null:(0,v.jsx)(P,{}),(0,v.jsx)(z,{})]})}}}]);
//# sourceMappingURL=267.0cc40806.chunk.js.map