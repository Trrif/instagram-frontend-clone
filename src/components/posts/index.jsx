import { connect } from 'react-redux'
import React from 'react'
import Post from './post.jsx'
import { toogleLike } from '../../actions/userActions'

class Posts extends React.Component {
  render () {
    return this.props.posts.postsIds.map((post) => {
      return <Post
        key={post}
        post={this.props.posts[post]}
        comments={this.props.comments}
        user={this.props.user}
        toggleLike={this.props.toogleLike} />
    })
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    user: state.user
  }
}
const PostsConnect = connect(mapStateToProps, {toogleLike})(Posts)
export default PostsConnect
