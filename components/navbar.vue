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
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border border-black" @click="isHide = !isHide">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto" :class="{ 'hidden' : isHide}">
        <div class="text-sm lg:flex-grow px-2 lg:px-10">
          <nuxt-link
            v-for="(item, key) in menu"
            :key="key" 
            :to="`/pages/${item.slug}`"
            class="block mt-3 hover:text-blue-600 lg:inline-block lg:mt-0 mr-4 lg:mb-0 mb-3"
          >
            {{ item.navTitle }}
          </nuxt-link>
        </div>
        <div class="flex items-center w-auto px-2 lg:px-0">
          <div class="w-full">
            <a
              href="https://github.com/iqbaladinur/bloggy"
              class="inline-block w-full text-center text-sm px-4 py-1 leading-none border border-gray-800 hover:bg-black hover:text-white mt-0"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue';
export default {
  name: 'Navbar',
  components: {
    Logo,
  },
  computed: {
    menu() {
      return this.$store.getters['menu/getMenu'];
    }
  },
  data() { 
    return {
      isHide: true
    }
  },
};
</script>
