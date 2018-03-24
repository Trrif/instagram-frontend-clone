import express from 'express'
import path from 'path'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import {AppContainer} from 'react-hot-loader'
import rootReducer from './src/reducers'
import AppConnect from './src/components/index.jsx'
import posts from './src/data/posts'
import user from './src/data/user'

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
}

app.use(require('body-parser').json())
app.use(express.static(PUBLIC_PATH))
app.use(handleRender)

function handleRender (req, res) {
  const defaultState = {
    posts,
    user
  }
  const store = createStore(rootReducer, defaultState)
  const html = renderToString(
    <AppContainer>
      <Provider store={store}>
        <AppConnect />
      </Provider>
    </AppContainer>
  )
  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage (html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js"> </script>
      </body>
    </html>
`
}

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT + '...')
})
