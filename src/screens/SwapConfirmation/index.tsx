import * as React from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../hooks';
import { setSwap } from '../../redux/slices';
import {
  Button,
  SwapConfirmationDetails,
  SwapConfirmationHeader,
} from '../../components';
import { SwapConfirmationScreenProps } from '../../types';
import styles from './styles';

const SwapConfirmationScreen: React.FC<SwapConfirmationScreenProps> = ({
  navigation,
  route,
}) => {
  const { swapAmount, swapResult, fromCurrency, toCurrency } = route.params;
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    //?   simulate a failed swap by setting this to false
    const swapWillSucceed = true;
    if (swapWillSucceed) {
      dispatch(
        setSwap({
          from: fromCurrency.symbol,
          fromAmount: swapAmount,
          to: toCurrency.symbol,
          toAmount: swapResult,
        }),
      );
      navigation.navigate('SwapStatus', {
        fromAmount: swapAmount,
        fromCurrency,
        status: 'Successful',
        swapResult,
        toCurrency,
      });
    } else {
      navigation.navigate('SwapStatus', {
        fromAmount: swapAmount,
        fromCurrency,
        status: 'Failed',
        swapResult,
        toCurrency,
      });
    }
  };

  return (
    <View style={styles.screen}>
      <SwapConfirmationHeader
        icon={toCurrency.icon}
        symbol={toCurrency.symbol}
        result={swapResult}
      />
      <SwapConfirmationDetails
        fromCurrency={fromCurrency}
        swapAmount={swapAmount}
        swapResult={swapResult}
        toSymbol={toCurrency.symbol}
      />
      <View style={styles.actionsContainer}>
        <Button
          type='secondary'
          text='Cancel'
          handlePress={() => navigation.navigate('Swap')}
        />
        <Button type='primary' text='Confirm' handlePress={handleConfirm} />
      </View>
    </View>
  );
};

export default SwapConfirmationScreen;
