import React from "react";

const FBCPropsEx = (props) => {
  console.log(props);
  //   return <div>FBCPropsEx</div>;
  if (props.isMarried === true) {
    // return <h1>{props.username} is a married person</h1>;
    return (
      <div>
        {props.hobbies.map((hobby) => {
          return <li>{hobby}</li>;
        })}
      </div>
    );
  } else {
    return <h1>{props.username} is not married</h1>;
  }
};

export default FBCPropsEx;
