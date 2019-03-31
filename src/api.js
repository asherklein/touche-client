import io from 'socket.io-client'
import rulebook from './ruleBook'
const { defineRule } = rulebook
const socket = io('http://localhost:5000')
console.log('rulebook', rulebook)
const emit = (title, ...params) => new Promise((resolve, reject) => {
    socket.emit(title, ...params, resolve)
}) 
export const startConvo = (topic) => emit('startconvo', topic)


// Global received
// New conversation
socket.on('convostarted', (vals) => defineRule({ target: 'convo_list' }, { type: 'convostarted', ...vals}))

