(this.webpackJsonpcanopy=this.webpackJsonpcanopy||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(7),r=t.n(i),s=(t(39),t(40),t(6)),c=t(1);var l=function(e){return Object(c.jsx)("option",{name:e.name,value:e.value,children:e.name})};var o=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("a",{className:"btn btn-link float-right ml-auto mr-3 mb-2","data-toggle":"collapse",href:"#collapsedControls","aria-expanded":"false","aria-controls":"collapseExample",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-gear-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})})})}),Object(c.jsx)("div",{className:"collapse",id:"collapsedControls",children:Object(c.jsxs)("div",{className:"form-row",children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{className:"sr-only",htmlFor:"inlineFormInputName2",children:"Search"}),Object(c.jsx)("input",{type:"text",className:"form-control mb-2",id:"inlineFormInputName2",placeholder:"Search the table",onChange:e.searchTerm,ref:e.forwardedRef})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{className:"sr-only",htmlFor:"nameFilter",children:"Filter by Name:"}),Object(c.jsxs)("select",{className:"form-control form-select-sm",id:"nameFilter",name:"full_name","aria-label":".form-select-sm example",onChange:e.onChange,children:[Object(c.jsx)("option",{defaultValue:!0,children:"Select Name"}),e.names.map((function(e,a){return Object(c.jsx)(l,{name:e},a)}))]})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{className:"sr-only",htmlFor:"roleFilter",children:"Filter by Role:"}),Object(c.jsxs)("select",{className:"form-control form-select-sm mb-2 mr-4",id:"roleFilter",name:"title","aria-label":".form-select-sm example",onChange:e.onChange,children:[Object(c.jsx)("option",{defaultValue:!0,children:"Select Role"}),e.roles.map((function(e,a){return Object(c.jsx)(l,{name:e},a)}))]})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{className:"sr-only",htmlFor:"stateFilter",children:"Filter by State:"}),Object(c.jsx)("select",{className:"form-control form-select-sm mb-2",id:"stateFilter",name:"state","aria-label":".form-select-sm example",onChange:e.onChange,children:e.stateList.map((function(e){return Object(c.jsx)(l,{value:e.name,name:e.name},e.abbreviation)}))})]}),Object(c.jsx)("button",{className:"btn btn-link float-right","data-testid":"openFilter",onClick:e.clearFilter,children:"Clear filters"})]})})]})};t(42);var b=function(){return Object(c.jsx)("div",{className:"jumbotron mb-1",children:Object(c.jsx)("h1",{children:Object(c.jsx)("a",{href:"/",children:"Welcome to Canopy"})})})},m=t(31),d=t.n(m),j={getEmployees:function(e){return d.a.get("".concat("./employees.json")).then((function(e){return e.data.map((function(e){return{id:e.id,first_name:e.first_name,last_name:e.last_name,full_name:"".concat(e.first_name," ").concat(e.last_name),email:e.email,title:e.employment.title,city:e.address.city,state:e.address.state,country:e.address.country,username:e.username,phone_number:e.phone_number,subscription:{plan:e.subscription.plan,status:e.subscription.status,term:e.subscription.term}}}))}))}},u=t(32),h=function(e,a){var t=Object(n.useState)(e),i=Object(s.a)(t,2),r=i[0],c=i[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){c(e)}),a);return function(){clearTimeout(t)}}),[e,a]),r},v=t(33),O=t.n(v);var x=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(""),l=Object(s.a)(r,2),m=l[0],d=l[1],v=Object(n.useState)(""),x=Object(s.a)(v,2),f=x[0],p=x[1],N=Object(n.useState)(""),g=Object(s.a)(N,2),C=g[0],F=g[1],y=Object(n.useState)([]),S=Object(s.a)(y,2),w=S[0],M=S[1],I=Object(n.useState)([]),A=Object(s.a)(I,2),D=A[0],R=A[1],T=Object(n.useState)([]),k=Object(s.a)(T,2),E=k[0],_=k[1],L=h(C,500),V=Object(n.useRef)();Object(n.useEffect)((function(){j.getEmployees().then((function(e){i(m?e.filter((function(e){return e[m]===f})):L?e.filter((function(e){return JSON.stringify(e).includes(L)})):e),M(e.map((function(e){return e.title}))),R(e.map((function(e){return e.full_name}))),_(u.map((function(e){return e})))})).catch((function(e){return console.log(e)}))}),[m,f,L]);var P={renderer:function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col text-left",children:[Object(c.jsx)("h4",{children:"Employee Details"}),Object(c.jsxs)("dl",{children:[Object(c.jsx)("dt",{children:"Email"}),Object(c.jsx)("dd",{children:e.email}),Object(c.jsx)("dt",{children:"Username"}),Object(c.jsx)("dd",{children:e.username}),Object(c.jsx)("dt",{children:"Phone"}),Object(c.jsx)("dd",{children:e.phone_number}),Object(c.jsx)("dt",{children:"Location"}),Object(c.jsxs)("dd",{children:[e.city,", ",e.state]})]})]}),Object(c.jsxs)("div",{className:"col text-left",children:[Object(c.jsx)("h4",{children:"Employee Status"}),Object(c.jsxs)("dl",{children:[Object(c.jsx)("dt",{children:"Plan"}),Object(c.jsx)("dd",{children:e.subscription.plan}),Object(c.jsx)("dt",{children:"Status"}),Object(c.jsx)("dd",{children:e.subscription.status}),Object(c.jsx)("dt",{children:"Term"}),Object(c.jsx)("dd",{children:e.subscription.term})]})]})]})})})},showExpandColumn:!0,expandHeaderColumnRenderer:function(e){return e.isAnyExpands?Object(c.jsx)("b",{children:"-"}):Object(c.jsx)("b",{children:"+"})},expandColumnRenderer:function(e){return e.expanded?Object(c.jsx)("b",{children:"-"}):Object(c.jsx)("b",{children:"+"})}};return Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(b,{}),Object(c.jsx)(o,{names:D,roles:w,onChange:function(e){e.preventDefault();var a=e.target.name,t=e.target.value;d(a),p(t)},clearFilter:function(e){e.preventDefault(),d(""),F(""),R([]),M([]),_([]),V.current.value=""},searchTerm:function(e){e.preventDefault(),F(e.target.value)},forwardedRef:V,stateList:E}),Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsx)(O.a,{keyField:"id",columns:[{dataField:"id",text:"ID"},{dataField:"first_name",text:"First Name",sort:!0},{dataField:"last_name",text:"Last Name",sort:!0},{dataField:"title",text:"Role",sort:!0},{dataField:"state",text:"State",sort:!0}],data:t,bootstrap4:!0,hover:!0,condensed:!0,bordered:!0,classes:"table text-monospace",expandRow:P})})]})};var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x,{})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,106)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),i(e),r(e),s(e)}))};t(100),t(101),t(103);r.a.render(Object(c.jsx)(f,{}),document.getElementById("root")),p()},32:function(e){e.exports=JSON.parse('[{"name":"Select State","abbreviation":"--"},{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District Of Columbia","abbreviation":"DC"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Guam","abbreviation":"GU"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Palau","abbreviation":"PW"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virgin Islands","abbreviation":"VI"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]')},39:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.108e9960.chunk.js.map