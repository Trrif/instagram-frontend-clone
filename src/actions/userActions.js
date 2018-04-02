const TOOGLE_LIKE = 'TOOGLE_LIKE'
const INSERT_COMMENT = 'INSERT_COMMENT'
const NEW_POST = 'NEW_POST'

export function newPost (post, from) {
  return {
    type: NEW_POST,
    post,
    from
  }
}
export function insertComment (username, postId, text, from) {
  return {
    type: INSERT_COMMENT,
    username,
    postId,
    text,
    from
  }
}
export function toogleLike (username, path, from) {
  return {
    type: TOOGLE_LIKE,
    username,
    path,
    from
  }
}
