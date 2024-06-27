function Nav() {
  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <a href="#" className="brand-logo">
          Mi Tienda
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Carrito</a>
        </li>
      </ul>
    </nav>
  );
}

function Producto(props) {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={props.imagen} alt={props.nombre} />
          <span className="card-title">{props.nombre}</span>
        </div>
        <div className="card-content">
          <p>${props.precio}</p>
        </div>
        <div className="card-action">
          <button className="btn blue darken-4">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

const Productos = () => {
  return (
    <div className="container">
      <h1 className="center-align">Productos Destacados</h1>
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
    <footer className="page-footer blue darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Mi Tienda Online</h5>
            <p className="grey-text text-lighten-4">
              &copy; 2024 Mi Tienda Online
            </p>
          </div>
        </div>
      </div>
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
