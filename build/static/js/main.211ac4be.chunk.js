(this["webpackJsonpbook-app"]=this["webpackJsonpbook-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./Adventure.svg":15,"./Back.svg":16,"./Cancel.svg":17,"./Drama.svg":18,"./Fiction.svg":19,"./History.svg":20,"./Humour.svg":21,"./Next.svg":22,"./Pattern.svg":23,"./Philosophy.svg":24,"./Politics.svg":25,"./Search.svg":26,"./loader_animated.svg":27,"./loader_static.svg":28,"./logo.svg":29};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=14},function(e,t,n){e.exports=n.p+"static/media/Adventure.4a39962b.svg"},function(e,t,n){e.exports=n.p+"static/media/Back.650ced74.svg"},function(e,t,n){e.exports=n.p+"static/media/Cancel.f737ae03.svg"},function(e,t,n){e.exports=n.p+"static/media/Drama.ffe5b261.svg"},function(e,t,n){e.exports=n.p+"static/media/Fiction.fb8af270.svg"},function(e,t,n){e.exports=n.p+"static/media/History.0689e2d1.svg"},function(e,t,n){e.exports=n.p+"static/media/Humour.5218701c.svg"},function(e,t,n){e.exports=n.p+"static/media/Next.aa84e274.svg"},function(e,t,n){e.exports=n.p+"static/media/Pattern.10f528b0.svg"},function(e,t,n){e.exports=n.p+"static/media/Philosophy.faf4e2b3.svg"},function(e,t,n){e.exports=n.p+"static/media/Politics.bb1d3832.svg"},function(e,t,n){e.exports=n.p+"static/media/Search.8492e7a8.svg"},function(e,t,n){e.exports=n.p+"static/media/loader_animated.34f67de5.svg"},function(e,t,n){e.exports=n.p+"static/media/loader_static.090df0dc.svg"},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(11),n(2)),i=n(1),s=[],u={Fiction:"Fiction",Philosophy:"Philosophy",Drama:"Drama",History:"History",Humour:"Humour",Adventure:"Adventure",Politics:"Politics"},f=[{info:{value:"text/html",extension:["htm"],meta:"HTML"}},{info:{value:"application/pdf",extension:["pdf"],meta:"PDF"}},{info:{value:"text/plain",extension:["txt"],meta:"TEXT"}}];function m(e){switch(typeof e){case"undefined":return!0;case"boolean":return!e;case"number":return 0===e;case"string":return""===e;case"object":return Array.isArray(e)?0===e.length:null===e||0===Object.keys(e);default:return!1}}var v=n(5);n(12);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createElement("title",null,"Icon/Next@2x"),h=r.a.createElement("desc",null,"Created with Sketch."),b=r.a.createElement("g",{id:"Icon/Next",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M9.34294737,-1.77635684e-15 L18.1578947,8.81621053 L9.34294737,17.6323579 L7.50003158,15.7894421 L13.159,10.131 L-8.8817842e-15,10.1310947 L-8.8817842e-15,7.49993684 L13.157,7.499 L7.50003158,1.84291579 L9.34294737,-1.77635684e-15 Z",id:"Next",fill:"#5E56E7",fillRule:"nonzero"})),E=function(e){var t=e.svgRef,n=e.title,a=g(e,["svgRef","title"]);return r.a.createElement("svg",d({width:"19px",height:"18px",viewBox:"0 0 19 18",ref:t},a),void 0===n?p:n?r.a.createElement("title",null,n):null,h,b)},y=r.a.forwardRef((function(e,t){return r.a.createElement(E,d({svgRef:t},e))})),O=(n.p,n(13),function(e){var t=e.fileName;return r.a.createElement("img",{src:n(14)("./".concat(t,".svg")),alt:""})}),x=function(e){var t=e.genreName,n=void 0===t?"Fiction":t,a=e.changeCategory;return r.a.createElement("div",{className:"genre-card row",onClick:function(e){e.preventDefault(),a(n)}},r.a.createElement("div",{className:"col-lg-1 col-sm-1 col-xs-1 genre-icon"},r.a.createElement(O,{fileName:n})),r.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-6 col-xs-pull-1 col-sm-pull-1 col-lg-pull-1 genre-text"},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"col-lg-1 col-sm-1 col-xs-1 genre-next-icon"},r.a.createElement(y,null)))},w=(n(30),function(e){var t=!1,n=Object.keys(u).map((function(n){return t=!t,r.a.createElement("div",{key:n,className:"col-lg-5 col-sm-5 col-xs-12 display-col ".concat(t&&"havePadding")},r.a.createElement(x,Object.assign({genreName:n},e)))}));return r.a.createElement("div",{className:"row display-row"},n)}),j=function(){return r.a.createElement("p",{className:"reference-text"},"A social cataloging website that allows you to freely search its database of books, annotations and reviews.")};var k=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(j,null),r.a.createElement(w,e))};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=r.a.createElement("circle",{cx:50,cy:50,fill:"none",stroke:"#5e56e7",strokeWidth:2,r:28,strokeDasharray:"131.94689145077132 45.982297150257104",transform:"rotate(241.701 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"0.5464480874316939s",values:"0 50 50;360 50 50",keyTimes:"0;1"})),S=function(e){var t=e.svgRef,n=e.title,a=N(e,["svgRef","title"]);return r.a.createElement("svg",C({style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"144px",height:"144px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t},a),n?r.a.createElement("title",null,n):null,L)},R=r.a.forwardRef((function(e,t){return r.a.createElement(S,C({svgRef:t},e))})),P=(n.p,function(e){return r.a.createElement("div",{className:"loader"},r.a.createElement(R,null),e.children)}),A=(n(31),function(e){var t=function(e){try{var t=!0,n=!1,a=void 0;try{for(var r,o=function(){var t=r.value,n=Object.keys(e).filter((function(e){return e.includes(t.info.value)})),a=n&&n.find((function(n){return t.info.extension.includes(e[n].split(".").slice(-1)[0])}));return a?{v:e[a]}:"continue"},c=f[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var l=o();switch(l){case"continue":continue;default:if("object"===typeof l)return l.v}}}catch(i){n=!0,a=i}finally{try{t||null==c.return||c.return()}finally{if(n)throw a}}}catch(s){return console.log("some error occured ",s),"/"}}(e);window.open(t)}),I=function(e){var t=e.image,n=e.author,a=e.title,o=e.formats;return r.a.createElement("div",{className:"book-card",onClick:function(){return A(o)}},r.a.createElement("div",{className:"row book-card-image"},r.a.createElement("img",{src:t,alt:"book"})),r.a.createElement("div",{className:"row book-card-title"},a),r.a.createElement("div",{className:"row book-card-author"},n))},B=(n(32),function(e){var t=e.books,n=void 0===t?[]:t,a=e.loading,o=void 0!==a&&a,c=n.map((function(e){return r.a.createElement("div",{className:"col col-lg-2 col-sm-3 col-xs-4 book-col",key:e.id},r.a.createElement(I,{formats:e.formats,image:e.formats&&e.formats["image/jpeg"],author:e.authors&&e.authors[0]&&e.authors[0].name,title:e.title}))}));return r.a.createElement("div",{className:"row book-row ".concat(o&&"show-loading")},c,o&&r.a.createElement(P,null),!o&&0===n.length&&"No results found, please change the search criteria")}),D=function(e){return r.a.createElement("div",{className:"text-header"},r.a.createElement("nav",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Gutenberg Project"))))};n(33);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var F=r.a.createElement("title",null,"Icon/Search@2x"),M=r.a.createElement("desc",null,"Created with Sketch."),T=r.a.createElement("g",{id:"Icon/Search",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M15.8589788,15.047134 L12.6068598,11.8220218 C15.0321838,9.01138186 14.8943938,4.76662381 12.2214887,2.09377383 C10.843589,0.688949888 8.99747885,-5.32907052e-15 7.17809999,-5.32907052e-15 C5.35872112,-5.32907052e-15 3.512611,0.688949888 2.10797997,2.09484859 C-0.702659991,4.90548855 -0.702659991,9.42582655 2.10797997,12.2364665 C3.48587975,13.6132915 5.33198987,14.3302403 7.17809999,14.3302403 C8.83157972,14.3302403 10.5131686,13.7510815 11.8348501,12.5938662 L15.0869691,15.8459852 C15.1698581,15.9288742 15.307648,15.9837752 15.4454435,15.9837752 C15.583239,15.9837752 15.7210235,15.9288742 15.8308145,15.8179973 C16.0514935,15.6253063 16.0514935,15.2668374 15.8588024,15.0472277 L15.8589788,15.047134 Z M2.87861176,11.4364855 C1.72139641,10.3061667 1.11534097,8.76358036 1.11534097,7.16499616 C1.11534097,5.56641196 1.74939533,4.02393583 2.87861176,2.8653977 C4.03690187,1.70818235 5.55259162,1.10212691 7.17821022,1.10212691 C8.80382882,1.10212691 10.3192705,1.73618128 11.4778087,2.8653977 C12.6070527,4.02368781 13.2410795,5.53937756 13.2410795,7.16499616 C13.2410795,8.79061476 12.6070251,10.3060565 11.4778087,11.4645946 C10.3195186,12.5938386 8.77690466,13.2278654 7.17821022,13.2278654 C5.57951578,13.2278654 4.03714989,12.593811 2.87861176,11.4365957 L2.87861176,11.4364855 Z",id:"Search",fill:"#A0A0A0",fillRule:"nonzero"})),W=function(e){var t=e.svgRef,n=e.title,a=V(e,["svgRef","title"]);return r.a.createElement("svg",H({width:"16px",height:"16px",viewBox:"0 0 16 16",ref:t},a),void 0===n?F:n?r.a.createElement("title",null,n):null,M,T)},_=r.a.forwardRef((function(e,t){return r.a.createElement(W,H({svgRef:t},e))}));n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var U=r.a.createElement("title",null,"Icon/Cancel@2x"),J=r.a.createElement("desc",null,"Created with Sketch."),G=r.a.createElement("g",{id:"Icon/Cancel",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M11.7492697,0.25073035 C11.4149625,-0.0835767832 10.8733743,-0.0835767832 10.5390885,0.25073035 L6,4.78981888 L1.46091147,0.25073035 C1.12660434,-0.0835767832 0.585016087,-0.0835767832 0.25073035,0.25073035 C-0.0835553876,0.585037483 -0.0835767832,1.12662574 0.25073035,1.46091147 L4.78981888,6 L0.25073035,10.5390885 C-0.0835767832,10.8733957 -0.0835767832,11.4149839 0.25073035,11.7492697 C0.585037483,12.0835554 1.12662574,12.0835768 1.46091147,11.7492697 L6,7.21018112 L10.5390885,11.7492697 C10.8733957,12.0835768 11.4149839,12.0835768 11.7492697,11.7492697 C12.0835554,11.4149625 12.0835768,10.8733743 11.7492697,10.5390885 L7.21018112,6 L11.7492697,1.46091147 C12.0835768,1.12660434 12.0835768,0.585016087 11.7492697,0.25073035 Z",id:"Cancel",fill:"#A0A0A0",fillRule:"nonzero"})),X=function(e){var t=e.svgRef,n=e.title,a=z(e,["svgRef","title"]);return r.a.createElement("svg",Z({width:"12px",height:"12px",viewBox:"0 0 12 12",ref:t},a),void 0===n?U:n?r.a.createElement("title",null,n):null,J,G)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(X,Z({svgRef:t},e))})),$=(n.p,function(e){var t=e.name,n=void 0===t?"searchVal":t,o=e.placeHolder,c=void 0===o?"Search":o,l=e.searchVal,s=e.changeSearchVal,u=Object(a.useState)(!1),f=Object(i.a)(u,2),v=f[0],d=f[1],g=Object(a.useState)(l),p=Object(i.a)(g,2),h=p[0],b=p[1],E=Object(a.useState)(r.a.createRef()),y=Object(i.a)(E,1)[0];return r.a.createElement("div",{className:"search-input row",onClick:function(e){e.preventDefault(),y.current.focus()}},r.a.createElement("div",{className:"col-lg-2 col-xs-2 col-sm-2 search-icon-col"},r.a.createElement(_,null)),r.a.createElement("div",{className:"col-lg-8 col-lg-pull-1 col-xs-8 col-xs-pull-1 col-sm-8 coll-sm-pull-1 input-field-col"},r.a.createElement("input",{ref:y,value:h,maxLength:32,className:"input-field",name:n,type:"text",placeholder:c,onChange:function(e){e.preventDefault(),b(e.target.value),s(e.target.value),m(e.target.value)?d(!1):d(!0)}})),v&&r.a.createElement("div",{className:"col-lg-2 col-sm-2 col-xs-2 clear-icon-col"},r.a.createElement(Y,{onClick:function(e){e.preventDefault(),b(""),s(""),d(!1)}})))});function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=r.a.createElement("title",null,"Icon/Back@2x"),ee=r.a.createElement("desc",null,"Created with Sketch."),te=r.a.createElement("g",{id:"Icon/Back",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("path",{d:"M12.3489391,-1.59872116e-14 L24,11.6527304 L12.3489391,23.3053774 L9.91308522,20.8695235 L17.393,13.39 L0,13.3906643 L0,9.91296 L17.391,9.912 L9.91308522,2.43585391 L12.3489391,-1.59872116e-14 Z",id:"Back",fill:"#5E56E7",fillRule:"nonzero",transform:"translate(12.000000, 11.652689) scale(-1, 1) translate(-12.000000, -11.652689) "})),ne=function(e){var t=e.svgRef,n=e.title,a=K(e,["svgRef","title"]);return r.a.createElement("svg",q({width:"24px",height:"24px",viewBox:"0 0 24 24",ref:t},a),void 0===n?Q:n?r.a.createElement("title",null,n):null,ee,te)},ae=r.a.forwardRef((function(e,t){return r.a.createElement(ne,q({svgRef:t},e))})),re=(n.p,n(34),function(e){var t=e.category,n=e.changeCategory,o=e.searchVal,c=e.changeSearchVal;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"section-navigation",onClick:function(){return function(e,t){e(""),t("")}(n,c)}},r.a.createElement("div",{className:"arrow"},r.a.createElement(ae,null)),r.a.createElement("span",{className:"section-header"},t)),r.a.createElement("div",{className:"row searchbar-row"},r.a.createElement("div",{className:"col-lg-12 col-sm-12 col-xs-12"},r.a.createElement($,{searchVal:o,changeSearchVal:c}))))}),oe=(n(35),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),f=u[0],d=u[1],g=Object(a.useState)(s),p=Object(i.a)(g,2),h=p[0],b=p[1],E=Object(a.useState)(""),y=Object(i.a)(E,2),O=y[0],x=y[1],w=Object(a.useState)(!1),j=Object(i.a)(w,2),C=j[0],N=j[1],L=Object(a.useState)(null),S=Object(i.a)(L,2),R=S[0],P=S[1],A=Object(a.useState)(!1),I=Object(i.a)(A,2),H=I[0],V=I[1],F=function(){0===h.length||h.length>0&&!m(O)?function(e,t){var n=new URLSearchParams(Object(v.a)({mime_type:"image/"},e)),a="".concat("http://skunkworks.ignitesol.com:8000/books/","?").concat(n);return t&&""!==t&&(a=t),fetch(a)}({topic:n,search:f},O).then((function(e){return e.json()})).then((function(e){var t=e.results,n=e.next;t&&b([].concat(Object(l.a)(h),Object(l.a)(t))),x(n||"")})).catch((function(e){console.log("some error occured ",e)})).finally((function(){V(!1)})):(V(!1),alert("No more books :( "))};Object(a.useEffect)((function(){n&&(R&&window.clearTimeout(R),V(!0),P(window.setTimeout((function(){F()}),1500)));var e=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&N(!C)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[f,n,C]);var M=k;return m(n)||(M=B),r.a.createElement("div",{className:"App"},n?r.a.createElement(re,{searchVal:f,changeSearchVal:function(e){d(e),x(""),b(s)},category:n,changeCategory:o}):r.a.createElement(D,null),r.a.createElement("div",{className:"container card"},r.a.createElement(M,{loading:H,category:n,books:h,changeCategory:o,searchVal:f})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.211ac4be.chunk.js.map