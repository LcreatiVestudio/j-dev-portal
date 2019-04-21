'use strict'

const glob = require('glob')
const pages = {}
const maintenance = true

// glob.sync('./src/pages/**/app.ts').forEach(path => {
//   const chunk = path.split('./src/pages/')[1].split('/app.ts')[0]
//   pages[chunk] = {
//     entry: path,
//     template: 'public/index.html',
//     chunks: ['chunk-vendors', 'chunk-common', chunk]
//   }
// })

const constantpage = {
  index: {
    entry: 'src/pages/index/app.ts',
    template: 'public/index.html',
    filename: 'index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  missing: {
    entry: 'src/pages/404/app.ts',
    template: 'public/index.html',
    filename: '404.html',
    chunks: ['chunk-vendors', 'chunk-common', 'missing']
  },
  about: {
    entry: 'src/pages/About/app.ts',
    template: 'public/index.html',
    filename: 'about/index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'about']
  },
  project: {
    entry: 'src/pages/ProjectInformation/app.ts',
    template: 'public/index.html',
    filename: 'project/index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'project']
  }
}

if (maintenance) constantpage.index = {
  entry: 'src/pages/Maintenance/app.ts',
  template: 'public/index.html',
  filename: 'index.html',
  chunks: ['chunk-vendors', 'chunk-common', 'index']
}

Object.assign(pages, constantpage)

module.exports = {
  pages,
  chainWebpack: config => config.plugins.delete('named-chunks'),
}