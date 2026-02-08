import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BackendLayout from '../layouts/index.vue'
import Home from '/@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: BackendLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router