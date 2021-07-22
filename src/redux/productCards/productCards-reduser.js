import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';

const cards = createReducer([  
      {id: 'id-1', img: 'Rosie Simpson', text: 'the best product', price: '4'},
      {id: 'id-2', img: 'Rosie Simpson', text: 'the best product', price: '4'},
      {id: 'id-3', img: 'Rosie Simpson', text: 'the best product', price: '4'},
      {id: 'id-4', img: 'Rosie Simpson', text: 'the best product', price: '4'},
      {id: 'id-5', img: 'Rosie Simpson', text: 'the best product', price: '4'},
      {id: 'id-6', img: 'Rosie Simpson', text: 'the best product', price: '4'},
]);

export default combineReducers({
    cards,
})