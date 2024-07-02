const Item = ({product}) => {
    //console.log(product)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Item
