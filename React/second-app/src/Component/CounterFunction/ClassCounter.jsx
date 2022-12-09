import React, {Component} from "react";
import Childclass from "./Childclass"

export class ClassCounter extends Component {
    constructor() {
        super ();
        this.state= {counter:0}
    }
    render () {
        return (
        <div style={{backgroundColor:"blue"}}>
            <h1>This is a Class counter component</h1>
            <button onClick={()=>this.setState({Counter:this.state.Counter+1})}>Increment</button>
            <button onClick={()=>this.setState({Counter:0})}>Reset</button>
            <button></button>
            <button onClick={()=>this.setState({Counter:this.state.Counter-1})}>Decrement</button>
            <Childclass counter = {this.state.Counter}/>
        </div>
        )
    }
}
export default ClassCounter;