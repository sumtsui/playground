import React, { useImperativeHandle } from "react";

const LabelledInput = (props, ref) => {
  const { id, label } = props;
  const [value, setValue] = React.useState("");

  useImperativeHandle(ref, () => ({
    log: () => console.log(value),
    focus: () => {
      ref.current.focus();
    },
  }));

  return (
    <div className="labelled--input">
      <label for={id}>{label}</label>
      <input
        id={id}
        onChange={(ev) => setValue(ev.target.value)}
        value={value}
        ref={ref}
      />
    </div>
  );
};

export default React.forwardRef(LabelledInput);
// export default LabelledInput;
