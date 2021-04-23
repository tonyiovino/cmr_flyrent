import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'

import Page from './components/UI/Page.vue'
import List from './components/UI/List'
import Card from './components/UI/Card'
import Form from './components/UI/Form'
import Btn from './components/UI/Btn'
import TextLink from './components/UI/TextLink'
import Container from './components/UI/Container'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.component('appPage', Page)
Vue.component('appList', List)
Vue.component('appCard', Card)
Vue.component('appForm', Form)
Vue.component('appBtn', Btn)
Vue.component('appTextLink', TextLink)
Vue.component('appContainer', Container)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
