
// useCallback

// Purpose: Memoizes a callback function to optimize performance, particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

// Syntax:
// const memoizedCallback = useCallback(() => {
// doSomething(a, b);
// }, [a, b]);

import React, { useState, useCallback } from 'react';

function IncrementButton({ increment }) {
return <button onClick={increment}>Increment</button>;
}

function Counter() {
const [count, setCount] = useState(0);

const increment = useCallback(() => {
setCount(count + 1);
}, [count]);

return (

<div>
Count: {count}
<IncrementButton increment={increment} />
</div>
);
}

export default Counter;