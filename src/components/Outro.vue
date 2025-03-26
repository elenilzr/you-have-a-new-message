<script setup lang="ts">
  import { defineEmits } from 'vue'
  import Button from './Button.vue'

  const emit = defineEmits<{
    continue: []
  }>()

  function handleContinue() {
    emit('continue')
  }
</script>

<template>
  <section id="outro">
    <div class="outro-text">
      <p>Thank you for participating in the simulation</p>
      <p>You Have a New Message.</p>
      <p>Online safety isn't an easy conversation to have with your child. Talking regularly about it can help develop trust and understanding.</p>
      <p>Don't be scared to tell a trusted adult if you ever find yourself in a similar situation, or contact a helpline like Childline at 0800 1111 or visit their website.</p>
      <p><b>Want to know more?</b></p>
      <p>Check out our Resource and About page for more information about how to keep our children safe.</p>
      <p>You now have the opportunity to re-try this conversation with the addition of red flags that you may have missed during the first try.</p>
    </div>
    <Button color="primary" @click="handleContinue">Continue</Button>
  </section>
</template>

<style lang="scss" scoped>
#outro {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>