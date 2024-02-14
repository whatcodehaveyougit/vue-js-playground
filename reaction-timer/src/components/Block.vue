<template>
  <div id="block" @click="stopGame">Click Me</div>
</template>

<script>
export default {
  name: 'Block',
  data(){
    return {
      startTimeClick: 0,
    }
  },
  methods: {
    stopGame() {
        const clickDelay = Date.now() - this.startTimeClick
        this.$emit('stopGame', clickDelay)
      },
  },
  mounted(){
    this.startTimeClick = Date.now()
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
