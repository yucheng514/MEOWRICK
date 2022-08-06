<script>
export default {
    data() {
        return {
            cpns: [
                { name: "day01-expanding-cards", to: "/day01-expanding-cards" },
                { name: "day02-progress-steps", to: "day02-progress-steps" },
                {
                    name: "day03-rotating-nav-animation",
                    to: "day03-rotating-nav-animation",
                },
                { name: "day04-hidden-search", to: "day04-hidden-search" },
            ],
        };
    },
};
</script>

<template>
    <div class="fixed z-[999]">
        <!-- 这个路由应该怎么设置呢？ -->
        <router-link v-for="item in cpns" :to="item.to">{{
            item.name
        }}</router-link>
    </div>

    <router-view></router-view>
</template>

<style>
body {
    margin: 0;
}
</style>
