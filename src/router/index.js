import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(!user){
        next()
      }else(
        next({name:"chatroom"})
      )
    }
  },

  {
    path: "/chatroom",
    name: "chatroom",
    component: ChatroomView,
    beforeEnter(to, from, next){
      let user = auth.currentUser;
      if(user){
        next()
      }else{
        next({name:"welcome"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
