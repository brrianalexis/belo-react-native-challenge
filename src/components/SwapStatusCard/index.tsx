import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import styles from './styles';
import { StateCurrency } from '../../types';

type SwapStatusCardProps = {
  fromCurrency: StateCurrency;
  toCurrency: StateCurrency;
  fromAmount: number;
  swapResult: number;
};

const SwapStatusCard: React.FC<SwapStatusCardProps> = ({
  fromCurrency,
  fromAmount,
  swapResult,
  toCurrency,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.text}>{fromCurrency.name} used</Text>
        <Text style={styles.text}>
          {formatCurrency(fromAmount, fromCurrency.symbol)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>
          {fromCurrency.symbol} per {toCurrency.symbol}
        </Text>
        <Text style={styles.text}>
          {formatCurrency(fromAmount / swapResult, fromCurrency.symbol)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.total}>Total {toCurrency.symbol}</Text>
        <Text style={styles.total}>
          {formatCurrency(swapResult, toCurrency.symbol)}
        </Text>
      </View>
    </View>
  );
};

export default SwapStatusCard;
