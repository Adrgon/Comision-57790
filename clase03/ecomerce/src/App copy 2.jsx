import React from 'react'
function App() {
  return (
    <>
      <h1>Veterinaria</h1>
      <Mascota
        nombre="Felipe"
        animal="perro"
        raza="Sharpei"
        imagen="https://t2.uc.ltmcdn.com/es/posts/2/3/4/como_adiestrar_a_un_shar_pei_34432_600.jpg"
      />
      <Mascota
        nombre="Homero"
        animal="perro"
        raza="Callejero"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtpWI9-oAvqbOTk2MiuInErtWyClWEE6PrQ&s"
      />
    </>
  );
}

function Mascota(props){
  console.log(props)
  return (
    <>
      <h2>{props.nombre}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.raza}</h2>
      <img
        width="200"
        src={props.imagen}
      />
      <hr/>
    </>
  );
}

export default App
