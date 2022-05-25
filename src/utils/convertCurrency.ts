import {
  CryptoName,
  CryptoSymbol,
  DolarBlueRate,
  ExchangeRates,
} from '../types';

export const mapSymbolToCurrency = {
  ARS: 'peso',
  BTC: 'bitcoin',
  ETH: 'ethereum',
  SOL: 'solana',
  USDT: 'tether',
  DAI: 'dai',
};

const convertCurrency = (
  base: string,
  value: number,
  rates: ExchangeRates,
  dolarRate: DolarBlueRate,
) => {
  let convertedValue: number;

  if (base === 'ARS') {
    convertedValue = value / +dolarRate.venta;
  } else {
    const { usd: rate } =
      rates[<CryptoName>mapSymbolToCurrency[<CryptoSymbol>base]];

    convertedValue = value * rate;
  }

  return convertedValue;
};

export default convertCurrency;
