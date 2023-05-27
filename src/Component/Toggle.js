import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Toggle = () => {
    const [show, setShow] = useState(true);

    const toggle = (action) => {
        if (action === 'show') {
            setShow(true);
        } else if (action === 'hide') {
            setShow(false);
        } else {
            setShow(!show);
        }
    };

    return (
        <Container>
            <div>Toggle</div>
            {show && <h3>Show Hide and Toggle</h3>}
            <Button className="btn-success m-2" onClick={() => toggle('show')}>Show</Button>
            <Button className="btn-danger m-2" onClick={() => toggle('hide')}>Hide</Button>
            <Button className="btn-warning m-2" onClick={() => toggle('toggle')}>Toggle</Button>
            <hr />
        </Container>
    );
};

export default Toggle;
