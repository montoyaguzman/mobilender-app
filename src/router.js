import Vue from "vue";
import VueRouter from 'vue-router'
import Login from "./components/pages/Login.vue"
import Home from "./components/pages/Home.vue"
import Tabla1 from "./components/pages/Tabla1.vue"
import Tabla2 from "./components/pages/Tabla2.vue"
    
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
        path: "/tabla1",
        name: "Tabla1",
        component: Tabla1
    },
    {
        path: "/tabla2",
        name: "Tabla2",
        component: Tabla2
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