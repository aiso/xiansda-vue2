const ROLE_CLIENT = 10

const routes = [
    {
      path: '/client/home',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/client/home'))
        }, 'group-client')
      },
      meta: { 
        icon:'material-home',
        title:'主页',
        requiresAuth: true, role: ROLE_CLIENT
      }
    },
    {
      path: '/client/transes',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/client/transes'))
        }, 'group-client')
      },
      meta: { 
        icon:'material-work',
        title:'服务单',
        requiresAuth: true, role: ROLE_CLIENT
      }
    },
    {
      path: '/client/user',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/client/user'))
        }, 'group-client')
      },
      meta: { 
        icon:'material-person',
        title:'用户',
        requiresAuth: true, role : ROLE_CLIENT
      }
    },
    {
      path: '/client/station',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/client/station'))
        }, 'group-client')
      },
      meta: { 
        icon:'material-store_mall_directory',
        title:'服务站',
        requiresAuth: true, role : ROLE_CLIENT
      }
    },
]

const navigation = {
  routes: [
    '/client/home',
    '/client/transes',
    '/client/user'
  ],
  home : '/client/home'
}

module.exports = {
	routes,
	navigation
}
