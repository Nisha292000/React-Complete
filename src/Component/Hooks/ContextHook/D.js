import React, { useContext } from 'react'
import { name,hook } from './A'

const D = () => {
    const firstName = useContext(name);
    const Hook = useContext(hook);
    return(
        <>
            <h1>{firstName} {Hook}</h1>
        </>
    )
}

export default D