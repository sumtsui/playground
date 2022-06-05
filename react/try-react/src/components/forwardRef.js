import React from "react";

const LabelledInput = (props, ref) => {
  const { id, label, value, onChange } = props;

  return (
    <div class="labelled--input">
      <label for={id}>{label}</label>
      <input id={id} onChange={onChange} value={value} ref={ref} />
    </div>
  );
};

export default React.forwardRef(LabelledInput);
