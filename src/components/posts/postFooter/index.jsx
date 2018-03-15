import React from 'react'
import LikeButton from './likeButton.jsx'

export default class PostFooter extends React.Component {
  render () {
    return <div>
      <LikeButton
        isLiked={this.props.isLiked}
        toggleLike={this.props.toggleLike} />
      Likes: {this.props.likes}
      Date: {this.props.date}
    </div>
  }
}
