import Vue from "vue";
import VueRouter from 'vue-router'
import Dashboard from "./components/pages/Dashboard.vue"
import Login from "./components/pages/Login.vue"
import Home from "./components/pages/Home.vue"
import Users from "./components/pages/Users.vue"
import Planets from "./components/pages/Planets.vue"
import NotFound from "./components/pages/NotFound.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            requiresAuth: true
        },
        component: Dashboard,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home
            },
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
            {
            path: "/planets",
            name: "Planets",
            component: Planets
        },
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    { 
        path: '/404', 
        component: NotFound 
    },  
    { 
        path: '*', 
        redirect: '/404' 
    },  
    
    
];

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    console.log('islogged', localStorage.getItem('isLogged'))
    if (to.name !== 'Login' && localStorage.getItem('isLogged') === 'false') {
        next( { name: 'Login'} );
    } 
    else if (to.name === 'Login' && localStorage.getItem('isLogged') === 'true') {
        next( { name: 'Dashboard' });
    } else {
        next();
    }
  });
  

export default router;