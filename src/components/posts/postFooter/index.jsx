import React from 'react'
import LikeButton from './likeButton/index.jsx'
import CommentButton from './commentButton/index.jsx'
import { Grid, Likes } from './style'
export default class PostFooter extends React.Component {
  render () {
    return <Grid>
      <div>
        <LikeButton
          isLiked={this.props.isLiked}
          toggleLike={this.props.toggleLike} />
        <CommentButton
          focus={this.props.focus} />
      </div>
      <Likes>
        {this.props.likes} отметок «Нравится»
      </Likes>
    </Grid>
  }
}
