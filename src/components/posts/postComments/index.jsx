import React from 'react'
import Comment from './comment.jsx'

export default class Comments extends React.Component {
  render () {
    return this.props.commentsIds.map((commentId) => {
      return <Comment
        key={commentId}
        comment={this.props.comments[commentId]} />
    })
  }
}
