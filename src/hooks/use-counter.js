import { useState, useEffect } from "react";

const useCounter = (count) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + count);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return counter;
};

export default useCounter;
