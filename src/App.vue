<script setup lang="ts">
  import chatData from './assets/data/chat.json'
  import Phone from './components/Phone.vue'
</script>

<template>
  <Phone :chat-entries="chatData.entries" :red-flags="chatData.redFlags" />
</template>
