// redux
import {createStore} from 'redux'
import rootReducer from './reducers'

// redux server preload data
const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)
let store = createStore(rootReducer, preloadedState)
export default store
