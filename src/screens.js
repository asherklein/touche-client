import rulebook from './ruleBook'
const { defineRule } = rulebook

export const SCREEN_NAMES = {
    CONVO_LIST: '@@CONVO_LIST',
    CONVO: '@@CONVO',
    NEW_CONVO: '@@NEW_CONVO'
}

export const screenRule = (screenName, screenParams) => defineRule({ screenManager: true }, { type: 'SCREEN_CHANGE', screenName, screenParams })

screenRule(SCREEN_NAMES.CONVO_LIST)

export const goToConvo = (convo_id, point_id) => screenRule(SCREEN_NAMES.CONVO, { convo_id, point_id })
export const goToNewConvo = () => screenRule(SCREEN_NAMES.NEW_CONVO)