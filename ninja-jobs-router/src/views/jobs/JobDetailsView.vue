<template>
<div>
  Job Details Page
  <!-- This is cool as we are taking the route parameter id as a prop -->
  <div v-if="job">
    <p>Job Name: {{ job.title }}</p>
    <p>Job Details: {{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details</p>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>