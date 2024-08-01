
// useContext

// Purpose: Allows you to subscribe to React context without introducing nesting.

// Syntax:
// const value = useContext(MyContext);

import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedButton() {
const theme = useContext(ThemeContext);
return <button style={{ background: theme }}>Click me</button>;
}