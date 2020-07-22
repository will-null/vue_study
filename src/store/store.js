import Vue from "vue";
import vuex from "vuex"

Vue.use(vuex);

export const sstore = new vuex.Store({
    state: {
        useru: [
            {name: "马原", money: "500"},
            {name: "马li", money: "300"},
            {name: "冬梅", money: "1000"},
            {name: "小狗", money: "250"}
        ]
    },
    getters: {
        harf: (state) => {
            var mharf = state.useru.map(uu => {
                return {
                    name:'&&'+uu.name+'--',
                    money:uu.money
                }
            });
            return mharf;
        }
    }
});