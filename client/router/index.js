import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const routes = [
    {
      path: '/',
      component: require('../views/Home')
    },
    {
      path: '/login',
      component: require('../views/Login')
    },
    {
      path: '/demo',
      component: require('../views/Demo'),
      meta: { requiresAuth: true }      
    }       
]

const router = new Router({
  mode: 'hash',
  routes
})

//  auth check
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = store.getters.user
    if (!user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else if(typeof(record.meta.role) == 'number' && record.meta.role != user.role){
      next(false)
      alert('角色错误！')
    } else {
      next(false)
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
