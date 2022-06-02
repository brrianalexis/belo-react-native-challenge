import * as React from 'react';
import { Image, Text, View } from 'react-native';
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
      <Image
        style={styles.icon}
        source={{
          uri: icon,
        }}
      />
      <View style={styles.currencyNames}>
        <Text style={{ ...styles.currencyFullName, ...styles.text }}>
          {currencyName}
        </Text>
        <Text style={styles.text}>{currencySymbol}</Text>
      </View>
      <View style={styles.currencyBalanceContainer}>
        <Text style={styles.text} testID={`${currencySymbol}-balance`}>
          {formatCurrency(currencyBalance, currencySymbol)}
        </Text>
        <Text style={styles.text}>
          {loading ? 'Loading...' : formatCurrency(currencyUsd, 'USD')}
        </Text>
      </View>
    </View>
  );
};

export default CurrencyCard;
