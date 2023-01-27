"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[827],{827:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,s,l,c,a,d,u=t(439),h=t(791),x=t(817),p=t(17),f=t(689),v=t(168),g=t(87),j=t(444),m=j.ZP.div(r||(r=(0,v.Z)(["\n  padding: 24px;\n  max-width: 1248px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=j.ZP.button(i||(i=(0,v.Z)(["\n  border: none;\n  background-color: transparent;\n  margin: 16px;\n  padding: 4px;\n\n  color: #020930;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 700;\n\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    color: #f74f07;\n  }\n"]))),b=j.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n"]))),w=j.ZP.div(s||(s=(0,v.Z)(["\n  padding: 16px;\n  margin-top: 16px;\n  border-top: 1px solid #020930;\n  border-bottom: 1px solid #020930;\n"]))),k=j.ZP.ul(l||(l=(0,v.Z)(["\n  display: flex;\n  gap: 8px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),_=(0,j.ZP)(g.NavLink)(c||(c=(0,v.Z)(["\n  text-decoration: none;\n  color: #020930;\n\n  &.active {\n    color: #f74f07;\n  }\n\n  :hover {\n    color: #f74f07;\n    text-decoration: underline;\n  }\n"]))),P=j.ZP.div(a||(a=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),C=j.ZP.div(d||(d=(0,v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),y=t(184),S=function(n){var e,t=n.src,r=n.onClose;return(0,y.jsx)(P,{onClick:r,children:(0,y.jsx)(C,{children:(0,y.jsx)("iframe",{title:t,src:(e=t,"https://www.youtube.com/embed/".concat(e)),width:"560",height:"315",frameBorder:"0"})})})},G=function(){var n=(0,h.useState)(!1),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=function(){var n=(0,f.UO)().movieId,e=(0,h.useState)(null),t=(0,u.Z)(e,2),r=t[0],i=t[1],o=(0,h.useState)(null),s=(0,u.Z)(o,2),l=s[0],c=s[1];return(0,h.useEffect)((function(){(0,p.Pg)(n).then(i).catch((function(n){return console.error(n)})),(0,p.Jc)(n).then(c).catch((function(n){return console.error(n)}))}),[n]),{movie:r,trailer:l}}(),o=i.movie,s=i.trailer,l=(0,f.s0)(),c=(0,f.TH)(),a=function(){r((function(n){return!n}))};return(0,y.jsxs)(m,{children:[(0,y.jsx)(Z,{type:"button",onClick:function(){var n,e;return l(null!==(n=null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:"\u21d0 Go back"}),o&&(0,y.jsxs)(b,{children:[(0,y.jsx)("img",{src:(0,x.R)(300,o.poster_path),alt:o.title}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:o.title}),(0,y.jsxs)("p",{children:["User score: ",Math.round(10*o.vote_average)+"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:o.overview}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)("p",{children:o.genres.map((function(n){return n.name})).join(", ")}),s&&(0,y.jsx)(Z,{type:"button",onClick:a,children:"Trailer"})]})]}),(0,y.jsxs)(w,{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)(k,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(_,{to:"cast",state:c.state,children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(_,{to:"reviews",state:c.state,children:"Reviews"})})]})]}),t&&(0,y.jsx)(S,{src:s.key,onClose:a}),(0,y.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=827.14c2bd23.chunk.js.map