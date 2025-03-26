import type { TChatEntry, TChatMessage, TChatOptions, TRedFlag } from './src/types'
import { readFile, writeFile } from 'node:fs/promises'
import { xml2js } from 'xml-js'

async function start() {
  const filePath = './draw.xml'
  const fileContent = await readFile(filePath, { encoding: 'utf-8' })
  const data = xml2js(fileContent, {})
  const [mxFile] = data.elements
  const [diagram] = mxFile.elements
  const [mxGraphModel] = diagram.elements
  const [root] = mxGraphModel.elements

  const redFlags: Map<string, TRedFlag> = new Map()
  const messages: Map<string, TChatMessage> = new Map()
  for (const element of root.elements) {
    const isUnion = element.attributes?.source && element.attributes?.target
    const isSenderMessage = element.attributes?.style?.includes('#B9E0A5')
    const isMeMessage = element.attributes?.style?.includes('#A9C4EB')
    const isRedFlag = element.attributes?.style?.includes('#FF9999')
    if (isUnion) {
      continue
    }

    if (isSenderMessage || isMeMessage) {
      messages.set(element.attributes?.id, {
        id: element.attributes?.id,
        content: element.attributes?.value.replaceAll('&nbsp;', ''),
        sender: isSenderMessage ? 'contact' : 'me',
        type: 'message',
      })
    }

    if (isRedFlag) {
      redFlags.set(element.attributes?.id, {
        content: element.attributes?.value.replaceAll('&nbsp;', ''),
        trigger: ''
      })
    }
  }

  const entries: TChatEntry[] = [...messages.values()]
  const optionsBySource: Map<string, TChatOptions> = new Map()
  for (const element of root.elements) {
    const isUnion = element.attributes?.source && element.attributes?.target
    if (isUnion) {
      const source = messages.get(element.attributes.source)
      const target = messages.get(element.attributes.target) ?? redFlags.get(element.attributes.target)
      if (!source || !target) {
        throw new Error(`${element.attributes?.id} is not well connected! source: ${source}, target: ${target}`)
      }
 
      if ('trigger' in target) {
        target.trigger = source.id
        continue
      }

      if (target.sender === 'me') {
        let next = optionsBySource.get(source.id)
        if (!next) {
          next = {
            id: element.attributes?.id,
            options: [],
            type: 'options',
          }

          entries.push(next)
        }

        if (typeof next === 'string') {
          throw new TypeError(`something weird here ${element.attributes?.id}`)
        }

        // For duplicated arrows....
        if (!next.options.includes(target.id)) {
          next.options.push(target.id)
        }

        optionsBySource.set(source.id, next)
        source.next = next.id
      }

      if (target.sender === 'contact') {
        source.next = target.id
      }
    }
  }

  // console.log(JSON.stringify(entries, null, 2))
  await writeFile('./src/assets/data/chat.json', JSON.stringify({ redFlags: [...redFlags.values()], entries }, null, 2))
}

start()
