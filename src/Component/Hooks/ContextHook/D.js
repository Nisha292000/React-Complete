import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { name,hook } from './A'

const D = () => {
    const firstName = useContext(name);
    const Hook = useContext(hook);
    return(
        <Container>
            <h1>{firstName} {Hook}</h1>
        </Container>
    )
}

export default D