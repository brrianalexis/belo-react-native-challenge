import * as React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '@coingecko/cryptoformat';
import styles from './styles';
import { CurrencySymbol, StateCurrency } from '../../types';

type SwapConfirmationDetailsProps = {
  fromCurrency: StateCurrency;
  swapAmount: number;
  swapResult: number;
  toSymbol: CurrencySymbol;
};

const SwapConfirmationDetails: React.FC<SwapConfirmationDetailsProps> = ({
  fromCurrency,
  swapAmount,
  swapResult,
  toSymbol,
}) => {
  return (
    <>
      <View style={styles.swapFor}>
        <Text style={{ ...styles.text, ...styles.swapForTitle }}>For:</Text>
        <View style={styles.swapForDetails}>
          <View style={styles.swapForCurrency}>
            <Text style={{ ...styles.text, ...styles.swapForIcon }}>
              {fromCurrency.icon}
            </Text>
            <Text style={{ ...styles.text, ...styles.swapForText }}>
              {fromCurrency.name}
            </Text>
          </View>
          <Text style={{ ...styles.text, ...styles.swapForText }}>
            {formatCurrency(swapAmount, fromCurrency.symbol)}
          </Text>
        </View>
      </View>
      <View style={styles.exchangeRate}>
        <Text style={{ ...styles.text, ...styles.exchangeRateText }}>Rate</Text>
        <Text style={{ ...styles.text, ...styles.exchangeRateValue }}>
          {`1 ${toSymbol} = ${formatCurrency(
            swapAmount / swapResult,
            fromCurrency.symbol,
          )}`}
        </Text>
      </View>
      <View style={styles.exchangeRate}>
        <Text style={{ ...styles.text, ...styles.exchangeRateText }}>Fee</Text>
        <Text style={{ ...styles.text, ...styles.exchangeRateValue }}>
          1% = {formatCurrency(swapAmount * 0.01, fromCurrency.symbol)}
        </Text>
      </View>
    </>
  );
};

export default SwapConfirmationDetails;
