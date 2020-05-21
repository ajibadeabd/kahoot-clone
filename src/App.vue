<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import m from 'materialize-css'
import {mapActions} from 'vuex'
import NavBar from './components/navBar'
export default {
  name: 'App',
components:{
NavBar
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
