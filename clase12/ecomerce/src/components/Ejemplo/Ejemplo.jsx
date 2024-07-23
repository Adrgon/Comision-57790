import { useEffect, useRef } from "react"


const Ejemplo = () => {
    const buttonRef = useRef()
    console.log(buttonRef)

    
     useEffect(()=>{
        console.log(buttonRef)
        const boton = buttonRef.current

        const manejoClick = (e)=>console.log(e)

        boton.addEventListener('click', manejoClick)

        return () => {
            boton.removeEventListener('click', handleClick)
        } 
   },[]) 

    const handleClick = (event) => {
        console.log(event)
    } 

  return (
    <>
      <button ref={buttonRef} >
        Nativo
      </button>
      <button onClick={ (event)=> handleClick(event)}>
        Sintetico
      </button>
    </>
  );
}

export default Ejemplo
