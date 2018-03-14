const TOOGLE_LIKE = 'TOOGLE_LIKE'

export function toogleLike(nickname, postId){
  return {
    type: TOOGLE_LIKE,
    nickname,
    postId
  }
}
