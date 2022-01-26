<template>
  <div>
    <div
      class="bg-indigo-500 absolute top-0 left-0 right-0 w-full h-20 shadow-md px-4 sm:px-12 py-3"
    >
      <div class="flex justify-between items-center">
        <!-- logo -->
        <div class="flex items-center">
          <a
            href="#"
            class="font-bold italic font-serif text-lg sm:text-4xl text-white"
          >
            Posts
          </a>
          <span class="font-semibold ml-3 font-mono text-xl">Blog</span>
        </div>

        <!-- desktop menu items -->
        <div class="hidden sm:block">
          <ul
            class="flex items-center space-x-6 font-semibold text-base sm:text-lg text-white"
          >
            <li class="hover:text-gray-900 cursor-pointer">
              <nuxt-link to="/home"> Home </nuxt-link>
            </li>
            <li class="hover:text-gray-900 cursor-pointer">
              <nuxt-link to="/post"> Posts </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- mobile menu  -->
        <div v-show="isOpen" class="px-4">
          <div
            class="bg-gray-200 py-1 mt-2 rounded-md shadow-md absolute top-20 h-42 left-0 right-0"
          >
            <ul
              class="text-center font-semibold text-base sm:text-lg text-white"
            >
              <li class="hover:text-indigo-500 text-black py-3 cursor-pointer">
                <nuxt-link to="/home"> Home </nuxt-link>
              </li>
              <li class="hover:text-indigo-500 text-black py-3 cursor-pointer">
                <nuxt-link to="/post"> Posts </nuxt-link>
              </li>
            </ul>
            <div class="relative">
              <button
                class="flex items-center justify-center border-b-4 border-indigo-500 rounded-b-md text-black bg-indigo-200 absolute -bottom-16 left-0 right-0 px-6 py-4 w-full text-base"
                @click="logout"
              >
                <SignOut class="w-5 h-5 text-black mr-3" />
                Logout
              </button>
            </div>
          </div>
        </div>

        <!-- toggle menu -->
        <button class="block sm:hidden" @click="isOpen = !isOpen">
          <ToggleMenu
            v-if="!isOpen"
            class="text-white w-10 mt-2 cursor-pointer transition-all duration-500 transform h-10 mt-2 cursor-pointer transition-all duration-500 transform"
          />
          <CloseMenu
            v-if="isOpen"
            class="text-white w-10 mt-2 cursor-pointer transition-all duration-500 transform h-10 mt-2 cursor-pointer transition-all duration-500 transform"
          />
        </button>

        <!-- logout -->
        <div class="hidden sm:block">
          <button
            class="border-white flex mt-2 border bg-transparent rounded-md shadow-md hover:shadow-lg hover:text-gray-900 py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-white hover:scale-110 transform transition-all duration-500 hover:bg-opacity-30"
            @click="logout"
          >
            <SignOut class="w-5 h-5 text-white mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignOut from '../components/icons/SignOut.vue'
import ToggleMenu from '../components/icons/ToggleMenu.vue'
import CloseMenu from '../components/icons/CloseMenu.vue'
export default {
  title: 'Navigation',
  components: {
    SignOut,
    ToggleMenu,
    CloseMenu,
  },

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    logout() {
      window.localStorage.removeItem('isAuthenticate')
      this.$router.push('/')
    },
  },
}
</script>
