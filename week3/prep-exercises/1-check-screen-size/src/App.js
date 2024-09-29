import React from 'react';
import useWindowSize from './useWindowSize';

function App() {
  const size = useWindowSize();

  return (
    <div>
      <h1>your size</h1>
      <p>Width : {size.width}px</p>
      <p>Height :  {size.height}px</p>
    </div>
  );
}

export default App;
