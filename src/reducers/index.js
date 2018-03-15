import { posts, comments, user } from './postsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({posts, comments, user})
export default rootReducer
