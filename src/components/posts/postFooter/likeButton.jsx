import React from 'react'

export default class LikeButton extends React.Component {
  render () {
    return <div onClick={this.props.toggleLike}> {this.props.isLiked ? 'true' : 'false'} </div>
  }
}
