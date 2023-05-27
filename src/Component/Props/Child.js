import React from 'react'

function Child (props) {
    return (
        <div>
            <h1>Child</h1>
            <button onClick={()=>props.greet('child')}>Greeting</button>
        </div>
    )
}

export default Child