<template>
  <div class="py-2 mb-1">
    <nuxt-link :to="`post/${slug}`" class="text-lg underline">
      {{ title }}
    </nuxt-link>
    <p class="text-xs text-gray-300">
      {{ formatLocaleDateString(createdAt) }}
    </p>
    <p class="text-xs">
      {{ description }}
    </p>
  </div>
</template>

<script>
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
      default: new Date().toLocaleDateString(),
      required: true,
    }
  },
  methods: {
    formatLocaleDateString(date) {
      return new Date(date).toLocaleDateString();
    }
  },
}
</script>
