import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user.context.jsx';
import { ProductProvider } from './contexts/products.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <UserProvider>
  //       <App />
  //     </UserProvider>
  //   </BrowserRouter>
  // </React.StrictMode>,

  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
)
