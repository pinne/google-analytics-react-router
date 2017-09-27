import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.css'
import App from './App'
import Home from './Home'
import About from './About'
import registerServiceWorker from './registerServiceWorker'

if (process.env.REACT_APP_TARGET === 'deploy') {
  ReactGA.initialize('UA-819513-8')
}

function logPageView () {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
