import React, { Component } from 'react'
import { startConvo } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { data: {}, topic: '' }
  }

  render() {
    return (
      <div className="App">
      <input onChange={({ target: { value }}) => this.setState({ topic: value })}/>
      <button 
        onClick={() => startConvo(this.state.topic)}
      >Start Convo</button>
      {JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default App
