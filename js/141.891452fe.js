(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[141],{6935:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-layout-padding q-mx-auto"},[o("div",{staticClass:"column flex-center",staticStyle:{height:"200vh",width:"200vw"}},[t._l(10,(function(e){return o("div",{key:e},[t._v("\n      Page has scroll on purpose\n    ")])})),o("div",{staticClass:"row justify-center"},[o("div",{staticClass:"q-gutter-md",staticStyle:{"max-width":"700px"}},[o("q-btn",{attrs:{label:"Alert",flat:"",color:"primary"},on:{click:function(e){t.alert=!0}}}),o("q-btn",{attrs:{label:"Confirm",flat:"",color:"primary"},on:{click:function(e){t.confirm=!0}}}),o("q-btn",{attrs:{label:"Prompt",flat:"",color:"primary"},on:{click:function(e){t.prompt=!0}}}),o("q-btn",{attrs:{label:"Persistent",flat:"",color:"primary"},on:{click:function(e){t.persistent=!0}}}),o("q-btn",{attrs:{label:"Close Icon",flat:"",color:"primary"},on:{click:function(e){t.icon=!0}}}),o("q-btn",{attrs:{label:"Bar",flat:"",color:"primary"},on:{click:function(e){t.bar=!0}}}),o("q-btn",{attrs:{label:"Bar 2 (auto-close)",flat:"",color:"primary"},on:{click:function(e){t.bar2=!0}}}),o("q-btn",{attrs:{label:"Toolbar",flat:"",color:"primary"},on:{click:function(e){t.toolbar=!0}}}),o("q-btn",{attrs:{label:"Scroll",flat:"",color:"primary"},on:{click:function(e){t.scroll=!0}}}),o("q-btn",{attrs:{label:"Scroll 2",flat:"",color:"primary"},on:{click:function(e){t.scroll2=!0}}}),o("q-btn",{attrs:{label:"Scroll 3 bottom",flat:"",color:"primary"},on:{click:function(e){t.scroll3=!0}}}),o("q-btn",{attrs:{label:"Maximized",flat:"",color:"primary"},on:{click:function(e){t.maximized=!0}}}),o("q-btn",{attrs:{label:"Positioned",flat:"",color:"primary"},on:{click:function(e){t.positioned=!0}}}),o("q-btn",{attrs:{label:"Maximized & positioned",flat:"",color:"primary"},on:{click:function(e){t.maxiPositioned=!0}}}),o("q-btn",{attrs:{label:"Seamless",flat:"",color:"primary"},on:{click:function(e){t.seamless=!0}}}),o("q-btn",{attrs:{label:"Layout",flat:"",color:"primary"},on:{click:function(e){t.layout=!0}}}),o("q-btn",{attrs:{label:"Inception",flat:"",color:"primary"},on:{click:function(e){t.inception=!0}}}),o("q-btn",{attrs:{label:"Non standard content",flat:"",color:"primary"},on:{click:function(e){t.nonStandard=!0}}}),o("q-btn",{attrs:{label:"Complex card",flat:"",color:"primary"},on:{click:function(e){t.complexCard=!0}}}),o("q-btn",{attrs:{label:"Sliders",flat:"",color:"primary"},on:{click:function(e){t.sliders=!0}}}),o("q-btn",{attrs:{label:"Layout Bottom",flat:"",color:"primary"},on:{click:function(e){t.layoutBottom=!0}}}),o("q-btn",{attrs:{label:"Close popup test",flat:"",color:"primary"},on:{click:function(e){t.closePopupTest=!0}}}),o("q-btn",{attrs:{label:"iOS top",flat:"",color:"primary"},on:{click:function(e){t.iOSTestTop=!0}}}),o("q-btn",{attrs:{label:"iOS bottom",flat:"",color:"primary"},on:{click:function(e){t.iOSTestBottom=!0}}}),o("q-btn",{attrs:{label:"iOS normal",flat:"",color:"primary"},on:{click:function(e){t.iOSTestNormal=!0}}}),o("q-btn",{attrs:{label:"iOS test 2",flat:"",color:"primary"},on:{click:function(e){t.iOSTest2=!0}}})],1)])],2),o("q-dialog",{attrs:{attr:"test","content-class":"test-class","no-esc-dismiss":""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Alert\n        ")])]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")]),o("q-card-section",[o("q-toggle",{attrs:{label:"Prevent closing with button"},model:{value:t.preventCloseToggle,callback:function(e){t.preventCloseToggle=e},expression:"preventCloseToggle"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup",value:!t.preventCloseToggle,expression:"!preventCloseToggle"}],attrs:{flat:"",label:"OK",color:"primary",disable:t.preventCloseToggle}})],1)],1)],1),o("q-dialog",{attrs:{attr:"test",value:t.alert,"content-class":"test-class","no-esc-dismiss":"",seamless:"",position:"bottom"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Alert - decoupled from model\n        ")])]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")]),o("q-card-section",[o("q-toggle",{attrs:{label:"Prevent closing with button"},model:{value:t.preventCloseToggle,callback:function(e){t.preventCloseToggle=e},expression:"preventCloseToggle"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup",value:!t.preventCloseToggle,expression:"!preventCloseToggle"}],attrs:{flat:"",label:"OK",color:"primary",disable:t.preventCloseToggle}})],1)],1)],1),o("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.persistent,callback:function(e){t.persistent=e},expression:"persistent"}},[o("q-card",{staticClass:"bg-teal text-white",staticStyle:{width:"300px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Persistent\n        ")])]),o("q-card-section",[t._v("\n        Click/Tap on the backdrop.\n      ")]),o("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),o("q-dialog",{model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("div",{staticClass:"text-h6"},[t._v("\n          Close icon\n        ")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")])],1)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.bar,callback:function(e){t.bar=e},expression:"bar"}},[o("q-card",[o("q-bar",[o("q-icon",{attrs:{name:"network_wifi"}}),o("q-icon",{attrs:{name:"network_cell"}}),o("q-icon",{attrs:{name:"battery_full"}}),o("div",[t._v("9:34")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")])],1)],1),o("q-dialog",{attrs:{"auto-close":"",persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:t.bar2,callback:function(e){t.bar2=e},expression:"bar2"}},[o("q-card",{staticClass:"bg-primary text-white"},[o("q-bar",[o("q-icon",{attrs:{name:"network_wifi"}}),o("q-icon",{attrs:{name:"network_cell"}}),o("q-icon",{attrs:{name:"battery_full"}}),o("div",[t._v("9:34")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("\n            Close\n          ")])],1)],1),o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Alert, Auto-closing on click\n        ")])]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")])],1)],1),o("q-dialog",{model:{value:t.toolbar,callback:function(e){t.toolbar=e},expression:"toolbar"}},[o("q-card",[o("q-toolbar",[o("q-avatar",[o("img",{attrs:{src:"https://cdn.quasar.dev/img/quasar-logo.png"}})]),o("q-toolbar-title",[o("span",{staticClass:"text-weight-bold"},[t._v("Quasar")]),t._v(" Framework")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")])],1)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("q-avatar",{attrs:{icon:"signal_wifi_off",color:"primary","text-color":"white"}}),o("span",{staticClass:"q-ml-sm"},[t._v("You are currently not connected to any network.")])],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Turn on Wifi",color:"primary"}})],1)],1)],1),o("q-dialog",{attrs:{persistent:""},model:{value:t.prompt,callback:function(e){t.prompt=e},expression:"prompt"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Your address\n        ")])]),o("q-card-section",[o("q-input",{attrs:{autofocus:""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Add address"}})],1)],1)],1),o("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.scroll,callback:function(e){t.scroll=e},expression:"scroll"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Terms of Agreement\n        ")])]),o("q-card-section",t._l(15,(function(e){return o("p",{key:e},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n        ")])})),0),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Decline",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Accept",color:"primary"}})],1)],1)],1),o("q-dialog",{model:{value:t.scroll2,callback:function(e){t.scroll2=e},expression:"scroll2"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Terms of Agreement\n        ")])]),o("q-separator"),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},t._l(15,(function(e){return o("p",{key:e},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n        ")])})),0),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Decline",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Accept",color:"primary"}})],1)],1)],1),o("q-dialog",{attrs:{position:"bottom",maximized:""},model:{value:t.scroll3,callback:function(e){t.scroll3=e},expression:"scroll3"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Terms of Agreement\n        ")])]),o("q-separator"),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},t._l(15,(function(e){return o("p",{key:e},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n        ")])})),0),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Decline",color:"primary"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Accept",color:"primary"}})],1)],1)],1),o("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.maximized,callback:function(e){t.maximized=e},expression:"maximized"}},[o("q-card",{staticClass:"bg-primary text-white"},[o("q-bar",[o("q-space"),o("q-btn",{attrs:{dense:"",flat:"",icon:"minimize",disable:!t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!1}}},[t.maximizedToggle?o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("\n            Minimize\n          ")]):t._e()],1),o("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square",disable:t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!0}}},[t.maximizedToggle?t._e():o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("\n            Maximize\n          ")])],1),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("\n            Close\n          ")])],1)],1),o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Alert\n        ")])]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")])],1)],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.positioned,callback:function(e){t.positioned=e},expression:"positioned"}},[o("q-card",{staticStyle:{width:"500px"}},[o("q-linear-progress",{attrs:{value:.6,color:"pink"}}),o("q-card-section",{staticClass:"row items-center no-wrap"},[o("div",[o("div",{staticClass:"text-weight-bold"},[t._v("\n            The Walker\n          ")]),o("div",{staticClass:"text-grey"},[t._v("\n            Fitz & The Tantrums\n          ")])]),o("q-space"),o("q-btn",{attrs:{flat:"",round:"",icon:"fast_rewind"}}),o("q-btn",{attrs:{flat:"",round:"",icon:"pause"}}),o("q-btn",{attrs:{flat:"",round:"",icon:"fast_forward"}})],1)],1)],1),o("q-dialog",{attrs:{position:"bottom",maximized:""},model:{value:t.maxiPositioned,callback:function(e){t.maxiPositioned=e},expression:"maxiPositioned"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Alert\n        ")])]),o("q-card-section",[t._v("\n        3.6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.\n      ")]),o("q-card-section",[o("q-toggle",{attrs:{label:"Prevent closing with button"},model:{value:t.preventCloseToggle,callback:function(e){t.preventCloseToggle=e},expression:"preventCloseToggle"}})],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup",value:!t.preventCloseToggle,expression:"!preventCloseToggle"}],attrs:{flat:"",label:"OK",color:"primary",disable:t.preventCloseToggle}})],1)],1)],1),o("q-dialog",{attrs:{seamless:"",position:"bottom"},model:{value:t.seamless,callback:function(e){t.seamless=e},expression:"seamless"}},[o("q-card",{staticStyle:{width:"350px"}},[o("q-linear-progress",{attrs:{value:.6,color:"pink"}}),o("q-card-section",{staticClass:"row items-center no-wrap"},[o("div",[o("div",{staticClass:"text-weight-bold"},[t._v("\n            The Walker\n          ")]),o("div",{staticClass:"text-grey"},[t._v("\n            Fitz & The Tantrums\n          ")])]),o("q-space"),o("q-btn",{attrs:{flat:"",round:"",icon:"play_arrow"}}),o("q-btn",{attrs:{flat:"",round:"",icon:"pause"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",icon:"close"}})],1)],1)],1),o("q-dialog",{model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}},[o("q-layout",{staticStyle:{height:"500px"},attrs:{view:"hhh lpR fff",container:""}},[o("q-header",{staticClass:"bg-black",attrs:{reveal:""}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}),o("q-toolbar-title",[t._v("Header")]),o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerR=!t.drawerR}}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),o("q-footer",{staticClass:"bg-black text-white",attrs:{reveal:""}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawer=!t.drawer}}}),o("q-toolbar-title",[t._v("Footer")]),o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerR=!t.drawerR}}})],1)],1),o("q-drawer",{attrs:{width:200,breakpoint:600},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(50,(function(e){return o("div",{key:e},[t._v("\n          Drawer "+t._s(e)+" / 50\n        ")])})),0),o("q-drawer",{attrs:{side:"right",width:200,breakpoint:300},model:{value:t.drawerR,callback:function(e){t.drawerR=e},expression:"drawerR"}},t._l(50,(function(e){return o("div",{key:e},[t._v("\n          Drawer "+t._s(e)+" / 50\n        ")])})),0),o("q-page-container",[o("q-page",{staticClass:"bg-yellow",staticStyle:{"padding-top":"50px"}},[t._l(t.contentSize,(function(e){return o("div",{key:e},[t._v("\n            My page My page My page My page My page My page My page My page My page "+t._s(e)+" / "+t._s(t.contentSize)+"\n          ")])})),o("q-page-sticky",{attrs:{position:"top-left",offset:[18,58]}},[o("q-btn",{staticClass:"rotate-45",attrs:{round:"",color:"primary",icon:"arrow_back"}})],1),o("q-page-sticky",{attrs:{position:"top-right",offset:[18,58]}},[o("q-btn",{staticClass:"rotate-45",attrs:{round:"",color:"primary",icon:"arrow_upward"}})],1),o("q-page-sticky",{attrs:{position:"bottom-left",offset:[18,18]}},[o("q-btn",{staticClass:"rotate-135",attrs:{round:"",color:"primary",icon:"arrow_forward"}})],1),o("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[o("q-btn",{staticClass:"rotate-45",attrs:{round:"",color:"primary",icon:"arrow_forward"}})],1),o("q-page-sticky",{staticClass:"bg-purple text-white",attrs:{position:"top",expand:""}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"map"}}),o("q-toolbar-title",[t._v("Title")]),o("q-checkbox",{attrs:{dark:"",color:"yellow",label:"Scroll"},model:{value:t.moreContent,callback:function(e){t.moreContent=e},expression:"moreContent"}})],1)],1)],2)],1)],1)],1),o("q-dialog",{model:{value:t.inception,callback:function(e){t.inception=e},expression:"inception"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Inception\n        ")])]),o("q-card-section",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laudantium minus earum totam modi laborum illo, corporis fuga saepe animi aliquam ea enim assumenda ut nulla natus aperiam quis. Iste.\n      ")]),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{attrs:{flat:"",label:"Open another dialog"},on:{click:function(e){t.persistent=!0}}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"}})],1)],1)],1),o("q-dialog",{model:{value:t.nonStandard,callback:function(e){t.nonStandard=e},expression:"nonStandard"}},[o("q-carousel",{staticClass:"bg-white shadow-1 rounded-borders",attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",height:"200px"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:1}},[o("q-icon",{attrs:{name:"style",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n          "+t._s(t.lorem)+"\n        ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:2}},[o("q-icon",{attrs:{name:"live_tv",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n          "+t._s(t.lorem)+"\n        ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:3}},[o("q-icon",{attrs:{name:"layers",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n          "+t._s(t.lorem)+"\n        ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:4}},[o("q-icon",{attrs:{name:"terrain",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n          "+t._s(t.lorem)+"\n        ")])],1)],1)],1),o("q-dialog",{model:{value:t.complexCard,callback:function(e){t.complexCard=e},expression:"complexCard"}},[o("q-card",[o("q-img",{attrs:{src:a("add5")}}),o("q-card-section",[o("q-btn",{staticClass:"absolute",staticStyle:{top:"0",right:"20px",transform:"translateY(-50%)"},attrs:{fab:"",color:"primary",icon:"place"}}),o("div",{staticClass:"row no-wrap items-center"},[o("div",{staticClass:"col text-h6 ellipsis"},[t._v("\n            Cafe Basilico\n          ")]),o("div",{staticClass:"col-auto text-grey q-pt-md"},[o("q-icon",{attrs:{name:"place"}}),t._v(" 250 ft\n          ")],1)]),o("q-rating",{attrs:{max:5,size:"32px"},model:{value:t.stars,callback:function(e){t.stars=e},expression:"stars"}})],1),o("q-card-section",[o("div",{staticClass:"text-subtitle1"},[t._v("\n          $・Italian, Cafe\n        ")]),o("div",{staticClass:"text-subtitle2 text-grey"},[t._v("\n          Small plates, salads & sandwiches in an intimate setting.\n        ")])]),o("q-separator"),o("q-card-actions",[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",icon:"event"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:""}},[t._v("\n          5:30PM\n        ")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:""}},[t._v("\n          7:30PM\n        ")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:""}},[t._v("\n          9:00PM\n        ")]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",color:"primary"}},[t._v("\n          Reserve\n        ")])],1)],1)],1),o("q-dialog",{model:{value:t.sliders,callback:function(e){t.sliders=e},expression:"sliders"}},[o("q-card",{staticClass:"q-px-sm q-pb-md",staticStyle:{width:"300px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Volumes\n        ")])]),o("q-item-label",{attrs:{header:""}},[t._v("\n        Media volume\n      ")]),o("q-item",{attrs:{dense:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"volume_up"}})],1),o("q-item-section",[o("q-slider",{attrs:{color:"teal",step:0},model:{value:t.slideVol,callback:function(e){t.slideVol=e},expression:"slideVol"}})],1)],1),o("q-item-label",{attrs:{header:""}},[t._v("\n        Alarm volume\n      ")]),o("q-item",{attrs:{dense:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"alarm"}})],1),o("q-item-section",[o("q-slider",{attrs:{color:"teal",step:0},model:{value:t.slideAlarm,callback:function(e){t.slideAlarm=e},expression:"slideAlarm"}})],1)],1),o("q-item-label",{attrs:{header:""}},[t._v("\n        Ring volume\n      ")]),o("q-item",{attrs:{dense:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"vibration"}})],1),o("q-item-section",[o("q-slider",{attrs:{color:"teal",step:0},model:{value:t.slideVibration,callback:function(e){t.slideVibration=e},expression:"slideVibration"}})],1)],1),o("q-card-section",{staticClass:"q-gutter-md"},[o("q-icon",{staticClass:"cursor-pointer",attrs:{size:"30px",name:"event"}},[o("q-popup-proxy",[o("q-date",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),o("q-icon",{staticClass:"cursor-pointer",attrs:{size:"30px",name:"colorize"}},[o("q-popup-proxy",[o("q-color",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),o("q-icon",{staticClass:"cursor-pointer",attrs:{size:"30px",name:"view_carousel"}},[o("q-popup-proxy",[o("q-carousel",{staticClass:"bg-white shadow-1 rounded-borders",attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",height:"500px"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:1}},[o("q-icon",{attrs:{name:"style",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n                  "+t._s(t.lorem)+"\n                ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:2}},[o("q-icon",{attrs:{name:"live_tv",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n                  "+t._s(t.lorem)+"\n                ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:3}},[o("q-icon",{attrs:{name:"layers",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n                  "+t._s(t.lorem)+"\n                ")])],1),o("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:4}},[o("q-icon",{attrs:{name:"terrain",color:"primary",size:"56px"}}),o("div",{staticClass:"q-mt-md text-center"},[t._v("\n                  "+t._s(t.lorem)+"\n                ")])],1)],1)],1)],1)],1),o("q-card-section",[o("q-select",{attrs:{options:t.selectOptions,label:"Select"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),o("q-separator",{attrs:{inset:""}}),o("q-card-section",[o("q-select",{attrs:{options:t.selectOptions,label:"Select"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),o("q-select",{attrs:{options:t.selectOptionsFiltered,"use-input":"",label:"Select - Use input"},on:{filter:t.filterFn},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),o("q-input",{attrs:{autofocus:"",label:"Text 1"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}}),o("q-input",{attrs:{label:"Text 2"},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),o("q-input",{attrs:{type:"textarea",label:"Text 3 - textarea"},model:{value:t.text3,callback:function(e){t.text3=e},expression:"text3"}}),o("q-select",{attrs:{options:t.selectOptions,multiple:"",label:"Select multiple"},model:{value:t.selectMultiple,callback:function(e){t.selectMultiple=e},expression:"selectMultiple"}}),o("q-select",{attrs:{options:t.selectOptionsFiltered,"use-input":"",multiple:"",label:"Select multiple - Use input"},on:{filter:t.filterFn},model:{value:t.selectMultiple,callback:function(e){t.selectMultiple=e},expression:"selectMultiple"}})],1)],1)],1),o("q-dialog",{attrs:{maximized:"",position:"bottom"},model:{value:t.layoutBottom,callback:function(e){t.layoutBottom=e},expression:"layoutBottom"}},[o("q-layout",{staticStyle:{height:"50vh"},attrs:{container:""}},[o("q-header",[t._v("Header")]),o("q-page-container",[o("q-page",{staticClass:"bg-white",attrs:{padding:""}},[t._v("\n          I should be a maximized dialog sliding from the bottom of the screen\n        ")])],1)],1)],1),o("q-dialog",t._b({model:{value:t.closePopupTest,callback:function(e){t.closePopupTest=e},expression:"closePopupTest"}},"q-dialog",t.testDialog,!1),[o("q-card",[o("q-card-section",[o("q-toggle",{attrs:{label:"Enable button"},model:{value:t.closePopupBtn,callback:function(e){t.closePopupBtn=e},expression:"closePopupBtn"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:!t.closePopupBtn,label:"Click"},on:{click:t.closePopupBtnHandler}})],1),o("q-card-section",[o("q-toggle",{attrs:{label:"Seamless"},model:{value:t.testDialog.seamless,callback:function(e){t.$set(t.testDialog,"seamless",e)},expression:"testDialog.seamless"}}),o("q-toggle",{attrs:{label:"Persistent"},model:{value:t.testDialog.persistent,callback:function(e){t.$set(t.testDialog,"persistent",e)},expression:"testDialog.persistent"}}),o("q-toggle",{attrs:{label:"No Backdrop Dismiss"},model:{value:t.testDialog.noBackdropDismiss,callback:function(e){t.$set(t.testDialog,"noBackdropDismiss",e)},expression:"testDialog.noBackdropDismiss"}})],1)],1)],1),o("q-dialog",{attrs:{position:"top"},model:{value:t.iOSTestTop,callback:function(e){t.iOSTestTop=e},expression:"iOSTestTop"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Title\n        ")]),o("div",{staticClass:"text-subtitle2"},[t._v("\n          Subtitle\n        ")])]),o("q-card-section",[o("q-input",{model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],1),o("q-card-section",[o("q-input",{attrs:{autofocus:""},model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],1)],1)],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.iOSTestBottom,callback:function(e){t.iOSTestBottom=e},expression:"iOSTestBottom"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Title\n        ")]),o("div",{staticClass:"text-subtitle2"},[t._v("\n          Subtitle\n        ")])]),o("q-card-section",[o("q-input",{attrs:{autofocus:""},model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],1),o("q-card-section",[o("q-input",{model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],1)],1)],1),o("q-dialog",{model:{value:t.iOSTestNormal,callback:function(e){t.iOSTestNormal=e},expression:"iOSTestNormal"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Title\n        ")]),o("div",{staticClass:"text-subtitle2"},[t._v("\n          Subtitle\n        ")])]),o("q-card-section",[o("q-input",{attrs:{autofocus:""},model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],1)],1)],1),o("q-dialog",{model:{value:t.iOSTest2,callback:function(e){t.iOSTest2=e},expression:"iOSTest2"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Title\n        ")]),o("div",{staticClass:"text-subtitle2"},[t._v("\n          Subtitle\n        ")])]),o("q-card-section",[t._l(15,(function(e){return o("q-input",{key:e,attrs:{label:e+" of 15"},model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})})),o("q-input",{attrs:{autofocus:"",label:"Last one"},model:{value:t.iOStext,callback:function(e){t.iOStext=e},expression:"iOStext"}})],2)],1)],1)],1)},s=[],i={data(){return{alert:!0,persistent:!1,confirm:!1,prompt:!1,icon:!1,bar:!1,bar2:!1,toolbar:!1,scroll:!1,scroll2:!1,scroll3:!1,maximized:!1,positioned:!1,maxiPositioned:!1,seamless:!1,layout:!1,inception:!1,nonStandard:!1,complexCard:!1,sliders:!1,layoutBottom:!1,maximizedToggle:!0,preventCloseToggle:!1,testDialog:{seamless:!1,persistent:!1,noBackdropDismiss:!1},address:"",text1:"",text2:"",text3:"",moreContent:!0,drawer:!1,drawerR:!1,slide:1,lorem:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",stars:3,slideVol:39,slideAlarm:56,slideVibration:63,date:"2018/03/14",color:"#f46234",select:"ten",selectMultiple:[],selectOptions:["one","two","three","four","five","six","seven","eight","nine","ten"],selectOptionsFiltered:[],closePopupTest:!1,closePopupBtn:!1,iOSTestTop:!1,iOSTestBottom:!1,iOSTestNormal:!1,iOSTest2:!1,iOStext:""}},computed:{contentSize(){return this.moreContent?150:5}},methods:{openSpecialPosition(t){this.$q.dialog({title:"Positioned",message:`This dialog appears from ${t}.`,position:t})},closePopupBtnHandler(){console.log("closePopupBtnHandler")},filterFn(t,e){e(""!==t?()=>{const e=t.toLowerCase();this.selectOptionsFiltered=this.selectOptions.filter(t=>t.toLowerCase().indexOf(e)>-1)}:()=>{this.selectOptionsFiltered=this.selectOptions})}}},l=i,n=a("a6c2"),r=Object(n["a"])(l,o,s,!1,null,null,null);e["default"]=r.exports}}]);