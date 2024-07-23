/* import Ejemplo from "./components/Ejemplo/Ejemplo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext"; */
import Greetings from "./rendering/Greetings";
import List from "./rendering/List";
import Button from "./rendering/Button";
import MyComponentWithLogin from "./rendering/Hoc";
import { MyComponent } from "./rendering/Hoc";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function DataFetcher({render}) {
  const data = items
  console.log(data)
  return render(data)
}


function App() {
  //const cartCount = 3;
  //const cartCount = 5;
  return (
    <>
      {/*       <BrowserRouter>
        <CartProvider>
          <NavBar title="Coder Store" />
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
        </CartProvider>
      </BrowserRouter> */}
      <Greetings isLoggedIn={true} />
      <hr />
      <List items={items} />
      <hr />
      <Button type="primary" label="Enviar" />
      <Button type="danger" label="Cancelar" />
      <hr />
      <DataFetcher
        render={(data) => (
          <div>
            {data.map((item) => (
              <p key={item.id}> {item.name} </p>
            ))}
          </div>
        )}
      />
      <hr />
      <MyComponentWithLogin message="Hola Coder" /> 
      <MyComponent message="Hola Coder" />
    </>
  );
}

export default App;
