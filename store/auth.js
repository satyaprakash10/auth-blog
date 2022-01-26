export default {
  namespaced: true,

  state() {
    return {
      user: null,
      isAuthenticate: false,
    }
  },

  getters: {
    authenticated: (state) => state.isAuthenticate,
    getUser: (state) => state.user,
  },

  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('success', data)
      })
    },
    logout({ commit }) {
      commit('logout')
    },
  },

  mutations: {
    success(state, data) {
      window.localStorage.setItem('isAuthenticate', true)
      state.isAuthenticate = true
      state.user = data
    },
    logout(state) {
      window.localStorage.setItem('isAuthenticate', false)
      state.isAuthenticate = false
    },
  },
}
