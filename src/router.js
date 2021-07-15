import Vue from "vue";
import VueRouter from 'vue-router'
import Dashboard from "./components/pages/Dashboard.vue"
import Login from "./components/pages/Login.vue"
import Home from "./components/pages/Home.vue"
import Users from "./components/pages/Users.vue"
import store from './store';

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            requiresAuth: true
        },
        component: Dashboard,
        children: [
            {
                path: "/home",
                name: "Home",
                component: Home
            },
            {
                path: "/users",
                name: "Users",
                component: Users
            },
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/404",
        name: "Error",
        component: Error
    }
    
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !store.state.auth) {
        next({ name: "Login" });
    } 
    else if (to.name === 'Login' && store.state.auth) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
  });
  

export default router;