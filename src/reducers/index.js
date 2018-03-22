import { posts, user } from './postsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({posts, user})
export default rootReducer
