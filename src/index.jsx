// react
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

// redux
import {Provider} from 'react-redux'

// store
import store from './store'

// mainComponent
import AppConnect from './components/main/index.jsx'
import Login from './components/login/index.jsx'

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
)
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <MainRoute exact path='/' component={AppConnect} />
          <LoginRoute exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
