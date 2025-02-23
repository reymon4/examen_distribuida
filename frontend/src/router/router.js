import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path:'/',
        component: () => import("@/pages/BienvenidaPage.vue"),
    },
    {
        path: "/books",
        component: () => import("@/pages/BooksPage.vue"),
    },
    {
        path: "/books/registrar",
        component: () => import("@/pages/BooksRegistrarPage.vue"),
    },
    {
        path: "/books/editar",
        name: "BookActualizarPage",
        component: () => import("@/pages/BookActualizarPage.vue"),
    },
    {
        path: "/books/consultar",
        component: () => import("@/pages/BookPage.vue"),
    },
    {
        path: "/books/eliminar",
        component: () => import("@/pages/BooksDeletePage.vue"),
    },
    {
        path:'/:pathMatch(.*)*',
        component: () => import("@/pages/NotFoundPage.vue"),
    }

    ];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;