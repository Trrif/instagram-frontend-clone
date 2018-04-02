import React from 'react'
import { Grid, UserInfo, Username, Fullname, UserAvatar, Container } from './style'

export default class Sidebar extends React.Component {
  render () {
    return <Grid>
      <Container>
        <UserAvatar
          src={this.props.username + '.jpg'}
          alt='' />
        <UserInfo>
          <Username>
            {this.props.username}
          </Username>
          <Fullname>
            {this.props.fullname}
          </Fullname>
        </UserInfo>
      </Container>
    </Grid>
  }
}
