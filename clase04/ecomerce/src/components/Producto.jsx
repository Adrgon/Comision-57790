function Producto(props) {
  return (
    <div className="product">
      <img src={props.imagen} alt={props.nombre} />
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

export default Producto;
