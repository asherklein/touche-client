import React, { Component } from 'react'
import { startConvo } from './api'
import { Provider } from 'react-destate'
import rulebook from './ruleBook'
import ScreenManager from './components/screen-manager/ScreenManager'
import Screen from './components/screen-manager/Screen'
import { SCREEN_NAMES } from './screens'
import ConvoListScreen from './components/convos/convo-list'
import NewConvoScreen from './components/convos/new-convo'
const { defineRule } = rulebook
defineRule({ name: 'ConvoList' }, {
  type: 'NEW_CONVOS', convos: [
    { convo_id: 1, topic: 'Abortion' },
    { convo_id: 2, topic: 'Taxes' },
  ]
})
defineRule({ name: 'ConvoList' }, {
  type: 'NEW_CONVOS', convos: [
    { convo_id: 3, topic: 'Abortion & Taxes' }
  ]
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {}, topic: '' }
  }

  render() {
    return (
      <Provider rulebook={rulebook} >
        <ScreenManager goal={{ screenManager: true }}>
          <Screen screenName={SCREEN_NAMES.CONVO_LIST}>
            {() => <ConvoListScreen goal={{ name: 'ConvoList' }} />}
          </Screen>
          <Screen screenName={SCREEN_NAMES.NEW_CONVO}>
            {() => <NewConvoScreen goal={{ name: 'NewConvo' }} />}
          </Screen>
          <div className="App">
            <ConvoListScreen goal={{ name: 'ConvoList' }} />
          </div>
        </ScreenManager>
      </Provider>
    )
  }
}

export default App
