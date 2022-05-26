import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import styles from './styles';
import { CurrencySymbol } from '../../types';

type SwapConfirmationHeaderProps = {
  result: number;
  icon: string;
  symbol: CurrencySymbol;
};

const SwapConfirmationHeader: React.FC<SwapConfirmationHeaderProps> = ({
  icon,
  result,
  symbol,
}) => {
  return (
    <>
      <Text style={styles.title}>Confirm your swap</Text>
      <Text style={styles.subtitle}>You'll receive:</Text>
      <View style={styles.result}>
        <Text style={styles.resultIcon}>{icon}</Text>
        <Text style={styles.resultText}>{formatCurrency(result, symbol)}</Text>
      </View>
    </>
  );
};

export default SwapConfirmationHeader;