<template>
  <div class="container mx-auto lg:px-40 px-10">
    <h1 class="text-3xl font-bold">
      {{ content.title }}
    </h1>
    <h2 class="text-xs">
      {{ `${formatLocaleDateString(content.publishedAt)} by ${content.author}` }}
    </h2>
    <div class="text-xs mt-1">
      <nuxt-link
        :to="`/categories/${encodeURIComponent(content.category)}`"
        class="hover:text-blue-300 capitalize"
      >
        &#127861; {{ content.category }}
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

<style lang="postcss" scoped>
.dark-mode .nuxt-content {
  & h2,
  & h3,
  & blockquote {
    @apply border-gray-800;
  }
  & > code,
  & li > code,
  & p > code,
  & h3 > code {
    @apply bg-gray-800;
  }
}
.nuxt-content h2 {
  @apply text-3xl font-normal mb-4 pb-1 border-b -mt-16 pt-24;
  & > a {
    @apply ml-6;
    &::before {
      content: "#";
      @apply text-blue-500 font-normal -ml-6 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
.nuxt-content h3 {
  @apply text-2xl font-normal mb-2 pb-1 border-b -mt-16 pt-20;
  & > a {
    @apply ml-6;
    &::before {
      content: "#";
      @apply text-blue-500 font-normal -ml-5 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
@screen lg {
  .nuxt-content h2 a,
  .nuxt-content h3 a {
    @apply ml-0;
    &::before {
      @apply opacity-0;
    }
  }
}
.nuxt-content ul,
.nuxt-content ol {
  @apply list-disc list-inside mb-4;
  & > li {
    @apply leading-7;
    & > ul {
      @apply pl-4;
    }
  }
}
.nuxt-content ol {
  @apply list-decimal;
}
.nuxt-content {
  & a {
    @apply underline;
  }
  & p {
    @apply mb-4 leading-7;
  }
  & > blockquote {
    @apply py-2 pl-4 mb-4 border-l-4;
    & p:last-child {
      @apply mb-0;
    }
  }
  & > code,
  & li > code,
  & p > code {
    @apply bg-gray-100 p-1 text-sm shadow-xs rounded;
  }
  & h3 > code {
    @apply bg-gray-100 p-1 text-lg shadow-xs rounded;
  }
  & pre[class*="language-"] {
    @apply rounded mt-0 mb-4 bg-gray-200 text-sm relative;
    > code {
      @apply bg-gray-200 relative;
      text-shadow: none;
    }
  }
  & video {
    @apply w-full border rounded shadow-md;
  }
}
.nuxt-content-highlight {
  @apply relative;
  & > .filename {
    @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
  }
}
</style>
