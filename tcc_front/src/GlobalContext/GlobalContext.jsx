import React, { createContext, useReducer, useEffect } from "react";

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
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.quantity += 0.5;
          }
          return item;
        }),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.quantity += 1; // Atualize para aumentar por 1
          }
          return item;
        }),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.quantity -= 1; // Atualize para diminuir por 1
          }
          return item;
        }),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
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

  // Carregar estado de login e código do usuário do localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedCodigo = localStorage.getItem("codigo");
    const loggedInStatus = localStorage.getItem("IsLoggedIn") === "true";

    if (storedEmail) {
      dispatch({ type: "SET_EMAIL", payload: storedEmail });
    }
    if (storedCodigo) {
      dispatch({ type: "SET_CODIGO", payload: storedCodigo });
    }
    if (loggedInStatus) {
      dispatch({ type: "ISLOGGED_IN", payload: loggedInStatus });
    }
  }, []);

  const setName = (name) => {
    dispatch({
      type: "SET_NAME",
      payload: name,
    });
  };

  const setEmail = (email) => {
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
    localStorage.setItem("email", email); // Salvar o email no localStorage
  };

  const setCodigo = (codigo) => {
    dispatch({
      type: "SET_CODIGO",
      payload: codigo,
    });
    localStorage.setItem("codigo", codigo); // Salvar o código no localStorage
  };

  const setIsLoggedIn = (data) => {
    dispatch({
      type: "ISLOGGED_IN",
      payload: data,
    });
    localStorage.setItem("IsLoggedIn", data); // Salva no localStorage
  };

  const setIsAdmin = (data) => {
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
        ...state,
        setIsLoggedIn,
        setIsAdmin,
        cart: state.cart,
        addToCart,
        updateCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        setCodigo,
        setEmail,
        setName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
