import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/style.sass"
import components from "@/components/UI/UI"
const app = createApp(App)

for (let i = 0; i < components.length; i++) {
    const el = components[i];
    app.component(el.name, el)
}
app.use(store).use(router).mount('#app')
