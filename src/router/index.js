import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import create from '@/components/create'
import host from '@/components/host'
import viewJoinedUser from '@/components/joinedUser'
import dis from '@/components/displayQU'
import yours from '@/components/yours'
import register from '@/components/register'
import login from '@/components/login'
import hostId from '@/components/hostEachKahoot'
import displayHostQuestion from '@/components/displayHostQuestion'
import router from '../router'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/host',
      name: 'host',
      component: host,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/host/:id',
      name: 'host-id',
      component: hostId,
      meta:{
        requiresAuth:true
      },
      props: true

    },
    {
      path: '/viewJoinedUser/:id/:title',
      name: 'viewJoinedUser',
      component: viewJoinedUser,
      props:true,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/display/:id/:title',
      name: 'display',
      component: dis,
      props:true
    },
    {
      path: '/displayJoinedUserPage/:id',
      name: 'yours',
      component: yours,
      props:true
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        requiresGuest:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        requiresGuest:true
      }
    },
    {
      path: '/host-Question/:id',
      name: 'host-Question',
      component: displayHostQuestion,
      meta:{
        requiresAuth:true
      },
      props:true
    },
  ]
})


router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
if(!store.getters.isLoggedIn){
    next("/login")

}else{
    next();
}
}else if(to.matched.some(record=>record.meta.requiresGuest)){
if(store.getters.isLoggedIn){
    next("/host")

}else{
    next();
}
}else{
next()
}

});

