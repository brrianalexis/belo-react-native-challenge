import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { balanceReducer, coinGeckoApi, dolarBlueApi } from './slices';

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
    [dolarBlueApi.reducerPath]: dolarBlueApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      coinGeckoApi.middleware,
      dolarBlueApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
