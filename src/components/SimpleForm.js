    
import React from 'react'
import { mergeAll, objOf } from 'ramda'
import { connect } from 'react-destate'
import { vals as valsReducer, types } from 'destate-common-reducers'

// React Component
const SimpleForm = ({ valList, children, goal }) => {

    const Form = ({ formVals, me, rulebook: { defineRule } }) => {
        const getInputProps = (name) => ({
            value: formVals[name],
            onChange: ({ target: { value } }) => defineRule(me, { type: types.VALS, ...objOf(name, value) })
        })
        const inputProps = mergeAll(valList.map(name => objOf(name, getInputProps(name))))
        return children({ formVals, inputProps })
    }
    const ConnectedForm = connect({ formVals: valsReducer(valList) }, Form)
    return <ConnectedForm goal={goal} />
}

export default SimpleForm