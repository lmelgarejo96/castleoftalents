(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4d024f4"],{"2fea":function(t,e,a){},3806:function(t,e,a){"use strict";var n=a("2fea"),o=a.n(n);o.a},5731:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"column-flex mb-0 pb-0",staticStyle:{background:"#e3e5eb"}},[a("Modal"),a("v-data-table",{attrs:{headers:t.alumnos.headers,items:t.alumnos.desserts,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[a("img",{staticClass:"img-alu",attrs:{src:e.image,height:"60px"}})]}},{key:"item.action",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("edit")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("delete")])]}}])}),a("div",{staticClass:"text-center pt-2"},[a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])},o=[],c=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3",staticStyle:{background:"#fff"}},[a("div",{staticClass:"fila"},[a("h4",{staticClass:"ml-5"},[t._v("Lista de Alumnos")]),a("Button",{attrs:{name:"Nuevo Alumno",addClass:"btn-outline-dark mr-3",iconAccept:!0,addIcon:"assignment_ind"},on:{click:t.openDialog}})],1),a("hr"),a("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"primary"}},[a("v-spacer"),a("v-btn",{staticClass:"mx-auto",attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-carousel",{attrs:{continuous:!1,cycle:!1,"show-arrows":!1,"hide-delimiters":"","delimiter-icon":"mdi-minus",height:"auto",light:"",touchless:""},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},[a("v-carousel-item",[a("Form",{on:{"update:carousel":function(e){t.carousel+=e},"update:dialog":function(e){t.dialog=e}}})],1),a("v-carousel-item",[a("FormParent",{on:{"update:carousel":function(e){t.carousel+=e}}})],1),a("v-carousel-item",[a("FormImage",{on:{"update:carousel":function(e){t.carousel+=e},"update:dialog":function(e){t.dialog=e}}})],1)],1)],1)],1)},r=[],s=a("fdcd"),l=a("68d4"),u=a("c2f1"),d=a("5788"),m={components:{Button:s["a"],Form:l["a"],FormParent:u["a"],FormImage:d["a"]},data:function(){return{dialog:!1,carousel:0}},methods:{getAlgo:function(){this.dialog=!0},openDialog:function(){this.carousel=0,this.dialog=!0}}},p=m,f=(a("ecdd"),a("2877")),g=a("6544"),b=a.n(g),v=a("8336"),h=a("5e66"),O=a("3e35"),k=a("169a"),y=a("132d"),j=a("2fa4"),w=a("71d9"),C=Object(f["a"])(p,i,r,!1,null,null,null),P=C.exports;b()(C,{VBtn:v["a"],VCarousel:h["a"],VCarouselItem:O["a"],VDialog:k["a"],VIcon:y["a"],VSpacer:j["a"],VToolbar:w["a"]});var x=a("2f62");function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={components:{Modal:P},data:function(){return{page:1,pageCount:0,itemsPerPage:10}},computed:_({},Object(x["c"])(["alumnos"])),mounted:function(){this.$store.dispatch("getAlumnos")}},I=D,F=(a("3806"),a("8fea")),S=a("891e"),A=Object(f["a"])(I,n,o,!1,null,null,null);e["default"]=A.exports;b()(A,{VDataTable:F["a"],VIcon:y["a"],VPagination:S["a"]})},c495:function(t,e,a){},ecdd:function(t,e,a){"use strict";var n=a("c495"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-d4d024f4.4816aa37.js.map