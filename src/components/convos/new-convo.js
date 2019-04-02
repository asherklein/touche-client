import React from 'react'
import SimpleForm from '../SimpleForm'
import { startConvo } from '../../api'
import { goToConvo } from '../../screens'

const NewConvoScreen = () => (
    <SimpleForm valList={['topic', 'initial']} goal={{ name: 'newConvoForm' }}>
        {({ formVals, inputProps }) => (<form
            onSubmit={e => {
                e.preventDefault()
                const { topic, initial } = formVals
                startConvo(topic, initial)
                .then(({ convo_id }) => goToConvo(convo_id)) 
            }}
        >
            <input placeholder={'Topic'} {...inputProps['topic']} />
            <input placeholder={'Make your argument...'} {...inputProps['initial']} />
            <button type='submit'>Next</button>
        </form>)}
    </SimpleForm>
)

export default NewConvoScreen