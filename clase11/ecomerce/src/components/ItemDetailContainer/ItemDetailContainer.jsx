import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
// tomar de la url el id
const [product, setProduct] = useState(null)
const {productId} = useParams()
//console.log(productId)
useEffect(() => {
  getProductById(productId)
    .then((res) => {
      console.log(res);
      setProduct(res);
    })
    .catch((err) => console.log(err));
}, [productId]);

  return (
<>
    <ItemDetail {...product} />
</>
  );
}

export default ItemDetailContainer
