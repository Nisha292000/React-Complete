import React, { useState } from 'react'

const Toggle = () => {
    const [show,setShow]=useState(true)
    const toggle = (action) => {
        if(action==='show'){
            setShow(true)
        }else if(action==='hide'){
            setShow(false)
        }else{
            setShow(!show)
        }
    }
    return (
        <>
            <div>Toggle</div>
            {show && <h3>Show Hide and Toggle</h3>}
            <button onClick={()=>toggle('show')}>Show</button>
            <button onClick={()=>toggle('hide')}>Hide</button>
            <button onClick={()=>toggle('toggle')}>Toggle</button>
        </>
    )
}

export default Toggle;