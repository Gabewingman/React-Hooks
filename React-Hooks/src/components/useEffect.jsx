import { useState, useEffect } from "react";
// syntax: useEffect(function, dependencies);

// 1. useEffect(() => {}) - Runs after re-render
// 2. useEffect(() => {}, []) - Runs only on mount
// 3. useEffect(() => {}, [condition]) - Runs conditionally

export default function useEffect() {
  const [color, setColor] = useState();

  useEffect(() => {
    document.title = `You have clicked ${color} times`;
  });

  return (
    <>
      <div className="useEffectDiv">
        <h1 className="titleUseEffect">React useEffect()</h1>
        <p className="descriptionUseEffect">
          The useEffect hook in React is used to perform side effects in
          function components. Side effects can include things like fetching
          data, directly updating the DOM, and timers. useEffect is called after
          the component is rendered to the screen, and it can be set to run
          under different conditions.
        </p>
        <button type="button" onClick={() => setColor(color + 1)}>
          Add
        </button>
        <span>{color}</span>
        <button type="button" onClick={() => setColor(color - 1)}>
          Remove"
        </button>
      </div>
    </>
  );
}
