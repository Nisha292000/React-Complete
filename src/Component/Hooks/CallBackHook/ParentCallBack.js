import React, { useCallback, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import ChildCallBack from './ChildCallBack';

const ParentCallBack = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const getItems = useCallback(() => {
        console.log(count1 + 1, count1 - 1)
        return [count1 + 1, count1 - 1];
    }, [count1])

    return (
        <Container>
            <h1>useCallback Hook</h1>
            <Button variant="warning" className='m-2' onClick={() => setCount(count + 1)}>Increase{count + 1}</Button>
            <Button variant="danger" className='m-2' onClick={() => setCount1(count1 - 1)}>Decrease{count1 - 1}</Button>
            <ChildCallBack getItem={getItems} />
            <hr />
        </Container>
    );
}

export default ParentCallBack