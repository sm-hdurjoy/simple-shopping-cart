import "./CartCard.css";
import Image from "../assets/images/002.jpg";
import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const { name, price } = product;

  return (
    <div className="cartCard">
      <img src={Image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};
