"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{348:function(t,e,n){n.d(e,{Z:function(){return i}});n(791);var r=n(731),a=n(689),c=n(470),u=n(317),s=n(184),i=function(t){var e=t.films,n=(0,a.TH)();return(0,s.jsx)("div",{children:e.map((function(t){var e=t.title,a=t.poster_path,i=t.name,o=t.id,p=(0,c.Gn)("/movies/:movieId",{movieId:o}),f=a?"https://image.tmdb.org/t/p/w500".concat(a):u;return(0,s.jsxs)(r.OL,{to:p,state:{from:n},children:[(0,s.jsx)("img",{src:f,alt:"poster of cinema",id:o}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)("h3",{children:e||i})})})]},o)}))})}},890:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(430),o=n(596),p=n(348),f=n(184),d=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1];return(0,s.useEffect)((function(){(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.bh)();case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o.Am.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(p.Z,{films:n})]})}},430:function(t,e,n){n.d(e,{L$:function(){return l},M4:function(){return v},bh:function(){return f},t:function(){return g}});var r=n(861),a=n(757),c=n.n(a),u=n(44),s="bdb1d61caa10ee3e96be08f98c1048db",i="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie";function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.ZP.defaults.params={api_key:s,language:"en-US"},t.prev=1,t.next=4,u.ZP.get("".concat(i));case 4:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.ZP.defaults.params={api_key:s,language:"en-US",query:"".concat(e)},t.prev=1,t.next=4,u.ZP.get("".concat(o));case 4:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.ZP.defaults.params={api_key:s,language:"en-US"},t.prev=1,t.next=4,u.ZP.get("".concat(p,"/").concat(e));case 4:return n=t.sent,r=n.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.ZP.defaults.params={api_key:s,language:"en-US"},t.prev=1,t.next=4,u.ZP.get("".concat(p,"/").concat(e,"/credits"));case 4:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}},317:function(t,e,n){t.exports=n.p+"static/media/def.673f0a600a2e10defbf3.jpg"}}]);
//# sourceMappingURL=890.1d8245ea.chunk.js.map