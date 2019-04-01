import io from 'socket.io-client'
import rulebook from './ruleBook'
const { defineRule } = rulebook
const socket = io('http://localhost:5000')
console.log('rulebook', rulebook)
const emit = (title, ...params) => new Promise((resolve, reject) => {
    socket.emit(title, ...params, resolve)
}) 
export const startConvo = (topic) => emit('startconvo', topic)
export const getMessagesForConvo = (convo_id) => emit('getmessages', convo_id)
.then(messages => {
    console.log('mesga', messages)
    defineRule({ name: 'Convo', convo_id }, { type: 'RECEIVED_MSGS', messages })
})


// Global received
// Start up with list
socket.on('convolist', (convos) => defineRule({ name: 'ConvoList' }, { type: 'RECEIVED_CONVOS', convos }))
// New conversation
socket.on('convostarted', (convo) => defineRule({ name: 'ConvoList' }, { type: 'RECEIVED_CONVOS', convos: [convo]}))

