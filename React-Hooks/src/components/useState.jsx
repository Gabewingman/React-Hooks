import React, { useState } from "react";

function UseState() {
  // useState syntax *always start inside of a function*

  // syntax: const [state, setState] = useState(initialState);
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useState()</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span> {count} </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <button type="button" onClick={() => setColor("White")}>
        Default
      </button>
      <button type="button" onClick={() => setColor("Black")}>
        Set Black Font
      </button>
      <button type="button" onClick={() => setBackgroundColor("Gray")}>
        Set Gray Background
      </button>
      <button type="button" onClick={() => setBackgroundColor("Transparent")}>
        Set No Background
      </button>

      <p style={{ color, backgroundColor: backgroundColor }}>
        Hello. My favorite color is {color}.
      </p>
    </>
  );
}

export default UseState;
