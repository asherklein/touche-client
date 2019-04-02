import rulebook from './ruleBook'
import { lastOfProp } from 'destate-common-reducers'
const { defineRule, subscribe } = rulebook

const urlParams = new URLSearchParams(window.location.search)
const user_id = urlParams.get('user_id')
const secret = urlParams.get('secret')
if(user_id) localStorage.setItem('user', JSON.stringify({ user_id, secret }))

export var global_user = JSON.parse(localStorage.getItem('user'))
defineRule({ global: true }, { type: 'CRED_CHANGE', user: global_user })
subscribe({ global: true }, 
    {
        user: lastOfProp('CRED_CHANGE', 'user')
    }, ({ user }) => { 
        global_user = user
        localStorage.setItem('user', JSON.stringify(user))
        console.log('guser2', global_user)
    }
)
