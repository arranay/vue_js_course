import { createRouter, createWebHistory } from 'vue-router';
import FlowerHome from "@/views/FlowerHome.vue";
import FlowerAuth from "@/views/auth/FlowerAuth.vue";
import FlowerRegistration from "@/views/auth/FlowerRegistration.vue";
import FlowerCard from "@/views/FlowerCard.vue";
import FlowerOrder from "@/views/FlowerOrder.vue";
import store from "@/store/index.js";
import FlowerOrderDetails from "@/views/FlowerOrderDetails.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: FlowerHome
    },
    {
        path: '/cart',
        name: 'Cart',
        component: FlowerCard,
    },
    {
        path: '/order',
        name: 'Order',
        component: FlowerOrder,
        meta: { isLogged: true }
    },
    {
        path: '/order/:id',
        name: 'OrderDetails',
        component: FlowerOrderDetails,
        meta: { isLogged: true }
    },
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

router.beforeEach(async (to, from, next) => {
    const userInfo = await store.getters.user;
    if (['OrderDetails', 'Order'].includes(to.name) && !userInfo) next({name: 'Login'})
    else next()
})

export default router;
