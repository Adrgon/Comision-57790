import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    
    
    useEffect(()=>{
      //setLoading(true)
      const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      //console.log(asyncFunctions)
      asyncFunctions(categoryId)
      .then((res) =>{
        setProducts(res)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(()=>{
        setLoading(false);
      })
    },[categoryId])

    if(loading) {
      return <h3 style={{color: "white", backgroundColor: "red", textAlign: "center"}}>Cargando productos...</h3>
    }

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer
