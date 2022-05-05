import { createWebHashHistory, createRouter } from "vue-router";
import expandingCards from '../components/day01-expanding-cards.vue'
import progressSteps from '../components/day02-progress-steps.vue'

const routes = [
    {
        path: '/',
        redirect: '/day01-expanding-cards'
    },
    {
        path: '/day01-expanding-cards',
        name:'day01-expanding-cards',
        component: expandingCards
    },
    {
        path: '/day02-progress-steps',
        name:'day02-progress-steps',
        component: progressSteps
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;