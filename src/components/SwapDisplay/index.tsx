import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { CurrencySymbol, StateCurrency } from '../../types';
import styles from './styles';

type SwapDisplayProps = {
  currency: StateCurrency;
  from: CurrencySymbol;
  setSwapAmount: React.Dispatch<React.SetStateAction<string>>;
  swapAmount: string;
};

const SwapDisplay: React.FC<SwapDisplayProps> = ({
  from,
  swapAmount,
  currency,
  setSwapAmount,
}) => {
  return (
    <View style={styles.swapContainer}>
      <Text style={styles.swapAmount}>
        {from} {swapAmount}
      </Text>
      <Pressable
        onPress={() => {
          setSwapAmount(currency.local.toString());
        }}
      >
        <Text style={styles.swapMaxText}>Max</Text>
      </Pressable>
    </View>
  );
};

export default SwapDisplay;
