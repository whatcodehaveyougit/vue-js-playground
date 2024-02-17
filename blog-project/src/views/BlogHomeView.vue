<template>
  <div class="home">
    <h3>Blog Projects</h3>
    <div v-if="storePosts">
      <div v-for="post in storePosts" :key="post.id">
        <router-link :to="{ name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
      </div>
    </div>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import getPosts from '../hooks/getPosts';

export default {
  name: 'HomeView',
   data() {
    return {
      error: null
    }
  },
  async mounted(){
    const posts = await getPosts()
    if(posts.length){
      this.$store.commit('setPosts', posts)
    } else if (posts){
      this.error = 'Error fetching data'
    }
  },
  computed: {
    storePosts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>
