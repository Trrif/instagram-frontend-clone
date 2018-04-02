import posts from './postsReducer'
import user from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({posts, user})
export default rootReducer
