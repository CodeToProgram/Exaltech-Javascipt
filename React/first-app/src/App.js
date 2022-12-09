import React, { Component} from "react"
import './App.css';
import {Navigation} from "./Components/Navigation/Navigation"
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer"

class App extends Component {
  constructor () {
    super();
    this.state = {
      navigationName : ["Home", "About", "Services", "Clients", "Students"],
      courses : { course1:"HTML", course2:"CSS", course3:"JS"}
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Navigation navName={this.state.navigationName}></Navigation>
        <Body courseName={this.state.courses}></Body>
        <Footer></Footer> */}
      </div>
    )
  }
}

export default App;
