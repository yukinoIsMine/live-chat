<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="message in formattedMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'

export default {
  setup(){

    let messages = ref([]);
    let msgBox = ref(null);

  // auto scrolling feature
    onUpdated(()=>{
      msgBox.value.scrollTop = msgBox.value.scrollHeight
    })

    let formattedMessages = computed(()=>{
      return messages.value.map((message)=>{
        let formattedTime = formatDistanceToNow(message.created_at.toDate())
        return {...message, created_at:formattedTime}
      })
    })

    db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
      let results = [];
      snap.docs.forEach((doc)=>{
        let document = {...doc.data(), id:doc.id}
        if(doc.data().created_at){
          results.push(document)
        }
      })

      messages.value = results;
    })

    return { messages, formattedMessages, msgBox }
  }

}
</script>

<style>
  .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>