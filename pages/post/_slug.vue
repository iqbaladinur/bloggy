<template>
  <div class="container mx-auto lg:px-40 px-10">
    <h1 class="text-3xl font-bold">
      {{ content.title }}
    </h1>
    <h2 class="text-xs">
      &#128198; {{ `${formatLocaleDateString(content.publishedAt)} by ${content.author}` }}
    </h2>
    <div class="text-xs">
      <nuxt-link
        :to="`/categories/${encodeURIComponent(content.category)}`"
        class="hover:text-blue-300"
      >
        &#128194; {{ content.category }}
      </nuxt-link>
    </div>
    <nuxt-content :document="content" />
  </div>
</template>

<script>
import { formatLocaleDateString } from '~/helper/dateHelper';

export default {
  head () {
    return {
      title: this.content.title,
      meta: [
        { hid: 'description', name: 'description', content: this.content.description },
        { hid: 'og:title', property: 'og:title', content: this.content.title },
        { hid: 'og:description', property: 'og:description', content: this.content.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.content.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.content.description }
      ]
    }
  },
  layout: 'article',
  name: 'SinglePost',
  async fetch({ store, $content, error }) {
    try {
      const listMenu = await $content('page').only(['navTitle', 'slug']).fetch();
      store.commit('menu/storePageMenu', listMenu);
    } catch (error) {
      error({ statusCode: 500, message: error })
    }
  },
  async asyncData({ params, $content, error }){
    const slugData = params.slug;
    let content;
    
    try {
      content = await $content('post').where({ slug: slugData }).fetch();
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
