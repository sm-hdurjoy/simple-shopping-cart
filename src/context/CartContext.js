// Library imports
import { createContext, useContext, useReducer } from "react";

// Component imports
import { cartReducer } from "../reducer/cartReducer";

// initial state values for global state management
const initialState = {
  cartList: [], // variable to store product that has been added to the cart
  total: 0, // variable for the total price of the products added in the cart
};

const CartContext = createContext(initialState); // creating a context object

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState); // useReducer hook to the state/values of the cart

  // function to add products in to the cart and update total price
  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product); // concatenating the products which are added to the cart into updatedCartList

    updateTotal(updatedCartList); // updating the total value of the products added into the cart

    // dispatching an action to update the cartList after adding a product
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  // function to remove products in to the cart and update total price
  const removeFromCart = (product) => {
    // removing the products which are removed from the cart into updatedCartList
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );

    updateTotal(updatedCartList); // updating the total value of the products after removing products from the cart

    // dispatching an action to update the cartList after removing a product
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  // function to count the total price of the producs added/removed to/from the cart
  const updateTotal = (products) => {
    let total = 0; // initial value of the products set to zero

    // adding the values of all the products in the cartList
    products.forEach((product) => {
      total = total + product.price;
    });

    // dispatching an action to update the price  after adding/removing a product
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total: total,
      },
    });
  };

  // variable containing the values which are provided to the entire APP through context API
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// function to use the values provided by Context API throughout the APP
export const useCart = () => {
  return useContext(CartContext);
};
