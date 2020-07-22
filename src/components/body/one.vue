<template>
    <div id="oone">
        <h2>第一模块</h2>
        <ul>
            <li v-for="uu in harf" :key="uu.money">
                <span>{{uu.name}}</span>
                <span>{{uu.money}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
       computed:{
           ...mapGetters([
               "harf"
           ])
       },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>