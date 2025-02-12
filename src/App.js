// function App() {
//   // let ele = React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Header")
//   // );
//   let username = "Rohan";
//   return (
//     // <div className="App">
//     //   <h1 style={{ color: "red" }}>Name: Subhapreet Patro</h1>
//     //   <input />
//     // </div>
//     // <section>
//     //   <h1>One JSX Element</h1>
//     //   <p>lorem3</p>
//     // </section>
//     <div>
//       <h1>{username}</h1>
//       <p>{100 + 100}</p>
//     </div>
//   );
// }

// export default App;

// ! Components
// ? CBC

// class App extends React.Component {
//   render() {
//     return <h1>Class based Component</h1>;
//   }
// }

// export default App;

// ? FBC
// function App() {
//   return <h1>Functional Based Component</h1>;
// }
// export default App;

// OR

// const App = () => {
//   return <h1>Functional based Component</h1>;
// };
// export default App;

// !Component composition
// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Main />
//       <div className="sidebar">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// ! props
// import React, { Component } from "react";
// import CBCPropEx from "./propsex/CBCPropEx";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx username="Subhapreet" />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import CBCPropEx from "./propsex/CBCPropEx";
// import FBCPropsEx from "./propsex/FBCPropsEx";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//           username="Subhapreet Patro"
//           age={20}
//           hobbies={["Video Games", "Playing chess"]}
//           address={{ city: "Hyderabad", area: "Narsingi" }}
//           sendFun={function () {
//             alert("hi");
//           }}
//         /> */}
//         <FBCPropsEx
//           username="Rohan"
//           isMarried={true}
//           hobbies={["Playing video games", "Playing chess", "Exploring Tech"]}
//         />
//       </div>
//     );
//   }
// }

// !props children
// import React from "react";
// import PropChildEx from "./propsex/PropChildEx";
// import SubChild from "./propsex/SubChild";
// import Child1 from "./propsex/Child1";

// const App = () => {
//   return (
//     <div>
//       {/* <PropChildEx num={10}>
//         <h1>This is data coming from props children</h1>
//         <SubChild />
//       </PropChildEx> */}
//       <Child1 university="MRU" />
//     </div>
//   );
// };

// export default App;

// !State example
// import React from "react";
// import CBCStateEx from "./stateexamples/CBCStateEx";
// import FBCStateEx from "./stateexamples/FBCStateEx";

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx /> */}
//       <FBCStateEx />
//     </div>
//   );
// };

// export default App;

import React from "react";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./components/styles.css";
import styles from "./myStyles.module.css";
import ClassComponent2 from "./components/ClassComponent2";
import MyForm from "./components/MyForm";
import UseEffectEx from "./hookexamples/UseEffectEx";
import RefExamples from "./hookexamples/RefExamples";
import RefExample2 from "./hookexamples/RefExample2";
const App = () => {
  return (
    <div>
      {/* <h1 className="heading">This is a styling class</h1>
      <h2 className={styles.error}>ERROR 404!</h2> */}
      {/* <FunctionalComponent clgName="MRUH" city="Hyderabad" apply={false}>
        <h1>Hello,Good afternoon</h1>
        <p>Success</p>
      </FunctionalComponent> */}
      {/* <ClassComponent /> */}
      {/* <ClassComponent2 /> */}
      {/* <MyForm /> */}
      {/* <UseEffectEx /> */}
      {/* <RefExamples /> */}
      {/* <RefExample2 /> */}
    </div>
  );
};

export default App;
