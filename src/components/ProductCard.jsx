import "./ProductCard.css";
import Image from "../assets/images/002.jpg";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const { name, price } = product;

  useEffect(() => {
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [product.id, cartList]);

  return (
    <div className="productCard">
      <img src={Image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
