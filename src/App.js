import { Suspense, lazy } from 'react';
// import { useState } from 'react';
import { Component } from "react";
// import HomePageViews from './views/HomePageViews';
import AppBar from './components/AppBar/AppBar';
// import CartPageViews from './views/CartPageViews';

import { Route, Switch } from 'react-router-dom';
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
  state = {
  };

  render() {
    return (
      <div className="App"> 
      <AppBar />
      {/* <HomePageViews /> */}
      {/* <CartPageViews /> */}


       <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePageViews} /> 
          <Route path={routes.cart} component={CartPageView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense> 
      </div>

  );
  }
}
export default App;