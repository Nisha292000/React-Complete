import React, { useMemo, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const MemoHook = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const increase = () => {
        setCountOne(countOne + 1);
    };

    const decrease = () => {
        setCountTwo(countTwo - 1);
    };

    const isEven = useMemo(() => {
        return countOne % 2 === 0;
    }, [countOne]);


    return (
        <Container>
            <h1>useMemo Hook</h1>
            <Button variant="success" className="m-2" onClick={increase}>Count one {countOne}</Button>
            {isEven ? 'Even' : 'Odd'}
            <Button variant="primary" className="m-2" onClick={decrease}>Count two {countTwo}</Button>
            <hr />
        </Container>
    );
};

export default MemoHook;
