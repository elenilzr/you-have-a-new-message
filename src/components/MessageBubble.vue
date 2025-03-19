<script setup lang="ts">
import { ref } from 'vue';
import WritingAnimation from './WritingAnimation.vue';

const emit = defineEmits(['sent'])

const { message, sender } = defineProps<{ message: string; sender: string }>()
const writing = ref(sender !== 'me')

setTimeout(() => {
  writing.value = false
  emit('sent')
}, Math.max(message.length * ((Math.random() * 20) + 10), 1000))
</script>

<template>
  <div :class="{ 'message-bubble': true, me: sender === 'me', writing }">
    <WritingAnimation v-if="writing" />
    <span v-else>{{ message }}</span>
  </div>
</template>

<style lang="scss" scoped>
.message-bubble {
  padding: 0.75rem 1rem;
  background-color: rgb(209, 209, 209);
  max-width: 60%;
  border-radius: 32px;
  align-self: flex-start;
  font-weight: 600;
  
  &.writing {
    min-height: 21px;
  }
  
  &.me {
    background-color: rgb(78, 78, 212);
    color: white;
    align-self: flex-end;
  }
}

</style>
