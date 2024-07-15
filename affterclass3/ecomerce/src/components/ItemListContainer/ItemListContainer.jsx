import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory,  } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const {category}  =  useParams()
    console.log(category)

    useEffect(()=>{
        if(!category){
            getProducts()
                .then((res)=>{
                    setProducts(res)
                })
                .catch((err)=>console.log(err))
        }else {
            getProductsByCategory(category)
                .then((res)=>{
                    setProducts(res)
                })
                .catch((err)=> console.log(err))
        }
    }, [category])

  return (
    <div>
        <h1>{greetings}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
