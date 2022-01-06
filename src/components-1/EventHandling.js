import React, { Component } from 'react'

export class EventHandling extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.submit();
    // }
    submit(name1) {
        alert(`sucess ${name1}`);
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.submit.bind(this)}>submit button</button> */}
                <button onClick={(e) => this.submit("manu")}>submit button</button>
            </div>
        )
    }
}

export default EventHandling
