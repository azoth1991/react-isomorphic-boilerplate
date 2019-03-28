// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        component: require('./common/containers/Root'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/containers/App'))
                }, 'home')
            }
        },
        childRoutes: [{
            path: 'explore',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./explore/containers/App'))
                }, 'explore')
            }
        }, {
            path: 'about',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./about/containers/App'))
                }, 'about')
            }
        }, {
          path: 'hah',
          getComponent(nextState, callback) {
            require.ensure([], require => {
              callback(null, require('./about/containers/App'))
            }, 'hah')
          }
        }]
    }, {
        path: 'login',
        getComponent(nextState, callback) {
            require.ensure([], require => {
                callback(null, require('./login/containers/App'))
            }, 'login')
        }
    }]

}

export default routes
