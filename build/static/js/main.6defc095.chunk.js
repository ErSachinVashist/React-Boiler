(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(236)},176:function(e,t,n){e.exports=n.p+"static/media/reactHome.1716baa0.png"},179:function(e,t,n){e.exports=n.p+"static/media/profile.e614ca16.jpg"},234:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),i=n.n(r),c=n(55),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=n(107),h=n(31),m=Object(h.c)({},{ChangeAuthor:function(e,t){return t.payload}}),d=n(16),p=Object(d.combineReducers)({AuthorReducer:m}),b=function(e,t){return p(e,t)};var f,w=n(22),E=n(23),g=n(25),v=n(24),j=n(26),O=n(20),k=n(66),y=n.n(k),C=n(67),M=n.n(C),S=(Object(O.createMuiTheme)({palette:{primary:{main:"#0277BD"},secondary:y.a,error:M.a},typography:{fontFamily:"'Niramit', sans-serif",useNextVariants:!0}}),n(238)),x=n(36),N=n.n(x),A=n(52),R=n.n(A),W=n(37),H=n.n(W),T=n(38),B=function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(N.a,{className:e.card},o.a.createElement(R.a,{className:e.cardMedia,image:n(176),title:"React "}),o.a.createElement(H.a,{className:e.cardHead,title:"Kick Start your Project!",subheader:"Start editing you app from ./src"}))}}]),t}(o.a.Component),D=Object(O.withStyles)(function(e){return{card:Object(T.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),cardMedia:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}})(B),P=n(103),_=Object(h.b)("ChangeAuthor"),L=function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.ChangeAuthor({name:"Sachin Vashist"})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.author;return o.a.createElement(N.a,{className:t.card},o.a.createElement(R.a,{className:t.media,image:n(179),title:a.name}),o.a.createElement(H.a,{className:t.cardHead,title:"Sachin Vashist",subheader:"Full Stack Developer"}))}}]),t}(o.a.Component),V=Object(P.a)(Object(O.withStyles)(function(e){return{card:Object(T.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),media:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}}),Object(c.b)(function(e){return{author:e.AuthorReducer}},{ChangeAuthor:function(e){return _(e)}}))(L),F=function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(N.a,{className:e.card},o.a.createElement(H.a,{className:e.cardHead,title:"404",subheader:"Page Not Found"}))}}]),t}(o.a.Component),G=Object(O.withStyles)(function(e){return{card:Object(T.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),media:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}})(F),z=(o.a.createElement(S.a,{key:"home",exact:!0,path:"/",component:D}),o.a.createElement(S.a,{key:"profile",path:"/profile",component:V}),o.a.createElement(S.a,{key:"notFound",component:G}),n(237)),U=n(53),J=n.n(U),q=n(54),K=n.n(q),$=n(27),I=n.n($),Q=n(68),X=n.n(Q),Y=n(45),Z=n.n(Y),ee=n(56),te=n.n(ee),ne=n(106),ae=n.n(ne),oe=n(28),re=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={mobileMoreAnchorEl:null},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(e){e&&window.open(e,"_blank"),n.setState({mobileMoreAnchorEl:null})},n}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state.mobileMoreAnchorEl,n=this.props.classes,a=Boolean(t),r=o.a.createElement(ae.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleMenuClose},o.a.createElement(te.a,{onClick:function(t){return e.handleMobileMenuClose("https://reactjs.org/docs/getting-started.html")}},o.a.createElement(I.a,{color:"inherit"},o.a.createElement(oe.b,null)),o.a.createElement("p",null,"React Docs")),o.a.createElement(te.a,{onClick:function(t){return e.handleMobileMenuClose("https://github.com/ErSachinVashist/React-boiler")}},o.a.createElement(I.a,{color:"inherit"},o.a.createElement(oe.d,null)),o.a.createElement("p",null,"Git Repo")),o.a.createElement(z.a,{className:n.linkStyle,to:"/profile"},o.a.createElement(te.a,{onClick:function(){return e.handleMobileMenuClose()}},o.a.createElement(I.a,{color:"inherit"},o.a.createElement(oe.g,null)),o.a.createElement("p",null,"Profile"))));return o.a.createElement("div",{className:n.root},o.a.createElement(J.a,{position:"static"},o.a.createElement(K.a,null,o.a.createElement(Z.a,{title:"Home",placement:"bottom"},o.a.createElement(z.a,{className:n.linkStyle,to:"/"},o.a.createElement(X.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"React-Boiler-Plate"))),o.a.createElement("div",{className:n.grow}),o.a.createElement("div",{className:n.sectionDesktop},o.a.createElement(Z.a,{title:"React Docs",placement:"bottom"},o.a.createElement(I.a,{color:"inherit",onClick:function(){return window.open("https://reactjs.org/docs/getting-started.html","_blank")}},o.a.createElement(oe.b,null))),o.a.createElement(Z.a,{title:"Git Repo",placement:"bottom"},o.a.createElement(I.a,{color:"inherit",onClick:function(){return window.open("https://github.com/ErSachinVashist/React-boiler","_blank")}},o.a.createElement(oe.d,null))),o.a.createElement(Z.a,{title:"Profile",placement:"bottom"},o.a.createElement(z.a,{className:n.linkStyle,to:"/profile"},o.a.createElement(I.a,{color:"inherit"},o.a.createElement(oe.g,null))))),o.a.createElement("div",{className:n.sectionMobile},o.a.createElement(I.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(oe.a,null))))),r)}}]),t}(o.a.Component),ie=(Object(O.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:{display:"block",color:"white"},linkStyle:{color:"white",textDecoration:"none"},sectionDesktop:Object(T.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(T.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(re),n(234),function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(J.a,{position:"static",classes:{root:e.appBarRoot}},o.a.createElement(K.a,{variant:"dense"},o.a.createElement("div",{className:e.grow}),o.a.createElement(I.a,{color:"inherit",onClick:function(){return window.open("https://www.linkedin.com/in/sachin-vashist","_blank")}},o.a.createElement(oe.f,null)),o.a.createElement(I.a,{color:"inherit",onClick:function(){return window.open("https://www.facebook.com/vashist82","_blank")}},o.a.createElement(oe.c,null)),o.a.createElement(I.a,{color:"inherit",onClick:function(){return window.open("https://www.instagram.com/vashist797","_blank")}},o.a.createElement(oe.e,null)))))}}]),t}(o.a.Component)),ce=(Object(O.withStyles)(function(e){return{root:{width:"100%",position:"fixed",bottom:"0px"},grow:{flexGrow:1},title:{fontSize:"15px",display:"block"},appBarRoot:{background:"slategrey"}}})(ie),function(e){function t(){return Object(w.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"HELLO"))}}]),t}(a.Component)),le=Object(h.a)({reducer:b,middleware:Object(u.a)(Object(h.d)()),devTools:!0});(function(e){if("serviceWorker"in navigator){if(new URL("/react-boiler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-boiler","/service-worker.js");l?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}})(),f=ce,i.a.render(o.a.createElement(c.a,{store:le},o.a.createElement(f,null)),document.querySelector("#root"))}},[[109,2,1]]]);
//# sourceMappingURL=main.6defc095.chunk.js.map