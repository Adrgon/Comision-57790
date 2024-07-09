/* 
export const useCount = () => {
    
} 
*/

import { useState } from "react";

export const useCount = (initialState = 0) => {
  const [count, setCount] = useState(initialState);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(initialState)
  }

  return {
    count,
    decrement,
    increment,
    reset,
  };
  //return {contador: count, decremento: decrement, incremento: increment, borrar: reset};
  
};
