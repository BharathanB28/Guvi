// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [], // Initialize with the JSON data you fetched
  totalQuantity: 0,
  totalAmount: 0,
};

// CartContext.js
// ...

export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        // Implement logic to add an item to the cart
        break;
      case 'REMOVE_ITEM':
        // Implement logic to remove an item from the cart
        break;
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + action.price,
        };
      case 'DECREASE_QUANTITY':
        const itemToDecrease = state.cartItems.find(
          (item) => item.id === action.payload
        );
  
        if (itemToDecrease.quantity === 1) {
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== action.payload
            ),
            totalQuantity: state.totalQuantity - 1,
            totalAmount: state.totalAmount - action.price,
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            totalQuantity: state.totalQuantity - 1,
            totalAmount: state.totalAmount - action.price,
          };
        }
      default:
        return state;
    }
  };
  

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

