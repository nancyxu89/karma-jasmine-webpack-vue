<template>
    <div class="app-main">
        <h1>{{message}}</h1>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                message: 'hello karma jasmine unit test',
                title: 'hello app',
                test: {
                    obj: "jdjdjdc"
                }
            }
        }
    }
</script>
<style scoped>
    .app-main h1 {
        color: #0d3349;
    }
</style>