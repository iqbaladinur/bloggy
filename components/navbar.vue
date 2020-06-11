<template>
  <div class="bg-blue-400">
    <nav class="container mx-auto flex items-center justify-between flex-wrap p-2">
      <div>
        <a href="/" class="flex items-center flex-shrink-0 text-black">
          <logo class="w-10 h-10"/>
          <span class="ml-2">
            bloggy
          </span>
        </a>
      </div>
      <div class="flex items-center w-auto">
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-gray-800 hover:border-transparent mt-0"
          >Github</a>
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
