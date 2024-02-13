console.log('helo')

const app = Vue.createApp({
  data() {
    return {
      url: "https://7hillsceilidh.com",
      title: 'Superman',
      age: 22,
      showInfo: true,
      books: [
        {title: 'Phil stone'},
        {title: 'Chamber Secrets'},
        { title: 'Last one' }
      ]
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