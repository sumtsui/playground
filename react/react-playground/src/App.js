import "./App.css";
import Dog from "./components/dog";
import Recursive from "./components/RecursiveRendering";
import Form from "./components/form";
import Input from "./components/forwardRef";
import React from "react";
import OptimizeContextExample from "./components/how-to-optimize-your-context-value";
import ObjectInArray from "./components/update-object-in-array";
import { Parent } from "./components/memorize-on-nested-object";

function App() {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState("");

  console.log("ref", inputRef.current);

  return (
    <div className="App">
      <h3>playground</h3>
      {/* <OptimizeContextExample /> */}
      {/* <ObjectInArray /> */}
      {/* <Parent /> */}
      {/* <Dog /> */}
      {/* <Recursive /> */}
      {/* <Form /> */}
      {/* <Input label="my field" ref={inputRef} value={value} /> */}
      {/* <button onClick={() => inputRef.current.log()}>save!</button> */}
      <iframe
        width="900"
        height="500"
        src="https://eventx.docker/e/95ea8419-a557-4cde-a175-13cb31e8eeac/widget/checkout"
      ></iframe>
    </div>
  );
}

export default App;
