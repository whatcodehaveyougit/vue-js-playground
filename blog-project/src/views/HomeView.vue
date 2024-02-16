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
import getPosts from '../composeables/getPosts'

export default {
  name: 'HomeView',
  setup(){
    const { load, posts, error } = getPosts()
    load()
    return { posts, error }
  }
}
</script>
