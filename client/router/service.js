
const routes = [
    {
      path: '/s101/trans/:id(\\d+)',
      name: '/s101/trans',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../views/service/s101-trans'))
        }, 'group-service')
      },
      meta: { 
        icon:'material-work',
        title:'服务单',
        requiresAuth: true
      }
    },
]

module.exports = {
	routes
}
