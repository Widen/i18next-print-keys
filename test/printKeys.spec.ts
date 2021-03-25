import i18next from 'i18next'
import printKeys from '../src'

i18next.use(printKeys).init({
  fallbackLng: 'en',
  postProcess: 'printKeys',
  resources: {
    en: {
      translation: {
        basic: 'This is basic',
        count: 'There are {{count}} items',
        identity_male: 'He is a man',
        multiple: 'I went walking with {{person1}} and {{person2}}.',
      },
    },
  },
})

const t = i18next.t

it('should print the key for basic strings', () => {
  expect(t('basic')).toBe('basic')
})

it('should print interpolated values after the key', () => {
  expect(t('count', { count: 12 })).toBe('count {"count":12}')
  expect(t('identity', { context: 'male' })).toBe('identity {"context":"male"}')
  expect(t('count', { count: 12 })).toBe('count {"count":12}')
})
