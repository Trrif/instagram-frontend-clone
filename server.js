import express from 'express'
import path from 'path'
const PORT = 3000
const PUBLIC_PATH = path.join(__dirname, '/public')
const app = express()
const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.babel').default
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }))
  app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use(express.static(PUBLIC_PATH))
}
app.use(require('body-parser').json())
app.use(express.static(PUBLIC_PATH))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'))
})

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + '...')
})