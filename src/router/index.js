import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/views/Login.vue";
import Register from "@/components/views/Register.vue";
import HomeVue from '@/components/views/Home.vue';
import TodoList from '@/components/views/Todo.vue'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/',
        component: HomeVue
    },
    {
        path: '/todo',
        component: TodoList
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router