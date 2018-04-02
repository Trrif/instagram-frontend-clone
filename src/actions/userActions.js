const TOOGLE_LIKE = 'TOOGLE_LIKE'
const INSERT_COMMENT = 'INSERT_COMMENT'
const NEW_POST = 'NEW_POST'

export function newPost (post) {
  return {
    type: NEW_POST,
    post
  }
}
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
