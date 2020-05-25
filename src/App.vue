<template>
  <div id="app">
    <NavBar />
    <Error />
    <Success />

    <router-view/>
  </div>
</template>

<script>
import m from 'materialize-css'
import {mapActions} from 'vuex'
import NavBar from './components/navBar'
import Success from './components/success'
import Error from './components/error'
export default {
  name: 'App',
components:{
NavBar,
Success,
Error
},
methods:{
...mapActions(["signOut"]),
logOut(){
this.signOut()
}
},
  mounted(){
  m.AutoInit()
    
  }
}
</script>

<style>

</style>
