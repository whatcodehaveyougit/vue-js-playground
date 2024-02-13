<template>
<div id="block" @click="stopClick">Click Me</div>
</template>

<script>
export default {
  name: 'Block',
  methods: {
    stopClick() {
        this.$emit('stopClick')
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#block {
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>
