(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"1d30":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"q-layout-padding"},[i("div",{staticClass:"caption",staticStyle:{"margin-top":"120px"}},[t._v("\n      This page has intended scroll so you can see multiple scenarios.\n    ")]),i("div",{staticClass:"q-gutter-sm"},[i("q-toggle",{staticClass:"z-max fixed-top-left",model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}}),i("q-btn",{attrs:{color:"primary",label:"Persistent"}},[i("q-menu",{ref:"popover1",attrs:{persistent:"","transition-show":"jump-down"},on:{show:function(e){return t.log("@show popover1 persistent")},hide:function(e){return t.log("@hide popover1 persistent")}},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gigi,expression:"gigi"}],domProps:{value:t.gigi},on:{input:function(e){e.target.composing||(t.gigi=e.target.value)}}}),i("q-list",{staticStyle:{"min-width":"100px"},attrs:{padding:""}},t._l(20,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1),i("q-btn",{attrs:{color:"primary",label:"Decoupled"}},[i("q-menu",{ref:"popover11",attrs:{value:t.toggle,persistent:"","transition-show":"jump-up",anchor:"top right"},on:{show:function(e){return t.log("@show popover11 decoupled")},hide:function(e){return t.log("@hide popover11 decoupled")}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.gigi,expression:"gigi"}],domProps:{value:t.gigi},on:{input:function(e){e.target.composing||(t.gigi=e.target.value)}}}),i("q-list",{staticStyle:{"min-width":"100px"},attrs:{padding:""}},t._l(20,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1),i("q-btn",{attrs:{color:"primary",icon:"map"}},[i("q-menu",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left"},on:{show:function(e){return t.log("@show popover_map")},hide:function(e){return t.log("@hide popover_map")}}},[i("q-list",{staticStyle:{"min-width":"100px"}},[i("div",{staticClass:"bg-grey-3",staticStyle:{height:"50px"}},[t._v("\n              Weee\n            ")]),t._l(20,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)}))],2)],1)],1),i("q-btn",{attrs:{color:"primary",label:"Cover"}},[i("q-menu",{attrs:{cover:""},on:{show:function(e){return t.log("@show cover")},hide:function(e){return t.log("@hide cover")}}},[i("q-list",{staticStyle:{"min-width":"100px"}},t._l(20,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1),i("q-btn",{attrs:{color:"primary",label:"Menu with select"}},[i("q-menu",{attrs:{cover:"","content-class":"q-pa-md"},on:{show:function(e){return t.log("@show cover")},hide:function(e){return t.log("@hide cover")}}},[i("div",{staticClass:"column q-gutter-md"},[i("q-select",{attrs:{options:t.selectOptions,behavior:"menu",filled:"",label:"Select single - menu"},model:{value:t.selectModelS,callback:function(e){t.selectModelS=e},expression:"selectModelS"}}),i("q-select",{attrs:{options:t.selectOptions,behavior:"menu",filled:"",multiple:"",label:"Select multiple - menu"},model:{value:t.selectModelM,callback:function(e){t.selectModelM=e},expression:"selectModelM"}}),i("q-select",{attrs:{options:t.selectOptions,behavior:"dialog",filled:"",label:"Select single - dialog"},model:{value:t.selectModelS,callback:function(e){t.selectModelS=e},expression:"selectModelS"}}),i("q-select",{attrs:{options:t.selectOptions,behavior:"dialog",filled:"",multiple:"",label:"Select multiple - dialog"},model:{value:t.selectModelM,callback:function(e){t.selectModelM=e},expression:"selectModelM"}})],1)])],1),i("q-btn",{attrs:{label:"Dialog"},on:{click:function(e){t.dialog=!0}}}),i("q-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("q-card",{staticClass:"q-pa-xl"},[i("div",{staticClass:"q-gutter-md"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close Dialog"}}),i("q-btn",{attrs:{label:"Open Dialog"},on:{click:function(e){t.dialog2=!0}}}),i("q-btn",{attrs:{label:"Menu",color:"primary"}},[i("q-menu",[i("q-list",[i("q-item",{attrs:{clickable:""},on:{click:function(e){t.dialog2=!0}}},[i("q-item-section",[t._v("\n                      Open Dialog\n                    ")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(e){t.dialog2=!0}}},[i("q-item-section",[t._v("\n                      Close Menu and Open Dialog\n                    ")])],1),t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("Menu Item "+t._s(e))])],1)}))],2)],1)],1)],1)])],1),i("q-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[i("q-card",{staticClass:"q-pa-xl"},[i("div",{staticClass:"q-gutter-md"},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close Dialog"}}),i("q-btn",{attrs:{label:"Menu",color:"primary"}},[i("q-menu",[i("q-list",[t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("Menu Item "+t._s(e))])],1)})),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Submenu Label")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",[t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("Menu Item "+t._s(e))])],1)})),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup",value:2,expression:"2"}],attrs:{clickable:""}},[i("q-item-section",[t._v("Close dialog")])],1)],2)],1)],1)],2)],1)],1)],1)])],1),i("q-btn",{attrs:{color:"purple",label:"Account Settings"}},[i("q-menu",[i("div",{staticClass:"row no-wrap q-pa-md"},[i("div",{staticClass:"column"},[i("div",{staticClass:"text-h6 q-mb-md"},[t._v("Settings")]),i("q-toggle",{attrs:{label:"Use Mobile Data"},model:{value:t.mobileData,callback:function(e){t.mobileData=e},expression:"mobileData"}}),i("q-toggle",{attrs:{label:"Bluetooth"},model:{value:t.bluetooth,callback:function(e){t.bluetooth=e},expression:"bluetooth"}})],1),i("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),i("div",{staticClass:"column items-center"},[i("q-avatar",{attrs:{size:"72px"}},[i("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar4.jpg"}})]),i("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[t._v("John Doe")]),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:"Logout",push:"",size:"sm"}})],1)],1)])],1)],1),i("div",{staticClass:"q-gutter-md q-my-md"},[i("q-card",{staticClass:"q-mx-auto",staticStyle:{width:"500px","max-width":"90vw"}},[i("q-card-section",{staticClass:"bg-primary text-center"},[i("q-btn",{attrs:{push:"",color:"orange",label:"Tap Me Large"}},[i("q-menu",{attrs:{fit:t.fit,cover:t.cover,anchor:t.anchor,self:t.self,"auto-close":""}},[i("q-list",{staticStyle:{"min-width":"400px"}},t._l(50,(function(e){return i("q-item",{key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1),i("q-btn",{staticClass:"on-right",attrs:{push:"",color:"orange",label:"Tap Me Small"}},[i("q-menu",{attrs:{fit:t.fit,cover:t.cover,anchor:t.anchor,self:t.self}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1)],1),i("div",{staticClass:"text-weight-bold text-center q-my-md"},[t._v("\n          Configure the Popover for button above.\n        ")]),t.cover?i("div",{staticClass:"text-center"},[i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v("\n            cover\n          ")]),i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v('\n            anchor="'+t._s(t.anchor)+'"\n          ')])],1):i("div",{staticClass:"text-center"},[t.fit?i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v("\n            fit\n          ")]):t._e(),i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v('\n            anchor="'+t._s(t.anchor)+'"\n          ')]),i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v('\n            self="'+t._s(t.self)+'"\n          ')])],1),i("div",{staticClass:"row flex-center q-my-sm q-gutter-md"},[i("q-toggle",{attrs:{label:"Fit"},model:{value:t.fit,callback:function(e){t.fit=e},expression:"fit"}}),i("q-toggle",{attrs:{label:"Cover"},model:{value:t.cover,callback:function(e){t.cover=e},expression:"cover"}})],1),i("q-card-section",{staticClass:"row",class:t.cover?"justify-center":""},[i("div",{staticClass:"column items-center col-6"},[i("div",{staticClass:"text-weight-bold"},[t._v("\n              Anchor Origin\n            ")]),i("div",{staticClass:"flex q-gutter-sm"},[i("div",{staticClass:"column"},[i("div",[t._v("Vertical")]),i("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.anchorOrigin.vertical,callback:function(e){t.$set(t.anchorOrigin,"vertical",e)},expression:"anchorOrigin.vertical"}}),i("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.anchorOrigin.vertical,callback:function(e){t.$set(t.anchorOrigin,"vertical",e)},expression:"anchorOrigin.vertical"}}),i("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.anchorOrigin.vertical,callback:function(e){t.$set(t.anchorOrigin,"vertical",e)},expression:"anchorOrigin.vertical"}})],1),i("div",{staticClass:"column"},[i("div",[t._v("Horizontal")]),i("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.anchorOrigin.horizontal,callback:function(e){t.$set(t.anchorOrigin,"horizontal",e)},expression:"anchorOrigin.horizontal"}}),i("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.anchorOrigin.horizontal,callback:function(e){t.$set(t.anchorOrigin,"horizontal",e)},expression:"anchorOrigin.horizontal"}}),i("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.anchorOrigin.horizontal,callback:function(e){t.$set(t.anchorOrigin,"horizontal",e)},expression:"anchorOrigin.horizontal"}})],1)])]),t.cover?t._e():i("div",{staticClass:"column items-center col-6"},[i("div",{staticClass:"text-weight-bold"},[t._v("\n              Self Origin\n            ")]),i("div",{staticClass:"flex q-gutter-sm"},[i("div",{staticClass:"column"},[i("div",[t._v("Vertical")]),i("q-radio",{attrs:{val:"top",label:"Top"},model:{value:t.selfOrigin.vertical,callback:function(e){t.$set(t.selfOrigin,"vertical",e)},expression:"selfOrigin.vertical"}}),i("q-radio",{attrs:{val:"center",label:"Center"},model:{value:t.selfOrigin.vertical,callback:function(e){t.$set(t.selfOrigin,"vertical",e)},expression:"selfOrigin.vertical"}}),i("q-radio",{attrs:{val:"bottom",label:"Bottom"},model:{value:t.selfOrigin.vertical,callback:function(e){t.$set(t.selfOrigin,"vertical",e)},expression:"selfOrigin.vertical"}})],1),i("div",{staticClass:"column"},[i("div",[t._v("Horizontal")]),i("q-radio",{attrs:{val:"left",label:"Left"},model:{value:t.selfOrigin.horizontal,callback:function(e){t.$set(t.selfOrigin,"horizontal",e)},expression:"selfOrigin.horizontal"}}),i("q-radio",{attrs:{val:"middle",label:"Middle"},model:{value:t.selfOrigin.horizontal,callback:function(e){t.$set(t.selfOrigin,"horizontal",e)},expression:"selfOrigin.horizontal"}}),i("q-radio",{attrs:{val:"right",label:"Right"},model:{value:t.selfOrigin.horizontal,callback:function(e){t.$set(t.selfOrigin,"horizontal",e)},expression:"selfOrigin.horizontal"}})],1)])])])],1),i("q-card",{staticClass:"q-mx-auto",staticStyle:{width:"500px","max-width":"90vw"}},[i("q-card-section",[i("div",{staticClass:"q-gutter-sm"},[i("q-toggle",{attrs:{label:"touch-position"},model:{value:t.touchPosition,callback:function(e){t.touchPosition=e},expression:"touchPosition"}}),i("q-toggle",{attrs:{label:"context-menu"},model:{value:t.contextMenu,callback:function(e){t.contextMenu=e},expression:"contextMenu"}})],1)]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[i("q-menu",{attrs:{"touch-position":t.touchPosition,"context-menu":t.contextMenu}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1),i("div",[t._v("With model: "+t._s(t.menuModelTouch))]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[i("q-menu",{attrs:{"touch-position":t.touchPosition,"context-menu":t.contextMenu},model:{value:t.menuModelTouch,callback:function(e){t.menuModelTouch=e},expression:"menuModelTouch"}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1)],1),i("q-card",{staticClass:"q-mx-auto",staticStyle:{width:"500px","max-width":"90vw"}},[i("q-card-section",[i("q-toggle",{attrs:{label:"v-if test"},model:{value:t.vIfTest,callback:function(e){t.vIfTest=e},expression:"vIfTest"}})],1),t.vIfTest?i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[i("div",{staticClass:"absolute-bottom-right"},[t._v("\n            attached to q-img\n          ")]),i("q-menu",{attrs:{"touch-position":""}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1):t._e(),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/parallax2.jpg"}},[i("div",{staticClass:"absolute-bottom-right"},[t._v("\n            attached to q-menu\n          ")]),t.vIfTest?i("q-menu",{attrs:{"touch-position":""}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1):t._e()],1)],1),i("q-card",{staticClass:"q-mx-auto",staticStyle:{width:"500px","max-width":"90vw"}},[i("q-card-section",[i("div",{staticClass:"row items-center q-gutter-sm"},[i("q-chip",{attrs:{square:"",color:"primary","text-color":"white"}},[t._v("\n              target\n            ")]),i("q-radio",{attrs:{val:!1,label:"false (no target whatsoever)"},model:{value:t.targetEl,callback:function(e){t.targetEl=e},expression:"targetEl"}}),i("q-radio",{attrs:{val:!0,label:"true (original parent)"},model:{value:t.targetEl,callback:function(e){t.targetEl=e},expression:"targetEl"}}),i("q-radio",{attrs:{val:"#target-img-1",label:"#target-img-1"},model:{value:t.targetEl,callback:function(e){t.targetEl=e},expression:"targetEl"}}),i("q-radio",{attrs:{val:"#target-img-2",label:"#target-img-2"},model:{value:t.targetEl,callback:function(e){t.targetEl=e},expression:"targetEl"}}),i("q-radio",{attrs:{val:"#bogus",label:"#bogus"},model:{value:t.targetEl,callback:function(e){t.targetEl=e},expression:"targetEl"}})],1)]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/material.png",id:"target-img-1"}},[i("div",{staticClass:"absolute-bottom-right"},[t._v("\n            #target-img-1\n          ")])]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/parallax2.jpg",id:"target-img-2"}},[i("div",{staticClass:"absolute-bottom-right"},[t._v("\n            #target-img-2\n          ")])]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/blueish.jpg"}},[i("div",{staticClass:"absolute-bottom-right"},[t._v("\n            Original parent\n          ")]),i("q-menu",{attrs:{"touch-position":"",target:t.targetEl}},[i("q-list",t._l(5,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""},on:{click:function(e){return t.showNotify()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1)],1),i("q-card",{staticClass:"q-mx-auto",staticStyle:{width:"500px","max-width":"90vw"}},[i("q-card-section",[t._v("\n          Menu in menu\n        ")]),i("q-img",{staticStyle:{height:"100px"},attrs:{src:"https://cdn.quasar.dev/img/parallax1.jpg"}},[i("q-menu",{attrs:{"touch-position":""}},[i("q-list",[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",[t._v("v-close-popup")])],1),t._l(3,(function(e){return i("q-item",{key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("Label")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[i("q-item-section",[t._v("v-close-popup")])],1),t._l(3,(function(e){return i("q-item",{key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("Submenu autoclose")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{"auto-close":"",anchor:"top right",self:"top left"}},[i("q-list",t._l(3,(function(e){return i("q-item",{key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("3rd level Label")])],1)})),1)],1)],1)})),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Submenu closepopup")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",t._l(3,(function(e){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:e,attrs:{clickable:""}},[i("q-item-section",[t._v("3rd level Label")])],1)})),1)],1)],1)],2)],1)],1)}))],2)],1)],1)],1)],1),i("div",{staticStyle:{width:"250vw",height:"400vh"}},[i("div",{staticClass:"row q-pa-sm"},[i("div",{staticClass:"col-4"},[t._v("Left col")]),i("div",{staticClass:"col-4"},[i("q-select",{attrs:{options:t.selectOptions,behavior:"menu",filled:"",label:"Select single - menu - fit"},model:{value:t.selectModelS,callback:function(e){t.selectModelS=e},expression:"selectModelS"}})],1)]),i("div",{staticClass:"row q-pa-sm"},[i("div",{staticClass:"col-4"},[t._v("Left col")]),i("div",{staticClass:"col-4"},[i("q-select",{attrs:{options:t.selectOptions,behavior:"menu",filled:"",label:"Select single - menu - cover","options-cover":""},model:{value:t.selectModelS,callback:function(e){t.selectModelS=e},expression:"selectModelS"}})],1)])]),i("q-btn",{staticClass:"fixed-top-right",staticStyle:{top:"65px",right:"16px"},attrs:{color:"secondary",icon:"directions"}},[i("q-menu",{ref:"popover3"},[i("q-img",{staticStyle:{height:"150px",width:"200px"},attrs:{src:"https://cdn.quasar.dev/img/map.png",tabindex:"0"},nativeOn:{click:function(e){t.showNotify(),t.$refs.popover3.hide()}}})],1)],1),i("q-btn",{staticClass:"fixed-bottom-right",staticStyle:{bottom:"10px",right:"16px"},attrs:{color:"accent",icon:"plus_one"}},[i("q-menu",{ref:"popover4"},[i("div",{staticClass:"group",staticStyle:{width:"220px","text-align":"center"}},[i("q-btn",{attrs:{icon:"thumb_up",flat:"",color:"primary"},on:{click:function(e){t.showNotify(),t.$refs.popover4.hide()}}}),i("q-btn",{attrs:{icon:"thumb_down",flat:"",color:"primary"},on:{click:function(e){t.showNotify(),t.$refs.popover4.hide()}}}),i("q-btn",{attrs:{icon:"share",flat:"",color:"secondary"},on:{click:function(e){t.showNotify(),t.$refs.popover4.hide()}}})],1)])],1)],1),i("q-btn",{staticClass:"fixed-bottom-left",staticStyle:{bottom:"10px",left:"10px"},attrs:{icon:"menu",color:"primary"}},[i("q-menu",{ref:"popover5"},[i("q-list",{staticStyle:{"min-width":"200px"}},t._l(20,(function(e){return i("q-item",{key:e,attrs:{clickable:""},nativeOn:{click:function(e){t.showNotify(),t.$refs.popover5.hide()}}},[i("q-item-section",[t._v("Label")])],1)})),1)],1)],1)],1)},l=[],a={data(){let t=[];for(let e=0;e<780;e+=1){const i=String.fromCharCode(97+e%26),o=`${i}${i}${i}${i}${i}#${e}`;t.push({label:o,value:o})}return{gigi:"",fit:!1,cover:!1,toggle:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},selfOrigin:{vertical:"top",horizontal:"left"},terms:"",modelDate:null,model:30,menuModelTouch:!1,min:0,max:50,list:t,selectModelS:null,selectModelM:null,selectOptions:t,vIfTest:!0,touchPosition:!0,contextMenu:!0,targetEl:"#target-img-1",dialog:!1,dialog2:!1,mobileData:!0,bluetooth:!1}},computed:{anchor(){return`${this.anchorOrigin.vertical} ${this.anchorOrigin.horizontal}`},self(){return`${this.selfOrigin.vertical} ${this.selfOrigin.horizontal}`}},methods:{showNotify(){this.$q.notify((this.$q.platform.is.desktop?"Clicked":"Tapped")+" on a QMenu item")},log(t){console.log(t)}}},s=a,r=i("a6c2"),n=Object(r["a"])(s,o,l,!1,null,null,null);e["default"]=n.exports}}]);