import React from 'react'

// sets up a empty context but can be modifined with default values
export const AppContext = React.createContext()

// this can be on the seperate file
export default class ContextWrap extends React.Component {
  state = {
    textValue : `im a text from context`
  }
  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
