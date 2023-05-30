import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
} from "./actionTypes";

// const initialState = {
//   items: [],
// };

const ShoppinReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        // if the item is already in the cart, we just update the quantity or push
        // a new item to the items array
        items: state.items.some((item) => item._id === action.payload._id)
          ? state.items.map((item) =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.items, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.map((product) =>
          product._id === action._id
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((product) =>
          product._id === action._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        items: state.items.map((product) =>
          product._id === action._id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        items: state.items.map((product) =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
export { ShoppinReducer };
