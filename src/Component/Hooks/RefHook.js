import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const RefHook = () => {
    const inputRef = useRef();

    const handleChange = () => {
        inputRef.current.focus();
        inputRef.current.style.color="#9CCC65"
        inputRef.current.style.border="2px solid teal"
        inputRef.current.style.display="block"
        console.log(inputRef.current.value)
    };

    return (
        <Container>
            <h1>useRef Hook</h1>
            <div className="d-flex">
                <Form.Control type="password" ref={inputRef} className="w-25 me-3"/>
                <Button variant="info" onClick={handleChange}>Click Me</Button>
            </div>
            <hr />
        </Container>
    );
};

export default RefHook;