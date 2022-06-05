/** @jsx Didact.createElement */ 
import Didact from './Didact';

function App(props) {
  const [ state, setState ] = Didact.useState(1);
  const [ state2, setState2 ] = Didact.useState(false);

  // Didact.useEffect(() => {
  //   console.log('state changed', state);
  // }, [state]);

  return (
    <div>
      <h1>Hi {props.name}</h1>
      <button onClick={() => setState((state) => state + 1)}>Add</button>
      <p>Counter: {state}</p>
      <button
        onClick={() => {
          setState2((state) => !state);
        }}
      >
        Toggle
      </button>
      {state2 ?
        <div>
          <h2>This is the title</h2>
          <p>This is the paragraph.</p>
        </div> : 
        <p>
          <span>It is hidden now.</span>
        </p>}
    </div>
  );
}

const element = <App name="foo" />;
const container = document.getElementById('root');

Didact.render(element, container);
