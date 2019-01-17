import React, { Component } from 'react'
import {AppContext} from './Context'

let textStyle = {
  'textAlign': 'center',
  'marginTop': '50vh',
  'fontWeight': 'bold'
}

class App extends Component {
  static contextType = AppContext
  render() {
    return (
      <div style={{...textStyle}}>{this.context.textValue}</div>
    )
  }
}

export default App
