<template>
    <div>

{{success}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        success(){
        return this.$store.getters.success
        }
    }
}
</script>
<style scoped>

</style>

