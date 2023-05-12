import { createContext, useContext, useReducer } from "react";
import useSWR from "swr";
// import { fetchProducts, createProduct } from "../services/api-calls";
import { fetchProducts } from "../services/api-calls";

const Contextapi = createContext({});

// const initialState = {
//   data: [],
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.data];
    default:
      break;
  }
};
export const ContextApi = ({ children }) => {
  // const [products, dispatch] = useReducer(reducer, []);
  const [dispatch] = useReducer(reducer, []);
  const { data, mutate, isLoading, error } = useSWR("/products", fetchProducts);

  return (
    <Contextapi.Provider
      value={{
        products: data,
        isLoading,
        error,
        dispatch,
        mutateProducts: mutate,
      }}
    >
      {children}
    </Contextapi.Provider>
  );
};

export const useStore = () => useContext(Contextapi);

export default Contextapi;
