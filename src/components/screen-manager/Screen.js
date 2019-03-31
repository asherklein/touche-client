import React from 'react'
import PropTypes from 'prop-types'
const Screen = ({ screenParams, children }) => children(screenParams)

Screen.propTypes = {
    children: PropTypes.func.isRequired
}
export default Screen