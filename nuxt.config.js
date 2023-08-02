export default {
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "independence_purchasing_company",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/base.css",
    "@/assets/css/main.css",
    "animate.css/animate.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@nuxtjs/device'
    // { src: '~/plugins/vue2-datepicker.js', mode: 'client' },
    "~/plugins/fakestoreapi.js",
    { src: '~/plugins/store', ssr: false },
    { src: '~/plugins/confetti.js', mode: 'client' },
    // { src: '~/plugins/axios.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: "/",
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: "0.0.0.0",
  },
  device: {
    breakpoints: {
      mobile: 950,
      desktop: Infinity,
    },
  },
  router: {
    middleware: ["auth", "redirect"],
    // middleware: ["redirect"],
    extendRoutes(routes, resolve) {
      routes.push({
        // name: 'product',
        path: "/dashboard/market/:productId",
        component: resolve(__dirname, "pages/dashboard/market/_product.vue"),
      });
    },
  },
};
