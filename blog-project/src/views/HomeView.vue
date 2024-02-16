<template>
  <div class="home">
    <h3>Blog Project</h3>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <p>{{ post.title }}</p>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import checkFetch from '../composeables/functions'

export default {
  name: 'HomeView',
  setup(){
    const posts = ref([]);
    const error = ref(null);

    // console.log(error)
    const load = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(checkFetch)
        .then(res => {
          return res.json();
        })
        .then(data => posts.value = data)
        .catch(err => {
          error.value = err.message
        })
    }

    load()

    return { posts, error }
  }
}
</script>
