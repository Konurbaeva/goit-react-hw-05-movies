"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[801],{3801:function(t,e,n){n.r(e);var r=n(8152),a=n(2791),u=n(4697),c=n(6871),s=n(3504),i=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],p=(0,a.useState)(""),f=(0,r.Z)(p,2),h=f[0],l=f[1],v=(0,c.TH)();return(0,a.useEffect)((function(){u.TP().then(o)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Movies search"}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.z1(h).then(o)},children:[(0,i.jsx)("input",{onChange:function(t){var e=t.target.value.toLowerCase();l(e)},value:h,placeholder:"Search for movies"}),(0,i.jsx)("button",{type:"submit",children:"Search"}),(0,i.jsx)("ul",{children:n&&n.map((function(t){var e=t.id,n=t.original_title;return(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"/movies/".concat(e),state:{from:v.pathname},children:n})},e)}))})]}),(0,i.jsx)(c.j3,{})]})}},4697:function(t,e,n){n.d(e,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return l},Pg:function(){return d},TP:function(){return y},z1:function(){return m}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s=n.n(c),i="171aaca622cd75e6df5a814c1d33ccb1";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,console.log("getReviews: ",n.data.results),t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?&query=".concat(e,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=801.1271cf53.chunk.js.map