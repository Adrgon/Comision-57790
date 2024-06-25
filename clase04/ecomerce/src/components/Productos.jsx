import Producto from "./Producto";

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
};

export default Productos;
