const CartItem = ({name, quantity, price}) => {
  return (
    <article>
        <header>
            <h2>{name}</h2>
        </header>
        <section>
            <p>Cantidad: {quantity}</p>
            <p>Precio x unidad: $ {price}</p>
        </section>
    </article>
  )
}

export default CartItem
