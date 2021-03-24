exports.ids = [2];
exports.modules = {

/***/ 53:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"people-card": "_2Ia39XVx4cMiLm-UwkKxG8",
	"b-rating": "_3mZcONm8TIBlqcA4u03qMB",
	"people-card-user": "KKofEVoFhMubUL9z8eoii",
	"people-name": "_1FhxbF3GNWkMGi5X78nfMT"
};


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleTalkCardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleTalkCardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleTalkCardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleTalkCardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PeopleTalkCardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cards/PeopleTalkCardComponent.vue?vue&type=template&id=302d0e09&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"people-card"},[_vm._ssrNode("<p>"+_vm._ssrEscape(_vm._s(_vm.cardData.description))+"</p> "),_vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\">","</div>",[_c('b-form-rating',{attrs:{"variant":"warning"},model:{value:(_vm.rateValue),callback:function ($$v) {_vm.rateValue=$$v},expression:"rateValue"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"people-card-user\">","</div>",[_c('b-img',{attrs:{"src":_vm.cardData.avatar}}),_vm._ssrNode(" <span class=\"people-name\">"+_vm._ssrEscape(_vm._s(_vm.cardData.userName))+"</span>")],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cards/PeopleTalkCardComponent.vue?vue&type=template&id=302d0e09&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cards/PeopleTalkCardComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PeopleTalkCardComponentvue_type_script_lang_js_ = ({
  name: 'PeopleCard',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      rateValue: 5
    };
  }

});
// CONCATENATED MODULE: ./src/components/cards/PeopleTalkCardComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_PeopleTalkCardComponentvue_type_script_lang_js_ = (PeopleTalkCardComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/cards/PeopleTalkCardComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_PeopleTalkCardComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2000ced6"
  
)

/* harmony default export */ var PeopleTalkCardComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards-people-talk-card-component.js.map