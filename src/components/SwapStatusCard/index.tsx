import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import styles from './styles';
import { StateCurrency } from '../../types';

type SwapStatusCardProps = {
  fromCurrency: StateCurrency;
  toCurrency: StateCurrency;
  fromAmount: number;
  status: 'Successful' | 'Failed';
  swapResult: number;
};

const SwapStatusCard: React.FC<SwapStatusCardProps> = ({
  fromCurrency,
  fromAmount,
  status,
  swapResult,
  toCurrency,
}) => {
  return (
    <View
      style={{
        ...styles.card,
        ...(status === 'Successful' ? styles.successCard : styles.failureCard),
      }}
    >
      <View style={styles.row}>
        <Text
          style={{
            ...styles.left,
            ...styles.text,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          {fromCurrency.symbol} used
        </Text>
        <Text
          style={{
            ...styles.right,
            ...styles.text,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          {formatCurrency(fromAmount, fromCurrency.symbol)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            ...styles.left,
            ...styles.text,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          {fromCurrency.symbol} per {toCurrency.symbol}
        </Text>
        <Text
          style={{
            ...styles.right,
            ...styles.text,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          {formatCurrency(fromAmount / swapResult, fromCurrency.symbol)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={{
            ...styles.left,
            ...styles.total,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          Total {toCurrency.symbol}
        </Text>
        <Text
          style={{
            ...styles.right,
            ...styles.total,
            ...(status === 'Successful'
              ? styles.successText
              : styles.failureText),
          }}
        >
          {formatCurrency(swapResult, toCurrency.symbol)}
        </Text>
      </View>
    </View>
  );
};

export default SwapStatusCard;
