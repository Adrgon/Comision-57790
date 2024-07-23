import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";


function App() {
  //const cartCount = 3;
  const [view, setView] = useState('list')
  return (
    <>
      {/* 
      <NavBar 
      cartCount={cartCount} 
      title="Coder Store" /> 
      */}
      <button onClick={() => setView("list")}>List</button>
      <button onClick={() => setView("detail")}>Detail</button>
      <button onClick={() => setView("cart")}>Cart</button>

      {view === "list" && (
        <div>
          <h1>Listado de productos</h1>
          <p>lorem ipsun dolor sit</p>
        </div>
      )}

      {view === "detail" && (
        <div>
          <h1>Detalle de producto</h1>
          <p>lorem ipsun dolor sit</p>
        </div>
      )}

      {view === "cart" && (
        <div>
          <h1>Carrito de compras</h1>
          <p>lorem ipsun dolor sit</p>
        </div>
      )}
    </>
  );
}

export default App;
