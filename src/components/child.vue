<template>
    <div>
        {{value}}
    </div>
</template>
<script>
    export default{
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                initValue: this.value
            }
        }
    }
</script>
<style scoped></style>