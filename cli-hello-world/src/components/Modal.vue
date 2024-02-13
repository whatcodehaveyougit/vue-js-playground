<template>
<!-- The .self means that only if we click on that actual elemtn it fires.  Rather thdan children of it -->
  <div class="backdrop" @click.self="closeModal">
    <div id="modal" :class="{ showsale: theme === 'sale'}">
      <h4>{{ header }}</h4>
      <slot>Default content will show here if nothing is passed in by default</slot>
      <div actions="test">
        <slot name="links">
        </slot>
      </div>
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