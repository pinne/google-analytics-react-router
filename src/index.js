import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Router, Route, hashHistory } from 'react-router'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactGA.initialize('UA-819513-8')

function logPageView () {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
