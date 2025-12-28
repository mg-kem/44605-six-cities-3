import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Offers } from './mock/offers';
import { authorizationStatus } from './const/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={Offers} authorizationStatus={authorizationStatus()} />
  </React.StrictMode>
);
