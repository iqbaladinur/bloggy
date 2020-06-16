<template>
  <div class="py-2 mb-1">
    <nuxt-link :to="`post/${slug}`" class="text-xl underline hover:text-blue-700">
      {{ title }}
    </nuxt-link>
    <div class="text-xs">
      <nuxt-link
        :to="`/categories/${encodeURIComponent(category)}`"
        class="hover:text-blue-300 capitalize"
      >
        &#127861; {{ category }}
      </nuxt-link>
    </div>
    <p class="text-xs">
      {{ formatLocaleDateString(createdAt) }}
    </p>
    <p class="text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script>
import { formatLocaleDateString } from '~/helper/dateHelper';

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
  methods: {
    formatLocaleDateString
  },
}
</script>
