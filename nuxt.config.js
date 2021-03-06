export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate:
      '%s - ' + 'GINI - Build your brand easily with the help of experts',
    title: 'GINI' || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: '09jk7SDHUhdiNkU1xv_RNbTcaEoT-Ig1xHMIr1nuE24'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'GINI makes it is easy for creators to find professional help with branding, websites & app development, social media management, photo editing, and caption writing.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/sass/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-agile.js', mode: 'client' },
    { src: '~/plugins/vue-facebook-pixel.js' },
    { src: '~/plugins/smooth-scroll', ssr: false },
    { src: '~/plugins/bootstrap.js' },
    { src: '~/plugins/vue-phone-number-input.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    'vue-social-sharing/nuxt',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: {
        host: 'smtp.example.com',
        port: 587
      }
    }],
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '2673709689322783',
      autoPageView: true,
      disabled: false
    }]
  ],

  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true
  },

  // Style resources
  styleResources: {
    scss: './scss/*.scss'
  },

  googleAnalytics: {
    id: 'G-8DWC2P9FG1',
    dev: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
