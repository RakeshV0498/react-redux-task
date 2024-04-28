const initialState = {
  cartProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, qty: 1 }],
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
        cartProducts: state.cartProducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
