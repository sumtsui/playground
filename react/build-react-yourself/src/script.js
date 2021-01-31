// https://pomb.us/build-your-own-react/
/** @jsx Didact.createElement */

import './styles.css';
import Didact from './didact';

function App(props) {
  const [state, setState] = Didact.useState(1);

  return (
    <h1 onClick={() => setState((c) => c + 1)} class="bar">
      Hi {props.name} + {state}
    </h1>
    // <div>
    //   <h1 onClick={() => setState((c) => c + 1)}>
    //     Hi {props.name} + {state}
    //   </h1>
    //   <button>Click me</button>
    //   <p>what is going on?? I am scared!!</p>
    // </div>
  );
}

const element = <App name="foo" />;
const container = document.getElementById('root');

/**
 * In the render function we set nextUnitOfWork to the root of the fiber tree.
 * Then, when the browser is ready,it will call our workLoop and we’ll start working on the root.
 */
Didact.render(element, container);
