<template>
  <div class="">
    <h1 class="text-lg">
      {{ title }}
    </h1>
    <p class="text-xs text-gray-300">
      {{ createdAt }}
    </p>
    <p class="text-xs">
      {{ description }}
    </p>
    <nuxt-link :to="`post/${slug}`" class="text-blue-600">
      read more
    </nuxt-link>
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
  }
}
</script>
