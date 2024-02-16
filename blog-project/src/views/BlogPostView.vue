<template>
  <div>
    <div>I am a post</div>
    <button @click="back">Go Back</button>
  </div>
</template>

<script>
export default {
    methods: {
    back() {
      this.$router.go(-1)
    },
  }
}
</script>

<style>

</style>