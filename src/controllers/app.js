const express = require('express')
const app     = express()
const path    = require('path')
const ejs     = require('ejs')

module.exports = function () {
  this.app = () => {
    this.middlewares()
    return app
  },
  this.middlewares = () => {
    app.set('views', path.join(__dirname,'../../public/views'))
    app.engine('ejs', ejs.__express)
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(require('../router/routes'))
  }
}