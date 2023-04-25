import { createApp } from 'vue'
import './style.css'
import './assets/iconfont.css'
import App from './App.vue'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3333')
const app = createApp(App)

app.config.globalProperties.socket = socket
app.mount('#app')

