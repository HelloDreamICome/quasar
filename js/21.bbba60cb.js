(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{3113:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-layout-padding q-mx-auto"},[i("div",{staticClass:"row q-gutter-sm items-center"},[i("q-toggle",{attrs:{label:"Horizontal"},model:{value:e.horizontal,callback:function(t){e.horizontal=t},expression:"horizontal"}}),i("q-toggle",{attrs:{label:"Reverse"},model:{value:e.modelReverse,callback:function(t){e.modelReverse=t},expression:"modelReverse"}}),i("q-select",{attrs:{dense:"",filled:"",options:["%","px","em"],prefix:"Unit:"},model:{value:e.modelUnit,callback:function(t){e.modelUnit=t},expression:"modelUnit"}}),i("q-toggle",{attrs:{label:"Disable"},model:{value:e.disable,callback:function(t){e.disable=t},expression:"disable"}}),i("q-toggle",{attrs:{label:"Funky limits"},model:{value:e.funkyLimits,callback:function(t){e.funkyLimits=t},expression:"funkyLimits"}}),i("q-toggle",{attrs:{label:"Show separator"},model:{value:e.showSeparator,callback:function(t){e.showSeparator=t},expression:"showSeparator"}}),i("q-toggle",{attrs:{label:"Emit immediately"},model:{value:e.emitImmediately,callback:function(t){e.emitImmediately=t},expression:"emitImmediately"}}),i("q-input",{attrs:{standout:"",dense:"",color:"primary","input-class":"text-right"},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-chip",{attrs:{color:"primary",square:"","text-color":"white"}},[e._v("\n          Model between "+e._s(e.limits[0])+" and "+e._s(e.limits[1])+"\n        ")])]},proxy:!0},{key:"append",fn:function(){return[i("q-btn",{attrs:{color:"primary",flat:"",round:"",dense:"",icon:"clear"},on:{click:function(t){e.model=50}}})]},proxy:!0}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),i("q-splitter",{staticClass:"q-mt-md",staticStyle:{height:"700px",border:"1px solid black"},attrs:{horizontal:e.horizontal,reverse:e.modelReverse,unit:e.modelUnit,limits:e.limits,disable:e.disable,"emit-immediately":e.emitImmediately},scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"text-h1 q-mb-md"},[e._v("\n          Before\n        ")]),e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n          "+e._s(t)+". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.\n        ")])}))],2)]},proxy:!0},{key:"after",fn:function(){return[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"text-h1 q-mb-md"},[e._v("\n          After\n        ")]),e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n          "+e._s(t)+". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.\n        ")])}))],2)]},proxy:!0}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e.showSeparator?i("q-icon",{attrs:{slot:"separator",color:"primary",size:"40px",name:"drag_indicator"},on:{click:e.separatorLog},slot:"separator"}):e._e()],1),i("q-splitter",{staticClass:"q-mt-md stylish-splitter",attrs:{reverse:e.modelReverse,unit:e.modelUnit,limits:e.limits,disable:e.disable,"emit-immediately":e.emitImmediately,"separator-class":"bg-deep-orange"},scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"text-h1 q-mb-md"},[e._v("\n          Before\n        ")]),e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n          "+e._s(t)+". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.\n        ")])}))],2)]},proxy:!0},{key:"after",fn:function(){return[i("q-splitter",{attrs:{reverse:e.modelReverse,horizontal:"",disable:e.disable,"separator-class":"bg-deep-orange"},scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"text-h1 q-mb-md"},[e._v("\n              After - Before\n            ")]),e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n              "+e._s(t)+". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.\n            ")])}))],2)]},proxy:!0},{key:"after",fn:function(){return[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"text-h1 q-mb-md"},[e._v("\n              After - After\n            ")]),e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n              "+e._s(t)+". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.\n            ")])}))],2)]},proxy:!0}]),model:{value:e.insideModel,callback:function(t){e.insideModel=t},expression:"insideModel"}},[e.showSeparator?i("q-btn",{staticClass:"q-px-sm test-separator",attrs:{slot:"separator",color:"primary",unelevated:"",icon:"touch_app"},on:{click:e.separatorLog},slot:"separator"}):e._e()],1)]},proxy:!0}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e.showSeparator?i("div",{staticClass:"flex justify-center",attrs:{slot:"separator"},slot:"separator"},[i("q-btn",{staticClass:"q-px-sm",attrs:{color:"primary",unelevated:"",icon:"drag_indicator"},on:{click:e.separatorLog}}),i("q-splitter",{staticClass:"bg-white rounded-borders",staticStyle:{width:"50vw",height:"30vh"},attrs:{reverse:e.modelReverse,vertical:"",disable:e.disable,"separator-class":"bg-deep-orange"},scopedSlots:e._u([{key:"before",fn:function(){return[i("div",{staticClass:"q-layout-padding"},e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n              "+e._s(t)+". Lorem ipsum dolor sit.\n            ")])})),0)]},proxy:!0},{key:"after",fn:function(){return[i("div",{staticClass:"q-layout-padding"},e._l(20,(function(t){return i("div",{key:t,staticClass:"q-my-md"},[e._v("\n              "+e._s(t)+". Lorem ipsum dolor sit.\n            ")])})),0)]},proxy:!0}],null,!1,495056436),model:{value:e.innerSeparatorSplitModel,callback:function(t){e.innerSeparatorSplitModel=t},expression:"innerSeparatorSplitModel"}})],1):e._e()])],1)},s=[],o={data:function(){return{model:50,insideModel:50,innerSeparatorSplitModel:50,horizontal:!1,modelReverse:!1,modelUnit:"%",funkyLimits:!1,disable:!1,showSeparator:!0,emitImmediately:!1}},computed:{limits:function(){return"%"===this.modelUnit?!0===this.funkyLimits?[70,100]:[10,90]:!0===this.funkyLimits?[100,500]:[0,1/0]}},methods:{separatorLog:function(e){this.$q.notify("Clicked on separator"),console.log("separatorLog",e)}}},l=o,n=(i("f461"),i("a6c2")),r=Object(n["a"])(l,a,s,!1,null,null,null);t["default"]=r.exports},ef22:function(e,t,i){},f461:function(e,t,i){"use strict";var a=i("ef22"),s=i.n(a);s.a}}]);