// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../pages/Inicio.vue'
import Producto from '../pages/Productos.vue'
import ProductoDetalle from '../pages/DetalleProducto.vue'
import Clientes from '../pages/Clientes.vue'
import { useAuth } from '../stores/autenticacion.js'

const routes = [
    { path: '/', name: 'Inicio', component: Inicio, meta: { requiresAuth: true } },
    { path: '/productos', name: 'Productos', component: Producto, meta: { requiresAuth: true } },
    { path: '/productos/:id', name: 'ProductoDetalle', component: ProductoDetalle, props: true, meta: { requiresAuth: true } },
    { path: '/clientes', name: 'Clientes', component: Clientes, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: () => import("../pages/Login.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 } // restaura scroll al navegar
    }
})

router.beforeEach((to, from, next) => {
    const auth = useAuth();
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        next("/login");
    } else if (to.path === "/login" && auth.isAuthenticated) {
        next("/");
    } else {
        next();
    }
});

export default router
