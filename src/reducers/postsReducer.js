import * as R from 'ramda'

export const posts = (state = {}, action) => {
  switch (action.type) {
    case 'TOOGLE_LIKE': {
      let lens = R.lensPath(action.path)
      let arrayOfLikes = R.view(lens, state)
      let likeToogler = R.ifElse(
        R.find((username) => username === action.username),
        R.filter((username) => username !== action.username),
        R.insert(0, action.username))
      return R.set(lens, likeToogler(arrayOfLikes), state)
    }
    case 'INSERT_COMMENT': {
      console.log('commentId' + state[action.postId].comments.commentsIds.length)
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: {
            ...state[action.postId].comments,
            commentsIds: [...state[action.postId].comments.commentsIds, 'commentId' + (state[action.postId].comments.commentsIds.length + 1)],
            ['commentId' + (state[action.postId].comments.commentsIds.length + 1)]: {
              id: 'commentId' + state[action.postId].comments.commentsIds.length + 1,
              text: action.text,
              username: action.username
            }
          }
        }
      }
    }
    default: return state
  }
}
export const user = (state = {}, action) => {
  return state
}
