import React from 'react'
import { Redirect } from 'react-router-dom'
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      status: '',
      message: ''
    }
    this.submitHandle = this.submitHandle.bind(this)
    this.inputHandle = this.inputHandle.bind(this)
  }
  inputHandle (event) {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: target.value
    })
  }

  submitHandle (event) {
    event.preventDefault()
    const authValues = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(authValues)
    }).then(response => {
      return response.json()
    }).then(response => {
      if (response.status === 'SUCCESS') {
        localStorage.token = response.token
      }
      this.setState({...this.state, message: response.message})
    }).catch(error => {
      console.log(error)
    })
  }
  render () {
    if (localStorage.token) {
      return <Redirect to='/' />
    }
    return <div>
      {this.state.message}
      <form onSubmit={this.submitHandle} >
        <input
          value={this.state.username}
          onChange={this.inputHandle}
          name='username'
          type='text'
          placeholder='Username'/>
        <input
          value={this.state.password}
          onChange={this.inputHandle}
          name='password'
          type='password'
          placeholder='Password'/>
        <input
          type='submit'
          value='Отправить'/>
      </form>
    </div>
  }
}
