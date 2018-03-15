import React from 'react'
import Comments from './postComments/index.jsx'
import PostFooter from './postFooter/index.jsx'
import PostHeader from './postHeader/index.jsx'
import PostBody from './postBody/index.jsx'

export default class Post extends React.Component {
  render () {
    return <div>
      <PostHeader
        postedBy={this.props.post.postedBy}
        location={this.props.post.location} />
      <PostBody bodyUrl={this.props.post.bodyUrl} />
      <PostFooter
        toggleLike={() => this.props.toggleLike(this.props.user.username, this.props.post.id)}
        isLiked={this.props.post.isLiked}
        likes={this.props.post.likesByUsernames.length}
        date={this.props.post.date} />
      <Comments
        comments={this.props.comments}
        commentsIds={this.props.post.commentsIds} /> </div>
  }
}
