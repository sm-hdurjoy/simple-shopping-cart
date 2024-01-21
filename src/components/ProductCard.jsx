// Library imports
import { useEffect, useState } from "react";

// Component imports
import { useCart } from "../context/CartContext";

// Asset imports
import Image from "../assets/images/002.jpg";

// Style imports
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart(); // accessing cartList, addToCart & removeFromCart from Context API

  const [isInCart, setIsInCart] = useState(false); // state variable to check if a product is in cart or not

  const { name, price } = product; // destructuring name & price from product

  // updating isInCart whenever the cartList & product.id changes
  useEffect(() => {
    // true if the cartItem contains any products
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );

    // setting isInCart true/false depending on the productIsInCart value
    if (productIsInCart) {
      setIsInCart(true); // setting true because product is in cart
    } else {
      setIsInCart(false); // setting false because product is not in cart
    }
  }, [product.id, cartList]);

  return (
    <div className="productCard">
      <img src={Image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
