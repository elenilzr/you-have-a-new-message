<script setup lang="ts">
  import type { TChatEntry, TChatMessage, TOption, TOptionType, TRedFlag } from '../types'
  import { ref, useTemplateRef, watch, defineEmits } from 'vue'
  import { isOptions } from '../utils'
  import MessageBubble from './MessageBubble.vue'
  import OptionsSelector from './OptionsSelector.vue'

  const emit = defineEmits<{
    back: []
    continue: []
  }>()

  const { chatEntries, redFlags, showRedFlags } = defineProps<{
    chatEntries: TChatEntry[]
    redFlags: TRedFlag[]
    showRedFlags: boolean
    isFirstTime: boolean
  }>()

  let nextEntryId: string | undefined = chatEntries[0].id

  const entriesMap = new Map<string, TChatEntry>()
  for (const entry of chatEntries) {
    entriesMap.set(entry.id, entry)
  }

  const triggerRedFlagsMap = new Map<string, TRedFlag>()
  if (showRedFlags) {
    for (const redFlag of redFlags) {
      triggerRedFlagsMap.set(redFlag.trigger, redFlag)
    }
  }

  const sentChatMessages = ref<TChatMessage[]>([])
  const pendingOptions = ref<TOption[]>([])
  const isOptionSelectorOpen = ref(false)
  const isOpeningOrClosing = ref(false)
  const isChatCompleted = ref(false)

  const messagesElement = useTemplateRef('messagesElement')

  function handleBack() {
    emit('back')
  }

  function handleContinue() {
    emit('continue')
  }

  function getRedFlag(messageId: string) {
    return triggerRedFlagsMap.get(messageId)
  }


  watch(isOpeningOrClosing, (newValue: boolean) => {
    if (newValue) {
      scrollDown()
    }
  })

  function scrollDown() {
    if (messagesElement.value) {
      messagesElement.value.scrollTo({ top: messagesElement.value.scrollHeight, behavior: 'instant' })
    }

    if (isOpeningOrClosing.value) {
      setTimeout(scrollDown, 10)
    }
  }

  async function selectOption(optionId: string) {
    pendingOptions.value.splice(0, pendingOptions.value.length)
    isOptionSelectorOpen.value = false
    nextEntryId = optionId
    sendNextMessage()
  }

  async function sendNextMessage() {
    if (!nextEntryId) {
      isChatCompleted.value = true

      pendingOptions.value.push({
        optionType: 'continue'
      })
      
      isOptionSelectorOpen.value = true
      return
    }

    const entry = entriesMap.get(nextEntryId)
    if (!entry) {
      return
    }

    setTimeout(() => {
      if (messagesElement.value) {
        messagesElement.value.scrollTo({ top: messagesElement.value.scrollHeight, behavior: 'smooth' })
      }
    }, 300)

    if (isOptions(entry)) {
      const messageOptions = entry.options.map(messageId => ({ ...entriesMap.get(messageId) as TChatMessage, optionType: 'message' as TOptionType }))
      pendingOptions.value.push(...messageOptions)
      isOptionSelectorOpen.value = true
      return
    }

    sentChatMessages.value.push(entry)
    nextEntryId = entry.next
  }

  sendNextMessage()
</script>

<template>
  <div id="chat">
    <header>
      <div id="contact-info">
        <v-icon
          class="back"
          name="hi-chevron-left"
          @click="handleBack"
        />
        <v-icon name="io-person" class="avatar" />
        <span class="contact-name">John Doe</span>
      </div>
    </header>
    <main v-dragscroll="true" id="messages" ref="messagesElement">
      <MessageBubble
        v-for="entry of sentChatMessages"
        :key="entry.id"
        :message="entry.content"
        :sender="entry.sender"
        :red-flag="getRedFlag(entry.id)?.content"
        @sent="sendNextMessage"
      />
      <span v-if="isChatCompleted" class="chat-ended">Chat ended</span>
    </main>
    <Transition
      enter-from-class="close"
      enter-to-class="open"
      enter-active-class="opening"
      leave-active-class="closing"
      leave-from-class="open"
      leave-to-class="close"
      @enter="isOpeningOrClosing = true"
      @after-enter="isOpeningOrClosing = false"
      @leave="isOpeningOrClosing = true"
      @after-leave="isOpeningOrClosing = false"
    >
      <footer v-if="isOptionSelectorOpen" class="options-selector">
        <OptionsSelector
          :messages="pendingOptions"
          @selected="selectOption"
          @continue="handleContinue"
        />
      </footer>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  @keyframes slide-in {
    0% {
      max-height: 0px;
    }

    100% {
      max-height: 300px;
    }
  }

  #chat {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    #contact-info {
      padding: 0.5rem 1rem 1rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .back {
        transition: 0.4s all;
        border-radius: 9999px;
        padding: 0.25rem;

        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
        }
      }

      .avatar {
        width: 32px;
        height: 32px;
        padding: 0.5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: grey;
        border-radius: 999px;
      }

      .contact-name {
        font-weight: 600;
      }
    }

    #messages {
      flex: 1;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      gap: 1rem;
    }

    .options-selector {
      animation-timing-function: ease;

      &.open {
        max-height: 300px;
      }

      &.close {
        max-height: 0px;
      }

      &.opening {
        animation: slide-in 1.0s;
      }

      &.closing {
        animation: slide-in 1.0s reverse;
      }
    }

    .chat-ended {
      background-color: #e7e7e7;
      align-self: center;
      padding: 0.25rem 0.75rem;
      font-size: 10pt;
      border-radius: 16px;
      color: #8d8c8c;
      margin-top: 2rem;
    }
  }
</style>
