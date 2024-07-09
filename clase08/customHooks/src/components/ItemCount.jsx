import { useCount } from "../hooks/useCounte";

const ItemCount = ({initialValue}) => {

    const {count, increment, decrement, reset} = useCount(initialValue)

  return (
    <>
    <button onClick={decrement}> -1 </button>
      <h1>{count}</h1>
       <button onClick={increment}> +1 </button> 
       <button onClick={reset}>reset</button>
    </>
  );
}

export default ItemCount
