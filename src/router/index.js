import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/views/Login.vue";
import Register from "@/components/views/Register.vue";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router