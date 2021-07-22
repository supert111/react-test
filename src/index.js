// import React from "react";
// import ReactDOM from 'react-dom';
// import App from "./App";

// ReactDOM.render(
//    <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   ,
//   document.getElementById('root')
// );



import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
      {/* <PersistGate loading={'loading'} persistor={store.persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);