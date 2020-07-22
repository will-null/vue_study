<template>
    <div id="SingleMsg">
        <h1>{{massges.title}}</h1>
        <article>{{massges.body}}</article>
    </div>
</template>

<script>
    export default {
        name: "SingleMsg",
        data() {
            return {
                id: this.$route.params.id,
                massges: {}
            }
        },
        created() {
            this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
                .then((data) => {
                    this.massges = data.data;
                });
        }
    }
</script>

<style scoped>
    #SingleMsg {
        height: auto;
        width: 800px;
        margin: 20px 20px 20px 350px;
        display: inline-block;
        background: chartreuse;
        position: absolute;
        padding: 20px;
        box-sizing: border-box;
        background: azure;
    }


    h1 {
        text-align: center;
    }


</style>