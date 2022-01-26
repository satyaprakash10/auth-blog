export default {
  namespaced: true,

  state() {
    return {
      posts: [],
    }
  },

  getters: {
    getPosts: (state) => state.posts,
  },

  actions: {
    addPost({ commit }, data) {
      commit('addPost', data)
    },

    fetchAllPosts({ commit }) {
      commit('allPosts')
    },
  },

  mutations: {
    addPost(state, data) {
      if (data) {
        state.posts.push(data)
        if (state.posts) {
          window.localStorage.setItem('posts', JSON.stringify(state.posts))
        }
      }
    },

    allPosts(state) {
      const allPost = window.localStorage.getItem('posts')
      state.posts = JSON.parse(allPost)
    },
  },
}
