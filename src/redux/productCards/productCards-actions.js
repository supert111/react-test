import types from './productCards-types';

export const addProduct = (payload) => ({
   type: types.ADD_PRODUCT_TO_CART,
   payload,
});

export const buttonReset = (payload) => ({
   type: types.BUTTON_RESET,
   payload,
});