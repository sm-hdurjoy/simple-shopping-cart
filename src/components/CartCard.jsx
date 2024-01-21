// Component imports
import { useCart } from "../context/CartContext";

// Asset imports
import Image from "../assets/images/002.jpg";

// Style imports
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart(); // accessing removeFromCart function from Context API

  const { name, price } = product; // Destructuring name and price from products

  return (
    <div className="cartCard">
      <img src={Image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};
