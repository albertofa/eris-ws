(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{355:function(t,e,r){"use strict";var n=r(14),o=r(3),l=r(80),c=r(17),f=r(16),d=r(34),v=r(205),h=r(79),N=r(5),I=r(81),_=r(127).f,w=r(40).f,x=r(20).f,E=r(356).trim,m="Number",C=o.Number,y=C.prototype,A=d(I(y))==m,S=function(t){var e,r,n,o,l,c,f,code,d=h(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=E(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,f=0;f<c;f++)if((code=l.charCodeAt(f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(l(m,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var L,M=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof M&&(A?N((function(){y.valueOf.call(r)})):d(r)!=m)?v(new C(S(e)),r,M):S(e)},F=n?_(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;F.length>T;T++)f(C,L=F[T])&&!f(M,L)&&x(M,L,w(C,L));M.prototype=y,y.constructor=M,c(o,m,M)}},356:function(t,e,r){var n=r(15),o="["+r(357)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},357:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("ea024e78",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(375)},395:function(t,e,r){var n=r(54)(!1);n.push([t.i,".container[data-v-18ad5614]{grid-area:sn;display:flex;align-items:center;justify-content:space-between;background-color:var(--quaternary);padding:0 11px 0 16px;box-shadow:0 1px 0 0 rgba(0,0,0,.9)}.title[data-v-18ad5614]{font-weight:700;font-size:16px;letter-spacing:2px;white-space:nowrap;text-overflow:ellipsis}.icon[data-v-18ad5614],.title[data-v-18ad5614]{color:var(--white)}.icon[data-v-18ad5614]{cursor:pointer}",""]),t.exports=n},410:function(t,e,r){"use strict";r.r(e);r(355);var n={name:"ChevronDownIcon",props:{title:{type:String,default:"Chevron Down icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},o=r(33),l=Object(o.a)(n,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon chevron-down-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports,c={props:{serverName:String},components:{ExpandIcon:l}},f=(r(394),Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[t._v(t._s(t.serverName))]),t._v(" "),r("div",{staticClass:"icon"},[r("ExpandIcon",{attrs:{size:28}})],1)])}),[],!1,null,"18ad5614",null));e.default=f.exports}}]);