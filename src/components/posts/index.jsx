import React from 'react'
import Post from './post.jsx'

export default class Posts extends React.Component {
  render () {
    return Object.keys(this.props.posts).map((post) => {
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
