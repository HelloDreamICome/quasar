(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[128],{b92a:function(o,e,a){"use strict";a.r(e);var l=function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",[a("div",{staticClass:"q-layout-padding"},[a("div",{staticClass:"label bg-secondary text-white"},[o._v("\n      Model "),a("span",{staticClass:"right-detail"},[a("em",[o._v(o._s(o.ratingModel))])])]),a("div",{staticClass:"column q-gutter-md",staticStyle:{"font-size":"2rem","margin-top":"20px"}},[a("q-rating",{attrs:{max:"3"},on:{change:o.onChange,input:o.onInput},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{color:"primary",max:"5",icon:"pets"},on:{input:o.onInput},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{color:"teal",max:"9",icon:"thumb_up"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:6,icon:"favorite_border"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:6,icon:"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:6,icon:"star_border","icon-selected":"star"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:4,icon:o.ratingIcons},model:{value:o.moodModel,callback:function(e){o.moodModel=e},expression:"moodModel"}}),a("q-rating",{attrs:{size:"3rem",color:o.ratingColors,max:4,icon:o.ratingIcons},model:{value:o.moodModel,callback:function(e){o.moodModel=e},expression:"moodModel"}}),a("q-rating",{attrs:{size:"3rem",color:o.ratingColors,max:5,icon:"star","icon-selected":o.ratingIcons},model:{value:o.moodModel,callback:function(e){o.moodModel=e},expression:"moodModel"}}),a("q-rating",{attrs:{size:"3.5em",color:"grey","color-selected":o.ratingColors,icon:"star"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("q-rating",{attrs:{size:"3.5em",color:"grey","color-selected":"green-7",icon:"star"},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}})],1),a("p",{staticClass:"caption"},[o._v("\n      Slots\n    ")]),a("q-rating",{attrs:{size:"2rem",color:"primary",max:"3"},scopedSlots:o._u([{key:"tip-1",fn:function(){return[a("q-tooltip",[o._v("Bad")])]},proxy:!0},{key:"tip-2",fn:function(){return[a("q-tooltip",[o._v("Good")])]},proxy:!0},{key:"tip-3",fn:function(){return[a("q-tooltip",[o._v("Very good!")])]},proxy:!0}]),model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("div",{staticClass:"label bg-secondary text-white"},[o._v("\n      Half Model "),a("span",{staticClass:"right-detail"},[a("em",[o._v(o._s(o.halfModel))])])]),a("div",{staticClass:"column q-gutter-md",staticStyle:{"font-size":"2rem","margin-top":"20px"}},[a("q-rating",{attrs:{max:"7","icon-half":"star_half",icon:"star_border","icon-selected":"star"},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{max:"7","icon-half":"star_half",icon:"star_border","icon-selected":"star",color:"yellow","no-dimming":""},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{color:"primary",max:"5",icon:"pets","icon-half":"star_half"},on:{input:o.onInput},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{color:"teal",max:"9",icon:"thumb_up","icon-half":"star_half"},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red-10","color-half":"red-5",max:6,"icon-selected":"favorite","icon-half":"favorite",icon:"favorite_border"},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:6,icon:"img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg","icon-half":"star_half"},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{size:"3rem",color:"red",max:6,icon:"star_border","icon-selected":"star","icon-half":"star_half"},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}}),a("q-rating",{attrs:{max:"7",size:"2em",color:"grey-4","color-half":"blue","color-selected":"green",icon:"favorite_border","icon-selected":"favorite","no-dimming":""},model:{value:o.halfModel,callback:function(e){o.halfModel=e},expression:"halfModel"}})],1),a("p",{staticClass:"caption q-mt-lg"},[o._v("\n      Readonly State\n    ")]),a("q-rating",{attrs:{size:"2rem",color:"primary",max:"6",icon:"loyalty",readonly:""},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}}),a("p",{staticClass:"caption"},[o._v("\n      Disabled State\n    ")]),a("q-rating",{attrs:{size:"2rem",color:"primary",max:"6",icon:"create",disable:""},model:{value:o.ratingModel,callback:function(e){o.ratingModel=e},expression:"ratingModel"}})],1)])},t=[],n={data:function(){return{halfModel:3.4,ratingModel:4,moodModel:2,ratingIcons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],ratingColors:["light-green-3","light-green-6","green","green-9","green-10"]}},watch:{ratingModel:function(o,e){console.log("Changed from ".concat(JSON.stringify(e)," to ").concat(JSON.stringify(o)))}},methods:{onChange:function(o){console.log("@change",JSON.stringify(o))},onInput:function(o){console.log("@input",JSON.stringify(o))}}},r=n,i=a("a6c2"),s=Object(i["a"])(r,l,t,!1,null,null,null);e["default"]=s.exports}}]);