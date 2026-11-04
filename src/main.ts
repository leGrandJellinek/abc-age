import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* Styles Import */
import '@/assets/styles/style.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).mount('#app')
