(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"32f8":function(t,o,e){},a10c:function(t,o,e){"use strict";var a=e("32f8"),s=e.n(a);s.a},f7f7:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"q-layout-padding"},[e("div",{staticClass:"q-mx-auto",staticStyle:{"max-width":"500px"}},[e("h1",[t._v("Bottom Sheet")]),e("q-toggle",{attrs:{label:"Dark","false-value":null},model:{value:t.dark,callback:function(o){t.dark=o},expression:"dark"}}),e("div",{staticClass:"q-gutter-sm"},[e("q-btn",{attrs:{flat:"",color:"primary",label:"List"},on:{click:function(o){return t.show()}}}),e("q-btn",{attrs:{flat:"",color:"primary",label:"Grid"},on:{click:function(o){return t.show(!0)}}})],1),e("div",{staticClass:"q-gutter-sm"},[e("q-btn",{attrs:{flat:"",color:"primary",label:"List - custom"},on:{click:function(o){return t.showCustom()}}}),e("q-btn",{attrs:{flat:"",color:"primary",label:"Grid - custom"},on:{click:function(o){return t.showCustom(!0)}}})],1)],1)])},s=[];const i=[{label:"Drive",img:"https://cdn.quasar.dev/img/logo_drive_128px.png",id:"drive"},{label:"Keep",img:"https://cdn.quasar.dev/img/logo_keep_128px.png",id:"keep"},{label:"Google Hangouts",img:"https://cdn.quasar.dev/img/logo_hangouts_128px.png",id:"calendar"},{label:"Calendar",img:"https://cdn.quasar.dev/img/logo_calendar_128px.png",id:"calendar"},{},{label:"Share",icon:"share",id:"share"},{label:"Upload",icon:"cloud_upload",color:"primary",id:"upload"},{},{label:"John",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",id:"john"}];var l={data(){return{dark:null}},methods:{hideBottomSheet(){void 0!==this.bottomSheetHandler&&this.bottomSheetHandler.hide()},show(t){this.bottomSheetHandler=this.$q.bottomSheet({message:"Bottom Sheet message",grid:t,actions:i,dark:this.dark}).onOk(t=>{console.log("Action chosen:",t.id)}).onCancel(()=>{console.log("Dismissed")}).onDismiss(()=>{this.bottomSheetHandler=void 0})},showCustom(t){this.bottomSheetHandler=this.$q.bottomSheet({message:"Bottom Sheet message",grid:t,actions:i,class:"custom-bottom-sheet",dark:this.dark}).onOk(t=>{console.log("Action chosen:",t.id)}).onCancel(()=>{console.log("Dismissed")}).onDismiss(()=>{this.bottomSheetHandler=void 0})}},beforeRouteLeave(t,o,e){this.hideBottomSheet(),e()}},n=l,r=(e("a10c"),e("a6c2")),d=Object(r["a"])(n,a,s,!1,null,null,null);o["default"]=d.exports}}]);