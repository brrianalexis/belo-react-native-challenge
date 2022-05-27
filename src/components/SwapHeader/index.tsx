import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import { StateCurrency } from '../../types';
import styles from './styles';

type SwapHeaderProps = {
  currency: StateCurrency;
  error: string | null;
};

const SwapHeader: React.FC<SwapHeaderProps> = ({ currency, error }) => {
  return (
    <>
      <Text style={styles.headerTitle}>Convert {currency.name}</Text>
      <Text style={styles.headerBalance}>
        {`${formatCurrency(currency.local, currency.symbol)} available`}
      </Text>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

export default SwapHeader;
