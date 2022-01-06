import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }
    show = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => {
                if ((result.filter(user => user.title === this.state.userName).length) > 0) {
                    alert("login sucess");
                } else {
                    alert("wrong password/username");
                    // sunt aut facere repellat provident occaecati excepturi optio reprehenderit
                }
            }
            );

        // if (this.state.userName === "sriman" && this.state.password === "Siva@1234") {
        //     alert("login sucess")
        // } else {
        //     alert("wrong userName/password");
        // }
    }
    getUserName(name) {
        this.setState({ userName: name });
    }
    getUserPassword(password) {
        this.setState({ password: password });
    }
    render() {
        return (
            <div>
                <form>
                    <input value={this.state.userName} onChange={(e) => this.getUserName(e.target.value)} placeholder='userName'></input>
                    <input value={this.state.password} onChange={(e) => this.getUserPassword(e.target.value)} placeholder='password'></input>
                    <button onClick={this.show}>submit</button>
                </form>
            </div>
        )
    }
}

export default Form
