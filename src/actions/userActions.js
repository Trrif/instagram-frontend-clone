const TOOGLE_LIKE = 'TOOGLE_LIKE'

export function toogleLike (username, postId) {
  return {
    type: TOOGLE_LIKE,
    username,
    postId
  }
}
