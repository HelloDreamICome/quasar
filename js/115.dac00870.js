(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{"59ae":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"q-layout-padding q-gutter-y-md"},[t("q-input",{attrs:{filled:"",label:"QInput 1"},model:{value:e.inputModel,callback:function(l){e.inputModel=l},expression:"inputModel"}}),t("q-input",{attrs:{autofocus:"",filled:"",label:"QInput 2"},model:{value:e.inputModel,callback:function(l){e.inputModel=l},expression:"inputModel"}}),t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"menu",label:"QSelect 1 (menu)"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}),t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"dialog",label:"QSelect 2 (dialog)"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}),t("div",[t("q-separator",{attrs:{spaced:""}})],1),t("q-input",{attrs:{filled:"",label:"QInput 3 (set ID)",for:e.forInput},model:{value:e.inputModel,callback:function(l){e.inputModel=l},expression:"inputModel"}}),t("q-input",{attrs:{filled:"",label:"ID for above QInput"},model:{value:e.forInput,callback:function(l){e.forInput=l},expression:"forInput"}}),t("div",[t("q-separator",{attrs:{spaced:""}})],1),t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"menu",label:"QSelect 3 (menu) (set ID) (autofocus)",for:"menu_"+e.forSelect},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}),t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"dialog",label:"QSelect 3 (dialog) (set ID)",for:"dialog_"+e.forSelect},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}),t("q-input",{attrs:{filled:"",label:"ID for above QSelect"},model:{value:e.forSelect,callback:function(l){e.forSelect=l},expression:"forSelect"}}),t("div",[t("q-separator",{attrs:{spaced:""}})],1),t("q-btn",{attrs:{label:"Toggle"},on:{click:function(l){e.show=!e.show}}}),e.show?t("q-input",{attrs:{filled:"",label:"QInput 4"},model:{value:e.inputModel,callback:function(l){e.inputModel=l},expression:"inputModel"}}):e._e(),e.show?t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"menu",label:"QSelect 5 (menu)"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}):e._e(),e.show?t("q-select",{attrs:{filled:"",options:e.options,"use-input":"",behavior:"dialog",label:"QSelect 5 (dialog)"},model:{value:e.selectModel,callback:function(l){e.selectModel=l},expression:"selectModel"}}):e._e()],1)},n=[],s={data(){return{show:!1,inputModel:"",selectModel:null,forInput:"QInputId",forSelect:"QSelectId",options:["Option 1","Option 2","Option 3"]}}},a=s,i=t("a6c2"),c=Object(i["a"])(a,o,n,!1,null,null,null);l["default"]=c.exports}}]);