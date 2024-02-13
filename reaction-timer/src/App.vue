<template>
<div>
  <h3>Ninja Reaction Timer</h3>
  <div v-if="showBlock">
    <Block  @stopClick="stopTimer" />
  </div>
  <div v-if="!showBlock">
    <button @click="startGame">Play</button>
  </div>
  <div v-if="timeTakenToClick">
    <Results :timeTakenToClick="timeTakenToClick" :userMessage="userMessage" />
  </div>
</div>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

function randomIntFromInterval(min, max) { // min and max included
  const number = Math.floor(Math.random() * (max - min + 1) + min)
  return number * 1000
}

function generateMessage(timeTaken){
  if (timeTaken > 500){
    return "Too slow try again!"
  } else {
    return "Super quick, well done!"
  }
}

export default {
  name: 'App',
  components: {
    Block, Results
  },
   data() {
    return {
      showBlock: false,
      startTimeClick: 0,
      timeTakenToClick: 0,
      userMessage: ''
    }
  },
  methods:{
    startGame(){
      const rndInt = randomIntFromInterval(1, 3)
       this.startTimeClick = 0;
      this.timeTakenToClick = 0;
      this.userMessage = ''
      setTimeout( () => {
        this.showBlock = true;
        this.startTimeClick = Date.now()
      }, rndInt)
    },
    stopTimer(){
      const res = Date.now() - this.startTimeClick
      this.timeTakenToClick = res;
      this.userMessage = generateMessage(res)
      this.showBlock = false;
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
