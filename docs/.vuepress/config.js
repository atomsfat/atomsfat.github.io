const pluginConf = require("./config/pluginConf");
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: 'Notes',
  base: '/notes/',
  description: '',
  dest: 'public',
  themeConfig: {
    smothScroll: true,
    displayAllHeaders: false,
    editLinks: true,
    nav: navConf,
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-task-lists'))
      md.use(require('markdown-it-fontawesome'))
    }
  },
  head: headConf,
  plugins: pluginConf
}
