<template>
  <article class="container mx-auto lg:px-40 px-10">
    <div v-if="!isLoading">
      <post-item
        v-for="(post, key) in posts"
        :key="key"
        :title="post.title"
        :description="post.description"
        :slug="post.slug"
        :created-at="post.publishedAt"
      />
      <div class="mt-5">
        <button v-if="currentPage > 1" @click="prevArticle" class="px-4 border border-black focus:outline-none">
          prev
        </button>
        <button v-if="currentPage < totalPages" @click="nextArticle" class="px-4 border border-black focus:outline-none">
          next
        </button>
      </div>
    </div>
    <div v-else >
      loading...
    </div>
  </article>
</template>

<script>
import postItem from '~/components/postItem';
const requiredPostKey = ['title', 'slug', 'description', 'publishedAt'];
const sortKey = 'title';
const sortDirection = 'desc';
export default {
  name: 'Home',
  head () {
    return {
      title: 'Bloggy',
      meta: [
        { hid: 'description', name: 'description', content: 'this is home page' },
        { hid: 'og:title', property: 'og:title', content: 'home' },
        { hid: 'og:description', property: 'og:description', content: 'this is home page' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'home' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'this is home page' }
      ]
    }
  },
  components: {
    postItem
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
    const limit = 4;
    const skip = 0;
    const allPost = await $content('post').only(['createdAt']).fetch();
    const totalPost = allPost.length;
    const posts = await $content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(limit).fetch();
    const totalPages = Math.ceil(totalPost / limit);
    return {
      posts,
      limit,
      skip,
      totalPost,
      totalPages,
      currentPage: 1
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async nextArticle() {
      const nextPage = this.currentPage + 1;
      this.currentPage = nextPage <= this.totalPages ? nextPage : this.currentPage;
      if (nextPage <= this.totalPages) {
        this.skip += this.limit;
        this.isLoading = true;
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).skip(this.skip).limit(this.limit).fetch();
        this.isLoading = false;
      }
    },
    async prevArticle() {
      const prevPage = this.currentPage - 1;
      this.currentPage = prevPage < 1 ? 1 : prevPage;
      if (prevPage >= 1) {
        this.skip -= this.limit;
        this.isLoading = true;
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).skip(this.skip).limit(this.limit).fetch();
        this.isLoading = false;
      }
    },
  }
}
</script>
