<template>
  <div class="">
    <!-- site header -->
    <TheSiteHeader />

    <!-- main section -->
    <div class="flex flex-col px-12 mt-20">
      <div class="flex items-center justify-between">
        <div class="mt-10">
          <h1 class="pb-5 text-left font-bold text-base sm:text-2xl">Posts</h1>

          <!-- breadcrumb items-->
          <ul
            class="flex space-x-6 bg-gray-100 px-4 py-2 rounded-md shadow w-full sm:max-w-sm"
          >
            <li class="cursor-pointer hover:text-indigo-500">
              <nuxt-link to="/home">
                Home <span class="ml-3"> / </span>
              </nuxt-link>
            </li>
            <li class="cursor-pointer text-indigo-500 hover:text-indigo-500">
              <nuxt-link to="#"> Posts <span class="ml-4"> </span></nuxt-link>
            </li>
          </ul>
        </div>

        <nuxt-link
          to="/post/create"
          class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon class="text-white w-4 h-4 mr-3" />
          Add New Post
        </nuxt-link>
      </div>

      <!-- list of Posts -->
      <div class="-my-2 mt-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Body
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    User Id
                  </th>
                  <!-- <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th> -->
                </tr>
              </thead>
              <tbody v-if="getPosts" class="bg-white divide-y divide-gray-200">
                <tr v-for="(post, index) in getPosts" :key="index">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ post.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ post.title }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate"
                  >
                    {{ post.body }}
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                  >
                    {{ post.userId }}
                  </td>
                  <!-- <td
                    class="px-6 py-4 text-right font-semibold cursor-pointer whitespace-nowrap text-sm text-indigo-500"
                  >
                    <span class="bg-green-200 rounded-lg px-2 py-1">
                      EDIT
                    </span>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PlusIcon from '../../components/icons/PlusIcon.vue'
import TheSiteHeader from '../../components/TheSiteHeader.vue'
export default {
  title: 'Posts',
  components: {
    TheSiteHeader,
    PlusIcon,
  },

  middleware: 'route-guard',

  data() {
    return {
      posts: [],
    }
  },

  computed: {
    ...mapGetters('post', ['getPosts']),
  },

  created() {
    this.fetchAllPosts()
  },

  methods: {
    ...mapActions('post', ['fetchAllPosts']),
  },
}
</script>

<style lang="css">
.truncate {
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
