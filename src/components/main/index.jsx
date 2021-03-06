// react
import React from 'react'
import { connect } from 'react-redux'

// redux
import { toogleLike, insertComment } from '../../actions/userActions'
import { setPosts, setUser } from '../../actions/serverActions'

// socket.io
import socket from './socketIo'

// components
import Posts from './posts/index.jsx'
import Header from './header/index.jsx'
import Sidebar from './sidebar/index.jsx'

// styled components
import { Grid, ContentGrid, Container } from './style'

class App extends React.Component {
  componentDidMount () {
    socket.on('newComment', (payload) => {
      this.props.insertComment(payload.username, payload.postId, payload.text, 'socket')
    })
    socket.on('toggleLike', (payload) => {
      this.props.toogleLike(payload.username, payload.path, 'socket')
    })
    fetch('initialState', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({token: localStorage.token})
    }).then(response => {
      return response.json()
    }).then(response => {
      socket.emit('specifyUser', response.user)
      this.props.setPosts(response.posts)
      this.props.setUser(response.user)
      if (response.token !== undefined) {
        localStorage.token = response.token
      }
    }).catch(error => {
      console.log(error)
    })
  }
  render () {
    return <Container>
      <Header/>
      <Grid>
        <ContentGrid>
          <div>
            <Posts
              {...this.props}/>
          </div>
          <div>
            <Sidebar
              username={this.props.user.username}
              fullname={this.props.user.name + ' ' + this.props.user.subName}/>
          </div>
        </ContentGrid>
      </Grid>
    </Container>
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user
  }
}
const AppConnect = connect(mapStateToProps, {toogleLike, insertComment, setPosts, setUser})(App)
export default AppConnect
