import { createRouter, createWebHistory } from "vue-router"
import ImagePage from "../pages/ImagePage"

const routes = [
    {
        path: '/',
        component: ImagePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;