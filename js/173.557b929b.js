(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[173],{d505:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpr fFf"}},[n("q-header",[n("q-toolbar",[n("q-toolbar-title",[e._v("\n        Header\n      ")])],1)],1),n("q-page-container",[n("q-page",{staticClass:"column flex-center",attrs:{padding:""}},[e._l(50,(function(t){return n("div",{key:t},[e._v("\n        1."+e._s(t)+"\n      ")])})),n("div",[e._v("\n        "+e._s(e.$q.screen.width)+" x "+e._s(e.$q.screen.height)+"\n        "),n("q-menu",{attrs:{persistent:""},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("div",{staticClass:"q-pa-md bg-white text-black",on:{click:function(t){e.menu=!1}}},[e._v("\n            Menu\n          ")])])],1),n("div",[n("pre",[e._v(e._s(e.viewport))]),n("input")]),e._l(50,(function(t){return n("div",{key:100+t},[e._v("\n        2."+e._s(t)+"\n      ")])})),n("div",[n("input")]),e._l(50,(function(t){return n("div",{key:200+t},[e._v("\n        3."+e._s(t)+"\n      ")])}))],2)],1),n("q-footer",[n("q-toolbar",[n("q-toolbar-title",[e._v("\n        Footer\n      ")])],1)],1)],1)},o=[],r={data:function(){return{menu:!1,viewport:null}},mounted:function(){var e=this;if("undefined"!==typeof window&&void 0!==window.visualViewport){var t=["width","height","scale","offsetLeft","offsetTop","pageLeft","pageTop"];this.timer=setInterval((function(){e.viewport=t.map((function(e){return e+": "+window.visualViewport[e]}))}),500)}},beforeDestroy:function(){clearInterval(this.timer)}},a=r,u=n("a6c2"),s=Object(u["a"])(a,i,o,!1,null,null,null);t["default"]=s.exports}}]);