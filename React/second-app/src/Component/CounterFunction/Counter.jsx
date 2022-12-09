import React from "react";
import { useState} from "react"
import ChildCounter1 from "./ChildCounter1";

export const Counter = () => {
    const [data,setData] = useState(0);
    return (
        <div style={{backgroundColor:"Red"}}>
<h1>This is a Function counter component</h1>
<h1>Counter value:{data}</h1>
<button onClick={() => setData(data +1)}>Increment</button>
<button onClick={() => setData(0)}>Reset</button>
<button onClick={() => setData(data -1)}>Decrement</button>
<ChildCounter1 Counter = {data}/>
        </div>
    )
}
export default Counter;