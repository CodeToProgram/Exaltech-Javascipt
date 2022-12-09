import React from "react";

const ChildCounter1 = (props) => {
    return (
        <div>
            <h1>Data from function to component</h1>
            <h1>{props.counter}</h1>
        </div>
    )
}
export default ChildCounter1;