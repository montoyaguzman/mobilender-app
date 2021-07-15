import Vue from "vue";
import VueRouter from 'vue-router'
import Login from "./components/pages/Login.vue"
import Home from "./components/pages/Home.vue"
import Users from "./components/pages/Users.vue"
    
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/users",
        name: "Users",
        component: Users
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
  
export default router;