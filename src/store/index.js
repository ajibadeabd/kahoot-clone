import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import Api from '../../config/Api'

Vue.use(Vuex)
export default new Vuex.Store({
    
    state: {
      token:localStorage.getItem('token') || '',
        user: {},
        status:'',
        success:'',
        error:null,
        displayQuestion:'miekjjfkek'
    },
    getters: {
        isLoggedIn: state=>!!state.token ,
          authState: state =>state.status,
          user: state =>state.user,
          error: state=>state.error,
          success: state=>state.success,
          displayQuestion: state=>state.displayQuestion
       },
    actions: {
        async signOut({commit}){
            await localStorage.removeItem('token')
            commit('signOut')
            delete   axios.defaults.headers.common['Authorization']
            router.push('/login')
        return
        }
        
    },
    mutations:{
        order_success(state,item){
            state.success = ''
        },
        cart_success(state,item){
            state.success = ` ${item} has been added to cart`
        },
        register_request(state){
            state.status = 'loading'
        },
        register_success(state,res){
            state.status = 'success'
            state.error=null
          
            state.success = res.data.msg
        },
        auth_request(state){
            state.status = 'loading'
            state.error=null
            state.success=null

        },
        auth_success(state,token,user){
            state.user = user
            state.status = 'success'
            state.token = token
            state.success='you are now logged in'
            state.error=null
        },
        auth_error(state,err){
            state.error=err.response.data.msg
            state.success=null


        },
        register_error(state,err){
            state.error= err.response.data.msg
        },
        start_game(state,payload){
            state.displayQuestion=payload


        },
        signOut(state){

            state.error=null
            state.status=""
            state.token=""
            state.user=""
        }
    },
   
    
    

});