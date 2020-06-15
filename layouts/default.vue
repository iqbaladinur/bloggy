<template>
  <div>
    <navbar class="mb-5" />
    <div class="main-body">
      <nuxt />
    </div>
    <footer-bar />
  </div>
</template>
<script>
import navbar from '~/components/navbar.vue';
import footerBar from '~/components/footer.vue';
export default {
  name: 'Default',
  components: {
    navbar,
    footerBar
  },
}
</script>
<style scoped>
.main-body {
  min-height: calc(100vh - 7.5rem);
}
</style>
