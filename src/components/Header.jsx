// Library imports
import { Link, NavLink } from "react-router-dom";

// Component imports
import { useCart } from "../context/CartContext";

// Asset imports
import Logo from "../assets/logo.png";

// Style imports
import "./Header.css";

export const Header = () => {
  const { cartList } = useCart(); // accessing cartList from Context API

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopping Cart Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
