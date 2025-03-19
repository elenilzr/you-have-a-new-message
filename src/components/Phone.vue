<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import MessageBubble from './MessageBubble.vue';
import OptionsSelector from './OptionsSelector.vue';
import type { TChatEntry, TChatMessage } from '../types';
import { isOptions } from '../utils';
const { chatEntries } = defineProps<{ chatEntries: TChatEntry[] }>()
let nextEntryId: string | undefined = chatEntries[0].id;
const entriesMap = new Map<string, TChatEntry>()
for (const entry of chatEntries) {
  entriesMap.set(entry.id, entry)
}

const sentChatMessages = ref<TChatMessage[]>([])
const pendingOptions = ref<TChatMessage[]>([])

const messagesElement = useTemplateRef('messagesElement')

function selectOption(optionId: string) {
  pendingOptions.value.splice(0, pendingOptions.value.length)
  nextEntryId = optionId
  sendNextMessage()
}

function sendNextMessage() {
  if (!nextEntryId) {
    return
  }
  
  const entry = entriesMap.get(nextEntryId)
  if (!entry) {
    return
  }

  setTimeout(() => {
    if (messagesElement.value) {
      messagesElement.value.scrollTop = messagesElement.value.scrollHeight
    }
  }, 100)

  if (isOptions(entry)) {
    const messageOptions = entry.options.map((messageId) => entriesMap.get(messageId) as TChatMessage)
    pendingOptions.value.push(...messageOptions)
    return
  }

  sentChatMessages.value.push(entry)
  nextEntryId = entry.next
}

sendNextMessage()
</script>

<template>
  <div id="phone">
    <header>
      <div id="phone-info">
        <span class="time">{{ new Date().toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hour12: false }) }}</span>
        <div>
          <v-icon name="md-signalcellularalt-round" />
          <v-icon name="hi-wifi" />
          <v-icon name="fc-middle-battery" />
        </div>
      </div>
      <div id="contact-info">
        <v-icon name="hi-chevron-left" />
        <v-icon name="io-person" class="avatar" />
        <span class="contact-name">John Doe</span>
      </div>
    </header>
    <main id="messages" ref="messagesElement">
      <MessageBubble v-for="entry of sentChatMessages" :key="entry.id" :message="entry.content"
        :sender="entry.sender" @sent="sendNextMessage" />
    </main>
    <footer>
      <OptionsSelector v-if="pendingOptions.length > 0" :messages="pendingOptions" @selected="selectOption"/>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#phone {
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;

  #phone-info {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.25rem;

    .time {
      font-size: 10pt;
    }
  }

  #contact-info {
    padding: 0.5rem 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

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
    overflow-y: scroll;
    gap: 1rem;
  }

  @media (min-width:481px) {
    width: 360px;
    height: 720px;

    border: 8px solid black;
    border-radius: 42px;
    overflow: hidden;
    box-shadow: 0 0.4px 1px rgba(0, 0, 0, 0.026), 0 1px 2.3px rgba(0, 0, 0, 0.045),
      0 1.9px 4.4px rgba(0, 0, 0, 0.065), 0 3.4px 7.8px rgba(0, 0, 0, 0.094),
      0 6.3px 14.6px rgba(0, 0, 0, 0.145), 0 15px 35px rgba(0, 0, 0, 0.25);
  }
}
</style>
