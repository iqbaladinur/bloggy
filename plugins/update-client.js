export default function () {
  // Only in development
  if (process.dev) {
    window.onNuxtReady(($nuxt) => {
      $nuxt.$on('content:update', () => {
        // Refresh the store categories
        $nuxt.refresh();
      })
    })
  }
}