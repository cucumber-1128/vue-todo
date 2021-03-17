import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/home'
import todo from './components/todo'
import TodoDetail from './components/TodoDetail'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: home,
    },
    {
        path: '/todo',
        component: todo,
    },
    {
        path: '/todo/:id',
        component: TodoDetail,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

export default router