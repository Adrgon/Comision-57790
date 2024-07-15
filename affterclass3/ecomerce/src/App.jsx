//import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={"Lista de Productos"} />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App
