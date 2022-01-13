import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
//import Home from "../components/register.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "../views/About.vue"),
},
{
    path: "/people/:id",
    name: "People",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "../views/people.vue"),
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
},
{
    path: '/profile',
    name: '/profile',
    component: () =>
        import('../components/profile.vue')
},
{
    path: '/screening',
    name: '/screening',
    component: () =>
        import('../components/screening.vue')
},
{
    path: '/vaccine',
    name: '/vaccine',
    component: () =>
        import('../components/vaccine.vue')
},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router