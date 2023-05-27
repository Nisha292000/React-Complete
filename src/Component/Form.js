import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [course, setCourse] = useState('');
    const [courseError, setCourseError] = useState('');
    const [feedback, setFeedback] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (name === '') {
            setNameError('Field is Required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (course === '') {
            setCourseError('Please select a course');
            isValid = false;
        } else {
            setCourseError('');
        }

        return isValid;
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
        setCourseError('');
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert(`${name} ${course} ${feedback}`);
            setName('');
            setCourse('');
            setFeedback('');
        }
    };

    return (
        <Container>
            <h3>Form</h3>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleNameChange} />
                        {nameError && <Alert variant="danger">{nameError}</Alert>}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Course</Form.Label>
                        <Form.Select value={course} onChange={handleCourseChange}>
                            <option value="">Select a course</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="java">Java</option>
                            <option value="vue">Vue</option>
                            <option value="python">Python</option>
                        </Form.Select>
                        {courseError && <Alert variant="danger">{courseError}</Alert>}
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control type="text" value={feedback} onChange={handleFeedbackChange} />
                    </Form.Group>
                </Row>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
            <hr/>
        </Container>
    );
};

export default FormComponent;
