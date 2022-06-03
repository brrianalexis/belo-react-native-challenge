import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { HomeScreenProps } from '../../types';
import { useAppDispatch, useApi, useBalance } from '../../hooks';
import { setBalance, setLastRates } from '../../redux/slices';
import { CurrencyCard, HomeActions, HomeHeader } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();
  const { useGetExchangeRatesQuery, useGetDolarBlueRateQuery } = useApi();
  const { balance } = useBalance();
  const { currencies, loading } = balance;

  const { data: exchangeRates } = useGetExchangeRatesQuery();
  const { data: dolarBlueRate } = useGetDolarBlueRateQuery();

  React.useEffect(() => {
    console.log('💥');
    console.log(exchangeRates);
    console.log(dolarBlueRate);
    if (exchangeRates !== undefined && dolarBlueRate !== undefined) {
      dispatch(
        setLastRates({
          exchangeRates,
          dolarBlueRate,
        }),
      );
      dispatch(
        setBalance({
          currencies,
        }),
      );
    }
  }, [exchangeRates, dolarBlueRate]);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor='' />
      <HomeHeader balance={balance} loading={loading} />
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
          loading={loading}
        />
      ))}
    </SafeAreaView>
  );
};

export default HomeScreen;
