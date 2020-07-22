<template>
    <header id="tou">
        <!--<router-link> 类似于<a/> 控制路由跳转-->
        <router-link to="/login">登录</router-link>
    </header>
</template>

<script>
    export default {
        name: "headtop"
    }
</script>

<style scoped>
    #tou {
        background: aqua;
        height: 50px;
        position: relative;
    }

    a {
        font-size: 30px;
        float: right;
    }
</style>