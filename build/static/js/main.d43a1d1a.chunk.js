(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(238)},178:function(e,t,a){e.exports=a.p+"static/media/reactHome.1716baa0.png"},181:function(e,t,a){e.exports=a.p+"static/media/profile.e614ca16.jpg"},236:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=a(56),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(109),m=a(31),h=Object(m.c)({},{ChangeAuthor:function(e,t){return t.payload}}),d=a(17),p=Object(d.combineReducers)({AuthorReducer:h}),b=function(e,t){return p(e,t)};var f,E=a(22),w=a(23),g=a(25),v=a(24),j=a(26),O=a(240),k=a(241),y=a(20),C=a(68),M=a.n(C),N=a(69),S=a.n(N),x=Object(y.createMuiTheme)({palette:{primary:{main:"#0277BD"},secondary:M.a,error:S.a},typography:{fontFamily:"'Niramit', sans-serif",useNextVariants:!0}}),R=a(242),A=a(36),W=a.n(A),B=a(52),T=a.n(B),H=a(37),P=a.n(H),D=a(38),_=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(W.a,{className:e.card},r.a.createElement(T.a,{className:e.cardMedia,image:a(178),title:"React "}),r.a.createElement(P.a,{className:e.cardHead,title:"Kick Start your Project!",subheader:"Start editing you app from ./src"}))}}]),t}(r.a.Component),V=Object(y.withStyles)(function(e){return{card:Object(D.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),cardMedia:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}})(_),F=a(105),G=Object(m.b)("ChangeAuthor"),z=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){this.props.ChangeAuthor({name:"Sachin Vashist"})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.author;return r.a.createElement(W.a,{className:t.card},r.a.createElement(T.a,{className:t.media,image:a(181),title:n.name}),r.a.createElement(P.a,{className:t.cardHead,title:"Sachin Vashist",subheader:"Full Stack Developer"}))}}]),t}(r.a.Component),L=Object(F.a)(Object(y.withStyles)(function(e){return{card:Object(D.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),media:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}}),Object(i.b)(function(e){return{author:e.AuthorReducer}},{ChangeAuthor:function(e){return G(e)}}))(z),U=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(W.a,{className:e.card},r.a.createElement(P.a,{className:e.cardHead,title:"404",subheader:"Page Not Found"}))}}]),t}(r.a.Component),J=Object(y.withStyles)(function(e){return{card:Object(D.a)({maxWidth:400,margin:"14vh auto"},e.breakpoints.down("xs"),{width:300}),media:{height:0,paddingTop:"56.25%"},cardHead:{textAlign:"center"}}})(U),q=[r.a.createElement(R.a,{key:"home",exact:!0,path:"/",component:V}),r.a.createElement(R.a,{key:"profile",path:"/profile",component:L}),r.a.createElement(R.a,{key:"notFound",component:J})],K=a(239),$=a(54),I=a.n($),Q=a(55),X=a.n(Q),Y=a(27),Z=a.n(Y),ee=a(70),te=a.n(ee),ae=a(45),ne=a.n(ae),re=a(58),oe=a.n(re),ce=a(108),ie=a.n(ce),le=a(28),se=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={mobileMoreAnchorEl:null},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(e){e&&window.open(e,"_blank"),a.setState({mobileMoreAnchorEl:null})},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.state.mobileMoreAnchorEl,a=this.props.classes,n=Boolean(t),o=r.a.createElement(ie.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleMenuClose},r.a.createElement(oe.a,{onClick:function(t){return e.handleMobileMenuClose("https://reactjs.org/docs/getting-started.html")}},r.a.createElement(Z.a,{color:"inherit"},r.a.createElement(le.b,null)),r.a.createElement("p",null,"React Docs")),r.a.createElement(oe.a,{onClick:function(t){return e.handleMobileMenuClose("https://github.com/ErSachinVashist/React-boiler")}},r.a.createElement(Z.a,{color:"inherit"},r.a.createElement(le.d,null)),r.a.createElement("p",null,"Git Repo")),r.a.createElement(K.a,{className:a.linkStyle,to:"/profile"},r.a.createElement(oe.a,{onClick:function(){return e.handleMobileMenuClose()}},r.a.createElement(Z.a,{color:"inherit"},r.a.createElement(le.g,null)),r.a.createElement("p",null,"Profile"))));return r.a.createElement("div",{className:a.root},r.a.createElement(I.a,{position:"static"},r.a.createElement(X.a,null,r.a.createElement(ne.a,{title:"Home",placement:"bottom"},r.a.createElement(K.a,{className:a.linkStyle,to:"/"},r.a.createElement(te.a,{className:a.title,variant:"h6",color:"inherit",noWrap:!0},"React-Boiler-Plate"))),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(ne.a,{title:"React Docs",placement:"bottom"},r.a.createElement(Z.a,{color:"inherit",onClick:function(){return window.open("https://reactjs.org/docs/getting-started.html","_blank")}},r.a.createElement(le.b,null))),r.a.createElement(ne.a,{title:"Git Repo",placement:"bottom"},r.a.createElement(Z.a,{color:"inherit",onClick:function(){return window.open("https://github.com/ErSachinVashist/React-boiler","_blank")}},r.a.createElement(le.d,null))),r.a.createElement(ne.a,{title:"Profile",placement:"bottom"},r.a.createElement(K.a,{className:a.linkStyle,to:"/profile"},r.a.createElement(Z.a,{color:"inherit"},r.a.createElement(le.g,null))))),r.a.createElement("div",{className:a.sectionMobile},r.a.createElement(Z.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(le.a,null))))),o)}}]),t}(r.a.Component),ue=Object(y.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:{display:"block",color:"white"},linkStyle:{color:"white",textDecoration:"none"},sectionDesktop:Object(D.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(D.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(se),me=(a(236),function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(I.a,{position:"static",classes:{root:e.appBarRoot}},r.a.createElement(X.a,{variant:"dense"},r.a.createElement("div",{className:e.grow}),r.a.createElement(Z.a,{color:"inherit",onClick:function(){return window.open("https://www.linkedin.com/in/sachin-vashist","_blank")}},r.a.createElement(le.f,null)),r.a.createElement(Z.a,{color:"inherit",onClick:function(){return window.open("https://www.facebook.com/vashist82","_blank")}},r.a.createElement(le.c,null)),r.a.createElement(Z.a,{color:"inherit",onClick:function(){return window.open("https://www.instagram.com/vashist797","_blank")}},r.a.createElement(le.e,null)))))}}]),t}(r.a.Component)),he=Object(y.withStyles)(function(e){return{root:{width:"100%",position:"fixed",bottom:"0px"},grow:{flexGrow:1},title:{fontSize:"15px",display:"block"},appBarRoot:{background:"slategrey"}}})(me),de=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{basename:"/React-Boiler"},r.a.createElement(y.MuiThemeProvider,{theme:x},r.a.createElement(ue,null),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(k.a,null,q)),r.a.createElement(he,null))))}}]),t}(n.Component),pe=Object(m.a)({reducer:b,middleware:Object(u.a)(Object(m.d)()),devTools:!0});(function(e){if("serviceWorker"in navigator){if(new URL("/React-Boiler",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/React-Boiler","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}})(),f=de,c.a.render(r.a.createElement(i.a,{store:pe},r.a.createElement(f,null)),document.querySelector("#root"))}},[[111,2,1]]]);
//# sourceMappingURL=main.d43a1d1a.chunk.js.map