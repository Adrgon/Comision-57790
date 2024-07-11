
const ItemDetail = ({name, img, description}) => {
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail
