import React, { Component } from "react";
import "./styles.css";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { msg: "Click the button to display message", flag: true };
  }
  changeMsg = () => {
    this.setState({ msg: "My name is Subhapreet Patro", flag: false });
  };
  render() {
    let applyStyle = this.state.flag ? "m1" : "m2";
    let inlineStyle1 = {
      backgroundColor: "yellow",
    };
    let inlineStyle2 = {
      backgroundColor: "lightgreen",
    };
    document.body.style.backgroundColor = this.state.flag
      ? inlineStyle1.backgroundColor
      : inlineStyle2.backgroundColor;
    return (
      <div>
        <h1 className={applyStyle}>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>Click Me</button>
      </div>
    );
  }
}
