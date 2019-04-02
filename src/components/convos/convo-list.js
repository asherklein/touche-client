import React from 'react'
import { goToConvo, goToNewConvo } from '../../screens'
import { connect } from 'react-destate'
import { concatterProp } from 'destate-common-reducers'
import { merge, values } from 'ramda'

export const ConvoListItem = ({ convo_id, topic, content, missed, sent_at }) => (
    <li
        onClick={() => goToConvo(convo_id)}
    ><p>{topic}</p>
        <span style={{ fontSize: '70%' }}>{sent_at}</span> 
        <span style={{ fontSize: '70%' }}> {content}</span>
    </li>
)

export const NewConvoButton = (props) => (
    <button
        onClick={goToNewConvo}
    >+</button>
)

export const ConvoList = ({ convos, ...props }) => (
    <ul>
        {values(convos).map(convo => <ConvoListItem key={convo.convo_id} {...convo} {...props} />)}
    </ul>
)

const msgToConvos = (convos = {}, { convo_id, topic, sent_by, sent_at, content }) => merge(convos, { [convo_id]: { convo_id, topic, sent_by, sent_at, content } })
const ConvoListScreen = ({ messages }) => (
    <div>
        <ConvoList convos={messages.reduce(msgToConvos, {})} />
        <NewConvoButton />
    </div>
)

const messages = concatterProp('RECEIVED_MSGS', 'msgs')
export default connect({ messages }, ConvoListScreen)