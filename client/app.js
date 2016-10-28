import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
sync(store, router)

import Validator from './plugins/validator'
Vue.use(Validator)

import IScroll from './plugins/iScroll'
Vue.use(IScroll)

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
