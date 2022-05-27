import { createSlice } from '@reduxjs/toolkit';
import { convertCurrency } from '../../utils';
import { BalanceState, StateCurrency } from '../../types';

const initialState: BalanceState = {
  total: 8600,
  loading: true,
  rates: {
    dolar: {
      compra: '205.00',
      fecha: '2022/05/25 22:35:48',
      venta: '208.00',
    },
    crypto: {
      bitcoin: {
        usd: 29771,
      },
      tether: {
        usd: 0.999976,
      },
      ethereum: {
        usd: 1962.95,
      },
      dai: {
        usd: 1.001,
      },
      solana: {
        usd: 48.59,
      },
    },
  },
  currencies: [
    {
      icon: 'https://cdn4.iconfinder.com/data/icons/flat-circle-flag/182/circle_flag_argentina-512.png',
      symbol: 'ARS',
      name: 'Argentine peso',
      local: 20000,
      usd: 98,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
      symbol: 'BTC',
      name: 'Bitcoin',
      local: 0.26062011,
      usd: 2011,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
      symbol: 'ETH',
      name: 'Ether',
      local: 0.09000051,
      usd: 1212,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
      symbol: 'SOL',
      name: 'Solana',
      local: 1.200007,
      usd: 53,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
      symbol: 'USDT',
      name: 'Tether USD',
      local: 200.0,
      usd: 199,
    },
    {
      icon: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
      symbol: 'DAI',
      name: 'DAI',
      local: 400.0,
      usd: 201,
    },
  ],
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, { payload }) => {
      const { currencies } = payload;

      const updatedUsdInCurrencies: StateCurrency[] = currencies.map(
        (currency: StateCurrency) => {
          return {
            ...currency,
            usd: convertCurrency(
              currency.symbol,
              currency.local,
              state.rates.crypto,
              state.rates.dolar,
            ),
          };
        },
      );

      const totalUsd = updatedUsdInCurrencies
        .map((currency: StateCurrency) => currency.usd)
        .reduce((a, b) => a + b);

      state.currencies = updatedUsdInCurrencies;
      state.total = totalUsd;
      state.loading = false;
    },
    setLastRates: (state, { payload }) => {
      const { exchangeRates, dolarBlueRate } = payload;
      const newRates = {
        crypto: {
          ...exchangeRates,
        },
        dolar: {
          ...dolarBlueRate,
        },
      };
      state.rates = newRates;
    },
    setSwap: (state, { payload }) => {
      const { from, fromAmount, to, toAmount } = payload;

      const updatedCurrencies = state.currencies.map(currency => {
        if (currency.symbol === from) {
          const updatedLocalBalance = currency.local - fromAmount;
          const modifiedCurrency = {
            ...currency,
            local: updatedLocalBalance,
            usd: (updatedLocalBalance * currency.usd) / currency.local,
          };
          return modifiedCurrency;
        } else if (currency.symbol === to) {
          const updatedLocalBalance = currency.local + toAmount;
          const modifiedCurrency = {
            ...currency,
            local: updatedLocalBalance,
            usd: (updatedLocalBalance * currency.usd) / currency.local,
          };
          return modifiedCurrency;
        } else {
          return currency;
        }
      });

      const updatedUsdBalance = updatedCurrencies
        .map((currency: StateCurrency) => currency.usd)
        .reduce((a, b) => a + b);

      state.currencies = updatedCurrencies;
      state.total = updatedUsdBalance;
    },
  },
});

export const { setBalance, setLastRates, setSwap } = balanceSlice.actions;

export default balanceSlice.reducer;
