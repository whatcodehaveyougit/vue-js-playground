import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      posts: [{title: "helo vuex world", id: 1}]
    }
  },
})

export default store;

// 02920252500