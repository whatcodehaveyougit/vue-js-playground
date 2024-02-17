<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
// Watch and Watch Effect are similar to useEffect
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'AvoutView',
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const stopWatch = watch(search, () => {
      // Will run anytime antyhing in the first dep array is updated
      console.log('watch function ran');
    });

    const stopEffect = watchEffect(() => {
      // Will look at all the things inside the functiona and run every time one of them is updated
      console.log('watch effect ran', search.value);
    })

    const handleClick = () => {
      stopWatch();
      stopEffect()
    }

    return { matchingNames, names, search, handleClick}
  }
}
</script>

