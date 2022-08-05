import { createWebHistory, createRouter } from "vue-router";
// import expandingCards from "../components/day01-expanding-cards.vue";
// import progressSteps from "../components/day02-progress-steps.vue";
import { vueRouters } from "./5050";
const routes = [
    {
        path: "/",
        redirect: "/day01-expanding-cards",
    },
    ...vueRouters(),
];

// const routes = [
//   {
//     path: "/",
//     redirect: "/day01-expanding-cards",
//   },
//   {
//     path: "/day01-expanding-cards",
//     name: "day01-expanding-cards",
//     component: expandingCards,
//   },
//   {
//     path: "/day02-progress-steps",
//     name: "day02-progress-steps",
//     component: progressSteps,
//   },
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
