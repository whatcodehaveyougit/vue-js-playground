import checkFetch from './checkFetch'

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
     if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
    const posts = await res.json();
    return posts;
    // const checkedFetch =  await checkFetch(res);
    // if(checkedFetch){
    //   const posts = await checkedFetch.json();
    //   return posts;
    // }
  } catch(err) {
    console.log(err);
    return err;
  }

}

export default getPosts;