import axios from 'axios';
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';

export class Axios extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            body: "",
            id: "",
            data: []
        }
    }
    onChangeHandular = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };
    newCard = (e) => {
        const title = this.state.title;
        const body = this.state.body;
        const id = this.state.id;
        e.preventDefault();
        const newObject = {
            title: title,
            body: body,
            id : id
        }
        this.state.data.push(newObject);
        this.setState({
            title: "",
            body: ""
        })
    }
    deleteFunc = (e) => {
        e.preventDefault();
        let array = this.state.data;
        let index = array.indexOf(e.target.value);
        array.splice(index,1);
        this.setState({
            array : array
        })
        // console.log(array.splice(index,1));
        // array.splice(index,1);
    }
    getData = async () => {
        const res = await axios("https://jsonplaceholder.typicode.com/posts");
        const { data } = res;
        this.setState({
            data: data
        })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div>
                <input type="text" id='input1' placeholder='title' value={this.state.title} onChange={this.onChangeHandular} name='title' />
                <input type="text" id='input2' placeholder='body' value={this.state.body} onChange={this.onChangeHandular} name='body' />
                <input type="text" id='input3' placeholder='email' value={this.state.id} onChange={this.onChangeHandular} name='id' />
                <button onClick={this.newCard}>send</button>
                {
                    this.state.data.map(user => {
                        return (
                            <div className='background'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title key={user.id}>{user.title}</Card.Title>
                                        <Card.Text key={user.id}>
                                            {user.id}
                                        </Card.Text>
                                        <Card.Text key={user.id}>
                                            {user.body}
                                        </Card.Text>
                                        <Button onClick={this.deleteFunc}>Delete</Button>
                                    </Card.Body>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Axios
