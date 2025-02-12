import React from "react";

const FBCStateEx = () => {
  //   const data = React.useState("Hi");
  //   console.log(data);

  const [value, setValue] = React.useState(0);
  console.log(value);
  const changeValue = () => {
    setValue(1000);
    // setValue(value + 1);
  };
  return (
    <div>
      FBCStateEx
      <h1>{value}</h1>
      <button onClick={changeValue}>Change Value</button>
    </div>
  );
};

export default FBCStateEx;
