import React, { createContext, useReducer, useState, useEffect } from "react";

const initialState = {
  IsLoggedIn: false,
  IsAdmin: false,
  cart: [],
  codigo: "",
  email: "",
  name: "",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CODIGO":
      return {
        ...state,
        codigo: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
      case "SET_NAME":
  return {
    ...state,
    name: action.payload,
  };
    case "ISADMIN_IN":
      return {
        ...state,
        IsAdmin: action.payload,
      };
    case "ISLOGGED_IN":
      return {
        ...state,
        IsLoggedIn: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity += 0.5)
            : item.quantity;
        }),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity += 0.5)
            : item.quantity;
        }),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id === action.payload
            ? (item.quantity -= 0.5)
            : item.quantity;
        }),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [email, setEmail] = useState("");

  // Carregar estado de login do localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const loggedInStatus = localStorage.getItem("IsLoggedIn") === "true";
    if (storedEmail) setEmail(storedEmail);
    if (loggedInStatus) IsLoggedIn(loggedInStatus);
  }, []);

  const Codigo = (codigo) => {
    dispatch({
      type: "SET_CODIGO",
      payload: codigo,
    });
  };

  const IsLoggedIn = (data) => {
    dispatch({
      type: "ISLOGGED_IN",
      payload: data,
    });
    localStorage.setItem("IsLoggedIn", data); // Salva no localStorage
  };

  const IsAdmin = (data) => {
    dispatch({
      type: "ISADMIN_IN",
      payload: data,
    });
  };

  const addToCart = (data) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { data },
    });
  };

  const updateCart = (id) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        IsLoggedIn,
        IsAdmin,
        AdminStatus: state.IsAdmin,
        LoginStatus: state.IsLoggedIn,
        cart: state.cart,
        addToCart,
        updateCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        Codigo,
        email,
        setEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
