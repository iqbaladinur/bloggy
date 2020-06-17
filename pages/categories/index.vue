<template>
  <article class="container mx-auto lg:px-40 px-10">
    <h1 class="text-lg text-center">
      All Categories
    </h1>
    <hr class="mt-2">
    <div v-if="distinctCategories.length > 0" class="flex flex-wrap mt-10">
      <nuxt-link
        v-for="(value, key) in distinctCategories"
        :key="key"
        :to="`/categories/${encodeURIComponent(value)}`"
        class="w-full lg:w-1/5 px-4 py-2 border border-black text-center hover:bg-black hover:text-white m-2"
      >
        &#128194; {{ value }}
      </nuxt-link>
    </div>
    <div v-else class="text-center mt-4">
      You haven't added category.
    </div>
  </article>
</template>

<script>
export default {
  name: 'Categories',
  head () {
    return {
      title: `${process.env.blogTitle} | Categories`,
      meta: [
        { hid: 'description', name: 'description', content: 'All Categories' },
        { hid: 'og:title', property: 'og:title', content: `${process.env.blogTitle} | Categories` },
        { hid: 'og:description', property: 'og:description', content: 'All Categories' },
        { hid: 'twitter:title', name: 'twitter:title', content: `${process.env.blogTitle} | Categories` },
        { hid: 'twitter:description', name: 'twitter:description', content: 'All Categories' }
      ]
    }
  },
  async fetch({ store, $content, error }) {
    try {
      const listMenu = await $content('page').only(['navTitle', 'slug']).fetch();
      store.commit('menu/storePageMenu', listMenu);
    } catch (error) {
      error({ statusCode: 500, message: error })
    }
  },
  async asyncData ({ $content }) {
    // change the limit for pagination
    const allCategory = await $content('post').only(['category']).fetch();
    const distinctCategories = [...new Set(allCategory.map(value => value.category))];
    return {
      distinctCategories
    }
  },
}
</script>
