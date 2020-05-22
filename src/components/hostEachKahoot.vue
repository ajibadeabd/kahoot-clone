<template>
    <div>

<div  class="row">
    <div class="container blue lighten-1 center">
        {{success}}
    </div>
    <div class="container red lighten-1 center">
        {{error}}
    </div>
    <div class="col  offset-m2 offset-l3 m8 s12 l6">  
    <div class="col center offset-m2 offset-l3 m8 s12 l6"> 
        <h4>{{Title}}</h4>
    </div> 
        
 <form @submit.prevent="saveQuiz">
           
          <h5>
           </h5> 
          <br>
          
          <div class="row">
              
          <div class="form-field  col s12 m12">
            <input type="text"
            placeholder="Question"
            v-model="Question">
            
          </div>

           <div class="form-field col m6">
          1  <input type="text"
            placeholder="Answer1"
            v-model="Answer1">
            
          </div>
          <div class="form-field col m6">
           2 <input type="text"
            placeholder="Answer2"
            v-model="Answer2">
            
          </div>   
          <div class="form-field col m6">
          3  <input type="text"
            placeholder="Answer3"
            v-model="Answer3">
            
          </div>
          <div class="form-field col m6">
           4 <input type="text"
            placeholder="Answer4"
            v-model="Answer4">
            
          </div>
            <div class="form-field   col m4 s4">
                      <input type="text"
          class=" "
          placeholder="correct answer"
          v-model="correctAnswer">
            </div>
        
             <div class="">
              <input class="blue btn" type="submit"
              
              value="create">

          </div>
          </div>
          

          
                     
        </form>

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
    Answer1:'',
    Answer2:'',
    Answer3:'',
    Answer4:'',
    Question:'',
    correctAnswer:'',
    Title:'',
    user:'',
    success:'',
    error:''
        }
    },
    methods:{
        saveQuiz(){
         let Questions = {
           
    Answer1:this.Answer1,
    Answer2:this.Answer2,
    Answer3:this.Answer3,
    Answer4:this.Answer4,
    question:this.Question,
    correctAnswer:this.correctAnswer,
           Title:this.Title


         }
          if(
            this.Answer1 &&
            this.Answer2 &&
            this.Answer3 &&
            this.Answer4 &&
            this.Question &&
            this.correctAnswer &&
            this.Title 
          )
      {
         console.log('all filled')
         Api().post(`/saveKahootQuestion/${this.user}`,Questions)
      .then(res=>{
            if(res.data.success) {
              this.success=res.data.msg
              this.error=''
              this.Answer1 =''
            this.Answer2 =''
            this.Answer3 =''
            this.Answer4 =''
            this.Question =''
            this.correctAnswer='' 
            }
      }).catch(err=>{
        // console.log(err.response.data.msg)
              this.success=''
              this.error=err.response.data.msg

      })
      }
       else{
              this.error='please fill in all necessary input'

      } 
    },
    },
    created(){
         Api().get(`/getEachTitle/${this.id}`)
         .then(res=>{
             if(res.data.success) {
                 this.Title=res.data.Title.KahootTitle
                 this.user=res.data.Title.user
                 
             }
         })
         
    }
}
</script>

<style scoped>

</style>