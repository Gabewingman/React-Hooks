
// useReducer

// Purpose: A more powerful alternative to useState for managing complex state logic. It's similar to Redux but simpler.

// Syntax:
// const [state, dispatch] = useReducer(reducer, initialState);

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
switch (action.type) {
case 'increment':
return { count: state.count + 1 };
case 'decrement':
return { count: state.count - 1 };
default:
throw new Error();
}
}

function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);
return (

<div>
Count: {state.count}
<button onClick={() => dispatch({ type: 'increment' })}> +
</button>
<button onClick={() => dispatch({ type: 'decrement' })}> -
</button>
</div>
);
}

export default Counter