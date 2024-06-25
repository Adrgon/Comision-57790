function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Mi Tienda
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Carrito
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Producto(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.imagen} className="card-img-top" alt={props.nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">${props.precio}</p>
          <button className="btn btn-dark">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

const Productos = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Productos Destacados</h1>
      <div className="row">
        <Producto
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
          nombre="calle"
          precio={300000}
        />
        <Producto
          imagen="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
          nombre="Montaña"
          precio={500000}
        />
        <Producto
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
          nombre="carrera"
          precio={200000}
        />
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2024 Mi Tienda Online</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Productos />
      <Footer />
    </>
  );
}

export default App;
