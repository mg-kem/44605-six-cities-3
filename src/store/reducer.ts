import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mock/offers';
import { Cities } from '../const/cities';

// Определение начального состояния приложения
const initialState = {
  city: Cities[0].title,
  offers: Offers,
};

