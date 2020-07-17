import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Cart from './components/cart';
import GlobalStyles from './styles/global';


function App() {
  return (
    <BrowserRouter>

      <Cart />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
