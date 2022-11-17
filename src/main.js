import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* Styles Import */
import "@/assets/styles/style.scss"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
/* Reg UI components */
import components from "@/components/UI/UI"
const app = createApp(App)
for (let i = 0; i < components.length; i++) {
    const el = components[i];
    app.component(el.name, el)
}
/* */
app.use(store).use(router).mount('#app')
