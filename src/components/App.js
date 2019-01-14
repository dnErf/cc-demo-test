import React, { Component } from 'react'
import {AppContext} from './Context'

class App extends Component {
  static contextType = AppContext
  render() {
    return (
      <div style={{'fontWeight':'bold'}}>{this.context.textValue}</div>
    )
  }
}

export default App
