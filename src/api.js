import io from 'socket.io-client'
import rulebook from './ruleBook'
const { defineRule } = rulebook
const socket = io('http://localhost:5000')
console.log('rulebook', rulebook)
export const startConvo = (topic) => socket.emit('startconvo', topic)


// Global received
// New conversation
socket.on('convostarted', (vals) => defineRule({ target: 'convo_list' }, { type: 'convostarted', ...vals}))

