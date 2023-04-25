

<template>
  <div class="home">
    <h1>chat</h1>
    <div class="operate">
      <input type="text" v-model="inputData"> 
      <button @click="send" class="iconfont">&#xe60f;</button>
    </div>
   
    <div class="content">
       
      <p v-for="obj in message.msg" :key="message.msg.date">
        用户：{{ obj.user }} 在 {{ obj.date }}发送了一条消息<br>
        {{ obj.message }}

        
      </p>
  
    </div>
    
  </div>

</template>



<script setup>

import { nextTick, reactive, ref,watch ,getCurrentInstance} from 'vue';
const {appContext} = getCurrentInstance()
const socket = appContext.config.globalProperties.socket
const inputData = ref('')
const message = reactive({ 
  msg: [],
  test:'1'
}) 
  

 

const send = () => {
  inputData.value && socket.emit('chat message', { message: inputData.value, user: `甲`, date: `日期：${new Date().toLocaleDateString()}` })

  inputData.value = ''  
} 
const test = ({ data }) => {
  data && message.msg.push(data)
}

socket.on('broadcast message',test)

</script>

<style scoped >

.content{
  width: 500px;
  border: 1px solid skyblue;
  height: 500px;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .operate{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  button{
    color:coral;
    background: #fff;
    width: auto;
    height: auto;
    margin-left: 5px;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }
  p{
    font-size: 14px;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    margin: 5px;
  }
</style>
