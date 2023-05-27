import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [feedback,setFeedback] = useState('')
    const nameChange = (e) => {
        setName(e.target.value);
    }

    const courseChange = (e) => {
        setCourse(e.target.value);
    }

    const feedbackChange = (e) => {
        setFeedback(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${name} ${course} ${feedback}`)
    }
    return (
        <>
            <div>Form</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type='text' value={name} onChange={nameChange}/>
                </div>
                <div>
                    <label>Course: </label>
                    <select value={course} onChange={courseChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='java'>Java</option>
                        <option value='vue'>Vue</option>
                        <option value='python'>Python</option>
                    </select>
                </div>
                <div>
                    <label>Feedback: </label>
                    <input type='text' value={feedback} onChange={feedbackChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form