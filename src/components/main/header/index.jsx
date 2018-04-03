import React from 'react'
import { Grid, Container, Logo } from './style'
export default class Header extends React.Component {
  render () {
    return <Container>
      <Grid>
        <div>
          <a href='#'>
            <Logo src='logo.png' alt=''/>
          </a>
        </div>
      </Grid>
    </Container>
  }
}
