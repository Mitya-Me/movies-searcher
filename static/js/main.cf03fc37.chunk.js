(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(4),n=c.n(s),i=(c(9),c(0)),r=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("span",{className:"header__title",children:"Welcome to Movie Land:"})})},l=(c(11),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("div",{className:"footer__content",children:Object(i.jsx)("span",{className:"footer__text",children:'\xa9 2020-2021 "Movies land Corparation"'})})})}),o=c(2),j=(c(12),function(e){var t=e.searchMovies,c=void 0===t?Function.prototype:t,s=Object(a.useState)(""),n=Object(o.a)(s,2),r=n[0],l=n[1],j=Object(a.useState)("all"),d=Object(o.a)(j,2),b=d[0],u=d[1],m=function(e){u(e.target.dataset.cat),c(r,e.target.dataset.cat)};return Object(i.jsxs)("div",{className:"search-panel",children:[Object(i.jsxs)("div",{className:"search-panel__input",children:[Object(i.jsx)("input",{onChange:function(e){return l(e.target.value)},value:r,type:"search",onKeyDown:function(e){"Enter"===e.key&&c(r,b)}}),Object(i.jsx)("button",{onClick:function(){return c(r,b)},className:"search-panel__magnifier"}),Object(i.jsx)("button",{className:"search-panel__sort"})]}),Object(i.jsx)("div",{className:"search-panel__sortlist sortlist ",children:Object(i.jsxs)("div",{className:"sortlist__category",children:[Object(i.jsxs)("div",{className:"radio",children:[Object(i.jsx)("input",{onChange:m,id:"radio-3",name:"type",type:"radio","data-cat":"all",checked:"all"===b}),Object(i.jsx)("label",{for:"radio-3",className:"radio-label",children:"All"})]}),Object(i.jsxs)("div",{className:"radio",children:[Object(i.jsx)("input",{onChange:m,id:"radio-1",name:"type",type:"radio","data-cat":"movie",checked:"movie"===b}),Object(i.jsx)("label",{for:"radio-1",className:"radio-label",children:"Movie"})]}),Object(i.jsxs)("div",{className:"radio",children:[Object(i.jsx)("input",{onChange:m,id:"radio-2",name:"type",type:"radio","data-cat":"series",checked:"series"===b}),Object(i.jsx)("label",{for:"radio-2",className:"radio-label",children:"Series"})]})]})})]})}),d=(c(13),function(e){var t=e.title,c=e.year,a=e.type,s=e.poster;return Object(i.jsxs)("div",{className:"filmcard",children:[Object(i.jsx)("div",{className:"filmcard__img",children:"N/A"===s?Object(i.jsx)("img",{src:"https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png",alt:""}):Object(i.jsx)("img",{src:s,alt:""})}),Object(i.jsxs)("div",{className:"filmcard__title",children:[Object(i.jsx)("p",{className:"filmcard__title-name",children:t}),Object(i.jsx)("p",{className:"filmcard__title-year",children:a}),Object(i.jsx)("p",{className:"filmcard__title-type",children:c})]})]})}),b=(c(14),function(){return Object(i.jsx)("div",{className:"no-result-message",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"no-result-message__one",children:"Sorry "}),Object(i.jsx)("span",{className:"no-result-message__two",children:"but no results "}),Object(i.jsx)("span",{className:"no-result-message__three",children:"were found for your search."})]})})}),u=(c(15),function(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"filmslist",children:c.length?c.map((function(e){return Object(i.jsx)(d,{title:e.Title,year:e.Year,id:e.imdbID,type:e.Type,poster:e.Poster},e.imdbID)})):Object(i.jsx)(b,{})})}),m=(c(16),function(){return Object(i.jsx)("div",{className:"loader"})}),h=(c(17),"dc7a392c"),O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(o.a)(n,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat(h,"&s=black")).then((function(e){return e.json()})).then((function(e){s(e.Search),d(!1)})).catch((function(e){console.error(e),d(!1)}))}),[]),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)(j,{searchMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";d(!0),fetch("https://www.omdbapi.com/?apikey=".concat(h,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){s(e.Search),d(!1)})).catch((function(e){console.error(e),d(!1)}))}}),Object(i.jsx)("div",{className:"container",children:l?Object(i.jsx)(m,{}):Object(i.jsx)(u,{movies:c})})]})};var f=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(r,{}),Object(i.jsx)(O,{}),Object(i.jsx)(l,{})]})};c(18);n.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.cf03fc37.chunk.js.map