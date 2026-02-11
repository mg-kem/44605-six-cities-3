import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { checkAuthLoginAction, fetchOffersAction } from './store/async-actions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthLoginAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
