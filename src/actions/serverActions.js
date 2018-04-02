const SET_POSTS = 'SET_POSTS'
const SET_USER = 'SET_USER'

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}
