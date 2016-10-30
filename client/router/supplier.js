const routes = [
    {
      path: '/supplier/businesses',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/businesses'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-work',
        title:'我的事务',
        requiresAuth: true
      }
    },
    {
      path: '/supplier/items',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/items'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-local_offer',
        title:'我的服务',
        requiresAuth: true,
      }      
    },
    {
      path: '/supplier/user',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/user'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-person',
        title:'用户',
        requiresAuth: true,
      }
    },
]

const navigation = {
  routes: [
    '/supplier/businesses',
    '/supplier/items',
    '/supplier/user'
  ],
  home : '/supplier/businesses'
}

module.exports = {
	routes,
	navigation
}
