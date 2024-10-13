import React, { useState } from 'react';

const useCounterCustomHook = (initialValue: number): [number, () => void, () => void] => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [count, increment, decrement];
};

export default useCounterCustomHook;
