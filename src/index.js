import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartContextProvider } from './context/CartContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
