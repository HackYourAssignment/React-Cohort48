import React from 'react';
import useWindowSize from './useWindowSize';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Responsive Component</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <div>
        {width < 768 ? (
          <p>Mobile View</p>
        ) : (
          <p>Desktop View</p>
        )}
      </div>
    </div>
  );
}

export default ResponsiveComponent;
