import React, { Component } from "react";
import "./styles.css";

export class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      message: "I am attending React Class",
    };
  }
  changeMessage = () => {
    this.setState({
      clicked: true,
      message: "Thanks for clicking",
    });
  };
  render() {
    let applyStyle = this.state.clicked ? "heading1" : "heading2";
    return (
      <div>
        <h1 className={applyStyle}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click me</button>
      </div>
    );
  }
}

export default ClassComponent2;
