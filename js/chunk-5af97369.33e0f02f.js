(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af97369"],{"0d26":function(t,e,n){t.exports=n.p+"img/niño.214783bc.jpg"},"10ec":function(t,e,n){"use strict";var i=n("4834"),a=n.n(i);a.a},"169a":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b");var i=n("ade3"),a=(n("368e"),n("480e")),s=n("4ad4"),r=n("b848"),o=n("75eb"),l=n("e707"),c=n("e4d3"),u=n("21be"),d=n("f2e7"),h=n("a293"),p=n("58df"),f=n("d9bd"),m=n("80d2");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=Object(p["a"])(s["a"],r["a"],o["a"],l["a"],c["a"],u["a"],d["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(i["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(i["a"])(t,"v-dialog--active",this.isActive),Object(i["a"])(t,"v-dialog--persistent",this.persistent),Object(i["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(i["a"])(t,"v-dialog--scrollable",this.scrollable),Object(i["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),e.push(this.genActivator());var i=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),e.push(t("div",{class:this.contentClasses,attrs:b({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"17b3":function(t,e,n){},2677:function(t,e,n){"use strict";var i=n("8654");e["a"]=i["a"]},"2b5d":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("c975"),n("fb6a"),n("a434"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("8a79"),n("159b");var i=n("ade3"),a=(n("2bfd"),n("b974")),s=(n("d81d"),n("45fc"),n("498a"),n("8654")),r=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=l({},a["b"],{offsetY:!0,offsetOverflow:!0,transition:!1}),u=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return l({},a["a"].options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),l({},c,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=a["a"].options.computed.listData.call(this);return t.props=l({},t.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["w"].backspace&&t!==r["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,a["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"off",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot:function(){var t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick:function(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(){this.activateMenu()},selectItem:function(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}});function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=u.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return a["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=u.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,i=a["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners=h({},i.componentOptions.listeners,{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),i},onChipInput:function(t){a["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&u.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;a["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===r["w"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===r["w"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();u.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():u.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){a["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),a["a"].options.methods.selectItem.call(this,e))}}}})},"2bfd":function(t,e,n){},"368e":function(t,e,n){},"3c20":function(t,e,n){t.exports=n.p+"img/niño2.e36cfb03.jpg"},4834:function(t,e,n){},"538a":function(t,e,n){"use strict";var i=n("d0f9"),a=n.n(i);a.a},5788:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-7"},[i("div",{staticClass:"col-md-12"},[i("v-col",{attrs:{cols:"12",sm:"12",md:"80"}},[i("div",{staticClass:"overline"},[t._v("DATOS EXTRA ALUMNO")]),i("hr"),i("v-form",{ref:"form"},[i("v-text-field",{attrs:{outlined:"",label:"E-mail",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),i("v-text-field",{attrs:{outlined:"",label:"Celular",required:""},model:{value:t.user.celular,callback:function(e){t.$set(t.user,"celular",e)},expression:"user.celular"}}),i("v-text-field",{attrs:{outlined:"",label:"Procedencia",required:""},model:{value:t.user.procedencia,callback:function(e){t.$set(t.user,"procedencia",e)},expression:"user.procedencia"}}),i("v-text-field",{attrs:{outlined:"",label:"Nivel",required:""},model:{value:t.user.nivel,callback:function(e){t.$set(t.user,"nivel",e)},expression:"user.nivel"}}),i("v-text-field",{attrs:{outlined:"",label:"Grado",required:""},model:{value:t.user.grado,callback:function(e){t.$set(t.user,"grado",e)},expression:"user.grado"}})],1)],1)],1)]),i("div",{staticClass:"col-md-5"},[i("div",{staticClass:"col-md-12"},[i("v-col",{attrs:{cols:"12",sm:"12",md:"80"}},[i("div",{staticClass:"overline text-center"},[t._v("ELIGE UNA IMAGEN")]),i("hr"),i("v-file-input",{staticClass:"d-none",attrs:{rules:t.rules,accept:"image/png, image/jpeg, image/bmp, image/jpg",placeholder:"Elige una imagen","prepend-icon":"mdi-camera",label:"Avatar",id:"photoInput"},on:{change:function(e){return t.updatePreview()}},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),i("v-card",{staticClass:"mx-auto"},[i("img",{staticClass:"img-prev",attrs:{id:"img-preview",src:n("afa5"),alt:"img-preview"},on:{click:t.openFI}}),t.image.name?i("v-card-actions",{staticClass:"mx-auto mb-2"},[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.removeImagen}},[t._v("QUITAR IMAGEN")])],1):t._e()],1)],1)],1)]),i("v-card-actions",{staticClass:"ml-auto mr-4 mb-2"},[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.back}},[t._v("Atras")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("GUARDAR")])],1)],1)},a=[],s={data:function(){return{user:{},image:{},rules:[function(t){return!t||t.size<2e6||"Avatar size should be less than 2 MB!"}]}},methods:{openFI:function(){document.getElementById("photoInput");photoInput.click()},updatePreview:function(){if(console.log(this.image),this.image){var t=new FileReader;t.readAsDataURL(this.image),t.onload=function(){var e=document.getElementById("img-preview");e.src=t.result}}},removeImagen:function(){document.getElementById("img-preview").src="https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png",this.image={}},back:function(){this.$emit("update:carousel",-1)},save:function(){this.$emit("update:dialog",!1)}}},r=s,o=(n("538a"),n("2877")),l=n("6544"),c=n.n(l),u=n("8336"),d=n("b0af"),h=n("99d9"),p=n("62ad"),f=(n("a4d3"),n("99af"),n("a623"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("13d5"),n("fb6a"),n("a434"),n("b0c0"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2909")),m=n("ade3"),v=n("53ca"),b=(n("5803"),n("2677")),g=n("cc20"),y=n("80d2"),x=n("d9bd");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(m["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=b["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(y["E"])(t).every((function(t){return null!=t&&"object"===Object(v["a"])(t)}))}}},computed:{classes:function(){return S({},b["a"].options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size,i=void 0===n?0:n;return t+i}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(y["u"])(e,1024===this.base))},internalArrayValue:function(){return Object(y["E"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=e.name,i=void 0===n?"":n,a=e.size,s=void 0===a?0:a,r=t.truncateText(i);return t.showSize?"".concat(r," (").concat(Object(y["u"])(s,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(x["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(y["j"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(g["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=b["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,i){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[i],file:n,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=b["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=S({},e.data.on||{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(f["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),w=n("4bd4"),C=n("2fa4"),k=n("8654"),j=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=j.exports;c()(j,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCol:p["a"],VFileInput:O,VForm:w["a"],VSpacer:C["a"],VTextField:k["a"]})},5803:function(t,e,n){},"5e5c":function(t,e,n){},"68d4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6 part1 mb-0 pb-0"},[i("v-card-text",[i("v-container",{staticClass:"mb-0 pb-0"},[i("div",{staticClass:"overline"},[t._v("DATOS DEL ALUMNO")]),i("div",{staticClass:"row form-data"},[i("div",{staticClass:"col-md-12"},[i("v-form",{ref:"form"},[i("v-text-field",{attrs:{outlined:"",label:"DNI",required:""},on:{keyup:t.consultarDNI},model:{value:t.user.dni,callback:function(e){t.$set(t.user,"dni",e)},expression:"user.dni"}}),i("v-text-field",{attrs:{outlined:"",label:"Nombre",required:""},model:{value:t.user.nombres,callback:function(e){t.$set(t.user,"nombres",e)},expression:"user.nombres"}}),i("v-text-field",{attrs:{outlined:"",label:"Apellido Paterno",required:""},model:{value:t.user.apellidoPaterno,callback:function(e){t.$set(t.user,"apellidoPaterno",e)},expression:"user.apellidoPaterno"}}),i("v-text-field",{attrs:{outlined:"",label:"Apellido Materno",required:""},model:{value:t.user.apellidoMaterno,callback:function(e){t.$set(t.user,"apellidoMaterno",e)},expression:"user.apellidoMaterno"}}),i("v-text-field",{attrs:{outlined:"",label:"Domicilio",required:""},model:{value:t.user.direccion,callback:function(e){t.$set(t.user,"direccion",e)},expression:"user.direccion"}}),i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-text-field",t._g({attrs:{outlined:"",label:"Fecha de Nacimiento",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:t.saveDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)])])],1),i("v-card-actions",{staticClass:"pt-0 mt-0"},[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cerrar")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.next}},[t._v("Siguiente")])],1)],1),i("div",{staticClass:"col-sm-6 fondo-2 m-0 p-0",attrs:{id:"childs"}},[i("v-carousel",{attrs:{width:"100%",height:"658","show-arrows":!1,cycle:""}},[i("v-carousel-item",{attrs:{src:n("0d26"),"reverse-transition":"fade-transition",transition:"fade-transition"}}),i("v-carousel-item",{attrs:{src:n("3c20"),"reverse-transition":"fade-transition",transition:"fade-transition"}}),i("v-carousel-item",{attrs:{src:n("94b2"),"reverse-transition":"fade-transition",transition:"fade-transition"}})],1)],1)])},a=[],s=(n("96cf"),n("1da1")),r=n("bc3a"),o=n.n(r),l={data:function(){return{tokenReniec:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imx1aXNtZWxnYXJlam9hbGFyY29uQGdtYWlsLmNvbSJ9.sPuL_WIleq7us1RzH1feIjWG_7NC20Jj_9LBgvpQivU",user:{nombres:"",apellidoPaterno:"",apellidoMaterno:"",dni:"",direccion:""},date:null,menu:!1}},watch:{menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}},methods:{close:function(){this.$emit("update:dialog",!1)},next:function(){this.$emit("update:carousel",1)},saveDate:function(t){this.$refs.menu.save(t)},consultarDNI:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.user.dni.length>=8)){t.next=7;break}return e="http://dniruc.apisperu.com/api/v1/dni/",t.next=5,o.a.get(e+this.user.dni+"?token="+this.tokenReniec);case 5:n=t.sent,n.data&&(this.user.nombres=n.data.nombres,this.user.apellidoPaterno=n.data.apellidoPaterno,this.user.apellidoMaterno=n.data.apellidoMaterno);case 7:t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}()}},c=l,u=(n("10ec"),n("2877")),d=n("6544"),h=n.n(d),p=n("8336"),f=n("99d9"),m=n("5e66"),v=n("3e35"),b=n("a523"),g=n("2e4b"),y=n("4bd4"),x=n("e449"),I=n("2fa4"),S=n("8654"),O=Object(u["a"])(c,i,a,!1,null,null,null);e["a"]=O.exports;h()(O,{VBtn:p["a"],VCardActions:f["a"],VCardText:f["b"],VCarousel:m["a"],VCarouselItem:v["a"],VContainer:b["a"],VDatePicker:g["a"],VForm:y["a"],VMenu:x["a"],VSpacer:I["a"],VTextField:S["a"]})},"891e":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("d81d"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var i=n("2909"),a=n("ade3"),s=(n("17b3"),n("9d26")),r=n("dc22"),o=n("58df"),l=n("a9ad"),c=n("7560");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(o["a"])(l["a"],c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+n;if(this.value>a&&this.value<s){var r=this.value-a+2,o=this.value+a-2-n;return[1,"..."].concat(Object(i["a"])(this.range(r,o)),["...",this.length])}if(this.value===a){var l=this.value+a-1-n;return[].concat(Object(i["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-a+1;return[1,"..."].concat(Object(i["a"])(this.range(c,this.length)))}return[].concat(Object(i["a"])(this.range(1,a)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var i=t;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:i}},[t(s["a"],[e])])])},genItem:function(t,e){var n=this,i=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,i){return t("li",{key:i},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},"8a79":function(t,e,n){"use strict";var i=n("23e7"),a=n("06cf").f,s=n("50c4"),r=n("5a34"),o=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),p=!c&&!h&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(o(this));r(t);var n=arguments.length>1?arguments[1]:void 0,i=s(e.length),a=void 0===n?i:d(s(n),i),l=String(t);return u?u.call(e,l,a):e.slice(a-l.length,a)===l}})},9256:function(t,e,n){"use strict";var i=n("5e5c"),a=n.n(i);a.a},"94b2":function(t,e,n){t.exports=n.p+"img/niño3.1c0b4858.jpg"},a523:function(t,e,n){"use strict";n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("20f6"),n("4b85"),n("a15b"),n("498a");var i=n("2b0e");function a(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,s=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}var s=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,a=e.data,r=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),r)}})},afa5:function(t,e,n){t.exports=n.p+"img/no-image.f98b32ce.png"},c2f1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("div",{staticClass:"overline ml-2"},[t._v("DATOS DEL APODERADO")]),n("div",{staticClass:"row form-data2"},[n("div",{staticClass:"col-md-6"},[n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"DNI",required:""},model:{value:t.parent.dni,callback:function(e){t.$set(t.parent,"dni",e)},expression:"parent.dni"}})],1),n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"Nombres",required:""},model:{value:t.parent.nombres,callback:function(e){t.$set(t.parent,"nombres",e)},expression:"parent.nombres"}})],1),n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"Apellido Paterno",required:""},model:{value:t.parent.apellidoPaterno,callback:function(e){t.$set(t.parent,"apellidoPaterno",e)},expression:"parent.apellidoPaterno"}})],1),n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"Apellido Materno",required:""},model:{value:t.parent.apellidoMaterno,callback:function(e){t.$set(t.parent,"apellidoMaterno",e)},expression:"parent.apellidoMaterno"}})],1)],1),n("div",{staticClass:"col-md-6"},[n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"Domicilio",required:""},model:{value:t.parent.direccion,callback:function(e){t.$set(t.parent,"direccion",e)},expression:"parent.direccion"}})],1),n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:t.parent.correo,callback:function(e){t.$set(t.parent,"correo",e)},expression:"parent.correo"}})],1),n("v-col",{attrs:{cols:"20",md:"80",sm:"12"}},[n("v-text-field",{attrs:{label:"Telefono",required:""},model:{value:t.parent.telefono,callback:function(e){t.$set(t.parent,"telefono",e)},expression:"parent.telefono"}})],1),n("v-col",{attrs:{cols:"20",sm:"12",md:"80"}},[n("v-text-field",{attrs:{label:"Celular",required:""},model:{value:t.parent.celular,callback:function(e){t.$set(t.parent,"celular",e)},expression:"parent.celular"}})],1)],1)])])],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.back}},[t._v("Atras")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.next}},[t._v("Siguiente")])],1),n("br"),n("br")],1)},a=[],s={data:function(){return{parent:{}}},methods:{back:function(){this.$emit("update:carousel",-1)},next:function(){this.$emit("update:carousel",1)},saveDate:function(t){this.$refs.menu.save(t)}}},r=s,o=n("2877"),l=n("6544"),c=n.n(l),u=n("8336"),d=n("b0af"),h=n("99d9"),p=n("62ad"),f=n("a523"),m=n("2fa4"),v=n("8654"),b=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=b.exports;c()(b,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["b"],VCol:p["a"],VContainer:f["a"],VSpacer:m["a"],VTextField:v["a"]})},d0f9:function(t,e,n){},fdcd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn ml-auto ",on:{click:t.playButton}},[t.iconAccept?n("i",{staticClass:"material-icons"},[t._v(" "+t._s(t.addIcon)+" ")]):t._e(),t._v(" "+t._s(t.name)+" ")])},a=[],s={props:{name:String,addClass:String,iconAccept:Boolean,addIcon:String,addColor:String},mounted:function(){var t=document.getElementsByClassName("btn")[0],e=" "+this.$props.addClass;t.className+=e},methods:{playButton:function(){this.$emit("click")}}},r=s,o=(n("9256"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-5af97369.33e0f02f.js.map