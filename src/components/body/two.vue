<template>
    <div id="ttwo">
        <h2>第二模块</h2>
        <ul>
            <li v-for="uu in lianl" :key="uu.money">
                <span>{{uu.name}}</span>
                <span>{{uu.money}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            lianl(){
                return this.$store.state.useru;
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>