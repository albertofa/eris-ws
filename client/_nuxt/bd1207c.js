(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,8],{229:function(e,t,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("0d195d5a",content,!0,{sourceMap:!1})},230:function(e,t,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("49c762c5",content,!0,{sourceMap:!1})},237:function(e,t,n){"use strict";n.r(t);var o={props:{authorName:String,date:String,hasMention:Boolean,isBot:Boolean}},r=(n(250),n(29)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel-message",class:{hasMention:e.hasMention}},[n("div",{staticClass:"avatar",class:{botAvatar:e.isBot}}),e._v(" "),n("div",{staticClass:"message"},[n("div",{staticClass:"user"},[n("strong",[e._v(e._s(e.authorName))]),e._v(" "),e.isBot?n("span",{staticClass:"bot"},[e._v("bot")]):e._e(),e._v(" "),n("span",{staticClass:"date"},[e._v(e._s(e.date))])]),e._v(" "),n("div",{staticClass:"body"},[e._t("default")],2)])])}),[],!1,null,"0f842c78",null);t.default=component.exports},250:function(e,t,n){"use strict";n(229)},251:function(e,t,n){var o=n(46)(!1);o.push([e.i,".channel-message[data-v-0f842c78]{box-sizing:content-box;display:flex;padding:8px 16px;margin-right:4px;background-color:transparent;margin-top:5px}.channel-message.hasMention[data-v-0f842c78]{background-color:var(--mention-message);border-left:2px solid var(--mention-detail)}.channel-message[data-v-0f842c78]:hover{background-color:var(--tertiary)}.channel-message:hover .avatar[data-v-0f842c78]{transition:all .2s;background-color:var(--primary)}.avatar[data-v-0f842c78]{top:5px;width:40px;height:40px;border-radius:50%;background-color:var(--secondary);flex-shrink:0}.avatar.botAvatar[data-v-0f842c78]{background-color:var(--mention-detail)}.message[data-v-0f842c78]{display:flex;flex-direction:column;justify-content:space-between;margin-left:17px}.message strong[data-v-0f842c78]{color:var(--white);font-size:16px;letter-spacing:1px}.message .date[data-v-0f842c78]{margin-left:6px;color:var(--grey);font-size:13px}.message .body[data-v-0f842c78]{color:var(--white);text-align:left;font-size:16px;margin-top:5px}.message .bot[data-v-0f842c78]{margin-left:9px;background-color:var(--discord);padding:4px 5px;text-transform:uppercase;font-size:11px;font-weight:700;color:var(--white);border-radius:4px}",""]),e.exports=o},252:function(e,t,n){"use strict";n(230)},253:function(e,t,n){var o=n(46)(!1);o.push([e.i,".mention[data-v-174835aa]{color:var(--link);cursor:pointer;margin-right:6px}.mention[data-v-174835aa]:hover{text-decoration:underline}",""]),e.exports=o},254:function(e,t,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("70f6fa1e",content,!0,{sourceMap:!1})},259:function(e,t,n){"use strict";n.r(t);n(252);var o=n(29),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"mention"},[e._t("default")],2)}),[],!1,null,"174835aa",null);t.default=component.exports},273:function(e,t,n){"use strict";n(254)},274:function(e,t,n){var o=n(46)(!1);o.push([e.i,".container[data-v-7fea3aad]{grid-area:cd;display:flex;justify-content:space-between;flex-direction:column;flex-flow:column nowrap;background-color:var(--primary);flex:1}.input-wrapper[data-v-7fea3aad]{width:100%;padding:0 16px;height:68px}.input-wrapper input[data-v-7fea3aad]{margin-top:12px;width:100%;height:44px;padding:0 10px 0 57px;border-radius:5px;color:var(--white);background-color:var(--chat-input)}.input-wrapper input[data-v-7fea3aad]::-moz-placeholder{color:var(--grey);font-size:16px}.input-wrapper input[data-v-7fea3aad]:-ms-input-placeholder{color:var(--grey);font-size:16px}.input-wrapper input[data-v-7fea3aad]::placeholder{color:var(--grey);font-size:16px}.input-wrapper .icon[data-v-7fea3aad]{color:var(--grey);position:relative;top:-50%;left:14px;transition:.2s;width:24px}.messages[data-v-7fea3aad]{display:flex;flex-direction:column;height:calc(100vh - 114px);max-height:calc(100vh - 114px);overflow-y:scroll}.messages .channelmessage[data-v-7fea3aad]:first-child{margin-top:0}.messages[data-v-7fea3aad]::-webkit-scrollbar{width:8px}.messages[data-v-7fea3aad]::-webkit-scrollbar-thumb{background-color:var(--tertiary);border-radius:4px}.messages[data-v-7fea3aad]::-webkit-scrollbar-track{background-color:var(--primary)}.link[data-v-7fea3aad]{color:var(--grey);outline:none}",""]),e.exports=o},282:function(e,t,n){"use strict";n.r(t);n(10),n(68),n(36);var o=n(7),r=n(301),c=n(285),l=n(237),d=n(259),f=n(297),v=n.n(f),m={components:{At:r.a,ChannelMessage:l.default,Mention:d.default},data:function(){return{messagesArray:[],message:"",date:"",userId:""}},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.socket=new c.io("wss://li119-45.members.linode.com"),e.socket.on("newMessage",(function(t){console.log("newMessage",t),e.messagesArray.push(t),e.scrollToBottom()})),e.$axios.get("/message").then((function(t){e.messagesArray=t.data,e.scrollToBottom()})),(n=new v.a(e.$auth.user.id)).on("open",(function(){console.log("opening",e.$auth.user.id),e.socket.emit("joinVoice",e.$auth.user.id)})),e.socket.on("callVoice",(function(e){console.log("CallingSomeone",e),navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){console.log("wililwil calling");n.call(e,t);console.log("fineshed calling")}))})),n.on("call",(function(e){console.log("callReceived",e),navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then((function(t){e.answer(t),e.on("stream",(function(e){var audio=document.querySelector("audio");audio.srcObject=e,audio.onloadedmetadata=function(e){console.log("now playing the audio  CALL"),audio.play()}}))}))}));case 7:case"end":return t.stop()}}),t)})))()},methods:{writeMessage:function(e){this.socket.emit("newMessage",{userId:this.$auth.user.id,token:this.$auth.strategy.token.get(),message:e}),this.message=""},scrollToBottom:function(){var e=this;this.$nextTick((function(){e.$refs.messages.scrollTop=e.$refs.messages.scrollHeight}))}},computed:{getDate:function(){return(new Date).toString()}}},h=(n(273),n(29)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{ref:"messages",staticClass:"messages"},[n("ChannelMessage",{key:1,attrs:{authorName:"Alberto Fernandes",date:e.getDate}},[e._v("\n      Eris a discord clone\n      "),n("a",{staticClass:"link",attrs:{href:"#"}},[e._v("My Github")])]),e._v(" "),n("ChannelMessage",{key:2,attrs:{isBot:"",hasMention:"",authorName:"Bot",date:e.getDate}},[n("Mention",[e._v("Bot boti")]),e._v(" Hii, how are you ??\n    ")],1),e._v(" "),e._l(e.messagesArray,(function(t){return n("ChannelMessage",{key:t.id,attrs:{authorName:t.user.username.split("#")[0],date:t.createdAt}},[e._v("\n      "+e._s(t.content)+"\n    ")])}))],2),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",name:"message",placeholder:"Type a message here, and press enter.",id:"input-message"},domProps:{value:e.message},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.writeMessage(e.message)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("div",{staticClass:"icon"},[n("At",{attrs:{size:24}})],1)]),e._v(" "),n("audio")])}),[],!1,null,"7fea3aad",null);t.default=component.exports;installComponents(component,{ChannelMessage:n(237).default})},298:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=298}}]);