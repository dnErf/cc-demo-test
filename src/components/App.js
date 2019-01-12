import React, { Component } from 'react'
import {AppContext} from './Context'

class App extends Component {
  static contextType = AppContext
  render() {
    return (
      <div>{this.context.textValue}</div>
    )
  }
}

export default App
