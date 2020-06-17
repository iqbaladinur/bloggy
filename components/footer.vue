<template>
  <footer class="h-10 flex">
    <p class="text-center m-auto text-xs px-2">
      {{ `Bloggy ${year}, view source on ` }}
      <a href="https://github.com/iqbaladinur/bloggy" class="text-blue-300">github. </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
