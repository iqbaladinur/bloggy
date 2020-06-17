<template>
  <div class="container mx-auto lg:px-40 px-10">
    <nuxt-content :document="content" />
  </div>
</template>

<script>
import { formatLocaleDateString } from '~/helper/dateHelper';

export default {
  head () {
    const titlePage = `${process.env.blogTitle} | ${this.content.title}`;
    return {
      title: titlePage,
      meta: [
        { hid: 'description', name: 'description', content: this.content.description },
        { hid: 'og:title', property: 'og:title', content: titlePage },
        { hid: 'og:description', property: 'og:description', content: this.content.description },
        { hid: 'twitter:title', name: 'twitter:title', content: titlePage },
        { hid: 'twitter:description', name: 'twitter:description', content: this.content.description }
      ]
    }
  },
  layout: 'default',
  name: 'SinglePage',
  async fetch({ store, $content, error }) {
    try {
      const listMenu = await $content('page').only(['navTitle', 'slug']).fetch();
      store.commit('menu/storePageMenu', listMenu);
    } catch (error) {
      error({ statusCode: 500, message: error })
    }
  },
  async asyncData({ params, $content, error }){
    const slugData = params.page;
    let content;
    
    try {
      content = await $content('page').where({ slug: slugData }).fetch();
    } catch (error) {
      return error({ statusCode: 404, message: 'Opps, Not Found' });
    }

    if(content.length < 1) {
      return error({ statusCode: 404, message: 'Opps, Not Found' })
    }

    return {
      content: content.length > 0 ? content[0] : null
    }
  },
  methods: {
    formatLocaleDateString
  },
}
</script>
