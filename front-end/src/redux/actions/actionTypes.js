export const USER = 'USER';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';

export const user = () => ({
  type: 'USER',
});

export const saveProducts = () => ({
  type: 'SAVE_PRODUCTS',
});

export const removeProducts = () => ({
  type: 'REMOVE_PRODUCTS',
});
