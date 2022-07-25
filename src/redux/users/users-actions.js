import types from './users-types';

export const orderUser = (payload) => ({
   type: types.ORDERED,
   payload,
});