<template>
  <div class="home">
    <h3>Blog Project</h3>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
    {{ storePosts }}
  </div>
</template>

<script>
import getPosts from '../composeables/getPosts'

export default {
  name: 'HomeView',
  setup(){
    const { load, posts, error } = getPosts()
    load()
    return { posts, error }
  },
  computed: {
    storePosts () {
      return this.load()
    }
  }
}
</script>
