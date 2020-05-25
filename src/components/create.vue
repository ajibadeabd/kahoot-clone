<template class='a'>
  <div class="">
    <div class=" center row">
      <h2>Start a Kahoot Game</h2>
      <div class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">

        
              <h5>
          Choose a game below or <router-link to="/host">
              Create your Own
          </router-link>
         <div v-for='(kahoot,index) in kahoot' :key="index" class="card">

           <router-link to='/'>
           {{kahoot.KahootTitle}} <br><br>
           {{kahoot.code}} <br>

           </router-link>
            
         </div>
           
           </h5> 
           
          
         
   
    
        
         
      </div>
    </div>
   </div>
</template>

<script>
import Api from '../../config/Api'
export default {
data () {
    return {
      kahoot:''
    }
  },
  created(){
    Api().get(`/displayAllKahoot`)
    .then(res=>{
      if (res.data.success) {
        this.kahoot=res.data.kahoot
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 
  100%;
}
.card{
  min-height:10vh ;
}

</style>
