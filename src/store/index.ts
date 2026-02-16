import { offersReducer } from './slices/offersSlice';
import { userReducer } from './slices/userSlice';
import { favoriteOffersReducer } from './slices/favoritesSlices';
import { reviewsReducer } from './slices/reviewsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import reducer from './reducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  favoriteOffers: favoriteOffersReducer,
  reviews: reviewsReducer,
  user: userReducer,
  appReducer: reducer,
});

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});


export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
