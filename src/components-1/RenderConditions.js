import React, { Component } from 'react'

export class RenderConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: false,
            b: false
        }
    }
    submit(name1) {
        alert(`sucess ${name1}`);
    }
    render() {
        return (
            <div>
                {/* {this.state.a && <button onClick={(e) => this.submit("manu")}>submit button</button>} */}
                {this.state.b?<button onClick={(e) => this.submit("manu")}>submit button</button>:''}
            </div>
        )
    }
}

export default RenderConditions
