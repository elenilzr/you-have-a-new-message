export type TChatMessage = {
  id: string
  next?: string
  type: string
  content: string
  sender: string
}

export type TChatOptions = {
  id: string
  type: string
  options: string[]
}

export type TRedFlag = {
  content: string
  trigger: string
}

export type TChatEntry = TChatMessage | TChatOptions
export type TOptionType = 'message' | 'continue'
export type TContinueOption = {
  optionType: 'continue'
}

export type TOption = (TChatMessage & { optionType: 'message' }) | TContinueOption
export type TPages = 'intro' | 'outro' | 'second-outro' | 'menu' | 'chat' | 'about' | 'references' | 'resources' | 'statistics'
