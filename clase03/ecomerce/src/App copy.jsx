import React from "react"
/* 
function App01() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Titulo"),
    React.createElement("h2", {}, "Felipe"),
    React.createElement("h3", {}, "Perro"),
    React.createElement("h3", {}, "Sharpei"),
  ]);
} */

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Veterinaria"),
    React.createElement(Mascota, {
      nombre: "Felipe",
      animal: "Perro",
      raza: "Sharpei",
    }),
    React.createElement(Mascota, {
      nombre: "Homero",
      animal: "Perro",
      raza: "Callejero",
    }),
  ]);
}

/* 
function Mascota(){
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Felipe"),
    React.createElement("h3", {}, "Perro"),
    React.createElement("h3", {}, "Sharpei"),
  ]);
} */

function Mascota(props) {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.nombre),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.raza),
  ]);
}

export default App
