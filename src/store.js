// redux
import {createStore} from 'redux'
import rootReducer from './reducers'

// fake data
import posts from './data/posts'
import user from './data/user'

const defaultState = {
  posts,
  user
}
let store = createStore(rootReducer, defaultState)
export default store
