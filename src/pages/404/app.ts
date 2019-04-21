import Vue from "vue"
import NotFound from "./404.vue"
import store from "../../stores/store"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(NotFound)
})