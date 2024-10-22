
// useState

// Purpose: Allows you to add state to functional components.

// Syntax:
// const [state, setState] = useState(initialState);

import React, { useState } from 'react';

function UseState() {
const [count, setCount] = useState(0);

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>
Click me
</button>
</div>
);
}

export default UseState;
