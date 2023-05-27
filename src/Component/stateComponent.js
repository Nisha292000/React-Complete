import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: 'State',
            age: props.age
        };
    }

    changeState() {
        this.setState({ heading: 'Update State', age: this.state.age + 1 });
    }

    render() {
        return (
            <Container>
                <h3>
                    {this.state.heading} {this.state.age}
                </h3>
                <Button variant="warning" onClick={() => this.changeState()}>
                    Update State
                </Button>
                <hr />
            </Container>
        );
    }
}

export default StateComponent;
