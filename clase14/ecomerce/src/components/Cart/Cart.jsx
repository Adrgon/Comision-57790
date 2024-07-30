import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, getTotal, totalQuantity } = useCart();
    const total = getTotal()
    console.log(total)

    if(totalQuantity === 0){
        return <h1>No hay items en el carrito</h1>
    }
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3>Total: $ {total}</h3>
      <div>
        <button className="btn btn-primary">Limpiar Carrito</button>
      </div>
      <div>
        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart
