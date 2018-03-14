//react
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

//redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

//mainComponent
import App from './components'

let store = createStore(reducers)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
