import rulebook from './ruleBook'
const { defineRule } = rulebook

export const SCREENS = {
    CONVO: '@@CONVO',
    NEW_CONVO: '@@NEW_CONVO'
}

export const screenRule = (screen, params) => defineRule({ screenRule: true }, { type: 'CHANGE_SCREEN', screen, ...(params || {}) })

export const goToConvo = (id) => screenRule(defineRule, SCREENS.CONVO, { id })
export const goToNewConvo = () => screenRule(defineRule, SCREENS.NEW_CONVO)