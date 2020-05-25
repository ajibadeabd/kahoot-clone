<template>
    <div>


        <div class="row center">
            <div class="col offset-s1 offset-m2 offset-l2 offset-xl2  s10 l8 m8 xl8">
                <div class="card-title">
                        <h4>
                        {{question[0].qTitle}}
                        </h4>
                </div>
                <div class="card z-depth-4" v-for="(question,index) in question" :key="index">
                   QUESTION{{index+1}}:     {{question.qQuestion}} <br>
                        OPTION 1: {{question.option1}} <br>
                        OPTION 2:{{question.option2}} <br>
                        OPTION 3:{{question.option3}} <br>
                        OPTION 4:{{question.option4}} <br>
                        CORRECT ANSWER:{{question.cAnswer}} <br>
                </div>
<!-- {{question}} -->

            </div>
        </div>






    </div>
</template>

<script>
import Api from '../../config/Api'
export default {
    props:['id'],
    data(){
        return{
            question:''
        }
    },
    methods:{

    },
    created(){
        Api().get(`allQuestionId/${this.id}`)
        .then(res=>{
            if (res.data.success) {
                this.question=res.data.question
                console.log(this.question)
            }
        }).catch(err=>{
            console.log(err);
            
        })
    }

}
</script>

<style scoped>

</style>