import React from 'react'
import Posts from './posts/index.jsx'
import { connect } from 'react-redux'
import Header from './header/index.jsx'
import { Grid, ContentGrid, Container } from './style'
import { toogleLike, insertComment } from '../actions/userActions'

class App extends React.Component {
  render () {
    return <Container>
      <Header/>
      <Grid>
        <ContentGrid>
          <div>
            <Posts
              posts={this.props.posts}
              user={this.props.user}
              toogleLike={this.props.toogleLike}
              insertComment={this.props.insertComment}/>
          </div>
          <div>
          navigation
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
const AppConnect = connect(mapStateToProps, {toogleLike, insertComment})(App)
export default AppConnect
