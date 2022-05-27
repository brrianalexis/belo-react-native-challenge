import { ExchangeRates } from './api.types';
import { CurrencySymbol } from './currencies.types';

export type StateCurrency = {
  icon: string;
  symbol: CurrencySymbol;
  name: string;
  local: number;
  usd: number;
};

type DolarBlueRate = {
  dolar: {
    compra: string;
    fecha: string;
    venta: string;
  };
};

type CryptoRates = {
  crypto: ExchangeRates;
};

export type BalanceState = {
  total: number;
  loading: boolean;
  rates: CryptoRates & DolarBlueRate;
  currencies: StateCurrency[];
};
