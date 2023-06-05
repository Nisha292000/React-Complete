import React, { createContext } from 'react'
import { Container } from 'react-bootstrap'
import D from './D'

const name = createContext();
const hook = createContext();
const A = () => {
    return (
        <Container>
            <name.Provider value="useContext">
                <hook.Provider value="Hook">
                    <D />
                </hook.Provider>
            </name.Provider>
            <hr />
        </Container>
    )
}

export default A
export { name, hook };