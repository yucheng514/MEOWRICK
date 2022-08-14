<template>
    <div flex justify-evenly items-center flex-wrap h-full>
        <!-- 这个路由应该怎么设置呢？ -->
        <router-link v-for="item in cpns" :to="item.to">{{
            item.name
        }}</router-link>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
interface cpnsProp {
    name: string;
    to: string;
}
const cpns = ref<cpnsProp[]>([{ name: "index", to: "/" }]); // todo 首页

onMounted(() => {
    const modules = import.meta.glob("@/components/5050/*.vue");
    const components = import.meta.glob("@/components/5050/*.vue", { eager: true });
    Object.keys(modules).forEach((key) => {
        const viewSrc = components[key];
        // @ts-ignore
        const file = viewSrc.default;
        cpns.value.push({
            name: `${file.name || file.__name}`,
            to: `${file.name || file.__name}`,
        });
    });
});
</script>
<style scoped></style>
