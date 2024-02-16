<template>
  <div class="home">
    <h3>Blog Project</h3>
    <div v-if="storePosts">
      <div v-for="post in storePosts" :key="post.id">
        <router-link :to="{ name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
      </div>
    </div>
    <!-- <div v-if="error">{{ error }}</div> -->
    {{ storePosts }}
  </div>
</template>

<script>
import getPosts from '../composeables/getPosts'

export default {
  name: 'HomeView',
  async mounted(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const checkedFetch =  await checkFetch(res);
    const parsedFetch = await res.json()
    const posts = parsedFetch
    console.log(posts)
    if(posts){
      this.$store.commit('setPosts', posts)
    }
    // return { error }
  },
  computed: {
    storePosts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>
