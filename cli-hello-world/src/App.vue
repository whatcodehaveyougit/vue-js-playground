<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div v-if="showModal">
      <!-- Putting the colon infront of the props name binds it so the actual props go in the data return script -->
      <Modal :header="header" theme="sale" @closeDaModal="toggleModal" />
    </div>
    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
    <button @click="toggleModal">Toggle Modal</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal
  },
  data() {
    return {
      title: "Hello World",
      header: "Sign up here!",
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log('hello world')
      this.$refs.name.classList.add('active');
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>

</style>
