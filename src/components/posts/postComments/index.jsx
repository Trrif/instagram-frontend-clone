import React from 'react'
import Comment from './comment/index.jsx'
import { Grid, CommentForm } from './style'
import TextareaAutosize from 'react-autosize-textarea'

export default class Comments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: '', height: 18}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    if (event.target.value.trim().length === 0 && event.target.value.length === 1) {
      return
    }
    this.setState({value: event.target.value})
  }
  handleSubmit (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      if (this.state.value.trim().length === 0) {
        return
      }
      this.props.insertComment(this.props.username, this.props.postId, this.state.value)
      this.setState({value: ''})
    }
  }
  render () {
    return <Grid>
      {this.props.comments.commentsIds.map((commentId) => {
        return <Comment
          key={commentId}
          comment={this.props.comments[commentId]}
          likes={this.props.comments[commentId].likes}
          username={this.props.username}
          postId={this.props.postId}
          toggleLike={this.props.toggleLike} />
      })}
      <CommentForm>
        <TextareaAutosize
          style={{ minHeight: 20,
            maxHeight: 80,
            border: 'none',
            width: '100%',
            outline: 'none'}}
          placeholder={'Добавьте комментарий...'}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
          innerRef={this.props.input}
          type='text'/>
      </CommentForm>
    </Grid>
  }
}
