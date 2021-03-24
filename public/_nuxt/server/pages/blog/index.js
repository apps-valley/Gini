exports.ids = [8];
exports.modules = {

/***/ 48:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZmLUcMwDEAVJugGmAkoG4QJ2hHKBt2gMAEwQboBbJAwQcsECROkGwjp7FxDiX8liR2u706XXiPnpMhWJBtgZBBxRrIhKZXMYCqQsUuSGn+SwhRQb72L+CNgMH4HsUNGCtSzgtghIzON8SU7BzGjMo6ONcQOyqzTxQtMATL0cbLGMzxNWobnOEDOT+AMUObuOcmCpMnjXyRFkiTFie6SLnv6vzoZvyK5bo0/kHyQ3jsMBR7LgNqwOEuUmSftGLtSkUDL+A30DT10rh7uQ60MLtGfEvtKs9hdw4xBbXPiysF4QZcMjnN1TJq1osW6iDmUdBEQhorkvp0ATjFGAGWtIiAMFViMZ4wRCPj2OaXe2YxntBFAmQYFhOHJxXjGNIWWEIaKjHcuN0wO3EIYCh9lkwMCwvDpoxyjAwcfZeuHLHb+tQMVhGHuo2xywGsu9sjCR9nkgFc26BGBHp2byYE9hOPZVTFWB7h5cnaiE5QtYIgmpo21tdRGgOoRXsQho8DwtkyGhq7MVk5zQfcG4eEC76brhu1DVkC4dNqm0t0wOqCm0SuER2uDS0/MjTV3ZqEOIrTTh7HWQhFE4QH+CoZLqRn0Beq3yofCuql1jhNbHI/+D0BQTqUdDs9wZwgoD+1KHI4chkY5kZuMQHm4kSpdoX6vLc5vYUxQ7vc3U6rZSk8dx+V4zGxO4y5cuPCbb8x+00WXGuHHAAAAAElFTkSuQmCC"

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZiBTcMwEEUPJugIGYERGIENyAhsQDeADcIGjJBRboSywSdXNZITEnN3thNXypMsRbUtvd+e7TpEBwcHUQB8Da0fWkP3xCB8Cp4lhNDdTZBBlEPZIITwTrVzE42FkL6WamUm2gSfhyHG/ieqjQXJJuibh6hvfSwIakJc10cVQVbkWBlCxrW0J1hHG2Ic+0J7gDiWEEKHrcsK/8PGEMLHZkGggx0hZE5LpYEedoQY55VbH7DB8P0SDZUCdhi23Skc2yH3QocPVoRYkg/7WsoB/DDifwDX5JE1CNLghRBa+ZBveMsK6fBM+GSUD3klK8gDY/YNOuSFy5rnI23PA9n5IStIhzEtofBZe9iN2A88pMH4u2DZEaKH97YHP4z4Pq8JIeOeKQXkl9eEuAztTDlAGflYiE8EW+3WARj2Q2oyJzvQMxGBfp+XeeVexxgkGqO81PkblUYhwg75M3LWeUIANsr3qOhSzwb5Hqn7eeYArJTfps5jOOWvBxG2qvMYDnn/5aMEBvkee9V5DIW89LVUKxH5euo8BpbvsF314nNu0n2VdX5wcEC/NoDgSIXrXMgAAAAASUVORK5CYII="

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/blog/index.vue?vue&type=template&id=753362df&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog",attrs:{"id":"blog"}},[_c('b-container',[(_vm.firstBlog)?_c('b-row',[_c('b-col',{staticClass:"text-center",attrs:{"cols":"12"}},[_c('b-link',{staticClass:"blog-link",attrs:{"to":'/blog/' + _vm.firstBlog.slug}},[_c('img',{staticClass:"img-fluid header-image",attrs:{"src":_vm.firstBlog.image,"alt":""}}),_vm._v(" "),_c('p',{staticClass:"blog-category text-left"},[_vm._v("\n            "+_vm._s(_vm.firstBlog.category)+"\n          ")]),_vm._v(" "),_c('h2',{staticClass:"text-left mb-4 first-blog"},[_vm._v("\n            "+_vm._s(_vm.firstBlog.title)+"\n          ")]),_vm._v(" "),_c('p',{staticClass:"text-left"},[_vm._v("\n            "+_vm._s(_vm.formatCompat(_vm.firstBlog.date))+" by "+_vm._s(_vm.firstBlog.username)+"\n          ")])])],1)],1):_vm._e(),_vm._v(" "),(_vm.filterBlogList.length > 0)?_c('b-row',{staticClass:"mt-5"},_vm._l((_vm.filterBlogList),function(item,index){return _c('b-col',{key:index,staticClass:"mb-5",attrs:{"md":"4","sm":"6"}},[_c('b-link',{staticClass:"blog-link",attrs:{"to":'/blog/' + item.slug}},[_c('b-img',{staticClass:"blog-image",attrs:{"src":item.image}}),_vm._v(" "),_c('p',{staticClass:"blog-category text-lg-left text-center"},[_vm._v("\n            "+_vm._s(item.category)+"\n          ")]),_vm._v(" "),_c('h3',{staticClass:"text-lg-left text-center mb-4"},[_vm._v("\n            "+_vm._s(item.title)+"\n          ")]),_vm._v(" "),_c('p',{staticClass:"text-lg-left text-center"},[_vm._v("\n            "+_vm._s(_vm.formatCompat(item.date))+" by "+_vm._s(item.username)+"\n          ")])],1)],1)}),1):_vm._e(),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"cols":"12"}},[_c('b-pagination',{staticClass:"blog-pagination",attrs:{"total-rows":_vm.filterBlogList.length,"per-page":_vm.perPage,"first-number":"","last-number":"","next-text":"Next","aria-controls":"my-table"},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)],1),_vm._v(" "),_c('b-row',{staticClass:"blog-download",attrs:{"id":"downloadGini"}},[_c('b-col',{attrs:{"lg":"6"}},[_c('h2',{staticClass:"text-sm-left text-center text-white"},[_vm._v("\n          Download GINI Now!\n        ")]),_vm._v(" "),_c('p',{staticClass:"text-sm-left text-center text-white"},[_vm._v("\n          Take the guesswork out of building your brand\n        ")]),_vm._v(" "),_c('div',{staticClass:"social-button"},[_c('a',{staticClass:"btn-download mr-4",attrs:{"href":"https://apps.apple.com/us/app/gini-a-genie-in-your-pocket/id1486109155"}},[_c('div',{staticClass:"mr-3"},[_c('img',{attrs:{"src":__webpack_require__(48),"alt":"apple logo","width":"24","height":"24"}})]),_vm._v(" "),_c('div',[_c('p',{staticClass:"small-text"},[_vm._v("Download on the")]),_vm._v(" "),_c('p',{staticClass:"large-text"},[_vm._v("App Store")])])]),_vm._v(" "),_c('a',{staticClass:"btn-download",attrs:{"href":"https://play.google.com/store/apps/details?id=com.theginigroup.giniapp"}},[_c('div',{staticClass:"mr-3"},[_c('img',{attrs:{"src":__webpack_require__(49),"alt":"google play logo","width":"24","height":"24"}})]),_vm._v(" "),_c('div',[_c('p',{staticClass:"small-text"},[_vm._v("Get it on")]),_vm._v(" "),_c('p',{staticClass:"large-text"},[_vm._v("Google Play")])])])])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/blog/index.vue?vue&type=template&id=753362df&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/blog/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  name: 'Blog',
  layout: 'blog',

  data() {
    return {
      perPage: 9,
      currentPage: 1,
      title: 'GINI Blog - Learn from the pros, then grow like a pro.',
      description: 'Learn how to start and build a quality brand with content, how-tos, interviews, and case studies from branding professionals. As creators, it is up to us to change the world. You may have a great idea and a great product, but need some help with branding. We are happy to help!',
      image: 'https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/test%2FBLOG%20(3).png?alt=media&token=a810f118-5f71-4bf6-85b3-9f5c55bc32d0'
    };
  },

  head() {
    return {
      title: 'GINI Blog - Learn from the pros, then grow like a pro.',
      meta: [{
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'title',
        name: 'title',
        content: this.title
      }, {
        hid: 'description',
        name: 'description',
        content: this.description
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.title
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.description
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.image
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.title
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.description
      }, {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'GINI'
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.gininow.com/blog'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.image
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: this.image
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.title
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      blogList: 'blog/getBlogList'
    }),

    firstBlog() {
      if (this.blogList.length >= 1) {
        return this.blogList[0];
      } else {
        return false;
      }
    },

    filterBlogList() {
      const [, ...rest] = this.blogList;
      return rest;
    }

  },

  created() {
    this.$store.dispatch('blog/fetchBlogList');
  },

  methods: {
    formatCompat(date) {
      const ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return ms[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }

  }
});
// CONCATENATED MODULE: ./src/pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/blog/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71d7b80e"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map