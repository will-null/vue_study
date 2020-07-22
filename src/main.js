import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {sstore} from "@/store/store";

/* 无法使用use这种方法来注册axios,这会报找不到axios的错*/
/*Vue.use(axios);*/
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/*在这里写的所有的东西都是全局的,不建议写在这里*/

new Vue({
    render: h => h(App), router,store:sstore
}).$mount('#app')

/* 运行顺序 index.html --> main.js --> app.vue */
