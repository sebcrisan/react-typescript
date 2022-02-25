import { Component } from "react";
import { CounterProps, CounterState } from "./Counter.types";

export class Counter extends Component<CounterProps, CounterState>{
    state = {
        count:0,
    }
    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1 
        }))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}