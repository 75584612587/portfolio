webpackJsonp([1],{"2jHU":function(t,e){},"39ur":function(t,e,n){"use strict";e.a={name:"app"}},FGQs:function(t,e,n){"use strict";var a=n("Dd8w"),s=n.n(a),i=n("w8aC"),r=n.n(i),c=n("A5qe"),o=n.n(c),u=n("Ubyc"),l=(n.n(u),n("NYxO")),d=n("7t+N"),p=n.n(d);e.a={name:"Home",components:{VueTyper:u.VueTyper},mounted:function(){this.initBg(),this.init()},data:function(){return{typed:["text1","text2"],titles:["Frontend Engineer","Software Developer","Lifelong Learner"],technologies:["React","Typescript","MobX","Jest","Cypress","styled-components (CSS-in-js)","Storybook (Reusable UI components)"]}},computed:s()({},Object(l.c)(["getTyped"])),methods:s()({},Object(l.b)(["setTyped","clearTyped"]),{init:function(){!0===(arguments.length>0&&void 0!==arguments[0]&&arguments[0])&&this.clearTyped(),!1===this.getTyped&&p()(".main-card").css({"max-height":"65px"})},initBg:function(){r.a.init({selector:".bg",color:["#1abc9c","#404B69","#6c5ce7"],maxParticles:50,connectParticles:!0,move:{speed:3},responsive:[{breakpoint:768,options:{maxParticles:0,color:["#1abc9c","#404B69","#6c5ce7"],connectParticles:!1}}]}),o()({targets:".bg",opacity:1,easing:"easeOutQuint",duration:5e3})},doneTyping:function(){var t=this;setTimeout(function(){t.setTyped(!0),p()(".main-card").addClass("autoHeight"),o()({targets:".transition",opacity:1,easing:"easeOutQuint",duration:3e3})},1e3),console.log("test")}})}},IcnI:function(t,e,n){"use strict";var a=n("7+uW"),s=n("NYxO"),i=n("sax8"),r=(n.n(i),n("424j")),c=n("bREw");a.default.use(s.a);e.a=new s.a.Store({modules:{user:c.a},strict:!1,plugins:[Object(r.a)()]})},IgDf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"content"},[n("div",{staticClass:"main-card"},[t.getTyped?t._e():n("vue-typer",{staticClass:"typer",attrs:{text:t.typed,repeat:0},on:{completed:t.doneTyping}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.getTyped,expression:"getTyped"}]},[n("div",{staticClass:"title transition"},[n("div",[t._v("text1")]),t._v(" "),t._m(0,!1,!1),t._v(" "),t.getTyped?n("vue-typer",{staticClass:"typer",attrs:{text:t.titles}}):t._e()],1),t._v(" "),n("p",{staticClass:"transition"},[t._v("\n          text2\n          "),n("a",{staticClass:"bold",attrs:{href:"text2",target:"_blank"}},[t._v("Faire")]),t._v(". text3\n          "),n("span",{staticClass:"bold"},[t._v("text")]),t._v(" text\n          "),t._l(t.technologies,function(e,a){return n("span",{key:e,staticClass:"bold"},[t._v("\n            "+t._s(e)),a<t.technologies.length-1?[t._v(",")]:[t._v(".")]],2)})],2),t._v(" "),n("p",[t._v("\n          text\n        ")]),t._v(" "),t._m(1,!1,!1),t._v(" "),n("div",[n("div",{staticClass:"small"},[t._v("\n            text\n            "),n("a",{attrs:{href:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.init(!0)}}},[t._v("click here ")]),t._v("text\n          ")])])])],1)]),t._v(" "),n("canvas",{staticClass:"bg"})])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"profile",attrs:{src:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-center social"},[n("a",{attrs:{href:"text",target:"_blank"}},[n("i",{staticClass:"fa fa-github fa-3x hover",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("a",{attrs:{href:"text",target:"_blank"}},[n("i",{staticClass:"fa fa-linkedin-square fa-3x hover",attrs:{"aria-hidden":"true"}})])])}],i={render:a,staticRenderFns:s};e.a=i},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("YkRm"),i=n("YaEn"),r=n("zL8q"),c=n.n(r),o=n("wUZ8"),u=n.n(o),l=n("tvR6"),d=(n.n(l),n("IcnI"));a.default.use(c.a,{locale:u.a}),a.default.config.productionTip=!1,new a.default({el:"#app",router:i.a,store:d.a,template:"<App/>",components:{App:s.a}})},WOkv:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("wUZA");a.default.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"*",component:i.a}]})},YkRm:function(t,e,n){"use strict";function a(t){n("fA66")}var s=n("39ur"),i=n("WOkv"),r=n("VU/8"),c=a,o=r(s.a,i.a,!1,c,"data-v-e4b5bd10",null);e.a=o.exports},bREw:function(t,e,n){"use strict";var a={typed:!1},s={getTyped:function(t){return t.typed}},i={setTyped:function(t,e){(0,t.commit)("setTyped",e)},clearTyped:function(t){(0,t.commit)("clearTyped")}},r={setTyped:function(t,e){t.typed=e},clearTyped:function(t){t.typed=!1}};e.a={state:a,getters:s,mutations:r,actions:i}},fA66:function(t,e){},tvR6:function(t,e){},wUZA:function(t,e,n){"use strict";function a(t){n("2jHU")}var s=n("FGQs"),i=n("IgDf"),r=n("VU/8"),c=a,o=r(s.a,i.a,!1,c,null,null);e.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.3331ff72b470c3f89625.js.map