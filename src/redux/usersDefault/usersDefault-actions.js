import types from './usersDefault-types';

export const incremented = (payload) => ({
   type: types.INCREMENTED,
   payload,
});

export const decremented = (payload) => ({
   type: types.DECREMENTED,
   payload,
});

export const deleted = (payload) => ({
   type: types.DELETED,
   payload,
});