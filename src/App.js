import { Suspense, lazy } from 'react';
import { Component } from "react";
import AppBar from './components/AppBar/AppBar';
import { app } from './firebase/firebaseConfig';

import { Route, Routes } from 'react-router-dom';
import routes from './routes';

const HomePageViews = lazy(() =>
    import('./views/HomePageViews' /* webpackChunkName: "home-view" */),
);

const CartPageView = lazy(() =>
    import('./views/CartPageViews' /* webpackChunkName: "cart-view" */),
);

const NotFoundView = lazy(() =>
    import('./views/NotFoundView' /* webpackChunkName: "not-view" */),
);

class App extends Component { 

  render() {
    return (
      <div className="App"> 
      <AppBar />

       <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={routes.home} element={<HomePageViews/>} /> 
          <Route path={routes.cart} element={<CartPageView/>} />
          <Route element={<NotFoundView/>} />
        </Routes>
      </Suspense> 
      </div>
    );
  }
}
export default App;
