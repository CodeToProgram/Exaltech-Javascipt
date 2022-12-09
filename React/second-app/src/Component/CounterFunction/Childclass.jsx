import React from "react";

export class Childclass extends Component {
render () {
    return (
        <div>
            <h1>Data from Class Components</h1>
            <h1>{this.props.counter}</h1>
        </div>
    )
}
};
export default Childclass