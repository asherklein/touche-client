import React, { Component } from 'react'
import { startConvo } from './api'
import { Provider } from 'react-destate'
import rulebook from './ruleBook'
import ScreenManager from './components/screen-manager/ScreenManager'
import Screen from './components/screen-manager/Screen'
import { SCREEN_NAMES } from './screens'
import ConvoListScreen from './components/convos/convo-list'
import NewConvoScreen from './components/convos/new-convo'
import ConvoScreen from './components/chat/chat'

const { defineRule } = rulebook

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
          <Screen screenName={SCREEN_NAMES.CONVO}>
            {({ convo_id }) => <ConvoScreen goal={{ name: 'Convo', convo_id }} convo_id={convo_id} />}
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
