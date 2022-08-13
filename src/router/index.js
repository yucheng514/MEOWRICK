import { createWebHistory, createRouter } from "vue-router";
// import expandingCards from "../components/day01-expanding-cards.vue";
// import progressSteps from "../components/day02-progress-steps.vue";
import { vueRouters } from "./5050";
import index from "@/components/index.vue";

const routes = [
    {
        path: "/",
        // redirect: "/day01-expanding-cards",
        name: "index",
        component: index,
    },
    ...vueRouters(),
];
// console.log(routes);

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
