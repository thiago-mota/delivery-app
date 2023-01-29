import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM, SET_TO_CART } from '.';

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const setToCart = (payload) => ({
  type: SET_TO_CART,
  payload,
});

export const removeItem = (productId) => ({
  type: REMOVE_ITEM,
  productId,
});
