import React, { Component } from "react";
import FamilyTree from "./familyTree";
import members from "./family";

function RecursiveRendering() {
  const [data, setData] = React.useState(members);

  function onClick() {
    const personName = "Frank";
    // const newData = [...data];
    const newData = data;
    newData[0].children[1].children[0].dob = "01/01/2000";
    newData.push({ name: "Kevin" });
    console.log("newData", newData);
    setData(newData);
  }

  return (
    <div className="RecursiveRendering">
      <h3>My Family Tree</h3>
      <button onClick={onClick}>Change</button>
      <FamilyTree members={data} level={0} />
    </div>
  );
}

export default RecursiveRendering;
