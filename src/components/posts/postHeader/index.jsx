import React from 'react'
import { Grid, PostedBy, PostedFrom, PostedInfo } from './style'
export default class PostHeader extends React.Component {
  render () {
    return <Grid>
      <img width='30px' height='30px' src={this.props.postedBy + '.png'} alt=''/>
      <PostedInfo>
        <PostedBy> {this.props.postedBy} </PostedBy>
        <PostedFrom> {this.props.location} </PostedFrom>
      </PostedInfo>
    </Grid>
  }
}
