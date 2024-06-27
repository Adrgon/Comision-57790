import { useState } from "react"

function CounterApp(){
    //const [cont, setCont] = useState(0);
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    //console.log(state)
    const {counter1, counter2, counter3} = state
    console.log(state)
    const handleClick = () => {
      //setCont( x => x + 1 );
      setState({
        ...state,
        counter1: counter1 + 1,
        counter3: counter3 + 1   
    })
    };
    return (
      <div style={{ padding: "70px" }}>
        <h1>Contador: {state.counter1}</h1>
        <h1>Contador: {state.counter2}</h1>
        <h1>Contador: {state.counter3}</h1>
        <hr />
        <button onClick={handleClick}> + </button>
      </div>
    );
}

export default CounterApp
