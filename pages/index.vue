<template>
  <div class="container flex">
    <article class="mx-auto">
      <post-item
        class="p-2 bg-blue-300"
        v-for="(post, key) in posts"
        :key="key"
        :title="post.title"
        :description="post.description"
        :slug="post.slug"
        :created-at="post.createdAt"
      />
      <button v-if="currentPage > 1" @click="prevArticle">
        prev
      </button>
      <button v-if="currentPage < totalPages" @click="nextArticle">
        next
      </button>
    </article>
  </div>
</template>

<script>
import postItem from '~/components/postItem';
const requiredPostKey = ['title', 'slug', 'description', 'createdAt'];
const sortKey = 'title';
const sortDirection = 'asc';
export default {
  name: 'Home',
  components: {
    postItem
  },
  async asyncData ({ $content }) {
    // change the limit for pagination
    const limit = 1;
    const skip = 0;
    const allPost = await $content('post').only(['createdAt']).fetch();
    const totalPost = allPost.length;
    const posts = await $content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(limit).fetch();
    const totalPages = totalPost / limit;
    return {
      posts,
      limit,
      skip,
      totalPost,
      totalPages,
      currentPage: 1
    }
  },
  methods: {
    async nextArticle() {
      const nextPage = this.currentPage + 1;
      this.currentPage = nextPage <= this.totalPages ? nextPage : this.currentPage;
      if (nextPage <= this.totalPages) {
        this.skip += this.limit;
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
      }
    },
    async prevArticle() {
      const prevPage = this.currentPage - 1;
      this.currentPage = prevPage < 1 ? 1 : prevPage;
      if (prevPage >= 1) {
        this.skip -= this.limit;
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
      }
    },
  }
}
</script>
