<template>
<div>
  <h2>Jobs</h2>
  <p>This is the jobs page</p>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: {id: job.id}}">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading Jobs......................</p>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      jobs: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(data => this.jobs = data)
  }
}
</script>

<style>

</style>