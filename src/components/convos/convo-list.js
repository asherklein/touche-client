import React from 'react'
import { goToConvo, goToNewConvo } from '../../screens'
import { connect } from 'react-destate'
import { concatterProp } from 'destate-common-reducers'

export const ConvoListItem = ({ convo_id, topic, last, missed, time }) => (
    <li
        onClick={() => goToConvo(convo_id)}
    >{topic}</li>
)

export const NewConvoButton = (props) => (
    <button
        onClick={goToNewConvo}
    >+</button>
)

export const ConvoList = ({ convos, ...props }) => (
    <ul>
        {convos.map(convo => <ConvoListItem key={convo.convo_id} {...convo} {...props} />)}
    </ul>
)

const ConvoListScreen = ({ convos }) => (
    <div>
        <ConvoList convos={convos} />
        <NewConvoButton />
    </div>
)

const convos = concatterProp('NEW_CONVOS', 'convos')
export default connect({ convos }, ConvoListScreen)