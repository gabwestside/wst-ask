import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(setCounter);
  }

  return <button onClick={increment}>{counter}</button>;
}
