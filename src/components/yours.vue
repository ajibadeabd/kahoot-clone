<template>
    <div>
        <div v-if="ques"  class="">
            <strong>NAME:{{name}}</strong>  <br><br>
            <strong>Score:48</strong>


            <div class="row">
                <div @click='chooseAnswer("A")' class="col card a green m6 l6 xl6 s6"></div>
                <div @click='chooseAnswer("B")' class="col card a red  m6 l6 xl6 s6"></div>
                <div @click='chooseAnswer("C")' class="col a card blue m6 l6 xl6 s6"></div>
                <div @click='chooseAnswer("D")' class="col a card orange m6 l6 xl6 s6"></div>
            </div>

        </div>

        <div v-if="!start" >
<h4 >
            waiting for the host to start
    </h4>        </div>
     

<h4 v-if="cont">
            waiting for other players to submit
    </h4>       
    </div>
    
</template>
<script>
import displayQuestion from '../components/displayQuestion'
import Api from '../../config/Api'
export default {
props:['id'],
data(){
        return{
           start:true,
           question:'',
           c:0,
           ques:true,
           cont:false,
           name:'',
           title:''
        }
    },
    components:{
        displayQuestion
    },
    methods:{
        chooseAnswer(choosen){
            console.log(choosen)
            this.cont=true
            this.ques=false
            console.log(this.cont)

        }
    },
    computed:{
    },
    created(){
        Api().get(`displayJoinedUserPage/${this.id}`).then(res=>{
            this.name=res.data.user.name
            this.title=res.data.user.Title

        }).catch(err=>{
            // console.log(err.data.response.msg)
        })
    }
   
}
</script>
<style scoped>

.a{
    margin: 0px 0px 0px 0px;
    min-height: 46vh;
}
</style>