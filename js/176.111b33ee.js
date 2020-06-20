(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[176],{"6c97":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"q-layout-padding docs-touch row justify-center"},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),n("q-toggle",{attrs:{label:"Directive disabled"},model:{value:t.disable,callback:function(o){t.disable=o},expression:"disable"}}),n("div",{directives:[{name:"touch-hold",rawName:"v-touch-hold.mouse",value:t.computedHandler,expression:"computedHandler",modifiers:{mouse:!0}}],staticClass:"custom-area row flex-center",on:{click:function(o){return t.onEvt("click")},mousedown:function(o){return t.onEvt("mousedown")},mousemove:function(o){return t.onEvt("mousemove")},mouseup:function(o){return t.onEvt("mouseup")},touchstart:function(o){return t.onEvt("touchstart")},touchmove:function(o){return t.onEvt("touchmove")},touchend:function(o){return t.onEvt("touchend")}}},[t.info?n("div",{staticClass:"custom-info"},[n("pre",[t._v(t._s(t.info))])]):n("div",{staticClass:"text-center q-pa-xl custom-area-placeholder"},[t._v("\n        Click/touch and hold for at least 600ms.\n      ")])]),n("p",{staticClass:"caption"},[t._v("\n      Configuring to trigger after custom time (in this case 3s):\n    ")]),n("div",{directives:[{name:"touch-hold",rawName:"v-touch-hold:3000.mouse",value:t.holdExtended,expression:"holdExtended",arg:"3000",modifiers:{mouse:!0}}],staticClass:"custom-area row flex-center",on:{click:function(o){return t.onEvt("click")},mousedown:function(o){return t.onEvt("mousedown")},mousemove:function(o){return t.onEvt("mousemove")},mouseup:function(o){return t.onEvt("mouseup")},touchstart:function(o){return t.onEvt("touchstart")},touchmove:function(o){return t.onEvt("touchmove")},touchend:function(o){return t.onEvt("touchend")}}},[t.infoExtended?n("div",{staticClass:"custom-info"},[n("pre",[t._v(t._s(t.infoExtended))])]):n("div",{staticClass:"q-pa-xl custom-area-placeholder"},[t._v("\n        Click/touch and hold for 3 seconds\n      ")])]),n("p",{staticClass:"caption"},[t._v("\n      Custom duration (1500 ms) and sensitivities (100px/100px):\n    ")]),n("div",{directives:[{name:"touch-hold",rawName:"v-touch-hold:1500:100:100.mouse",value:t.holdCustom,expression:"holdCustom",arg:"1500:100:100",modifiers:{mouse:!0}}],staticClass:"custom-area row flex-center",on:{click:function(o){return t.onEvt("click")},mousedown:function(o){return t.onEvt("mousedown")},mousemove:function(o){return t.onEvt("mousemove")},mouseup:function(o){return t.onEvt("mouseup")},touchstart:function(o){return t.onEvt("touchstart")},touchmove:function(o){return t.onEvt("touchmove")},touchend:function(o){return t.onEvt("touchend")}}},[t.infoCustom?n("div",{staticClass:"custom-info"},[n("pre",[t._v(t._s(t.infoCustom))])]):n("div",{staticClass:"q-pa-xl custom-area-placeholder"},[t._v("\n        Click/touch and hold for 1.5 seconds\n      ")])]),n("p",{staticClass:"caption"},[t._v("\n      test (preventing it from inner square)\n    ")]),n("div",{directives:[{name:"touch-hold",rawName:"v-touch-hold.mouse",value:t.holdTest,expression:"holdTest",modifiers:{mouse:!0}}],staticClass:"row flex-center",on:{click:function(o){return t.onEvt("click")},mousedown:function(o){return t.onEvt("mousedown")},mousemove:function(o){return t.onEvt("mousemove")},mouseup:function(o){return t.onEvt("mouseup")},touchstart:function(o){return t.onEvt("touchstart")},touchmove:function(o){return t.onEvt("touchmove")},touchend:function(o){return t.onEvt("touchend")}}},[n("div",{staticClass:"cursor-pointer bg-primary text-white rounded-borders shadow-2",staticStyle:{padding:"24px"},on:{touchstart:t.handleEvt,mousedown:t.handleEvt}},[n("div",[n("q-toggle",{attrs:{dark:"",color:"black",label:"Stop propagation"},model:{value:t.holdTestStopPropagation,callback:function(o){t.holdTestStopPropagation=o},expression:"holdTestStopPropagation"}})],1),t.infoTest?n("div",{staticClass:"custom-info"},[n("pre",[t._v(t._s(t.infoTest))])]):n("div",{staticClass:"text-center q-pa-xl custom-area-placeholder"},[t._v("\n          Touch/click and hold\n        ")])])]),n("p",{staticClass:"caption"},[t._v("\n      test (capture + preventing it from inner square)\n      -- should still work\n    ")]),n("div",{directives:[{name:"touch-hold",rawName:"v-touch-hold.capture.mouse.mouseCapture",value:t.holdTestCapture,expression:"holdTestCapture",modifiers:{capture:!0,mouse:!0,mouseCapture:!0}}],staticClass:"row flex-center",on:{click:function(o){return t.onEvt("click")},mousedown:function(o){return t.onEvt("mousedown")},mousemove:function(o){return t.onEvt("mousemove")},mouseup:function(o){return t.onEvt("mouseup")},touchstart:function(o){return t.onEvt("touchstart")},touchmove:function(o){return t.onEvt("touchmove")},touchend:function(o){return t.onEvt("touchend")}}},[n("div",{staticClass:"cursor-pointer bg-primary text-white rounded-borders shadow-2",staticStyle:{padding:"24px"},on:{touchstart:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.infoTestCapture?n("div",{staticClass:"custom-info"},[n("pre",[t._v(t._s(t.infoTestCapture))])]):n("div",{staticClass:"text-center q-pa-xl custom-area-placeholder"},[t._v("\n          Touch/click and hold\n        ")])])])],1)])},s=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",{staticClass:"caption"},[n("span",{staticClass:"desktop-only"},[t._v("Click and hold with your mouse")]),n("span",{staticClass:"mobile-only"},[t._v("Touch and hold")]),t._v("\n      on the area below to see it in action.\n      "),n("br"),t._v("\n      Notice that on touch capable devices the scrolling is not blocked.\n    ")])}],u=n("4624"),i=n.n(u),c=(n("92fa"),{data:function(){return{info:null,infoExtended:null,infoCustom:null,disable:!1,infoTest:null,holdTestStopPropagation:!0,infoTestCapture:null}},computed:{computedHandler:function(){return!0===this.disable?void 0:this.handleHold}},methods:{handleHold:function(t){var o=t.evt,n=i()(t,["evt"]);this.info=n,console.log("TRIGGER",o)},holdExtended:function(t){var o=t.evt,n=i()(t,["evt"]);this.infoExtended=n,console.log("TRIGGER",o)},holdCustom:function(t){var o=t.evt,n=i()(t,["evt"]);this.infoCustom=n,console.log("TRIGGER",o)},holdTest:function(t){var o=t.evt,n=i()(t,["evt"]);this.infoTest=n,console.log("TRIGGER",o)},holdTestCapture:function(t){var o=t.evt,n=i()(t,["evt"]);this.infoTestCapture=n,console.log("TRIGGER",o)},onEvt:function(t){console.log("@"+t)},handleEvt:function(t){this.holdTestStopPropagation&&t.stopPropagation()}}}),r=c,a=n("a6c2"),l=Object(a["a"])(r,e,s,!1,null,null,null);o["default"]=l.exports}}]);