import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Menu',
            component: () => import('./views/Menu')
        },
        {
            path: '/nav_menu',
            name: 'NavMenu',
            component: () => import('./views/NavMenu')
        },
        {
            path: '/data_type',
            name: 'DataType',
            component: () => import('./views/DataType')
        },
        {
            path: '/dbc',
            name: 'DBC',
            component: () => import('./views/DBC')
        },
        {
            path: '/port',
            name: 'Port',
            component: () => import('./views/Port')
        },
        {
            path: '/task',
            name: 'Task',
            component: () => import('./views/Task')
        },
        {
            path: '/interfaces_mapping',
            name: 'InterfacesMapping',
            component: () => import('./views/InterfacesMapping')
        },
        {
            path: '/project_manage',
            name: 'ProjectManage',
            component: () => import('./views/ProjectManage')
        },
    ]
})
