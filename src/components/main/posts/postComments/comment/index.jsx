import React from 'react'
import { Username, CommentStyle, Text } from './style'

export default class Comment extends React.Component {
  render () {
    return <CommentStyle>
      <Username>
        {this.props.comment.username}
      </Username>
      <Text>
        {this.props.comment.text}
      </Text>
    </CommentStyle>
  }
}
