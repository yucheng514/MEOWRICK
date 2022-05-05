<script>
export default {
    data(){
        return {
            cpns:[
                {name:'day01-expanding-cards', to: '/day01-expanding-cards'},
                {name:'day02-progress-steps', to: 'day02-progress-steps'}
            ]
        }
    }
}
</script>

<template>

    <router-link v-for="item in cpns" :to="item.to">{{item.name}}</router-link>
    <router-view></router-view>
</template>

<style>

</style>
