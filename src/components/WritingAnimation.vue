<script setup lang="ts">
  setTimeout(() => {
  }, 0)
</script>

<template>
  <div class="writing-animation">
    <span />
    <span />
    <span />
  </div>
</template>

<style lang="scss" scoped>
@keyframes loader {
  to {
    transform: translate(0, -6px);
  }
}

.writing-animation {
  display: flex;
  gap: 0.25rem;
  align-items: end;
  height: 100%;

  span {
    width: 8px;
    height: 8px;
    background-color: rgb(114, 114, 114);
    border-radius: 999px;
    animation: loader 0.6s infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}
</style>
