import Ejemplo from "./components/Ejemplo/Ejemplo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext } from "react";

export const Contexto = createContext()

function App() {
  //const cartCount = 3;
  const cartCount = 5;
  return (
    <BrowserRouter>
      <Contexto.Provider value={10} >
        <NavBar cartCount={cartCount} title="Coder Store" />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detail/:productId"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/ejemplo" element={<Ejemplo />} />

          <Route path="*" element={<h1>:( 404 Not found</h1>} />
        </Routes>
      </Contexto.Provider>
    </BrowserRouter>
  );
}

export default App;
