<script setup lang="ts">
  import { ref } from 'vue'
  import WritingAnimation from './WritingAnimation.vue'

  const { message, sender } = defineProps<{ message: string, sender: string, redFlag: string | undefined }>()

  const emit = defineEmits(['sent'])

  const writing = ref(sender !== 'me')

  setTimeout(() => {
    writing.value = false
    emit('sent')
  }, Math.max(message.length * ((Math.random() * 20) + 10), 1000))
</script>

<template>
  <div class="message-bubble" :class="{ me: sender === 'me', writing }">
    <WritingAnimation v-if="writing" />
    <template v-else>
      <span>{{ message }}</span>
      <span
        v-if="!!redFlag"
        v-tooltip="{ content: redFlag, triggers: ['hover', 'click'], distance: 8 }"
        tabindex="0"
        class="red-flag"
      >
        <v-icon name="io-flag-sharp" :inverse="true" />
      </span>
    </template>
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
  position: relative;

  &.writing {
    min-height: 21px;
  }

  &.me {
    background-color: rgb(78, 78, 212);
    color: white;
    align-self: flex-end;
  }

  .red-flag {
    transition: 0.6s all;
    position: absolute;
    background-color: #d93e3e;
    width: 32px;
    height: 32px;
    top: -12px;
    right: -12px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #9f1c1c;
    }
  }
}
</style>
