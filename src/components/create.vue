<template class='a'>
  <div class="">
    <div class=" center row">
      <h2>Start a Kahoot Game</h2>
      <div class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">

        
              <h5>
          Choose a game below or <router-link to="/host">
              Create your Own
          </router-link>
         
           
           </h5> 
            <h2 class="btn white black-text">
               Math quiz
           </h2>
            <h2 class="btn white black-text">
               Random Trivia           </h2>
          <br>
          
         
   
    
        
         
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 
  100%;
}

</style>
