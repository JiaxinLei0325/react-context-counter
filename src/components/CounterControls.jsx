import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const CounterControls = () => {
  // Should Add useContext for increment, decrement here...
   const { increment, decrement, reset } = useContext(CounterContext)
  return (
    <>
      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterControls;
