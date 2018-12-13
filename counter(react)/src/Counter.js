import React, { Component } from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.onIncrement=this.onIncrement.bind(this);
        this.onDecrement=this.onDecrement.bind(this);
        this.onIncrementIfOdd=this.onIncrementIfOdd.bind(this);
        this.onIncrementAsync=this.onIncrementAsync.bind(this);
    }
    onIncrement(){
        this.setState({
            value:this.state.value+1
        })
    }
     onDecrement(){
        this.setState({
             value:this.state.value-1
        }) 
    }
     onIncrementIfOdd(){
        if(this.state.value%2===0){
            this.onIncrement();
        }
    }
     onIncrementAsync(){
        setTimeout(this.onIncrement,1000);
    }
    render() {
        return (
            <div>
                <p>Clicked:{this.state.value}times</p>
                <br />
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrementIfOdd}>Increment if odd</button>
                <button onClick={this.onIncrementAsync}>Increment async</button>
            </div>

        )
    }
}
export default Counter;