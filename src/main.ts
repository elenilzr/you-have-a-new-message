import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { FcMiddleBattery, HiChevronLeft, HiWifi, IoPerson, MdSignalcellularaltRound, IoFlagSharp } from 'oh-vue-icons/icons'
import FloatingVue from 'floating-vue'
import { createApp } from 'vue'
import VueDragscroll from 'vue-dragscroll'
import App from './App.vue'

import 'floating-vue/dist/style.css'
import 'animate.css'
import './style.css'

addIcons(HiWifi, FcMiddleBattery, IoPerson, HiChevronLeft, MdSignalcellularaltRound, IoFlagSharp)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(FloatingVue)
app.use(VueDragscroll)
app.mount('#app')
