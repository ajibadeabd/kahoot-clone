<template>
    <div>
        <idv class="">
            <strong>NAME:{ME}</strong>  <br><br>
            <strong>Score:48</strong>


            <div class="row">
                <div class="col card a green m6 l6 xl6 s6"></div>
                <div class="col card a red  m6 l6 xl6 s6"></div>
                <div class="col a card blue m6 l6 xl6 s6"></div>
                <div class="col a card orange m6 l6 xl6 s6"></div>
            </div>

        </idv>
    </div>
</template>

<script>
export default {
    data(){
        return{
            answer1:'',
            answer2:'',
            answer3:'',
            answer4:'',
            correctAnswer:''
        }
    }
}
</script>
<style scoped>

.a{
    margin: 0px 0px 0px 0px;
    min-height: 46vh;
}
</style>