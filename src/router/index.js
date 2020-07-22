/*导入需要的组件*/
import Vue from 'vue'
import VueRouter from "vue-router";

import singIn from "@/components/singIn";
import mainOne from "@/components/body/MainOne";
import mainTwo from "@/components/body/MainTwo";
import singleMsg from "@/components/body/SingleMsg";
import Xstudy from "@/components/body/Xstudy";
import basestudy from "@/components/body/basestudy";

//所用到的组件都要注册,否则无法使用
Vue.use(VueRouter);

//配置路由
export default new VueRouter({
    routes: [
        {
            //路由路径
            path: '/login',
            component: singIn
        },
        {
            //路由路径
            path: '/',
            component: mainTwo
        },
        {
            //路由路径
            path: '/mainone',
            component: mainOne
        },
        {
            //路由路径
            path: '/siglrmsg/:id',
            component: singleMsg
        },
        {
            //路由路径
            path: '/xstudy',
            component: Xstudy
        },
        {
            //路由路径
            path: '/basestudy',
            component: basestudy
        }
    ],
    /* 消除URL中的#号 */
    mode: 'history'
});