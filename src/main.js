import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 导入自己的UI组件库
import UI from '@/components/library'

// 1,重置样式的库
import 'normalize.css'
// 2,自己项目的重置样式金额公共样式
import '@/assets/styles/common.less'
// 3.样式变量
import '@/assets/styles/variables.less'

createApp(App).use(store).use(router).use(UI).mount('#app')
