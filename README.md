# i18next-print-keys

[![Build](https://github.com/Widen/i18next-print-keys/actions/workflows/build.yml/badge.svg)](https://github.com/Widen/i18next-print-keys/actions/workflows/build.yml)
[![npm](https://img.shields.io/npm/v/i18next-print-keys)](https://www.npmjs.com/package/i18next-print-keys)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-blue)](https://github.com/atlassian/changesets)

i18next preprocessor to print translation keys including interpolated values.

## Installation

### npm

```sh
npm install i18next-print-keys
```

### Yarn

```
yarn add i18next-print-keys
```

## Usage

```js
import i18next from 'i18next'
import printKeys from 'i18next-print-keys'

i18next.use(printKeys).init({
  postProcess: 'printKeys',
})
```

### Example

```js
i18next.t('key') // key
i18next.t('key', { count: 1 }) // key {"count":1}
```
