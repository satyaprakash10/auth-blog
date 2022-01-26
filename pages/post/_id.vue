<template>
  <div>
    <div>
      <div class="mt-10 px-12">
        <div class="pb-5 text-left font-bold text-base sm:text-2xl">
          Update Post
        </div>

        <!-- breadcrumb -->
        <ul
          class="flex space-x-6 bg-gray-100 px-4 py-2 rounded-md shadow w-full sm:max-w-sm"
        >
          <li class="cursor-pointer hover:text-indigo-500">
            <nuxt-link to="/home">
              Home <span class="ml-3"> / </span></nuxt-link
            >
          </li>
          <li class="cursor-pointer hover:text-indigo-500">
            <nuxt-link to="/post">
              Posts <span class="ml-4"> / </span></nuxt-link
            >
          </li>
          <li class="cursor-pointer text-indigo-500 hover:text-indigo-500">
            <nuxt-link to="#"> Update Post </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="max-w-3xl w-full mt-6 px-12">
        <div
          class="shadow sm:rounded-md sm:overflow-hidden border-t-2 border-indigo-500"
        >
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="id" class="block text-sm font-medium text-gray-700">
                  User Id
                </label>
                <input
                  id="userId"
                  v-model="post.userId"
                  type="text"
                  name="userId"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  v-model="post.title"
                  type="text"
                  name="title"
                  autocomplete="family-name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="id" class="block text-sm font-medium text-gray-700">
                  Id
                </label>
                <input
                  id="id"
                  v-model="post.id"
                  type="text"
                  name="id"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  v-model="post.description"
                  name="description"
                  rows="3"
                  class="shadow-sm px-4 py-2 focus:border-indigo-500 focus:outline-none block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="updatePost"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Update Post',

  data() {
    return {
      post: {
        userId: '',
        title: '',
        id: '',
        description: '',
        completed: false,
      },
    }
  },

  methods: {
    updatePost() {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.id,
          userId: this.userId,
          title: this.title,
          body: this.description,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((response) => response.json())
        .then((json) => console.log('update post =>', json))
    },
  },
}
</script>
