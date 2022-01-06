import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "click form class"
        }
    }

    componentDidMount(){
        this.setState({title:'updated from class'});
    }
    render() {
        return (
            <div>
                <button>{this.state.title}</button>
            </div>
        )
    }
}

export default ClassComponent;