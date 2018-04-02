import React from 'react'
import { Grid, PostedBy, PostedFrom, PostedInfo, PostedByImg } from './style'
export default class PostHeader extends React.Component {
  render () {
    return <Grid>
      <PostedByImg src={this.props.postedBy + '.jpg'} alt=''/>
      <PostedInfo>
        <PostedBy> {this.props.postedBy} </PostedBy>
        <PostedFrom> {this.props.location} </PostedFrom>
      </PostedInfo>
    </Grid>
  }
}
