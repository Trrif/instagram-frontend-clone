import React from 'react'

export default class PostBody extends React.Component {
  render () {
    return <div>
      <img src={this.props.bodyUrl} alt=''/>
    </div>
  }
}
