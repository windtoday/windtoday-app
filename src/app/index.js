import {Router, Route, browserHistory} from 'react-router'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import './style.scss'

const el = document.getElementById('app')

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </AppContainer>,
  el
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <Router history={browserHistory}>
          <Route path='/' component={NextApp} />
        </Router>
      </AppContainer>,
      el
    )
  })
}
