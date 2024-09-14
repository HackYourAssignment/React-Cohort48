import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

 
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  // useEffect to add/remove event listener on window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect runs only on mount and unmount

  // Add useDebugValue to display helpful info in React DevTools
  useDebugValue(windowSize.width < 768 ? 'Mobile View' : 'Desktop View');

  return windowSize;
}

export default useWindowSize;
