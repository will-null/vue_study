<template>
    <!--vue严格区分大小写,能不用大写就不用-->
    <div id="jichu">
        {{msg}}
        <hr/>
        <!-- v- 就是指令-->
        <span v-bind:title="msg">
        鼠标悬停在此,显示信息
    </span>
        <!------------------------------------------------>
        <p v-if="ok">yes</p>
        <p v-else>no</p>
        <!----------------------------------------------->
        <li v-for="aname in items" :key="aname.name">
            {{aname.name}}
            <p v-if="aname.name==='alden'">不想显示</p>
        </li>
        <!------------------------------------------------>
        <p>双向绑定:<textarea v-model="times"></textarea><span>{{times}}</span></p>
        <select v-model="times">
            <option disabled value="">请选择</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
        <p>选择的是:{{times}}</p>
        <!------------------------------------------------->
        <button v-on:click="jiShu">点击我</button>
        <span>点击了:{{times}}次</span>
        <!------------------------------------------------->
        <wode v-for="ss in items" v-bind:lianie="ss" :key="ss.name"></wode>
    </div>

</template>

<script>
    /*组件是可复用的 Vue 实例,自定义的组件名不能大写*/
    /*因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以
    及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。*/
    export default {
        props: ['lianie'], /*属性传值(父传子)(子传父)*/
        name: "basestudy",
        /*有7大属性(el/data/methods/template/render/computed/watch),其余的不太重要(生命周期钩子等)*/
        el: "#one",
        data() {
            return {
                msg: "hello,vue",
                ok: false,
                ttype: 'a',
                items: [
                    {name: "ade"},
                    {name: "alden"},
                    {name: "hugh"}
                ],
                times: ""
            }
        },
        methods:{
            jiShu: function () {
                this.times++;
            }
        }
    }
</script>

<style scoped>
#jichu{
    width: 800px;
    box-sizing: border-box;
    display: inline-block;
    margin: 20px 20px 20px 350px;
    padding: 20px;
    background: chartreuse;
    position: absolute;
}
</style>