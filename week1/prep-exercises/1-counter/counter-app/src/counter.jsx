import React , { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Add 1!</button>
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
