import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'

export default class Buttons extends React.Component {
  render () {
    return <div style={{justifySelf: 'right'}}>
      <FontAwesomeIcon name={'heart'} />
      <FontAwesomeIcon name={'heart'} />
      <FontAwesomeIcon name={'heart'} />
    </div>
  }
}
