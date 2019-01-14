import React, { Component } from 'react'
import {AppContext} from './Context'

let ds = {
  'textAlign': 'center' ,
  'marginTop': '50vh'
}

class App extends Component {
  static contextType = AppContext
  render() {
    return (
      <div style={{...ds}}>{this.context.textValue}</div>
    )
  }
}

export default App
