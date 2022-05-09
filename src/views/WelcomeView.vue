<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"/>
      <p>Don't have an account yet? <span @click="showLoginForm=!showLoginForm">Create one.</span></p>
    </div>
    <div v-else>
      <Signup @enterChatroom="enterChatroom"/>
      <p>Already have an account? <span @click="showLoginForm=!showLoginForm">Log in.</span></p>
    </div>
    
  </div>
  </template>

<script>
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"

export default {
  components: { Signup, Login },

  setup(){
    let showLoginForm = ref(true);

    let router = useRouter();

    let enterChatroom = ()=>{
      router.push({name:"chatroom"});
    }

    return{ showLoginForm, enterChatroom }
  }

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>