// import Vue from 'vue'
// import App from './App.vue'
// import './assets/global.css'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// This code was somehow preventing the teleport from working


import { createApp } from 'vue'
import App from './App.vue'

// global styles
import './assets/global.css'

createApp(App).mount('#app')
