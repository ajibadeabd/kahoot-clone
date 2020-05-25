<template class='a'>
  <div class="">
    <div class=" center row">
        <div class="container red lighten-1 center">
        {{error}}
    </div>
      <div class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">
      <h2>Join a Game</h2>


        <form @submit.prevent="join">
              <h5>
          Display Name
         
           
           </h5> 
          <br>
          <div class="form-field">
            <input type="text"
            required=required
            placeholder="Enter your name"
            v-model="name">
          </div>
          <br>
          <h5>
          Game pin
         
           
           </h5> 
          <br>
          <div class="form-field">
            <input type="number"
            required=required
            placeholder="Enter your name"
            v-model="code">
            
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
import Api from '../../config/Api'
export default {
  data () {
    return {
      name:'',
      code:'',
      error:''
    }
  },
  methods:{
    join(){
      let joinDetails ={
        name:this.name,
        code:this.code
      }
      Api().post('/joinKahoot',joinDetails)
      .then(res=>{
        if(res.data.success) {
          this.error=''
            this.$router.push({
              name:'yours' , 
              params:{ id:res.data.user._id

              }  
                          })
        } 
      })
      .catch(err=>{
        console.log(err)
        this.error=err.response.data.msg
      })
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
