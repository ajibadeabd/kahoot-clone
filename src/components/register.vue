<template>
<div class="row">
    <div class="container red lighten-1 center">
        {{error}}
    </div>
    <div class="col s10 m6 l4  offset-l4 offset-s1 offset-m3">
        
        <form @submit.prevent="SignUp"> 
                     <div class="card">
            <div class="card-action lighten-1 white-text">
                <h3 class="center light-blue-text">
                    <i class="fa fa-user-plus"></i>Sign up</h3>
            </div>
            <div class="card-content">
                <div class="form-field">
                    <label for="userName">Username</label>
                     <input v-model="userName" type="text" id="username">

                </div> <br>
                <div class="form-field">
                    <label for="email">Email</label>
                     <input v-model="email" type="email" id="email">

                </div> <br>
                <div class="form-field">
                    <label for="password">Password</label>
                     <input type="password" v-model="password" id="password">

                </div> <br>
                <div class="form-field">
                    <label for="confirm_password">confirm Password</label>
                     <input
                     v-model="confirm_password" type="password" id="confirm_password">

                </div> <br>
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  
                  type="submit">Sign up</button>

                </div> <br>
                        <div>
                                 Already created an  Account <router-link to=/login>
            sign In
        </router-link>
                            </div>
            </div>
        </div>
        </form>
       
    </div>
   
</div>


</template>
<script>
// import axios from 'axios'
import Api from '../../config/Api'
export default {
    data(){
        return{
            userName:'',
            email:'',
            confirm_password:'',
            password:'',
            error:''

        }
    },
    methods:{
        SignUp(){
            
 let      userInfo={
                email:this.email,
                password:this.password,
                confirm_password:this.confirm_password,
                userName:this.userName,
            }
            if(this.email && this.userName && this.password && this.confirm_password) {
                if( this.confirm_password!==this.password) {
                 this.error='password does not match'
                }else{
                    this.error=null
                Api().post('/register',userInfo)
                .then(res=>{
                    console.log(res.data.success)
                    if(res.data.success) {
                        this.$router.push('/login')
                    }
                })
                .catch(err=>{
                    // console.log(err.res.data.msg)

                })
                }
                 
            }else{
                 this.error='please input all the field'
            }
        }

    }
}
</script>