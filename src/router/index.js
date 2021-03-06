import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: "/login", name: "Login", component: () => import("@/pages/public/Login.vue")}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
