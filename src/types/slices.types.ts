import { CurrencySymbol } from './currencies.types';

export type StateCurrency = {
  icon: string;
  symbol: CurrencySymbol;
  name: string;
  local: number;
  usd: number;
};

export type BalanceState = {
  total: number;
  currencies: StateCurrency[];
};
