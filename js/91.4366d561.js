(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{e9f1:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"q-layout-padding row q-col-gutter-md"},[o("div",{staticClass:"col-12 col-md-6 col-xl-3"},[o("q-card",[o("q-card-section",{staticClass:"bg-primary text-white"},[o("div",{staticClass:"text-h6"},[t._v("\n            Animation, autofocus for select and "),o("strong",[t._v("input type text filled")])])]),o("q-separator"),o("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:t.step1,callback:function(e){t.step1=e},expression:"step1"}},[o("q-step",{attrs:{name:1,title:"Step 1",icon:"settings",done:t.step1>1}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputTextModel,callback:function(e){t.inputTextModel=e},expression:"inputTextModel"}})],1),o("q-step",{attrs:{name:2,title:"Step 2",caption:"Caption",icon:"create_new_folder",done:t.step1>2}},[o("q-select",{attrs:{options:t.options,autofocus:t.autofocus},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}})],1),o("q-step",{attrs:{name:3,title:"Step 3",icon:"assignment"}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputTextModel,callback:function(e){t.inputTextModel=e},expression:"inputTextModel"}})],1),o("q-step",{attrs:{name:4,title:"Step 4",caption:"Disabled",icon:"assignment",disable:""}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputTextModel,callback:function(e){t.inputTextModel=e},expression:"inputTextModel"}})],1)],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{color:"primary",label:4===t.step1?"Reset":"Next step"},on:{click:function(e){4===t.step1?t.step1=0:t.step1++}}})],1)],1)],1),o("div",{staticClass:"col-12 col-md-6 col-xl-3"},[o("q-card",[o("q-card-section",{staticClass:"bg-primary text-white"},[o("div",{staticClass:"text-h6"},[t._v("\n            Animation, autofocus for select and "),o("strong",[t._v("input type text empty")])])]),o("q-separator"),o("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:t.step2,callback:function(e){t.step2=e},expression:"step2"}},[o("q-step",{attrs:{name:1,title:"Step 1",icon:"settings",done:t.step2>1}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputEmptyModel,callback:function(e){t.inputEmptyModel=e},expression:"inputEmptyModel"}})],1),o("q-step",{attrs:{name:2,title:"Step 2",caption:"Caption",icon:"create_new_folder",done:t.step2>2}},[o("q-select",{attrs:{options:t.options,autofocus:t.autofocus},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}})],1),o("q-step",{attrs:{name:3,title:"Step 3",icon:"assignment"}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputEmptyModel,callback:function(e){t.inputEmptyModel=e},expression:"inputEmptyModel"}})],1),o("q-step",{attrs:{name:4,title:"Step 4",caption:"Disabled",icon:"assignment",disable:""}},[o("q-input",{attrs:{autofocus:t.autofocus},model:{value:t.inputEmptyModel,callback:function(e){t.inputEmptyModel=e},expression:"inputEmptyModel"}})],1)],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{color:"primary",label:4===t.step2?"Reset":"Next step"},on:{click:function(e){4===t.step2?t.step2=0:t.step2++}}})],1)],1)],1),o("div",{staticClass:"col-12 col-md-6 col-xl-3"},[o("q-card",[o("q-card-section",{staticClass:"bg-primary text-white"},[o("div",{staticClass:"text-h6"},[t._v("\n            Animation, autofocus for select and "),o("strong",[t._v("input type number filled")])])]),o("q-separator"),o("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:t.step3,callback:function(e){t.step3=e},expression:"step3"}},[o("q-step",{attrs:{name:1,title:"Step 1",icon:"settings",done:t.step3>1}},[o("q-input",{attrs:{type:"number",autofocus:t.autofocus},model:{value:t.inputNumModel,callback:function(e){t.inputNumModel=e},expression:"inputNumModel"}})],1),o("q-step",{attrs:{name:2,title:"Step 2",caption:"Caption",icon:"create_new_folder",done:t.step3>2}},[o("q-select",{attrs:{options:t.options,autofocus:t.autofocus},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}})],1),o("q-step",{attrs:{name:3,title:"Step 3",icon:"assignment"}},[o("q-input",{attrs:{type:"number",autofocus:t.autofocus},model:{value:t.inputNumModel,callback:function(e){t.inputNumModel=e},expression:"inputNumModel"}})],1),o("q-step",{attrs:{name:4,title:"Step 4",caption:"Disabled",icon:"assignment",disable:""}},[o("q-input",{attrs:{type:"number",autofocus:t.autofocus},model:{value:t.inputNumModel,callback:function(e){t.inputNumModel=e},expression:"inputNumModel"}})],1)],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{color:"primary",label:4===t.step3?"Reset":"Next step"},on:{click:function(e){4===t.step3?t.step3=0:t.step3++}}})],1)],1)],1),o("div",{staticClass:"col-12 col-md-6 col-xl-3"},[o("q-card",[o("q-card-section",{staticClass:"bg-primary text-white"},[o("div",{staticClass:"text-h6"},[t._v("\n            Animation, autofocus for select and "),o("strong",[t._v("field")])])]),o("q-separator"),o("q-stepper",{attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:t.step4,callback:function(e){t.step4=e},expression:"step4"}},[o("q-step",{attrs:{name:1,title:"Step 1",icon:"settings",done:t.step4>1}},[o("q-field",{attrs:{autofocus:t.autofocus,tabindex:"0"},scopedSlots:t._u([{key:"control",fn:function(){return[o("div",[t._v("\n                  Field content\n                ")])]},proxy:!0}])})],1),o("q-step",{attrs:{name:2,title:"Step 2",caption:"Caption",icon:"create_new_folder",done:t.step4>2}},[o("q-select",{attrs:{options:t.options,autofocus:t.autofocus},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}})],1),o("q-step",{attrs:{name:3,title:"Step 3",icon:"assignment"}},[o("q-field",{attrs:{autofocus:t.autofocus,tabindex:"0"},scopedSlots:t._u([{key:"control",fn:function(){return[o("div",[t._v("\n                  Field content\n                ")])]},proxy:!0}])})],1),o("q-step",{attrs:{name:4,title:"Step 4",caption:"Disabled",icon:"assignment",disable:""}},[o("q-field",{attrs:{autofocus:t.autofocus,tabindex:"0"},scopedSlots:t._u([{key:"control",fn:function(){return[o("div",[t._v("\n                  Field content\n                ")])]},proxy:!0}])})],1)],1),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{color:"primary",label:4===t.step4?"Reset":"Next step"},on:{click:function(e){4===t.step4?t.step4=0:t.step4++}}})],1)],1)],1)])])},a=[],n={data(){return{step1:1,step2:1,step3:1,step4:1,inputTextModel:"Text",inputEmptyModel:null,inputNumModel:1,selectModel:"Opt 1",options:["Opt 1","Opt 2","Opt 3"],autofocus:!0}}},i=n,l=o("a6c2"),c=Object(l["a"])(i,s,a,!1,null,null,null);e["default"]=c.exports}}]);