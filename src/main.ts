import 'vue-class-component/hooks'
import './class-component-hooks'
import './scss/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './route-store'
// @ts-ignore
import CSSPlugin from 'gsap/CSSPlugin'

// Needed to make sure animations work in production
// see https://github.com/greensock/GreenSock-JS/issues/285#issuecomment-433729632
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _ = CSSPlugin

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')