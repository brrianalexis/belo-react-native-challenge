import * as React from 'react';
import { Text, View } from 'react-native';
import { HomeScreenProps } from '../../types';
import { useAppDispatch, useApi, useBalance } from '../../hooks';
import { setBalance } from '../../redux/slices';
import { CurrencyCard, HomeActions, HomeHeader } from '../../components';
import styles from './styles';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const { useGetExchangeRatesQuery, useGetDolarBlueRateQuery } = useApi();
  const { balance } = useBalance();
  const { currencies } = balance;

  const {
    data: exchangeRates,
    // error: exchangeRatesError,
    // isLoading: exchangeRatesLoading,
  } = useGetExchangeRatesQuery();
  const {
    data: dolarBlueRate,
    // error: dolarBlueError,
    // isLoading: dolarBlueLoading,
  } = useGetDolarBlueRateQuery();

  React.useEffect(() => {
    if (exchangeRates !== undefined && dolarBlueRate !== undefined) {
      dispatch(
        setBalance({
          currencies: currencies,
          rates: exchangeRates,
          dolarRate: dolarBlueRate,
        }),
      );
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRates, dolarBlueRate]);

  //TODO    implementar loaders
  return (
    <View style={styles.screen}>
      <HomeHeader balance={balance} />
      <HomeActions />
      <Text style={styles.currenciesTitle}>Currencies</Text>
      {currencies.map(currency => (
        <CurrencyCard
          key={currency.symbol}
          icon={currency.icon}
          currencyName={currency.name}
          currencyBalance={currency.local}
          currencyUsd={currency.usd}
          currencySymbol={currency.symbol}
        />
      ))}
    </View>
  );
};

export default HomeScreen;
