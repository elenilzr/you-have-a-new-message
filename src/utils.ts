import type { TChatEntry, TChatMessage, TChatOptions } from './types'

export function isMessage(entry: TChatEntry): entry is TChatMessage {
  return entry.type === 'message'
}

export function isOptions(entry: TChatEntry): entry is TChatOptions {
  return entry.type === 'options'
}
