import "./App.css";
import Dog from "./components/dog";
import Recursive from "./components/RecursiveRendering"

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      {/* <Dog /> */}
      <Recursive />
    </div>
  );
}

export default App;
