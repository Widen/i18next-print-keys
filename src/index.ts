import { PostProcessorModule } from 'i18next'

const ignore = ['defaultValue', 'interpolation', 'lng', 'lngs', 'ns']

export default {
  name: 'printKeys',
  type: 'postProcessor',
  process(_, key, options) {
    // Filter out internal i18next options when printing keys. The resulting
    // array is passed to JSON.stringify which instructs it which keys should
    // be printed.
    const optionKeys = Object.keys(options).filter(
      (key) => !ignore.includes(key)
    )

    return optionKeys.length
      ? key + ' ' + JSON.stringify(options, optionKeys)
      : key.toString()
  },
} as PostProcessorModule
