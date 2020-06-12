<template>
  <article class="container mx-auto lg:px-40 px-10">
    <post-item
      v-for="(post, key) in posts"
      :key="key"
      :title="post.title"
      :description="post.description"
      :slug="post.slug"
      :created-at="post.publishedAt"
    />
    <button v-if="currentPage > 1" @click="prevArticle">
      prev
    </button>
    <button v-if="currentPage < totalPages" @click="nextArticle">
      next
    </button>
  </article>
</template>

<script>
import postItem from '~/components/postItem';
const requiredPostKey = ['title', 'slug', 'description', 'publishedAt'];
const sortKey = 'title';
const sortDirection = 'asc';
export default {
  name: 'Home',
  components: {
    postItem
  },
  async asyncData ({ $content }) {
    // change the limit for pagination
    const limit = 2;
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
  methods: {
    async nextArticle() {
      const nextPage = this.currentPage + 1;
      this.currentPage = nextPage <= this.totalPages ? nextPage : this.currentPage;
      if (nextPage <= this.totalPages) {
        this.skip += this.limit;
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
        console.log(this.posts);
      }
    },
    async prevArticle() {
      const prevPage = this.currentPage - 1;
      this.currentPage = prevPage < 1 ? 1 : prevPage;
      if (prevPage >= 1) {
        this.skip -= this.limit;
        console.log(this.skip);
        this.posts = await this.$content('post').sortBy(sortKey, sortDirection).only(requiredPostKey).limit(this.limit).skip(this.skip).fetch();
        console.log(this.posts);
      }
    },
  }
}
</script>
