import React from 'react'
import { Mark, PostContent, PostBodyStyle } from './style'
export default class PostBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.toggleVisible = this.toggleVisible.bind(this)
  }
  toggleVisible () {
    this.setState({isVisible: !this.state.isVisible})
  }
  render () {
    return <PostBodyStyle>
      {this.props.marks.map((mark, index) => {
        return <Mark
          key={index}
          isVisible={this.state.isVisible}
          top={mark.x}
          left={mark.y}> {mark.username} </Mark>
      })}
      <PostContent
        isHaveMarks={this.props.marks.length}
        onClick={this.toggleVisible}
        src={this.props.bodyUrl} alt=''/>
    </PostBodyStyle>
  }
}
