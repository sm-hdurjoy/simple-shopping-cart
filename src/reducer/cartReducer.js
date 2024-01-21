export const cartReducer = (state, action) => {
  const { type, payload } = action; // destructuring assignment to extract the type and payload properties from the action object.

  switch (type) {
    case "ADD_TO_CART": // case to handle when the Add To Cart button clicked
      return { ...state, cartList: payload.products }; // updating the cartList after adding a product to the cart

    case "REMOVE_FROM_CART": // case to handle when remove from cart button clicked
      return { ...state, cartList: payload.products }; // updating the cartList after removing a product from the cart

    case "UPDATE_TOTAL": // case to update the value
      return { ...state, total: payload.total }; // updating the total value of the products in the cartList

    default:
      throw new Error("No Case Found In cartReducer");
  }
};
