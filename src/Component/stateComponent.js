import React, { Component } from 'react';

class StateComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            heading: 'State',
            age:props.age
        };
    }
    changeState(){
        this.setState({heading:"Update State", age:this.state.age+1})
    }
    render() {
        return (
            <>
                <h3>{this.state.heading} {this.state.age}</h3>
                <button onClick={()=>this.changeState()}>Update State</button>
            </>
        );
    }
}

export default StateComponent;
