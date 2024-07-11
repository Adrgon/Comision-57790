import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  //const cartCount = 3;
  const cartCount = 5;
  return (
    <BrowserRouter>
      
      <NavBar cartCount={cartCount} title="Coder Store" />
      
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId"
          element={<ItemListContainer />}
        />
        <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
        
        <Route 
          path="*" 
          element={<h1>:( 404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
