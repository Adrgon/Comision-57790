import { useState } from "react"

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  const [cartCount, setCartCount] = useState(5)

  const handleCount = () => {
    setCartCount( x => x+1)
  }
  return (
    <>
      <NavBar cartCount={cartCount} title="Mi Store"/>
      <button className="btn btn-primary" onClick={handleCount}>Click</button>
      <ItemListContainer greetings="Bienvenido a Super Compumundo Hiper Mega Red" />
{/*   <h1>dd</h1> */}
    </>
  )
}

export default App
