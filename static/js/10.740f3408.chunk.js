"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[10],{10:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a,c=t(8152),i=t(168),u=t(2791),s=t(6871),o=t(4697),p=t(3504),d=t(6444),l=t(184),f=d.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),h=d.ZP.button(a||(a=(0,i.Z)(["\npadding: 8px 16px;\nborder-radius: 4px;\ntext-decoration: none;\ncolor: teal;\nfont-weight: 500;\n"]))),v=function(){var n,e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,s.UO)().movieId;return(0,u.useEffect)((function(){o.Pg(a).then(r)}),[a]),t}(),d=(0,s.UO)().movieId,v=(0,s.s0)(),x=(0,s.TH)();return console.log("movies: ",r),(0,u.useEffect)((function(){o.Pg(d).then(a)}),[d]),(0,l.jsxs)(f,{children:[(0,l.jsx)(h,{onClick:function(){var n,e;return v(null!==(n=null===x||void 0===x||null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"Go Back"}),(0,l.jsx)("section",{children:i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:i.original_title}),(0,l.jsxs)("p",{children:["User score ",i.vote_average]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:i.overview}),(0,l.jsx)("h3",{children:"Genres"}),null===(n=i.genres)||void 0===n?void 0:n.map((function(n){var e=n.id,t=n.name;return(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:t})},e)}))]})}),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{children:"Additional information"}),(0,l.jsx)(p.rU,{to:"cast",children:"Cast"})," ",(0,l.jsx)("br",{}),(0,l.jsx)(p.rU,{to:"reviews",children:"Reviews"}),(0,l.jsx)(u.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading subpage..."}),children:(0,l.jsx)(s.j3,{})})]})]})}},4697:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return d},Jh:function(){return f},Pg:function(){return v},TP:function(){return w},z1:function(){return g}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),u=t.n(i),s="171aaca622cd75e6df5a814c1d33ccb1";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,console.log("getReviews: ",t.data.results),n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?&query=".concat(e,"&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=10.740f3408.chunk.js.map