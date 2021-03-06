import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Output from "./Output";
// import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    answer: "DISPLAY",
  };

  handleClick = (name) => {
    console.log("This is -", name);
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Output answerProp={this.state.answer} />
        <Buttons handleClickProp={this.handleClick} />
      </div>
    );
  }
}

export default App;
