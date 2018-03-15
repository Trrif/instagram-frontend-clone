export const posts = (state = {}, action) => {
  switch (action.type) {
    case 'TOOGLE_LIKE':
      return { ...state,
        [action.postId]: {
          ...state[action.postId],
          isLiked: !state[action.postId].isLiked,
          likesByUsernames: !state[action.postId].isLiked ? [...state[action.postId].likesByUsernames, action.username]
            : state[action.postId].likesByUsernames.filter((id) => id !== action.username)
        }
      }
    default: return state
  }
}
export const user = (state = {}, action) => {
  return state
}
export const comments = (state = {}, action) => {
  return state
}
