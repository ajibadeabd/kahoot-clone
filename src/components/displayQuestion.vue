<template>
    <div>

{{displayQuestion}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        displayQuestion(){
        return this.$store.getters.displayQuestion
        }
    }
}
</script>
<style scoped>

</style>