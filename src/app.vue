<template>
    <div class="app-main">
        <h1>{{message}}</h1>
        <Child v-model="val"></Child>
    </div>
</template>
<script>
    import {Child} from './components'
    export default{
        components: {Child},
        data(){
            return {
                message: 'hello karma jasmine unit test',
                title: 'hello app',
                test: {
                    obj: "jdjdjdc"
                },
                val: 'child module'
            }
        }
    }
</script>
<style scoped>
    .app-main h1 {
        color: #0d3349;
    }
</style>