"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e,u,a,c=r(439),s=r(791),i=r(689),o=r(409),f=r(168),p=r(444),v=p.ZP.li(e||(e=(0,f.Z)(["\n  margin-bottom: 32px;\n"]))),h=p.ZP.p(u||(u=(0,f.Z)(["\n  margin-top: 8px;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),d=p.ZP.p(a||(a=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n"]))),l=r(184),x=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],u=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,o.tx)(u).then(e).catch((function(n){return console.log(n)}))}),[u]),0===r.length?"Reviews not found":(0,l.jsx)("ul",{children:r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,l.jsxs)(v,{children:[(0,l.jsxs)(d,{children:["Author: ",r]}),(0,l.jsx)(h,{children:e})]},t)}))})}},409:function(n,t,r){r.d(t,{M1:function(){return f},TP:function(){return o},qF:function(){return i},rj:function(){return s},tx:function(){return p}});var e=r(861),u=r(757),a=r.n(u),c=r(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"b5a03c9c22834b154e98ac5d4da200a5",language:"en-US"};var s=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.bb0ae248.chunk.js.map