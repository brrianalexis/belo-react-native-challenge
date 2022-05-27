import * as React from 'react';
import { Alert, View } from 'react-native';
import {
  Button,
  SwapStatusCard,
  SwapStatusDisplay,
  SwapStatusHeader,
  TransactionId,
} from '../../components';
import { SwapStatusScreenProps } from '../../types';
import styles from './styles';

const SwapStatusScreen: React.FC<SwapStatusScreenProps> = ({
  navigation,
  route,
}) => {
  const { fromAmount, fromCurrency, status, toCurrency, swapResult } =
    route.params;

  return (
    <View style={styles.screen}>
      <SwapStatusHeader />
      <SwapStatusDisplay toIcon={toCurrency.icon} status={status} />
      <SwapStatusCard
        fromAmount={fromAmount}
        fromCurrency={fromCurrency}
        swapResult={swapResult}
        toCurrency={toCurrency}
        status={status}
      />
      <TransactionId />
      <Button
        type='secondary'
        fullWidth
        text='FAQ'
        handlePress={() => Alert.alert('Not implemented')}
      />
      <Button
        type='primary'
        fullWidth
        text='Done'
        handlePress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SwapStatusScreen;
