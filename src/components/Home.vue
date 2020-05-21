<template class='a'>
  <div class="">
    <div class=" center row">
      <h2>Join a Game</h2>
      <div class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">

        <form @submit.prevent="enter">
              <h5>
          Display Name
         
           
           </h5> 
          <br>
          <div class="form-field">
            <input type="text"
            placeholder="Enter your name"
            v-model="name">
          </div>
          <br>
          <h5>
          Game pin
         
           
           </h5> 
          <br>
          <div class="form-field">
            <input type="text"
            placeholder="Enter your name"
            v-model="pin">
            
          </div>
              <br>
           <div class="form-field">
            <input type="submit"
            value="Join"
            class=" btn blue"
           >
                
              </div>
    
                      <p>click to host a 
<router-link to='/create'> kahoot</router-link>

                      </p>
        </form>
         
      </div>
    </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
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
