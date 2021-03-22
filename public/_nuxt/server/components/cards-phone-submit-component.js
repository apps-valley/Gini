exports.ids = [3];
exports.modules = {

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"phone-card": "yBhJ4S8pfGwTM7AbFE5cj",
	"phone-input": "_3l5MdkD8zOopUJeCisSbYI",
	"country-selector__country-flag": "_1R3G-KnFouw-wYADslYvbT",
	"phone-alert": "_3cEt8WoBGiM-AMK7EX2iE3"
};


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneSubmitComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneSubmitComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneSubmitComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneSubmitComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneSubmitComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cards/PhoneSubmitComponent.vue?vue&type=template&id=0cc05988&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"phone-card"},[_vm._ssrNode("<h3 class=\"mb-4 pb-2\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.cardData.description)+"\n  ")+"</h3> "),_c('VuePhoneNumberInput',{staticClass:"phone-input",model:{value:(_vm.phoneNumber),callback:function ($$v) {_vm.phoneNumber=$$v},expression:"phoneNumber"}}),_vm._ssrNode(" "),_c('b-button',{attrs:{"pill":"","variant":"primary"},on:{"click":function($event){return _vm.phoneSubmit()}}},[_vm._v("\n    "+_vm._s(_vm.buttonText)+"\n  ")]),_vm._ssrNode(" "),(_vm.isSuccess)?_c('b-alert',{staticClass:"phone-alert",attrs:{"show":_vm.dismissCountDown,"dismissible":"","variant":"success"},on:{"dismissed":function($event){_vm.dismissCountDown = 0},"dismiss-count-down":_vm.countDownChanged}},[_vm._v("\n    Added phone number successfully!\n  ")]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cards/PhoneSubmitComponent.vue?vue&type=template&id=0cc05988&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vue-phone-number-input"
var external_vue_phone_number_input_ = __webpack_require__(15);
var external_vue_phone_number_input_default = /*#__PURE__*/__webpack_require__.n(external_vue_phone_number_input_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cards/PhoneSubmitComponent.vue?vue&type=script&lang=js&
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


/* harmony default export */ var PhoneSubmitComponentvue_type_script_lang_js_ = ({
  name: 'PhoneCard',
  components: {
    VuePhoneNumberInput: external_vue_phone_number_input_default.a
  },
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      buttonText: 'Sign up today!',
      phoneNumber: '',
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      isSuccess: 'blog/getIsSuccessPhone'
    })
  },
  methods: {
    phoneSubmit() {
      this.$store.dispatch('blog/insertPhoneNumber', {
        number: this.phoneNumber
      }).then(() => {
        if (this.isSuccess) {
          this.buttonText = 'Thank you';
          this.showAlert();
        }
      });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },

    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }

  }
});
// CONCATENATED MODULE: ./src/components/cards/PhoneSubmitComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_PhoneSubmitComponentvue_type_script_lang_js_ = (PhoneSubmitComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/cards/PhoneSubmitComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_PhoneSubmitComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "55f48ee4"
  
)

/* harmony default export */ var PhoneSubmitComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards-phone-submit-component.js.map