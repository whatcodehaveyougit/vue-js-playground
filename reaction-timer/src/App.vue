<template>
<div>
  <h3>Ninja Reaction Timer</h3>
  <div v-if="showBlock">
    <Block  @stopGame="stopGame" />
  </div>
  <button @click="startGame" :disabled="isPlaying">Play</button>
  <div v-if="timeTakenToClick && !isPlaying">
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
      showBlock: true,
      startTimeClick: 0,
      userMessage: '',
      isPlaying: false,
      timeTakenToClick: 0
    }
  },
  methods:{
    startGame(){
      const rndInt = randomIntFromInterval(1, 3)
      this.userMessage = '';
      this.isPlaying = true;
      setTimeout( () => {
        this.showBlock = true;
      }, rndInt)
    },
    stopGame(reactionTime){
      this.timeTakenToClick = reactionTime;
      this.userMessage = generateMessage(reactionTime)
      this.showBlock = false;
      this.isPlaying = false
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
