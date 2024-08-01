
// useMemo

// Purpose: Memoizes a computed value to optimize performance. It only recalculates the value when one of the dependencies changes.

// Syntax:
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent({ a, b }) {
const expensiveResult = useMemo(() => {
return computeExpensiveValue(a, b);
}, [a, b]);

return <div>{expensiveResult}</div>;
}

export default ExpensiveCalculationComponent