<template>
    <div class="bg-container">
        <section class="bg"></section>
        <div class="loading-text">0%</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
    const loadText = document.querySelector(".loading-text");
    const bg = document.querySelector(".bg");

    let load = 0;

    let int = setInterval(blurring, 30);

    function blurring() {
        load++;

        if (load > 99) {
            clearInterval(int);
        }

        (loadText as HTMLElement).innerText = `${load}%`;
        (loadText as HTMLElement).style.opacity = scale(load, 0, 100, 1, 0);
        (bg as HTMLElement).style.filter = `blur(${scale(
            load,
            0,
            100,
            30,
            0
        )}px)`;
    }

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (
            ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    };
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

.bg-container {
    font-family: "Ubuntu", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

.bg {
    background: url("https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80")
        no-repeat center center/cover;
    position: absolute;
    top: -30px;
    left: -30px;
    width: calc(100vw + 60px);
    height: calc(100vh + 60px);
    z-index: -1;
    filter: blur(0px);
}

.loading-text {
    font-size: 50px;
    color: #fff;
}
</style>
