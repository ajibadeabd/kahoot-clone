<template>
 <div>

     
<nav class="blue darken-3">
  <div class="container">
    <div class="nav-wrapper">
      
      <!-- SIDE MENU -->
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <!-- <a href="#" data-target="mobile-demo" ><i class="material-icons">menu</i></a> -->
      
    <a href="#!"  class="brand-logo"></a>
    <ul class="right  hide-on-med-and-down">
        
         
        <li v-if="!isLoggedIn">
          <router-link to='/login'>
           <i class="fa fa-sign-in"></i> login
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to='/register'>
           <i class="fa fa-user-plus" aria-hidden="true"></i> register
          </router-link>
        </li>
        <li>
          <router-link to='/order'>
            <i class="material-icons">shopping_cart</i>
          </router-link>
        </li>
        <li v-if="isLoggedIn"><a href="/logOut" @click.prevent="logOut">
         <i class="fa fa-sign-out"></i> Logout</a
         ></li>
          <li >
          <router-link to='/'>
           <i class="fa fa-home"></i> home
          </router-link>
        </li>
       
       
    </ul>
    </div>
  </div>
</nav>

 <ul class="sidenav collapsible" id="mobile-demo">
        <li><div class="user-view">
      <div class="background">
        <img src="https://materializecss.com/images/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="https://materializecss.com/images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
   <li v-if="isLoggedIn">
          <router-link class="" to='/dashboard'>
           <i class="fa fa-user" ></i>dashboard
          </router-link>
        </li>
        <li class="divider"></li>
        <li  class="center">
           <router-link class="center" to='/order'>
        <i class="material-icons  ">shopping_cart
          <!-- <span class="new white-text red badge">5</span> -->
          </i><span class="left">cart</span>
        </router-link>
        </li>
        <li class="divider"></li>

         <li v-if="isLoggedIn"><a href="/logOut" @click.prevent="logOut">
         <i class="fa fa-sign-out"></i> Logout</a
         ></li>
        
     <li >
          <router-link to='/'>
           <i class="fa fa-home"></i> home
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to='/login'>
           <i class="fa fa-sign-in"></i> login
          </router-link>
        </li>
       
        <div class="divider"></div>
        <li v-if="!isLoggedIn">
          <router-link to='/register'>
           <i class="fa fa-user-plus" aria-hidden="true"></i> register
          </router-link>
        </li>

      </ul>
   
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import m from 'materialize-css'

export default {
 
 data(){
   return{

   }
 },
 created(){
 },
 computed:{
   ...mapGetters(["isLoggedIn"])
 },
methods:{
   ...mapActions(["signOut"]),
logOut(){
this.signOut()
}
},
 mounted(){
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);


  });
   


  }
 
}
</script>
<style scoped>
nav{
  position: relative;
}
</style>