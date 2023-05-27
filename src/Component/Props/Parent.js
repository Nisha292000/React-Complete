import React from 'react';
import Child from './Child';
import { Container } from 'react-bootstrap';

function Parent(props) {
    const handleGreet = (childName) => {
        alert(`Good morning ${childName}`);
    };

    return (
        <Container>
            <h1>Parent {props.children}</h1>        // There is pass child as props
            <Child greet={handleGreet} />
            <hr />
        </Container>
    );
}

export default Parent;
