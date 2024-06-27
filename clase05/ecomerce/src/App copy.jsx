//import {useState} from 'react'
import Nav from './components/Nav'
//import Footer from './components/Footer';
//import {Footer} from './components/Footer'
import Productos from './components/Productos';
import { Header, Footer } from './components/Generico';

function Layout(props){
  console.log(props)
  return (
    <>
      {props.children}
      <h2 style={{ color: props.color }}>{props.titulo}</h2>
    </>
  );
}


function App() {  
  //let [valor, setValor] = useState(0);
  //console.log(valor)
  
  return (
    <>
{/*       <Layout titulo="Bienvenidos" color="red">
        <h1>Pagina Principal</h1>
        <p style={{color: 'blue'}}>Este es el texto explicativo</p>
      </Layout>
 */}
      {/*       

      <Header titulo="Lo de Tito" subtitulo="Las mejores bicicletas" />
      <Nav />
      <Productos />
      <Footer  /> 
*/}
    </>
  );
}



export default App
