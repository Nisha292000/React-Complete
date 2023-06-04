import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const StateHook = () => {
    const [state, setState] = useState({ count: 0, name: 'Increment' });
    
    // const [count, setCount] = useState(()=>{               // This act as a constructor 
    //     console.log("const")                               // call only one time when html load      
    //     return 0                                           // * it increase performance
    // });

    const increase = () => {
        setState(prevState => ({ ...prevState, name: 'Increment', count: prevState.count + 1 }));
    };

    const decrease = () => {
        setState(prevState => ({ ...prevState, name: 'Decrement', count: prevState.count - 1 }));
    };

    return (
        <Container>
            <h3>{state.name} : {state.count}</h3>
            <Button variant="success" className='m-2' onClick={increase}>Increase</Button>
            <Button variant="primary" className='m-2' onClick={decrease}>Decrease</Button>
            <hr />
        </Container>
    );
};

export default StateHook;
