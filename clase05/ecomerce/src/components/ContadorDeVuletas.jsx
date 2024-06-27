
import { useEffect, useState } from "react";
export const ContadorDeVuletas = () => {

const [vuelta, setVuelta] = useState(1);
const [segundos, setSegundos] = useState(0);
const [minutos, setMinutos] = useState(0);
const [horas, setHoras] = useState(0);
const [ultimaVuelta, setUltimaVuelta] = useState(0);

useEffect(()=>{
    setSegundos(0);
    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("limpieza");
      clearInterval(intervalId);
    };
}, [vuelta])

useEffect(()=>{
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((prev) => prev + 1);
    }
}, [segundos])

useEffect(() => {
  if (minutos === 60) {
    setMinutos(0);
    setHoras((prev) => prev + 1);
  }
}, [minutos]);


const finalizarVuelta = () => {
  setVuelta((prev) => prev + 1);
  setUltimaVuelta(segundos);
};

  return (
    <div>
      <h1>Contador de vueltas</h1>
      <h3>Vuelta actual: {vuelta}</h3>
      <h3>
        Tiempo: {horas}h:{minutos}m:{segundos} s
      </h3>
       <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
      <h3>Tiempo ultima vuelta: {ultimaVuelta} segundos</h3>
    </div>
  );
}
