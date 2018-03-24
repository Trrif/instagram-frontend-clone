import * as R from 'ramda'

export const posts = (state = {}, action) => {
  switch (action.type) {
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
      const commentId = 'commentId' + Object.keys(state[action.postId].comments).length
      const comment = {
        id: commentId,
        text: action.text,
        username: action.username
      }
      const insertComment = R.compose(
        R.merge({[commentId]: comment})
      )
      return R.set(lens, insertComment(comments), state)
    }
    default: return state
  }
}
export const user = (state = {}, action) => {
  return state
}
