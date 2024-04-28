const initialState = {
  cartProducts: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.product],
        count: state.count + 1,
      };
    case "remove_from_cart":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (product) => product.id === action.id
        ),
        count: state.count - 1,
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
