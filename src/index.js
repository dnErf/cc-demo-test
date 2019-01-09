import './styles/style.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
  <Router>
    <div className="app">
      <Route exact path="/" component={App} />
    </div>
  </Router>
  , document.getElementById('root')
)
