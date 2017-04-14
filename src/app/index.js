import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'
import './style.scss'

const el = document.getElementById('app')

function render (component) {
  return ReactDOM.render(
    <Router>
      <Route path='/' component={App} />
    </Router>,
    el
  )
}

render(App)

if (process.env.NODE_ENV === 'production') {
  require('autotrack/lib/plugins/outbound-link-tracker')
  require('autotrack/lib/plugins/clean-url-tracker')
  require('autotrack/lib/plugins/max-scroll-tracker')
  require('autotrack/lib/plugins/page-visibility-tracker')
  require('autotrack/lib/plugins/url-change-tracker')
  require('offline-plugin/runtime').install()
}
