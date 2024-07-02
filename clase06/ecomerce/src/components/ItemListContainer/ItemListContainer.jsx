import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({greetings}) {
    //console.log(getProducts())
    const [products, setProducts] = useState([])
    useEffect(()=>{
      getProducts().then( (res) =>{
        setProducts(res)
      })
    },[])

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer
