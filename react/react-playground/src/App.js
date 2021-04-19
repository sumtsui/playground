import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Counter from './components/StaleClosureExample';

function App() {
  console.log('App');

  return (
    <div className="App">
      <Header />
      <Button />
      <Counter />
    </div>
  );
}

export default App;
