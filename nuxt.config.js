require('dotenv').config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.BLOG_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.BLOG_DESC },
      { hid: 'og:title', property: 'og:title', content: process.env.BLOG_TITLE },
      { hid: 'og:description', property: 'og:description', content: process.env.BLOG_DESC },
      { hid: 'twitter:title', name: 'twitter:title', content: process.env.BLOG_TITLE },
      { hid: 'twitter:description', name: 'twitter:description', content: process.env.BLOG_DESC }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    blogTitle: process.env.BLOG_TITLE,
    blogDesc: process.env.BLOG_DESC,
    perPage: process.env.POST_PAGINATION_PERPAGE || 10
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/update-client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/analytics-module#readme
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GA_ID
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxt/content',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  content: {
  // My custom configuration
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content');
      const postSlugs = await $content('post').only(['slug']).fetch();
      const pageSlugs = await $content('page').only(['slug']).fetch();
      const post = postSlugs.map(slug => `/post/${slug.slug}`);
      const page = pageSlugs.map(slug => `/pages/${slug.slug}`);
      return [...post, ...page];
    }
  }
}
