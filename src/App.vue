<script setup lang="ts">
import Phone from './components/Phone.vue'
import chatData from './assets/data/chat.json'
</script>

<template>
  <Phone :chat-entries="chatData.entries"/>
</template>
