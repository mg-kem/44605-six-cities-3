import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Cities } from './const/cities'; // Массив городов(6)
import { Offers } from './mock/offers'; // Моковый массив предложений
import { isAuth } from './const/const'; // Вспомогательная функция для понимания, авторизован ли пользователь
import { Reviews } from './mock/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={Offers} cities={Cities} isAuth={isAuth()} reviews={Reviews} />
  </React.StrictMode>
);
