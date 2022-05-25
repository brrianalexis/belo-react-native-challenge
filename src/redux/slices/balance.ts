import { createSlice } from '@reduxjs/toolkit';
import { convertCurrency } from '../../utils';
import { BalanceState, StateCurrency } from '../../types';

const initialState: BalanceState = {
  total: 3774,
  currencies: [
    {
      icon: '🇦🇷',
      symbol: 'ARS',
      name: 'Argentine peso',
      local: 20000,
      usd: 98,
    },
    {
      icon: '🅱️',
      symbol: 'BTC',
      name: 'Bitcoin',
      local: 0.26062011,
      usd: 2011,
    },
    {
      icon: '🔷',
      symbol: 'ETH',
      name: 'Ether',
      local: 0.09000051,
      usd: 1212,
    },
    {
      icon: '☀️',
      symbol: 'SOL',
      name: 'Solana',
      local: 1.200007,
      usd: 53,
    },
    {
      icon: '💵',
      symbol: 'USDT',
      name: 'Tether USD',
      local: 200.0,
      usd: 199,
    },
    {
      icon: 'D',
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
      const { currencies, rates, dolarRate } = payload;

      const updatedUsdInCurrencies: StateCurrency[] = currencies.map(
        (currency: StateCurrency) => {
          return {
            ...currency,
            usd: convertCurrency(
              currency.symbol,
              currency.local,
              rates,
              dolarRate,
            ),
          };
        },
      );

      const totalUsd = updatedUsdInCurrencies
        .map((currency: StateCurrency) => currency.usd)
        .reduce((a, b) => a + b);

      state.currencies = updatedUsdInCurrencies;
      state.total = totalUsd;
    },
  },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
