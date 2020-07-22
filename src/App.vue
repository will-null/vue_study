<!-- 模板 (HTML结构)-->
<template>
    <!-- 只能有一个根标签,   大框架,一整个网页,包含头部,左侧导航栏,右侧内容区-->
    <div id="app">
        <!--头部-->
        <headtop></headtop>
        <!--左侧边栏-->
        <asideList></asideList>

        <!--右内容区-->
        <!-- <router-view> 会展示 <router-link>的页面 -->
        <router-view></router-view>

    </div>
</template>
<!-- 行为 (处理逻辑)-->
<script>
    /*局部注册组件*/
    import headtop from "@/components/head";
    import asideList from "@/components/body/AsideList";

    export default {
        name: 'App',
        components: {
            headtop,
            asideList
        }
    }
</script>
<!-- 样式 -->
<style>
    a {
        text-decoration: none;
    }

</style>