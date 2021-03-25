import { PostProcessorModule } from 'i18next'

export default {
  name: 'printKeys',
  type: 'postProcessor',
  process(_, key, options) {
    return Object.keys(options).length
      ? key + ' ' + JSON.stringify(options)
      : key.toString()
  },
} as PostProcessorModule
