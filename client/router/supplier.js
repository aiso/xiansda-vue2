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

    {
      path: '/supplier/item/:id(\\d+)',
      name: 'supplier/item',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/item'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-local_offer',
        title:'产品',
        requiresAuth: true,
      }      
    },
    {
      path: '/supplier/item/new',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/item-edit'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-edit',
        title:'新建产品',
        requiresAuth: true,
      }      
    },
    {
      path: '/supplier/item/:id(\\d+)/edit',
      name: 'supplier/item/edit',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/supplier/item-edit'))
        }, 'group-supplier')
      },
      meta: { 
        icon:'material-edit',
        title:'编辑产品',
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
