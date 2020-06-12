<template>
  <footer class="h-10 flex">
    <p class="text-center m-auto text-xs">
      {{ `Bloggy ${year}, view source on ` }}
      <a href="https://github.com/iqbaladinur/bloggy" class="text-blue-300">github. </a>
      Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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
