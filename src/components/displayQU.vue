<template>
    <div>
        <div>

            <strong>Qestion  1 / 8</strong> <br>
            <strong>players Answer</strong><br>
            <strong>Time left: 11 sec</strong> <br>
        {{question[c].qQuestion}}
             <br>
            <h4>45443</h4>
            <span v-for="(user,index) in user" :key='index'> 
                <span >{{user.name}}=23

                </span>
            </span>

        </div>
        <div class="row center">
                <div class="col card a green m12 l12 xl12 s12">
                   
        {{question[c].option1}}
                    </div> 
                <div class="col card a red m12 l12 xl12 s12">
        {{question[c].option2}}
                </div>
                <div class="col card a blue m12 l12 xl12 s12">
        {{question[c].option3}}
                </div>
                <div class="col card a orange m12 l12 xl12 s12">
        {{question[c].option4}}
                </div>
               <div v-if="!start" class=""><button class='btn blue' > start</button></div>
               <div v-if="start" class=""><button class='btn blue' @click='startGame'> next</button></div>

        </div>
    </div>
</template>

<script>
import Api from '../../config/Api' 
export default {
    props:['id','title'],
    data(){
        return{
            user:'',
            c:1,
            question:'',
            start:false
        }
    },
    methods:{
        //    on(){
        //           this.start=true
                  
        //    },
           startGame(){
            if (this.c+1 ==this.question.length) {
                console.log('end')
            }else{
                  this.c++
                  this.start=true
            }
             
            

           },
          
    },
    created(){
        Api().get(`/displayplayersForEachKahoot/${this.id}/${this.title}`)
        .then(res=>{
            if (res.data.success) {
                this.user=res.data.user
            }
        }).catch(err=>{
            this.error=err.response.data.msg
        })

         Api().get(`allQuestionId/${this.title}`)
        .then(res=>{
            if (res.data.success) {
                this.question=res.data.question
                console.log(this.question.length)
            }
        }).catch(err=>{
            console.log(err);
            
        })
    }
}
</script>
<style scoped>
.a{
    margin: 0px 0px 8px 0px;
    min-height: 12vh;
}

</style>