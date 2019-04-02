import io from 'socket.io-client'
import rulebook from './ruleBook'
import { global_user } from './globals'
console.log('guser', global_user)
const { defineRule } = rulebook

const socket = io('http://localhost:5000')
socket.on('connect', () => {
    socket.emit('authentication', { user_id: global_user.user_id, secret: global_user.secret });
    socket.on('authenticated', (user) => {
       
       defineRule({ global: true }, { type: 'CRED_CHANGE', user } )
    })
  })

const emit = (title, ...params) => new Promise((resolve, reject) => {
    socket.emit(title, ...params, resolve)
}) 
export const startConvo = (topic) => emit('startconvo', topic)
// export const getMessagesForConvo = (convo_id) => emit('getmessages', convo_id)
// .then(messages => {
//     console.log('mesga', messages)
//     defineRule({ name: 'Convo', convo_id }, { type: 'RECEIVED_MSGS', messages })
// })


const receiveMsgs = msgs => defineRule({ msgAccess: true }, { type: 'RECEIVED_MSGS', msgs })
// Global received
// Start up with list
// We will attempt to build everything dynamically from messages for now
socket.on('initmsgs', receiveMsgs)

// socket.on('convolist', (convos) => defineRule({ name: 'ConvoList' }, { type: 'RECEIVED_CONVOS', convos }))
// New conversation
// socket.on('convostarted', (convo) => defineRule({ name: 'ConvoList' }, { type: 'RECEIVED_CONVOS', convos: [convo]}))

