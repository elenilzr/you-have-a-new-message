<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  import type { TOption, TOptionType } from '../types'
  import Button from './Button.vue';

  defineProps<{ messages: TOption[] }>()
  const emit = defineEmits<{
    selected: [optionId: string]
    continue: []
  }>()

  const isOptionSelected = ref(false)

  async function selectOption(optionType: 'continue'): Promise<void>
  async function selectOption(optionType: 'message', optionId: string): Promise<void>
  async function selectOption(optionType: TOptionType, optionId?: string): Promise<void> {
    if (isOptionSelected.value) {
      return
    }

    isOptionSelected.value = true
    await nextTick()

    switch (optionType) {
      case 'message': {
        emit('selected', optionId!)
        break
      }
      case 'continue': {
        emit('continue')
        break
      }
    }
  }
</script>

<template>
  <div class="options-selector">
    <template v-for="message of messages">
      <Button
        v-if="message.optionType === 'message'"
        :key="message.id"
        :color="!isOptionSelected ? 'primary' : 'disabled'"
        @click="() => selectOption(message.optionType, message.id)"
      >{{ message.content }}</Button>
      <Button
        v-if="message.optionType === 'continue'"
        :key="message.optionType"
        :color="!isOptionSelected ? 'primary' : 'disabled'"
        @click="() => selectOption(message.optionType)"
      >Continue</Button>
    </template>
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
    --option-color: rgb(78, 78, 212);
    --option-color-hover: rgb(59, 59, 197);
    padding: 1rem;
    background-color: var(--option-color);
    color: white;
    border-radius: 32px;
    transition: 0.4s all;
    font-weight: 600;
    filter: saturate(1);

    &.selected {
      --option-color: rgb(155, 155, 155);
      --option-color-hover: rgb(155, 155, 155);
    }

    &:hover {
      background-color: var(--option-color-hover);
    }
  }
}
</style>
