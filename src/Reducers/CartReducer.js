const initialState = {
  cartProducts: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "remove_from_cart":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "change_cart_qty":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
