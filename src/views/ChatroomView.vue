<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm , ChatWindow },
  setup(){

    let router = useRouter();
    let {user} = getUser();

    watch(user, ()=>{
      if(!user.value){
        router.push("/")
      }
    })

    return { user }
  }

}
</script>

<style>
  
</style>