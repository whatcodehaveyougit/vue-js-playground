<template>
  <div>
    <b>Result</b>
    <p>{{ timeTakenToClick }} milliseconds</p>
    <h5>{{ userMessage }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    timeTakenToClick: Number,
    userMessage: String
  }
}
</script>