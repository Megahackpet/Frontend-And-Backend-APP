import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;