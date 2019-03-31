import io from 'socket.io-client'
import { defineRule } from './ruleBook'
const socket = io('http://localhost:5000')

export const startConvo = (topic) => socket.emit('startconvo', topic)


// Global received
// New conversation
socket.on('convostarted', (vals) => defineRule({ target: 'convo_list' }, { type: 'convostarted', ...vals}))

