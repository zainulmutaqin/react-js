(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(23)},19:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(7),l=t.n(r),o=(t(19),t(1)),c=t(5),s=t(3),u=t(2),m=t(4),h=(t(8),t(9),t(12)),f=(t(22),function(e){function n(e){return Object(o.a)(this,n),Object(s.a)(this,Object(u.a)(n).call(this,e))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"notification",value:function(){h.a.notify("Sendi")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{class:"button button2",onClick:this.notification},"Namaku adalah ... "),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("img",{src:"sandy.png"}))}}]),n}(a.Component)),d=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={name:"Calculator",color:"Pink",nilai1:null,nilai2:null,operator:null,hasil:null},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var n,t=parseInt(this.refs.nilai1.value),a=parseInt(this.refs.nilai2.value),i=this.refs.operator.value;switch(i){case"+":n=t+a;break;case"-":n=t-a;break;case"*":n=t*a;break;case"/":n=t/a}this.setState({nilai1:t,nilai2:a,operator:i,hasil:n}),this.refs.nilai1.value=null,this.refs.nilai2.value=null}},{key:"renderHasil",value:function(){var e=this.state,n=(e.nilai1,e.nilai2,e.operator,e.hasil);if(this.state.hasil)return i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("p",{className:"alert alert-success"},"Hasilnya adalah "+n))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",{className:"selected "+this.state.color},this.state.name),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},i.a.createElement("input",{type:"number",ref:"nilai1"}),i.a.createElement("select",{ref:"operator",className:"form-control"},i.a.createElement("option",{value:"+"},"+"),i.a.createElement("option",{value:"-"},"-"),i.a.createElement("option",{value:"*"},"x"),i.a.createElement("option",{value:"/"},":")),i.a.createElement("input",{type:"number",ref:"nilai2"})," =...",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"btn btn-primary"},"Count Me")),this.renderHasil())}}]),n}(a.Component),p=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={name:"Tuan Kreb",color:"Merah",img:"merah.png",nilai1:null,nilai2:null,operator:null,hasil:null},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,img:e.img})}},{key:"info",value:function(e){return"Calculator"===e?i.a.createElement(d,null):"Profile"==e?i.a.createElement(f,{nama:"Sendi"}):i.a.createElement("div",null,"Saya ",i.a.createElement("span",{className:"selected "+this.state.color},this.state.name),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("img",{src:this.state.img,width:"240"}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,t){var a="menu";return e.state.color===n.color&&(a="".concat(a," is-active")),i.a.createElement("a",{className:a+" "+n.color,onClick:e.clicked.bind(e,n),key:t},n.name)})),i.a.createElement("div",{className:"info"},this.info(this.state.name)))}}]),n}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(p,{items:[{name:"Tuan Kreb",color:"Merah",img:"merah.png"},{name:"Spombob",color:"Kuning",img:"kuning.png"},{name:"Plangton",color:"Hijau",img:"hijau.png"},{name:"Squidwed",color:"Biru",img:"biru.png"},{name:"Calculator",color:"Pink"},{name:"Profile",color:"Coklat"}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-js",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-js","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):b(n,e)})}}()},8:function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},9:function(e,n,t){}},[[13,1,2]]]);
//# sourceMappingURL=main.b91652c4.chunk.js.map