"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[9],{9:function(t,n,e){e.r(n),e.d(n,{default:function(){return i}});var r=e(8152),a=e(2791),c=e(6871),u=e(4697),s=e(184),i=function(){var t,n=(0,a.useState)([]),e=(0,r.Z)(n,2),i=e[0],o=e[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.IQ(p).then(o)}),[p]),(0,s.jsxs)("main",{style:{padding:"1rem 0"},children:[(0,s.jsx)("h2",{children:"Cast"}),null===(t=i.cast)||void 0===t?void 0:t.map((function(t){return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t.profile_path,alt:t.profile_path}),(0,s.jsxs)("p",{children:["Name: ",t.name]}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))]})}},4697:function(t,n,e){e.d(n,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return d},Pg:function(){return v},TP:function(){return w},z1:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),i="171aaca622cd75e6df5a814c1d33ccb1";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,console.log("getReviews: ",e.data.results),t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?&query=".concat(n,"&api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=9.7933e776.chunk.js.map