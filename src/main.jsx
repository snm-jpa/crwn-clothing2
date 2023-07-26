import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { UserProvider } from './contexts/user.context.jsx';
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx';
import { store, persister} from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <UserProvider>
  //       <App />
  //     </UserProvider>
  //   </BrowserRouter>
  // </React.StrictMode>,
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
          {/* <CartProvider>  */}
            <App />
          {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
    </PersistGate>
  </Provider>,
)
