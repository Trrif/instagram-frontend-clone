// react
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import {AppContainer} from 'react-hot-loader'

// redux
import {Provider} from 'react-redux'

// store
import store from './store'

// mainComponent
import AppConnect from './components/index.jsx'

hydrate(
  <AppContainer>
    <Provider store={store}>
      <AppConnect />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
