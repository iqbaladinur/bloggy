<template>
  <article>
    <h1 class="text-center">raw</h1>
    <pre>
      {{ post }}
    </pre>
    <button v-if="currentPage < totalPages" @click="nextArticle">
      next
    </button>
    <button v-if="currentPage > 1" @click="prevArticle">
      prev
    </button>
  </article>
</template>

<script>
const requiredPostKey = ['title', 'slug', 'description'];
export default {
  async asyncData ({ $content }) {
    // change the limit for pagination
    const limit = 1;
    const skip = 0;
    const allPost = await $content('post').only(['createdAt']).fetch();
    const totalPost = allPost.length;
    const post = await $content('post').only(requiredPostKey).limit(limit).fetch();
    const totalPages = totalPost / limit;
    return {
      post,
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
        this.post = await this.$content('post').only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
      }
    },
    async prevArticle() {
      const prevPage = this.currentPage - 1;
      this.currentPage = prevPage < 1 ? 1 : prevPage;
      if (prevPage >= 1) {
        this.skip -= this.limit;
        this.post = await this.$content('post').only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
      }
    },
  }
}
</script>
