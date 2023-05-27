import React from 'react';
import { Button } from 'react-bootstrap';

function Child(props) {
    return (
        <>
            <h1>Child</h1>
            <Button variant="primary" onClick={() => props.greet('child')}>
                Greeting
            </Button>
        </>
    );
}

export default Child;