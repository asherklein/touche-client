import React, { Component } from 'react'
import { startConvo } from './api'
import { Provider } from 'react-destate'
import rulebook from './ruleBook'
import ConvoListScreen from './components/convos/convo-list'
const { defineRule } = rulebook
defineRule({ name: 'ConvoList' }, { type: 'NEW_CONVOS', convos: [
  { convo_id: 1, topic: 'Abortion' },
  { convo_id: 2, topic: 'Taxes' },
]})
defineRule({ name: 'ConvoList' }, { type: 'NEW_CONVOS', convos: [
  { convo_id: 3, topic: 'Abortion & Taxes' }
]})
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {}, topic: '' }
  }

  render() {
    return (
      <Provider rulebook={rulebook} >
        <div className="App">
          <ConvoListScreen goal={{ name: 'ConvoList' }}/>
        </div>
      </Provider>
    )
  }
}

export default App
