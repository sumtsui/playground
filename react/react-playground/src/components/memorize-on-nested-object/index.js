import React from "react";
import { useRenderCounter } from "../use-render-count";

export function Parent() {
  const el = useRenderCounter();
  const [value, setValue] = React.useState({
    name: "Bob",
    grade: 90,
    basic: { height: 177 },
  });
  function onClick() {
    const { grade } = value;
    setValue((prev) => ({ ...prev, grade: grade + 1 }));
  }
  return (
    <div>
      {el}
      <button onClick={onClick}>change nested state</button>
      <p>grade: {value.grade}</p>
      <Child basic={value.basic} />
    </div>
  );
}

function Child(props) {
  const el = useRenderCounter();
  const { basic } = props;
  const basicMemo = React.useMemo(() => basic, [basic]);

  return (
    <div>
      {el}
      <p>height: {basicMemo.height}</p>
    </div>
  );
}
