console.log('helo')

const app = Vue.createApp({
  data() {
    return {
      title: 'Superman',
      age: 22,
      showInfo: true
    }
  },
  methods: {
    changeTitle(params){
      this.title = params
    },
    showOrHideInfo(){
      this.showInfo = !this.showInfo
    },
    onMouseOver(){
      console.log('mouse over')
    },
    handleEvent(e){
      console.log(e)
    }

  }
})

app.mount('#app')