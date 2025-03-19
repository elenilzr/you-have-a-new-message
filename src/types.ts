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

export type TChatEntry = TChatMessage | TChatOptions