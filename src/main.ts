import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

import App from '@/App.vue'
import router from '@/router'

// prettier-ignore
createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
