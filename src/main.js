import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Page from './components/UI/Page.vue'
import List from './components/UI/List'
import Card from './components/UI/Card'
import Form from './components/UI/Form'

Vue.config.productionTip = false

Vue.component('appPage', Page)
Vue.component('appList', List)
Vue.component('appCard', Card)
Vue.component('appForm', Form)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
