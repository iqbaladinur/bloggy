<template>
  <div class="py-2 mb-1">
    <nuxt-link :to="`/post/${slug}`" class="text-xl underline hover:text-blue-700">
      {{ title }}
    </nuxt-link>
    <p class="text-xs">
      &#128198; {{ formatLocaleDateString(createdAt) }}
    </p>
    <div class="text-xs">
      &#128194;
      <nuxt-link
        v-for="(c, k) in categoryArray"
        :key="k"
        :to="`/categories/${encodeURIComponent(c)}`"
        class="hover:text-blue-300"
      >
        {{ `${c}${k == categoryArray.length - 1 ? '':','}` }}
      </nuxt-link>
    </div>
    <p class="text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script>
import { formatLocaleDateString } from '~/helper/dateHelper';
import { categoryRegex } from '~/helper/commonHelper';

export default {
  name: 'PostItem',
  props: {
    title: {
      type: String,
      default: 'title',
      required: true,
    },
    description: {
      type: String,
      default: 'desc',
      required: true,
    },
    slug: {
      type: String,
      default: '404',
      required: true,
    },
    createdAt: {
      type: String,
      default: formatLocaleDateString(),
      required: true,
    },
    category: {
      type: String,
      default: 'uncategorized',
      required: false
    }
  },
  computed: {
    categoryArray() {
      return this.category.split(categoryRegex());
    }
  },
  methods: {
    formatLocaleDateString,
  },
}
</script>
