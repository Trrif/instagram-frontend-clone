export default function posts(state = {}, action) {
  switch (action.type) {
    case 'TOOGLE_LIKE':
      return { ...state,
        [action.postId]: {
          ...state[action.postId],
          like: !state[action.postId].like,
          likesByNicknames: !state[action.postId].like ? [...state[action.postId].likesByNicknames, action.nickname] :
            state[action.postId].likesByNicknames.filter((id) => id !== action.nickname)
        }
      }
  }
}