import React from 'react'
import Child from './Child'

function Parent () {
    const handleGreet = (childName) => {
        alert(`good morning ${childName}`);
    }
    return (
        <div>
            <h1>Parent</h1>
            <Child greet={handleGreet}/>
        </div>
    )
}

export default Parent