(this.webpackJsonpomnisync=this.webpackJsonpomnisync||[]).push([[0],{68:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(10),s=n.n(i),o=n(14),l=n.n(o),j=n(15),d=n(23),u=n(20),b=n(25),m=n(26),O=n(24),h=n.n(O),f=n(11),x=n(41),p=n(13),v=n(12),g=n(27),_=function(e){var t=e.data,n=e.clickHandler,c=t.solicitation_title,r=t.solicitation_number,i=t.solicitation_agency_url,s=t.open_date,o=t.close_date,l=t.agency,j=t.favorite,d=c;return Object(a.jsxs)(f.a,{className:"grant-card",children:[Object(a.jsx)(f.a.Header,{children:Object(a.jsx)("h5",{className:"grant-card-title",children:d})}),Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)(f.a.Title,{children:r?r.trim():"N/A"}),Object(a.jsx)(f.a.Subtitle,{className:"mb-2 text-muted",children:l}),Object(a.jsx)(v.a,{variant:"success",onClick:n,children:Object(a.jsxs)("div",{className:"button-container",children:[j?Object(a.jsx)(g.b,{className:"star-icon"}):Object(a.jsx)(g.a,{className:"star-icon"}),j?"Favorited!":"Add Favorite"]})}),i&&Object(a.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(v.a,{className:"ml-2",children:"Link"})})]}),Object(a.jsxs)(x.a,{className:"list-group-flush",children:[Object(a.jsxs)(p.a,{children:["Open Date: ",s]}),Object(a.jsxs)(p.a,{children:["Close Date: ",o]})]})]})},y=n(39),N=n(40),k=n(37),w=n(38),S=n.n(w);n(68);var C=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!0),s=Object(u.a)(i,2),o=s[0],O=s[1],f=Object(c.useState)(!1),x=Object(u.a)(f,2),p=x[0],g=x[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("/api/grants");case 2:t=e.sent,n=t.data,a=n.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{favorite:!1})})),r(a),O(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.favorite})).map((function(e){return{solicitation_title:e.solicitation_title,solicitation_number:e.solicitation_number}})),e.next=3,h.a.post("/api/download",{grants:t});case 3:a=e.sent,c=new Blob([JSON.stringify(a.data)],{type:"application/json",name:"grants.json"}),S()(c,"grants.json"),g(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=n.some((function(e){return e.favorite})),A=Object(k.chunk)(n,2);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m.a,{bg:"light",expand:"lg",children:Object(a.jsx)(b.a,{children:Object(a.jsx)(m.a.Brand,{href:"#home",children:"OmniSync"})})}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)("h2",{className:"my-3",children:"Grant Cards"}),Object(a.jsx)("h4",{className:"my-1",children:"Export Grants"}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)(v.a,{disabled:!C,variant:C?"primary":"secondary",onClick:w,children:"Export"}),p&&Object(a.jsx)("p",{className:"my-1",style:{color:"green"},children:"Downloaded!"})]}),o&&Object(a.jsx)("p",{children:"Loading..."}),!o&&A.map((function(e,t){return Object(a.jsx)(y.a,{className:"row-size",children:e.map((function(e){var t="".concat(e.solicitation_number?"0":e.solicitation_number).concat(e.solicitation_title).split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0);return Object(a.jsx)(N.a,{md:6,className:"d-flex align-items-stretch cell-size",children:Object(a.jsx)(_,{data:e,clickHandler:function(){return t=e.solicitation_number,n=e.solicitation_title,r((function(e){return e.map((function(e){return e.solicitation_number===t&&e.solicitation_title===n?Object(j.a)(Object(j.a)({},e),{},{favorite:!e.favorite}):e}))})),void g(!1);var t,n}})},t)}))},t)}))]})]})};n(72);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.52e889d6.chunk.js.map