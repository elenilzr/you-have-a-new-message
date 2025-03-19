<script setup lang="ts">
import type { TChatMessage } from '../types';

defineProps<{ messages: TChatMessage[] }>()
const emit = defineEmits<{ (event: 'selected', optionId: string): void }>()
let isOptionSelected = false

function selectOption(optionId: string) {
  if (isOptionSelected) {
    return
  }

  isOptionSelected = true
  emit('selected', optionId)
}

</script>

<template>
  <div class="options-selector">
    <div v-for="message of messages" :key="message.id" class="option" @click="() => selectOption(message.id)">
      {{ message.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.options-selector {
  background-color: rgb(196, 194, 192);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  .option {
    padding: 1rem;
    background-color: rgb(78, 78, 212);
    color: white;
    border-radius: 32px;
    transition: 0.4s all;
    font-weight: 600;

    &:hover {
      background-color: rgb(59, 59, 197);
    }
  }
}
</style>
