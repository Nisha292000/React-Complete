import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';

const EffectHook = () => {
    const [content, setContent] = useState('Users')
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('componentDidMount');
    }, [])

    useEffect(() => {
        console.log('componentDidUpdate');
        fetch('https://jsonplaceholder.typicode.com/' + content)
            .then(response => response.json())
            .then(json => setData(json))
        return () => {
            //cleaning
            console.log('unMount')
        }
    }, [content])

    return (
        <Container>
            <Button variant="secondary" className='m-2' onClick={() => setCount(count + 1)}>Count: {count}</Button>
            <Button variant="warning" className='m-2' onClick={() => setContent('Posts')}>Posts</Button>
            <Button variant="info" className='m-2' onClick={() => setContent('Users')}>Users</Button>
            <Button variant="danger" className='m-2' onClick={() => setContent('Comments')}>Comments</Button>
            <h3>{content}</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>{content === 'Posts' ? 'Title' : 'Name' }</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{content === 'Posts' ? item.title : item.name }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <hr />
        </Container>
    );
}

export default EffectHook