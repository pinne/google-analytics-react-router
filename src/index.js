import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css'
import App from './App'
import Home from './Home'
import About from './About'
import Products from './Products'
import registerServiceWorker from './registerServiceWorker'

if (process.env.REACT_APP_TARGET === 'deploy') {
  ReactGA.initialize('UA-819513-8')
}

function logPageView () {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='products' component={Products} />
    </Route>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
