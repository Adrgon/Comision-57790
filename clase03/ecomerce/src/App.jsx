
function Nav(){
  return (
    <nav>
      <div className="logo">Mi Tienda</div>
      <ul className="nav-links">
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

function Producto(props){
  return (
    <div className="product">
      <img
        src={props.imagen}
        alt={props.nombre}
      />
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

const Productos = () => {
  return (
    <section className="products">
      <h1>Productos Destacados</h1>
      <div className="product-grid">
        <Producto
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
          nombre="Calle"
          precio={300000}
        />
        <Producto
          imagen="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
          nombre="Montaña"
          precio={500000}
        />
        <Producto
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
          nombre="Carrera"
          precio={200000}
        />

      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
        <p>&copy; 2024 Mi Tienda Online</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Productos />
      <Footer />
    </>
  )
}


export default App
