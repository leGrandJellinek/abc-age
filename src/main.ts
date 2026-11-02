import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { getMainImage, getIcon } from './utils/assets'

/* Styles Import */
import '@/assets/styles/style.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

/* Reg UI components */
import components from '@/components/UI/UI'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$getMainImage = getMainImage
app.config.globalProperties.$getIcon = getIcon

for (let i = 0; i < components.length; i++) {
  const el = components[i]
  if (el.name) {
    app.component(el.name, el)
  }
}

app.use(pinia).use(router).mount('#app')
