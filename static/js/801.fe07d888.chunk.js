"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[801],{3801:function(t,n,e){e.r(n);var r,a,c=e(8152),u=e(168),i=e(2791),o=e(4697),s=e(6871),p=e(3504),f=e(6444),h=e(184),l=f.ZP.button(r||(r=(0,u.Z)(["\npadding: 8px 16px;\nborder-radius: 4px;\ntext-decoration: none;\ncolor: teal;\nfont-weight: 500;\n"]))),d=f.ZP.input(a||(a=(0,u.Z)(["\npadding: 8px 16px;\nborder-radius: 4px;\ntext-decoration: none;\ncolor: teal;\nfont-weight: 500;\n"])));n.default=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,i.useState)(""),u=(0,c.Z)(a,2),f=u[0],v=u[1],x=(0,s.TH)();return(0,i.useEffect)((function(){o.TP().then(r)}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Movies search"}),(0,h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.z1(f).then(r)},children:[(0,h.jsx)(d,{onChange:function(t){var n=t.target.value.toLowerCase();v(n)},value:f,placeholder:"Search for movies"}),(0,h.jsx)(l,{type:"submit",children:"Search"}),(0,h.jsx)("ul",{children:e&&e.map((function(t){var n=t.id,e=t.original_title;return(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"/movies/".concat(n),state:{from:x.pathname},children:e})},n)}))})]}),(0,h.jsx)(s.j3,{})]})}},4697:function(t,n,e){e.d(n,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return l},Pg:function(){return v},TP:function(){return w},z1:function(){return g}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="171aaca622cd75e6df5a814c1d33ccb1";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,console.log("getReviews: ",e.data.results),t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?&query=".concat(n,"&api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=801.fe07d888.chunk.js.map