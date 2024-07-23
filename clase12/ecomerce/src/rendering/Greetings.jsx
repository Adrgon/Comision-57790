

function Greetings({isLoggedIn}) {
  if(isLoggedIn){
    return <h1>Bienvenido de nuevo</h1>
  } else {
      return <h1>Por favor, inicia session</h1>
  }
}

export default Greetings
