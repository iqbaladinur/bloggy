<template>
  <div class="bg-white">
    <nav class="container mx-auto flex items-center justify-between flex-wrap p-2">
      <div>
        <a href="/" class="flex items-center flex-shrink-0">
          <logo class="w-10 h-10"/>
          <span class="ml-2">
            bloggy
          </span>
        </a>
      </div>
      <div class="flex items-center w-auto">
        <div>
          <a
            href="https://github.com/iqbaladinur/bloggy"
            class="inline-block text-sm px-4 py-2 leading-none border rounded border-gray-800 hover:bg-black hover:text-white mt-0"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "~/components/logo.vue";
export default {
  name: 'Navbar',
  components: {
    Logo,
  }
};
</script>
