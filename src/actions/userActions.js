const TOOGLE_LIKE = 'TOOGLE_LIKE'
const INSERT_COMMENT = 'INSERT_COMMENT'
export function insertComment (username, postId, text) {
  return {
    type: INSERT_COMMENT,
    username,
    postId,
    text
  }
}
export function toogleLike (username, path) {
  return {
    type: TOOGLE_LIKE,
    username,
    path
  }
}
