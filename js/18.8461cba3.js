(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"5cd0":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("q-layout",{attrs:{view:"lHh lpr fFf"}},[t("q-header",{attrs:{value:e.header}},[t("q-toolbar",[t("q-toolbar-title",[e._v("Pull To Refresh - Header")])],1)],1),t("q-footer",{attrs:{value:e.footer}},[t("q-toolbar",[t("q-toolbar-title",[e._v("Pull To Refresh - Footer")])],1)],1),t("q-page-container",[t("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[t("q-page",{staticClass:"bg-orange-4",class:{"column no-wrap no-height":e.hasScroll},attrs:{padding:""}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.guardTop,expression:"guardTop"}],staticClass:"bg-green-4 q-pa-md text-center"},[e._v("\n          Guarding text above QPullToRefresh\n        ")]),t(e.scrollArea?"QScrollArea":"div",{tag:"component",class:e.scrollClass},[t("q-pull-to-refresh",{ref:"pull",attrs:{color:"primary",disable:e.disable},on:{refresh:e.refresh}},[t("q-select",{attrs:{options:e.selectOptions,label:"Test options scroll"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}),t("div",{staticClass:"bg-white overflow-hidden-y"},[t("div",[t("div",{staticClass:"caption bg-yellow-6"},[e._v("\n                  Pull down to refresh on the content below.\n                  On desktop it works by dragging the content down.\n                ")]),t("div",{staticClass:"caption bg-yellow-6"},[t("q-toggle",{attrs:{label:"Show Header"},model:{value:e.header,callback:function(l){e.header=l},expression:"header"}}),t("q-toggle",{attrs:{label:"Show Footer"},model:{value:e.footer,callback:function(l){e.footer=l},expression:"footer"}}),t("q-toggle",{attrs:{label:"Show Top Guard"},model:{value:e.guardTop,callback:function(l){e.guardTop=l},expression:"guardTop"}}),t("q-toggle",{attrs:{label:"Show Bottom Guard"},model:{value:e.guardBottom,callback:function(l){e.guardBottom=l},expression:"guardBottom"}}),t("q-toggle",{attrs:{label:"Disable"},model:{value:e.disable,callback:function(l){e.disable=l},expression:"disable"}}),t("q-toggle",{attrs:{label:"Scroll"},model:{value:e.scroll,callback:function(l){e.scroll=l},expression:"scroll"}}),t("q-toggle",{attrs:{label:"QScrollArea"},model:{value:e.scrollArea,callback:function(l){e.scrollArea=l},expression:"scrollArea"}})],1),t("div",{staticClass:"bg-yellow-6 q-mx-md"},[t("q-select",{attrs:{options:e.selectOptions,label:"Test options scroll"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}})],1)]),e._l(e.items,(function(l,o){return t("div",{key:o,staticClass:"caption bg-yellow-6"},[t("q-chip",{staticClass:"shadow-1",attrs:{square:"",color:"secondary"}},[e._v("\n                  "+e._s(e.items.length-o)+"\n                ")]),e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n              ")],1)}))],2)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.guardBottom,expression:"guardBottom"}],staticClass:"bg-green-4 q-pa-md text-center"},[e._v("\n          Guarding text below QPullToRefresh\n        ")])],1)],1)],1)],1)},a=[],s={data(){return{items:[{},{},{},{},{},{},{},{},{}],guardTop:!0,guardBottom:!0,header:!0,footer:!0,disable:!1,scroll:!1,scrollArea:!1,selectModel:null,selectOptions:Array(50).fill(null).map((e,l)=>"Option "+(l+1))}},watch:{scroll(){this.$nextTick(()=>{this.$refs.pull.updateScrollTarget()})},scrollArea(){this.$nextTick(()=>{this.$refs.pull.updateScrollTarget()})}},computed:{hasScroll(){return this.scroll||this.scrollArea},scrollClass(){return this.scrollArea?"col":this.scroll?"scroll":null}},methods:{refresh(e){setTimeout(()=>{this.items.push({}),this.$q.notify("Item #"+this.items.length+" is new."),e()},1e3)},test(e){e.stopPropagation(),console.log("test",e)}}},r=s,i=(t("c156"),t("a6c2")),n=Object(i["a"])(r,o,a,!1,null,null,null);l["default"]=n.exports},a061:function(e,l,t){},c156:function(e,l,t){"use strict";var o=t("a061"),a=t.n(o);a.a}}]);