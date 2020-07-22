<template>
    <div id="show-msg">
        <h1>信息展示</h1>
        <input type="text" placeholder="搜索" v-model="sear"/>
        <div v-for="sm in fillterMsg" :key="sm.id" class="single-msg">
            <router-link :to="'/siglrmsg/'+sm.id">
                <h2 v-caihong>{{sm.title}}</h2>
                <article>{{sm.body}}</article>
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "maintwo",
        data() {
            return {
                allMsg: [],
                sear: ''
            }
        },
        created() {
            this.$axios.get('http://jsonplaceholder.typicode.com/posts')
            /* 此处容易出现 Cannot set property 'xxxx' of undefined 报错*/
            /*原因 .then(function(data){ 在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定。*/
            /*使用箭头函数解决*/
                .then((data) => {
                    // console.log(data.data);
                    this.allMsg = data.data;
                });
        },
        computed: {
            fillterMsg: function () {
                return this.allMsg.filter((sm) => {
                    return sm.title.match(this.sear)
                })
            }
        },
        filters: {
            /*局部自定义的过滤器*/
        },
        directives: {
            //局部自定义的指令
            'caihong': {
                //钩子函数
                bind(el, binding, vnode) {
                    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
                }
            }
        }
    }
</script>

<style scoped>
    #show-msg {
        height: auto;
        width: 800px;
        margin: 20px 20px 20px 350px;
        display: inline-block;
        background: chartreuse;
        position: absolute;
    }

    .single-msg {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: azure;
    }

    h1 {
        text-align: center;
    }

    input[type="text"] {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
    }
</style>