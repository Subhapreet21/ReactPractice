import React from "react";
import "./styles.css";

function FunctionalComponent(props) {
  console.log(props);
  let applyStyle = props.apply ? "heading" : "";
  let inlineStyle = {
    color: "greenyellow",
    backgroundColor: "red",
    fontSize: "50px",
  };

  return (
    <div>
      <h1 className={`${applyStyle} font-style`}>
        Welcome to my Functional Component {props.clgName}
      </h1>
      <h2 style={inlineStyle}>Good afternoon</h2>
      {props.children}
    </div>
  );
}

export default FunctionalComponent;
