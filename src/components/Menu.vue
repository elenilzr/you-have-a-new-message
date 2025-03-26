<script setup lang="ts">
  import { defineEmits } from 'vue'
  import Button from './Button.vue'
  import type { TPages } from '../types'

  const emit = defineEmits<{
    selected: [pageName: TPages]
  }>()

  function selectPage(pageName: TPages) {
    emit('selected', pageName)
  }
</script>

<template>
  <section id="menu">
    <img src="/logo.png" alt="Logo">
    <div class="pages">
      <Button color="primary" @click="selectPage('chat')">Start chat</Button>
      <Button color="primary" @click="selectPage('about')">About the project</Button>
      <Button color="primary" @click="selectPage('references')">References</Button>
      <Button color="primary" @click="selectPage('resources')">Resources</Button>
      <Button color="primary" @click="selectPage('statistics')">Statistics</Button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#menu {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;

  img {
    width: 100%;
    object-fit: contain;
  }

  .pages {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>