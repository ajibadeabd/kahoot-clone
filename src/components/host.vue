<template class='a'>
  <div class="row center">
    <div class="container red lighten-1 center">
        {{error}}
    </div>
    <div class="container blue lighten-1 center">
        {{success}}
    </div>
 <div class="row center">

      <div class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">

           <h2>
                kahoot Quiz Studio
          </h2>
          <h4 >Enter your Quiz title </h4>
          <div class="form-field  col s12 m12">
            <input type="text"
            placeholder="Title"
            v-model="Title">
            <div>
            <button v-if="!edit" @click="saveTitle(Title)" class="btn blue ">
                save Title
            </button>
             <button v-if="edit" @click="editEachKahoot(Title)" class="btn blue ">
                update
            </button>
          </div>
          </div>
          
          
      </div>
 </div>

      <div v-for='(kahoot,index) in kahoots' :key="index" class="col offset-s1 offset-m2 offset-l3 m8 s10 l6">
        <div class="card">
                <span class="left " >
                  <router-link :to="{ name: 'host-id', params: { id: kahoot._id }}">
                    Add question
                    </router-link>
                    </span>

                <router-link  :to="{ name: 'host-Question', params: { id: kahoot.KahootTitle }}"> 
                {{kahoot.KahootTitle }} 
                </router-link>
                
                <span class="right material-icons" @click="deleteEachKahoot(kahoot.KahootTitle,kahoot._id)"> 
                    delete
                    </span>
                    <span class="right material-icons" @click="switchKahoot(kahoot.KahootTitle,kahoot._id)"> 
                    edit
                    </span>
                       


        </div>

      </div>


<router-link to='/'>
                Back
            </router-link>





   </div>
</template>

<script>
import Api from '../../config/Api'
export default {
  name: 'HelloWorld',
  data () {
    return {
    Title:'',
    edit:false,
    
    kahoots:'',
    error:'',
    success:'',
    id:''
    }
  },
  methods:{
    switchKahoot(title,id){
    this.edit=true
    this.id=id
    this.Title=title


    },
    deleteEachKahoot(title,id) {
        let userTitle={
          Title:title
        }
console.log(title)

      Api().post(`/deleteEachKahoot/${id}`,userTitle).then(res=>{
        if(res.data.success) {
        this.success=res.data.msg
        }
        
      })
      .catch(err=>{
        console.log(err)
      })
    },
    editEachKahoot() {
      let editDetails={
          Title:this.Title,
          
        }

      Api().post(`/editEachKahoot/${this.id}`,editDetails).then(res=>{
        let editDetails={
          Title:this.Title,
        }
        if(res.data.success) {
        this.success=res.data.msg
        this.Title='',
        this.error=''
        }
        
      })
      .catch(err=>{
        console.log(err)
      })
    },
    saveTitle(id){
      // console.log(id)
      let Title={
        Title:this.Title
      }
      if(!id) {
        this.error='please enter a title'
        this.success=''
      }
       else{
        Api().post('/saveKahootTitle',Title)
      .then(res=>{
            if(res.data.success) {
              // console.log(res.data.msg);
              this.Title=''
              this.error=''
              this.success=res.data.msg
            }
      })
      }     
    },
    
  },
  created(){
Api().get('/saveKahootTitle')
.then(res=>{
// console.log(res.data)
this.kahoots=res.data.kahoots
}).catch(err=>{
  // console.log(err.response.data.msg)
})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  width: 
  70%;
}

</style>
