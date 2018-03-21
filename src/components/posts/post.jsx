import React from 'react'
import Comments from './postComments/index.jsx'
import PostFooter from './postFooter/index.jsx'
import PostHeader from './postHeader/index.jsx'
import PostBody from './postBody/index.jsx'
import { Container } from './style'

export default class Post extends React.Component {
  constructor (props) {
    super(props)
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  focusTextInput () {
    this.textInput.focus()
  }
  render () {
    return <Container>
      <PostHeader
        postedBy={this.props.post.postedBy}
        location={this.props.post.location} />
      <PostBody
        bodyUrl={this.props.post.bodyUrl}
        marks={this.props.post.marks} />
      <PostFooter
        toggleLike={() => this.props.toggleLike(this.props.user.username, [this.props.post.id, 'likes'])}
        isLiked={this.props.post.likes.find((username) => username === this.props.user.username)}
        likes={this.props.post.likes.length}
        date={this.props.post.date}
        focus={this.focusTextInput} />
      <Comments
        input={input => { this.textInput = input }}
        comments={this.props.comments}
        username={this.props.user.username}
        insertComment={this.props.insertComment}
        postId={this.props.post.id}
        toggleLike={this.props.toggleLike} />
    </Container>
  }
}
