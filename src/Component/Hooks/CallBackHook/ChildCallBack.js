import React, { useEffect, useState } from 'react'

const ChildCallBack = ({ getItem }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItem)
    }, [getItem])
    return (
        <div className='d-flex'>
            {items && items.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    )
}

export default ChildCallBack