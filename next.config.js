const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  fr: 'fr',
  en: 'en'
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  }
}