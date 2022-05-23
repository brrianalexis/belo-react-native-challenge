import {
  CryptoNames,
  CryptoSymbols,
  DolarBlueRate,
  ExchangeRates,
} from '../types';

const mapSymbolToCurrency = {
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
      rates[<CryptoNames>mapSymbolToCurrency[<CryptoSymbols>base]];

    convertedValue = value * rate;
  }

  return convertedValue;
};

export default convertCurrency;
