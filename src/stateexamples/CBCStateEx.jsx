import React, { Component } from "react";

class CBCStateEx extends Component {
  constructor() {
    super();
    this.state = {
      users: ["Subhapreet Patro", "Subham Patnaik", "Divyansh Jain"],
      num: 100,
    };
  }

  changeNumber = () => {
    this.setState({ num: 200 });
    // this.setState({ num: this.state.num + 1 });
  };
  render() {
    console.log(this);
    return (
      <div>
        {this.state.users.map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
        <h1>{this.state.num}</h1>
        <button onClick={this.changeNumber}>Change number</button>
      </div>
    );
  }
}
export default CBCStateEx;
