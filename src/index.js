import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BasketProvider } from './context/basketContext';
import { FilterProvider } from './context/filterContext';
import { ProductProvider } from './context/productContext';
import { CategoryProvider } from './context/categoryContext';
import { AuthProvider } from './context/authContext';
import { SearchProvider } from './context/searchContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const compose = (providers) => providers.reduce((Prev, Curr) => ({ children }) => (
  <Prev>
    <Curr>{children}</Curr>
  </Prev>
));

const Provider = compose([AuthProvider, ProductProvider, BasketProvider, FilterProvider, CategoryProvider, SearchProvider])
root.render(
  <Provider>
    <App />
  </Provider>
);
