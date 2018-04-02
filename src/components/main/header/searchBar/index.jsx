import React from 'react'
import { Container, Input } from './style'
export default class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.onChange = this.onChange.bind(this)
  }
  onChange (event) {
    this.setState({value: event.target.value})
  }
  render () {
    return <Container>
      <Input
        type='text'
        placeholder='Поиск'
        value={this.state.value}
        onChange={this.onChange}/>
    </Container>
  }
}
