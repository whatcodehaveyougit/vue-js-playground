<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- Teleport not working, can't see it getting loaded in the div -->
    <Teleport to="#modals" v-if="showModal">
      <!-- Putting the colon infront of the props name binds it so the actual props go in the data return script -->
      <Modal :header="header" theme="sale" @closeDaModal="toggleModal">
        <h4>Net Ninja Modal</h4>
        <p>Hello hello hello from the slot</p>
        <template v-slot:links>
          <a href="\">link here</a>
          <a href="\">link here</a>
        </template>
      </Modal>
    </Teleport>
    <Teleport to="#modals" v-if="showModal2">
      <Modal :header="header" theme="sale"  @closeDaModal="toggleModal2">
        <h5>Sigurd Modal</h5>
      </Modal>
    </Teleport>
    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
    <button @click="toggleModal">Toggle Modal</button>
    <button @click="toggleModal2">Toggle Modal2</button>
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
      showModal: false,
      showModal2: false
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
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>

</style>
