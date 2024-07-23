import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {
// tomar de la url el id
const [product, setProduct] = useState(null)
const [loading, setLoading] = useState(true)
const {productId} = useParams()
//console.log(productId)
useEffect(() => {
  getProductById(productId)
    .then((res) => {
      //console.log(res);
      setProduct(res);
    })
    .catch((err) => console.log(err))
    .finally(()=> {
      setLoading(false)
    })
}, [productId]);


/* if(loading){
  return <h3>Cargando producto...</h3>
} */

  return (
<div className="ItemDetailContainer">
    {loading ? <h3>Cargando...</h3> :  <ItemDetail {...product} />}
</div>
  );
}

export default ItemDetailContainer
