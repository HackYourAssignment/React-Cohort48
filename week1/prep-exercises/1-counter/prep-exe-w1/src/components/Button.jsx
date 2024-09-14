import React from 'react';

// Receives the addOne function as a prop
const Button = ({ addOne }) => {
  return (
    <button onClick={addOne}>Add 1!</button>
  );
};

export default Button;
