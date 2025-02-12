import React, { Component } from "react";
import "./formStyles.css";
export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      skillValue: "Skill not selected",
      emailValue: "",
      experienceValue: "Experience not selected",
    };
  }
  changeMessage = (event) => {
    this.setState({
      textValue: event.target.value,
    });
  };
  changeSkill = (event) => {
    this.setState({
      skillValue: event.target.value,
    });
  };
  changeExperience = (event) => {
    this.setState({
      experienceValue: event.target.value,
    });
  };
  changeEmail = (event) => {
    this.setState({
      emailValue: event.target.value,
    });
  };
  submitted = (event) => {
    alert(
      "Form is submitted successfully " +
        `${this.state.textValue} ${this.state.skillValue} ${this.state.emailValue} ${this.state.experienceValue}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <label>Student Name:</label>
          <input
            type="text"
            value={this.state.textValue}
            onChange={this.changeMessage}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={this.state.emailValue}
            onChange={this.changeEmail}
          />
          <br />
          <label>Skill:</label>
          <select value={this.state.skillValue} onChange={this.changeSkill}>
            <option>React JS</option>
            <option>Spring</option>
            <option>Node JS</option>
          </select>
          <br />
          <label>Experience:</label>
          <select
            value={this.state.experienceValue}
            onChange={this.changeExperience}
          >
            <option>1 year</option>
            <option>2 years</option>
            <option>3 years</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
