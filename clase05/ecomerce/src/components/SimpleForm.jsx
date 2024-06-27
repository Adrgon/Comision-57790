import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState]= useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

/*     useEffect(()={}, []) */
    
    /* useEffect(()=>{
        console.log("hey")
    }) */

        // Se ejecuta justo despues del primer renderizado
        useEffect(() => {
          console.log("hey");
        }, []);

        // cada vez que cambia el estado
        useEffect(() => {
          console.log("Cambio formState");
        }, [formState]);

        // cada vez que cambia un parta del estado
        useEffect(() => {
          console.log("Cambio email");
        }, [email] );





    const handleChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
      <>
        <h1>UseEffect</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@email.com"
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* {name === "hola" && <Message />} */}
        {name === "hola" ? <Message /> : <h1>No entiendo</h1>}
      </>
    );
}
