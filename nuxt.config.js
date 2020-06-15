const defaultBlogTitle = 'Bloggy';
const defaultBlogDesc = 'Headless blog template with nuxtjs.';
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: defaultBlogTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: defaultBlogDesc },
      { hid: 'og:title', property: 'og:title', content: defaultBlogTitle },
      { hid: 'og:description', property: 'og:description', content: defaultBlogDesc },
      { hid: 'twitter:title', name: 'twitter:title', content: defaultBlogTitle },
      { hid: 'twitter:description', name: 'twitter:description', content: defaultBlogDesc }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
  ],
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
