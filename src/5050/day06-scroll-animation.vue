<template>
    <div class="bg">
        <h1>Scroll to see the animation</h1>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
        <div class="box"><h2>Content</h2></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
onMounted(() => {
    window.addEventListener("scroll", checkBoxes);

    checkBoxes();
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.bg {
    background-color: #efedd6;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow-x: hidden;
}

h1 {
    margin: 10px;
}

.box {
    background-color: steelblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
    transform: translateX(-400%);
}

.box.show {
    transform: translateX(0);
}

.box h2 {
    font-size: 45px;
}
</style>
