import { ADD_TO_CART, REMOVE_FROM_CART, SET_TO_CART } from '../actions';

const INITIAL_STATE = {
  cartProducts: [],
};

const handleSetQuantity = (cartItem, action) => (cartItem.id === action.payload.id
  ? { ...cartItem, quantity: action.payload.quantity }
  : cartItem);

const handleAddToCart = (state, action) => {
  if (
    !state.cartProducts.find((cartItem) => cartItem.id === action.payload.id)
  ) {
    return {
      ...state,
      cartProducts: [...state.cartProducts, action.payload],
    };
  }
  return {
    cartProducts: state.cartProducts
      .map((cartItem) => handleSetQuantity(cartItem, action)),
  };
};

const handleRemoveFromCart = (state, action) => {
  if (
    !(
      state.cartProducts.find((cartItem) => cartItem.id === action.payload.id)
        .quantity - 1
    )
  ) {
    return {
      cartProducts: state.cartProducts.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      ),
    };
  }
  return {
    cartProducts: state.cartProducts.map((cartItem) => (cartItem.id === action.payload.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem)),
  };
};

const handleSetToCart = (state, action) => {
  const currentItemOnStore = state.cartProducts.find(
    (cartItem) => cartItem.id === action.payload.id,
  );
  if (!currentItemOnStore) {
    return {
      ...state,
      cartProducts: [...state.cartProducts, action.payload],
    };
  }
  if (!action.payload.quantity) {
    return {
      cartProducts: state.cartProducts.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      ),
    };
  }
  return {
    cartProducts: state.cartProducts
      .map((cartItem) => handleSetQuantity(cartItem, action)),
  };
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return handleAddToCart(state, action);
  case REMOVE_FROM_CART:
    return handleRemoveFromCart(state, action);
  case SET_TO_CART:
    return handleSetToCart(state, action);
  default:
    return state;
  }
};

export default cart;
