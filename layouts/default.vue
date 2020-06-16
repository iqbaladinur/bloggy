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

<style>
.main-body {
  min-height: calc(100vh - 7.5rem);
}
.dark-mode .nuxt-content h2, .dark-mode .nuxt-content h3, .dark-mode .nuxt-content blockquote {
  @apply border-gray-800;
}
.dark-mode .nuxt-content > code, .dark-mode .nuxt-content li > code, .dark-mode .nuxt-content p > code, .dark-mode .nuxt-content h3 > code {
  @apply bg-gray-800;
}

.nuxt-content h2 {
  @apply text-3xl font-normal mb-4 pb-1 border-b -mt-16 pt-24;
}
.nuxt-content h2 > a {
  @apply ml-6;
}
.nuxt-content h2 > a::before {
  content: "#";
  @apply text-blue-500 font-normal -ml-6 pr-1 absolute opacity-100;
}
.nuxt-content h2:hover > a::before {
  @apply opacity-100;
}

.nuxt-content h3 {
  @apply text-2xl font-normal mb-2 pb-1 border-b -mt-16 pt-20;
}
.nuxt-content h3 > a {
  @apply ml-6;
}
.nuxt-content h3 > a::before {
  content: "#";
  @apply text-blue-500 font-normal -ml-5 pr-1 absolute opacity-100;
}
.nuxt-content h3:hover > a::before {
  @apply opacity-100;
}

@screen lg {
  .nuxt-content h2 a,
.nuxt-content h3 a {
    @apply ml-0;
  }
  .nuxt-content h2 a::before,
.nuxt-content h3 a::before {
    @apply opacity-0;
  }
}
.nuxt-content ul,
.nuxt-content ol {
  @apply list-disc list-inside mb-4;
}
.nuxt-content ul > li,
.nuxt-content ol > li {
  @apply leading-7;
}
.nuxt-content ul > li > ul,
.nuxt-content ol > li > ul {
  @apply pl-4;
}

.nuxt-content ol {
  @apply list-decimal;
}

.nuxt-content a {
  @apply underline;
}
.nuxt-content p {
  @apply mb-4 leading-7;
}
.nuxt-content > blockquote {
  @apply py-2 pl-4 mb-4 border-l-4;
}
.nuxt-content > blockquote p:last-child {
  @apply mb-0;
}
.nuxt-content > code, .nuxt-content li > code, .nuxt-content p > code {
  @apply bg-gray-100 p-1 text-sm shadow-xs rounded;
}
.nuxt-content h3 > code {
  @apply bg-gray-100 p-1 text-lg shadow-xs rounded;
}
.nuxt-content pre[class*=language-] {
  @apply rounded mt-0 mb-4 bg-gray-200 text-sm relative;
}
.nuxt-content pre[class*=language-] > code {
  @apply bg-gray-200 relative;
  text-shadow: none;
}
.nuxt-content video {
  @apply w-full border rounded shadow-md;
}

.nuxt-content-highlight {
  @apply relative;
}
.nuxt-content-highlight > .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}
</style>
