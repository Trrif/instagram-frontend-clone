import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import CommentIconStyle from './style'
export default class CommentButton extends React.Component {
  render () {
    return <CommentIconStyle onClick={this.props.focus}>
      <FontAwesomeIcon name={'comments'} />
    </CommentIconStyle>
  }
}
