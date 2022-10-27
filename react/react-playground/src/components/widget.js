import React from "react";
import ReactDom from "react-dom";
import Dog from "./dog";

function Widget() {
  return (
    <div>
      <h2>The title</h2>
      <p>The content</p>
      <Dog />
    </div>
  );
}

ReactDom.portal(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>,
  document.getElementById("widget")
);

export {};
