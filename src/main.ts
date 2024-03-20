import { createApp } from 'vue' // 引入vue
import { globalRegister } from './global' // 引入全局注册配置
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()
// path: /user => user
app.use(router)

app.mount('#app')
