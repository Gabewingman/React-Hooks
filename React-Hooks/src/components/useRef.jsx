
// useRef

// Purpose: Allows you to create a reference to a DOM element or a value that persists across renders without causing a re-render when updated.

// Syntax:
// const refContainer = useRef(initialValue);

import React, { useRef } from 'react';

function TextInputWithFocusButton() {
const inputEl = useRef(null);

const onButtonClick = () => {
inputEl.current.focus();
};

return (

<div>
<input ref={inputEl} type="text" />
<button onClick={onButtonClick}>Focus the input</button>
</div>
);
}

export default TextInputWithFocusButton