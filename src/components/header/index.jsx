import React from 'react'
import { Grid, Container, Logo } from './style'
import SearchBar from './searchBar/index.jsx'
import Buttons from './buttons/index.jsx'
export default class Header extends React.Component {
  render () {
    return <Container>
      <Grid>
        <div>
          <a href='#'>
            <Logo src='logo.png' alt=''/>
          </a>
        </div>
        <SearchBar />
        <Buttons />
      </Grid>
    </Container>
  }
}
