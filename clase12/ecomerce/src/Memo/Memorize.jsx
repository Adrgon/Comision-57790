
import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import Small from "./Small";

const Memorize = () => {
    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(10)
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button onClick={increment}>+1</button>
      <button onClick={()=>{setShow(!show)}}>Show /Hide {JSON.stringify(show)}</button>
    </div>
  );
}

export default Memorize
