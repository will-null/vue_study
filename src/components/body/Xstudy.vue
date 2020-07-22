<template>
    <div id="zhaungtai">
        <useru-one></useru-one>
        <useru-two></useru-two>
    </div>


</template>

<script>
    import one from "@/components/body/one";
    import ttwo from "@/components/body/two";

    export default {
        name: "Xstudy",
        data() {
            return {

            }
        },
        components: {
            "useru-one": one,
            "useru-two": ttwo
        }
    }
</script>

<style scoped>
    #zhaungtai {
        width: 800px;
        box-sizing: border-box;
        display: inline-block;
        margin: 20px 20px 20px 350px;
        padding: 20px;
        background: chartreuse;
        position: absolute;
    }
</style>