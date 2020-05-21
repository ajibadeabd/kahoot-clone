<template>
<div class="row">
    <div class="container red lighten-1 center">
        {{error}}
    </div>
    <div class="col s10 m6 l4  offset-l4 offset-s1 offset-m3">
        <form @submit.prevent="SignIn"> 
                     <div class="card">
            <div class="card-action  white-text">
                <h3 class="center light-blue-text  ">
                    <i class="fa fa-sign-in"></i> Login</h3>
            </div>
            <div class="card-content">
               
                <div class="form-field">
                    <label for="email">Email</label>
                     <input type="email"
                     placeholder="email"
                      v-model="email" id="email">

                </div> <br>
                <div class="form-field">
                    <label for="password">Password</label>
                     <input type="password"
                     placeholder="password"
                      v-model="password" id="password">

                </div> <br>
                
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  type="submit">Login</button>

                </div> <br>
                            <div>
                                 Don't have  an Account <router-link to=/register>
            sign Up
        </router-link>
                            </div>
                        
            </div>
        </div>
      
        </form>
       
    </div>
   
</div>


</template>
<script>
import axios from 'axios'
// import {mapActions} from 'vuex'
import Api from '../../config/Api'
export default {
    data(){
        return{
            email:'',
            password:'',
            error:''
            

        }
    },
    methods:{
        SignIn(){

            let userInfo={
                email:this.email,
                password:this.password,
            }
            if(this.email && this.password) {
                 this.error=null
                Api().post('/login',userInfo)
                .then(res=>{
                    console.log(res.data.success)
            if(res.data.success){
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem('token',token);
                axios.defaults.headers.common["Authorization"] = token;
                this.$store.commit('auth_success',token,user)
                // this.$store.dispatch('auth_success',token,user)
                this.$router.push('/host')
                }
                     })
                .catch(err=>{
                    console.log(err.response.data.msg)
                })
            }else{
                 this.error='please input your email and password'
            }
       
        }
        }
}
</script>