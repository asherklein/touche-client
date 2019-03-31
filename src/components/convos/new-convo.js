import React from 'react'
import SimpleForm from '../SimpleForm'
import { startConvo } from '../../api'
import { goToConvo } from '../../screens'

const NewConvoScreen = () => (
    <SimpleForm valList={['topic']} goal={{ name: 'newConvoForm' }}>
        {({ formVals, inputProps }) => (<form
            onSubmit={e => {
                e.preventDefault()
                startConvo(formVals['topic'])
                .then(({ convo_id }) => goToConvo(convo_id)) 
            }}
        >
            <input {...inputProps['topic']} />
            <button type='submit'>Next</button>
        </form>)}
    </SimpleForm>
)

export default NewConvoScreen