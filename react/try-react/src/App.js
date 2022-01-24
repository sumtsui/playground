import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Counter from './components/StaleClosureExample';
import Basic from "./components/Basic";

function App() {
  console.log('App');

  return (
    <div className="App">
      <Header />
      <Button />
      <Counter />
      <Basic />
    </div>
  );
}

export default App;
