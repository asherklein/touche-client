import React from 'react'
import { connect } from 'react-destate'
import { concatterProp } from 'destate-common-reducers'
import { getMessagesForConvo } from '../../api'
const MessageBubble = ({ sentBy, sentAt, content }) => (
    <div
    >
        <span>{sentBy}</span><span>{sentAt}</span>
        <p>{content}</p>
    </div>
)

const AttackOptions = ({ from, to, supportCount, opposeCount }) => (
    <div>
        <span><button>+1</button>{supportCount}</span>
        <span><button>-1</button>{opposeCount}</span>
    </div>
)

class Messages extends React.Component {
    
    componentDidMount = () => {
        const { convo_id } = this.props
        console.log('convo_id', convo_id)
        // getMessagesForConvo(convo_id)
    }
    render() {
        const { messages } = this.props
        return <ul>
            {messages.map(msg => <p key={msg.message_id}>{JSON.stringify(msg)}</p>)}
        </ul>
    }
}
export default connect({ messages: concatterProp('RECEIVED_MSGS', 'msgs') }, Messages)