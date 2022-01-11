import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import register from '../components/register.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import( /* webpackChunkName: "about" */ '../views/About.vue')
},
{
    path: '/register',
    name: 'register',
    component: () =>
        import('../components/register.vue')
},
{
    path: '/login',
    name: '/login',
    component: () =>
        import('../components/login.vue')
}

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router