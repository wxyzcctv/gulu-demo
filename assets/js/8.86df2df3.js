(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(t,s,n){"use strict";var o=n(4),a=n(16),c=n(15),l=n(76),e=n(74),i=n(6),r=n(99).f,d=n(98).f,v=n(9).f,g=n(97).trim,p=o.Number,u=p,C=p.prototype,m="Number"==c(n(75)(C)),f="trim"in String.prototype,_=function(t){var s=e(t,!1);if("string"==typeof s&&s.length>2){var n,o,a,c=(s=f?s.trim():g(s,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(s.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+s}for(var l,i=s.slice(2),r=0,d=i.length;r<d;r++)if((l=i.charCodeAt(r))<48||l>a)return NaN;return parseInt(i,o)}}return+s};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof p&&(m?i(function(){C.valueOf.call(n)}):"Number"!=c(n))?l(new u(_(s)),n,p):_(s)};for(var h,w=n(8)?r(u):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)a(u,h=w[b])&&!a(p,h)&&v(p,h,d(u,h));p.prototype=C,C.constructor=p,n(11)(o,"Number",p)}},199:function(t,s,n){},200:function(t,s,n){},209:function(t,s,n){"use strict";var o=n(3),a=n(77)(!0);o(o.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(100)("includes")},210:function(t,s,n){"use strict";var o=n(3),a=n(211);o(o.P+o.F*n(212)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},211:function(t,s,n){var o=n(78),a=n(17);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},212:function(t,s,n){var o=n(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},213:function(t,s,n){"use strict";var o=n(199);n.n(o).a},214:function(t,s,n){"use strict";var o=n(200);n.n(o).a},222:function(t,s,n){"use strict";var o=n(10),a=(n(195),n(209),n(210),n(26),n(14),n(20),n(27),function(t){var s=!0;return Object.keys(t).forEach(function(t){["offset","span"].includes(t)||(s=!1)}),s}),c={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{creatClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,a=this.narrowPc,c=this.pc,l=this.widePc,e=this.creatClasses;return Object(o.a)(e({span:t,offset:s})).concat(Object(o.a)(e(n,"ipad-")),Object(o.a)(e(a,"narrow-pc-")),Object(o.a)(e(c,"pc-")),Object(o.a)(e(l,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},l=(n(213),n(1)),e=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"6fd257d7",null);s.a=e.exports},223:function(t,s,n){"use strict";n(14),n(26),n(54),n(195);var o={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},a=(n(214),n(1)),c=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"7b100233",null);s.a=c.exports},230:function(t,s,n){},248:function(t,s,n){"use strict";var o=n(230);n.n(o).a},267:function(t,s,n){"use strict";n.r(s);n(25),n(96);var o=n(222),a={components:{"g-row":n(223).a,"g-col":o.a},data:function(){return{content:'\n            *{\n                box-sizing: border-box;\n            }\n            .demoRow{\n                margin: 10px 0;\n            }\n            .demoCol{\n                height: 50px;\n                border: 1px solid #ccc;\n                background: #eee;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n\n            <g-row class="demoRow">\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n            </g-row>\n\n            <g-row class="demoRow">\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n            </g-row>\n\n            <g-row class="demoRow">\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n                <g-col span="4">\n                    <div class="demoCol">4</div>\n                </g-col>\n            </g-row>\n            \n            <g-row class="demoRow">\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n                <g-col span="2">\n                    <div class="demoCol">2</div>\n                </g-col>\n            </g-row>            \n            '.replace(/^ {12}/gm,"").trim()}}},c=(n(248),n(1)),l=Object(c.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h2",[t._v("24格网络")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"4061da8f",null);s.default=l.exports}}]);