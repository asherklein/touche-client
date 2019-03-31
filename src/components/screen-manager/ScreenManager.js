import React from 'react'
import { connect } from 'react-destate'
import { lastOf } from 'destate-common-reducers'

const ScreenManager = ({ children, currentScreen: { screenName, screenParams = {} } }) => {
    console.log('scrrenNAme', screenName)
    return React.Children.toArray(children)
    .filter(screen => screen.props.screenName == screenName)
    .map(screen => React.cloneElement(screen, { screenParams }))
}  

export default connect({ currentScreen: lastOf('SCREEN_CHANGE') }, ScreenManager)