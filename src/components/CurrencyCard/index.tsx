import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import styles from './styles';

type CurrencyCardProps = {
  icon: string;
  loading: boolean;
  currencyBalance: number;
  currencyUsd: number;
  currencyName: string;
  currencySymbol: string;
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  icon,
  loading,
  currencyBalance,
  currencyUsd,
  currencyName,
  currencySymbol,
}) => {
  return (
    <View style={styles.currencyCard}>
      <Text style={styles.currencyIcon}>{icon}</Text>
      <View style={styles.currencyNames}>
        <Text style={styles.currencyFullName}>{currencyName}</Text>
        <Text style={styles.currencySymbol}>{currencySymbol}</Text>
      </View>
      <View style={styles.currencyBalanceContainer}>
        <Text style={styles.balances}>
          {formatCurrency(currencyBalance, currencySymbol)}
        </Text>
        <Text style={styles.balances}>
          {loading ? 'Loading...' : formatCurrency(currencyUsd, 'USD')}
        </Text>
      </View>
    </View>
  );
};

export default CurrencyCard;
