import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import { CurrencySymbol } from '../../types';
import styles from './styles';

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
      <Text style={{ ...styles.text, ...styles.title }}>Confirm your swap</Text>
      <Text style={{ ...styles.text, ...styles.subtitle }}>
        You'll receive:
      </Text>
      <View style={styles.result}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={{ ...styles.text, ...styles.resultText }}>
          {formatCurrency(result, symbol)}
        </Text>
      </View>
    </>
  );
};

export default SwapConfirmationHeader;
