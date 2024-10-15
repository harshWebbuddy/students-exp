import React from 'react'
import useCounterCustomHook from './useCounterCustomHook'

const CounterComponent = () => {
  const [count, increment, decrement] = useCounterCustomHook(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


export default CounterComponent;
