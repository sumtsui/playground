import React, { useState } from "react";
import { getDog } from "../utils/apis";
import * as math from "../utils/math";

export default function Dog() {
  const [dogs, setDogs] = useState([]);
  const [dogCount, setDogCount] = useState(0);

  function handleClick() {
    getDog().then((d) => setDogs([...dogs, d]));
    setDogCount(math.add(dogCount, 1));
  }

  return (
    <div>
      <h3>Dog count: {dogCount}</h3>
      {dogs.length > 0 ? (
        dogs.map((d) => (
          <img
            style={{ maxWidth: "150px" }}
            src={d.message}
            alt="dog"
            key={d.message}
          />
        ))
      ) : (
        <p>No dog:(</p>
      )}
      <div>
        <button onClick={handleClick}>New Dog!</button>
      </div>
    </div>
  );
}
