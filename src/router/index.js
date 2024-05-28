import { createRouter, createWebHistory } from 'vue-router';
import FlowerHome from "@/views/FlowerHome.vue";
import FlowerAuth from "@/views/auth/FlowerAuth.vue";
import FlowerRegistration from "@/views/auth/FlowerRegistration.vue";
import FlowerCard from "@/views/FlowerCard.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FlowerHome
    },
    // {
    //     path: '/product/:id',
    //     name: 'Flower',
    //     component: Flower
    // },
    {
        path: '/cart',
        name: 'Cart',
        component: FlowerCard,
    },
    // {
    //     path: '/order',
    //     name: 'Order',
    //     component: Order,
    //     meta: { requiresAuth: true }
    // },
    {
        path: '/register',
        name: 'Register',
        component: FlowerRegistration
    },
    {
        path: '/login',
        name: 'Login',
        component: FlowerAuth
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
