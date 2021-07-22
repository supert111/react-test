import { createStore, combineReducers } from 'redux';
// import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// console.log('formReducer////////', formReducer)
const rootReducer = combineReducers({
  // routing: routerReducer,
  form: formReducer,
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

const store = createStore(rootReducer)

export default store;