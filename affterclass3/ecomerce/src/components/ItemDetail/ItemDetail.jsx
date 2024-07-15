import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:300}} />
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <ItemCount stock={stock} />

    </article>
  )
}

export default ItemDetail
