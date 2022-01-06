import React, { Component } from 'react'

export class Mounting extends Component {
    constructor(props){
        super(props);
        console.log("in constructer");
        this.state ={

        }
    }
    static getDerivedStateFromProps(props,state){
      console.log("DerivedStateFromProps");
      return state;
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        console.log("render");
        return (
            <div>
                manu yadav
            </div>
        )
    }
}

export default Mounting
