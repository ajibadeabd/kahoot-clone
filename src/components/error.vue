<template>
    <div>

{{error}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        error(){
        return this.$store.getters.error
        }
    }
}
</script>
<style scoped>

</style>