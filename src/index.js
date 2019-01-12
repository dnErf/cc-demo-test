import './styles/style.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import ContextWrap from './components/Context'

ReactDOM.render(

    <div className="app">
      <ContextWrap>
        <App />
      </ContextWrap>
    </div>

  , document.getElementById('root')
)
