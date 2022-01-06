import React, { Component } from 'react'

export class FormControl extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            pwd: "",
            userNameFromUser: "",
            passwordNameFromUser: ""
        }
    }
    eventHandular = (e) => {
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    submitHandular = (e) => {
        e.preventDefault();
        console.log(`${this.state.userName}  ${this.state.pwd}`);
        this.setState({
            userNameFromUser : this.state.userName,
            passwordNameFromUser: this.state.pwd
        })
    }
    render() {
        return (
            <div>
                <input type="text" id='name' placeholder='userName' value={this.state.userName} onChange={this.eventHandular} name='userName'></input>
                <input type="password" id='pass' placeholder='password' value={this.state.pwd} onChange={this.eventHandular} name='pwd'></input>
                <button onClick={this.submitHandular}>submit</button>
                <p>{this.state.userNameFromUser}</p>
                <p>{this.state.passwordNameFromUser}</p>
            </div>
        )
    }
}

export default FormControl
