/** @jsx Didact.createElement */
import Didact from './Didact';

function App(props) {
  const [state, setState] = Didact.useState(1);
  const [state2, setState2] = Didact.useState(100);

  // Didact.useEffect(() => {
  //   console.log('state changed', state);
  // }, [state]);

  return (
    <div>
      <h1>Hi {props.name}</h1>
      <button onClick={() => setState((c) => c + 1)}>Click me</button>
      <button
        onClick={() => {
          setState2((c) => c - 1);
          setState2((c) => c - 1);
        }}
      >
        Click me
      </button>
      <p>what is going on?? I am scared!! {state}</p>
      <p>what is going on?? I am scared!! {state2}</p>
    </div>
  );
}

const element = <App name="foo" />;
const container = document.getElementById('root');

Didact.render(element, container);
