import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import MainLayout  from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';
import About from './components/views/About/About';
import Contact from './components/views/Contact/Contact';
import NotFound from './components/views/NotFound/NotFound';
import Cart from './components/features/Cart/CartContainer';
import ProductView from './components/views/ProductView/ProductViewContainer';
import Checkout from './components/views/Checkout/CheckoutContainer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/products/:id" component={ProductView} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
