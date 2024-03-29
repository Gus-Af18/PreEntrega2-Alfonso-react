import cart from "./assets/cart.svg";

import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="cart">
      <img src={cart} alt="cart-widget" />
      {totalQuantity}
    </div>
  );
};

export default CartWidget;
