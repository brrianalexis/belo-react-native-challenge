import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DolarBlueRate, ExchangeRates } from '../../types';

const coinGeckoApi = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: builder => ({
    getExchangeRates: builder.query<ExchangeRates, void>({
      query: () =>
        'simple/price?ids=bitcoin,ethereum,solana,tether,dai&vs_currencies=usd',
    }),
  }),
});

const dolarBlueApi = createApi({
  reducerPath: 'dolarBlueApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-dolar-argentina.herokuapp.com/api/',
  }),
  endpoints: builder => ({
    getDolarBlueRate: builder.query<DolarBlueRate, void>({
      query: () => 'dolarblue',
    }),
  }),
});

export const { useGetExchangeRatesQuery } = coinGeckoApi;
export const { useGetDolarBlueRateQuery } = dolarBlueApi;

export { coinGeckoApi, dolarBlueApi };
