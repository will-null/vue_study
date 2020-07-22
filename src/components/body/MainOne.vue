<template>
    <div id="add-message">
        <h2>添加个人信息</h2>
        <form>
            <label>姓名:</label>
            <input type="text" v-model="yname" required/>
            <label>性别:</label>
            <select v-model="ysex">
                <option v-for="ss in sexs" :key="ss.ysex">
                    {{ss}}
                </option>
            </select>
            <label>职业:</label>
            <textarea v-model="dowhat"/>
            <label>爱好:</label>
            <div id="chexboxes">
                <label>eat</label>
                <input type="checkbox" value="eat" v-model="ylike"/>
                <label>slep</label>
                <input type="checkbox" value="sleep" v-model="ylike"/>
                <label>play</label>
                <input type="checkbox" value="play" v-model="ylike"/>
                <label>read</label>
                <input type="checkbox" value="read" v-model="ylike"/>
            </div>
            <!--提交-->
            <button @click.prevent="send">提交信息</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "mainone",
        data() {

            return {
                yname: '',
                ysex: '',
                dowhat: '',
                ylike: [],
                sexs: ['男', '女']
            }
        },
        methods: {
            send: function () {
                /*axios.post('./../static/posts.json', {
                    userId: this.msg,
                    id: this.ttype,
                    title: this.msg,
                    body: this.msg
                })
                    .then(function (response) {
                        console.log(response);
                    });*/
            }
            /*// 发送 POST 请求 (测试数据的一个网址,data字段不要变)
                axios.post('http://jsonplaceholder.typicode.com/posts', {
                    userId: this.msg,
                    id: this.ttype,
                    title: this.msg,
                    body: this.msg
                })
                    .then(function (response) {
                        console.log(response);
                    });
                // 另一种方式
                axios({
                    method: 'post',
                    url: 'http://jsonplaceholder.typicode.com/posts',
                    data: {
                        userId: this.msg,
                        id: this.ttype,
                        title: this.msg,
                        body: this.msg
                    }
                });*/
        }
    }
</script>

<style scoped>
    #add-message {
        width: 800px;
        box-sizing: border-box;
        display: inline-block;
        margin: 20px 20px 20px 350px;
        padding: 20px;
        background: chartreuse;
        position: absolute;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    textarea {
        height: 200px;
    }

    input[type='text'], textarea, select {
        display: block;
        width: 100%;
        padding: 8px;
    }

    #chexboxes label, input {
        display: inline-block;
    }

    button {
        display: block;
        margin: 20px 0;
        padding: 15px;
        font-size: 18px;
    }
</style>