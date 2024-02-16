import checkFetch from './functions'
import { ref } from 'vue'

const getPosts = () => {

  const posts = ref([]);
  const error = ref(null);

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
  return { posts, error, load }
}

export default getPosts;