import * as R from 'ramda'
const posts = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_POST': {
      return {
        ...state,
        ...action.post
      }
    }
    case 'SET_POSTS': {
      return action.posts
    }
    case 'TOOGLE_LIKE': {
      const lens = R.lensPath(action.path)
      const arrayOfLikes = R.view(lens, state)
      const likeToogler = R.ifElse(
        R.find((username) => username === action.username),
        R.filter((username) => username !== action.username),
        R.insert(R.last, action.username))
      return R.set(lens, likeToogler(arrayOfLikes), state)
    }
    case 'INSERT_COMMENT': {
      const lens = R.lensPath([action.postId, 'comments'])
      const comments = R.view(lens, state)
      const commentId = 'commentId' + (state[action.postId].comments ? Object.keys(state[action.postId].comments).length : 0)
      const comment = {
        id: commentId,
        text: action.text,
        username: action.username
      }
      return R.set(lens, R.assoc(commentId, comment, comments), state)
    }
    default: return state
  }
}
export default posts
