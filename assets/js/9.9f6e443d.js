(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(t,n,e){"use strict";var r=e(4),s=e(16),o=e(15),a=e(76),i=e(74),c=e(6),l=e(99).f,u=e(98).f,d=e(9).f,f=e(97).trim,v=r.Number,p=v,g=v.prototype,h="Number"==o(e(75)(g)),m="trim"in String.prototype,_=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var e,r,s,o=(n=m?n.trim():f(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+n}for(var a,c=n.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>s)return NaN;return parseInt(c,r)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof v&&(h?c(function(){g.valueOf.call(e)}):"Number"!=o(e))?a(new p(_(n)),e,v):_(n)};for(var C,w=e(8)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)s(p,C=w[b])&&!s(v,C)&&d(v,C,u(p,C));v.prototype=g,g.constructor=v,e(11)(r,"Number",v)}},199:function(t,n,e){},200:function(t,n,e){},209:function(t,n,e){"use strict";var r=e(3),s=e(77)(!0);r(r.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),e(100)("includes")},210:function(t,n,e){"use strict";var r=e(3),s=e(211);r(r.P+r.F*e(212)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},211:function(t,n,e){var r=e(78),s=e(17);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(s(t))}},212:function(t,n,e){var r=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},213:function(t,n,e){"use strict";var r=e(199);e.n(r).a},214:function(t,n,e){"use strict";var r=e(200);e.n(r).a},222:function(t,n,e){"use strict";var r=e(10),s=(e(195),e(209),e(210),e(26),e(14),e(20),e(27),function(t){var n=!0;return Object.keys(t).forEach(function(t){["offset","span"].includes(t)||(n=!1)}),n}),o={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:0}},methods:{creatClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var e=[];return t.span&&e.push("col-".concat(n).concat(t.span)),t.offset&&e.push("offset-".concat(n).concat(t.offset)),e}},computed:{colClass:function(){var t=this.span,n=this.offset,e=this.ipad,s=this.narrowPc,o=this.pc,a=this.widePc,i=this.creatClasses;return Object(r.a)(i({span:t,offset:n})).concat(Object(r.a)(i(e,"ipad-")),Object(r.a)(i(s,"narrow-pc-")),Object(r.a)(i(o,"pc-")),Object(r.a)(i(a,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},a=(e(213),e(1)),i=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"6fd257d7",null);n.a=i.exports},223:function(t,n,e){"use strict";e(14),e(26),e(54),e(195);var r={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},s=(e(214),e(1)),o=Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"7b100233",null);n.a=o.exports},231:function(t,n,e){},249:function(t,n,e){"use strict";var r=e(231);e.n(r).a},268:function(t,n,e){"use strict";e.r(n);e(25),e(96);var r=e(222),s=e(223),o={components:{"g-col":r.a,"g-row":s.a},data:function(){return{content:'\n            *{\n                box-sizing: border-box;\n            }\n            .demoRow{\n                margin: 10px 0;\n            }\n            .demoCol{\n                height: 50px;\n                border: 1px solid #ccc;\n                background: #eee;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            } \n            \n            <g-row class="demoRow" gutter="10">\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n                <g-col span="8">\n                    <div class="demoCol">8</div>\n                </g-col>\n            </g-row>\n            <g-row class="demoRow" gutter="10">\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n                <g-col span="6">\n                    <div class="demoCol">6</div>\n                </g-col>\n            </g-row>            \n            '.replace(/^ {12}/gm,"").trim()}}},a=(e(249),e(1)),i=Object(a.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("设置gutter")]),t._v(" "),t._m(0),t._v(" "),e("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("g-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),e("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("g-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"76e56c5a",null);n.default=i.exports}}]);