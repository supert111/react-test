import { 
    persistStore,
    // persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
  } from 'redux-persist';
//   import storage from 'redux-persist/lib/storage';
  import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
  import cardsReducer from './productCards/productCards-reduser';
//   import authReduser from './auth/auth-reducer';
  import logger from 'redux-logger';
  
  
  const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }, 
  }), logger]
  
//   const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
//   };
  
  const store = configureStore({
    reducer: { state: cardsReducer, },
    //   auth: persistReducer(authPersistConfig, authReduser) },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });
  
  const persistor = persistStore(store);
  
  export default {store, persistor};