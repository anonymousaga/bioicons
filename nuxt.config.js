export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bioicons.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Bioicons - free library of open source icons for scientific illustrations',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
        {
          type: 'module',
          src: 'https://gradio.s3-us-west-2.amazonaws.com/4.44.0/gradio.js',
          defer: true
        }
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vue-tour/dist/vue-tour.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vt-notifications' },
    { src: '~/plugins/vue-tour', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'vue-browser-detect-plugin/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-lazy-load',
      { directiveOnly: true, defaultImage: 'loading-static.svg' },
    ],
    '@forked-prs/nuxt-infinite-scroll-module',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { browserBaseURL: '/' },

  tailwindcss: {
    jit: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vt-notifications', 'vue-tour'],
  },
}
