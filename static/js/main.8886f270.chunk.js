(this["webpackJsonpadmin-nfd"]=this["webpackJsonpadmin-nfd"]||[]).push([[0],{103:function(e,t,n){e.exports={enter:"EnterToAdminPanel_enter__JtruF",logo:"EnterToAdminPanel_logo__1vJeh"}},134:function(e,t,n){e.exports={panel:"AdminPanel_panel__1Gzu2"}},158:function(e,t,n){},159:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=n(81),s=n(40),j=(n(158),n(11)),l=(n(159),n(134)),d=n.n(l),b=(n(143),n(46)),m=(n(307),n(306),n(300)),x=(n(314),n(316),n(309),n(49)),O=n.n(x),p=n(302),u=n(303),h=n(304),f=n(305),g=n(50),_=n.n(g),v=(n(139),n(308),n(84),n(298)),F=(n(22),n(77)),w=n.n(F),y=n.p+"static/media/Logo Icon.bc4f3ee8.svg",N=n(3),S=240;Object(v.a)((function(e){return{root:{display:"flex"},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:S,flexShrink:0}),appBar:Object(b.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(S,"px)"),marginLeft:S}),menuButton:Object(b.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:S},content:{flexGrow:1,padding:e.spacing(3)}}}));var B=n(58),k=Object(v.a)((function(e){return{toolbar:e.mixins.toolbar}})),C=function(){var e=k();return Object(N.jsxs)("div",{className:w.a.side_bar,children:[Object(N.jsxs)("div",{className:w.a.logo,children:[Object(N.jsx)(B.a,{src:y}),Object(N.jsx)("p",{children:"Need for drive"})]}),Object(N.jsx)("div",{className:e.toolbar}),Object(N.jsx)(m.a,{}),Object(N.jsx)(p.a,{children:["\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f","Starred","Send email","Drafts"].map((function(e,t){return Object(N.jsxs)(u.a,{button:!0,children:[Object(N.jsx)(h.a,{children:t%2===0?Object(N.jsx)(O.a,{}):Object(N.jsx)(_.a,{})}),Object(N.jsx)(f.a,{primary:e})]},e)}))}),Object(N.jsx)(m.a,{}),Object(N.jsx)(p.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(N.jsxs)(u.a,{button:!0,children:[Object(N.jsx)(h.a,{children:t%2===0?Object(N.jsx)(O.a,{}):Object(N.jsx)(_.a,{})}),Object(N.jsx)(f.a,{primary:e})]},e)}))})]})},L=function(){return Object(N.jsx)("div",{className:d.a.panel,children:Object(N.jsx)(C,{})})},A=n(311),J=n(103),P=n.n(J),T=n(312),I=n(315),W=n(313),z=n(310),E=Object(v.a)({root:{alignItems:"center",width:110,height:29,backgroundColor:"#007BFF"},label:{color:"#FFFFFF",textTransform:"none",fontFamily:"Helvetica",fontSize:"11.5px",fontWeight:400,lineHeight:"12.65px"}}),G=function(){var e=E();return Object(N.jsx)("div",{children:Object(N.jsx)(z.a,{classes:{root:e.root,label:e.label},variant:"contained",color:"primary",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})},H=n(51),M=n.n(H),D=function(e){var t=e.onSubmit;return Object(N.jsxs)("form",{onSubmit:t,className:M.a.form,children:[Object(N.jsxs)("div",{className:M.a.field,children:[Object(N.jsx)("label",{htmlFor:"eMail",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(N.jsx)(I.a,{name:"email",component:"input",type:"text"})]}),Object(N.jsxs)("div",{className:M.a.field,children:[Object(N.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(N.jsx)(I.a,{name:"password",component:"input",type:"password"})]}),Object(N.jsxs)("div",{className:M.a.buttons,children:[Object(N.jsx)("button",{className:M.a.textButton,children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(N.jsx)(o.b,{to:"/admin",children:Object(N.jsx)(G,{})})]})]})},R=D=Object(W.a)({form:"login"})(D),V=n(17),q=n(142),U=n(64),K="City/setCities",Q="City/setId",X={cities:[],id:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(U.a)(Object(U.a)({},e),{},{cities:t.payload});case Q:return Object(U.a)(Object(U.a)({},e),{},{id:t.payload});default:return e}},Z=n(317),$=Object(V.c)({citiesTable:Y,form:Z.a}),ee=Object(V.e)($,Object(V.d)(Object(V.a)(q.a))),te=Object(v.a)({root:{width:376,height:253,color:"red"},title:{fontFamily:"Helvetica",fontSize:17,color:"#3D5170"},"& .MuiPaper-root":{color:"red"}}),ne=function(){var e=te();return Object(N.jsxs)("div",{className:P.a.enter,children:[Object(N.jsxs)("div",{className:P.a.logo,children:[Object(N.jsx)(B.a,{src:y}),Object(N.jsx)("p",{children:"Need for drive"})]}),Object(N.jsx)(A.a,{className:e.root,children:Object(N.jsxs)(T.a,{children:[Object(N.jsx)("p",{className:e.title,children:"\u0412\u0445\u043e\u0434"}),Object(N.jsx)(R,{onSubmit:void console.log(ee.getState().form)})]})})]})};var ae=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:"/admin",component:L}),Object(N.jsx)(j.a,{exact:!0,path:"/",component:ne})]})})};i.a.render(Object(N.jsx)(o.a,{children:Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(s.a,{store:ee,children:Object(N.jsx)(ae,{})})})}),document.getElementById("root"))},51:function(e,t,n){e.exports={form:"LoginForm_form__2GqWW",field:"LoginForm_field__1CwCf",buttons:"LoginForm_buttons__1Jw6V",textButton:"LoginForm_textButton__2gi2k"}},77:function(e,t,n){e.exports={side_bar:"SideBar_side_bar__7RlWj",logo:"SideBar_logo__1BVoU"}}},[[262,1,2]]]);
//# sourceMappingURL=main.8886f270.chunk.js.map