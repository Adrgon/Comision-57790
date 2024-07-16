import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({greetings}) {
    //console.log(getProducts())
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    
    console.log(categoryId)
    
    useEffect(()=>{
      const asyncFunctions = categoryId ? getProductsByCategory : getProducts
      console.log(asyncFunctions)
      asyncFunctions(categoryId).then((res) =>{
        setProducts(res)
      })
    },[categoryId])

  return (
    <>
      <h2>{greetings}</h2>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer
