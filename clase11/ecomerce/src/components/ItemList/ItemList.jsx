import Item from "../Item/Item"
import "./ItemList.css";
const ItemList = ({products}) => {
  //console.log(products)
  return (
    <div className="grid">
        {products.map( product => <Item product={product} key={product.id} />)}        
    </div>
  )
}

export default ItemList
