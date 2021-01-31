/** @jsx Didact.createElement */

import './styles.css';
import Didact from './Didact';

function App(props) {
  const [state, setState] = Didact.useState(1);

  return (
    <div>
      <h1>Hi {props.name}</h1>
      <button onClick={() => setState((c) => c + 1)}>Click me</button>
      <p>what is going on?? I am scared!! {state}</p>
    </div>
  );
}

const element = <App name="foo" />;
const container = document.getElementById('root');

/**
 * In the render function we set nextUnitOfWork to the root of the fiber tree.
 * Then, when the browser is ready,it will call our workLoop and we’ll start working on the root.
 */
Didact.render(element, container);
