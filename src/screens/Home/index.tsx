import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import { StackParams } from '../../types';
import { useAppDispatch, useApi, useBalance } from '../../hooks';
import { setBalance } from '../../redux/slices';
import { CurrencyCard, HomeActions } from '../../components';
import styles from './styles';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<StackParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { balance } = useBalance();
  const { currencies } = balance;
  const dispatch = useAppDispatch();
  const { useGetExchangeRatesQuery, useGetDolarBlueRateQuery } = useApi();

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
      <View style={styles.header}>
        <Text style={styles.title}>🙏🏻 PleaseHireMe Wallet 🙏🏻</Text>
        <Text style={styles.balance}>
          {formatCurrency(balance.total, 'USD')}
        </Text>
      </View>
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
