import { createStore, combineReducers } from 'redux';
import {rout}
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
})

// const store = createStore(rootReducer)

// const cards = createReducer([  
//       {id: 'id-1', img: 'Rosie Simpson', text: 'the best product', price: '4'},
//       {id: 'id-2', img: 'Rosie Simpson', text: 'the best product', price: '4'},
//       {id: 'id-3', img: 'Rosie Simpson', text: 'the best product', price: '4'},
//       {id: 'id-4', img: 'Rosie Simpson', text: 'the best product', price: '4'},
//       {id: 'id-5', img: 'Rosie Simpson', text: 'the best product', price: '4'},
//       {id: 'id-6', img: 'Rosie Simpson', text: 'the best product', price: '4'},
// ]);

export default rootReducer;