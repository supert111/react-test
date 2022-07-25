import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './productCards/productCards-reduser';
import defaultUser from './usersDefault/usersDefault-reduser';
import users from './users/users-reduser';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
    products,
    defaultUser,
    users,

})

const persistedState = localStorage.getItem('state') 
 ? JSON.parse(localStorage.getItem('state'))
 : {};

let store = createStore(rootReducer, persistedState, composeWithDevTools(composeEnhancer(applyMiddleware(thunk))));

store.subscribe(()=>{
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store;