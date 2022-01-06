import React, { Component } from 'react'

export class FormControlLS extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            gmail: "",
            password: "",
            result: []
        }
    }
    onChangeHandular = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };
    clickHandular = (e) => {
        e.preventDefault();
        let localStorageForm = JSON.parse(localStorage.getItem("values")) || [];
        //  localStorageForm = this.state;
        let list = localStorageForm.find(value => value.userName === this.state.userName && value.gmail === this.state.gmail)

        if (list) {
            alert("already existed");
        } else {
            localStorageForm.push(this.state);
        }
        localStorage.setItem("values", JSON.stringify(localStorageForm));
        this.setState({
            userName: "",
            gmail: "",
            password: "",
            outputValues: []
        })
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        result: data
                    });
                }
            )
    }
    render() {
        // const localStorageValues = JSON.stringify(localStorage.getItem("values"));
        // console.log(localStorageValues);
        // const items = this.state.outputValues;
        // console.log(items);
        // let users;
        // items.map(user => {
        //     return users = user;
        // })
        return (
            <div>
                <input type="text" placeholder='userName' value={this.state.userName} onChange={this.onChangeHandular} name='userName' />
                <input type="gmail" placeholder='email' value={this.state.gmail} onChange={this.onChangeHandular} name='gmail' />
                <input type="password" placeholder='password' value={this.state.password} onChange={this.onChangeHandular} name='password' />
                <button onClick={this.clickHandular} disabled={!this.state.userName}>submit</button>
                <div>
                    {
                        // localStorageValues.map(user => {
                        //     return <p>{`user : ${user.userName} gmail:${user.gmail} password : ${user.password}`}</p>
                        // })
                        this.state.result.map(data => {
                            return (
                                <h1>{data.title}</h1>,
                                <br />,
                                <p>{data.body}</p>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default FormControlLS
