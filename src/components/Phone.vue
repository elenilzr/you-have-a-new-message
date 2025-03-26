<script setup lang="ts">
  import { ref } from 'vue';
  import type { TChatEntry, TPages, TRedFlag } from '../types'
  import Intro from './Intro.vue'
  import Menu from './Menu.vue'
  import Chat from './Chat.vue'
  import Outro from './Outro.vue';
import SecondOutro from './SecondOutro.vue';
import About from './About.vue';
import References from './References.vue';
import Resources from './Resources.vue';
import Statistics from './Statistics.vue';

  defineProps<{
    chatEntries: TChatEntry[]
    redFlags: TRedFlag[]
  }>()

  const isFirstTime = ref(true)
  const showRedFlags = ref(false)
  const currentPage = ref<TPages>('intro')

  function handleIntroContinue() {
    currentPage.value = 'menu'
  }

  function handleMenuSelected(pageName: TPages) {
    currentPage.value = pageName
  }

  function handleChatBack() {
    currentPage.value = 'menu'
  }

  function handleChatContinue() {
    if (isFirstTime.value) {
      currentPage.value = 'outro'
      return
    }

    currentPage.value = 'second-outro'
  }

  function handleOutroContinue() {
    currentPage.value = 'chat'
    showRedFlags.value = true
    isFirstTime.value = false
  }

  function handleSecondOutroGoToMenu() {
    currentPage.value = 'menu'
  }

  function handleAboutGoToMenu() {
    currentPage.value = 'menu'
  }

  function handleReferencesGoToMenu() {
    currentPage.value = 'menu'
  }

  function handleResourcesGoToMenu() {
    currentPage.value = 'menu'
  }

  function handleStatisticsGoToMenu() {
    currentPage.value = 'menu'
  }
</script>

<template>
  <div id="phone">
    <header>
      <div id="phone-info">
        <span class="time">{{ new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hour12: false })
        }}</span>
        <div>
          <v-icon name="md-signalcellularalt-round" />
          <v-icon name="hi-wifi" />
          <v-icon name="fc-middle-battery" />
        </div>
      </div>
    </header>
    <Intro v-if="currentPage === 'intro'" @continue="handleIntroContinue" />
    <Menu v-if="currentPage === 'menu'" @selected="handleMenuSelected" />
    <Chat
      v-if="currentPage === 'chat'"
      :chat-entries="chatEntries"
      :red-flags="redFlags"
      :show-red-flags="showRedFlags"
      :is-first-time="isFirstTime"
      class="chat"
      @back="handleChatBack"
      @continue="handleChatContinue"
    />
    <Outro v-if="currentPage === 'outro'" @continue="handleOutroContinue" />
    <SecondOutro v-if="currentPage === 'second-outro'" @go-to-menu="handleSecondOutroGoToMenu" />
    <About v-if="currentPage === 'about'" @go-to-menu="handleAboutGoToMenu" />
    <References v-if="currentPage === 'references'" @go-to-menu="handleReferencesGoToMenu" />
    <Resources v-if="currentPage === 'resources'" @go-to-menu="handleResourcesGoToMenu" />
    <Statistics v-if="currentPage === 'statistics'" @go-to-menu="handleStatisticsGoToMenu" />
  </div>
</template>

<style lang="scss" scoped>
  #phone {
    background-color: rgb(247, 247, 247);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;

    #phone-info {
      display: none;
    }

    .chat {
      flex: 1;
    }

    @media (min-width:481px) {
      width: 360px;
      height: 720px;

      border: 8px solid black;
      border-radius: 42px;
      overflow: hidden;
      box-shadow: 0 0.4px 1px rgba(0, 0, 0, 0.026), 0 1px 2.3px rgba(0, 0, 0, 0.045),
        0 1.9px 4.4px rgba(0, 0, 0, 0.065), 0 3.4px 7.8px rgba(0, 0, 0, 0.094),
        0 6.3px 14.6px rgba(0, 0, 0, 0.145), 0 15px 35px rgba(0, 0, 0, 0.25);

      #phone-info {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1.25rem;

        .time {
          font-size: 10pt;
        }
      }
    }
  }
</style>
