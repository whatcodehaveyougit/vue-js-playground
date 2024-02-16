import checkFetch from './functions'
import { ref } from 'vue'

const getPosts = async () => {

  const posts = []
  let error = null

  const load = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const checkedFetch =  await checkFetch(res);
    const parsedFetch = await checkedFetch.json()
    posts = parsedFetch
  }
  return { posts, error, load }
}

export default getPosts;