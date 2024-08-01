
// useEffect

// Purpose: Allows you to perform side effects in functional components. It can be used for tasks such as data fetching, subscriptions, or manually changing the DOM.

// Syntax:
// useEffect(() => {
//   // Effect code here
//   return () => {
//     // Cleanup code here
//   };
// }, [dependencies]);

// syntax: useEffect(function, dependencies);

// 1. useEffect(() => {}) - Runs after re-render
// 2. useEffect(() => {}, []) - Runs only on mount
// 3. useEffect(() => {}, [condition]) - Runs conditionally

import React, { useState, useEffect } from 'react';

function useEffect() {
const [count, setCount] = useState(0);

useEffect(() => {
document.title = `You clicked ${count} times`;
}, [count]);

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
Click me
</button>
</div>
);
}

export default useEffect