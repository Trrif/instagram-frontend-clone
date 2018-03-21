import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import LikeIconStyle from './style'
export default class LikeButton extends React.Component {
  render () {
    return <LikeIconStyle
      isSmall={this.props.isSmall}
      onClick={this.props.toggleLike}
      isLiked={this.props.isLiked}>
      <FontAwesomeIcon name={'heart'} />
    </LikeIconStyle>
  }
}
