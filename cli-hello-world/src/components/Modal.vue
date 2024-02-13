<template>
  <div class="backdrop" @click="closeModal">
    <div id="modal" :class="{ showsale: theme === 'sale'}">
      <h4>{{ header }}</h4>
      <p>Hello I am a modal</p>
    </div>
  </div>
</template>

<script>

export default {
    props: ['header', 'theme'],
    methods: {
      closeModal() {
        this.$emit('closeDaModal')
      }
    }
}
</script>

<style scoped>
/* This scoped keyword will add a data attribute so that the CSS class will only apply to this componant  */
/* This does however hit the performance as vue will have to add the data classes everywhere */
.backdrop {
  position: fixed;
  top: 0;
  background: grey;
  width: 100%;
  height: 100%;
}
#modal {
  width: 400px;
  border: 1px solid black;
}
#modal.showsale {
  background: yellow;
}
</style>