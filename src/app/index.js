import {BrowserRouter as Router, Route} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import './style.scss'

const el = document.getElementById('app')

function render (component) {
  return ReactDOM.render(
    <AppContainer>
      <Router>
        <Route pattern='/' component={App} />
      </Router>
    </AppContainer>,
    el
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
} else {
  require('autotrack/lib/plugins/outbound-link-tracker')
  require('autotrack/lib/plugins/clean-url-tracker')
  require('autotrack/lib/plugins/max-scroll-tracker')
  require('autotrack/lib/plugins/page-visibility-tracker')
  require('autotrack/lib/plugins/url-change-tracker')
  require('offline-plugin/runtime').install()
}
