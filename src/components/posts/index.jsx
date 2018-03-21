import { connect } from 'react-redux'
import React from 'react'
import Post from './post.jsx'
import { toogleLike, insertComment } from '../../actions/userActions'

class Posts extends React.Component {
  render () {
    return this.props.posts.postsIds.map((post) => {
      return <Post
        key={post}
        post={this.props.posts[post]}
        comments={this.props.posts[post].comments}
        insertComment={this.props.insertComment}
        user={this.props.user}
        toggleLike={this.props.toogleLike} />
    })
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user
  }
}
const PostsConnect = connect(mapStateToProps, {toogleLike, insertComment})(Posts)
export default PostsConnect
