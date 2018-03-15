import React from 'react'

export default class PostHeader extends React.Component {
  render () {
    return <div>
      <img width='50px' height='50px' src={this.props.postedBy + '.png'} alt=''/>
      {this.props.postedBy}
      {this.props.location}
    </div>
  }
}
