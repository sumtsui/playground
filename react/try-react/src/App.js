import "./App.css";
import Dog from "./components/dog";
import Recursive from "./components/RecursiveRendering";
import Form from "./components/form";
import React from "react";

function App() {
  const inputRef = React.useRef(null);

  console.log("ref", inputRef.current);

  return (
    <div className="App">
      <h3>playground</h3>
      {/* <Dog /> */}
      {/* <Recursive /> */}
      <Form />
    </div>
  );
}

export default App;
