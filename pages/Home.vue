<template>
  <div>
    <the-site-header />
    <h1
      class="text-center font-semibold mt-28 text-lg sm:text-2xl text-gray-900"
    >
      Check it Out all New Posts feed!
    </h1>

    <div
      class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
    >
      <div
        v-for="post in blogPosts"
        :key="post.id"
        class="flex flex-col hover:shadow-2xl transition-all duration-500 border-b-4 border-indigo-500 rounded-lg shadow-lg overflow-hidden"
      >
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-cyan-600">
              <a :href="post.category.href" class="hover:underline">
                {{ post.category.userId }}
              </a>
            </p>
            <a :href="post.href" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ post.body }}
              </p>
            </a>
          </div>

          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a :href="post.author.href">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="post.author.imageUrl"
                  :alt="post.author.name"
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a :href="post.author.href" class="hover:underline">
                  {{ post.author.name }}
                </a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">
                  {{ post.date }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {{ post.readingLength }} read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link
      class="rounded-md shadow-lg bg-transparent hover:bg-indigo-300 transition-all duration-500 hover:bg-opacity-50 text-black text-base px-5 border border-indigo-500 border-b-4 flex w-60 items-center text-center mx-auto mt-20 justify-center py-4"
      to="/post/create"
    >
      <PlusIcon class="text-indigo-500 w-4 h-4 mr-4" />
      Add New Post
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TheSiteHeader from '../components/TheSiteHeader.vue'
import PlusIcon from '../components/icons/PlusIcon.vue'
export default {
  components: { TheSiteHeader, PlusIcon },
  layout: 'dashboard',
  title: 'Home',

  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Boost your conversion rate',
          body: 'this is a new Post!',
          href: '#',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { name: 'Article', href: '#' },
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
          author: {
            name: 'Roel Aufderehar',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
          },
          readingLength: '6 min',
        },
        {
          id: 2,
          body: 'this is a new Post!',
          title: 'How to use search engine optimization to drive sales',
          href: '#',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          category: { name: 'Video', href: '#' },
          imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          author: {
            name: 'Brenna Goyette',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
          },
          readingLength: '4 min',
        },
        {
          id: 3,
          title: 'Improve your customer experience',
          href: '#',
          body: 'this is a new Post!',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          category: { name: 'Case Study', href: '#' },
          imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          author: {
            name: 'Daniela Metz',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
          },
          readingLength: '11 min',
        },
      ],
    }
  },
  computed: {},

  created() {
    this.fetchAllPosts()
  },

  methods: {
    ...mapActions('post', ['getPosts']),

    fetchAllPosts() {},
  },
}
</script>
