

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
//import { useNotification } from "../../context/NotificationContext";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
function ItemListContainer({greetings}) {
    const {categoryId} = useParams()
    //const {setNotification} = useNotification()  
    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);


    if(loading) {
      return (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Cargando productos...
        </h3>
      );
      //setNotification("warning", `Cargando productos...`);
    }

    if(error) {
      return (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
          }}
        >
          Error al cargar los productos
        </h3>
      );
    }

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer
