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
  <section id="intro">
    <div class="intro-text">
      <p>This is an educational tool for children and young people, parents, caretakers, and professionals to shed light on the growing concerns for children and teens' online safety. It will do this by showing what to look out for or avoid when talking to strangers online. This is intended to educate people on online child grooming and potentially prevent it from happening.</p>
      <p>This is a simulation of a messaging thread with a child groomer where you play the part of the victim of an attempted child grooming scenario.</p>
      <p>After the first chat ends, you have the chance to retry the conversation with the addition of red flags onto the messages. You can retry the second part of this chat as many times as you'd like.</p>
      <p><b class="trigger-warning">Content warning:</b> This simulation contains references to themes of child sexual abuse, paedophilia, and online grooming, which some individuals may find distressing. Please seek support if you need to.</p>
    </div>
    <Button color="primary" @click="handleContinue">Continue</Button>
  </section>
</template>

<style lang="scss" scoped>
#intro {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  overflow-y: auto;

  .trigger-warning {
    color: rgb(184, 29, 29);
  }
}
</style>