// redux
import {createStore} from 'redux'
import rootReducer from './reducers'

// fake data
import posts from './data/posts'
import user from './data/user'
import comments from './data/comments'

const defaultState = {
  posts,
  user: user,
  comments: comments
}
let store = createStore(rootReducer, defaultState)
export default store
