import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { FcMiddleBattery, HiChevronLeft, HiWifi, IoPerson, MdSignalcellularaltRound } from "oh-vue-icons/icons"

addIcons(HiWifi, FcMiddleBattery, IoPerson, HiChevronLeft, MdSignalcellularaltRound)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
