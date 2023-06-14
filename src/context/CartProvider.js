import { useReducer, useContext, useCallback, createContext } from "react";
// import { ShoppinReducer } from "../reducers/reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  EMPTY_CART,
  APPLY_DISCOUNT,
} from "../reducers/actionTypes";
import { useEffect } from "react";

const CartContext = createContext();

const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  items: savedCart ? savedCart.items : [],
  total: savedCart ? savedCart.total : 0,
};

const ShoppinReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedState = {
        ...state,
        items: state.items.some((item) => item._id === action.payload._id)
          ? state.items.map((item) =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.cost,
      };
      localStorage.setItem("cart", JSON.stringify(updatedState)); // Save the updated cart to localStorage
      return updatedState;

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((product) => product._id !== action._id),
        total: state.total - action.payload.cost,
      };

    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((product) =>
          product._id === action._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
        total: state.total + action.cost,
      };
    case SUB_QUANTITY:
      return {
        ...state,
        // if the quantity is 1, we remove the item from the cart
        items: state.items.map((product) =>
          product._id === action._id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
        total: state.total - action.cost,
      };

    case EMPTY_CART:
      return {
        ...state,
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShoppinReducer, initialState);

  //   const addToCart = useCallback(
  //     (product) => {
  //       dispatch({ type: ADD_TO_CART, product });
  //     },
  //     [dispatch]
  //   );
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
    saveCartToLocalStorage(); // Save the cart to localStorage
  };

  // Add the saveCartToLocalStorage function
  const saveCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(state));
  };

  const removeFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  const incrementQuantity = (product) => {
    dispatch({ type: ADD_QUANTITY, ...product });
  };
  const decrementQuantity = (product) => {
    dispatch({ type: SUB_QUANTITY, ...product });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  const getQuantity = (id) => {
    const item = state.items.find((item) => item._id === id);
    return item ? item.quantity : 0;
  };

  // Update the state after each action
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,

        getQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
