// https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
import React, {useRef, useState} from "react";

function Counter() {
  const [count, setCount] = useAsyncReference(0);

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => setCount(count.current+1)}>Click me</button>
      <Alert count={count.current} />
    </div>
  );
}

function Alert({count}) {
  const asyncCount = useAsyncReference(count, true)   // strange the child need to do this to just to avoid taking the ref but the ref.current as prop
  // why not just let the child take the ref too.

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + asyncCount.current);
    }, 3000);
  }

  return (<button onClick={handleAlertClick}>Show alert</button>)
}

function useAsyncReference(value, isProp) {
  const ref = useRef(value)
  const [, forceRender] = useState(false)

  function updateState(newState) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender(s => !s)
    }
  }

  if (isProp) {
    ref.current = value;
    return ref;
  }

  return [ref, updateState]
}

export default Counter