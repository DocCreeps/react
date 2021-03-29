import React from 'react';
class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            value : 0
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={() => this.setState({value: this.state.value + 1})}>+</button>
                <button onClick={() => this.setState({value: this.state.value - 1})}>-</button>
            </div>
        )
    }
    
}

export default Counter