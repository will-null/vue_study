<template>
    <div id="asideList">
        <ul>
            <li>
                <!-- <router-link> 类似于<a/> 控制路由跳转-->
                <router-link to="/basestudy">基础学习</router-link>
            </li>
            <li>
                <!-- <router-link> 类似于<a/> 控制路由跳转-->
                <router-link to="/mainone">添加信息</router-link>
            </li>
            <li>
                <!-- <router-link> 类似于<a/> 控制路由跳转-->
                <router-link to="/">展示信息</router-link>
            </li>
            <li>
                <!-- <router-link> 类似于<a/> 控制路由跳转-->
                <router-link to="/xstudy">状态管理学习</router-link>
            </li>
        </ul>
    </div>
    <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        &lt;!&ndash;<el-menu :default-openeds="['1', '3']">&ndash;&gt;
            <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">
                        &lt;!&ndash; <router-link> 类似于<a/> 控制路由跳转&ndash;&gt;
                        <router-link to="/mainone">添加信息</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-4-2">
                        &lt;!&ndash; <router-link> 类似于<a/> 控制路由跳转&ndash;&gt;
                        <router-link to="/">展示信息</router-link>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </el-aside>-->

</template>

<script>
    export default {
        name: "asideList"
    }
</script>

<style scoped>
#asideList{
    height: 750px;
    width: 350px;
    display: inline-block;
    background: antiquewhite;
}
    ul{
        margin: 20px;
        text-align: center;
        list-style: none;
        text-decoration:underline;
        padding:0px;
    }
li{
    list-style:none;
    margin: 50px;
}

</style>