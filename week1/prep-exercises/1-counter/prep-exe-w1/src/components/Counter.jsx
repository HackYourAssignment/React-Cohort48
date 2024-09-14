import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  //Define state variable and state handler
  const [count, setCount] = useState(0);

  // Declare the feedback variable
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  // Function to add 1 to the count
  const addOne = () => setCount(count + 1);

  return (
    <div>
      <h1>Simple Counter</h1>
      {/*  Pass the state variable and function */}
      <Count count={count} />
      <Button addOne={addOne} />
      {/*  Display the feedback message */}
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
