import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      posts: []
    }
  },
  getters: {
    getPosts (state) {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts){
      state.posts.push(posts)
    }
  }
})

export default store;

// 02920252500