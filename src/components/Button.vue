<script setup lang="ts">
  import { useTemplateRef, defineProps, onMounted, onUpdated } from 'vue'
  
  const { color } = defineProps<{
    color: 'primary' | 'secondary' | 'disabled'
  }>();

  const button = useTemplateRef('button')

  function updateButtonColor() {
    if (!button.value) {
      return
    }

    switch (color) {
      case 'primary': {
        button.value.style.setProperty('--option-color', 'rgb(78, 78, 212)')
        button.value.style.setProperty('--option-color-hover', 'rgb(59, 59, 197)')
        break
      }
      case 'secondary': {
        button.value.style.setProperty('--option-color', 'rgb(54, 54, 81)')
        button.value.style.setProperty('--option-color-hover', 'rgb(34, 34, 51)')
        break
      }
      case 'disabled': {
        button.value.style.setProperty('--option-color', 'rgb(155, 155, 155)')
        button.value.style.setProperty('--option-color-hover', 'rgb(155, 155, 155)')
        break
      }
    }
  }
  
  onMounted(() => {
    updateButtonColor()
  })

  onUpdated(() => {
    updateButtonColor()
  })
</script>

<template>
  <button class="button" ref="button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  padding: 1rem;
  padding: 1rem;
  background-color: var(--option-color);
  color: white;
  border-radius: 32px;
  transition: 0.4s all;
  font-weight: 600;
  border: 0;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 16px;
  display: block;
  width: 100%;

  &:hover {
    background-color: var(--option-color-hover);
  }
}
</style>