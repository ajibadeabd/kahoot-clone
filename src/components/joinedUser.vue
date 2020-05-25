<template>
<div>
    <div class=" blu row center ">
<div class="container red lighten-1 center">
        {{error}}
    </div>
        
        <div>  
            
          <h2>Joined players</h2>
            

        </div>
        <br>
        <h4>45443</h4>
            <div v-for="(user,index) in user" :key='index'> 
                <div class="ppl white col offset-s1 offset-m2 offset-l3 m8 s10 l6">{{user.name}}</div>
            </div>
    </div>
    <div class="center">

 <input @click="start(user)" type="submit"
      value="Start game"
    class="btn blue"            >
    </div>
    <br>
    <br>
    <br>
    </div>
</template>
<script>
import Api from '../../config/Api'
export default {
    props:['id','title'],
    data(){
        return{
            user:'',
            error:''
        }
    },
    methods:{
        start(player){
            if (player.length<=2) {
                    this.error=" 3 players can't start a game"
            }else{
                this.$router.push({
                    name:"display",
                    params:{
                        id:this.id,
                        title:this.title
                    }
                })
            }
        }
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
    }
}
</script>

<style scoped>
.card{
height: 70vh;
}
.blu{
    background-color:red;
min-height: 90vh;
margin-top: 0px;

}
.ppl{
max-height: 55vh;

}
h2{
    margin:0px 0px 0px 0px ;
}
</style>