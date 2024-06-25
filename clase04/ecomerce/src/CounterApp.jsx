import { useState } from "react"

function CounterApp(){
    const [cont, setCont] = useState(0);
    return (
        <div style={{padding: '70px'}}>
            <h1>Contador: {cont}</h1>
            <hr/>
            <button onClick={ ()=> {setCont(cont + 1)}}> + </button>
        </div>
    )
}

export default CounterApp
