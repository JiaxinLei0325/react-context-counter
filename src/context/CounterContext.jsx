import { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Add increment & decrement Logic here
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    /* Should look like this */
    /* <CounterContext.Provider value={{ count, increment, decrement }}> */
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
