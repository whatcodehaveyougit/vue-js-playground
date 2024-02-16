<template>
  <div class="home">
    <h3>Blog Project</h3>
    <!-- <div v-if="storePosts">
      <div v-for="post in storePosts" :key="post.id">
        <router-link :to="{ name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
      </div>
    </div> -->
    <div v-if="error">{{ error }}</div>

    {{ storePosts }}
  </div>
</template>

<script>
import getPosts from '../composeables/getPosts'

export default {
  name: 'HomeView',
  mounted(){
    const { load, posts, error } = getPosts()
    load()
    this.$store.commit('setPosts', posts)
    return { error }
  },
  computed: {
    storePosts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>
