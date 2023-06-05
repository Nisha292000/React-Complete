import React, { useReducer } from 'react';
import { Container, Button } from 'react-bootstrap';

const ReducerHook = () => {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container>
            <h1>useReducer Hook</h1>
            <h3>{state.count}</h3>
            <Button variant="success" className='m-2' onClick={() => dispatch({ type: 'increment' })}>
                Increase
            </Button>
            <Button variant="primary" className='m-2' onClick={() => dispatch({ type: 'decrement' })}>
                Decrease
            </Button>
            <hr />
        </Container>
    );
};

export default ReducerHook;
