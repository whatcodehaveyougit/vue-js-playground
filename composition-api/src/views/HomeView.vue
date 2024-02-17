<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <div>
      <p>Ninja One Name (Ref): {{ ninjaOne.name }}</p>
      <button @click="updateNinjaOne">Update Ninja One</button>
    </div>
    <div>
      <p>Ninja Two Name (Reactive): {{ ninjaTwo.name }}</p>
      <button @click="updateNinjaTwo">Update Ninja Two</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  // This setup function using the Composition API ( the other method is using the options API)
  setup(){
    // console.log(this);
    // There is no this context inside a setup function

    const ninjaOne = ref({ name: 'mario', age: 30 });
    // Ref will still work with primitive values

    const ninjaTwo = reactive({ name: 'Luigi', age: 34 });
    // Reactive will NOT work with primitive values

    const p = ref('hello');
    console.log(p, p.value);

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      // console.log(p, p.value);
      name = "George"
      p.value.textContent = "hello sir"
    }

    const updateNinjaOne = () => {
      ninjaOne.value.name = 'New Ninja One Name'
    }

     const updateNinjaTwo = () => {
      ninjaTwo.name = 'New Ninja Two Name'
    }

    return { name, age, handleClick, p, ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo }
  }
}
</script>
