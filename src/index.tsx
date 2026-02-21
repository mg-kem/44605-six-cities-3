import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
// import { store } from './store/store';
import store from './store/index';
import { Provider } from 'react-redux';
// import { checkAuthLoginAction, fetchOffersAction } from './store/async-actions';
import { fetchOffersAsyncAction } from './store/thunks/offers';
import { checkAuthLoginAsyncAction } from './store/thunks/user';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAsyncAction()); // Запрос на сервер для получения списка предложений
store.dispatch(checkAuthLoginAsyncAction()); // Запрос на сервер авторизации пользователя

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
